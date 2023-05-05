import { sayHelloWorld } from '@/test'

const arr = [1, 2, 3]

console.log(arr.includes(2))

const fn = (a: string, b: string): string => {
  return a + b
}

var s = fn('hello', 'world')
console.log(s)


sayHelloWorld()

export const a: number = 111

// export class AAA {
//   eat() {
//     alert('eat')
//   }
// }