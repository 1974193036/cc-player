import { Component } from '../../../class/Component'
import { Player } from '../../../page/player'
import { ComponentItem, DOMProps, Node } from '../../../types/Player'
import { $, addClass, createSvg } from '../../../utils/domUtils'
import { fullscreenExitPath, fullscreenPath } from '../path/defaultPath'

export class FullScreen extends Component implements ComponentItem {
  readonly id = 'FullScreen'
  // el: div.video-fullscreen.video-controller
  player: Player
  props: DOMProps
  iconBox: HTMLElement
  icon: SVGSVGElement
  fullscreenIcon: SVGSVGElement | string
  fullscreenExitIcon: SVGSVGElement | string

  constructor(
    player: Player,
    container: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: Node[]
  ) {
    super(container, desc, props, children)
    this.player = player
    this.init()
  }

  init() {
    this.initTemplate()
    this.initEvent()
  }

  initTemplate() {
    addClass(this.el, ['video-fullscreen', 'video-controller'])
    this.iconBox = $('div.video-icon')
    this.fullscreenIcon = createSvg(fullscreenPath)
    this.fullscreenExitIcon = createSvg(fullscreenExitPath)
    this.icon = this.fullscreenIcon as SVGSVGElement
    this.iconBox.appendChild(this.icon)
    this.el.appendChild(this.iconBox)
  }

  initEvent() {
    this.el.onclick = this.onClick.bind(this)
  }

  onClick(e: MouseEvent) {
    if (this.player.container.requestFullscreen && !document.fullscreenElement) {
      this.player.container.requestFullscreen() //该函数请求全屏
      this.iconBox.removeChild(this.icon)
      this.icon = this.fullscreenExitIcon as SVGSVGElement
      this.iconBox.appendChild(this.icon)
    } else if (document.fullscreenElement) {
      document.exitFullscreen() //退出全屏函数仅仅绑定在document对象上，该点需要切记！！！
      this.iconBox.removeChild(this.icon)
      this.icon = this.fullscreenIcon as SVGSVGElement
      this.iconBox.appendChild(this.icon)
    }
  }
}
