// import { styles } from '../../index'
import { styles } from '@/styles/style'
import './progress.less'

export class Progress {
  private _template: HTMLElement | string

  constructor() {
    this.init()
  }

  get template(): HTMLElement | string {
    return this._template
  }

  init() {
    this._template = `
      <div class="${styles['video-progress']}">
        <div class="${styles['video-pretime']}">00:00</div>
        <div class="${styles['video-buffered']}"></div>
        <div class="${styles['video-completed']}"></div>
        <div class="${styles['video-dot']} ${styles['video-dot-hidden']}"></div>
      </div>
    `
  }
}
