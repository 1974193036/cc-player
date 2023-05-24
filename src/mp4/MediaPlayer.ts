import MP4Box, {
  MP4File,
  Log,
  MP4ArrayBuffer,
  MP4Info,
  MP4SourceBuffer,
  MP4MediaSource
} from 'mp4box'
import { FactoryObject } from '../types/dash/Factory'
import { MoovBoxInfo, MediaTrack } from '../types/mp4'
import { DownLoader } from './net/DownLoader'

class MediaPlayer {
  url: string
  video: HTMLVideoElement
  mp4boxfile: MP4File
  mediaSource: MediaSource
  mediaInfo: MoovBoxInfo
  downloader: DownLoader
  lastSeekTime: number = 0

  constructor(url: string, video: HTMLVideoElement) {
    this.url = url
    this.video = video
    this.init()
  }

  init() {
    this.mp4boxfile = MP4Box.createFile()
    this.downloader = new DownLoader(this.url)
    this.mediaSource = new MediaSource()
    this.video.src = window.URL.createObjectURL(this.mediaSource)
    this.initEvent()

    this.loadFile()
  }

  initEvent() {
    let ctx = this
    // 在'moov box'开始被解析时被调用，根据下载速度，下载整个“moov box”可能需要一段时间，解析结束的信号是onReady回调函数
    // 在解析 MP4 文件时，通常需要先解析 moov box（moov box 是 MP4 文件中的一个重要 box，包含了 MP4 文件的元数据信息），以获取 MP4 文件的元数据信息。
    this.mp4boxfile.onMoovStart = function () {
      Log.info('Application', 'Starting to parse movie information')
    }
    // 首次mp4boxfile.appendBuffer()时被触发
    // appendBuffer 是 MP4Box.js 中的一个方法，用于向【MP4Box 对象】添加 MP4 文件的数据
    // 当【MP4Box 对象】准备好处理 MP4 文件时执行 onReady
    this.mp4boxfile.onReady = function (info: MoovBoxInfo) {
      Log.info('Application', 'Movie information received')
      ctx.mediaInfo = info
      // mediaSource.duration：获取并设置当前呈现的媒体的持续时间，以秒为单位
      // isFragmented：表示文件是否已经分片
      if (info.isFragmented) {
        // timescale：对应于影片标题中给出的时间刻度
        // fragment_duration：给出文件碎片部分的持续时间，以时间刻度单位表示
        ctx.mediaSource.duration = info.fragment_duration / info.timescale
      } else {
        // info.duration：以时间单位表示电影(未分割的部分)的持续时间
        ctx.mediaSource.duration = info.duration / info.timescale
      }
      // 当请求到了MP4 Box的 moov box之后解析其中包含的视频的元信息，暂停发送进一步的http请求
      ctx.stop()
      ctx.initializeAllSourceBuffers()
    }

    // 根据setSegmentOptions中传递的选项，在段准备好时调用回调。
    // user是片段的调用者，对于这个轨道，buffer是一个ArrayBuffer，包含这个片段的Movie Fragments。
    // mp4boxfile.start()时、mp4boxfile.appendBuffer()足够多 时被触发
    this.mp4boxfile.onSegment = function (id, user, buffer, sampleNum, is_last) {
      //sb = sourcebuffer
      var sb = user
      // saveBuffer(buffer, 'track-'+id+'-segment-'+sb.segmentIndex+'.m4s');
      sb.segmentIndex++
      sb.pendingAppends.push({ id: id, buffer: buffer, sampleNum: sampleNum, is_last: is_last })
      ctx.onUpdateEnd.call(sb, true, false, ctx)
    }

    this.mp4boxfile.onItem = function (item) {
      debugger
    }

    // 当用户开始移动/跳跃到新的视频播放位置时触发
    this.video.onseeking = () => {
      var i, start, end
      var seek_info
      if (this.lastSeekTime !== this.video.currentTime) {
        for (i = 0; i < this.video.buffered.length; i++) {
          start = this.video.buffered.start(i)
          end = this.video.buffered.end(i)
          if (this.video.currentTime >= start && this.video.currentTime <= end) {
            return
          }
        }
        this.downloader.stop()
        seek_info = this.mp4boxfile.seek(this.video.currentTime, true)
        this.downloader.setChunkStart(seek_info.offset)
        this.downloader.resume()
        this.lastSeekTime = this.video.currentTime
      }
    }
  }

