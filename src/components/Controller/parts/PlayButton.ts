import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, DOMProps, Node } from '@/types/Player'
import { $, addClass, createSvg } from '@/utils/domUtils'
import { pausePath, playPath } from '../path/defaultPath'
import { storeControlComponent } from '@/utils/store'

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
    this.onClick = this.onClick.bind(this)

    this.player.on('play', (e: Event) => {
      this.iconBox.removeChild(this.button)
      this.button = this.pauseIcon as SVGSVGElement
      this.iconBox.appendChild(this.button)
    })

    this.player.on('pause', (e: Event) => {
      this.iconBox.removeChild(this.button)
      this.button = this.playIcon as SVGSVGElement
      this.iconBox.appendChild(this.button)
    })

    this.el.onclick = this.onClick
  }

  resetEvent() {
    this.onClick = this.onClick.bind(this)
    this.el.onclick = null
    this.el.onclick = this.onClick
  }

  onClick(e: MouseEvent) {
    if (this.player.video.paused) {
      this.player.video.play()
    } else {
      this.player.video.pause()
    }
  }
}
