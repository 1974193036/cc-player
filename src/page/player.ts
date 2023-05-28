import { ComponentItem, PlayerOptions, DOMProps, registerOptions } from '@/types/Player'
import { Component } from '@/class/Component'
import { ToolBar } from '@/components/ToolBar/toolbar'
import { $, patchComponent } from '@/utils/domUtils'
import { Plugin } from '@/types/Player'
import { CONTROL_COMPONENT_STORE } from '@/utils/store'
import { getFileExtension } from '@/utils/play'
import MpdMediaPlayerFactory from '@/dash/MediaPlayer'
import Mp4MediaPlayer from '../mp4/MediaPlayer'
import { DanmakuController } from '@/danmaku'
import { TimeLoading } from '@/components/Loading/parts/TimeLoading'
import { ErrorLoading } from '@/components/Loading/parts/ErrorLoading'

import './player.less'

class Player extends Component implements ComponentItem {
  readonly id = 'Player'
  // el: div.video-wrapper

  // 播放器的默认配置
  readonly playerOptions: PlayerOptions = {
    url: '',
    container: document.body,
    autoplay: false,
    width: '100%',
    height: '100%'
  }
  props: DOMProps
  video: HTMLVideoElement
  container: HTMLElement
  toolBar: ToolBar
  loading: TimeLoading
  error: ErrorLoading
  enableSeek = true

  constructor(options: PlayerOptions) {
    super(options.container, 'div.video-wrapper')
    this.playerOptions = Object.assign(this.playerOptions, options)
    options.container.className = 'video-container'
    options.container.style.width = this.playerOptions.width
    options.container.style.height = this.playerOptions.height
    this.container = options.container
    this.init()
  }

  init() {
    this.video = $('video')
    this.video.crossOrigin = 'anonymous'
    this.attachSource(this.playerOptions.url)
    this.el.appendChild(this.video)
    this.toolBar = new ToolBar(this, this.el, 'div')
    this.initComponent()
    this.initEvent()
    this.initPlugin()
  }

  initComponent(): void {
    // new DanmakuController(this)

    this.loading = new TimeLoading(this, '视频加载中，请稍等....', this.el)
    this.error = new ErrorLoading(this, '视频加载发送错误', this.el)
  }

  initEvent() {
    this.video.onclick = (e) => {
      if (this.video.paused) {
        this.video.play()
      } else if (this.video.played) {
        this.video.pause()
      }
    }

    this.el.onmouseenter = (e) => {
      this.emit('showtoolbar', e)
    }

    this.el.onmousemove = (e) => {
      this.emit('showtoolbar', e)
    }

    this.el.onmouseleave = (e) => {
      this.emit('hidetoolbar', e)
    }

    this.video.onloadedmetadata = (e) => {
      this.emit('loadedmetadata', e)
    }

    this.video.addEventListener('timeupdate', (e) => {
      this.emit('timeupdate', e)
    })

    this.video.onplay = (e) => {
      this.emit('play', e)
    }

    this.video.onpause = (e) => {
      this.emit('pause', e)
    }

    // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
    this.video.addEventListener('seeking', (e) => {
      // 防抖效果：针对Dot按下拖动时不触发seeking，拖完鼠标抬起时再触发seeking
      if (this.enableSeek) {
        this.emit('seeking', e)
      }
    })

    // waiting 事件在视频由于需要缓冲下一帧而停止时触发
    this.video.addEventListener('waiting', (e) => {
      this.emit('waiting', e)
    })

    // canplay 该视频已准备好开始播放
    this.video.addEventListener('canplay', (e) => {
      this.emit('canplay', e)
    })

    // error 视频加载发生错误时
    this.video.addEventListener('error', (e) => {
      this.emit('videoError')
    })

    // abort 视频终止加载时
    this.video.addEventListener('abort', (e) => {
      this.emit('videoError')
    })

    // ratechange 事件在音频/视频(audio/video)播放速度发生改变时触发(如用户切换到慢速或快速播放模式)。
    this.video.addEventListener('ratechange', (e) => {
      this.emit('ratechange')
    })

    this.on('progress-click', (e, ctx) => {
      let scale = e.offsetX / ctx.el.offsetWidth
      if (scale < 0) {
        scale = 0
      } else if (scale > 1) {
        scale = 1
      }
      this.video.currentTime = Math.floor(scale * this.video.duration)
      this.video.paused && this.video.play()
    })

    this.on('inputFocus', () => {
      this.el.onmouseleave = null
    })

    this.on('inputBlur', () => {
      this.el.onmouseleave = (e) => {
        this.emit('hidetoolbar', e)
      }
    })

    this.on('dotdown', () => {
      console.log('dotdown')
      this.enableSeek = false
    })
    this.on('dotup', () => {
      console.log('dotup')
      this.enableSeek = true
    })
  }

  initPlugin() {
    if (this.playerOptions.plugins) {
      this.playerOptions.plugins.forEach((plugin) => {
        this.use(plugin)
      })
    }
  }

  initMp4Player(url: string) {
    new Mp4MediaPlayer(this.playerOptions.url, this)
  }

  initMpdPlayer(url: string) {
    // 工厂模式
    // let player = new MediaPlayer({context: {}}, ...args)
    let player = MpdMediaPlayerFactory().create()
    player.attachVideo(this.video)
    player.attachSource(url)
  }

  attachSource(url: string) {
    switch (getFileExtension(url)) {
      case 'mp4':
      case 'mp3':
        // this.initMp4Player(url)
        this.video.src = url
        break
      case 'mpd':
        this.initMpdPlayer(url)
        break
      case 'm3u8':
      // ToDo
    }
  }

  // 注册最右侧的控制栏上的组件
  registerControls(
    id: string,
    component: Partial<ComponentItem> & registerOptions,
    pos: 'left' | 'right' | 'medium'
  ) {
    let store = CONTROL_COMPONENT_STORE
    if (store.has(id)) {
      // patchComponent(store.get(id), component)
      if (component.replaceElementType) {
        patchComponent(store.get(id), component, {
          replaceElementType: component.replaceElementType
        })
      } else {
        patchComponent(store.get(id), component)
      }
    } else {
      // 如果该组件实例是用户自创的话
      if (!component.el) throw new Error(`传入的原创组件${id}没有对应的DOM元素`)
      if (pos === 'left') {
        this.toolBar.controller.leftArea.appendChild(component.el)
      } else if (pos === 'right') {
        let settings = this.toolBar.controller.rightArea
        settings.insertBefore(component.el, settings.firstChild)
      } else if (pos === 'medium') {
        this.toolBar.controller.mediumArea.appendChild(component.el)
      }
    }
  }

  /**
   * @description 注册对应的组件
   * @param plugin
   */
  use(plugin: Plugin) {
    plugin.install(this)
  }
}

export { Player }