  start() {
    // seek(): 指示下一个要处理的样本(用于提取或分割)在给定时间(数字，以秒为单位)或在前一个随机接入点的时间(如果useRap为true，默认为false)开始
    // 返回将通过appendBuffer提供的下一个字节在文件中的偏移量
    this.downloader.setChunkStart(this.mp4boxfile.seek(0, true).offset)
    // start()：表示可以开始样本处理(分割或提取)。已经收到的样本数据将被处理，新的缓冲区追加操作也将触发样本处理。
    // start()时触发 mp4boxfile.onSegment 的回调
    this.mp4boxfile.start()
    this.downloader.resume()
  }

  reset() {}
  //停止当前还在发送中的http请求
  stop() {
    if (!this.downloader.isStopped()) {
      this.downloader.stop()
    }
  }
  /**
   * @description 根据传入的媒体轨道的类型构建对应的SourceBuffer
   * @param mp4track
   */
  addBuffer(mp4track: MediaTrack) {
    var track_id = mp4track.id
    var codec = mp4track.codec
    var mime = 'video/mp4; codecs="' + codec + '"'
    // var kind = mp4track.kind;
    var sb: MP4SourceBuffer
    if (MediaSource.isTypeSupported(mime)) {
      try {
        console.log('MSE - SourceBuffer #' + track_id, "Creation with type '" + mime + "'")
        Log.info('MSE - SourceBuffer #' + track_id, "Creation with type '" + mime + "'")
        // 根据moov box中解析出来的track去一一创建对应的sourcebuffer
        sb = this.mediaSource.addSourceBuffer(mime)
        sb.addEventListener('error', function (e) {
          Log.error('MSE SourceBuffer #' + track_id, e)
        })
        sb.ms = this.mediaSource
        sb.id = track_id
        // 设置分段选项，指示应该使用给定的选项对具有给定track_id的轨道进行分段。
        // 当段准备好后，回调函数onSegment将使用user参数调用。
        // nbSamples：每个分段中包含的样本数（帧数）。默认值为1000。
        this.mp4boxfile.setSegmentOptions(track_id, sb, { nbSamples: 1000 })
        sb.pendingAppends = []
      } catch (e) {
        Log.error(
          'MSE - SourceBuffer #' + track_id,
          "Cannot create buffer with type '" + mime + "'" + e
        )
      }
    } else {
      throw new Error(`你的浏览器不支持${mime}媒体类型`)
    }
  }

  // 开始加载视频文件
  loadFile() {
    let ctx = this
    if (this.mediaSource.readyState !== 'open') {
      this.mediaSource.onsourceopen = this.loadFile.bind(ctx)
      return
    }
    // 先写死，之后在修改
    this.downloader.setInterval(500)
    this.downloader.setChunkSize(1000000)
    this.downloader.setUrl(this.url)
    this.downloader.setCallback(
      // end表示这一次的请求是否已经将整个视频文件加载过来
      function (response: MP4ArrayBuffer, end: boolean, error: FactoryObject) {
        var nextStart = 0
        if (response) {
          // 设置文件加载的进度条
          // 提供一个用于解析的ArrayBuffer
          // ArrayBuffer必须有一个fileStart (Number)属性，表示ArrayBuffer的第一个字节在原始文件中从0开始的位置。
          // 返回偏移量(在原始文件中)，该偏移量预计是下一个缓冲区的fileStart值。当moov框不在文件开头时，这一点特别有用。
          nextStart = ctx.mp4boxfile.appendBuffer(response, end) // 多次appendBuffer后触发onSegment
          // console.log(nextStart) // 1000000
        }
        if (end) {
          // 如果存在end的话则意味着所有的chunk已经加载完毕
          // flush(): 指示将不再接收任何数据，并且应在分割或提取过程中刷新所有剩余的样本
          ctx.mp4boxfile.flush()
        } else {
          ctx.downloader.setChunkStart(nextStart)
        }
        if (error) {
          ctx.reset()
        }
      }
    )

    this.downloader.start()
    // this.video.play()
  }

