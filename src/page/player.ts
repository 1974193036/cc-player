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
    this.attachSource(this.playerOptions.url)
    this.el.appendChild(this.video)
    this.toolBar = new ToolBar(this, this.el, 'div')
    this.initEvent()
    this.initPlugin()

    new DanmakuController(this)
  }

  initEvent() {
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

    this.video.ontimeupdate = (e) => {
      this.emit('timeupdate', e)
    }

    this.video.onplay = (e) => {
      this.emit('play', e)
    }

    this.video.onpause = (e) => {
      this.emit('pause', e)
    }

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
  }

  initPlugin() {
    if (this.playerOptions.plugins) {
      this.playerOptions.plugins.forEach((plugin) => {
        this.use(plugin)
      })
    }
  }

  initMp4Player(url: string) {
    let player = new Mp4MediaPlayer(this.playerOptions.url, this.video)
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
