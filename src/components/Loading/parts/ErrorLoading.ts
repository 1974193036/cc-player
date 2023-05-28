import { Player } from '@/page/player'
import { addClass } from '../../../utils/domUtils'
import { Loading } from '../Loading'

export class ErrorLoading extends Loading {
  readonly id = 'errorloading'
  // el: div.video-loading

  constructor(player: Player, msg: string, container: HTMLElement) {
    super(player, msg, container)
    addClass(this.loadingBox, ['video-loading-errorloading'])
    this.initEvent()
  }

  initEvent(): void {
    // 视频加载发生错误时
    this.player.on('videoError', (e) => {
      this.addLoading()
    })

    // 该视频已准备好开始播放
    this.player.on('canplay', (e) => {
      this.removeLoading()
    })
  }
}
