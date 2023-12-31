import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, DOMProps, Node } from '@/types/Player'
import { $, addClass, createSvg } from '@/utils/domUtils'
import { pausePath, playPath } from '@/svg'
import { storeControlComponent } from '@/utils/store'
import { SingleTapEvent, wrap } from 'ntouch.js'
import { EVENT } from '@/events'

export class PlayButton extends Component implements ComponentItem {
  readonly id = 'PlayButton'
  // el: div.video-start-pause.video-controller
  private pauseIcon: SVGSVGElement | string
  private playIcon: SVGSVGElement | string
  private button: SVGSVGElement
  private iconBox: HTMLElement
  props: DOMProps
  player: Player

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
    this.initEvent()

    storeControlComponent(this)
  }

  initTemplate() {
    addClass(this.el, ['video-start-pause', 'video-controller'])
    this.iconBox = $('div.video-icon')
    this.el.appendChild(this.iconBox)
    this.pauseIcon = createSvg(pausePath)
    this.playIcon = createSvg(playPath)
    this.button = this.playIcon as SVGSVGElement
    this.iconBox.appendChild(this.button)
  }

  initEvent() {
    this.player.on(EVENT.PLAY, (e: Event) => {
      this.iconBox.removeChild(this.button)
      this.button = this.pauseIcon as SVGSVGElement
      this.iconBox.appendChild(this.button)
    })

    this.player.on(EVENT.PAUSE, (e: Event) => {
      this.iconBox.removeChild(this.button)
      this.button = this.playIcon as SVGSVGElement
      this.iconBox.appendChild(this.button)
    })

    this.onClick = this.onClick.bind(this)
    if (this.player.env === 'Mobile') {
      this.initMobileEvent()
    } else {
      this.initPCEvent()
    }
  }

  initPCEvent(): void {
    this.el.onclick = this.onClick
  }

  initMobileEvent(): void {
    wrap(this.el).addEventListener('singleTap', this.onClick, { stopPropagation: true })
  }

  onClick(e: Event | SingleTapEvent) {
    if (e instanceof Event) {
      e.stopPropagation()
    }
    if (this.player.video.paused) {
      this.player.video.play()
    } else {
      this.player.video.pause()
    }
    e.stopPropagation && e.stopPropagation()
  }

  resetEvent() {
    this.onClick = this.onClick.bind(this)
    this.el.onclick = null
    this.el.onclick = this.onClick
  }
}
