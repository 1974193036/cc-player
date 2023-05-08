// import { PlayerOptions, $warn, styles, Toolbar } from '../../index'
import { styles } from '@/styles/style'
import { $warn } from '@/utils/warn'
import { PlayerOptions } from '@/types/PlayerOptions'
import { Toolbar } from '@/components/Toolbar/toolbar'
import { LoadingMask } from '@/components/LoadingMask/loadingMask'
import { ErrorMask } from '@/components/ErrorMask/errorMask'
import { BaseEvent } from '@/class/BaseEvent'
import './player.less'

export class Player extends BaseEvent {
  private playerOptions = {
    url: '',
    width: '100%',
    height: '100%',
    autoPlay: false
  }

  private container: HTMLElement
  private toolbar: Toolbar
  private video: HTMLVideoElement
  private loadingMask: LoadingMask
  private errorMask: ErrorMask

  constructor(options: PlayerOptions) {
    super()
    this.playerOptions = Object.assign(this.playerOptions, options)
    this.init()
    this.initComponent()
    this.initContainer()
    // 初始化播放器事件
    this.initEvent()
  }

  init() {
    let container = (this.playerOptions as PlayerOptions).container
    // 标签判断
    if (!this.isTagValidate(container)) {
      $warn(
        '你传入的容器的元素类型不适合，建议传入块元素或者行内块元素，拒绝传入具有交互类型的元素例如input框等表单类型的元素'
      )
    }
    this.container = container
  }

  initComponent() {
    // 初始化视频播放器的工具栏组件
    this.toolbar = new Toolbar(this.container)

    this.loadingMask = new LoadingMask(this.container)
    this.errorMask = new ErrorMask(this.container)
  }

  initContainer() {
    this.container.style.width = this.playerOptions.width
    this.container.style.height = this.playerOptions.height
    this.container.className = styles['video-container']
    this.container.innerHTML = `
      <div class=${styles['video-wrapper']}>
        <video>
          <source src="${this.playerOptions.url}" type="video/mp4">
          您的浏览器不支持 HTML5 video 标签。
        </video>
      </div>
    `
    this.container.appendChild(this.toolbar.template)
    this.video = this.container.querySelector('video')
    this.toolbar.emit('mounted')
  }

  initEvent() {
    this.container.onclick = (e: Event) => {
      if (e.target === this.video) {
        if (this.video.paused) {
          this.video.play()
        } else if (this.video.played) {
          this.video.pause()
        }
      }
    }

    this.container.addEventListener('mouseenter', (e: MouseEvent) => {
      this.toolbar.emit('showtoolbar', e)
    })

    this.container.addEventListener('mousemove', (e: MouseEvent) => {
      this.toolbar.emit('showtoolbar', e)
    })

    this.container.addEventListener('mouseleave', (e: MouseEvent) => {
      this.toolbar.emit('hidetoolbar', e)
    })

    this.video.addEventListener('loadedmetadata', (e: Event) => {
      console.log('元数据加载完毕', this.video.duration)
      this.toolbar.emit('loadedmetadata', this.video.duration)
    })

    // 视频播放状态时，返回视频当前的播放时间
    // 视频暂停，则不会触发这个回调
    this.video.addEventListener('timeupdate', (e: Event) => {
      // console.log('currentTime', this.video.currentTime)
      this.toolbar.emit('timeupdate', this.video.currentTime)
    })

    // 当视频可以再次播放的时候就移除loading和error的mask，通常是为了应对在播放的过程中出现需要缓冲或者播放错误这种情况从而需要展示对应的mask
    this.video.addEventListener('play', (e: Event) => {
      this.loadingMask.removeLoadingMask()
      this.errorMask.removeErrorMask()
      this.toolbar.emit('play')
    })

    this.video.addEventListener('pause', (e: Event) => {
      this.toolbar.emit('pause')
    })

    this.video.addEventListener('waiting', (e: Event) => {
      this.loadingMask.removeLoadingMask()
      this.errorMask.removeErrorMask()
      this.loadingMask.addLoadingMask()
    })

    // 当浏览器请求视频发生错误的时候
    this.video.addEventListener('stalled', (e) => {
      console.log('视频加载发生错误')
      this.loadingMask.removeLoadingMask()
      this.errorMask.removeErrorMask()
      this.errorMask.addErrorMask()
    })

    this.video.addEventListener('error', (e) => {
      this.loadingMask.removeLoadingMask()
      this.errorMask.removeErrorMask()
      this.errorMask.addErrorMask()
    })

    this.video.addEventListener('abort', (e: Event) => {
      this.loadingMask.removeLoadingMask()
      this.errorMask.removeErrorMask()
      this.errorMask.addErrorMask()
    })
  }

  isTagValidate(el: HTMLElement): boolean {
    if (window.getComputedStyle(el).display === 'block') return true
    if (window.getComputedStyle(el).display === 'inline') return false
    if (window.getComputedStyle(el).display === 'inline-block') {
      if (
        el instanceof HTMLImageElement ||
        el instanceof HTMLInputElement ||
        el instanceof HTMLButtonElement ||
        el instanceof HTMLCanvasElement ||
        el instanceof HTMLVideoElement ||
        el instanceof HTMLAudioElement
      ) {
        return false
      }
    }
    return true
  }
}
