import { Player } from '@/page/player'
import { leftarrowPath, settingsConfirmPath } from '@/svg'
import { SubsettingsItem } from '@/types/Player'
import { $, createSvg } from '@/utils'
import { SubSetting } from '../../SubSetting'
import { SubsettingsBase } from '../SubsettingsBase'
import { SubsettingsDanmakuMain } from './SubsettingsDanmakuMain'

export class SubsettingsDanmakuRange extends SubsettingsBase {
  // div.video-subsettings-danamku-range
  readonly id = 'SubsettingsDanmakuRange'
  readonly SubsettingsItem: SubsettingsItem[] = [
    {
      leftIcon: createSvg(leftarrowPath, '0 0 1024 1024'),
      leftText: '弹幕显示范围',
      target: SubsettingsDanmakuMain
    },
    {
      leftText: '1/4',
      leftIcon: createSvg(settingsConfirmPath, '0 0 1024 1024'),
      target: SubsettingsDanmakuMain
    },
    {
      leftText: '半屏',
      target: SubsettingsDanmakuMain
    },
    {
      leftText: '3/4',
      target: SubsettingsDanmakuMain
    },
    {
      leftText: '满屏',
      target: SubsettingsDanmakuMain
    }
  ]

  constructor(subsetting: SubSetting, player: Player) {
    super(subsetting, player)
    this.init()
  }

  init() {
    this.initTemplate()
    this.initSubsettingsItem()
    this.initEvent()
  }

  initSubsettingsItem() {
    this.initBaseSubsettingsItem()
  }

  initTemplate() {
    this.el = $('div.video-subsettings-danamku-range')
    this.el.dataset.width = '200'
    this.el.style.display = 'none'
  }

  initEvent() {
    this.SubsettingsItem.forEach((item, index) => {
      if (index === 0) return
      item.instance.el.onclick = () => {
        this.subsetting.emit('RangeChange', item.leftText)
      }
    })
  }
}
