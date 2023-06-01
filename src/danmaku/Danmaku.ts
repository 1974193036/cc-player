import { DanmakuData, Track } from '@/types/danmaku'
import { nextTick } from '@/utils/nextTick'
import { Player } from '@/page/player'
import { PriorityQueue } from './utils/PriorityQueue'

/**
 * @description 弹幕类，只专注于实现弹幕的基本逻辑，View层
 */

let flag = false

export class Danmaku {
  private queue: PriorityQueue<DanmakuData>
  private moovingQueue: DanmakuData[] = [] // 正在运动中的弹幕
  private container: HTMLElement
  private player: Player
  private timer: number | null = null
  private renderInterval: number = 100
  // 每一条弹幕轨道的高度默认为20px
  private trackHeight: number = 20
  private isStopped = true
  private isHidden = false
  private tracks: Array<{
    track: Track
    datas: DanmakuData[]
  }> = new Array(15)
  private defaultDanma: DanmakuData = {
    message: 'default message',
    fontColor: '#fff',
    fontSize: this.trackHeight,
    fontFamily: '',
    fontWeight: 500
  }

  constructor(container: HTMLElement, player: Player) {
    this.queue = new PriorityQueue<DanmakuData>()
    this.container = container // div.Niplayer_video-wrapper
    this.player = player
    this.init()
  }

  init() {
    for (let i = 0; i < this.tracks.length; i++) {
      if (!this.tracks[i]) {
        this.tracks[i] = {
          track: {
            id: 0,
            priority: 0
          },
          datas: []
        }
      }
      this.tracks[i].track = {
        id: i,
        priority: 15 - i
      }
    }
  }

  // 暂停所有的弹幕
  pause() {
    this.isStopped = true
    window.clearTimeout(this.timer)
    this.moovingQueue.forEach((data) => {
      this.pauseOneData(data)
    })
  }

  // 恢复弹幕的运动,恢复弹幕运动此处的逻辑有问题(已修复)
  resume() {
    this.isStopped = false
    this.timer = window.setTimeout(() => {
      this.render()
    }, this.renderInterval)
    this.moovingQueue.forEach((data) => {
      this.resumeOneData(data)
    })
  }

  // 恢复单条弹幕的运动
  resumeOneData(data) {
    data.dom.style.transform = `translateX(-${data.totalDistance}px)`
    data.startTime = Date.now()
    data.rollTime = (data.totalDistance - data.rollDistance) / data.rollSpeed
    data.dom.style.transition = `transform ${data.rollTime}s linear`
  }

  // 暂停单条弹幕的运动
  pauseOneData(data) {
    let currentRollDistance = ((Date.now() - data.startTime) * data.rollSpeed) / 1000
    data.rollDistance = currentRollDistance + (data.rollDistance ? data.rollDistance : 0)
    data.dom.style.transition = ''
    data.dom.style.transform = `translateX(${-data.rollDistance}px)`
  }

  startDanmaku() {
    this.render()
  }

  // 向缓冲区添加正确格式的弹幕
  addData(data: any) {
    this.queue.push(this.parseData(data))

    // 如果检测到缓冲区弹幕为0,也就是定时器被关闭的话就重新开启定时器
    if (flag) return
    if (this.timer === null) {
      nextTick(() => {
        this.render()
      })
      flag = true
    }
  }

  parseData(data: any): DanmakuData {
    if (typeof data === 'string') {
      return {
        message: data,
        fontColor: '#fff',
        fontSize: this.trackHeight,
        fontFamily: '',
        fontWeight: 500,
        timestamp: this.player.video.currentTime
      }
    }
    if (typeof data === 'object') {
      if (!data.message || data.message === '') {
        throw new Error(`传入的弹幕数据${data}不合法`)
      }
      return Object.assign({ ...this.defaultDanma, timestamp: this.player.video.currentTime }, data)
    }
    throw new Error(`传入的弹幕数据${data}不合法`)
  }

  render() {
    try {
      this.renderToDOM()
    } finally {
      this.renderEnd()
    }
  }

  renderEnd() {
    if (this.queue.length === 0) {
      window.clearTimeout(this.timer)
      this.timer = null
      flag = false
    } else {
      this.timer = window.setTimeout(() => {
        this.render()
      }, this.renderInterval)
    }
  }

