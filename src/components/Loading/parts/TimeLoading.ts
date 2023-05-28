import { Player } from '@/page/player'
import { addClass } from '@/utils/domUtils'
import { Loading } from '../Loading'

export class TimeLoading extends Loading {
  readonly id = 'timeloading'
  // el: div.video-loading

  constructor(player: Player, msg: string, container: HTMLElement) {
    super(player, msg, container)
    addClass(this.loadingBox, ['video-loading-loadingbox'])
    this.initEvent()
  }

  initEvent(): void {
    // 在视频由于需要缓冲下一帧而停止时触发
    this.player.on('waiting', (e) => {
      this.addLoading()
    })

    // 该视频已准备好开始播放
    this.player.on('canplay', (e) => {
      this.removeLoading()
    })
  }
}
