import { Danmaku, DanmakuInput } from '@/danmaku'
import { queue } from '@/mock/queue'
import { Player } from '../page/player'
import { EVENT } from '@/events'
import { DanmakuOpenClose } from './UI/DanmakuOpenClose'
import { DanmakuSettings } from './UI/DanmakuSettings'

/**
 * @description 控制弹幕的类 Controller层
 */
export class DanmakuController {
  private player: Player
  private video: HTMLVideoElement
  private container: HTMLElement
  private danmaku: Danmaku
  private danmakuInput: DanmakuInput
  private danmakuSettings: DanmakuSettings
  private danmakuOpenClose: DanmakuOpenClose
  private index: number = 0
  private timer: number | null = null

  constructor(player: Player) {
    this.player = player
    this.video = player.video
    this.container = player.el // div.Niplayer_video-wrapper
    this.init()
  }

  init() {
    this.danmaku = new Danmaku(this.container, this.player)
    this.initTemplate()
    this.initializeEvent()
  }

  initTemplate() {
    let ctx = this
    this.danmakuInput = new DanmakuInput(this.player, null, 'div')
    this.danmakuSettings = new DanmakuSettings(this.player, null, 'div')
    this.danmakuOpenClose = new DanmakuOpenClose(this.player, null, 'div')

    this.player.use({
      install(player) {
        player.mountComponent(ctx.danmakuOpenClose.id, ctx.danmakuOpenClose, {
          mode: {
            type: 'BottomToolBar',
            pos: 'medium'
          }
        })
        player.mountComponent(ctx.danmakuSettings.id, ctx.danmakuSettings, {
          mode: {
            type: 'BottomToolBar',
            pos: 'medium'
          }
        })
        player.mountComponent(ctx.danmakuInput.id, ctx.danmakuInput, {
          mode: {
            type: 'BottomToolBar',
            pos: 'medium'
          }
        })
      }
    })
  }

  initializeEvent() {
    // 弹幕功能实现的核心是timeupdate方法！！！！
    this.video.addEventListener('timeupdate', (e: Event) => {
      this.onTimeupdate(e)
    })

    this.video.addEventListener('seeking', (e: Event) => {
      this.onSeeking(e)
    })

    this.video.addEventListener('pause', () => {
      // 暂停所有的弹幕
      this.danmaku.pause()
    })

    this.video.addEventListener('play', () => {
      this.danmaku.resume()
    })

    this.danmakuInput.on('sendData', function (data) {
      // 此处为发送弹幕的逻辑
      // console.log(data)
      queue.push(data)
    })

    this.player.on(EVENT.DOT_DRAG, (e) => {
      this.danmaku.flush()
    })

    this.player.on('closeDanmaku', () => {
      // 隐藏所有的弹幕
      this.danmaku.close()
    })

    this.player.on('openDanmaku', () => {
      // 打开所有隐藏的弹幕
      this.danmaku.open()
    })
  }

  onTimeupdate(e: Event) {
    let video = e.target as HTMLVideoElement
    console.log(video.currentTime)
    for (let i = 0; i < 10; i++) {
      this.danmaku.addData(queue[i % queue.length])
    }
  }

  // start() {
  //   this.timer = window.setInterval(() => {
  //     this.danmaku.addData(queue[this.index++ % queue.length])
  //     // if (this.index >= 250) {
  //     //   window.clearInterval(this.timer)
  //     //   this.timer = null
  //     // }
  //   }, 50)
  //   // const send = () => {
  //   //   if (this.index >= 30) return
  //   //   let data = queue[(this.index++) % queue.length]
  //   //   this.danmaku.addData(data)
  //   //   send()
  //   // }
  //   // send()
  // }

  // pause() {
  //   window.clearInterval(this.timer)
  //   this.timer = null
  // }

  // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
  onSeeking(e: Event) {
    this.danmaku.flush()
  }
}
