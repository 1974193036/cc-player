
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
  var global$n =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || commonjsGlobal || Function('return this')();

  var fails$u = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$t = fails$u;

  var functionBindNative = !fails$t(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$4 = functionBindNative;

  var FunctionPrototype$3 = Function.prototype;
  var apply$4 = FunctionPrototype$3.apply;
  var call$q = FunctionPrototype$3.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$q.bind(apply$4) : function () {
    return call$q.apply(apply$4, arguments);
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

  var uncurryThis$x = functionUncurryThis;

  var toString$c = uncurryThis$x({}.toString);
  var stringSlice$3 = uncurryThis$x(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$3(toString$c(it), 8, -1);
  };

  var classofRaw$1 = classofRaw$2;
  var uncurryThis$w = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw$1(fn) === 'Function') return uncurryThis$w(fn);
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
  var isCallable$p = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var objectGetOwnPropertyDescriptor = {};

  var fails$s = fails$u;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$s(function () {
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
  var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$4(this, V);
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

  var uncurryThis$v = functionUncurryThis;
  var fails$r = fails$u;
  var classof$e = classofRaw$2;

  var $Object$4 = Object;
  var split$3 = uncurryThis$v(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$r(function () {
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

  var toIndexedObject$8 = function (it) {
    return IndexedObject$2(requireObjectCoercible$4(it));
  };

  var isCallable$o = isCallable$p;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$j = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$o(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$o(it);
  };

  var path$h = {};

  var path$g = path$h;
  var global$m = global$n;
  var isCallable$n = isCallable$p;

  var aFunction = function (variable) {
    return isCallable$n(variable) ? variable : undefined;
  };

  var getBuiltIn$h = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path$g[namespace]) || aFunction(global$m[namespace])
      : path$g[namespace] && path$g[namespace][method] || global$m[namespace] && global$m[namespace][method];
  };

  var uncurryThis$u = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$u({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$l = global$n;
  var userAgent$3 = engineUserAgent;

  var process$4 = global$l.process;
  var Deno$1 = global$l.Deno;
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
  var fails$q = fails$u;
  var global$k = global$n;

  var $String$5 = global$k.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$q(function () {
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
  var isCallable$m = isCallable$p;
  var isPrototypeOf$e = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$g('Symbol');
    return isCallable$m($Symbol) && isPrototypeOf$e($Symbol.prototype, $Object$3(it));
  };

  var $String$4 = String;

  var tryToString$7 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$l = isCallable$p;
  var tryToString$6 = tryToString$7;

  var $TypeError$i = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$h = function (argument) {
    if (isCallable$l(argument)) return argument;
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
  var isCallable$k = isCallable$p;
  var isObject$i = isObject$j;

  var $TypeError$h = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$k(fn = input.toString) && !isObject$i(val = call$n(fn, input))) return val;
    if (isCallable$k(fn = input.valueOf) && !isObject$i(val = call$n(fn, input))) return val;
    if (pref !== 'string' && isCallable$k(fn = input.toString) && !isObject$i(val = call$n(fn, input))) return val;
    throw $TypeError$h("Can't convert object to primitive value");
  };

  var shared$7 = {exports: {}};

  var isPure = true;

  var global$j = global$n;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$d = Object.defineProperty;

  var defineGlobalProperty$1 = function (key, value) {
    try {
      defineProperty$d(global$j, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$j[key] = value;
    } return value;
  };

  var global$i = global$n;
  var defineGlobalProperty = defineGlobalProperty$1;

  var SHARED = '__core-js_shared__';
  var store$3 = global$i[SHARED] || defineGlobalProperty(SHARED, {});

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
  var toObject$9 = function (argument) {
    return $Object$2(requireObjectCoercible$3(argument));
  };

  var uncurryThis$t = functionUncurryThis;
  var toObject$8 = toObject$9;

  var hasOwnProperty = uncurryThis$t({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$8(it), key);
  };

  var uncurryThis$s = functionUncurryThis;

  var id$1 = 0;
  var postfix = Math.random();
  var toString$b = uncurryThis$s(1.0.toString);

  var uid$4 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id$1 + postfix, 36);
  };

  var global$h = global$n;
  var shared$6 = sharedExports;
  var hasOwn$i = hasOwnProperty_1;
  var uid$3 = uid$4;
  var NATIVE_SYMBOL$4 = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$4 = global$h.Symbol;
  var WellKnownSymbolsStore$2 = shared$6('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$4['for'] || Symbol$4 : Symbol$4 && Symbol$4.withoutSetter || uid$3;

  var wellKnownSymbol$q = function (name) {
    if (!hasOwn$i(WellKnownSymbolsStore$2, name)) {
      WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$i(Symbol$4, name)
        ? Symbol$4[name]
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

  var global$g = global$n;
  var isObject$g = isObject$j;

  var document$3 = global$g.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$g(document$3) && isObject$g(document$3.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$h = descriptors;
  var fails$p = fails$u;
  var createElement$1 = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$h && !fails$p(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$g = descriptors;
  var call$l = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$7 = createPropertyDescriptor$8;
  var toIndexedObject$7 = toIndexedObject$8;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$h = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$g ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$7(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$h(O, P)) return createPropertyDescriptor$7(!call$l(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };

  var fails$o = fails$u;
  var isCallable$j = isCallable$p;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$j(detection) ? fails$o(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var uncurryThis$r = functionUncurryThisClause;
  var aCallable$f = aCallable$h;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$r = uncurryThis$r(uncurryThis$r.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$f(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$r(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$f = descriptors;
  var fails$n = fails$u;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$f && fails$n(function () {
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

  var DESCRIPTORS$e = descriptors;
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
  objectDefineProperty.f = DESCRIPTORS$e ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
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

  var DESCRIPTORS$d = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$6 = createPropertyDescriptor$8;

  var createNonEnumerableProperty$9 = DESCRIPTORS$d ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$6(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$f = global$n;
  var apply$3 = functionApply;
  var uncurryThis$q = functionUncurryThisClause;
  var isCallable$i = isCallable$p;
  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var isForced$1 = isForced_1;
  var path$f = path$h;
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
      } return apply$3(NativeConstructor, this, arguments);
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

    var nativeSource = GLOBAL ? global$f : STATIC ? global$f[TARGET] : (global$f[TARGET] || {}).prototype;

    var target = GLOBAL ? path$f : path$f[TARGET] || createNonEnumerableProperty$8(path$f, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;

    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

    for (key in source) {
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && hasOwn$g(nativeSource, key);

      targetProperty = target[key];

      if (USE_NATIVE) if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$3(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else nativeProperty = nativeSource[key];

      // export native or implementation
      sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

      if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

      // bind methods to global for calling from export context
      if (options.bind && USE_NATIVE) resultProperty = bind$q(sourceProperty, global$f);
      // wrap global constructors for prevent changes in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
      // make static versions for prototype methods
      else if (PROTO && isCallable$i(sourceProperty)) resultProperty = uncurryThis$q(sourceProperty);
      // default case
      else resultProperty = sourceProperty;

      // add a flag to not completely full polyfills
      if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$8(resultProperty, 'sham', true);
      }

      createNonEnumerableProperty$8(target, key, resultProperty);

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
        if (!hasOwn$g(path$f, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty$8(path$f, VIRTUAL_PROTOTYPE, {});
        }
        // export virtual prototype methods
        createNonEnumerableProperty$8(path$f[VIRTUAL_PROTOTYPE], key, sourceProperty);
        // export real prototype methods
        if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
          createNonEnumerableProperty$8(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var $$10 = _export;
  var DESCRIPTORS$c = descriptors;
  var defineProperty$c = objectDefineProperty.f;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  $$10({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$c, sham: !DESCRIPTORS$c }, {
    defineProperty: defineProperty$c
  });

  var path$e = path$h;

  var Object$2 = path$e.Object;

  var defineProperty$b = defineProperty$e.exports = function defineProperty(it, key, desc) {
    return Object$2.defineProperty(it, key, desc);
  };

  if (Object$2.defineProperty.sham) defineProperty$b.sham = true;

  var definePropertyExports = defineProperty$e.exports;

  var parent$1e = definePropertyExports;

  var defineProperty$a = parent$1e;

  var parent$1d = defineProperty$a;

  var defineProperty$9 = parent$1d;

  var parent$1c = defineProperty$9;

  var defineProperty$8 = parent$1c;

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

  var createProperty$5 = function (object, key, value) {
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
  var isCallable$h = isCallable$p;
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
      : (result = classofRaw(O)) == 'Object' && isCallable$h(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$p = functionUncurryThis;
  var isCallable$g = isCallable$p;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$p(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$g(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var uncurryThis$o = functionUncurryThis;
  var fails$m = fails$u;
  var isCallable$f = isCallable$p;
  var classof$b = classof$c;
  var getBuiltIn$f = getBuiltIn$h;
  var inspectSource$1 = inspectSource$2;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct$7 = getBuiltIn$f('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$4 = uncurryThis$o(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$f(argument)) return false;
    try {
      construct$7(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$f(argument)) return false;
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
  var isConstructor$4 = !construct$7 || fails$m(function () {
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

  var fails$l = fails$u;
  var wellKnownSymbol$l = wellKnownSymbol$q;
  var V8_VERSION$2 = engineV8Version;

  var SPECIES$4 = wellKnownSymbol$l('species');

  var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$l(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$4] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$$ = _export;
  var fails$k = fails$u;
  var isArray$b = isArray$d;
  var isObject$d = isObject$j;
  var toObject$7 = toObject$9;
  var lengthOfArrayLike$7 = lengthOfArrayLike$8;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var createProperty$4 = createProperty$5;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$k = wellKnownSymbol$q;
  var V8_VERSION$1 = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$k('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$k(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$d(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$b(O);
  };

  var FORCED$4 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$$({ target: 'Array', proto: true, arity: 1, forced: FORCED$4 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$7(this);
      var A = arraySpeciesCreate$2(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$7(E);
          doesNotExceedSafeInteger$1(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$4(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger$1(n + 1);
          createProperty$4(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var classof$a = classof$c;

  var $String$2 = String;

  var toString$a = function (argument) {
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

  var toIndexedObject$6 = toIndexedObject$8;
  var toAbsoluteIndex$3 = toAbsoluteIndex$4;
  var lengthOfArrayLike$6 = lengthOfArrayLike$8;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$6($this);
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

  var uncurryThis$n = functionUncurryThis;
  var hasOwn$f = hasOwnProperty_1;
  var toIndexedObject$5 = toIndexedObject$8;
  var indexOf$7 = arrayIncludes.indexOf;
  var hiddenKeys$5 = hiddenKeys$6;

  var push$a = uncurryThis$n([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$5(object);
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

  var DESCRIPTORS$b = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$2 = objectDefineProperty;
  var anObject$d = anObject$f;
  var toIndexedObject$4 = toIndexedObject$8;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$b && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$d(O);
    var props = toIndexedObject$4(Properties);
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

  var keys = shared$5('keys');

  var sharedKey$4 = function (key) {
    return keys[key] || (keys[key] = uid$2(key));
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
  var createProperty$3 = createProperty$5;

  var $Array$2 = Array;
  var max$2 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$5(O);
    var k = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
    var result = $Array$2(max$2(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty$3(result, n, O[k]);
    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$9 = classofRaw$2;
  var toIndexedObject$3 = toIndexedObject$8;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$7 = arraySliceSimple;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$7(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$9(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames$1(toIndexedObject$3(it));
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

  var path$d = path$h;
  var hasOwn$e = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$4 = objectDefineProperty.f;

  var wellKnownSymbolDefine = function (NAME) {
    var Symbol = path$d.Symbol || (path$d.Symbol = {});
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
  var toString$9 = objectToString;
  var wellKnownSymbol$h = wellKnownSymbol$q;

  var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');

  var setToStringTag$9 = function (it, TAG, STATIC, SET_METHOD) {
    if (it) {
      var target = STATIC ? it : it.prototype;
      if (!hasOwn$d(target, TO_STRING_TAG$2)) {
        defineProperty$3(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
      }
      if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
        createNonEnumerableProperty$6(target, 'toString', toString$9);
      }
    }
  };

  var global$e = global$n;
  var isCallable$e = isCallable$p;

  var WeakMap$1 = global$e.WeakMap;

  var weakMapBasicDetection = isCallable$e(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$d = global$n;
  var isObject$c = isObject$j;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
  var hasOwn$c = hasOwnProperty_1;
  var shared$4 = sharedStore;
  var sharedKey$2 = sharedKey$4;
  var hiddenKeys$2 = hiddenKeys$6;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$5 = global$d.TypeError;
  var WeakMap = global$d.WeakMap;
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
  var uncurryThis$m = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$6 = toObject$9;
  var lengthOfArrayLike$4 = lengthOfArrayLike$8;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;

  var push$9 = uncurryThis$m([].push);

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
      var O = toObject$6($this);
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

  var $$_ = _export;
  var global$c = global$n;
  var call$j = functionCall;
  var uncurryThis$l = functionUncurryThis;
  var DESCRIPTORS$a = descriptors;
  var NATIVE_SYMBOL$3 = symbolConstructorDetection;
  var fails$j = fails$u;
  var hasOwn$b = hasOwnProperty_1;
  var isPrototypeOf$d = objectIsPrototypeOf;
  var anObject$b = anObject$f;
  var toIndexedObject$2 = toIndexedObject$8;
  var toPropertyKey = toPropertyKey$4;
  var $toString$2 = toString$a;
  var createPropertyDescriptor$4 = createPropertyDescriptor$8;
  var nativeObjectCreate = objectCreate;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
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
  var $Symbol = global$c.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$4 = global$c.TypeError;
  var QObject = global$c.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  var nativeDefineProperty = definePropertyModule$1.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$8 = uncurryThis$l([].push);

  var AllSymbols = shared$3('symbols');
  var ObjectPrototypeSymbols = shared$3('op-symbols');
  var WellKnownSymbolsStore$1 = shared$3('wks');

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = DESCRIPTORS$a && fails$j(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$2, P);
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
    if (!DESCRIPTORS$a) symbol.description = description;
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
    var properties = toIndexedObject$2(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$a || call$j($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
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
    var it = toIndexedObject$2(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype$2 && hasOwn$b(AllSymbols, key) && !hasOwn$b(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwn$b(AllSymbols, key) && !(hasOwn$b(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$b(AllSymbols, key) && !hasOwn$b(hiddenKeys$1, key)) push$8(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function (O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
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
      if (DESCRIPTORS$a && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
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
    getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$g(name), name);
    };

    if (DESCRIPTORS$a) {
      // https://github.com/tc39/proposal-Symbol-description
      defineBuiltInAccessor$4(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$2(this).description;
        }
      });
    }
  }

  $$_({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
    Symbol: $Symbol
  });

  $forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol$l(name);
  });

  $$_({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  $$_({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$a }, {
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

  $$_({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
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

  var $$Z = _export;
  var getBuiltIn$c = getBuiltIn$h;
  var hasOwn$a = hasOwnProperty_1;
  var toString$8 = toString$a;
  var shared$2 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

  var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  $$Z({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
    'for': function (key) {
      var string = toString$8(key);
      if (hasOwn$a(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = getBuiltIn$c('Symbol')(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry$1[symbol] = string;
      return symbol;
    }
  });

  var $$Y = _export;
  var hasOwn$9 = hasOwnProperty_1;
  var isSymbol$2 = isSymbol$5;
  var tryToString$5 = tryToString$7;
  var shared$1 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

  var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  $$Y({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
    keyFor: function keyFor(sym) {
      if (!isSymbol$2(sym)) throw TypeError(tryToString$5(sym) + ' is not a symbol');
      if (hasOwn$9(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
  });

  var uncurryThis$k = functionUncurryThis;

  var arraySlice$6 = uncurryThis$k([].slice);

  var uncurryThis$j = functionUncurryThis;
  var isArray$a = isArray$d;
  var isCallable$d = isCallable$p;
  var classof$7 = classofRaw$2;
  var toString$7 = toString$a;

  var push$7 = uncurryThis$j([].push);

  var getJsonReplacerFunction = function (replacer) {
    if (isCallable$d(replacer)) return replacer;
    if (!isArray$a(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$7(keys, element);
      else if (typeof element == 'number' || classof$7(element) == 'Number' || classof$7(element) == 'String') push$7(keys, toString$7(element));
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

  var $$X = _export;
  var getBuiltIn$b = getBuiltIn$h;
  var apply$2 = functionApply;
  var call$i = functionCall;
  var uncurryThis$i = functionUncurryThis;
  var fails$i = fails$u;
  var isCallable$c = isCallable$p;
  var isSymbol$1 = isSymbol$5;
  var arraySlice$5 = arraySlice$6;
  var getReplacerFunction = getJsonReplacerFunction;
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var $String$1 = String;
  var $stringify = getBuiltIn$b('JSON', 'stringify');
  var exec$3 = uncurryThis$i(/./.exec);
  var charAt$4 = uncurryThis$i(''.charAt);
  var charCodeAt$2 = uncurryThis$i(''.charCodeAt);
  var replace$5 = uncurryThis$i(''.replace);
  var numberToString$1 = uncurryThis$i(1.0.toString);

  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$i(function () {
    var symbol = getBuiltIn$b('Symbol')();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails$i(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify('\uDEAD') !== '"\\udead"';
  });

  var stringifyWithSymbolsFix = function (it, replacer) {
    var args = arraySlice$5(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$c($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$c($replacer)) value = call$i($replacer, this, $String$1(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply$2($stringify, null, args);
  };

  var fixIllFormed = function (match, offset, string) {
    var prev = charAt$4(string, offset - 1);
    var next = charAt$4(string, offset + 1);
    if ((exec$3(low, match) && !exec$3(hi, next)) || (exec$3(hi, match) && !exec$3(low, prev))) {
      return '\\u' + numberToString$1(charCodeAt$2(match, 0), 16);
    } return match;
  };

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $$X({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$5(arguments);
        var result = apply$2(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$5(result, tester, fixIllFormed) : result;
      }
    });
  }

  var $$W = _export;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var fails$h = fails$u;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var toObject$5 = toObject$9;

  // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FORCED$3 = !NATIVE_SYMBOL || fails$h(function () { getOwnPropertySymbolsModule$2.f(1); });

  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  $$W({ target: 'Object', stat: true, forced: FORCED$3 }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      var $getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
      return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$5(it)) : [];
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

  var global$b = global$n;
  var setToStringTag$6 = setToStringTag$9;

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag$6(global$b.JSON, 'JSON', true);

  var path$c = path$h;

  var symbol$5 = path$c.Symbol;

  var iterators = {};

  var DESCRIPTORS$9 = descriptors;
  var hasOwn$8 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$9 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$9 || (DESCRIPTORS$9 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var fails$g = fails$u;

  var correctPrototypeGetter = !fails$g(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$7 = hasOwnProperty_1;
  var isCallable$b = isCallable$p;
  var toObject$4 = toObject$9;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype$1 = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function (O) {
    var object = toObject$4(O);
    if (hasOwn$7(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$b(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype$1 : null;
  };

  var fails$f = fails$u;
  var isCallable$a = isCallable$p;
  var isObject$b = isObject$j;
  var create$c = objectCreate;
  var getPrototypeOf$8 = objectGetPrototypeOf;
  var defineBuiltIn$5 = defineBuiltIn$8;
  var wellKnownSymbol$f = wellKnownSymbol$q;

  var ITERATOR$7 = wellKnownSymbol$f('iterator');
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

  var NEW_ITERATOR_PROTOTYPE = !isObject$b(IteratorPrototype$1) || fails$f(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$1[ITERATOR$7].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
  else IteratorPrototype$1 = create$c(IteratorPrototype$1);

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$a(IteratorPrototype$1[ITERATOR$7])) {
    defineBuiltIn$5(IteratorPrototype$1, ITERATOR$7, function () {
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

  var uncurryThis$h = functionUncurryThis;
  var aCallable$e = aCallable$h;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$h(aCallable$e(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable$9 = isCallable$p;

  var $String = String;
  var $TypeError$c = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$9(argument)) return argument;
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

  var $$V = _export;
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
  var ITERATOR$6 = wellKnownSymbol$e('iterator');
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
    var nativeIterator = IterablePrototype[ITERATOR$6]
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
      } else $$V({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if ((FORCED) && IterablePrototype[ITERATOR$6] !== defaultIterator) {
      defineBuiltIn$4(IterablePrototype, ITERATOR$6, defaultIterator, { name: DEFAULT });
    }
    Iterators$4[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$3 = function (value, done) {
    return { value: value, done: done };
  };

  var toIndexedObject$1 = toIndexedObject$8;
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
      target: toIndexedObject$1(iterated), // target
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
  var global$a = global$n;
  var classof$6 = classof$c;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
  var Iterators$2 = iterators;
  var wellKnownSymbol$d = wellKnownSymbol$q;

  var TO_STRING_TAG$1 = wellKnownSymbol$d('toStringTag');

  for (var COLLECTION_NAME in DOMIterables$1) {
    var Collection = global$a[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype && classof$6(CollectionPrototype) !== TO_STRING_TAG$1) {
      createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
    }
    Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
  }

  var parent$1b = symbol$5;


  var symbol$4 = parent$1b;

  var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

  // `Symbol.dispose` well-known symbol
  // https://github.com/tc39/proposal-explicit-resource-management
  defineWellKnownSymbol$7('dispose');

  var parent$1a = symbol$4;



  var symbol$3 = parent$1a;

  var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

  // `Symbol.asyncDispose` well-known symbol
  // https://github.com/tc39/proposal-async-explicit-resource-management
  defineWellKnownSymbol$6('asyncDispose');

  var $$U = _export;
  var getBuiltIn$9 = getBuiltIn$h;
  var uncurryThis$g = functionUncurryThis;

  var Symbol$3 = getBuiltIn$9('Symbol');
  var keyFor = Symbol$3.keyFor;
  var thisSymbolValue$1 = uncurryThis$g(Symbol$3.prototype.valueOf);

  // `Symbol.isRegistered` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregistered
  $$U({ target: 'Symbol', stat: true }, {
    isRegistered: function isRegistered(value) {
      try {
        return keyFor(thisSymbolValue$1(value)) !== undefined;
      } catch (error) {
        return false;
      }
    }
  });

  var $$T = _export;
  var shared = sharedExports;
  var getBuiltIn$8 = getBuiltIn$h;
  var uncurryThis$f = functionUncurryThis;
  var isSymbol = isSymbol$5;
  var wellKnownSymbol$c = wellKnownSymbol$q;

  var Symbol$2 = getBuiltIn$8('Symbol');
  var $isWellKnown = Symbol$2.isWellKnown;
  var getOwnPropertyNames = getBuiltIn$8('Object', 'getOwnPropertyNames');
  var thisSymbolValue = uncurryThis$f(Symbol$2.prototype.valueOf);
  var WellKnownSymbolsStore = shared('wks');

  for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$2), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
    // some old engines throws on access to some keys like `arguments` or `caller`
    try {
      var symbolKey = symbolKeys[i];
      if (isSymbol(Symbol$2[symbolKey])) wellKnownSymbol$c(symbolKey);
    } catch (error) { /* empty */ }
  }

  // `Symbol.isWellKnown` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknown
  // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
  $$T({ target: 'Symbol', stat: true, forced: true }, {
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

  var parent$19 = symbol$3;






  // TODO: Remove from `core-js@4`




  var symbol$2 = parent$19;

  var symbol$1 = symbol$2;

  var symbol = symbol$1;

  var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

  var uncurryThis$e = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$6 = toString$a;
  var requireObjectCoercible$2 = requireObjectCoercible$5;

  var charAt$3 = uncurryThis$e(''.charAt);
  var charCodeAt$1 = uncurryThis$e(''.charCodeAt);
  var stringSlice$2 = uncurryThis$e(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$6(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$3(S, position)
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

  var charAt$2 = stringMultibyte.charAt;
  var toString$5 = toString$a;
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
      string: toString$5(iterated),
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
    point = charAt$2(string, index);
    state.index += point.length;
    return createIterResultObject$1(point, false);
  });

  var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

  var iterator$5 = WrappedWellKnownSymbolModule$1.f('iterator');

  var parent$18 = iterator$5;


  var iterator$4 = parent$18;

  var parent$17 = iterator$4;

  var iterator$3 = parent$17;

  var parent$16 = iterator$3;

  var iterator$2 = parent$16;

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

  var parent$15 = toPrimitive$5;

  var toPrimitive$4 = parent$15;

  var parent$14 = toPrimitive$4;

  var toPrimitive$3 = parent$14;

  var parent$13 = toPrimitive$3;

  var toPrimitive$2 = parent$13;

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

  var fails$e = fails$u;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$e(function () {
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

  var $$S = _export;
  var forEach$8 = arrayForEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  $$S({ target: 'Array', proto: true, forced: [].forEach != forEach$8 }, {
    forEach: forEach$8
  });

  var path$b = path$h;

  var entryVirtual$b = function (CONSTRUCTOR) {
    return path$b[CONSTRUCTOR + 'Prototype'];
  };

  var entryVirtual$a = entryVirtual$b;

  var forEach$7 = entryVirtual$a('Array').forEach;

  var parent$12 = forEach$7;

  var forEach$6 = parent$12;

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

  var parent$11 = forEach$5;

  var forEach$4 = parent$11;

  var parent$10 = forEach$4;

  var forEach$3 = parent$10;

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

  var parent$$ = concat$8;

  var concat$7 = parent$$;

  var parent$_ = concat$7;

  var concat$6 = parent$_;

  var parent$Z = concat$6;

  var concat$5 = parent$Z;

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
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$d = functionUncurryThis;
  var requireObjectCoercible$1 = requireObjectCoercible$5;
  var toString$4 = toString$a;
  var whitespaces$1 = whitespaces$2;

  var replace$4 = uncurryThis$d(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$4(requireObjectCoercible$1($this));
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

  var global$9 = global$n;
  var fails$d = fails$u;
  var uncurryThis$c = functionUncurryThis;
  var toString$3 = toString$a;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$2;

  var $parseInt$1 = global$9.parseInt;
  var Symbol$1 = global$9.Symbol;
  var ITERATOR$5 = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec$2 = uncurryThis$c(hex.exec);
  var FORCED$2 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$5 && !fails$d(function () { $parseInt$1(Object(ITERATOR$5)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
    var S = trim(toString$3(string));
    return $parseInt$1(S, (radix >>> 0) || (exec$2(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $$R = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$R({ global: true, forced: parseInt != $parseInt }, {
    parseInt: $parseInt
  });

  var path$a = path$h;

  var _parseInt$6 = path$a.parseInt;

  var parent$Y = _parseInt$6;

  var _parseInt$5 = parent$Y;

  var parent$X = _parseInt$5;

  var _parseInt$4 = parent$X;

  var parent$W = _parseInt$4;

  var _parseInt$3 = parent$W;

  var _parseInt$2 = _parseInt$3;

  var _parseInt = _parseInt$2;

  var _parseInt$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt);

  var $$Q = _export;
  var isArray$9 = isArray$d;
  var isConstructor$2 = isConstructor$4;
  var isObject$a = isObject$j;
  var toAbsoluteIndex$1 = toAbsoluteIndex$4;
  var lengthOfArrayLike$3 = lengthOfArrayLike$8;
  var toIndexedObject = toIndexedObject$8;
  var createProperty$2 = createProperty$5;
  var wellKnownSymbol$b = wellKnownSymbol$q;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var nativeSlice = arraySlice$6;

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('slice');

  var SPECIES$3 = wellKnownSymbol$b('species');
  var $Array$1 = Array;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$Q({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
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
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
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

  var parent$V = slice$5;

  var slice$4 = parent$V;

  var parent$U = slice$4;

  var slice$3 = parent$U;

  var parent$T = slice$3;

  var slice$2 = parent$T;

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

  var uncurryThis$b = functionUncurryThis;
  var aCallable$d = aCallable$h;
  var isObject$9 = isObject$j;
  var hasOwn$5 = hasOwnProperty_1;
  var arraySlice$4 = arraySlice$6;
  var NATIVE_BIND = functionBindNative;

  var $Function = Function;
  var concat$2 = uncurryThis$b([].concat);
  var join$3 = uncurryThis$b([].join);
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
    var partArgs = arraySlice$4(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = concat$2(partArgs, arraySlice$4(arguments));
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

  var $$P = _export;
  var getBuiltIn$7 = getBuiltIn$h;
  var apply$1 = functionApply;
  var bind$o = functionBind;
  var aConstructor$2 = aConstructor$3;
  var anObject$9 = anObject$f;
  var isObject$8 = isObject$j;
  var create$a = objectCreate;
  var fails$c = fails$u;

  var nativeConstruct = getBuiltIn$7('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push$6 = [].push;

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails$c(function () {
    function F() { /* empty */ }
    return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
  });

  var ARGS_BUG = !fails$c(function () {
    nativeConstruct(function () { /* empty */ });
  });

  var FORCED$1 = NEW_TARGET_BUG || ARGS_BUG;

  $$P({ target: 'Reflect', stat: true, forced: FORCED$1, sham: FORCED$1 }, {
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
        apply$1(push$6, $args, args);
        return new (apply$1(bind$o, Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = create$a(isObject$8(proto) ? proto : ObjectPrototype);
      var result = apply$1(Target, instance, args);
      return isObject$8(result) ? result : instance;
    }
  });

  var path$9 = path$h;

  var construct$5 = path$9.Reflect.construct;

  var parent$S = construct$5;

  var construct$4 = parent$S;

  var parent$R = construct$4;

  var construct$3 = parent$R;

  var parent$Q = construct$3;

  var construct$2 = parent$Q;

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
  var $$O = _export;
  var DESCRIPTORS$8 = descriptors;
  var create$9 = objectCreate;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  $$O({ target: 'Object', stat: true, sham: !DESCRIPTORS$8 }, {
    create: create$9
  });

  var path$8 = path$h;

  var Object$1 = path$8.Object;

  var create$8 = function create(P, D) {
    return Object$1.create(P, D);
  };

  var parent$P = create$8;

  var create$7 = parent$P;

  var parent$O = create$7;

  var create$6 = parent$O;

  var parent$N = create$6;

  var create$5 = parent$N;

  var create$4 = create$5;

  var create$3 = create$4;

  var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create$3);

  var $$N = _export;
  var setPrototypeOf$7 = objectSetPrototypeOf;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  $$N({ target: 'Object', stat: true }, {
    setPrototypeOf: setPrototypeOf$7
  });

  var path$7 = path$h;

  var setPrototypeOf$6 = path$7.Object.setPrototypeOf;

  var parent$M = setPrototypeOf$6;

  var setPrototypeOf$5 = parent$M;

  var parent$L = setPrototypeOf$5;

  var setPrototypeOf$4 = parent$L;

  var parent$K = setPrototypeOf$4;

  var setPrototypeOf$3 = parent$K;

  var setPrototypeOf$2 = setPrototypeOf$3;

  var setPrototypeOf$1 = setPrototypeOf$2;

  var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf$1);

  // TODO: Remove from `core-js@4`
  var $$M = _export;
  var bind$n = functionBind;

  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  $$M({ target: 'Function', proto: true, forced: Function.bind !== bind$n }, {
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

  var parent$J = bind$l;

  var bind$k = parent$J;

  var parent$I = bind$k;

  var bind$j = parent$I;

  var parent$H = bind$j;

  var bind$i = parent$H;

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

  var $$L = _export;
  var fails$b = fails$u;
  var toObject$3 = toObject$9;
  var nativeGetPrototypeOf = objectGetPrototypeOf;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var FAILS_ON_PRIMITIVES$1 = fails$b(function () { nativeGetPrototypeOf(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $$L({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !CORRECT_PROTOTYPE_GETTER }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$3(it));
    }
  });

  var path$6 = path$h;

  var getPrototypeOf$6 = path$6.Object.getPrototypeOf;

  var parent$G = getPrototypeOf$6;

  var getPrototypeOf$5 = parent$G;

  var parent$F = getPrototypeOf$5;

  var getPrototypeOf$4 = parent$F;

  var parent$E = getPrototypeOf$4;

  var getPrototypeOf$3 = parent$E;

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

  var DESCRIPTORS$7 = descriptors;
  var uncurryThis$a = functionUncurryThis;
  var call$g = functionCall;
  var fails$a = fails$u;
  var objectKeys = objectKeys$3;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$2 = toObject$9;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$2 = Object.defineProperty;
  var concat$1 = uncurryThis$a([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$a(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$7 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
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
    var T = toObject$2(target);
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
        if (!DESCRIPTORS$7 || call$g(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$K = _export;
  var assign$7 = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$K({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$7 }, {
    assign: assign$7
  });

  var path$5 = path$h;

  var assign$6 = path$5.Object.assign;

  var parent$D = assign$6;

  var assign$5 = parent$D;

  var parent$C = assign$5;

  var assign$4 = parent$C;

  var parent$B = assign$4;

  var assign$3 = parent$B;

  var assign$2 = assign$3;

  var assign$1 = assign$2;

  var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign$1);

  var $$J = _export;
  var isArray$8 = isArray$d;

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  $$J({ target: 'Array', stat: true }, {
    isArray: isArray$8
  });

  var path$4 = path$h;

  var isArray$7 = path$4.Array.isArray;

  var parent$A = isArray$7;

  var isArray$6 = parent$A;

  var parent$z = isArray$6;

  var isArray$5 = parent$z;

  var parent$y = isArray$5;

  var isArray$4 = parent$y;

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

  var ITERATOR$4 = wellKnownSymbol$a('iterator');

  var getIteratorMethod$a = function (it) {
    if (!isNullOrUndefined$3(it)) return getMethod$1(it, ITERATOR$4)
      || getMethod$1(it, '@@iterator')
      || Iterators$1[classof$4(it)];
  };

  var getIteratorMethod$9 = getIteratorMethod$a;

  var getIteratorMethod_1 = getIteratorMethod$9;

  var parent$x = getIteratorMethod_1;


  var getIteratorMethod$8 = parent$x;

  var parent$w = getIteratorMethod$8;

  var getIteratorMethod$7 = parent$w;

  var parent$v = getIteratorMethod$7;

  var getIteratorMethod$6 = parent$v;

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

  var ITERATOR$3 = wellKnownSymbol$9('iterator');
  var ArrayPrototype$6 = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype$6[ITERATOR$3] === it);
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
  var toObject$1 = toObject$9;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor = isConstructor$4;
  var lengthOfArrayLike$2 = lengthOfArrayLike$8;
  var createProperty$1 = createProperty$5;
  var getIterator$2 = getIterator$3;
  var getIteratorMethod$2 = getIteratorMethod$a;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$1(arrayLike);
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
        createProperty$1(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$2(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$1(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var wellKnownSymbol$8 = wellKnownSymbol$q;

  var ITERATOR$2 = wellKnownSymbol$8('iterator');
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
    iteratorWithReturn[ITERATOR$2] = function () {
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
      object[ITERATOR$2] = function () {
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

  var $$I = _export;
  var from$7 = arrayFrom$1;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$I({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from$7
  });

  var path$3 = path$h;

  var from$6 = path$3.Array.from;

  var parent$u = from$6;

  var from$5 = parent$u;

  var parent$t = from$5;

  var from$4 = parent$t;

  var parent$s = from$4;

  var from$3 = parent$s;

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
    if (pageX >= parentLeft - 5 && pageX <= parentRight + 5 && pageY >= y && pageY <= allBottom) return true;
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
  function $$H(desc, props, children) {
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
    var viewBox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0 0 1024 1024';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', viewBox);
    if (d) {
      var path = document.createElementNS(svgNS, 'path');
      path.setAttributeNS(null, 'd', d);
      svg.appendChild(path);
    }
    return svg;
  }
  function createSvgs(d) {
    var viewBox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0 0 1024 1024';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', viewBox);
    var _iterator3 = _createForOfIteratorHelper$2(d),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var str = _step3.value;
        var path = document.createElementNS(svgNS, 'path');
        path.setAttributeNS(null, 'd', str);
        svg.appendChild(path);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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

  function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Component = /*#__PURE__*/function (_BaseEvent) {
    _inherits(Component, _BaseEvent);
    var _super = _createSuper$c(Component);
    //el代表着该组件对应的整个HTML元素
    function Component(container, desc, props, children) {
      var _this;
      _classCallCheck(this, Component);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "el", void 0);
      var dom = $$H(desc, props, children);
      _this.el = dom;
      // 安装组件成功
      container.append(dom);
      return _this;
    }
    return _createClass(Component);
  }(BaseEvent);

  var internalMetadata = {exports: {}};

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$9 = fails$u;

  var arrayBufferNonExtensible = fails$9(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
    }
  });

  var fails$8 = fails$u;
  var isObject$7 = isObject$j;
  var classof$3 = classofRaw$2;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES = fails$8(function () { $isExtensible(1); });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
    if (!isObject$7(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$3(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var fails$7 = fails$u;

  var freezing = !fails$7(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$G = _export;
  var uncurryThis$9 = functionUncurryThis;
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
    var splice = uncurryThis$9([].splice);
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

      $$G({ target: 'Object', stat: true, forced: true }, {
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

  var $$F = _export;
  var global$8 = global$n;
  var InternalMetadataModule = internalMetadataExports;
  var fails$6 = fails$u;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
  var iterate$k = iterate$l;
  var anInstance$4 = anInstance$5;
  var isCallable$8 = isCallable$p;
  var isObject$5 = isObject$j;
  var setToStringTag$3 = setToStringTag$9;
  var defineProperty = objectDefineProperty.f;
  var forEach = arrayIteration.forEach;
  var DESCRIPTORS$6 = descriptors;
  var InternalStateModule$4 = internalState;

  var setInternalState$4 = InternalStateModule$4.set;
  var internalStateGetterFor$1 = InternalStateModule$4.getterFor;

  var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$8[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var exported = {};
    var Constructor;

    if (!DESCRIPTORS$6 || !isCallable$8(NativeConstructor)
      || !(IS_WEAK || NativePrototype.forEach && !fails$6(function () { new NativeConstructor().entries().next(); }))
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
    $$F({ global: true, forced: true }, exported);

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
  var DESCRIPTORS$5 = descriptors;

  var SPECIES$2 = wellKnownSymbol$7('species');

  var setSpecies$2 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$6(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$5 && Constructor && !Constructor[SPECIES$2]) {
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
  var DESCRIPTORS$4 = descriptors;
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
        if (!DESCRIPTORS$4) that.size = 0;
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
          if (DESCRIPTORS$4) state.size++;
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
          if (DESCRIPTORS$4) state.size = 0;
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
            if (DESCRIPTORS$4) state.size--;
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
      if (DESCRIPTORS$4) defineBuiltInAccessor$2(Prototype, 'size', {
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

  var path$2 = path$h;

  var map$c = path$2.Map;

  var parent$r = map$c;


  var map$b = parent$r;

  var parent$q = map$b;

  var map$a = parent$q;

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

  var $$E = _export;
  var from = collectionFrom;

  // `Map.from` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
  $$E({ target: 'Map', stat: true, forced: true }, {
    from: from
  });

  var arraySlice$3 = arraySlice$6;

  // https://tc39.github.io/proposal-setmap-offrom/
  var collectionOf = function of() {
    return new this(arraySlice$3(arguments));
  };

  var $$D = _export;
  var of = collectionOf;

  // `Map.of` method
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
  $$D({ target: 'Map', stat: true, forced: true }, {
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

  var $$C = _export;
  var aMap$d = aMap$e;
  var remove = mapHelpers.remove;

  // `Map.prototype.deleteAll` method
  // https://github.com/tc39/proposal-collection-methods
  $$C({ target: 'Map', proto: true, real: true, forced: true }, {
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

  var $$B = _export;
  var aMap$c = aMap$e;
  var MapHelpers$4 = mapHelpers;

  var get$1 = MapHelpers$4.get;
  var has$1 = MapHelpers$4.has;
  var set$6 = MapHelpers$4.set;

  // `Map.prototype.emplace` method
  // https://github.com/tc39/proposal-upsert
  $$B({ target: 'Map', proto: true, real: true, forced: true }, {
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

  var $$A = _export;
  var bind$b = functionBindContext;
  var aMap$b = aMap$e;
  var iterate$h = mapIterate;

  // `Map.prototype.every` method
  // https://github.com/tc39/proposal-collection-methods
  $$A({ target: 'Map', proto: true, real: true, forced: true }, {
    every: function every(callbackfn /* , thisArg */) {
      var map = aMap$b(this);
      var boundFunction = bind$b(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return iterate$h(map, function (value, key) {
        if (!boundFunction(value, key, map)) return false;
      }, true) !== false;
    }
  });

  var $$z = _export;
  var bind$a = functionBindContext;
  var aMap$a = aMap$e;
  var MapHelpers$3 = mapHelpers;
  var iterate$g = mapIterate;

  var Map$4 = MapHelpers$3.Map;
  var set$5 = MapHelpers$3.set;

  // `Map.prototype.filter` method
  // https://github.com/tc39/proposal-collection-methods
  $$z({ target: 'Map', proto: true, real: true, forced: true }, {
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

  var $$y = _export;
  var bind$9 = functionBindContext;
  var aMap$9 = aMap$e;
  var iterate$f = mapIterate;

  // `Map.prototype.find` method
  // https://github.com/tc39/proposal-collection-methods
  $$y({ target: 'Map', proto: true, real: true, forced: true }, {
    find: function find(callbackfn /* , thisArg */) {
      var map = aMap$9(this);
      var boundFunction = bind$9(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      var result = iterate$f(map, function (value, key) {
        if (boundFunction(value, key, map)) return { value: value };
      }, true);
      return result && result.value;
    }
  });

  var $$x = _export;
  var bind$8 = functionBindContext;
  var aMap$8 = aMap$e;
  var iterate$e = mapIterate;

  // `Map.prototype.findKey` method
  // https://github.com/tc39/proposal-collection-methods
  $$x({ target: 'Map', proto: true, real: true, forced: true }, {
    findKey: function findKey(callbackfn /* , thisArg */) {
      var map = aMap$8(this);
      var boundFunction = bind$8(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      var result = iterate$e(map, function (value, key) {
        if (boundFunction(value, key, map)) return { key: key };
      }, true);
      return result && result.key;
    }
  });

  var $$w = _export;
  var call$9 = functionCall;
  var uncurryThis$8 = functionUncurryThis;
  var isCallable$7 = isCallable$p;
  var aCallable$a = aCallable$h;
  var iterate$d = iterate$l;
  var Map$3 = mapHelpers.Map;

  var push$4 = uncurryThis$8([].push);

  // `Map.groupBy` method
  // https://github.com/tc39/proposal-collection-methods
  $$w({ target: 'Map', stat: true, forced: true }, {
    groupBy: function groupBy(iterable, keyDerivative) {
      var C = isCallable$7(this) ? this : Map$3;
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

  var $$v = _export;
  var sameValueZero = sameValueZero$1;
  var aMap$7 = aMap$e;
  var iterate$c = mapIterate;

  // `Map.prototype.includes` method
  // https://github.com/tc39/proposal-collection-methods
  $$v({ target: 'Map', proto: true, real: true, forced: true }, {
    includes: function includes(searchElement) {
      return iterate$c(aMap$7(this), function (value) {
        if (sameValueZero(value, searchElement)) return true;
      }, true) === true;
    }
  });

  var $$u = _export;
  var call$8 = functionCall;
  var iterate$b = iterate$l;
  var isCallable$6 = isCallable$p;
  var aCallable$9 = aCallable$h;
  var Map$2 = mapHelpers.Map;

  // `Map.keyBy` method
  // https://github.com/tc39/proposal-collection-methods
  $$u({ target: 'Map', stat: true, forced: true }, {
    keyBy: function keyBy(iterable, keyDerivative) {
      var C = isCallable$6(this) ? this : Map$2;
      var newMap = new C();
      aCallable$9(keyDerivative);
      var setter = aCallable$9(newMap.set);
      iterate$b(iterable, function (element) {
        call$8(setter, newMap, keyDerivative(element), element);
      });
      return newMap;
    }
  });

  var $$t = _export;
  var aMap$6 = aMap$e;
  var iterate$a = mapIterate;

  // `Map.prototype.keyOf` method
  // https://github.com/tc39/proposal-collection-methods
  $$t({ target: 'Map', proto: true, real: true, forced: true }, {
    keyOf: function keyOf(searchElement) {
      var result = iterate$a(aMap$6(this), function (value, key) {
        if (value === searchElement) return { key: key };
      }, true);
      return result && result.key;
    }
  });

  var $$s = _export;
  var bind$7 = functionBindContext;
  var aMap$5 = aMap$e;
  var MapHelpers$2 = mapHelpers;
  var iterate$9 = mapIterate;

  var Map$1 = MapHelpers$2.Map;
  var set$4 = MapHelpers$2.set;

  // `Map.prototype.mapKeys` method
  // https://github.com/tc39/proposal-collection-methods
  $$s({ target: 'Map', proto: true, real: true, forced: true }, {
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

  var $$r = _export;
  var bind$6 = functionBindContext;
  var aMap$4 = aMap$e;
  var MapHelpers$1 = mapHelpers;
  var iterate$8 = mapIterate;

  var Map = MapHelpers$1.Map;
  var set$3 = MapHelpers$1.set;

  // `Map.prototype.mapValues` method
  // https://github.com/tc39/proposal-collection-methods
  $$r({ target: 'Map', proto: true, real: true, forced: true }, {
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

  var $$q = _export;
  var aMap$3 = aMap$e;
  var iterate$7 = iterate$l;
  var set$2 = mapHelpers.set;

  // `Map.prototype.merge` method
  // https://github.com/tc39/proposal-collection-methods
  $$q({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
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

  var $$p = _export;
  var aCallable$8 = aCallable$h;
  var aMap$2 = aMap$e;
  var iterate$6 = mapIterate;

  var $TypeError$7 = TypeError;

  // `Map.prototype.reduce` method
  // https://github.com/tc39/proposal-collection-methods
  $$p({ target: 'Map', proto: true, real: true, forced: true }, {
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

  var $$o = _export;
  var bind$5 = functionBindContext;
  var aMap$1 = aMap$e;
  var iterate$5 = mapIterate;

  // `Map.prototype.some` method
  // https://github.com/tc39/proposal-collection-methods
  $$o({ target: 'Map', proto: true, real: true, forced: true }, {
    some: function some(callbackfn /* , thisArg */) {
      var map = aMap$1(this);
      var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return iterate$5(map, function (value, key) {
        if (boundFunction(value, key, map)) return true;
      }, true) === true;
    }
  });

  var $$n = _export;
  var aCallable$7 = aCallable$h;
  var aMap = aMap$e;
  var MapHelpers = mapHelpers;

  var $TypeError$6 = TypeError;
  var get = MapHelpers.get;
  var has = MapHelpers.has;
  var set$1 = MapHelpers.set;

  // `Map.prototype.update` method
  // https://github.com/tc39/proposal-collection-methods
  $$n({ target: 'Map', proto: true, real: true, forced: true }, {
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
  var isCallable$5 = isCallable$p;
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
    if (!isCallable$5(updateFn) && !isCallable$5(insertFn)) {
      throw $TypeError$5('At least one callback required');
    }
    if (call$7(has, map, key)) {
      value = call$7(get, map, key);
      if (isCallable$5(updateFn)) {
        value = updateFn(value);
        call$7(set, map, key, value);
      }
    } else if (isCallable$5(insertFn)) {
      value = insertFn();
      call$7(set, map, key, value);
    } return value;
  };

  // TODO: remove from `core-js@4`
  var $$m = _export;
  var upsert$1 = mapUpsert;

  // `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
  // https://github.com/thumbsupep/proposal-upsert
  $$m({ target: 'Map', proto: true, real: true, forced: true }, {
    upsert: upsert$1
  });

  // TODO: remove from `core-js@4`
  var $$l = _export;
  var upsert = mapUpsert;

  // `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
  // https://github.com/thumbsupep/proposal-upsert
  $$l({ target: 'Map', proto: true, real: true, name: 'upsert', forced: true }, {
    updateOrInsert: upsert
  });

  var parent$p = map$a;


















  // TODO: remove from `core-js@4`

  // TODO: remove from `core-js@4`


  var map$9 = parent$p;

  var map$8 = map$9;

  var map$7 = map$8;

  var _Map = /*@__PURE__*/getDefaultExportFromCjs(map$7);

  var playPath = 'M254.132978 880.390231c-6.079462 0-12.155854-1.511423-17.643845-4.497431-11.828396-6.482645-19.195178-18.85851-19.195178-32.341592L217.293955 180.465165c0-13.483082 7.366781-25.898857 19.195178-32.346709 11.787464-6.483668 26.226315-5.928013 37.57478 1.363044L789.797957 481.028615c10.536984 6.77531 16.908088 18.456351 16.908088 30.979572 0 12.523221-6.371104 24.203238-16.908088 30.982642L274.063913 874.53385C267.983427 878.403994 261.060761 880.390231 254.132978 880.390231L254.132978 880.390231zM254.132978 880.390231';
  var pausePath = 'M304 176h80v672h-80zM712 176h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z';
  var volumePath$1 = 'M318.577778 352.711111h-156.444445c-31.288889 0-56.888889 25.6-56.888889 56.888889v206.222222c0 31.288889 25.6 56.888889 56.888889 56.888889h156.444445L512 866.133333c27.022222 27.022222 72.533333 8.533333 72.533333-29.866666V187.733333c0-38.4-45.511111-56.888889-72.533333-29.866666L318.577778 352.711111z m210.488889 448L359.822222 631.466667c-11.377778-11.377778-25.6-17.066667-39.822222-17.066667h-156.444444V409.6h156.444444c15.644444 0 29.866667-5.688889 39.822222-17.066667l169.244445-169.244444v577.422222zM642.844444 341.333333v8.533334c0 7.111111 4.266667 14.222222 9.955556 19.911111 41.244444 34.133333 66.844444 85.333333 66.844444 142.222222s-25.6 108.088889-66.844444 142.222222c-5.688889 4.266667-9.955556 11.377778-9.955556 19.911111v8.533334c0 21.333333 24.177778 32.711111 41.244445 19.911111 56.888889-44.088889 92.444444-112.355556 92.444444-190.577778 0-76.8-35.555556-145.066667-92.444444-190.577778-17.066667-12.8-41.244444-1.422222-41.244445 19.911111z';
  var volumePath$2 = 'M642.844444 183.466667c0 11.377778 7.111111 21.333333 17.066667 25.6 118.044444 49.777778 201.955556 166.4 201.955556 301.511111 0 136.533333-83.911111 253.155556-201.955556 301.511111-9.955556 4.266667-17.066667 14.222222-17.066667 25.6 0 19.911111 21.333333 34.133333 39.822223 25.6 137.955556-58.311111 236.088889-194.844444 236.088889-354.133333S822.044444 213.333333 682.666667 155.022222c-18.488889-5.688889-39.822222 8.533333-39.822223 28.444445z';
  var fullscreenPath = 'M290 236.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L169 160c-5.1-0.6-9.5 3.7-8.9 8.9L179 329.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zM642.7 423.7c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7L863.9 169c0.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4zM845 694.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L734 787.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L855 864c5.1 0.6 9.5-3.7 8.9-8.9L845 694.9zM381.3 600.3c-3.1-3.1-8.2-3.1-11.3 0L236.3 733.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L160.1 855c-0.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-0.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z';
  var fullscreenExitPath = 'M391 240.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L280 333.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L401 410c5.1 0.6 9.5-3.7 8.9-8.9L391 240.9zM401.1 614.1L240.8 633c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7l18.9-160.1c0.6-5.1-3.7-9.4-8.8-8.8zM622.9 409.9L783.2 391c6.6-0.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3c-3.1-3.1-8.2-3.1-11.3 0L690.3 279.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L614.1 401c-0.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L623 614c-5.1-0.6-9.5 3.7-8.9 8.9L633 783.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z';

  function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var FullScreen = /*#__PURE__*/function (_Component) {
    _inherits(FullScreen, _Component);
    var _super = _createSuper$b(FullScreen);
    function FullScreen(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, FullScreen);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'FullScreen');
      // el: div.video-fullscreen.video-controller
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "iconBox", void 0);
      _defineProperty(_assertThisInitialized(_this), "icon", void 0);
      _defineProperty(_assertThisInitialized(_this), "fullscreenIcon", void 0);
      _defineProperty(_assertThisInitialized(_this), "fullscreenExitIcon", void 0);
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
        this.iconBox = $$H('div.video-icon');
        this.fullscreenIcon = createSvg(fullscreenPath);
        this.fullscreenExitIcon = createSvg(fullscreenExitPath);
        this.icon = this.fullscreenIcon;
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
          this.icon = this.fullscreenExitIcon;
          this.iconBox.appendChild(this.icon);
        } else if (document.fullscreenElement) {
          document.exitFullscreen(); //退出全屏函数仅仅绑定在document对象上，该点需要切记！！！
          this.iconBox.removeChild(this.icon);
          this.icon = this.fullscreenIcon;
          this.iconBox.appendChild(this.icon);
        }
      }
    }]);
    return FullScreen;
  }(Component);

  function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PlayButton = /*#__PURE__*/function (_Component) {
    _inherits(PlayButton, _Component);
    var _super = _createSuper$a(PlayButton);
    function PlayButton(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, PlayButton);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'PlayButton');
      // el: div.video-start-pause
      _defineProperty(_assertThisInitialized(_this), "pauseIcon", void 0);
      _defineProperty(_assertThisInitialized(_this), "playIcon", void 0);
      _defineProperty(_assertThisInitialized(_this), "button", void 0);
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
        addClass(this.el, ['video-start-pause']);
        this.pauseIcon = createSvg(pausePath);
        this.playIcon = createSvg(playPath);
        this.button = this.playIcon;
        this.el.appendChild(this.button);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
        this.onClick = this.onClick.bind(this);
        this.player.on('play', function (e) {
          _this2.el.removeChild(_this2.button);
          _this2.button = _this2.pauseIcon;
          _this2.el.appendChild(_this2.button);
        });
        this.player.on('pause', function (e) {
          _this2.el.removeChild(_this2.button);
          _this2.button = _this2.playIcon;
          _this2.el.appendChild(_this2.button);
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

  function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Options = /*#__PURE__*/function (_Component) {
    _inherits(Options, _Component);
    var _super = _createSuper$9(Options);
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
        this.hideBox = $$H('div', {
          style: {
            display: 'none'
          }
        });
        if (this.hideHeight && this.hideHeight > 0) {
          this.hideBox.style.height = this.hideHeight + 'px';
        }
        if (this.hideWidth && this.hideWidth > 0) {
          this.hideBox.style.width = this.hideWidth + 'px';
        }
        this.el.appendChild(this.hideBox);
        this.iconBox = $$H('div');
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

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  /**
   * @description 播放速率的类
   */
  var Playrate = /*#__PURE__*/function (_Options) {
    _inherits(Playrate, _Options);
    var _super = _createSuper$8(Playrate);
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
        this.iconBox = $$H('span', null, '倍速');
        this.el.appendChild(this.iconBox);
        this.el.removeChild(this.hideBox);
        this.hideBox = $$H('ul', {
          style: {
            bottom: '41px'
          },
          'aria-label': '播放速度调节'
        });
        addClass(this.hideBox, ['video-playrate-set']);
        this.el.appendChild(this.hideBox);
        for (var i = 0; i < 6; i++) {
          var li = $$H('li');
          li.innerText = '2.0x';
          this.hideBox.appendChild(li);
        }
      }
    }]);
    return Playrate;
  }(Options);

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
    }]);
    return CompletedProgress;
  }(Component);

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Volume = /*#__PURE__*/function (_Options) {
    _inherits(Volume, _Options);
    var _super = _createSuper$6(Volume);
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
        this.hideBox.style.bottom = '41px';
        addClass(this.hideBox, ['video-volume-set']);
        this.volumeProgress = $$H('div.video-volume-progress', {
          style: {
            height: '70px'
          }
        });
        this.volumeShow = $$H('div.video-volume-show');
        this.volumeShow.innerText = '50';
        this.volumeCompleted = new CompletedProgress(this.player, this.volumeProgress, 'div.video-volume-completed');
        this.hideBox.appendChild(this.volumeShow);
        this.hideBox.appendChild(this.volumeProgress);
        addClass(this.iconBox, ['video-icon']);
        this.icon = createSvgs([volumePath$1, volumePath$2]);
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

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Dot = /*#__PURE__*/function (_Component) {
    _inherits(Dot, _Component);
    var _super = _createSuper$5(Dot);
    function Dot(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Dot);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Dot');
      // el: div.video-dot.video-dot-hidden
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.props = props || {};
      _this.player = player;
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
    }]);
    return Dot;
  }(Component);

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var BufferedProgress = /*#__PURE__*/function (_Component) {
    _inherits(BufferedProgress, _Component);
    var _super = _createSuper$4(BufferedProgress);
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

  var css_248z$4 = ".video-progress {\n  width: 100%;\n  height: 5px;\n  background-color: hsla(0, 0%, 100%, 0.2);\n  cursor: pointer;\n  position: relative;\n}\n.video-progress .video-pretime {\n  position: absolute;\n  left: 0;\n  top: -18px;\n  height: 15px;\n  width: 35px;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  line-height: 15px;\n  text-align: center;\n  font-size: 10px;\n  display: none;\n}\n.video-progress .video-buffered {\n  left: 0;\n  height: 100%;\n  width: 0;\n  z-index: 1001;\n  position: absolute;\n  background-color: hsla(0, 0%, 100%, 0.3);\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.video-progress .video-completed {\n  position: absolute;\n  background-color: #00a1d6;\n  height: 100%;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  left: 0;\n  width: 0;\n  z-index: 1002;\n}\n.video-progress .video-dot-hidden {\n  opacity: 0;\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n}\n.video-progress .video-dot {\n  position: absolute;\n  left: 0px;\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n  background-color: black;\n  cursor: pointer;\n  z-index: 1003;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n";
  styleInject(css_248z$4);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Progress = /*#__PURE__*/function (_Component) {
    _inherits(Progress, _Component);
    var _super = _createSuper$3(Progress);
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

  var $$k = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$k({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
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

  var parent$o = map$5;

  var map$4 = parent$o;

  var parent$n = map$4;

  var map$3 = parent$n;

  var parent$m = map$3;

  var map$2 = parent$m;

  var map$1 = map$2;

  var map = map$1;

  var _mapInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(map);

  var css_248z$3 = ".video-play {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px 5px 0 5px;\n}\n.video-play .video-subplay {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 22px;\n}\n.video-play .video-subplay .video-start-pause {\n  height: 100%;\n  margin-right: 5px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-subplay .video-start-pause svg {\n  width: 20px;\n  height: 20px;\n}\n.video-play .video-subplay .video-start-pause svg path {\n  fill: #fff;\n  stroke-width: 3px;\n}\n.video-play .video-subplay .video-duration {\n  margin-left: 5px;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n}\n.video-play .video-settings {\n  position: relative;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 20px;\n  color: hsla(0, 0%, 100%, 0.8);\n  fill: hsla(0, 0%, 100%, 0.8);\n  height: 22px;\n}\n.video-play .video-settings .video-subsettings svg {\n  -webkit-transition: fill 0.15s ease-in-out;\n  transition: fill 0.15s ease-in-out;\n}\n.video-play .video-settings .video-volume {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-settings .video-volume .video-volume-set {\n  position: absolute;\n  bottom: 41px;\n  left: 50%;\n  -webkit-transform: translateX(-16px);\n          transform: translateX(-16px);\n  width: 32px;\n  height: 100px;\n  padding-bottom: 8px;\n  background: rgba(21, 21, 21, 0.9);\n  border-radius: 2px;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-show {\n  width: 100%;\n  height: 15px;\n  padding-top: 5px;\n  text-align: center;\n  line-height: 15px;\n  font-size: 12px;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-progress {\n  border-radius: 2px;\n  width: 5px;\n  height: calc(100% - 20px - 10px);\n  margin-top: 8px;\n  margin-left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background-color: #fff;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-progress .video-volume-completed {\n  height: 50%;\n  width: 100%;\n  background-color: #00a1d6;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-progress .video-volume-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #00a1d6;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 1003;\n}\n.video-play .video-settings .video-volume .video-icon svg {\n  height: 20px;\n  width: 20px;\n}\n.video-play .video-settings .video-volume .video-icon svg path {\n  fill: #fff;\n}\n.video-play .video-settings .video-fullscreen .video-icon svg {\n  height: 20px;\n  width: 20px;\n}\n.video-play .video-settings .video-fullscreen .video-icon svg path {\n  fill: #fff;\n}\n.video-play .video-settings .video-playrate {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-settings .video-playrate .video-playrate-set {\n  border-radius: 2px;\n  bottom: 41px;\n  background-color: rgba(21, 21, 21, 0.9);\n  width: 70px;\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  list-style: none;\n  outline: none;\n}\n.video-play .video-settings .video-playrate .video-playrate-set li {\n  color: #fff;\n  text-align: center;\n  height: 36px;\n  line-height: 36px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.video-play .video-settings .video-playrate .video-playrate-set li:hover {\n  background-color: #C9CCD0;\n}\n.video-play .video-settings .video-playrate span {\n  width: 100%;\n  height: 100%;\n}\n.video-play .video-settings .video-resolvepower {\n  position: relative;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set {\n  list-style: none;\n  outline: none;\n  border-radius: 2px;\n  bottom: 41px;\n  background-color: rgba(21, 21, 21, 0.9);\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  cursor: pointer;\n  display: none;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set li {\n  width: 145px;\n  padding: 0 12px;\n  height: 36px;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set li:hover {\n  background-color: #C9CCD0;\n}\n.video-play .video-settings .video-playrate,\n.video-play .video-settings .video-resolvepower {\n  font-size: 14px;\n  font-weight: 550;\n  color: #fff;\n  margin: 0 10px;\n}\n.video-play .video-settings .video-controller {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 33px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  color: #fff;\n  opacity: 0.9;\n}\n.video-play .video-settings .video-controller .video-icon {\n  height: 100%;\n  width: 100%;\n}\n";
  styleInject(css_248z$3);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Controller = /*#__PURE__*/function (_Component) {
    _inherits(Controller, _Component);
    var _super = _createSuper$2(Controller);
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
      _defineProperty(_assertThisInitialized(_this), "rightController", [Playrate, Volume, FullScreen]);
      // fullscreen: FullScreen
      // playButton: PlayButton
      // playrate: Playrate
      // volume: Volume
      _defineProperty(_assertThisInitialized(_this), "subPlay", void 0);
      _defineProperty(_assertThisInitialized(_this), "settings", void 0);
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
          console.log(this.rightController);
        }
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        this.subPlay = $$H('div.video-subplay');
        this.settings = $$H('div.video-settings');
        this.el.appendChild(this.subPlay);
        this.el.appendChild(this.settings);
      }
    }, {
      key: "initComponent",
      value: function initComponent() {
        var _context,
          _this2 = this,
          _context2;
        _forEachInstanceProperty(_context = this.leftControllers).call(_context, function (ControlConstructor) {
          var instance = new ControlConstructor(_this2.player, _this2.subPlay, 'div');
          _this2[instance.id] = instance;
        });
        _forEachInstanceProperty(_context2 = this.rightController).call(_context2, function (ControlConstructor) {
          var instance = new ControlConstructor(_this2.player, _this2.settings, 'div');
          _this2[instance.id] = instance;
        });
        // this.playButton = new PlayButton(this.player, this.subPlay, 'div')
        // this.volume = new Volume(this.player, this.settings, 'div')
        // this.playrate = new Playrate(this.player, this.settings, 'div')
        // this.fullscreen = new FullScreen(this.player, this.settings, 'div')
      }
    }]);
    return Controller;
  }(Component);

  var css_248z$2 = ".video-controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  color: #fff;\n  height: 55px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n";
  styleInject(css_248z$2);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var ToolBar = /*#__PURE__*/function (_Component) {
    _inherits(ToolBar, _Component);
    var _super = _createSuper$1(ToolBar);
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

  function _isNativeReflectConstruct$1() {
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
    if (_isNativeReflectConstruct$1()) {
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
  var uncurryThis$7 = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$3 = anObject$f;

  var concat = uncurryThis$7([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$3(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$3 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
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

  var uncurryThis$6 = functionUncurryThis;

  var $Error$1 = Error;
  var replace$3 = uncurryThis$6(''.replace);

  var TEST = (function (arg) { return String($Error$1(arg).stack); })('zxcasd');
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

  var errorStackClear = function (stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
      while (dropEntries--) stack = replace$3(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    } return stack;
  };

  var fails$5 = fails$u;
  var createPropertyDescriptor$2 = createPropertyDescriptor$8;

  var errorStackInstallable = !fails$5(function () {
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

  var toString$2 = toString$a;

  var normalizeStringArgument$1 = function (argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString$2(argument);
  };

  var $$j = _export;
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
  $$j({ global: true, constructor: true, arity: 2 }, {
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

  var validateArgumentsLength$4 = function (passed, required) {
    if (passed < required) throw $TypeError$4('Not enough arguments');
    return passed;
  };

  var userAgent$2 = engineUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

  var global$7 = global$n;
  var apply = functionApply;
  var bind$4 = functionBindContext;
  var isCallable$4 = isCallable$p;
  var hasOwn$2 = hasOwnProperty_1;
  var fails$4 = fails$u;
  var html = html$2;
  var arraySlice$2 = arraySlice$6;
  var createElement = documentCreateElement$1;
  var validateArgumentsLength$3 = validateArgumentsLength$4;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$3 = engineIsNode;

  var set = global$7.setImmediate;
  var clear = global$7.clearImmediate;
  var process$3 = global$7.process;
  var Dispatch = global$7.Dispatch;
  var Function$1 = global$7.Function;
  var MessageChannel = global$7.MessageChannel;
  var String$1 = global$7.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$4(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global$7.location;
  });

  var run = function (id) {
    if (hasOwn$2(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
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
    global$7.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength$3(arguments.length, 1);
      var fn = isCallable$4(handler) ? handler : Function$1(handler);
      var args = arraySlice$2(arguments, 1);
      queue$2[++counter] = function () {
        apply(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$2[id];
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
      global$7.addEventListener &&
      isCallable$4(global$7.postMessage) &&
      !global$7.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$4(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      global$7.addEventListener('message', eventListener, false);
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

  var queue$1 = Queue$2;

  var userAgent$1 = engineUserAgent;

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

  var userAgent = engineUserAgent;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var global$6 = global$n;
  var bind$3 = functionBindContext;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$2 = engineIsNode;

  var MutationObserver = global$6.MutationObserver || global$6.WebKitMutationObserver;
  var document$2 = global$6.document;
  var process$2 = global$6.process;
  var Promise$1 = global$6.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$6, 'queueMicrotask');
  var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var notify$1, toggle, node, promise$6, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1();

    var flush = function () {
      var parent, fn;
      if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
      while (fn = queue.get()) try {
        fn();
      } catch (error) {
        if (queue.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, { characterData: true });
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
      macrotask = bind$3(macrotask, global$6);
      notify$1 = function () {
        macrotask(flush);
      };
    }

    microtask$1 = function (fn) {
      if (!queue.head) notify$1();
      queue.add(fn);
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

  var global$5 = global$n;

  var promiseNativeConstructor = global$5.Promise;

  /* global Deno -- Deno case */

  var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

  var IS_DENO$1 = engineIsDeno;
  var IS_NODE$1 = engineIsNode;

  var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
    && typeof window == 'object'
    && typeof document == 'object';

  var global$4 = global$n;
  var NativePromiseConstructor$5 = promiseNativeConstructor;
  var isCallable$3 = isCallable$p;
  var isForced = isForced_1;
  var inspectSource = inspectSource$2;
  var wellKnownSymbol$4 = wellKnownSymbol$q;
  var IS_BROWSER = engineIsBrowser;
  var IS_DENO = engineIsDeno;
  var V8_VERSION = engineV8Version;

  var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
  var SPECIES = wellKnownSymbol$4('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(global$4.PromiseRejectionEvent);

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

  var $$i = _export;
  var IS_NODE = engineIsNode;
  var global$3 = global$n;
  var call$6 = functionCall;
  var defineBuiltIn$2 = defineBuiltIn$8;
  var setToStringTag$2 = setToStringTag$9;
  var setSpecies = setSpecies$2;
  var aCallable$4 = aCallable$h;
  var isCallable$2 = isCallable$p;
  var isObject$3 = isObject$j;
  var anInstance$2 = anInstance$5;
  var speciesConstructor$1 = speciesConstructor$2;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$5 = perform$6;
  var Queue = queue$1;
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
  var TypeError$3 = global$3.TypeError;
  var document$1 = global$3.document;
  var process$1 = global$3.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$3.dispatchEvent);
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
    return isObject$3(it) && isCallable$2(then = it.then) ? then : false;
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
      global$3.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$3['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$6(task, global$3, function () {
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
    call$6(task, global$3, function () {
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
      reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$2(onRejected) && onRejected;
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

  $$i({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
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

  var $$h = _export;
  var call$5 = functionCall;
  var aCallable$3 = aCallable$h;
  var newPromiseCapabilityModule$5 = newPromiseCapability$2;
  var perform$4 = perform$6;
  var iterate$3 = iterate$l;
  var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$h({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
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

  var $$g = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor$2 = promiseNativeConstructor;

  NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$g({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  var $$f = _export;
  var call$4 = functionCall;
  var aCallable$2 = aCallable$h;
  var newPromiseCapabilityModule$4 = newPromiseCapability$2;
  var perform$3 = perform$6;
  var iterate$2 = iterate$l;
  var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$f({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
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

  var $$e = _export;
  var call$3 = functionCall;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$e({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
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

  var $$d = _export;
  var getBuiltIn$3 = getBuiltIn$h;
  var IS_PURE$1 = isPure;
  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve$1 = promiseResolve$2;

  var PromiseConstructorWrapper = getBuiltIn$3('Promise');
  var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$d({ target: 'Promise', stat: true, forced: IS_PURE$1  }, {
    resolve: function resolve(x) {
      return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
    }
  });

  var $$c = _export;
  var call$2 = functionCall;
  var aCallable$1 = aCallable$h;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$2 = perform$6;
  var iterate$1 = iterate$l;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.allSettled` method
  // https://tc39.es/ecma262/#sec-promise.allsettled
  $$c({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
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

  var $$b = _export;
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
  $$b({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
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

  var $$a = _export;
  var NativePromiseConstructor = promiseNativeConstructor;
  var fails$3 = fails$u;
  var getBuiltIn$1 = getBuiltIn$h;
  var isCallable$1 = isCallable$p;
  var speciesConstructor = speciesConstructor$2;
  var promiseResolve = promiseResolve$2;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!NativePromiseConstructor && fails$3(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $$a({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
    'finally': function (onFinally) {
      var C = speciesConstructor(this, getBuiltIn$1('Promise'));
      var isFunction = isCallable$1(onFinally);
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

  var path$1 = path$h;

  var promise$5 = path$1.Promise;

  var parent$l = promise$5;


  var promise$4 = parent$l;

  var parent$k = promise$4;

  var promise$3 = parent$k;

  // TODO: Remove from `core-js@4`
  var $$9 = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$6;

  // `Promise.try` method
  // https://github.com/tc39/proposal-promise-try
  $$9({ target: 'Promise', stat: true, forced: true }, {
    'try': function (callbackfn) {
      var promiseCapability = newPromiseCapabilityModule.f(this);
      var result = perform(callbackfn);
      (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
      return promiseCapability.promise;
    }
  });

  var parent$j = promise$3;

  // TODO: Remove from `core-js@4`




  var promise$2 = parent$j;

  var promise$1 = promise$2;

  var promise = promise$1;

  var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise);

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$8 = _export;
  var uncurryThis$5 = functionUncurryThisClause;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;

  var nativeIndexOf = uncurryThis$5([].indexOf);

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$8({ target: 'Array', proto: true, forced: FORCED }, {
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

  var parent$i = indexOf$5;

  var indexOf$4 = parent$i;

  var parent$h = indexOf$4;

  var indexOf$3 = parent$h;

  var parent$g = indexOf$3;

  var indexOf$2 = parent$g;

  var indexOf$1 = indexOf$2;

  var indexOf = indexOf$1;

  var _indexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(indexOf);

  var DESCRIPTORS$3 = descriptors;
  var isArray$1 = isArray$d;

  var $TypeError$2 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$3 && !function () {
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
    if (isArray$1(O) && !getOwnPropertyDescriptor$1(O, 'length').writable) {
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

  var $$7 = _export;
  var toObject = toObject$9;
  var toAbsoluteIndex = toAbsoluteIndex$4;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var lengthOfArrayLike = lengthOfArrayLike$8;
  var setArrayLength = arraySetLength;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var createProperty = createProperty$5;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('splice');

  var max = Math.max;
  var min = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$7({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject(this);
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
        if (from in O) createProperty(A, k, O[from]);
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

  var parent$f = splice$6;

  var splice$5 = parent$f;

  var parent$e = splice$5;

  var splice$4 = parent$e;

  var parent$d = splice$4;

  var splice$3 = parent$d;

  var splice$2 = splice$3;

  var splice$1 = splice$2;

  var _spliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(splice$1);

  var $$6 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$6({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
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

  var parent$c = filter$5;

  var filter$4 = parent$c;

  var parent$b = filter$4;

  var filter$3 = parent$b;

  var parent$a = filter$3;

  var filter$2 = parent$a;

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
        var xhr = new XMLHttpRequest();
        request.xhr = xhr;
        if (request.header) {
          for (var key in request.header) {
            xhr.setRequestHeader(key, request.header[key]);
          }
        }
        xhr.open(request.method || 'get', request.url);
        xhr.responseType = request.responseType || 'arraybuffer';
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

  var $$5 = _export;
  var $includes = arrayIncludes.includes;
  var fails$2 = fails$u;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$2(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$5({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
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

  var $$4 = _export;
  var uncurryThis$4 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$5;
  var toString$1 = toString$a;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf = uncurryThis$4(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$4({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf(
        toString$1(requireObjectCoercible(this)),
        toString$1(notARegExp(searchString)),
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

  var parent$9 = includes$5;

  var includes$4 = parent$9;

  var parent$8 = includes$4;

  var includes$3 = parent$8;

  var parent$7 = includes$3;

  var includes$2 = parent$7;

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

  var $$3 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var isArray = isArray$d;

  var nativeReverse = uncurryThis$3([].reverse);
  var test = [1, 2];

  // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  $$3({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
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

  var parent$6 = reverse$5;

  var reverse$4 = parent$6;

  var parent$5 = reverse$4;

  var reverse$3 = parent$5;

  var parent$4 = reverse$3;

  var reverse$2 = parent$4;

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

  var fails$1 = fails$u;
  var wellKnownSymbol$1 = wellKnownSymbol$q;
  var DESCRIPTORS$2 = descriptors;
  var IS_PURE = isPure;

  var ITERATOR$1 = wellKnownSymbol$1('iterator');

  var urlConstructorDetection = !fails$1(function () {
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
      || (!searchParams.size && (IS_PURE || !DESCRIPTORS$2))
      || !searchParams.sort
      || url.href !== 'http://a/c%20d?a=1&c=3'
      || searchParams.get('c') !== '3'
      || String(new URLSearchParams('?a=1')) !== 'a=1'
      || !searchParams[ITERATOR$1]
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
  var uncurryThis$2 = functionUncurryThis;

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
  var exec$1 = uncurryThis$2(regexSeparators.exec);
  var floor$2 = Math.floor;
  var fromCharCode = String.fromCharCode;
  var charCodeAt = uncurryThis$2(''.charCodeAt);
  var join$2 = uncurryThis$2([].join);
  var push$2 = uncurryThis$2([].push);
  var replace$2 = uncurryThis$2(''.replace);
  var split$2 = uncurryThis$2(''.split);
  var toLowerCase$1 = uncurryThis$2(''.toLowerCase);

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

  var arraySlice$1 = arraySliceSimple;

  var floor$1 = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor$1(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(
      array,
      mergeSort(arraySlice$1(array, 0, middle), comparefn),
      mergeSort(arraySlice$1(array, middle), comparefn),
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

  var $$2 = _export;
  var global$2 = global$n;
  var call = functionCall;
  var uncurryThis$1 = functionUncurryThis;
  var DESCRIPTORS$1 = descriptors;
  var USE_NATIVE_URL$2 = urlConstructorDetection;
  var defineBuiltIn$1 = defineBuiltIn$8;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$5;
  var defineBuiltIns = defineBuiltIns$2;
  var setToStringTag$1 = setToStringTag$9;
  var createIteratorConstructor = iteratorCreateConstructor;
  var InternalStateModule$1 = internalState;
  var anInstance$1 = anInstance$5;
  var isCallable = isCallable$p;
  var hasOwn$1 = hasOwnProperty_1;
  var bind$1 = functionBindContext;
  var classof = classof$c;
  var anObject = anObject$f;
  var isObject = isObject$j;
  var $toString$1 = toString$a;
  var create = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$8;
  var getIterator = getIterator$3;
  var getIteratorMethod = getIteratorMethod$a;
  var validateArgumentsLength$2 = validateArgumentsLength$4;
  var wellKnownSymbol = wellKnownSymbol$q;
  var arraySort = arraySort$1;

  var ITERATOR = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn = function (name) {
    if (!DESCRIPTORS$1) return global$2[name];
    var descriptor = getOwnPropertyDescriptor(global$2, name);
    return descriptor && descriptor.value;
  };

  var nativeFetch = safeGetBuiltIn('fetch');
  var NativeRequest = safeGetBuiltIn('Request');
  var Headers = safeGetBuiltIn('Headers');
  var RequestPrototype = NativeRequest && NativeRequest.prototype;
  var HeadersPrototype = Headers && Headers.prototype;
  var RegExp$1 = global$2.RegExp;
  var TypeError$2 = global$2.TypeError;
  var decodeURIComponent = global$2.decodeURIComponent;
  var encodeURIComponent$1 = global$2.encodeURIComponent;
  var charAt$1 = uncurryThis$1(''.charAt);
  var join$1 = uncurryThis$1([].join);
  var push$1 = uncurryThis$1([].push);
  var replace$1 = uncurryThis$1(''.replace);
  var shift$1 = uncurryThis$1([].shift);
  var splice = uncurryThis$1([].splice);
  var split$1 = uncurryThis$1(''.split);
  var stringSlice$1 = uncurryThis$1(''.slice);

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
      else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$1(init));
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
    if (!DESCRIPTORS$1) this.length = state.entries.length;
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  defineBuiltIns(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength$2(arguments.length, 2);
      var state = getInternalParamsState(this);
      push$1(state.entries, { key: $toString$1(name), value: $toString$1(value) });
      if (!DESCRIPTORS$1) this.length++;
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function (name) {
      validateArgumentsLength$2(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = $toString$1(name);
      var index = 0;
      while (index < entries.length) {
        if (entries[index].key === key) splice(entries, index, 1);
        else index++;
      }
      if (!DESCRIPTORS$1) this.length = entries.length;
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength$2(arguments.length, 1);
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
      validateArgumentsLength$2(arguments.length, 1);
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
      validateArgumentsLength$2(arguments.length, 1);
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
      validateArgumentsLength$2(arguments.length, 1);
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
      if (!DESCRIPTORS$1) this.length = entries.length;
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
  defineBuiltIn$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  defineBuiltIn$1(URLSearchParamsPrototype, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
  }, { enumerable: true });

  // `URLSearchParams.prototype.size` getter
  // https://github.com/whatwg/url/pull/734
  if (DESCRIPTORS$1) defineBuiltInAccessor$1(URLSearchParamsPrototype, 'size', {
    get: function size() {
      return getInternalParamsState(this).entries.length;
    },
    configurable: true,
    enumerable: true
  });

  setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  $$2({ global: true, constructor: true, forced: !USE_NATIVE_URL$2 }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  if (!USE_NATIVE_URL$2 && isCallable(Headers)) {
    var headersHas = uncurryThis$1(HeadersPrototype.has);
    var headersSet = uncurryThis$1(HeadersPrototype.set);

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

    if (isCallable(nativeFetch)) {
      $$2({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
        fetch: function fetch(input /* , init */) {
          return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (isCallable(NativeRequest)) {
      var RequestConstructor = function Request(input /* , init */) {
        anInstance$1(this, RequestPrototype);
        return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;

      $$2({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams_constructor = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var $$1 = _export;
  var DESCRIPTORS = descriptors;
  var USE_NATIVE_URL$1 = urlConstructorDetection;
  var global$1 = global$n;
  var bind = functionBindContext;
  var uncurryThis = functionUncurryThis;
  var defineBuiltIn = defineBuiltIn$8;
  var defineBuiltInAccessor = defineBuiltInAccessor$5;
  var anInstance = anInstance$5;
  var hasOwn = hasOwnProperty_1;
  var assign = objectAssign;
  var arrayFrom = arrayFrom$1;
  var arraySlice = arraySliceSimple;
  var codeAt = stringMultibyte.codeAt;
  var toASCII = stringPunycodeToAscii;
  var $toString = toString$a;
  var setToStringTag = setToStringTag$9;
  var validateArgumentsLength$1 = validateArgumentsLength$4;
  var URLSearchParamsModule = web_urlSearchParams_constructor;
  var InternalStateModule = internalState;

  var setInternalState = InternalStateModule.set;
  var getInternalURLState = InternalStateModule.getterFor('URL');
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
  var getInternalSearchParamsState = URLSearchParamsModule.getState;

  var NativeURL = global$1.URL;
  var TypeError$1 = global$1.TypeError;
  var parseInt$1 = global$1.parseInt;
  var floor = Math.floor;
  var pow = Math.pow;
  var charAt = uncurryThis(''.charAt);
  var exec = uncurryThis(/./.exec);
  var join = uncurryThis([].join);
  var numberToString = uncurryThis(1.0.toString);
  var pop = uncurryThis([].pop);
  var push = uncurryThis([].push);
  var replace = uncurryThis(''.replace);
  var shift = uncurryThis([].shift);
  var split = uncurryThis(''.split);
  var stringSlice = uncurryThis(''.slice);
  var toLowerCase = uncurryThis(''.toLowerCase);
  var unshift = uncurryThis([].unshift);

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
      if (part.length > 1 && charAt(part, 0) == '0') {
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
      return charAt(input, pointer);
    };

    if (chr() == ':') {
      if (charAt(input, 1) != ':') return;
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
    return string.length == 2 && exec(ALPHA, charAt(string, 0))
      && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));
  };

  // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
  var startsWithWindowsDriveLetter = function (string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
      string.length == 2 ||
      ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
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
              url.path = arraySlice(base.path);
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
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
              state = RELATIVE_SLASH;
            } else if (chr == '?') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
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
            if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
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
                url.path = arraySlice(base.path);
                url.query = base.query;
              } else if (chr == '?') {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySlice(base.path);
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
            if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
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
                  buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
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
      if (charAt(input, 0) == '[') {
        if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
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
        if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
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
      if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
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
    var base = validateArgumentsLength$1(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState(that, new URLState(url, false, base));
    if (!DESCRIPTORS) {
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

  if (DESCRIPTORS) {
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

  $$1({ global: true, constructor: true, forced: !USE_NATIVE_URL$1, sham: !DESCRIPTORS }, {
    URL: URLConstructor
  });

  var $ = _export;
  var getBuiltIn = getBuiltIn$h;
  var fails = fails$u;
  var validateArgumentsLength = validateArgumentsLength$4;
  var toString = toString$a;
  var USE_NATIVE_URL = urlConstructorDetection;

  var URL$1 = getBuiltIn('URL');

  // https://github.com/nodejs/node/issues/47505
  // https://github.com/denoland/deno/issues/18893
  var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function () {
    URL$1.canParse();
  });

  // `URL.canParse` method
  // https://url.spec.whatwg.org/#dom-url-canparse
  $({ target: 'URL', stat: true, forced: !THROWS_WITHOUT_ARGUMENTS }, {
    canParse: function canParse(url) {
      var length = validateArgumentsLength(arguments.length, 1);
      var urlString = toString(url);
      var base = length < 2 || arguments[1] === undefined ? undefined : toString(arguments[1]);
      try {
        return !!new URL$1(urlString, base);
      } catch (error) {
        return false;
      }
    }
  });

  var path = path$h;

  var url$5 = path.URL;

  var parent$3 = url$5;

  var url$4 = parent$3;

  var parent$2 = url$4;

  var url$3 = parent$2;

  var parent$1 = url$3;

  var url$2 = parent$1;

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

  var MediaPlayer = /*#__PURE__*/_createClass(function MediaPlayer() {
    _classCallCheck(this, MediaPlayer);
  });

  var css_248z$1 = ".video-container {\n  position: relative;\n  overflow: hidden;\n}\n.video-container .video-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.video-container .video-wrapper video {\n  width: 100%;\n  height: 100%;\n}\n";
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
        this.video = $$H('video');
        this.attendSource(this.playerOptions.url);
        this.el.appendChild(this.video);
        this.toolBar = new ToolBar(this, this.el, 'div');
        this.initEvent();
        this.initPlugin();
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
        new MediaPlayer();
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
      key: "attendSource",
      value: function attendSource(url) {
        switch (getFileExtension(url)) {
          case 'mp4':
          case 'mp3':
            this.initMp4Player(url);
          case 'mpd':
            this.initMpdPlayer(url);
          // ToDo
        }
      }
    }, {
      key: "registerControls",
      value: function registerControls(id, component) {
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
          this.toolBar.controller.settings.appendChild(component.el);
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
