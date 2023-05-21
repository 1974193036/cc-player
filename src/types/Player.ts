import { Player } from '../page/player'

export type PlayerOptions = {
  url: string
  container: HTMLElement
  autoplay?: boolean
  width?: string
  height?: string
}

export type DOMProps = {
  className?: string[]
  id?: string
  style?: Partial<CSSStyleDeclaration>
  [props: string]: any
}

// ComponentItem用于描述一个组件
export interface ComponentItem {
  id: string
  el: HTMLElement
  props: DOMProps
  [props: string]: any
}

export interface Node {
  id: string
  el: HTMLElement
}

export type Plugin = {
  install: (player: Player) => any
}

export type registerOptions = {
  replaceElementType?: 'replaceOuterHTMLOfComponent' | 'replaceInnerHTMLOfComponent'
}

// 首先约束参数T必须是个函数类型
// 判断T是否是函数类型，如果是则使用infer P暂时存一下函数的参数类型，后面的语句直接用 P 即可得到这个类型并返回，否则就返回never
export type getFunctionParametersType<T extends (...args: any[]) => any> = T extends (
...args: (infer P)[]
) => infer U
  ? P
  : never
