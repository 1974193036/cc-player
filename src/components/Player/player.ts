// import { PlayerOptions, $warn, styles, Toolbar } from '../../index'
import { styles } from '@/styles/style'
import { $warn } from '@/utils/warn'
import { PlayerOptions } from '@/types/PlayerOptions'
import { Toolbar } from '@/components/Toolbar/toolbar'

import './player.less'

export class Player {
  private playerOptions = {
    url: '',
    width: '100%',
    height: '100%',
    autoPlay: false
  }

  private container: HTMLElement
  private toolbar: Toolbar

  constructor(options: PlayerOptions) {
    this.playerOptions = Object.assign(this.playerOptions, options)
    this.init()
    this.initComponent()
    this.initContainer()
  }

  init() {
    let container = (this.playerOptions as PlayerOptions).container
    // 标签判断
    if (!this.isTagValidate(container)) {
      $warn(
        '你传入的容器的元素类型不适合，建议传入块元素或者行内块元素，拒绝传入具有交互类型的元素例如input框等表单类型的元素'
      )
    }
    this.container = container
  }

  initComponent() {
    // 初始化视频播放器的工具栏组件
    this.toolbar = new Toolbar()
  }

  initContainer() {
    this.container.style.width = this.playerOptions.width
    this.container.style.height = this.playerOptions.height
    this.container.className = styles['video-container']
    this.container.innerHTML = `
      <div class=${styles['video-wrapper']}>
        <video>
          <source src="${this.playerOptions.url}" type="video/mp4">
          您的浏览器不支持 HTML5 video 标签。
        </video>
      </div>
    `
    this.container.appendChild(this.toolbar.template)
  }

  isTagValidate(el: HTMLElement): boolean {
    if (window.getComputedStyle(el).display === 'block') return true
    if (window.getComputedStyle(el).display === 'inline') return false
    if (window.getComputedStyle(el).display === 'inline-block') {
      if (
        el instanceof HTMLImageElement ||
        el instanceof HTMLInputElement ||
        el instanceof HTMLButtonElement ||
        el instanceof HTMLCanvasElement ||
        el instanceof HTMLVideoElement ||
        el instanceof HTMLAudioElement
      ) {
        return false
      }
    }
    return true
  }
}
