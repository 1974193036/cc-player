import { SubsettingsMain } from '@/components'
import { SubsettingsDanmakuMain } from '@/components/ToolBar/BottomBar/parts/Subsettings/parts/danmaku/SubsettingsDanmakuMain'
import { rightarrowPath } from '@/svg'
import { Player } from '@/page/player'
import { SubsettingsBaseConstructor } from '@/types/Player'
import { createSvg } from '@/utils'

export class DanmakuSettings {
  readonly id = 'DanmakuSettings'
  player: Player
  subsettingsMain: SubsettingsMain

  constructor(player: Player) {
    this.player = player
    this.init()
  }

  init(): void {
    this.initTemplate()
  }

  initTemplate(): void {
    this.subsettingsMain = (SubsettingsMain as SubsettingsBaseConstructor)
      .instance as SubsettingsMain

    this.subsettingsMain.registerSubsettingsItem({
      leftIcon: createSvg('', '0 0 1024 1024'),
      leftText: '弹幕设置',
      rightTip: '更多',
      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024'),
      target: SubsettingsDanmakuMain
    })
  }
}
