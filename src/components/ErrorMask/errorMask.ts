import { styles } from '@/styles/style'
import { icon } from '@/styles/icon'
import './errorMask.less'

export class ErrorMask {
  private _template: string | HTMLElement

  constructor() {
    this.init()
  }

  get template(): string | HTMLElement {
    return this._template
  }

  init() {
    this._template = this.generateErrorMask()
  }

  generateErrorMask(): HTMLElement {
    let mask = document.createElement('div') as HTMLElement
    mask.className = styles['error-mask']
    let errorContainer = document.createElement('div') as HTMLElement
    errorContainer.className = styles['error-container']
    let errorItem = document.createElement('div') as HTMLElement
    errorItem.className = styles['error-item']
    let i = document.createElement('i') as HTMLElement
    i.className = `${icon['iconfont']} ${icon['icon-cuowutishi']}`
    errorItem.appendChild(i)
    let errorTitle = document.createElement('div') as HTMLElement
    errorTitle.className = styles['error-title']
    errorTitle.innerText = '视频加载发生错误'
    errorContainer.appendChild(errorItem)
    errorContainer.appendChild(errorTitle)
    mask.appendChild(errorContainer)

    return mask
  }
}
