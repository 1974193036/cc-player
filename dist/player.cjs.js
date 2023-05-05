'use strict';

function sayHelloWorld() {
  console.log('===hello world=2222==');
}

var arr = [1, 2, 3];
console.log(arr.includes(2));
var fn = function fn(a, b) {
  return a + b;
};
var s = fn('hello', 'world');
console.log(s);
sayHelloWorld();
var a = 123456;
// export class AAA {
//   eat() {
//     alert('eat')
//   }
// }

exports.a = a;
