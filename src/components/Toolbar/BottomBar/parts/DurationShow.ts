import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentItem, DOMProps, Node } from '@/types/Player'
import { addClass } from '@/utils/domUtils'
import { formatTime } from '@/utils/math'
import { storeControlComponent } from '@/utils/store'
import { EVENT } from '@/events'

export class DutaionShow extends Component implements ComponentItem {
  readonly id = 'DurationShow'
  // el: div.video-duration-time.video-controller
  currentTime: string = '00:00'
  totalTime: string = '00:00'
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
    this.props = props
    this.init()
  }

  init() {
    this.initTemplate()
    this.initEvent()
    storeControlComponent(this)
  }

  initTemplate() {
    addClass(this.el, ['video-duration-time', 'video-controller'])
    this.el.innerText = `${this.currentTime}/${this.totalTime}`
  }

  initEvent() {
    this.player.on(EVENT.LOADED_META_DATA, (e: Event) => {
      let video = e.target as HTMLVideoElement
      // console.log(video.duration) // 12.612
      this.totalTime = formatTime(video.duration)
      // console.log(this.totalTime) // 00:12
      this.el.innerText = `${this.currentTime}/${this.totalTime}`
    })

    this.player.on(EVENT.TIME_UPDATE, (e: Event) => {
      let video = e.target as HTMLVideoElement
      this.currentTime = formatTime(video.currentTime)
      this.el.innerText = `${this.currentTime}/${this.totalTime}`
    })

    this.player.on(EVENT.VIDEO_DOT_DRAG, (scale: number) => {
      this.currentTime = formatTime(this.player.video.duration * scale)
      this.el.innerText = `${this.currentTime}/${this.totalTime}`
    })
  }
}
