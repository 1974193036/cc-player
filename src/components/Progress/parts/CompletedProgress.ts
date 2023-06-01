import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, DOMProps, Node } from '@/types/Player'
import { Progress } from '../progress'
import { storeControlComponent } from '@/utils/store'
import { EVENT } from '@/events'

export class CompletedProgress extends Component implements ComponentItem {
  readonly id = 'CompletedProgress'
  // el: div.video-completed
  player: Player

  constructor(
    player: Player,
    container: HTMLElement,
    desc?: string
  ) {
    super(container, desc)
    this.player = player
    this.init()
  }

  init() {
    this.initEvent()
    storeControlComponent(this)
  }

  initEvent() {
    this.player.on(EVENT.PROGRESS_CLICK, (e: MouseEvent, ctx: Progress) => {
      this.onChangeSize(e, ctx)
    })

    // this.player.on(EVENT.TIME_UPDATE, (e) => {
    //   if (this.player.enableSeek) {
    //     this.updatePos(e)
    //   }
    // })

    this.player.on(EVENT.DOT_DRAG, (scale: number) => {
      this.el.style.width = scale * 100 + '%'
    })
  }

  onChangeSize(e: MouseEvent, ctx: Component) {
    let scale = e.offsetX / ctx.el.offsetWidth
    if (scale < 0) {
      scale = 0
    } else if (scale > 1) {
      scale = 1
    }
    this.el.style.width = scale * 100 + '%'
  }

  updatePos(e: Event) {
    let video = e.target as HTMLVideoElement
    let scale = video.currentTime / video.duration
    if (scale < 0) {
      scale = 0
    } else if (scale > 1) {
      scale = 1
    }
    this.el.style.width = scale * 100 + '%'
  }
}
