import { Danmaku } from '@/danmaku'
import { queue } from '@/mock/queue'

export class DanmakuController {
  private video: HTMLVideoElement
  private container: HTMLElement
  private danmaku: Danmaku
  private index: number = 0
  private timer: number | null = null

  constructor(video: HTMLVideoElement, container: HTMLElement) {
    this.video = video
    this.container = container
    console.log(this.video, this.container)
    this.init()
  }

  init() {
    this.danmaku = new Danmaku([], this.container)
    this.initializeEvent()
  }

  attachVideo(video: HTMLVideoElement) {
    this.video = video
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
  }

  onTimeupdate(e: Event) {
    let video = e.target as HTMLVideoElement
    let currentTime = video.currentTime
  }

  onSeeking(e: Event) {}

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
