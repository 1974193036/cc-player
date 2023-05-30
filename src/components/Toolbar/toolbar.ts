import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, Node, DOMProps } from '@/types/Player'
import { addClass, includeClass, removeClass } from '@/utils/domUtils'
import { Progress } from '../Progress/progress'
import { Controller } from '../Controller/controller'
import { storeControlComponent } from '@/utils/store'
import { SingleTapEvent } from 'ntouch.js'
import './toolbar.less'

export class ToolBar extends Component implements ComponentItem {
  readonly id = 'ToolBar'
  // el: div.video-controls.video-controls-hidden
  props: DOMProps
  player: Player
  progress: Progress
  controller: Controller
  status: 'show' | 'hidden' = 'hidden'
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
    this.props = props || {}
    this.init()
  }

  init() {
    this.initTemplate()
    this.initComponent()
    this.initEvent()
    storeControlComponent(this)
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

  onShowToolBar(e: Event | SingleTapEvent) {
    if (this.timer) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
    this.showToolBar(e)
  }

  onHideToolBar(e: Event | SingleTapEvent) {
    this.hideToolBar()
  }

  private showToolBar(e: Event | SingleTapEvent) {
    if (includeClass(this.el, 'video-controls-hidden')) {
      removeClass(this.el, ['video-controls-hidden'])
      this.status = 'show'
    }

    let target
    if (e instanceof Event) target = e.target
    else target = (e as SingleTapEvent).e.target

    if (target === this.player.video && this.player.env === 'PC') {
      this.timer = window.setTimeout(() => {
        this.hideToolBar()
      }, 3000)
    }
  }

  private hideToolBar() {
    if (!includeClass(this.el, 'video-controls-hidden')) {
      addClass(this.el, ['video-controls-hidden'])
      this.status = 'hidden'
    }
  }
}
