import { styles } from '@/styles/style'
import { icon } from '@/styles/icon'
import { BaseEvent } from '@/class/BaseEvent'
import { formatTime } from '@/utils/format'
import './controller.less'
import { volumeSVG } from '../SVGTool/VolumeModel'
import { settingSVG } from '../SVGTool/SettingsModel'
import { fullScreenSVG } from '../SVGTool/FullScreenModel'

export class Controller extends BaseEvent {
  private _template: HTMLElement | string
  private container: HTMLElement
  private videoPlayBtn: HTMLElement
  private currentTime: HTMLElement
  private summaryTime: HTMLElement
  private video: HTMLVideoElement
  private fullScreen: HTMLElement

  constructor(container: HTMLElement) {
    super()
    this.container = container
    this.init()
    this.initEvent()
  }

  get template(): HTMLElement | string {
    return this._template
  }

  init() {
    this._template = `
      <div class="${styles['video-play']}">
        <div class="${styles['video-subplay']}">
            <div class="${styles['video-start-pause']}">
              <i class="${icon['iconfont']} ${icon['icon-bofang']}"></i>
            </div>
            <div class="${styles['video-duration']}">
              <span class="${styles['video-duration-completed']}">00:00</span>&nbsp;/&nbsp;<span class="${styles['video-duration-all']}">00:00</span>
            </div>
        </div>
        <div class="${styles['video-settings']}">
          <div class="${styles['video-resolvepower']}">
            分辨率
          </div>
          <div class="${styles['video-playrate']} aria-label="倍速">
            倍速
          </div>
          <div class="${styles['video-volume']}" aria-label="音量">
            ${volumeSVG}
          </div>
          <div class="${styles['video-subsettings']}" aria-label="设置">
            ${settingSVG}
          </div>
          <div class="${styles['video-fullscreen']}" aria-label="全屏">
            ${fullScreenSVG}
          </div>
        </div>
      </div>
    `
  }

  initControllerEvent() {
    this.videoPlayBtn.onclick = (e: MouseEvent) => {
      if (this.video.paused) {
        this.video.play()
      } else if (this.video.played) {
        this.video.pause()
      }
    }

    this.fullScreen.onclick = () => {
      if (this.container.requestFullscreen && !document.fullscreenElement) {
        this.container.requestFullscreen() //该函数请求全屏，把一个div容器全屏
      } else if (document.fullscreenElement) {
        document.exitFullscreen() //退出全屏函数仅仅绑定在document对象上，该点需要切记！！！
      }
    }
  }

  initEvent() {
    this.on('play', () => {
      this.videoPlayBtn.className = `${icon['iconfont']} ${icon['icon-zanting']}`
    })

    this.on('pause', () => {
      this.videoPlayBtn.className = `${icon['iconfont']} ${icon['icon-bofang']}`
    })

    this.on('loadedmetadata', (summary: number) => {
      this.summaryTime.innerHTML = formatTime(summary)
    })

    this.on('timeupdate', (currentTime: number) => {
      this.currentTime.innerHTML = formatTime(currentTime)
    })

    this.on('mounted', () => {
      this.videoPlayBtn = this.container.querySelector(`.${styles['video-start-pause']} i`)
      this.currentTime = this.container.querySelector(`.${styles['video-duration-completed']}`)
      this.summaryTime = this.container.querySelector(`.${styles['video-duration-all']}`)
      this.video = this.container.querySelector('video')
      this.fullScreen = this.container.querySelector(`.${styles['video-fullscreen']}`)
      this.initControllerEvent()
    })
  }
}