  initializeAllSourceBuffers() {
    if (this.mediaInfo) {
      var info = this.mediaInfo
      for (var i = 0; i < info.tracks.length; i++) {
        var track = info.tracks[i]
        this.addBuffer(track)
      }
      this.initializeSourceBuffers()
    }
  }

  initializeSourceBuffers() {
    // 表示应用程序已经准备好接收段。返回一个包含以下属性的对象数组:
    // id:编号，曲目id
    // user: Object，这个轨道分段的调用者，在setSegmentOptions中给出
    // buffer: ArrayBuffer，这条轨道的初始化段。
    // sampleNumber: Number，段中最后一个样本的样本编号，加1。
    // last:布尔值，指示这是否是要接收的最后一个段。
    var initSegs = this.mp4boxfile.initializeSegmentation()
    for (var i = 0; i < initSegs.length; i++) {
      var sb = initSegs[i].user
      if (i === 0) {
        sb.ms.pendingInits = 0
      }
      this.onInitAppended = this.onInitAppended.bind(this)
     
      // 在 SourceBuffer.appendBuffer() 或 SourceBuffer.remove() 结束后触发。这个事件在 update 后触发。
      // 缓冲区状态已更新，可以继续追加更多数据
      sb.addEventListener('updateend', this.onInitAppended)
      
      Log.info('MSE - SourceBuffer #' + sb.id, 'Appending initialization data')
      sb.appendBuffer(initSegs[i].buffer)
      sb.segmentIndex = 0
      sb.ms.pendingInits++
    }
  }

  onInitAppended(e: Event) {
    let ctx = this
    var sb = e.target as MP4SourceBuffer
    if (sb.ms.readyState === 'open') {
      sb.sampleNum = 0
      sb.removeEventListener('updateend', this.onInitAppended)
      sb.addEventListener('updateend', this.onUpdateEnd.bind(sb, true, true, ctx))
      /* 如果已经有挂起的缓冲区，我们调用onUpdateEnd来开始附加它们 */
      this.onUpdateEnd.call(sb, false, true, ctx)
      sb.ms.pendingInits--
      if (sb.ms.pendingInits === 0) {
        this.start()
      }
    }
  }

  onUpdateEnd(isNotInit: boolean, isEndOfAppend: boolean, ctx: MediaPlayer) {
    console.log(isNotInit, isEndOfAppend)
    if (isEndOfAppend === true) {
      if (isNotInit === true) {
        // updateBufferedString(this, "Update ended");
      }
      if ((this as unknown as MP4SourceBuffer).sampleNum) {
        ctx.mp4boxfile.releaseUsedSamples(
          (this as unknown as MP4SourceBuffer).id,
          (this as unknown as MP4SourceBuffer).sampleNum
        )
        delete (this as unknown as MP4SourceBuffer).sampleNum
      }
      if ((this as unknown as MP4SourceBuffer).is_last) {
        ;(this as unknown as MP4SourceBuffer).ms.endOfStream()
      }
    }
    if (
      (this as unknown as MP4SourceBuffer).ms.readyState === 'open' &&
      (this as unknown as MP4SourceBuffer).updating === false &&
      (this as unknown as MP4SourceBuffer).pendingAppends.length > 0
    ) {
      var obj = (this as unknown as MP4SourceBuffer).pendingAppends.shift()
      ;(this as unknown as MP4SourceBuffer).sampleNum = obj.sampleNum
      ;(this as unknown as MP4SourceBuffer).is_last = obj.is_last
      ;(this as unknown as MP4SourceBuffer).appendBuffer(obj.buffer)
    }
  }
}

export default MediaPlayer
