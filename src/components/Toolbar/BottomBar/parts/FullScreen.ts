import { Player } from '@/page/player'
import { DOMProps, Node } from '@/types/Player'
import { addClass, createSvg } from '@/utils/domUtils'
import { fullscreenExitPath, fullscreenPath } from '@/svg'
import { storeControlComponent } from '@/utils/store'
import { Options } from './Options'
import { beFull, exitFull, isFull } from 'be-full'
import { wrap, SingleTapEvent } from 'ntouch.js'
import { EVENT } from '@/events'

export class FullScreen extends Options {
  readonly id = 'FullScreen'
  enterFullScreen: boolean = false

  constructor(
    player: Player,
    container: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: Node[]
  ) {
    super(player, container, 0, 0, desc, props, children)
    this.init()
  }

  init() {
    this.initTemplate()
    this.initEvent()

    storeControlComponent(this)
  }

  initTemplate() {
    addClass(this.el, ['video-fullscreen', 'video-controller'])
    this.icon = createSvg(fullscreenPath, '0 0 1024 1024')
    this.iconBox.appendChild(this.icon)

    this.hideBox.innerText = '全屏'
  }

  initEvent() {
    this.requestFullScreen = this.requestFullScreen.bind(this)
    if (this.player.env === 'PC') {
      this.el.onclick = this.requestFullScreen
    } else {
      wrap(this.el).addEventListener('singleTap', this.requestFullScreen, { stopPropagation: true })
    }

    document.addEventListener('fullscreenchange', (e) => {
      // console.log('fullscreenchange', document.fullscreenElement)
      if (document.fullscreenElement) {
        this.player.emit(EVENT.ENTER_FULLSCREEN)
      } else {
        this.player.emit(EVENT.LEAVE_FULLSCREEN)
      }
    })
  }

  requestFullScreen(e?: Event | SingleTapEvent) {
    if (e instanceof Event) {
      // 在此处做了一层类型守卫
      e.stopPropagation()
    }
    if (!isFull(this.player.container)) {
      // 调用浏览器提供的全屏API接口去请求元素的全屏，原生全屏分为  竖屏全屏 + 横屏全屏
      this.player.container.requestFullscreen()

      this.iconBox.removeChild(this.icon)
      this.icon = createSvg(fullscreenExitPath, '0 0 1024 1024')
      this.iconBox.appendChild(this.icon)
    } else if (isFull(this.player.container)) {
      document.exitFullscreen()
      this.iconBox.removeChild(this.icon)
      this.icon = createSvg(fullscreenPath, '0 0 1024 1024')
      this.iconBox.appendChild(this.icon)
    }
  }
}
