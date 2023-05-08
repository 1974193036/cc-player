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

  init() {
    
  }

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

  initEvent() {
    this.on('play', () => {
      this.controller.emit('play')
    })
    this.on('pause', () => {
      this.controller.emit('pause')
    })
  }
}
