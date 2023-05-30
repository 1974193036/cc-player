import { Player } from '@/page/player'
import { DOMProps, Node } from '@/types/Player'
import { addClass, createSvg } from '@/utils/domUtils'
import { storeControlComponent } from '@/utils/store'
import { videoShotPath } from '../path/defaultPath'
import { Options } from './Options'
import { wrap } from 'ntouch.js'

export class VideoShot extends Options {
  readonly id = 'VideoShot'
  // el: div.video-videoshot.video-controller
  countDown = 30
  timer: number | null = null

  constructor(
    player: Player,
    container: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: Node[]
  ) {
    super(player, container, 0, 0, desc, props, children)
    this.init()
  }

  init() {
    this.initTemplate()
    this.initEvent()
    storeControlComponent(this)
  }

  initTemplate() {
    addClass(this.el, ['video-videoshot', 'video-controller'])
    this.icon = createSvg(videoShotPath, '0 0 1024 1024')
    this.iconBox.appendChild(this.icon)
    this.el.appendChild(this.iconBox)

    this.hideBox.innerText = '视频录制'
    this.hideBox.style.fontSize = '13px'
  }

  initEvent() {
    this.onDown = this.onDown.bind(this)
    if (this.player.env === 'PC') {
      this.el.onmousedown = this.onDown
    } else {
      this.el.ontouchstart = this.onDown
    }
  }

  onDown() {
    if (this.player.video.played) {
      this.videoShot()
    }
  }

  videoShot() {
    // MediaRecorder(stream[, options]) 构造函数会创建一个对指定的 MediaStream 进行录制的 MediaRecorder 对象
    let recorder = new MediaRecorder(
      (this.player.video as HTMLMediaElement as HTMLMediaElementWithCaputreStream).captureStream(60)
    )

    recorder.addEventListener('start', (e) => {
      console.log('开始录制视频')
    })

    recorder.addEventListener('stop', (e) => {
      console.log('结束录制视频')
    })

    // 当 MediaRecorder 将媒体数据传递到您的应用程序以供使用时，将触发该事件。数据在包含数据的Blob对象中提供
    recorder.addEventListener('dataavailable', (e: BlobEvent) => {
      // console.log(e.data) // 是一个Blob

      let data = e.data
      let a = document.createElement('a')
      // createObjectURL: 用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象
      a.href = window.URL.createObjectURL(data)
      a.download = 'Test.mp4'
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      a = null
    })

    // 开始录制视频
    recorder.start()

    this.timer = window.setInterval(() => {
      // console.log(this.countDown)
      if (this.countDown === 0) {
        // 结束录制视频，30s后自动结束录制
        this.stop(recorder)
        return
      }
      this.countDown--
    }, 1000)

    if (this.player.env === 'Mobile') {
      this.el.ontouchend = (e) => {
        this.stop(recorder)
      }
    } else {
      // 结束录制视频，手动抬起鼠标结束录制
      this.el.onmouseup = (e) => {
        this.stop(recorder)
      }
    }
  }

  stop(recorder: MediaRecorder) {
    recorder.stop()
    recorder = null
    window.clearInterval(this.timer)
    this.timer = null
    this.el.onmouseup = null
    this.el.ontouchend = null
    this.countDown = 30
  }
}
