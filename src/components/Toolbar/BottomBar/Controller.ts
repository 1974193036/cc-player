import { Component } from '@/class/Component'
import { Player } from '@/page/player'
import { ComponentConstructor, ComponentItem } from '@/types/Player'
import { $ } from '@/utils/domUtils'
import { FullPage } from './parts/FullPage'
import { FullScreen } from './parts/FullScreen'
import { PicInPic } from './parts/PicInPic'
import { PlayButton } from './parts/PlayButton'
import { ScreenShot } from './parts/ScreenShot'
import { SubSetting } from './parts/Subsettings/SubSetting'
import { DutaionShow } from './parts/DurationShow'
import { VideoShot } from './parts/VideoShot'
import { Volume } from './parts/Volume'
import { ONCE_COMPONENT_STORE, storeControlComponent } from '@/utils/store'

export class Controller extends Component implements ComponentItem {
  readonly id = 'Controller'
  // el: div.video-bottombar
  player: Player
  // 控件
  leftControllers: ComponentConstructor[] = [PlayButton, Volume, DutaionShow]
  rightControllers: ComponentConstructor[] = [
    SubSetting,
    VideoShot,
    ScreenShot,
    PicInPic,
    FullPage,
    FullScreen
  ]
  // fullscreen: FullScreen
  // playButton: PlayButton
  // playrate: Playrate
  // volume: Volume
  // subPlay: HTMLElement
  // settings: HTMLElement
  leftArea: HTMLElement //代表着最左侧的区域
  mediumArea: HTMLElement
  rightArea: HTMLElement //代表最右侧的区域

  constructor(player: Player, container: HTMLElement, desc?: string) {
    super(container, desc)
    this.player = player
    this.init()
  }

  init() {
    this.initControllers()
    this.initTemplate()
    this.initComponent()

    storeControlComponent(this)
  }

  initControllers() {
    let leftControllers = this.player.playerOptions.leftBottomBarControllers
    let rightControllers = this.player.playerOptions.rightBottomBarControllers

    if (leftControllers) {
      this.leftControllers = leftControllers
    }
    if (rightControllers) {
      this.rightControllers = rightControllers
    }
  }

  initTemplate() {
    // this.leftArea = $('div.video-subplay')
    // this.mediumArea = $('div.video-medium')
    // this.rightArea = $('div.video-settings')
    this.leftArea = $('div.video-bottombar-left')
    this.mediumArea = $('div.video-bottombar-medium')
    this.rightArea = $('div.video-bottombar-right')
    this.el.appendChild(this.leftArea)
    this.el.appendChild(this.mediumArea)
    this.el.appendChild(this.rightArea)
  }

  initComponent() {
    this.leftControllers.forEach((ControlConstructor) => {
      let instance = new ControlConstructor(this.player, this.leftArea, 'div')
      if (!ONCE_COMPONENT_STORE.get(instance.id)) storeControlComponent(instance)
      this[instance.id] = instance
    })

    this.rightControllers.forEach((ControlConstructor) => {
      let instance = new ControlConstructor(this.player, this.rightArea, 'div')
      if (!ONCE_COMPONENT_STORE.get(instance.id)) storeControlComponent(instance)
      this[instance.id] = instance
    })
    // this.playButton = new PlayButton(this.player, this.leftArea, 'div')
    // this.volume = new Volume(this.player, this.leftArea, 'div')
    // this.DutaionShow = new DutaionShow(this.player, this.leftArea, 'div')
    // this.playrate = new Playrate(this.player, this.rightArea, 'div')
    // this.SubSetting = new SubSetting(this.player, this.rightArea, 'div')
    // this.VideoShot = new VideoShot(this.player, this.rightArea, 'div')
    // this.ScreenShot = new ScreenShot(this.player, this.rightArea, 'div')
    // this.PicInPic = new PicInPic(this.player, this.rightArea, 'div')
    // this.FullPage = new FullPage(this.player, this.rightArea, 'div')
    // this.fullscreen = new FullScreen(this.player, this.rightArea, 'div')
  }
}
