import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, Node, DOMProps } from '@/types/Player'
import { addClass, includeClass, removeClass } from '@/utils/domUtils'
import { Progress } from '../Progress/progress'
import { Controller } from '../Controller/controller'
import './toolbar.less'

export class ToolBar extends Component implements ComponentItem {
  readonly id = 'ToolBar'
  player: Player
  progress: Progress
  controller: Controller
  props: DOMProps
  private timer: number = 0

  constructor(
    player: Player,
    container: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: Node[]
  ) {
    super(container, desc, props, children)
    this.player = player
    this.props = props
    this.init()
  }

  init() {
    this.initTemplate()
    this.initComponent()
    this.initEvent()
  }

  initTemplate() {
    addClass(this.el, ['video-controls', 'video-controls-hidden'])
  }

  initComponent() {
    this.progress = new Progress(this.player, this.el, 'div.video-progress')
    this.controller = new Controller(this.player, this.el, 'div.video-play')
  }

  initEvent() {
    this.player.on('showtoolbar', (e) => {
      this.onShowToolBar(e)
    })

    this.player.on('hidetoolbar', (e) => {
      this.onHideToolBar(e)
    })
  }

  onShowToolBar(e: MouseEvent) {
    if (this.timer) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
    this.showToolBar(e)
  }

  onHideToolBar(e: MouseEvent) {
    this.hideToolBar()
  }

  private showToolBar(e: MouseEvent) {
    if (includeClass(this.el, 'video-controls-hidden')) {
      removeClass(this.el, ['video-controls-hidden'])
    }

    if (e.target === this.player.video) {
      this.timer = window.setTimeout(() => {
        this.hideToolBar()
      }, 3000)
    }
  }

  private hideToolBar() {
    if (!includeClass(this.el, 'video-controls-hidden')) {
      addClass(this.el, ['video-controls-hidden'])
    }
  }
}
