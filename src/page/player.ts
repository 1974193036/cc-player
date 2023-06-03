import {
  ComponentItem,
  PlayerOptions,
  DOMProps,
  RegisterComponentOptions,
  UpdateComponentOptions,
  Plugin
} from '@/types/Player'
import { Component } from '@/class/Component'
import { ToolBar } from '@/components/ToolBar/toolbar'
import { $, addClass, patchComponent, removeClass } from '@/utils/domUtils'
import { COMPONENT_STORE, HIDEEN_COMPONENT_STORE, ONCE_COMPONENT_STORE } from '@/utils/store'
import Mp4MediaPlayer from '../mp4/MediaPlayer'
import { DanmakuController } from '@/danmaku'
import { TimeLoading } from '@/components/Loading/parts/TimeLoading'
import { ErrorLoading } from '@/components/Loading/parts/ErrorLoading'
import { TopBar } from '@/components/TopBar/TopBar'
import { Env } from '@/utils/env'
import { MobileVolume } from '@/components/Mobile/MobileVolume'
import { MoveEvent, wrap } from 'ntouch.js'
import { computeAngle } from '@/utils/math'
import { EVENT } from '@/events'
import { Subtitle } from '@/components/Subtitle/Subtitle'

class Player extends Component implements ComponentItem {
  readonly id = 'Player'
  // el: div.Niplayer_video-wrapper

  // 播放器的默认配置
  readonly playerOptions: PlayerOptions
  enableSeek = true
  env = Env.env
  fullScreenMode: 'Vertical' | 'Horizontal' = 'Horizontal'
  video: HTMLVideoElement
  props: DOMProps
  toolBar: ToolBar
  topbar: TopBar
  loading: TimeLoading
  error: ErrorLoading
  mask: HTMLElement
  containerWidth: number
  containerHeight: number
  mediaProportion: number = 9 / 16 // 视频比例 原始高度/原始宽度，默认16:9

  constructor(options: PlayerOptions) {
    super(options.container, 'div.Niplayer_video-wrapper')
    this.playerOptions = Object.assign(
      {
        autoPlay: false,
        streamPlay: false
      },
      options
    )
    this.container = options.container
    this.containerHeight = options.container.clientHeight
    this.containerWidth = options.container.clientWidth
    this.init()
  }

