// import { ComponentItem, PlayerOptions, ToolBar } from '../index'

import { ComponentItem, PlayerOptions } from '@/types/Player'
import { Component } from '@/class/Component'
import { ToolBar } from '@/components/ToolBar/toolbar'
import { $ } from '@/utils/domUtils'
import './player.less'
import '../main.less'

class Player extends Component implements ComponentItem {
  readonly id = 'Player'
  // 播放器的默认配置
  readonly playerOptions = {
    url: '',
    autoplay: false,
    width: '100%',
    height: '100%'
  }
  video: HTMLVideoElement
  toolBar: ToolBar
  constructor(options: PlayerOptions) {
    super(options.container, 'div.video-wrapper')
    this.playerOptions = Object.assign(this.playerOptions, options)
    options.container.className = 'video-container'
    options.container.style.width = this.playerOptions.width
    options.container.style.height = this.playerOptions.height
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
