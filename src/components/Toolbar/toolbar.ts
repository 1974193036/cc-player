// import { styles, Progress } from '../../index'
import { styles } from '@/styles/style'
import { Progress } from '@/components/Progress/progress'
import { Controller } from '@/components/Controller/controller'
import { BaseEvent } from '@/class/BaseEvent'
import './toolbar.less'

export class Toolbar extends BaseEvent {
  private _template: HTMLElement
  private progress: Progress
  private controller: Controller
  private container: HTMLElement
  private timer: number | null
  private video: HTMLVideoElement

  constructor(container: HTMLElement) {
    super()
    this.container = container
    this.init()
    this.initComponent()
    this.initTemplate()
    this.initEvent()
  }

  get template(): HTMLElement {
    return this._template
  }

  init() {}

  initComponent() {
    this.progress = new Progress()
    this.controller = new Controller(this.container)
  }

  initTemplate() {
    let div = document.createElement('div')
    div.className = `${styles['video-controls']} ${styles['video-controls-hidden']}`
    div.innerHTML += this.progress.template as string
    div.innerHTML += this.controller.template as string
    this._template = div
  }

  showToolBar(e: MouseEvent) {
    this.container.querySelector(`.${styles['video-controls']}`).className =
      styles['video-controls']
    if (e.target !== this.video) {
      // To do
    } else {
      this.timer = window.setTimeout(() => {
        this.hideToolbar()
      }, 3000)
    }
  }

  hideToolbar() {
    this.container.querySelector(
      `.${styles['video-controls']}`
    ).className = `${styles['video-controls']} ${styles['video-controls-hidden']}`
  }

  initEvent() {
    this.on('showtoolbar', (e: MouseEvent) => {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.showToolBar(e)
    })

    this.on('hidetoolbar', () => {
      this.hideToolbar()
    })

    this.on('loadedmetadata', (summary: number) => {
      // console.log('duration', summary)
      this.controller.emit('loadedmetadata', summary)
    })

    this.on('timeupdate', (currentTime: number) => {
      // console.log('currentTime', currentTime)
      this.controller.emit('timeupdate', currentTime)
    })

    this.on('play', () => {
      this.controller.emit('play')
    })

    this.on('pause', () => {
      this.controller.emit('pause')
    })

    this.on('mounted', () => {
      this.video = this.container.querySelector('video')
      this.controller.emit('mounted')
    })
  }
}
