import { $ } from '@/utils/domUtils'
import { BaseEvent } from './BaseEvent'
import { DOMProps, Node } from '../types/Player'

export class Component extends BaseEvent {
  el: HTMLElement //el代表着该组件对应的整个HTML元素
  container: HTMLElement

  constructor(
    container?: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: string | Node[]
  ) {
    super()
    if (!desc) {
      desc = 'div'
    }
    let dom = $(desc, props, children)
    this.el = dom
    this.container = container
    // 安装组件成功
    if (container) {
      container.append(dom)
    }
  }

  init() {}
  initEvent() {}
  initPCEvent() {}
  initMobileEvent() {}
  initTemplate() {}
  initPCTemplate() {}
  initMobileTemplate() {}
  initComponent() {}
  resetEvent() {}
  // 销毁组件
  dispose() {}
}
