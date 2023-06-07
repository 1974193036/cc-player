import { Danmaku, DanmakuInput } from '@/danmaku'
// import { queue } from '@/mock/queue'
import { Player } from '../page/player'
import { EVENT } from '@/events'
import { DanmakuOpenClose } from './UI/DanmakuOpenClose'
import { DanmakuSettings } from './UI/DanmakuSettings'
import { DanmakuOptions } from '@/types/Player'
import * as io from 'socket.io-client'
import '@/utils/polyfill'
import { $, addClass, removeClass } from '@/utils/domUtils'
import { Axios } from '../utils/net'
import { DanmakuData } from '../types/danmaku'

/**
 * @description 控制弹幕的类 Controller层
 */
export class DanmakuController {
  private player: Player
  private video: HTMLVideoElement
  private container: HTMLElement
  private danmaku: Danmaku
  private danmakuInput: DanmakuInput
  private danmakuOpenClose: DanmakuOpenClose
  private options: DanmakuOptions
  // el: div.video-danmaku-container
  private el: HTMLElement
  private danmakuLoading: HTMLElement
  private instance: Axios
  danmakuSettings: DanmakuSettings

  constructor(player: Player, options: DanmakuOptions) {
    this.player = player
    this.video = player.video
    this.container = player.el // div.Niplayer_video-wrapper

    this.options = Object.assign(
      {
        type: 'http'
      },
      options
    )
    this.instance = new Axios({
      baseURL: ''
    })
    this.init()
  }

  init() {
    this.onTimeupdate = this.onTimeupdate.bind(this)

    this.el = $('div.video-danmaku-container')
    this.el.style.backgroundColor = '#000'
    this.danmakuLoading = $('div')
    addClass(this.danmakuLoading, [
      'video-danmaku-loading-base',
      'video-danmaku-loading',
      'video-danmaku-shaking'
    ])
    this.danmakuLoading.innerHTML = '<span>弹幕数据加载中...</span>'
    this.container.appendChild(this.el)
    this.el.appendChild(this.danmakuLoading)
    this.danmaku = new Danmaku(this.el, this.player)
    this.initTemplate()
    this.initializeEvent()
    if (this.options.type === 'websocket') {
      this.initWebSocket()
    } else {
      this.initHTTP()
    }
  }

  //TODO 初始化websocket连接
  initWebSocket() {
    const socket = io.io(this.options.api, {
      transports: ['websocket', 'polling']
    })
    socket.on('connect', () => {
      this.setDanmakuSuccess()
      //* 当播放器时间更新时需要请求新的弹幕数据
      this.player.video.addEventListener('timeupdate', (e) => {
        // console.log(this.player.video.currentTime)
        socket.emit(EVENT.REQUEST_DANMAKU_DATA, {
          time: this.player.video.currentTime
        })
      })
      socket.on(EVENT.SEND_DANMAKU_DATA, (data: any[]) => {
        // console.log(`接受到数据${JSON.stringify(data)},当前时间${this.player.video.currentTime}`)
        for (let item of data) {
          this.danmaku.addData(item)
        }
      })
    })

    socket.io.on('error', () => {
      this.setDanmakuFail()
    })

    socket.connect()
  }

  initHTTP() {
    // TODO  初始化http轮询连接
    this.instance
      .get(this.options.api, {
        query: {
          time: 0
        }
      })
      .then(
        (value) => {
          this.setDanmakuSuccess()

          this.player.video.addEventListener('timeupdate', this.onTimeupdate)
        },
        (err) => {
          this.setDanmakuFail()
        }
      )
  }

  setDanmakuSuccess() {
    this.el.style.backgroundColor = ''
    ;(this.danmakuLoading.childNodes[0] as HTMLElement).innerText = '弹幕加载成功'
    removeClass(this.danmakuLoading, ['video-danmaku-loading', 'video-danmaku-shaking'])

    setTimeout(() => {
      addClass(this.danmakuLoading, ['video-danmaku-loading-hide'])
    }, 3000)
  }

  setDanmakuFail() {
    this.el.style.backgroundColor = ''
    ;(this.danmakuLoading.childNodes[0] as HTMLElement).innerText = '弹幕加载失败'
    removeClass(this.danmakuLoading, ['video-danmaku-loading', 'video-danmaku-shaking'])

    setTimeout(() => {
      addClass(this.danmakuLoading, ['video-danmaku-loading-hide'])
    }, 3000)
  }

  initTemplate() {
    let ctx = this
    this.danmakuInput = new DanmakuInput(this.player, null, 'div')
    this.danmakuSettings = new DanmakuSettings(this.player)
    this.danmakuOpenClose = new DanmakuOpenClose(this.player, null, 'div')

    this.player.use({
      install(player) {
        player.mountComponent(ctx.danmakuOpenClose.id, ctx.danmakuOpenClose, {
          mode: {
            type: 'BottomToolBar',
            pos: 'medium'
          }
        })
        // player.mountComponent(ctx.danmakuSettings.id, ctx.danmakuSettings, {
        //   mode: {
        //     type: 'BottomToolBar',
        //     pos: 'medium'
        //   }
        // })
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
    this.video.addEventListener('seeking', (e: Event) => {
      this.onSeeking(e)
    })

    this.video.addEventListener('pause', () => {
      // 暂停所有的弹幕
      this.danmaku.pause()
    })

    this.video.addEventListener('waiting', () => {
      this.danmaku.pause()
    })

    this.video.addEventListener('abort', () => {
      this.danmaku.flush()
    })

    this.video.addEventListener('play', () => {
      this.danmaku.resume()
    })

    this.danmakuInput.on('sendData', function (data) {
      // 此处为发送弹幕的逻辑
    })

    this.player.on(EVENT.DOT_DRAG, () => {
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
    // 时间更新
    // 如果默认请求弹幕数据的方式为http请求，则需要进行轮询
    // let video = e.target as HTMLVideoElement
    // // console.log(video.currentTime)
    // for (let i = 0; i < 10; i++) {
    //   this.danmaku.addData(queue[i % queue.length])
    // }

    // TODO 时间更新
    // TODO 如果默认请求弹幕数据的方式为http请求，则需要进行轮询
    this.instance
      .get(this.options.api, {
        query: {
          time: this.player.video.currentTime
        }
      })
      .then((value: DanmakuData[]) => {
        for (let data of value) {
          this.danmaku.addData(data)
        }
      })
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

  setTrackNumber(num: number) {
    this.danmaku.setTrackNumber(num)
  }

  setOpacity(opacity: number) {
    // 1/2 3/4
    this.danmaku.setOpacity(opacity)
  }

  setFontSize(scale: number) {
    this.danmaku.setFontSize(scale)
  }
}