  init() {
    if (this.playerOptions.video) {
      this.video = this.playerOptions.video
      this.video.parentNode && this.video.parentNode.removeChild(this.video)
    } else {
      this.video = $('video')
      this.video['playsinline'] = true // IOS微信浏览器支持小窗内播放,也就是不是全屏播放
      this.video['x5-video-player-type'] = 'h5' // 启用H5播放器,是wechat安卓版特性
    }
    this.video.crossOrigin = 'anonymous'

    this.el.appendChild(this.video)
    this.playerOptions?.url && this.attachSource(this.playerOptions.url)
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
    this.loading = new TimeLoading(this, '视频姬正在努力加载中(⑅˃◡˂⑅)', this.el)
    this.error = new ErrorLoading(this, '视频加载发送错误', this.el)
    this.toolBar = new ToolBar(this, this.el, 'div')
    this.topbar = new TopBar(this, this.el, 'div')

    if (this.playerOptions.subtitles && this.playerOptions.subtitles.length > 0) {
      new Subtitle(this, this.playerOptions.subtitles)
    }

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
      this.emit(EVENT.RESIZE, entries)
      this.adjustMediaSize()
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

  // 调整video的尺寸
  adjustMediaSize() {
    // console.log(this.container, this.container.clientWidth, this.container.clientHeight)
    if (this.mediaProportion !== 0) {
      // 容器宽度偏小，高度偏大
      if (this.el.clientHeight / this.el.clientWidth > this.mediaProportion) {
        this.video.style.width = '100%'
        this.video.style.height =
          this.el.clientWidth * this.mediaProportion + 0.05 * this.el.clientWidth + 'px'
      } else {
        // 容器宽度偏大，高度偏小（类似带鱼屏）
        this.video.style.height = '100%'
        this.video.style.width = this.el.clientHeight / this.mediaProportion + 'px'
      }
    }
  }

  initEvent() {
    if (this.env === 'Mobile') {
      this.initMobileEvent()
    } else {
      this.initPCEvent()
    }

    this.video.addEventListener('loadedmetadata', (e) => {
      this.emit(EVENT.LOADED_META_DATA, e)
      // videoWidth: 视频原始宽度
      // videoHeight: 视频原始高度
      this.mediaProportion = this.video.videoHeight / this.video.videoWidth
      this.adjustMediaSize()
    })

    this.video.addEventListener('timeupdate', (e) => {
      this.emit(EVENT.TIME_UPDATE, e)
    })

    this.video.addEventListener('play', (e) => {
      this.emit(EVENT.PLAY, e)
    })

    this.video.addEventListener('pause', (e) => {
      this.emit(EVENT.PAUSE, e)
    })

    // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
    this.video.addEventListener('seeking', (e) => {
      // 防抖效果：针对Dot按下并且拖动时不触发seeking，拖完鼠标抬起时再触发seeking
      if (this.enableSeek) {
        this.emit(EVENT.SEEKING, e)
      }
    })

    // waiting 事件在视频由于需要缓冲下一帧而停止时触发
    this.video.addEventListener('waiting', (e) => {
      this.emit(EVENT.WAITING, e)
    })

    // canplay 该视频已准备好开始播放
    this.video.addEventListener('canplay', (e) => {
      this.emit(EVENT.CAN_PLAY, e)
    })

    // error 视频加载发生错误时
    this.video.addEventListener('error', (e) => {
      this.emit(EVENT.ERROR)
    })

    // abort 视频终止加载时
    this.video.addEventListener('abort', (e) => {
      this.emit(EVENT.ERROR)
    })

    // ratechange 事件在音频/视频(audio/video)播放速度发生改变时触发(如用户切换到慢速或快速播放模式)。
    this.video.addEventListener('ratechange', (e) => {
      this.emit(EVENT.RATE_CHANGE)
    })

    this.on(EVENT.DANMAKU_INPUT_FOCUS, () => {
      this.el.onmouseleave = null
    })

    this.on(EVENT.DANMAKU_INPUT_BLUR, () => {
      this.el.onmouseleave = (e) => {
        this.emit(EVENT.HIDE_TOOLBAR, e)
      }
    })

    this.on(EVENT.DOT_DOWN, () => {
      // console.log('dotdown')
      this.enableSeek = false
    })
    this.on(EVENT.DOT_UP, () => {
      // console.log('dotup')
      this.enableSeek = true
    })
    this.on(EVENT.VIDEO_DOT_DRAG, (val: number, e: Event | MoveEvent) => {
      this.emit(EVENT.SHOW_TOOLBAR, e)
    })

    this.on(EVENT.ENTER_FULLSCREEN, () => {
      document.querySelectorAll('.video-controller').forEach((el) => {
        ;(el as HTMLElement).style.marginRight = '15px'
      })
      document.querySelectorAll('.video-topbar-controller').forEach((el) => {
        ;(el as HTMLElement).style.marginRight = '15px'
      })
    })

    this.on(EVENT.LEAVE_FULLSCREEN, () => {
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
      this.emit(EVENT.SHOW_TOOLBAR, e)
    }

    this.el.onmousemove = (e) => {
      this.emit(EVENT.SHOW_TOOLBAR, e)
    }

    this.el.onmouseleave = (e) => {
      this.emit(EVENT.HIDE_TOOLBAR, e)
    }
  }

  initMobileEvent(): void {
    // 单击
    wrap(this.video).addEventListener('singleTap', (e) => {
      // console.log(e, 'singletap')
      if (this.toolBar.status === 'hidden') {
        this.emit(EVENT.SHOW_TOOLBAR, e)
      } else {
        this.emit(EVENT.HIDE_TOOLBAR, e)
      }
      this.emit(EVENT.VIDEO_CLICK)
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
      if (computeAngle(dx, dy) >= 75) {
        this.emit(EVENT.MOVE_VERTICAL, e)
      } else if (computeAngle(dx, dy) <= 15) {
        this.emit(EVENT.MOVE_HORIZONTAL, e)
      }
    })

    // 手势上下滑动结束
    wrap(this.video).addEventListener('swipe', (e) => {
      // console.log(e, 'swipe')
      let dx = e.endPos.x - e.startPos.x
      let dy = e.endPos.y - e.startPos.y
      // if (Math.abs(dx) <= 20 && Math.abs(dx) < Math.abs(dy)) {
      //   this.emit('slideVertical', e)
      // }
      if (computeAngle(dx, dy) >= 75) {
        this.emit(EVENT.SLIDE_VERTICAL, e)
      } else if (computeAngle(dx, dy) <= 15) {
        this.emit(EVENT.SLIDE_HORIZONTAL, e)
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

  attachSource(url: string) {
    // 是否启动流式播放
    if (this.playerOptions.streamPlay) {
      new Mp4MediaPlayer(url, this)
    } else {
      this.video.src = url
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
  // 注意：卸载一个组件会清除该组件上挂载的class和id，意味着之后用户可以将组件挂载到任何位置
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

  /**
   * @description 注册对应的组件
   * @param plugin
   */
  use(plugin: Plugin) {
    plugin.install(this)
  }
}

export { Player }
