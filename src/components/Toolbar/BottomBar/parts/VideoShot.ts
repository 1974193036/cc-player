import { Player } from '@/page/player'
import { DOMProps, Node } from '@/types/Player'
import { $, addClass, createSvg, createSvgs, removeClass } from '@/utils/domUtils'
import { storeControlComponent } from '@/utils/store'
import { confirmPath, countdownPath, videoShotPath$1, videoShotPath$2 } from '@/svg'
import { Toast } from '@/components/Toast/Toast'
import { Options } from './Options'
import { HTMLMediaElementWithCaputreStream } from '@/class/HTMLMediaElementWithCaputreStream'

export class VideoShot extends Options {
  readonly id = 'VideoShot'
  // el: div.video-videoshot.video-controller
  countDown = 30
  timer: number | null = null
  warnIcon: SVGSVGElement
  successIcon: SVGSVGElement
  inProgressIcon: SVGSVGElement

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
    addClass(this.el, ['video-videoshot', 'video-controller'])
    this.icon = createSvg(videoShotPath$1, '0 0 1024 1024')
    this.iconBox.appendChild(this.icon)

    this.hideBox.innerText = '视频录制'
  }

  initEvent() {
    this.onDown = this.onDown.bind(this)
    if (this.player.env === 'PC') {
      this.el.onmousedown = this.onDown
    } else {
      this.el.ontouchstart = this.onDown
    }
  }

  // 当鼠标或者手指按下的时刻开始启动录屏
  onDown(e: Event) {
    e.stopPropagation()
    addClass(this.icon, ['video-videoshot-animate'])
    if (this.player.video.played) {
      this.videoShot()
    }
  }

  videoShot() {
    let inProgressToast = this.createInProgressToast()

    // MediaRecorder(stream[, options]) 构造函数会创建一个对指定的 MediaStream 进行录制的 MediaRecorder 对象
    let recorder = new MediaRecorder(
      (this.player.video as HTMLMediaElement as HTMLMediaElementWithCaputreStream).captureStream(60)
    )

    recorder.addEventListener('start', (e) => {
      console.log('开始录制视频')
    })

    recorder.addEventListener('stop', (e) => {
      console.log('结束录制视频')
    })

    // 当 MediaRecorder 将媒体数据传递到您的应用程序以供使用时，将触发该事件。数据在包含数据的Blob对象中提供
    recorder.addEventListener('dataavailable', (e: BlobEvent) => {
      // console.log(e.data) // 是一个Blob

      let data = e.data
      let a = document.createElement('a')
      // createObjectURL: 用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象
      a.href = window.URL.createObjectURL(data)
      a.download = 'Test.mp4'
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      a = null
    })

    // 开始录制视频
    recorder.start()

    this.timer = window.setInterval(() => {
      console.log(this.countDown)
      inProgressToast.el.querySelector(
        'span'
      ).innerText = `开始录屏，最多录制30秒; 还剩${this.countDown}秒`
      if (this.countDown === 0) {
        // 结束录制视频，30s后自动结束录制
        this.stop(recorder)
        return
      }
      this.countDown--
    }, 1000)

    if (this.player.env === 'Mobile') {
      this.el.ontouchend = (e) => {
        removeClass(this.icon, ['video-videoshot-animate'])
        this.stop(recorder)
        // 销毁toast组件
        inProgressToast.dispose()
        inProgressToast = null
        let successToast = this.createSuccessToast()
        window.setTimeout(() => {
          successToast.dispose()
          successToast = null
        }, 2000)
      }
    } else {
      // 结束录制视频，手动抬起鼠标结束录制
      this.el.onmouseup = (e) => {
        removeClass(this.icon, ['video-videoshot-animate'])
        this.stop(recorder)
        // 销毁toast组件
        inProgressToast.dispose()
        inProgressToast = null
        let successToast = this.createSuccessToast()
        window.setTimeout(() => {
          successToast.dispose()
          successToast = null
        }, 2000)
      }
    }
  }

  stop(recorder: MediaRecorder) {
    recorder.stop()
    recorder = null
    window.clearInterval(this.timer)
    this.timer = null
    this.el.onmouseup = null
    this.el.ontouchend = null
    this.countDown = 30
  }

  createInProgressToast(): Toast {
    let inProgressIcon = createSvg(countdownPath, '0 0 1024 1024')
    let dom = $('div.video-videoshot-inprogress-toast')
    let span = $('span')
    span.innerText = `开始录屏，最多录制30秒; 还剩${this.countDown}秒`
    dom.appendChild(inProgressIcon)
    dom.appendChild(span)
    let toast = new Toast(this.player, dom)

    return toast
  }

  createSuccessToast(): Toast {
    let successIcon = createSvg(confirmPath, '0 0 1024 1024')
    let dom = $('div.video-videoshot-success-toast')
    let span = $('span')
    span.innerText = `录制成功!`
    dom.appendChild(successIcon)
    dom.appendChild(span)
    let toast = new Toast(this.player, dom)

    return toast
  }
}
