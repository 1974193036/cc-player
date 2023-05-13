export type FactoryFunction<T> = (context?: object) => {
  create?: (...args: any[]) => T
  getInstance?: (...args: any[]) => T
}

// const test: FactoryFunction<string> = () => {
//  return {
//     create: () => {return ''},
//     getInstance: () => {return ''}
//  }
// }

export type FactoryObject = {
  [props: string]: any
}