  // 向指定的DOM元素上渲染一条弹幕
  renderToDOM() {
    if (this.queue.length === 0) return
    let data = this.queue.shift()
    if (!data.dom) {
      let dom = document.createElement('div')
      dom.innerText = data.message
      dom.className = 'danmaku-box'
      if (data.fontFamily !== '') {
        dom.style.fontFamily = data.fontFamily
      }
      dom.style.color = data.fontColor
      dom.style.fontSize = data.fontSize + 'px'
      dom.style.fontWeight = data.fontWeight + ''
      dom.style.position = 'absolute'
      dom.style.left = '100%'
      dom.style.whiteSpace = 'nowrap'
      dom.style.willChange = 'transform'
      dom.style.cursor = 'pointer'
      dom.style.visibility = this.isHidden ? 'hidden' : ''
      data.dom = dom
      this.container.appendChild(dom)
    }
    data.totalDistance = this.container.clientWidth + data.dom.clientWidth
    data.width = data.dom.clientWidth
    // 弹幕的总的位移时间，用于计算弹幕的速度
    data.rollTime =
      data.rollTime || Math.floor(data.totalDistance * 0.0058 * (Math.random() * 0.3 + 0.7))
    data.rollSpeed = parseFloat((data.totalDistance / data.rollTime).toFixed(2))
    // useTracks描述的是该弹幕占用了多少个轨道
    data.useTracks = Math.ceil(data.dom.clientHeight / this.trackHeight)
    // 重点，此处数组y的作用是表明该弹幕占的轨道的id数组
    data.y = []
    data.dom.ontransitionstart = (e) => {
      data.startTime = Date.now()
    }

    data.dom.onmouseenter = () => {
      if (this.isStopped) return
      this.pauseOneData(data)
    }

    data.dom.onmouseleave = () => {
      if (this.isStopped) return
      this.resumeOneData(data)
    }

    this.addDataToTrack(data)

    if (data.y.length === 0) {
      if ([...this.container.childNodes].includes(data.dom)) {
        this.container.removeChild(data.dom)
      }
      this.queue.push(data)
    } else {
      data.dom.style.top = data.y[0] * this.trackHeight + 3 + 'px'
      this.startAnimate(data)
    }
  }

  // 将指定的data添加到弹幕轨道上
  addDataToTrack(data: DanmakuData) {
    // console.log(this.tracks)
    // [
    //   {track: {id:0, priority: 15}, datas: DanmakuData[]},
    //   {track: {id:1, priority: 14}, datas: DanmakuData[]},
    //   {track: {id:2, priority: 13}, datas: DanmakuData[]},
    //   {track: {id:14, priority: 1}, datas: DanmakuData[]},
    // ]
    let y = []
    for (let i = 0; i < this.tracks.length; i++) {
      let track = this.tracks[i]
      let datas = track.datas

      if (datas.length === 0) {
        y.push(i)
      } else {
        let lastItem = datas[datas.length - 1]
        // diatance代表的就是在该轨道上弹幕lastItem已经行走的距离
        let distance = (lastItem.rollSpeed * (Date.now() - lastItem.startTime)) / 1000
        if (
          distance > lastItem.width &&
          (data.rollSpeed <= lastItem.rollSpeed ||
            (distance - lastItem.width) / (data.rollSpeed - lastItem.rollSpeed) >
              (this.container.clientWidth + lastItem.width - distance) / lastItem.rollSpeed)
        ) {
          y.push(i)
        } else {
          y = []
        }
      }
      if (y.length >= data.useTracks) {
        data.y = y
        data.y.forEach((id) => {
          this.tracks[id].datas.push(data)
        })
        break
      }
    }
  }

  removeDataFromTrack(data: DanmakuData) {
    data.y.forEach((id) => {
      let datas = this.tracks[id].datas
      let index = datas.indexOf(data)
      if (index === -1) return
      datas.splice(index, 1)
    })
  }

  startAnimate(data: DanmakuData) {
    this.moovingQueue.push(data)
    data.dom.style.transform = `translateX(-${data.totalDistance}px)`
    data.dom.style.transition = `transform ${data.rollTime}s linear`
    data.dom.ontransitionend = (e) => {
      this.container.removeChild(data.dom)
      this.removeDataFromTrack(data)
      let index = this.moovingQueue.indexOf(data)
      if (index > -1) {
        this.moovingQueue.splice(index, 1)
      }
    }
  }

  // 清空所有的弹幕，包括正在运动中的或者还在缓冲区未被释放的
  flush() {
    this.moovingQueue.forEach((data) => {
      data.dom.parentNode?.removeChild(data.dom)
      data.dom.ontransitionstart = null
      data.dom.ontransitionend = null
    })
    this.queue.forEach((data) => {
      if ([...this.container.children].includes(data.dom)) {
        data.dom.parentNode?.removeChild(data.dom)
        data.dom.ontransitionstart = null
        data.dom.ontransitionend = null
      }
    })
    // 清空轨道上的所有数据
    this.tracks.forEach((obj) => {
      obj.datas = []
    })
    this.moovingQueue = []
    this.queue.clear()
  }

  // 隐藏所有的弹幕
  close() {
    this.isHidden = true
    this.moovingQueue.forEach((data) => {
      data.dom.style.visibility = 'hidden'
    })

    this.queue.forEach((data, index) => {
      if (data.dom) {
        data.dom.style.visibility = 'hidden'
      }
    })
  }

  open() {
    this.isHidden = false
    this.moovingQueue.forEach((data) => {
      data.dom.style.visibility = ''
    })

    this.queue.forEach((data, index) => {
      if (data.dom) {
        data.dom.style.visibility = ''
      }
    })
  }

  // // 丢弃一部分没用或者过时的弹幕
  // disCard(start: number, end: number) {
  //   this.queue.splice(start, end - start + 1)
  // }

  // clearOutdatedDanmaku(currentTime: number, interval: number) {
  //   this.queue = this.queue.filter((item) => {
  //     if (currentTime - item.timestamp > interval) {
  //       return false
  //     }
  //     return true
  //   })
  // }
}
