// import { styles, Progress } from '../../index'
import { styles } from '@/styles/style'
import { Progress } from '@/components/Progress/progress'
import { Controller } from '@/components/Controller/controller'
import './toolbar.less'

export class Toolbar {
  private _template: HTMLElement

  constructor() {
    this.init()
  }

  get template(): HTMLElement {
    return this._template
  }

  init() {
    let div = document.createElement('div')
    div.className = `${styles['video-controls']} ${styles['video-controls-hidden']}`
    div.innerHTML += new Progress().template as string
    div.innerHTML += new Controller().template as string
    this._template = div
  }
}