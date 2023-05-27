import { Danmaku, DanmakuInput } from '@/danmaku'
import { queue } from '@/mock/queue'
import { Player } from '../page/player'

export class DanmakuController {
  private player: Player
  private video: HTMLVideoElement
  private container: HTMLElement
  private danmaku: Danmaku
  private danmakuInput: DanmakuInput
  private index: number = 0
  private timer: number | null = null

  constructor(player: Player) {
    this.player = player
    this.video = player.video
    this.container = player.container
    this.init()
  }

  init() {
    this.danmaku = new Danmaku([], this.container)
    this.initTemplate()
    this.initializeEvent()
  }

  initTemplate() {
    let ctx = this
    this.danmakuInput = new DanmakuInput(this.player, null, 'div')
    this.player.use({
      install(player) {
        player.registerControls(ctx.danmakuInput.id, ctx.danmakuInput, 'medium')
      }
    })
  }

  initializeEvent() {
    this.video.addEventListener('timeupdate', (e: Event) => {
      this.onTimeupdate(e)
    })

    this.video.addEventListener('seeking', (e: Event) => {
      this.onSeeking(e)
    })

    this.video.addEventListener('play', (e: Event) => {
      this.start()
      this.danmaku.resume()
    })

    this.video.addEventListener('pause', (e: Event) => {
      this.pause()
      this.danmaku.pause()
    })

    this.video.addEventListener('loadedmetadata', (e) => {})

    this.danmakuInput.on('sendData', function (data) {
      // console.log(data)
      queue.push(data)
    })
  }

  onTimeupdate(e: Event) {
    let video = e.target as HTMLVideoElement
    let currentTime = video.currentTime
  }

  // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
  onSeeking(e: Event) {
    this.danmaku.flush()
  }

  start() {
    this.timer = window.setInterval(() => {
      this.danmaku.addData(queue[this.index++ % queue.length])
      // if (this.index >= 250) {
      //   window.clearInterval(this.timer)
      //   this.timer = null
      // }
    }, 50)
    // const send = () => {
    //   if (this.index >= 30) return
    //   let data = queue[(this.index++) % queue.length]
    //   this.danmaku.addData(data)
    //   send()
    // }
    // send()
  }

  pause() {
    window.clearInterval(this.timer)
    this.timer = null
  }
}
