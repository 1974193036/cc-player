import { ComponentItem, PlayerOptions, DOMProps } from '@/types/Player'
import { Component } from '@/class/Component'
import { ToolBar } from '@/components/ToolBar/toolbar'
import { $, patchComponent } from '@/utils/domUtils'
import { Plugin } from '@/types/Player'
import { CONTROL_COMPONENT_STORE } from '@/utils/store'
import './player.less'
import '../main.less'

class Player extends Component implements ComponentItem {
  readonly id = 'Player'
  // el: div.video-wrapper

  // 播放器的默认配置
  readonly playerOptions = {
    url: '',
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
    this.video.src = this.playerOptions.url || ''
    this.el.appendChild(this.video)
    this.toolBar = new ToolBar(this, this.el, 'div')
    this.initEvent()
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
  }

  attendSource(url: string) {
    this.video.src = url
  }

  registerControls(id: string, component: Partial<ComponentItem>) {
    let store = CONTROL_COMPONENT_STORE
    if (store.has(id)) {
      patchComponent(store.get(id), component)
    } else {
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

// class Player extends Component implements ComponentItem {
//   readonly id = 'Player'
//   // 播放器的默认配置
//   readonly playerOptions = {
//     url: '',
//     autoplay: false,
//     width: '100%',
//     height: '100%'
//   }
//   video: HTMLVideoElement
//   toolBar: ToolBar
//   constructor(options: PlayerOptions) {
//     super(options.container, 'div.video-wrapper')
//     this.playerOptions = Object.assign(this.playerOptions, options)
//     options.container.className = 'video-container'
//     options.container.style.width = this.playerOptions.width + 'px'
//     options.container.style.height = this.playerOptions.height + 'px'
//     this.init()
//   }

//   init() {
//     this.video = $('video')
//     this.video.src = this.playerOptions.url || ''
//     this.el.appendChild(this.video)
//     this.toolBar = new ToolBar(this, this.el, 'div')
//     this.initEvent()
//   }

//   initEvent() {
//     this.video.onmousemove = (e) => {
//       this.emit('showtoolbar', e)
//     }

//     this.video.onmouseenter = (e) => {
//       this.emit('showtoolbar', e)
//     }

//     this.video.onmouseleave = (e) => {
//       this.emit('hidetoolbar', e)
//     }

//     this.video.onloadedmetadata = (e) => {
//       this.emit('loadedmetadata', e)
//     }

//     this.video.ontimeupdate = (e) => {
//       this.emit('timeupdate', e)
//     }

//     this.on('progress-click', (e, ctx) => {
//       let scale = e.offsetX / ctx.el.offsetWidth
//       if (scale < 0) {
//         scale = 0
//       } else if (scale > 1) {
//         scale = 1
//       }
//       this.video.currentTime = Math.floor(scale * this.video.duration)
//       this.video.paused && this.video.play()
//     })
//   }

//   attendSource(url: string) {
//     this.video.src = url
//   }
// }

// export { Player }
