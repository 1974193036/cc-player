import {
  ComponentItem,
  PlayerOptions,
  DOMProps,
  RegisterComponentOptions,
  UpdateComponentOptions
} from '@/types/Player'
import { Component } from '@/class/Component'
import { ToolBar } from '@/components/ToolBar/toolbar'
import { $, patchComponent } from '@/utils/domUtils'
import { Plugin } from '@/types/Player'
import { COMPONENT_STORE, ONCE_COMPONENT_STORE } from '@/utils/store'
import { getFileExtension } from '@/utils/play'
import MpdMediaPlayerFactory from '@/dash/MediaPlayer'
import Mp4MediaPlayer from '../mp4/MediaPlayer'
// import { DanmakuController } from '@/danmaku'
import { TimeLoading } from '@/components/Loading/parts/TimeLoading'
import { ErrorLoading } from '@/components/Loading/parts/ErrorLoading'
import { TopBar } from '@/components/TopBar/TopBar'

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
  video: HTMLVideoElement
  props: DOMProps
  toolBar: ToolBar
  topbar: TopBar
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
    this.initComponent()
    this.initEvent()
    this.initPlugin()
    this.initResizeObserver()
  }

  initComponent(): void {
    this.loading = new TimeLoading(this, '视频加载中，请稍等....', this.el)
    this.error = new ErrorLoading(this, '视频加载发送错误', this.el)
    this.toolBar = new ToolBar(this, this.el, 'div')
    this.topbar = new TopBar(this, this.el, 'div')

    // new DanmakuController(this)
  }

  initResizeObserver() {
    /**
      window.resize弊端
        reize事件会在一秒内触发将近60次，所以很容易在改变窗口大小时导致性能问题
        它会监听每个元素的大小变化，而不是具体到某个元素的变化
        只有window对象才有resize事件，而不是具体某个元素有resize事件
      ResizeObserver
        可以监听到 Element 的内容区域或SVGElement的边界框改变
     */

    // 避免`COMPONENT_STORE.set(id, component)`的操作，让`COMPONENT_STORE.forEach`一直死循环
    let _STORE = new Map(COMPONENT_STORE)
      
    const resizeObserver = new ResizeObserver((entries) => {
      console.log('监听到了尺寸变化了...')
      let width = entries[0].contentRect.width
      if (width <= 600) {
        _STORE.forEach((value, key) => {
          if (['Playrate'].includes(key)) {
            this.unmountComponent(key)
            this.mountComponent(key, ONCE_COMPONENT_STORE.get(key), {
              mode: {
                type: 'TopToolBar',
                pos: 'right'
              }
            })
          }
        })
      }
    })
    // 开始观察
    resizeObserver.observe(this.el)
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

  // 注册/挂载自己的组件,其中的id为组件实例的名称，分为内置和用户自定义这两种情况；注意，id是唯一的，不能存在两个具有相同id的组件实例!!!
  mountComponent(id: string, component: ComponentItem, options?: RegisterComponentOptions) {
    if (COMPONENT_STORE.has(id)) {
      throw new Error('无法挂载一个已经存在于视图上的组件，请先将其卸载或者删除')
    }

    COMPONENT_STORE.set(id, component)
    ONCE_COMPONENT_STORE.set(id, component)

    if (!options) {
      if (!component.container) {
        throw new Error('必须传入Options选项或者传入的组件实例中需要有container选项')
      }
      component.container.appendChild(component.el)
    } else {
      let mode = options.mode
      if (mode.type === 'BottomToolBar') {
        if (mode.pos === 'left') {
          this.toolBar.controller.leftArea.appendChild(component.el)
        } else if (mode.pos === 'right') {
          this.toolBar.controller.rightArea.appendChild(component.el)
        } else if (mode.pos === 'medium') {
          this.toolBar.controller.mediumArea.appendChild(component.el)
        }
      } else if (mode.type === 'TopToolBar') {
        if (mode.pos === 'left') {
          this.topbar.leftArea.appendChild(component.el)
        } else {
          this.topbar.rightArea.appendChild(component.el)
        }
      }
      component.container = component.el.parentElement
    }
  }

  // 更新一个已经挂载到视图层上的组件
  updateComponent(id: string, component: Partial<ComponentItem>, options: UpdateComponentOptions) {
    if (!COMPONENT_STORE.get(id)) {
      throw new Error('该组件不存在或者已经被卸载')
    }
    patchComponent(COMPONENT_STORE.get(id), component, options)
  }

  // 卸载某一个component组件，所谓卸载一个组件指的是仅仅将其DOM元素从视图上移除，但是不会删除其实例对象，还可以继续挂载
  unmountComponent(id: string) {
    if (!COMPONENT_STORE.has(id)) {
      throw new Error('该组件不存在或者已经被卸载')
    }
    let instance = COMPONENT_STORE.get(id)
    instance.el.parentElement.removeChild(instance.el)
    COMPONENT_STORE.delete(id)
  }

  // 彻底删除一个组件，也就是直接销毁组件实例，卸载组件仅仅是将其el元素从视图上移除，但任然保留组建的实例对象
  deleteComponent(id: string) {
    if (COMPONENT_STORE.has(id)) {
      this.unmountComponent(id)
    }
    ONCE_COMPONENT_STORE.delete(id)
  }

  // // 注册最右侧的控制栏上的组件
  // registerControls(
  //   id: string,
  //   component: Partial<ComponentItem> & registerOptions,
  //   pos: 'left' | 'right' | 'medium'
  // ) {
  //   let store = CONTROL_COMPONENT_STORE
  //   if (store.has(id)) {
  //     // patchComponent(store.get(id), component)
  //     if (component.replaceElementType) {
  //       patchComponent(store.get(id), component, {
  //         replaceElementType: component.replaceElementType
  //       })
  //     } else {
  //       patchComponent(store.get(id), component)
  //     }
  //   } else {
  //     // 如果该组件实例是用户自创的话
  //     if (!component.el) throw new Error(`传入的原创组件${id}没有对应的DOM元素`)
  //     if (pos === 'left') {
  //       this.toolBar.controller.leftArea.appendChild(component.el)
  //     } else if (pos === 'right') {
  //       let settings = this.toolBar.controller.rightArea
  //       settings.insertBefore(component.el, settings.firstChild)
  //     } else if (pos === 'medium') {
  //       this.toolBar.controller.mediumArea.appendChild(component.el)
  //     }
  //   }
  // }

  /**
   * @description 注册对应的组件
   * @param plugin
   */
  use(plugin: Plugin) {
    plugin.install(this)
  }
}

export { Player }
