import { styles } from '@/styles/style'
import { icon } from '@/styles/icon'
import { BaseEvent } from '@/class/BaseEvent'
import { formatTime } from '@/utils/format'
import './controller.less'

export class Controller extends BaseEvent {
  private _template: HTMLElement | string
  private container: HTMLElement
  private videoPlayBtn: HTMLElement
  private currentTime: HTMLElement
  private summaryTime: HTMLElement

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
          <div class="${styles['video-subsettings']}">
            <i class="${icon['iconfont']} ${icon['icon-shezhi']}"></i>
          </div>
          <div class="${styles['video-volume']}">
            <i class="${icon['iconfont']} ${icon['icon-yinliang']}"></i>
            <div class="${styles['video-volume-progress']}">
              <div class="${styles['video-volume-completed']}"></div>
              <div class="${styles['video-volume-dot']}"></div>
            </div>
          </div>
          <div class="${styles['video-fullscreen']}">
            <i class="${icon['iconfont']} ${icon['icon-quanping']}"></i>
          </div>
        </div>
      </div>
    `
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
    })
  }
}
