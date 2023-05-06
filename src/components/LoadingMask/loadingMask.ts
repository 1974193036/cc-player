import { styles } from '@/styles/style'
import './LoadingMask.less'

export class LoadingMask {
  private _template: HTMLElement | string

  constructor() {
    this.init()
  }

  get template(): HTMLElement | string {
    return this._template
  }

  init() {
    let mask = document.createElement('div') as HTMLElement
    mask.className = styles['loading-mask']
    let loadingContainer = document.createElement('div') as HTMLElement
    loadingContainer.className = styles['loading-container']
    let loadingItem = document.createElement('div') as HTMLElement
    loadingItem.className = styles['loading-item']
    let loadingTitle = document.createElement('div') as HTMLElement
    loadingTitle.className = styles['loading-title']
    loadingTitle.innerText = '视频正在努力加载中...'
    loadingContainer.appendChild(loadingItem)
    loadingContainer.appendChild(loadingTitle)
    mask.appendChild(loadingContainer)
    this._template = mask
  }
}
