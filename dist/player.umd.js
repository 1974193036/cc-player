
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Player = {}));
})(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var defineProperty$e = {exports: {}};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$r =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || commonjsGlobal || Function('return this')();

  var fails$x = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$w = fails$x;

  var functionBindNative = !fails$w(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$4 = functionBindNative;

  var FunctionPrototype$3 = Function.prototype;
  var apply$5 = FunctionPrototype$3.apply;
  var call$q = FunctionPrototype$3.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$q.bind(apply$5) : function () {
    return call$q.apply(apply$5, arguments);
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$p = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$p, call$p);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$p.apply(fn, arguments);
    };
  };

  var uncurryThis$y = functionUncurryThis;

  var toString$d = uncurryThis$y({}.toString);
  var stringSlice$3 = uncurryThis$y(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$3(toString$d(it), 8, -1);
  };

  var classofRaw$1 = classofRaw$2;
  var uncurryThis$x = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw$1(fn) === 'Function') return uncurryThis$x(fn);
  };

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;

  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$q = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var objectGetOwnPropertyDescriptor = {};

  var fails$v = fails$x;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$v(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$o = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$o.bind(call$o) : function () {
    return call$o.apply(call$o, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$b = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$b && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$b(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var createPropertyDescriptor$8 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var uncurryThis$w = functionUncurryThis;
  var fails$u = fails$x;
  var classof$e = classofRaw$2;

  var $Object$4 = Object;
  var split$3 = uncurryThis$w(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$u(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$e(it) == 'String' ? split$3(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$6 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$5 = isNullOrUndefined$6;

  var $TypeError$j = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$5 = function (it) {
    if (isNullOrUndefined$5(it)) throw $TypeError$j("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$4 = requireObjectCoercible$5;

  var toIndexedObject$a = function (it) {
    return IndexedObject$2(requireObjectCoercible$4(it));
  };

  var isCallable$p = isCallable$q;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$j = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$p(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$p(it);
  };

  var path$n = {};

  var path$m = path$n;
  var global$q = global$r;
  var isCallable$o = isCallable$q;

  var aFunction = function (variable) {
    return isCallable$o(variable) ? variable : undefined;
  };

  var getBuiltIn$h = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path$m[namespace]) || aFunction(global$q[namespace])
      : path$m[namespace] && path$m[namespace][method] || global$q[namespace] && global$q[namespace][method];
  };

  var uncurryThis$v = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$v({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$p = global$r;
  var userAgent$3 = engineUserAgent;

  var process$4 = global$p.process;
  var Deno$1 = global$p.Deno;
  var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$3) {
    match = userAgent$3.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$3.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$3 = engineV8Version;
  var fails$t = fails$x;
  var global$o = global$r;

  var $String$5 = global$o.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$t(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$5 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$5
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$g = getBuiltIn$h;
  var isCallable$n = isCallable$q;
  var isPrototypeOf$e = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$g('Symbol');
    return isCallable$n($Symbol) && isPrototypeOf$e($Symbol.prototype, $Object$3(it));
  };

  var $String$4 = String;

  var tryToString$7 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$m = isCallable$q;
  var tryToString$6 = tryToString$7;

  var $TypeError$i = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$h = function (argument) {
    if (isCallable$m(argument)) return argument;
    throw $TypeError$i(tryToString$6(argument) + ' is not a function');
  };

  var aCallable$g = aCallable$h;
  var isNullOrUndefined$4 = isNullOrUndefined$6;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$3 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$4(func) ? undefined : aCallable$g(func);
  };

  var call$n = functionCall;
  var isCallable$l = isCallable$q;
  var isObject$i = isObject$j;

  var $TypeError$h = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$l(fn = input.toString) && !isObject$i(val = call$n(fn, input))) return val;
    if (isCallable$l(fn = input.valueOf) && !isObject$i(val = call$n(fn, input))) return val;
    if (pref !== 'string' && isCallable$l(fn = input.toString) && !isObject$i(val = call$n(fn, input))) return val;
    throw $TypeError$h("Can't convert object to primitive value");
  };

  var shared$7 = {exports: {}};

  var isPure = true;

  var global$n = global$r;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$d = Object.defineProperty;

  var defineGlobalProperty$1 = function (key, value) {
    try {
      defineProperty$d(global$n, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$n[key] = value;
    } return value;
  };

  var global$m = global$r;
  var defineGlobalProperty = defineGlobalProperty$1;

  var SHARED = '__core-js_shared__';
  var store$3 = global$m[SHARED] || defineGlobalProperty(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$7.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.2',
    mode: 'pure' ,
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$7.exports;

  var requireObjectCoercible$3 = requireObjectCoercible$5;

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$a = function (argument) {
    return $Object$2(requireObjectCoercible$3(argument));
  };

  var uncurryThis$u = functionUncurryThis;
  var toObject$9 = toObject$a;

  var hasOwnProperty = uncurryThis$u({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$9(it), key);
  };

  var uncurryThis$t = functionUncurryThis;

  var id$1 = 0;
  var postfix = Math.random();
  var toString$c = uncurryThis$t(1.0.toString);

  var uid$4 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id$1 + postfix, 36);
  };

  var global$l = global$r;
  var shared$6 = sharedExports;
  var hasOwn$i = hasOwnProperty_1;
  var uid$3 = uid$4;
  var NATIVE_SYMBOL$4 = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$5 = global$l.Symbol;
  var WellKnownSymbolsStore$2 = shared$6('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$5['for'] || Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$3;

  var wellKnownSymbol$q = function (name) {
    if (!hasOwn$i(WellKnownSymbolsStore$2, name)) {
      WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$i(Symbol$5, name)
        ? Symbol$5[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore$2[name];
  };

  var call$m = functionCall;
  var isObject$h = isObject$j;
  var isSymbol$4 = isSymbol$5;
  var getMethod$2 = getMethod$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$p = wellKnownSymbol$q;

  var $TypeError$g = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$p('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$7 = function (input, pref) {
    if (!isObject$h(input) || isSymbol$4(input)) return input;
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$m(exoticToPrim, input, pref);
      if (!isObject$h(result) || isSymbol$4(result)) return result;
      throw $TypeError$g("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive$6 = toPrimitive$7;
  var isSymbol$3 = isSymbol$5;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$4 = function (argument) {
    var key = toPrimitive$6(argument, 'string');
    return isSymbol$3(key) ? key : key + '';
  };

  var global$k = global$r;
  var isObject$g = isObject$j;

  var document$3 = global$k.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$g(document$3) && isObject$g(document$3.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$j = descriptors;
  var fails$s = fails$x;
  var createElement$1 = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$j && !fails$s(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$i = descriptors;
  var call$l = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$7 = createPropertyDescriptor$8;
  var toIndexedObject$9 = toIndexedObject$a;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$h = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$i ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$9(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$h(O, P)) return createPropertyDescriptor$7(!call$l(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };

  var fails$r = fails$x;
  var isCallable$k = isCallable$q;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$k(detection) ? fails$r(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var uncurryThis$s = functionUncurryThisClause;
  var aCallable$f = aCallable$h;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$r = uncurryThis$s(uncurryThis$s.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$f(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$r(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$h = descriptors;
  var fails$q = fails$x;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$h && fails$q(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$f = isObject$j;

  var $String$3 = String;
  var $TypeError$f = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$f = function (argument) {
    if (isObject$f(argument)) return argument;
    throw $TypeError$f($String$3(argument) + ' is not an object');
  };

  var DESCRIPTORS$g = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$e = anObject$f;
  var toPropertyKey$2 = toPropertyKey$4;

  var $TypeError$e = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$1 = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$g ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$e(O);
    P = toPropertyKey$2(P);
    anObject$e(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty$1(O, P, Attributes);
  } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$e(O);
    P = toPropertyKey$2(P);
    anObject$e(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$e('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$f = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$6 = createPropertyDescriptor$8;

  var createNonEnumerableProperty$9 = DESCRIPTORS$f ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$6(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$j = global$r;
  var apply$4 = functionApply;
  var uncurryThis$r = functionUncurryThisClause;
  var isCallable$j = isCallable$q;
  var getOwnPropertyDescriptor$a = objectGetOwnPropertyDescriptor.f;
  var isForced$1 = isForced_1;
  var path$l = path$n;
  var bind$q = functionBindContext;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
  var hasOwn$g = hasOwnProperty_1;

  var wrapConstructor = function (NativeConstructor) {
    var Wrapper = function (a, b, c) {
      if (this instanceof Wrapper) {
        switch (arguments.length) {
          case 0: return new NativeConstructor();
          case 1: return new NativeConstructor(a);
          case 2: return new NativeConstructor(a, b);
        } return new NativeConstructor(a, b, c);
      } return apply$4(NativeConstructor, this, arguments);
    };
    Wrapper.prototype = NativeConstructor.prototype;
    return Wrapper;
  };

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var PROTO = options.proto;

    var nativeSource = GLOBAL ? global$j : STATIC ? global$j[TARGET] : (global$j[TARGET] || {}).prototype;

    var target = GLOBAL ? path$l : path$l[TARGET] || createNonEnumerableProperty$8(path$l, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;

    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

    for (key in source) {
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && hasOwn$g(nativeSource, key);

      targetProperty = target[key];

      if (USE_NATIVE) if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$a(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else nativeProperty = nativeSource[key];

      // export native or implementation
      sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

      if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

      // bind methods to global for calling from export context
      if (options.bind && USE_NATIVE) resultProperty = bind$q(sourceProperty, global$j);
      // wrap global constructors for prevent changes in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
      // make static versions for prototype methods
      else if (PROTO && isCallable$j(sourceProperty)) resultProperty = uncurryThis$r(sourceProperty);
      // default case
      else resultProperty = sourceProperty;

      // add a flag to not completely full polyfills
      if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$8(resultProperty, 'sham', true);
      }

      createNonEnumerableProperty$8(target, key, resultProperty);

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
        if (!hasOwn$g(path$l, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty$8(path$l, VIRTUAL_PROTOTYPE, {});
        }
        // export virtual prototype methods
        createNonEnumerableProperty$8(path$l[VIRTUAL_PROTOTYPE], key, sourceProperty);
        // export real prototype methods
        if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
          createNonEnumerableProperty$8(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var $$16 = _export;
  var DESCRIPTORS$e = descriptors;
  var defineProperty$c = objectDefineProperty.f;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  $$16({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$c, sham: !DESCRIPTORS$e }, {
    defineProperty: defineProperty$c
  });

  var path$k = path$n;

  var Object$3 = path$k.Object;

  var defineProperty$b = defineProperty$e.exports = function defineProperty(it, key, desc) {
    return Object$3.defineProperty(it, key, desc);
  };

  if (Object$3.defineProperty.sham) defineProperty$b.sham = true;

  var definePropertyExports = defineProperty$e.exports;

  var parent$1v = definePropertyExports;

  var defineProperty$a = parent$1v;

  var parent$1u = defineProperty$a;

  var defineProperty$9 = parent$1u;

  var parent$1t = defineProperty$9;

  var defineProperty$8 = parent$1t;

  var defineProperty$7 = defineProperty$8;

  var defineProperty$6 = defineProperty$7;

  var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$6);

  var classof$d = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$d = Array.isArray || function isArray(argument) {
    return classof$d(argument) == 'Array';
  };

  var ceil = Math.ceil;
  var floor$3 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$3 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    return argument > 0 ? min$2(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength = toLength$1;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$8 = function (obj) {
    return toLength(obj.length);
  };

  var $TypeError$d = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$2 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$d('Maximum allowed index exceeded');
    return it;
  };

  var toPropertyKey$1 = toPropertyKey$4;
  var definePropertyModule$3 = objectDefineProperty;
  var createPropertyDescriptor$5 = createPropertyDescriptor$8;

  var createProperty$6 = function (object, key, value) {
    var propertyKey = toPropertyKey$1(key);
    if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$5(0, value));
    else object[propertyKey] = value;
  };

  var wellKnownSymbol$o = wellKnownSymbol$q;

  var TO_STRING_TAG$4 = wellKnownSymbol$o('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$4] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$i = isCallable$q;
  var classofRaw = classofRaw$2;
  var wellKnownSymbol$n = wellKnownSymbol$q;

  var TO_STRING_TAG$3 = wellKnownSymbol$n('toStringTag');
  var $Object$1 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$c = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable$i(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$q = functionUncurryThis;
  var isCallable$h = isCallable$q;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$q(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$h(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var uncurryThis$p = functionUncurryThis;
  var fails$p = fails$x;
  var isCallable$g = isCallable$q;
  var classof$b = classof$c;
  var getBuiltIn$f = getBuiltIn$h;
  var inspectSource$1 = inspectSource$2;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct$7 = getBuiltIn$f('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$4 = uncurryThis$p(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$g(argument)) return false;
    try {
      construct$7(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$g(argument)) return false;
    switch (classof$b(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$4(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$4 = !construct$7 || fails$p(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$c = isArray$d;
  var isConstructor$3 = isConstructor$4;
  var isObject$e = isObject$j;
  var wellKnownSymbol$m = wellKnownSymbol$q;

  var SPECIES$5 = wellKnownSymbol$m('species');
  var $Array$3 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$c(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$3(C) && (C === $Array$3 || isArray$c(C.prototype))) C = undefined;
      else if (isObject$e(C)) {
        C = C[SPECIES$5];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$3 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$3 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$o = fails$x;
  var wellKnownSymbol$l = wellKnownSymbol$q;
  var V8_VERSION$2 = engineV8Version;

  var SPECIES$4 = wellKnownSymbol$l('species');

  var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$o(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$4] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$15 = _export;
  var fails$n = fails$x;
  var isArray$b = isArray$d;
  var isObject$d = isObject$j;
  var toObject$8 = toObject$a;
  var lengthOfArrayLike$7 = lengthOfArrayLike$8;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var createProperty$5 = createProperty$6;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$k = wellKnownSymbol$q;
  var V8_VERSION$1 = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$k('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$n(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$d(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$b(O);
  };

  var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$15({ target: 'Array', proto: true, arity: 1, forced: FORCED$6 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$8(this);
      var A = arraySpeciesCreate$2(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$7(E);
          doesNotExceedSafeInteger$1(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$5(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger$1(n + 1);
          createProperty$5(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var classof$a = classof$c;

  var $String$2 = String;

  var toString$b = function (argument) {
    if (classof$a(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$2(argument);
  };

  var objectDefineProperties = {};

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var max$3 = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$4 = function (index, length) {
    var integer = toIntegerOrInfinity$2(index);
    return integer < 0 ? max$3(integer + length, 0) : min$1(integer, length);
  };

  var toIndexedObject$8 = toIndexedObject$a;
  var toAbsoluteIndex$3 = toAbsoluteIndex$4;
  var lengthOfArrayLike$6 = lengthOfArrayLike$8;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$8($this);
      var length = lengthOfArrayLike$6(O);
      var index = toAbsoluteIndex$3(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var hiddenKeys$6 = {};

  var uncurryThis$o = functionUncurryThis;
  var hasOwn$f = hasOwnProperty_1;
  var toIndexedObject$7 = toIndexedObject$a;
  var indexOf$7 = arrayIncludes.indexOf;
  var hiddenKeys$5 = hiddenKeys$6;

  var push$a = uncurryThis$o([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$7(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$f(hiddenKeys$5, key) && hasOwn$f(O, key) && push$a(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$f(O, key = names[i++])) {
      ~indexOf$7(result, key) || push$a(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$d = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$2 = objectDefineProperty;
  var anObject$d = anObject$f;
  var toIndexedObject$6 = toIndexedObject$a;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$d && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$d(O);
    var props = toIndexedObject$6(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$e = getBuiltIn$h;

  var html$2 = getBuiltIn$e('document', 'documentElement');

  var shared$5 = sharedExports;
  var uid$2 = uid$4;

  var keys$6 = shared$5('keys');

  var sharedKey$4 = function (key) {
    return keys$6[key] || (keys$6[key] = uid$2(key));
  };

  /* global ActiveXObject -- old IE, WSH */

  var anObject$c = anObject$f;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$4 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey$3 = sharedKey$4;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$3('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys$1.length;
    while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
    return NullProtoObject();
  };

  hiddenKeys$4[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$c(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
  };

  var objectGetOwnPropertyNames = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$3;

  var hiddenKeys$3 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys$3);
  };

  var objectGetOwnPropertyNamesExternal = {};

  var toAbsoluteIndex$2 = toAbsoluteIndex$4;
  var lengthOfArrayLike$5 = lengthOfArrayLike$8;
  var createProperty$4 = createProperty$6;

  var $Array$2 = Array;
  var max$2 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$5(O);
    var k = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
    var result = $Array$2(max$2(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty$4(result, n, O[k]);
    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$9 = classofRaw$2;
  var toIndexedObject$5 = toIndexedObject$a;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$8 = arraySliceSimple;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$8(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$9(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames$1(toIndexedObject$5(it));
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;

  var defineBuiltIn$8 = function (target, key, value, options) {
    if (options && options.enumerable) target[key] = value;
    else createNonEnumerableProperty$7(target, key, value);
    return target;
  };

  var defineProperty$5 = objectDefineProperty;

  var defineBuiltInAccessor$5 = function (target, name, descriptor) {
    return defineProperty$5.f(target, name, descriptor);
  };

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$j = wellKnownSymbol$q;

  wellKnownSymbolWrapped.f = wellKnownSymbol$j;

  var path$j = path$n;
  var hasOwn$e = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$4 = objectDefineProperty.f;

  var wellKnownSymbolDefine = function (NAME) {
    var Symbol = path$j.Symbol || (path$j.Symbol = {});
    if (!hasOwn$e(Symbol, NAME)) defineProperty$4(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var call$k = functionCall;
  var getBuiltIn$d = getBuiltIn$h;
  var wellKnownSymbol$i = wellKnownSymbol$q;
  var defineBuiltIn$7 = defineBuiltIn$8;

  var symbolDefineToPrimitive = function () {
    var Symbol = getBuiltIn$d('Symbol');
    var SymbolPrototype = Symbol && Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
      // eslint-disable-next-line no-unused-vars -- required for .length
      defineBuiltIn$7(SymbolPrototype, TO_PRIMITIVE, function (hint) {
        return call$k(valueOf, this);
      }, { arity: 1 });
    }
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$8 = classof$c;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$8(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineProperty$3 = objectDefineProperty.f;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
  var hasOwn$d = hasOwnProperty_1;
  var toString$a = objectToString;
  var wellKnownSymbol$h = wellKnownSymbol$q;

  var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');

  var setToStringTag$9 = function (it, TAG, STATIC, SET_METHOD) {
    if (it) {
      var target = STATIC ? it : it.prototype;
      if (!hasOwn$d(target, TO_STRING_TAG$2)) {
        defineProperty$3(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
      }
      if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
        createNonEnumerableProperty$6(target, 'toString', toString$a);
      }
    }
  };

  var global$i = global$r;
  var isCallable$f = isCallable$q;

  var WeakMap$1 = global$i.WeakMap;

  var weakMapBasicDetection = isCallable$f(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$h = global$r;
  var isObject$c = isObject$j;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
  var hasOwn$c = hasOwnProperty_1;
  var shared$4 = sharedStore;
  var sharedKey$2 = sharedKey$4;
  var hiddenKeys$2 = hiddenKeys$6;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$5 = global$h.TypeError;
  var WeakMap = global$h.WeakMap;
  var set$7, get$2, has$2;

  var enforce = function (it) {
    return has$2(it) ? get$2(it) : set$7(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$c(it) || (state = get$2(it)).type !== TYPE) {
        throw TypeError$5('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$4.state) {
    var store = shared$4.state || (shared$4.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set$7 = function (it, metadata) {
      if (store.has(it)) throw TypeError$5(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get$2 = function (it) {
      return store.get(it) || {};
    };
    has$2 = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$2[STATE] = true;
    set$7 = function (it, metadata) {
      if (hasOwn$c(it, STATE)) throw TypeError$5(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$5(it, STATE, metadata);
      return metadata;
    };
    get$2 = function (it) {
      return hasOwn$c(it, STATE) ? it[STATE] : {};
    };
    has$2 = function (it) {
      return hasOwn$c(it, STATE);
    };
  }

  var internalState = {
    set: set$7,
    get: get$2,
    has: has$2,
    enforce: enforce,
    getterFor: getterFor
  };

  var bind$p = functionBindContext;
  var uncurryThis$n = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$7 = toObject$a;
  var lengthOfArrayLike$4 = lengthOfArrayLike$8;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;

  var push$9 = uncurryThis$n([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$7($this);
      var self = IndexedObject$1(O);
      var boundFunction = bind$p(callbackfn, that);
      var length = lengthOfArrayLike$4(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$9(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$9(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };

  var $$14 = _export;
  var global$g = global$r;
  var call$j = functionCall;
  var uncurryThis$m = functionUncurryThis;
  var DESCRIPTORS$c = descriptors;
  var NATIVE_SYMBOL$3 = symbolConstructorDetection;
  var fails$m = fails$x;
  var hasOwn$b = hasOwnProperty_1;
  var isPrototypeOf$d = objectIsPrototypeOf;
  var anObject$b = anObject$f;
  var toIndexedObject$4 = toIndexedObject$a;
  var toPropertyKey = toPropertyKey$4;
  var $toString$2 = toString$b;
  var createPropertyDescriptor$4 = createPropertyDescriptor$8;
  var nativeObjectCreate = objectCreate;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$1 = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var defineBuiltIn$6 = defineBuiltIn$8;
  var defineBuiltInAccessor$4 = defineBuiltInAccessor$5;
  var shared$3 = sharedExports;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$6;
  var uid$1 = uid$4;
  var wellKnownSymbol$g = wellKnownSymbol$q;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$l = wellKnownSymbolDefine;
  var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
  var setToStringTag$8 = setToStringTag$9;
  var InternalStateModule$7 = internalState;
  var $forEach$1 = arrayIteration.forEach;

  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';

  var setInternalState$7 = InternalStateModule$7.set;
  var getInternalState$2 = InternalStateModule$7.getterFor(SYMBOL);

  var ObjectPrototype$2 = Object[PROTOTYPE];
  var $Symbol = global$g.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$4 = global$g.TypeError;
  var QObject = global$g.QObject;
  var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$2.f;
  var nativeDefineProperty = definePropertyModule$1.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$8 = uncurryThis$m([].push);

  var AllSymbols = shared$3('symbols');
  var ObjectPrototypeSymbols = shared$3('op-symbols');
  var WellKnownSymbolsStore$1 = shared$3('wks');

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = DESCRIPTORS$c && fails$m(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$2, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$2[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
      nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
    setInternalState$7(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$c) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$2) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$b(O);
    var key = toPropertyKey(P);
    anObject$b(Attributes);
    if (hasOwn$b(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$b(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$4(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$b(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$4(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$b(O);
    var properties = toIndexedObject$4(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$c || call$j($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = call$j(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$2 && hasOwn$b(AllSymbols, P) && !hasOwn$b(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$b(this, P) || !hasOwn$b(AllSymbols, P) || hasOwn$b(this, HIDDEN) && this[HIDDEN][P]
      ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$4(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype$2 && hasOwn$b(AllSymbols, key) && !hasOwn$b(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
    if (descriptor && hasOwn$b(AllSymbols, key) && !(hasOwn$b(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$b(AllSymbols, key) && !hasOwn$b(hiddenKeys$1, key)) push$8(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function (O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (hasOwn$b(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$b(ObjectPrototype$2, key))) {
        push$8(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$3) {
    $Symbol = function Symbol() {
      if (isPrototypeOf$d(SymbolPrototype, this)) throw TypeError$4('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$2(arguments[0]);
      var tag = uid$1(description);
      var setter = function (value) {
        if (this === ObjectPrototype$2) call$j(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$b(this, HIDDEN) && hasOwn$b(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$4(1, value));
      };
      if (DESCRIPTORS$c && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    SymbolPrototype = $Symbol[PROTOTYPE];

    defineBuiltIn$6(SymbolPrototype, 'toString', function toString() {
      return getInternalState$2(this).tag;
    });

    defineBuiltIn$6($Symbol, 'withoutSetter', function (description) {
      return wrap(uid$1(description), description);
    });

    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule$1.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule$2.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$g(name), name);
    };

    if (DESCRIPTORS$c) {
      // https://github.com/tc39/proposal-Symbol-description
      defineBuiltInAccessor$4(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$2(this).description;
        }
      });
    }
  }

  $$14({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
    Symbol: $Symbol
  });

  $forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol$l(name);
  });

  $$14({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  $$14({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$c }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });

  $$14({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames
  });

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive$1();

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$8($Symbol, SYMBOL);

  hiddenKeys$1[HIDDEN] = true;

  var NATIVE_SYMBOL$2 = symbolConstructorDetection;

  /* eslint-disable es/no-symbol -- safe */
  var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

  var $$13 = _export;
  var getBuiltIn$c = getBuiltIn$h;
  var hasOwn$a = hasOwnProperty_1;
  var toString$9 = toString$b;
  var shared$2 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

  var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  $$13({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
    'for': function (key) {
      var string = toString$9(key);
      if (hasOwn$a(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = getBuiltIn$c('Symbol')(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry$1[symbol] = string;
      return symbol;
    }
  });

  var $$12 = _export;
  var hasOwn$9 = hasOwnProperty_1;
  var isSymbol$2 = isSymbol$5;
  var tryToString$5 = tryToString$7;
  var shared$1 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

  var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  $$12({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
    keyFor: function keyFor(sym) {
      if (!isSymbol$2(sym)) throw TypeError(tryToString$5(sym) + ' is not a symbol');
      if (hasOwn$9(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
  });

  var uncurryThis$l = functionUncurryThis;

  var arraySlice$7 = uncurryThis$l([].slice);

  var uncurryThis$k = functionUncurryThis;
  var isArray$a = isArray$d;
  var isCallable$e = isCallable$q;
  var classof$7 = classofRaw$2;
  var toString$8 = toString$b;

  var push$7 = uncurryThis$k([].push);

  var getJsonReplacerFunction = function (replacer) {
    if (isCallable$e(replacer)) return replacer;
    if (!isArray$a(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$7(keys, element);
      else if (typeof element == 'number' || classof$7(element) == 'Number' || classof$7(element) == 'String') push$7(keys, toString$8(element));
    }
    var keysLength = keys.length;
    var root = true;
    return function (key, value) {
      if (root) {
        root = false;
        return value;
      }
      if (isArray$a(this)) return value;
      for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
    };
  };

  var $$11 = _export;
  var getBuiltIn$b = getBuiltIn$h;
  var apply$3 = functionApply;
  var call$i = functionCall;
  var uncurryThis$j = functionUncurryThis;
  var fails$l = fails$x;
  var isCallable$d = isCallable$q;
  var isSymbol$1 = isSymbol$5;
  var arraySlice$6 = arraySlice$7;
  var getReplacerFunction = getJsonReplacerFunction;
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var $String$1 = String;
  var $stringify = getBuiltIn$b('JSON', 'stringify');
  var exec$3 = uncurryThis$j(/./.exec);
  var charAt$5 = uncurryThis$j(''.charAt);
  var charCodeAt$2 = uncurryThis$j(''.charCodeAt);
  var replace$5 = uncurryThis$j(''.replace);
  var numberToString$1 = uncurryThis$j(1.0.toString);

  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$l(function () {
    var symbol = getBuiltIn$b('Symbol')();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails$l(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify('\uDEAD') !== '"\\udead"';
  });

  var stringifyWithSymbolsFix = function (it, replacer) {
    var args = arraySlice$6(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$d($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$d($replacer)) value = call$i($replacer, this, $String$1(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply$3($stringify, null, args);
  };

  var fixIllFormed = function (match, offset, string) {
    var prev = charAt$5(string, offset - 1);
    var next = charAt$5(string, offset + 1);
    if ((exec$3(low, match) && !exec$3(hi, next)) || (exec$3(hi, match) && !exec$3(low, prev))) {
      return '\\u' + numberToString$1(charCodeAt$2(match, 0), 16);
    } return match;
  };

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $$11({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$6(arguments);
        var result = apply$3(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$5(result, tester, fixIllFormed) : result;
      }
    });
  }

  var $$10 = _export;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var fails$k = fails$x;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var toObject$6 = toObject$a;

  // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FORCED$5 = !NATIVE_SYMBOL || fails$k(function () { getOwnPropertySymbolsModule$2.f(1); });

  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  $$10({ target: 'Object', stat: true, forced: FORCED$5 }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      var $getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
      return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$6(it)) : [];
    }
  });

  var defineWellKnownSymbol$k = wellKnownSymbolDefine;

  // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator
  defineWellKnownSymbol$k('asyncIterator');

  var defineWellKnownSymbol$j = wellKnownSymbolDefine;

  // `Symbol.hasInstance` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.hasinstance
  defineWellKnownSymbol$j('hasInstance');

  var defineWellKnownSymbol$i = wellKnownSymbolDefine;

  // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
  defineWellKnownSymbol$i('isConcatSpreadable');

  var defineWellKnownSymbol$h = wellKnownSymbolDefine;

  // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol$h('iterator');

  var defineWellKnownSymbol$g = wellKnownSymbolDefine;

  // `Symbol.match` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.match
  defineWellKnownSymbol$g('match');

  var defineWellKnownSymbol$f = wellKnownSymbolDefine;

  // `Symbol.matchAll` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.matchall
  defineWellKnownSymbol$f('matchAll');

  var defineWellKnownSymbol$e = wellKnownSymbolDefine;

  // `Symbol.replace` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.replace
  defineWellKnownSymbol$e('replace');

  var defineWellKnownSymbol$d = wellKnownSymbolDefine;

  // `Symbol.search` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.search
  defineWellKnownSymbol$d('search');

  var defineWellKnownSymbol$c = wellKnownSymbolDefine;

  // `Symbol.species` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.species
  defineWellKnownSymbol$c('species');

  var defineWellKnownSymbol$b = wellKnownSymbolDefine;

  // `Symbol.split` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.split
  defineWellKnownSymbol$b('split');

  var defineWellKnownSymbol$a = wellKnownSymbolDefine;
  var defineSymbolToPrimitive = symbolDefineToPrimitive;

  // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive
  defineWellKnownSymbol$a('toPrimitive');

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive();

  var getBuiltIn$a = getBuiltIn$h;
  var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
  var setToStringTag$7 = setToStringTag$9;

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol$9('toStringTag');

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$7(getBuiltIn$a('Symbol'), 'Symbol');

  var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

  // `Symbol.unscopables` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.unscopables
  defineWellKnownSymbol$8('unscopables');

  var global$f = global$r;
  var setToStringTag$6 = setToStringTag$9;

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag$6(global$f.JSON, 'JSON', true);

  var path$i = path$n;

  var symbol$5 = path$i.Symbol;

  var iterators = {};

  var DESCRIPTORS$b = descriptors;
  var hasOwn$8 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$b || (DESCRIPTORS$b && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var fails$j = fails$x;

  var correctPrototypeGetter = !fails$j(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$7 = hasOwnProperty_1;
  var isCallable$c = isCallable$q;
  var toObject$5 = toObject$a;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype$1 = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function (O) {
    var object = toObject$5(O);
    if (hasOwn$7(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$c(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype$1 : null;
  };

  var fails$i = fails$x;
  var isCallable$b = isCallable$q;
  var isObject$b = isObject$j;
  var create$c = objectCreate;
  var getPrototypeOf$8 = objectGetPrototypeOf;
  var defineBuiltIn$5 = defineBuiltIn$8;
  var wellKnownSymbol$f = wellKnownSymbol$q;

  var ITERATOR$8 = wellKnownSymbol$f('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$8(getPrototypeOf$8(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$b(IteratorPrototype$1) || fails$i(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$1[ITERATOR$8].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
  else IteratorPrototype$1 = create$c(IteratorPrototype$1);

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$b(IteratorPrototype$1[ITERATOR$8])) {
    defineBuiltIn$5(IteratorPrototype$1, ITERATOR$8, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$1,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var create$b = objectCreate;
  var createPropertyDescriptor$3 = createPropertyDescriptor$8;
  var setToStringTag$5 = setToStringTag$9;
  var Iterators$5 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$b(IteratorPrototype, { next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next) });
    setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators$5[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$i = functionUncurryThis;
  var aCallable$e = aCallable$h;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$i(aCallable$e(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable$a = isCallable$q;

  var $String = String;
  var $TypeError$c = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$a(argument)) return argument;
    throw $TypeError$c("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$a = anObject$f;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$a(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$$ = _export;
  var call$h = functionCall;
  var FunctionName = functionName;
  var createIteratorConstructor$1 = iteratorCreateConstructor;
  var getPrototypeOf$7 = objectGetPrototypeOf;
  var setToStringTag$4 = setToStringTag$9;
  var defineBuiltIn$4 = defineBuiltIn$8;
  var wellKnownSymbol$e = wellKnownSymbol$q;
  var Iterators$4 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  FunctionName.CONFIGURABLE;
  IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$7 = wellKnownSymbol$e('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$1(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$7]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$7(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        Iterators$4[TO_STRING_TAG] = returnThis;
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$h(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$$({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if ((FORCED) && IterablePrototype[ITERATOR$7] !== defaultIterator) {
      defineBuiltIn$4(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
    }
    Iterators$4[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$3 = function (value, done) {
    return { value: value, done: done };
  };

  var toIndexedObject$3 = toIndexedObject$a;
  var Iterators$3 = iterators;
  var InternalStateModule$6 = internalState;
  objectDefineProperty.f;
  var defineIterator$2 = iteratorDefine;
  var createIterResultObject$2 = createIterResultObject$3;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$6 = InternalStateModule$6.set;
  var getInternalState$1 = InternalStateModule$6.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$6(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$3(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return createIterResultObject$2(undefined, true);
    }
    if (kind == 'keys') return createIterResultObject$2(index, false);
    if (kind == 'values') return createIterResultObject$2(target[index], false);
    return createIterResultObject$2([index, target[index]], false);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  Iterators$3.Arguments = Iterators$3.Array;

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var DOMIterables$1 = domIterables;
  var global$e = global$r;
  var classof$6 = classof$c;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
  var Iterators$2 = iterators;
  var wellKnownSymbol$d = wellKnownSymbol$q;

  var TO_STRING_TAG$1 = wellKnownSymbol$d('toStringTag');

  for (var COLLECTION_NAME in DOMIterables$1) {
    var Collection = global$e[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype && classof$6(CollectionPrototype) !== TO_STRING_TAG$1) {
      createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
    }
    Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
  }

  var parent$1s = symbol$5;


  var symbol$4 = parent$1s;

  var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

  // `Symbol.dispose` well-known symbol
  // https://github.com/tc39/proposal-explicit-resource-management
  defineWellKnownSymbol$7('dispose');

  var parent$1r = symbol$4;



  var symbol$3 = parent$1r;

  var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

  // `Symbol.asyncDispose` well-known symbol
  // https://github.com/tc39/proposal-async-explicit-resource-management
  defineWellKnownSymbol$6('asyncDispose');

  var $$_ = _export;
  var getBuiltIn$9 = getBuiltIn$h;
  var uncurryThis$h = functionUncurryThis;

  var Symbol$4 = getBuiltIn$9('Symbol');
  var keyFor = Symbol$4.keyFor;
  var thisSymbolValue$1 = uncurryThis$h(Symbol$4.prototype.valueOf);

  // `Symbol.isRegistered` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregistered
  $$_({ target: 'Symbol', stat: true }, {
    isRegistered: function isRegistered(value) {
      try {
        return keyFor(thisSymbolValue$1(value)) !== undefined;
      } catch (error) {
        return false;
      }
    }
  });

  var $$Z = _export;
  var shared = sharedExports;
  var getBuiltIn$8 = getBuiltIn$h;
  var uncurryThis$g = functionUncurryThis;
  var isSymbol = isSymbol$5;
  var wellKnownSymbol$c = wellKnownSymbol$q;

  var Symbol$3 = getBuiltIn$8('Symbol');
  var $isWellKnown = Symbol$3.isWellKnown;
  var getOwnPropertyNames = getBuiltIn$8('Object', 'getOwnPropertyNames');
  var thisSymbolValue = uncurryThis$g(Symbol$3.prototype.valueOf);
  var WellKnownSymbolsStore = shared('wks');

  for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$3), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
    // some old engines throws on access to some keys like `arguments` or `caller`
    try {
      var symbolKey = symbolKeys[i];
      if (isSymbol(Symbol$3[symbolKey])) wellKnownSymbol$c(symbolKey);
    } catch (error) { /* empty */ }
  }

  // `Symbol.isWellKnown` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknown
  // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
  $$Z({ target: 'Symbol', stat: true, forced: true }, {
    isWellKnown: function isWellKnown(value) {
      if ($isWellKnown && $isWellKnown(value)) return true;
      try {
        var symbol = thisSymbolValue(value);
        for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
          if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
        }
      } catch (error) { /* empty */ }
      return false;
    }
  });

  var defineWellKnownSymbol$5 = wellKnownSymbolDefine;

  // `Symbol.matcher` well-known symbol
  // https://github.com/tc39/proposal-pattern-matching
  defineWellKnownSymbol$5('matcher');

  var defineWellKnownSymbol$4 = wellKnownSymbolDefine;

  // `Symbol.metadataKey` well-known symbol
  // https://github.com/tc39/proposal-decorator-metadata
  defineWellKnownSymbol$4('metadataKey');

  var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

  // `Symbol.observable` well-known symbol
  // https://github.com/tc39/proposal-observable
  defineWellKnownSymbol$3('observable');

  // TODO: Remove from `core-js@4`
  var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

  // `Symbol.metadata` well-known symbol
  // https://github.com/tc39/proposal-decorators
  defineWellKnownSymbol$2('metadata');

  // TODO: remove from `core-js@4`
  var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

  // `Symbol.patternMatch` well-known symbol
  // https://github.com/tc39/proposal-pattern-matching
  defineWellKnownSymbol$1('patternMatch');

  // TODO: remove from `core-js@4`
  var defineWellKnownSymbol = wellKnownSymbolDefine;

  defineWellKnownSymbol('replaceAll');

  var parent$1q = symbol$3;






  // TODO: Remove from `core-js@4`




  var symbol$2 = parent$1q;

  var symbol$1 = symbol$2;

  var symbol = symbol$1;

  var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

  var uncurryThis$f = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$7 = toString$b;
  var requireObjectCoercible$2 = requireObjectCoercible$5;

  var charAt$4 = uncurryThis$f(''.charAt);
  var charCodeAt$1 = uncurryThis$f(''.charCodeAt);
  var stringSlice$2 = uncurryThis$f(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$7(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$4(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$2(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt$3 = stringMultibyte.charAt;
  var toString$6 = toString$b;
  var InternalStateModule$5 = internalState;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$1 = createIterResultObject$3;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$5 = InternalStateModule$5.set;
  var getInternalState = InternalStateModule$5.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator$1(String, 'String', function (iterated) {
    setInternalState$5(this, {
      type: STRING_ITERATOR,
      string: toString$6(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject$1(undefined, true);
    point = charAt$3(string, index);
    state.index += point.length;
    return createIterResultObject$1(point, false);
  });

  var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

  var iterator$5 = WrappedWellKnownSymbolModule$1.f('iterator');

  var parent$1p = iterator$5;


  var iterator$4 = parent$1p;

  var parent$1o = iterator$4;

  var iterator$3 = parent$1o;

  var parent$1n = iterator$3;

  var iterator$2 = parent$1n;

  var iterator$1 = iterator$2;

  var iterator = iterator$1;

  var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator);

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof$1(obj);
  }

  var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

  var toPrimitive$5 = WrappedWellKnownSymbolModule.f('toPrimitive');

  var parent$1m = toPrimitive$5;

  var toPrimitive$4 = parent$1m;

  var parent$1l = toPrimitive$4;

  var toPrimitive$3 = parent$1l;

  var parent$1k = toPrimitive$3;

  var toPrimitive$2 = parent$1k;

  var toPrimitive$1 = toPrimitive$2;

  var toPrimitive = toPrimitive$1;

  var _Symbol$toPrimitive = /*@__PURE__*/getDefaultExportFromCjs(toPrimitive);

  function _toPrimitive(input, hint) {
    if (_typeof$1(input) !== "object" || input === null) return input;
    var prim = input[_Symbol$toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$1(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof$1(key) === "symbol" ? key : String(key);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    _Object$defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      _Object$defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  var fails$h = fails$x;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$h(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

  var STRICT_METHOD = arrayMethodIsStrict$1('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var $$Y = _export;
  var forEach$8 = arrayForEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  $$Y({ target: 'Array', proto: true, forced: [].forEach != forEach$8 }, {
    forEach: forEach$8
  });

  var path$h = path$n;

  var entryVirtual$b = function (CONSTRUCTOR) {
    return path$h[CONSTRUCTOR + 'Prototype'];
  };

  var entryVirtual$a = entryVirtual$b;

  var forEach$7 = entryVirtual$a('Array').forEach;

  var parent$1j = forEach$7;

  var forEach$6 = parent$1j;

  var classof$5 = classof$c;
  var hasOwn$6 = hasOwnProperty_1;
  var isPrototypeOf$c = objectIsPrototypeOf;
  var method$8 = forEach$6;

  var ArrayPrototype$9 = Array.prototype;

  var DOMIterables = {
    DOMTokenList: true,
    NodeList: true
  };

  var forEach$5 = function (it) {
    var own = it.forEach;
    return it === ArrayPrototype$9 || (isPrototypeOf$c(ArrayPrototype$9, it) && own === ArrayPrototype$9.forEach)
      || hasOwn$6(DOMIterables, classof$5(it)) ? method$8 : own;
  };

  var parent$1i = forEach$5;

  var forEach$4 = parent$1i;

  var parent$1h = forEach$4;

  var forEach$3 = parent$1h;

  var forEach$2 = forEach$3;

  var forEach$1 = forEach$2;

  var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach$1);

  var entryVirtual$9 = entryVirtual$b;

  var concat$9 = entryVirtual$9('Array').concat;

  var isPrototypeOf$b = objectIsPrototypeOf;
  var method$7 = concat$9;

  var ArrayPrototype$8 = Array.prototype;

  var concat$8 = function (it) {
    var own = it.concat;
    return it === ArrayPrototype$8 || (isPrototypeOf$b(ArrayPrototype$8, it) && own === ArrayPrototype$8.concat) ? method$7 : own;
  };

  var parent$1g = concat$8;

  var concat$7 = parent$1g;

  var parent$1f = concat$7;

  var concat$6 = parent$1f;

  var parent$1e = concat$6;

  var concat$5 = parent$1e;

  var concat$4 = concat$5;

  var concat$3 = concat$4;

  var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat$3);

  var BaseEvent = /*#__PURE__*/function () {
    function BaseEvent() {
      _classCallCheck(this, BaseEvent);
      _defineProperty(this, "$events", {});
    }
    _createClass(BaseEvent, [{
      key: "on",
      value: function on(event, cb) {
        this.$events[event] = this.$events[event] || [];
        this.$events[event].push(cb);
      }
    }, {
      key: "emit",
      value: function emit(event) {
        var _this = this;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (this.$events[event]) {
          var _context;
          _forEachInstanceProperty(_context = this.$events[event]).call(_context, function (cb) {
            var _context2;
            cb.call.apply(cb, _concatInstanceProperty(_context2 = [_this]).call(_context2, args));
          });
        }
      }
    }, {
      key: "init",
      value: function init() {}
    }, {
      key: "initEvent",
      value: function initEvent() {}
    }, {
      key: "initTemplate",
      value: function initTemplate() {}
    }, {
      key: "initComponent",
      value: function initComponent() {}
    }, {
      key: "resetEvent",
      value: function resetEvent() {}
    }]);
    return BaseEvent;
  }();

  function $warn(msg) {
    throw new Error(msg);
  }

  // a string of all valid unicode whitespaces
  var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$e = functionUncurryThis;
  var requireObjectCoercible$1 = requireObjectCoercible$5;
  var toString$5 = toString$b;
  var whitespaces$2 = whitespaces$3;

  var replace$4 = uncurryThis$e(''.replace);
  var ltrim = RegExp('^[' + whitespaces$2 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$5(requireObjectCoercible$1($this));
      if (TYPE & 1) string = replace$4(string, ltrim, '');
      if (TYPE & 2) string = replace$4(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var global$d = global$r;
  var fails$g = fails$x;
  var uncurryThis$d = functionUncurryThis;
  var toString$4 = toString$b;
  var trim$1 = stringTrim.trim;
  var whitespaces$1 = whitespaces$3;

  var $parseInt$1 = global$d.parseInt;
  var Symbol$2 = global$d.Symbol;
  var ITERATOR$6 = Symbol$2 && Symbol$2.iterator;
  var hex = /^[+-]?0x/i;
  var exec$2 = uncurryThis$d(hex.exec);
  var FORCED$4 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$6 && !fails$g(function () { $parseInt$1(Object(ITERATOR$6)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
    var S = trim$1(toString$4(string));
    return $parseInt$1(S, (radix >>> 0) || (exec$2(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $$X = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$X({ global: true, forced: parseInt != $parseInt }, {
    parseInt: $parseInt
  });

  var path$g = path$n;

  var _parseInt$6 = path$g.parseInt;

  var parent$1d = _parseInt$6;

  var _parseInt$5 = parent$1d;

  var parent$1c = _parseInt$5;

  var _parseInt$4 = parent$1c;

  var parent$1b = _parseInt$4;

  var _parseInt$3 = parent$1b;

  var _parseInt$2 = _parseInt$3;

  var _parseInt = _parseInt$2;

  var _parseInt$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt);

  var $$W = _export;
  var isArray$9 = isArray$d;
  var isConstructor$2 = isConstructor$4;
  var isObject$a = isObject$j;
  var toAbsoluteIndex$1 = toAbsoluteIndex$4;
  var lengthOfArrayLike$3 = lengthOfArrayLike$8;
  var toIndexedObject$2 = toIndexedObject$a;
  var createProperty$3 = createProperty$6;
  var wellKnownSymbol$b = wellKnownSymbol$q;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var nativeSlice = arraySlice$7;

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('slice');

  var SPECIES$3 = wellKnownSymbol$b('species');
  var $Array$1 = Array;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$W({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$2(this);
      var length = lengthOfArrayLike$3(O);
      var k = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$9(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor$2(Constructor) && (Constructor === $Array$1 || isArray$9(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$a(Constructor)) {
          Constructor = Constructor[SPECIES$3];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array$1 || Constructor === undefined) {
          return nativeSlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array$1 : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$3(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var entryVirtual$8 = entryVirtual$b;

  var slice$6 = entryVirtual$8('Array').slice;

  var isPrototypeOf$a = objectIsPrototypeOf;
  var method$6 = slice$6;

  var ArrayPrototype$7 = Array.prototype;

  var slice$5 = function (it) {
    var own = it.slice;
    return it === ArrayPrototype$7 || (isPrototypeOf$a(ArrayPrototype$7, it) && own === ArrayPrototype$7.slice) ? method$6 : own;
  };

  var parent$1a = slice$5;

  var slice$4 = parent$1a;

  var parent$19 = slice$4;

  var slice$3 = parent$19;

  var parent$18 = slice$3;

  var slice$2 = parent$18;

  var slice$1 = slice$2;

  var slice = slice$1;

  var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice);

  function addZero(num) {
    return num > 9 ? '' + num : '0' + num;
  }
  function formatTime(seconds) {
    seconds = Math.floor(seconds);
    var minute = Math.floor(seconds / 60);
    var second = seconds % 60;
    return addZero(minute) + ':' + addZero(second);
  }
  function switchToSeconds(time) {
    var sum = 0;
    if (time.hours) sum += time.hours * 3600;
    if (time.minutes) sum += time.minutes * 60;
    if (time.seconds) sum += time.seconds;
    return sum;
  }
  // export function parseDuration1(pt: string): Time {
  //   // Parse time from format "PT#H#M##.##S"
  //   // PT193.680S
  //   // PT10H22M193.08S
  //   var ptTemp: any = pt.split('T')[1] // 10H22M193.08S
  //   ptTemp = ptTemp.split('H') // ['10', '22M193.08S']
  //   var hours = ptTemp[0] // 10
  //   var minutes = ptTemp[1].split('M')[0] // 22
  //   var seconds = ptTemp[1].split('M')[1].split('S')[0] // 193.08
  //   var hundredths = seconds.split('.') // [193, 08]
  //   //  Display the length of video (taken from .mpd file, since video duration is infinate)
  //   return {
  //     hours: Number(hours), // 10
  //     minutes: Number(minutes), // 22
  //     seconds: Number(hundredths[0]) // 193
  //   }
  // }
  // 解析MPD文件的时间字符串
  function parseDuration(pt) {
    // Parse time from format "PT#H#M##.##S"
    var hours = 0,
      minutes = 0,
      seconds = 0;
    for (var i = pt.length - 1; i >= 0; i--) {
      if (pt[i] === 'S') {
        var j = i;
        while (pt[i] !== 'M' && pt[i] !== 'H' && pt[i] !== 'T') {
          i--;
        }
        i += 1;
        seconds = _parseInt$1(_sliceInstanceProperty(pt).call(pt, i, j));
      } else if (pt[i] === 'M') {
        var _j = i;
        while (pt[i] !== 'H' && pt[i] !== 'T') {
          i--;
        }
        i += 1;
        minutes = _parseInt$1(_sliceInstanceProperty(pt).call(pt, i, _j));
      } else if (pt[i] === 'H') {
        var _j2 = i;
        while (pt[i] !== 'T') {
          i--;
        }
        i += 1;
        hours = _parseInt$1(_sliceInstanceProperty(pt).call(pt, i, _j2));
      }
    }
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  /**
   * @description 类型守卫函数
   */
  function checkMediaType(s) {
    if (!s) return true;
    return s === 'video/mp4' || s === 'audio/mp4' || s === 'text/html' || s === 'text/xml' || s === 'text/plain' || s === 'image/png' || s === 'image/jpeg';
  }
  function checkMpd(s) {
    if (s.tag === 'MPD') return true;
    return false;
  }
  function checkPeriod(s) {
    return s.tag === 'Period';
  }
  /**
   * @description 类型守卫函数
   */
  function checkBaseURL(s) {
    if (s.tag === 'BaseURL' && typeof s.url === 'string') return true;
    return false;
  }
  /**
   * @description 类型守卫函数
   */
  function checkAdaptationSet(s) {
    if (s.tag === 'AdaptationSet') return true;
    return false;
  }
  /**
   * @description 类型守卫函数
   */
  function checkSegmentTemplate(s) {
    return s.tag === 'SegmentTemplate';
  }
  /**
   * @description 类型守卫函数
   */
  function checkRepresentation(s) {
    return s.tag === 'Representation';
  }
  /**
   * @description 类型守卫函数
   */
  function checkSegmentList(s) {
    return s.tag === 'SegmentList';
  }
  function checkInitialization(s) {
    return s.tag === 'Initialization';
  }
  function checkSegmentURL(s) {
    return s.tag === 'SegmentURL';
  }
  function checkSegmentBase(s) {
    return s.tag === 'SegmentBase';
  }

  function string2booolean(s) {
    if (s === 'true') {
      return true;
    } else if (s === 'false') {
      return false;
    } else {
      return null;
    }
  }
  function string2number(s) {
    var n = Number(s);
    if (!isNaN(n)) return n;else return null;
  }

  var uncurryThis$c = functionUncurryThis;
  var aCallable$d = aCallable$h;
  var isObject$9 = isObject$j;
  var hasOwn$5 = hasOwnProperty_1;
  var arraySlice$5 = arraySlice$7;
  var NATIVE_BIND = functionBindNative;

  var $Function = Function;
  var concat$2 = uncurryThis$c([].concat);
  var join$3 = uncurryThis$c([].join);
  var factories = {};

  var construct$6 = function (C, argsLength, args) {
    if (!hasOwn$5(factories, argsLength)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      factories[argsLength] = $Function('C,a', 'return new C(' + join$3(list, ',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
    var F = aCallable$d(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice$5(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = concat$2(partArgs, arraySlice$5(arguments));
      return this instanceof boundFunction ? construct$6(F, args.length, args) : F.apply(that, args);
    };
    if (isObject$9(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  var isConstructor$1 = isConstructor$4;
  var tryToString$4 = tryToString$7;

  var $TypeError$b = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$3 = function (argument) {
    if (isConstructor$1(argument)) return argument;
    throw $TypeError$b(tryToString$4(argument) + ' is not a constructor');
  };

  var $$V = _export;
  var getBuiltIn$7 = getBuiltIn$h;
  var apply$2 = functionApply;
  var bind$o = functionBind;
  var aConstructor$2 = aConstructor$3;
  var anObject$9 = anObject$f;
  var isObject$8 = isObject$j;
  var create$a = objectCreate;
  var fails$f = fails$x;

  var nativeConstruct = getBuiltIn$7('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push$6 = [].push;

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails$f(function () {
    function F() { /* empty */ }
    return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
  });

  var ARGS_BUG = !fails$f(function () {
    nativeConstruct(function () { /* empty */ });
  });

  var FORCED$3 = NEW_TARGET_BUG || ARGS_BUG;

  $$V({ target: 'Reflect', stat: true, forced: FORCED$3, sham: FORCED$3 }, {
    construct: function construct(Target, args /* , newTarget */) {
      aConstructor$2(Target);
      anObject$9(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor$2(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0: return new Target();
          case 1: return new Target(args[0]);
          case 2: return new Target(args[0], args[1]);
          case 3: return new Target(args[0], args[1], args[2]);
          case 4: return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        apply$2(push$6, $args, args);
        return new (apply$2(bind$o, Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = create$a(isObject$8(proto) ? proto : ObjectPrototype);
      var result = apply$2(Target, instance, args);
      return isObject$8(result) ? result : instance;
    }
  });

  var path$f = path$n;

  var construct$5 = path$f.Reflect.construct;

  var parent$17 = construct$5;

  var construct$4 = parent$17;

  var parent$16 = construct$4;

  var construct$3 = parent$16;

  var parent$15 = construct$3;

  var construct$2 = parent$15;

  var construct$1 = construct$2;

  var construct = construct$1;

  var _Reflect$construct = /*@__PURE__*/getDefaultExportFromCjs(construct);

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  // TODO: Remove from `core-js@4`
  var $$U = _export;
  var DESCRIPTORS$a = descriptors;
  var create$9 = objectCreate;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  $$U({ target: 'Object', stat: true, sham: !DESCRIPTORS$a }, {
    create: create$9
  });

  var path$e = path$n;

  var Object$2 = path$e.Object;

  var create$8 = function create(P, D) {
    return Object$2.create(P, D);
  };

  var parent$14 = create$8;

  var create$7 = parent$14;

  var parent$13 = create$7;

  var create$6 = parent$13;

  var parent$12 = create$6;

  var create$5 = parent$12;

  var create$4 = create$5;

  var create$3 = create$4;

  var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create$3);

  var $$T = _export;
  var setPrototypeOf$7 = objectSetPrototypeOf;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  $$T({ target: 'Object', stat: true }, {
    setPrototypeOf: setPrototypeOf$7
  });

  var path$d = path$n;

  var setPrototypeOf$6 = path$d.Object.setPrototypeOf;

  var parent$11 = setPrototypeOf$6;

  var setPrototypeOf$5 = parent$11;

  var parent$10 = setPrototypeOf$5;

  var setPrototypeOf$4 = parent$10;

  var parent$$ = setPrototypeOf$4;

  var setPrototypeOf$3 = parent$$;

  var setPrototypeOf$2 = setPrototypeOf$3;

  var setPrototypeOf$1 = setPrototypeOf$2;

  var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf$1);

  // TODO: Remove from `core-js@4`
  var $$S = _export;
  var bind$n = functionBind;

  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  $$S({ target: 'Function', proto: true, forced: Function.bind !== bind$n }, {
    bind: bind$n
  });

  var entryVirtual$7 = entryVirtual$b;

  var bind$m = entryVirtual$7('Function').bind;

  var isPrototypeOf$9 = objectIsPrototypeOf;
  var method$5 = bind$m;

  var FunctionPrototype = Function.prototype;

  var bind$l = function (it) {
    var own = it.bind;
    return it === FunctionPrototype || (isPrototypeOf$9(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method$5 : own;
  };

  var parent$_ = bind$l;

  var bind$k = parent$_;

  var parent$Z = bind$k;

  var bind$j = parent$Z;

  var parent$Y = bind$j;

  var bind$i = parent$Y;

  var bind$h = bind$i;

  var bind$g = bind$h;

  var _bindInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(bind$g);

  function _setPrototypeOf(o, p) {
    var _context;
    _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    _Object$defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }

  var $$R = _export;
  var fails$e = fails$x;
  var toObject$4 = toObject$a;
  var nativeGetPrototypeOf = objectGetPrototypeOf;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var FAILS_ON_PRIMITIVES$2 = fails$e(function () { nativeGetPrototypeOf(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $$R({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !CORRECT_PROTOTYPE_GETTER }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$4(it));
    }
  });

  var path$c = path$n;

  var getPrototypeOf$6 = path$c.Object.getPrototypeOf;

  var parent$X = getPrototypeOf$6;

  var getPrototypeOf$5 = parent$X;

  var parent$W = getPrototypeOf$5;

  var getPrototypeOf$4 = parent$W;

  var parent$V = getPrototypeOf$4;

  var getPrototypeOf$3 = parent$V;

  var getPrototypeOf$2 = getPrototypeOf$3;

  var getPrototypeOf$1 = getPrototypeOf$2;

  var _Object$getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf$1);

  function _getPrototypeOf(o) {
    var _context;
    _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf(o) {
      return o.__proto__ || _Object$getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var DESCRIPTORS$9 = descriptors;
  var uncurryThis$b = functionUncurryThis;
  var call$g = functionCall;
  var fails$d = fails$x;
  var objectKeys = objectKeys$3;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$3 = toObject$a;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$2 = Object.defineProperty;
  var concat$1 = uncurryThis$b([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$d(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$9 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$2(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$3(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$9 || call$g(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$Q = _export;
  var assign$7 = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$Q({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$7 }, {
    assign: assign$7
  });

  var path$b = path$n;

  var assign$6 = path$b.Object.assign;

  var parent$U = assign$6;

  var assign$5 = parent$U;

  var parent$T = assign$5;

  var assign$4 = parent$T;

  var parent$S = assign$4;

  var assign$3 = parent$S;

  var assign$2 = assign$3;

  var assign$1 = assign$2;

  var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign$1);

  var $$P = _export;
  var isArray$8 = isArray$d;

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  $$P({ target: 'Array', stat: true }, {
    isArray: isArray$8
  });

  var path$a = path$n;

  var isArray$7 = path$a.Array.isArray;

  var parent$R = isArray$7;

  var isArray$6 = parent$R;

  var parent$Q = isArray$6;

  var isArray$5 = parent$Q;

  var parent$P = isArray$5;

  var isArray$4 = parent$P;

  var isArray$3 = isArray$4;

  var isArray$2 = isArray$3;

  var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$2);

  function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (_Array$isArray(arr)) return _arrayLikeToArray$3(arr);
  }

  var classof$4 = classof$c;
  var getMethod$1 = getMethod$3;
  var isNullOrUndefined$3 = isNullOrUndefined$6;
  var Iterators$1 = iterators;
  var wellKnownSymbol$a = wellKnownSymbol$q;

  var ITERATOR$5 = wellKnownSymbol$a('iterator');

  var getIteratorMethod$a = function (it) {
    if (!isNullOrUndefined$3(it)) return getMethod$1(it, ITERATOR$5)
      || getMethod$1(it, '@@iterator')
      || Iterators$1[classof$4(it)];
  };

  var getIteratorMethod$9 = getIteratorMethod$a;

  var getIteratorMethod_1 = getIteratorMethod$9;

  var parent$O = getIteratorMethod_1;


  var getIteratorMethod$8 = parent$O;

  var parent$N = getIteratorMethod$8;

  var getIteratorMethod$7 = parent$N;

  var parent$M = getIteratorMethod$7;

  var getIteratorMethod$6 = parent$M;

  var getIteratorMethod$5 = getIteratorMethod$6;

  var getIteratorMethod$4 = getIteratorMethod$5;

  var _getIteratorMethod = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$4);

  var call$f = functionCall;
  var anObject$8 = anObject$f;
  var getMethod = getMethod$3;

  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$8(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$f(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$8(innerResult);
    return value;
  };

  var anObject$7 = anObject$f;
  var iteratorClose$1 = iteratorClose$2;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$7(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
  };

  var wellKnownSymbol$9 = wellKnownSymbol$q;
  var Iterators = iterators;

  var ITERATOR$4 = wellKnownSymbol$9('iterator');
  var ArrayPrototype$6 = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype$6[ITERATOR$4] === it);
  };

  var call$e = functionCall;
  var aCallable$c = aCallable$h;
  var anObject$6 = anObject$f;
  var tryToString$3 = tryToString$7;
  var getIteratorMethod$3 = getIteratorMethod$a;

  var $TypeError$a = TypeError;

  var getIterator$3 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
    if (aCallable$c(iteratorMethod)) return anObject$6(call$e(iteratorMethod, argument));
    throw $TypeError$a(tryToString$3(argument) + ' is not iterable');
  };

  var bind$f = functionBindContext;
  var call$d = functionCall;
  var toObject$2 = toObject$a;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor = isConstructor$4;
  var lengthOfArrayLike$2 = lengthOfArrayLike$8;
  var createProperty$2 = createProperty$6;
  var getIterator$2 = getIterator$3;
  var getIteratorMethod$2 = getIteratorMethod$a;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$2(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$f(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$2(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = getIterator$2(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = call$d(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$2(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$2(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$2(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var wellKnownSymbol$8 = wellKnownSymbol$q;

  var ITERATOR$3 = wellKnownSymbol$8('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$3] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$3] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var $$O = _export;
  var from$7 = arrayFrom$1;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$O({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from$7
  });

  var path$9 = path$n;

  var from$6 = path$9.Array.from;

  var parent$L = from$6;

  var from$5 = parent$L;

  var parent$K = from$5;

  var from$4 = parent$K;

  var parent$J = from$4;

  var from$3 = parent$J;

  var from$2 = from$3;

  var from$1 = from$2;

  var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from$1);

  function _iterableToArray(iter) {
    if (typeof _Symbol !== "undefined" && _getIteratorMethod(iter) != null || iter["@@iterator"] != null) return _Array$from(iter);
  }

  function _unsupportedIterableToArray$3(o, minLen) {
    var _context;
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return _Array$from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread();
  }

  function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$2(o, minLen) { var _context5; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = _sliceInstanceProperty(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
  function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function getDOMPoint(dom) {
    var t = 0;
    var l = 0;
    //判断是否有父容器，如果存在则累加其边距
    while (dom !== document.body) {
      t += dom.offsetTop; //叠加父容器的上边距
      l += dom.offsetLeft; //叠加父容器的左边距
      //if(dom.style.borderLeftWidth) l += Number(dom.style.borderLeftWidth);
      //if(dom.style.borderTopWidth) t += Number(dom.style.borderTopWidth);
      dom = dom.parentNode;
    }
    return {
      x: l,
      y: t
    };
  }
  /**
   * @description 查看当前的鼠标位置是否在父元素和绝对定位的子元素的组合范围内，如果超出则返回false
   * @param parent
   * @param topChild
   * @param pageX
   * @param pageY
   * @returns {boolean}
   */
  function checkIsMouseInRange(parent, topChild, pageX, pageY) {
    var _getDOMPoint = getDOMPoint(parent),
      x = _getDOMPoint.x,
      y = _getDOMPoint.y;
    var allTop = y - _parseInt$1(topChild.style.bottom) - topChild.clientHeight;
    var allBottom = y + parent.clientHeight;
    var allLeft = x + Math.round(parent.clientWidth / 2) - Math.round(topChild.clientWidth / 2);
    var allRight = x + Math.round(parent.clientWidth / 2) + Math.round(topChild.clientWidth / 2);
    var parentLeft = x;
    var parentRight = x + parent.clientWidth;
    if (pageX >= allLeft && pageX <= allRight && pageY <= y && pageY >= allTop) return true;
    if (pageX >= parentLeft && pageX <= parentRight && pageY >= y && pageY <= allBottom) return true;
    return false;
  }
  var SELECTOR_REG = /([\w-]+)?(?:#([\w-]+))?(?:\.([\w-]+))?/;
  /**
   * @description 根据desc的标签描述和props的属性描述来创建一个DOM对象，并且在实例上挂载各种属性
   * @param {string} desc
   * @param {DOMProps} props
   * @param {Node[]} children
   * @returns
   */
  function $$N(desc, props, children) {
    var match = [];
    var regArray = SELECTOR_REG.exec(desc);
    // /([\w-]+)?(?:#([\w-]+))?(?:\.([\w-]+))?/.exec('div#app.a.b')
    //  ['div#app.a', 'div', 'app', 'a', index: 0, input: 'div#app.a.b', groups: undefined]
    match[0] = regArray ? regArray[1] : undefined; // div
    match[1] = regArray ? regArray[2] : undefined; // app
    match[2] = regArray ? regArray[3] : undefined; // a
    var el = match[0] ? document.createElement(match[0]) : document.createElement('div');
    if (match[1]) {
      el.id = match[1];
    }
    match[2] && addClass(el, [match[2]]);
    for (var key in props) {
      if (_typeof$1(props[key]) === 'object') {
        if (key === 'style') {
          var str = '';
          var styles = props[key];
          for (var k in styles) {
            var _context;
            str += _concatInstanceProperty(_context = "".concat(k, ": ")).call(_context, styles[k], ";");
          }
          el.setAttribute('style', str);
        }
      } else {
        el.setAttribute(key, String(props[key]));
      }
    }
    if (typeof children === 'string') {
      el.innerHTML += children;
    } else if (children) {
      var _iterator = _createForOfIteratorHelper$2(children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          el.appendChild(child.el);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return el;
  }
  function addClass(dom, classNames) {
    var classList = dom.classList;
    var _iterator2 = _createForOfIteratorHelper$2(classNames),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var name = _step2.value;
        if (!includeClass(dom, name)) {
          classList.add(name);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  function removeClass(dom, classNames) {
    var classList = dom.classList;
    classList.remove.apply(classList, _toConsumableArray(classNames));
  }
  function includeClass(dom, className) {
    var classList = dom.classList;
    for (var key in classList) {
      if (classList[key] === className) return true;
    }
    return false;
  }
  function getElementSize(dom) {
    var clone = dom.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.opacity = '0';
    clone.removeAttribute('hidden');
    var parent = dom.parentNode || document.body;
    parent.appendChild(clone);
    var rect = clone.getBoundingClientRect();
    parent.removeChild(clone);
    return rect;
  }
  var svgNS = 'http://www.w3.org/2000/svg';
  function createSvg(d) {
    var viewBox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0 0 24 24';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', viewBox);
    if (d) {
      var path = document.createElementNS(svgNS, 'path');
      path.setAttributeNS(null, 'd', d);
      svg.appendChild(path);
    }
    return svg;
  }
  /**
   * @description 合并两个组件的实例对象
   * @param target
   * @param another
   */
  function patchComponent(target, another) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      replaceElementType: 'replaceOuterHTMLOfComponent'
    };
    if (target.id !== another.id) throw new Error('需要合并的两个组件的id不相同');
    for (var key in another) {
      if (key in target) {
        if (key === 'props') {
          patchDOMProps(target[key], another[key], target.el);
        } else if (key === 'el') {
          if (options.replaceElementType === 'replaceOuterHTMLOfComponent') {
            target.el = another.el;
          } else {
            var _iterator4 = _createForOfIteratorHelper$2(target.el.childNodes),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var child = _step4.value;
                target.el.removeChild(child);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            target.el.appendChild(another.el);
          }
        } else {
          if (target[key] instanceof Function) {
            if (!(another[key] instanceof Function)) {
              throw new Error("\u5C5E\u6027".concat(key, "\u5BF9\u5E94\u7684\u503C\u5E94\u8BE5\u4E3A\u51FD\u6570\u7C7B\u578B"));
            }
            console.log('合并函数', another[key]);
            target[key] = patchFn(target[key], another[key], target);
            target.resetEvent();
          } else if (target[key] instanceof HTMLElement) {
            if (!(another[key] instanceof HTMLElement) && typeof another[key] !== 'string') {
              throw new Error("\u5C5E\u6027".concat(key, "\u5BF9\u5E94\u7684\u503C\u5E94\u8BE5\u4E3ADOM\u5143\u7D20\u6216\u8005\u5B57\u7B26\u4E32\u7C7B\u578B"));
            }
            if (typeof another[key] === 'string') ; else {
              var _target$key$parentNod, _target$key$parentNod2;
              (_target$key$parentNod = target[key].parentNode) === null || _target$key$parentNod === void 0 ? void 0 : _target$key$parentNod.insertBefore(another[key], target[key]);
              (_target$key$parentNod2 = target[key].parentNode) === null || _target$key$parentNod2 === void 0 ? void 0 : _target$key$parentNod2.removeChild(target[key]);
              target[key] = another[key];
            }
          }
        }
      }
    }
  }
  function patchDOMProps(targetProps, anotherProps, el) {
    for (var key in anotherProps) {
      if (targetProps.hasOwnProperty(key)) {
        if (key === 'id') {
          targetProps.id = anotherProps.id;
          el.id = targetProps.id;
        } else if (key === 'className') {
          var _context2;
          _concatInstanceProperty(_context2 = targetProps.className).call(_context2, anotherProps.className);
          addClass(el, anotherProps.className);
        } else if (key === 'style') {
          patchStyle(targetProps.style, anotherProps.style, el);
        }
      } else {
        targetProps[key] = anotherProps[key];
        if (key !== 'style') {
          el[key] = anotherProps[key];
        } else if (key === 'style') {
          for (var prop in anotherProps['style']) {
            el.style[prop] = anotherProps['style'][prop];
          }
        }
      }
    }
  }
  function patchStyle(targetStyle, anotherStyle, el) {
    for (var key in anotherStyle) {
      targetStyle[key] = anotherStyle[key];
    }
    for (var _key in targetStyle) {
      el.style[_key] = targetStyle[_key];
    }
  }
  function patchFn(targetFn, anotherFn, context) {
    // let args = targetFn.arguments;
    console.log(targetFn, anotherFn, context);
    function fn() {
      var _context3, _context4;
      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }
      targetFn.call.apply(targetFn, _concatInstanceProperty(_context3 = [context]).call(_context3, args));
      anotherFn.call.apply(anotherFn, _concatInstanceProperty(_context4 = [context]).call(_context4, args));
    }
    return fn.bind(context);
  }

  function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Component = /*#__PURE__*/function (_BaseEvent) {
    _inherits(Component, _BaseEvent);
    var _super = _createSuper$f(Component);
    //el代表着该组件对应的整个HTML元素
    function Component(container, desc, props, children) {
      var _this;
      _classCallCheck(this, Component);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "el", void 0);
      var dom = $$N(desc, props, children);
      _this.el = dom;
      // 安装组件成功
      if (container) {
        container.append(dom);
      }
      return _this;
    }
    return _createClass(Component);
  }(BaseEvent);

  var internalMetadata = {exports: {}};

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$c = fails$x;

  var arrayBufferNonExtensible = fails$c(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
    }
  });

  var fails$b = fails$x;
  var isObject$7 = isObject$j;
  var classof$3 = classofRaw$2;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$1 = fails$b(function () { $isExtensible(1); });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible = (FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
    if (!isObject$7(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$3(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var fails$a = fails$x;

  var freezing = !fails$a(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$M = _export;
  var uncurryThis$a = functionUncurryThis;
  var hiddenKeys = hiddenKeys$6;
  var isObject$6 = isObject$j;
  var hasOwn$4 = hasOwnProperty_1;
  var defineProperty$1 = objectDefineProperty.f;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible = objectIsExtensible;
  var uid = uid$4;
  var FREEZING = freezing;

  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  var setMetadata = function (it) {
    defineProperty$1(it, METADATA, { value: {
      objectID: 'O' + id++, // object ID
      weakData: {}          // weak collections IDs
    } });
  };

  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$6(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
    // return object ID
    } return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
    // return the store of weak collections IDs
    } return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$4(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () { /* empty */ };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule$1.f;
    var splice = uncurryThis$a([].splice);
    var test = {};
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule$1.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        } return result;
      };

      $$M({ target: 'Object', stat: true, forced: true }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };

  hiddenKeys[METADATA] = true;

  var internalMetadataExports = internalMetadata.exports;

  var bind$e = functionBindContext;
  var call$c = functionCall;
  var anObject$5 = anObject$f;
  var tryToString$2 = tryToString$7;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var lengthOfArrayLike$1 = lengthOfArrayLike$8;
  var isPrototypeOf$8 = objectIsPrototypeOf;
  var getIterator$1 = getIterator$3;
  var getIteratorMethod$1 = getIteratorMethod$a;
  var iteratorClose = iteratorClose$2;

  var $TypeError$9 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$l = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$e(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$5(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$1(iterable);
      if (!iterFn) throw $TypeError$9(tryToString$2(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$8(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator$1(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$c(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$8(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var isPrototypeOf$7 = objectIsPrototypeOf;

  var $TypeError$8 = TypeError;

  var anInstance$5 = function (it, Prototype) {
    if (isPrototypeOf$7(Prototype, it)) return it;
    throw $TypeError$8('Incorrect invocation');
  };

  var $$L = _export;
  var global$c = global$r;
  var InternalMetadataModule = internalMetadataExports;
  var fails$9 = fails$x;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
  var iterate$k = iterate$l;
  var anInstance$4 = anInstance$5;
  var isCallable$9 = isCallable$q;
  var isObject$5 = isObject$j;
  var setToStringTag$3 = setToStringTag$9;
  var defineProperty = objectDefineProperty.f;
  var forEach = arrayIteration.forEach;
  var DESCRIPTORS$8 = descriptors;
  var InternalStateModule$4 = internalState;

  var setInternalState$4 = InternalStateModule$4.set;
  var internalStateGetterFor$1 = InternalStateModule$4.getterFor;

  var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$c[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var exported = {};
    var Constructor;

    if (!DESCRIPTORS$8 || !isCallable$9(NativeConstructor)
      || !(IS_WEAK || NativePrototype.forEach && !fails$9(function () { new NativeConstructor().entries().next(); }))
    ) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else {
      Constructor = wrapper(function (target, iterable) {
        setInternalState$4(anInstance$4(target, Prototype), {
          type: CONSTRUCTOR_NAME,
          collection: new NativeConstructor()
        });
        if (iterable != undefined) iterate$k(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
      });

      var Prototype = Constructor.prototype;

      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

      forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
          createNonEnumerableProperty$3(Prototype, KEY, function (a, b) {
            var collection = getInternalState(this).collection;
            if (!IS_ADDER && IS_WEAK && !isObject$5(a)) return KEY == 'get' ? undefined : false;
            var result = collection[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
        }
      });

      IS_WEAK || defineProperty(Prototype, 'size', {
        configurable: true,
        get: function () {
          return getInternalState(this).collection.size;
        }
      });
    }

    setToStringTag$3(Constructor, CONSTRUCTOR_NAME, false, true);

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$L({ global: true, forced: true }, exported);

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

    return Constructor;
  };

  var defineBuiltIn$3 = defineBuiltIn$8;

  var defineBuiltIns$2 = function (target, src, options) {
    for (var key in src) {
      if (options && options.unsafe && target[key]) target[key] = src[key];
      else defineBuiltIn$3(target, key, src[key], options);
    } return target;
  };

  var getBuiltIn$6 = getBuiltIn$h;
  var defineBuiltInAccessor$3 = defineBuiltInAccessor$5;
  var wellKnownSymbol$7 = wellKnownSymbol$q;
  var DESCRIPTORS$7 = descriptors;

  var SPECIES$2 = wellKnownSymbol$7('species');

  var setSpecies$2 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$6(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$7 && Constructor && !Constructor[SPECIES$2]) {
      defineBuiltInAccessor$3(Constructor, SPECIES$2, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var create$2 = objectCreate;
  var defineBuiltInAccessor$2 = defineBuiltInAccessor$5;
  var defineBuiltIns$1 = defineBuiltIns$2;
  var bind$d = functionBindContext;
  var anInstance$3 = anInstance$5;
  var isNullOrUndefined$2 = isNullOrUndefined$6;
  var iterate$j = iterate$l;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$3;
  var setSpecies$1 = setSpecies$2;
  var DESCRIPTORS$6 = descriptors;
  var fastKey = internalMetadataExports.fastKey;
  var InternalStateModule$3 = internalState;

  var setInternalState$3 = InternalStateModule$3.set;
  var internalStateGetterFor = InternalStateModule$3.getterFor;

  var collectionStrong$1 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$3(that, Prototype);
        setInternalState$3(that, {
          type: CONSTRUCTOR_NAME,
          index: create$2(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$6) that.size = 0;
        if (!isNullOrUndefined$2(iterable)) iterate$j(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var Prototype = Constructor.prototype;

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
        // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$6) state.size++;
          else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        } return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      defineBuiltIns$1(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if (DESCRIPTORS$6) state.size = 0;
          else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$6) state.size--;
            else that.size--;
          } return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = bind$d(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });

      defineBuiltIns$1(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$6) defineBuiltInAccessor$2(Prototype, 'size', {
        configurable: true,
        get: function () {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$3(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return createIterResultObject(undefined, true);
        }
        // return step by kind
        if (kind == 'keys') return createIterResultObject(entry.key, false);
        if (kind == 'values') return createIterResultObject(entry.value, false);
        return createIterResultObject([entry.key, entry.value], false);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies$1(CONSTRUCTOR_NAME);
    }
  };

  var collection = collection$1;
  var collectionStrong = collectionStrong$1;

  // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects
  collection('Map', function (init) {
    return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var path$8 = path$n;

  var map$c = path$8.Map;

  var parent$I = map$c;


  var map$b = parent$I;

  var parent$H = map$b;

  var map$a = parent$H;

  // https://tc39.github.io/proposal-setmap-offrom/
  var bind$c = functionBindContext;
  var call$b = functionCall;
  var aCallable$b = aCallable$h;
  var aConstructor$1 = aConstructor$3;
  var isNullOrUndefined$1 = isNullOrUndefined$6;
  var iterate$i = iterate$l;

  var push$5 = [].push;

  var collectionFrom = function from(source /* , mapFn, thisArg */) {
    var length = arguments.length;
    var mapFn = length > 1 ? arguments[1] : undefined;
    var mapping, array, n, boundFunction;
    aConstructor$1(this);
    mapping = mapFn !== undefined;
    if (mapping) aCallable$b(mapFn);
    if (isNullOrUndefined$1(source)) return new this();
    array = [];
    if (mapping) {
      n = 0;
      boundFunction = bind$c(mapFn, length > 2 ? arguments[2] : undefined);
      iterate$i(source, function (nextItem) {
        call$b(push$5, array, boundFunction(nextItem, n++));
      });
    } else {
      iterate$i(source, push$5, { that: array });
    }
    return new this(array);
  };

  var $$K = _export;
  var from = collectionFrom;

  // `Map.from` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
  $$K({ target: 'Map', stat: true, forced: true }, {
    from: from
  });

  var arraySlice$4 = arraySlice$7;

  // https://tc39.github.io/proposal-setmap-offrom/
  var collectionOf = function of() {
    return new this(arraySlice$4(arguments));
  };

  var $$J = _export;
  var of = collectionOf;

  // `Map.of` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
  $$J({ target: 'Map', stat: true, forced: true }, {
    of: of
  });

  var tryToString$1 = tryToString$7;

  // Perform ? RequireInternalSlot(M, [[MapData]])
  var aMap$e = function (it) {
    if (typeof it == 'object' && 'size' in it && 'has' in it && 'get' in it && 'set' in it && 'delete' in it && 'entries' in it) return it;
    throw TypeError(tryToString$1(it) + ' is not a map');
  };

  var caller$1 = function (methodName, numArgs) {
    return numArgs == 1 ? function (object, arg) {
      return object[methodName](arg);
    } : function (object, arg1, arg2) {
      return object[methodName](arg1, arg2);
    };
  };

  var getBuiltIn$5 = getBuiltIn$h;
  var caller = caller$1;

  var Map$5 = getBuiltIn$5('Map');

  var mapHelpers = {
    Map: Map$5,
    set: caller('set', 2),
    get: caller('get', 1),
    has: caller('has', 1),
    remove: caller('delete', 1),
    proto: Map$5.prototype
  };

  var $$I = _export;
  var aMap$d = aMap$e;
  var remove = mapHelpers.remove;

  // `Map.prototype.deleteAll` method
  // https://github.com/tc39/proposal-collection-methods
  $$I({ target: 'Map', proto: true, real: true, forced: true }, {
    deleteAll: function deleteAll(/* ...elements */) {
      var collection = aMap$d(this);
      var allDeleted = true;
      var wasDeleted;
      for (var k = 0, len = arguments.length; k < len; k++) {
        wasDeleted = remove(collection, arguments[k]);
        allDeleted = allDeleted && wasDeleted;
      } return !!allDeleted;
    }
  });

  var $$H = _export;
  var aMap$c = aMap$e;
  var MapHelpers$4 = mapHelpers;

  var get$1 = MapHelpers$4.get;
  var has$1 = MapHelpers$4.has;
  var set$6 = MapHelpers$4.set;

  // `Map.prototype.emplace` method
  // https://github.com/tc39/proposal-upsert
  $$H({ target: 'Map', proto: true, real: true, forced: true }, {
    emplace: function emplace(key, handler) {
      var map = aMap$c(this);
      var value, inserted;
      if (has$1(map, key)) {
        value = get$1(map, key);
        if ('update' in handler) {
          value = handler.update(value, key, map);
          set$6(map, key, value);
        } return value;
      }
      inserted = handler.insert(key, map);
      set$6(map, key, inserted);
      return inserted;
    }
  });

  var call$a = functionCall;

  var iterateSimple$1 = function (iterator, fn, $next) {
    var next = $next || iterator.next;
    var step, result;
    while (!(step = call$a(next, iterator)).done) {
      result = fn(step.value);
      if (result !== undefined) return result;
    }
  };

  var iterateSimple = iterateSimple$1;

  var mapIterate = function (map, fn, interruptible) {
    return interruptible ? iterateSimple(map.entries(), function (entry) {
      return fn(entry[1], entry[0]);
    }) : map.forEach(fn);
  };

  var $$G = _export;
  var bind$b = functionBindContext;
  var aMap$b = aMap$e;
  var iterate$h = mapIterate;

  // `Map.prototype.every` method
  // https://github.com/tc39/proposal-collection-methods
  $$G({ target: 'Map', proto: true, real: true, forced: true }, {
    every: function every(callbackfn /* , thisArg */) {
      var map = aMap$b(this);
      var boundFunction = bind$b(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return iterate$h(map, function (value, key) {
        if (!boundFunction(value, key, map)) return false;
      }, true) !== false;
    }
  });

  var $$F = _export;
  var bind$a = functionBindContext;
  var aMap$a = aMap$e;
  var MapHelpers$3 = mapHelpers;
  var iterate$g = mapIterate;

  var Map$4 = MapHelpers$3.Map;
  var set$5 = MapHelpers$3.set;

  // `Map.prototype.filter` method
  // https://github.com/tc39/proposal-collection-methods
  $$F({ target: 'Map', proto: true, real: true, forced: true }, {
    filter: function filter(callbackfn /* , thisArg */) {
      var map = aMap$a(this);
      var boundFunction = bind$a(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      var newMap = new Map$4();
      iterate$g(map, function (value, key) {
        if (boundFunction(value, key, map)) set$5(newMap, key, value);
      });
      return newMap;
    }
  });

  var $$E = _export;
  var bind$9 = functionBindContext;
  var aMap$9 = aMap$e;
  var iterate$f = mapIterate;

  // `Map.prototype.find` method
  // https://github.com/tc39/proposal-collection-methods
  $$E({ target: 'Map', proto: true, real: true, forced: true }, {
    find: function find(callbackfn /* , thisArg */) {
      var map = aMap$9(this);
      var boundFunction = bind$9(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      var result = iterate$f(map, function (value, key) {
        if (boundFunction(value, key, map)) return { value: value };
      }, true);
      return result && result.value;
    }
  });

  var $$D = _export;
  var bind$8 = functionBindContext;
  var aMap$8 = aMap$e;
  var iterate$e = mapIterate;

  // `Map.prototype.findKey` method
  // https://github.com/tc39/proposal-collection-methods
  $$D({ target: 'Map', proto: true, real: true, forced: true }, {
    findKey: function findKey(callbackfn /* , thisArg */) {
      var map = aMap$8(this);
      var boundFunction = bind$8(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      var result = iterate$e(map, function (value, key) {
        if (boundFunction(value, key, map)) return { key: key };
      }, true);
      return result && result.key;
    }
  });

  var $$C = _export;
  var call$9 = functionCall;
  var uncurryThis$9 = functionUncurryThis;
  var isCallable$8 = isCallable$q;
  var aCallable$a = aCallable$h;
  var iterate$d = iterate$l;
  var Map$3 = mapHelpers.Map;

  var push$4 = uncurryThis$9([].push);

  // `Map.groupBy` method
  // https://github.com/tc39/proposal-collection-methods
  $$C({ target: 'Map', stat: true, forced: true }, {
    groupBy: function groupBy(iterable, keyDerivative) {
      var C = isCallable$8(this) ? this : Map$3;
      var newMap = new C();
      aCallable$a(keyDerivative);
      var has = aCallable$a(newMap.has);
      var get = aCallable$a(newMap.get);
      var set = aCallable$a(newMap.set);
      iterate$d(iterable, function (element) {
        var derivedKey = keyDerivative(element);
        if (!call$9(has, newMap, derivedKey)) call$9(set, newMap, derivedKey, [element]);
        else push$4(call$9(get, newMap, derivedKey), element);
      });
      return newMap;
    }
  });

  // `SameValueZero` abstract operation
  // https://tc39.es/ecma262/#sec-samevaluezero
  var sameValueZero$1 = function (x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y || x != x && y != y;
  };

  var $$B = _export;
  var sameValueZero = sameValueZero$1;
  var aMap$7 = aMap$e;
  var iterate$c = mapIterate;

  // `Map.prototype.includes` method
  // https://github.com/tc39/proposal-collection-methods
  $$B({ target: 'Map', proto: true, real: true, forced: true }, {
    includes: function includes(searchElement) {
      return iterate$c(aMap$7(this), function (value) {
        if (sameValueZero(value, searchElement)) return true;
      }, true) === true;
    }
  });

  var $$A = _export;
  var call$8 = functionCall;
  var iterate$b = iterate$l;
  var isCallable$7 = isCallable$q;
  var aCallable$9 = aCallable$h;
  var Map$2 = mapHelpers.Map;

  // `Map.keyBy` method
  // https://github.com/tc39/proposal-collection-methods
  $$A({ target: 'Map', stat: true, forced: true }, {
    keyBy: function keyBy(iterable, keyDerivative) {
      var C = isCallable$7(this) ? this : Map$2;
      var newMap = new C();
      aCallable$9(keyDerivative);
      var setter = aCallable$9(newMap.set);
      iterate$b(iterable, function (element) {
        call$8(setter, newMap, keyDerivative(element), element);
      });
      return newMap;
    }
  });

  var $$z = _export;
  var aMap$6 = aMap$e;
  var iterate$a = mapIterate;

  // `Map.prototype.keyOf` method
  // https://github.com/tc39/proposal-collection-methods
  $$z({ target: 'Map', proto: true, real: true, forced: true }, {
    keyOf: function keyOf(searchElement) {
      var result = iterate$a(aMap$6(this), function (value, key) {
        if (value === searchElement) return { key: key };
      }, true);
      return result && result.key;
    }
  });

  var $$y = _export;
  var bind$7 = functionBindContext;
  var aMap$5 = aMap$e;
  var MapHelpers$2 = mapHelpers;
  var iterate$9 = mapIterate;

  var Map$1 = MapHelpers$2.Map;
  var set$4 = MapHelpers$2.set;

  // `Map.prototype.mapKeys` method
  // https://github.com/tc39/proposal-collection-methods
  $$y({ target: 'Map', proto: true, real: true, forced: true }, {
    mapKeys: function mapKeys(callbackfn /* , thisArg */) {
      var map = aMap$5(this);
      var boundFunction = bind$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      var newMap = new Map$1();
      iterate$9(map, function (value, key) {
        set$4(newMap, boundFunction(value, key, map), value);
      });
      return newMap;
    }
  });

  var $$x = _export;
  var bind$6 = functionBindContext;
  var aMap$4 = aMap$e;
  var MapHelpers$1 = mapHelpers;
  var iterate$8 = mapIterate;

  var Map = MapHelpers$1.Map;
  var set$3 = MapHelpers$1.set;

  // `Map.prototype.mapValues` method
  // https://github.com/tc39/proposal-collection-methods
  $$x({ target: 'Map', proto: true, real: true, forced: true }, {
    mapValues: function mapValues(callbackfn /* , thisArg */) {
      var map = aMap$4(this);
      var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      var newMap = new Map();
      iterate$8(map, function (value, key) {
        set$3(newMap, key, boundFunction(value, key, map));
      });
      return newMap;
    }
  });

  var $$w = _export;
  var aMap$3 = aMap$e;
  var iterate$7 = iterate$l;
  var set$2 = mapHelpers.set;

  // `Map.prototype.merge` method
  // https://github.com/tc39/proposal-collection-methods
  $$w({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    merge: function merge(iterable /* ...iterables */) {
      var map = aMap$3(this);
      var argumentsLength = arguments.length;
      var i = 0;
      while (i < argumentsLength) {
        iterate$7(arguments[i++], function (key, value) {
          set$2(map, key, value);
        }, { AS_ENTRIES: true });
      }
      return map;
    }
  });

  var $$v = _export;
  var aCallable$8 = aCallable$h;
  var aMap$2 = aMap$e;
  var iterate$6 = mapIterate;

  var $TypeError$7 = TypeError;

  // `Map.prototype.reduce` method
  // https://github.com/tc39/proposal-collection-methods
  $$v({ target: 'Map', proto: true, real: true, forced: true }, {
    reduce: function reduce(callbackfn /* , initialValue */) {
      var map = aMap$2(this);
      var noInitial = arguments.length < 2;
      var accumulator = noInitial ? undefined : arguments[1];
      aCallable$8(callbackfn);
      iterate$6(map, function (value, key) {
        if (noInitial) {
          noInitial = false;
          accumulator = value;
        } else {
          accumulator = callbackfn(accumulator, value, key, map);
        }
      });
      if (noInitial) throw $TypeError$7('Reduce of empty map with no initial value');
      return accumulator;
    }
  });

  var $$u = _export;
  var bind$5 = functionBindContext;
  var aMap$1 = aMap$e;
  var iterate$5 = mapIterate;

  // `Map.prototype.some` method
  // https://github.com/tc39/proposal-collection-methods
  $$u({ target: 'Map', proto: true, real: true, forced: true }, {
    some: function some(callbackfn /* , thisArg */) {
      var map = aMap$1(this);
      var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return iterate$5(map, function (value, key) {
        if (boundFunction(value, key, map)) return true;
      }, true) === true;
    }
  });

  var $$t = _export;
  var aCallable$7 = aCallable$h;
  var aMap = aMap$e;
  var MapHelpers = mapHelpers;

  var $TypeError$6 = TypeError;
  var get = MapHelpers.get;
  var has = MapHelpers.has;
  var set$1 = MapHelpers.set;

  // `Map.prototype.update` method
  // https://github.com/tc39/proposal-collection-methods
  $$t({ target: 'Map', proto: true, real: true, forced: true }, {
    update: function update(key, callback /* , thunk */) {
      var map = aMap(this);
      var length = arguments.length;
      aCallable$7(callback);
      var isPresentInMap = has(map, key);
      if (!isPresentInMap && length < 3) {
        throw $TypeError$6('Updating absent value');
      }
      var value = isPresentInMap ? get(map, key) : aCallable$7(length > 2 ? arguments[2] : undefined)(key, map);
      set$1(map, key, callback(value, key, map));
      return map;
    }
  });

  var call$7 = functionCall;
  var aCallable$6 = aCallable$h;
  var isCallable$6 = isCallable$q;
  var anObject$4 = anObject$f;

  var $TypeError$5 = TypeError;

  // `Map.prototype.upsert` method
  // https://github.com/tc39/proposal-upsert
  var mapUpsert = function upsert(key, updateFn /* , insertFn */) {
    var map = anObject$4(this);
    var get = aCallable$6(map.get);
    var has = aCallable$6(map.has);
    var set = aCallable$6(map.set);
    var insertFn = arguments.length > 2 ? arguments[2] : undefined;
    var value;
    if (!isCallable$6(updateFn) && !isCallable$6(insertFn)) {
      throw $TypeError$5('At least one callback required');
    }
    if (call$7(has, map, key)) {
      value = call$7(get, map, key);
      if (isCallable$6(updateFn)) {
        value = updateFn(value);
        call$7(set, map, key, value);
      }
    } else if (isCallable$6(insertFn)) {
      value = insertFn();
      call$7(set, map, key, value);
    } return value;
  };

  // TODO: remove from `core-js@4`
  var $$s = _export;
  var upsert$1 = mapUpsert;

  // `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
  // https://github.com/thumbsupep/proposal-upsert
  $$s({ target: 'Map', proto: true, real: true, forced: true }, {
    upsert: upsert$1
  });

  // TODO: remove from `core-js@4`
  var $$r = _export;
  var upsert = mapUpsert;

  // `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
  // https://github.com/thumbsupep/proposal-upsert
  $$r({ target: 'Map', proto: true, real: true, name: 'upsert', forced: true }, {
    updateOrInsert: upsert
  });

  var parent$G = map$a;


















  // TODO: remove from `core-js@4`

  // TODO: remove from `core-js@4`


  var map$9 = parent$G;

  var map$8 = map$9;

  var map$7 = map$8;

  var _Map = /*@__PURE__*/getDefaultExportFromCjs(map$7);

  var playPath = "M6 2.914v18.172L20.279 12 6 2.914z";
  var pausePath = "M14.333 20.133H19V3.8h-4.667M5 20.133h4.667V3.8H5v16.333z";
  var volumePath$1 = "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";
  // export const volumePath$2 = "M642.844444 183.466667c0 11.377778 7.111111 21.333333 17.066667 25.6 118.044444 49.777778 201.955556 166.4 201.955556 301.511111 0 136.533333-83.911111 253.155556-201.955556 301.511111-9.955556 4.266667-17.066667 14.222222-17.066667 25.6 0 19.911111 21.333333 34.133333 39.822223 25.6 137.955556-58.311111 236.088889-194.844444 236.088889-354.133333S822.044444 213.333333 682.666667 155.022222c-18.488889-5.688889-39.822222 8.533333-39.822223 28.444445z"
  var fullscreenPath = "M3 3h6.429v2.571H5.57V9.43H3V3m11.571 0H21v6.429h-2.571V5.57H14.57V3m3.858 11.571H21V21h-6.429v-2.571h3.858V14.57m-9 3.858V21H3v-6.429h2.571v3.858H9.43z";
  var fullscreenExitPath = "M14.571 14.571H21v2.572h-3.857V21H14.57v-6.429M3 14.571h6.429V21H6.857v-3.857H3V14.57M6.857 3H9.43v6.429H3V6.857h3.857V3M21 6.857V9.43h-6.429V3h2.572v3.857H21z";
  var subSettingPath = "M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z";

  function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Options = /*#__PURE__*/function (_Component) {
    _inherits(Options, _Component);
    var _super = _createSuper$e(Options);
    function Options(player, container, hideWidth, hideHeight, desc, props, children) {
      var _this;
      _classCallCheck(this, Options);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Options');
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "hideWidth", void 0);
      _defineProperty(_assertThisInitialized(_this), "hideHeight", void 0);
      _defineProperty(_assertThisInitialized(_this), "hideBox", void 0);
      _defineProperty(_assertThisInitialized(_this), "iconBox", void 0);
      _this.player = player;
      props ? _this.props = props : _this.props = {};
      _this.hideHeight = hideHeight;
      _this.hideWidth = hideWidth;
      _this.initBase();
      return _this;
    }
    _createClass(Options, [{
      key: "initBase",
      value: function initBase() {
        this.initBaseTemplate();
        this.initBaseEvent();
      }
    }, {
      key: "initBaseTemplate",
      value: function initBaseTemplate() {
        this.hideBox = $$N('div', {
          style: {
            display: 'none'
          }
        });
        addClass(this.hideBox, ['video-set']);
        if (this.hideHeight && this.hideHeight > 0) {
          this.hideBox.style.height = this.hideHeight + 'px';
        }
        if (this.hideWidth && this.hideWidth > 0) {
          this.hideBox.style.width = this.hideWidth + 'px';
        }
        this.el.appendChild(this.hideBox);
        this.iconBox = $$N('div');
        // hideBox距离底部的距离先写死，到时候再做微调
        this.hideBox.style.bottom = '45px';
        addClass(this.iconBox, ['video-icon']);
        this.el.appendChild(this.iconBox);
      }
    }, {
      key: "initBaseEvent",
      value: function initBaseEvent() {
        var _this2 = this;
        this.el.onmouseenter = function (e) {
          var ctx = _this2;
          ctx.hideBox.style.display = '';
          document.body.onmousemove = ctx.handleMouseMove.bind(_this2);
        };
      }
    }, {
      key: "handleMouseMove",
      value: function handleMouseMove(e) {
        var pX = e.pageX,
          pY = e.pageY;
        var ctx = this;
        if (!checkIsMouseInRange(ctx.el, ctx.hideBox, pX, pY)) {
          ctx.hideBox.style.display = 'none';
          document.body.onmousemove = null;
        }
      }
    }]);
    return Options;
  }(Component);

  function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var FullScreen = /*#__PURE__*/function (_Options) {
    _inherits(FullScreen, _Options);
    var _super = _createSuper$d(FullScreen);
    function FullScreen(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, FullScreen);
      _this = _super.call(this, player, container, 0, 0, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'FullScreen');
      _defineProperty(_assertThisInitialized(_this), "icon", void 0);
      _this.player = player;
      _this.props = props || {};
      _this.init();
      return _this;
    }
    _createClass(FullScreen, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        addClass(this.el, ['video-fullscreen', 'video-controller']);
        this.icon = createSvg(fullscreenPath);
        this.iconBox.appendChild(this.icon);
        this.el.appendChild(this.iconBox);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        this.onClick = this.onClick.bind(this);
        this.el.onclick = this.onClick;
      }
    }, {
      key: "onClick",
      value: function onClick(e) {
        if (this.player.container.requestFullscreen && !document.fullscreenElement) {
          this.player.container.requestFullscreen(); //该函数请求全屏
          this.iconBox.removeChild(this.icon);
          this.icon = createSvg(fullscreenExitPath);
          this.iconBox.appendChild(this.icon);
        } else if (document.fullscreenElement) {
          document.exitFullscreen(); //退出全屏函数仅仅绑定在document对象上，该点需要切记！！！
          this.iconBox.removeChild(this.icon);
          this.icon = createSvg(fullscreenPath);
          this.iconBox.appendChild(this.icon);
        }
      }
    }]);
    return FullScreen;
  }(Options);

  function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PlayButton = /*#__PURE__*/function (_Component) {
    _inherits(PlayButton, _Component);
    var _super = _createSuper$c(PlayButton);
    function PlayButton(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, PlayButton);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'PlayButton');
      // el: div.video-start-pause.video-controller
      _defineProperty(_assertThisInitialized(_this), "pauseIcon", void 0);
      _defineProperty(_assertThisInitialized(_this), "playIcon", void 0);
      _defineProperty(_assertThisInitialized(_this), "button", void 0);
      _defineProperty(_assertThisInitialized(_this), "iconBox", void 0);
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.player = player;
      _this.props = props || {};
      _this.init();
      return _this;
    }
    _createClass(PlayButton, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        addClass(this.el, ['video-start-pause', 'video-controller']);
        this.iconBox = $$N('div.video-icon');
        this.el.appendChild(this.iconBox);
        this.pauseIcon = createSvg(pausePath);
        this.playIcon = createSvg(playPath);
        this.button = this.playIcon;
        this.iconBox.appendChild(this.button);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.onClick = this.onClick.bind(this);
        this.player.on('play', function (e) {
          _this2.iconBox.removeChild(_this2.button);
          _this2.button = _this2.pauseIcon;
          _this2.iconBox.appendChild(_this2.button);
        });
        this.player.on('pause', function (e) {
          _this2.iconBox.removeChild(_this2.button);
          _this2.button = _this2.playIcon;
          _this2.iconBox.appendChild(_this2.button);
        });
        this.el.onclick = this.onClick;
      }
    }, {
      key: "resetEvent",
      value: function resetEvent() {
        this.onClick = this.onClick.bind(this);
        this.el.onclick = null;
        this.el.onclick = this.onClick;
      }
    }, {
      key: "onClick",
      value: function onClick(e) {
        if (this.player.video.paused) {
          this.player.video.play();
        } else {
          this.player.video.pause();
        }
      }
    }]);
    return PlayButton;
  }(Component);

  function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * @description 播放速率的类
   */
  var Playrate = /*#__PURE__*/function (_Options) {
    _inherits(Playrate, _Options);
    var _super = _createSuper$b(Playrate);
    // el: div.video-playrate.video-controller
    function Playrate(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Playrate);
      _this = _super.call(this, player, container, 0, 0, desc);
      _defineProperty(_assertThisInitialized(_this), "id", 'Playrate');
      _this.init();
      return _this;
    }
    _createClass(Playrate, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        storeControlComponent(this);
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        this.el['aria-label'] = '播放倍速';
        addClass(this.el, ['video-playrate', 'video-controller']);
        this.el.removeChild(this.iconBox);
        this.iconBox = $$N('span', null, '倍速');
        this.el.appendChild(this.iconBox);
        this.el.removeChild(this.hideBox);
        // this.hideBox = $('ul', { style: { display: 'none' }, 'aria-label': '播放速度调节' })
        addClass(this.hideBox, ['video-playrate-set']);
        this.el.appendChild(this.hideBox);
        for (var i = 0; i < 6; i++) {
          var li = $$N('li');
          li.innerText = '2.0x';
          this.hideBox.appendChild(li);
        }
      }
    }]);
    return Playrate;
  }(Options);

  function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var VolumeCompletedProgress = /*#__PURE__*/function (_Component) {
    _inherits(VolumeCompletedProgress, _Component);
    var _super = _createSuper$a(VolumeCompletedProgress);
    function VolumeCompletedProgress(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, VolumeCompletedProgress);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'VolumeCompletedProgress');
      // el: div.video-volume-completed
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.props = props || {};
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(VolumeCompletedProgress, [{
      key: "init",
      value: function init() {
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {}
    }]);
    return VolumeCompletedProgress;
  }(Component);

  function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Volume = /*#__PURE__*/function (_Options) {
    _inherits(Volume, _Options);
    var _super = _createSuper$9(Volume);
    function Volume(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Volume);
      _this = _super.call(this, player, container, 0, 0, desc);
      _defineProperty(_assertThisInitialized(_this), "id", 'Volume');
      // el: div.video-volume video-controller
      _defineProperty(_assertThisInitialized(_this), "volumeProgress", void 0);
      _defineProperty(_assertThisInitialized(_this), "volumeShow", void 0);
      _defineProperty(_assertThisInitialized(_this), "volumeCompleted", void 0);
      _defineProperty(_assertThisInitialized(_this), "icon", void 0);
      _this.init();
      return _this;
    }
    _createClass(Volume, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        addClass(this.el, ['video-volume', 'video-controller']);
        this.el['aria-label'] = '音量';
        addClass(this.hideBox, ['video-volume-set']);
        this.volumeProgress = $$N('div.video-volume-progress', {
          style: {
            height: '70px'
          }
        });
        this.volumeShow = $$N('div.video-volume-show');
        this.volumeShow.innerText = '50';
        this.volumeCompleted = new VolumeCompletedProgress(this.player, this.volumeProgress, 'div.video-volume-completed');
        this.hideBox.appendChild(this.volumeShow);
        this.hideBox.appendChild(this.volumeProgress);
        this.icon = createSvg(volumePath$1);
        this.iconBox.appendChild(this.icon);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.player.on('volume-progress-click', function (e, ctx) {
          var eoffsetY = e.pageY - getDOMPoint(_this2.volumeProgress).y;
          var offsetY = _this2.volumeProgress.clientHeight - eoffsetY;
          var scale = offsetY / _this2.volumeProgress.clientHeight;
          if (scale < 0) {
            scale = 0;
          } else if (scale > 1) {
            scale = 1;
          }
          _this2.volumeCompleted.el.style.height = scale * 100 + '%';
        });
        this.volumeProgress.onclick = function (e) {
          _this2.player.emit('volume-progress-click', e, _this2);
        };
      }
    }]);
    return Volume;
  }(Options);

  var CONTROL_COMPONENT_STORE = new _Map();
  function storeControlComponent(item) {
    CONTROL_COMPONENT_STORE.set(item.id, item);
  }
  var controllersMapping = {
    PlayButton: PlayButton,
    Playrate: Playrate,
    Volume: Volume,
    FullScreen: FullScreen
  };

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Dot = /*#__PURE__*/function (_Component) {
    _inherits(Dot, _Component);
    var _super = _createSuper$8(Dot);
    function Dot(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Dot);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Dot');
      // el: div.video-dot.video-dot-hidden
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _this.props = props || {};
      _this.player = player;
      _this.container = container;
      _this.init();
      return _this;
    }
    _createClass(Dot, [{
      key: "init",
      value: function init() {
        addClass(this.el, ['video-dot', 'video-dot-hidden']);
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.player.on('progress-mouseenter', function (e) {
          _this2.onShowDot(e);
        });
        this.player.on('progress-mouseleave', function (e) {
          _this2.onHideDot(e);
        });
        this.player.on('progress-click', function (e, ctx) {
          _this2.onChangePos(e, ctx);
        });
        this.player.on('timeupdate', function (e) {
          _this2.updatePos(e);
        });
      }
    }, {
      key: "onShowDot",
      value: function onShowDot(e) {
        if (includeClass(this.el, 'video-dot-hidden')) {
          removeClass(this.el, ['video-dot-hidden']);
        }
      }
    }, {
      key: "onHideDot",
      value: function onHideDot(e) {
        if (!includeClass(this.el, 'video-dot-hidden')) {
          addClass(this.el, ['video-dot-hidden']);
        }
      }
    }, {
      key: "onChangePos",
      value: function onChangePos(e, ctx) {
        e.offsetX / ctx.el.offsetWidth;
        this.el.style.left = e.offsetX - getElementSize(this.el).width / 2 + 'px';
      }
    }, {
      key: "updatePos",
      value: function updatePos(e) {
        var video = e.target;
        var scale = video.currentTime / video.duration;
        if (scale < 0) {
          scale = 0;
        } else if (scale > 1) {
          scale = 1;
        }
        this.el.style.left = scale * this.container.clientWidth - getElementSize(this.el).width / 2 + 'px';
      }
    }]);
    return Dot;
  }(Component);

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var CompletedProgress = /*#__PURE__*/function (_Component) {
    _inherits(CompletedProgress, _Component);
    var _super = _createSuper$7(CompletedProgress);
    function CompletedProgress(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, CompletedProgress);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'CompletedProgress');
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.props = props || {};
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(CompletedProgress, [{
      key: "init",
      value: function init() {
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.player.on('progress-click', function (e, ctx) {
          _this2.onChangeSize(e, ctx);
        });
        this.player.on('timeupdate', function (e) {
          _this2.updatePos(e);
        });
      }
    }, {
      key: "onChangeSize",
      value: function onChangeSize(e, ctx) {
        var scale = e.offsetX / ctx.el.offsetWidth;
        if (scale < 0) {
          scale = 0;
        } else if (scale > 1) {
          scale = 1;
        }
        this.el.style.width = scale * 100 + '%';
      }
    }, {
      key: "updatePos",
      value: function updatePos(e) {
        var video = e.target;
        var scale = video.currentTime / video.duration;
        if (scale < 0) {
          scale = 0;
        } else if (scale > 1) {
          scale = 1;
        }
        this.el.style.width = scale * 100 + '%';
      }
    }]);
    return CompletedProgress;
  }(Component);

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var BufferedProgress = /*#__PURE__*/function (_Component) {
    _inherits(BufferedProgress, _Component);
    var _super = _createSuper$6(BufferedProgress);
    function BufferedProgress(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, BufferedProgress);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'BufferedProgress');
      // el: div.video-buffered
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.props = props || {};
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(BufferedProgress, [{
      key: "init",
      value: function init() {
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.player.on('progress-click', function (e, ctx) {
          _this2.onChangeWidth(e, ctx);
        });
      }
    }, {
      key: "onChangeWidth",
      value: function onChangeWidth(e, ctx) {
        var scale = e.offsetX / ctx.el.offsetWidth;
        if (scale < 0) {
          scale = 0;
        } else if (scale > 1) {
          scale = 1;
        }
        this.el.style.width = scale * 100 + '%';
      }
    }]);
    return BufferedProgress;
  }(Component);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$5 = ".video-progress {\n  width: 100%;\n  height: 5px;\n  background-color: hsla(0, 0%, 100%, 0.2);\n  cursor: pointer;\n  position: relative;\n}\n.video-progress .video-pretime {\n  position: absolute;\n  left: 0;\n  top: -18px;\n  height: 15px;\n  width: 35px;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  line-height: 15px;\n  text-align: center;\n  font-size: 10px;\n  display: none;\n}\n.video-progress .video-buffered {\n  left: 0;\n  height: 100%;\n  width: 0;\n  z-index: 1001;\n  position: absolute;\n  background-color: hsla(0, 0%, 100%, 0.3);\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.video-progress .video-completed {\n  position: absolute;\n  background-color: #00a1d6;\n  height: 100%;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  left: 0;\n  width: 0;\n  z-index: 1002;\n}\n.video-progress .video-dot-hidden {\n  opacity: 0;\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n}\n.video-progress .video-dot {\n  position: absolute;\n  left: 0px;\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n  background-color: black;\n  cursor: pointer;\n  z-index: 1003;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n";
  styleInject(css_248z$5);

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Progress = /*#__PURE__*/function (_Component) {
    _inherits(Progress, _Component);
    var _super = _createSuper$5(Progress);
    function Progress(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Progress);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Progress');
      // el: div.video-progress
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "dot", void 0);
      _defineProperty(_assertThisInitialized(_this), "completedProgress", void 0);
      _defineProperty(_assertThisInitialized(_this), "bufferedProgress", void 0);
      _this.player = player;
      _this.props = props || {};
      _this.init();
      return _this;
    }
    _createClass(Progress, [{
      key: "init",
      value: function init() {
        this.initComponent();
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initComponent",
      value: function initComponent() {
        this.dot = new Dot(this.player, this.el, 'div');
        this.completedProgress = new CompletedProgress(this.player, this.el, 'div.video-completed');
        this.bufferedProgress = new BufferedProgress(this.player, this.el, 'div.video-buffered');
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.el.onmouseenter = function (e) {
          _this2.onMouseenter(e);
        };
        this.el.onmouseleave = function (e) {
          _this2.onMouseleave(e);
        };
        this.el.onclick = function (e) {
          _this2.onClick(e);
        };
      }
    }, {
      key: "onMouseenter",
      value: function onMouseenter(e) {
        this.player.emit('progress-mouseenter', e, this);
      }
    }, {
      key: "onMouseleave",
      value: function onMouseleave(e) {
        this.player.emit('progress-mouseleave', e, this);
      }
    }, {
      key: "onClick",
      value: function onClick(e) {
        this.player.emit('progress-click', e, this);
      }
    }]);
    return Progress;
  }(Component);
  // // import { styles } from '../../index'
  // import { styles } from '@/styles/style'
  // import { BaseEvent } from '@/class/BaseEvent'
  // import { formatTime } from '@/utils/format'
  // import { televisionSVG } from '../SVGTool/TelevisionDotModel'
  // import './progress.less'
  // export class Progress extends BaseEvent {
  //   private _template: HTMLElement | string
  //   private container: HTMLElement
  //   private progress: HTMLElement
  //   private pretime: HTMLElement
  //   private bufferedProgress: HTMLElement
  //   private completedProgress: HTMLElement
  //   private dot: HTMLElement
  //   private video: HTMLVideoElement
  //   private mouseDown: boolean = false
  //   constructor(container: HTMLElement) {
  //     super()
  //     this.container = container
  //     this.init()
  //     this.initEvent()
  //   }
  //   get template(): HTMLElement | string {
  //     return this._template
  //   }
  //   init() {
  //     this._template = `
  //       <div class="${styles['video-progress']}">
  //         <div class="${styles['video-pretime']}">00:00</div>
  //         <div class="${styles['video-buffered']}"></div>
  //         <div class="${styles['video-completed']}"></div>
  //         <div class="${styles['video-dot']} ${styles['video-dot-hidden']}">${televisionSVG}</div>
  //       </div>
  //     `
  //   }
  //   initProgressEvent() {
  //     this.progress.onmouseenter = () => {
  //       this.dot.className = `${styles['video-dot']}`
  //     }
  //     this.progress.onmouseleave = () => {
  //       if (!this.mouseDown) {
  //         this.dot.className = `${styles['video-dot']} ${styles['video-dot-hidden']}`
  //       }
  //       this.pretime.style.display = 'none'
  //     }
  //     this.progress.onmousemove = (e: MouseEvent) => {
  //       let scale = e.offsetX / this.progress.offsetWidth
  //       if (scale < 0) {
  //         scale = 0
  //       } else if (scale > 1) {
  //         scale = 1
  //       }
  //       this.pretime.innerHTML = formatTime(this.video.duration * scale)
  //       this.pretime.style.display = 'block'
  //       this.pretime.style.left = e.offsetX - 17 + 'px'
  //       e.preventDefault()
  //     }
  //     this.progress.addEventListener('click', (e: MouseEvent) => {
  //       if (e.target === this.dot) return
  //       let scale = e.offsetX / this.progress.offsetWidth
  //       if (scale < 0) {
  //         scale = 0
  //       } else if (scale > 1) {
  //         scale = 1
  //       }
  //       this.dot.style.left = this.progress.offsetWidth * scale - 5 + 'px'
  //       this.bufferedProgress.style.width = scale * 100 + '%'
  //       this.completedProgress.style.width = scale * 100 + '%'
  //       this.video.currentTime = Math.floor(scale * this.video.duration)
  //       if (this.video.paused) this.video.play()
  //     })
  //     this.dot.addEventListener('mousedown', (e: MouseEvent) => {
  //       e.stopPropagation()
  //       let left = this.completedProgress.offsetWidth
  //       let mouseX = e.pageX
  //       this.mouseDown = true
  //       document.onmousemove = (e: MouseEvent) => {
  //         let scale = (e.pageX - mouseX + left) / this.progress.offsetWidth
  //         if (scale < 0) {
  //           scale = 0
  //         } else if (scale > 1) {
  //           scale = 1
  //         }
  //         this.dot.style.left = this.progress.offsetWidth * scale - 5 + 'px'
  //         this.bufferedProgress.style.width = scale * 100 + '%'
  //         this.completedProgress.style.width = scale * 100 + '%'
  //         this.video.currentTime = Math.floor(scale * this.video.duration)
  //         if (this.video.paused) this.video.play()
  //         e.preventDefault()
  //       }
  //       document.onmouseup = (e: MouseEvent) => {
  //         document.onmousemove = document.onmouseup = null
  //         this.mouseDown = false
  //         e.preventDefault()
  //       }
  //       e.preventDefault()
  //     })
  //   }
  //   initEvent() {
  //     this.on('mounted', () => {
  //       this.progress = this.container.querySelector(
  //         `.${styles['video-controls']} .${styles['video-progress']}`
  //       )
  //       this.pretime = this.progress.children[0] as HTMLElement
  //       this.bufferedProgress = this.progress.children[1] as HTMLElement
  //       this.completedProgress = this.progress.children[2] as HTMLElement
  //       this.dot = this.progress.children[3] as HTMLElement
  //       this.video = this.container.querySelector('video')
  //       this.initProgressEvent()
  //     })
  //     this.on('loadedmetadata', (summary: number) => {
  //       //this.summaryTime.innerHTML = formatTime(summary)
  //     })
  //     this.on('timeupdate', (currentTime: number) => {
  //       //this.currentTime.innerHTML = formatTime(currentTime)
  //       // console.log('currentTime', currentTime)
  //       // console.log(this.video.currentTime, this.video.duration)
  //       let scaleCurr = (this.video.currentTime / this.video.duration) * 100
  //       // console.log(scaleCurr) 进度
  //       // 首个缓冲范围的结束位置
  //       let scaleBuffer =
  //         ((this.video.currentTime + this.video.buffered.end(0)) / this.video.duration) * 100
  //       if (scaleBuffer > 100) scaleBuffer = 100
  //       this.completedProgress.style.width = scaleCurr + '%'
  //       this.dot.style.left = this.progress.offsetWidth * (scaleCurr / 100) - 5 + 'px'
  //       this.bufferedProgress.style.width = scaleBuffer + '%'
  //     })
  //   }
  // }

  var $$q = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$q({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$6 = entryVirtual$b;

  var map$6 = entryVirtual$6('Array').map;

  var isPrototypeOf$6 = objectIsPrototypeOf;
  var method$4 = map$6;

  var ArrayPrototype$5 = Array.prototype;

  var map$5 = function (it) {
    var own = it.map;
    return it === ArrayPrototype$5 || (isPrototypeOf$6(ArrayPrototype$5, it) && own === ArrayPrototype$5.map) ? method$4 : own;
  };

  var parent$F = map$5;

  var map$4 = parent$F;

  var parent$E = map$4;

  var map$3 = parent$E;

  var parent$D = map$3;

  var map$2 = parent$D;

  var map$1 = map$2;

  var map = map$1;

  var _mapInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(map);

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var SubSetting = /*#__PURE__*/function (_Options) {
    _inherits(SubSetting, _Options);
    var _super = _createSuper$4(SubSetting);
    function SubSetting(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, SubSetting);
      _this = _super.call(this, player, container, 0, 0, desc);
      _defineProperty(_assertThisInitialized(_this), "id", 'SubSetting');
      // el: div.video-subsettings.video-controller
      _defineProperty(_assertThisInitialized(_this), "icon", void 0);
      _this.init();
      return _this;
    }
    _createClass(SubSetting, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        storeControlComponent(this);
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        addClass(this.el, ['video-subsettings', 'video-controller']);
        addClass(this.hideBox, ['video-subsettings-set']);
        this.el['aria-label'] = '设置';
        this.icon = createSvg(subSettingPath);
        this.iconBox.appendChild(this.icon);
        this.el.appendChild(this.iconBox);
        this.el.appendChild(this.hideBox);
      }
    }]);
    return SubSetting;
  }(Options);

  var css_248z$4 = ".video-play {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px 5px 0 5px;\n}\n.video-play .video-subplay {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 30px;\n}\n.video-play .video-subplay .video-start-pause {\n  height: 100%;\n  margin-right: 5px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-subplay .video-duration {\n  margin-left: 5px;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n}\n.video-play .video-medium {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 35px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-settings {\n  position: relative;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: hsla(0, 0%, 100%, 0.8);\n  fill: hsla(0, 0%, 100%, 0.8);\n  height: 30px;\n}\n.video-play .video-settings .video-subsettings {\n  margin-right: 5px;\n}\n.video-play .video-settings .video-subsettings .video-subsettings-set {\n  width: 102px;\n  height: 140px;\n  padding-bottom: 8px;\n  background: rgba(21, 21, 21, 0.9);\n  border-radius: 2px;\n  position: absolute;\n  bottom: 41px;\n}\n.video-play .video-settings .video-subsettings svg {\n  -webkit-transition: fill 0.15s ease-in-out;\n  transition: fill 0.15s ease-in-out;\n}\n.video-play .video-settings .video-volume {\n  margin-right: 5px;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-settings .video-volume .video-volume-set {\n  position: absolute;\n  bottom: 41px;\n  width: 32px;\n  height: 100px;\n  padding-bottom: 8px;\n  background: rgba(21, 21, 21, 0.9);\n  border-radius: 2px;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-show {\n  width: 100%;\n  height: 15px;\n  padding-top: 5px;\n  text-align: center;\n  line-height: 15px;\n  font-size: 12px;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-progress {\n  border-radius: 2px;\n  width: 5px;\n  height: calc(100% - 20px - 10px);\n  margin-top: 8px;\n  margin-left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background-color: #fff;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-progress .video-volume-completed {\n  height: 50%;\n  background-color: #00a1d6;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-progress .video-volume-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #00a1d6;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 1003;\n}\n.video-play .video-settings .video-playrate {\n  margin-right: 5px;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-settings .video-playrate .video-playrate-set {\n  border-radius: 2px;\n  bottom: 41px;\n  background-color: rgba(21, 21, 21, 0.9);\n  width: 70px;\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  list-style: none;\n  outline: none;\n}\n.video-play .video-settings .video-playrate .video-playrate-set li {\n  color: #fff;\n  text-align: center;\n  height: 36px;\n  line-height: 36px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.video-play .video-settings .video-playrate .video-playrate-set li:hover {\n  background-color: #C9CCD0;\n}\n.video-play .video-settings .video-resolvepower {\n  margin-right: 5px;\n  position: relative;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set {\n  list-style: none;\n  outline: none;\n  border-radius: 2px;\n  bottom: 41px;\n  background-color: rgba(21, 21, 21, 0.9);\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  cursor: pointer;\n  display: none;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set li {\n  width: 145px;\n  padding: 0 12px;\n  height: 36px;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set li:hover {\n  background-color: #C9CCD0;\n}\n.video-play .video-controller {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 3px;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  color: #fff;\n  opacity: 0.9;\n}\n.video-play .video-controller span {\n  width: 100%;\n  height: 100%;\n  font-weight: 550;\n  color: #fff;\n  padding: 0 5px;\n  font-size: 16px;\n}\n.video-icon {\n  height: 100%;\n  width: 100%;\n}\n.video-icon:hover {\n  background-color: #007aff;\n}\n.video-icon svg {\n  height: 100%;\n  width: 100%;\n}\n.video-icon svg path {\n  fill: #fff;\n}\n";
  styleInject(css_248z$4);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Controller = /*#__PURE__*/function (_Component) {
    _inherits(Controller, _Component);
    var _super = _createSuper$3(Controller);
    //代表最右侧的区域
    function Controller(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Controller);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Controller');
      // el: div.video-play
      _defineProperty(_assertThisInitialized(_this), "props", {});
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      // 控件
      _defineProperty(_assertThisInitialized(_this), "leftControllers", [PlayButton]);
      _defineProperty(_assertThisInitialized(_this), "rightController", [Playrate, SubSetting, Volume, FullScreen]);
      // fullscreen: FullScreen
      // playButton: PlayButton
      // playrate: Playrate
      // volume: Volume
      // subPlay: HTMLElement
      // settings: HTMLElement
      _defineProperty(_assertThisInitialized(_this), "leftArea", void 0);
      //代表着最左侧的区域
      _defineProperty(_assertThisInitialized(_this), "mediumArea", void 0);
      _defineProperty(_assertThisInitialized(_this), "rightArea", void 0);
      _this.player = player;
      _this.props = props || {};
      _this.init();
      return _this;
    }
    _createClass(Controller, [{
      key: "init",
      value: function init() {
        this.initControllers();
        this.initTemplate();
        this.initComponent();
        storeControlComponent(this);
      }
    }, {
      key: "initControllers",
      value: function initControllers() {
        var leftControllers = this.player.playerOptions.leftControllers;
        var rightControllers = this.player.playerOptions.rightControllers;
        if (leftControllers) {
          this.leftControllers = _mapInstanceProperty(leftControllers).call(leftControllers, function (item) {
            if (typeof item === 'string') {
              if (!controllersMapping[item]) {
                throw new Error("\u4F20\u5165\u7684\u7EC4\u4EF6\u540D".concat(item, "\u9519\u8BEF"));
              }
              return controllersMapping[item];
            } else {
              return item;
            }
          });
        }
        if (rightControllers) {
          this.rightController = _mapInstanceProperty(rightControllers).call(rightControllers, function (item) {
            if (typeof item === 'string') {
              if (!controllersMapping[item]) {
                throw new Error("\u4F20\u5165\u7684\u7EC4\u4EF6\u540D".concat(item, "\u9519\u8BEF"));
              }
              return controllersMapping[item];
            } else {
              return item;
            }
          });
        }
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        this.leftArea = $$N('div.video-subplay');
        this.mediumArea = $$N('div.video-medium');
        this.rightArea = $$N('div.video-settings');
        this.el.appendChild(this.leftArea);
        this.el.appendChild(this.mediumArea);
        this.el.appendChild(this.rightArea);
      }
    }, {
      key: "initComponent",
      value: function initComponent() {
        var _context,
          _this2 = this,
          _context2;
        _forEachInstanceProperty(_context = this.leftControllers).call(_context, function (ControlConstructor) {
          var instance = new ControlConstructor(_this2.player, _this2.leftArea, 'div');
          _this2[instance.id] = instance;
        });
        _forEachInstanceProperty(_context2 = this.rightController).call(_context2, function (ControlConstructor) {
          var instance = new ControlConstructor(_this2.player, _this2.rightArea, 'div');
          _this2[instance.id] = instance;
        });
        // this.playButton = new PlayButton(this.player, this.subPlay, 'div')
        // this.volume = new Volume(this.player, this.settings, 'div')
        // this.playrate = new Playrate(this.player, this.settings, 'div')
        // this.fullscreen = new FullScreen(this.player, this.settings, 'div')
        // this.SubSetting = new SubSetting(this.player, this.settings, 'div')
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        this.player.on('danmaku-plugin-add', function () {});
      }
    }]);
    return Controller;
  }(Component);

  var css_248z$3 = ".video-controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  color: #fff;\n  height: 55px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n";
  styleInject(css_248z$3);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var ToolBar = /*#__PURE__*/function (_Component) {
    _inherits(ToolBar, _Component);
    var _super = _createSuper$2(ToolBar);
    function ToolBar(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, ToolBar);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'ToolBar');
      // el: div.video-controls.video-controls-hidden
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "progress", void 0);
      _defineProperty(_assertThisInitialized(_this), "controller", void 0);
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "timer", 0);
      _this.player = player;
      _this.props = props || {};
      _this.init();
      return _this;
    }
    _createClass(ToolBar, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initComponent();
        this.initEvent();
        storeControlComponent(this);
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        addClass(this.el, ['video-controls', 'video-controls-hidden']);
      }
    }, {
      key: "initComponent",
      value: function initComponent() {
        this.progress = new Progress(this.player, this.el, 'div.video-progress');
        this.controller = new Controller(this.player, this.el, 'div.video-play');
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.player.on('showtoolbar', function (e) {
          _this2.onShowToolBar(e);
        });
        this.player.on('hidetoolbar', function (e) {
          _this2.onHideToolBar(e);
        });
      }
    }, {
      key: "onShowToolBar",
      value: function onShowToolBar(e) {
        if (this.timer) {
          window.clearTimeout(this.timer);
          this.timer = null;
        }
        this.showToolBar(e);
      }
    }, {
      key: "onHideToolBar",
      value: function onHideToolBar(e) {
        this.hideToolBar();
      }
    }, {
      key: "showToolBar",
      value: function showToolBar(e) {
        var _this3 = this;
        if (includeClass(this.el, 'video-controls-hidden')) {
          removeClass(this.el, ['video-controls-hidden']);
        }
        if (e.target === this.player.video) {
          this.timer = window.setTimeout(function () {
            _this3.hideToolBar();
          }, 3000);
        }
      }
    }, {
      key: "hideToolBar",
      value: function hideToolBar() {
        if (!includeClass(this.el, 'video-controls-hidden')) {
          addClass(this.el, ['video-controls-hidden']);
        }
      }
    }]);
    return ToolBar;
  }(Component);

  function getFileExtension(file) {
    for (var i = file.length - 1; i >= 0; i--) {
      if (file[i] === '.') {
        return _sliceInstanceProperty(file).call(file, i + 1, file.length);
      }
    }
    throw new Error('传入的文件没有扩展名');
  }

  function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
    if (_Reflect$construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$2()) {
      var _context;
      _construct = _bindInstanceProperty(_context = _Reflect$construct).call(_context);
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = _bindInstanceProperty(Function).apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }

  var FactoryMaker = function () {
    var FactoryMaker = /*#__PURE__*/function () {
      function FactoryMaker() {
        _classCallCheck(this, FactoryMaker);
        _defineProperty(this, "__class_factoryMap", void 0);
        _defineProperty(this, "__single_factoryMap", void 0);
        _defineProperty(this, "__single_instanceMap", void 0);
        this.__class_factoryMap = {};
        this.__single_factoryMap = {};
        this.__single_instanceMap = {};
      }
      _createClass(FactoryMaker, [{
        key: "getClassFactory",
        value: function getClassFactory(classConstructor) {
          var factory = this.__class_factoryMap[classConstructor.name];
          var ctx = this;
          if (!factory) {
            // context为调用factory函数时传入的上下文，也就是函数的执行环境
            factory = function factory(context) {
              if (!context) context = {};
              return {
                create: function create() {
                  var _context;
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  return ctx.merge.apply(ctx, _concatInstanceProperty(_context = [classConstructor, context]).call(_context, args));
                }
              };
            };
            this.__class_factoryMap[classConstructor.name] = factory;
          }
          return factory;
        }
      }, {
        key: "getSingleFactory",
        value: function getSingleFactory(classConstructor) {
          var factory = this.__single_factoryMap[classConstructor.name];
          var ctx = this;
          if (!factory) {
            factory = function factory(context) {
              if (!context) context = {};
              return {
                getInstance: function getInstance() {
                  var instance = ctx.__single_instanceMap[classConstructor.name];
                  if (!instance) {
                    var _context2;
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      args[_key2] = arguments[_key2];
                    }
                    instance = _construct(classConstructor, _concatInstanceProperty(_context2 = [{
                      context: context
                    }]).call(_context2, args));
                    ctx.__single_instanceMap[classConstructor.name] = instance;
                  }
                  return instance;
                }
              };
            };
          }
          return factory;
        }
      }, {
        key: "merge",
        value: function merge(classConstructor, context) {
          var extensionObject = context[classConstructor.name];
          for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            args[_key3 - 2] = arguments[_key3];
          }
          if (extensionObject) {
            // 如果获取到的上下文的属性classConstructor.name对应的对象上具有覆写（override）属性，则意味着需要覆写classConstructor上对应的属性
            if (extensionObject.override) {
              var _context3;
              var instance = _construct(classConstructor, _concatInstanceProperty(_context3 = [{
                context: context
              }]).call(_context3, args));
              var override = new extensionObject.instance({
                context: context,
                parent: instance
              });
              for (var props in override) {
                if (instance.hasOwnProperty(props)) {
                  instance[props] = parent[props];
                }
              }
            } else {
              // 如果不需要覆写，则意味着直接拿context中传入的构造函数来替换这个构造函数
              return new extensionObject.instance({
                context: context
              });
            }
          } else {
            var _context4;
            return _construct(classConstructor, _concatInstanceProperty(_context4 = [{
              context: context
            }]).call(_context4, args));
          }
        }
      }]);
      return FactoryMaker;
    }();
    return new FactoryMaker();
  }();

  var getBuiltIn$4 = getBuiltIn$h;
  var uncurryThis$8 = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$3 = anObject$f;

  var concat = uncurryThis$8([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$3 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$3(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$3 = hasOwnProperty_1;
  var ownKeys$2 = ownKeys$3;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys$2(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var isObject$4 = isObject$j;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;

  // `InstallErrorCause` abstract operation
  // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
  var installErrorCause$1 = function (O, options) {
    if (isObject$4(options) && 'cause' in options) {
      createNonEnumerableProperty$2(O, 'cause', options.cause);
    }
  };

  var uncurryThis$7 = functionUncurryThis;

  var $Error$1 = Error;
  var replace$3 = uncurryThis$7(''.replace);

  var TEST = (function (arg) { return String($Error$1(arg).stack); })('zxcasd');
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

  var errorStackClear = function (stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
      while (dropEntries--) stack = replace$3(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    } return stack;
  };

  var fails$8 = fails$x;
  var createPropertyDescriptor$2 = createPropertyDescriptor$8;

  var errorStackInstallable = !fails$8(function () {
    var error = Error('a');
    if (!('stack' in error)) return true;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(error, 'stack', createPropertyDescriptor$2(1, 7));
    return error.stack !== 7;
  });

  var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
  var clearErrorStack = errorStackClear;
  var ERROR_STACK_INSTALLABLE = errorStackInstallable;

  // non-standard V8
  var captureStackTrace = Error.captureStackTrace;

  var errorStackInstall = function (error, C, stack, dropEntries) {
    if (ERROR_STACK_INSTALLABLE) {
      if (captureStackTrace) captureStackTrace(error, C);
      else createNonEnumerableProperty$1(error, 'stack', clearErrorStack(stack, dropEntries));
    }
  };

  var toString$3 = toString$b;

  var normalizeStringArgument$1 = function (argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString$3(argument);
  };

  var $$p = _export;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var copyConstructorProperties = copyConstructorProperties$1;
  var create$1 = objectCreate;
  var createNonEnumerableProperty = createNonEnumerableProperty$9;
  var createPropertyDescriptor$1 = createPropertyDescriptor$8;
  var installErrorCause = installErrorCause$1;
  var installErrorStack = errorStackInstall;
  var iterate$4 = iterate$l;
  var normalizeStringArgument = normalizeStringArgument$1;
  var wellKnownSymbol$6 = wellKnownSymbol$q;

  var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
  var $Error = Error;
  var push$3 = [].push;

  var $AggregateError = function AggregateError(errors, message /* , options */) {
    var isInstance = isPrototypeOf$5(AggregateErrorPrototype, this);
    var that;
    if (setPrototypeOf) {
      that = setPrototypeOf($Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
    } else {
      that = isInstance ? this : create$1(AggregateErrorPrototype);
      createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
    }
    if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
    installErrorStack(that, $AggregateError, that.stack, 1);
    if (arguments.length > 2) installErrorCause(that, arguments[2]);
    var errorsArray = [];
    iterate$4(errors, push$3, { that: errorsArray });
    createNonEnumerableProperty(that, 'errors', errorsArray);
    return that;
  };

  if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
  else copyConstructorProperties($AggregateError, $Error, { name: true });

  var AggregateErrorPrototype = $AggregateError.prototype = create$1($Error.prototype, {
    constructor: createPropertyDescriptor$1(1, $AggregateError),
    message: createPropertyDescriptor$1(1, ''),
    name: createPropertyDescriptor$1(1, 'AggregateError')
  });

  // `AggregateError` constructor
  // https://tc39.es/ecma262/#sec-aggregate-error-constructor
  $$p({ global: true, constructor: true, arity: 2 }, {
    AggregateError: $AggregateError
  });

  var classof$2 = classofRaw$2;

  var engineIsNode = typeof process != 'undefined' && classof$2(process) == 'process';

  var anObject$2 = anObject$f;
  var aConstructor = aConstructor$3;
  var isNullOrUndefined = isNullOrUndefined$6;
  var wellKnownSymbol$5 = wellKnownSymbol$q;

  var SPECIES$1 = wellKnownSymbol$5('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$2 = function (O, defaultConstructor) {
    var C = anObject$2(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject$2(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
  };

  var $TypeError$4 = TypeError;

  var validateArgumentsLength$5 = function (passed, required) {
    if (passed < required) throw $TypeError$4('Not enough arguments');
    return passed;
  };

  var userAgent$2 = engineUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

  var global$b = global$r;
  var apply$1 = functionApply;
  var bind$4 = functionBindContext;
  var isCallable$5 = isCallable$q;
  var hasOwn$2 = hasOwnProperty_1;
  var fails$7 = fails$x;
  var html = html$2;
  var arraySlice$3 = arraySlice$7;
  var createElement = documentCreateElement$1;
  var validateArgumentsLength$4 = validateArgumentsLength$5;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$3 = engineIsNode;

  var set = global$b.setImmediate;
  var clear = global$b.clearImmediate;
  var process$3 = global$b.process;
  var Dispatch = global$b.Dispatch;
  var Function$2 = global$b.Function;
  var MessageChannel = global$b.MessageChannel;
  var String$1 = global$b.String;
  var counter = 0;
  var queue$3 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$7(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global$b.location;
  });

  var run = function (id) {
    if (hasOwn$2(queue$3, id)) {
      var fn = queue$3[id];
      delete queue$3[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run(id);
    };
  };

  var eventListener = function (event) {
    run(event.data);
  };

  var globalPostMessageDefer = function (id) {
    // old engines have not location.origin
    global$b.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength$4(arguments.length, 1);
      var fn = isCallable$5(handler) ? handler : Function$2(handler);
      var args = arraySlice$3(arguments, 1);
      queue$3[++counter] = function () {
        apply$1(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$3[id];
    };
    // Node.js 0.8-
    if (IS_NODE$3) {
      defer = function (id) {
        process$3.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = bind$4(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global$b.addEventListener &&
      isCallable$5(global$b.postMessage) &&
      !global$b.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$7(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      global$b.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set,
    clear: clear
  };

  var Queue$2 = function () {
    this.head = null;
    this.tail = null;
  };

  Queue$2.prototype = {
    add: function (item) {
      var entry = { item: item, next: null };
      var tail = this.tail;
      if (tail) tail.next = entry;
      else this.head = entry;
      this.tail = entry;
    },
    get: function () {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };

  var queue$2 = Queue$2;

  var userAgent$1 = engineUserAgent;

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

  var userAgent = engineUserAgent;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var global$a = global$r;
  var bind$3 = functionBindContext;
  var getOwnPropertyDescriptor$9 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var Queue$1 = queue$2;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$2 = engineIsNode;

  var MutationObserver$1 = global$a.MutationObserver || global$a.WebKitMutationObserver;
  var document$2 = global$a.document;
  var process$2 = global$a.process;
  var Promise$1 = global$a.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$9(global$a, 'queueMicrotask');
  var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var notify$1, toggle, node, promise$6, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue$1 = new Queue$1();

    var flush = function () {
      var parent, fn;
      if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
      while (fn = queue$1.get()) try {
        fn();
      } catch (error) {
        if (queue$1.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver$1 && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver$1(flush).observe(node, { characterData: true });
      notify$1 = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise$6 = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise$6.constructor = Promise$1;
      then = bind$3(promise$6.then, promise$6);
      notify$1 = function () {
        then(flush);
      };
    // Node.js without promises
    } else if (IS_NODE$2) {
      notify$1 = function () {
        process$2.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$3(macrotask, global$a);
      notify$1 = function () {
        macrotask(flush);
      };
    }

    microtask$1 = function (fn) {
      if (!queue$1.head) notify$1();
      queue$1.add(fn);
    };
  }

  var microtask_1 = microtask$1;

  var hostReportErrors$1 = function (a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    } catch (error) { /* empty */ }
  };

  var perform$6 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var global$9 = global$r;

  var promiseNativeConstructor = global$9.Promise;

  /* global Deno -- Deno case */

  var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

  var IS_DENO$1 = engineIsDeno;
  var IS_NODE$1 = engineIsNode;

  var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
    && typeof window == 'object'
    && typeof document == 'object';

  var global$8 = global$r;
  var NativePromiseConstructor$5 = promiseNativeConstructor;
  var isCallable$4 = isCallable$q;
  var isForced = isForced_1;
  var inspectSource = inspectSource$2;
  var wellKnownSymbol$4 = wellKnownSymbol$q;
  var IS_BROWSER = engineIsBrowser;
  var IS_DENO = engineIsDeno;
  var V8_VERSION = engineV8Version;

  var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
  var SPECIES = wellKnownSymbol$4('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(global$8.PromiseRejectionEvent);

  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$5);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      // Detect correctness of subclassing with @@species support
      var promise = new NativePromiseConstructor$5(function (resolve) { resolve(1); });
      var FakePromise = function (exec) {
        exec(function () { /* empty */ }, function () { /* empty */ });
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES] = FakePromise;
      SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
      if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });

  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };

  var newPromiseCapability$2 = {};

  var aCallable$5 = aCallable$h;

  var $TypeError$3 = TypeError;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw $TypeError$3('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$5(resolve);
    this.reject = aCallable$5(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var $$o = _export;
  var IS_NODE = engineIsNode;
  var global$7 = global$r;
  var call$6 = functionCall;
  var defineBuiltIn$2 = defineBuiltIn$8;
  var setToStringTag$2 = setToStringTag$9;
  var setSpecies = setSpecies$2;
  var aCallable$4 = aCallable$h;
  var isCallable$3 = isCallable$q;
  var isObject$3 = isObject$j;
  var anInstance$2 = anInstance$5;
  var speciesConstructor$1 = speciesConstructor$2;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$5 = perform$6;
  var Queue = queue$2;
  var InternalStateModule$2 = internalState;
  var NativePromiseConstructor$4 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$6 = newPromiseCapability$2;

  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule$2.getterFor(PROMISE);
  var setInternalState$2 = InternalStateModule$2.set;
  var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
  var PromiseConstructor = NativePromiseConstructor$4;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$3 = global$7.TypeError;
  var document$1 = global$7.document;
  var process$1 = global$7.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$7.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;

  var Internal, OwnPromiseCapability, PromiseWrapper;

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject$3(it) && isCallable$3(then = it.then) ? then : false;
  };

  var callReaction = function (reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value;
        else {
          if (domain) domain.enter();
          result = handler(value); // can throw
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(TypeError$3('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$6(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$7.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$7['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$6(task, global$7, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$5(function () {
          if (IS_NODE) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    call$6(task, global$7, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$2 = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$3("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            call$6(then, value,
              bind$2(internalResolve, wrapper, state),
              bind$2(internalReject, wrapper, state)
            );
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$2(this, PromisePrototype);
      aCallable$4(executor);
      call$6(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind$2(internalResolve, state), bind$2(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState$2(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn$2(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$3(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process$1.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind$2(internalResolve, state);
      this.reject = bind$2(internalReject, state);
    };

    newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };
  }

  $$o({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
    Promise: PromiseConstructor
  });

  setToStringTag$2(PromiseConstructor, PROMISE, false, true);
  setSpecies(PROMISE);

  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
    NativePromiseConstructor$3.all(iterable).then(undefined, function () { /* empty */ });
  });

  var $$n = _export;
  var call$5 = functionCall;
  var aCallable$3 = aCallable$h;
  var newPromiseCapabilityModule$5 = newPromiseCapability$2;
  var perform$4 = perform$6;
  var iterate$3 = iterate$l;
  var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$n({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$5.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$4(function () {
        var $promiseResolve = aCallable$3(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$3(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$5($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$m = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor$2 = promiseNativeConstructor;

  NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$m({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  var $$l = _export;
  var call$4 = functionCall;
  var aCallable$2 = aCallable$h;
  var newPromiseCapabilityModule$4 = newPromiseCapability$2;
  var perform$3 = perform$6;
  var iterate$2 = iterate$l;
  var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$l({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$4.f(C);
      var reject = capability.reject;
      var result = perform$3(function () {
        var $promiseResolve = aCallable$2(C.resolve);
        iterate$2(iterable, function (promise) {
          call$4($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$k = _export;
  var call$3 = functionCall;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$k({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule$3.f(this);
      call$3(capability.reject, undefined, r);
      return capability.promise;
    }
  });

  var anObject$1 = anObject$f;
  var isObject$2 = isObject$j;
  var newPromiseCapability = newPromiseCapability$2;

  var promiseResolve$2 = function (C, x) {
    anObject$1(C);
    if (isObject$2(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$j = _export;
  var getBuiltIn$3 = getBuiltIn$h;
  var IS_PURE$1 = isPure;
  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve$1 = promiseResolve$2;

  var PromiseConstructorWrapper = getBuiltIn$3('Promise');
  var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$j({ target: 'Promise', stat: true, forced: IS_PURE$1  }, {
    resolve: function resolve(x) {
      return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
    }
  });

  var $$i = _export;
  var call$2 = functionCall;
  var aCallable$1 = aCallable$h;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$2 = perform$6;
  var iterate$1 = iterate$l;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.allSettled` method
  // https://tc39.es/ecma262/#sec-promise.allsettled
  $$i({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
    allSettled: function allSettled(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$2(function () {
        var promiseResolve = aCallable$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$2(promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = { status: 'fulfilled', value: value };
            --remaining || resolve(values);
          }, function (error) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = { status: 'rejected', reason: error };
            --remaining || resolve(values);
          });
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$h = _export;
  var call$1 = functionCall;
  var aCallable = aCallable$h;
  var getBuiltIn$2 = getBuiltIn$h;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform$1 = perform$6;
  var iterate = iterate$l;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  var PROMISE_ANY_ERROR = 'No one promise resolved';

  // `Promise.any` method
  // https://tc39.es/ecma262/#sec-promise.any
  $$h({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    any: function any(iterable) {
      var C = this;
      var AggregateError = getBuiltIn$2('AggregateError');
      var capability = newPromiseCapabilityModule$1.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var promiseResolve = aCallable(C.resolve);
        var errors = [];
        var counter = 0;
        var remaining = 1;
        var alreadyResolved = false;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyRejected = false;
          remaining++;
          call$1(promiseResolve, C, promise).then(function (value) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyResolved = true;
            resolve(value);
          }, function (error) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyRejected = true;
            errors[index] = error;
            --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
          });
        });
        --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$g = _export;
  var NativePromiseConstructor = promiseNativeConstructor;
  var fails$6 = fails$x;
  var getBuiltIn$1 = getBuiltIn$h;
  var isCallable$2 = isCallable$q;
  var speciesConstructor = speciesConstructor$2;
  var promiseResolve = promiseResolve$2;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!NativePromiseConstructor && fails$6(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $$g({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
    'finally': function (onFinally) {
      var C = speciesConstructor(this, getBuiltIn$1('Promise'));
      var isFunction = isCallable$2(onFinally);
      return this.then(
        isFunction ? function (x) {
          return promiseResolve(C, onFinally()).then(function () { return x; });
        } : onFinally,
        isFunction ? function (e) {
          return promiseResolve(C, onFinally()).then(function () { throw e; });
        } : onFinally
      );
    }
  });

  var path$7 = path$n;

  var promise$5 = path$7.Promise;

  var parent$C = promise$5;


  var promise$4 = parent$C;

  var parent$B = promise$4;

  var promise$3 = parent$B;

  // TODO: Remove from `core-js@4`
  var $$f = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$6;

  // `Promise.try` method
  // https://github.com/tc39/proposal-promise-try
  $$f({ target: 'Promise', stat: true, forced: true }, {
    'try': function (callbackfn) {
      var promiseCapability = newPromiseCapabilityModule.f(this);
      var result = perform(callbackfn);
      (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
      return promiseCapability.promise;
    }
  });

  var parent$A = promise$3;

  // TODO: Remove from `core-js@4`




  var promise$2 = parent$A;

  var promise$1 = promise$2;

  var promise = promise$1;

  var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise);

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$e = _export;
  var uncurryThis$6 = functionUncurryThisClause;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;

  var nativeIndexOf = uncurryThis$6([].indexOf);

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$e({ target: 'Array', proto: true, forced: FORCED$2 }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf(this, searchElement, fromIndex) || 0
        : $indexOf(this, searchElement, fromIndex);
    }
  });

  var entryVirtual$5 = entryVirtual$b;

  var indexOf$6 = entryVirtual$5('Array').indexOf;

  var isPrototypeOf$4 = objectIsPrototypeOf;
  var method$3 = indexOf$6;

  var ArrayPrototype$4 = Array.prototype;

  var indexOf$5 = function (it) {
    var own = it.indexOf;
    return it === ArrayPrototype$4 || (isPrototypeOf$4(ArrayPrototype$4, it) && own === ArrayPrototype$4.indexOf) ? method$3 : own;
  };

  var parent$z = indexOf$5;

  var indexOf$4 = parent$z;

  var parent$y = indexOf$4;

  var indexOf$3 = parent$y;

  var parent$x = indexOf$3;

  var indexOf$2 = parent$x;

  var indexOf$1 = indexOf$2;

  var indexOf = indexOf$1;

  var _indexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(indexOf);

  var DESCRIPTORS$5 = descriptors;
  var isArray$1 = isArray$d;

  var $TypeError$2 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$5 && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', { writable: false }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();

  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray$1(O) && !getOwnPropertyDescriptor$8(O, 'length').writable) {
      throw $TypeError$2('Cannot set read only .length');
    } return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };

  var tryToString = tryToString$7;

  var $TypeError$1 = TypeError;

  var deletePropertyOrThrow$1 = function (O, P) {
    if (!delete O[P]) throw $TypeError$1('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var $$d = _export;
  var toObject$1 = toObject$a;
  var toAbsoluteIndex = toAbsoluteIndex$4;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var lengthOfArrayLike = lengthOfArrayLike$8;
  var setArrayLength = arraySetLength;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var createProperty$1 = createProperty$6;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('splice');

  var max = Math.max;
  var min = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$d({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$1(this);
      var len = lengthOfArrayLike(O);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
      }
      doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty$1(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];
          else deletePropertyOrThrow(O, to);
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];
          else deletePropertyOrThrow(O, to);
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      setArrayLength(O, len - actualDeleteCount + insertCount);
      return A;
    }
  });

  var entryVirtual$4 = entryVirtual$b;

  var splice$7 = entryVirtual$4('Array').splice;

  var isPrototypeOf$3 = objectIsPrototypeOf;
  var method$2 = splice$7;

  var ArrayPrototype$3 = Array.prototype;

  var splice$6 = function (it) {
    var own = it.splice;
    return it === ArrayPrototype$3 || (isPrototypeOf$3(ArrayPrototype$3, it) && own === ArrayPrototype$3.splice) ? method$2 : own;
  };

  var parent$w = splice$6;

  var splice$5 = parent$w;

  var parent$v = splice$5;

  var splice$4 = parent$v;

  var parent$u = splice$4;

  var splice$3 = parent$u;

  var splice$2 = splice$3;

  var splice$1 = splice$2;

  var _spliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(splice$1);

  var $$c = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$c({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$3 = entryVirtual$b;

  var filter$6 = entryVirtual$3('Array').filter;

  var isPrototypeOf$2 = objectIsPrototypeOf;
  var method$1 = filter$6;

  var ArrayPrototype$2 = Array.prototype;

  var filter$5 = function (it) {
    var own = it.filter;
    return it === ArrayPrototype$2 || (isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.filter) ? method$1 : own;
  };

  var parent$t = filter$5;

  var filter$4 = parent$t;

  var parent$s = filter$4;

  var filter$3 = parent$s;

  var parent$r = filter$3;

  var filter$2 = parent$r;

  var filter$1 = filter$2;

  var filter = filter$1;

  var _filterInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(filter);

  var EventBus = /*#__PURE__*/function () {
    function EventBus(ctx) {
      _classCallCheck(this, EventBus);
      _defineProperty(this, "config", {});
      _defineProperty(this, "__events", {});
      this.config = ctx.context;
      this.setup();
    }
    _createClass(EventBus, [{
      key: "setup",
      value: function setup() {}
    }, {
      key: "on",
      value: function on(type, listener, scope) {
        var _context;
        if (!this.__events[type]) {
          this.__events[type] = [{
            cb: listener,
            scope: scope
          }];
          // console.log(this.__events[type])
          return;
        }
        if (_filterInstanceProperty(_context = this.__events[type]).call(_context, function (event) {
          return event.cb === listener && event.scope === scope;
        }).length > 0) {
          throw new Error('请勿重复绑定监听器');
        }
        this.__events[type].push({
          cb: listener,
          scope: scope
        });
      }
    }, {
      key: "off",
      value: function off(type, listener, scope) {
        var _context2, _context3;
        if (!this.__events[type] || _filterInstanceProperty(_context2 = this.__events[type]).call(_context2, function (event) {
          return event.cb === listener && event.scope === scope;
        }).length === 0) {
          throw new Error('不存在该事件');
        }
        this.__events[type] = _filterInstanceProperty(_context3 = this.__events[type]).call(_context3, function (event) {
          return event.cb !== listener && event.scope !== scope;
        });
      }
    }, {
      key: "trigger",
      value: function trigger(type) {
        for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          payload[_key - 1] = arguments[_key];
        }
        // console.log(this.__events)
        if (this.__events[type]) {
          var _context4;
          _forEachInstanceProperty(_context4 = this.__events[type]).call(_context4, function (event) {
            var _event$cb, _context5;
            (_event$cb = event.cb).call.apply(_event$cb, _concatInstanceProperty(_context5 = [event.scope]).call(_context5, payload));
          });
        }
      }
    }]);
    return EventBus;
  }();
  var factory$b = FactoryMaker.getSingleFactory(EventBus);

  var EventConstants = {
    MANIFEST_LOADED: 'manifestLoaded',
    MANIFEST_PARSE_COMPLETED: 'manifestParseCompleted',
    SOURCE_ATTACHED: 'sourceAttached',
    SEGEMTN_LOADED: 'segmentLoaded',
    BUFFER_APPENDED: 'bufferAppended',
    SEGMENT_CONSUMED: 'segmentConsumed',
    SEGEMTN_REQUEST: 'segmentRequest',
    MEDIA_PLAYBACK_FINISHED: 'mediaPlaybackFinished',
    FIRST_REQUEST_COMPLETED: 'firstRequestCompleted'
  };

  var HTTPRequest = /*#__PURE__*/_createClass(function HTTPRequest(config) {
    _classCallCheck(this, HTTPRequest);
    _defineProperty(this, "sendRequestTime", void 0);
    _defineProperty(this, "getResponseTime", void 0);
    _defineProperty(this, "url", '');
    _defineProperty(this, "header", void 0);
    _defineProperty(this, "method", void 0);
    _defineProperty(this, "responseType", void 0);
    _defineProperty(this, "xhr", void 0);
    this.sendRequestTime = new Date().getTime();
    this.url = config.url;
    this.header = config.header;
    this.method = config.method;
    this.responseType = config.responseType;
    this.xhr = config.xhr;
  });

  var XHRLoader = /*#__PURE__*/function () {
    function XHRLoader(ctx) {
      _classCallCheck(this, XHRLoader);
      _defineProperty(this, "config", {});
      this.config = ctx.context;
      this.setup();
    }
    _createClass(XHRLoader, [{
      key: "setup",
      value: function setup() {}
    }, {
      key: "load",
      value: function load(config) {
        var request = config.request;
        var xhr;
        if (request.xhr) {
          xhr = request.xhr;
        } else {
          xhr = new XMLHttpRequest();
          request.xhr = xhr;
        }
        xhr.open(request.method || 'get', request.url);
        xhr.responseType = request.responseType || 'arraybuffer';
        if (request.header) {
          for (var key in request.header) {
            xhr.setRequestHeader(key, request.header[key]);
          }
        }
        xhr.onreadystatechange = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
              config.success && config.success.call(xhr, xhr.response);
            } else {
              config.error && config.error.call(xhr, e);
            }
          }
        };
        xhr.onabort = function (e) {
          config.abort && config.abort.call(xhr, e);
        };
        xhr.onerror = function (e) {
          config.error && config.error.call(xhr, e);
        };
        xhr.onprogress = function (e) {
          config.progress && config.progress.call(xhr, e);
        };
        xhr.send();
      }
    }]);
    return XHRLoader;
  }();
  var factory$a = FactoryMaker.getSingleFactory(XHRLoader);

  var URLLoader = /*#__PURE__*/function () {
    function URLLoader(ctx) {
      _classCallCheck(this, URLLoader);
      _defineProperty(this, "config", {});
      _defineProperty(this, "xhrLoader", void 0);
      _defineProperty(this, "eventBus", void 0);
      _defineProperty(this, "xhrArray", []);
      this.config = ctx.context;
      this.setup();
    }
    _createClass(URLLoader, [{
      key: "_loadManifest",
      value: function _loadManifest(config) {
        this.xhrLoader.load(config);
      }
    }, {
      key: "_loadSegment",
      value: function _loadSegment(config) {
        this.xhrLoader.load(config);
      }
    }, {
      key: "setup",
      value: function setup() {
        this.xhrLoader = factory$a({}).getInstance();
        this.eventBus = factory$b({}).getInstance();
      }
      // 每调用一次load函数就发送一次请求
    }, {
      key: "load",
      value: function load(config, type) {
        //一个HTTPRequest对象才对应一个请求
        var request = new HTTPRequest(config);
        var ctx = this;
        this.xhrArray.push(request);
        if (type === 'Manifest') {
          ctx._loadManifest({
            request: request,
            success: function success(data) {
              request.getResponseTime = new Date().getTime();
              ctx.eventBus.trigger(EventConstants.MANIFEST_LOADED, data);
            },
            error: function error(_error) {
              console.log(this, _error);
            },
            load: function load() {
              ctx.deleteRequestFromArray(request, ctx.xhrArray);
            },
            abort: function abort() {
              ctx.deleteRequestFromArray(request, ctx.xhrArray);
            }
          });
        } else if (type === 'Segment') {
          return new _Promise(function (res, rej) {
            ctx._loadSegment({
              request: request,
              success: function success(data) {
                res(data);
              },
              error: function error(_error2) {
                rej(_error2);
              },
              load: function load() {
                ctx.deleteRequestFromArray(request, ctx.xhrArray);
              },
              abort: function abort(e) {
                ctx.deleteRequestFromArray(request, ctx.xhrArray);
              }
            });
          });
        }
      }
    }, {
      key: "abortAllXHR",
      value: function abortAllXHR() {
        var _context;
        _forEachInstanceProperty(_context = this.xhrArray).call(_context, function (xhr) {
          if (xhr.xhr) {
            xhr.xhr.abort();
          }
        });
      }
    }, {
      key: "deleteRequestFromArray",
      value: function deleteRequestFromArray(request, array) {
        var index = _indexOfInstanceProperty(array).call(array, request);
        if (index !== -1) {
          _spliceInstanceProperty(array).call(array, index, 1);
        }
      }
    }]);
    return URLLoader;
  }();
  var factory$9 = FactoryMaker.getSingleFactory(URLLoader);

  var DOMNodeTypes;
  (function (DOMNodeTypes) {
    DOMNodeTypes[DOMNodeTypes["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    DOMNodeTypes[DOMNodeTypes["TEXT_NODE"] = 3] = "TEXT_NODE";
    DOMNodeTypes[DOMNodeTypes["CDATA_SECTION_NODE"] = 4] = "CDATA_SECTION_NODE";
    DOMNodeTypes[DOMNodeTypes["COMMENT_NODE"] = 8] = "COMMENT_NODE";
    DOMNodeTypes[DOMNodeTypes["DOCUMENT_NODE"] = 9] = "DOCUMENT_NODE";
  })(DOMNodeTypes || (DOMNodeTypes = {}));

  var $$b = _export;
  var $includes = arrayIncludes.includes;
  var fails$5 = fails$x;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$5(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$b({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$2 = entryVirtual$b;

  var includes$7 = entryVirtual$2('Array').includes;

  var isObject$1 = isObject$j;
  var classof$1 = classofRaw$2;
  var wellKnownSymbol$3 = wellKnownSymbol$q;

  var MATCH$1 = wellKnownSymbol$3('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
  };

  var isRegExp = isRegexp;

  var $TypeError = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw $TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$2 = wellKnownSymbol$q;

  var MATCH = wellKnownSymbol$2('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$a = _export;
  var uncurryThis$5 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$5;
  var toString$2 = toString$b;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf = uncurryThis$5(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$a({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf(
        toString$2(requireObjectCoercible(this)),
        toString$2(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var entryVirtual$1 = entryVirtual$b;

  var includes$6 = entryVirtual$1('String').includes;

  var isPrototypeOf$1 = objectIsPrototypeOf;
  var arrayMethod = includes$7;
  var stringMethod = includes$6;

  var ArrayPrototype$1 = Array.prototype;
  var StringPrototype = String.prototype;

  var includes$5 = function (it) {
    var own = it.includes;
    if (it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.includes)) return arrayMethod;
    if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf$1(StringPrototype, it) && own === StringPrototype.includes)) {
      return stringMethod;
    } return own;
  };

  var parent$q = includes$5;

  var includes$4 = parent$q;

  var parent$p = includes$4;

  var includes$3 = parent$p;

  var parent$o = includes$3;

  var includes$2 = parent$o;

  var includes$1 = includes$2;

  var includes = includes$1;

  var _includesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(includes);

  /**
   * @description 该类仅用于处理MPD文件中具有SegmentTemplate此种情况
   */
  var SegmentTemplateParser = /*#__PURE__*/function () {
    function SegmentTemplateParser(ctx) {
      _classCallCheck(this, SegmentTemplateParser);
      _defineProperty(this, "config", void 0);
      this.config = ctx.context;
      this.setup();
    }
    _createClass(SegmentTemplateParser, [{
      key: "setup",
      value: function setup() {}
    }, {
      key: "parse",
      value: function parse(Mpd) {
        this.parseNodeSegmentTemplate(Mpd);
      }
    }, {
      key: "parseNodeSegmentTemplate",
      value: function parseNodeSegmentTemplate(Mpd) {
        var _context,
          _this = this;
        _forEachInstanceProperty(_context = Mpd['Period_asArray']).call(_context, function (Period) {
          var _context2;
          _forEachInstanceProperty(_context2 = Period['AdaptationSet_asArray']).call(_context2, function (AdaptationSet) {
            var _context3;
            _forEachInstanceProperty(_context3 = AdaptationSet['Representation_asArray']).call(_context3, function (Representation) {
              var SegmentTemplate = Representation['SegmentTemplate'];
              if (SegmentTemplate) {
                _this.generateInitializationURL(SegmentTemplate, Representation);
                _this.generateMediaURL(SegmentTemplate, Representation);
              }
            });
          });
        });
      }
    }, {
      key: "generateInitializationURL",
      value: function generateInitializationURL(SegmentTemplate, parent) {
        var templateReg = /\$(.+?)\$/gi;
        var initialization = SegmentTemplate.initialization;
        var r;
        var formatArray = new Array();
        var replaceArray = new Array();
        if (templateReg.test(initialization)) {
          templateReg.lastIndex = 0;
          while (r = templateReg.exec(initialization)) {
            formatArray.push(r[0]);
            if (r[1] === 'Number') {
              r[1] = '1';
            } else if (r[1] === 'RepresentationID') {
              r[1] = parent.id;
            }
            replaceArray.push(r[1]);
          }
          var index = 0;
          while (index < replaceArray.length) {
            initialization = initialization.replace(formatArray[index], replaceArray[index]);
            index++;
          }
        }
        parent.initializationURL = initialization;
      }
    }, {
      key: "generateMediaURL",
      value: function generateMediaURL(SegmentTemplate, parent) {
        var templateReg = /\$(.+?)\$/gi;
        var media = SegmentTemplate.media;
        var r;
        var formatArray = new Array();
        var replaceArray = new Array();
        parent.mediaURL = new Array();
        if (templateReg.test(media)) {
          templateReg.lastIndex = 0;
          while (r = templateReg.exec(media)) {
            formatArray.push(r[0]);
            if (r[1] === 'Number') {
              r[1] = '@Number@';
            } else if (r[1] === 'RepresentationID') {
              r[1] = parent.id;
            }
            replaceArray.push(r[1]);
          }
        }
        var index = 0;
        while (index < replaceArray.length) {
          media = media.replace(formatArray[index], replaceArray[index]);
          index++;
        }
        for (var i = 1; i <= Math.ceil(parent.duration / parent.segmentDuration); i++) {
          var s = media;
          while (_includesInstanceProperty(s).call(s, '@Number@')) {
            s = s.replace('@Number@', "".concat(i));
          }
          parent.mediaURL.push(s);
        }
      }
    }]);
    return SegmentTemplateParser;
  }();
  var factory$8 = FactoryMaker.getSingleFactory(SegmentTemplateParser);

  var URLUtils = /*#__PURE__*/function () {
    function URLUtils(ctx) {
      _classCallCheck(this, URLUtils);
      _defineProperty(this, "config", void 0);
      this.config = ctx.context;
    }
    _createClass(URLUtils, [{
      key: "setup",
      value: function setup() {}
    }, {
      key: "resolve",
      value: function resolve() {
        var index = 0;
        var str = '';
        for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
          urls[_key] = arguments[_key];
        }
        while (index < urls.length) {
          var url = urls[index];
          // 如果url不以/或者./,../这种形式开头的话
          if (/^(?!(\.|\/))/.test(url)) {
            if (str[str.length - 1] !== '/' && str !== '') {
              str += '/';
            }
          } else if (/^\/.+/.test(url)) {
            // 如果url以/开头
            if (str[str.length - 1] === '/') {
              url = _sliceInstanceProperty(url).call(url, 1);
            }
          } else ;
          str += url;
          index++;
        }
        return str;
      }
    }, {
      key: "sliceLastURLPath",
      value: function sliceLastURLPath(url) {
        for (var i = url.length - 1; i >= 0; i--) {
          if (url[i] === '/') {
            return _sliceInstanceProperty(url).call(url, 0, i);
          }
        }
        return url;
      }
    }]);
    return URLUtils;
  }();
  var factory$7 = FactoryMaker.getSingleFactory(URLUtils);

  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1(o, minLen) { var _context22; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = _sliceInstanceProperty(_context22 = Object.prototype.toString.call(o)).call(_context22, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var DashParser = /*#__PURE__*/function () {
    function DashParser(ctx) {
      _classCallCheck(this, DashParser);
      _defineProperty(this, "config", {});
      _defineProperty(this, "segmentTemplateParser", void 0);
      _defineProperty(this, "eventBus", void 0);
      _defineProperty(this, "mpdURL", void 0);
      _defineProperty(this, "URLUtils", void 0);
      this.config = ctx.context;
      this.setup();
      this.initialEvent();
    }
    _createClass(DashParser, [{
      key: "setup",
      value: function setup() {
        this.segmentTemplateParser = factory$8().getInstance();
        this.eventBus = factory$b().getInstance();
        this.URLUtils = factory$7().getInstance();
      }
    }, {
      key: "initialEvent",
      value: function initialEvent() {
        this.eventBus.on(EventConstants.SOURCE_ATTACHED, this.onSourceAttached, this);
      }
    }, {
      key: "string2xml",
      value: function string2xml(s) {
        var parser = new DOMParser();
        return parser.parseFromString(s, 'text/xml');
      }
      // 解析请求到的xml类型的文本字符串，生成MPD对象,方便后续的解析
    }, {
      key: "parse",
      value: function parse(manifest) {
        var xml = this.string2xml(manifest);
        var Mpd;
        if (this.config.override) {
          Mpd = this.parseDOMChildren('Mpd', xml);
        } else {
          Mpd = this.parseDOMChildren('MpdDocument', xml);
        }
        this.mergeNodeSegementTemplate(Mpd);
        this.setResolvePowerForRepresentation(Mpd);
        this.setDurationForRepresentation(Mpd);
        this.setSegmentDurationForRepresentation(Mpd);
        this.setBaseURLForMpd(Mpd);
        this.segmentTemplateParser.parse(Mpd);
        console.log(Mpd);
        return Mpd;
      }
    }, {
      key: "parseDOMChildren",
      value: function parseDOMChildren(name, node) {
        //如果node的类型为文档类型
        if (node.nodeType === DOMNodeTypes.DOCUMENT_NODE) {
          var result = {
            tag: node.nodeName,
            __children: []
          };
          // 文档类型的节点一定只有一个子节点
          for (var index in node.childNodes) {
            if (node.childNodes[index].nodeType === DOMNodeTypes.ELEMENT_NODE) {
              // 如果在配置指定需要忽略根节点的话，也就是忽略MpdDocument节点
              if (!this.config.ignoreRoot) {
                result.__children[index] = this.parseDOMChildren(node.childNodes[index].nodeName, node.childNodes[index]);
                result[node.childNodes[index].nodeName] = this.parseDOMChildren(node.childNodes[index].nodeName, node.childNodes[index]);
              } else {
                return this.parseDOMChildren(node.childNodes[index].nodeName, node.childNodes[index]);
              }
            }
          }
          return result;
        } else if (node.nodeType === DOMNodeTypes.ELEMENT_NODE) {
          var _context;
          var _result = {
            tag: node.nodeName,
            __chilren: []
          };
          // 1.解析node的子节点
          for (var _index = 0; _index < node.childNodes.length; _index++) {
            var child = node.childNodes[_index];
            _result.__chilren[_index] = this.parseDOMChildren(child.nodeName, child);
            if (!_result[child.nodeName]) {
              _result[child.nodeName] = this.parseDOMChildren(child.nodeName, child);
              continue;
            }
            if (_result[child.nodeName] && !Array.isArray(_result[child.nodeName])) {
              _result[child.nodeName] = [_result[child.nodeName]];
            }
            if (_result[child.nodeName]) {
              _result[child.nodeName].push(this.parseDOMChildren(child.nodeName, child));
            }
          }
          // 2. 将node中的具有多个相同标签的子标签合并为一个数组
          for (var key in _result) {
            if (key !== 'tag' && key !== '__children') {
              _result[key + '_asArray'] = Array.isArray(_result[key]) ? _toConsumableArray(_result[key]) : [_result[key]];
            }
          }
          // 3.如果该Element节点中含有text节点，则需要合并为一个整体
          _result['#text_asArray'] && _forEachInstanceProperty(_context = _result['#text_asArray']).call(_context, function (text) {
            _result.__text = _result.__text || '';
            _result.__text += "".concat(text.text, "/n");
          });
          // 4.解析node上挂载的属性
          var _iterator = _createForOfIteratorHelper$1(node.attributes),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var prop = _step.value;
              _result[prop.name] = prop.value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return _result;
        } else if (node.nodeType === DOMNodeTypes.TEXT_NODE) {
          return {
            tag: '#text',
            text: node.nodeValue
          };
        }
      }
    }, {
      key: "mergeNode",
      value: function mergeNode(node, compare) {
        if (node[compare.tag]) {
          var target = node["".concat(compare.tag, "_asArray")];
          _forEachInstanceProperty(target).call(target, function (element) {
            for (var key in compare) {
              if (!element.hasOwnProperty(key)) {
                element[key] = compare[key];
              }
            }
          });
        } else {
          node[compare.tag] = compare;
          node.__children = node.__children || [];
          node.__children.push(compare);
          node["".concat(compare.tag, "__asArray")] = [compare];
        }
      }
    }, {
      key: "mergeNodeSegementTemplate",
      value: function mergeNodeSegementTemplate(Mpd) {
        var _context2,
          _this = this;
        var segmentTemplate = null;
        _forEachInstanceProperty(_context2 = Mpd['Period_asArray']).call(_context2, function (Period) {
          var _context3;
          if (Period['SegmentTemplate_asArray']) {
            segmentTemplate = Period['SegmentTemplate_asArray'][0];
          }
          _forEachInstanceProperty(_context3 = Period['AdaptationSet_asArray']).call(_context3, function (AdaptationSet) {
            var _context4;
            var template = segmentTemplate;
            if (segmentTemplate) {
              _this.mergeNode(AdaptationSet, segmentTemplate);
            }
            if (AdaptationSet['SegmentTemplate_asArray']) {
              segmentTemplate = AdaptationSet['SegmentTemplate_asArray'][0];
            }
            _forEachInstanceProperty(_context4 = AdaptationSet['Representation_asArray']).call(_context4, function (Representation) {
              if (segmentTemplate) {
                _this.mergeNode(Representation, segmentTemplate);
              }
            });
            segmentTemplate = template;
          });
        });
      }
    }, {
      key: "setBaseURLForMpd",
      value: function setBaseURLForMpd(Mpd) {
        Mpd.baseURL = this.URLUtils.sliceLastURLPath(this.mpdURL);
      }
      //给每个Representation上挂载分辨率属性
    }, {
      key: "setResolvePowerForRepresentation",
      value: function setResolvePowerForRepresentation(Mpd) {
        var _context5;
        _forEachInstanceProperty(_context5 = Mpd['Period_asArray']).call(_context5, function (Period) {
          var _context6;
          _forEachInstanceProperty(_context6 = Period['AdaptationSet_asArray']).call(_context6, function (AdaptationSet) {
            if (AdaptationSet.mimeType === 'video/mp4') {
              var _context7;
              _forEachInstanceProperty(_context7 = AdaptationSet['Representation_asArray']).call(_context7, function (Representation) {
                if (Representation.width && Representation.height) {
                  var _context8;
                  Representation.resolvePower = _concatInstanceProperty(_context8 = "".concat(Representation.width, "*")).call(_context8, Representation.height);
                }
              });
            } else if (AdaptationSet.mimeType === 'audio/mp4') {
              var _context9;
              _forEachInstanceProperty(_context9 = AdaptationSet['Representation_asArray']).call(_context9, function (Representation) {
                if (Representation.audioSamplingRate) {
                  Representation.resolvePower = Representation.audioSamplingRate;
                }
              });
            }
          });
        });
      }
    }, {
      key: "getSegmentDuration",
      value: function getSegmentDuration(Mpd, streamId) {
        var _context10;
        var Period = Mpd['Period_asArray'][streamId];
        if (!Period) {
          throw new Error('传入的流不存在');
        }
        var segmentDuration = 0;
        _forEachInstanceProperty(_context10 = Period['AdaptationSet_asArray']).call(_context10, function (AdaptationSet) {
          var _context11;
          _forEachInstanceProperty(_context11 = AdaptationSet['Representation_asArray']).call(_context11, function (Representation) {
            if (Representation.segmentDuration) {
              segmentDuration = Number(Representation.segmentDuration);
            }
          });
        });
        return segmentDuration;
      }
    }, {
      key: "getTotalDuration",
      value: function getTotalDuration(Mpd) {
        var totalDuration = 0;
        var MpdDuration = -1;
        if (Mpd.mediaPresentationDuration) {
          MpdDuration = switchToSeconds(parseDuration(Mpd.mediaPresentationDuration));
        }
        // MPD文件的总时间要么是由Mpd标签上的availabilityStartTime指定，要么是每一个Period上的duration之和
        if (MpdDuration < 0) {
          var _context12;
          _forEachInstanceProperty(_context12 = Mpd['Period_asArray']).call(_context12, function (Period) {
            if (Period.duration) {
              totalDuration += switchToSeconds(parseDuration(Period.duration));
            } else {
              throw new Error('MPD文件格式错误');
            }
          });
        } else {
          totalDuration = MpdDuration;
        }
        return totalDuration;
      }
      // 给每一个Representation对象上挂载duration属性，此处的duration指的是Representation所属的Period所代表的媒体的总时长
    }, {
      key: "setDurationForRepresentation",
      value: function setDurationForRepresentation(Mpd) {
        //1. 如果只有一个Period
        if (Mpd['Period_asArray'].length === 1) {
          var _context13;
          var totalDuration = this.getTotalDuration(Mpd);
          _forEachInstanceProperty(_context13 = Mpd['Period_asArray']).call(_context13, function (Period) {
            var _context14;
            Period.duration = Period.duration || totalDuration;
            _forEachInstanceProperty(_context14 = Period['AdaptationSet_asArray']).call(_context14, function (AdaptationSet) {
              var _context15;
              AdaptationSet.duration = totalDuration;
              _forEachInstanceProperty(_context15 = AdaptationSet['Representation_asArray']).call(_context15, function (Representation) {
                Representation.duration = totalDuration;
              });
            });
          });
        } else {
          var _context16;
          _forEachInstanceProperty(_context16 = Mpd['Period_asArray']).call(_context16, function (Period) {
            var _context17;
            if (!Period.duration) {
              throw new Error('MPD文件格式错误');
            }
            var duration = Period.duration;
            _forEachInstanceProperty(_context17 = Period['AdaptationSet_asArray']).call(_context17, function (AdaptationSet) {
              var _context18;
              AdaptationSet.duration = duration;
              _forEachInstanceProperty(_context18 = AdaptationSet['Representation_asArray']).call(_context18, function (Representation) {
                Representation.duration = duration;
              });
            });
          });
        }
      }
      // 给每一个Rpresentation对象上挂载segmentDuration属性，用来标识该Representation每一个Segment的时长
    }, {
      key: "setSegmentDurationForRepresentation",
      value: function setSegmentDurationForRepresentation(Mpd) {
        var _context19;
        var maxSegmentDuration = switchToSeconds(parseDuration(Mpd.maxSegmentDuration));
        _forEachInstanceProperty(_context19 = Mpd['Period_asArray']).call(_context19, function (Period) {
          var _context20;
          _forEachInstanceProperty(_context20 = Period['AdaptationSet_asArray']).call(_context20, function (AdaptationSet) {
            var _context21;
            _forEachInstanceProperty(_context21 = AdaptationSet['Representation_asArray']).call(_context21, function (Representation) {
              if (Representation['SegmentTemplate']) {
                if (Representation['SegmentTemplate'].duration) {
                  var duration = Representation['SegmentTemplate'].duration;
                  var timescale = Representation['SegmentTemplate'].timescale || 1;
                  Representation.segmentDuration = (duration / timescale).toFixed(1);
                } else {
                  if (maxSegmentDuration) {
                    Representation.segmentDuration = maxSegmentDuration;
                  } else {
                    throw new Error('MPD文件格式错误');
                  }
                }
              }
            });
          });
        });
      }
    }, {
      key: "onSourceAttached",
      value: function onSourceAttached(url) {
        this.mpdURL = url;
      }
    }]);
    return DashParser;
  }();
  var factory$6 = FactoryMaker.getSingleFactory(DashParser);

  function _arrayWithHoles(arr) {
    if (_Array$isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof _Symbol && _getIteratorMethod(arr) || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest();
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      _Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new _Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  var regeneratorRuntime$1 = {exports: {}};

  var _typeof = {exports: {}};

  (function (module) {
  	var _Symbol = symbol;
  	var _Symbol$iterator = iterator;
  	function _typeof(obj) {
  	  "@babel/helpers - typeof";

  	  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
  	    return typeof obj;
  	  } : function (obj) {
  	    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
  	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  	}
  	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (_typeof));

  var _typeofExports = _typeof.exports;

  var $$9 = _export;
  var uncurryThis$4 = functionUncurryThis;
  var isArray = isArray$d;

  var nativeReverse = uncurryThis$4([].reverse);
  var test = [1, 2];

  // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  $$9({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray(this)) this.length = this.length;
      return nativeReverse(this);
    }
  });

  var entryVirtual = entryVirtual$b;

  var reverse$6 = entryVirtual('Array').reverse;

  var isPrototypeOf = objectIsPrototypeOf;
  var method = reverse$6;

  var ArrayPrototype = Array.prototype;

  var reverse$5 = function (it) {
    var own = it.reverse;
    return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reverse) ? method : own;
  };

  var parent$n = reverse$5;

  var reverse$4 = parent$n;

  var parent$m = reverse$4;

  var reverse$3 = parent$m;

  var parent$l = reverse$3;

  var reverse$2 = parent$l;

  var reverse$1 = reverse$2;

  var reverse = reverse$1;

  (function (module) {
  	var _typeof = _typeofExports["default"];
  	var _Object$defineProperty = defineProperty$6;
  	var _Symbol = symbol;
  	var _Object$create = create$3;
  	var _Object$getPrototypeOf = getPrototypeOf$1;
  	var _forEachInstanceProperty = forEach$1;
  	var _Object$setPrototypeOf = setPrototypeOf$1;
  	var _Promise = promise;
  	var _reverseInstanceProperty = reverse;
  	var _sliceInstanceProperty = slice;
  	function _regeneratorRuntime() {
  	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
  	    return exports;
  	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  	  var exports = {},
  	    Op = Object.prototype,
  	    hasOwn = Op.hasOwnProperty,
  	    defineProperty = _Object$defineProperty || function (obj, key, desc) {
  	      obj[key] = desc.value;
  	    },
  	    $Symbol = "function" == typeof _Symbol ? _Symbol : {},
  	    iteratorSymbol = $Symbol.iterator || "@@iterator",
  	    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
  	    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  	  function define(obj, key, value) {
  	    return _Object$defineProperty(obj, key, {
  	      value: value,
  	      enumerable: !0,
  	      configurable: !0,
  	      writable: !0
  	    }), obj[key];
  	  }
  	  try {
  	    define({}, "");
  	  } catch (err) {
  	    define = function define(obj, key, value) {
  	      return obj[key] = value;
  	    };
  	  }
  	  function wrap(innerFn, outerFn, self, tryLocsList) {
  	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
  	      generator = _Object$create(protoGenerator.prototype),
  	      context = new Context(tryLocsList || []);
  	    return defineProperty(generator, "_invoke", {
  	      value: makeInvokeMethod(innerFn, self, context)
  	    }), generator;
  	  }
  	  function tryCatch(fn, obj, arg) {
  	    try {
  	      return {
  	        type: "normal",
  	        arg: fn.call(obj, arg)
  	      };
  	    } catch (err) {
  	      return {
  	        type: "throw",
  	        arg: err
  	      };
  	    }
  	  }
  	  exports.wrap = wrap;
  	  var ContinueSentinel = {};
  	  function Generator() {}
  	  function GeneratorFunction() {}
  	  function GeneratorFunctionPrototype() {}
  	  var IteratorPrototype = {};
  	  define(IteratorPrototype, iteratorSymbol, function () {
  	    return this;
  	  });
  	  var getProto = _Object$getPrototypeOf,
  	    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);
  	  function defineIteratorMethods(prototype) {
  	    var _context;
  	    _forEachInstanceProperty(_context = ["next", "throw", "return"]).call(_context, function (method) {
  	      define(prototype, method, function (arg) {
  	        return this._invoke(method, arg);
  	      });
  	    });
  	  }
  	  function AsyncIterator(generator, PromiseImpl) {
  	    function invoke(method, arg, resolve, reject) {
  	      var record = tryCatch(generator[method], generator, arg);
  	      if ("throw" !== record.type) {
  	        var result = record.arg,
  	          value = result.value;
  	        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
  	          invoke("next", value, resolve, reject);
  	        }, function (err) {
  	          invoke("throw", err, resolve, reject);
  	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
  	          result.value = unwrapped, resolve(result);
  	        }, function (error) {
  	          return invoke("throw", error, resolve, reject);
  	        });
  	      }
  	      reject(record.arg);
  	    }
  	    var previousPromise;
  	    defineProperty(this, "_invoke", {
  	      value: function value(method, arg) {
  	        function callInvokeWithMethodAndArg() {
  	          return new PromiseImpl(function (resolve, reject) {
  	            invoke(method, arg, resolve, reject);
  	          });
  	        }
  	        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
  	      }
  	    });
  	  }
  	  function makeInvokeMethod(innerFn, self, context) {
  	    var state = "suspendedStart";
  	    return function (method, arg) {
  	      if ("executing" === state) throw new Error("Generator is already running");
  	      if ("completed" === state) {
  	        if ("throw" === method) throw arg;
  	        return doneResult();
  	      }
  	      for (context.method = method, context.arg = arg;;) {
  	        var delegate = context.delegate;
  	        if (delegate) {
  	          var delegateResult = maybeInvokeDelegate(delegate, context);
  	          if (delegateResult) {
  	            if (delegateResult === ContinueSentinel) continue;
  	            return delegateResult;
  	          }
  	        }
  	        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
  	          if ("suspendedStart" === state) throw state = "completed", context.arg;
  	          context.dispatchException(context.arg);
  	        } else "return" === context.method && context.abrupt("return", context.arg);
  	        state = "executing";
  	        var record = tryCatch(innerFn, self, context);
  	        if ("normal" === record.type) {
  	          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
  	          return {
  	            value: record.arg,
  	            done: context.done
  	          };
  	        }
  	        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
  	      }
  	    };
  	  }
  	  function maybeInvokeDelegate(delegate, context) {
  	    var methodName = context.method,
  	      method = delegate.iterator[methodName];
  	    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
  	    var record = tryCatch(method, delegate.iterator, context.arg);
  	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
  	    var info = record.arg;
  	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  	  }
  	  function pushTryEntry(locs) {
  	    var entry = {
  	      tryLoc: locs[0]
  	    };
  	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  	  }
  	  function resetTryEntry(entry) {
  	    var record = entry.completion || {};
  	    record.type = "normal", delete record.arg, entry.completion = record;
  	  }
  	  function Context(tryLocsList) {
  	    this.tryEntries = [{
  	      tryLoc: "root"
  	    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
  	  }
  	  function values(iterable) {
  	    if (iterable) {
  	      var iteratorMethod = iterable[iteratorSymbol];
  	      if (iteratorMethod) return iteratorMethod.call(iterable);
  	      if ("function" == typeof iterable.next) return iterable;
  	      if (!isNaN(iterable.length)) {
  	        var i = -1,
  	          next = function next() {
  	            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
  	            return next.value = undefined, next.done = !0, next;
  	          };
  	        return next.next = next;
  	      }
  	    }
  	    return {
  	      next: doneResult
  	    };
  	  }
  	  function doneResult() {
  	    return {
  	      value: undefined,
  	      done: !0
  	    };
  	  }
  	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
  	    value: GeneratorFunctionPrototype,
  	    configurable: !0
  	  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
  	    value: GeneratorFunction,
  	    configurable: !0
  	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
  	    var ctor = "function" == typeof genFun && genFun.constructor;
  	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  	  }, exports.mark = function (genFun) {
  	    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
  	  }, exports.awrap = function (arg) {
  	    return {
  	      __await: arg
  	    };
  	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
  	    return this;
  	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
  	    void 0 === PromiseImpl && (PromiseImpl = _Promise);
  	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
  	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
  	      return result.done ? result.value : iter.next();
  	    });
  	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
  	    return this;
  	  }), define(Gp, "toString", function () {
  	    return "[object Generator]";
  	  }), exports.keys = function (val) {
  	    var object = Object(val),
  	      keys = [];
  	    for (var key in object) keys.push(key);
  	    return _reverseInstanceProperty(keys).call(keys), function next() {
  	      for (; keys.length;) {
  	        var key = keys.pop();
  	        if (key in object) return next.value = key, next.done = !1, next;
  	      }
  	      return next.done = !0, next;
  	    };
  	  }, exports.values = values, Context.prototype = {
  	    constructor: Context,
  	    reset: function reset(skipTempReset) {
  	      var _context2;
  	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context2 = this.tryEntries).call(_context2, resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);
  	    },
  	    stop: function stop() {
  	      this.done = !0;
  	      var rootRecord = this.tryEntries[0].completion;
  	      if ("throw" === rootRecord.type) throw rootRecord.arg;
  	      return this.rval;
  	    },
  	    dispatchException: function dispatchException(exception) {
  	      if (this.done) throw exception;
  	      var context = this;
  	      function handle(loc, caught) {
  	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
  	      }
  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i],
  	          record = entry.completion;
  	        if ("root" === entry.tryLoc) return handle("end");
  	        if (entry.tryLoc <= this.prev) {
  	          var hasCatch = hasOwn.call(entry, "catchLoc"),
  	            hasFinally = hasOwn.call(entry, "finallyLoc");
  	          if (hasCatch && hasFinally) {
  	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
  	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
  	          } else if (hasCatch) {
  	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
  	          } else {
  	            if (!hasFinally) throw new Error("try statement without catch or finally");
  	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
  	          }
  	        }
  	      }
  	    },
  	    abrupt: function abrupt(type, arg) {
  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i];
  	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
  	          var finallyEntry = entry;
  	          break;
  	        }
  	      }
  	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
  	      var record = finallyEntry ? finallyEntry.completion : {};
  	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
  	    },
  	    complete: function complete(record, afterLoc) {
  	      if ("throw" === record.type) throw record.arg;
  	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
  	    },
  	    finish: function finish(finallyLoc) {
  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i];
  	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
  	      }
  	    },
  	    "catch": function _catch(tryLoc) {
  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i];
  	        if (entry.tryLoc === tryLoc) {
  	          var record = entry.completion;
  	          if ("throw" === record.type) {
  	            var thrown = record.arg;
  	            resetTryEntry(entry);
  	          }
  	          return thrown;
  	        }
  	      }
  	      throw new Error("illegal catch attempt");
  	    },
  	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
  	      return this.delegate = {
  	        iterator: values(iterable),
  	        resultName: resultName,
  	        nextLoc: nextLoc
  	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
  	    }
  	  }, exports;
  	}
  	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (regeneratorRuntime$1));

  var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

  // TODO(Babel 8): Remove this file.

  var runtime = regeneratorRuntimeExports();
  var regenerator = runtime;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

  var URLNode = /*#__PURE__*/function () {
    function URLNode(url) {
      _classCallCheck(this, URLNode);
      _defineProperty(this, "url", void 0);
      _defineProperty(this, "children", []);
      this.url = url || null;
    }
    _createClass(URLNode, [{
      key: "setChild",
      value: function setChild(index, child) {
        this.children[index] = child;
      }
    }, {
      key: "getChild",
      value: function getChild(index) {
        return this.children[index];
      }
    }]);
    return URLNode;
  }();
  var BaseURLParser = /*#__PURE__*/function () {
    function BaseURLParser(ctx) {
      _classCallCheck(this, BaseURLParser);
      _defineProperty(this, "config", {});
      this.config = ctx.context;
      this.setup();
    }
    _createClass(BaseURLParser, [{
      key: "setup",
      value: function setup() {}
    }, {
      key: "parseManifestForBaseURL",
      value: function parseManifestForBaseURL(manifest) {
        var _context;
        var root = new URLNode(null);
        //1. 首先遍历每一个Period，规定BaseURL节点只可能出现在Period,AdaptationSet,Representation中
        _forEachInstanceProperty(_context = manifest['Period_asArray']).call(_context, function (p, pId) {
          var _context2;
          var url = null;
          if (p['BaseURL_asArray']) {
            url = p['BaseURL_asArray'][0];
          }
          var periodNode = new URLNode(url);
          root.setChild(pId, periodNode);
          _forEachInstanceProperty(_context2 = p['AdaptationSet_asArray']).call(_context2, function (a, aId) {
            var _context3;
            var url = null;
            if (a['BaseURL_asArray']) {
              url = a['BaseURL_asArray'][0];
            }
            var adaptationSetNode = new URLNode(url);
            periodNode.setChild(aId, adaptationSetNode);
            _forEachInstanceProperty(_context3 = a['Representation_asArray']).call(_context3, function (r, rId) {
              var url = null;
              if (r['BaseURL_asArray']) {
                url = r['BaseURL_asArray'][0];
              }
              var representationNode = new URLNode(url);
              adaptationSetNode.setChild(rId, representationNode);
            });
          });
        });
        return root;
      }
    }, {
      key: "getBaseURLByPath",
      value: function getBaseURLByPath(path, urlNode) {
        var baseURL = '';
        var root = urlNode;
        for (var i = 0; i < path.length; i++) {
          if (path[i] >= root.children.length || path[i] < 0) {
            throw new Error('传入的路径不正确');
          }
          if (root.children[path[i]].url) {
            baseURL += root.children[path[i]].url;
          }
          root = root.children[path[i]];
        }
        if (root.children.length > 0) {
          throw new Error('传入的路径不正确');
        }
        return baseURL;
      }
    }]);
    return BaseURLParser;
  }();
  var factory$5 = FactoryMaker.getSingleFactory(BaseURLParser);

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var TimeRangeUtils = /*#__PURE__*/function () {
    function TimeRangeUtils(ctx) {
      _classCallCheck(this, TimeRangeUtils);
      _defineProperty(this, "config", {});
      _defineProperty(this, "dashParser", void 0);
      this.config = ctx.context;
      this.setup();
    }
    _createClass(TimeRangeUtils, [{
      key: "setup",
      value: function setup() {
        this.dashParser = factory$6().getInstance();
      }
      /**
       * @description 返回特定stream之前的所有stream的时间总和
       * @param streamId
       * @param Mpd
       * @returns {number} Number
       */
    }, {
      key: "getSummaryTimeBeforeStream",
      value: function getSummaryTimeBeforeStream(streamId, Mpd) {
        if (streamId === 0) return 0;
        var Period = Mpd['Period_asArray'];
        var sum = 0;
        for (var i = 0; i < streamId; i++) {
          sum += Period[i].duration;
        }
        return sum;
      }
    }, {
      key: "getOffestTimeOfMediaSegment",
      value: function getOffestTimeOfMediaSegment(streamId, mediaId, Mpd) {
        var beforeTime = this.getSummaryTimeBeforeStream(streamId, Mpd);
        var segmentDuration = this.dashParser.getSegmentDuration(Mpd, streamId);
        return beforeTime + segmentDuration * (mediaId + 1);
      }
    }, {
      key: "inVideoBuffered",
      value: function inVideoBuffered(time, ranges) {
        var _iterator = _createForOfIteratorHelper(ranges),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var range = _step.value;
            if (time >= range.start && time <= range.end) return true;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return false;
      }
    }, {
      key: "inSpecificStreamRange",
      value: function inSpecificStreamRange(streamId, currentTime, Mpd) {
        var totalTime = this.dashParser.getTotalDuration(Mpd);
        if (currentTime > totalTime) return false;
        var start = this.getSummaryTimeBeforeStream(streamId, Mpd);
        var end = start + Mpd['Period_asArray'][streamId].duration;
        if (currentTime < start || currentTime > end) return false;
        return true;
      }
    }, {
      key: "getSegmentAndStreamIndexByTime",
      value: function getSegmentAndStreamIndexByTime(streamId, currentTime, Mpd) {
        if (this.inSpecificStreamRange(streamId, currentTime, Mpd)) {
          var segmentDuration = this.dashParser.getSegmentDuration(Mpd, streamId);
          console.log(segmentDuration);
          var index = Math.floor(currentTime / segmentDuration);
          return [streamId, index];
        } else {
          var totalTime = this.dashParser.getTotalDuration(Mpd);
          if (currentTime > totalTime) {
            throw new Error('传入的当前时间大于媒体的总时长');
          }
          var sum = 0;
          for (var i = 0; i < Mpd['Period_asArray'].length; i++) {
            var Period = Mpd['Period_asArray'][i];
            sum += Period.duration;
            if (sum > currentTime) {
              var _segmentDuration = this.dashParser.getSegmentDuration(Mpd, i);
              var _index = Math.floor(currentTime / _segmentDuration);
              return [i, _index];
            }
          }
        }
      }
    }]);
    return TimeRangeUtils;
  }();
  var factory$4 = FactoryMaker.getSingleFactory(TimeRangeUtils);

  var StreamController = /*#__PURE__*/function () {
    function StreamController(ctx) {
      _classCallCheck(this, StreamController);
      _defineProperty(this, "config", {});
      _defineProperty(this, "baseURLParser", void 0);
      _defineProperty(this, "baseURLPath", void 0);
      _defineProperty(this, "URLUtils", void 0);
      _defineProperty(this, "eventBus", void 0);
      _defineProperty(this, "urlLoader", void 0);
      _defineProperty(this, "timeRangeUtils", void 0);
      //音视频的分辨率
      _defineProperty(this, "videoResolvePower", '1920*1080');
      _defineProperty(this, "audioResolvePower", '48000');
      // 和索引相关的变量
      _defineProperty(this, "mediaId", 0);
      _defineProperty(this, "streamId", 0);
      _defineProperty(this, "firstRequestNumber", void 0);
      // 整个MPD文件所需要发送请求的结构体对象
      _defineProperty(this, "segmentRequestStruct", void 0);
      _defineProperty(this, "Mpd", void 0);
      this.config = ctx.context;
      console.log(this.config);
      this.firstRequestNumber = this.config.num || 23;
      this.setup();
      this.initialEvent();
    }
    _createClass(StreamController, [{
      key: "setup",
      value: function setup() {
        this.baseURLParser = factory$5().getInstance();
        this.URLUtils = factory$7().getInstance();
        this.eventBus = factory$b().getInstance();
        this.urlLoader = factory$9().getInstance();
        this.timeRangeUtils = factory$4().getInstance();
      }
    }, {
      key: "initialEvent",
      value: function initialEvent() {
        this.eventBus.on(EventConstants.MANIFEST_PARSE_COMPLETED, this.onManifestParseCompleted, this);
        this.eventBus.on(EventConstants.SEGMENT_CONSUMED, this.onSegmentConsumed, this);
        this.eventBus.on(EventConstants.SEGEMTN_REQUEST, this.onSegmentRequest, this);
      }
    }, {
      key: "onManifestParseCompleted",
      value: function onManifestParseCompleted(mainifest) {
        this.segmentRequestStruct = this.generateSegmentRequestStruct(mainifest);
        this.Mpd = mainifest;
        console.log(this.segmentRequestStruct);
        this.startStream(mainifest);
      }
    }, {
      key: "generateBaseURLPath",
      value: function generateBaseURLPath(Mpd) {
        this.baseURLPath = this.baseURLParser.parseManifestForBaseURL(Mpd);
      }
    }, {
      key: "generateSegmentRequestStruct",
      value: function generateSegmentRequestStruct(Mpd) {
        this.generateBaseURLPath(Mpd);
        var baseURL = Mpd['baseURL'] || '';
        var mpdSegmentRequest = {
          type: 'MpdSegmentRequest',
          request: []
        };
        for (var i = 0; i < Mpd['Period_asArray'].length; i++) {
          var Period = Mpd['Period_asArray'][i];
          var periodSegmentRequest = {
            VideoSegmentRequest: [],
            AudioSegmentRequest: []
          };
          for (var j = 0; j < Period['AdaptationSet_asArray'].length; j++) {
            var AdaptationSet = Period['AdaptationSet_asArray'][j];
            var res = this.generateAdaptationSetVideoOrAudioSegmentRequest(AdaptationSet, baseURL, i, j);
            if (AdaptationSet.mimeType === 'video/mp4') {
              periodSegmentRequest.VideoSegmentRequest.push({
                type: 'video',
                video: res
              });
            } else if (AdaptationSet.mimeType === 'audio/mp4') {
              periodSegmentRequest.AudioSegmentRequest.push({
                lang: AdaptationSet.lang || 'en',
                audio: res
              });
            }
          }
          mpdSegmentRequest.request.push(periodSegmentRequest);
        }
        return mpdSegmentRequest;
      }
    }, {
      key: "generateAdaptationSetVideoOrAudioSegmentRequest",
      value: function generateAdaptationSetVideoOrAudioSegmentRequest(AdaptationSet, baseURL, i, j) {
        var _this = this;
        var res = {};
        var _loop = function _loop() {
          var _context;
          var Representation = AdaptationSet['Representation_asArray'][k];
          var url = _this.URLUtils.resolve(baseURL, _this.baseURLParser.getBaseURLByPath([i, j, k], _this.baseURLPath));
          // console.log(url)
          res[Representation.resolvePower] = [];
          res[Representation.resolvePower].push(_this.URLUtils.resolve(url, Representation.initializationURL));
          res[Representation.resolvePower].push(_mapInstanceProperty(_context = Representation.mediaURL).call(_context, function (item) {
            return _this.URLUtils.resolve(url, item);
          }));
        };
        for (var k = 0; k < AdaptationSet['Representation_asArray'].length; k++) {
          _loop();
        }
        return res;
      }
    }, {
      key: "getNumberOfMediaSegmentForPeriod",
      value: function getNumberOfMediaSegmentForPeriod(streamId) {
        return this.segmentRequestStruct.request[this.streamId].VideoSegmentRequest[0].video[this.videoResolvePower][1].length;
      }
      //初始化播放流，一次至多加载23个Segement过来
    }, {
      key: "startStream",
      value: function () {
        var _startStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(Mpd) {
          var ires, number, i, mres;
          return _regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                Mpd['Period_asArray'][this.streamId];
                _context2.next = 3;
                return this.loadInitialSegment();
              case 3:
                ires = _context2.sent;
                this.eventBus.trigger(EventConstants.SEGEMTN_LOADED, {
                  data: ires,
                  streamId: this.streamId
                });
                number = this.getNumberOfMediaSegmentForPeriod(this.streamId);
                i = 0;
              case 7:
                if (!(i < (number >= this.firstRequestNumber ? this.firstRequestNumber : number))) {
                  _context2.next = 16;
                  break;
                }
                _context2.next = 10;
                return this.loadMediaSegment();
              case 10:
                mres = _context2.sent;
                this.mediaId++;
                this.eventBus.trigger(EventConstants.SEGEMTN_LOADED, {
                  data: mres,
                  streamId: this.streamId,
                  mediaId: this.mediaId
                });
              case 13:
                i++;
                _context2.next = 7;
                break;
              case 16:
              case "end":
                return _context2.stop();
            }
          }, _callee, this);
        }));
        function startStream(_x) {
          return _startStream.apply(this, arguments);
        }
        return startStream;
      }()
      /**
       * @description 只有在触发seek事件后才会触发此方法
       * @param tuple
       */
    }, {
      key: "onSegmentRequest",
      value: function () {
        var _onSegmentRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(tuple) {
          var _tuple, streamId, mediaId, mres;
          return _regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                // 如果此时video发生缓存内容之外的跳转，则需要重新请求对应的segment，因此需要中断正在发送还没有收到结果的请求
                this.abortAllXHR();
                _tuple = _slicedToArray(tuple, 2), streamId = _tuple[0], mediaId = _tuple[1];
                this.streamId = streamId;
                this.mediaId = mediaId;
                _context3.next = 6;
                return this.loadMediaSegment();
              case 6:
                mres = _context3.sent;
                this.eventBus.trigger(EventConstants.SEGEMTN_LOADED, {
                  data: mres,
                  streamId: this.streamId,
                  mediaId: mediaId
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }, _callee2, this);
        }));
        function onSegmentRequest(_x2) {
          return _onSegmentRequest.apply(this, arguments);
        }
        return onSegmentRequest;
      }() //播放器消费一个Segment我就继续请求一个Segment
    }, {
      key: "onSegmentConsumed",
      value: function () {
        var _onSegmentConsumed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(range) {
          var total, time, mres;
          return _regeneratorRuntime.wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (this.segmentRequestStruct.request[this.streamId]) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return");
              case 2:
                total = this.getNumberOfMediaSegmentForPeriod(this.streamId);
                if (this.mediaId >= total) {
                  this.mediaId = 0;
                  this.streamId++;
                } else {
                  this.mediaId++;
                }
                if (!(this.segmentRequestStruct.request[this.streamId] === undefined)) {
                  _context4.next = 9;
                  break;
                }
                console.log('播放完毕');
                this.eventBus.trigger(EventConstants.MEDIA_PLAYBACK_FINISHED);
                _context4.next = 16;
                break;
              case 9:
                // let mres = await this.loadMediaSegment(this.streamId, this.mediaIndex)
                // this.eventBus.trigger(EventConstants.SEGEMTN_LOADED, { data: mres, streamId: this.streamId })
                time = this.timeRangeUtils.getOffestTimeOfMediaSegment(this.streamId, this.mediaId, this.Mpd);
                console.log(time, range);
                if (this.timeRangeUtils.inVideoBuffered(time, range)) {
                  _context4.next = 16;
                  break;
                }
                _context4.next = 14;
                return this.loadMediaSegment();
              case 14:
                mres = _context4.sent;
                this.eventBus.trigger(EventConstants.SEGEMTN_LOADED, {
                  data: mres,
                  streamId: this.streamId,
                  mediaId: this.mediaId
                });
              case 16:
              case "end":
                return _context4.stop();
            }
          }, _callee3, this);
        }));
        function onSegmentConsumed(_x3) {
          return _onSegmentConsumed.apply(this, arguments);
        }
        return onSegmentConsumed;
      }() //此处的streamId标识具体的Period对象
    }, {
      key: "loadInitialSegment",
      value: function loadInitialSegment() {
        var stream = this.segmentRequestStruct.request[this.streamId];
        // 先默认选择音视频的第一个版本
        var audioRequest = stream.AudioSegmentRequest[0].audio;
        var videoRequest = stream.VideoSegmentRequest[0].video;
        return this.loadSegment(videoRequest[this.videoResolvePower][0], audioRequest[this.audioResolvePower][0]);
      }
    }, {
      key: "loadMediaSegment",
      value: function loadMediaSegment() {
        var stream = this.segmentRequestStruct.request[this.streamId];
        // 先默认选择音视频的第一个版本
        var audioRequest = stream.AudioSegmentRequest[0].audio;
        var videoRequest = stream.VideoSegmentRequest[0].video;
        return this.loadSegment(videoRequest[this.videoResolvePower][1][this.mediaId], audioRequest[this.audioResolvePower][1][this.mediaId]);
      }
    }, {
      key: "loadSegment",
      value: function () {
        var _loadSegment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(videoURL, audioURL) {
          var p1, p2, p;
          return _regeneratorRuntime.wrap(function _callee4$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                p1 = this.urlLoader.load({
                  url: videoURL,
                  responseType: 'arraybuffer'
                }, 'Segment');
                p2 = this.urlLoader.load({
                  url: audioURL,
                  responseType: 'arraybuffer'
                }, 'Segment');
                _context5.next = 4;
                return _Promise.all([p1, p2]);
              case 4:
                p = _context5.sent;
                return _context5.abrupt("return", p);
              case 6:
              case "end":
                return _context5.stop();
            }
          }, _callee4, this);
        }));
        function loadSegment(_x4, _x5) {
          return _loadSegment.apply(this, arguments);
        }
        return loadSegment;
      }()
    }, {
      key: "abortAllXHR",
      value: function abortAllXHR() {
        this.urlLoader.abortAllXHR();
      }
    }]);
    return StreamController;
  }();
  var factory$3 = FactoryMaker.getClassFactory(StreamController);

  var MediaPlayerBuffer = /*#__PURE__*/function () {
    function MediaPlayerBuffer(ctx) {
      _classCallCheck(this, MediaPlayerBuffer);
      _defineProperty(this, "config", {});
      _defineProperty(this, "arrayBuffer", new Array());
      this.config = ctx.context;
    }
    _createClass(MediaPlayerBuffer, [{
      key: "push",
      value: function push(buffer) {
        this.arrayBuffer.push(buffer);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.arrayBuffer = [];
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.arrayBuffer.length === 0;
      }
    }, {
      key: "delete",
      value: function _delete(buffer) {
        var _context;
        if (_includesInstanceProperty(_context = this.arrayBuffer).call(_context, buffer)) {
          var _context2, _context3;
          var index = _indexOfInstanceProperty(_context2 = this.arrayBuffer).call(_context2, buffer);
          _spliceInstanceProperty(_context3 = this.arrayBuffer).call(_context3, index, 1);
        }
      }
    }, {
      key: "top",
      value: function top() {
        return this.arrayBuffer[0] || null;
      }
    }, {
      key: "pop",
      value: function pop() {
        this.arrayBuffer.length && this.arrayBuffer.pop();
      }
    }]);
    return MediaPlayerBuffer;
  }();
  var factory$2 = FactoryMaker.getSingleFactory(MediaPlayerBuffer);

  var fails$4 = fails$x;
  var wellKnownSymbol$1 = wellKnownSymbol$q;
  var DESCRIPTORS$4 = descriptors;
  var IS_PURE = isPure;

  var ITERATOR$2 = wellKnownSymbol$1('iterator');

  var urlConstructorDetection = !fails$4(function () {
    // eslint-disable-next-line unicorn/relative-url-style -- required for testing
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return (IS_PURE && !url.toJSON)
      || (!searchParams.size && (IS_PURE || !DESCRIPTORS$4))
      || !searchParams.sort
      || url.href !== 'http://a/c%20d?a=1&c=3'
      || searchParams.get('c') !== '3'
      || String(new URLSearchParams('?a=1')) !== 'a=1'
      || !searchParams[ITERATOR$2]
      // throws in Edge
      || new URL('https://a@b').username !== 'a'
      || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
      // not punycoded in Edge
      || new URL('http://тест').host !== 'xn--e1aybc'
      // not escaped in Chrome 62-
      || new URL('http://a#б').hash !== '#%D0%B1'
      // fails in Chrome 66-
      || result !== 'a1c3'
      // throws in Safari
      || new URL('http://x', undefined).host !== 'x';
  });

  // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
  var uncurryThis$3 = functionUncurryThis;

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'
  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;

  var $RangeError = RangeError;
  var exec$1 = uncurryThis$3(regexSeparators.exec);
  var floor$2 = Math.floor;
  var fromCharCode = String.fromCharCode;
  var charCodeAt = uncurryThis$3(''.charCodeAt);
  var join$2 = uncurryThis$3([].join);
  var push$2 = uncurryThis$3([].push);
  var replace$2 = uncurryThis$3(''.replace);
  var split$2 = uncurryThis$3(''.split);
  var toLowerCase$1 = uncurryThis$3(''.toLowerCase);

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */
  var ucs2decode = function (string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var value = charCodeAt(string, counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = charCodeAt(string, counter++);
        if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
          push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          push$2(output, value);
          counter--;
        }
      } else {
        push$2(output, value);
      }
    }
    return output;
  };

  /**
   * Converts a digit/integer into a basic code point.
   */
  var digitToBasic = function (digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */
  var adapt = function (delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$2(delta / damp) : delta >> 1;
    delta += floor$2(delta / numPoints);
    while (delta > baseMinusTMin * tMax >> 1) {
      delta = floor$2(delta / baseMinusTMin);
      k += base;
    }
    return floor$2(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */
  var encode = function (input) {
    var output = [];

    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);

    // Cache the length.
    var inputLength = input.length;

    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue;

    // Handle the basic code points.
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < 0x80) {
        push$2(output, fromCharCode(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;

    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
      push$2(output, delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }

      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
      var handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor$2((maxInt - delta) / handledCPCountPlusOne)) {
        throw $RangeError(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < n && ++delta > maxInt) {
          throw $RangeError(OVERFLOW_ERROR);
        }
        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          var k = base;
          while (true) {
            var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$2(qMinusT / baseMinusT);
            k += base;
          }

          push$2(output, fromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          handledCPCount++;
        }
      }

      delta++;
      n++;
    }
    return join$2(output, '');
  };

  var stringPunycodeToAscii = function (input) {
    var encoded = [];
    var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
    var i, label;
    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      push$2(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
    }
    return join$2(encoded, '.');
  };

  var arraySlice$2 = arraySliceSimple;

  var floor$1 = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor$1(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(
      array,
      mergeSort(arraySlice$2(array, 0, middle), comparefn),
      mergeSort(arraySlice$2(array, middle), comparefn),
      comparefn
    );
  };

  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    } return array;
  };

  var merge = function (array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    } return array;
  };

  var arraySort$1 = mergeSort;

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var $$8 = _export;
  var global$6 = global$r;
  var call = functionCall;
  var uncurryThis$2 = functionUncurryThis;
  var DESCRIPTORS$3 = descriptors;
  var USE_NATIVE_URL$2 = urlConstructorDetection;
  var defineBuiltIn$1 = defineBuiltIn$8;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$5;
  var defineBuiltIns = defineBuiltIns$2;
  var setToStringTag$1 = setToStringTag$9;
  var createIteratorConstructor = iteratorCreateConstructor;
  var InternalStateModule$1 = internalState;
  var anInstance$1 = anInstance$5;
  var isCallable$1 = isCallable$q;
  var hasOwn$1 = hasOwnProperty_1;
  var bind$1 = functionBindContext;
  var classof = classof$c;
  var anObject = anObject$f;
  var isObject = isObject$j;
  var $toString$1 = toString$b;
  var create = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$8;
  var getIterator = getIterator$3;
  var getIteratorMethod = getIteratorMethod$a;
  var validateArgumentsLength$3 = validateArgumentsLength$5;
  var wellKnownSymbol = wellKnownSymbol$q;
  var arraySort = arraySort$1;

  var ITERATOR$1 = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$7 = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn = function (name) {
    if (!DESCRIPTORS$3) return global$6[name];
    var descriptor = getOwnPropertyDescriptor$7(global$6, name);
    return descriptor && descriptor.value;
  };

  var nativeFetch = safeGetBuiltIn('fetch');
  var NativeRequest = safeGetBuiltIn('Request');
  var Headers = safeGetBuiltIn('Headers');
  var RequestPrototype = NativeRequest && NativeRequest.prototype;
  var HeadersPrototype = Headers && Headers.prototype;
  var RegExp$1 = global$6.RegExp;
  var TypeError$2 = global$6.TypeError;
  var decodeURIComponent = global$6.decodeURIComponent;
  var encodeURIComponent$1 = global$6.encodeURIComponent;
  var charAt$2 = uncurryThis$2(''.charAt);
  var join$1 = uncurryThis$2([].join);
  var push$1 = uncurryThis$2([].push);
  var replace$1 = uncurryThis$2(''.replace);
  var shift$1 = uncurryThis$2([].shift);
  var splice = uncurryThis$2([].splice);
  var split$1 = uncurryThis$2(''.split);
  var stringSlice$1 = uncurryThis$2(''.slice);

  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function (bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function (sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function (it) {
    var result = replace$1(it, plus, ' ');
    var bytes = 4;
    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = replace$1(result, percentSequence(bytes--), percentDecode);
      }
      return result;
    }
  };

  var find = /[!'()~]|%20/g;

  var replacements = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function (match) {
    return replacements[match];
  };

  var serialize = function (it) {
    return replace$1(encodeURIComponent$1(it), find, replacer);
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$1(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;
    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    } return step;
  }, true);

  var URLSearchParamsState = function (init) {
    this.entries = [];
    this.url = null;

    if (init !== undefined) {
      if (isObject(init)) this.parseObject(init);
      else this.parseQuery(typeof init == 'string' ? charAt$2(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$1(init));
    }
  };

  URLSearchParamsState.prototype = {
    type: URL_SEARCH_PARAMS,
    bindURL: function (url) {
      this.url = url;
      this.update();
    },
    parseObject: function (object) {
      var iteratorMethod = getIteratorMethod(object);
      var iterator, next, step, entryIterator, entryNext, first, second;

      if (iteratorMethod) {
        iterator = getIterator(object, iteratorMethod);
        next = iterator.next;
        while (!(step = call(next, iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = call(entryNext, entryIterator)).done ||
            (second = call(entryNext, entryIterator)).done ||
            !call(entryNext, entryIterator).done
          ) throw TypeError$2('Expected sequence with length 2');
          push$1(this.entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
        }
      } else for (var key in object) if (hasOwn$1(object, key)) {
        push$1(this.entries, { key: key, value: $toString$1(object[key]) });
      }
    },
    parseQuery: function (query) {
      if (query) {
        var attributes = split$1(query, '&');
        var index = 0;
        var attribute, entry;
        while (index < attributes.length) {
          attribute = attributes[index++];
          if (attribute.length) {
            entry = split$1(attribute, '=');
            push$1(this.entries, {
              key: deserialize(shift$1(entry)),
              value: deserialize(join$1(entry, '='))
            });
          }
        }
      }
    },
    serialize: function () {
      var entries = this.entries;
      var result = [];
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
      } return join$1(result, '&');
    },
    update: function () {
      this.entries.length = 0;
      this.parseQuery(this.url.query);
    },
    updateURL: function () {
      if (this.url) this.url.update();
    }
  };

  // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams
  var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
    anInstance$1(this, URLSearchParamsPrototype);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var state = setInternalState$1(this, new URLSearchParamsState(init));
    if (!DESCRIPTORS$3) this.length = state.entries.length;
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  defineBuiltIns(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength$3(arguments.length, 2);
      var state = getInternalParamsState(this);
      push$1(state.entries, { key: $toString$1(name), value: $toString$1(value) });
      if (!DESCRIPTORS$3) this.length++;
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function (name) {
      validateArgumentsLength$3(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = $toString$1(name);
      var index = 0;
      while (index < entries.length) {
        if (entries[index].key === key) splice(entries, index, 1);
        else index++;
      }
      if (!DESCRIPTORS$3) this.length = entries.length;
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength$3(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }
      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength$3(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var result = [];
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) push$1(result, entries[index].value);
      }
      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength$3(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;
      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }
      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength$3(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = $toString$1(name);
      var val = $toString$1(value);
      var index = 0;
      var entry;
      for (; index < entries.length; index++) {
        entry = entries[index];
        if (entry.key === key) {
          if (found) splice(entries, index--, 1);
          else {
            found = true;
            entry.value = val;
          }
        }
      }
      if (!found) push$1(entries, { key: key, value: val });
      if (!DESCRIPTORS$3) this.length = entries.length;
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      arraySort(state.entries, function (a, b) {
        return a.key > b.key ? 1 : -1;
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback /* , thisArg */) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, { enumerable: true });

  // `URLSearchParams.prototype[@@iterator]` method
  defineBuiltIn$1(URLSearchParamsPrototype, ITERATOR$1, URLSearchParamsPrototype.entries, { name: 'entries' });

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  defineBuiltIn$1(URLSearchParamsPrototype, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
  }, { enumerable: true });

  // `URLSearchParams.prototype.size` getter
  // https://github.com/whatwg/url/pull/734
  if (DESCRIPTORS$3) defineBuiltInAccessor$1(URLSearchParamsPrototype, 'size', {
    get: function size() {
      return getInternalParamsState(this).entries.length;
    },
    configurable: true,
    enumerable: true
  });

  setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  $$8({ global: true, constructor: true, forced: !USE_NATIVE_URL$2 }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  if (!USE_NATIVE_URL$2 && isCallable$1(Headers)) {
    var headersHas = uncurryThis$2(HeadersPrototype.has);
    var headersSet = uncurryThis$2(HeadersPrototype.set);

    var wrapRequestOptions = function (init) {
      if (isObject(init)) {
        var body = init.body;
        var headers;
        if (classof(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers();
          if (!headersHas(headers, 'content-type')) {
            headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
          return create(init, {
            body: createPropertyDescriptor(0, $toString$1(body)),
            headers: createPropertyDescriptor(0, headers)
          });
        }
      } return init;
    };

    if (isCallable$1(nativeFetch)) {
      $$8({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
        fetch: function fetch(input /* , init */) {
          return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (isCallable$1(NativeRequest)) {
      var RequestConstructor = function Request(input /* , init */) {
        anInstance$1(this, RequestPrototype);
        return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;

      $$8({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams_constructor = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var $$7 = _export;
  var DESCRIPTORS$2 = descriptors;
  var USE_NATIVE_URL$1 = urlConstructorDetection;
  var global$5 = global$r;
  var bind = functionBindContext;
  var uncurryThis$1 = functionUncurryThis;
  var defineBuiltIn = defineBuiltIn$8;
  var defineBuiltInAccessor = defineBuiltInAccessor$5;
  var anInstance = anInstance$5;
  var hasOwn = hasOwnProperty_1;
  var assign = objectAssign;
  var arrayFrom = arrayFrom$1;
  var arraySlice$1 = arraySliceSimple;
  var codeAt = stringMultibyte.codeAt;
  var toASCII = stringPunycodeToAscii;
  var $toString = toString$b;
  var setToStringTag = setToStringTag$9;
  var validateArgumentsLength$2 = validateArgumentsLength$5;
  var URLSearchParamsModule = web_urlSearchParams_constructor;
  var InternalStateModule = internalState;

  var setInternalState = InternalStateModule.set;
  var getInternalURLState = InternalStateModule.getterFor('URL');
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
  var getInternalSearchParamsState = URLSearchParamsModule.getState;

  var NativeURL = global$5.URL;
  var TypeError$1 = global$5.TypeError;
  var parseInt$1 = global$5.parseInt;
  var floor = Math.floor;
  var pow = Math.pow;
  var charAt$1 = uncurryThis$1(''.charAt);
  var exec = uncurryThis$1(/./.exec);
  var join = uncurryThis$1([].join);
  var numberToString = uncurryThis$1(1.0.toString);
  var pop = uncurryThis$1([].pop);
  var push = uncurryThis$1([].push);
  var replace = uncurryThis$1(''.replace);
  var shift = uncurryThis$1([].shift);
  var split = uncurryThis$1(''.split);
  var stringSlice = uncurryThis$1(''.slice);
  var toLowerCase = uncurryThis$1(''.toLowerCase);
  var unshift = uncurryThis$1([].unshift);

  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';

  var ALPHA = /[a-z]/i;
  // eslint-disable-next-line regexp/no-obscure-range -- safe
  var ALPHANUMERIC = /[\d+-.a-z]/i;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\da-f]+$/i;
  /* eslint-disable regexp/no-control-character -- safe */
  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
  var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable regexp/no-control-character -- safe */
  var EOF;

  // https://url.spec.whatwg.org/#ipv4-number-parser
  var parseIPv4 = function (input) {
    var parts = split(input, '.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] == '') {
      parts.length--;
    }
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;
      if (part.length > 1 && charAt$1(part, 0) == '0') {
        radix = exec(HEX_START, part) ? 16 : 8;
        part = stringSlice(part, radix == 8 ? 1 : 2);
      }
      if (part === '') {
        number = 0;
      } else {
        if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
        number = parseInt$1(part, radix);
      }
      push(numbers, number);
    }
    for (index = 0; index < partsLength; index++) {
      number = numbers[index];
      if (index == partsLength - 1) {
        if (number >= pow(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }
    ipv4 = pop(numbers);
    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow(256, 3 - index);
    }
    return ipv4;
  };

  // https://url.spec.whatwg.org/#concept-ipv6-parser
  // eslint-disable-next-line max-statements -- TODO
  var parseIPv6 = function (input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var chr = function () {
      return charAt$1(input, pointer);
    };

    if (chr() == ':') {
      if (charAt$1(input, 1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }
    while (chr()) {
      if (pieceIndex == 8) return;
      if (chr() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }
      value = length = 0;
      while (length < 4 && exec(HEX, chr())) {
        value = value * 16 + parseInt$1(chr(), 16);
        pointer++;
        length++;
      }
      if (chr() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;
        while (chr()) {
          ipv4Piece = null;
          if (numbersSeen > 0) {
            if (chr() == '.' && numbersSeen < 4) pointer++;
            else return;
          }
          if (!exec(DIGIT, chr())) return;
          while (exec(DIGIT, chr())) {
            number = parseInt$1(chr(), 10);
            if (ipv4Piece === null) ipv4Piece = number;
            else if (ipv4Piece == 0) return;
            else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }
          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }
        if (numbersSeen != 4) return;
        break;
      } else if (chr() == ':') {
        pointer++;
        if (!chr()) return;
      } else if (chr()) return;
      address[pieceIndex++] = value;
    }
    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;
      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;
    return address;
  };

  var findLongestZeroSequence = function (ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }
    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }
    return maxIndex;
  };

  // https://url.spec.whatwg.org/#host-serializing
  var serializeHost = function (host) {
    var result, index, compress, ignore0;
    // ipv4
    if (typeof host == 'number') {
      result = [];
      for (index = 0; index < 4; index++) {
        unshift(result, host % 256);
        host = floor(host / 256);
      } return join(result, '.');
    // ipv6
    } else if (typeof host == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);
      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;
        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += numberToString(host[index], 16);
          if (index < 7) result += ':';
        }
      }
      return '[' + result + ']';
    } return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
  });
  var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
    '#': 1, '?': 1, '{': 1, '}': 1
  });
  var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
    '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
  });

  var percentEncode = function (chr, set) {
    var code = codeAt(chr, 0);
    return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
  };

  // https://url.spec.whatwg.org/#special-scheme
  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };

  // https://url.spec.whatwg.org/#windows-drive-letter
  var isWindowsDriveLetter = function (string, normalized) {
    var second;
    return string.length == 2 && exec(ALPHA, charAt$1(string, 0))
      && ((second = charAt$1(string, 1)) == ':' || (!normalized && second == '|'));
  };

  // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
  var startsWithWindowsDriveLetter = function (string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
      string.length == 2 ||
      ((third = charAt$1(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
    );
  };

  // https://url.spec.whatwg.org/#single-dot-path-segment
  var isSingleDot = function (segment) {
    return segment === '.' || toLowerCase(segment) === '%2e';
  };

  // https://url.spec.whatwg.org/#double-dot-path-segment
  var isDoubleDot = function (segment) {
    segment = toLowerCase(segment);
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  };

  // States:
  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};

  var URLState = function (url, isBase, base) {
    var urlString = $toString(url);
    var baseState, failure, searchParams;
    if (isBase) {
      failure = this.parse(urlString);
      if (failure) throw TypeError$1(failure);
      this.searchParams = null;
    } else {
      if (base !== undefined) baseState = new URLState(base, true);
      failure = this.parse(urlString, null, baseState);
      if (failure) throw TypeError$1(failure);
      searchParams = getInternalSearchParamsState(new URLSearchParams$1());
      searchParams.bindURL(this);
      this.searchParams = searchParams;
    }
  };

  URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function (input, stateOverride, base) {
      var url = this;
      var state = stateOverride || SCHEME_START;
      var pointer = 0;
      var buffer = '';
      var seenAt = false;
      var seenBracket = false;
      var seenPasswordToken = false;
      var codePoints, chr, bufferCodePoints, failure;

      input = $toString(input);

      if (!stateOverride) {
        url.scheme = '';
        url.username = '';
        url.password = '';
        url.host = null;
        url.port = null;
        url.path = [];
        url.query = null;
        url.fragment = null;
        url.cannotBeABaseURL = false;
        input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
        input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
      }

      input = replace(input, TAB_AND_NEW_LINE, '');

      codePoints = arrayFrom(input);

      while (pointer <= codePoints.length) {
        chr = codePoints[pointer];
        switch (state) {
          case SCHEME_START:
            if (chr && exec(ALPHA, chr)) {
              buffer += toLowerCase(chr);
              state = SCHEME;
            } else if (!stateOverride) {
              state = NO_SCHEME;
              continue;
            } else return INVALID_SCHEME;
            break;

          case SCHEME:
            if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
              buffer += toLowerCase(chr);
            } else if (chr == ':') {
              if (stateOverride && (
                (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||
                (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||
                (url.scheme == 'file' && !url.host)
              )) return;
              url.scheme = buffer;
              if (stateOverride) {
                if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
                return;
              }
              buffer = '';
              if (url.scheme == 'file') {
                state = FILE;
              } else if (url.isSpecial() && base && base.scheme == url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY;
              } else if (url.isSpecial()) {
                state = SPECIAL_AUTHORITY_SLASHES;
              } else if (codePoints[pointer + 1] == '/') {
                state = PATH_OR_AUTHORITY;
                pointer++;
              } else {
                url.cannotBeABaseURL = true;
                push(url.path, '');
                state = CANNOT_BE_A_BASE_URL_PATH;
              }
            } else if (!stateOverride) {
              buffer = '';
              state = NO_SCHEME;
              pointer = 0;
              continue;
            } else return INVALID_SCHEME;
            break;

          case NO_SCHEME:
            if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
            if (base.cannotBeABaseURL && chr == '#') {
              url.scheme = base.scheme;
              url.path = arraySlice$1(base.path);
              url.query = base.query;
              url.fragment = '';
              url.cannotBeABaseURL = true;
              state = FRAGMENT;
              break;
            }
            state = base.scheme == 'file' ? FILE : RELATIVE;
            continue;

          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr == '/' && codePoints[pointer + 1] == '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              pointer++;
            } else {
              state = RELATIVE;
              continue;
            } break;

          case PATH_OR_AUTHORITY:
            if (chr == '/') {
              state = AUTHORITY;
              break;
            } else {
              state = PATH;
              continue;
            }

          case RELATIVE:
            url.scheme = base.scheme;
            if (chr == EOF) {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$1(base.path);
              url.query = base.query;
            } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
              state = RELATIVE_SLASH;
            } else if (chr == '?') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$1(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$1(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$1(base.path);
              url.path.length--;
              state = PATH;
              continue;
            } break;

          case RELATIVE_SLASH:
            if (url.isSpecial() && (chr == '/' || chr == '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            } else if (chr == '/') {
              state = AUTHORITY;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              state = PATH;
              continue;
            } break;

          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            if (chr != '/' || charAt$1(buffer, pointer + 1) != '/') continue;
            pointer++;
            break;

          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr != '/' && chr != '\\') {
              state = AUTHORITY;
              continue;
            } break;

          case AUTHORITY:
            if (chr == '@') {
              if (seenAt) buffer = '%40' + buffer;
              seenAt = true;
              bufferCodePoints = arrayFrom(buffer);
              for (var i = 0; i < bufferCodePoints.length; i++) {
                var codePoint = bufferCodePoints[i];
                if (codePoint == ':' && !seenPasswordToken) {
                  seenPasswordToken = true;
                  continue;
                }
                var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                if (seenPasswordToken) url.password += encodedCodePoints;
                else url.username += encodedCodePoints;
              }
              buffer = '';
            } else if (
              chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
              (chr == '\\' && url.isSpecial())
            ) {
              if (seenAt && buffer == '') return INVALID_AUTHORITY;
              pointer -= arrayFrom(buffer).length + 1;
              buffer = '';
              state = HOST;
            } else buffer += chr;
            break;

          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme == 'file') {
              state = FILE_HOST;
              continue;
            } else if (chr == ':' && !seenBracket) {
              if (buffer == '') return INVALID_HOST;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PORT;
              if (stateOverride == HOSTNAME) return;
            } else if (
              chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
              (chr == '\\' && url.isSpecial())
            ) {
              if (url.isSpecial() && buffer == '') return INVALID_HOST;
              if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PATH_START;
              if (stateOverride) return;
              continue;
            } else {
              if (chr == '[') seenBracket = true;
              else if (chr == ']') seenBracket = false;
              buffer += chr;
            } break;

          case PORT:
            if (exec(DIGIT, chr)) {
              buffer += chr;
            } else if (
              chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
              (chr == '\\' && url.isSpecial()) ||
              stateOverride
            ) {
              if (buffer != '') {
                var port = parseInt$1(buffer, 10);
                if (port > 0xFFFF) return INVALID_PORT;
                url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
                buffer = '';
              }
              if (stateOverride) return;
              state = PATH_START;
              continue;
            } else return INVALID_PORT;
            break;

          case FILE:
            url.scheme = 'file';
            if (chr == '/' || chr == '\\') state = FILE_SLASH;
            else if (base && base.scheme == 'file') {
              if (chr == EOF) {
                url.host = base.host;
                url.path = arraySlice$1(base.path);
                url.query = base.query;
              } else if (chr == '?') {
                url.host = base.host;
                url.path = arraySlice$1(base.path);
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.host = base.host;
                url.path = arraySlice$1(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                if (!startsWithWindowsDriveLetter(join(arraySlice$1(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySlice$1(base.path);
                  url.shortenPath();
                }
                state = PATH;
                continue;
              }
            } else {
              state = PATH;
              continue;
            } break;

          case FILE_SLASH:
            if (chr == '/' || chr == '\\') {
              state = FILE_HOST;
              break;
            }
            if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice$1(codePoints, pointer), ''))) {
              if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
              else url.host = base.host;
            }
            state = PATH;
            continue;

          case FILE_HOST:
            if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH;
              } else if (buffer == '') {
                url.host = '';
                if (stateOverride) return;
                state = PATH_START;
              } else {
                failure = url.parseHost(buffer);
                if (failure) return failure;
                if (url.host == 'localhost') url.host = '';
                if (stateOverride) return;
                buffer = '';
                state = PATH_START;
              } continue;
            } else buffer += chr;
            break;

          case PATH_START:
            if (url.isSpecial()) {
              state = PATH;
              if (chr != '/' && chr != '\\') continue;
            } else if (!stateOverride && chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              state = PATH;
              if (chr != '/') continue;
            } break;

          case PATH:
            if (
              chr == EOF || chr == '/' ||
              (chr == '\\' && url.isSpecial()) ||
              (!stateOverride && (chr == '?' || chr == '#'))
            ) {
              if (isDoubleDot(buffer)) {
                url.shortenPath();
                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else if (isSingleDot(buffer)) {
                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else {
                if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                  if (url.host) url.host = '';
                  buffer = charAt$1(buffer, 0) + ':'; // normalize windows drive letter
                }
                push(url.path, buffer);
              }
              buffer = '';
              if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
                while (url.path.length > 1 && url.path[0] === '') {
                  shift(url.path);
                }
              }
              if (chr == '?') {
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.fragment = '';
                state = FRAGMENT;
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet);
            } break;

          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
            } break;

          case QUERY:
            if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              if (chr == "'" && url.isSpecial()) url.query += '%27';
              else if (chr == '#') url.query += '%23';
              else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
            } break;

          case FRAGMENT:
            if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
            break;
        }

        pointer++;
      }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function (input) {
      var result, codePoints, index;
      if (charAt$1(input, 0) == '[') {
        if (charAt$1(input, input.length - 1) != ']') return INVALID_HOST;
        result = parseIPv6(stringSlice(input, 1, -1));
        if (!result) return INVALID_HOST;
        this.host = result;
      // opaque host
      } else if (!this.isSpecial()) {
        if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
        result = '';
        codePoints = arrayFrom(input);
        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
        }
        this.host = result;
      } else {
        input = toASCII(input);
        if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        this.host = result;
      }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function () {
      return this.username != '' || this.password != '';
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function () {
      return hasOwn(specialSchemes, this.scheme);
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function () {
      var path = this.path;
      var pathSize = path.length;
      if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
        path.length--;
      }
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function () {
      var url = this;
      var scheme = url.scheme;
      var username = url.username;
      var password = url.password;
      var host = url.host;
      var port = url.port;
      var path = url.path;
      var query = url.query;
      var fragment = url.fragment;
      var output = scheme + ':';
      if (host !== null) {
        output += '//';
        if (url.includesCredentials()) {
          output += username + (password ? ':' + password : '') + '@';
        }
        output += serializeHost(host);
        if (port !== null) output += ':' + port;
      } else if (scheme == 'file') output += '//';
      output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
      if (query !== null) output += '?' + query;
      if (fragment !== null) output += '#' + fragment;
      return output;
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function (href) {
      var failure = this.parse(href);
      if (failure) throw TypeError$1(failure);
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function () {
      var scheme = this.scheme;
      var port = this.port;
      if (scheme == 'blob') try {
        return new URLConstructor(scheme.path[0]).origin;
      } catch (error) {
        return 'null';
      }
      if (scheme == 'file' || !this.isSpecial()) return 'null';
      return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function () {
      return this.scheme + ':';
    },
    setProtocol: function (protocol) {
      this.parse($toString(protocol) + ':', SCHEME_START);
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function () {
      return this.username;
    },
    setUsername: function (username) {
      var codePoints = arrayFrom($toString(username));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function () {
      return this.password;
    },
    setPassword: function (password) {
      var codePoints = arrayFrom($toString(password));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function () {
      var host = this.host;
      var port = this.port;
      return host === null ? ''
        : port === null ? serializeHost(host)
        : serializeHost(host) + ':' + port;
    },
    setHost: function (host) {
      if (this.cannotBeABaseURL) return;
      this.parse(host, HOST);
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function () {
      var host = this.host;
      return host === null ? '' : serializeHost(host);
    },
    setHostname: function (hostname) {
      if (this.cannotBeABaseURL) return;
      this.parse(hostname, HOSTNAME);
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function () {
      var port = this.port;
      return port === null ? '' : $toString(port);
    },
    setPort: function (port) {
      if (this.cannotHaveUsernamePasswordPort()) return;
      port = $toString(port);
      if (port == '') this.port = null;
      else this.parse(port, PORT);
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function () {
      var path = this.path;
      return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    },
    setPathname: function (pathname) {
      if (this.cannotBeABaseURL) return;
      this.path = [];
      this.parse(pathname, PATH_START);
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function () {
      var query = this.query;
      return query ? '?' + query : '';
    },
    setSearch: function (search) {
      search = $toString(search);
      if (search == '') {
        this.query = null;
      } else {
        if ('?' == charAt$1(search, 0)) search = stringSlice(search, 1);
        this.query = '';
        this.parse(search, QUERY);
      }
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function () {
      return this.searchParams.facade;
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function () {
      var fragment = this.fragment;
      return fragment ? '#' + fragment : '';
    },
    setHash: function (hash) {
      hash = $toString(hash);
      if (hash == '') {
        this.fragment = null;
        return;
      }
      if ('#' == charAt$1(hash, 0)) hash = stringSlice(hash, 1);
      this.fragment = '';
      this.parse(hash, FRAGMENT);
    },
    update: function () {
      this.query = this.searchParams.serialize() || null;
    }
  };

  // `URL` constructor
  // https://url.spec.whatwg.org/#url-class
  var URLConstructor = function URL(url /* , base */) {
    var that = anInstance(this, URLPrototype);
    var base = validateArgumentsLength$2(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState(that, new URLState(url, false, base));
    if (!DESCRIPTORS$2) {
      that.href = state.serialize();
      that.origin = state.getOrigin();
      that.protocol = state.getProtocol();
      that.username = state.getUsername();
      that.password = state.getPassword();
      that.host = state.getHost();
      that.hostname = state.getHostname();
      that.port = state.getPort();
      that.pathname = state.getPathname();
      that.search = state.getSearch();
      that.searchParams = state.getSearchParams();
      that.hash = state.getHash();
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var accessorDescriptor = function (getter, setter) {
    return {
      get: function () {
        return getInternalURLState(this)[getter]();
      },
      set: setter && function (value) {
        return getInternalURLState(this)[setter](value);
      },
      configurable: true,
      enumerable: true
    };
  };

  if (DESCRIPTORS$2) {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
  }

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
    return getInternalURLState(this).serialize();
  }, { enumerable: true });

  // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior
  defineBuiltIn(URLPrototype, 'toString', function toString() {
    return getInternalURLState(this).serialize();
  }, { enumerable: true });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
  }

  setToStringTag(URLConstructor, 'URL');

  $$7({ global: true, constructor: true, forced: !USE_NATIVE_URL$1, sham: !DESCRIPTORS$2 }, {
    URL: URLConstructor
  });

  var $$6 = _export;
  var getBuiltIn = getBuiltIn$h;
  var fails$3 = fails$x;
  var validateArgumentsLength$1 = validateArgumentsLength$5;
  var toString$1 = toString$b;
  var USE_NATIVE_URL = urlConstructorDetection;

  var URL$1 = getBuiltIn('URL');

  // https://github.com/nodejs/node/issues/47505
  // https://github.com/denoland/deno/issues/18893
  var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails$3(function () {
    URL$1.canParse();
  });

  // `URL.canParse` method
  // https://url.spec.whatwg.org/#dom-url-canparse
  $$6({ target: 'URL', stat: true, forced: !THROWS_WITHOUT_ARGUMENTS }, {
    canParse: function canParse(url) {
      var length = validateArgumentsLength$1(arguments.length, 1);
      var urlString = toString$1(url);
      var base = length < 2 || arguments[1] === undefined ? undefined : toString$1(arguments[1]);
      try {
        return !!new URL$1(urlString, base);
      } catch (error) {
        return false;
      }
    }
  });

  var path$6 = path$n;

  var url$5 = path$6.URL;

  var parent$k = url$5;

  var url$4 = parent$k;

  var parent$j = url$4;

  var url$3 = parent$j;

  var parent$i = url$3;

  var url$2 = parent$i;

  var url$1 = url$2;

  var url = url$1;

  var _URL = /*@__PURE__*/getDefaultExportFromCjs(url);

  var MediaPlayerController = /*#__PURE__*/function () {
    function MediaPlayerController(ctx) {
      _classCallCheck(this, MediaPlayerController);
      _defineProperty(this, "config", {});
      _defineProperty(this, "video", void 0);
      _defineProperty(this, "mediaSource", void 0);
      _defineProperty(this, "videoSourceBuffer", void 0);
      _defineProperty(this, "audioSourceBuffer", void 0);
      _defineProperty(this, "buffer", void 0);
      _defineProperty(this, "eventBus", void 0);
      _defineProperty(this, "isFirstRequestCompleted", false);
      _defineProperty(this, "mediaDuration", 0);
      _defineProperty(this, "timeRangeUtils", void 0);
      _defineProperty(this, "currentStreamId", 0);
      _defineProperty(this, "Mpd", void 0);
      this.config = ctx.context;
      if (this.config.video) {
        this.video = this.config.video;
      }
      this.setup();
      this.initEvent();
      this.initPlayer();
    }
    _createClass(MediaPlayerController, [{
      key: "setup",
      value: function setup() {
        this.mediaSource = new MediaSource();
        // 单例模式
        // this.buffer = new MediaPlayerBuffer({context: {}}, ...args)
        this.buffer = factory$2().getInstance();
        // 单例模式
        // this.eventBus = new EventBus({context: {}}, ...args)
        this.eventBus = factory$b().getInstance();
        // 单例模式
        // this.timeRangeUtils = new TimeRangeUtil({context: {}}, ...args)
        this.timeRangeUtils = factory$4().getInstance();
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this = this;
        this.eventBus.on(EventConstants.BUFFER_APPENDED, function (id) {
          if (!_this.videoSourceBuffer.updating && !_this.audioSourceBuffer.updating) {
            _this.appendSource();
            _this.currentStreamId = id;
          }
        }, this);
        this.eventBus.on(EventConstants.FIRST_REQUEST_COMPLETED, function () {
          _this.isFirstRequestCompleted = true;
        }, this);
        this.eventBus.on(EventConstants.MEDIA_PLAYBACK_FINISHED, this.onMediaPlaybackFinished, this);
        this.eventBus.on(EventConstants.MANIFEST_PARSE_COMPLETED, function (manifest, duration, Mpd) {
          _this.mediaDuration = duration;
          _this.Mpd = Mpd;
          if (_this.mediaSource.readyState === 'open') {
            // this.mediaSource.duration = duration
            _this.setMediaSource();
          }
        }, this);
      }
    }, {
      key: "initPlayer",
      value: function initPlayer() {
        this.video.src = _URL.createObjectURL(this.mediaSource);
        this.video.pause();
        this.mediaSource.addEventListener('sourceopen', this.onSourceopen.bind(this));
        // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
        this.video.addEventListener('seeking', this.onMediaSeeking.bind(this));
      }
      /**
       * @description 配置MediaSource的相关选项和属性
       */
    }, {
      key: "setMediaSource",
      value: function setMediaSource() {
        this.mediaSource.duration = this.mediaDuration;
        this.mediaSource.setLiveSeekableRange(0, this.mediaDuration);
      }
    }, {
      key: "getVideoBuffered",
      value: function getVideoBuffered(video) {
        var buffer = this.video.buffered;
        var res = [];
        for (var i = 0; i < buffer.length; i++) {
          var start = buffer.start(i);
          var end = buffer.end(i);
          res.push({
            start: start,
            end: end
          });
        }
        return res;
      }
    }, {
      key: "appendSource",
      value: function appendSource() {
        var data = this.buffer.top();
        if (data) {
          this.buffer.delete(data);
          this.appendVideoSource(data.video);
          this.appendAudioSource(data.audio);
        }
      }
    }, {
      key: "appendVideoSource",
      value: function appendVideoSource(data) {
        this.videoSourceBuffer.appendBuffer(new Uint8Array(data));
      }
    }, {
      key: "appendAudioSource",
      value: function appendAudioSource(data) {
        this.audioSourceBuffer.appendBuffer(new Uint8Array(data));
      }
      /**
       * @description 当进度条发生跳转时触发
       * @param { EventTarget} e
       */
    }, {
      key: "onMediaSeeking",
      value: function onMediaSeeking(e) {
        var currentTime = this.video.currentTime;
        console.log(currentTime);
        var _this$timeRangeUtils$ = this.timeRangeUtils.getSegmentAndStreamIndexByTime(this.currentStreamId, currentTime, this.Mpd),
          _this$timeRangeUtils$2 = _slicedToArray(_this$timeRangeUtils$, 2),
          streamId = _this$timeRangeUtils$2[0],
          mediaId = _this$timeRangeUtils$2[1];
        console.log(streamId, mediaId);
        var ranges = this.getVideoBuffered(this.video);
        if (!this.timeRangeUtils.inVideoBuffered(currentTime, ranges)) {
          console.log('超出缓存范围');
          this.buffer.clear();
          this.eventBus.trigger(EventConstants.SEGEMTN_REQUEST, [streamId, mediaId]);
        } else {
          console.log('在缓存范围之内');
        }
      }
    }, {
      key: "onSourceopen",
      value: function onSourceopen(e) {
        this.videoSourceBuffer = this.mediaSource.addSourceBuffer('video/mp4; codecs="avc1.64001E"');
        this.audioSourceBuffer = this.mediaSource.addSourceBuffer('audio/mp4; codecs="mp4a.40.2"');
        this.videoSourceBuffer.addEventListener('updateend', this.onUpdateend.bind(this));
        this.audioSourceBuffer.addEventListener('updateend', this.onUpdateend.bind(this));
      }
    }, {
      key: "onUpdateend",
      value: function onUpdateend() {
        if (!this.videoSourceBuffer.updating && !this.audioSourceBuffer.updating) {
          if (this.isFirstRequestCompleted) {
            var ranges = this.getVideoBuffered(this.video);
            this.eventBus.trigger(EventConstants.SEGMENT_CONSUMED, ranges);
          }
          this.appendSource();
        }
      }
    }, {
      key: "onMediaPlaybackFinished",
      value: function onMediaPlaybackFinished() {
        // this.mediaSource.endOfStream()
        _URL.revokeObjectURL(this.video.src);
        console.log('播放流加载结束');
      }
    }]);
    return MediaPlayerController;
  }();
  var factory$1 = FactoryMaker.getClassFactory(MediaPlayerController);

  /**
   * @description 整个dash处理流程的入口类MediaPlayer,类似于项目的中转中心，用于接收任务并且将任务分配给不同的解析器去完成
   */
  var MediaPlayer$1 = /*#__PURE__*/function () {
    function MediaPlayer(ctx) {
      _classCallCheck(this, MediaPlayer);
      _defineProperty(this, "urlLoader", void 0);
      _defineProperty(this, "eventBus", void 0);
      _defineProperty(this, "dashParser", void 0);
      _defineProperty(this, "streamController", void 0);
      _defineProperty(this, "mediaPlayerController", void 0);
      _defineProperty(this, "video", void 0);
      _defineProperty(this, "buffer", void 0);
      // 私有属性
      _defineProperty(this, "config", {});
      _defineProperty(this, "firstCurrentRequest", 0);
      // 当前视频流的具体ID，也就是在请求第几个Period媒体片段
      _defineProperty(this, "currentStreamId", 0);
      // 媒体的总时长 -- duration
      _defineProperty(this, "duration", 0);
      this.config = ctx.context;
      this.setup();
      this.initializeEvent();
    }
    //初始化类
    _createClass(MediaPlayer, [{
      key: "setup",
      value: function setup() {
        // 单例模式
        // this.urlLoader = new URLLoader({context: {}}, ...args)
        this.urlLoader = factory$9().getInstance();
        // 单例模式
        // this.eventBus = new EventBus({context: {}}, ...args)
        this.eventBus = factory$b().getInstance();
        // 单例模式
        // this.dashParser = new DashParser({context: { ignoreRoot: true }}, ...args)
        // ignoreRoot -> 忽略Document节点，从MPD开始作为根节点
        this.dashParser = factory$6({
          ignoreRoot: true
        }).getInstance();
        // 工厂模式
        // this.streamController = new StreamController({context: { num: 23 }}, ...args)
        this.streamController = factory$3({
          num: 23
        }).create();
        // 工厂模式
        // this.mediaPlayerController = new MediaPlayerController({context: {}}, ...args)
        // this.mediaPlayerController = MediaPlayerControllerFactory().create()
        // 单例模式
        // this.buffer = new MediaPlayerBuffer({context: {}}, ...args)
        this.buffer = factory$2().getInstance();
      }
    }, {
      key: "initializeEvent",
      value: function initializeEvent() {
        this.eventBus.on(EventConstants.MANIFEST_LOADED, this.onManifestLoaded, this);
        this.eventBus.on(EventConstants.SEGEMTN_LOADED, this.onSegmentLoaded, this);
      }
    }, {
      key: "resetEvent",
      value: function resetEvent() {
        this.eventBus.off(EventConstants.MANIFEST_LOADED, this.onManifestLoaded, this);
        this.eventBus.off(EventConstants.SEGEMTN_LOADED, this.onSegmentLoaded, this);
      }
    }, {
      key: "onSegmentLoaded",
      value: function onSegmentLoaded(res) {
        console.log('加载Segment成功', res.mediaId);
        this.firstCurrentRequest++;
        if (this.firstCurrentRequest === 23) {
          this.eventBus.trigger(EventConstants.FIRST_REQUEST_COMPLETED);
        }
        var data = res.data;
        var id = res.streamId;
        var videoBuffer = data[0];
        var audioBuffer = data[1];
        this.currentStreamId = id;
        this.buffer.push({
          video: videoBuffer,
          audio: audioBuffer,
          streamId: res.streamId
        });
        this.eventBus.trigger(EventConstants.BUFFER_APPENDED, this.currentStreamId);
      }
      // MPD文件请求成功获得对应的data数据
    }, {
      key: "onManifestLoaded",
      value: function onManifestLoaded(data) {
        console.log(data);
        var manifest = this.dashParser.parse(data);
        console.log(manifest);
        // let res = this.streamController.generateSegmentRequestStruct(manifest as Mpd)
        // console.log(res)
        this.duration = this.dashParser.getTotalDuration(manifest);
        this.eventBus.trigger(EventConstants.MANIFEST_PARSE_COMPLETED, manifest, this.duration, manifest);
      }
      /**
       * @description 发送MPD文件的网络请求，我要做的事情很纯粹，具体实现细节由各个Loader去具体实现
       * @param url
       */
    }, {
      key: "attachSource",
      value: function attachSource(url) {
        this.eventBus.trigger(EventConstants.SOURCE_ATTACHED, url);
        this.urlLoader.load({
          url: url,
          responseType: 'text'
        }, 'Manifest');
      }
      /**
       * @description 让MediaPlayer类去接管传入的video dom元素
       * @param video
       */
    }, {
      key: "attachVideo",
      value: function attachVideo(video) {
        this.video = video;
        // 工厂模式
        // this.mediaPlayerController = new MediaPlayerController({context: {video: video}}, ...args)
        this.mediaPlayerController = factory$1({
          video: video
        }).create();
      }
    }]);
    return MediaPlayer;
  }();
  var factory = FactoryMaker.getClassFactory(MediaPlayer$1);

  var mp4box_all = {};

  (function (exports) {
  	// file:src/log.js
  	/* 
  	 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	var Log = (function (){
  			var start = new Date();
  			var LOG_LEVEL_ERROR 	= 4;
  			var LOG_LEVEL_WARNING 	= 3;
  			var LOG_LEVEL_INFO 		= 2;
  			var LOG_LEVEL_DEBUG		= 1;
  			var log_level = LOG_LEVEL_ERROR;
  			var logObject = {
  				setLogLevel : function(level) {
  					if (level == this.debug) log_level = LOG_LEVEL_DEBUG;
  					else if (level == this.info) log_level = LOG_LEVEL_INFO;
  					else if (level == this.warn) log_level = LOG_LEVEL_WARNING;
  					else if (level == this.error) log_level = LOG_LEVEL_ERROR;
  					else log_level = LOG_LEVEL_ERROR;
  				},
  				debug : function(module, msg) {
  					if (console.debug === undefined) {
  						console.debug = console.log;
  					}
  					if (LOG_LEVEL_DEBUG >= log_level) {
  						console.debug("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
  					}
  				},
  				log : function(module, msg) {
  					this.debug(module.msg);
  				},
  				info : function(module, msg) {
  					if (LOG_LEVEL_INFO >= log_level) {
  						console.info("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
  					}
  				},
  				warn : function(module, msg) {
  					if (LOG_LEVEL_WARNING >= log_level) {
  						console.warn("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
  					}
  				},
  				error : function(module, msg) {
  					if (LOG_LEVEL_ERROR >= log_level) {
  						console.error("["+Log.getDurationString(new Date()-start,1000)+"]","["+module+"]",msg);
  					}
  				}
  			};
  			return logObject;
  		})();
  		
  	/* Helper function to print a duration value in the form H:MM:SS.MS */
  	Log.getDurationString = function(duration, _timescale) {
  		var neg;
  		/* Helper function to print a number on a fixed number of digits */
  		function pad(number, length) {
  			var str = '' + number;
  			var a = str.split('.');		
  			while (a[0].length < length) {
  				a[0] = '0' + a[0];
  			}
  			return a.join('.');
  		}
  		if (duration < 0) {
  			neg = true;
  			duration = -duration;
  		} else {
  			neg = false;	
  		}
  		var timescale = _timescale || 1;
  		var duration_sec = duration/timescale;
  		var hours = Math.floor(duration_sec/3600);
  		duration_sec -= hours * 3600;
  		var minutes = Math.floor(duration_sec/60);
  		duration_sec -= minutes * 60;		
  		var msec = duration_sec*1000;
  		duration_sec = Math.floor(duration_sec);
  		msec -= duration_sec*1000;
  		msec = Math.floor(msec);
  		return (neg ? "-": "")+hours+":"+pad(minutes,2)+":"+pad(duration_sec,2)+"."+pad(msec,3);
  	};
  		
  	/* Helper function to stringify HTML5 TimeRanges objects */	
  	Log.printRanges = function(ranges) {
  		var length = ranges.length;
  		if (length > 0) {
  			var str = "";
  			for (var i = 0; i < length; i++) {
  			  if (i > 0) str += ",";
  			  str += "["+Log.getDurationString(ranges.start(i))+ ","+Log.getDurationString(ranges.end(i))+"]";
  			}
  			return str;
  		} else {
  			return "(empty)";
  		}
  	};

  	{
  		exports.Log = Log;
  	}
  	// file:src/stream.js
  	var MP4BoxStream = function(arrayBuffer) {
  	  if (arrayBuffer instanceof ArrayBuffer) {
  	    this.buffer = arrayBuffer;
  	    this.dataview = new DataView(arrayBuffer);
  	  } else {
  	    throw ("Needs an array buffer");
  	  }
  	  this.position = 0;
  	};

  	/*************************************************************************
  	  Common API between MultiBufferStream and SimpleStream
  	 *************************************************************************/
  	MP4BoxStream.prototype.getPosition = function() {
  	  return this.position;
  	};

  	MP4BoxStream.prototype.getEndPosition = function() {
  	  return this.buffer.byteLength;
  	};

  	MP4BoxStream.prototype.getLength = function() {
  	  return this.buffer.byteLength;
  	};

  	MP4BoxStream.prototype.seek = function (pos) {
  	  var npos = Math.max(0, Math.min(this.buffer.byteLength, pos));
  	  this.position = (isNaN(npos) || !isFinite(npos)) ? 0 : npos;
  	  return true;
  	};

  	MP4BoxStream.prototype.isEos = function () {
  	  return this.getPosition() >= this.getEndPosition();
  	};

  	/*************************************************************************
  	  Read methods, simimar to DataStream but simpler
  	 *************************************************************************/
  	MP4BoxStream.prototype.readAnyInt = function(size, signed) {
  	  var res = 0;
  	  if (this.position + size <= this.buffer.byteLength) {
  	    switch (size) {
  	      case 1:
  	        if (signed) {
  	          res = this.dataview.getInt8(this.position);
  	        } else {
  	          res = this.dataview.getUint8(this.position);
  	        }
  	        break;
  	      case 2:
  	        if (signed) {
  	          res = this.dataview.getInt16(this.position);
  	        } else {
  	          res = this.dataview.getUint16(this.position);
  	        }
  	        break;
  	      case 3:
  	        if (signed) {
  	          throw ("No method for reading signed 24 bits values");
  	        } else {
  	          res = this.dataview.getUint8(this.position) << 16;
  	          res |= this.dataview.getUint8(this.position+1) << 8;
  	          res |= this.dataview.getUint8(this.position+2);
  	        }
  	        break;
  	      case 4:
  	        if (signed) {
  	          res = this.dataview.getInt32(this.position);
  	        } else {
  	          res = this.dataview.getUint32(this.position);
  	        }
  	        break;
  	      case 8:
  	        if (signed) {
  	          throw ("No method for reading signed 64 bits values");
  	        } else {
  	          res = this.dataview.getUint32(this.position) << 32;
  	          res |= this.dataview.getUint32(this.position+4);
  	        }
  	        break;
  	      default:
  	        throw ("readInt method not implemented for size: "+size);
  	    }
  	    this.position+= size;
  	    return res;
  	  } else {
  	    throw ("Not enough bytes in buffer");
  	  }
  	};

  	MP4BoxStream.prototype.readUint8 = function() {
  	  return this.readAnyInt(1, false);
  	};

  	MP4BoxStream.prototype.readUint16 = function() {
  	  return this.readAnyInt(2, false);
  	};

  	MP4BoxStream.prototype.readUint24 = function() {
  	  return this.readAnyInt(3, false);
  	};

  	MP4BoxStream.prototype.readUint32 = function() {
  	  return this.readAnyInt(4, false);
  	};

  	MP4BoxStream.prototype.readUint64 = function() {
  	  return this.readAnyInt(8, false);
  	};

  	MP4BoxStream.prototype.readString = function(length) {
  	  if (this.position + length <= this.buffer.byteLength) {
  	    var s = "";
  	    for (var i = 0; i < length; i++) {
  	      s += String.fromCharCode(this.readUint8());
  	    }
  	    return s;
  	  } else {
  	    throw ("Not enough bytes in buffer");
  	  }
  	};

  	MP4BoxStream.prototype.readCString = function() {
  	  var arr = [];
  	  while(true) {
  	    var b = this.readUint8();
  	    if (b !== 0) {
  	      arr.push(b);
  	    } else {
  	      break;
  	    }
  	  }
  	  return String.fromCharCode.apply(null, arr); 
  	};

  	MP4BoxStream.prototype.readInt8 = function() {
  	  return this.readAnyInt(1, true);
  	};

  	MP4BoxStream.prototype.readInt16 = function() {
  	  return this.readAnyInt(2, true);
  	};

  	MP4BoxStream.prototype.readInt32 = function() {
  	  return this.readAnyInt(4, true);
  	};

  	MP4BoxStream.prototype.readInt64 = function() {
  	  return this.readAnyInt(8, false);
  	};

  	MP4BoxStream.prototype.readUint8Array = function(length) {
  	  var arr = new Uint8Array(length);
  	  for (var i = 0; i < length; i++) {
  	    arr[i] = this.readUint8();
  	  }
  	  return arr;
  	};

  	MP4BoxStream.prototype.readInt16Array = function(length) {
  	  var arr = new Int16Array(length);
  	  for (var i = 0; i < length; i++) {
  	    arr[i] = this.readInt16();
  	  }
  	  return arr;
  	};

  	MP4BoxStream.prototype.readUint16Array = function(length) {
  	  var arr = new Int16Array(length);
  	  for (var i = 0; i < length; i++) {
  	    arr[i] = this.readUint16();
  	  }
  	  return arr;
  	};

  	MP4BoxStream.prototype.readUint32Array = function(length) {
  	  var arr = new Uint32Array(length);
  	  for (var i = 0; i < length; i++) {
  	    arr[i] = this.readUint32();
  	  }
  	  return arr;
  	};

  	MP4BoxStream.prototype.readInt32Array = function(length) {
  	  var arr = new Int32Array(length);
  	  for (var i = 0; i < length; i++) {
  	    arr[i] = this.readInt32();
  	  }
  	  return arr;
  	};

  	{
  	  exports.MP4BoxStream = MP4BoxStream;
  	}// file:src/DataStream.js
  	/**
  	  DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
  	  It's like a file-like DataView on steroids.

  	  @param {ArrayBuffer} arrayBuffer ArrayBuffer to read from.
  	  @param {?Number} byteOffset Offset from arrayBuffer beginning for the DataStream.
  	  @param {?Boolean} endianness DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN (the default).
  	  */
  	var DataStream = function(arrayBuffer, byteOffset, endianness) {
  	  this._byteOffset = byteOffset || 0;
  	  if (arrayBuffer instanceof ArrayBuffer) {
  	    this.buffer = arrayBuffer;
  	  } else if (typeof arrayBuffer == "object") {
  	    this.dataView = arrayBuffer;
  	    if (byteOffset) {
  	      this._byteOffset += byteOffset;
  	    }
  	  } else {
  	    this.buffer = new ArrayBuffer(arrayBuffer || 0);
  	  }
  	  this.position = 0;
  	  this.endianness = endianness == null ? DataStream.LITTLE_ENDIAN : endianness;
  	};
  	DataStream.prototype = {};

  	DataStream.prototype.getPosition = function() {
  	  return this.position;
  	};

  	/**
  	  Internal function to resize the DataStream buffer when required.
  	  @param {number} extra Number of bytes to add to the buffer allocation.
  	  @return {null}
  	  */
  	DataStream.prototype._realloc = function(extra) {
  	  if (!this._dynamicSize) {
  	    return;
  	  }
  	  var req = this._byteOffset + this.position + extra;
  	  var blen = this._buffer.byteLength;
  	  if (req <= blen) {
  	    if (req > this._byteLength) {
  	      this._byteLength = req;
  	    }
  	    return;
  	  }
  	  if (blen < 1) {
  	    blen = 1;
  	  }
  	  while (req > blen) {
  	    blen *= 2;
  	  }
  	  var buf = new ArrayBuffer(blen);
  	  var src = new Uint8Array(this._buffer);
  	  var dst = new Uint8Array(buf, 0, src.length);
  	  dst.set(src);
  	  this.buffer = buf;
  	  this._byteLength = req;
  	};

  	/**
  	  Internal function to trim the DataStream buffer when required.
  	  Used for stripping out the extra bytes from the backing buffer when
  	  the virtual byteLength is smaller than the buffer byteLength (happens after
  	  growing the buffer with writes and not filling the extra space completely).

  	  @return {null}
  	  */
  	DataStream.prototype._trimAlloc = function() {
  	  if (this._byteLength == this._buffer.byteLength) {
  	    return;
  	  }
  	  var buf = new ArrayBuffer(this._byteLength);
  	  var dst = new Uint8Array(buf);
  	  var src = new Uint8Array(this._buffer, 0, dst.length);
  	  dst.set(src);
  	  this.buffer = buf;
  	};


  	/**
  	  Big-endian const to use as default endianness.
  	  @type {boolean}
  	  */
  	DataStream.BIG_ENDIAN = false;

  	/**
  	  Little-endian const to use as default endianness.
  	  @type {boolean}
  	  */
  	DataStream.LITTLE_ENDIAN = true;

  	/**
  	  Virtual byte length of the DataStream backing buffer.
  	  Updated to be max of original buffer size and last written size.
  	  If dynamicSize is false is set to buffer size.
  	  @type {number}
  	  */
  	DataStream.prototype._byteLength = 0;

  	/**
  	  Returns the byte length of the DataStream object.
  	  @type {number}
  	  */
  	Object.defineProperty(DataStream.prototype, 'byteLength',
  	  { get: function() {
  	    return this._byteLength - this._byteOffset;
  	  }});

  	/**
  	  Set/get the backing ArrayBuffer of the DataStream object.
  	  The setter updates the DataView to point to the new buffer.
  	  @type {Object}
  	  */
  	Object.defineProperty(DataStream.prototype, 'buffer',
  	  { get: function() {
  	      this._trimAlloc();
  	      return this._buffer;
  	    },
  	    set: function(v) {
  	      this._buffer = v;
  	      this._dataView = new DataView(this._buffer, this._byteOffset);
  	      this._byteLength = this._buffer.byteLength;
  	    } });

  	/**
  	  Set/get the byteOffset of the DataStream object.
  	  The setter updates the DataView to point to the new byteOffset.
  	  @type {number}
  	  */
  	Object.defineProperty(DataStream.prototype, 'byteOffset',
  	  { get: function() {
  	      return this._byteOffset;
  	    },
  	    set: function(v) {
  	      this._byteOffset = v;
  	      this._dataView = new DataView(this._buffer, this._byteOffset);
  	      this._byteLength = this._buffer.byteLength;
  	    } });

  	/**
  	  Set/get the backing DataView of the DataStream object.
  	  The setter updates the buffer and byteOffset to point to the DataView values.
  	  @type {Object}
  	  */
  	Object.defineProperty(DataStream.prototype, 'dataView',
  	  { get: function() {
  	      return this._dataView;
  	    },
  	    set: function(v) {
  	      this._byteOffset = v.byteOffset;
  	      this._buffer = v.buffer;
  	      this._dataView = new DataView(this._buffer, this._byteOffset);
  	      this._byteLength = this._byteOffset + v.byteLength;
  	    } });

  	/**
  	  Sets the DataStream read/write position to given position.
  	  Clamps between 0 and DataStream length.

  	  @param {number} pos Position to seek to.
  	  @return {null}
  	  */
  	DataStream.prototype.seek = function(pos) {
  	  var npos = Math.max(0, Math.min(this.byteLength, pos));
  	  this.position = (isNaN(npos) || !isFinite(npos)) ? 0 : npos;
  	};

  	/**
  	  Returns true if the DataStream seek pointer is at the end of buffer and
  	  there's no more data to read.

  	  @return {boolean} True if the seek pointer is at the end of the buffer.
  	  */
  	DataStream.prototype.isEof = function() {
  	  return (this.position >= this._byteLength);
  	};


  	/**
  	  Maps a Uint8Array into the DataStream buffer.

  	  Nice for quickly reading in data.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Uint8Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapUint8Array = function(length) {
  	  this._realloc(length * 1);
  	  var arr = new Uint8Array(this._buffer, this.byteOffset+this.position, length);
  	  this.position += length * 1;
  	  return arr;
  	};


  	/**
  	  Reads an Int32Array of desired length and endianness from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Int32Array.
  	 */
  	DataStream.prototype.readInt32Array = function(length, e) {
  	  length = length == null ? (this.byteLength-this.position / 4) : length;
  	  var arr = new Int32Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += arr.byteLength;
  	  return arr;
  	};

  	/**
  	  Reads an Int16Array of desired length and endianness from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Int16Array.
  	 */
  	DataStream.prototype.readInt16Array = function(length, e) {
  	  length = length == null ? (this.byteLength-this.position / 2) : length;
  	  var arr = new Int16Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += arr.byteLength;
  	  return arr;
  	};

  	/**
  	  Reads an Int8Array of desired length from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Int8Array.
  	 */
  	DataStream.prototype.readInt8Array = function(length) {
  	  length = length == null ? (this.byteLength-this.position) : length;
  	  var arr = new Int8Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  this.position += arr.byteLength;
  	  return arr;
  	};

  	/**
  	  Reads a Uint32Array of desired length and endianness from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Uint32Array.
  	 */
  	DataStream.prototype.readUint32Array = function(length, e) {
  	  length = length == null ? (this.byteLength-this.position / 4) : length;
  	  var arr = new Uint32Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += arr.byteLength;
  	  return arr;
  	};

  	/**
  	  Reads a Uint16Array of desired length and endianness from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Uint16Array.
  	 */
  	DataStream.prototype.readUint16Array = function(length, e) {
  	  length = length == null ? (this.byteLength-this.position / 2) : length;
  	  var arr = new Uint16Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += arr.byteLength;
  	  return arr;
  	};

  	/**
  	  Reads a Uint8Array of desired length from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Uint8Array.
  	 */
  	DataStream.prototype.readUint8Array = function(length) {
  	  length = length == null ? (this.byteLength-this.position) : length;
  	  var arr = new Uint8Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  this.position += arr.byteLength;
  	  return arr;
  	};

  	/**
  	  Reads a Float64Array of desired length and endianness from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Float64Array.
  	 */
  	DataStream.prototype.readFloat64Array = function(length, e) {
  	  length = length == null ? (this.byteLength-this.position / 8) : length;
  	  var arr = new Float64Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += arr.byteLength;
  	  return arr;
  	};

  	/**
  	  Reads a Float32Array of desired length and endianness from the DataStream.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} The read Float32Array.
  	 */
  	DataStream.prototype.readFloat32Array = function(length, e) {
  	  length = length == null ? (this.byteLength-this.position / 4) : length;
  	  var arr = new Float32Array(length);
  	  DataStream.memcpy(arr.buffer, 0,
  	                    this.buffer, this.byteOffset+this.position,
  	                    length*arr.BYTES_PER_ELEMENT);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += arr.byteLength;
  	  return arr;
  	};


  	/**
  	  Reads a 32-bit int from the DataStream with the desired endianness.

  	  @param {?boolean} e Endianness of the number.
  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readInt32 = function(e) {
  	  var v = this._dataView.getInt32(this.position, e == null ? this.endianness : e);
  	  this.position += 4;
  	  return v;
  	};

  	/**
  	  Reads a 16-bit int from the DataStream with the desired endianness.

  	  @param {?boolean} e Endianness of the number.
  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readInt16 = function(e) {
  	  var v = this._dataView.getInt16(this.position, e == null ? this.endianness : e);
  	  this.position += 2;
  	  return v;
  	};

  	/**
  	  Reads an 8-bit int from the DataStream.

  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readInt8 = function() {
  	  var v = this._dataView.getInt8(this.position);
  	  this.position += 1;
  	  return v;
  	};

  	/**
  	  Reads a 32-bit unsigned int from the DataStream with the desired endianness.

  	  @param {?boolean} e Endianness of the number.
  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readUint32 = function(e) {
  	  var v = this._dataView.getUint32(this.position, e == null ? this.endianness : e);
  	  this.position += 4;
  	  return v;
  	};

  	/**
  	  Reads a 16-bit unsigned int from the DataStream with the desired endianness.

  	  @param {?boolean} e Endianness of the number.
  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readUint16 = function(e) {
  	  var v = this._dataView.getUint16(this.position, e == null ? this.endianness : e);
  	  this.position += 2;
  	  return v;
  	};

  	/**
  	  Reads an 8-bit unsigned int from the DataStream.

  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readUint8 = function() {
  	  var v = this._dataView.getUint8(this.position);
  	  this.position += 1;
  	  return v;
  	};

  	/**
  	  Reads a 32-bit float from the DataStream with the desired endianness.

  	  @param {?boolean} e Endianness of the number.
  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readFloat32 = function(e) {
  	  var v = this._dataView.getFloat32(this.position, e == null ? this.endianness : e);
  	  this.position += 4;
  	  return v;
  	};

  	/**
  	  Reads a 64-bit float from the DataStream with the desired endianness.

  	  @param {?boolean} e Endianness of the number.
  	  @return {number} The read number.
  	 */
  	DataStream.prototype.readFloat64 = function(e) {
  	  var v = this._dataView.getFloat64(this.position, e == null ? this.endianness : e);
  	  this.position += 8;
  	  return v;
  	};

  	/**
  	  Native endianness. Either DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN
  	  depending on the platform endianness.

  	  @type {boolean}
  	 */
  	DataStream.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0;

  	/**
  	  Copies byteLength bytes from the src buffer at srcOffset to the
  	  dst buffer at dstOffset.

  	  @param {Object} dst Destination ArrayBuffer to write to.
  	  @param {number} dstOffset Offset to the destination ArrayBuffer.
  	  @param {Object} src Source ArrayBuffer to read from.
  	  @param {number} srcOffset Offset to the source ArrayBuffer.
  	  @param {number} byteLength Number of bytes to copy.
  	 */
  	DataStream.memcpy = function(dst, dstOffset, src, srcOffset, byteLength) {
  	  var dstU8 = new Uint8Array(dst, dstOffset, byteLength);
  	  var srcU8 = new Uint8Array(src, srcOffset, byteLength);
  	  dstU8.set(srcU8);
  	};

  	/**
  	  Converts array to native endianness in-place.

  	  @param {Object} array Typed array to convert.
  	  @param {boolean} arrayIsLittleEndian True if the data in the array is
  	                                       little-endian. Set false for big-endian.
  	  @return {Object} The converted typed array.
  	 */
  	DataStream.arrayToNative = function(array, arrayIsLittleEndian) {
  	  if (arrayIsLittleEndian == this.endianness) {
  	    return array;
  	  } else {
  	    return this.flipArrayEndianness(array);
  	  }
  	};

  	/**
  	  Converts native endianness array to desired endianness in-place.

  	  @param {Object} array Typed array to convert.
  	  @param {boolean} littleEndian True if the converted array should be
  	                                little-endian. Set false for big-endian.
  	  @return {Object} The converted typed array.
  	 */
  	DataStream.nativeToEndian = function(array, littleEndian) {
  	  if (this.endianness == littleEndian) {
  	    return array;
  	  } else {
  	    return this.flipArrayEndianness(array);
  	  }
  	};

  	/**
  	  Flips typed array endianness in-place.

  	  @param {Object} array Typed array to flip.
  	  @return {Object} The converted typed array.
  	 */
  	DataStream.flipArrayEndianness = function(array) {
  	  var u8 = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
  	  for (var i=0; i<array.byteLength; i+=array.BYTES_PER_ELEMENT) {
  	    for (var j=i+array.BYTES_PER_ELEMENT-1, k=i; j>k; j--, k++) {
  	      var tmp = u8[k];
  	      u8[k] = u8[j];
  	      u8[j] = tmp;
  	    }
  	  }
  	  return array;
  	};

  	/**
  	  Seek position where DataStream#readStruct ran into a problem.
  	  Useful for debugging struct parsing.

  	  @type {number}
  	 */
  	DataStream.prototype.failurePosition = 0;

  	String.fromCharCodeUint8 = function(uint8arr) {
  	    var arr = [];
  	    for (var i = 0; i < uint8arr.length; i++) {
  	      arr[i] = uint8arr[i];
  	    }
  	    return String.fromCharCode.apply(null, arr);
  	};
  	/**
  	  Read a string of desired length and encoding from the DataStream.

  	  @param {number} length The length of the string to read in bytes.
  	  @param {?string} encoding The encoding of the string data in the DataStream.
  	                            Defaults to ASCII.
  	  @return {string} The read string.
  	 */
  	DataStream.prototype.readString = function(length, encoding) {
  	  if (encoding == null || encoding == "ASCII") {
  	    return String.fromCharCodeUint8.apply(null, [this.mapUint8Array(length == null ? this.byteLength-this.position : length)]);
  	  } else {
  	    return (new TextDecoder(encoding)).decode(this.mapUint8Array(length));
  	  }
  	};

  	/**
  	  Read null-terminated string of desired length from the DataStream. Truncates
  	  the returned string so that the null byte is not a part of it.

  	  @param {?number} length The length of the string to read.
  	  @return {string} The read string.
  	 */
  	DataStream.prototype.readCString = function(length) {
  	  var blen = this.byteLength-this.position;
  	  var u8 = new Uint8Array(this._buffer, this._byteOffset + this.position);
  	  var len = blen;
  	  if (length != null) {
  	    len = Math.min(length, blen);
  	  }
  	  for (var i = 0; i < len && u8[i] !== 0; i++); // find first zero byte
  	  var s = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(i)]);
  	  if (length != null) {
  	    this.position += len-i;
  	  } else if (i != blen) {
  	    this.position += 1; // trailing zero if not at end of buffer
  	  }
  	  return s;
  	};

  	/* 
  	   TODO: fix endianness for 24/64-bit fields
  	   TODO: check range/support for 64-bits numbers in JavaScript
  	*/
  	var MAX_SIZE = Math.pow(2, 32);

  	DataStream.prototype.readInt64 = function () {
  	  return (this.readInt32()*MAX_SIZE)+this.readUint32();
  	};
  	DataStream.prototype.readUint64 = function () {
  		return (this.readUint32()*MAX_SIZE)+this.readUint32();
  	};

  	DataStream.prototype.readInt64 = function () {
  	  return (this.readUint32()*MAX_SIZE)+this.readUint32();
  	};

  	DataStream.prototype.readUint24 = function () {
  		return (this.readUint8()<<16)+(this.readUint8()<<8)+this.readUint8();
  	};

  	{
  	  exports.DataStream = DataStream;  
  	}
  	// file:src/DataStream-write.js
  	/**
  	  Saves the DataStream contents to the given filename.
  	  Uses Chrome's anchor download property to initiate download.
  	 
  	  @param {string} filename Filename to save as.
  	  @return {null}
  	  */
  	DataStream.prototype.save = function(filename) {
  	  var blob = new Blob([this.buffer]);
  	  if (window.URL && URL.createObjectURL) {
  	      var url = window.URL.createObjectURL(blob);
  	      var a = document.createElement('a');
  	      // Required in Firefox:
  	      document.body.appendChild(a);
  	      a.setAttribute('href', url);
  	      a.setAttribute('download', filename);
  	      // Required in Firefox:
  	      a.setAttribute('target', '_self');
  	      a.click();
  	      window.URL.revokeObjectURL(url);
  	  } else {
  	      throw("DataStream.save: Can't create object URL.");
  	  }
  	};

  	/**
  	  Whether to extend DataStream buffer when trying to write beyond its size.
  	  If set, the buffer is reallocated to twice its current size until the
  	  requested write fits the buffer.
  	  @type {boolean}
  	  */
  	DataStream.prototype._dynamicSize = true;
  	Object.defineProperty(DataStream.prototype, 'dynamicSize',
  	  { get: function() {
  	      return this._dynamicSize;
  	    },
  	    set: function(v) {
  	      if (!v) {
  	        this._trimAlloc();
  	      }
  	      this._dynamicSize = v;
  	    } });

  	/**
  	  Internal function to trim the DataStream buffer when required.
  	  Used for stripping out the first bytes when not needed anymore.

  	  @return {null}
  	  */
  	DataStream.prototype.shift = function(offset) {
  	  var buf = new ArrayBuffer(this._byteLength-offset);
  	  var dst = new Uint8Array(buf);
  	  var src = new Uint8Array(this._buffer, offset, dst.length);
  	  dst.set(src);
  	  this.buffer = buf;
  	  this.position -= offset;
  	};

  	/**
  	  Writes an Int32Array of specified endianness to the DataStream.

  	  @param {Object} arr The array to write.
  	  @param {?boolean} e Endianness of the data to write.
  	 */
  	DataStream.prototype.writeInt32Array = function(arr, e) {
  	  this._realloc(arr.length * 4);
  	  if (arr instanceof Int32Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapInt32Array(arr.length, e);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeInt32(arr[i], e);
  	    }
  	  }
  	};

  	/**
  	  Writes an Int16Array of specified endianness to the DataStream.

  	  @param {Object} arr The array to write.
  	  @param {?boolean} e Endianness of the data to write.
  	 */
  	DataStream.prototype.writeInt16Array = function(arr, e) {
  	  this._realloc(arr.length * 2);
  	  if (arr instanceof Int16Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapInt16Array(arr.length, e);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeInt16(arr[i], e);
  	    }
  	  }
  	};

  	/**
  	  Writes an Int8Array to the DataStream.

  	  @param {Object} arr The array to write.
  	 */
  	DataStream.prototype.writeInt8Array = function(arr) {
  	  this._realloc(arr.length * 1);
  	  if (arr instanceof Int8Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapInt8Array(arr.length);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeInt8(arr[i]);
  	    }
  	  }
  	};

  	/**
  	  Writes a Uint32Array of specified endianness to the DataStream.

  	  @param {Object} arr The array to write.
  	  @param {?boolean} e Endianness of the data to write.
  	 */
  	DataStream.prototype.writeUint32Array = function(arr, e) {
  	  this._realloc(arr.length * 4);
  	  if (arr instanceof Uint32Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapUint32Array(arr.length, e);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeUint32(arr[i], e);
  	    }
  	  }
  	};

  	/**
  	  Writes a Uint16Array of specified endianness to the DataStream.

  	  @param {Object} arr The array to write.
  	  @param {?boolean} e Endianness of the data to write.
  	 */
  	DataStream.prototype.writeUint16Array = function(arr, e) {
  	  this._realloc(arr.length * 2);
  	  if (arr instanceof Uint16Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapUint16Array(arr.length, e);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeUint16(arr[i], e);
  	    }
  	  }
  	};

  	/**
  	  Writes a Uint8Array to the DataStream.

  	  @param {Object} arr The array to write.
  	 */
  	DataStream.prototype.writeUint8Array = function(arr) {
  	  this._realloc(arr.length * 1);
  	  if (arr instanceof Uint8Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapUint8Array(arr.length);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeUint8(arr[i]);
  	    }
  	  }
  	};

  	/**
  	  Writes a Float64Array of specified endianness to the DataStream.

  	  @param {Object} arr The array to write.
  	  @param {?boolean} e Endianness of the data to write.
  	 */
  	DataStream.prototype.writeFloat64Array = function(arr, e) {
  	  this._realloc(arr.length * 8);
  	  if (arr instanceof Float64Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapFloat64Array(arr.length, e);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeFloat64(arr[i], e);
  	    }
  	  }
  	};

  	/**
  	  Writes a Float32Array of specified endianness to the DataStream.

  	  @param {Object} arr The array to write.
  	  @param {?boolean} e Endianness of the data to write.
  	 */
  	DataStream.prototype.writeFloat32Array = function(arr, e) {
  	  this._realloc(arr.length * 4);
  	  if (arr instanceof Float32Array &&
  	      this.byteOffset+this.position % arr.BYTES_PER_ELEMENT === 0) {
  	    DataStream.memcpy(this._buffer, this.byteOffset+this.position,
  	                      arr.buffer, 0,
  	                      arr.byteLength);
  	    this.mapFloat32Array(arr.length, e);
  	  } else {
  	    for (var i=0; i<arr.length; i++) {
  	      this.writeFloat32(arr[i], e);
  	    }
  	  }
  	};


  	/**
  	  Writes a 32-bit int to the DataStream with the desired endianness.

  	  @param {number} v Number to write.
  	  @param {?boolean} e Endianness of the number.
  	 */
  	DataStream.prototype.writeInt32 = function(v, e) {
  	  this._realloc(4);
  	  this._dataView.setInt32(this.position, v, e == null ? this.endianness : e);
  	  this.position += 4;
  	};

  	/**
  	  Writes a 16-bit int to the DataStream with the desired endianness.

  	  @param {number} v Number to write.
  	  @param {?boolean} e Endianness of the number.
  	 */
  	DataStream.prototype.writeInt16 = function(v, e) {
  	  this._realloc(2);
  	  this._dataView.setInt16(this.position, v, e == null ? this.endianness : e);
  	  this.position += 2;
  	};

  	/**
  	  Writes an 8-bit int to the DataStream.

  	  @param {number} v Number to write.
  	 */
  	DataStream.prototype.writeInt8 = function(v) {
  	  this._realloc(1);
  	  this._dataView.setInt8(this.position, v);
  	  this.position += 1;
  	};

  	/**
  	  Writes a 32-bit unsigned int to the DataStream with the desired endianness.

  	  @param {number} v Number to write.
  	  @param {?boolean} e Endianness of the number.
  	 */
  	DataStream.prototype.writeUint32 = function(v, e) {
  	  this._realloc(4);
  	  this._dataView.setUint32(this.position, v, e == null ? this.endianness : e);
  	  this.position += 4;
  	};

  	/**
  	  Writes a 16-bit unsigned int to the DataStream with the desired endianness.

  	  @param {number} v Number to write.
  	  @param {?boolean} e Endianness of the number.
  	 */
  	DataStream.prototype.writeUint16 = function(v, e) {
  	  this._realloc(2);
  	  this._dataView.setUint16(this.position, v, e == null ? this.endianness : e);
  	  this.position += 2;
  	};

  	/**
  	  Writes an 8-bit unsigned  int to the DataStream.

  	  @param {number} v Number to write.
  	 */
  	DataStream.prototype.writeUint8 = function(v) {
  	  this._realloc(1);
  	  this._dataView.setUint8(this.position, v);
  	  this.position += 1;
  	};

  	/**
  	  Writes a 32-bit float to the DataStream with the desired endianness.

  	  @param {number} v Number to write.
  	  @param {?boolean} e Endianness of the number.
  	 */
  	DataStream.prototype.writeFloat32 = function(v, e) {
  	  this._realloc(4);
  	  this._dataView.setFloat32(this.position, v, e == null ? this.endianness : e);
  	  this.position += 4;
  	};

  	/**
  	  Writes a 64-bit float to the DataStream with the desired endianness.

  	  @param {number} v Number to write.
  	  @param {?boolean} e Endianness of the number.
  	 */
  	DataStream.prototype.writeFloat64 = function(v, e) {
  	  this._realloc(8);
  	  this._dataView.setFloat64(this.position, v, e == null ? this.endianness : e);
  	  this.position += 8;
  	};

  	/**
  	  Write a UCS-2 string of desired endianness to the DataStream. The
  	  lengthOverride argument lets you define the number of characters to write.
  	  If the string is shorter than lengthOverride, the extra space is padded with
  	  zeroes.

  	  @param {string} str The string to write.
  	  @param {?boolean} endianness The endianness to use for the written string data.
  	  @param {?number} lengthOverride The number of characters to write.
  	 */
  	DataStream.prototype.writeUCS2String = function(str, endianness, lengthOverride) {
  	  if (lengthOverride == null) {
  	    lengthOverride = str.length;
  	  }
  	  for (var i = 0; i < str.length && i < lengthOverride; i++) {
  	    this.writeUint16(str.charCodeAt(i), endianness);
  	  }
  	  for (; i<lengthOverride; i++) {
  	    this.writeUint16(0);
  	  }
  	};

  	/**
  	  Writes a string of desired length and encoding to the DataStream.

  	  @param {string} s The string to write.
  	  @param {?string} encoding The encoding for the written string data.
  	                            Defaults to ASCII.
  	  @param {?number} length The number of characters to write.
  	 */
  	DataStream.prototype.writeString = function(s, encoding, length) {
  	  var i = 0;
  	  if (encoding == null || encoding == "ASCII") {
  	    if (length != null) {
  	      var len = Math.min(s.length, length);
  	      for (i=0; i<len; i++) {
  	        this.writeUint8(s.charCodeAt(i));
  	      }
  	      for (; i<length; i++) {
  	        this.writeUint8(0);
  	      }
  	    } else {
  	      for (i=0; i<s.length; i++) {
  	        this.writeUint8(s.charCodeAt(i));
  	      }
  	    }
  	  } else {
  	    this.writeUint8Array((new TextEncoder(encoding)).encode(s.substring(0, length)));
  	  }
  	};

  	/**
  	  Writes a null-terminated string to DataStream and zero-pads it to length
  	  bytes. If length is not given, writes the string followed by a zero.
  	  If string is longer than length, the written part of the string does not have
  	  a trailing zero.

  	  @param {string} s The string to write.
  	  @param {?number} length The number of characters to write.
  	 */
  	DataStream.prototype.writeCString = function(s, length) {
  	  var i = 0;
  	  if (length != null) {
  	    var len = Math.min(s.length, length);
  	    for (i=0; i<len; i++) {
  	      this.writeUint8(s.charCodeAt(i));
  	    }
  	    for (; i<length; i++) {
  	      this.writeUint8(0);
  	    }
  	  } else {
  	    for (i=0; i<s.length; i++) {
  	      this.writeUint8(s.charCodeAt(i));
  	    }
  	    this.writeUint8(0);
  	  }
  	};

  	/**
  	  Writes a struct to the DataStream. Takes a structDefinition that gives the
  	  types and a struct object that gives the values. Refer to readStruct for the
  	  structure of structDefinition.

  	  @param {Object} structDefinition Type definition of the struct.
  	  @param {Object} struct The struct data object.
  	  */
  	DataStream.prototype.writeStruct = function(structDefinition, struct) {
  	  for (var i = 0; i < structDefinition.length; i+=2) {
  	    var t = structDefinition[i+1];
  	    this.writeType(t, struct[structDefinition[i]], struct);
  	  }
  	};

  	/**
  	  Writes object v of type t to the DataStream.

  	  @param {Object} t Type of data to write.
  	  @param {Object} v Value of data to write.
  	  @param {Object} struct Struct to pass to write callback functions.
  	  */
  	DataStream.prototype.writeType = function(t, v, struct) {
  	  var tp;
  	  if (typeof t == "function") {
  	    return t(this, v);
  	  } else if (typeof t == "object" && !(t instanceof Array)) {
  	    return t.set(this, v, struct);
  	  }
  	  var lengthOverride = null;
  	  var charset = "ASCII";
  	  var pos = this.position;
  	  if (typeof(t) == 'string' && /:/.test(t)) {
  	    tp = t.split(":");
  	    t = tp[0];
  	    lengthOverride = parseInt(tp[1]);
  	  }
  	  if (typeof t == 'string' && /,/.test(t)) {
  	    tp = t.split(",");
  	    t = tp[0];
  	    charset = parseInt(tp[1]);
  	  }

  	  switch(t) {
  	    case 'uint8':
  	      this.writeUint8(v);
  	      break;
  	    case 'int8':
  	      this.writeInt8(v);
  	      break;

  	    case 'uint16':
  	      this.writeUint16(v, this.endianness);
  	      break;
  	    case 'int16':
  	      this.writeInt16(v, this.endianness);
  	      break;
  	    case 'uint32':
  	      this.writeUint32(v, this.endianness);
  	      break;
  	    case 'int32':
  	      this.writeInt32(v, this.endianness);
  	      break;
  	    case 'float32':
  	      this.writeFloat32(v, this.endianness);
  	      break;
  	    case 'float64':
  	      this.writeFloat64(v, this.endianness);
  	      break;

  	    case 'uint16be':
  	      this.writeUint16(v, DataStream.BIG_ENDIAN);
  	      break;
  	    case 'int16be':
  	      this.writeInt16(v, DataStream.BIG_ENDIAN);
  	      break;
  	    case 'uint32be':
  	      this.writeUint32(v, DataStream.BIG_ENDIAN);
  	      break;
  	    case 'int32be':
  	      this.writeInt32(v, DataStream.BIG_ENDIAN);
  	      break;
  	    case 'float32be':
  	      this.writeFloat32(v, DataStream.BIG_ENDIAN);
  	      break;
  	    case 'float64be':
  	      this.writeFloat64(v, DataStream.BIG_ENDIAN);
  	      break;

  	    case 'uint16le':
  	      this.writeUint16(v, DataStream.LITTLE_ENDIAN);
  	      break;
  	    case 'int16le':
  	      this.writeInt16(v, DataStream.LITTLE_ENDIAN);
  	      break;
  	    case 'uint32le':
  	      this.writeUint32(v, DataStream.LITTLE_ENDIAN);
  	      break;
  	    case 'int32le':
  	      this.writeInt32(v, DataStream.LITTLE_ENDIAN);
  	      break;
  	    case 'float32le':
  	      this.writeFloat32(v, DataStream.LITTLE_ENDIAN);
  	      break;
  	    case 'float64le':
  	      this.writeFloat64(v, DataStream.LITTLE_ENDIAN);
  	      break;

  	    case 'cstring':
  	      this.writeCString(v, lengthOverride);
  	      break;

  	    case 'string':
  	      this.writeString(v, charset, lengthOverride);
  	      break;

  	    case 'u16string':
  	      this.writeUCS2String(v, this.endianness, lengthOverride);
  	      break;

  	    case 'u16stringle':
  	      this.writeUCS2String(v, DataStream.LITTLE_ENDIAN, lengthOverride);
  	      break;

  	    case 'u16stringbe':
  	      this.writeUCS2String(v, DataStream.BIG_ENDIAN, lengthOverride);
  	      break;

  	    default:
  	      if (t.length == 3) {
  	        var ta = t[1];
  	        for (var i=0; i<v.length; i++) {
  	          this.writeType(ta, v[i]);
  	        }
  	        break;
  	      } else {
  	        this.writeStruct(t, v);
  	        break;
  	      }
  	  }
  	  if (lengthOverride != null) {
  	    this.position = pos;
  	    this._realloc(lengthOverride);
  	    this.position = pos + lengthOverride;
  	  }
  	};


  	DataStream.prototype.writeUint64 = function (v) {
  		var h = Math.floor(v / MAX_SIZE);
  		this.writeUint32(h);
  		this.writeUint32(v & 0xFFFFFFFF);
  	};

  	DataStream.prototype.writeUint24 = function (v) {
  		this.writeUint8((v & 0x00FF0000)>>16);
  		this.writeUint8((v & 0x0000FF00)>>8);
  		this.writeUint8((v & 0x000000FF));
  	};

  	DataStream.prototype.adjustUint32 = function(position, value) {
  		var pos = this.position;
  		this.seek(position);
  		this.writeUint32(value);
  		this.seek(pos);
  	};
  	// file:src/DataStream-map.js
  	/**
  	  Maps an Int32Array into the DataStream buffer, swizzling it to native
  	  endianness in-place. The current offset from the start of the buffer needs to
  	  be a multiple of element size, just like with typed array views.

  	  Nice for quickly reading in data. Warning: potentially modifies the buffer
  	  contents.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Int32Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapInt32Array = function(length, e) {
  	  this._realloc(length * 4);
  	  var arr = new Int32Array(this._buffer, this.byteOffset+this.position, length);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += length * 4;
  	  return arr;
  	};

  	/**
  	  Maps an Int16Array into the DataStream buffer, swizzling it to native
  	  endianness in-place. The current offset from the start of the buffer needs to
  	  be a multiple of element size, just like with typed array views.

  	  Nice for quickly reading in data. Warning: potentially modifies the buffer
  	  contents.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Int16Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapInt16Array = function(length, e) {
  	  this._realloc(length * 2);
  	  var arr = new Int16Array(this._buffer, this.byteOffset+this.position, length);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += length * 2;
  	  return arr;
  	};

  	/**
  	  Maps an Int8Array into the DataStream buffer.

  	  Nice for quickly reading in data.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Int8Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapInt8Array = function(length) {
  	  this._realloc(length * 1);
  	  var arr = new Int8Array(this._buffer, this.byteOffset+this.position, length);
  	  this.position += length * 1;
  	  return arr;
  	};

  	/**
  	  Maps a Uint32Array into the DataStream buffer, swizzling it to native
  	  endianness in-place. The current offset from the start of the buffer needs to
  	  be a multiple of element size, just like with typed array views.

  	  Nice for quickly reading in data. Warning: potentially modifies the buffer
  	  contents.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Uint32Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapUint32Array = function(length, e) {
  	  this._realloc(length * 4);
  	  var arr = new Uint32Array(this._buffer, this.byteOffset+this.position, length);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += length * 4;
  	  return arr;
  	};

  	/**
  	  Maps a Uint16Array into the DataStream buffer, swizzling it to native
  	  endianness in-place. The current offset from the start of the buffer needs to
  	  be a multiple of element size, just like with typed array views.

  	  Nice for quickly reading in data. Warning: potentially modifies the buffer
  	  contents.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Uint16Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapUint16Array = function(length, e) {
  	  this._realloc(length * 2);
  	  var arr = new Uint16Array(this._buffer, this.byteOffset+this.position, length);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += length * 2;
  	  return arr;
  	};

  	/**
  	  Maps a Float64Array into the DataStream buffer, swizzling it to native
  	  endianness in-place. The current offset from the start of the buffer needs to
  	  be a multiple of element size, just like with typed array views.

  	  Nice for quickly reading in data. Warning: potentially modifies the buffer
  	  contents.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Float64Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapFloat64Array = function(length, e) {
  	  this._realloc(length * 8);
  	  var arr = new Float64Array(this._buffer, this.byteOffset+this.position, length);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += length * 8;
  	  return arr;
  	};

  	/**
  	  Maps a Float32Array into the DataStream buffer, swizzling it to native
  	  endianness in-place. The current offset from the start of the buffer needs to
  	  be a multiple of element size, just like with typed array views.

  	  Nice for quickly reading in data. Warning: potentially modifies the buffer
  	  contents.

  	  @param {number} length Number of elements to map.
  	  @param {?boolean} e Endianness of the data to read.
  	  @return {Object} Float32Array to the DataStream backing buffer.
  	  */
  	DataStream.prototype.mapFloat32Array = function(length, e) {
  	  this._realloc(length * 4);
  	  var arr = new Float32Array(this._buffer, this.byteOffset+this.position, length);
  	  DataStream.arrayToNative(arr, e == null ? this.endianness : e);
  	  this.position += length * 4;
  	  return arr;
  	};
  	// file:src/buffer.js
  	/**
  	 * MultiBufferStream is a class that acts as a SimpleStream for parsing 
  	 * It holds several, possibly non-contiguous ArrayBuffer objects, each with a fileStart property 
  	 * containing the offset for the buffer data in an original/virtual file 
  	 *
  	 * It inherits also from DataStream for all read/write/alloc operations
  	 */

  	/**
  	 * Constructor
  	 */
  	var MultiBufferStream = function(buffer) {
  		/* List of ArrayBuffers, with a fileStart property, sorted in fileStart order and non overlapping */
  		this.buffers = [];	
  		this.bufferIndex = -1;
  		if (buffer) {
  			this.insertBuffer(buffer);
  			this.bufferIndex = 0;
  		}
  	};
  	MultiBufferStream.prototype = new DataStream(new ArrayBuffer(), 0, DataStream.BIG_ENDIAN);

  	/************************************************************************************
  	  Methods for the managnement of the buffers (insertion, removal, concatenation, ...)
  	 ***********************************************************************************/

  	MultiBufferStream.prototype.initialized = function() {
  		var firstBuffer;
  		if (this.bufferIndex > -1) {
  			return true;
  		} else if (this.buffers.length > 0) {
  			firstBuffer = this.buffers[0];
  			if (firstBuffer.fileStart === 0) {
  				this.buffer = firstBuffer;
  				this.bufferIndex = 0;
  				Log.debug("MultiBufferStream", "Stream ready for parsing");
  				return true;
  			} else {
  				Log.warn("MultiBufferStream", "The first buffer should have a fileStart of 0");
  				this.logBufferLevel();
  				return false;
  			}
  		} else {
  			Log.warn("MultiBufferStream", "No buffer to start parsing from");
  			this.logBufferLevel();
  			return false;
  		}			
  	};

  	/**
  	 * helper functions to concatenate two ArrayBuffer objects
  	 * @param  {ArrayBuffer} buffer1 
  	 * @param  {ArrayBuffer} buffer2 
  	 * @return {ArrayBuffer} the concatenation of buffer1 and buffer2 in that order
  	 */
  	ArrayBuffer.concat = function(buffer1, buffer2) {
  	  Log.debug("ArrayBuffer", "Trying to create a new buffer of size: "+(buffer1.byteLength + buffer2.byteLength));
  	  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  	  tmp.set(new Uint8Array(buffer1), 0);
  	  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  	  return tmp.buffer;
  	};

  	/**
  	 * Reduces the size of a given buffer, but taking the part between offset and offset+newlength
  	 * @param  {ArrayBuffer} buffer    
  	 * @param  {Number}      offset    the start of new buffer
  	 * @param  {Number}      newLength the length of the new buffer
  	 * @return {ArrayBuffer}           the new buffer
  	 */
  	MultiBufferStream.prototype.reduceBuffer = function(buffer, offset, newLength) {
  		var smallB;
  		smallB = new Uint8Array(newLength);
  		smallB.set(new Uint8Array(buffer, offset, newLength));
  		smallB.buffer.fileStart = buffer.fileStart+offset;
  		smallB.buffer.usedBytes = 0;
  		return smallB.buffer;	
  	};

  	/**
  	 * Inserts the new buffer in the sorted list of buffers,
  	 *  making sure, it is not overlapping with existing ones (possibly reducing its size).
  	 *  if the new buffer overrides/replaces the 0-th buffer (for instance because it is bigger), 
  	 *  updates the DataStream buffer for parsing 
  	*/
  	MultiBufferStream.prototype.insertBuffer = function(ab) {	
  		var to_add = true;
  		/* TODO: improve insertion if many buffers */
  		for (var i = 0; i < this.buffers.length; i++) {
  			var b = this.buffers[i];
  			if (ab.fileStart <= b.fileStart) {
  				/* the insertion position is found */
  				if (ab.fileStart === b.fileStart) {
  					/* The new buffer overlaps with an existing buffer */
  					if (ab.byteLength >  b.byteLength) {
  						/* the new buffer is bigger than the existing one
  						   remove the existing buffer and try again to insert 
  						   the new buffer to check overlap with the next ones */
  						this.buffers.splice(i, 1);
  						i--; 
  						continue;
  					} else {
  						/* the new buffer is smaller than the existing one, just drop it */
  						Log.warn("MultiBufferStream", "Buffer (fileStart: "+ab.fileStart+" - Length: "+ab.byteLength+") already appended, ignoring");
  					}
  				} else {
  					/* The beginning of the new buffer is not overlapping with an existing buffer
  					   let's check the end of it */
  					if (ab.fileStart + ab.byteLength <= b.fileStart) ; else {
  						/* There is some overlap, cut the new buffer short, and add it*/
  						ab = this.reduceBuffer(ab, 0, b.fileStart - ab.fileStart);
  					}
  					Log.debug("MultiBufferStream", "Appending new buffer (fileStart: "+ab.fileStart+" - Length: "+ab.byteLength+")");
  					this.buffers.splice(i, 0, ab);
  					/* if this new buffer is inserted in the first place in the list of the buffer, 
  					   and the DataStream is initialized, make it the buffer used for parsing */
  					if (i === 0) {
  						this.buffer = ab;
  					}
  				}
  				to_add = false;
  				break;
  			} else if (ab.fileStart < b.fileStart + b.byteLength) {
  				/* the new buffer overlaps its beginning with the end of the current buffer */
  				var offset = b.fileStart + b.byteLength - ab.fileStart;
  				var newLength = ab.byteLength - offset;
  				if (newLength > 0) {
  					/* the new buffer is bigger than the current overlap, drop the overlapping part and try again inserting the remaining buffer */
  					ab = this.reduceBuffer(ab, offset, newLength);
  				} else {
  					/* the content of the new buffer is entirely contained in the existing buffer, drop it entirely */
  					to_add = false;
  					break;
  				}
  			}
  		}
  		/* if the buffer has not been added, we can add it at the end */
  		if (to_add) {
  			Log.debug("MultiBufferStream", "Appending new buffer (fileStart: "+ab.fileStart+" - Length: "+ab.byteLength+")");
  			this.buffers.push(ab);
  			/* if this new buffer is inserted in the first place in the list of the buffer, 
  			   and the DataStream is initialized, make it the buffer used for parsing */
  			if (i === 0) {
  				this.buffer = ab;
  			}
  		}
  	};

  	/**
  	 * Displays the status of the buffers (number and used bytes)
  	 * @param  {Object} info callback method for display
  	 */
  	MultiBufferStream.prototype.logBufferLevel = function(info) {
  		var i;
  		var buffer;
  		var used, total;
  		var ranges = [];
  		var range;
  		var bufferedString = "";
  		used = 0;
  		total = 0;
  		for (i = 0; i < this.buffers.length; i++) {
  			buffer = this.buffers[i];
  			if (i === 0) {
  				range = {};
  				ranges.push(range);
  				range.start = buffer.fileStart;
  				range.end = buffer.fileStart+buffer.byteLength;
  				bufferedString += "["+range.start+"-";
  			} else if (range.end === buffer.fileStart) {
  				range.end = buffer.fileStart+buffer.byteLength;
  			} else {
  				range = {};
  				range.start = buffer.fileStart;
  				bufferedString += (ranges[ranges.length-1].end-1)+"], ["+range.start+"-";
  				range.end = buffer.fileStart+buffer.byteLength;
  				ranges.push(range);
  			}
  			used += buffer.usedBytes;
  			total += buffer.byteLength;
  		}
  		if (ranges.length > 0) {
  			bufferedString += (range.end-1)+"]";
  		}
  		var log = (info ? Log.info : Log.debug);
  		if (this.buffers.length === 0) {
  			log("MultiBufferStream", "No more buffer in memory");
  		} else {
  			log("MultiBufferStream", ""+this.buffers.length+" stored buffer(s) ("+used+"/"+total+" bytes), continuous ranges: "+bufferedString);
  		}
  	};

  	MultiBufferStream.prototype.cleanBuffers = function () {
  		var i;
  		var buffer;
  		for (i = 0; i < this.buffers.length; i++) {
  			buffer = this.buffers[i];
  			if (buffer.usedBytes === buffer.byteLength) {
  				Log.debug("MultiBufferStream", "Removing buffer #"+i);
  				this.buffers.splice(i, 1);
  				i--;
  			}
  		}
  	};

  	MultiBufferStream.prototype.mergeNextBuffer = function() {
  		var next_buffer;
  		if (this.bufferIndex+1 < this.buffers.length) {
  			next_buffer = this.buffers[this.bufferIndex+1];
  			if (next_buffer.fileStart === this.buffer.fileStart + this.buffer.byteLength) {
  				var oldLength = this.buffer.byteLength;
  				var oldUsedBytes = this.buffer.usedBytes;
  				var oldFileStart = this.buffer.fileStart;
  				this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, next_buffer);
  				this.buffer = this.buffers[this.bufferIndex];
  				this.buffers.splice(this.bufferIndex+1, 1);
  				this.buffer.usedBytes = oldUsedBytes; /* TODO: should it be += ? */
  				this.buffer.fileStart = oldFileStart;
  				Log.debug("ISOFile", "Concatenating buffer for box parsing (length: "+oldLength+"->"+this.buffer.byteLength+")");
  				return true;
  			} else {
  				return false;
  			}
  		} else {
  			return false;
  		}
  	};


  	/*************************************************************************
  	  Seek-related functions
  	 *************************************************************************/

  	/**
  	 * Finds the buffer that holds the given file position
  	 * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false) 
  	 *                                or from the first buffer (true)
  	 * @param  {Number}  filePosition position in the file to seek to
  	 * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position 
  	 *                                should be marked as used for garbage collection
  	 * @return {Number}               the index of the buffer holding the seeked file position, -1 if not found.
  	 */
  	MultiBufferStream.prototype.findPosition = function(fromStart, filePosition, markAsUsed) {
  		var i;
  		var abuffer = null;
  		var index = -1;

  		/* find the buffer with the largest position smaller than the given position */
  		if (fromStart === true) {
  		   /* the reposition can be in the past, we need to check from the beginning of the list of buffers */
  			i = 0;
  		} else {
  			i = this.bufferIndex;
  		}

  		while (i < this.buffers.length) {
  			abuffer = this.buffers[i];
  			if (abuffer.fileStart <= filePosition) {
  				index = i;
  				if (markAsUsed) {
  					if (abuffer.fileStart + abuffer.byteLength <= filePosition) {
  						abuffer.usedBytes = abuffer.byteLength;	
  					} else {
  						abuffer.usedBytes = filePosition - abuffer.fileStart;
  					}		
  					this.logBufferLevel();	
  				}
  			} else {
  				break;
  			}
  			i++;
  		}

  		if (index !== -1) {
  			abuffer = this.buffers[index];
  			if (abuffer.fileStart + abuffer.byteLength >= filePosition) {			
  				Log.debug("MultiBufferStream", "Found position in existing buffer #"+index);
  				return index;
  			} else {
  				return -1;
  			}
  		} else {
  			return -1;
  		}
  	};

  	/**
  	 * Finds the largest file position contained in a buffer or in the next buffers if they are contiguous (no gap)
  	 * starting from the given buffer index or from the current buffer if the index is not given
  	 *
  	 * @param  {Number} inputindex Index of the buffer to start from
  	 * @return {Number}            The largest file position found in the buffers
  	 */
  	MultiBufferStream.prototype.findEndContiguousBuf = function(inputindex) {
  		var i;
  		var currentBuf;
  		var nextBuf;
  		var index = (inputindex !== undefined ? inputindex : this.bufferIndex);
  		currentBuf = this.buffers[index];
  		/* find the end of the contiguous range of data */
  		if (this.buffers.length > index+1) {
  			for (i = index+1; i < this.buffers.length; i++) {
  				nextBuf = this.buffers[i];
  				if (nextBuf.fileStart === currentBuf.fileStart + currentBuf.byteLength) {
  					currentBuf = nextBuf;
  				} else {
  					break;
  				}
  			}
  		}
  		/* return the position of last byte in the file that we have */
  		return currentBuf.fileStart + currentBuf.byteLength;
  	};

  	/**
  	 * Returns the largest file position contained in the buffers, larger than the given position
  	 * @param  {Number} pos the file position to start from
  	 * @return {Number}     the largest position in the current buffer or in the buffer and the next contiguous 
  	 *                      buffer that holds the given position
  	 */
  	MultiBufferStream.prototype.getEndFilePositionAfter = function(pos) {
  		var index = this.findPosition(true, pos, false);
  		if (index !== -1) {
  			return this.findEndContiguousBuf(index);
  		} else {
  			return pos;
  		}
  	};

  	/*************************************************************************
  	  Garbage collection related functions
  	 *************************************************************************/

  	/**
  	 * Marks a given number of bytes as used in the current buffer for garbage collection
  	 * @param {Number} nbBytes 
  	 */
  	MultiBufferStream.prototype.addUsedBytes = function(nbBytes) {
  		this.buffer.usedBytes += nbBytes;
  		this.logBufferLevel();
  	};

  	/**
  	 * Marks the entire current buffer as used, ready for garbage collection
  	 */
  	MultiBufferStream.prototype.setAllUsedBytes = function() {
  		this.buffer.usedBytes = this.buffer.byteLength;
  		this.logBufferLevel();
  	};

  	/*************************************************************************
  	  Common API between MultiBufferStream and SimpleStream
  	 *************************************************************************/

  	/**
  	 * Tries to seek to a given file position
  	 * if possible, repositions the parsing from there and returns true 
  	 * if not possible, does not change anything and returns false 
  	 * @param  {Number}  filePosition position in the file to seek to
  	 * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false) 
  	 *                                or from the first buffer (true)
  	 * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position 
  	 *                                should be marked as used for garbage collection
  	 * @return {Boolean}              true if the seek succeeded, false otherwise
  	 */
  	MultiBufferStream.prototype.seek = function(filePosition, fromStart, markAsUsed) {
  		var index;
  		index = this.findPosition(fromStart, filePosition, markAsUsed);
  		if (index !== -1) {
  			this.buffer = this.buffers[index];
  			this.bufferIndex = index;
  			this.position = filePosition - this.buffer.fileStart;
  			Log.debug("MultiBufferStream", "Repositioning parser at buffer position: "+this.position);
  			return true;
  		} else {
  			Log.debug("MultiBufferStream", "Position "+filePosition+" not found in buffered data");
  			return false;
  		}
  	};

  	/**
  	 * Returns the current position in the file
  	 * @return {Number} the position in the file
  	 */
  	MultiBufferStream.prototype.getPosition = function() {
  		if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === null) {
  			throw "Error accessing position in the MultiBufferStream";
  		}
  		return this.buffers[this.bufferIndex].fileStart+this.position;
  	};

  	/**
  	 * Returns the length of the current buffer
  	 * @return {Number} the length of the current buffer
  	 */
  	MultiBufferStream.prototype.getLength = function() {
  		return this.byteLength;
  	};

  	MultiBufferStream.prototype.getEndPosition = function() {
  		if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === null) {
  			throw "Error accessing position in the MultiBufferStream";
  		}
  		return this.buffers[this.bufferIndex].fileStart+this.byteLength;
  	};

  	{
  		exports.MultiBufferStream = MultiBufferStream;
  	}// file:src/descriptor.js
  	/*
  	 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	var MPEG4DescriptorParser = function () {
  		var ES_DescrTag 			= 0x03;
  		var DecoderConfigDescrTag 	= 0x04;
  		var DecSpecificInfoTag 		= 0x05;
  		var SLConfigDescrTag 		= 0x06;

  		var descTagToName = [];
  		descTagToName[ES_DescrTag] 				= "ES_Descriptor";
  		descTagToName[DecoderConfigDescrTag] 	= "DecoderConfigDescriptor";
  		descTagToName[DecSpecificInfoTag] 		= "DecoderSpecificInfo";
  		descTagToName[SLConfigDescrTag] 		= "SLConfigDescriptor";

  		this.getDescriptorName = function(tag) {
  			return descTagToName[tag];
  		};

  		var that = this;
  		var classes = {};

  		this.parseOneDescriptor = function (stream) {
  			var size = 0;
  			var tag;
  			var desc;
  			var byteRead;
  			tag = stream.readUint8();
  			byteRead = stream.readUint8();
  			while (byteRead & 0x80) {
  				size = (byteRead & 0x7F)<<7;
  				byteRead = stream.readUint8();
  			}
  			size += byteRead & 0x7F;
  			Log.debug("MPEG4DescriptorParser", "Found "+(descTagToName[tag] || "Descriptor "+tag)+", size "+size+" at position "+stream.getPosition());
  			if (descTagToName[tag]) {
  				desc = new classes[descTagToName[tag]](size);
  			} else {
  				desc = new classes.Descriptor(size);
  			}
  			desc.parse(stream);
  			return desc;
  		};

  		classes.Descriptor = function(_tag, _size) {
  			this.tag = _tag;
  			this.size = _size;
  			this.descs = [];
  		};

  		classes.Descriptor.prototype.parse = function (stream) {
  			this.data = stream.readUint8Array(this.size);
  		};

  		classes.Descriptor.prototype.findDescriptor = function (tag) {
  			for (var i = 0; i < this.descs.length; i++) {
  				if (this.descs[i].tag == tag) {
  					return this.descs[i];
  				}
  			}
  			return null;
  		};

  		classes.Descriptor.prototype.parseRemainingDescriptors = function (stream) {
  			var start = stream.position;
  			while (stream.position < start+this.size) {
  				var desc = that.parseOneDescriptor(stream);
  				this.descs.push(desc);
  			}
  		};

  		classes.ES_Descriptor = function (size) {
  			classes.Descriptor.call(this, ES_DescrTag, size);
  		};

  		classes.ES_Descriptor.prototype = new classes.Descriptor();

  		classes.ES_Descriptor.prototype.parse = function(stream) {
  			this.ES_ID = stream.readUint16();
  			this.flags = stream.readUint8();
  			this.size -= 3;
  			if (this.flags & 0x80) {
  				this.dependsOn_ES_ID = stream.readUint16();
  				this.size -= 2;
  			} else {
  				this.dependsOn_ES_ID = 0;
  			}
  			if (this.flags & 0x40) {
  				var l = stream.readUint8();
  				this.URL = stream.readString(l);
  				this.size -= l+1;
  			} else {
  				this.URL = "";
  			}
  			if (this.flags & 0x20) {
  				this.OCR_ES_ID = stream.readUint16();
  				this.size -= 2;
  			} else {
  				this.OCR_ES_ID = 0;
  			}
  			this.parseRemainingDescriptors(stream);
  		};

  		classes.ES_Descriptor.prototype.getOTI = function(stream) {
  			var dcd = this.findDescriptor(DecoderConfigDescrTag);
  			if (dcd) {
  				return dcd.oti;
  			} else {
  				return 0;
  			}
  		};

  		classes.ES_Descriptor.prototype.getAudioConfig = function(stream) {
  			var dcd = this.findDescriptor(DecoderConfigDescrTag);
  			if (!dcd) return null;
  			var dsi = dcd.findDescriptor(DecSpecificInfoTag);
  			if (dsi && dsi.data) {
  				var audioObjectType = (dsi.data[0]& 0xF8) >> 3;
  				if (audioObjectType === 31 && dsi.data.length >= 2) {
  					audioObjectType = 32 + ((dsi.data[0] & 0x7) << 3) + ((dsi.data[1] & 0xE0) >> 5);
  				}
  				return audioObjectType;
  			} else {
  				return null;
  			}
  		};

  		classes.DecoderConfigDescriptor = function (size) {
  			classes.Descriptor.call(this, DecoderConfigDescrTag, size);
  		};
  		classes.DecoderConfigDescriptor.prototype = new classes.Descriptor();

  		classes.DecoderConfigDescriptor.prototype.parse = function(stream) {
  			this.oti = stream.readUint8();
  			this.streamType = stream.readUint8();
  			this.bufferSize = stream.readUint24();
  			this.maxBitrate = stream.readUint32();
  			this.avgBitrate = stream.readUint32();
  			this.size -= 13;
  			this.parseRemainingDescriptors(stream);
  		};

  		classes.DecoderSpecificInfo = function (size) {
  			classes.Descriptor.call(this, DecSpecificInfoTag, size);
  		};
  		classes.DecoderSpecificInfo.prototype = new classes.Descriptor();

  		classes.SLConfigDescriptor = function (size) {
  			classes.Descriptor.call(this, SLConfigDescrTag, size);
  		};
  		classes.SLConfigDescriptor.prototype = new classes.Descriptor();

  		return this;
  	};

  	{
  		exports.MPEG4DescriptorParser = MPEG4DescriptorParser;
  	}// file:src/box.js
  	/*
  	 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	var BoxParser = {
  		ERR_INVALID_DATA : -1,
  		ERR_NOT_ENOUGH_DATA : 0,
  		OK : 1,

  		// Boxes to be created with default parsing
  		BASIC_BOXES: [ "mdat", "idat", "free", "skip", "meco", "strk" ],
  		FULL_BOXES: [ "hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere" ],
  		CONTAINER_BOXES: [
  			[ "moov", [ "trak", "pssh" ] ],
  			[ "trak" ],
  			[ "edts" ],
  			[ "mdia" ],
  			[ "minf" ],
  			[ "dinf" ],
  			[ "stbl", [ "sgpd", "sbgp" ] ],
  			[ "mvex", [ "trex" ] ],
  			[ "moof", [ "traf" ] ],
  			[ "traf", [ "trun", "sgpd", "sbgp" ] ],
  			[ "vttc" ],
  			[ "tref" ],
  			[ "iref" ],
  			[ "mfra", [ "tfra" ] ],
  			[ "meco" ],
  			[ "hnti" ],
  			[ "hinf" ],
  			[ "strk" ],
  			[ "strd" ],
  			[ "sinf" ],
  			[ "rinf" ],
  			[ "schi" ],
  			[ "trgr" ],
  			[ "udta", ["kind"] ],
  			[ "iprp", ["ipma"] ],
  			[ "ipco"]
  		],
  		// Boxes effectively created
  		boxCodes : [],
  		fullBoxCodes : [],
  		containerBoxCodes : [],
  		sampleEntryCodes : {},
  		sampleGroupEntryCodes: [],
  		trackGroupTypes: [],
  		UUIDBoxes: {},
  		UUIDs: [],
  		initialize: function() {
  			BoxParser.FullBox.prototype = new BoxParser.Box();
  			BoxParser.ContainerBox.prototype = new BoxParser.Box();
  			BoxParser.SampleEntry.prototype = new BoxParser.Box();
  			BoxParser.TrackGroupTypeBox.prototype = new BoxParser.FullBox();

  			/* creating constructors for simple boxes */
  			BoxParser.BASIC_BOXES.forEach(function(type) {
  				BoxParser.createBoxCtor(type);
  			});
  			BoxParser.FULL_BOXES.forEach(function(type) {
  				BoxParser.createFullBoxCtor(type);
  			});
  			BoxParser.CONTAINER_BOXES.forEach(function(types) {
  				BoxParser.createContainerBoxCtor(types[0], null, types[1]);
  			});
  		},
  		Box: function(_type, _size, _uuid) {
  			this.type = _type;
  			this.size = _size;
  			this.uuid = _uuid;
  		},
  		FullBox: function(type, size, uuid) {
  			BoxParser.Box.call(this, type, size, uuid);
  			this.flags = 0;
  			this.version = 0;
  		},
  		ContainerBox: function(type, size, uuid) {
  			BoxParser.Box.call(this, type, size, uuid);
  			this.boxes = [];
  		},
  		SampleEntry: function(type, size, hdr_size, start) {
  			BoxParser.ContainerBox.call(this, type, size);
  			this.hdr_size = hdr_size;
  			this.start = start;
  		},
  		SampleGroupEntry: function(type) {
  			this.grouping_type = type;
  		},
  		TrackGroupTypeBox: function(type, size) {
  			BoxParser.FullBox.call(this, type, size);
  		},
  		createBoxCtor: function(type, parseMethod){
  			BoxParser.boxCodes.push(type);
  			BoxParser[type+"Box"] = function(size) {
  				BoxParser.Box.call(this, type, size);
  			};
  			BoxParser[type+"Box"].prototype = new BoxParser.Box();
  			if (parseMethod) BoxParser[type+"Box"].prototype.parse = parseMethod;
  		},
  		createFullBoxCtor: function(type, parseMethod) {
  			//BoxParser.fullBoxCodes.push(type);
  			BoxParser[type+"Box"] = function(size) {
  				BoxParser.FullBox.call(this, type, size);
  			};
  			BoxParser[type+"Box"].prototype = new BoxParser.FullBox();
  			BoxParser[type+"Box"].prototype.parse = function(stream) {
  				this.parseFullHeader(stream);
  				if (parseMethod) {
  					parseMethod.call(this, stream);
  				}
  			};
  		},
  		addSubBoxArrays: function(subBoxNames) {
  			if (subBoxNames) {
  				this.subBoxNames = subBoxNames;
  				var nbSubBoxes = subBoxNames.length;
  				for (var k = 0; k<nbSubBoxes; k++) {
  					this[subBoxNames[k]+"s"] = [];
  				}
  			}
  		},
  		createContainerBoxCtor: function(type, parseMethod, subBoxNames) {
  			//BoxParser.containerBoxCodes.push(type);
  			BoxParser[type+"Box"] = function(size) {
  				BoxParser.ContainerBox.call(this, type, size);
  				BoxParser.addSubBoxArrays.call(this, subBoxNames);
  			};
  			BoxParser[type+"Box"].prototype = new BoxParser.ContainerBox();
  			if (parseMethod) BoxParser[type+"Box"].prototype.parse = parseMethod;
  		},
  		createMediaSampleEntryCtor: function(mediaType, parseMethod, subBoxNames) {
  			BoxParser.sampleEntryCodes[mediaType] = [];
  			BoxParser[mediaType+"SampleEntry"] = function(type, size) {
  				BoxParser.SampleEntry.call(this, type, size);
  				BoxParser.addSubBoxArrays.call(this, subBoxNames);
  			};
  			BoxParser[mediaType+"SampleEntry"].prototype = new BoxParser.SampleEntry();
  			if (parseMethod) BoxParser[mediaType+"SampleEntry"].prototype .parse = parseMethod;
  		},
  		createSampleEntryCtor: function(mediaType, type, parseMethod, subBoxNames) {
  			BoxParser.sampleEntryCodes[mediaType].push(type);
  			BoxParser[type+"SampleEntry"] = function(size) {
  				BoxParser[mediaType+"SampleEntry"].call(this, type, size);
  				BoxParser.addSubBoxArrays.call(this, subBoxNames);
  			};
  			BoxParser[type+"SampleEntry"].prototype = new BoxParser[mediaType+"SampleEntry"]();
  			if (parseMethod) BoxParser[type+"SampleEntry"].prototype.parse = parseMethod;
  		},
  		createEncryptedSampleEntryCtor: function(mediaType, type, parseMethod) {
  			BoxParser.createSampleEntryCtor.call(this, mediaType, type, parseMethod, ["sinf"]);
  		},
  		createSampleGroupCtor: function(type, parseMethod) {
  			//BoxParser.sampleGroupEntryCodes.push(type);
  			BoxParser[type+"SampleGroupEntry"] = function(size) {
  				BoxParser.SampleGroupEntry.call(this, type, size);
  			};
  			BoxParser[type+"SampleGroupEntry"].prototype = new BoxParser.SampleGroupEntry();
  			if (parseMethod) BoxParser[type+"SampleGroupEntry"].prototype.parse = parseMethod;
  		},
  		createTrackGroupCtor: function(type, parseMethod) {
  			//BoxParser.trackGroupTypes.push(type);
  			BoxParser[type+"TrackGroupTypeBox"] = function(size) {
  				BoxParser.TrackGroupTypeBox.call(this, type, size);
  			};
  			BoxParser[type+"TrackGroupTypeBox"].prototype = new BoxParser.TrackGroupTypeBox();
  			if (parseMethod) BoxParser[type+"TrackGroupTypeBox"].prototype.parse = parseMethod;
  		},
  		createUUIDBox: function(uuid, isFullBox, isContainerBox, parseMethod) {
  			BoxParser.UUIDs.push(uuid);
  			BoxParser.UUIDBoxes[uuid] = function(size) {
  				if (isFullBox) {
  					BoxParser.FullBox.call(this, "uuid", size, uuid);
  				} else {
  					if (isContainerBox) {
  						BoxParser.ContainerBox.call(this, "uuid", size, uuid);
  					} else {
  						BoxParser.Box.call(this, "uuid", size, uuid);
  					}
  				}
  			};
  			BoxParser.UUIDBoxes[uuid].prototype = (isFullBox ? new BoxParser.FullBox() : (isContainerBox ? new BoxParser.ContainerBox() : new BoxParser.Box()));
  			if (parseMethod) {
  				if (isFullBox) {
  					BoxParser.UUIDBoxes[uuid].prototype.parse = function(stream) {
  						this.parseFullHeader(stream);
  						if (parseMethod) {
  							parseMethod.call(this, stream);
  						}
  					};
  				} else {
  					BoxParser.UUIDBoxes[uuid].prototype.parse = parseMethod;
  				}
  			}
  		}
  	};

  	BoxParser.initialize();

  	BoxParser.TKHD_FLAG_ENABLED    = 0x000001;
  	BoxParser.TKHD_FLAG_IN_MOVIE   = 0x000002;
  	BoxParser.TKHD_FLAG_IN_PREVIEW = 0x000004;

  	BoxParser.TFHD_FLAG_BASE_DATA_OFFSET	= 0x01;
  	BoxParser.TFHD_FLAG_SAMPLE_DESC			= 0x02;
  	BoxParser.TFHD_FLAG_SAMPLE_DUR			= 0x08;
  	BoxParser.TFHD_FLAG_SAMPLE_SIZE			= 0x10;
  	BoxParser.TFHD_FLAG_SAMPLE_FLAGS		= 0x20;
  	BoxParser.TFHD_FLAG_DUR_EMPTY			= 0x10000;
  	BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF= 0x20000;

  	BoxParser.TRUN_FLAGS_DATA_OFFSET= 0x01;
  	BoxParser.TRUN_FLAGS_FIRST_FLAG	= 0x04;
  	BoxParser.TRUN_FLAGS_DURATION	= 0x100;
  	BoxParser.TRUN_FLAGS_SIZE		= 0x200;
  	BoxParser.TRUN_FLAGS_FLAGS		= 0x400;
  	BoxParser.TRUN_FLAGS_CTS_OFFSET	= 0x800;

  	BoxParser.Box.prototype.add = function(name) {
  		return this.addBox(new BoxParser[name+"Box"]());
  	};

  	BoxParser.Box.prototype.addBox = function(box) {
  		this.boxes.push(box);
  		if (this[box.type+"s"]) {
  			this[box.type+"s"].push(box);
  		} else {
  			this[box.type] = box;
  		}
  		return box;
  	};

  	BoxParser.Box.prototype.set = function(prop, value) {
  		this[prop] = value;
  		return this;
  	};

  	BoxParser.Box.prototype.addEntry = function(value, _prop) {
  		var prop = _prop || "entries";
  		if (!this[prop]) {
  			this[prop] = [];
  		}
  		this[prop].push(value);
  		return this;
  	};

  	{
  		exports.BoxParser = BoxParser;
  	}
  	// file:src/box-parse.js
  	/* 
  	 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	BoxParser.parseUUID = function(stream) {
  		return BoxParser.parseHex16(stream);
  	};

  	BoxParser.parseHex16 = function(stream) {
  		var hex16 = "";
  		for (var i = 0; i <16; i++) {
  			var hex = stream.readUint8().toString(16);
  			hex16 += (hex.length === 1 ? "0"+hex : hex);
  		}
  		return hex16;
  	};

  	BoxParser.parseOneBox = function(stream, headerOnly, parentSize) {
  		var box;
  		var start = stream.getPosition();
  		var hdr_size = 0;
  		var diff;
  		var uuid;
  		if (stream.getEndPosition() - start < 8) {
  			Log.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
  			return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
  		}
  		if (parentSize && parentSize < 8) {
  			Log.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
  			return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
  		}
  		var size = stream.readUint32();
  		var type = stream.readString(4);
  		var box_type = type;
  		Log.debug("BoxParser", "Found box of type '"+type+"' and size "+size+" at position "+start);
  		hdr_size = 8;
  		if (type == "uuid") {
  			if ((stream.getEndPosition() - stream.getPosition() < 16) || (parentSize -hdr_size < 16)) {
  				stream.seek(start);
  				Log.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
  				return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
  			}
  			uuid = BoxParser.parseUUID(stream);
  			hdr_size += 16;
  			box_type = uuid;
  		}
  		if (size == 1) {
  			if ((stream.getEndPosition() - stream.getPosition() < 8) || (parentSize && (parentSize - hdr_size) < 8)) {
  				stream.seek(start);
  				Log.warn("BoxParser", "Not enough data in stream to parse the extended size of the \""+type+"\" box");
  				return { code: BoxParser.ERR_NOT_ENOUGH_DATA };
  			}
  			size = stream.readUint64();
  			hdr_size += 8;
  		} else if (size === 0) {
  			/* box extends till the end of file or invalid file */
  			if (parentSize) {
  				size = parentSize;
  			} else {
  				/* box extends till the end of file */
  				if (type !== "mdat") {
  					Log.error("BoxParser", "Unlimited box size not supported for type: '"+type+"'");
  					box = new BoxParser.Box(type, size);
  					return { code: BoxParser.OK, box: box, size: box.size };
  				}
  			}
  		}
  		if (size !== 0 && size < hdr_size) {
  			Log.error("BoxParser", "Box of type "+type+" has an invalid size "+size+" (too small to be a box)");
  			return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
  		}
  		if (size !== 0 && parentSize && size > parentSize) {
  			Log.error("BoxParser", "Box of type '"+type+"' has a size "+size+" greater than its container size "+parentSize);
  			return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
  		}
  		if (size !== 0 && start + size > stream.getEndPosition()) {
  			stream.seek(start);
  			Log.info("BoxParser", "Not enough data in stream to parse the entire '"+type+"' box");
  			return { code: BoxParser.ERR_NOT_ENOUGH_DATA, type: type, size: size, hdr_size: hdr_size, start: start };
  		}
  		if (headerOnly) {
  			return { code: BoxParser.OK, type: type, size: size, hdr_size: hdr_size, start: start };
  		} else {
  			if (BoxParser[type+"Box"]) {
  				box = new BoxParser[type+"Box"](size);
  			} else {
  				if (type !== "uuid") {
  					Log.warn("BoxParser", "Unknown box type: '"+type+"'");
  					box = new BoxParser.Box(type, size);
  					box.has_unparsed_data = true;
  				} else {
  					if (BoxParser.UUIDBoxes[uuid]) {
  						box = new BoxParser.UUIDBoxes[uuid](size);
  					} else {
  						Log.warn("BoxParser", "Unknown uuid type: '"+uuid+"'");
  						box = new BoxParser.Box(type, size);
  						box.uuid = uuid;
  						box.has_unparsed_data = true;
  					}
  				}
  			}
  		}
  		box.hdr_size = hdr_size;
  		/* recording the position of the box in the input stream */
  		box.start = start;
  		if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
  			Log.info("BoxParser", "'"+box_type+"' box writing not yet implemented, keeping unparsed data in memory for later write");
  			box.parseDataAndRewind(stream);
  		}
  		box.parse(stream);
  		diff = stream.getPosition() - (box.start+box.size);
  		if (diff < 0) {
  			Log.warn("BoxParser", "Parsing of box '"+box_type+"' did not read the entire indicated box data size (missing "+(-diff)+" bytes), seeking forward");
  			stream.seek(box.start+box.size);
  		} else if (diff > 0) {
  			Log.error("BoxParser", "Parsing of box '"+box_type+"' read "+diff+" more bytes than the indicated box data size, seeking backwards");
  			if (box.size !== 0) stream.seek(box.start+box.size);
  		}
  		return { code: BoxParser.OK, box: box, size: box.size };
  	};

  	BoxParser.Box.prototype.parse = function(stream) {
  		if (this.type != "mdat") {
  			this.data = stream.readUint8Array(this.size-this.hdr_size);
  		} else {
  			if (this.size === 0) {
  				stream.seek(stream.getEndPosition());
  			} else {
  				stream.seek(this.start+this.size);
  			}
  		}
  	};

  	/* Used to parse a box without consuming its data, to allow detailled parsing
  	   Useful for boxes for which a write method is not yet implemented */
  	BoxParser.Box.prototype.parseDataAndRewind = function(stream) {
  		this.data = stream.readUint8Array(this.size-this.hdr_size);
  		// rewinding
  		stream.position -= this.size-this.hdr_size;
  	};

  	BoxParser.FullBox.prototype.parseDataAndRewind = function(stream) {
  		this.parseFullHeader(stream);
  		this.data = stream.readUint8Array(this.size-this.hdr_size);
  		// restore the header size as if the full header had not been parsed
  		this.hdr_size -= 4;
  		// rewinding
  		stream.position -= this.size-this.hdr_size;
  	};

  	BoxParser.FullBox.prototype.parseFullHeader = function (stream) {
  		this.version = stream.readUint8();
  		this.flags = stream.readUint24();
  		this.hdr_size += 4;
  	};

  	BoxParser.FullBox.prototype.parse = function (stream) {
  		this.parseFullHeader(stream);
  		this.data = stream.readUint8Array(this.size-this.hdr_size);
  	};

  	BoxParser.ContainerBox.prototype.parse = function(stream) {
  		var ret;
  		var box;
  		while (stream.getPosition() < this.start+this.size) {
  			ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				box = ret.box;
  				/* store the box in the 'boxes' array to preserve box order (for offset) but also store box in a property for more direct access */
  				this.boxes.push(box);
  				if (this.subBoxNames && this.subBoxNames.indexOf(box.type) != -1) {
  					this[this.subBoxNames[this.subBoxNames.indexOf(box.type)]+"s"].push(box);
  				} else {
  					var box_type = box.type !== "uuid" ? box.type : box.uuid;
  					if (this[box_type]) {
  						Log.warn("Box of type "+box_type+" already stored in field of this type");
  					} else {
  						this[box_type] = box;
  					}
  				}
  			} else {
  				return;
  			}
  		}
  	};

  	BoxParser.Box.prototype.parseLanguage = function(stream) {
  		this.language = stream.readUint16();
  		var chars = [];
  		chars[0] = (this.language>>10)&0x1F;
  		chars[1] = (this.language>>5)&0x1F;
  		chars[2] = (this.language)&0x1F;
  		this.languageString = String.fromCharCode(chars[0]+0x60, chars[1]+0x60, chars[2]+0x60);
  	};

  	// file:src/parsing/sampleentries/sampleentry.js
  	BoxParser.SAMPLE_ENTRY_TYPE_VISUAL 		= "Visual";
  	BoxParser.SAMPLE_ENTRY_TYPE_AUDIO 		= "Audio";
  	BoxParser.SAMPLE_ENTRY_TYPE_HINT 		= "Hint";
  	BoxParser.SAMPLE_ENTRY_TYPE_METADATA 	= "Metadata";
  	BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE 	= "Subtitle";
  	BoxParser.SAMPLE_ENTRY_TYPE_SYSTEM 		= "System";
  	BoxParser.SAMPLE_ENTRY_TYPE_TEXT 		= "Text";

  	BoxParser.SampleEntry.prototype.parseHeader = function(stream) {
  		stream.readUint8Array(6);
  		this.data_reference_index = stream.readUint16();
  		this.hdr_size += 8;
  	};

  	BoxParser.SampleEntry.prototype.parse = function(stream) {
  		this.parseHeader(stream);
  		this.data = stream.readUint8Array(this.size - this.hdr_size);
  	};

  	BoxParser.SampleEntry.prototype.parseDataAndRewind = function(stream) {
  		this.parseHeader(stream);
  		this.data = stream.readUint8Array(this.size - this.hdr_size);
  		// restore the header size as if the sample entry header had not been parsed
  		this.hdr_size -= 8;
  		// rewinding
  		stream.position -= this.size-this.hdr_size;
  	};

  	BoxParser.SampleEntry.prototype.parseFooter = function(stream) {
  		BoxParser.ContainerBox.prototype.parse.call(this, stream);
  	};

  	// Base SampleEntry types with default parsing
  	BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_HINT);
  	BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA);
  	BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE);
  	BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SYSTEM);
  	BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_TEXT);

  	//Base SampleEntry types for Audio and Video with specific parsing
  	BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, function(stream) {
  		var compressorname_length;
  		this.parseHeader(stream);
  		stream.readUint16();
  		stream.readUint16();
  		stream.readUint32Array(3);
  		this.width = stream.readUint16();
  		this.height = stream.readUint16();
  		this.horizresolution = stream.readUint32();
  		this.vertresolution = stream.readUint32();
  		stream.readUint32();
  		this.frame_count = stream.readUint16();
  		compressorname_length = Math.min(31, stream.readUint8());
  		this.compressorname = stream.readString(compressorname_length);
  		if (compressorname_length < 31) {
  			stream.readString(31 - compressorname_length);
  		}
  		this.depth = stream.readUint16();
  		stream.readUint16();
  		this.parseFooter(stream);
  	});

  	BoxParser.createMediaSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, function(stream) {
  		this.parseHeader(stream);
  		stream.readUint32Array(2);
  		this.channel_count = stream.readUint16();
  		this.samplesize = stream.readUint16();
  		stream.readUint16();
  		stream.readUint16();
  		this.samplerate = (stream.readUint32()/(1<<16));
  		this.parseFooter(stream);
  	});

  	// Sample entries inheriting from Audio and Video
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc1");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc2");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc3");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "avc4");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "av01");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "hev1");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "vp08");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, "vp09");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"mp4a");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"ac-3");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"ec-3");
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"Opus");

  	// Encrypted sample entries
  	BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_VISUAL, 	"encv");
  	BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_AUDIO, 	"enca");
  	BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, 	"encu");
  	BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SYSTEM, 	"encs");
  	BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_TEXT, 		"enct");
  	BoxParser.createEncryptedSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, 	"encm");
  	// file:src/parsing/a1lx.js
  	BoxParser.createBoxCtor("a1lx", function(stream) {
  		var large_size = stream.readUint8() & 1;
  		var FieldLength = ((large_size & 1) + 1) * 16;
  		this.layer_size = [];
  		for (var i = 0; i < 3; i++) {
  			if (FieldLength == 16) {
  				this.layer_size[i] = stream.readUint16();
  			} else {
  				this.layer_size[i] = stream.readUint32();
  			}
  		}
  	});// file:src/parsing/a1op.js
  	BoxParser.createBoxCtor("a1op", function(stream) {
  		this.op_index = stream.readUint8();
  	});// file:src/parsing/auxC.js
  	BoxParser.createFullBoxCtor("auxC", function(stream) {
  		this.aux_type = stream.readCString();
  		var aux_subtype_length = this.size - this.hdr_size - (this.aux_type.length + 1);
  		this.aux_subtype = stream.readUint8Array(aux_subtype_length);
  	});// file:src/parsing/av1C.js
  	BoxParser.createBoxCtor("av1C", function(stream) {
  		var tmp = stream.readUint8();
  		if ((tmp >> 7) & 0x1 !== 1) {
  			Log.error("av1C marker problem");
  			return;
  		}
  		this.version = tmp & 0x7F;
  		if (this.version !== 1) {
  			Log.error("av1C version "+this.version+" not supported");
  			return;
  		}
  		tmp = stream.readUint8();
  		this.seq_profile = (tmp >> 5) & 0x7;
  		this.seq_level_idx_0 = tmp & 0x1F;
  		tmp = stream.readUint8();
  		this.seq_tier_0 = (tmp >> 7) & 0x1;
  		this.high_bitdepth = (tmp >> 6) & 0x1;
  		this.twelve_bit = (tmp >> 5) & 0x1;
  		this.monochrome = (tmp >> 4) & 0x1;
  		this.chroma_subsampling_x = (tmp >> 3) & 0x1;
  		this.chroma_subsampling_y = (tmp >> 2) & 0x1;
  		this.chroma_sample_position = (tmp & 0x3);
  		tmp = stream.readUint8();
  		this.reserved_1 = (tmp >> 5) & 0x7;
  		if (this.reserved_1 !== 0) {
  			Log.error("av1C reserved_1 parsing problem");
  			return;
  		}
  		this.initial_presentation_delay_present = (tmp >> 4) & 0x1;
  		if (this.initial_presentation_delay_present === 1) {
  			this.initial_presentation_delay_minus_one = (tmp & 0xF);
  		} else {
  			this.reserved_2 = (tmp & 0xF);
  			if (this.reserved_2 !== 0) {
  				Log.error("av1C reserved_2 parsing problem");
  				return;
  			}
  		}

  		var configOBUs_length = this.size - this.hdr_size - 4;
  		this.configOBUs = stream.readUint8Array(configOBUs_length);
  	});

  	// file:src/parsing/avcC.js
  	BoxParser.createBoxCtor("avcC", function(stream) {
  		var i;
  		var toparse;
  		this.configurationVersion = stream.readUint8();
  		this.AVCProfileIndication = stream.readUint8();
  		this.profile_compatibility = stream.readUint8();
  		this.AVCLevelIndication = stream.readUint8();
  		this.lengthSizeMinusOne = (stream.readUint8() & 0x3);
  		this.nb_SPS_nalus = (stream.readUint8() & 0x1F);
  		toparse = this.size - this.hdr_size - 6;
  		this.SPS = [];
  		for (i = 0; i < this.nb_SPS_nalus; i++) {
  			this.SPS[i] = {};
  			this.SPS[i].length = stream.readUint16();
  			this.SPS[i].nalu = stream.readUint8Array(this.SPS[i].length);
  			toparse -= 2+this.SPS[i].length;
  		}
  		this.nb_PPS_nalus = stream.readUint8();
  		toparse--;
  		this.PPS = [];
  		for (i = 0; i < this.nb_PPS_nalus; i++) {
  			this.PPS[i] = {};
  			this.PPS[i].length = stream.readUint16();
  			this.PPS[i].nalu = stream.readUint8Array(this.PPS[i].length);
  			toparse -= 2+this.PPS[i].length;
  		}
  		if (toparse>0) {
  			this.ext = stream.readUint8Array(toparse);
  		}
  	});

  	// file:src/parsing/btrt.js
  	BoxParser.createBoxCtor("btrt", function(stream) {
  		this.bufferSizeDB = stream.readUint32();
  		this.maxBitrate = stream.readUint32();
  		this.avgBitrate = stream.readUint32();
  	});

  	// file:src/parsing/clap.js
  	BoxParser.createBoxCtor("clap", function(stream) {
  		this.cleanApertureWidthN = stream.readUint32();
  		this.cleanApertureWidthD = stream.readUint32();
  		this.cleanApertureHeightN = stream.readUint32();
  		this.cleanApertureHeightD = stream.readUint32();
  		this.horizOffN = stream.readUint32();
  		this.horizOffD = stream.readUint32();
  		this.vertOffN = stream.readUint32();
  		this.vertOffD = stream.readUint32();
  	});// file:src/parsing/clli.js
  	BoxParser.createBoxCtor("clli", function(stream) {
  		this.max_content_light_level = stream.readUint16();
  	    this.max_pic_average_light_level = stream.readUint16();
  	});

  	// file:src/parsing/co64.js
  	BoxParser.createFullBoxCtor("co64", function(stream) {
  		var entry_count;
  		var i;
  		entry_count = stream.readUint32();
  		this.chunk_offsets = [];
  		if (this.version === 0) {
  			for(i=0; i<entry_count; i++) {
  				this.chunk_offsets.push(stream.readUint64());
  			}
  		}
  	});

  	// file:src/parsing/CoLL.js
  	BoxParser.createFullBoxCtor("CoLL", function(stream) {
  		this.maxCLL = stream.readUint16();
  	    this.maxFALL = stream.readUint16();
  	});

  	// file:src/parsing/colr.js
  	BoxParser.createBoxCtor("colr", function(stream) {
  		this.colour_type = stream.readString(4);
  		if (this.colour_type === 'nclx') {
  			this.colour_primaries = stream.readUint16();
  			this.transfer_characteristics = stream.readUint16();
  			this.matrix_coefficients = stream.readUint16();
  			var tmp = stream.readUint8();
  			this.full_range_flag = tmp >> 7;
  		} else if (this.colour_type === 'rICC') {
  			this.ICC_profile = stream.readUint8Array(this.size - 4);
  		} else if (this.colour_type === 'prof') {
  			this.ICC_profile = stream.readUint8Array(this.size - 4);
  		}
  	});// file:src/parsing/cprt.js
  	BoxParser.createFullBoxCtor("cprt", function (stream) {
  		this.parseLanguage(stream);
  		this.notice = stream.readCString();
  	});

  	// file:src/parsing/cslg.js
  	BoxParser.createFullBoxCtor("cslg", function(stream) {
  		if (this.version === 0) {
  			this.compositionToDTSShift = stream.readInt32(); /* signed */
  			this.leastDecodeToDisplayDelta = stream.readInt32(); /* signed */
  			this.greatestDecodeToDisplayDelta = stream.readInt32(); /* signed */
  			this.compositionStartTime = stream.readInt32(); /* signed */
  			this.compositionEndTime = stream.readInt32(); /* signed */
  		}
  	});

  	// file:src/parsing/ctts.js
  	BoxParser.createFullBoxCtor("ctts", function(stream) {
  		var entry_count;
  		var i;
  		entry_count = stream.readUint32();
  		this.sample_counts = [];
  		this.sample_offsets = [];
  		if (this.version === 0) {
  			for(i=0; i<entry_count; i++) {
  				this.sample_counts.push(stream.readUint32());
  				/* some files are buggy and declare version=0 while using signed offsets.
  				   The likelyhood of using the most significant bit in a 32-bits time offset is very low,
  				   so using signed value here as well */
  				   var value = stream.readInt32();
  				   if (value < 0) {
  				   		Log.warn("BoxParser", "ctts box uses negative values without using version 1");
  				   }
  				this.sample_offsets.push(value);
  			}
  		} else if (this.version == 1) {
  			for(i=0; i<entry_count; i++) {
  				this.sample_counts.push(stream.readUint32());
  				this.sample_offsets.push(stream.readInt32()); /* signed */
  			}
  		}
  	});

  	// file:src/parsing/dac3.js
  	BoxParser.createBoxCtor("dac3", function(stream) {
  		var tmp_byte1 = stream.readUint8();
  		var tmp_byte2 = stream.readUint8();
  		var tmp_byte3 = stream.readUint8();
  		this.fscod = tmp_byte1 >> 6;
  		this.bsid  = ((tmp_byte1 >> 1) & 0x1F);
  		this.bsmod = ((tmp_byte1 & 0x1) <<  2) | ((tmp_byte2 >> 6) & 0x3);
  		this.acmod = ((tmp_byte2 >> 3) & 0x7);
  		this.lfeon = ((tmp_byte2 >> 2) & 0x1);
  		this.bit_rate_code = (tmp_byte2 & 0x3) | ((tmp_byte3 >> 5) & 0x7);
  	});

  	// file:src/parsing/dec3.js
  	BoxParser.createBoxCtor("dec3", function(stream) {
  		var tmp_16 = stream.readUint16();
  		this.data_rate = tmp_16 >> 3;
  		this.num_ind_sub = tmp_16 & 0x7;
  		this.ind_subs = [];
  		for (var i = 0; i < this.num_ind_sub+1; i++) {
  			var ind_sub = {};
  			this.ind_subs.push(ind_sub);
  			var tmp_byte1 = stream.readUint8();
  			var tmp_byte2 = stream.readUint8();
  			var tmp_byte3 = stream.readUint8();
  			ind_sub.fscod = tmp_byte1 >> 6;
  			ind_sub.bsid  = ((tmp_byte1 >> 1) & 0x1F);
  			ind_sub.bsmod = ((tmp_byte1 & 0x1) << 4) | ((tmp_byte2 >> 4) & 0xF);
  			ind_sub.acmod = ((tmp_byte2 >> 1) & 0x7);
  			ind_sub.lfeon = (tmp_byte2 & 0x1);
  			ind_sub.num_dep_sub = ((tmp_byte3 >> 1) & 0xF);
  			if (ind_sub.num_dep_sub > 0) {
  				ind_sub.chan_loc = ((tmp_byte3 & 0x1) << 8) | stream.readUint8();
  			}
  		}
  	});

  	// file:src/parsing/dfLa.js
  	BoxParser.createFullBoxCtor("dfLa", function(stream) {
  	    var BLOCKTYPE_MASK = 0x7F;
  	    var LASTMETADATABLOCKFLAG_MASK = 0x80;

  	    var boxesFound = [];
  	    var knownBlockTypes = [
  	        "STREAMINFO",
  	        "PADDING",
  	        "APPLICATION",
  	        "SEEKTABLE",
  	        "VORBIS_COMMENT",
  	        "CUESHEET",
  	        "PICTURE",
  	        "RESERVED"
  	    ];

  	    // dfLa is a FullBox
  	    this.parseFullHeader(stream);

  	    // for (i=0; ; i++) { // to end of box
  	    do {
  	        var flagAndType = stream.readUint8();

  	        var type = Math.min(
  	            (flagAndType & BLOCKTYPE_MASK),
  	            (knownBlockTypes.length - 1)
  	        );

  	        // if this is a STREAMINFO block, read the true samplerate since this
  	        // can be different to the AudioSampleEntry samplerate.
  	        if (!(type)) {
  	            // read past all the other stuff
  	            stream.readUint8Array(13);

  	            // extract samplerate
  	            this.samplerate = (stream.readUint32() >> 12);

  	            // read to end of STREAMINFO
  	            stream.readUint8Array(20);
  	        } else {
  	            // not interested in other block types so just discard length bytes
  	            stream.readUint8Array(stream.readUint24());
  	        }

  	        boxesFound.push(knownBlockTypes[type]);

  	        if (!!(flagAndType & LASTMETADATABLOCKFLAG_MASK)) {
  	            break;
  	        }
  	    } while (true);

  	    this.numMetadataBlocks =
  	        boxesFound.length + " (" + boxesFound.join(", ") + ")";
  	});
  	// file:src/parsing/dimm.js
  	BoxParser.createBoxCtor("dimm", function(stream) {
  		this.bytessent = stream.readUint64();
  	});

  	// file:src/parsing/dmax.js
  	BoxParser.createBoxCtor("dmax", function(stream) {
  		this.time = stream.readUint32();
  	});

  	// file:src/parsing/dmed.js
  	BoxParser.createBoxCtor("dmed", function(stream) {
  		this.bytessent = stream.readUint64();
  	});

  	// file:src/parsing/dOps.js
  	BoxParser.createBoxCtor("dOps", function(stream) {
  		this.Version = stream.readUint8();
  		this.OutputChannelCount = stream.readUint8();
  		this.PreSkip = stream.readUint16();
  		this.InputSampleRate = stream.readUint32();
  		this.OutputGain = stream.readInt16();
  		this.ChannelMappingFamily = stream.readUint8();
  		if (this.ChannelMappingFamily !== 0) {
  			this.StreamCount = stream.readUint8();
  			this.CoupledCount = stream.readUint8();
  			this.ChannelMapping = [];
  			for (var i = 0; i < this.OutputChannelCount; i++) {
  				this.ChannelMapping[i] = stream.readUint8();
  			}
  		}
  	});

  	// file:src/parsing/dref.js
  	BoxParser.createFullBoxCtor("dref", function(stream) {
  		var ret;
  		var box;
  		this.entries = [];
  		var entry_count = stream.readUint32();
  		for (var i = 0; i < entry_count; i++) {
  			ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				box = ret.box;
  				this.entries.push(box);
  			} else {
  				return;
  			}
  		}
  	});

  	// file:src/parsing/drep.js
  	BoxParser.createBoxCtor("drep", function(stream) {
  		this.bytessent = stream.readUint64();
  	});

  	// file:src/parsing/elng.js
  	BoxParser.createFullBoxCtor("elng", function(stream) {
  		this.extended_language = stream.readString(this.size-this.hdr_size);
  	});

  	// file:src/parsing/elst.js
  	BoxParser.createFullBoxCtor("elst", function(stream) {
  		this.entries = [];
  		var entry_count = stream.readUint32();
  		for (var i = 0; i < entry_count; i++) {
  			var entry = {};
  			this.entries.push(entry);
  			if (this.version === 1) {
  				entry.segment_duration = stream.readUint64();
  				entry.media_time = stream.readInt64();
  			} else {
  				entry.segment_duration = stream.readUint32();
  				entry.media_time = stream.readInt32();
  			}
  			entry.media_rate_integer = stream.readInt16();
  			entry.media_rate_fraction = stream.readInt16();
  		}
  	});

  	// file:src/parsing/emsg.js
  	BoxParser.createFullBoxCtor("emsg", function(stream) {
  		if (this.version == 1) {
  			this.timescale 					= stream.readUint32();
  			this.presentation_time 			= stream.readUint64();
  			this.event_duration			 	= stream.readUint32();
  			this.id 						= stream.readUint32();
  			this.scheme_id_uri 				= stream.readCString();
  			this.value 						= stream.readCString();
  		} else {
  			this.scheme_id_uri 				= stream.readCString();
  			this.value 						= stream.readCString();
  			this.timescale 					= stream.readUint32();
  			this.presentation_time_delta 	= stream.readUint32();
  			this.event_duration			 	= stream.readUint32();
  			this.id 						= stream.readUint32();
  		}
  		var message_size = this.size - this.hdr_size - (4*4 + (this.scheme_id_uri.length+1) + (this.value.length+1));
  		if (this.version == 1) {
  			message_size -= 4;
  		}
  		this.message_data = stream.readUint8Array(message_size);
  	});

  	// file:src/parsing/esds.js
  	BoxParser.createFullBoxCtor("esds", function(stream) {
  		var esd_data = stream.readUint8Array(this.size-this.hdr_size);
  		if (typeof MPEG4DescriptorParser !== "undefined") {
  			var esd_parser = new MPEG4DescriptorParser();
  			this.esd = esd_parser.parseOneDescriptor(new DataStream(esd_data.buffer, 0, DataStream.BIG_ENDIAN));
  		}
  	});

  	// file:src/parsing/fiel.js
  	BoxParser.createBoxCtor("fiel", function(stream) {
  		this.fieldCount = stream.readUint8();
  		this.fieldOrdering = stream.readUint8();
  	});

  	// file:src/parsing/frma.js
  	BoxParser.createBoxCtor("frma", function(stream) {
  		this.data_format = stream.readString(4);
  	});

  	// file:src/parsing/ftyp.js
  	BoxParser.createBoxCtor("ftyp", function(stream) {
  		var toparse = this.size - this.hdr_size;
  		this.major_brand = stream.readString(4);
  		this.minor_version = stream.readUint32();
  		toparse -= 8;
  		this.compatible_brands = [];
  		var i = 0;
  		while (toparse>=4) {
  			this.compatible_brands[i] = stream.readString(4);
  			toparse -= 4;
  			i++;
  		}
  	});

  	// file:src/parsing/hdlr.js
  	BoxParser.createFullBoxCtor("hdlr", function(stream) {
  		if (this.version === 0) {
  			stream.readUint32();
  			this.handler = stream.readString(4);
  			stream.readUint32Array(3);
  			this.name = stream.readString(this.size-this.hdr_size-20);
  			if (this.name[this.name.length-1]==='\0') {
  				this.name = this.name.slice(0,-1);
  			}
  		}
  	});

  	// file:src/parsing/hvcC.js
  	BoxParser.createBoxCtor("hvcC", function(stream) {
  		var i, j;
  		var length;
  		var tmp_byte;
  		this.configurationVersion = stream.readUint8();
  		tmp_byte = stream.readUint8();
  		this.general_profile_space = tmp_byte >> 6;
  		this.general_tier_flag = (tmp_byte & 0x20) >> 5;
  		this.general_profile_idc = (tmp_byte & 0x1F);
  		this.general_profile_compatibility = stream.readUint32();
  		this.general_constraint_indicator = stream.readUint8Array(6);
  		this.general_level_idc = stream.readUint8();
  		this.min_spatial_segmentation_idc = stream.readUint16() & 0xFFF;
  		this.parallelismType = (stream.readUint8() & 0x3);
  		this.chroma_format_idc = (stream.readUint8() & 0x3);
  		this.bit_depth_luma_minus8 = (stream.readUint8() & 0x7);
  		this.bit_depth_chroma_minus8 = (stream.readUint8() & 0x7);
  		this.avgFrameRate = stream.readUint16();
  		tmp_byte = stream.readUint8();
  		this.constantFrameRate = (tmp_byte >> 6);
  		this.numTemporalLayers = (tmp_byte & 0XD) >> 3;
  		this.temporalIdNested = (tmp_byte & 0X4) >> 2;
  		this.lengthSizeMinusOne = (tmp_byte & 0X3);

  		this.nalu_arrays = [];
  		var numOfArrays = stream.readUint8();
  		for (i = 0; i < numOfArrays; i++) {
  			var nalu_array = [];
  			this.nalu_arrays.push(nalu_array);
  			tmp_byte = stream.readUint8();
  			nalu_array.completeness = (tmp_byte & 0x80) >> 7;
  			nalu_array.nalu_type = tmp_byte & 0x3F;
  			var numNalus = stream.readUint16();
  			for (j = 0; j < numNalus; j++) {
  				var nalu = {};
  				nalu_array.push(nalu);
  				length = stream.readUint16();
  				nalu.data   = stream.readUint8Array(length);
  			}
  		}
  	});

  	// file:src/parsing/iinf.js
  	BoxParser.createFullBoxCtor("iinf", function(stream) {
  		var ret;
  		if (this.version === 0) {
  			this.entry_count = stream.readUint16();
  		} else {
  			this.entry_count = stream.readUint32();
  		}
  		this.item_infos = [];
  		for (var i = 0; i < this.entry_count; i++) {
  			ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				if (ret.box.type !== "infe") {
  					Log.error("BoxParser", "Expected 'infe' box, got "+ret.box.type);
  				}
  				this.item_infos[i] = ret.box;
  			} else {
  				return;
  			}
  		}
  	});

  	// file:src/parsing/iloc.js
  	BoxParser.createFullBoxCtor("iloc", function(stream) {
  		var byte;
  		byte = stream.readUint8();
  		this.offset_size = (byte >> 4) & 0xF;
  		this.length_size = byte & 0xF;
  		byte = stream.readUint8();
  		this.base_offset_size = (byte >> 4) & 0xF;
  		if (this.version === 1 || this.version === 2) {
  			this.index_size = byte & 0xF;
  		} else {
  			this.index_size = 0;
  			// reserved = byte & 0xF;
  		}
  		this.items = [];
  		var item_count = 0;
  		if (this.version < 2) {
  			item_count = stream.readUint16();
  		} else if (this.version === 2) {
  			item_count = stream.readUint32();
  		} else {
  			throw "version of iloc box not supported";
  		}
  		for (var i = 0; i < item_count; i++) {
  			var item = {};
  			this.items.push(item);
  			if (this.version < 2) {
  				item.item_ID = stream.readUint16();
  			} else if (this.version === 2) {
  				item.item_ID = stream.readUint16();
  			} else {
  				throw "version of iloc box not supported";
  			}
  			if (this.version === 1 || this.version === 2) {
  				item.construction_method = (stream.readUint16() & 0xF);
  			} else {
  				item.construction_method = 0;
  			}
  			item.data_reference_index = stream.readUint16();
  			switch(this.base_offset_size) {
  				case 0:
  					item.base_offset = 0;
  					break;
  				case 4:
  					item.base_offset = stream.readUint32();
  					break;
  				case 8:
  					item.base_offset = stream.readUint64();
  					break;
  				default:
  					throw "Error reading base offset size";
  			}
  			var extent_count = stream.readUint16();
  			item.extents = [];
  			for (var j=0; j < extent_count; j++) {
  				var extent = {};
  				item.extents.push(extent);
  				if (this.version === 1 || this.version === 2) {
  					switch(this.index_size) {
  						case 0:
  							extent.extent_index = 0;
  							break;
  						case 4:
  							extent.extent_index = stream.readUint32();
  							break;
  						case 8:
  							extent.extent_index = stream.readUint64();
  							break;
  						default:
  							throw "Error reading extent index";
  					}
  				}
  				switch(this.offset_size) {
  					case 0:
  						extent.extent_offset = 0;
  						break;
  					case 4:
  						extent.extent_offset = stream.readUint32();
  						break;
  					case 8:
  						extent.extent_offset = stream.readUint64();
  						break;
  					default:
  						throw "Error reading extent index";
  				}
  				switch(this.length_size) {
  					case 0:
  						extent.extent_length = 0;
  						break;
  					case 4:
  						extent.extent_length = stream.readUint32();
  						break;
  					case 8:
  						extent.extent_length = stream.readUint64();
  						break;
  					default:
  						throw "Error reading extent index";
  				}
  			}
  		}
  	});

  	// file:src/parsing/imir.js
  	BoxParser.createBoxCtor("imir", function(stream) {
  		var tmp = stream.readUint8();
  		this.reserved = tmp >> 7;
  		this.axis = tmp & 1;
  	});// file:src/parsing/infe.js
  	BoxParser.createFullBoxCtor("infe", function(stream) {
  		if (this.version === 0 || this.version === 1) {
  			this.item_ID = stream.readUint16();
  			this.item_protection_index = stream.readUint16();
  			this.item_name = stream.readCString();
  			this.content_type = stream.readCString();
  			this.content_encoding = stream.readCString();
  		}
  		if (this.version === 1) {
  			this.extension_type = stream.readString(4);
  			Log.warn("BoxParser", "Cannot parse extension type");
  			stream.seek(this.start+this.size);
  			return;
  		}
  		if (this.version >= 2) {
  			if (this.version === 2) {
  				this.item_ID = stream.readUint16();
  			} else if (this.version === 3) {
  				this.item_ID = stream.readUint32();
  			}
  			this.item_protection_index = stream.readUint16();
  			this.item_type = stream.readString(4);
  			this.item_name = stream.readCString();
  			if (this.item_type === "mime") {
  				this.content_type = stream.readCString();
  				this.content_encoding = stream.readCString();
  			} else if (this.item_type === "uri ") {
  				this.item_uri_type = stream.readCString();
  			}
  		}
  	});
  	// file:src/parsing/ipma.js
  	BoxParser.createFullBoxCtor("ipma", function(stream) {
  		var i, j;
  		entry_count = stream.readUint32();
  		this.associations = [];
  		for(i=0; i<entry_count; i++) {
  			var item_assoc = {};
  			this.associations.push(item_assoc);
  			if (this.version < 1) {
  				item_assoc.id = stream.readUint16();
  			} else {
  				item_assoc.id = stream.readUint32();
  			}
  			var association_count = stream.readUint8();
  			item_assoc.props = [];
  			for (j = 0; j < association_count; j++) {
  				var tmp = stream.readUint8();
  				var p = {};
  				item_assoc.props.push(p);
  				p.essential = ((tmp & 0x80) >> 7) === 1;
  				if (this.flags & 0x1) {
  					p.property_index = (tmp & 0x7F) << 8 | stream.readUint8();
  				} else {
  					p.property_index = (tmp & 0x7F);
  				}
  			}
  		}
  	});

  	// file:src/parsing/iref.js
  	BoxParser.createFullBoxCtor("iref", function(stream) {
  		var ret;
  		var box;
  		this.references = [];

  		while (stream.getPosition() < this.start+this.size) {
  			ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				if (this.version === 0) {
  					box = new BoxParser.SingleItemTypeReferenceBox(ret.type, ret.size, ret.hdr_size, ret.start);
  				} else {
  					box = new BoxParser.SingleItemTypeReferenceBoxLarge(ret.type, ret.size, ret.hdr_size, ret.start);
  				}
  				if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
  					Log.warn("BoxParser", box.type+" box writing not yet implemented, keeping unparsed data in memory for later write");
  					box.parseDataAndRewind(stream);
  				}
  				box.parse(stream);
  				this.references.push(box);
  			} else {
  				return;
  			}
  		}
  	});
  	// file:src/parsing/irot.js
  	BoxParser.createBoxCtor("irot", function(stream) {
  		this.angle = stream.readUint8() & 0x3;
  	});

  	// file:src/parsing/ispe.js
  	BoxParser.createFullBoxCtor("ispe", function(stream) {
  		this.image_width = stream.readUint32();
  		this.image_height = stream.readUint32();
  	});// file:src/parsing/kind.js
  	BoxParser.createFullBoxCtor("kind", function(stream) {
  		this.schemeURI = stream.readCString();
  		this.value = stream.readCString();
  	});
  	// file:src/parsing/leva.js
  	BoxParser.createFullBoxCtor("leva", function(stream) {
  		var count = stream.readUint8();
  		this.levels = [];
  		for (var i = 0; i < count; i++) {
  			var level = {};
  			this.levels[i] = level;
  			level.track_ID = stream.readUint32();
  			var tmp_byte = stream.readUint8();
  			level.padding_flag = tmp_byte >> 7;
  			level.assignment_type = tmp_byte & 0x7F;
  			switch (level.assignment_type) {
  				case 0:
  					level.grouping_type = stream.readString(4);
  					break;
  				case 1:
  					level.grouping_type = stream.readString(4);
  					level.grouping_type_parameter = stream.readUint32();
  					break;
  				case 2:
  					break;
  				case 3:
  					break;
  				case 4:
  					level.sub_track_id = stream.readUint32();
  					break;
  				default:
  					Log.warn("BoxParser", "Unknown leva assignement type");
  			}
  		}
  	});

  	// file:src/parsing/lsel.js
  	BoxParser.createBoxCtor("lsel", function(stream) {
  		this.layer_id = stream.readUint16();
  	});// file:src/parsing/maxr.js
  	BoxParser.createBoxCtor("maxr", function(stream) {
  		this.period = stream.readUint32();
  		this.bytes = stream.readUint32();
  	});

  	// file:src/parsing/mdcv.js
  	BoxParser.createBoxCtor("mdcv", function(stream) {
  	    this.display_primaries = [];
  	    this.display_primaries[0] = {};
  	    this.display_primaries[0].x = stream.readUint16();
  	    this.display_primaries[0].y = stream.readUint16();
  	    this.display_primaries[1] = {};
  	    this.display_primaries[1].x = stream.readUint16();
  	    this.display_primaries[1].y = stream.readUint16();
  	    this.display_primaries[2] = {};
  	    this.display_primaries[2].x = stream.readUint16();
  	    this.display_primaries[2].y = stream.readUint16();
  	    this.white_point = {};
  	    this.white_point.x = stream.readUint16();
  	    this.white_point.y = stream.readUint16();
  	    this.max_display_mastering_luminance = stream.readUint32();
  	    this.min_display_mastering_luminance = stream.readUint32();
  	});

  	// file:src/parsing/mdhd.js
  	BoxParser.createFullBoxCtor("mdhd", function(stream) {
  		if (this.version == 1) {
  			this.creation_time = stream.readUint64();
  			this.modification_time = stream.readUint64();
  			this.timescale = stream.readUint32();
  			this.duration = stream.readUint64();
  		} else {
  			this.creation_time = stream.readUint32();
  			this.modification_time = stream.readUint32();
  			this.timescale = stream.readUint32();
  			this.duration = stream.readUint32();
  		}
  		this.parseLanguage(stream);
  		stream.readUint16();
  	});

  	// file:src/parsing/mehd.js
  	BoxParser.createFullBoxCtor("mehd", function(stream) {
  		if (this.flags & 0x1) {
  			Log.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
  			this.version = 1;
  		}
  		if (this.version == 1) {
  			this.fragment_duration = stream.readUint64();
  		} else {
  			this.fragment_duration = stream.readUint32();
  		}
  	});

  	// file:src/parsing/meta.js
  	BoxParser.createFullBoxCtor("meta", function(stream) {
  		this.boxes = [];
  		BoxParser.ContainerBox.prototype.parse.call(this, stream);
  	});
  	// file:src/parsing/mfhd.js
  	BoxParser.createFullBoxCtor("mfhd", function(stream) {
  		this.sequence_number = stream.readUint32();
  	});

  	// file:src/parsing/mfro.js
  	BoxParser.createFullBoxCtor("mfro", function(stream) {
  		this._size = stream.readUint32();
  	});

  	// file:src/parsing/mvhd.js
  	BoxParser.createFullBoxCtor("mvhd", function(stream) {
  		if (this.version == 1) {
  			this.creation_time = stream.readUint64();
  			this.modification_time = stream.readUint64();
  			this.timescale = stream.readUint32();
  			this.duration = stream.readUint64();
  		} else {
  			this.creation_time = stream.readUint32();
  			this.modification_time = stream.readUint32();
  			this.timescale = stream.readUint32();
  			this.duration = stream.readUint32();
  		}
  		this.rate = stream.readUint32();
  		this.volume = stream.readUint16()>>8;
  		stream.readUint16();
  		stream.readUint32Array(2);
  		this.matrix = stream.readUint32Array(9);
  		stream.readUint32Array(6);
  		this.next_track_id = stream.readUint32();
  	});
  	// file:src/parsing/npck.js
  	BoxParser.createBoxCtor("npck", function(stream) {
  		this.packetssent = stream.readUint32();
  	});

  	// file:src/parsing/nump.js
  	BoxParser.createBoxCtor("nump", function(stream) {
  		this.packetssent = stream.readUint64();
  	});

  	// file:src/parsing/padb.js
  	BoxParser.createFullBoxCtor("padb", function(stream) {
  		var sample_count = stream.readUint32();
  		this.padbits = [];
  		for (var i = 0; i < Math.floor((sample_count+1)/2); i++) {
  			this.padbits = stream.readUint8();
  		}
  	});

  	// file:src/parsing/pasp.js
  	BoxParser.createBoxCtor("pasp", function(stream) {
  		this.hSpacing = stream.readUint32();
  		this.vSpacing = stream.readUint32();
  	});// file:src/parsing/payl.js
  	BoxParser.createBoxCtor("payl", function(stream) {
  		this.text = stream.readString(this.size - this.hdr_size);
  	});

  	// file:src/parsing/payt.js
  	BoxParser.createBoxCtor("payt", function(stream) {
  		this.payloadID = stream.readUint32();
  		var count = stream.readUint8();
  		this.rtpmap_string = stream.readString(count);
  	});

  	// file:src/parsing/pdin.js
  	BoxParser.createFullBoxCtor("pdin", function(stream) {
  		var count = (this.size - this.hdr_size)/8;
  		this.rate = [];
  		this.initial_delay = [];
  		for (var i = 0; i < count; i++) {
  			this.rate[i] = stream.readUint32();
  			this.initial_delay[i] = stream.readUint32();
  		}
  	});

  	// file:src/parsing/pitm.js
  	BoxParser.createFullBoxCtor("pitm", function(stream) {
  		if (this.version === 0) {
  			this.item_id = stream.readUint16();
  		} else {
  			this.item_id = stream.readUint32();
  		}
  	});

  	// file:src/parsing/pixi.js
  	BoxParser.createFullBoxCtor("pixi", function(stream) {
  		var i;
  		this.num_channels = stream.readUint8();
  		this.bits_per_channels = [];
  		for (i = 0; i < this.num_channels; i++) {
  			this.bits_per_channels[i] = stream.readUint8();
  		}
  	});

  	// file:src/parsing/pmax.js
  	BoxParser.createBoxCtor("pmax", function(stream) {
  		this.bytes = stream.readUint32();
  	});

  	// file:src/parsing/prft.js
  	BoxParser.createFullBoxCtor("prft", function(stream) {
  		this.ref_track_id = stream.readUint32();
  		this.ntp_timestamp = stream.readUint64();
  		if (this.version === 0) {
  			this.media_time = stream.readUint32();
  		} else {
  			this.media_time = stream.readUint64();
  		}
  	});

  	// file:src/parsing/pssh.js
  	BoxParser.createFullBoxCtor("pssh", function(stream) {
  		this.system_id = BoxParser.parseHex16(stream);
  		if (this.version > 0) {
  			var count = stream.readUint32();
  			this.kid = [];
  			for (var i = 0; i < count; i++) {
  				this.kid[i] = BoxParser.parseHex16(stream);
  			}
  		}
  		var datasize = stream.readUint32();
  		if (datasize > 0) {
  			this.data = stream.readUint8Array(datasize);
  		}
  	});

  	// file:src/parsing/qt/clef.js
  	BoxParser.createFullBoxCtor("clef", function(stream) {
  		this.width = stream.readUint32();
  		this.height = stream.readUint32();
  	});// file:src/parsing/qt/enof.js
  	BoxParser.createFullBoxCtor("enof", function(stream) {
  		this.width = stream.readUint32();
  		this.height = stream.readUint32();
  	});// file:src/parsing/qt/prof.js
  	BoxParser.createFullBoxCtor("prof", function(stream) {
  		this.width = stream.readUint32();
  		this.height = stream.readUint32();
  	});// file:src/parsing/qt/tapt.js
  	BoxParser.createContainerBoxCtor("tapt", null, [ "clef", "prof", "enof"]);// file:src/parsing/rtp.js
  	BoxParser.createBoxCtor("rtp ", function(stream) {
  		this.descriptionformat = stream.readString(4);
  		this.sdptext = stream.readString(this.size - this.hdr_size - 4);
  	});

  	// file:src/parsing/saio.js
  	BoxParser.createFullBoxCtor("saio", function(stream) {
  		if (this.flags & 0x1) {
  			this.aux_info_type = stream.readUint32();
  			this.aux_info_type_parameter = stream.readUint32();
  		}
  		var count = stream.readUint32();
  		this.offset = [];
  		for (var i = 0; i < count; i++) {
  			if (this.version === 0) {
  				this.offset[i] = stream.readUint32();
  			} else {
  				this.offset[i] = stream.readUint64();
  			}
  		}
  	});
  	// file:src/parsing/saiz.js
  	BoxParser.createFullBoxCtor("saiz", function(stream) {
  		if (this.flags & 0x1) {
  			this.aux_info_type = stream.readUint32();
  			this.aux_info_type_parameter = stream.readUint32();
  		}
  		this.default_sample_info_size = stream.readUint8();
  		var count = stream.readUint32();
  		this.sample_info_size = [];
  		if (this.default_sample_info_size === 0) {
  			for (var i = 0; i < count; i++) {
  				this.sample_info_size[i] = stream.readUint8();
  			}
  		}
  	});

  	// file:src/parsing/sampleentries/mett.js
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, "mett", function(stream) {
  		this.parseHeader(stream);
  		this.content_encoding = stream.readCString();
  		this.mime_format = stream.readCString();
  		this.parseFooter(stream);
  	});

  	// file:src/parsing/sampleentries/metx.js
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, "metx", function(stream) {
  		this.parseHeader(stream);
  		this.content_encoding = stream.readCString();
  		this.namespace = stream.readCString();
  		this.schema_location = stream.readCString();
  		this.parseFooter(stream);
  	});

  	// file:src/parsing/sampleentries/sbtt.js
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function(stream) {
  		this.parseHeader(stream);
  		this.content_encoding = stream.readCString();
  		this.mime_format = stream.readCString();
  		this.parseFooter(stream);
  	});

  	// file:src/parsing/sampleentries/stpp.js
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function(stream) {
  		this.parseHeader(stream);
  		this.namespace = stream.readCString();
  		this.schema_location = stream.readCString();
  		this.auxiliary_mime_types = stream.readCString();
  		this.parseFooter(stream);
  	});

  	// file:src/parsing/sampleentries/stxt.js
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function(stream) {
  		this.parseHeader(stream);
  		this.content_encoding = stream.readCString();
  		this.mime_format = stream.readCString();
  		this.parseFooter(stream);
  	});

  	// file:src/parsing/sampleentries/tx3g.js
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function(stream) {
  		this.parseHeader(stream);
  		this.displayFlags = stream.readUint32();
  		this.horizontal_justification = stream.readInt8();
  		this.vertical_justification = stream.readInt8();
  		this.bg_color_rgba = stream.readUint8Array(4);
  		this.box_record = stream.readInt16Array(4);
  		this.style_record = stream.readUint8Array(12);
  		this.parseFooter(stream);
  	});
  	// file:src/parsing/sampleentries/wvtt.js
  	BoxParser.createSampleEntryCtor(BoxParser.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function(stream) {
  		this.parseHeader(stream);
  		this.parseFooter(stream);
  	});

  	// file:src/parsing/samplegroups/alst.js
  	BoxParser.createSampleGroupCtor("alst", function(stream) {
  		var i;
  		var roll_count = stream.readUint16();
  		this.first_output_sample = stream.readUint16();
  		this.sample_offset = [];
  		for (i = 0; i < roll_count; i++) {
  			this.sample_offset[i] = stream.readUint32();
  		}
  		var remaining = this.description_length - 4 - 4*roll_count;
  		this.num_output_samples = [];
  		this.num_total_samples = [];
  		for (i = 0; i < remaining/4; i++) {
  			this.num_output_samples[i] = stream.readUint16();
  			this.num_total_samples[i] = stream.readUint16();
  		}
  	});

  	// file:src/parsing/samplegroups/avll.js
  	BoxParser.createSampleGroupCtor("avll", function(stream) {
  		this.layerNumber = stream.readUint8();
  		this.accurateStatisticsFlag = stream.readUint8();
  		this.avgBitRate = stream.readUint16();
  		this.avgFrameRate = stream.readUint16();
  	});

  	// file:src/parsing/samplegroups/avss.js
  	BoxParser.createSampleGroupCtor("avss", function(stream) {
  		this.subSequenceIdentifier = stream.readUint16();
  		this.layerNumber = stream.readUint8();
  		var tmp_byte = stream.readUint8();
  		this.durationFlag = tmp_byte >> 7;
  		this.avgRateFlag = (tmp_byte >> 6) & 0x1;
  		if (this.durationFlag) {
  			this.duration = stream.readUint32();
  		}
  		if (this.avgRateFlag) {
  			this.accurateStatisticsFlag = stream.readUint8();
  			this.avgBitRate = stream.readUint16();
  			this.avgFrameRate = stream.readUint16();
  		}
  		this.dependency = [];
  		var numReferences = stream.readUint8();
  		for (var i = 0; i < numReferences; i++) {
  			var dependencyInfo = {};
  			this.dependency.push(dependencyInfo);
  			dependencyInfo.subSeqDirectionFlag = stream.readUint8();
  			dependencyInfo.layerNumber = stream.readUint8();
  			dependencyInfo.subSequenceIdentifier = stream.readUint16();
  		}
  	});

  	// file:src/parsing/samplegroups/dtrt.js
  	BoxParser.createSampleGroupCtor("dtrt", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/samplegroups/mvif.js
  	BoxParser.createSampleGroupCtor("mvif", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/samplegroups/prol.js
  	BoxParser.createSampleGroupCtor("prol", function(stream) {
  		this.roll_distance = stream.readInt16();
  	});

  	// file:src/parsing/samplegroups/rap.js
  	BoxParser.createSampleGroupCtor("rap ", function(stream) {
  		var tmp_byte = stream.readUint8();
  		this.num_leading_samples_known = tmp_byte >> 7;
  		this.num_leading_samples = tmp_byte & 0x7F;
  	});

  	// file:src/parsing/samplegroups/rash.js
  	BoxParser.createSampleGroupCtor("rash", function(stream) {
  		this.operation_point_count = stream.readUint16();
  		if (this.description_length !== 2+(this.operation_point_count === 1?2:this.operation_point_count*6)+9) {
  			Log.warn("BoxParser", "Mismatch in "+this.grouping_type+" sample group length");
  			this.data =  stream.readUint8Array(this.description_length-2);
  		} else {
  			if (this.operation_point_count === 1) {
  				this.target_rate_share = stream.readUint16();
  			} else {
  				this.target_rate_share = [];
  				this.available_bitrate = [];
  				for (var i = 0; i < this.operation_point_count; i++) {
  					this.available_bitrate[i] = stream.readUint32();
  					this.target_rate_share[i] = stream.readUint16();
  				}
  			}
  			this.maximum_bitrate = stream.readUint32();
  			this.minimum_bitrate = stream.readUint32();
  			this.discard_priority = stream.readUint8();
  		}
  	});

  	// file:src/parsing/samplegroups/roll.js
  	BoxParser.createSampleGroupCtor("roll", function(stream) {
  		this.roll_distance = stream.readInt16();
  	});

  	// file:src/parsing/samplegroups/samplegroup.js
  	BoxParser.SampleGroupEntry.prototype.parse = function(stream) {
  		Log.warn("BoxParser", "Unknown Sample Group type: "+this.grouping_type);
  		this.data =  stream.readUint8Array(this.description_length);
  	};

  	// file:src/parsing/samplegroups/scif.js
  	BoxParser.createSampleGroupCtor("scif", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/samplegroups/scnm.js
  	BoxParser.createSampleGroupCtor("scnm", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/samplegroups/seig.js
  	BoxParser.createSampleGroupCtor("seig", function(stream) {
  		this.reserved = stream.readUint8();
  		var tmp = stream.readUint8();
  		this.crypt_byte_block = tmp >> 4;
  		this.skip_byte_block = tmp & 0xF;
  		this.isProtected = stream.readUint8();
  		this.Per_Sample_IV_Size = stream.readUint8();
  		this.KID = BoxParser.parseHex16(stream);
  		this.constant_IV_size = 0;
  		this.constant_IV = 0;
  		if (this.isProtected === 1 && this.Per_Sample_IV_Size === 0) {
  			this.constant_IV_size = stream.readUint8();
  			this.constant_IV = stream.readUint8Array(this.constant_IV_size);
  		}
  	});

  	// file:src/parsing/samplegroups/stsa.js
  	BoxParser.createSampleGroupCtor("stsa", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/samplegroups/sync.js
  	BoxParser.createSampleGroupCtor("sync", function(stream) {
  		var tmp_byte = stream.readUint8();
  		this.NAL_unit_type = tmp_byte & 0x3F;
  	});

  	// file:src/parsing/samplegroups/tele.js
  	BoxParser.createSampleGroupCtor("tele", function(stream) {
  		var tmp_byte = stream.readUint8();
  		this.level_independently_decodable = tmp_byte >> 7;
  	});

  	// file:src/parsing/samplegroups/tsas.js
  	BoxParser.createSampleGroupCtor("tsas", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/samplegroups/tscl.js
  	BoxParser.createSampleGroupCtor("tscl", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/samplegroups/vipr.js
  	BoxParser.createSampleGroupCtor("vipr", function(stream) {
  		Log.warn("BoxParser", "Sample Group type: "+this.grouping_type+" not fully parsed");
  	});

  	// file:src/parsing/sbgp.js
  	BoxParser.createFullBoxCtor("sbgp", function(stream) {
  		this.grouping_type = stream.readString(4);
  		if (this.version === 1) {
  			this.grouping_type_parameter = stream.readUint32();
  		} else {
  			this.grouping_type_parameter = 0;
  		}
  		this.entries = [];
  		var entry_count = stream.readUint32();
  		for (var i = 0; i < entry_count; i++) {
  			var entry = {};
  			this.entries.push(entry);
  			entry.sample_count = stream.readInt32();
  			entry.group_description_index = stream.readInt32();
  		}
  	});

  	// file:src/parsing/schm.js
  	BoxParser.createFullBoxCtor("schm", function(stream) {
  		this.scheme_type = stream.readString(4);
  		this.scheme_version = stream.readUint32();
  		if (this.flags & 0x000001) {
  			this.scheme_uri = stream.readString(this.size - this.hdr_size - 8);
  		}
  	});

  	// file:src/parsing/sdp.js
  	BoxParser.createBoxCtor("sdp ", function(stream) {
  		this.sdptext = stream.readString(this.size - this.hdr_size);
  	});

  	// file:src/parsing/sdtp.js
  	BoxParser.createFullBoxCtor("sdtp", function(stream) {
  		var tmp_byte;
  		var count = (this.size - this.hdr_size);
  		this.is_leading = [];
  		this.sample_depends_on = [];
  		this.sample_is_depended_on = [];
  		this.sample_has_redundancy = [];
  		for (var i = 0; i < count; i++) {
  			tmp_byte = stream.readUint8();
  			this.is_leading[i] = tmp_byte >> 6;
  			this.sample_depends_on[i] = (tmp_byte >> 4) & 0x3;
  			this.sample_is_depended_on[i] = (tmp_byte >> 2) & 0x3;
  			this.sample_has_redundancy[i] = tmp_byte & 0x3;
  		}
  	});

  	// file:src/parsing/senc.js
  	// Cannot be fully parsed because Per_Sample_IV_Size needs to be known
  	BoxParser.createFullBoxCtor("senc" /*, function(stream) {
  		this.parseFullHeader(stream);
  		var sample_count = stream.readUint32();
  		this.samples = [];
  		for (var i = 0; i < sample_count; i++) {
  			var sample = {};
  			// tenc.default_Per_Sample_IV_Size or seig.Per_Sample_IV_Size
  			sample.InitializationVector = this.readUint8Array(Per_Sample_IV_Size*8);
  			if (this.flags & 0x2) {
  				sample.subsamples = [];
  				subsample_count = stream.readUint16();
  				for (var j = 0; j < subsample_count; j++) {
  					var subsample = {};
  					subsample.BytesOfClearData = stream.readUint16();
  					subsample.BytesOfProtectedData = stream.readUint32();
  					sample.subsamples.push(subsample);
  				}
  			}
  			// TODO
  			this.samples.push(sample);
  		}
  	}*/);
  	// file:src/parsing/sgpd.js
  	BoxParser.createFullBoxCtor("sgpd", function(stream) {
  		this.grouping_type = stream.readString(4);
  		Log.debug("BoxParser", "Found Sample Groups of type "+this.grouping_type);
  		if (this.version === 1) {
  			this.default_length = stream.readUint32();
  		} else {
  			this.default_length = 0;
  		}
  		if (this.version >= 2) {
  			this.default_group_description_index = stream.readUint32();
  		}
  		this.entries = [];
  		var entry_count = stream.readUint32();
  		for (var i = 0; i < entry_count; i++) {
  			var entry;
  			if (BoxParser[this.grouping_type+"SampleGroupEntry"]) {
  				entry = new BoxParser[this.grouping_type+"SampleGroupEntry"](this.grouping_type);
  			}  else {
  				entry = new BoxParser.SampleGroupEntry(this.grouping_type);
  			}
  			this.entries.push(entry);
  			if (this.version === 1) {
  				if (this.default_length === 0) {
  					entry.description_length = stream.readUint32();
  				} else {
  					entry.description_length = this.default_length;
  				}
  			} else {
  				entry.description_length = this.default_length;
  			}
  			if (entry.write === BoxParser.SampleGroupEntry.prototype.write) {
  				Log.info("BoxParser", "SampleGroup for type "+this.grouping_type+" writing not yet implemented, keeping unparsed data in memory for later write");
  				// storing data
  				entry.data = stream.readUint8Array(entry.description_length);
  				// rewinding
  				stream.position -= entry.description_length;
  			}
  			entry.parse(stream);
  		}
  	});

  	// file:src/parsing/sidx.js
  	BoxParser.createFullBoxCtor("sidx", function(stream) {
  		this.reference_ID = stream.readUint32();
  		this.timescale = stream.readUint32();
  		if (this.version === 0) {
  			this.earliest_presentation_time = stream.readUint32();
  			this.first_offset = stream.readUint32();
  		} else {
  			this.earliest_presentation_time = stream.readUint64();
  			this.first_offset = stream.readUint64();
  		}
  		stream.readUint16();
  		this.references = [];
  		var count = stream.readUint16();
  		for (var i = 0; i < count; i++) {
  			var ref = {};
  			this.references.push(ref);
  			var tmp_32 = stream.readUint32();
  			ref.reference_type = (tmp_32 >> 31) & 0x1;
  			ref.referenced_size = tmp_32 & 0x7FFFFFFF;
  			ref.subsegment_duration = stream.readUint32();
  			tmp_32 = stream.readUint32();
  			ref.starts_with_SAP = (tmp_32 >> 31) & 0x1;
  			ref.SAP_type = (tmp_32 >> 28) & 0x7;
  			ref.SAP_delta_time = tmp_32 & 0xFFFFFFF;
  		}
  	});

  	// file:src/parsing/singleitemtypereference.js
  	BoxParser.SingleItemTypeReferenceBox = function(type, size, hdr_size, start) {
  		BoxParser.Box.call(this, type, size);
  		this.hdr_size = hdr_size;
  		this.start = start;
  	};
  	BoxParser.SingleItemTypeReferenceBox.prototype = new BoxParser.Box();
  	BoxParser.SingleItemTypeReferenceBox.prototype.parse = function(stream) {
  		this.from_item_ID = stream.readUint16();
  		var count =  stream.readUint16();
  		this.references = [];
  		for(var i = 0; i < count; i++) {
  			this.references[i] = stream.readUint16();
  		}
  	};

  	// file:src/parsing/singleitemtypereferencelarge.js
  	BoxParser.SingleItemTypeReferenceBoxLarge = function(type, size, hdr_size, start) {
  		BoxParser.Box.call(this, type, size);
  		this.hdr_size = hdr_size;
  		this.start = start;
  	};
  	BoxParser.SingleItemTypeReferenceBoxLarge.prototype = new BoxParser.Box();
  	BoxParser.SingleItemTypeReferenceBoxLarge.prototype.parse = function(stream) {
  		this.from_item_ID = stream.readUint32();
  		var count =  stream.readUint16();
  		this.references = [];
  		for(var i = 0; i < count; i++) {
  			this.references[i] = stream.readUint32();
  		}
  	};

  	// file:src/parsing/SmDm.js
  	BoxParser.createFullBoxCtor("SmDm", function(stream) {
  		this.primaryRChromaticity_x = stream.readUint16();
  	    this.primaryRChromaticity_y = stream.readUint16();
  	    this.primaryGChromaticity_x = stream.readUint16();
  	    this.primaryGChromaticity_y = stream.readUint16();
  	    this.primaryBChromaticity_x = stream.readUint16();
  	    this.primaryBChromaticity_y = stream.readUint16();
  	    this.whitePointChromaticity_x = stream.readUint16();
  	    this.whitePointChromaticity_y = stream.readUint16();
  	    this.luminanceMax = stream.readUint32();
  	    this.luminanceMin = stream.readUint32();
  	});

  	// file:src/parsing/smhd.js
  	BoxParser.createFullBoxCtor("smhd", function(stream) {
  		this.balance = stream.readUint16();
  		stream.readUint16();
  	});

  	// file:src/parsing/ssix.js
  	BoxParser.createFullBoxCtor("ssix", function(stream) {
  		this.subsegments = [];
  		var subsegment_count = stream.readUint32();
  		for (var i = 0; i < subsegment_count; i++) {
  			var subsegment = {};
  			this.subsegments.push(subsegment);
  			subsegment.ranges = [];
  			var range_count = stream.readUint32();
  			for (var j = 0; j < range_count; j++) {
  				var range = {};
  				subsegment.ranges.push(range);
  				range.level = stream.readUint8();
  				range.range_size = stream.readUint24();
  			}
  		}
  	});

  	// file:src/parsing/stco.js
  	BoxParser.createFullBoxCtor("stco", function(stream) {
  		var entry_count;
  		entry_count = stream.readUint32();
  		this.chunk_offsets = [];
  		if (this.version === 0) {
  			for (var i = 0; i < entry_count; i++) {
  				this.chunk_offsets.push(stream.readUint32());
  			}
  		}
  	});

  	// file:src/parsing/stdp.js
  	BoxParser.createFullBoxCtor("stdp", function(stream) {
  		var count = (this.size - this.hdr_size)/2;
  		this.priority = [];
  		for (var i = 0; i < count; i++) {
  			this.priority[i] = stream.readUint16();
  		}
  	});

  	// file:src/parsing/sthd.js
  	BoxParser.createFullBoxCtor("sthd");

  	// file:src/parsing/stri.js
  	BoxParser.createFullBoxCtor("stri", function(stream) {
  		this.switch_group = stream.readUint16();
  		this.alternate_group = stream.readUint16();
  		this.sub_track_id = stream.readUint32();
  		var count = (this.size - this.hdr_size - 8)/4;
  		this.attribute_list = [];
  		for (var i = 0; i < count; i++) {
  			this.attribute_list[i] = stream.readUint32();
  		}
  	});

  	// file:src/parsing/stsc.js
  	BoxParser.createFullBoxCtor("stsc", function(stream) {
  		var entry_count;
  		var i;
  		entry_count = stream.readUint32();
  		this.first_chunk = [];
  		this.samples_per_chunk = [];
  		this.sample_description_index = [];
  		if (this.version === 0) {
  			for(i=0; i<entry_count; i++) {
  				this.first_chunk.push(stream.readUint32());
  				this.samples_per_chunk.push(stream.readUint32());
  				this.sample_description_index.push(stream.readUint32());
  			}
  		}
  	});

  	// file:src/parsing/stsd.js
  	BoxParser.createFullBoxCtor("stsd", function(stream) {
  		var i;
  		var ret;
  		var entryCount;
  		var box;
  		this.entries = [];
  		entryCount = stream.readUint32();
  		for (i = 1; i <= entryCount; i++) {
  			ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				if (BoxParser[ret.type+"SampleEntry"]) {
  					box = new BoxParser[ret.type+"SampleEntry"](ret.size);
  					box.hdr_size = ret.hdr_size;
  					box.start = ret.start;
  				} else {
  					Log.warn("BoxParser", "Unknown sample entry type: "+ret.type);
  					box = new BoxParser.SampleEntry(ret.type, ret.size, ret.hdr_size, ret.start);
  				}
  				if (box.write === BoxParser.SampleEntry.prototype.write) {
  					Log.info("BoxParser", "SampleEntry "+box.type+" box writing not yet implemented, keeping unparsed data in memory for later write");
  					box.parseDataAndRewind(stream);
  				}
  				box.parse(stream);
  				this.entries.push(box);
  			} else {
  				return;
  			}
  		}
  	});

  	// file:src/parsing/stsg.js
  	BoxParser.createFullBoxCtor("stsg", function(stream) {
  		this.grouping_type = stream.readUint32();
  		var count = stream.readUint16();
  		this.group_description_index = [];
  		for (var i = 0; i < count; i++) {
  			this.group_description_index[i] = stream.readUint32();
  		}
  	});

  	// file:src/parsing/stsh.js
  	BoxParser.createFullBoxCtor("stsh", function(stream) {
  		var entry_count;
  		var i;
  		entry_count = stream.readUint32();
  		this.shadowed_sample_numbers = [];
  		this.sync_sample_numbers = [];
  		if (this.version === 0) {
  			for(i=0; i<entry_count; i++) {
  				this.shadowed_sample_numbers.push(stream.readUint32());
  				this.sync_sample_numbers.push(stream.readUint32());
  			}
  		}
  	});

  	// file:src/parsing/stss.js
  	BoxParser.createFullBoxCtor("stss", function(stream) {
  		var i;
  		var entry_count;
  		entry_count = stream.readUint32();
  		if (this.version === 0) {
  			this.sample_numbers = [];
  			for(i=0; i<entry_count; i++) {
  				this.sample_numbers.push(stream.readUint32());
  			}
  		}
  	});

  	// file:src/parsing/stsz.js
  	BoxParser.createFullBoxCtor("stsz", function(stream) {
  		var i;
  		this.sample_sizes = [];
  		if (this.version === 0) {
  			this.sample_size = stream.readUint32();
  			this.sample_count = stream.readUint32();
  			for (i = 0; i < this.sample_count; i++) {
  				if (this.sample_size === 0) {
  					this.sample_sizes.push(stream.readUint32());
  				} else {
  					this.sample_sizes[i] = this.sample_size;
  				}
  			}
  		}
  	});

  	// file:src/parsing/stts.js
  	BoxParser.createFullBoxCtor("stts", function(stream) {
  		var entry_count;
  		var i;
  		var delta;
  		entry_count = stream.readUint32();
  		this.sample_counts = [];
  		this.sample_deltas = [];
  		if (this.version === 0) {
  			for(i=0; i<entry_count; i++) {
  				this.sample_counts.push(stream.readUint32());
  				delta = stream.readInt32();
  				if (delta < 0) {
  					Log.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
  					delta = 1;
  				}
  				this.sample_deltas.push(delta);
  			}
  		}
  	});

  	// file:src/parsing/stvi.js
  	BoxParser.createFullBoxCtor("stvi", function(stream) {
  		var tmp32 = stream.readUint32();
  		this.single_view_allowed = tmp32 & 0x3;
  		this.stereo_scheme = stream.readUint32();
  		var length = stream.readUint32();
  		this.stereo_indication_type = stream.readString(length);
  		var ret;
  		var box;
  		this.boxes = [];
  		while (stream.getPosition() < this.start+this.size) {
  			ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				box = ret.box;
  				this.boxes.push(box);
  				this[box.type] = box;
  			} else {
  				return;
  			}
  		}
  	});

  	// file:src/parsing/styp.js
  	BoxParser.createBoxCtor("styp", function(stream) {
  		BoxParser.ftypBox.prototype.parse.call(this, stream);
  	});

  	// file:src/parsing/stz2.js
  	BoxParser.createFullBoxCtor("stz2", function(stream) {
  		var i;
  		var sample_count;
  		this.sample_sizes = [];
  		if (this.version === 0) {
  			this.reserved = stream.readUint24();
  			this.field_size = stream.readUint8();
  			sample_count = stream.readUint32();
  			if (this.field_size === 4) {
  				for (i = 0; i < sample_count; i+=2) {
  					var tmp = stream.readUint8();
  					this.sample_sizes[i] = (tmp >> 4) & 0xF;
  					this.sample_sizes[i+1] = tmp & 0xF;
  				}
  			} else if (this.field_size === 8) {
  				for (i = 0; i < sample_count; i++) {
  					this.sample_sizes[i] = stream.readUint8();
  				}
  			} else if (this.field_size === 16) {
  				for (i = 0; i < sample_count; i++) {
  					this.sample_sizes[i] = stream.readUint16();
  				}
  			} else {
  				Log.error("BoxParser", "Error in length field in stz2 box");
  			}
  		}
  	});

  	// file:src/parsing/subs.js
  	BoxParser.createFullBoxCtor("subs", function(stream) {
  		var i,j;
  		var entry_count;
  		var subsample_count;
  		entry_count = stream.readUint32();
  		this.entries = [];
  		for (i = 0; i < entry_count; i++) {
  			var sampleInfo = {};
  			this.entries[i] = sampleInfo;
  			sampleInfo.sample_delta = stream.readUint32();
  			sampleInfo.subsamples = [];
  			subsample_count = stream.readUint16();
  			if (subsample_count>0) {
  				for (j = 0; j < subsample_count; j++) {
  					var subsample = {};
  					sampleInfo.subsamples.push(subsample);
  					if (this.version == 1) {
  						subsample.size = stream.readUint32();
  					} else {
  						subsample.size = stream.readUint16();
  					}
  					subsample.priority = stream.readUint8();
  					subsample.discardable = stream.readUint8();
  					subsample.codec_specific_parameters = stream.readUint32();
  				}
  			}
  		}
  	});

  	// file:src/parsing/tenc.js
  	BoxParser.createFullBoxCtor("tenc", function(stream) {
  		stream.readUint8(); // reserved
  		if (this.version === 0) {
  			stream.readUint8();
  		} else {
  			var tmp = stream.readUint8();
  			this.default_crypt_byte_block = (tmp >> 4) & 0xF;
  			this.default_skip_byte_block = tmp & 0xF;
  		}
  		this.default_isProtected = stream.readUint8();
  		this.default_Per_Sample_IV_Size = stream.readUint8();
  		this.default_KID = BoxParser.parseHex16(stream);
  		if (this.default_isProtected === 1 && this.default_Per_Sample_IV_Size === 0) {
  			this.default_constant_IV_size = stream.readUint8();
  			this.default_constant_IV = stream.readUint8Array(this.default_constant_IV_size);
  		}
  	});// file:src/parsing/tfdt.js
  	BoxParser.createFullBoxCtor("tfdt", function(stream) {
  		if (this.version == 1) {
  			this.baseMediaDecodeTime = stream.readUint64();
  		} else {
  			this.baseMediaDecodeTime = stream.readUint32();
  		}
  	});

  	// file:src/parsing/tfhd.js
  	BoxParser.createFullBoxCtor("tfhd", function(stream) {
  		var readBytes = 0;
  		this.track_id = stream.readUint32();
  		if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET)) {
  			this.base_data_offset = stream.readUint64();
  			readBytes += 8;
  		} else {
  			this.base_data_offset = 0;
  		}
  		if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC)) {
  			this.default_sample_description_index = stream.readUint32();
  			readBytes += 4;
  		} else {
  			this.default_sample_description_index = 0;
  		}
  		if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR)) {
  			this.default_sample_duration = stream.readUint32();
  			readBytes += 4;
  		} else {
  			this.default_sample_duration = 0;
  		}
  		if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE)) {
  			this.default_sample_size = stream.readUint32();
  			readBytes += 4;
  		} else {
  			this.default_sample_size = 0;
  		}
  		if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS)) {
  			this.default_sample_flags = stream.readUint32();
  			readBytes += 4;
  		} else {
  			this.default_sample_flags = 0;
  		}
  	});

  	// file:src/parsing/tfra.js
  	BoxParser.createFullBoxCtor("tfra", function(stream) {
  		this.track_ID = stream.readUint32();
  		stream.readUint24();
  		var tmp_byte = stream.readUint8();
  		this.length_size_of_traf_num = (tmp_byte >> 4) & 0x3;
  		this.length_size_of_trun_num = (tmp_byte >> 2) & 0x3;
  		this.length_size_of_sample_num = (tmp_byte) & 0x3;
  		this.entries = [];
  		var number_of_entries = stream.readUint32();
  		for (var i = 0; i < number_of_entries; i++) {
  			if (this.version === 1) {
  				this.time = stream.readUint64();
  				this.moof_offset = stream.readUint64();
  			} else {
  				this.time = stream.readUint32();
  				this.moof_offset = stream.readUint32();
  			}
  			this.traf_number = stream["readUint"+(8*(this.length_size_of_traf_num+1))]();
  			this.trun_number = stream["readUint"+(8*(this.length_size_of_trun_num+1))]();
  			this.sample_number = stream["readUint"+(8*(this.length_size_of_sample_num+1))]();
  		}
  	});

  	// file:src/parsing/tkhd.js
  	BoxParser.createFullBoxCtor("tkhd", function(stream) {
  		if (this.version == 1) {
  			this.creation_time = stream.readUint64();
  			this.modification_time = stream.readUint64();
  			this.track_id = stream.readUint32();
  			stream.readUint32();
  			this.duration = stream.readUint64();
  		} else {
  			this.creation_time = stream.readUint32();
  			this.modification_time = stream.readUint32();
  			this.track_id = stream.readUint32();
  			stream.readUint32();
  			this.duration = stream.readUint32();
  		}
  		stream.readUint32Array(2);
  		this.layer = stream.readInt16();
  		this.alternate_group = stream.readInt16();
  		this.volume = stream.readInt16()>>8;
  		stream.readUint16();
  		this.matrix = stream.readInt32Array(9);
  		this.width = stream.readUint32();
  		this.height = stream.readUint32();
  	});

  	// file:src/parsing/tmax.js
  	BoxParser.createBoxCtor("tmax", function(stream) {
  		this.time = stream.readUint32();
  	});

  	// file:src/parsing/tmin.js
  	BoxParser.createBoxCtor("tmin", function(stream) {
  		this.time = stream.readUint32();
  	});

  	// file:src/parsing/totl.js
  	BoxParser.createBoxCtor("totl",function(stream) {
  		this.bytessent = stream.readUint32();
  	});

  	// file:src/parsing/tpay.js
  	BoxParser.createBoxCtor("tpay", function(stream) {
  		this.bytessent = stream.readUint32();
  	});

  	// file:src/parsing/tpyl.js
  	BoxParser.createBoxCtor("tpyl", function(stream) {
  		this.bytessent = stream.readUint64();
  	});

  	// file:src/parsing/TrackGroup.js
  	BoxParser.TrackGroupTypeBox.prototype.parse = function(stream) {
  		this.parseFullHeader(stream);
  		this.track_group_id = stream.readUint32();
  	};

  	// file:src/parsing/trackgroups/msrc.js
  	BoxParser.createTrackGroupCtor("msrc");// file:src/parsing/TrakReference.js
  	BoxParser.TrackReferenceTypeBox = function(type, size, hdr_size, start) {
  		BoxParser.Box.call(this, type, size);
  		this.hdr_size = hdr_size;
  		this.start = start;
  	};
  	BoxParser.TrackReferenceTypeBox.prototype = new BoxParser.Box();
  	BoxParser.TrackReferenceTypeBox.prototype.parse = function(stream) {
  		this.track_ids = stream.readUint32Array((this.size-this.hdr_size)/4);
  	};

  	// file:src/parsing/tref.js
  	BoxParser.trefBox.prototype.parse = function(stream) {
  		var ret;
  		var box;
  		while (stream.getPosition() < this.start+this.size) {
  			ret = BoxParser.parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				box = new BoxParser.TrackReferenceTypeBox(ret.type, ret.size, ret.hdr_size, ret.start);
  				if (box.write === BoxParser.Box.prototype.write && box.type !== "mdat") {
  					Log.info("BoxParser", "TrackReference "+box.type+" box writing not yet implemented, keeping unparsed data in memory for later write");
  					box.parseDataAndRewind(stream);
  				}
  				box.parse(stream);
  				this.boxes.push(box);
  			} else {
  				return;
  			}
  		}
  	};

  	// file:src/parsing/trep.js
  	BoxParser.createFullBoxCtor("trep", function(stream) {
  		this.track_ID = stream.readUint32();
  		this.boxes = [];
  		while (stream.getPosition() < this.start+this.size) {
  			ret = BoxParser.parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
  			if (ret.code === BoxParser.OK) {
  				box = ret.box;
  				this.boxes.push(box);
  			} else {
  				return;
  			}
  		}
  	});

  	// file:src/parsing/trex.js
  	BoxParser.createFullBoxCtor("trex", function(stream) {
  		this.track_id = stream.readUint32();
  		this.default_sample_description_index = stream.readUint32();
  		this.default_sample_duration = stream.readUint32();
  		this.default_sample_size = stream.readUint32();
  		this.default_sample_flags = stream.readUint32();
  	});

  	// file:src/parsing/trpy.js
  	BoxParser.createBoxCtor("trpy", function(stream) {
  		this.bytessent = stream.readUint64();
  	});

  	// file:src/parsing/trun.js
  	BoxParser.createFullBoxCtor("trun", function(stream) {
  		var readBytes = 0;
  		this.sample_count = stream.readUint32();
  		readBytes+= 4;
  		if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) ) {
  			this.data_offset = stream.readInt32(); //signed
  			readBytes += 4;
  		} else {
  			this.data_offset = 0;
  		}
  		if (this.size - this.hdr_size > readBytes && (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) ) {
  			this.first_sample_flags = stream.readUint32();
  			readBytes += 4;
  		} else {
  			this.first_sample_flags = 0;
  		}
  		this.sample_duration = [];
  		this.sample_size = [];
  		this.sample_flags = [];
  		this.sample_composition_time_offset = [];
  		if (this.size - this.hdr_size > readBytes) {
  			for (var i = 0; i < this.sample_count; i++) {
  				if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
  					this.sample_duration[i] = stream.readUint32();
  				}
  				if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
  					this.sample_size[i] = stream.readUint32();
  				}
  				if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
  					this.sample_flags[i] = stream.readUint32();
  				}
  				if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
  					if (this.version === 0) {
  						this.sample_composition_time_offset[i] = stream.readUint32();
  					} else {
  						this.sample_composition_time_offset[i] = stream.readInt32(); //signed
  					}
  				}
  			}
  		}
  	});

  	// file:src/parsing/tsel.js
  	BoxParser.createFullBoxCtor("tsel", function(stream) {
  		this.switch_group = stream.readUint32();
  		var count = (this.size - this.hdr_size - 4)/4;
  		this.attribute_list = [];
  		for (var i = 0; i < count; i++) {
  			this.attribute_list[i] = stream.readUint32();
  		}
  	});

  	// file:src/parsing/txtC.js
  	BoxParser.createFullBoxCtor("txtC", function(stream) {
  		this.config = stream.readCString();
  	});

  	// file:src/parsing/url.js
  	BoxParser.createFullBoxCtor("url ", function(stream) {
  		if (this.flags !== 0x000001) {
  			this.location = stream.readCString();
  		}
  	});

  	// file:src/parsing/urn.js
  	BoxParser.createFullBoxCtor("urn ", function(stream) {
  		this.name = stream.readCString();
  		if (this.size - this.hdr_size - this.name.length - 1 > 0) {
  			this.location = stream.readCString();
  		}
  	});

  	// file:src/parsing/uuid/piff/piffLsm.js
  	BoxParser.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", true, false, function(stream) {
  	    this.LiveServerManifest = stream.readString(this.size - this.hdr_size)
  	        .replace(/&/g, "&amp;")
  	        .replace(/</g, "&lt;")
  	        .replace(/>/g, "&gt;")
  	        .replace(/"/g, "&quot;")
  	        .replace(/'/g, "&#039;");
  	});// file:src/parsing/uuid/piff/piffPssh.js
  	BoxParser.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", true, false, function(stream) {
  		this.system_id = BoxParser.parseHex16(stream);
  		var datasize = stream.readUint32();
  		if (datasize > 0) {
  			this.data = stream.readUint8Array(datasize);
  		}
  	});

  	// file:src/parsing/uuid/piff/piffSenc.js
  	BoxParser.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", true, false /*, function(stream) {
  		if (this.flags & 0x1) {
  			this.AlgorithmID = stream.readUint24();
  			this.IV_size = stream.readUint8();
  			this.KID = BoxParser.parseHex16(stream);
  		}
  		var sample_count = stream.readUint32();
  		this.samples = [];
  		for (var i = 0; i < sample_count; i++) {
  			var sample = {};
  			sample.InitializationVector = this.readUint8Array(this.IV_size*8);
  			if (this.flags & 0x2) {
  				sample.subsamples = [];
  				sample.NumberOfEntries = stream.readUint16();
  				for (var j = 0; j < sample.NumberOfEntries; j++) {
  					var subsample = {};
  					subsample.BytesOfClearData = stream.readUint16();
  					subsample.BytesOfProtectedData = stream.readUint32();
  					sample.subsamples.push(subsample);
  				}
  			}
  			this.samples.push(sample);
  		}
  	}*/);
  	// file:src/parsing/uuid/piff/piffTenc.js
  	BoxParser.createUUIDBox("8974dbce7be74c5184f97148f9882554", true, false, function(stream) {
  		this.default_AlgorithmID = stream.readUint24();
  		this.default_IV_size = stream.readUint8();
  		this.default_KID = BoxParser.parseHex16(stream);
  	});// file:src/parsing/uuid/piff/piffTfrf.js
  	BoxParser.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", true, false, function(stream) {
  	    this.fragment_count = stream.readUint8();
  	    this.entries = [];

  	    for (var i = 0; i < this.fragment_count; i++) {
  	        var entry = {};
  	        var absolute_time = 0;
  	        var absolute_duration = 0;

  	        if (this.version === 1) {
  	            absolute_time = stream.readUint64();
  	            absolute_duration = stream.readUint64();
  	        } else {
  	            absolute_time = stream.readUint32();
  	            absolute_duration = stream.readUint32();
  	        }

  	        entry.absolute_time = absolute_time;
  	        entry.absolute_duration = absolute_duration;

  	        this.entries.push(entry);
  	    }
  	});// file:src/parsing/uuid/piff/piffTfxd.js
  	BoxParser.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", true, false, function(stream) {
  	    if (this.version === 1) {
  	       this.absolute_time = stream.readUint64();
  	       this.duration = stream.readUint64();
  	    } else {
  	       this.absolute_time = stream.readUint32();
  	       this.duration = stream.readUint32();
  	    }
  	});// file:src/parsing/vmhd.js
  	BoxParser.createFullBoxCtor("vmhd", function(stream) {
  		this.graphicsmode = stream.readUint16();
  		this.opcolor = stream.readUint16Array(3);
  	});

  	// file:src/parsing/vpcC.js
  	BoxParser.createFullBoxCtor("vpcC", function (stream) {
  		var tmp;
  		if (this.version === 1) {
  			this.profile = stream.readUint8();
  			this.level = stream.readUint8();
  			tmp = stream.readUint8();
  			this.bitDepth = tmp >> 4;
  			this.chromaSubsampling = (tmp >> 1) & 0x7;
  			this.videoFullRangeFlag = tmp & 0x1;
  			this.colourPrimaries = stream.readUint8();
  			this.transferCharacteristics = stream.readUint8();
  			this.matrixCoefficients = stream.readUint8();
  			this.codecIntializationDataSize = stream.readUint16();
  			this.codecIntializationData = stream.readUint8Array(this.codecIntializationDataSize);
  		} else {
  			this.profile = stream.readUint8();
  			this.level = stream.readUint8();
  			tmp = stream.readUint8();
  			this.bitDepth = (tmp >> 4) & 0xF;
  			this.colorSpace = tmp & 0xF;
  			tmp = stream.readUint8();
  			this.chromaSubsampling = (tmp >> 4) & 0xF;
  			this.transferFunction = (tmp >> 1) & 0x7;
  			this.videoFullRangeFlag = tmp & 0x1;
  			this.codecIntializationDataSize = stream.readUint16();
  			this.codecIntializationData = stream.readUint8Array(this.codecIntializationDataSize);
  		}
  	});// file:src/parsing/vttC.js
  	BoxParser.createBoxCtor("vttC", function(stream) {
  		this.text = stream.readString(this.size - this.hdr_size);
  	});

  	// file:src/parsing/vvcC.js
  	BoxParser.createFullBoxCtor("vvcC", function (stream) {
  	  var i, j;

  	  // helper object to simplify extracting individual bits
  	  var bitReader = {
  	    held_bits: undefined,
  	    num_held_bits: 0,

  	    stream_read_1_bytes: function (strm) {
  	      this.held_bits = strm.readUint8();
  	      this.num_held_bits = 1 * 8;
  	    },
  	    stream_read_2_bytes: function (strm) {
  	      this.held_bits = strm.readUint16();
  	      this.num_held_bits = 2 * 8;
  	    },

  	    extract_bits: function (num_bits) {
  	      var ret = (this.held_bits >> (this.num_held_bits - num_bits)) & ((1 << num_bits) - 1);
  	      this.num_held_bits -= num_bits;
  	      return ret;
  	    }
  	  };

  	  // VvcDecoderConfigurationRecord
  	  bitReader.stream_read_1_bytes(stream);
  	  bitReader.extract_bits(5);  // reserved
  	  this.lengthSizeMinusOne = bitReader.extract_bits(2);
  	  this.ptl_present_flag = bitReader.extract_bits(1);

  	  if (this.ptl_present_flag) {
  	    bitReader.stream_read_2_bytes(stream);
  	    this.ols_idx = bitReader.extract_bits(9);
  	    this.num_sublayers = bitReader.extract_bits(3);
  	    this.constant_frame_rate = bitReader.extract_bits(2);
  	    this.chroma_format_idc = bitReader.extract_bits(2);

  	    bitReader.stream_read_1_bytes(stream);
  	    this.bit_depth_minus8 = bitReader.extract_bits(3);
  	    bitReader.extract_bits(5);  // reserved

  	    // VvcPTLRecord
  	    {
  	      bitReader.stream_read_2_bytes(stream);
  	      bitReader.extract_bits(2);  // reserved
  	      this.num_bytes_constraint_info = bitReader.extract_bits(6);
  	      this.general_profile_idc = bitReader.extract_bits(7);
  	      this.general_tier_flag = bitReader.extract_bits(1);

  	      this.general_level_idc = stream.readUint8();

  	      bitReader.stream_read_1_bytes(stream);
  	      this.ptl_frame_only_constraint_flag = bitReader.extract_bits(1);
  	      this.ptl_multilayer_enabled_flag = bitReader.extract_bits(1);

  	      this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info);
  	      if (this.num_bytes_constraint_info) {
  	        for (i = 0; i < this.num_bytes_constraint_info - 1; i++) {
  	          var cnstr1 = bitReader.extract_bits(6);
  	          bitReader.stream_read_1_bytes(stream);
  	          var cnstr2 = bitReader.extract_bits(2);

  	          this.general_constraint_info[i] = ((cnstr1 << 2) | cnstr2);
  	        }
  	        this.general_constraint_info[this.num_bytes_constraint_info - 1] = bitReader.extract_bits(6);
  	      } else {
  	        //forbidden in spec!
  	        bitReader.extract_bits(6);
  	      }

  	      bitReader.stream_read_1_bytes(stream);
  	      this.ptl_sublayer_present_mask = 0;
  	      for (j = this.num_sublayers - 2; j >= 0; --j) {
  	        var val = bitReader.extract_bits(1);
  	        this.ptl_sublayer_present_mask |= val << j;
  	      }
  	      for (j = this.num_sublayers; j <= 8 && this.num_sublayers > 1; ++j) {
  	        bitReader.extract_bits(1);  // ptl_reserved_zero_bit
  	      }

  	      for (j = this.num_sublayers - 2; j >= 0; --j) {
  	        if (this.ptl_sublayer_present_mask & (1 << j)) {
  	          this.sublayer_level_idc[j] = stream.readUint8();
  	        }
  	      }

  	      this.ptl_num_sub_profiles = stream.readUint8();
  	      this.general_sub_profile_idc = [];
  	      if (this.ptl_num_sub_profiles) {
  	        for (i = 0; i < this.ptl_num_sub_profiles; i++) {
  	          this.general_sub_profile_idc.push(stream.readUint32());
  	        }
  	      }
  	    }  // end VvcPTLRecord

  	    this.max_picture_width = stream.readUint16();
  	    this.max_picture_height = stream.readUint16();
  	    this.avg_frame_rate = stream.readUint16();
  	  }

  	  var VVC_NALU_OPI = 12;
  	  var VVC_NALU_DEC_PARAM = 13;

  	  this.nalu_arrays = [];
  	  var num_of_arrays = stream.readUint8();
  	  for (i = 0; i < num_of_arrays; i++) {
  	    var nalu_array = [];
  	    this.nalu_arrays.push(nalu_array);

  	    bitReader.stream_read_1_bytes(stream);
  	    nalu_array.completeness = bitReader.extract_bits(1);
  	    bitReader.extract_bits(2);  // reserved
  	    nalu_array.nalu_type = bitReader.extract_bits(5);

  	    var numNalus = 1;
  	    if (nalu_array.nalu_type != VVC_NALU_DEC_PARAM && nalu_array.nalu_type != VVC_NALU_OPI) {
  	      numNalus = stream.readUint16();
  	    }

  	    for (j = 0; j < numNalus; j++) {
  	      var len = stream.readUint16();
  	      nalu_array.push({
  	        data: stream.readUint8Array(len),
  	        length: len
  	      });
  	    }
  	  }
  	});
  	// file:src/parsing/vvnC.js
  	BoxParser.createFullBoxCtor("vvnC", function (stream) {
  	  // VvcNALUConfigBox
  	  var tmp = strm.readUint8();
  	  this.lengthSizeMinusOne = (tmp & 0x3);
  	});
  	// file:src/box-codecs.js
  	BoxParser.SampleEntry.prototype.isVideo = function() {
  		return false;
  	};

  	BoxParser.SampleEntry.prototype.isAudio = function() {
  		return false;
  	};

  	BoxParser.SampleEntry.prototype.isSubtitle = function() {
  		return false;
  	};

  	BoxParser.SampleEntry.prototype.isMetadata = function() {
  		return false;
  	};

  	BoxParser.SampleEntry.prototype.isHint = function() {
  		return false;
  	};

  	BoxParser.SampleEntry.prototype.getCodec = function() {
  		return this.type.replace('.','');
  	};

  	BoxParser.SampleEntry.prototype.getWidth = function() {
  		return "";
  	};

  	BoxParser.SampleEntry.prototype.getHeight = function() {
  		return "";
  	};

  	BoxParser.SampleEntry.prototype.getChannelCount = function() {
  		return "";
  	};

  	BoxParser.SampleEntry.prototype.getSampleRate = function() {
  		return "";
  	};

  	BoxParser.SampleEntry.prototype.getSampleSize = function() {
  		return "";
  	};

  	BoxParser.VisualSampleEntry.prototype.isVideo = function() {
  		return true;
  	};

  	BoxParser.VisualSampleEntry.prototype.getWidth = function() {
  		return this.width;
  	};

  	BoxParser.VisualSampleEntry.prototype.getHeight = function() {
  		return this.height;
  	};

  	BoxParser.AudioSampleEntry.prototype.isAudio = function() {
  		return true;
  	};

  	BoxParser.AudioSampleEntry.prototype.getChannelCount = function() {
  		return this.channel_count;
  	};

  	BoxParser.AudioSampleEntry.prototype.getSampleRate = function() {
  		return this.samplerate;
  	};

  	BoxParser.AudioSampleEntry.prototype.getSampleSize = function() {
  		return this.samplesize;
  	};

  	BoxParser.SubtitleSampleEntry.prototype.isSubtitle = function() {
  		return true;
  	};

  	BoxParser.MetadataSampleEntry.prototype.isMetadata = function() {
  		return true;
  	};


  	BoxParser.decimalToHex = function(d, padding) {
  		var hex = Number(d).toString(16);
  		padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
  		while (hex.length < padding) {
  			hex = "0" + hex;
  		}
  		return hex;
  	};

  	BoxParser.avc1SampleEntry.prototype.getCodec =
  	BoxParser.avc2SampleEntry.prototype.getCodec =
  	BoxParser.avc3SampleEntry.prototype.getCodec =
  	BoxParser.avc4SampleEntry.prototype.getCodec = function() {
  		var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
  		if (this.avcC) {
  			return baseCodec+"."+BoxParser.decimalToHex(this.avcC.AVCProfileIndication)+
  							  ""+BoxParser.decimalToHex(this.avcC.profile_compatibility)+
  							  ""+BoxParser.decimalToHex(this.avcC.AVCLevelIndication);
  		} else {
  			return baseCodec;
  		}
  	};

  	BoxParser.hev1SampleEntry.prototype.getCodec =
  	BoxParser.hvc1SampleEntry.prototype.getCodec = function() {
  		var i;
  		var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
  		if (this.hvcC) {
  			baseCodec += '.';
  			switch (this.hvcC.general_profile_space) {
  				case 0:
  					baseCodec += '';
  					break;
  				case 1:
  					baseCodec += 'A';
  					break;
  				case 2:
  					baseCodec += 'B';
  					break;
  				case 3:
  					baseCodec += 'C';
  					break;
  			}
  			baseCodec += this.hvcC.general_profile_idc;
  			baseCodec += '.';
  			var val = this.hvcC.general_profile_compatibility;
  			var reversed = 0;
  			for (i=0; i<32; i++) {
  				reversed |= val & 1;
  				if (i==31) break;
  				reversed <<= 1;
  				val >>=1;
  			}
  			baseCodec += BoxParser.decimalToHex(reversed, 0);
  			baseCodec += '.';
  			if (this.hvcC.general_tier_flag === 0) {
  				baseCodec += 'L';
  			} else {
  				baseCodec += 'H';
  			}
  			baseCodec += this.hvcC.general_level_idc;
  			var hasByte = false;
  			var constraint_string = "";
  			for (i = 5; i >= 0; i--) {
  				if (this.hvcC.general_constraint_indicator[i] || hasByte) {
  					constraint_string = "."+BoxParser.decimalToHex(this.hvcC.general_constraint_indicator[i], 0)+constraint_string;
  					hasByte = true;
  				}
  			}
  			baseCodec += constraint_string;
  		}
  		return baseCodec;
  	};

  	BoxParser.vvc1SampleEntry.prototype.getCodec =
  	BoxParser.vvi1SampleEntry.prototype.getCodec = function () {
  		var i;
  		var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
  		if (this.vvcC) {
  			baseCodec += '.' + this.vvcC.general_profile_idc;
  			if (this.vvcC.general_tier_flag) {
  				baseCodec += '.H';
  			} else {
  				baseCodec += '.L';
  			}
  			baseCodec += this.vvcC.general_level_idc;

  			var constraint_string = "";
  			if (this.vvcC.general_constraint_info) {
  				var bytes = [];
  				var byte = 0;
  				byte |= this.vvcC.ptl_frame_only_constraint << 7;
  				byte |= this.vvcC.ptl_multilayer_enabled << 6;
  				var last_nonzero;
  				for (i = 0; i < this.vvcC.general_constraint_info.length; ++i) {
  					byte |= (this.vvcC.general_constraint_info[i] >> 2) & 0x3f;
  					bytes.push(byte);
  					if (byte) {
  						last_nonzero = i;
  					}

  					byte = (this.vvcC.general_constraint_info[i] >> 2) & 0x03;
  				}

  				if (last_nonzero === undefined) {
  					constraint_string = ".CA";
  				}
  				else {
  					constraint_string = ".C";
  					var base32_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  					var held_bits = 0;
  					var num_held_bits = 0;
  					for (i = 0; i <= last_nonzero; ++i) {
  						held_bits = (held_bits << 8) | bytes[i];
  						num_held_bits += 8;

  						while (num_held_bits >= 5) {
  							var val = (held_bits >> (num_held_bits - 5)) & 0x1f;
  							constraint_string += base32_chars[val];

  							num_held_bits -= 5;
  							held_bits &= (1 << num_held_bits) - 1;
  						}
  					}
  					if (num_held_bits) {
  						held_bits <<= (5 - num_held_bits);  // right-pad with zeros to 5 bits (is this correct?)
  						constraint_string += base32_chars[held_bits & 0x1f];
  					}
  				}
  			}
  			baseCodec += constraint_string;
  		}
  		return baseCodec;
  	};

  	BoxParser.mp4aSampleEntry.prototype.getCodec = function() {
  		var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
  		if (this.esds && this.esds.esd) {
  			var oti = this.esds.esd.getOTI();
  			var dsi = this.esds.esd.getAudioConfig();
  			return baseCodec+"."+BoxParser.decimalToHex(oti)+(dsi ? "."+dsi: "");
  		} else {
  			return baseCodec;
  		}
  	};

  	BoxParser.stxtSampleEntry.prototype.getCodec = function() {
  		var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
  		if(this.mime_format) {
  			return baseCodec + "." + this.mime_format;
  		} else {
  			return baseCodec
  		}
  	};

  	BoxParser.vp08SampleEntry.prototype.getCodec =
  	BoxParser.vp09SampleEntry.prototype.getCodec = function() {
  		var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
  		var level = this.vpcC.level;
  		if (level == 0) {
  			level = "00";
  		}
  		var bitDepth = this.vpcC.bitDepth;
  		if (bitDepth == 8) {
  			bitDepth = "08";
  		}
  		return baseCodec + ".0" + this.vpcC.profile + "." + level + "." + bitDepth;
  	};

  	BoxParser.av01SampleEntry.prototype.getCodec = function() {
  		var baseCodec = BoxParser.SampleEntry.prototype.getCodec.call(this);
  		var level = this.av1C.seq_level_idx_0;
  		if (level < 10) {
  			level = "0" + level;
  		}
  		var bitdepth;
  		if (this.av1C.seq_profile === 2 && this.av1C.high_bitdepth === 1) {
  			bitdepth = (this.av1C.twelve_bit === 1) ? "12" : "10";
  		} else if ( this.av1C.seq_profile <= 2 ) {
  			bitdepth = (this.av1C.high_bitdepth === 1) ? "10" : "08";
  		}
  		// TODO need to parse the SH to find color config
  		return baseCodec+"."+this.av1C.seq_profile+"."+level+(this.av1C.seq_tier_0?"H":"M")+"."+bitdepth;//+"."+this.av1C.monochrome+"."+this.av1C.chroma_subsampling_x+""+this.av1C.chroma_subsampling_y+""+this.av1C.chroma_sample_position;
  	};
  	// file:src/box-write.js
  	/* 
  	 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	BoxParser.Box.prototype.writeHeader = function(stream, msg) {
  		this.size += 8;
  		if (this.size > MAX_SIZE) {
  			this.size += 8;
  		}
  		if (this.type === "uuid") {
  			this.size += 16;
  		}
  		Log.debug("BoxWriter", "Writing box "+this.type+" of size: "+this.size+" at position "+stream.getPosition()+(msg || ""));
  		if (this.size > MAX_SIZE) {
  			stream.writeUint32(1);
  		} else {
  			this.sizePosition = stream.getPosition();
  			stream.writeUint32(this.size);
  		}
  		stream.writeString(this.type, null, 4);
  		if (this.type === "uuid") {
  			stream.writeUint8Array(this.uuid);
  		}
  		if (this.size > MAX_SIZE) {
  			stream.writeUint64(this.size);
  		} 
  	};

  	BoxParser.FullBox.prototype.writeHeader = function(stream) {
  		this.size += 4;
  		BoxParser.Box.prototype.writeHeader.call(this, stream, " v="+this.version+" f="+this.flags);
  		stream.writeUint8(this.version);
  		stream.writeUint24(this.flags);
  	};

  	BoxParser.Box.prototype.write = function(stream) {
  		if (this.type === "mdat") {
  			/* TODO: fix this */
  			if (this.data) {
  				this.size = this.data.length;
  				this.writeHeader(stream);
  				stream.writeUint8Array(this.data);
  			}
  		} else {
  			this.size = (this.data ? this.data.length : 0);
  			this.writeHeader(stream);
  			if (this.data) {
  				stream.writeUint8Array(this.data);
  			}
  		}
  	};

  	BoxParser.ContainerBox.prototype.write = function(stream) {
  		this.size = 0;
  		this.writeHeader(stream);
  		for (var i=0; i<this.boxes.length; i++) {
  			if (this.boxes[i]) {
  				this.boxes[i].write(stream);
  				this.size += this.boxes[i].size;
  			}
  		}
  		/* adjusting the size, now that all sub-boxes are known */
  		Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
  		stream.adjustUint32(this.sizePosition, this.size);
  	};

  	BoxParser.TrackReferenceTypeBox.prototype.write = function(stream) {
  		this.size = this.track_ids.length*4;
  		this.writeHeader(stream);
  		stream.writeUint32Array(this.track_ids);
  	};

  	// file:src/writing/avcC.js
  	BoxParser.avcCBox.prototype.write = function(stream) {
  		var i;
  		this.size = 7;
  		for (i = 0; i < this.SPS.length; i++) {
  			this.size += 2+this.SPS[i].length;
  		}
  		for (i = 0; i < this.PPS.length; i++) {
  			this.size += 2+this.PPS[i].length;
  		}
  		if (this.ext) {
  			this.size += this.ext.length;
  		}
  		this.writeHeader(stream);
  		stream.writeUint8(this.configurationVersion);
  		stream.writeUint8(this.AVCProfileIndication);
  		stream.writeUint8(this.profile_compatibility);
  		stream.writeUint8(this.AVCLevelIndication);
  		stream.writeUint8(this.lengthSizeMinusOne + (63<<2));
  		stream.writeUint8(this.SPS.length + (7<<5));
  		for (i = 0; i < this.SPS.length; i++) {
  			stream.writeUint16(this.SPS[i].length);
  			stream.writeUint8Array(this.SPS[i].nalu);
  		}
  		stream.writeUint8(this.PPS.length);
  		for (i = 0; i < this.PPS.length; i++) {
  			stream.writeUint16(this.PPS[i].length);
  			stream.writeUint8Array(this.PPS[i].nalu);
  		}
  		if (this.ext) {
  			stream.writeUint8Array(this.ext);
  		}
  	};

  	// file:src/writing/co64.js
  	BoxParser.co64Box.prototype.write = function(stream) {
  		var i;
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4+8*this.chunk_offsets.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.chunk_offsets.length);
  		for(i=0; i<this.chunk_offsets.length; i++) {
  			stream.writeUint64(this.chunk_offsets[i]);
  		}
  	};

  	// file:src/writing/cslg.js
  	BoxParser.cslgBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4*5;
  		this.writeHeader(stream);
  		stream.writeInt32(this.compositionToDTSShift);
  		stream.writeInt32(this.leastDecodeToDisplayDelta);
  		stream.writeInt32(this.greatestDecodeToDisplayDelta);
  		stream.writeInt32(this.compositionStartTime);
  		stream.writeInt32(this.compositionEndTime);
  	};

  	// file:src/writing/ctts.js
  	BoxParser.cttsBox.prototype.write = function(stream) {
  		var i;
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4+8*this.sample_counts.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.sample_counts.length);
  		for(i=0; i<this.sample_counts.length; i++) {
  			stream.writeUint32(this.sample_counts[i]);
  			if (this.version === 1) {
  				stream.writeInt32(this.sample_offsets[i]); /* signed */
  			} else {			
  				stream.writeUint32(this.sample_offsets[i]); /* unsigned */
  			}
  		}
  	};

  	// file:src/writing/dref.js
  	BoxParser.drefBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4; //
  		this.writeHeader(stream);
  		stream.writeUint32(this.entries.length);
  		for (var i = 0; i < this.entries.length; i++) {
  			this.entries[i].write(stream);
  			this.size += this.entries[i].size;
  		}	
  		/* adjusting the size, now that all sub-boxes are known */
  		Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
  		stream.adjustUint32(this.sizePosition, this.size);
  	};

  	// file:src/writing/elng.js
  	BoxParser.elngBox.prototype.write = function(stream) {
  		this.version = 0;	
  		this.flags = 0;
  		this.size = this.extended_language.length;
  		this.writeHeader(stream);
  		stream.writeString(this.extended_language);
  	};

  	// file:src/writing/elst.js
  	BoxParser.elstBox.prototype.write = function(stream) {
  		this.version = 0;	
  		this.flags = 0;
  		this.size = 4+12*this.entries.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.entries.length);
  		for (var i = 0; i < this.entries.length; i++) {
  			var entry = this.entries[i];
  			stream.writeUint32(entry.segment_duration);
  			stream.writeInt32(entry.media_time);
  			stream.writeInt16(entry.media_rate_integer);
  			stream.writeInt16(entry.media_rate_fraction);
  		}
  	};

  	// file:src/writing/emsg.js
  	BoxParser.emsgBox.prototype.write = function(stream) {
  		this.version = 0;	
  		this.flags = 0;
  		this.size = 4*4+this.message_data.length+(this.scheme_id_uri.length+1)+(this.value.length+1);
  		this.writeHeader(stream);
  		stream.writeCString(this.scheme_id_uri);
  		stream.writeCString(this.value);
  		stream.writeUint32(this.timescale);
  		stream.writeUint32(this.presentation_time_delta);
  		stream.writeUint32(this.event_duration);
  		stream.writeUint32(this.id);
  		stream.writeUint8Array(this.message_data);
  	};

  	// file:src/writing/ftyp.js
  	BoxParser.ftypBox.prototype.write = function(stream) {
  		this.size = 8+4*this.compatible_brands.length;
  		this.writeHeader(stream);
  		stream.writeString(this.major_brand, null, 4);
  		stream.writeUint32(this.minor_version);
  		for (var i = 0; i < this.compatible_brands.length; i++) {
  			stream.writeString(this.compatible_brands[i], null, 4);
  		}
  	};

  	// file:src/writing/hdlr.js
  	BoxParser.hdlrBox.prototype.write = function(stream) {
  		this.size = 5*4+this.name.length+1;
  		this.version = 0;
  		this.flags = 0;
  		this.writeHeader(stream);
  		stream.writeUint32(0);
  		stream.writeString(this.handler, null, 4);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeCString(this.name);
  	};

  	// file:src/writing/kind.js
  	BoxParser.kindBox.prototype.write = function(stream) {
  		this.version = 0;	
  		this.flags = 0;
  		this.size = (this.schemeURI.length+1)+(this.value.length+1);
  		this.writeHeader(stream);
  		stream.writeCString(this.schemeURI);
  		stream.writeCString(this.value);
  	};

  	// file:src/writing/mdhd.js
  	BoxParser.mdhdBox.prototype.write = function(stream) {
  		this.size = 4*4+2*2;
  		this.flags = 0;
  		this.version = 0;
  		this.writeHeader(stream);
  		stream.writeUint32(this.creation_time);
  		stream.writeUint32(this.modification_time);
  		stream.writeUint32(this.timescale);
  		stream.writeUint32(this.duration);
  		stream.writeUint16(this.language);
  		stream.writeUint16(0);
  	};

  	// file:src/writing/mehd.js
  	BoxParser.mehdBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4;
  		this.writeHeader(stream);
  		stream.writeUint32(this.fragment_duration);
  	};

  	// file:src/writing/mfhd.js
  	BoxParser.mfhdBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4;
  		this.writeHeader(stream);
  		stream.writeUint32(this.sequence_number);
  	};

  	// file:src/writing/mvhd.js
  	BoxParser.mvhdBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 23*4+2*2;
  		this.writeHeader(stream);
  		stream.writeUint32(this.creation_time);
  		stream.writeUint32(this.modification_time);
  		stream.writeUint32(this.timescale);
  		stream.writeUint32(this.duration);
  		stream.writeUint32(this.rate);
  		stream.writeUint16(this.volume<<8);
  		stream.writeUint16(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32Array(this.matrix);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32(this.next_track_id);
  	};

  	// file:src/writing/sampleentry.js
  	BoxParser.SampleEntry.prototype.writeHeader = function(stream) {
  		this.size = 8;
  		BoxParser.Box.prototype.writeHeader.call(this, stream);
  		stream.writeUint8(0);
  		stream.writeUint8(0);
  		stream.writeUint8(0);
  		stream.writeUint8(0);
  		stream.writeUint8(0);
  		stream.writeUint8(0);
  		stream.writeUint16(this.data_reference_index);
  	};

  	BoxParser.SampleEntry.prototype.writeFooter = function(stream) {
  		for (var i=0; i<this.boxes.length; i++) {
  			this.boxes[i].write(stream);
  			this.size += this.boxes[i].size;
  		}
  		Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
  		stream.adjustUint32(this.sizePosition, this.size);	
  	};

  	BoxParser.SampleEntry.prototype.write = function(stream) {
  		this.writeHeader(stream);
  		stream.writeUint8Array(this.data);
  		this.size += this.data.length;
  		Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
  		stream.adjustUint32(this.sizePosition, this.size);	
  	};

  	BoxParser.VisualSampleEntry.prototype.write = function(stream) {
  		this.writeHeader(stream);
  		this.size += 2*7+6*4+32;
  		stream.writeUint16(0); 
  		stream.writeUint16(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint16(this.width);
  		stream.writeUint16(this.height);
  		stream.writeUint32(this.horizresolution);
  		stream.writeUint32(this.vertresolution);
  		stream.writeUint32(0);
  		stream.writeUint16(this.frame_count);
  		stream.writeUint8(Math.min(31, this.compressorname.length));
  		stream.writeString(this.compressorname, null, 31);
  		stream.writeUint16(this.depth);
  		stream.writeInt16(-1);
  		this.writeFooter(stream);
  	};

  	BoxParser.AudioSampleEntry.prototype.write = function(stream) {
  		this.writeHeader(stream);
  		this.size += 2*4+3*4;
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeUint16(this.channel_count);
  		stream.writeUint16(this.samplesize);
  		stream.writeUint16(0);
  		stream.writeUint16(0);
  		stream.writeUint32(this.samplerate<<16);
  		this.writeFooter(stream);
  	};

  	BoxParser.stppSampleEntry.prototype.write = function(stream) {
  		this.writeHeader(stream);
  		this.size += this.namespace.length+1+
  					 this.schema_location.length+1+
  					 this.auxiliary_mime_types.length+1;
  		stream.writeCString(this.namespace);
  		stream.writeCString(this.schema_location);
  		stream.writeCString(this.auxiliary_mime_types);
  		this.writeFooter(stream);
  	};

  	// file:src/writing/samplegroups/samplegroup.js
  	BoxParser.SampleGroupEntry.prototype.write = function(stream) {
  		stream.writeUint8Array(this.data);
  	};

  	// file:src/writing/sbgp.js
  	BoxParser.sbgpBox.prototype.write = function(stream) {
  		this.version = 1;	
  		this.flags = 0;
  		this.size = 12+8*this.entries.length;
  		this.writeHeader(stream);
  		stream.writeString(this.grouping_type, null, 4);
  		stream.writeUint32(this.grouping_type_parameter);
  		stream.writeUint32(this.entries.length);
  		for (var i = 0; i < this.entries.length; i++) {
  			var entry = this.entries[i];
  			stream.writeInt32(entry.sample_count);
  			stream.writeInt32(entry.group_description_index);
  		}
  	};

  	// file:src/writing/sgpd.js
  	BoxParser.sgpdBox.prototype.write = function(stream) {
  		var i;
  		var entry;
  		// leave version as read
  		// this.version;
  		this.flags = 0;
  		this.size = 12;
  		for (i = 0; i < this.entries.length; i++) {
  			entry = this.entries[i];
  			if (this.version === 1) {
  				if (this.default_length === 0) {
  					this.size += 4;
  				}
  				this.size += entry.data.length;
  			}
  		}
  		this.writeHeader(stream);
  		stream.writeString(this.grouping_type, null, 4);
  		if (this.version === 1) {
  			stream.writeUint32(this.default_length);
  		}
  		if (this.version >= 2) {
  			stream.writeUint32(this.default_sample_description_index);
  		}
  		stream.writeUint32(this.entries.length);
  		for (i = 0; i < this.entries.length; i++) {
  			entry = this.entries[i];
  			if (this.version === 1) {
  				if (this.default_length === 0) {
  					stream.writeUint32(entry.description_length);
  				}
  			}
  			entry.write(stream);
  		}
  	};


  	// file:src/writing/sidx.js
  	BoxParser.sidxBox.prototype.write = function(stream) {
  		this.version = 0;	
  		this.flags = 0;
  		this.size = 4*4+2+2+12*this.references.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.reference_ID);
  		stream.writeUint32(this.timescale);
  		stream.writeUint32(this.earliest_presentation_time);
  		stream.writeUint32(this.first_offset);
  		stream.writeUint16(0);
  		stream.writeUint16(this.references.length);
  		for (var i = 0; i < this.references.length; i++) {
  			var ref = this.references[i];
  			stream.writeUint32(ref.reference_type << 31 | ref.referenced_size);
  			stream.writeUint32(ref.subsegment_duration);
  			stream.writeUint32(ref.starts_with_SAP << 31 | ref.SAP_type << 28 | ref.SAP_delta_time);
  		}
  	};

  	// file:src/writing/smhd.js
  	BoxParser.smhdBox.prototype.write = function(stream) {
  	  this.version = 0;
  	  this.flags = 1;
  	  this.size = 4;
  	  this.writeHeader(stream);
  	  stream.writeUint16(this.balance);
  	  stream.writeUint16(0);
  	};
  	// file:src/writing/stco.js
  	BoxParser.stcoBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4+4*this.chunk_offsets.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.chunk_offsets.length);
  		stream.writeUint32Array(this.chunk_offsets);
  	};

  	// file:src/writing/stsc.js
  	BoxParser.stscBox.prototype.write = function(stream) {
  		var i;
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4+12*this.first_chunk.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.first_chunk.length);
  		for(i=0; i<this.first_chunk.length; i++) {
  			stream.writeUint32(this.first_chunk[i]);
  			stream.writeUint32(this.samples_per_chunk[i]);
  			stream.writeUint32(this.sample_description_index[i]);
  		}
  	};

  	// file:src/writing/stsd.js
  	BoxParser.stsdBox.prototype.write = function(stream) {
  		var i;
  		this.version = 0;
  		this.flags = 0;
  		this.size = 0;
  		this.writeHeader(stream);
  		stream.writeUint32(this.entries.length);
  		this.size += 4;
  		for (i = 0; i < this.entries.length; i++) {
  			this.entries[i].write(stream);
  			this.size += this.entries[i].size;
  		}
  		/* adjusting the size, now that all sub-boxes are known */
  		Log.debug("BoxWriter", "Adjusting box "+this.type+" with new size "+this.size);
  		stream.adjustUint32(this.sizePosition, this.size);
  	};

  	// file:src/writing/stsh.js
  	BoxParser.stshBox.prototype.write = function(stream) {
  		var i;
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4+8*this.shadowed_sample_numbers.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.shadowed_sample_numbers.length);
  		for(i=0; i<this.shadowed_sample_numbers.length; i++) {
  			stream.writeUint32(this.shadowed_sample_numbers[i]);
  			stream.writeUint32(this.sync_sample_numbers[i]);
  		}
  	};

  	// file:src/writing/stss.js
  	BoxParser.stssBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4+4*this.sample_numbers.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.sample_numbers.length);
  		stream.writeUint32Array(this.sample_numbers);
  	};

  	// file:src/writing/stsz.js
  	BoxParser.stszBox.prototype.write = function(stream) {
  		var i;
  		var constant = true;
  		this.version = 0;
  		this.flags = 0;
  		if (this.sample_sizes.length > 0) {
  			i = 0;
  			while (i+1 < this.sample_sizes.length) {
  				if (this.sample_sizes[i+1] !==  this.sample_sizes[0]) {
  					constant = false;
  					break;
  				} else {
  					i++;
  				}
  			}
  		} else {
  			constant = false;
  		}
  		this.size = 8;
  		if (!constant) {
  			this.size += 4*this.sample_sizes.length;
  		}
  		this.writeHeader(stream);
  		if (!constant) {
  			stream.writeUint32(0);
  		} else {
  			stream.writeUint32(this.sample_sizes[0]);
  		}
  		stream.writeUint32(this.sample_sizes.length);
  		if (!constant) {
  			stream.writeUint32Array(this.sample_sizes);
  		}	
  	};

  	// file:src/writing/stts.js
  	BoxParser.sttsBox.prototype.write = function(stream) {
  		var i;
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4+8*this.sample_counts.length;
  		this.writeHeader(stream);
  		stream.writeUint32(this.sample_counts.length);
  		for(i=0; i<this.sample_counts.length; i++) {
  			stream.writeUint32(this.sample_counts[i]);
  			stream.writeUint32(this.sample_deltas[i]);
  		}
  	};

  	// file:src/writing/tfdt.js
  	BoxParser.tfdtBox.prototype.write = function(stream) {
  		var UINT32_MAX = Math.pow(2, 32) - 1;
  		// use version 1 if baseMediaDecodeTime does not fit 32 bits
  		this.version = this.baseMediaDecodeTime > UINT32_MAX ? 1 : 0;
  		this.flags = 0;
  		this.size = 4;
  		if (this.version === 1) {
  			this.size += 4;
  		}
  		this.writeHeader(stream);
  		if (this.version === 1) {
  			stream.writeUint64(this.baseMediaDecodeTime);
  		} else {
  			stream.writeUint32(this.baseMediaDecodeTime);
  		}
  	};

  	// file:src/writing/tfhd.js
  	BoxParser.tfhdBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.size = 4;
  		if (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) {
  			this.size += 8;
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
  			this.size += 4;
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
  			this.size += 4;
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
  			this.size += 4;
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
  			this.size += 4;
  		}
  		this.writeHeader(stream);
  		stream.writeUint32(this.track_id);
  		if (this.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) {
  			stream.writeUint64(this.base_data_offset);
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
  			stream.writeUint32(this.default_sample_description_index);
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
  			stream.writeUint32(this.default_sample_duration);
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
  			stream.writeUint32(this.default_sample_size);
  		}
  		if (this.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
  			stream.writeUint32(this.default_sample_flags);
  		}
  	};

  	// file:src/writing/tkhd.js
  	BoxParser.tkhdBox.prototype.write = function(stream) {
  		this.version = 0;
  		//this.flags = 0;
  		this.size = 4*18+2*4;
  		this.writeHeader(stream);
  		stream.writeUint32(this.creation_time);
  		stream.writeUint32(this.modification_time);
  		stream.writeUint32(this.track_id);
  		stream.writeUint32(0);
  		stream.writeUint32(this.duration);
  		stream.writeUint32(0);
  		stream.writeUint32(0);
  		stream.writeInt16(this.layer);
  		stream.writeInt16(this.alternate_group);
  		stream.writeInt16(this.volume<<8);
  		stream.writeUint16(0);
  		stream.writeInt32Array(this.matrix);
  		stream.writeUint32(this.width);
  		stream.writeUint32(this.height);
  	};

  	// file:src/writing/trex.js
  	BoxParser.trexBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 0;
  		this.size = 4*5;
  		this.writeHeader(stream);
  		stream.writeUint32(this.track_id);
  		stream.writeUint32(this.default_sample_description_index);
  		stream.writeUint32(this.default_sample_duration);
  		stream.writeUint32(this.default_sample_size);
  		stream.writeUint32(this.default_sample_flags);
  	};

  	// file:src/writing/trun.js
  	BoxParser.trunBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.size = 4;
  		if (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) {
  			this.size += 4;
  		}
  		if (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
  			this.size += 4;
  		}
  		if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
  			this.size += 4*this.sample_duration.length;
  		}
  		if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
  			this.size += 4*this.sample_size.length;
  		}
  		if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
  			this.size += 4*this.sample_flags.length;
  		}
  		if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
  			this.size += 4*this.sample_composition_time_offset.length;
  		}
  		this.writeHeader(stream);
  		stream.writeUint32(this.sample_count);
  		if (this.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) {
  			this.data_offset_position = stream.getPosition();
  			stream.writeInt32(this.data_offset); //signed
  		}
  		if (this.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG) {
  			stream.writeUint32(this.first_sample_flags);
  		}
  		for (var i = 0; i < this.sample_count; i++) {
  			if (this.flags & BoxParser.TRUN_FLAGS_DURATION) {
  				stream.writeUint32(this.sample_duration[i]);
  			}
  			if (this.flags & BoxParser.TRUN_FLAGS_SIZE) {
  				stream.writeUint32(this.sample_size[i]);
  			}
  			if (this.flags & BoxParser.TRUN_FLAGS_FLAGS) {
  				stream.writeUint32(this.sample_flags[i]);
  			}
  			if (this.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
  				if (this.version === 0) {
  					stream.writeUint32(this.sample_composition_time_offset[i]);
  				} else {
  					stream.writeInt32(this.sample_composition_time_offset[i]); //signed
  				}
  			}
  		}		
  	};

  	// file:src/writing/url.js
  	BoxParser["url Box"].prototype.write = function(stream) {
  		this.version = 0;	
  		if (this.location) {
  			this.flags = 0;
  			this.size = this.location.length+1;
  		} else {
  			this.flags = 0x000001;
  			this.size = 0;
  		}
  		this.writeHeader(stream);
  		if (this.location) {
  			stream.writeCString(this.location);
  		}
  	};

  	// file:src/writing/urn.js
  	BoxParser["urn Box"].prototype.write = function(stream) {
  		this.version = 0;	
  		this.flags = 0;
  		this.size = this.name.length+1+(this.location ? this.location.length+1 : 0);
  		this.writeHeader(stream);
  		stream.writeCString(this.name);
  		if (this.location) {
  			stream.writeCString(this.location);
  		}
  	};

  	// file:src/writing/vmhd.js
  	BoxParser.vmhdBox.prototype.write = function(stream) {
  		this.version = 0;
  		this.flags = 1;
  		this.size = 8;
  		this.writeHeader(stream);
  		stream.writeUint16(this.graphicsmode);
  		stream.writeUint16Array(this.opcolor);
  	};

  	// file:src/box-unpack.js
  	/* 
  	 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	BoxParser.cttsBox.prototype.unpack = function(samples) {
  		var i, j, k;
  		k = 0;
  		for (i = 0; i < this.sample_counts.length; i++) {
  			for (j = 0; j < this.sample_counts[i]; j++) {
  				samples[k].pts = samples[k].dts + this.sample_offsets[i];
  				k++;
  			}
  		}
  	};

  	BoxParser.sttsBox.prototype.unpack = function(samples) {
  		var i, j, k;
  		k = 0;
  		for (i = 0; i < this.sample_counts.length; i++) {
  			for (j = 0; j < this.sample_counts[i]; j++) {
  				if (k === 0) {
  					samples[k].dts = 0;
  				} else {
  					samples[k].dts = samples[k-1].dts + this.sample_deltas[i];
  				}
  				k++;
  			}
  		}
  	};

  	BoxParser.stcoBox.prototype.unpack = function(samples) {
  		var i;
  		for (i = 0; i < this.chunk_offsets.length; i++) {
  			samples[i].offset = this.chunk_offsets[i];
  		}
  	};

  	BoxParser.stscBox.prototype.unpack = function(samples) {
  		var i, j, k, l, m;
  		l = 0;
  		m = 0;
  		for (i = 0; i < this.first_chunk.length; i++) {
  			for (j = 0; j < (i+1 < this.first_chunk.length ? this.first_chunk[i+1] : Infinity); j++) {
  				m++;
  				for (k = 0; k < this.samples_per_chunk[i]; k++) {
  					if (samples[l]) {
  						samples[l].description_index = this.sample_description_index[i];
  						samples[l].chunk_index = m;
  					} else {
  						return;
  					}
  					l++;
  				}			
  			}
  		}
  	};

  	BoxParser.stszBox.prototype.unpack = function(samples) {
  		var i;
  		for (i = 0; i < this.sample_sizes.length; i++) {
  			samples[i].size = this.sample_sizes[i];
  		}
  	};
  	// file:src/box-diff.js

  	BoxParser.DIFF_BOXES_PROP_NAMES = [ "boxes", "entries", "references", "subsamples",
  						 	 "items", "item_infos", "extents", "associations",
  						 	 "subsegments", "ranges", "seekLists", "seekPoints",
  						 	 "esd", "levels"];

  	BoxParser.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = [ "compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas",
  	"first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration" ];

  	BoxParser.boxEqualFields = function(box_a, box_b) {
  		if (box_a && !box_b) return false;
  		var prop;
  		for (prop in box_a) {
  			if (BoxParser.DIFF_BOXES_PROP_NAMES.indexOf(prop) > -1) {
  				continue;
  			// } else if (excluded_fields && excluded_fields.indexOf(prop) > -1) {
  			// 	continue;
  			} else if (box_a[prop] instanceof BoxParser.Box || box_b[prop] instanceof BoxParser.Box) {
  				continue;
  			} else if (typeof box_a[prop] === "undefined" || typeof box_b[prop] === "undefined") {
  				continue;
  			} else if (typeof box_a[prop] === "function" || typeof box_b[prop] === "function") {
  				continue;
  			} else if (
  				(box_a.subBoxNames && box_a.subBoxNames.indexOf(prop.slice(0,4)) > -1) ||
  				(box_b.subBoxNames && box_b.subBoxNames.indexOf(prop.slice(0,4)) > -1))  {
  				continue;
  			} else {
  				if (prop === "data" || prop === "start" || prop === "size" || prop === "creation_time" || prop === "modification_time") {
  					continue;
  				} else if (BoxParser.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(prop) > -1) {
  					continue;
  				} else {
  					if (box_a[prop] !== box_b[prop]) {
  						return false;
  					}
  				}
  			}
  		}
  		return true;
  	};

  	BoxParser.boxEqual = function(box_a, box_b) {
  		if (!BoxParser.boxEqualFields(box_a, box_b)) {
  			return false;
  		}
  		for (var j = 0; j < BoxParser.DIFF_BOXES_PROP_NAMES.length; j++) {
  			var name = BoxParser.DIFF_BOXES_PROP_NAMES[j];
  			if (box_a[name] && box_b[name]) {
  				if (!BoxParser.boxEqual(box_a[name], box_b[name])) {
  					return false;
  				}
  			}
  		}
  		return true;
  	};// file:src/text-mp4.js

  	var XMLSubtitlein4Parser = function() {	
  	};

  	XMLSubtitlein4Parser.prototype.parseSample = function(sample) {
  		var res = {};	
  		var i;
  		res.resources = [];
  		var stream = new MP4BoxStream(sample.data.buffer);
  		if (!sample.subsamples || sample.subsamples.length === 0) {
  			res.documentString = stream.readString(sample.data.length);
  		} else {
  			res.documentString = stream.readString(sample.subsamples[0].size);
  			if (sample.subsamples.length > 1) {
  				for (i = 1; i < sample.subsamples.length; i++) {
  					res.resources[i] = stream.readUint8Array(sample.subsamples[i].size);
  				}
  			}
  		}
  		if (typeof (DOMParser) !== "undefined") {
  			res.document = (new DOMParser()).parseFromString(res.documentString, "application/xml");
  		}
  		return res;
  	};

  	var Textin4Parser = function() {	
  	};

  	Textin4Parser.prototype.parseSample = function(sample) {
  		var textString;
  		var stream = new MP4BoxStream(sample.data.buffer);
  		textString = stream.readString(sample.data.length);
  		return textString;
  	};

  	Textin4Parser.prototype.parseConfig = function(data) {
  		var textString;
  		var stream = new MP4BoxStream(data.buffer);
  		stream.readUint32(); // version & flags
  		textString = stream.readCString();
  		return textString;
  	};

  	{
  		exports.XMLSubtitlein4Parser = XMLSubtitlein4Parser;
  		exports.Textin4Parser = Textin4Parser;
  	}
  	// file:src/isofile.js
  	/*
  	 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	var ISOFile = function (stream) {
  		/* MutiBufferStream object used to parse boxes */
  		this.stream = stream || new MultiBufferStream();
  		/* Array of all boxes (in order) found in the file */
  		this.boxes = [];
  		/* Array of all mdats */
  		this.mdats = [];
  		/* Array of all moofs */
  		this.moofs = [];
  		/* Boolean indicating if the file is compatible with progressive parsing (moov first) */
  		this.isProgressive = false;
  		/* Boolean used to fire moov start event only once */
  		this.moovStartFound = false;
  		/* Callback called when the moov parsing starts */
  		this.onMoovStart = null;
  		/* Boolean keeping track of the call to onMoovStart, to avoid double calls */
  		this.moovStartSent = false;
  		/* Callback called when the moov is entirely parsed */
  		this.onReady = null;
  		/* Boolean keeping track of the call to onReady, to avoid double calls */
  		this.readySent = false;
  		/* Callback to call when segments are ready */
  		this.onSegment = null;
  		/* Callback to call when samples are ready */
  		this.onSamples = null;
  		/* Callback to call when there is an error in the parsing or processing of samples */
  		this.onError = null;
  		/* Boolean indicating if the moov box run-length encoded tables of sample information have been processed */
  		this.sampleListBuilt = false;
  		/* Array of Track objects for which fragmentation of samples is requested */
  		this.fragmentedTracks = [];
  		/* Array of Track objects for which extraction of samples is requested */
  		this.extractedTracks = [];
  		/* Boolean indicating that fragmention is ready */
  		this.isFragmentationInitialized = false;
  		/* Boolean indicating that fragmented has started */
  		this.sampleProcessingStarted = false;
  		/* Number of the next 'moof' to generate when fragmenting */
  		this.nextMoofNumber = 0;
  		/* Boolean indicating if the initial list of items has been produced */
  		this.itemListBuilt = false;
  		/* Callback called when the sidx box is entirely parsed */
  		this.onSidx = null;
  		/* Boolean keeping track of the call to onSidx, to avoid double calls */
  		this.sidxSent = false;
  	};

  	ISOFile.prototype.setSegmentOptions = function(id, user, options) {
  		var trak = this.getTrackById(id);
  		if (trak) {
  			var fragTrack = {};
  			this.fragmentedTracks.push(fragTrack);
  			fragTrack.id = id;
  			fragTrack.user = user;
  			fragTrack.trak = trak;
  			trak.nextSample = 0;
  			fragTrack.segmentStream = null;
  			fragTrack.nb_samples = 1000;
  			fragTrack.rapAlignement = true;
  			if (options) {
  				if (options.nbSamples) fragTrack.nb_samples = options.nbSamples;
  				if (options.rapAlignement) fragTrack.rapAlignement = options.rapAlignement;
  			}
  		}
  	};

  	ISOFile.prototype.unsetSegmentOptions = function(id) {
  		var index = -1;
  		for (var i = 0; i < this.fragmentedTracks.length; i++) {
  			var fragTrack = this.fragmentedTracks[i];
  			if (fragTrack.id == id) {
  				index = i;
  			}
  		}
  		if (index > -1) {
  			this.fragmentedTracks.splice(index, 1);
  		}
  	};

  	ISOFile.prototype.setExtractionOptions = function(id, user, options) {
  		var trak = this.getTrackById(id);
  		if (trak) {
  			var extractTrack = {};
  			this.extractedTracks.push(extractTrack);
  			extractTrack.id = id;
  			extractTrack.user = user;
  			extractTrack.trak = trak;
  			trak.nextSample = 0;
  			extractTrack.nb_samples = 1000;
  			extractTrack.samples = [];
  			if (options) {
  				if (options.nbSamples) extractTrack.nb_samples = options.nbSamples;
  			}
  		}
  	};

  	ISOFile.prototype.unsetExtractionOptions = function(id) {
  		var index = -1;
  		for (var i = 0; i < this.extractedTracks.length; i++) {
  			var extractTrack = this.extractedTracks[i];
  			if (extractTrack.id == id) {
  				index = i;
  			}
  		}
  		if (index > -1) {
  			this.extractedTracks.splice(index, 1);
  		}
  	};

  	ISOFile.prototype.parse = function() {
  		var ret;
  		var box;
  		var parseBoxHeadersOnly = false;

  		if (this.restoreParsePosition)	{
  			if (!this.restoreParsePosition()) {
  				return;
  			}
  		}

  		while (true) {

  			if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
  				if (this.processIncompleteMdat()) {
  					continue;
  				} else {
  					return;
  				}
  			} else {
  				if (this.saveParsePosition)	{
  					this.saveParsePosition();
  				}
  				ret = BoxParser.parseOneBox(this.stream, parseBoxHeadersOnly);
  				if (ret.code === BoxParser.ERR_NOT_ENOUGH_DATA) {
  					if (this.processIncompleteBox) {
  						if (this.processIncompleteBox(ret)) {
  							continue;
  						} else {
  							return;
  						}
  					} else {
  						return;
  					}
  				} else {
  					var box_type;
  					/* the box is entirely parsed */
  					box = ret.box;
  					box_type = (box.type !== "uuid" ? box.type : box.uuid);
  					/* store the box in the 'boxes' array to preserve box order (for file rewrite if needed)  */
  					this.boxes.push(box);
  					/* but also store box in a property for more direct access */
  					switch (box_type) {
  						case "mdat":
  							this.mdats.push(box);
  							break;
  						case "moof":
  							this.moofs.push(box);
  							break;
  						case "moov":
  							this.moovStartFound = true;
  							if (this.mdats.length === 0) {
  								this.isProgressive = true;
  							}
  							/* no break */
  							/* falls through */
  						default:
  							if (this[box_type] !== undefined) {
  								Log.warn("ISOFile", "Duplicate Box of type: "+box_type+", overriding previous occurrence");
  							}
  							this[box_type] = box;
  							break;
  					}
  					if (this.updateUsedBytes) {
  						this.updateUsedBytes(box, ret);
  					}
  				}
  			}
  		}
  	};

  	ISOFile.prototype.checkBuffer = function (ab) {
  		if (ab === null || ab === undefined) {
  			throw("Buffer must be defined and non empty");
  		}
  		if (ab.fileStart === undefined) {
  			throw("Buffer must have a fileStart property");
  		}
  		if (ab.byteLength === 0) {
  			Log.warn("ISOFile", "Ignoring empty buffer (fileStart: "+ab.fileStart+")");
  			this.stream.logBufferLevel();
  			return false;
  		}
  		Log.info("ISOFile", "Processing buffer (fileStart: "+ab.fileStart+")");

  		/* mark the bytes in the buffer as not being used yet */
  		ab.usedBytes = 0;
  		this.stream.insertBuffer(ab);
  		this.stream.logBufferLevel();

  		if (!this.stream.initialized()) {
  			Log.warn("ISOFile", "Not ready to start parsing");
  			return false;
  		}
  		return true;
  	};

  	/* Processes a new ArrayBuffer (with a fileStart property)
  	   Returns the next expected file position, or undefined if not ready to parse */
  	ISOFile.prototype.appendBuffer = function(ab, last) {
  		var nextFileStart;
  		if (!this.checkBuffer(ab)) {
  			return;
  		}

  		/* Parse whatever is in the existing buffers */
  		this.parse();

  		/* Check if the moovStart callback needs to be called */
  		if (this.moovStartFound && !this.moovStartSent) {
  			this.moovStartSent = true;
  			if (this.onMoovStart) this.onMoovStart();
  		}

  		if (this.moov) {
  			/* A moov box has been entirely parsed */

  			/* if this is the first call after the moov is found we initialize the list of samples (may be empty in fragmented files) */
  			if (!this.sampleListBuilt) {
  				this.buildSampleLists();
  				this.sampleListBuilt = true;
  			}

  			/* We update the sample information if there are any new moof boxes */
  			this.updateSampleLists();

  			/* If the application needs to be informed that the 'moov' has been found,
  			   we create the information object and callback the application */
  			if (this.onReady && !this.readySent) {
  				this.readySent = true;
  				this.onReady(this.getInfo());
  			}

  			/* See if any sample extraction or segment creation needs to be done with the available samples */
  			this.processSamples(last);

  			/* Inform about the best range to fetch next */
  			if (this.nextSeekPosition) {
  				nextFileStart = this.nextSeekPosition;
  				this.nextSeekPosition = undefined;
  			} else {
  				nextFileStart = this.nextParsePosition;
  			}
  			if (this.stream.getEndFilePositionAfter) {
  				nextFileStart = this.stream.getEndFilePositionAfter(nextFileStart);
  			}
  		} else {
  			if (this.nextParsePosition) {
  				/* moov has not been parsed but the first buffer was received,
  				   the next fetch should probably be the next box start */
  				nextFileStart = this.nextParsePosition;
  			} else {
  				/* No valid buffer has been parsed yet, we cannot know what to parse next */
  				nextFileStart = 0;
  			}
  		}
  		if (this.sidx) {
  			if (this.onSidx && !this.sidxSent) {
  				this.onSidx(this.sidx);
  				this.sidxSent = true;
  			}
  		}
  		if (this.meta) {
  			if (this.flattenItemInfo && !this.itemListBuilt) {
  				this.flattenItemInfo();
  				this.itemListBuilt = true;
  			}
  			if (this.processItems) {
  				this.processItems(this.onItem);
  			}
  		}

  		if (this.stream.cleanBuffers) {
  			Log.info("ISOFile", "Done processing buffer (fileStart: "+ab.fileStart+") - next buffer to fetch should have a fileStart position of "+nextFileStart);
  			this.stream.logBufferLevel();
  			this.stream.cleanBuffers();
  			this.stream.logBufferLevel(true);
  			Log.info("ISOFile", "Sample data size in memory: "+this.getAllocatedSampleDataSize());
  		}
  		return nextFileStart;
  	};

  	ISOFile.prototype.getInfo = function() {
  		var i, j;
  		var movie = {};
  		var trak;
  		var track;
  		var ref;
  		var sample_desc;
  		var _1904 = (new Date('1904-01-01T00:00:00Z').getTime());

  		if (this.moov) {
  			movie.hasMoov = true;
  			movie.duration = this.moov.mvhd.duration;
  			movie.timescale = this.moov.mvhd.timescale;
  			movie.isFragmented = (this.moov.mvex != null);
  			if (movie.isFragmented && this.moov.mvex.mehd) {
  				movie.fragment_duration = this.moov.mvex.mehd.fragment_duration;
  			}
  			movie.isProgressive = this.isProgressive;
  			movie.hasIOD = (this.moov.iods != null);
  			movie.brands = [];
  			movie.brands.push(this.ftyp.major_brand);
  			movie.brands = movie.brands.concat(this.ftyp.compatible_brands);
  			movie.created = new Date(_1904+this.moov.mvhd.creation_time*1000);
  			movie.modified = new Date(_1904+this.moov.mvhd.modification_time*1000);
  			movie.tracks = [];
  			movie.audioTracks = [];
  			movie.videoTracks = [];
  			movie.subtitleTracks = [];
  			movie.metadataTracks = [];
  			movie.hintTracks = [];
  			movie.otherTracks = [];
  			for (i = 0; i < this.moov.traks.length; i++) {
  				trak = this.moov.traks[i];
  				sample_desc = trak.mdia.minf.stbl.stsd.entries[0];
  				track = {};
  				movie.tracks.push(track);
  				track.id = trak.tkhd.track_id;
  				track.name = trak.mdia.hdlr.name;
  				track.references = [];
  				if (trak.tref) {
  					for (j = 0; j < trak.tref.boxes.length; j++) {
  						ref = {};
  						track.references.push(ref);
  						ref.type = trak.tref.boxes[j].type;
  						ref.track_ids = trak.tref.boxes[j].track_ids;
  					}
  				}
  				if (trak.edts) {
  					track.edits = trak.edts.elst.entries;
  				}
  				track.created = new Date(_1904+trak.tkhd.creation_time*1000);
  				track.modified = new Date(_1904+trak.tkhd.modification_time*1000);
  				track.movie_duration = trak.tkhd.duration;
  				track.movie_timescale = movie.timescale;
  				track.layer = trak.tkhd.layer;
  				track.alternate_group = trak.tkhd.alternate_group;
  				track.volume = trak.tkhd.volume;
  				track.matrix = trak.tkhd.matrix;
  				track.track_width = trak.tkhd.width/(1<<16);
  				track.track_height = trak.tkhd.height/(1<<16);
  				track.timescale = trak.mdia.mdhd.timescale;
  				track.cts_shift = trak.mdia.minf.stbl.cslg;
  				track.duration = trak.mdia.mdhd.duration;
  				track.samples_duration = trak.samples_duration;
  				track.codec = sample_desc.getCodec();
  				track.kind = (trak.udta && trak.udta.kinds.length ? trak.udta.kinds[0] : { schemeURI: "", value: ""});
  				track.language = (trak.mdia.elng ? trak.mdia.elng.extended_language : trak.mdia.mdhd.languageString);
  				track.nb_samples = trak.samples.length;
  				track.size = trak.samples_size;
  				track.bitrate = (track.size*8*track.timescale)/track.samples_duration;
  				if (sample_desc.isAudio()) {
  					track.type = "audio";
  					movie.audioTracks.push(track);
  					track.audio = {};
  					track.audio.sample_rate = sample_desc.getSampleRate();
  					track.audio.channel_count = sample_desc.getChannelCount();
  					track.audio.sample_size = sample_desc.getSampleSize();
  				} else if (sample_desc.isVideo()) {
  					track.type = "video";
  					movie.videoTracks.push(track);
  					track.video = {};
  					track.video.width = sample_desc.getWidth();
  					track.video.height = sample_desc.getHeight();
  				} else if (sample_desc.isSubtitle()) {
  					track.type = "subtitles";
  					movie.subtitleTracks.push(track);
  				} else if (sample_desc.isHint()) {
  					track.type = "metadata";
  					movie.hintTracks.push(track);
  				} else if (sample_desc.isMetadata()) {
  					track.type = "metadata";
  					movie.metadataTracks.push(track);
  				} else {
  					track.type = "metadata";
  					movie.otherTracks.push(track);
  				}
  			}
  		} else {
  			movie.hasMoov = false;
  		}
  		movie.mime = "";
  		if (movie.hasMoov && movie.tracks) {
  			if (movie.videoTracks && movie.videoTracks.length > 0) {
  				movie.mime += 'video/mp4; codecs=\"';
  			} else if (movie.audioTracks && movie.audioTracks.length > 0) {
  				movie.mime += 'audio/mp4; codecs=\"';
  			} else {
  				movie.mime += 'application/mp4; codecs=\"';
  			}
  			for (i = 0; i < movie.tracks.length; i++) {
  				if (i !== 0) movie.mime += ',';
  				movie.mime+= movie.tracks[i].codec;
  			}
  			movie.mime += '\"; profiles=\"';
  			movie.mime += this.ftyp.compatible_brands.join();
  			movie.mime += '\"';
  		}
  		return movie;
  	};

  	ISOFile.prototype.processSamples = function(last) {
  		var i;
  		var trak;
  		if (!this.sampleProcessingStarted) return;

  		/* For each track marked for fragmentation,
  		   check if the next sample is there (i.e. if the sample information is known (i.e. moof has arrived) and if it has been downloaded)
  		   and create a fragment with it */
  		if (this.isFragmentationInitialized && this.onSegment !== null) {
  			for (i = 0; i < this.fragmentedTracks.length; i++) {
  				var fragTrak = this.fragmentedTracks[i];
  				trak = fragTrak.trak;
  				while (trak.nextSample < trak.samples.length && this.sampleProcessingStarted) {
  					/* The sample information is there (either because the file is not fragmented and this is not the last sample,
  					or because the file is fragmented and the moof for that sample has been received */
  					Log.debug("ISOFile", "Creating media fragment on track #"+fragTrak.id +" for sample "+trak.nextSample);
  					var result = this.createFragment(fragTrak.id, trak.nextSample, fragTrak.segmentStream);
  					if (result) {
  						fragTrak.segmentStream = result;
  						trak.nextSample++;
  					} else {
  						/* The fragment could not be created because the media data is not there (not downloaded), wait for it */
  						break;
  					}
  					/* A fragment is created by sample, but the segment is the accumulation in the buffer of these fragments.
  					   It is flushed only as requested by the application (nb_samples) to avoid too many callbacks */
  					if (trak.nextSample % fragTrak.nb_samples === 0 || (last || trak.nextSample >= trak.samples.length)) {
  						Log.info("ISOFile", "Sending fragmented data on track #"+fragTrak.id+" for samples ["+Math.max(0,trak.nextSample-fragTrak.nb_samples)+","+(trak.nextSample-1)+"]");
  						Log.info("ISOFile", "Sample data size in memory: "+this.getAllocatedSampleDataSize());
  						if (this.onSegment) {
  							this.onSegment(fragTrak.id, fragTrak.user, fragTrak.segmentStream.buffer, trak.nextSample, (last || trak.nextSample >= trak.samples.length));
  						}
  						/* force the creation of a new buffer */
  						fragTrak.segmentStream = null;
  						if (fragTrak !== this.fragmentedTracks[i]) {
  							/* make sure we can stop fragmentation if needed */
  							break;
  						}
  					}
  				}
  			}
  		}

  		if (this.onSamples !== null) {
  			/* For each track marked for data export,
  			   check if the next sample is there (i.e. has been downloaded) and send it */
  			for (i = 0; i < this.extractedTracks.length; i++) {
  				var extractTrak = this.extractedTracks[i];
  				trak = extractTrak.trak;
  				while (trak.nextSample < trak.samples.length && this.sampleProcessingStarted) {
  					Log.debug("ISOFile", "Exporting on track #"+extractTrak.id +" sample #"+trak.nextSample);
  					var sample = this.getSample(trak, trak.nextSample);
  					if (sample) {
  						trak.nextSample++;
  						extractTrak.samples.push(sample);
  					} else {
  						break;
  					}
  					if (trak.nextSample % extractTrak.nb_samples === 0 || trak.nextSample >= trak.samples.length) {
  						Log.debug("ISOFile", "Sending samples on track #"+extractTrak.id+" for sample "+trak.nextSample);
  						if (this.onSamples) {
  							this.onSamples(extractTrak.id, extractTrak.user, extractTrak.samples);
  						}
  						extractTrak.samples = [];
  						if (extractTrak !== this.extractedTracks[i]) {
  							/* check if the extraction needs to be stopped */
  							break;
  						}
  					}
  				}
  			}
  		}
  	};

  	/* Find and return specific boxes using recursion and early return */
  	ISOFile.prototype.getBox = function(type) {
  	  var result = this.getBoxes(type, true);
  	  return (result.length ? result[0] : null);
  	};

  	ISOFile.prototype.getBoxes = function(type, returnEarly) {
  	  var result = [];
  	  ISOFile._sweep.call(this, type, result, returnEarly);
  	  return result;
  	};

  	ISOFile._sweep = function(type, result, returnEarly) {
  	  if (this.type && this.type == type) result.push(this);
  	  for (var box in this.boxes) {
  	    if (result.length && returnEarly) return;
  	    ISOFile._sweep.call(this.boxes[box], type, result, returnEarly);
  	  }
  	};

  	ISOFile.prototype.getTrackSamplesInfo = function(track_id) {
  		var track = this.getTrackById(track_id);
  		if (track) {
  			return track.samples;
  		} else {
  			return;
  		}
  	};

  	ISOFile.prototype.getTrackSample = function(track_id, number) {
  		var track = this.getTrackById(track_id);
  		var sample = this.getSample(track, number);
  		return sample;
  	};

  	/* Called by the application to release the resources associated to samples already forwarded to the application */
  	ISOFile.prototype.releaseUsedSamples = function (id, sampleNum) {
  		var size = 0;
  		var trak = this.getTrackById(id);
  		if (!trak.lastValidSample) trak.lastValidSample = 0;
  		for (var i = trak.lastValidSample; i < sampleNum; i++) {
  			size+=this.releaseSample(trak, i);
  		}
  		Log.info("ISOFile", "Track #"+id+" released samples up to "+sampleNum+" (released size: "+size+", remaining: "+this.samplesDataSize+")");
  		trak.lastValidSample = sampleNum;
  	};

  	ISOFile.prototype.start = function() {
  		this.sampleProcessingStarted = true;
  		this.processSamples(false);
  	};

  	ISOFile.prototype.stop = function() {
  		this.sampleProcessingStarted = false;
  	};

  	/* Called by the application to flush the remaining samples (e.g. once the download is finished or when no more samples will be added) */
  	ISOFile.prototype.flush = function() {
  		Log.info("ISOFile", "Flushing remaining samples");
  		this.updateSampleLists();
  		this.processSamples(true);
  		this.stream.cleanBuffers();
  		this.stream.logBufferLevel(true);
  	};

  	/* Finds the byte offset for a given time on a given track
  	   also returns the time of the previous rap */
  	ISOFile.prototype.seekTrack = function(time, useRap, trak) {
  		var j;
  		var sample;
  		var seek_offset = Infinity;
  		var rap_seek_sample_num = 0;
  		var seek_sample_num = 0;
  		var timescale;

  		if (trak.samples.length === 0) {
  			Log.info("ISOFile", "No sample in track, cannot seek! Using time "+Log.getDurationString(0, 1) +" and offset: "+0);
  			return { offset: 0, time: 0 };
  		}

  		for (j = 0; j < trak.samples.length; j++) {
  			sample = trak.samples[j];
  			if (j === 0) {
  				seek_sample_num = 0;
  				timescale = sample.timescale;
  			} else if (sample.cts > time * sample.timescale) {
  				seek_sample_num = j-1;
  				break;
  			}
  			if (useRap && sample.is_sync) {
  				rap_seek_sample_num = j;
  			}
  		}
  		if (useRap) {
  			seek_sample_num = rap_seek_sample_num;
  		}
  		time = trak.samples[seek_sample_num].cts;
  		trak.nextSample = seek_sample_num;
  		while (trak.samples[seek_sample_num].alreadyRead === trak.samples[seek_sample_num].size) {
  			// No remaining samples to look for, all are downloaded.
  			if (!trak.samples[seek_sample_num + 1]) {
  				break;
  			}
  			seek_sample_num++;
  		}
  		seek_offset = trak.samples[seek_sample_num].offset+trak.samples[seek_sample_num].alreadyRead;
  		Log.info("ISOFile", "Seeking to "+(useRap ? "RAP": "")+" sample #"+trak.nextSample+" on track "+trak.tkhd.track_id+", time "+Log.getDurationString(time, timescale) +" and offset: "+seek_offset);
  		return { offset: seek_offset, time: time/timescale };
  	};

  	/* Finds the byte offset in the file corresponding to the given time or to the time of the previous RAP */
  	ISOFile.prototype.seek = function(time, useRap) {
  		var moov = this.moov;
  		var trak;
  		var trak_seek_info;
  		var i;
  		var seek_info = { offset: Infinity, time: Infinity };
  		if (!this.moov) {
  			throw "Cannot seek: moov not received!";
  		} else {
  			for (i = 0; i<moov.traks.length; i++) {
  				trak = moov.traks[i];
  				trak_seek_info = this.seekTrack(time, useRap, trak);
  				if (trak_seek_info.offset < seek_info.offset) {
  					seek_info.offset = trak_seek_info.offset;
  				}
  				if (trak_seek_info.time < seek_info.time) {
  					seek_info.time = trak_seek_info.time;
  				}
  			}
  			Log.info("ISOFile", "Seeking at time "+Log.getDurationString(seek_info.time, 1)+" needs a buffer with a fileStart position of "+seek_info.offset);
  			if (seek_info.offset === Infinity) {
  				/* No sample info, in all tracks, cannot seek */
  				seek_info = { offset: this.nextParsePosition, time: 0 };
  			} else {
  				/* check if the seek position is already in some buffer and
  				 in that case return the end of that buffer (or of the last contiguous buffer) */
  				/* TODO: Should wait until append operations are done */
  				seek_info.offset = this.stream.getEndFilePositionAfter(seek_info.offset);
  			}
  			Log.info("ISOFile", "Adjusted seek position (after checking data already in buffer): "+seek_info.offset);
  			return seek_info;
  		}
  	};

  	ISOFile.prototype.equal = function(b) {
  		var box_index = 0;
  		while (box_index < this.boxes.length && box_index < b.boxes.length) {
  			var a_box = this.boxes[box_index];
  			var b_box = b.boxes[box_index];
  			if (!BoxParser.boxEqual(a_box, b_box)) {
  				return false;
  			}
  			box_index++;
  		}
  		return true;
  	};

  	{
  		exports.ISOFile = ISOFile;
  	}
  	// file:src/isofile-advanced-parsing.js
  	/* position in the current buffer of the beginning of the last box parsed */
  	ISOFile.prototype.lastBoxStartPosition = 0;
  	/* indicator if the parsing is stuck in the middle of an mdat box */
  	ISOFile.prototype.parsingMdat = null;
  	/* next file position that the parser needs:
  	    - 0 until the first buffer (i.e. fileStart ===0) has been received 
  	    - otherwise, the next box start until the moov box has been parsed
  	    - otherwise, the position of the next sample to fetch
  	 */
  	ISOFile.prototype.nextParsePosition = 0;
  	/* keep mdat data */
  	ISOFile.prototype.discardMdatData = false;

  	ISOFile.prototype.processIncompleteBox = function(ret) {
  		var box;
  		var merged;
  		var found;
  		
  		/* we did not have enough bytes in the current buffer to parse the entire box */
  		if (ret.type === "mdat") { 
  			/* we had enough bytes to get its type and size and it's an 'mdat' */
  			
  			/* special handling for mdat boxes, since we don't actually need to parse it linearly 
  			   we create the box */
  			box = new BoxParser[ret.type+"Box"](ret.size);	
  			this.parsingMdat = box;
  			this.boxes.push(box);
  			this.mdats.push(box);			
  			box.start = ret.start;
  			box.hdr_size = ret.hdr_size;
  			this.stream.addUsedBytes(box.hdr_size);

  			/* indicate that the parsing should start from the end of the box */
  			this.lastBoxStartPosition = box.start + box.size;
  	 		/* let's see if we have the end of the box in the other buffers */
  			found = this.stream.seek(box.start + box.size, false, this.discardMdatData);
  			if (found) {
  				/* found the end of the box */
  				this.parsingMdat = null;
  				/* let's see if we can parse more in this buffer */
  				return true;
  			} else {
  				/* 'mdat' end not found in the existing buffers */
  				/* determine the next position in the file to start parsing from */
  				if (!this.moovStartFound) {
  					/* moov not find yet, 
  					   the file probably has 'mdat' at the beginning, and 'moov' at the end, 
  					   indicate that the downloader should not try to download those bytes now */
  					this.nextParsePosition = box.start + box.size;
  				} else {
  					/* we have the start of the moov box, 
  					   the next bytes should try to complete the current 'mdat' */
  					this.nextParsePosition = this.stream.findEndContiguousBuf();
  				}
  				/* not much we can do, wait for more buffers to arrive */
  				return false;
  			}
  		} else {
  			/* box is incomplete, we may not even know its type */
  			if (ret.type === "moov") { 
  				/* the incomplete box is a 'moov' box */
  				this.moovStartFound = true;
  				if (this.mdats.length === 0) {
  					this.isProgressive = true;
  				}
  			}
  			/* either it's not an mdat box (and we need to parse it, we cannot skip it)
  			   (TODO: we could skip 'free' boxes ...)
  				   or we did not have enough data to parse the type and size of the box, 
  			   we try to concatenate the current buffer with the next buffer to restart parsing */
  			merged = (this.stream.mergeNextBuffer ? this.stream.mergeNextBuffer() : false);
  			if (merged) {
  				/* The next buffer was contiguous, the merging succeeded,
  				   we can now continue parsing, 
  				   the next best position to parse is at the end of this new buffer */
  				this.nextParsePosition = this.stream.getEndPosition();
  				return true;
  			} else {
  				/* we cannot concatenate existing buffers because they are not contiguous or because there is no additional buffer */
  				/* The next best position to parse is still at the end of this old buffer */
  				if (!ret.type) {
  					/* There were not enough bytes in the buffer to parse the box type and length,
  					   the next fetch should retrieve those missing bytes, i.e. the next bytes after this buffer */
  					this.nextParsePosition = this.stream.getEndPosition();
  				} else {
  					/* we had enough bytes to parse size and type of the incomplete box
  					   if we haven't found yet the moov box, skip this one and try the next one 
  					   if we have found the moov box, let's continue linear parsing */
  					if (this.moovStartFound) {
  						this.nextParsePosition = this.stream.getEndPosition();
  					} else {
  						this.nextParsePosition = this.stream.getPosition() + ret.size;
  					}
  				}
  				return false;
  			}
  		}
  	};

  	ISOFile.prototype.hasIncompleteMdat = function () {
  		return (this.parsingMdat !== null);
  	};

  	ISOFile.prototype.processIncompleteMdat = function () {
  		var box;
  		var found;
  		
  		/* we are in the parsing of an incomplete mdat box */
  		box = this.parsingMdat;

  		found = this.stream.seek(box.start + box.size, false, this.discardMdatData);
  		if (found) {
  			Log.debug("ISOFile", "Found 'mdat' end in buffered data");
  			/* the end of the mdat has been found */ 
  			this.parsingMdat = null;
  			/* we can parse more in this buffer */
  			return true;
  		} else {
  			/* we don't have the end of this mdat yet, 
  			   indicate that the next byte to fetch is the end of the buffers we have so far, 
  			   return and wait for more buffer to come */
  			this.nextParsePosition = this.stream.findEndContiguousBuf();
  			return false;
  		}
  	};

  	ISOFile.prototype.restoreParsePosition = function() {
  		/* Reposition at the start position of the previous box not entirely parsed */
  		return this.stream.seek(this.lastBoxStartPosition, true, this.discardMdatData);
  	};

  	ISOFile.prototype.saveParsePosition = function() {
  		/* remember the position of the box start in case we need to roll back (if the box is incomplete) */
  		this.lastBoxStartPosition = this.stream.getPosition();	
  	};

  	ISOFile.prototype.updateUsedBytes = function(box, ret) {
  		if (this.stream.addUsedBytes) {
  			if (box.type === "mdat") {
  				/* for an mdat box, only its header is considered used, other bytes will be used when sample data is requested */
  				this.stream.addUsedBytes(box.hdr_size);
  				if (this.discardMdatData) {
  					this.stream.addUsedBytes(box.size-box.hdr_size);
  				}
  			} else {
  				/* for all other boxes, the entire box data is considered used */
  				this.stream.addUsedBytes(box.size);
  			}	
  		}
  	};
  	// file:src/isofile-advanced-creation.js
  	ISOFile.prototype.add = BoxParser.Box.prototype.add;
  	ISOFile.prototype.addBox = BoxParser.Box.prototype.addBox;

  	ISOFile.prototype.init = function (_options) {
  		var options = _options || {}; 
  		this.add("ftyp").set("major_brand", (options.brands && options.brands[0]) || "iso4")
  								   .set("minor_version", 0)
  								   .set("compatible_brands", options.brands || ["iso4"]);
  		var moov = this.add("moov");
  		moov.add("mvhd").set("timescale", options.timescale || 600)
  						.set("rate", options.rate || 1<<16)
  						.set("creation_time", 0)
  						.set("modification_time", 0)
  						.set("duration", options.duration || 0)
  						.set("volume", (options.width) ? 0 : 0x0100)
  						.set("matrix", [ 1<<16, 0, 0, 0, 1<<16, 0, 0, 0, 0x40000000])
  						.set("next_track_id", 1);
  		moov.add("mvex");
  		return this;
  	};

  	ISOFile.prototype.addTrack = function (_options) {
  		if (!this.moov) {
  			this.init(_options);
  		}

  		var options = _options || {}; 
  		options.width = options.width || 320;
  		options.height = options.height || 320;
  		options.id = options.id || this.moov.mvhd.next_track_id;
  		options.type = options.type || "avc1";

  		var trak = this.moov.add("trak");
  		this.moov.mvhd.next_track_id = options.id+1;
  		trak.add("tkhd").set("flags",BoxParser.TKHD_FLAG_ENABLED | 
  									 BoxParser.TKHD_FLAG_IN_MOVIE | 
  									 BoxParser.TKHD_FLAG_IN_PREVIEW)
  						.set("creation_time",0)
  						.set("modification_time", 0)
  						.set("track_id", options.id)
  						.set("duration", options.duration || 0)
  						.set("layer", options.layer || 0)
  						.set("alternate_group", 0)
  						.set("volume", 1)
  						.set("matrix", [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ])
  						.set("width", options.width << 16)
  						.set("height", options.height << 16);

  		var mdia = trak.add("mdia");
  		mdia.add("mdhd").set("creation_time", 0)
  						.set("modification_time", 0)
  						.set("timescale", options.timescale || 1)
  						.set("duration", options.media_duration || 0)
  						.set("language", options.language || "und");

  		mdia.add("hdlr").set("handler", options.hdlr || "vide")
  						.set("name", options.name || "Track created with MP4Box.js");

  		mdia.add("elng").set("extended_language", options.language || "fr-FR");

  		var minf = mdia.add("minf");
  		if (BoxParser[options.type+"SampleEntry"] === undefined) return;
  		var sample_description_entry = new BoxParser[options.type+"SampleEntry"]();
  		sample_description_entry.data_reference_index = 1;
  		var media_type = "";
  		for (var mediaType in BoxParser.sampleEntryCodes) {
  			var codes = BoxParser.sampleEntryCodes[mediaType];
  			for (var i = 0; i < codes.length; i++) {
  				if (codes.indexOf(options.type) > -1) {
  					media_type = mediaType;
  					break;
  				}
  			}
  		}
  		switch(media_type) {
  			case "Visual":
  				minf.add("vmhd").set("graphicsmode",0).set("opcolor", [ 0, 0, 0 ]);
  				sample_description_entry.set("width", options.width)
  							.set("height", options.height)
  							.set("horizresolution", 0x48<<16)
  							.set("vertresolution", 0x48<<16)
  							.set("frame_count", 1)
  							.set("compressorname", options.type+" Compressor")
  							.set("depth", 0x18);
  				if (options.avcDecoderConfigRecord) {
  					var avcC = new BoxParser.avcCBox();
  					var stream = new MP4BoxStream(options.avcDecoderConfigRecord);
  					avcC.parse(stream);
  					sample_description_entry.addBox(avcC);
  				}
  				break;
  			case "Audio":
  				minf.add("smhd").set("balance", options.balance || 0);
  				sample_description_entry.set("channel_count", options.channel_count || 2)
  							.set("samplesize", options.samplesize || 16)
  							.set("samplerate", options.samplerate || 1<<16);
  				break;
  			case "Hint":
  				minf.add("hmhd"); // TODO: add properties
  				break;
  			case "Subtitle":
  				minf.add("sthd");
  				switch (options.type) {
  					case "stpp":
  						sample_description_entry.set("namespace", options.namespace || "nonamespace")
  									.set("schema_location", options.schema_location || "")
  									.set("auxiliary_mime_types", options.auxiliary_mime_types || "");
  						break;
  				}
  				break;
  			case "Metadata":
  				minf.add("nmhd");
  				break;
  			case "System":
  				minf.add("nmhd");
  				break;
  			default:
  				minf.add("nmhd");
  				break;
  		}
  		if (options.description) {
  			sample_description_entry.addBox(options.description);
  		}
  		if (options.description_boxes) {
  			options.description_boxes.forEach(function (b) {
  				sample_description_entry.addBox(b);
  			});
  		}
  		minf.add("dinf").add("dref").addEntry((new BoxParser["url Box"]()).set("flags", 0x1));
  		var stbl = minf.add("stbl");
  		stbl.add("stsd").addEntry(sample_description_entry);
  		stbl.add("stts").set("sample_counts", [])
  						.set("sample_deltas", []);
  		stbl.add("stsc").set("first_chunk", [])
  						.set("samples_per_chunk", [])
  						.set("sample_description_index", []);
  		stbl.add("stco").set("chunk_offsets", []);
  		stbl.add("stsz").set("sample_sizes", []);

  		this.moov.mvex.add("trex").set("track_id", options.id)
  								  .set("default_sample_description_index", options.default_sample_description_index || 1)
  								  .set("default_sample_duration", options.default_sample_duration || 0)
  								  .set("default_sample_size", options.default_sample_size || 0)
  								  .set("default_sample_flags", options.default_sample_flags || 0);
  		this.buildTrakSampleLists(trak);
  		return options.id;
  	};

  	BoxParser.Box.prototype.computeSize = function(stream_) {
  		var stream = stream_ || new DataStream();
  		stream.endianness = DataStream.BIG_ENDIAN;
  		this.write(stream);
  	};

  	ISOFile.prototype.addSample = function (track_id, data, _options) {
  		var options = _options || {};
  		var sample = {};
  		var trak = this.getTrackById(track_id);
  		if (trak === null) return;
  	    sample.number = trak.samples.length;
  		sample.track_id = trak.tkhd.track_id;
  		sample.timescale = trak.mdia.mdhd.timescale;
  		sample.description_index = (options.sample_description_index ? options.sample_description_index - 1: 0);
  		sample.description = trak.mdia.minf.stbl.stsd.entries[sample.description_index];
  		sample.data = data;
  		sample.size = data.byteLength;
  		sample.alreadyRead = sample.size;
  		sample.duration = options.duration || 1;
  		sample.cts = options.cts || 0;
  		sample.dts = options.dts || 0;
  		sample.is_sync = options.is_sync || false;
  		sample.is_leading = options.is_leading || 0;
  		sample.depends_on = options.depends_on || 0;
  		sample.is_depended_on = options.is_depended_on || 0;
  		sample.has_redundancy = options.has_redundancy || 0;
  		sample.degradation_priority = options.degradation_priority || 0;
  		sample.offset = 0;
  		sample.subsamples = options.subsamples;
  		trak.samples.push(sample);
  		trak.samples_size += sample.size;
  		trak.samples_duration += sample.duration;
  		if (!trak.first_dts) {
  			trak.first_dts = options.dts;
  		}

  		this.processSamples();
  		
  		var moof = this.createSingleSampleMoof(sample);
  		this.addBox(moof);
  		moof.computeSize();
  		/* adjusting the data_offset now that the moof size is known*/
  		moof.trafs[0].truns[0].data_offset = moof.size+8; //8 is mdat header
  		this.add("mdat").data = new Uint8Array(data);
  		return sample;
  	};

  	ISOFile.prototype.createSingleSampleMoof = function(sample) {
  		var sample_flags = 0;
  		if (sample.is_sync)
  			sample_flags = (1 << 25);  // sample_depends_on_none (I picture)
  		else
  			sample_flags = (1 << 16);  // non-sync

  		var moof = new BoxParser.moofBox();
  		moof.add("mfhd").set("sequence_number", this.nextMoofNumber);
  		this.nextMoofNumber++;
  		var traf = moof.add("traf");
  		var trak = this.getTrackById(sample.track_id);
  		traf.add("tfhd").set("track_id", sample.track_id)
  						.set("flags", BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
  		traf.add("tfdt").set("baseMediaDecodeTime", (sample.dts - (trak.first_dts || 0)));
  		traf.add("trun").set("flags", BoxParser.TRUN_FLAGS_DATA_OFFSET | BoxParser.TRUN_FLAGS_DURATION | 
  					 				  BoxParser.TRUN_FLAGS_SIZE | BoxParser.TRUN_FLAGS_FLAGS | 
  					 				  BoxParser.TRUN_FLAGS_CTS_OFFSET)
  						.set("data_offset",0)
  						.set("first_sample_flags",0)
  						.set("sample_count",1)
  						.set("sample_duration",[sample.duration])
  						.set("sample_size",[sample.size])
  						.set("sample_flags",[sample_flags])
  						.set("sample_composition_time_offset", [sample.cts - sample.dts]);
  		return moof;
  	};

  	// file:src/isofile-sample-processing.js
  	/* Index of the last moof box received */
  	ISOFile.prototype.lastMoofIndex = 0;

  	/* size of the buffers allocated for samples */
  	ISOFile.prototype.samplesDataSize = 0;

  	/* Resets all sample tables */
  	ISOFile.prototype.resetTables = function () {
  		var i;
  		var trak, stco, stsc, stsz, stts, ctts, stss;
  		this.initial_duration = this.moov.mvhd.duration;
  		this.moov.mvhd.duration = 0;
  		for (i = 0; i < this.moov.traks.length; i++) {
  			trak = this.moov.traks[i];
  			trak.tkhd.duration = 0;
  			trak.mdia.mdhd.duration = 0;
  			stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
  			stco.chunk_offsets = [];
  			stsc = trak.mdia.minf.stbl.stsc;
  			stsc.first_chunk = [];
  			stsc.samples_per_chunk = [];
  			stsc.sample_description_index = [];
  			stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
  			stsz.sample_sizes = [];
  			stts = trak.mdia.minf.stbl.stts;
  			stts.sample_counts = [];
  			stts.sample_deltas = [];
  			ctts = trak.mdia.minf.stbl.ctts;
  			if (ctts) {
  				ctts.sample_counts = [];
  				ctts.sample_offsets = [];
  			}
  			stss = trak.mdia.minf.stbl.stss;
  			var k = trak.mdia.minf.stbl.boxes.indexOf(stss);
  			if (k != -1) trak.mdia.minf.stbl.boxes[k] = null;
  		}
  	};

  	ISOFile.initSampleGroups = function(trak, traf, sbgps, trak_sgpds, traf_sgpds) {
  		var l;
  		var k;
  		var sample_group_info;
  		var sample_group_key;
  		function SampleGroupInfo(_type, _parameter, _sbgp) {
  			this.grouping_type = _type;
  			this.grouping_type_parameter = _parameter;
  			this.sbgp = _sbgp;
  			this.last_sample_in_run = -1;
  			this.entry_index = -1;		
  		}
  		if (traf) {
  			traf.sample_groups_info = [];
  		} 
  		if (!trak.sample_groups_info) {
  			trak.sample_groups_info = [];
  		}
  		for (k = 0; k < sbgps.length; k++) {
  			sample_group_key = sbgps[k].grouping_type +"/"+ sbgps[k].grouping_type_parameter;
  			sample_group_info = new SampleGroupInfo(sbgps[k].grouping_type, sbgps[k].grouping_type_parameter, sbgps[k]);
  			if (traf) {
  				traf.sample_groups_info[sample_group_key] = sample_group_info;
  			}
  			if (!trak.sample_groups_info[sample_group_key]) {
  				trak.sample_groups_info[sample_group_key] = sample_group_info;
  			}
  			for (l=0; l <trak_sgpds.length; l++) {
  				if (trak_sgpds[l].grouping_type === sbgps[k].grouping_type) {
  					sample_group_info.description = trak_sgpds[l];
  					sample_group_info.description.used = true;
  				}
  			}
  			if (traf_sgpds) {
  				for (l=0; l <traf_sgpds.length; l++) {
  					if (traf_sgpds[l].grouping_type === sbgps[k].grouping_type) {
  						sample_group_info.fragment_description = traf_sgpds[l];
  						sample_group_info.fragment_description.used = true;
  						sample_group_info.is_fragment = true;
  					}
  				}			
  			}
  		}
  		if (!traf) {
  			for (k = 0; k < trak_sgpds.length; k++) {
  				if (!trak_sgpds[k].used && trak_sgpds[k].version >= 2) {
  					sample_group_key = trak_sgpds[k].grouping_type +"/0";
  					sample_group_info = new SampleGroupInfo(trak_sgpds[k].grouping_type, 0);
  					if (!trak.sample_groups_info[sample_group_key]) {
  						trak.sample_groups_info[sample_group_key] = sample_group_info;
  					}
  				}
  			}
  		} else {
  			if (traf_sgpds) {
  				for (k = 0; k < traf_sgpds.length; k++) {
  					if (!traf_sgpds[k].used && traf_sgpds[k].version >= 2) {
  						sample_group_key = traf_sgpds[k].grouping_type +"/0";
  						sample_group_info = new SampleGroupInfo(traf_sgpds[k].grouping_type, 0);
  						sample_group_info.is_fragment = true;
  						if (!traf.sample_groups_info[sample_group_key]) {
  							traf.sample_groups_info[sample_group_key] = sample_group_info;
  						}
  					}
  				}
  			}
  		}
  	};

  	ISOFile.setSampleGroupProperties = function(trak, sample, sample_number, sample_groups_info) {
  		var k;
  		var index;
  		sample.sample_groups = [];
  		for (k in sample_groups_info) {
  			sample.sample_groups[k] = {};
  			sample.sample_groups[k].grouping_type = sample_groups_info[k].grouping_type;
  			sample.sample_groups[k].grouping_type_parameter = sample_groups_info[k].grouping_type_parameter;
  			if (sample_number >= sample_groups_info[k].last_sample_in_run) {
  				if (sample_groups_info[k].last_sample_in_run < 0) {
  					sample_groups_info[k].last_sample_in_run = 0;
  				}
  				sample_groups_info[k].entry_index++;	
  				if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) {
  					sample_groups_info[k].last_sample_in_run += sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].sample_count;
  				}
  			}
  			if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) {
  				sample.sample_groups[k].group_description_index = sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].group_description_index;
  			} else {
  				sample.sample_groups[k].group_description_index = -1; // special value for not defined
  			}
  			if (sample.sample_groups[k].group_description_index !== 0) {
  				var description;
  				if (sample_groups_info[k].fragment_description) {
  					description = sample_groups_info[k].fragment_description;
  				} else {
  					description = sample_groups_info[k].description;
  				}
  				if (sample.sample_groups[k].group_description_index > 0) {
  					if (sample.sample_groups[k].group_description_index > 65535) {
  						index = (sample.sample_groups[k].group_description_index >> 16)-1;
  					} else {
  						index = sample.sample_groups[k].group_description_index-1;
  					}
  					if (description && index >= 0) {
  						sample.sample_groups[k].description = description.entries[index];
  					}
  				} else {
  					if (description && description.version >= 2) {
  						if (description.default_group_description_index > 0) {								
  							sample.sample_groups[k].description = description.entries[description.default_group_description_index-1];
  						}
  					}
  				}
  			}
  		}
  	};

  	ISOFile.process_sdtp = function (sdtp, sample, number) {
  		if (!sample) {
  			return;
  		}
  		if (sdtp) {
  			sample.is_leading = sdtp.is_leading[number];
  			sample.depends_on = sdtp.sample_depends_on[number];
  			sample.is_depended_on = sdtp.sample_is_depended_on[number];
  			sample.has_redundancy = sdtp.sample_has_redundancy[number];
  		} else {
  			sample.is_leading = 0;
  			sample.depends_on = 0;
  			sample.is_depended_on = 0;
  			sample.has_redundancy = 0;
  		}	
  	};

  	/* Build initial sample list from  sample tables */
  	ISOFile.prototype.buildSampleLists = function() {	
  		var i;
  		var trak;
  		for (i = 0; i < this.moov.traks.length; i++) {
  			trak = this.moov.traks[i];
  			this.buildTrakSampleLists(trak);
  		}
  	};

  	ISOFile.prototype.buildTrakSampleLists = function(trak) {	
  		var j;
  		var stco, stsc, stsz, stts, ctts, stss, stsd, subs, sbgps, sgpds, stdp;
  		var chunk_run_index, chunk_index, last_chunk_in_run, offset_in_chunk, last_sample_in_chunk;
  		var last_sample_in_stts_run, stts_run_index, last_sample_in_ctts_run, ctts_run_index, last_stss_index, subs_entry_index, last_subs_sample_index;

  		trak.samples = [];
  		trak.samples_duration = 0;
  		trak.samples_size = 0;
  		stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
  		stsc = trak.mdia.minf.stbl.stsc;
  		stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
  		stts = trak.mdia.minf.stbl.stts;
  		ctts = trak.mdia.minf.stbl.ctts;
  		stss = trak.mdia.minf.stbl.stss;
  		stsd = trak.mdia.minf.stbl.stsd;
  		subs = trak.mdia.minf.stbl.subs;
  		stdp = trak.mdia.minf.stbl.stdp;
  		sbgps = trak.mdia.minf.stbl.sbgps;
  		sgpds = trak.mdia.minf.stbl.sgpds;
  		
  		last_sample_in_stts_run = -1;
  		stts_run_index = -1;
  		last_sample_in_ctts_run = -1;
  		ctts_run_index = -1;
  		last_stss_index = 0;
  		subs_entry_index = 0;
  		last_subs_sample_index = 0;		

  		ISOFile.initSampleGroups(trak, null, sbgps, sgpds);

  		if (typeof stsz === "undefined") {
  			return;
  		}

  		/* we build the samples one by one and compute their properties */
  		for (j = 0; j < stsz.sample_sizes.length; j++) {
  			var sample = {};
  			sample.number = j;
  			sample.track_id = trak.tkhd.track_id;
  			sample.timescale = trak.mdia.mdhd.timescale;
  			sample.alreadyRead = 0;
  			trak.samples[j] = sample;
  			/* size can be known directly */
  			sample.size = stsz.sample_sizes[j];
  			trak.samples_size += sample.size;
  			/* computing chunk-based properties (offset, sample description index)*/
  			if (j === 0) {				
  				chunk_index = 1; /* the first sample is in the first chunk (chunk indexes are 1-based) */
  				chunk_run_index = 0; /* the first chunk is the first entry in the first_chunk table */
  				sample.chunk_index = chunk_index;
  				sample.chunk_run_index = chunk_run_index;
  				last_sample_in_chunk = stsc.samples_per_chunk[chunk_run_index];
  				offset_in_chunk = 0;

  				/* Is there another entry in the first_chunk table ? */
  				if (chunk_run_index + 1 < stsc.first_chunk.length) {
  					/* The last chunk in the run is the chunk before the next first chunk */
  					last_chunk_in_run = stsc.first_chunk[chunk_run_index+1]-1; 	
  				} else {
  					/* There is only one entry in the table, it is valid for all future chunks*/
  					last_chunk_in_run = Infinity;
  				}
  			} else {
  				if (j < last_sample_in_chunk) {
  					/* the sample is still in the current chunk */
  					sample.chunk_index = chunk_index;
  					sample.chunk_run_index = chunk_run_index;
  				} else {
  					/* the sample is in the next chunk */
  					chunk_index++;
  					sample.chunk_index = chunk_index;
  					/* reset the accumulated offset in the chunk */
  					offset_in_chunk = 0;
  					if (chunk_index <= last_chunk_in_run) ; else {
  						chunk_run_index++;
  						/* Is there another entry in the first_chunk table ? */
  						if (chunk_run_index + 1 < stsc.first_chunk.length) {
  							/* The last chunk in the run is the chunk before the next first chunk */
  							last_chunk_in_run = stsc.first_chunk[chunk_run_index+1]-1; 	
  						} else {
  							/* There is only one entry in the table, it is valid for all future chunks*/
  							last_chunk_in_run = Infinity;
  						}
  						
  					}
  					sample.chunk_run_index = chunk_run_index;
  					last_sample_in_chunk += stsc.samples_per_chunk[chunk_run_index];
  				}
  			}

  			sample.description_index = stsc.sample_description_index[sample.chunk_run_index]-1;
  			sample.description = stsd.entries[sample.description_index];
  			sample.offset = stco.chunk_offsets[sample.chunk_index-1] + offset_in_chunk; /* chunk indexes are 1-based */
  			offset_in_chunk += sample.size;

  			/* setting dts, cts, duration and rap flags */
  			if (j > last_sample_in_stts_run) {
  				stts_run_index++;
  				if (last_sample_in_stts_run < 0) {
  					last_sample_in_stts_run = 0;
  				}
  				last_sample_in_stts_run += stts.sample_counts[stts_run_index];				
  			}
  			if (j > 0) {
  				trak.samples[j-1].duration = stts.sample_deltas[stts_run_index];
  				trak.samples_duration += trak.samples[j-1].duration;
  				sample.dts = trak.samples[j-1].dts + trak.samples[j-1].duration;
  			} else {
  				sample.dts = 0;
  			}
  			if (ctts) {
  				if (j >= last_sample_in_ctts_run) {
  					ctts_run_index++;
  					if (last_sample_in_ctts_run < 0) {
  						last_sample_in_ctts_run = 0;
  					}
  					last_sample_in_ctts_run += ctts.sample_counts[ctts_run_index];				
  				}
  				sample.cts = trak.samples[j].dts + ctts.sample_offsets[ctts_run_index];
  			} else {
  				sample.cts = sample.dts;
  			}
  			if (stss) {
  				if (j == stss.sample_numbers[last_stss_index] - 1) { // sample numbers are 1-based
  					sample.is_sync = true;
  					last_stss_index++;
  				} else {
  					sample.is_sync = false;				
  					sample.degradation_priority = 0;
  				}
  				if (subs) {
  					if (subs.entries[subs_entry_index].sample_delta + last_subs_sample_index == j+1) {
  						sample.subsamples = subs.entries[subs_entry_index].subsamples;
  						last_subs_sample_index += subs.entries[subs_entry_index].sample_delta;
  						subs_entry_index++;
  					}
  				}
  			} else {
  				sample.is_sync = true;
  			}
  			ISOFile.process_sdtp(trak.mdia.minf.stbl.sdtp, sample, sample.number);
  			if (stdp) {
  				sample.degradation_priority = stdp.priority[j];
  			} else {
  				sample.degradation_priority = 0;
  			}
  			if (subs) {
  				if (subs.entries[subs_entry_index].sample_delta + last_subs_sample_index == j) {
  					sample.subsamples = subs.entries[subs_entry_index].subsamples;
  					last_subs_sample_index += subs.entries[subs_entry_index].sample_delta;
  				}
  			}
  			if (sbgps.length > 0 || sgpds.length > 0) {
  				ISOFile.setSampleGroupProperties(trak, sample, j, trak.sample_groups_info);
  			}
  		}
  		if (j>0) {
  			trak.samples[j-1].duration = Math.max(trak.mdia.mdhd.duration - trak.samples[j-1].dts, 0);
  			trak.samples_duration += trak.samples[j-1].duration;
  		}
  	};

  	/* Update sample list when new 'moof' boxes are received */
  	ISOFile.prototype.updateSampleLists = function() {	
  		var i, j, k;
  		var default_sample_description_index, default_sample_duration, default_sample_size, default_sample_flags;
  		var last_run_position;
  		var box, moof, traf, trak, trex;
  		var sample;
  		var sample_flags;
  		
  		if (this.moov === undefined) {
  			return;
  		}
  		/* if the input file is fragmented and fetched in multiple downloads, we need to update the list of samples */
  		while (this.lastMoofIndex < this.moofs.length) {
  			box = this.moofs[this.lastMoofIndex];
  			this.lastMoofIndex++;
  			if (box.type == "moof") {
  				moof = box;
  				for (i = 0; i < moof.trafs.length; i++) {
  					traf = moof.trafs[i];
  					trak = this.getTrackById(traf.tfhd.track_id);
  					trex = this.getTrexById(traf.tfhd.track_id);
  					if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_DESC) {
  						default_sample_description_index = traf.tfhd.default_sample_description_index;
  					} else {
  						default_sample_description_index = (trex ? trex.default_sample_description_index: 1);
  					}
  					if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_DUR) {
  						default_sample_duration = traf.tfhd.default_sample_duration;
  					} else {
  						default_sample_duration = (trex ? trex.default_sample_duration : 0);
  					}
  					if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_SIZE) {
  						default_sample_size = traf.tfhd.default_sample_size;
  					} else {
  						default_sample_size = (trex ? trex.default_sample_size : 0);
  					}
  					if (traf.tfhd.flags & BoxParser.TFHD_FLAG_SAMPLE_FLAGS) {
  						default_sample_flags = traf.tfhd.default_sample_flags;
  					} else {
  						default_sample_flags = (trex ? trex.default_sample_flags : 0);
  					}
  					traf.sample_number = 0;
  					/* process sample groups */
  					if (traf.sbgps.length > 0) {
  						ISOFile.initSampleGroups(trak, traf, traf.sbgps, trak.mdia.minf.stbl.sgpds, traf.sgpds);
  					}
  					for (j = 0; j < traf.truns.length; j++) {
  						var trun = traf.truns[j];
  						for (k = 0; k < trun.sample_count; k++) {
  							sample = {};
  							sample.moof_number = this.lastMoofIndex;
  							sample.number_in_traf = traf.sample_number;
  							traf.sample_number++;
  				            sample.number = trak.samples.length;
  							traf.first_sample_index = trak.samples.length;
  							trak.samples.push(sample);
  							sample.track_id = trak.tkhd.track_id;
  							sample.timescale = trak.mdia.mdhd.timescale;
  							sample.description_index = default_sample_description_index-1;
  							sample.description = trak.mdia.minf.stbl.stsd.entries[sample.description_index];
  							sample.size = default_sample_size;
  							if (trun.flags & BoxParser.TRUN_FLAGS_SIZE) {
  								sample.size = trun.sample_size[k];
  							}
  							trak.samples_size += sample.size;
  							sample.duration = default_sample_duration;
  							if (trun.flags & BoxParser.TRUN_FLAGS_DURATION) {
  								sample.duration = trun.sample_duration[k];
  							}
  							trak.samples_duration += sample.duration;
  							if (trak.first_traf_merged || k > 0) {
  								sample.dts = trak.samples[trak.samples.length-2].dts+trak.samples[trak.samples.length-2].duration;
  							} else {
  								if (traf.tfdt) {
  									sample.dts = traf.tfdt.baseMediaDecodeTime;
  								} else {
  									sample.dts = 0;
  								}
  								trak.first_traf_merged = true;
  							}
  							sample.cts = sample.dts;
  							if (trun.flags & BoxParser.TRUN_FLAGS_CTS_OFFSET) {
  								sample.cts = sample.dts + trun.sample_composition_time_offset[k];
  							}
  							sample_flags = default_sample_flags;
  							if (trun.flags & BoxParser.TRUN_FLAGS_FLAGS) {
  								sample_flags = trun.sample_flags[k];
  							} else if (k === 0 && (trun.flags & BoxParser.TRUN_FLAGS_FIRST_FLAG)) {
  								sample_flags = trun.first_sample_flags;
  							}
  							sample.is_sync = ((sample_flags >> 16 & 0x1) ? false : true);
  							sample.is_leading = (sample_flags >> 26 & 0x3);
  							sample.depends_on = (sample_flags >> 24 & 0x3);
  							sample.is_depended_on = (sample_flags >> 22 & 0x3);
  							sample.has_redundancy = (sample_flags >> 20 & 0x3);
  							sample.degradation_priority = (sample_flags & 0xFFFF);
  							//ISOFile.process_sdtp(traf.sdtp, sample, sample.number_in_traf);
  							var bdop = (traf.tfhd.flags & BoxParser.TFHD_FLAG_BASE_DATA_OFFSET) ? true : false;
  							var dbim = (traf.tfhd.flags & BoxParser.TFHD_FLAG_DEFAULT_BASE_IS_MOOF) ? true : false;
  							var dop = (trun.flags & BoxParser.TRUN_FLAGS_DATA_OFFSET) ? true : false;
  							var bdo = 0;
  							if (!bdop) {
  								if (!dbim) {
  									if (j === 0) { // the first track in the movie fragment
  										bdo = moof.start; // the position of the first byte of the enclosing Movie Fragment Box
  									} else {
  										bdo = last_run_position; // end of the data defined by the preceding *track* (irrespective of the track id) fragment in the moof
  									}
  								} else {
  									bdo = moof.start;
  								}
  							} else {
  								bdo = traf.tfhd.base_data_offset;
  							}
  							if (j === 0 && k === 0) {
  								if (dop) {
  									sample.offset = bdo + trun.data_offset; // If the data-offset is present, it is relative to the base-data-offset established in the track fragment header
  								} else {
  									sample.offset = bdo; // the data for this run starts the base-data-offset defined by the track fragment header
  								}
  							} else {
  								sample.offset = last_run_position; // this run starts immediately after the data of the previous run
  							}
  							last_run_position = sample.offset + sample.size;
  							if (traf.sbgps.length > 0 || traf.sgpds.length > 0 ||
  								trak.mdia.minf.stbl.sbgps.length > 0 || trak.mdia.minf.stbl.sgpds.length > 0) {
  								ISOFile.setSampleGroupProperties(trak, sample, sample.number_in_traf, traf.sample_groups_info);
  							}
  						}
  					}
  					if (traf.subs) {
  						trak.has_fragment_subsamples = true;
  						var sample_index = traf.first_sample_index;
  						for (j = 0; j < traf.subs.entries.length; j++) {
  							sample_index += traf.subs.entries[j].sample_delta;
  							sample = trak.samples[sample_index-1];
  							sample.subsamples = traf.subs.entries[j].subsamples;
  						}					
  					}
  				}
  			}
  		}	
  	};

  	/* Try to get sample data for a given sample:
  	   returns null if not found
  	   returns the same sample if already requested
  	 */
  	ISOFile.prototype.getSample = function(trak, sampleNum) {	
  		var buffer;
  		var sample = trak.samples[sampleNum];
  		
  		if (!this.moov) {
  			return null;
  		}

  		if (!sample.data) {
  			/* Not yet fetched */
  			sample.data = new Uint8Array(sample.size);
  			sample.alreadyRead = 0;
  			this.samplesDataSize += sample.size;
  			Log.debug("ISOFile", "Allocating sample #"+sampleNum+" on track #"+trak.tkhd.track_id+" of size "+sample.size+" (total: "+this.samplesDataSize+")");
  		} else if (sample.alreadyRead == sample.size) {
  			/* Already fetched entirely */
  			return sample;
  		}

  		/* The sample has only been partially fetched, we need to check in all buffers */
  		while(true) {
  			var index =	this.stream.findPosition(true, sample.offset + sample.alreadyRead, false);
  			if (index > -1) {
  				buffer = this.stream.buffers[index];
  				var lengthAfterStart = buffer.byteLength - (sample.offset + sample.alreadyRead - buffer.fileStart);
  				if (sample.size - sample.alreadyRead <= lengthAfterStart) {
  					/* the (rest of the) sample is entirely contained in this buffer */

  					Log.debug("ISOFile","Getting sample #"+sampleNum+" data (alreadyRead: "+sample.alreadyRead+" offset: "+
  						(sample.offset+sample.alreadyRead - buffer.fileStart)+" read size: "+(sample.size - sample.alreadyRead)+" full size: "+sample.size+")");

  					DataStream.memcpy(sample.data.buffer, sample.alreadyRead,
  					                  buffer, sample.offset+sample.alreadyRead - buffer.fileStart, sample.size - sample.alreadyRead);

  					/* update the number of bytes used in this buffer and check if it needs to be removed */
  					buffer.usedBytes += sample.size - sample.alreadyRead;
  					this.stream.logBufferLevel();

  					sample.alreadyRead = sample.size;

  					return sample;
  				} else {
  					/* the sample does not end in this buffer */

  					if (lengthAfterStart === 0) return null;

  					Log.debug("ISOFile","Getting sample #"+sampleNum+" partial data (alreadyRead: "+sample.alreadyRead+" offset: "+
  						(sample.offset+sample.alreadyRead - buffer.fileStart)+" read size: "+lengthAfterStart+" full size: "+sample.size+")");

  					DataStream.memcpy(sample.data.buffer, sample.alreadyRead,
  					                  buffer, sample.offset+sample.alreadyRead - buffer.fileStart, lengthAfterStart);
  					sample.alreadyRead += lengthAfterStart;

  					/* update the number of bytes used in this buffer and check if it needs to be removed */
  					buffer.usedBytes += lengthAfterStart;
  					this.stream.logBufferLevel();

  					/* keep looking in the next buffer */
  				}
  			} else {
  				return null;
  			}
  		}
  	};

  	/* Release the memory used to store the data of the sample */
  	ISOFile.prototype.releaseSample = function(trak, sampleNum) {	
  		var sample = trak.samples[sampleNum];
  		if (sample.data) {
  			this.samplesDataSize -= sample.size;
  			sample.data = null;
  			sample.alreadyRead = 0;
  			return sample.size;
  		} else {
  			return 0;
  		}
  	};

  	ISOFile.prototype.getAllocatedSampleDataSize = function() {
  		return this.samplesDataSize;
  	};

  	/* Builds the MIME Type 'codecs' sub-parameters for the whole file */
  	ISOFile.prototype.getCodecs = function() {	
  		var i;
  		var codecs = "";
  		for (i = 0; i < this.moov.traks.length; i++) {
  			var trak = this.moov.traks[i];
  			if (i>0) {
  				codecs+=","; 
  			}
  			codecs += trak.mdia.minf.stbl.stsd.entries[0].getCodec();		
  		}
  		return codecs;
  	};

  	/* Helper function */
  	ISOFile.prototype.getTrexById = function(id) {	
  		var i;
  		if (!this.moov || !this.moov.mvex) return null;
  		for (i = 0; i < this.moov.mvex.trexs.length; i++) {
  			var trex = this.moov.mvex.trexs[i];
  			if (trex.track_id == id) return trex;
  		}
  		return null;
  	};

  	/* Helper function */
  	ISOFile.prototype.getTrackById = function(id) {
  		if (this.moov === undefined) {
  			return null;
  		}
  		for (var j = 0; j < this.moov.traks.length; j++) {
  			var trak = this.moov.traks[j];
  			if (trak.tkhd.track_id == id) return trak;
  		}
  		return null;
  	};
  	// file:src/isofile-item-processing.js
  	ISOFile.prototype.items = [];
  	/* size of the buffers allocated for samples */
  	ISOFile.prototype.itemsDataSize = 0;

  	ISOFile.prototype.flattenItemInfo = function() {	
  		var items = this.items;
  		var i, j;
  		var item;
  		var meta = this.meta;
  		if (meta === null || meta === undefined) return;
  		if (meta.hdlr === undefined) return;
  		if (meta.iinf === undefined) return;
  		for (i = 0; i < meta.iinf.item_infos.length; i++) {
  			item = {};
  			item.id = meta.iinf.item_infos[i].item_ID;
  			items[item.id] = item;
  			item.ref_to = [];
  			item.name = meta.iinf.item_infos[i].item_name;
  			if (meta.iinf.item_infos[i].protection_index > 0) {
  				item.protection = meta.ipro.protections[meta.iinf.item_infos[i].protection_index-1];
  			}
  			if (meta.iinf.item_infos[i].item_type) {
  				item.type = meta.iinf.item_infos[i].item_type;
  			} else {
  				item.type = "mime";
  			}
  			item.content_type = meta.iinf.item_infos[i].content_type;
  			item.content_encoding = meta.iinf.item_infos[i].content_encoding;
  		}
  		if (meta.iloc) {
  			for(i = 0; i < meta.iloc.items.length; i++) {
  				var itemloc = meta.iloc.items[i];
  				item = items[itemloc.item_ID];
  				if (itemloc.data_reference_index !== 0) {
  					Log.warn("Item storage with reference to other files: not supported");
  					item.source = meta.dinf.boxes[itemloc.data_reference_index-1];
  				}
  				switch(itemloc.construction_method) {
  					case 0: // offset into the file referenced by the data reference index
  					break;
  					case 1: // offset into the idat box of this meta box
  					Log.warn("Item storage with construction_method : not supported");
  					break;
  					case 2: // offset into another item
  					Log.warn("Item storage with construction_method : not supported");
  					break;
  				}
  				item.extents = [];
  				item.size = 0;
  				for (j = 0; j < itemloc.extents.length; j++) {
  					item.extents[j] = {};
  					item.extents[j].offset = itemloc.extents[j].extent_offset + itemloc.base_offset;
  					item.extents[j].length = itemloc.extents[j].extent_length;
  					item.extents[j].alreadyRead = 0;
  					item.size += item.extents[j].length;
  				}
  			}
  		}
  		if (meta.pitm) {
  			items[meta.pitm.item_id].primary = true;
  		}
  		if (meta.iref) {
  			for (i=0; i <meta.iref.references.length; i++) {
  				var ref = meta.iref.references[i];
  				for (j=0; j<ref.references.length; j++) {
  					items[ref.from_item_ID].ref_to.push({type: ref.type, id: ref.references[j]});
  				}
  			}
  		}
  		if (meta.iprp) {
  			for (var k = 0; k < meta.iprp.ipmas.length; k++) {
  				var ipma = meta.iprp.ipmas[k];
  				for (i = 0; i < ipma.associations.length; i++) {
  					var association = ipma.associations[i];
  					item = items[association.id];
  					if (item.properties === undefined) {
  						item.properties = {};
  						item.properties.boxes = [];
  					}
  					for (j = 0; j < association.props.length; j++) {
  						var propEntry = association.props[j];
  						if (propEntry.property_index > 0 && propEntry.property_index-1 < meta.iprp.ipco.boxes.length) {
  							var propbox = meta.iprp.ipco.boxes[propEntry.property_index-1];
  							item.properties[propbox.type] = propbox;
  							item.properties.boxes.push(propbox);
  						}
  					}
  				}
  			}
  		}
  	};

  	ISOFile.prototype.getItem = function(item_id) {	
  		var buffer;
  		var item;
  		
  		if (!this.meta) {
  			return null;
  		}

  	 	item = this.items[item_id];
  		if (!item.data && item.size) {
  			/* Not yet fetched */
  			item.data = new Uint8Array(item.size);
  			item.alreadyRead = 0;
  			this.itemsDataSize += item.size;
  			Log.debug("ISOFile", "Allocating item #"+item_id+" of size "+item.size+" (total: "+this.itemsDataSize+")");
  		} else if (item.alreadyRead === item.size) {
  			/* Already fetched entirely */
  			return item;
  		}

  		/* The item has only been partially fetched, we need to check in all buffers to find the remaining extents*/

  		for (var i = 0; i < item.extents.length; i++) {
  			var extent = item.extents[i];
  			if (extent.alreadyRead === extent.length) {
  				continue;
  			} else {
  				var index =	this.stream.findPosition(true, extent.offset + extent.alreadyRead, false);
  				if (index > -1) {
  					buffer = this.stream.buffers[index];
  					var lengthAfterStart = buffer.byteLength - (extent.offset + extent.alreadyRead - buffer.fileStart);
  					if (extent.length - extent.alreadyRead <= lengthAfterStart) {
  						/* the (rest of the) extent is entirely contained in this buffer */

  						Log.debug("ISOFile","Getting item #"+item_id+" extent #"+i+" data (alreadyRead: "+extent.alreadyRead+
  							" offset: "+(extent.offset+extent.alreadyRead - buffer.fileStart)+" read size: "+(extent.length - extent.alreadyRead)+
  							" full extent size: "+extent.length+" full item size: "+item.size+")");

  						DataStream.memcpy(item.data.buffer, item.alreadyRead, 
  						                  buffer, extent.offset+extent.alreadyRead - buffer.fileStart, extent.length - extent.alreadyRead);

  						/* update the number of bytes used in this buffer and check if it needs to be removed */
  						buffer.usedBytes += extent.length - extent.alreadyRead;
  						this.stream.logBufferLevel();

  						item.alreadyRead += (extent.length - extent.alreadyRead);
  						extent.alreadyRead = extent.length;
  					} else {
  						/* the sample does not end in this buffer */

  						Log.debug("ISOFile","Getting item #"+item_id+" extent #"+i+" partial data (alreadyRead: "+extent.alreadyRead+" offset: "+
  							(extent.offset+extent.alreadyRead - buffer.fileStart)+" read size: "+lengthAfterStart+
  							" full extent size: "+extent.length+" full item size: "+item.size+")");

  						DataStream.memcpy(item.data.buffer, item.alreadyRead, 
  						                  buffer, extent.offset+extent.alreadyRead - buffer.fileStart, lengthAfterStart);
  						extent.alreadyRead += lengthAfterStart;
  						item.alreadyRead += lengthAfterStart;

  						/* update the number of bytes used in this buffer and check if it needs to be removed */
  						buffer.usedBytes += lengthAfterStart;
  						this.stream.logBufferLevel();
  						return null;
  					}
  				} else {
  					return null;
  				}
  			}
  		}
  		if (item.alreadyRead === item.size) {
  			/* fetched entirely */
  			return item;
  		} else {
  			return null;
  		}
  	};

  	/* Release the memory used to store the data of the item */
  	ISOFile.prototype.releaseItem = function(item_id) {	
  		var item = this.items[item_id];
  		if (item.data) {
  			this.itemsDataSize -= item.size;
  			item.data = null;
  			item.alreadyRead = 0;
  			for (var i = 0; i < item.extents.length; i++) {
  				var extent = item.extents[i];
  				extent.alreadyRead = 0;
  			}
  			return item.size;
  		} else {
  			return 0;
  		}
  	};


  	ISOFile.prototype.processItems = function(callback) {
  		for(var i in this.items) {
  			var item = this.items[i];
  			this.getItem(item.id);
  			if (callback && !item.sent) {
  				callback(item);
  				item.sent = true;
  				item.data = null;
  			}
  		}
  	};

  	ISOFile.prototype.hasItem = function(name) {
  		for(var i in this.items) {
  			var item = this.items[i];
  			if (item.name === name) {
  				return item.id;
  			}
  		}
  		return -1;
  	};

  	ISOFile.prototype.getMetaHandler = function() {
  		if (!this.meta) {
  			return null;
  		} else {
  			return this.meta.hdlr.handler;		
  		}
  	};

  	ISOFile.prototype.getPrimaryItem = function() {
  		if (!this.meta || !this.meta.pitm) {
  			return null;
  		} else {
  			return this.getItem(this.meta.pitm.item_id);
  		}
  	};

  	ISOFile.prototype.itemToFragmentedTrackFile = function(_options) {
  		var options = _options || {};
  		var item = null;
  		if (options.itemId) {
  			item = this.getItem(options.itemId);
  		} else {
  			item = this.getPrimaryItem();
  		}
  		if (item == null) return null;

  		var file = new ISOFile();
  		file.discardMdatData = false;
  		// assuming the track type is the same as the item type
  		var trackOptions = { type: item.type, description_boxes: item.properties.boxes};
  		if (item.properties.ispe) {
  			trackOptions.width = item.properties.ispe.image_width;
  			trackOptions.height = item.properties.ispe.image_height;
  		}
  		var trackId = file.addTrack(trackOptions);
  		if (trackId) {
  			file.addSample(trackId, item.data);
  			return file;
  		} else {
  			return null;
  		}
  	};

  	// file:src/isofile-write.js
  	/* Rewrite the entire file */
  	ISOFile.prototype.write = function(outstream) {
  		for (var i=0; i<this.boxes.length; i++) {
  			this.boxes[i].write(outstream);
  		}
  	};

  	ISOFile.prototype.createFragment = function(track_id, sampleNumber, stream_) {
  		var trak = this.getTrackById(track_id);
  		var sample = this.getSample(trak, sampleNumber);
  		if (sample == null) {
  			sample = trak.samples[sampleNumber];
  			if (this.nextSeekPosition) {
  				this.nextSeekPosition = Math.min(sample.offset+sample.alreadyRead,this.nextSeekPosition);
  			} else {
  				this.nextSeekPosition = trak.samples[sampleNumber].offset+sample.alreadyRead;
  			}
  			return null;
  		}
  		
  		var stream = stream_ || new DataStream();
  		stream.endianness = DataStream.BIG_ENDIAN;

  		var moof = this.createSingleSampleMoof(sample);
  		moof.write(stream);

  		/* adjusting the data_offset now that the moof size is known*/
  		moof.trafs[0].truns[0].data_offset = moof.size+8; //8 is mdat header
  		Log.debug("MP4Box", "Adjusting data_offset with new value "+moof.trafs[0].truns[0].data_offset);
  		stream.adjustUint32(moof.trafs[0].truns[0].data_offset_position, moof.trafs[0].truns[0].data_offset);
  			
  		var mdat = new BoxParser.mdatBox();
  		mdat.data = sample.data;
  		mdat.write(stream);
  		return stream;
  	};

  	/* Modify the file and create the initialization segment */
  	ISOFile.writeInitializationSegment = function(ftyp, moov, total_duration, sample_duration) {
  		var i;
  		Log.debug("ISOFile", "Generating initialization segment");

  		var stream = new DataStream();
  		stream.endianness = DataStream.BIG_ENDIAN;
  		ftyp.write(stream);
  		
  		/* we can now create the new mvex box */
  		var mvex = moov.add("mvex");
  		if (total_duration) {
  			mvex.add("mehd").set("fragment_duration", total_duration);
  		}
  		for (i = 0; i < moov.traks.length; i++) {
  			mvex.add("trex").set("track_id", moov.traks[i].tkhd.track_id)
  							.set("default_sample_description_index", 1)
  							.set("default_sample_duration", sample_duration)
  							.set("default_sample_size", 0)
  							.set("default_sample_flags", 1<<16);
  		}
  		moov.write(stream);

  		return stream.buffer;

  	};

  	ISOFile.prototype.save = function(name) {
  		var stream = new DataStream();
  		stream.endianness = DataStream.BIG_ENDIAN;
  		this.write(stream);
  		stream.save(name);	
  	};

  	ISOFile.prototype.getBuffer = function() {
  		var stream = new DataStream();
  		stream.endianness = DataStream.BIG_ENDIAN;
  		this.write(stream);
  		return stream.buffer;
  	};

  	ISOFile.prototype.initializeSegmentation = function() {
  		var i;
  		var initSegs;
  		var trak;
  		var seg;
  		if (this.onSegment === null) {
  			Log.warn("MP4Box", "No segmentation callback set!");
  		}
  		if (!this.isFragmentationInitialized) {
  			this.isFragmentationInitialized = true;		
  			this.nextMoofNumber = 0;
  			this.resetTables();
  		}	
  		initSegs = [];	
  		for (i = 0; i < this.fragmentedTracks.length; i++) {
  			var moov = new BoxParser.moovBox();
  			moov.mvhd = this.moov.mvhd;
  		    moov.boxes.push(moov.mvhd);
  			trak = this.getTrackById(this.fragmentedTracks[i].id);
  			moov.boxes.push(trak);
  			moov.traks.push(trak);
  			seg = {};
  			seg.id = trak.tkhd.track_id;
  			seg.user = this.fragmentedTracks[i].user;
  			seg.buffer = ISOFile.writeInitializationSegment(this.ftyp, moov, (this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration: undefined), (this.moov.traks[i].samples.length>0 ? this.moov.traks[i].samples[0].duration: 0));
  			initSegs.push(seg);
  		}
  		return initSegs;
  	};

  	// file:src/box-print.js
  	/* 
  	 * Copyright (c) Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	BoxParser.Box.prototype.printHeader = function(output) {
  		this.size += 8;
  		if (this.size > MAX_SIZE) {
  			this.size += 8;
  		}
  		if (this.type === "uuid") {
  			this.size += 16;
  		}
  		output.log(output.indent+"size:"+this.size);
  		output.log(output.indent+"type:"+this.type);
  	};

  	BoxParser.FullBox.prototype.printHeader = function(output) {
  		this.size += 4;
  		BoxParser.Box.prototype.printHeader.call(this, output);
  		output.log(output.indent+"version:"+this.version);
  		output.log(output.indent+"flags:"+this.flags);
  	};

  	BoxParser.Box.prototype.print = function(output) {
  		this.printHeader(output);
  	};

  	BoxParser.ContainerBox.prototype.print = function(output) {
  		this.printHeader(output);
  		for (var i=0; i<this.boxes.length; i++) {
  			if (this.boxes[i]) {
  				var prev_indent = output.indent;
  				output.indent += " ";
  				this.boxes[i].print(output);
  				output.indent = prev_indent;
  			}
  		}
  	};

  	ISOFile.prototype.print = function(output) {
  		output.indent = "";
  		for (var i=0; i<this.boxes.length; i++) {
  			if (this.boxes[i]) {
  				this.boxes[i].print(output);
  			}
  		}	
  	};

  	BoxParser.mvhdBox.prototype.print = function(output) {
  		BoxParser.FullBox.prototype.printHeader.call(this, output);
  		output.log(output.indent+"creation_time: "+this.creation_time);
  		output.log(output.indent+"modification_time: "+this.modification_time);
  		output.log(output.indent+"timescale: "+this.timescale);
  		output.log(output.indent+"duration: "+this.duration);
  		output.log(output.indent+"rate: "+this.rate);
  		output.log(output.indent+"volume: "+(this.volume>>8));
  		output.log(output.indent+"matrix: "+this.matrix.join(", "));
  		output.log(output.indent+"next_track_id: "+this.next_track_id);
  	};

  	BoxParser.tkhdBox.prototype.print = function(output) {
  		BoxParser.FullBox.prototype.printHeader.call(this, output);
  		output.log(output.indent+"creation_time: "+this.creation_time);
  		output.log(output.indent+"modification_time: "+this.modification_time);
  		output.log(output.indent+"track_id: "+this.track_id);
  		output.log(output.indent+"duration: "+this.duration);
  		output.log(output.indent+"volume: "+(this.volume>>8));
  		output.log(output.indent+"matrix: "+this.matrix.join(", "));
  		output.log(output.indent+"layer: "+this.layer);
  		output.log(output.indent+"alternate_group: "+this.alternate_group);
  		output.log(output.indent+"width: "+this.width);
  		output.log(output.indent+"height: "+this.height);
  	};// file:src/mp4box.js
  	/*
  	 * Copyright (c) 2012-2013. Telecom ParisTech/TSI/MM/GPAC Cyril Concolato
  	 * License: BSD-3-Clause (see LICENSE file)
  	 */
  	var MP4Box = {};

  	MP4Box.createFile = function (_keepMdatData, _stream) {
  		/* Boolean indicating if bytes containing media data should be kept in memory */
  		var keepMdatData = (_keepMdatData !== undefined ? _keepMdatData : true);
  		var file = new ISOFile(_stream);
  		file.discardMdatData = (keepMdatData ? false : true);
  		return file;
  	};

  	{
  		exports.createFile = MP4Box.createFile;
  	} 
  } (mp4box_all));

  var MP4Box = /*@__PURE__*/getDefaultExportFromCjs(mp4box_all);

  var DownLoader = /*#__PURE__*/function () {
    function DownLoader(url) {
      _classCallCheck(this, DownLoader);
      _defineProperty(this, "isActive", false);
      _defineProperty(this, "realtime", false);
      // chunkStart指的是请求的Chunk在整个文件中的初始偏移量
      _defineProperty(this, "chunkStart", 0);
      _defineProperty(this, "chunkSize", 0);
      _defineProperty(this, "totalLength", 0);
      _defineProperty(this, "chunkTimeout", 1000);
      _defineProperty(this, "timeoutID", 0);
      _defineProperty(this, "url", '');
      _defineProperty(this, "callback", null);
      _defineProperty(this, "eof", false);
      this.url = url || '';
    }
    // 从开头去请求文件，也就是初始化文件的请求过程直到所有文件都请求完成
    _createClass(DownLoader, [{
      key: "start",
      value: function start() {
        mp4box_all.Log.info('Downloader', 'Starting file download');
        this.chunkStart = 0;
        this.resume();
        return this;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.chunkStart = 0;
        this.totalLength = 0;
        this.eof = false;
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        clearTimeout(this.timeoutID);
        this.timeoutID = 0;
        this.isActive = false;
        return this;
      }
      // resume和start不同的是resume可能是在文件的请求暂停后重新设置了chunkStart之后再去重新请求新的chunk
    }, {
      key: "resume",
      value: function resume() {
        mp4box_all.Log.info('Downloader', 'Resuming file download');
        this.isActive = true;
        if (this.chunkSize === 0) {
          this.chunkSize = Infinity;
        }
        this.getFile();
        return this;
      }
    }, {
      key: "setUrl",
      value: function setUrl(_url) {
        this.url = _url;
        return this;
      }
    }, {
      key: "setRealTime",
      value: function setRealTime(_realtime) {
        this.realtime = _realtime;
        return this;
      }
    }, {
      key: "setChunkSize",
      value: function setChunkSize(_size) {
        this.chunkSize = _size;
        return this;
      }
    }, {
      key: "setChunkStart",
      value: function setChunkStart(_start) {
        this.chunkStart = _start;
        this.eof = false;
        return this;
      }
    }, {
      key: "setInterval",
      value: function setInterval(_timeout) {
        this.chunkTimeout = _timeout;
        return this;
      }
    }, {
      key: "setCallback",
      value: function setCallback(_callback) {
        this.callback = _callback;
        return this;
      }
    }, {
      key: "getFileLength",
      value: function getFileLength() {
        return this.totalLength;
      }
    }, {
      key: "isStopped",
      value: function isStopped() {
        return !this.isActive;
      }
    }, {
      key: "initHttpRequest",
      value: function initHttpRequest() {
        var xhr = new XMLHttpRequest();
        var header = {};
        xhr.start = this.chunkStart;
        if (this.chunkStart + this.chunkSize < Infinity) {
          var endRange = 0;
          // chunkStart to (chunkStart + chunkSize - 1)
          var range = 'bytes=' + this.chunkStart + '-';
          endRange = this.chunkStart + this.chunkSize - 1;
          range += endRange;
          header.Range = range;
        }
        var request = new HTTPRequest({
          url: this.url,
          header: header,
          method: 'get',
          xhr: xhr
        });
        return request;
      }
      /**
       * @description 发送网络请求，请求对应的媒体文件
       * @returns
       */
    }, {
      key: "getFile",
      value: function getFile() {
        var ctx = this;
        // eof为true表示整个媒体文件已经请求完毕
        if (ctx.totalLength && ctx.chunkStart >= ctx.totalLength) {
          ctx.eof = true;
        }
        if (ctx.eof === true) {
          mp4box_all.Log.info('Downloader', 'File download done.');
          ctx.callback(null, true);
          return;
        }
        var request = this.initHttpRequest();
        // 单例 let loader = new XHRLoader({context: {}}, ...args)
        var loader = factory$a({}).getInstance();
        loader.load({
          request: request,
          error: error,
          success: success
        });
        function error(e) {
          ctx.callback(null, false, true);
        }
        function success(res) {
          // console.log(res)
          var xhr = this;
          var rangeReceived = xhr.getResponseHeader('Content-Range');
          // console.log(rangeReceived) // bytes 0-9999999/28884979 // Refused to get unsafe header "content-range"
          mp4box_all.Log.info('Downloader', 'Received data range: ' + rangeReceived);
          if (!ctx.totalLength && rangeReceived) {
            var sizeIndex;
            sizeIndex = _indexOfInstanceProperty(rangeReceived).call(rangeReceived, '/');
            if (sizeIndex > -1) {
              ctx.totalLength = +_sliceInstanceProperty(rangeReceived).call(rangeReceived, sizeIndex + 1);
            }
          }
          // console.log(xhr)
          ctx.eof = xhr.response.byteLength !== ctx.chunkSize || xhr.response.byteLength === ctx.totalLength;
          var buffer = xhr.response;
          buffer.fileStart = xhr.start;
          // console.log(buffer)
          // {
          //   fileStart: 0,
          //   byteLength: 10000000,
          //   maxByteLength: 10000000,
          //   resizable: false
          // }
          // 拿到数据之后执行回调函数
          ctx.callback(buffer, ctx.eof);
          // 如果下载器还是处于激活状态且还没全部下载完成的话
          if (ctx.isActive === true && ctx.eof === false) {
            var timeoutDuration = ctx.chunkTimeout;
            ctx.timeoutID = window.setTimeout(ctx.getFile.bind(ctx), timeoutDuration);
          }
        }
      }
    }]);
    return DownLoader;
  }();

  var MediaPlayer = /*#__PURE__*/function () {
    function MediaPlayer(url, video) {
      _classCallCheck(this, MediaPlayer);
      _defineProperty(this, "url", void 0);
      _defineProperty(this, "video", void 0);
      _defineProperty(this, "mp4boxfile", void 0);
      _defineProperty(this, "mediaSource", void 0);
      _defineProperty(this, "mediaInfo", void 0);
      _defineProperty(this, "downloader", void 0);
      _defineProperty(this, "lastSeekTime", 0);
      this.url = url;
      this.video = video;
      this.init();
    }
    _createClass(MediaPlayer, [{
      key: "init",
      value: function init() {
        this.mp4boxfile = MP4Box.createFile();
        this.downloader = new DownLoader(this.url);
        this.mediaSource = new MediaSource();
        this.video.src = _URL.createObjectURL(this.mediaSource);
        this.initEvent();
        this.loadFile();
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this = this;
        var ctx = this;
        // 在'moov box'开始被解析时被调用，根据下载速度，下载整个“moov box”可能需要一段时间，解析结束的信号是onReady回调函数
        // 在解析 MP4 文件时，通常需要先解析 moov box（moov box 是 MP4 文件中的一个重要 box，包含了 MP4 文件的元数据信息），以获取 MP4 文件的元数据信息。
        this.mp4boxfile.onMoovStart = function () {
          mp4box_all.Log.info('Application', 'Starting to parse movie information');
        };
        // 首次mp4boxfile.appendBuffer()时被触发
        // appendBuffer 是 MP4Box.js 中的一个方法，用于向【MP4Box 对象】添加 MP4 文件的数据
        // 当【MP4Box 对象】准备好处理 MP4 文件时执行 onReady
        this.mp4boxfile.onReady = function (info) {
          mp4box_all.Log.info('Application', 'Movie information received');
          ctx.mediaInfo = info;
          // mediaSource.duration：获取并设置当前呈现的媒体的持续时间，以秒为单位
          // isFragmented：表示文件是否已经分片
          if (info.isFragmented) {
            // timescale：对应于影片标题中给出的时间刻度
            // fragment_duration：给出文件碎片部分的持续时间，以时间刻度单位表示
            ctx.mediaSource.duration = info.fragment_duration / info.timescale;
          } else {
            // info.duration：以时间单位表示电影(未分割的部分)的持续时间
            ctx.mediaSource.duration = info.duration / info.timescale;
          }
          // 当请求到了MP4 Box的 moov box之后解析其中包含的视频的元信息，暂停发送进一步的http请求
          ctx.stop();
          ctx.initializeAllSourceBuffers();
        };
        // 根据setSegmentOptions中传递的选项，在段准备好时调用回调。
        // user是片段的调用者，对于这个轨道，buffer是一个ArrayBuffer，包含这个片段的Movie Fragments。
        // mp4boxfile.start()时、mp4boxfile.appendBuffer()足够多 时被触发
        this.mp4boxfile.onSegment = function (id, user, buffer, sampleNum, is_last) {
          //sb = sourcebuffer
          var sb = user;
          // saveBuffer(buffer, 'track-'+id+'-segment-'+sb.segmentIndex+'.m4s');
          sb.segmentIndex++;
          sb.pendingAppends.push({
            id: id,
            buffer: buffer,
            sampleNum: sampleNum,
            is_last: is_last
          });
          ctx.onUpdateEnd.call(sb, true, false, ctx);
        };
        this.mp4boxfile.onItem = function (item) {
          debugger;
        };
        // 当用户开始移动/跳跃到新的视频播放位置时触发
        this.video.onseeking = function () {
          var i, start, end;
          var seek_info;
          if (_this.lastSeekTime !== _this.video.currentTime) {
            for (i = 0; i < _this.video.buffered.length; i++) {
              start = _this.video.buffered.start(i);
              end = _this.video.buffered.end(i);
              if (_this.video.currentTime >= start && _this.video.currentTime <= end) {
                return;
              }
            }
            _this.downloader.stop();
            seek_info = _this.mp4boxfile.seek(_this.video.currentTime, true);
            _this.downloader.setChunkStart(seek_info.offset);
            _this.downloader.resume();
            _this.lastSeekTime = _this.video.currentTime;
          }
        };
      }
    }, {
      key: "start",
      value: function start() {
        // seek(): 指示下一个要处理的样本(用于提取或分割)在给定时间(数字，以秒为单位)或在前一个随机接入点的时间(如果useRap为true，默认为false)开始
        // 返回将通过appendBuffer提供的下一个字节在文件中的偏移量
        this.downloader.setChunkStart(this.mp4boxfile.seek(0, true).offset);
        // start()：表示可以开始样本处理(分割或提取)。已经收到的样本数据将被处理，新的缓冲区追加操作也将触发样本处理。
        // start()时触发 mp4boxfile.onSegment 的回调
        this.mp4boxfile.start();
        this.downloader.resume();
      }
    }, {
      key: "reset",
      value: function reset() {}
      //停止当前还在发送中的http请求
    }, {
      key: "stop",
      value: function stop() {
        if (!this.downloader.isStopped()) {
          this.downloader.stop();
        }
      }
      /**
       * @description 根据传入的媒体轨道的类型构建对应的SourceBuffer
       * @param mp4track
       */
    }, {
      key: "addBuffer",
      value: function addBuffer(mp4track) {
        var track_id = mp4track.id;
        var codec = mp4track.codec;
        var mime = 'video/mp4; codecs="' + codec + '"';
        // var kind = mp4track.kind;
        var sb;
        if (MediaSource.isTypeSupported(mime)) {
          try {
            console.log('MSE - SourceBuffer #' + track_id, "Creation with type '" + mime + "'");
            mp4box_all.Log.info('MSE - SourceBuffer #' + track_id, "Creation with type '" + mime + "'");
            // 根据moov box中解析出来的track去一一创建对应的sourcebuffer
            sb = this.mediaSource.addSourceBuffer(mime);
            sb.addEventListener('error', function (e) {
              mp4box_all.Log.error('MSE SourceBuffer #' + track_id, e);
            });
            sb.ms = this.mediaSource;
            sb.id = track_id;
            // 设置分段选项，指示应该使用给定的选项对具有给定track_id的轨道进行分段。
            // 当段准备好后，回调函数onSegment将使用user参数调用。
            // nbSamples：每个分段中包含的样本数（帧数）。默认值为1000。
            this.mp4boxfile.setSegmentOptions(track_id, sb, {
              nbSamples: 1000
            });
            sb.pendingAppends = [];
          } catch (e) {
            mp4box_all.Log.error('MSE - SourceBuffer #' + track_id, "Cannot create buffer with type '" + mime + "'" + e);
          }
        } else {
          throw new Error("\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301".concat(mime, "\u5A92\u4F53\u7C7B\u578B"));
        }
      }
      // 开始加载视频文件
    }, {
      key: "loadFile",
      value: function loadFile() {
        var ctx = this;
        if (this.mediaSource.readyState !== 'open') {
          this.mediaSource.onsourceopen = this.loadFile.bind(ctx);
          return;
        }
        // 先写死，之后在修改
        this.downloader.setInterval(500);
        this.downloader.setChunkSize(1000000);
        this.downloader.setUrl(this.url);
        this.downloader.setCallback(
        // end表示这一次的请求是否已经将整个视频文件加载过来
        function (response, end, error) {
          var nextStart = 0;
          if (response) {
            // 设置文件加载的进度条
            // 提供一个用于解析的ArrayBuffer
            // ArrayBuffer必须有一个fileStart (Number)属性，表示ArrayBuffer的第一个字节在原始文件中从0开始的位置。
            // 返回偏移量(在原始文件中)，该偏移量预计是下一个缓冲区的fileStart值。当moov框不在文件开头时，这一点特别有用。
            nextStart = ctx.mp4boxfile.appendBuffer(response, end); // 多次appendBuffer后触发onSegment
            // console.log(nextStart) // 1000000
          }

          if (end) {
            // 如果存在end的话则意味着所有的chunk已经加载完毕
            // flush(): 指示将不再接收任何数据，并且应在分割或提取过程中刷新所有剩余的样本
            ctx.mp4boxfile.flush();
          } else {
            ctx.downloader.setChunkStart(nextStart);
          }
          if (error) {
            ctx.reset();
          }
        });
        this.downloader.start();
        // this.video.play()
      }
    }, {
      key: "initializeAllSourceBuffers",
      value: function initializeAllSourceBuffers() {
        if (this.mediaInfo) {
          var info = this.mediaInfo;
          for (var i = 0; i < info.tracks.length; i++) {
            var track = info.tracks[i];
            this.addBuffer(track);
          }
          this.initializeSourceBuffers();
        }
      }
    }, {
      key: "initializeSourceBuffers",
      value: function initializeSourceBuffers() {
        // 表示应用程序已经准备好接收段。返回一个包含以下属性的对象数组:
        // id:编号，曲目id
        // user: Object，这个轨道分段的调用者，在setSegmentOptions中给出
        // buffer: ArrayBuffer，这条轨道的初始化段。
        // sampleNumber: Number，段中最后一个样本的样本编号，加1。
        // last:布尔值，指示这是否是要接收的最后一个段。
        var initSegs = this.mp4boxfile.initializeSegmentation();
        for (var i = 0; i < initSegs.length; i++) {
          var sb = initSegs[i].user;
          if (i === 0) {
            sb.ms.pendingInits = 0;
          }
          this.onInitAppended = this.onInitAppended.bind(this);
          // 在 SourceBuffer.appendBuffer() 或 SourceBuffer.remove() 结束后触发。这个事件在 update 后触发。
          // 缓冲区状态已更新，可以继续追加更多数据
          sb.addEventListener('updateend', this.onInitAppended);
          mp4box_all.Log.info('MSE - SourceBuffer #' + sb.id, 'Appending initialization data');
          sb.appendBuffer(initSegs[i].buffer);
          sb.segmentIndex = 0;
          sb.ms.pendingInits++;
        }
      }
    }, {
      key: "onInitAppended",
      value: function onInitAppended(e) {
        var ctx = this;
        var sb = e.target;
        if (sb.ms.readyState === 'open') {
          sb.sampleNum = 0;
          sb.removeEventListener('updateend', this.onInitAppended);
          sb.addEventListener('updateend', this.onUpdateEnd.bind(sb, true, true, ctx));
          /* 如果已经有挂起的缓冲区，我们调用onUpdateEnd来开始附加它们 */
          this.onUpdateEnd.call(sb, false, true, ctx);
          sb.ms.pendingInits--;
          if (sb.ms.pendingInits === 0) {
            this.start();
          }
        }
      }
    }, {
      key: "onUpdateEnd",
      value: function onUpdateEnd(isNotInit, isEndOfAppend, ctx) {
        // console.log(isNotInit, isEndOfAppend)
        if (isEndOfAppend === true) {
          if (this.sampleNum) {
            ctx.mp4boxfile.releaseUsedSamples(this.id, this.sampleNum);
            delete this.sampleNum;
          }
          if (this.is_last) {
            this.ms.endOfStream();
          }
        }
        if (this.ms.readyState === 'open' && this.updating === false && this.pendingAppends.length > 0) {
          var obj = this.pendingAppends.shift();
          this.sampleNum = obj.sampleNum;
          this.is_last = obj.is_last;
          this.appendBuffer(obj.buffer);
        }
      }
    }]);
    return MediaPlayer;
  }();

  var $$5 = _export;
  var toObject = toObject$a;
  var nativeKeys = objectKeys$3;
  var fails$2 = fails$x;

  var FAILS_ON_PRIMITIVES = fails$2(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$5({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return nativeKeys(toObject(it));
    }
  });

  var path$5 = path$n;

  var keys$5 = path$5.Object.keys;

  var parent$h = keys$5;

  var keys$4 = parent$h;

  var parent$g = keys$4;

  var keys$3 = parent$g;

  var parent$f = keys$3;

  var keys$2 = parent$f;

  var keys$1 = keys$2;

  var keys = keys$1;

  var _Object$keys = /*@__PURE__*/getDefaultExportFromCjs(keys);

  var path$4 = path$n;

  var getOwnPropertySymbols$5 = path$4.Object.getOwnPropertySymbols;

  var parent$e = getOwnPropertySymbols$5;

  var getOwnPropertySymbols$4 = parent$e;

  var parent$d = getOwnPropertySymbols$4;

  var getOwnPropertySymbols$3 = parent$d;

  var parent$c = getOwnPropertySymbols$3;

  var getOwnPropertySymbols$2 = parent$c;

  var getOwnPropertySymbols$1 = getOwnPropertySymbols$2;

  var getOwnPropertySymbols = getOwnPropertySymbols$1;

  var _Object$getOwnPropertySymbols = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols);

  var getOwnPropertyDescriptor$6 = {exports: {}};

  var $$4 = _export;
  var fails$1 = fails$x;
  var toIndexedObject$1 = toIndexedObject$a;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var DESCRIPTORS$1 = descriptors;

  var FORCED$1 = !DESCRIPTORS$1 || fails$1(function () { nativeGetOwnPropertyDescriptor(1); });

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  $$4({ target: 'Object', stat: true, forced: FORCED$1, sham: !DESCRIPTORS$1 }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
    }
  });

  var path$3 = path$n;

  var Object$1 = path$3.Object;

  var getOwnPropertyDescriptor$5 = getOwnPropertyDescriptor$6.exports = function getOwnPropertyDescriptor(it, key) {
    return Object$1.getOwnPropertyDescriptor(it, key);
  };

  if (Object$1.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$5.sham = true;

  var getOwnPropertyDescriptorExports = getOwnPropertyDescriptor$6.exports;

  var parent$b = getOwnPropertyDescriptorExports;

  var getOwnPropertyDescriptor$4 = parent$b;

  var parent$a = getOwnPropertyDescriptor$4;

  var getOwnPropertyDescriptor$3 = parent$a;

  var parent$9 = getOwnPropertyDescriptor$3;

  var getOwnPropertyDescriptor$2 = parent$9;

  var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2;

  var getOwnPropertyDescriptor = getOwnPropertyDescriptor$1;

  var _Object$getOwnPropertyDescriptor = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptor);

  var $$3 = _export;
  var DESCRIPTORS = descriptors;
  var ownKeys$1 = ownKeys$3;
  var toIndexedObject = toIndexedObject$a;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var createProperty = createProperty$6;

  // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  $$3({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject(object);
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var keys = ownKeys$1(O);
      var result = {};
      var index = 0;
      var key, descriptor;
      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty(result, key, descriptor);
      }
      return result;
    }
  });

  var path$2 = path$n;

  var getOwnPropertyDescriptors$5 = path$2.Object.getOwnPropertyDescriptors;

  var parent$8 = getOwnPropertyDescriptors$5;

  var getOwnPropertyDescriptors$4 = parent$8;

  var parent$7 = getOwnPropertyDescriptors$4;

  var getOwnPropertyDescriptors$3 = parent$7;

  var parent$6 = getOwnPropertyDescriptors$3;

  var getOwnPropertyDescriptors$2 = parent$6;

  var getOwnPropertyDescriptors$1 = getOwnPropertyDescriptors$2;

  var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

  var _Object$getOwnPropertyDescriptors = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptors);

  var global$4 = global$r;
  var fails = fails$x;
  var uncurryThis = functionUncurryThis;
  var toString = toString$b;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$3;

  var charAt = uncurryThis(''.charAt);
  var $parseFloat$1 = global$4.parseFloat;
  var Symbol$1 = global$4.Symbol;
  var ITERATOR = Symbol$1 && Symbol$1.iterator;
  var FORCED = 1 / $parseFloat$1(whitespaces + '-0') !== -Infinity
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR && !fails(function () { $parseFloat$1(Object(ITERATOR)); }));

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED ? function parseFloat(string) {
    var trimmedString = trim(toString(string));
    var result = $parseFloat$1(trimmedString);
    return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
  } : $parseFloat$1;

  var $$2 = _export;
  var $parseFloat = numberParseFloat;

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  $$2({ global: true, forced: parseFloat != $parseFloat }, {
    parseFloat: $parseFloat
  });

  var path$1 = path$n;

  var _parseFloat$6 = path$1.parseFloat;

  var parent$5 = _parseFloat$6;

  var _parseFloat$5 = parent$5;

  var parent$4 = _parseFloat$5;

  var _parseFloat$4 = parent$4;

  var parent$3 = _parseFloat$4;

  var _parseFloat$3 = parent$3;

  var _parseFloat$2 = _parseFloat$3;

  var _parseFloat = _parseFloat$2;

  var _parseFloat$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseFloat);

  var $$1 = _export;
  var global$3 = global$r;
  var clearImmediate = task$1.clear;

  // `clearImmediate` method
  // http://w3c.github.io/setImmediate/#si-clearImmediate
  $$1({ global: true, bind: true, enumerable: true, forced: global$3.clearImmediate !== clearImmediate }, {
    clearImmediate: clearImmediate
  });

  /* global Bun -- Deno case */

  var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

  var global$2 = global$r;
  var apply = functionApply;
  var isCallable = isCallable$q;
  var ENGINE_IS_BUN = engineIsBun;
  var USER_AGENT = engineUserAgent;
  var arraySlice = arraySlice$7;
  var validateArgumentsLength = validateArgumentsLength$5;

  var Function$1 = global$2.Function;
  // dirty IE9- and Bun 0.3.0- checks
  var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
    var version = global$2.Bun.version.split('.');
    return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
  })();

  // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
  // https://github.com/oven-sh/bun/issues/1633
  var schedulersFix$1 = function (scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function (handler, timeout /* , ...arguments */) {
      var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
      var fn = isCallable(handler) ? handler : Function$1(handler);
      var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
      var callback = boundArgs ? function () {
        apply(fn, this, params);
      } : fn;
      return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
  };

  var $ = _export;
  var global$1 = global$r;
  var setTask = task$1.set;
  var schedulersFix = schedulersFix$1;

  // https://github.com/oven-sh/bun/issues/1633
  var setImmediate$5 = global$1.setImmediate ? schedulersFix(setTask, false) : setTask;

  // `setImmediate` method
  // http://w3c.github.io/setImmediate/#si-setImmediate
  $({ global: true, bind: true, enumerable: true, forced: global$1.setImmediate !== setImmediate$5 }, {
    setImmediate: setImmediate$5
  });

  var path = path$n;

  var setImmediate$4 = path.setImmediate;

  var parent$2 = setImmediate$4;

  var setImmediate$3 = parent$2;

  var parent$1 = setImmediate$3;

  var setImmediate$2 = parent$1;

  var setImmediate$1 = setImmediate$2;

  var setImmediate = setImmediate$1;

  var _setImmediate = /*@__PURE__*/getDefaultExportFromCjs(setImmediate);

  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }
  function nextTick(cb) {
    if (typeof _Promise !== 'undefined' && isNative(_Promise)) {
      _Promise.resolve().then(function () {
        return cb();
      });
    } else if (typeof MutationObserver !== 'undefined' && isNative(MutationObserver) && MutationObserver.toString() === '[object MutationObserverConstructor]') {
      var observer = new MutationObserver(cb);
      var count = 1;
      var node = document.createTextNode(String(count));
      observer.observe(node, {
        characterData: true
      });
      count++;
      node.data = String(count);
    } else if (typeof _setImmediate !== 'undefined' && isNative(_setImmediate)) {
      _setImmediate(function () {
        return cb();
      });
    } else {
      setTimeout(function () {
        return cb();
      });
    }
  }

  function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context14, _context15; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _forEachInstanceProperty(_context14 = ownKeys(Object(source), !0)).call(_context14, function (key) { _defineProperty(target, key, source[key]); }) : _Object$getOwnPropertyDescriptors ? Object.defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context15 = ownKeys(Object(source))).call(_context15, function (key) { Object.defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Danmaku = /*#__PURE__*/function () {
    function Danmaku(queue, container) {
      _classCallCheck(this, Danmaku);
      _defineProperty(this, "queue", []);
      _defineProperty(this, "moovingQueue", []);
      // 正在运动中的弹幕
      _defineProperty(this, "container", void 0);
      _defineProperty(this, "timer", null);
      _defineProperty(this, "renderInterval", 100);
      // 每一条弹幕轨道的高度默认为20px
      _defineProperty(this, "trackHeight", 20);
      _defineProperty(this, "tracks", new Array(15));
      _defineProperty(this, "defaultDanma", {
        message: 'default message',
        fontColor: '#fff',
        fontSize: this.trackHeight,
        fontFamily: '',
        fontWeight: 500
      });
      this.queue = queue;
      this.container = container;
      this.init();
    }
    _createClass(Danmaku, [{
      key: "init",
      value: function init() {
        for (var i = 0; i < this.tracks.length; i++) {
          if (!this.tracks[i]) {
            this.tracks[i] = {
              track: {
                id: 0,
                priority: 0
              },
              datas: []
            };
          }
          this.tracks[i].track = {
            id: i,
            priority: 15 - i
          };
        }
      }
      // 暂停所有的弹幕
    }, {
      key: "pause",
      value: function pause() {
        var _context;
        window.clearTimeout(this.timer);
        _forEachInstanceProperty(_context = this.moovingQueue).call(_context, function (data) {
          var currentRollDistance = (Date.now() - data.startTime) * data.rollSpeed / 1000;
          data.rollDistance = currentRollDistance + (data.rollDistance ? data.rollDistance : 0);
          data.dom.style.transition = '';
          data.dom.style.transform = "translateX(".concat(-data.rollDistance, "px)");
        });
      }
      // 恢复弹幕的运动,恢复弹幕运动此处的逻辑有问题(已修复)
    }, {
      key: "resume",
      value: function resume() {
        var _this = this,
          _context2;
        this.timer = window.setTimeout(function () {
          _this.render();
        }, this.renderInterval);
        _forEachInstanceProperty(_context2 = this.moovingQueue).call(_context2, function (data) {
          data.dom.style.transform = "translateX(-".concat(data.totalDistance, "px)");
          data.startTime = Date.now();
          data.rollTime = (data.totalDistance - data.rollDistance) / data.rollSpeed;
          data.dom.style.transition = "transform ".concat(data.rollTime, "s linear");
        });
      }
    }, {
      key: "startDanmaku",
      value: function startDanmaku() {
        this.render();
      }
      // 向缓冲区添加正确格式的弹幕
    }, {
      key: "addData",
      value: function addData(data) {
        var _this2 = this;
        this.queue.push(this.parseData(data));
        // if (flag) return
        if (this.timer === null) {
          nextTick(function () {
            _this2.render();
          });
          // flag = true
        }
      }
    }, {
      key: "parseData",
      value: function parseData(data) {
        if (typeof data === 'string') {
          return {
            message: data,
            fontColor: '#fff',
            fontSize: this.trackHeight,
            fontFamily: '',
            fontWeight: 500
          };
        }
        if (_typeof$1(data) === 'object') {
          if (!data.message || data.message === '') {
            throw new Error("\u4F20\u5165\u7684\u5F39\u5E55\u6570\u636E".concat(data, "\u4E0D\u5408\u6CD5"));
          }
          return _Object$assign(_objectSpread({}, this.defaultDanma), data);
        }
        throw new Error("\u4F20\u5165\u7684\u5F39\u5E55\u6570\u636E".concat(data, "\u4E0D\u5408\u6CD5"));
      }
    }, {
      key: "render",
      value: function render() {
        try {
          this.renderToDOM();
        } finally {
          this.renderEnd();
        }
      }
    }, {
      key: "renderEnd",
      value: function renderEnd() {
        var _this3 = this;
        if (this.queue.length === 0) {
          window.clearTimeout(this.timer);
          this.timer = null;
        } else {
          this.timer = window.setTimeout(function () {
            _this3.render();
          }, this.renderInterval);
        }
      }
      // 向指定的DOM元素上渲染一条弹幕
    }, {
      key: "renderToDOM",
      value: function renderToDOM() {
        if (this.queue.length === 0) return;
        var data = this.queue[0];
        if (!data.dom) {
          var dom = document.createElement('div');
          dom.innerText = data.message;
          if (data.fontFamily !== '') {
            dom.style.fontFamily = data.fontFamily;
          }
          dom.style.color = data.fontColor;
          dom.style.fontSize = data.fontSize + 'px';
          dom.style.fontWeight = data.fontWeight + '';
          dom.style.position = 'absolute';
          dom.style.left = '100%';
          dom.style.whiteSpace = 'nowrap';
          dom.style.willChange = 'transform';
          data.dom = dom;
          this.container.appendChild(dom);
        }
        data.totalDistance = this.container.clientWidth + data.dom.clientWidth;
        data.width = data.dom.clientWidth;
        // 弹幕的总的位移时间，用于计算弹幕的速度
        data.rollTime = data.rollTime || Math.floor(data.totalDistance * 0.0058 * (Math.random() * 0.3 + 0.7));
        data.rollSpeed = _parseFloat$1((data.totalDistance / data.rollTime).toFixed(2));
        // useTracks描述的是该弹幕占用了多少个轨道
        data.useTracks = Math.ceil(data.dom.clientHeight / this.trackHeight);
        data.y = [];
        data.dom.ontransitionstart = function (e) {
          data.startTime = Date.now();
        };
        this.addDataToTrack(data);
        if (data.y.length === 0) {
          var _context3, _context4;
          if (_includesInstanceProperty(_context3 = _toConsumableArray(this.container.childNodes)).call(_context3, data.dom)) {
            this.container.removeChild(data.dom);
          }
          _spliceInstanceProperty(_context4 = this.queue).call(_context4, 0, 1).push(data);
        } else {
          data.dom.style.top = data.y[0] * this.trackHeight + 3 + 'px';
          this.startAnimate(data);
          this.queue.shift();
        }
      }
      // 将指定的data添加到弹幕轨道上
    }, {
      key: "addDataToTrack",
      value: function addDataToTrack(data) {
        var _this4 = this;
        // console.log(this.tracks)
        // [
        //   {track: {id:0, priority: 15}, datas: DanmakuData[]},
        //   {track: {id:1, priority: 14}, datas: DanmakuData[]},
        //   {track: {id:2, priority: 13}, datas: DanmakuData[]},
        //   {track: {id:14, priority: 1}, datas: DanmakuData[]},
        // ]
        var y = [];
        for (var i = 0; i < this.tracks.length; i++) {
          var track = this.tracks[i];
          var datas = track.datas;
          if (datas.length === 0) {
            y.push(i);
          } else {
            var lastItem = datas[datas.length - 1];
            // diatance代表的就是在该轨道上弹幕lastItem已经行走的距离
            var distance = lastItem.rollSpeed * (Date.now() - lastItem.startTime) / 1000;
            if (distance > lastItem.width && (data.rollSpeed <= lastItem.rollSpeed || (distance - lastItem.width) / (data.rollSpeed - lastItem.rollSpeed) > (this.container.clientWidth + lastItem.width - distance) / lastItem.rollSpeed)) {
              y.push(i);
            } else {
              y = [];
            }
          }
          if (y.length >= data.useTracks) {
            var _context5;
            data.y = y;
            _forEachInstanceProperty(_context5 = data.y).call(_context5, function (id) {
              _this4.tracks[id].datas.push(data);
            });
            break;
          }
        }
      }
    }, {
      key: "removeDataFromTrack",
      value: function removeDataFromTrack(data) {
        var _context6,
          _this5 = this;
        _forEachInstanceProperty(_context6 = data.y).call(_context6, function (id) {
          var datas = _this5.tracks[id].datas;
          var index = _indexOfInstanceProperty(datas).call(datas, data);
          if (index === -1) return;
          _spliceInstanceProperty(datas).call(datas, index, 1);
        });
      }
    }, {
      key: "startAnimate",
      value: function startAnimate(data) {
        var _this6 = this;
        this.moovingQueue.push(data);
        data.dom.style.transform = "translateX(-".concat(data.totalDistance, "px)");
        data.dom.style.transition = "transform ".concat(data.rollTime, "s linear");
        data.dom.ontransitionend = function (e) {
          var _context7;
          _this6.container.removeChild(data.dom);
          _this6.removeDataFromTrack(data);
          var index = _indexOfInstanceProperty(_context7 = _this6.moovingQueue).call(_context7, data);
          if (index > -1) {
            var _context8;
            _spliceInstanceProperty(_context8 = _this6.moovingQueue).call(_context8, index, 1);
          }
        };
      }
      // 清空所有的弹幕，包括正在运动中的或者还在缓冲区未被释放的
    }, {
      key: "flush",
      value: function flush() {
        var _context9,
          _this7 = this,
          _context10;
        _forEachInstanceProperty(_context9 = this.moovingQueue).call(_context9, function (data) {
          _this7.container.removeChild(data.dom);
          data.dom.ontransitionstart = null;
          data.dom.ontransitionend = null;
        });
        _forEachInstanceProperty(_context10 = this.queue).call(_context10, function (data) {
          var _context11;
          if (_includesInstanceProperty(_context11 = _toConsumableArray(_this7.container.children)).call(_context11, data.dom)) {
            _this7.container.removeChild(data.dom);
            data.dom.ontransitionstart = null;
            data.dom.ontransitionend = null;
          }
        });
        this.moovingQueue = [];
        this.queue = [];
      }
      // 丢弃一部分没用或者过时的弹幕
    }, {
      key: "disCard",
      value: function disCard(start, end) {
        var _context12;
        _spliceInstanceProperty(_context12 = this.queue).call(_context12, start, end - start + 1);
      }
    }, {
      key: "clearOutdatedDanmaku",
      value: function clearOutdatedDanmaku(currentTime, interval) {
        var _context13;
        this.queue = _filterInstanceProperty(_context13 = this.queue).call(_context13, function (item) {
          if (currentTime - item.timestamp > interval) {
            return false;
          }
          return true;
        });
      }
    }]);
    return Danmaku;
  }();

  var queue = [{
    message: '秋招实在是寒气逼人',
    fontSize: 24,
    fontColor: 'blue'
  }, {
    message: '任正非表明中国互联网行业进入寒冬！！！',
    fontSize: 30
  }, {
    message: '任何邪恶，终将绳之以法11',
    fontColor: 'green'
  }, {
    message: 'HHHHHHHHHHHHH'
  }, {
    message: '任何邪恶，终将绳之以法22'
  }, {
    message: '大家好，我是昊京'
  }, {
    message: '2333333333333333333333333333333333'
  }, {
    message: '经纬恒润内推',
    fontColor: 'red'
  }, '111111111111而非武功果然'];

  var DanmakuController = /*#__PURE__*/function () {
    function DanmakuController(player) {
      _classCallCheck(this, DanmakuController);
      _defineProperty(this, "player", void 0);
      _defineProperty(this, "video", void 0);
      _defineProperty(this, "container", void 0);
      _defineProperty(this, "danmaku", void 0);
      _defineProperty(this, "danmakuInput", void 0);
      _defineProperty(this, "index", 0);
      _defineProperty(this, "timer", null);
      this.player = player;
      this.video = player.video;
      this.container = player.container;
      this.init();
    }
    _createClass(DanmakuController, [{
      key: "init",
      value: function init() {
        this.danmaku = new Danmaku([], this.container);
        this.initTemplate();
        this.initializeEvent();
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        var ctx = this;
        this.danmakuInput = new DanmakuInput(this.player, null, 'div');
        this.player.use({
          install: function install(player) {
            player.registerControls(ctx.danmakuInput.id, ctx.danmakuInput, 'medium');
          }
        });
      }
    }, {
      key: "initializeEvent",
      value: function initializeEvent() {
        var _this = this;
        this.video.addEventListener('timeupdate', function (e) {
          _this.onTimeupdate(e);
        });
        this.video.addEventListener('seeking', function (e) {
          _this.onSeeking(e);
        });
        this.video.addEventListener('play', function (e) {
          _this.start();
          _this.danmaku.resume();
        });
        this.video.addEventListener('pause', function (e) {
          _this.pause();
          _this.danmaku.pause();
        });
        this.video.addEventListener('loadedmetadata', function (e) {});
        this.danmakuInput.on('sendData', function (data) {
          console.log(data);
        });
      }
    }, {
      key: "onTimeupdate",
      value: function onTimeupdate(e) {
        var video = e.target;
        video.currentTime;
      }
      // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
    }, {
      key: "onSeeking",
      value: function onSeeking(e) {
        this.danmaku.flush();
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;
        this.timer = window.setInterval(function () {
          _this2.danmaku.addData(queue[_this2.index++ % queue.length]);
          // if (this.index >= 250) {
          //   window.clearInterval(this.timer)
          //   this.timer = null
          // }
        }, 50);
        // const send = () => {
        //   if (this.index >= 30) return
        //   let data = queue[(this.index++) % queue.length]
        //   this.danmaku.addData(data)
        //   send()
        // }
        // send()
      }
    }, {
      key: "pause",
      value: function pause() {
        window.clearInterval(this.timer);
        this.timer = null;
      }
    }]);
    return DanmakuController;
  }();

  var css_248z$2 = ".danmaku-input-wrapper {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  background-color: hsla(0, 0%, 100%, 0.15);\n  border-radius: 2px;\n}\n.danmaku-input-wrapper .danmaku-input {\n  background-color: transparent;\n  width: 85%;\n  height: 50%;\n  line-height: 100%;\n  color: #fff;\n  font-size: 13px;\n  outline: 0;\n  padding: 0;\n  border: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.danmaku-input-wrapper .danmaku-send {\n  height: 100%;\n  width: 15%;\n  text-align: center;\n  line-height: 35px;\n  background-color: transparent;\n  color: #fff;\n  font-size: 13px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n";
  styleInject(css_248z$2);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var DanmakuInput = /*#__PURE__*/function (_Component) {
    _inherits(DanmakuInput, _Component);
    var _super = _createSuper$1(DanmakuInput);
    function DanmakuInput(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, DanmakuInput);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'DanmakuInput');
      // el: div.danmaku-input-wrapper
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "inputBox", void 0);
      _defineProperty(_assertThisInitialized(_this), "sendBox", void 0);
      _this.props = props || {};
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(DanmakuInput, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initEvent();
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        addClass(this.el, ['danmaku-input-wrapper']);
        this.inputBox = $$N('input.danmaku-input', {
          type: 'text'
        });
        this.sendBox = $$N('span.danmaku-send');
        this.sendBox.innerText = '发送';
        this.el.appendChild(this.inputBox);
        this.el.appendChild(this.sendBox);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.sendBox.onclick = function (e) {
          var value = _this2.inputBox.value;
          _this2.emit('sendData', value);
        };
      }
    }]);
    return DanmakuInput;
  }(Component);

  var DanmakuSettings = /*#__PURE__*/_createClass(function DanmakuSettings() {
    _classCallCheck(this, DanmakuSettings);
  });

  var css_248z$1 = ".video-container {\n  position: relative;\n  overflow: hidden;\n  background-color: #000;\n}\n.video-container .video-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.video-container .video-wrapper video {\n  width: 100%;\n  height: 100%;\n}\n";
  styleInject(css_248z$1);

  var css_248z = "@font-face {\n  font-family: \"iconfont\";\n  /* Project id 3797258 */\n  src: url(\"//at.alicdn.com/t/c/font_3797258_88colj2uuv9.woff2?t=1670043636699\") format(\"woff2\"), url(\"//at.alicdn.com/t/c/font_3797258_88colj2uuv9.woff?t=1670043636699\") format(\"woff\"), url(\"//at.alicdn.com/t/c/font_3797258_88colj2uuv9.ttf?t=1670043636699\") format(\"truetype\");\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-cuowutishi:before {\n  content: \"\\e656\";\n}\n.icon-shezhi:before {\n  content: \"\\e64b\";\n}\n.icon-quanping:before {\n  content: \"\\eb11\";\n}\n.icon-yinliang:before {\n  content: \"\\e63c\";\n}\n.icon-zanting:before {\n  content: \"\\e87a\";\n}\n.icon-bofang:before {\n  content: \"\\e87c\";\n}\n";
  styleInject(css_248z);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Player = /*#__PURE__*/function (_Component) {
    _inherits(Player, _Component);
    var _super = _createSuper(Player);
    function Player(options) {
      var _this;
      _classCallCheck(this, Player);
      _this = _super.call(this, options.container, 'div.video-wrapper');
      _defineProperty(_assertThisInitialized(_this), "id", 'Player');
      // el: div.video-wrapper
      // 播放器的默认配置
      _defineProperty(_assertThisInitialized(_this), "playerOptions", {
        url: '',
        container: document.body,
        autoplay: false,
        width: '100%',
        height: '100%'
      });
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "video", void 0);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "toolBar", void 0);
      _this.playerOptions = _Object$assign(_this.playerOptions, options);
      options.container.className = 'video-container';
      options.container.style.width = _this.playerOptions.width;
      options.container.style.height = _this.playerOptions.height;
      _this.container = options.container;
      _this.init();
      return _this;
    }
    _createClass(Player, [{
      key: "init",
      value: function init() {
        this.video = $$N('video');
        this.attachSource(this.playerOptions.url);
        this.el.appendChild(this.video);
        this.toolBar = new ToolBar(this, this.el, 'div');
        this.initEvent();
        this.initPlugin();
        new DanmakuController(this);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.el.onmouseenter = function (e) {
          _this2.emit('showtoolbar', e);
        };
        this.el.onmousemove = function (e) {
          _this2.emit('showtoolbar', e);
        };
        this.el.onmouseleave = function (e) {
          _this2.emit('hidetoolbar', e);
        };
        this.video.onloadedmetadata = function (e) {
          _this2.emit('loadedmetadata', e);
        };
        this.video.ontimeupdate = function (e) {
          _this2.emit('timeupdate', e);
        };
        this.video.onplay = function (e) {
          _this2.emit('play', e);
        };
        this.video.onpause = function (e) {
          _this2.emit('pause', e);
        };
        this.on('progress-click', function (e, ctx) {
          var scale = e.offsetX / ctx.el.offsetWidth;
          if (scale < 0) {
            scale = 0;
          } else if (scale > 1) {
            scale = 1;
          }
          _this2.video.currentTime = Math.floor(scale * _this2.video.duration);
          _this2.video.paused && _this2.video.play();
        });
      }
    }, {
      key: "initPlugin",
      value: function initPlugin() {
        var _this3 = this;
        if (this.playerOptions.plugins) {
          var _context;
          _forEachInstanceProperty(_context = this.playerOptions.plugins).call(_context, function (plugin) {
            _this3.use(plugin);
          });
        }
      }
    }, {
      key: "initMp4Player",
      value: function initMp4Player(url) {
        new MediaPlayer(this.playerOptions.url, this.video);
      }
    }, {
      key: "initMpdPlayer",
      value: function initMpdPlayer(url) {
        // 工厂模式
        // let player = new MediaPlayer({context: {}}, ...args)
        var player = factory().create();
        player.attachVideo(this.video);
        player.attachSource(url);
      }
    }, {
      key: "attachSource",
      value: function attachSource(url) {
        switch (getFileExtension(url)) {
          case 'mp4':
          case 'mp3':
            // this.initMp4Player(url)
            this.video.src = url;
            break;
          case 'mpd':
            this.initMpdPlayer(url);
            break;
          // ToDo
        }
      }
      // 注册最右侧的控制栏上的组件
    }, {
      key: "registerControls",
      value: function registerControls(id, component, pos) {
        var store = CONTROL_COMPONENT_STORE;
        if (store.has(id)) {
          // patchComponent(store.get(id), component)
          if (component.replaceElementType) {
            patchComponent(store.get(id), component, {
              replaceElementType: component.replaceElementType
            });
          } else {
            patchComponent(store.get(id), component);
          }
        } else {
          // 如果该组件实例是用户自创的话
          if (!component.el) throw new Error("\u4F20\u5165\u7684\u539F\u521B\u7EC4\u4EF6".concat(id, "\u6CA1\u6709\u5BF9\u5E94\u7684DOM\u5143\u7D20"));
          if (pos === 'left') {
            this.toolBar.controller.leftArea.appendChild(component.el);
          } else if (pos === 'right') {
            var settings = this.toolBar.controller.rightArea;
            settings.insertBefore(component.el, settings.firstChild);
          } else if (pos === 'medium') {
            this.toolBar.controller.mediumArea.appendChild(component.el);
          }
        }
      }
      /**
       * @description 注册对应的组件
       * @param plugin
       */
    }, {
      key: "use",
      value: function use(plugin) {
        plugin.install(this);
      }
    }]);
    return Player;
  }(Component);
  // class Player extends Component implements ComponentItem {
  //   readonly id = 'Player'
  //   // 播放器的默认配置
  //   readonly playerOptions = {
  //     url: '',
  //     autoplay: false,
  //     width: '100%',
  //     height: '100%'
  //   }
  //   video: HTMLVideoElement
  //   toolBar: ToolBar
  //   constructor(options: PlayerOptions) {
  //     super(options.container, 'div.video-wrapper')
  //     this.playerOptions = Object.assign(this.playerOptions, options)
  //     options.container.className = 'video-container'
  //     options.container.style.width = this.playerOptions.width + 'px'
  //     options.container.style.height = this.playerOptions.height + 'px'
  //     this.init()
  //   }
  //   init() {
  //     this.video = $('video')
  //     this.video.src = this.playerOptions.url || ''
  //     this.el.appendChild(this.video)
  //     this.toolBar = new ToolBar(this, this.el, 'div')
  //     this.initEvent()
  //   }
  //   initEvent() {
  //     this.video.onmousemove = (e) => {
  //       this.emit('showtoolbar', e)
  //     }
  //     this.video.onmouseenter = (e) => {
  //       this.emit('showtoolbar', e)
  //     }
  //     this.video.onmouseleave = (e) => {
  //       this.emit('hidetoolbar', e)
  //     }
  //     this.video.onloadedmetadata = (e) => {
  //       this.emit('loadedmetadata', e)
  //     }
  //     this.video.ontimeupdate = (e) => {
  //       this.emit('timeupdate', e)
  //     }
  //     this.on('progress-click', (e, ctx) => {
  //       let scale = e.offsetX / ctx.el.offsetWidth
  //       if (scale < 0) {
  //         scale = 0
  //       } else if (scale > 1) {
  //         scale = 1
  //       }
  //       this.video.currentTime = Math.floor(scale * this.video.duration)
  //       this.video.paused && this.video.play()
  //     })
  //   }
  //   attendSource(url: string) {
  //     this.video.src = url
  //   }
  // }
  // export { Player }

  exports.$warn = $warn;
  exports.BaseEvent = BaseEvent;
  exports.BufferedProgress = BufferedProgress;
  exports.CompletedProgress = CompletedProgress;
  exports.Controller = Controller;
  exports.Danmaku = Danmaku;
  exports.DanmakuController = DanmakuController;
  exports.DanmakuInput = DanmakuInput;
  exports.DanmakuSettings = DanmakuSettings;
  exports.Dot = Dot;
  exports.FullScreen = FullScreen;
  exports.Options = Options;
  exports.PlayButton = PlayButton;
  exports.Player = Player;
  exports.Playrate = Playrate;
  exports.Progress = Progress;
  exports.ToolBar = ToolBar;
  exports.Volume = Volume;
  exports.addZero = addZero;
  exports.checkAdaptationSet = checkAdaptationSet;
  exports.checkBaseURL = checkBaseURL;
  exports.checkInitialization = checkInitialization;
  exports.checkMediaType = checkMediaType;
  exports.checkMpd = checkMpd;
  exports.checkPeriod = checkPeriod;
  exports.checkRepresentation = checkRepresentation;
  exports.checkSegmentBase = checkSegmentBase;
  exports.checkSegmentList = checkSegmentList;
  exports.checkSegmentTemplate = checkSegmentTemplate;
  exports.checkSegmentURL = checkSegmentURL;
  exports.formatTime = formatTime;
  exports.parseDuration = parseDuration;
  exports.string2booolean = string2booolean;
  exports.string2number = string2number;
  exports.switchToSeconds = switchToSeconds;

}));
//# sourceMappingURL=player.umd.js.map
