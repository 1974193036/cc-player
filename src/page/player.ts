import {
  ComponentItem,
  PlayerOptions,
  DOMProps,
  RegisterComponentOptions,
  UpdateComponentOptions
} from '@/types/Player'
import { Component } from '@/class/Component'
import { ToolBar } from '@/components/ToolBar/toolbar'
import { $, addClass, patchComponent, removeClass } from '@/utils/domUtils'
import { Plugin } from '@/types/Player'
import { COMPONENT_STORE, HIDEEN_COMPONENT_STORE, ONCE_COMPONENT_STORE } from '@/utils/store'
import { getFileExtension } from '@/utils/play'
import MpdMediaPlayerFactory from '@/dash/MediaPlayer'
import Mp4MediaPlayer from '../mp4/MediaPlayer'
// import { DanmakuController } from '@/danmaku'
import { TimeLoading } from '@/components/Loading/parts/TimeLoading'
import { ErrorLoading } from '@/components/Loading/parts/ErrorLoading'
import { TopBar } from '@/components/TopBar/TopBar'
import { Env } from '@/utils/env'
import { MobileVolume } from '@/components/Mobile/MobileVolume'
import { wrap } from 'ntouch.js'

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
  env = Env.env
  fullScreenMode: 'Vertical' | 'Horizontal' = 'Vertical'
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
    this.video['playsinline'] = true // IOS微信浏览器支持小窗内播放,也就是不是全屏播放
    this.video['x5-video-player-type'] = 'h5' // 启用H5播放器,是wechat安卓版特性
    this.video.crossOrigin = 'anonymous'

    this.attachSource(this.playerOptions.url)
    this.el.appendChild(this.video)
    this.initComponent()
    this.initTemplate()
    this.initEvent()
    this.initPlugin()
    this.initResizeObserver()
    this.checkFullScreenMode()
  }

  initTemplate(): void {
    if (this.env === 'Mobile') {
      // 如果是在移动端，则音量的调节使用手势决定的
      this.unmountComponent('Volume')
      new MobileVolume(this, this.el, 'div')
    }
  }

  initComponent(): void {
    this.loading = new TimeLoading(this, '视频加载中，请稍等....', this.el)
    this.error = new ErrorLoading(this, '视频加载发送错误', this.el)
    this.toolBar = new ToolBar(this, this.el, 'div')
    this.topbar = new TopBar(this, this.el, 'div')

    // new DanmakuController(this)
  }

  /**
   * @@description 监听视频播放器大小的变化
   */
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
      // console.log('监听到了尺寸变化了...')
      // 触发尺寸变化事件
      this.emit('resize', entries)
      let width = entries[0].contentRect.width
      let subsetting
      // 当尺寸发生变化的时候视频库只调整基本的内置组件，其余用户自定义的组件响应式需要自己实现
      if (width <= 600) {
        // 默认在小屏幕的情况下只将SubSetting移动到上端，其余在底部注册的控件需要隐藏
        _STORE.forEach((value, key) => {
          if (['SubSetting'].indexOf(key) !== -1) {
            subsetting = ONCE_COMPONENT_STORE.get(key)
            this.unmountComponent(key)
          } else if (['PicInPic', 'Playrate', 'ScreenShot', 'VideoShot'].indexOf(key) !== -1) {
            if (!HIDEEN_COMPONENT_STORE.get(key)) {
              this.hideComponent(key)
            }
          }
        })
        this.mountComponent(subsetting.id, subsetting, {
          mode: {
            type: 'TopToolBar',
            pos: 'right'
          }
        })
        addClass(subsetting.el, ['video-subsettings', 'video-topbar-controller'])
      } else {
        // 展示之前隐藏的组件
        let _HIDDEN_STORE = new Map(HIDEEN_COMPONENT_STORE)
        _HIDDEN_STORE.forEach((value, key) => {
          this.showComponent(key)
        })
        if (COMPONENT_STORE.has('SubSetting')) {
          let key = 'SubSetting'
          let component = ONCE_COMPONENT_STORE.get(key)
          // 如果SubSetting已经挂载到视图上，需要先卸载
          this.unmountComponent(key)
          this.mountComponent(key, component, {
            mode: {
              type: 'BottomToolBar',
              pos: 'right'
            },
            index: 1
          })
          addClass(component.el, ['video-subsettings', 'video-controller'])
        }
      }
    })
    // 开始观察
    resizeObserver.observe(this.el)
  }

  initEvent() {
    if (this.env === 'Mobile') {
      this.initMobileEvent()
    } else {
      this.initPCEvent()
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

    this.on('enterFullscreen', () => {
      document.querySelectorAll('.video-controller').forEach((el) => {
        ;(el as HTMLElement).style.marginRight = '10px'
      })
      document.querySelectorAll('.video-topbar-controller').forEach((el) => {
        ;(el as HTMLElement).style.marginRight = '10px'
      })
    })

    this.on('leaveFullscreen', () => {
      document.querySelectorAll('.video-controller').forEach((el) => {
        ;(el as HTMLElement).style.marginRight = ''
      })
      document.querySelectorAll('.video-topbar-controller').forEach((el) => {
        ;(el as HTMLElement).style.marginRight = ''
      })
    })
  }

  initPCEvent(): void {
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
  }

  initMobileEvent(): void {
    // 单击
    wrap(this.video).addEventListener('singleTap', (e) => {
      // console.log(e, 'singletap')
      if (this.toolBar.status === 'hidden') {
        this.emit('showtoolbar', e)
      } else {
        this.emit('hidetoolbar', e)
      }
      this.emit('videoClick')
    })

    // 双击
    wrap(this.video).addEventListener('doubleTap', (e) => {
      // console.log(e, 'doubleTap')
      if (this.video.paused) {
        this.video.play()
      } else if (this.video.played) {
        this.video.pause()
      }
    })

    // 手势上下处于滑动中
    wrap(this.video).addEventListener('move', (e) => {
      // console.log(e, 'move')
      let dx = e.deltaX
      let dy = e.deltaY
      if (Math.abs(dx) <= 20 && Math.abs(dx) < Math.abs(dy)) {
        this.emit('moveVertical', e)
      }
    })

    // 手势上下滑动结束
    wrap(this.video).addEventListener('swipe', (e) => {
      console.log(e, 'swipe')
      let dx = e.endPos.x - e.startPos.x
      let dy = e.endPos.y - e.startPos.y
      if (Math.abs(dx) <= 20 && Math.abs(dx) < Math.abs(dy)) {
        this.emit('slideVertical', e)
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

  checkFullScreenMode() {}

  // 注册/挂载自己的组件,其中的id为组件实例的名称，分为内置和用户自定义这两种情况；注意，id是唯一的，不能存在两个具有相同id的组件实例!!!
  mountComponent(id: string, component: ComponentItem, options?: RegisterComponentOptions) {
    if (COMPONENT_STORE.has(id)) {
      throw new Error('无法挂载一个已经存在于视图上的组件，请先将其卸载或者删除')
    }

    COMPONENT_STORE.set(id, component)
    if (!ONCE_COMPONENT_STORE.has(id)) {
      ONCE_COMPONENT_STORE.set(id, component)
    }

    if (!options) {
      if (!component.container) {
        throw new Error('必须传入Options选项或者传入的组件实例中需要有container选项')
      }
      component.container.appendChild(component.el)
    } else {
      let mode = options.mode
      if (mode.type === 'BottomToolBar') {
        let area: HTMLElement
        if (mode.pos === 'left') {
          area = this.toolBar.controller.leftArea
        } else if (mode.pos === 'right') {
          area = this.toolBar.controller.rightArea
        } else if (mode.pos === 'medium') {
          area = this.toolBar.controller.mediumArea
        }
        let children = [...area.children]
        if (!options.index) {
          area.appendChild(component.el)
        } else {
          if (options.index < 0) throw new Error('index不能传入负值')
          area.insertBefore(component.el, children[options.index] || null)
        }
      } else if (mode.type === 'TopToolBar') {
        let area: HTMLElement
        if (mode.pos === 'left') {
          area = this.topbar.leftArea
        } else {
          area = this.topbar.rightArea
        }
        let children = [...area.children]
        if (!options.index) {
          area.appendChild(component.el)
        } else {
          if (options.index < 0) throw new Error('index不能传入负值')
          area.insertBefore(component.el, children[options.index] || null)
        }
      } else if (mode.type === 'AnyPosition') {
        this.el.appendChild(component.el)
      }
      // 给组件中的container赋予新的值
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

  // 隐藏某一个已经挂载到视图上的组件
  hideComponent(id: string) {
    if (!COMPONENT_STORE.get(id)) {
      throw new Error('无法隐藏一个未挂载在视图上的组件')
    }
    if (HIDEEN_COMPONENT_STORE.get(id)) {
      throw new Error('该元素已经隐藏')
    }
    let instance = COMPONENT_STORE.get(id)
    instance.el.style.display = 'none'
    HIDEEN_COMPONENT_STORE.set(id, instance)
  }

  // 展示一个隐藏的组件
  showComponent(id: string) {
    if (!HIDEEN_COMPONENT_STORE.get(id)) {
      throw new Error('该元素已经显示出来了')
    }
    if (!COMPONENT_STORE.get(id)) {
      throw new Error('该元素不存在或者被卸载')
    }

    let instance = COMPONENT_STORE.get(id)
    instance.el.style.display = ''
    HIDEEN_COMPONENT_STORE.delete(id)
  }

  // 卸载某一个component组件，所谓卸载一个组件指的是仅仅将其DOM元素从视图上移除，但是不会删除其实例对象，还可以继续挂载
  unmountComponent(id: string) {
    if (!COMPONENT_STORE.has(id)) {
      throw new Error('该组件不存在或者已经被卸载')
    }
    let instance = COMPONENT_STORE.get(id)
    instance.el.parentElement.removeChild(instance.el)
    removeClass(instance.el, [...instance.el.classList])
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
