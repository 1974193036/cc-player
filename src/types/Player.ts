import { Player } from '../page/player'
import { Component } from '../class/Component'

export type PlayerOptions = {
  url: string
  container: HTMLElement
  autoplay?: boolean
  width?: string
  height?: string
  leftControllers?: (ComponentConstructor | string)[]
  rightControllers?: (ComponentConstructor | string)[]
  plugins?: Plugin[]
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
  container?: HTMLElement
  props?: DOMProps
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

export interface ComponentConstructor {
  new (
    player: Player,
    container: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: string | Node[]
  ): Component & ComponentItem
}

// 存储内置组件的ID，用于在用户注册组件时区分是自定义组件还是内置组件
export type BuiltInComponentID =
  | 'PlayButton'
  | 'Playrate'
  | 'Volume'
  | 'DutaionShow'
  | 'SubSetting'
  | 'VideoShot'
  | 'ScreenShot'
  | 'PicInPic'
  | 'FullPage'
  | 'FullScreen'

// 对应最顶层的ToolBar的注册选项
export type TopToolBarOptions = {
  type: 'TopToolBar'
  pos: 'left' | 'right'
}

export type BottomToolBarOptions = {
  type: 'BottomToolBar'
  pos: 'left' | 'right' | 'medium'
}

// 注册组件时的选项
export type RegisterComponentOptions = {
  mode: TopToolBarOptions | BottomToolBarOptions
  index?: number
}

// 更新组件时的选项
export type UpdateComponentOptions = {
  replaceElType?: 'replaceOuterHTMLOfComponent' | 'replaceInnerHTMLOfComponent'
}
