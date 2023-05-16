import { FactoryObject } from '../../types/dash/Factory'
import FactoryMaker from '../FactoryMaker'
import MediaPlayerBufferFactory, { MediaPlayerBuffer } from '../vo/MediaPlayerBuffer'
import EventBusFactory, { EventBus } from '../event/EventBus'
import { EventConstants } from '../event/EventConstants'
import { PlayerBuffer } from '../../types/dash/Net'

class MediaPlayerController {
  private config: FactoryObject = {}
  private video: HTMLVideoElement
  private mediaSource: MediaSource
  private videoSourceBuffer: SourceBuffer
  private audioSourceBuffer: SourceBuffer
  private buffer: MediaPlayerBuffer
  private eventBus: EventBus
  private isFirstRequestCompleted: boolean = false

  constructor(ctx: FactoryObject, ...args: any[]) {
    this.config = ctx.context
    if (this.config.video) {
      this.video = this.config.video
    }
    this.setup()
    this.initEvent()
    this.initPlayer()
  }
  setup() {
    this.mediaSource = new MediaSource()
    // 单例模式
    // this.buffer = new MediaPlayerBuffer({context: {}}, ...args)
    this.buffer = MediaPlayerBufferFactory().getInstance()
    // 单例模式
    // this.eventBus = new EventBus({context: {}}, ...args)
    this.eventBus = EventBusFactory().getInstance()
  }

  initEvent() {
    this.eventBus.on(
      EventConstants.BUFFER_APPENDED,
      () => {
        if (!this.videoSourceBuffer.updating && !this.audioSourceBuffer.updating) {
          this.appendSource()
        }
      },
      this
    )

    this.eventBus.on(
      EventConstants.FIRST_REQUEST_COMPLETED,
      () => {
        this.isFirstRequestCompleted = true
      },
      this
    )

    this.eventBus.on(EventConstants.MEDIA_PLAYBACK_FINISHED, this.onMediaPlaybackFinished, this)
  }

  initPlayer() {
    this.video.src = window.URL.createObjectURL(this.mediaSource)
    this.video.pause()
    this.mediaSource.addEventListener('sourceopen', this.onSourceopen.bind(this))
  }

  appendSource() {
    let data = this.buffer.top()
    if (data) {
      this.buffer.delete(data)
      this.appendVideoSource(data.video)
      this.appendAudioSource(data.audio)
    }
  }

  appendVideoSource(data: ArrayBuffer) {
    this.videoSourceBuffer.appendBuffer(new Uint8Array(data))
  }

  appendAudioSource(data: ArrayBuffer) {
    this.audioSourceBuffer.appendBuffer(new Uint8Array(data))
  }

  onSourceopen(e) {
    this.videoSourceBuffer = this.mediaSource.addSourceBuffer('video/mp4; codecs="avc1.64001E"')
    this.audioSourceBuffer = this.mediaSource.addSourceBuffer('audio/mp4; codecs="mp4a.40.2"')

    this.videoSourceBuffer.addEventListener('updateend', this.onUpdateend.bind(this))
    this.audioSourceBuffer.addEventListener('updateend', this.onUpdateend.bind(this))
  }

  onUpdateend() {
    if (!this.videoSourceBuffer.updating && !this.audioSourceBuffer.updating) {
      if (this.isFirstRequestCompleted) {
        this.eventBus.trigger(EventConstants.SEGMENT_CONSUMED)
      }
      this.appendSource()
    }
  }

  onMediaPlaybackFinished() {
    this.mediaSource.endOfStream()
  }
}

const factory = FactoryMaker.getClassFactory(MediaPlayerController)
export default factory
export { MediaPlayerController }
