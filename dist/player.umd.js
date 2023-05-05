
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Player = {}));
})(this, (function (exports) { 'use strict';

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
  var a = 111;
  // export class AAA {
  //   eat() {
  //     alert('eat')
  //   }
  // }

  exports.a = a;

}));
//# sourceMappingURL=player.umd.js.map
