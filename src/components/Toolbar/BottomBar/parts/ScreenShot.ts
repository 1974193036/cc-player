import { Player } from '@/page/player'
import { DOMProps, Node } from '@/types/Player'
import { $, addClass, createSvg, createSvgs, includeClass, removeClass } from '@/utils/domUtils'
import { storeControlComponent } from '@/utils/store'
import { confirmPath, screenShotPath } from '@/svg'
import { Toast } from '@/components/Toast/Toast'
import { Options } from './Options'
import { wrap } from 'ntouch.js'

export class ScreenShot extends Options {
  readonly id = 'ScreenShot'
  // el: div.video-screenshot.video-controller
  confirmIcon: SVGSVGElement

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
    this.confirmIcon = createSvg(confirmPath, '0 0 1024 1024')

    addClass(this.el, ['video-screenshot', 'video-controller'])
    this.icon = createSvg(screenShotPath, '0 0 1024 1024')
    this.iconBox.appendChild(this.icon)
    this.el.appendChild(this.iconBox)

    this.hideBox.innerText = '截图'
    this.hideBox.style.fontSize = '13px'
  }

  initEvent() {
    this.onClick = this.onClick.bind(this)
    if (this.player.env === 'PC') {
      this.el.addEventListener('click', this.onClick)
    } else {
      wrap(this.el).addEventListener('singleTap', this.onClick)
    }
  }

  onClick(e: Event) {
    if (!includeClass(this.icon, 'video-screenshot-animate')) {
      addClass(this.icon, ['video-screenshot-animate'])
      ;(this.icon as SVGSVGElement).ontransitionend = (e) => {
        removeClass(this.icon, ['video-screenshot-animate'])
        ;(this.icon as SVGSVGElement).ontransitionend = null
      }
    }
    this.screenShot()
  }

  screenShot() {
    const canvas = document.createElement('canvas')
    let video = this.player.video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    const fileName = `${Math.random().toString(36).slice(-8)}_${video.currentTime}.png`
    try {
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }, 'image/png')
    } catch {
      // todo
    }

    let dom = $('div.video-screenshot-toast')
    let span = $('span')
    span.innerText = '截图成功!'
    let icon = this.confirmIcon.cloneNode(true)
    dom.appendChild(icon)
    dom.appendChild(span)

    let toast = new Toast(this.player, dom)
    setTimeout(() => {
      toast.dispose()
      toast = null
    }, 2000)
  }
}
