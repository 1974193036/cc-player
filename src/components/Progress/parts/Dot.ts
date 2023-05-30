import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, DOMProps, Node } from '@/types/Player'
import { addClass, getElementSize, includeClass, removeClass } from '@/utils/domUtils'
import { storeControlComponent } from '@/utils/store'
import { Progress } from '../progress'
import { MoveEvent, SwipeEvent, wrap } from 'ntouch.js'

export class Dot extends Component implements ComponentItem {
  readonly id = 'Dot'
  // el: div.video-dot.video-dot-hidden
  props: DOMProps
  player: Player
  mouseX: number
  left = 0
  playScale = 0

  constructor(
    player: Player,
    container: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: Node[]
  ) {
    super(container, desc, props, children)
    this.props = props || {}
    this.player = player
    this.container = container
    this.init()
  }

  init() {
    addClass(this.el, ['video-dot', 'video-dot-hidden'])
    this.initEvent()

    storeControlComponent(this)
  }

  initEvent() {
    this.player.on('progress-mouseenter', (e) => {
      // Dot按下的时候enableSeek为false，Dot抬起的时候enableSeek为true
      if (this.player.enableSeek) {
        this.onShowDot(e)
      }
    })

    this.player.on('progress-mouseleave', (e) => {
      // Dot按下的时候enableSeek为false，Dot抬起的时候enableSeek为true
      if (this.player.enableSeek) {
        this.onHideDot(e)
      }
    })

    this.player.on('progress-click', (e: MouseEvent, ctx: Progress) => {
      this.onChangePos(e, ctx)
    })

    this.player.on('timeupdate', (e: Event) => {
      // 防抖效果：针对Dot按下拖动时不触发timeupdate，拖完鼠标抬起时再触发timeupdate
      if (this.player.enableSeek) {
        this.updatePos(e)
      }
    })

    if (this.player.env === 'PC') {
      this.initPCEvent()
    } else {
      this.initMobileEvent()
    }
  }

  initPCEvent(): void {
    this.el.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.onMouseMove = this.onMouseMove.bind(this)
      this.player.emit('dotdown')
      this.mouseX = e.pageX
      this.left = parseInt(this.el.style.left)

      document.body.addEventListener('mousemove', this.onMouseMove)

      document.body.addEventListener('mouseup', (e) => {
        this.player.emit('dotup')
        this.player.video.currentTime = Math.floor(this.playScale * this.player.video.duration)
        document.body.removeEventListener('mousemove', this.onMouseMove)
      })
    })
  }

  initMobileEvent(): void {
    this.player.video.addEventListener('touchstart', (e) => {
      e.preventDefault()
      this.player.emit('dotdown')
      this.left = this.el.style.left ? parseInt(this.el.style.left) : 0
    })

    this.player.video.addEventListener('touchend', (e) => {
      this.player.emit('dotup')
    })

    this.player.on('moveHorizontal', (e: MoveEvent) => {
      let scale = (this.left + e.deltaX) / this.container.clientWidth

      if (scale < 0) {
        scale = 0
      } else if (scale > 1) {
        scale = 1
      }
      this.playScale = scale
      this.el.style.left =
        this.container.clientWidth * scale - getElementSize(this.el).width / 2 + 'px'

      if (this.player.video.paused) this.player.video.play()
      this.player.emit('dotdrag', scale, e)
    })

    this.player.on('slideHorizontal', (e: SwipeEvent) => {
      this.player.emit('dotup')
      this.player.video.currentTime = Math.floor(this.playScale * this.player.video.duration)
    })
  }

  onMouseMove(e: MouseEvent) {
    let scale = (e.pageX - this.mouseX + this.left) / this.container.offsetWidth
    if (scale < 0) {
      scale = 0
    } else if (scale > 1) {
      scale = 1
    }
    this.playScale = scale
    this.el.style.left =
      this.container.offsetWidth * scale - getElementSize(this.el).width / 2 + 'px'
    if (this.player.video.paused) this.player.video.play()
    this.player.emit('dotdrag', scale, e)
  }

  onShowDot(e: MouseEvent) {
    if (includeClass(this.el, 'video-dot-hidden')) {
      removeClass(this.el, ['video-dot-hidden'])
    }
  }

  onHideDot(e: MouseEvent) {
    if (!includeClass(this.el, 'video-dot-hidden')) {
      addClass(this.el, ['video-dot-hidden'])
    }
  }

  onChangePos(e: MouseEvent, ctx: Component) {
    let scale = e.offsetX / ctx.el.offsetWidth
    if (scale < 0) {
      scale = 0
    } else if (scale > 1) {
      scale = 1
    }
    this.el.style.left = e.offsetX - getElementSize(this.el).width / 2 + 'px'
  }

  updatePos(e: Event) {
    let video = e.target as HTMLVideoElement
    let scale = video.currentTime / video.duration
    if (scale < 0) {
      scale = 0
    } else if (scale > 1) {
      scale = 1
    }
    this.el.style.left =
      scale * this.container.clientWidth - getElementSize(this.el).width / 2 + 'px'
  }
}
