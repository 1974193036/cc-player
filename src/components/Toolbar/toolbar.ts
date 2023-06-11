import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, Node, DOMProps } from '@/types/Player'
import { addClass, includeClass, removeClass } from '@/utils/domUtils'
// import { Progress } from '../Progress/progress'
import { Controller } from './BottomBar/Controller'
import { storeControlComponent } from '@/utils/store'
import { MoveEvent, SingleTapEvent } from 'ntouch.js'
import { EVENT } from '@/events'
import { MediumBar } from './MediumBar/MediumBar'

export class ToolBar extends Component implements ComponentItem {
  readonly id = 'ToolBar'
  // el: div.video-toolbar.video-toolbar-hidden
  props: DOMProps
  player: Player
  mediumbar: MediumBar
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
    addClass(this.el, ['video-toolbar'])
  }

  initComponent() {
    // this.progress = new Progress(this.player, this.el, 'div.video-progress')
    // this.controller = new Controller(this.player, this.el, 'div.video-play')

    this.mediumbar = new MediumBar(this.player, this.el, 'div.video-mediumbar')
    this.controller = new Controller(this.player, this.el, 'div.video-bottombar')
  }

  initEvent() {
    this.player.on(EVENT.SHOW_TOOLBAR, () => {
      this.onShowToolBar()
    })

    this.player.on(EVENT.HIDE_TOOLBAR, () => {
      this.onHideToolBar()
    })
  }

  onShowToolBar() {
    if (this.timer) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
    this.showToolBar()
  }

  onHideToolBar() {
    this.hideToolBar()
  }

  private showToolBar() {
    if (includeClass(this.el, 'video-toolbar-hidden')) {
      removeClass(this.el, ['video-toolbar-hidden'])
      this.status = 'show'
    }

    this.timer = window.setTimeout(() => {
      if (!this.player.video.paused) this.hideToolBar()
    }, 3000)
  }

  private hideToolBar() {
    if (!includeClass(this.el, 'video-toolbar-hidden') && !this.player.video.paused) {
      addClass(this.el, ['video-toolbar-hidden'])
      this.status = 'hidden'
    }
  }
}
