
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

  var defineProperty$c = {exports: {}};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$j =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var fails$o = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$n = fails$o;

  var functionBindNative = !fails$n(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$4 = functionBindNative;

  var FunctionPrototype$3 = Function.prototype;
  var apply$4 = FunctionPrototype$3.apply;
  var call$k = FunctionPrototype$3.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$k.bind(apply$4) : function () {
    return call$k.apply(apply$4, arguments);
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$j = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$j, call$j);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$j.apply(fn, arguments);
    };
  };

  var uncurryThis$r = functionUncurryThis;

  var toString$b = uncurryThis$r({}.toString);
  var stringSlice$1 = uncurryThis$r(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$1(toString$b(it), 8, -1);
  };

  var classofRaw$1 = classofRaw$2;
  var uncurryThis$q = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw$1(fn) === 'Function') return uncurryThis$q(fn);
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
  var isCallable$k = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var objectGetOwnPropertyDescriptor = {};

  var fails$m = fails$o;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$m(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$i = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$i.bind(call$i) : function () {
    return call$i.apply(call$i, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var createPropertyDescriptor$7 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var uncurryThis$p = functionUncurryThis;
  var fails$l = fails$o;
  var classof$c = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$p(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$l(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$c(it) == 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$4 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$3 = isNullOrUndefined$4;

  var $TypeError$e = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$5 = function (it) {
    if (isNullOrUndefined$3(it)) throw $TypeError$e("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$4 = requireObjectCoercible$5;

  var toIndexedObject$8 = function (it) {
    return IndexedObject$2(requireObjectCoercible$4(it));
  };

  var isCallable$j = isCallable$k;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$f = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$j(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$j(it);
  };

  var path$f = {};

  var path$e = path$f;
  var global$i = global$j;
  var isCallable$i = isCallable$k;

  var aFunction = function (variable) {
    return isCallable$i(variable) ? variable : undefined;
  };

  var getBuiltIn$f = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path$e[namespace]) || aFunction(global$i[namespace])
      : path$e[namespace] && path$e[namespace][method] || global$i[namespace] && global$i[namespace][method];
  };

  var uncurryThis$o = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$o({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$h = global$j;
  var userAgent$3 = engineUserAgent;

  var process$4 = global$h.process;
  var Deno$1 = global$h.Deno;
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
  var fails$k = fails$o;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$k(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$5 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$5
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$e = getBuiltIn$f;
  var isCallable$h = isCallable$k;
  var isPrototypeOf$c = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$e('Symbol');
    return isCallable$h($Symbol) && isPrototypeOf$c($Symbol.prototype, $Object$3(it));
  };

  var $String$4 = String;

  var tryToString$5 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$g = isCallable$k;
  var tryToString$4 = tryToString$5;

  var $TypeError$d = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$b = function (argument) {
    if (isCallable$g(argument)) return argument;
    throw $TypeError$d(tryToString$4(argument) + ' is not a function');
  };

  var aCallable$a = aCallable$b;
  var isNullOrUndefined$2 = isNullOrUndefined$4;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$3 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$2(func) ? undefined : aCallable$a(func);
  };

  var call$h = functionCall;
  var isCallable$f = isCallable$k;
  var isObject$e = isObject$f;

  var $TypeError$c = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$f(fn = input.toString) && !isObject$e(val = call$h(fn, input))) return val;
    if (isCallable$f(fn = input.valueOf) && !isObject$e(val = call$h(fn, input))) return val;
    if (pref !== 'string' && isCallable$f(fn = input.toString) && !isObject$e(val = call$h(fn, input))) return val;
    throw $TypeError$c("Can't convert object to primitive value");
  };

  var shared$7 = {exports: {}};

  var isPure = true;

  var global$g = global$j;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$b = Object.defineProperty;

  var defineGlobalProperty$1 = function (key, value) {
    try {
      defineProperty$b(global$g, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$g[key] = value;
    } return value;
  };

  var global$f = global$j;
  var defineGlobalProperty = defineGlobalProperty$1;

  var SHARED = '__core-js_shared__';
  var store$3 = global$f[SHARED] || defineGlobalProperty(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$7.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.1',
    mode: 'pure' ,
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$7.exports;

  var requireObjectCoercible$3 = requireObjectCoercible$5;

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$8 = function (argument) {
    return $Object$2(requireObjectCoercible$3(argument));
  };

  var uncurryThis$n = functionUncurryThis;
  var toObject$7 = toObject$8;

  var hasOwnProperty = uncurryThis$n({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$7(it), key);
  };

  var uncurryThis$m = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$a = uncurryThis$m(1.0.toString);

  var uid$3 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$a(++id + postfix, 36);
  };

  var global$e = global$j;
  var shared$6 = sharedExports;
  var hasOwn$f = hasOwnProperty_1;
  var uid$2 = uid$3;
  var NATIVE_SYMBOL$4 = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$4 = global$e.Symbol;
  var WellKnownSymbolsStore$2 = shared$6('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$4['for'] || Symbol$4 : Symbol$4 && Symbol$4.withoutSetter || uid$2;

  var wellKnownSymbol$o = function (name) {
    if (!hasOwn$f(WellKnownSymbolsStore$2, name)) {
      WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$f(Symbol$4, name)
        ? Symbol$4[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore$2[name];
  };

  var call$g = functionCall;
  var isObject$d = isObject$f;
  var isSymbol$4 = isSymbol$5;
  var getMethod$2 = getMethod$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$n = wellKnownSymbol$o;

  var $TypeError$b = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$n('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$7 = function (input, pref) {
    if (!isObject$d(input) || isSymbol$4(input)) return input;
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$g(exoticToPrim, input, pref);
      if (!isObject$d(result) || isSymbol$4(result)) return result;
      throw $TypeError$b("Can't convert object to primitive value");
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

  var global$d = global$j;
  var isObject$c = isObject$f;

  var document$3 = global$d.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$c(document$3) && isObject$c(document$3.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$b = descriptors;
  var fails$j = fails$o;
  var createElement$1 = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$b && !fails$j(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$a = descriptors;
  var call$f = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$6 = createPropertyDescriptor$7;
  var toIndexedObject$7 = toIndexedObject$8;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$e = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$a ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$7(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$e(O, P)) return createPropertyDescriptor$6(!call$f(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };

  var fails$i = fails$o;
  var isCallable$e = isCallable$k;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$e(detection) ? fails$i(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var uncurryThis$l = functionUncurryThisClause;
  var aCallable$9 = aCallable$b;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$g = uncurryThis$l(uncurryThis$l.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$9(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$g(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$9 = descriptors;
  var fails$h = fails$o;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$9 && fails$h(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$b = isObject$f;

  var $String$3 = String;
  var $TypeError$a = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$d = function (argument) {
    if (isObject$b(argument)) return argument;
    throw $TypeError$a($String$3(argument) + ' is not an object');
  };

  var DESCRIPTORS$8 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$c = anObject$d;
  var toPropertyKey$2 = toPropertyKey$4;

  var $TypeError$9 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$1 = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$8 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$c(O);
    P = toPropertyKey$2(P);
    anObject$c(Attributes);
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
    anObject$c(O);
    P = toPropertyKey$2(P);
    anObject$c(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$9('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$7 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$5 = createPropertyDescriptor$7;

  var createNonEnumerableProperty$8 = DESCRIPTORS$7 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$c = global$j;
  var apply$3 = functionApply;
  var uncurryThis$k = functionUncurryThisClause;
  var isCallable$d = isCallable$k;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var isForced$1 = isForced_1;
  var path$d = path$f;
  var bind$f = functionBindContext;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
  var hasOwn$d = hasOwnProperty_1;

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

    var nativeSource = GLOBAL ? global$c : STATIC ? global$c[TARGET] : (global$c[TARGET] || {}).prototype;

    var target = GLOBAL ? path$d : path$d[TARGET] || createNonEnumerableProperty$7(path$d, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;

    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

    for (key in source) {
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && hasOwn$d(nativeSource, key);

      targetProperty = target[key];

      if (USE_NATIVE) if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else nativeProperty = nativeSource[key];

      // export native or implementation
      sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

      if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

      // bind methods to global for calling from export context
      if (options.bind && USE_NATIVE) resultProperty = bind$f(sourceProperty, global$c);
      // wrap global constructors for prevent changes in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
      // make static versions for prototype methods
      else if (PROTO && isCallable$d(sourceProperty)) resultProperty = uncurryThis$k(sourceProperty);
      // default case
      else resultProperty = sourceProperty;

      // add a flag to not completely full polyfills
      if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$7(resultProperty, 'sham', true);
      }

      createNonEnumerableProperty$7(target, key, resultProperty);

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
        if (!hasOwn$d(path$d, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty$7(path$d, VIRTUAL_PROTOTYPE, {});
        }
        // export virtual prototype methods
        createNonEnumerableProperty$7(path$d[VIRTUAL_PROTOTYPE], key, sourceProperty);
        // export real prototype methods
        if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
          createNonEnumerableProperty$7(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var $$A = _export;
  var DESCRIPTORS$6 = descriptors;
  var defineProperty$a = objectDefineProperty.f;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  $$A({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$a, sham: !DESCRIPTORS$6 }, {
    defineProperty: defineProperty$a
  });

  var path$c = path$f;

  var Object$2 = path$c.Object;

  var defineProperty$9 = defineProperty$c.exports = function defineProperty(it, key, desc) {
    return Object$2.defineProperty(it, key, desc);
  };

  if (Object$2.defineProperty.sham) defineProperty$9.sham = true;

  var definePropertyExports = defineProperty$c.exports;

  var parent$12 = definePropertyExports;

  var defineProperty$8 = parent$12;

  var parent$11 = defineProperty$8;

  var defineProperty$7 = parent$11;

  var parent$10 = defineProperty$7;

  var defineProperty$6 = parent$10;

  var defineProperty$5 = defineProperty$6;

  var defineProperty$4 = defineProperty$5;

  var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$4);

  var classof$b = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$c = Array.isArray || function isArray(argument) {
    return classof$b(argument) == 'Array';
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$3 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength = toLength$1;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$7 = function (obj) {
    return toLength(obj.length);
  };

  var $TypeError$8 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$8('Maximum allowed index exceeded');
    return it;
  };

  var toPropertyKey$1 = toPropertyKey$4;
  var definePropertyModule$3 = objectDefineProperty;
  var createPropertyDescriptor$4 = createPropertyDescriptor$7;

  var createProperty$4 = function (object, key, value) {
    var propertyKey = toPropertyKey$1(key);
    if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$4(0, value));
    else object[propertyKey] = value;
  };

  var wellKnownSymbol$m = wellKnownSymbol$o;

  var TO_STRING_TAG$4 = wellKnownSymbol$m('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$4] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$c = isCallable$k;
  var classofRaw = classofRaw$2;
  var wellKnownSymbol$l = wellKnownSymbol$o;

  var TO_STRING_TAG$3 = wellKnownSymbol$l('toStringTag');
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
  var classof$a = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable$c(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$j = functionUncurryThis;
  var isCallable$b = isCallable$k;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$j(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$b(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var uncurryThis$i = functionUncurryThis;
  var fails$g = fails$o;
  var isCallable$a = isCallable$k;
  var classof$9 = classof$a;
  var getBuiltIn$d = getBuiltIn$f;
  var inspectSource$1 = inspectSource$2;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct$7 = getBuiltIn$d('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$2 = uncurryThis$i(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$a(argument)) return false;
    try {
      construct$7(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$a(argument)) return false;
    switch (classof$9(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$4 = !construct$7 || fails$g(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$b = isArray$c;
  var isConstructor$3 = isConstructor$4;
  var isObject$a = isObject$f;
  var wellKnownSymbol$k = wellKnownSymbol$o;

  var SPECIES$5 = wellKnownSymbol$k('species');
  var $Array$3 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$b(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$3(C) && (C === $Array$3 || isArray$b(C.prototype))) C = undefined;
      else if (isObject$a(C)) {
        C = C[SPECIES$5];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$3 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$f = fails$o;
  var wellKnownSymbol$j = wellKnownSymbol$o;
  var V8_VERSION$2 = engineV8Version;

  var SPECIES$4 = wellKnownSymbol$j('species');

  var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$f(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$4] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$z = _export;
  var fails$e = fails$o;
  var isArray$a = isArray$c;
  var isObject$9 = isObject$f;
  var toObject$6 = toObject$8;
  var lengthOfArrayLike$6 = lengthOfArrayLike$7;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty$3 = createProperty$4;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
  var wellKnownSymbol$i = wellKnownSymbol$o;
  var V8_VERSION$1 = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$i('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$e(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$9(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$a(O);
  };

  var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$z({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$6(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$6(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty$3(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var classof$8 = classof$a;

  var $String$2 = String;

  var toString$9 = function (argument) {
    if (classof$8(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$2(argument);
  };

  var objectDefineProperties = {};

  var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

  var max$2 = Math.max;
  var min = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$3 = function (index, length) {
    var integer = toIntegerOrInfinity$1(index);
    return integer < 0 ? max$2(integer + length, 0) : min(integer, length);
  };

  var toIndexedObject$6 = toIndexedObject$8;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3;
  var lengthOfArrayLike$5 = lengthOfArrayLike$7;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$6($this);
      var length = lengthOfArrayLike$5(O);
      var index = toAbsoluteIndex$2(fromIndex, length);
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

  var hiddenKeys$5 = {};

  var uncurryThis$h = functionUncurryThis;
  var hasOwn$c = hasOwnProperty_1;
  var toIndexedObject$5 = toIndexedObject$8;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$5;

  var push$5 = uncurryThis$h([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$5(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$c(hiddenKeys$4, key) && hasOwn$c(O, key) && push$5(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$c(O, key = names[i++])) {
      ~indexOf(result, key) || push$5(result, key);
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

  var DESCRIPTORS$5 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$2 = objectDefineProperty;
  var anObject$b = anObject$d;
  var toIndexedObject$4 = toIndexedObject$8;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$b(O);
    var props = toIndexedObject$4(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$c = getBuiltIn$f;

  var html$2 = getBuiltIn$c('document', 'documentElement');

  var shared$5 = sharedExports;
  var uid$1 = uid$3;

  var keys = shared$5('keys');

  var sharedKey$4 = function (key) {
    return keys[key] || (keys[key] = uid$1(key));
  };

  /* global ActiveXObject -- old IE, WSH */

  var anObject$a = anObject$d;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$3 = hiddenKeys$5;
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

  hiddenKeys$3[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$a(O);
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

  var hiddenKeys$2 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys$2);
  };

  var objectGetOwnPropertyNamesExternal = {};

  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var lengthOfArrayLike$4 = lengthOfArrayLike$7;
  var createProperty$2 = createProperty$4;

  var $Array$2 = Array;
  var max$1 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$4(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
    var result = $Array$2(max$1(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty$2(result, n, O[k]);
    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$7 = classofRaw$2;
  var toIndexedObject$3 = toIndexedObject$8;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$4 = arraySliceSimple;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$4(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$7(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames$1(toIndexedObject$3(it));
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;

  var defineBuiltIn$5 = function (target, key, value, options) {
    if (options && options.enumerable) target[key] = value;
    else createNonEnumerableProperty$6(target, key, value);
    return target;
  };

  var defineProperty$3 = objectDefineProperty;

  var defineBuiltInAccessor$2 = function (target, name, descriptor) {
    return defineProperty$3.f(target, name, descriptor);
  };

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$h = wellKnownSymbol$o;

  wellKnownSymbolWrapped.f = wellKnownSymbol$h;

  var path$b = path$f;
  var hasOwn$b = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$2 = objectDefineProperty.f;

  var wellKnownSymbolDefine = function (NAME) {
    var Symbol = path$b.Symbol || (path$b.Symbol = {});
    if (!hasOwn$b(Symbol, NAME)) defineProperty$2(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var call$e = functionCall;
  var getBuiltIn$b = getBuiltIn$f;
  var wellKnownSymbol$g = wellKnownSymbol$o;
  var defineBuiltIn$4 = defineBuiltIn$5;

  var symbolDefineToPrimitive = function () {
    var Symbol = getBuiltIn$b('Symbol');
    var SymbolPrototype = Symbol && Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol$g('toPrimitive');

    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
      // eslint-disable-next-line no-unused-vars -- required for .length
      defineBuiltIn$4(SymbolPrototype, TO_PRIMITIVE, function (hint) {
        return call$e(valueOf, this);
      }, { arity: 1 });
    }
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$6 = classof$a;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$6(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineProperty$1 = objectDefineProperty.f;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
  var hasOwn$a = hasOwnProperty_1;
  var toString$8 = objectToString;
  var wellKnownSymbol$f = wellKnownSymbol$o;

  var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');

  var setToStringTag$6 = function (it, TAG, STATIC, SET_METHOD) {
    if (it) {
      var target = STATIC ? it : it.prototype;
      if (!hasOwn$a(target, TO_STRING_TAG$2)) {
        defineProperty$1(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
      }
      if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
        createNonEnumerableProperty$5(target, 'toString', toString$8);
      }
    }
  };

  var global$b = global$j;
  var isCallable$9 = isCallable$k;

  var WeakMap$1 = global$b.WeakMap;

  var weakMapBasicDetection = isCallable$9(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$a = global$j;
  var isObject$8 = isObject$f;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
  var hasOwn$9 = hasOwnProperty_1;
  var shared$4 = sharedStore;
  var sharedKey$2 = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$5;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$3 = global$a.TypeError;
  var WeakMap = global$a.WeakMap;
  var set$1, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$8(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
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
    set$1 = function (it, metadata) {
      if (store.has(it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$1[STATE] = true;
    set$1 = function (it, metadata) {
      if (hasOwn$9(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$4(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$9(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$9(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var bind$e = functionBindContext;
  var uncurryThis$g = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$5 = toObject$8;
  var lengthOfArrayLike$3 = lengthOfArrayLike$7;
  var arraySpeciesCreate = arraySpeciesCreate$2;

  var push$4 = uncurryThis$g([].push);

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
      var O = toObject$5($this);
      var self = IndexedObject$1(O);
      var boundFunction = bind$e(callbackfn, that);
      var length = lengthOfArrayLike$3(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
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
            case 2: push$4(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$4(target, value);      // filterReject
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

  var $$y = _export;
  var global$9 = global$j;
  var call$d = functionCall;
  var uncurryThis$f = functionUncurryThis;
  var DESCRIPTORS$4 = descriptors;
  var NATIVE_SYMBOL$3 = symbolConstructorDetection;
  var fails$d = fails$o;
  var hasOwn$8 = hasOwnProperty_1;
  var isPrototypeOf$b = objectIsPrototypeOf;
  var anObject$9 = anObject$d;
  var toIndexedObject$2 = toIndexedObject$8;
  var toPropertyKey = toPropertyKey$4;
  var $toString = toString$9;
  var createPropertyDescriptor$3 = createPropertyDescriptor$7;
  var nativeObjectCreate = objectCreate;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$1 = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var defineBuiltIn$3 = defineBuiltIn$5;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
  var shared$3 = sharedExports;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys = hiddenKeys$5;
  var uid = uid$3;
  var wellKnownSymbol$e = wellKnownSymbol$o;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$l = wellKnownSymbolDefine;
  var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
  var setToStringTag$5 = setToStringTag$6;
  var InternalStateModule$3 = internalState;
  var $forEach$1 = arrayIteration.forEach;

  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';

  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalState$2 = InternalStateModule$3.getterFor(SYMBOL);

  var ObjectPrototype$2 = Object[PROTOTYPE];
  var $Symbol = global$9.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$2 = global$9.TypeError;
  var QObject = global$9.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  var nativeDefineProperty = definePropertyModule$1.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$3 = uncurryThis$f([].push);

  var AllSymbols = shared$3('symbols');
  var ObjectPrototypeSymbols = shared$3('op-symbols');
  var WellKnownSymbolsStore$1 = shared$3('wks');

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = DESCRIPTORS$4 && fails$d(function () {
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
    setInternalState$3(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$4) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$2) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$9(O);
    var key = toPropertyKey(P);
    anObject$9(Attributes);
    if (hasOwn$8(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$8(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$8(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$9(O);
    var properties = toIndexedObject$2(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$4 || call$d($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = call$d(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$2 && hasOwn$8(AllSymbols, P) && !hasOwn$8(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$8(this, P) || !hasOwn$8(AllSymbols, P) || hasOwn$8(this, HIDDEN) && this[HIDDEN][P]
      ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$2(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype$2 && hasOwn$8(AllSymbols, key) && !hasOwn$8(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwn$8(AllSymbols, key) && !(hasOwn$8(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$8(AllSymbols, key) && !hasOwn$8(hiddenKeys, key)) push$3(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function (O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (hasOwn$8(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$8(ObjectPrototype$2, key))) {
        push$3(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$3) {
    $Symbol = function Symbol() {
      if (isPrototypeOf$b(SymbolPrototype, this)) throw TypeError$2('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype$2) call$d(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$8(this, HIDDEN) && hasOwn$8(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$3(1, value));
      };
      if (DESCRIPTORS$4 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    SymbolPrototype = $Symbol[PROTOTYPE];

    defineBuiltIn$3(SymbolPrototype, 'toString', function toString() {
      return getInternalState$2(this).tag;
    });

    defineBuiltIn$3($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });

    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule$1.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$e(name), name);
    };

    if (DESCRIPTORS$4) {
      // https://github.com/tc39/proposal-Symbol-description
      defineBuiltInAccessor$1(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$2(this).description;
        }
      });
    }
  }

  $$y({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
    Symbol: $Symbol
  });

  $forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol$l(name);
  });

  $$y({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  $$y({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$4 }, {
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

  $$y({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames
  });

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive$1();

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$5($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var NATIVE_SYMBOL$2 = symbolConstructorDetection;

  /* eslint-disable es/no-symbol -- safe */
  var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

  var $$x = _export;
  var getBuiltIn$a = getBuiltIn$f;
  var hasOwn$7 = hasOwnProperty_1;
  var toString$7 = toString$9;
  var shared$2 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

  var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  $$x({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
    'for': function (key) {
      var string = toString$7(key);
      if (hasOwn$7(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = getBuiltIn$a('Symbol')(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry$1[symbol] = string;
      return symbol;
    }
  });

  var $$w = _export;
  var hasOwn$6 = hasOwnProperty_1;
  var isSymbol$2 = isSymbol$5;
  var tryToString$3 = tryToString$5;
  var shared$1 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

  var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  $$w({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
    keyFor: function keyFor(sym) {
      if (!isSymbol$2(sym)) throw TypeError(tryToString$3(sym) + ' is not a symbol');
      if (hasOwn$6(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
  });

  var uncurryThis$e = functionUncurryThis;

  var arraySlice$3 = uncurryThis$e([].slice);

  var uncurryThis$d = functionUncurryThis;
  var isArray$9 = isArray$c;
  var isCallable$8 = isCallable$k;
  var classof$5 = classofRaw$2;
  var toString$6 = toString$9;

  var push$2 = uncurryThis$d([].push);

  var getJsonReplacerFunction = function (replacer) {
    if (isCallable$8(replacer)) return replacer;
    if (!isArray$9(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$2(keys, element);
      else if (typeof element == 'number' || classof$5(element) == 'Number' || classof$5(element) == 'String') push$2(keys, toString$6(element));
    }
    var keysLength = keys.length;
    var root = true;
    return function (key, value) {
      if (root) {
        root = false;
        return value;
      }
      if (isArray$9(this)) return value;
      for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
    };
  };

  var $$v = _export;
  var getBuiltIn$9 = getBuiltIn$f;
  var apply$2 = functionApply;
  var call$c = functionCall;
  var uncurryThis$c = functionUncurryThis;
  var fails$c = fails$o;
  var isCallable$7 = isCallable$k;
  var isSymbol$1 = isSymbol$5;
  var arraySlice$2 = arraySlice$3;
  var getReplacerFunction = getJsonReplacerFunction;
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var $String$1 = String;
  var $stringify = getBuiltIn$9('JSON', 'stringify');
  var exec$1 = uncurryThis$c(/./.exec);
  var charAt$2 = uncurryThis$c(''.charAt);
  var charCodeAt$1 = uncurryThis$c(''.charCodeAt);
  var replace$2 = uncurryThis$c(''.replace);
  var numberToString = uncurryThis$c(1.0.toString);

  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$c(function () {
    var symbol = getBuiltIn$9('Symbol')();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails$c(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify('\uDEAD') !== '"\\udead"';
  });

  var stringifyWithSymbolsFix = function (it, replacer) {
    var args = arraySlice$2(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$7($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$7($replacer)) value = call$c($replacer, this, $String$1(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply$2($stringify, null, args);
  };

  var fixIllFormed = function (match, offset, string) {
    var prev = charAt$2(string, offset - 1);
    var next = charAt$2(string, offset + 1);
    if ((exec$1(low, match) && !exec$1(hi, next)) || (exec$1(hi, match) && !exec$1(low, prev))) {
      return '\\u' + numberToString(charCodeAt$1(match, 0), 16);
    } return match;
  };

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $$v({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$2(arguments);
        var result = apply$2(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$2(result, tester, fixIllFormed) : result;
      }
    });
  }

  var $$u = _export;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var fails$b = fails$o;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var toObject$4 = toObject$8;

  // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FORCED$2 = !NATIVE_SYMBOL || fails$b(function () { getOwnPropertySymbolsModule$2.f(1); });

  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  $$u({ target: 'Object', stat: true, forced: FORCED$2 }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      var $getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
      return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$4(it)) : [];
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

  var getBuiltIn$8 = getBuiltIn$f;
  var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
  var setToStringTag$4 = setToStringTag$6;

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol$9('toStringTag');

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$4(getBuiltIn$8('Symbol'), 'Symbol');

  var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

  // `Symbol.unscopables` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.unscopables
  defineWellKnownSymbol$8('unscopables');

  var global$8 = global$j;
  var setToStringTag$3 = setToStringTag$6;

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag$3(global$8.JSON, 'JSON', true);

  var path$a = path$f;

  var symbol$5 = path$a.Symbol;

  var iterators = {};

  var DESCRIPTORS$3 = descriptors;
  var hasOwn$5 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$5(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var fails$a = fails$o;

  var correctPrototypeGetter = !fails$a(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$4 = hasOwnProperty_1;
  var isCallable$6 = isCallable$k;
  var toObject$3 = toObject$8;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype$1 = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function (O) {
    var object = toObject$3(O);
    if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$6(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype$1 : null;
  };

  var fails$9 = fails$o;
  var isCallable$5 = isCallable$k;
  var isObject$7 = isObject$f;
  var create$a = objectCreate;
  var getPrototypeOf$8 = objectGetPrototypeOf;
  var defineBuiltIn$2 = defineBuiltIn$5;
  var wellKnownSymbol$d = wellKnownSymbol$o;

  var ITERATOR$5 = wellKnownSymbol$d('iterator');
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

  var NEW_ITERATOR_PROTOTYPE = !isObject$7(IteratorPrototype$1) || fails$9(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$1[ITERATOR$5].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
  else IteratorPrototype$1 = create$a(IteratorPrototype$1);

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$5(IteratorPrototype$1[ITERATOR$5])) {
    defineBuiltIn$2(IteratorPrototype$1, ITERATOR$5, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$1,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var create$9 = objectCreate;
  var createPropertyDescriptor$2 = createPropertyDescriptor$7;
  var setToStringTag$2 = setToStringTag$6;
  var Iterators$5 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$9(IteratorPrototype, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
    setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators$5[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$b = functionUncurryThis;
  var aCallable$8 = aCallable$b;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$b(aCallable$8(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable$4 = isCallable$k;

  var $String = String;
  var $TypeError$7 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$4(argument)) return argument;
    throw $TypeError$7("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$8 = anObject$d;
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
      anObject$8(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$t = _export;
  var call$b = functionCall;
  var FunctionName = functionName;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf$7 = objectGetPrototypeOf;
  var setToStringTag$1 = setToStringTag$6;
  var defineBuiltIn$1 = defineBuiltIn$5;
  var wellKnownSymbol$c = wellKnownSymbol$o;
  var Iterators$4 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  FunctionName.CONFIGURABLE;
  IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol$c('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

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
    var nativeIterator = IterablePrototype[ITERATOR$4]
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
        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        Iterators$4[TO_STRING_TAG] = returnThis;
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$b(nativeIterator, this); };
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
          defineBuiltIn$1(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$t({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if ((FORCED) && IterablePrototype[ITERATOR$4] !== defaultIterator) {
      defineBuiltIn$1(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
    }
    Iterators$4[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$2 = function (value, done) {
    return { value: value, done: done };
  };

  var toIndexedObject$1 = toIndexedObject$8;
  var Iterators$3 = iterators;
  var InternalStateModule$2 = internalState;
  objectDefineProperty.f;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$1 = createIterResultObject$2;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState$1 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);

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
  defineIterator$1(Array, 'Array', function (iterated, kind) {
    setInternalState$2(this, {
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
      return createIterResultObject$1(undefined, true);
    }
    if (kind == 'keys') return createIterResultObject$1(index, false);
    if (kind == 'values') return createIterResultObject$1(target[index], false);
    return createIterResultObject$1([index, target[index]], false);
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
  var global$7 = global$j;
  var classof$4 = classof$a;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;
  var Iterators$2 = iterators;
  var wellKnownSymbol$b = wellKnownSymbol$o;

  var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');

  for (var COLLECTION_NAME in DOMIterables$1) {
    var Collection = global$7[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype && classof$4(CollectionPrototype) !== TO_STRING_TAG$1) {
      createNonEnumerableProperty$3(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
    }
    Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
  }

  var parent$$ = symbol$5;


  var symbol$4 = parent$$;

  var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

  // `Symbol.dispose` well-known symbol
  // https://github.com/tc39/proposal-explicit-resource-management
  defineWellKnownSymbol$7('dispose');

  var parent$_ = symbol$4;



  var symbol$3 = parent$_;

  var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

  // `Symbol.asyncDispose` well-known symbol
  // https://github.com/tc39/proposal-async-explicit-resource-management
  defineWellKnownSymbol$6('asyncDispose');

  var $$s = _export;
  var getBuiltIn$7 = getBuiltIn$f;
  var uncurryThis$a = functionUncurryThis;

  var Symbol$3 = getBuiltIn$7('Symbol');
  var keyFor = Symbol$3.keyFor;
  var thisSymbolValue$1 = uncurryThis$a(Symbol$3.prototype.valueOf);

  // `Symbol.isRegistered` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregistered
  $$s({ target: 'Symbol', stat: true }, {
    isRegistered: function isRegistered(value) {
      try {
        return keyFor(thisSymbolValue$1(value)) !== undefined;
      } catch (error) {
        return false;
      }
    }
  });

  var $$r = _export;
  var shared = sharedExports;
  var getBuiltIn$6 = getBuiltIn$f;
  var uncurryThis$9 = functionUncurryThis;
  var isSymbol = isSymbol$5;
  var wellKnownSymbol$a = wellKnownSymbol$o;

  var Symbol$2 = getBuiltIn$6('Symbol');
  var $isWellKnown = Symbol$2.isWellKnown;
  var getOwnPropertyNames = getBuiltIn$6('Object', 'getOwnPropertyNames');
  var thisSymbolValue = uncurryThis$9(Symbol$2.prototype.valueOf);
  var WellKnownSymbolsStore = shared('wks');

  for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$2), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
    // some old engines throws on access to some keys like `arguments` or `caller`
    try {
      var symbolKey = symbolKeys[i];
      if (isSymbol(Symbol$2[symbolKey])) wellKnownSymbol$a(symbolKey);
    } catch (error) { /* empty */ }
  }

  // `Symbol.isWellKnown` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknown
  // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
  $$r({ target: 'Symbol', stat: true, forced: true }, {
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

  var parent$Z = symbol$3;






  // TODO: Remove from `core-js@4`




  var symbol$2 = parent$Z;

  var symbol$1 = symbol$2;

  var symbol = symbol$1;

  var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

  var uncurryThis$8 = functionUncurryThis;
  var toIntegerOrInfinity = toIntegerOrInfinity$3;
  var toString$5 = toString$9;
  var requireObjectCoercible$2 = requireObjectCoercible$5;

  var charAt$1 = uncurryThis$8(''.charAt);
  var charCodeAt = uncurryThis$8(''.charCodeAt);
  var stringSlice = uncurryThis$8(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$5(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$1(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice(S, position, position + 2)
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

  var charAt = stringMultibyte.charAt;
  var toString$4 = toString$9;
  var InternalStateModule$1 = internalState;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$2;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState = InternalStateModule$1.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$1(this, {
      type: STRING_ITERATOR,
      string: toString$4(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject(undefined, true);
    point = charAt(string, index);
    state.index += point.length;
    return createIterResultObject(point, false);
  });

  var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

  var iterator$5 = WrappedWellKnownSymbolModule$1.f('iterator');

  var parent$Y = iterator$5;


  var iterator$4 = parent$Y;

  var parent$X = iterator$4;

  var iterator$3 = parent$X;

  var parent$W = iterator$3;

  var iterator$2 = parent$W;

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

  var parent$V = toPrimitive$5;

  var toPrimitive$4 = parent$V;

  var parent$U = toPrimitive$4;

  var toPrimitive$3 = parent$U;

  var parent$T = toPrimitive$3;

  var toPrimitive$2 = parent$T;

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

  var fails$8 = fails$o;

  var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$8(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict = arrayMethodIsStrict$1;

  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var $$q = _export;
  var forEach$7 = arrayForEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  $$q({ target: 'Array', proto: true, forced: [].forEach != forEach$7 }, {
    forEach: forEach$7
  });

  var path$9 = path$f;

  var entryVirtual$9 = function (CONSTRUCTOR) {
    return path$9[CONSTRUCTOR + 'Prototype'];
  };

  var entryVirtual$8 = entryVirtual$9;

  var forEach$6 = entryVirtual$8('Array').forEach;

  var parent$S = forEach$6;

  var forEach$5 = parent$S;

  var classof$3 = classof$a;
  var hasOwn$3 = hasOwnProperty_1;
  var isPrototypeOf$a = objectIsPrototypeOf;
  var method$6 = forEach$5;

  var ArrayPrototype$7 = Array.prototype;

  var DOMIterables = {
    DOMTokenList: true,
    NodeList: true
  };

  var forEach$4 = function (it) {
    var own = it.forEach;
    return it === ArrayPrototype$7 || (isPrototypeOf$a(ArrayPrototype$7, it) && own === ArrayPrototype$7.forEach)
      || hasOwn$3(DOMIterables, classof$3(it)) ? method$6 : own;
  };

  var parent$R = forEach$4;

  var forEach$3 = parent$R;

  var parent$Q = forEach$3;

  var forEach$2 = parent$Q;

  var forEach$1 = forEach$2;

  var forEach = forEach$1;

  var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach);

  var entryVirtual$7 = entryVirtual$9;

  var concat$9 = entryVirtual$7('Array').concat;

  var isPrototypeOf$9 = objectIsPrototypeOf;
  var method$5 = concat$9;

  var ArrayPrototype$6 = Array.prototype;

  var concat$8 = function (it) {
    var own = it.concat;
    return it === ArrayPrototype$6 || (isPrototypeOf$9(ArrayPrototype$6, it) && own === ArrayPrototype$6.concat) ? method$5 : own;
  };

  var parent$P = concat$8;

  var concat$7 = parent$P;

  var parent$O = concat$7;

  var concat$6 = parent$O;

  var parent$N = concat$6;

  var concat$5 = parent$N;

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
    }]);
    return BaseEvent;
  }();

  function $warn(msg) {
    throw new Error(msg);
  }

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$7 = functionUncurryThis;
  var requireObjectCoercible$1 = requireObjectCoercible$5;
  var toString$3 = toString$9;
  var whitespaces$1 = whitespaces$2;

  var replace$1 = uncurryThis$7(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$3(requireObjectCoercible$1($this));
      if (TYPE & 1) string = replace$1(string, ltrim, '');
      if (TYPE & 2) string = replace$1(string, rtrim, '$1');
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

  var global$6 = global$j;
  var fails$7 = fails$o;
  var uncurryThis$6 = functionUncurryThis;
  var toString$2 = toString$9;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$2;

  var $parseInt$1 = global$6.parseInt;
  var Symbol$1 = global$6.Symbol;
  var ITERATOR$3 = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec = uncurryThis$6(hex.exec);
  var FORCED$1 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$3 && !fails$7(function () { $parseInt$1(Object(ITERATOR$3)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
    var S = trim(toString$2(string));
    return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $$p = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$p({ global: true, forced: parseInt != $parseInt }, {
    parseInt: $parseInt
  });

  var path$8 = path$f;

  var _parseInt$6 = path$8.parseInt;

  var parent$M = _parseInt$6;

  var _parseInt$5 = parent$M;

  var parent$L = _parseInt$5;

  var _parseInt$4 = parent$L;

  var parent$K = _parseInt$4;

  var _parseInt$3 = parent$K;

  var _parseInt$2 = _parseInt$3;

  var _parseInt = _parseInt$2;

  var _parseInt$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt);

  var $$o = _export;
  var isArray$8 = isArray$c;
  var isConstructor$2 = isConstructor$4;
  var isObject$6 = isObject$f;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var lengthOfArrayLike$2 = lengthOfArrayLike$7;
  var toIndexedObject = toIndexedObject$8;
  var createProperty$1 = createProperty$4;
  var wellKnownSymbol$9 = wellKnownSymbol$o;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
  var nativeSlice = arraySlice$3;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');

  var SPECIES$3 = wellKnownSymbol$9('species');
  var $Array$1 = Array;
  var max = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$o({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike$2(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$8(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor$2(Constructor) && (Constructor === $Array$1 || isArray$8(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$6(Constructor)) {
          Constructor = Constructor[SPECIES$3];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array$1 || Constructor === undefined) {
          return nativeSlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array$1 : Constructor)(max(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var entryVirtual$6 = entryVirtual$9;

  var slice$6 = entryVirtual$6('Array').slice;

  var isPrototypeOf$8 = objectIsPrototypeOf;
  var method$4 = slice$6;

  var ArrayPrototype$5 = Array.prototype;

  var slice$5 = function (it) {
    var own = it.slice;
    return it === ArrayPrototype$5 || (isPrototypeOf$8(ArrayPrototype$5, it) && own === ArrayPrototype$5.slice) ? method$4 : own;
  };

  var parent$J = slice$5;

  var slice$4 = parent$J;

  var parent$I = slice$4;

  var slice$3 = parent$I;

  var parent$H = slice$3;

  var slice$2 = parent$H;

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

  var LOADING_MASK_MAP = new Array();
  var ERROR_MASK_MAP = new Array();

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

  var icon = {
    iconfont: 'iconfont',
    'icon-bofang': 'icon-bofang',
    'icon-shezhi': 'icon-shezhi',
    'icon-yinliang': 'icon-yinliang',
    'icon-quanping': 'icon-quanping',
    'icon-cuowutishi': 'icon-cuowutishi',
    'icon-zanting': 'icon-zanting' // 暂停
  };

  var styles = {
    // 'video-container': 'player_video-container__ndwL-',
    'video-container': 'video-container',
    // 'video-wrapper': 'player_video-wrapper__zkaDS',
    'video-wrapper': 'video-wrapper',
    // 'video-controls': 'toolbar_video-controls__z6g6I',
    'video-controls': 'video-controls',
    // 'video-controls-hidden': 'toolbar_video-controls-hidden__Fyvfe',
    'video-controls-hidden': 'video-controls-hidden',
    // 'video-progress': 'progress_video-progress__QjWkP',
    'video-progress': 'video-progress',
    // 'video-pretime': 'progress_video-pretime__JInJt',
    'video-pretime': 'video-pretime',
    // 'video-buffered': 'progress_video-buffered__N25SV',
    'video-buffered': 'video-buffered',
    // 'video-completed': 'progress_video-completed__CnWX-',
    'video-completed': 'video-completed',
    // 'video-dot': 'progress_video-dot__giuCI',
    'video-dot': 'video-dot',
    // 'video-dot-hidden': 'progress_video-dot-hidden__SceSE',
    'video-dot-hidden': 'video-dot-hidden',
    // 'video-play': 'controller_video-play__fP3BY',
    'video-play': 'video-play',
    // 'video-subplay': 'controller_video-subplay__WTnV2',
    'video-subplay': 'video-subplay',
    // 'video-start-pause': 'controller_video-start-pause__MAW2N',
    'video-start-pause': 'video-start-pause',
    // 'video-duration': 'controller_video-duration__4mxGN',
    'video-duration': 'video-duration',
    // 'video-duration-completed': 'controller_video-duration-completed__aKEo3',
    'video-duration-completed': 'video-duration-completed',
    // 'video-settings': 'controller_video-settings__vL60f',
    'video-settings': 'video-settings',
    // 'video-subsettings': 'controller_video-subsettings__lRckv',
    'video-subsettings': 'video-subsetting',
    // 'video-volume': 'controller_video-volume__6xzJB',
    'video-volume': 'video-volume',
    // 'video-volume-progress': 'controller_video-volume-progress__f4U3J',
    'video-volume-progress': 'video-volume-progress',
    // 'video-volume-completed': 'controller_video-volume-completed__R0FaX',
    'video-volume-completed': 'video-volume-completed',
    // 'video-volume-dot': 'pregress_video-dot__giuCI',
    'video-volume-dot': 'video-volume-dot',
    // 'video-fullscreen': 'controller_video-fullscreen__1-aJA',
    'video-fullscreen': 'video-fullscreen',
    // 'video-duration-all': 'controller_video-duration-all__MOXNR',
    'video-duration-all': 'video-duration-all',
    'loading-mask': 'loading-mask',
    'loading-container': 'loading-container',
    'loading-item': 'loading-item',
    'loading-title': 'loading-title',
    'error-mask': 'error-mask',
    'error-container': 'error-container',
    'error-item': 'error-item',
    'error-title': 'error-title'
  };

  var uncurryThis$5 = functionUncurryThis;
  var aCallable$7 = aCallable$b;
  var isObject$5 = isObject$f;
  var hasOwn$2 = hasOwnProperty_1;
  var arraySlice$1 = arraySlice$3;
  var NATIVE_BIND = functionBindNative;

  var $Function = Function;
  var concat$2 = uncurryThis$5([].concat);
  var join = uncurryThis$5([].join);
  var factories = {};

  var construct$6 = function (C, argsLength, args) {
    if (!hasOwn$2(factories, argsLength)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
    var F = aCallable$7(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice$1(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = concat$2(partArgs, arraySlice$1(arguments));
      return this instanceof boundFunction ? construct$6(F, args.length, args) : F.apply(that, args);
    };
    if (isObject$5(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  var isConstructor$1 = isConstructor$4;
  var tryToString$2 = tryToString$5;

  var $TypeError$6 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$2 = function (argument) {
    if (isConstructor$1(argument)) return argument;
    throw $TypeError$6(tryToString$2(argument) + ' is not a constructor');
  };

  var $$n = _export;
  var getBuiltIn$5 = getBuiltIn$f;
  var apply$1 = functionApply;
  var bind$d = functionBind;
  var aConstructor$1 = aConstructor$2;
  var anObject$7 = anObject$d;
  var isObject$4 = isObject$f;
  var create$8 = objectCreate;
  var fails$6 = fails$o;

  var nativeConstruct = getBuiltIn$5('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push$1 = [].push;

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails$6(function () {
    function F() { /* empty */ }
    return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
  });

  var ARGS_BUG = !fails$6(function () {
    nativeConstruct(function () { /* empty */ });
  });

  var FORCED = NEW_TARGET_BUG || ARGS_BUG;

  $$n({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
    construct: function construct(Target, args /* , newTarget */) {
      aConstructor$1(Target);
      anObject$7(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
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
        apply$1(push$1, $args, args);
        return new (apply$1(bind$d, Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = create$8(isObject$4(proto) ? proto : ObjectPrototype);
      var result = apply$1(Target, instance, args);
      return isObject$4(result) ? result : instance;
    }
  });

  var path$7 = path$f;

  var construct$5 = path$7.Reflect.construct;

  var parent$G = construct$5;

  var construct$4 = parent$G;

  var parent$F = construct$4;

  var construct$3 = parent$F;

  var parent$E = construct$3;

  var construct$2 = parent$E;

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
  var $$m = _export;
  var DESCRIPTORS$2 = descriptors;
  var create$7 = objectCreate;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  $$m({ target: 'Object', stat: true, sham: !DESCRIPTORS$2 }, {
    create: create$7
  });

  var path$6 = path$f;

  var Object$1 = path$6.Object;

  var create$6 = function create(P, D) {
    return Object$1.create(P, D);
  };

  var parent$D = create$6;

  var create$5 = parent$D;

  var parent$C = create$5;

  var create$4 = parent$C;

  var parent$B = create$4;

  var create$3 = parent$B;

  var create$2 = create$3;

  var create$1 = create$2;

  var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create$1);

  var $$l = _export;
  var setPrototypeOf$7 = objectSetPrototypeOf;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  $$l({ target: 'Object', stat: true }, {
    setPrototypeOf: setPrototypeOf$7
  });

  var path$5 = path$f;

  var setPrototypeOf$6 = path$5.Object.setPrototypeOf;

  var parent$A = setPrototypeOf$6;

  var setPrototypeOf$5 = parent$A;

  var parent$z = setPrototypeOf$5;

  var setPrototypeOf$4 = parent$z;

  var parent$y = setPrototypeOf$4;

  var setPrototypeOf$3 = parent$y;

  var setPrototypeOf$2 = setPrototypeOf$3;

  var setPrototypeOf$1 = setPrototypeOf$2;

  var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf$1);

  // TODO: Remove from `core-js@4`
  var $$k = _export;
  var bind$c = functionBind;

  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  $$k({ target: 'Function', proto: true, forced: Function.bind !== bind$c }, {
    bind: bind$c
  });

  var entryVirtual$5 = entryVirtual$9;

  var bind$b = entryVirtual$5('Function').bind;

  var isPrototypeOf$7 = objectIsPrototypeOf;
  var method$3 = bind$b;

  var FunctionPrototype = Function.prototype;

  var bind$a = function (it) {
    var own = it.bind;
    return it === FunctionPrototype || (isPrototypeOf$7(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method$3 : own;
  };

  var parent$x = bind$a;

  var bind$9 = parent$x;

  var parent$w = bind$9;

  var bind$8 = parent$w;

  var parent$v = bind$8;

  var bind$7 = parent$v;

  var bind$6 = bind$7;

  var bind$5 = bind$6;

  var _bindInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(bind$5);

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

  var $$j = _export;
  var fails$5 = fails$o;
  var toObject$2 = toObject$8;
  var nativeGetPrototypeOf = objectGetPrototypeOf;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var FAILS_ON_PRIMITIVES = fails$5(function () { nativeGetPrototypeOf(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $$j({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$2(it));
    }
  });

  var path$4 = path$f;

  var getPrototypeOf$6 = path$4.Object.getPrototypeOf;

  var parent$u = getPrototypeOf$6;

  var getPrototypeOf$5 = parent$u;

  var parent$t = getPrototypeOf$5;

  var getPrototypeOf$4 = parent$t;

  var parent$s = getPrototypeOf$4;

  var getPrototypeOf$3 = parent$s;

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

  var DESCRIPTORS$1 = descriptors;
  var uncurryThis$4 = functionUncurryThis;
  var call$a = functionCall;
  var fails$4 = fails$o;
  var objectKeys = objectKeys$3;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$1 = toObject$8;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty = Object.defineProperty;
  var concat$1 = uncurryThis$4([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$4(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty(this, 'b', {
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
    var T = toObject$1(target);
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
        if (!DESCRIPTORS$1 || call$a(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$i = _export;
  var assign$6 = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$i({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$6 }, {
    assign: assign$6
  });

  var path$3 = path$f;

  var assign$5 = path$3.Object.assign;

  var parent$r = assign$5;

  var assign$4 = parent$r;

  var parent$q = assign$4;

  var assign$3 = parent$q;

  var parent$p = assign$3;

  var assign$2 = parent$p;

  var assign$1 = assign$2;

  var assign = assign$1;

  var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign);

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

  var css_248z$6 = ".video-progress {\n  width: 100%;\n  height: 5px;\n  background-color: #fff;\n  cursor: pointer;\n  position: relative;\n}\n.video-progress .video-pretime {\n  position: absolute;\n  left: 0;\n  top: -18px;\n  height: 15px;\n  width: 35px;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  line-height: 15px;\n  text-align: center;\n  font-size: 10px;\n  display: none;\n}\n.video-progress .video-buffered {\n  left: 0;\n  height: 100%;\n  width: 0;\n  z-index: 1001;\n  position: absolute;\n  background-color: gray;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n}\n.video-progress .video-completed {\n  position: absolute;\n  background-color: #00aeec;\n  height: 100%;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  left: 0;\n  width: 0;\n  z-index: 1002;\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n}\n.video-progress .video-dot-hidden {\n  opacity: 0;\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n}\n.video-progress .video-dot {\n  position: absolute;\n  left: 0px;\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n  background-color: black;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  cursor: pointer;\n  z-index: 1003;\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n}\n";
  styleInject(css_248z$6);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Progress = /*#__PURE__*/function (_BaseEvent) {
    _inherits(Progress, _BaseEvent);
    var _super = _createSuper$3(Progress);
    function Progress(container) {
      var _this;
      _classCallCheck(this, Progress);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "_template", void 0);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "progress", void 0);
      _defineProperty(_assertThisInitialized(_this), "pretime", void 0);
      _defineProperty(_assertThisInitialized(_this), "bufferedProgress", void 0);
      _defineProperty(_assertThisInitialized(_this), "completedProgress", void 0);
      _defineProperty(_assertThisInitialized(_this), "dot", void 0);
      _defineProperty(_assertThisInitialized(_this), "video", void 0);
      _defineProperty(_assertThisInitialized(_this), "mouseDown", false);
      _this.container = container;
      _this.init();
      _this.initEvent();
      return _this;
    }
    _createClass(Progress, [{
      key: "template",
      get: function get() {
        return this._template;
      }
    }, {
      key: "init",
      value: function init() {
        var _context, _context2, _context3, _context4, _context5;
        this._template = _concatInstanceProperty(_context = _concatInstanceProperty(_context2 = _concatInstanceProperty(_context3 = _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = "\n      <div class=\"".concat(styles['video-progress'], "\">\n        <div class=\"")).call(_context5, styles['video-pretime'], "\">00:00</div>\n        <div class=\"")).call(_context4, styles['video-buffered'], "\"></div>\n        <div class=\"")).call(_context3, styles['video-completed'], "\"></div>\n        <div class=\"")).call(_context2, styles['video-dot'], " ")).call(_context, styles['video-dot-hidden'], "\"></div>\n      </div>\n    ");
      }
    }, {
      key: "initProgressEvent",
      value: function initProgressEvent() {
        var _this2 = this;
        this.progress.onmouseenter = function () {
          _this2.dot.className = "".concat(styles['video-dot']);
        };
        this.progress.onmouseleave = function () {
          if (!_this2.mouseDown) {
            var _context6;
            _this2.dot.className = _concatInstanceProperty(_context6 = "".concat(styles['video-dot'], " ")).call(_context6, styles['video-dot-hidden']);
          }
          _this2.pretime.style.display = 'none';
        };
        this.progress.onmousemove = function (e) {
          var scale = e.offsetX / _this2.progress.offsetWidth;
          if (scale < 0) {
            scale = 0;
          } else if (scale > 1) {
            scale = 1;
          }
          _this2.pretime.innerHTML = formatTime(_this2.video.duration * scale);
          _this2.pretime.style.display = 'block';
          _this2.pretime.style.left = e.offsetX - 17 + 'px';
          e.preventDefault();
        };
        this.progress.addEventListener('click', function (e) {
          if (e.target === _this2.dot) return;
          var scale = e.offsetX / _this2.progress.offsetWidth;
          if (scale < 0) {
            scale = 0;
          } else if (scale > 1) {
            scale = 1;
          }
          _this2.dot.style.left = _this2.progress.offsetWidth * scale - 5 + 'px';
          _this2.bufferedProgress.style.width = scale * 100 + '%';
          _this2.completedProgress.style.width = scale * 100 + '%';
          _this2.video.currentTime = Math.floor(scale * _this2.video.duration);
          if (_this2.video.paused) _this2.video.play();
        });
        this.dot.addEventListener('mousedown', function (e) {
          e.stopPropagation();
          var left = _this2.completedProgress.offsetWidth;
          var mouseX = e.pageX;
          _this2.mouseDown = true;
          document.onmousemove = function (e) {
            var scale = (e.pageX - mouseX + left) / _this2.progress.offsetWidth;
            if (scale < 0) {
              scale = 0;
            } else if (scale > 1) {
              scale = 1;
            }
            _this2.dot.style.left = _this2.progress.offsetWidth * scale - 5 + 'px';
            _this2.bufferedProgress.style.width = scale * 100 + '%';
            _this2.completedProgress.style.width = scale * 100 + '%';
            _this2.video.currentTime = Math.floor(scale * _this2.video.duration);
            if (_this2.video.paused) _this2.video.play();
            e.preventDefault();
          };
          document.onmouseup = function (e) {
            document.onmousemove = document.onmouseup = null;
            _this2.mouseDown = false;
            e.preventDefault();
          };
          e.preventDefault();
        });
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this3 = this;
        this.on('mounted', function () {
          var _context7;
          _this3.progress = _this3.container.querySelector(_concatInstanceProperty(_context7 = ".".concat(styles['video-controls'], " .")).call(_context7, styles['video-progress']));
          _this3.pretime = _this3.progress.children[0];
          _this3.bufferedProgress = _this3.progress.children[1];
          _this3.completedProgress = _this3.progress.children[2];
          _this3.dot = _this3.progress.children[3];
          _this3.video = _this3.container.querySelector('video');
          _this3.initProgressEvent();
        });
        this.on('loadedmetadata', function (summary) {
          //this.summaryTime.innerHTML = formatTime(summary)
        });
        this.on('timeupdate', function (currentTime) {
          //this.currentTime.innerHTML = formatTime(currentTime)
          // console.log('currentTime', currentTime)
          // console.log(this.video.currentTime, this.video.duration)
          var scaleCurr = _this3.video.currentTime / _this3.video.duration * 100;
          // console.log(scaleCurr) 进度
          // 首个缓冲范围的结束位置
          var scaleBuffer = (_this3.video.currentTime + _this3.video.buffered.end(0)) / _this3.video.duration * 100;
          if (scaleBuffer > 100) scaleBuffer = 100;
          _this3.completedProgress.style.width = scaleCurr + '%';
          _this3.dot.style.left = _this3.progress.offsetWidth * (scaleCurr / 100) - 5 + 'px';
          _this3.bufferedProgress.style.width = scaleBuffer + '%';
        });
      }
    }]);
    return Progress;
  }(BaseEvent);

  var css_248z$5 = ".video-play {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px 5px 0 5px;\n}\n.video-play .video-subplay {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-subplay .video-start-pause {\n  margin-right: 5px;\n  cursor: pointer;\n}\n.video-play .video-subplay .video-duration {\n  font-size: 12px;\n  margin-left: 5px;\n}\n.video-play .video-subplay .video-duration .video-duration-completed {\n  font-size: 12px;\n}\n.video-play .video-subplay .video-duration .video-duration-all {\n  font-size: 12px;\n}\n.video-play .video-settings {\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n}\n.video-play .video-settings .video-subsettings {\n  margin-right: 10px;\n}\n.video-play .video-settings .video-subsettings i {\n  cursor: pointer;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.video-play .video-settings .video-subsettings i:hover {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n}\n.video-play .video-settings .video-volume {\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-settings .video-volume i {\n  cursor: pointer;\n  font-size: 18px;\n  margin-right: 8px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.video-play .video-settings .video-volume i:hover {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n}\n.video-play .video-settings .video-volume .video-volume-progress {\n  height: 5px;\n  background-color: #fff;\n  width: 50px;\n  border-radius: 5px;\n}\n.video-play .video-settings .video-volume .video-volume-progress .video-volume-completed {\n  width: 50%;\n  background-color: #00aeec;\n  border-radius: 5px;\n  height: 100%;\n}\n.video-play .video-settings .video-fullscreen i {\n  cursor: pointer;\n  font-size: 18px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.video-play .video-settings .video-fullscreen i:hover {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n}\n";
  styleInject(css_248z$5);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Controller = /*#__PURE__*/function (_BaseEvent) {
    _inherits(Controller, _BaseEvent);
    var _super = _createSuper$2(Controller);
    function Controller(container) {
      var _this;
      _classCallCheck(this, Controller);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "_template", void 0);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "videoPlayBtn", void 0);
      _defineProperty(_assertThisInitialized(_this), "currentTime", void 0);
      _defineProperty(_assertThisInitialized(_this), "summaryTime", void 0);
      _defineProperty(_assertThisInitialized(_this), "video", void 0);
      _defineProperty(_assertThisInitialized(_this), "fullScreen", void 0);
      _this.container = container;
      _this.init();
      _this.initEvent();
      return _this;
    }
    _createClass(Controller, [{
      key: "template",
      get: function get() {
        return this._template;
      }
    }, {
      key: "init",
      value: function init() {
        var _context, _context2, _context3, _context4, _context5, _context6, _context7, _context8, _context9, _context10, _context11, _context12, _context13, _context14, _context15, _context16, _context17, _context18, _context19, _context20;
        this._template = _concatInstanceProperty(_context = _concatInstanceProperty(_context2 = _concatInstanceProperty(_context3 = _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = _concatInstanceProperty(_context6 = _concatInstanceProperty(_context7 = _concatInstanceProperty(_context8 = _concatInstanceProperty(_context9 = _concatInstanceProperty(_context10 = _concatInstanceProperty(_context11 = _concatInstanceProperty(_context12 = _concatInstanceProperty(_context13 = _concatInstanceProperty(_context14 = _concatInstanceProperty(_context15 = _concatInstanceProperty(_context16 = _concatInstanceProperty(_context17 = _concatInstanceProperty(_context18 = _concatInstanceProperty(_context19 = _concatInstanceProperty(_context20 = "\n      <div class=\"".concat(styles['video-play'], "\">\n        <div class=\"")).call(_context20, styles['video-subplay'], "\">\n            <div class=\"")).call(_context19, styles['video-start-pause'], "\">\n              <i class=\"")).call(_context18, icon['iconfont'], " ")).call(_context17, icon['icon-bofang'], "\"></i>\n            </div>\n            <div class=\"")).call(_context16, styles['video-duration'], "\">\n              <span class=\"")).call(_context15, styles['video-duration-completed'], "\">00:00</span>&nbsp;/&nbsp;<span class=\"")).call(_context14, styles['video-duration-all'], "\">00:00</span>\n            </div>\n        </div>\n        <div class=\"")).call(_context13, styles['video-settings'], "\">\n          <div class=\"")).call(_context12, styles['video-subsettings'], "\">\n            <i class=\"")).call(_context11, icon['iconfont'], " ")).call(_context10, icon['icon-shezhi'], "\"></i>\n          </div>\n          <div class=\"")).call(_context9, styles['video-volume'], "\">\n            <i class=\"")).call(_context8, icon['iconfont'], " ")).call(_context7, icon['icon-yinliang'], "\"></i>\n            <div class=\"")).call(_context6, styles['video-volume-progress'], "\">\n              <div class=\"")).call(_context5, styles['video-volume-completed'], "\"></div>\n              <div class=\"")).call(_context4, styles['video-volume-dot'], "\"></div>\n            </div>\n          </div>\n          <div class=\"")).call(_context3, styles['video-fullscreen'], "\">\n            <i class=\"")).call(_context2, icon['iconfont'], " ")).call(_context, icon['icon-quanping'], "\"></i>\n          </div>\n        </div>\n      </div>\n    ");
      }
    }, {
      key: "initControllerEvent",
      value: function initControllerEvent() {
        var _this2 = this;
        this.videoPlayBtn.onclick = function (e) {
          if (_this2.video.paused) {
            _this2.video.play();
          } else if (_this2.video.played) {
            _this2.video.pause();
          }
        };
        this.fullScreen.onclick = function () {
          if (_this2.container.requestFullscreen && !document.fullscreenElement) {
            _this2.container.requestFullscreen(); //该函数请求全屏，把一个div容器全屏
          } else if (document.fullscreenElement) {
            document.exitFullscreen(); //退出全屏函数仅仅绑定在document对象上，该点需要切记！！！
          }
        };
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this3 = this;
        this.on('play', function () {
          var _context21;
          _this3.videoPlayBtn.className = _concatInstanceProperty(_context21 = "".concat(icon['iconfont'], " ")).call(_context21, icon['icon-zanting']);
        });
        this.on('pause', function () {
          var _context22;
          _this3.videoPlayBtn.className = _concatInstanceProperty(_context22 = "".concat(icon['iconfont'], " ")).call(_context22, icon['icon-bofang']);
        });
        this.on('loadedmetadata', function (summary) {
          _this3.summaryTime.innerHTML = formatTime(summary);
        });
        this.on('timeupdate', function (currentTime) {
          _this3.currentTime.innerHTML = formatTime(currentTime);
        });
        this.on('mounted', function () {
          _this3.videoPlayBtn = _this3.container.querySelector(".".concat(styles['video-start-pause'], " i"));
          _this3.currentTime = _this3.container.querySelector(".".concat(styles['video-duration-completed']));
          _this3.summaryTime = _this3.container.querySelector(".".concat(styles['video-duration-all']));
          _this3.video = _this3.container.querySelector('video');
          _this3.fullScreen = _this3.container.querySelector(".".concat(styles['video-fullscreen'], " i"));
          _this3.initControllerEvent();
        });
      }
    }]);
    return Controller;
  }(BaseEvent);

  var css_248z$4 = ".video-controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  height: 55px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n";
  styleInject(css_248z$4);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Toolbar = /*#__PURE__*/function (_BaseEvent) {
    _inherits(Toolbar, _BaseEvent);
    var _super = _createSuper$1(Toolbar);
    function Toolbar(container) {
      var _this;
      _classCallCheck(this, Toolbar);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "_template", void 0);
      _defineProperty(_assertThisInitialized(_this), "progress", void 0);
      _defineProperty(_assertThisInitialized(_this), "controller", void 0);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "timer", void 0);
      _defineProperty(_assertThisInitialized(_this), "video", void 0);
      _this.container = container;
      _this.init();
      _this.initComponent();
      _this.initTemplate();
      _this.initEvent();
      return _this;
    }
    _createClass(Toolbar, [{
      key: "template",
      get: function get() {
        return this._template;
      }
    }, {
      key: "init",
      value: function init() {}
    }, {
      key: "initComponent",
      value: function initComponent() {
        this.progress = new Progress(this.container);
        this.controller = new Controller(this.container);
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        var _context;
        var div = document.createElement('div');
        div.className = _concatInstanceProperty(_context = "".concat(styles['video-controls'], " ")).call(_context, styles['video-controls-hidden']);
        div.innerHTML += this.progress.template;
        div.innerHTML += this.controller.template;
        this._template = div;
      }
    }, {
      key: "showToolBar",
      value: function showToolBar(e) {
        var _this2 = this;
        this.container.querySelector(".".concat(styles['video-controls'])).className = styles['video-controls'];
        if (e.target !== this.video) ; else {
          this.timer = window.setTimeout(function () {
            _this2.hideToolbar();
          }, 3000);
        }
      }
    }, {
      key: "hideToolbar",
      value: function hideToolbar() {
        var _context2;
        this.container.querySelector(".".concat(styles['video-controls'])).className = _concatInstanceProperty(_context2 = "".concat(styles['video-controls'], " ")).call(_context2, styles['video-controls-hidden']);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this3 = this;
        this.on('showtoolbar', function (e) {
          if (_this3.timer) {
            clearTimeout(_this3.timer);
            _this3.timer = null;
          }
          _this3.showToolBar(e);
        });
        this.on('hidetoolbar', function () {
          _this3.hideToolbar();
        });
        this.on('loadedmetadata', function (summary) {
          // console.log('duration', summary)
          _this3.controller.emit('loadedmetadata', summary);
          _this3.progress.emit('loadedmetadata', summary);
        });
        this.on('timeupdate', function (currentTime) {
          // console.log('currentTime', currentTime)
          _this3.controller.emit('timeupdate', currentTime);
          _this3.progress.emit('timeupdate', currentTime);
        });
        this.on('play', function () {
          _this3.controller.emit('play');
        });
        this.on('pause', function () {
          _this3.controller.emit('pause');
        });
        this.on('mounted', function () {
          _this3.video = _this3.container.querySelector('video');
          _this3.controller.emit('mounted');
          _this3.progress.emit('mounted');
        });
      }
    }]);
    return Toolbar;
  }(BaseEvent);

  var $$h = _export;
  var isArray$7 = isArray$c;

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  $$h({ target: 'Array', stat: true }, {
    isArray: isArray$7
  });

  var path$2 = path$f;

  var isArray$6 = path$2.Array.isArray;

  var parent$o = isArray$6;

  var isArray$5 = parent$o;

  var parent$n = isArray$5;

  var isArray$4 = parent$n;

  var parent$m = isArray$4;

  var isArray$3 = parent$m;

  var isArray$2 = isArray$3;

  var isArray$1 = isArray$2;

  var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$1);

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (_Array$isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  var classof$2 = classof$a;
  var getMethod$1 = getMethod$3;
  var isNullOrUndefined$1 = isNullOrUndefined$4;
  var Iterators$1 = iterators;
  var wellKnownSymbol$8 = wellKnownSymbol$o;

  var ITERATOR$2 = wellKnownSymbol$8('iterator');

  var getIteratorMethod$9 = function (it) {
    if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$2)
      || getMethod$1(it, '@@iterator')
      || Iterators$1[classof$2(it)];
  };

  var getIteratorMethod$8 = getIteratorMethod$9;

  var getIteratorMethod_1 = getIteratorMethod$8;

  var parent$l = getIteratorMethod_1;


  var getIteratorMethod$7 = parent$l;

  var parent$k = getIteratorMethod$7;

  var getIteratorMethod$6 = parent$k;

  var parent$j = getIteratorMethod$6;

  var getIteratorMethod$5 = parent$j;

  var getIteratorMethod$4 = getIteratorMethod$5;

  var getIteratorMethod$3 = getIteratorMethod$4;

  var _getIteratorMethod = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$3);

  var call$9 = functionCall;
  var anObject$6 = anObject$d;
  var getMethod = getMethod$3;

  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$6(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$9(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$6(innerResult);
    return value;
  };

  var anObject$5 = anObject$d;
  var iteratorClose$1 = iteratorClose$2;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$5(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
  };

  var wellKnownSymbol$7 = wellKnownSymbol$o;
  var Iterators = iterators;

  var ITERATOR$1 = wellKnownSymbol$7('iterator');
  var ArrayPrototype$4 = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype$4[ITERATOR$1] === it);
  };

  var call$8 = functionCall;
  var aCallable$6 = aCallable$b;
  var anObject$4 = anObject$d;
  var tryToString$1 = tryToString$5;
  var getIteratorMethod$2 = getIteratorMethod$9;

  var $TypeError$5 = TypeError;

  var getIterator$2 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
    if (aCallable$6(iteratorMethod)) return anObject$4(call$8(iteratorMethod, argument));
    throw $TypeError$5(tryToString$1(argument) + ' is not iterable');
  };

  var bind$4 = functionBindContext;
  var call$7 = functionCall;
  var toObject = toObject$8;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor = isConstructor$4;
  var lengthOfArrayLike$1 = lengthOfArrayLike$7;
  var createProperty = createProperty$4;
  var getIterator$1 = getIterator$2;
  var getIteratorMethod$1 = getIteratorMethod$9;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$4(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$1(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = call$7(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$1(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var wellKnownSymbol$6 = wellKnownSymbol$o;

  var ITERATOR = wellKnownSymbol$6('iterator');
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
    iteratorWithReturn[ITERATOR] = function () {
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
      object[ITERATOR] = function () {
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

  var $$g = _export;
  var from$6 = arrayFrom;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$g({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from$6
  });

  var path$1 = path$f;

  var from$5 = path$1.Array.from;

  var parent$i = from$5;

  var from$4 = parent$i;

  var parent$h = from$4;

  var from$3 = parent$h;

  var parent$g = from$3;

  var from$2 = parent$g;

  var from$1 = from$2;

  var from = from$1;

  var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from);

  function _iterableToArray(iter) {
    if (typeof _Symbol !== "undefined" && _getIteratorMethod(iter) != null || iter["@@iterator"] != null) return _Array$from(iter);
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    var _context;
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return _Array$from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  var $$f = _export;
  var $includes = arrayIncludes.includes;
  var fails$3 = fails$o;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$3(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$f({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$4 = entryVirtual$9;

  var includes$7 = entryVirtual$4('Array').includes;

  var isObject$3 = isObject$f;
  var classof$1 = classofRaw$2;
  var wellKnownSymbol$5 = wellKnownSymbol$o;

  var MATCH$1 = wellKnownSymbol$5('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$3(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
  };

  var isRegExp = isRegexp;

  var $TypeError$4 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw $TypeError$4("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$4 = wellKnownSymbol$o;

  var MATCH = wellKnownSymbol$4('match');

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

  var $$e = _export;
  var uncurryThis$3 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$5;
  var toString$1 = toString$9;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf = uncurryThis$3(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$e({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf(
        toString$1(requireObjectCoercible(this)),
        toString$1(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var entryVirtual$3 = entryVirtual$9;

  var includes$6 = entryVirtual$3('String').includes;

  var isPrototypeOf$6 = objectIsPrototypeOf;
  var arrayMethod = includes$7;
  var stringMethod = includes$6;

  var ArrayPrototype$3 = Array.prototype;
  var StringPrototype = String.prototype;

  var includes$5 = function (it) {
    var own = it.includes;
    if (it === ArrayPrototype$3 || (isPrototypeOf$6(ArrayPrototype$3, it) && own === ArrayPrototype$3.includes)) return arrayMethod;
    if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf$6(StringPrototype, it) && own === StringPrototype.includes)) {
      return stringMethod;
    } return own;
  };

  var parent$f = includes$5;

  var includes$4 = parent$f;

  var parent$e = includes$4;

  var includes$3 = parent$e;

  var parent$d = includes$3;

  var includes$2 = parent$d;

  var includes$1 = includes$2;

  var includes = includes$1;

  var _includesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(includes);

  var css_248z$3 = "";
  styleInject(css_248z$3);

  var LoadingMask = /*#__PURE__*/function () {
    function LoadingMask(container) {
      _classCallCheck(this, LoadingMask);
      _defineProperty(this, "_template", void 0);
      _defineProperty(this, "container", void 0);
      this.container = container;
      this.init();
    }
    _createClass(LoadingMask, [{
      key: "template",
      get: function get() {
        return this._template;
      }
    }, {
      key: "init",
      value: function init() {
        this._template = this.generateLoadingMask();
      }
    }, {
      key: "generateLoadingMask",
      value: function generateLoadingMask() {
        var mask = document.createElement('div');
        mask.className = styles['loading-mask'];
        var loadingContainer = document.createElement('div');
        loadingContainer.className = styles['loading-container'];
        var loadingItem = document.createElement('div');
        loadingItem.className = styles['loading-item'];
        var loadingTitle = document.createElement('div');
        loadingTitle.className = styles['loading-title'];
        loadingTitle.innerText = '视频正在努力加载中...';
        loadingContainer.appendChild(loadingItem);
        loadingContainer.appendChild(loadingTitle);
        mask.appendChild(loadingContainer);
        return mask;
      }
    }, {
      key: "addLoadingMask",
      value: function addLoadingMask() {
        var _context;
        if (!_includesInstanceProperty(_context = _toConsumableArray(this.container.children)).call(_context, this._template)) {
          this.container.appendChild(this.template);
        }
      }
    }, {
      key: "removeLoadingMask",
      value: function removeLoadingMask() {
        var _context2;
        if (_includesInstanceProperty(_context2 = _toConsumableArray(this.container.children)).call(_context2, this._template)) {
          this.container.removeChild(this.template);
        }
      }
    }]);
    return LoadingMask;
  }();

  var css_248z$2 = "";
  styleInject(css_248z$2);

  var ErrorMask = /*#__PURE__*/function () {
    function ErrorMask(container) {
      _classCallCheck(this, ErrorMask);
      _defineProperty(this, "_template", void 0);
      _defineProperty(this, "container", void 0);
      this.container = container;
      this.init();
    }
    _createClass(ErrorMask, [{
      key: "template",
      get: function get() {
        return this._template;
      }
    }, {
      key: "init",
      value: function init() {
        this._template = this.generateErrorMask();
      }
    }, {
      key: "generateErrorMask",
      value: function generateErrorMask() {
        var _context;
        var mask = document.createElement('div');
        mask.className = styles['error-mask'];
        var errorContainer = document.createElement('div');
        errorContainer.className = styles['error-container'];
        var errorItem = document.createElement('div');
        errorItem.className = styles['error-item'];
        var i = document.createElement('i');
        i.className = _concatInstanceProperty(_context = "".concat(icon['iconfont'], " ")).call(_context, icon['icon-cuowutishi']);
        errorItem.appendChild(i);
        var errorTitle = document.createElement('div');
        errorTitle.className = styles['error-title'];
        errorTitle.innerText = '视频加载发生错误';
        errorContainer.appendChild(errorItem);
        errorContainer.appendChild(errorTitle);
        mask.appendChild(errorContainer);
        return mask;
      }
    }, {
      key: "addErrorMask",
      value: function addErrorMask() {
        var _context2;
        if (!_includesInstanceProperty(_context2 = _toConsumableArray(this.container.children)).call(_context2, this.template)) {
          // ToDo
          this.container.appendChild(this.template);
        }
      }
    }, {
      key: "removeErrorMask",
      value: function removeErrorMask() {
        var _context3;
        if (_includesInstanceProperty(_context3 = _toConsumableArray(this.container.children)).call(_context3, this.template)) {
          // ToDo
          this.container.removeChild(this.template);
        }
      }
    }]);
    return ErrorMask;
  }();

  var Mp4Player = /*#__PURE__*/function () {
    function Mp4Player(player) {
      _classCallCheck(this, Mp4Player);
      _defineProperty(this, "player", void 0);
      this.player = player;
      this.player.video.src = this.player.playerOptions.url;
      this.initEvent();
    }
    _createClass(Mp4Player, [{
      key: "initEvent",
      value: function initEvent() {
        var _this = this;
        this.player.toolbar.emit('mounted');
        this.player.emit('mounted', this);
        this.player.container.onclick = function (e) {
          if (e.target === _this.player.video) {
            if (_this.player.video.paused) {
              _this.player.video.play();
            } else if (_this.player.video.played) {
              _this.player.video.pause();
            }
          }
        };
        this.player.container.addEventListener('mouseenter', function (e) {
          _this.player.toolbar.emit('showtoolbar', e);
        });
        this.player.container.addEventListener('mousemove', function (e) {
          _this.player.toolbar.emit('showtoolbar', e);
        });
        this.player.container.addEventListener('mouseleave', function (e) {
          _this.player.toolbar.emit('hidetoolbar', e);
        });
        this.player.video.addEventListener('loadedmetadata', function (e) {
          // console.log('元数据加载完毕', this.player.video.duration)
          // 设置自动播放
          // setTimeout(() => {
          //   this.video.muted = false
          //   this.playerOptions.autoPlay && this.video.play()
          // }, 500)
          _this.player.playerOptions.autoPlay && _this.player.video.play();
          _this.player.toolbar.emit('loadedmetadata', _this.player.video.duration);
        });
        // 视频播放状态时，返回视频当前的播放时间
        // 视频暂停，则不会触发这个回调
        this.player.video.addEventListener('timeupdate', function (e) {
          // console.log('currentTime', this.video.currentTime)
          _this.player.toolbar.emit('timeupdate', _this.player.video.currentTime);
        });
        // 当视频可以再次播放的时候就移除loading和error的mask，通常是为了应对在播放的过程中出现需要缓冲或者播放错误这种情况从而需要展示对应的mask
        this.player.video.addEventListener('play', function (e) {
          _this.player.loadingMask.removeLoadingMask();
          _this.player.errorMask.removeErrorMask();
          _this.player.toolbar.emit('play');
        });
        this.player.video.addEventListener('pause', function (e) {
          _this.player.toolbar.emit('pause');
        });
        this.player.video.addEventListener('waiting', function (e) {
          _this.player.loadingMask.removeLoadingMask();
          _this.player.errorMask.removeErrorMask();
          _this.player.loadingMask.addLoadingMask();
        });
        // 当浏览器请求视频发生错误的时候
        this.player.video.addEventListener('stalled', function (e) {
          console.log('视频加载发生错误');
          _this.player.loadingMask.removeLoadingMask();
          _this.player.errorMask.removeErrorMask();
          _this.player.errorMask.addErrorMask();
        });
        this.player.video.addEventListener('error', function (e) {
          _this.player.loadingMask.removeLoadingMask();
          _this.player.errorMask.removeErrorMask();
          _this.player.errorMask.addErrorMask();
        });
        this.player.video.addEventListener('abort', function (e) {
          _this.player.loadingMask.removeLoadingMask();
          _this.player.errorMask.removeErrorMask();
          _this.player.errorMask.addErrorMask();
        });
      }
    }]);
    return Mp4Player;
  }();

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

  var getBuiltIn$4 = getBuiltIn$f;
  var uncurryThis$2 = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$3 = anObject$d;

  var concat = uncurryThis$2([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$3(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$1 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var isObject$2 = isObject$f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;

  // `InstallErrorCause` abstract operation
  // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
  var installErrorCause$1 = function (O, options) {
    if (isObject$2(options) && 'cause' in options) {
      createNonEnumerableProperty$2(O, 'cause', options.cause);
    }
  };

  var uncurryThis$1 = functionUncurryThis;

  var $Error$1 = Error;
  var replace = uncurryThis$1(''.replace);

  var TEST = (function (arg) { return String($Error$1(arg).stack); })('zxcasd');
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

  var errorStackClear = function (stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
      while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    } return stack;
  };

  var fails$2 = fails$o;
  var createPropertyDescriptor$1 = createPropertyDescriptor$7;

  var errorStackInstallable = !fails$2(function () {
    var error = Error('a');
    if (!('stack' in error)) return true;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(error, 'stack', createPropertyDescriptor$1(1, 7));
    return error.stack !== 7;
  });

  var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
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

  var bind$3 = functionBindContext;
  var call$6 = functionCall;
  var anObject$2 = anObject$d;
  var tryToString = tryToString$5;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var lengthOfArrayLike = lengthOfArrayLike$7;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var getIterator = getIterator$2;
  var getIteratorMethod = getIteratorMethod$9;
  var iteratorClose = iteratorClose$2;

  var $TypeError$3 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$5 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$3(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$2(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw $TypeError$3(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$5(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$6(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$5(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var toString = toString$9;

  var normalizeStringArgument$1 = function (argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
  };

  var $$d = _export;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var copyConstructorProperties = copyConstructorProperties$1;
  var create = objectCreate;
  var createNonEnumerableProperty = createNonEnumerableProperty$8;
  var createPropertyDescriptor = createPropertyDescriptor$7;
  var installErrorCause = installErrorCause$1;
  var installErrorStack = errorStackInstall;
  var iterate$4 = iterate$5;
  var normalizeStringArgument = normalizeStringArgument$1;
  var wellKnownSymbol$3 = wellKnownSymbol$o;

  var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
  var $Error = Error;
  var push = [].push;

  var $AggregateError = function AggregateError(errors, message /* , options */) {
    var isInstance = isPrototypeOf$4(AggregateErrorPrototype, this);
    var that;
    if (setPrototypeOf) {
      that = setPrototypeOf($Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
    } else {
      that = isInstance ? this : create(AggregateErrorPrototype);
      createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
    }
    if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
    installErrorStack(that, $AggregateError, that.stack, 1);
    if (arguments.length > 2) installErrorCause(that, arguments[2]);
    var errorsArray = [];
    iterate$4(errors, push, { that: errorsArray });
    createNonEnumerableProperty(that, 'errors', errorsArray);
    return that;
  };

  if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
  else copyConstructorProperties($AggregateError, $Error, { name: true });

  var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
    constructor: createPropertyDescriptor(1, $AggregateError),
    message: createPropertyDescriptor(1, ''),
    name: createPropertyDescriptor(1, 'AggregateError')
  });

  // `AggregateError` constructor
  // https://tc39.es/ecma262/#sec-aggregate-error-constructor
  $$d({ global: true, constructor: true, arity: 2 }, {
    AggregateError: $AggregateError
  });

  var classof = classofRaw$2;

  var engineIsNode = typeof process != 'undefined' && classof(process) == 'process';

  var getBuiltIn$3 = getBuiltIn$f;
  var defineBuiltInAccessor = defineBuiltInAccessor$2;
  var wellKnownSymbol$2 = wellKnownSymbol$o;
  var DESCRIPTORS = descriptors;

  var SPECIES$2 = wellKnownSymbol$2('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

    if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
      defineBuiltInAccessor(Constructor, SPECIES$2, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var isPrototypeOf$3 = objectIsPrototypeOf;

  var $TypeError$2 = TypeError;

  var anInstance$1 = function (it, Prototype) {
    if (isPrototypeOf$3(Prototype, it)) return it;
    throw $TypeError$2('Incorrect invocation');
  };

  var anObject$1 = anObject$d;
  var aConstructor = aConstructor$2;
  var isNullOrUndefined = isNullOrUndefined$4;
  var wellKnownSymbol$1 = wellKnownSymbol$o;

  var SPECIES$1 = wellKnownSymbol$1('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$2 = function (O, defaultConstructor) {
    var C = anObject$1(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject$1(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
  };

  var $TypeError$1 = TypeError;

  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw $TypeError$1('Not enough arguments');
    return passed;
  };

  var userAgent$2 = engineUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

  var global$5 = global$j;
  var apply = functionApply;
  var bind$2 = functionBindContext;
  var isCallable$3 = isCallable$k;
  var hasOwn = hasOwnProperty_1;
  var fails$1 = fails$o;
  var html = html$2;
  var arraySlice = arraySlice$3;
  var createElement = documentCreateElement$1;
  var validateArgumentsLength = validateArgumentsLength$1;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$3 = engineIsNode;

  var set = global$5.setImmediate;
  var clear = global$5.clearImmediate;
  var process$3 = global$5.process;
  var Dispatch = global$5.Dispatch;
  var Function$1 = global$5.Function;
  var MessageChannel = global$5.MessageChannel;
  var String$1 = global$5.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$1(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global$5.location;
  });

  var run = function (id) {
    if (hasOwn(queue$2, id)) {
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
    global$5.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable$3(handler) ? handler : Function$1(handler);
      var args = arraySlice(arguments, 1);
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
      defer = bind$2(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global$5.addEventListener &&
      isCallable$3(global$5.postMessage) &&
      !global$5.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$1(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      global$5.addEventListener('message', eventListener, false);
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

  var global$4 = global$j;
  var bind$1 = functionBindContext;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$2 = engineIsNode;

  var MutationObserver = global$4.MutationObserver || global$4.WebKitMutationObserver;
  var document$2 = global$4.document;
  var process$2 = global$4.process;
  var Promise$1 = global$4.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$4, 'queueMicrotask');
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
      then = bind$1(promise$6.then, promise$6);
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
      macrotask = bind$1(macrotask, global$4);
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

  var global$3 = global$j;

  var promiseNativeConstructor = global$3.Promise;

  /* global Deno -- Deno case */

  var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

  var IS_DENO$1 = engineIsDeno;
  var IS_NODE$1 = engineIsNode;

  var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
    && typeof window == 'object'
    && typeof document == 'object';

  var global$2 = global$j;
  var NativePromiseConstructor$5 = promiseNativeConstructor;
  var isCallable$2 = isCallable$k;
  var isForced = isForced_1;
  var inspectSource = inspectSource$2;
  var wellKnownSymbol = wellKnownSymbol$o;
  var IS_BROWSER = engineIsBrowser;
  var IS_DENO = engineIsDeno;
  var V8_VERSION = engineV8Version;

  var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
  var SPECIES = wellKnownSymbol('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$2(global$2.PromiseRejectionEvent);

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

  var aCallable$5 = aCallable$b;

  var $TypeError = TypeError;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
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

  var $$c = _export;
  var IS_NODE = engineIsNode;
  var global$1 = global$j;
  var call$5 = functionCall;
  var defineBuiltIn = defineBuiltIn$5;
  var setToStringTag = setToStringTag$6;
  var setSpecies = setSpecies$1;
  var aCallable$4 = aCallable$b;
  var isCallable$1 = isCallable$k;
  var isObject$1 = isObject$f;
  var anInstance = anInstance$1;
  var speciesConstructor$1 = speciesConstructor$2;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$5 = perform$6;
  var Queue = queue$1;
  var InternalStateModule = internalState;
  var NativePromiseConstructor$4 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$6 = newPromiseCapability$2;

  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
  var setInternalState = InternalStateModule.set;
  var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
  var PromiseConstructor = NativePromiseConstructor$4;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$1 = global$1.TypeError;
  var document$1 = global$1.document;
  var process$1 = global$1.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
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
    return isObject$1(it) && isCallable$1(then = it.then) ? then : false;
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
          reject(TypeError$1('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$5(then, result, resolve, reject);
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
      global$1.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$5(task, global$1, function () {
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
    call$5(task, global$1, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind = function (fn, state, unwrap) {
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
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            call$5(then, value,
              bind(internalResolve, wrapper, state),
              bind(internalReject, wrapper, state)
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
      anInstance(this, PromisePrototype);
      aCallable$4(executor);
      call$5(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState(this, {
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
    Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$1(onRejected) && onRejected;
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
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };

    newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };
  }

  $$c({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
    Promise: PromiseConstructor
  });

  setToStringTag(PromiseConstructor, PROMISE, false, true);
  setSpecies(PROMISE);

  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
    NativePromiseConstructor$3.all(iterable).then(undefined, function () { /* empty */ });
  });

  var $$b = _export;
  var call$4 = functionCall;
  var aCallable$3 = aCallable$b;
  var newPromiseCapabilityModule$5 = newPromiseCapability$2;
  var perform$4 = perform$6;
  var iterate$3 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$b({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
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
          call$4($promiseResolve, C, promise).then(function (value) {
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

  var $$a = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor$2 = promiseNativeConstructor;

  NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$a({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  var $$9 = _export;
  var call$3 = functionCall;
  var aCallable$2 = aCallable$b;
  var newPromiseCapabilityModule$4 = newPromiseCapability$2;
  var perform$3 = perform$6;
  var iterate$2 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$9({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$4.f(C);
      var reject = capability.reject;
      var result = perform$3(function () {
        var $promiseResolve = aCallable$2(C.resolve);
        iterate$2(iterable, function (promise) {
          call$3($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$8 = _export;
  var call$2 = functionCall;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$8({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule$3.f(this);
      call$2(capability.reject, undefined, r);
      return capability.promise;
    }
  });

  var anObject = anObject$d;
  var isObject = isObject$f;
  var newPromiseCapability = newPromiseCapability$2;

  var promiseResolve$2 = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$7 = _export;
  var getBuiltIn$2 = getBuiltIn$f;
  var IS_PURE = isPure;
  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve$1 = promiseResolve$2;

  var PromiseConstructorWrapper = getBuiltIn$2('Promise');
  var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$7({ target: 'Promise', stat: true, forced: IS_PURE  }, {
    resolve: function resolve(x) {
      return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
    }
  });

  var $$6 = _export;
  var call$1 = functionCall;
  var aCallable$1 = aCallable$b;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$2 = perform$6;
  var iterate$1 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.allSettled` method
  // https://tc39.es/ecma262/#sec-promise.allsettled
  $$6({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
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
          call$1(promiseResolve, C, promise).then(function (value) {
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

  var $$5 = _export;
  var call = functionCall;
  var aCallable = aCallable$b;
  var getBuiltIn$1 = getBuiltIn$f;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform$1 = perform$6;
  var iterate = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  var PROMISE_ANY_ERROR = 'No one promise resolved';

  // `Promise.any` method
  // https://tc39.es/ecma262/#sec-promise.any
  $$5({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    any: function any(iterable) {
      var C = this;
      var AggregateError = getBuiltIn$1('AggregateError');
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
          call(promiseResolve, C, promise).then(function (value) {
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

  var $$4 = _export;
  var NativePromiseConstructor = promiseNativeConstructor;
  var fails = fails$o;
  var getBuiltIn = getBuiltIn$f;
  var isCallable = isCallable$k;
  var speciesConstructor = speciesConstructor$2;
  var promiseResolve = promiseResolve$2;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $$4({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
    'finally': function (onFinally) {
      var C = speciesConstructor(this, getBuiltIn('Promise'));
      var isFunction = isCallable(onFinally);
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

  var path = path$f;

  var promise$5 = path.Promise;

  var parent$c = promise$5;


  var promise$4 = parent$c;

  var parent$b = promise$4;

  var promise$3 = parent$b;

  // TODO: Remove from `core-js@4`
  var $$3 = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$6;

  // `Promise.try` method
  // https://github.com/tc39/proposal-promise-try
  $$3({ target: 'Promise', stat: true, forced: true }, {
    'try': function (callbackfn) {
      var promiseCapability = newPromiseCapabilityModule.f(this);
      var result = perform(callbackfn);
      (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
      return promiseCapability.promise;
    }
  });

  var parent$a = promise$3;

  // TODO: Remove from `core-js@4`




  var promise$2 = parent$a;

  var promise$1 = promise$2;

  var promise = promise$1;

  var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise);

  var $$2 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual$2 = entryVirtual$9;

  var filter$6 = entryVirtual$2('Array').filter;

  var isPrototypeOf$2 = objectIsPrototypeOf;
  var method$2 = filter$6;

  var ArrayPrototype$2 = Array.prototype;

  var filter$5 = function (it) {
    var own = it.filter;
    return it === ArrayPrototype$2 || (isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.filter) ? method$2 : own;
  };

  var parent$9 = filter$5;

  var filter$4 = parent$9;

  var parent$8 = filter$4;

  var filter$3 = parent$8;

  var parent$7 = filter$3;

  var filter$2 = parent$7;

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
  var factory$9 = FactoryMaker.getSingleFactory(EventBus);

  var EventConstants = {
    MANIFEST_LOADED: 'manifestLoaded',
    MANIFEST_PARSE_COMPLETED: 'manifestParseCompleted',
    SOURCE_ATTACHED: 'sourceAttached',
    SEGEMTN_LOADED: 'segmentLoaded'
  };

  var HTTPRequest = /*#__PURE__*/_createClass(function HTTPRequest(config) {
    _classCallCheck(this, HTTPRequest);
    _defineProperty(this, "sendRequestTime", void 0);
    _defineProperty(this, "getResponseTime", void 0);
    _defineProperty(this, "url", '');
    _defineProperty(this, "header", void 0);
    _defineProperty(this, "method", void 0);
    _defineProperty(this, "responseType", void 0);
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
  var factory$8 = FactoryMaker.getSingleFactory(XHRLoader);

  var URLLoader = /*#__PURE__*/function () {
    function URLLoader(ctx) {
      _classCallCheck(this, URLLoader);
      _defineProperty(this, "config", {});
      _defineProperty(this, "xhrLoader", void 0);
      _defineProperty(this, "eventBus", void 0);
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
        this.xhrLoader = factory$8({}).getInstance();
        this.eventBus = factory$9({}).getInstance();
      }
      // 每调用一次load函数就发送一次请求
    }, {
      key: "load",
      value: function load(config, type) {
        //一个HTTPRequest对象才对应一个请求
        var request = new HTTPRequest(config);
        var ctx = this;
        if (type === 'Manifest') {
          ctx._loadManifest({
            request: request,
            success: function success(data) {
              request.getResponseTime = new Date().getTime();
              ctx.eventBus.trigger(EventConstants.MANIFEST_LOADED, data);
            },
            error: function error(_error) {
              console.log(this, _error);
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
              }
            });
          });
        }
      }
    }]);
    return URLLoader;
  }();
  var factory$7 = FactoryMaker.getSingleFactory(URLLoader);

  var DOMNodeTypes;
  (function (DOMNodeTypes) {
    DOMNodeTypes[DOMNodeTypes["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    DOMNodeTypes[DOMNodeTypes["TEXT_NODE"] = 3] = "TEXT_NODE";
    DOMNodeTypes[DOMNodeTypes["CDATA_SECTION_NODE"] = 4] = "CDATA_SECTION_NODE";
    DOMNodeTypes[DOMNodeTypes["COMMENT_NODE"] = 8] = "COMMENT_NODE";
    DOMNodeTypes[DOMNodeTypes["DOCUMENT_NODE"] = 9] = "DOCUMENT_NODE";
  })(DOMNodeTypes || (DOMNodeTypes = {}));

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
  var factory$6 = FactoryMaker.getSingleFactory(SegmentTemplateParser);

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
  var factory$5 = FactoryMaker.getSingleFactory(URLUtils);

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { var _context19; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context19 = Object.prototype.toString.call(o)).call(_context19, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
        this.segmentTemplateParser = factory$6().getInstance();
        this.eventBus = factory$9().getInstance();
        this.URLUtils = factory$5().getInstance();
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
          var _iterator = _createForOfIteratorHelper(node.attributes),
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
      key: "getTotalDuration",
      value: function getTotalDuration(Mpd) {
        var totalDuration = 0;
        var MpdDuration = NaN;
        if (Mpd.mediaPresentationDuration) {
          MpdDuration = switchToSeconds(parseDuration(Mpd.mediaPresentationDuration));
        }
        // MPD文件的总时间要么是由Mpd标签上的availabilityStartTime指定，要么是每一个Period上的duration之和
        if (isNaN(MpdDuration)) {
          _forEachInstanceProperty(Mpd).call(Mpd, function (Period) {
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
          var _context10;
          var totalDuration = this.getTotalDuration(Mpd);
          _forEachInstanceProperty(_context10 = Mpd['Period_asArray']).call(_context10, function (Period) {
            var _context11;
            Period.duration = Period.duration || totalDuration;
            _forEachInstanceProperty(_context11 = Period['AdaptationSet_asArray']).call(_context11, function (AdaptationSet) {
              var _context12;
              AdaptationSet.duration = totalDuration;
              _forEachInstanceProperty(_context12 = AdaptationSet['Representation_asArray']).call(_context12, function (Representation) {
                Representation.duration = totalDuration;
              });
            });
          });
        } else {
          var _context13;
          _forEachInstanceProperty(_context13 = Mpd['Period_asArray']).call(_context13, function (Period) {
            var _context14;
            if (!Period.duration) {
              throw new Error('MPD文件格式错误');
            }
            var duration = Period.duration;
            _forEachInstanceProperty(_context14 = Period['AdaptationSet_asArray']).call(_context14, function (AdaptationSet) {
              var _context15;
              AdaptationSet.duration = duration;
              _forEachInstanceProperty(_context15 = AdaptationSet['Representation_asArray']).call(_context15, function (Representation) {
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
        var _context16;
        var maxSegmentDuration = switchToSeconds(parseDuration(Mpd.maxSegmentDuration));
        _forEachInstanceProperty(_context16 = Mpd['Period_asArray']).call(_context16, function (Period) {
          var _context17;
          _forEachInstanceProperty(_context17 = Period['AdaptationSet_asArray']).call(_context17, function (AdaptationSet) {
            var _context18;
            _forEachInstanceProperty(_context18 = AdaptationSet['Representation_asArray']).call(_context18, function (Representation) {
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
  var factory$4 = FactoryMaker.getSingleFactory(DashParser);

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

  var $$1 = _export;
  var uncurryThis = functionUncurryThis;
  var isArray = isArray$c;

  var nativeReverse = uncurryThis([].reverse);
  var test = [1, 2];

  // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  $$1({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray(this)) this.length = this.length;
      return nativeReverse(this);
    }
  });

  var entryVirtual$1 = entryVirtual$9;

  var reverse$6 = entryVirtual$1('Array').reverse;

  var isPrototypeOf$1 = objectIsPrototypeOf;
  var method$1 = reverse$6;

  var ArrayPrototype$1 = Array.prototype;

  var reverse$5 = function (it) {
    var own = it.reverse;
    return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.reverse) ? method$1 : own;
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
  	var _Object$defineProperty = defineProperty$4;
  	var _Symbol = symbol;
  	var _Object$create = create$1;
  	var _Object$getPrototypeOf = getPrototypeOf$1;
  	var _forEachInstanceProperty = forEach;
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

  var $ = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual = entryVirtual$9;

  var map$6 = entryVirtual('Array').map;

  var isPrototypeOf = objectIsPrototypeOf;
  var method = map$6;

  var ArrayPrototype = Array.prototype;

  var map$5 = function (it) {
    var own = it.map;
    return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map) ? method : own;
  };

  var parent$3 = map$5;

  var map$4 = parent$3;

  var parent$2 = map$4;

  var map$3 = parent$2;

  var parent$1 = map$3;

  var map$2 = parent$1;

  var map$1 = map$2;

  var map = map$1;

  var _mapInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(map);

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
  var factory$3 = FactoryMaker.getSingleFactory(BaseURLParser);

  var StreamController = /*#__PURE__*/function () {
    function StreamController(ctx) {
      _classCallCheck(this, StreamController);
      _defineProperty(this, "config", {});
      _defineProperty(this, "baseURLParser", void 0);
      _defineProperty(this, "baseURLPath", void 0);
      _defineProperty(this, "URLUtils", void 0);
      _defineProperty(this, "eventBus", void 0);
      _defineProperty(this, "urlLoader", void 0);
      //音视频的分辨率
      _defineProperty(this, "videoResolvePower", '1920*1080');
      _defineProperty(this, "audioResolvePower", '48000');
      //整个MPD文件所需要发送请求的结构体对象
      _defineProperty(this, "segmentRequestStruct", void 0);
      this.config = ctx.context;
      console.log(this.config);
      this.setup();
      this.initialEvent();
    }
    _createClass(StreamController, [{
      key: "setup",
      value: function setup() {
        this.baseURLParser = factory$3().getInstance();
        this.URLUtils = factory$5().getInstance();
        this.eventBus = factory$9().getInstance();
        this.urlLoader = factory$7().getInstance();
      }
    }, {
      key: "initialEvent",
      value: function initialEvent() {
        this.eventBus.on(EventConstants.MANIFEST_PARSE_COMPLETED, this.onManifestParseCompleted, this);
      }
    }, {
      key: "onManifestParseCompleted",
      value: function onManifestParseCompleted(mainifest) {
        this.segmentRequestStruct = this.generateSegmentRequestStruct(mainifest);
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
      key: "startStream",
      value: function startStream(Mpd) {
        var _context2,
          _this2 = this;
        _forEachInstanceProperty(_context2 = Mpd['Period_asArray']).call(_context2, /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(p, pid) {
            var ires, number, i, mres;
            return _regeneratorRuntime.wrap(function _callee$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this2.loadInitialSegment(pid);
                case 2:
                  ires = _context3.sent;
                  _this2.eventBus.trigger(EventConstants.SEGEMTN_LOADED, ires);
                  number = _this2.segmentRequestStruct.request[pid].VideoSegmentRequest[0].video[_this2.videoResolvePower][1].length;
                  i = 0;
                case 6:
                  if (!(i < number)) {
                    _context3.next = 14;
                    break;
                  }
                  _context3.next = 9;
                  return _this2.loadMediaSegment(pid, i);
                case 9:
                  mres = _context3.sent;
                  _this2.eventBus.trigger(EventConstants.SEGEMTN_LOADED, mres);
                case 11:
                  i++;
                  _context3.next = 6;
                  break;
                case 14:
                case "end":
                  return _context3.stop();
              }
            }, _callee);
          }));
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      }
      //此处的streamId标识具体的Period对象
    }, {
      key: "loadInitialSegment",
      value: function loadInitialSegment(streamId) {
        var stream = this.segmentRequestStruct.request[streamId];
        // 先默认选择音视频的第一个版本
        var audioRequest = stream.AudioSegmentRequest[0].audio;
        var videoRequest = stream.VideoSegmentRequest[0].video;
        return this.loadSegment(videoRequest[this.videoResolvePower][0], audioRequest[this.audioResolvePower][0]);
      }
    }, {
      key: "loadMediaSegment",
      value: function loadMediaSegment(streamId, mediaId) {
        var stream = this.segmentRequestStruct.request[streamId];
        // 先默认选择音视频的第一个版本
        var audioRequest = stream.AudioSegmentRequest[0].audio;
        var videoRequest = stream.VideoSegmentRequest[0].video;
        return this.loadSegment(videoRequest[this.videoResolvePower][1][mediaId], audioRequest[this.audioResolvePower][1][mediaId]);
      }
    }, {
      key: "loadSegment",
      value: function () {
        var _loadSegment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(videoURL, audioURL) {
          var p1, p2, p;
          return _regeneratorRuntime.wrap(function _callee2$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                p1 = this.urlLoader.load({
                  url: videoURL,
                  responseType: 'arraybuffer'
                }, 'Segment');
                p2 = this.urlLoader.load({
                  url: audioURL,
                  responseType: 'arraybuffer'
                }, 'Segment');
                _context4.next = 4;
                return _Promise.all([p1, p2]);
              case 4:
                p = _context4.sent;
                return _context4.abrupt("return", p);
              case 6:
              case "end":
                return _context4.stop();
            }
          }, _callee2, this);
        }));
        function loadSegment(_x3, _x4) {
          return _loadSegment.apply(this, arguments);
        }
        return loadSegment;
      }()
    }]);
    return StreamController;
  }();
  var factory$2 = FactoryMaker.getClassFactory(StreamController);

  var MediaPlayerController = /*#__PURE__*/function () {
    function MediaPlayerController(ctx) {
      _classCallCheck(this, MediaPlayerController);
      _defineProperty(this, "config", {});
      _defineProperty(this, "video", void 0);
      _defineProperty(this, "mediaSource", void 0);
      _defineProperty(this, "sourceBuffers", void 0);
      this.config = ctx.context;
      this.setup();
    }
    _createClass(MediaPlayerController, [{
      key: "setup",
      value: function setup() {}
    }]);
    return MediaPlayerController;
  }();
  var factory$1 = FactoryMaker.getClassFactory(MediaPlayerController);

  /**
   * @description 整个dash处理流程的入口类MediaPlayer,类似于项目的中转中心，用于接收任务并且将任务分配给不同的解析器去完成
   */
  var MediaPlayer = /*#__PURE__*/function () {
    function MediaPlayer(ctx) {
      _classCallCheck(this, MediaPlayer);
      _defineProperty(this, "config", {});
      _defineProperty(this, "urlLoader", void 0);
      _defineProperty(this, "eventBus", void 0);
      _defineProperty(this, "dashParser", void 0);
      _defineProperty(this, "streamController", void 0);
      _defineProperty(this, "mediaPlayerController", void 0);
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
        this.urlLoader = factory$7().getInstance();
        // 单例模式
        // this.eventBus = new EventBus({context: {}}, ...args)
        this.eventBus = factory$9().getInstance();
        // 单例模式
        // this.dashParser = new DashParser({context: { ignoreRoot: true }}, ...args)
        // ignoreRoot -> 忽略Document节点，从MPD开始作为根节点
        this.dashParser = factory$4({
          ignoreRoot: true
        }).getInstance();
        // 工厂模式
        // this.streamController = new StreamController({context: {}}, ...args)
        this.streamController = factory$2().create();
        // 工厂模式
        // this.mediaPlayerController = new MediaPlayerController({context: {}}, ...args)
        this.mediaPlayerController = factory$1().create();
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
      value: function onSegmentLoaded(data) {
        console.log('加载Segment成功');
        console.log(data);
        data[0];
        data[1];
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
        this.eventBus.trigger(EventConstants.MANIFEST_PARSE_COMPLETED, manifest);
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
    }]);
    return MediaPlayer;
  }();
  var factory = FactoryMaker.getClassFactory(MediaPlayer);

  var MpdPlayer = /*#__PURE__*/_createClass(function MpdPlayer(player) {
    _classCallCheck(this, MpdPlayer);
    // 工厂模式：每次创建一个新的实例 
    // let mediaPlayer = new MediaPlayer({context: {}}, ...args)
    var mediaPlayer = factory().create();
    mediaPlayer.attachSource(player.playerOptions.url);
  });
  // import { Axios } from '@/axios/Axios'
  // import { Player } from './player'
  // import { parseMpd } from '@/dash/parseMpd'
  // import { AxiosReturnType } from '@/types/AxiosRequest'
  // import { PeriodRequest, RangeRequest, SegmentRequest } from '@/types/dash/MpdFile'
  // export class MpdPlayer {
  //   private player: Player
  //   private axios: Axios
  //   private mpdUrl: string
  //   private mpd: Document
  //   private requestInfo: any
  //   constructor(player: Player) {
  //     this.player = player
  //     this.axios = new Axios()
  //     this.mpdUrl = this.player.playerOptions.url
  //     this.init()
  //   }
  //   initEvent() {
  //     this.player.toolbar.emit('mounted')
  //     this.player.emit('mounted', this)
  //   }
  //   async init() {
  //     this.player.video.controls = true
  //     await this.getMpdFile(this.mpdUrl)
  //     // 遍历每一个Period
  //     this.requestInfo.mpdRequest.forEach(async (child) => {
  //       await this.handlePeriod(child)
  //     })
  //     // this.requestInfo.mpdRequest.forEach(async (child) => {
  //     //   let videoResolve = child.videoRequest['1920*1080']
  //     //   let audioResolve = child.audioRequest['48000']
  //     //   let val = await Promise.all([
  //     //     this.getInitializationSegment(videoResolve[0].url),
  //     //     this.getInitializationSegment(audioResolve[0].url)
  //     //   ])
  //     //   console.log(val)
  //     // })
  //   }
  //   async handlePeriod(child: PeriodRequest) {
  //     let videoResolve = child.videoRequest['1920*1080']
  //     let audioResolve = child.audioRequest['48000']
  //     await this.handleInitializationSegment(videoResolve[0].url, audioResolve[0].url)
  //     await this.handleMediaSegment(videoResolve.slice(1), audioResolve.slice(1))
  //   }
  //   async handleInitializationSegment(videoUrl: string, audioUrl: string) {
  //     let val = await Promise.all([this.getSegment(videoUrl), this.getSegment(audioUrl)])
  //     console.log(val)
  //   }
  //   async handleMediaSegment(
  //     videoRequest: (SegmentRequest | RangeRequest)[],
  //     audioRequest: (SegmentRequest | RangeRequest)[]
  //   ) {
  //     for (let i = 0; i < Math.min(videoRequest.length, audioRequest.length); i++) {
  //       let val = await Promise.all([
  //         this.getSegment(videoRequest[i].url),
  //         this.getSegment(audioRequest[i].url)
  //       ])
  //       console.log(i + 1, val)
  //     }
  //   }
  //   /**
  //    * @description 获取并且解析MPD文件
  //    */
  //   async getMpdFile(url: string) {
  //     let val = await this.axios.get(url, {}, 'text')
  //     // console.log(val)
  //     let parser = new DOMParser() // DOMParser 可以将存储在字符串中的 XML 或 HTML 源代码解析为一个 DOM Document
  //     let document = parser.parseFromString(val.data as string, 'text/xml')
  //     let result = parseMpd(document, 'https://dash.akamaized.net/envivio/EnvivioDash3/')
  //     // console.log(result)
  //     this.mpd = document
  //     this.requestInfo = result
  //   }
  //   /**
  //    * @description 根据解析到的MPD文件的段（Initialization Segment 和 Media Segment）
  //    */
  //   getSegment(url: string): Promise<AxiosReturnType> {
  //     return this.axios.get(url, {}, 'arraybuffer')
  //   }
  // }

  function getFileExtension(file) {
    var name;
    if (typeof file === 'string') {
      name = file;
    } else {
      name = file.name;
    }
    for (var i = name.length - 1; i >= 0; i--) {
      if (name[i] === '.') {
        return _sliceInstanceProperty(name).call(name, i + 1, name.length);
      }
    }
    return null;
  }

  var css_248z$1 = "@font-face {\n  font-family: \"iconfont\";\n  /* Project id 3797258 */\n  src: url(\"//at.alicdn.com/t/c/font_3797258_88colj2uuv9.woff2?t=1670043636699\") format(\"woff2\"), url(\"//at.alicdn.com/t/c/font_3797258_88colj2uuv9.woff?t=1670043636699\") format(\"woff\"), url(\"//at.alicdn.com/t/c/font_3797258_88colj2uuv9.ttf?t=1670043636699\") format(\"truetype\");\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-cuowutishi:before {\n  content: \"\\e656\";\n}\n.icon-shezhi:before {\n  content: \"\\e64b\";\n}\n.icon-quanping:before {\n  content: \"\\eb11\";\n}\n.icon-yinliang:before {\n  content: \"\\e63c\";\n}\n.icon-zanting:before {\n  content: \"\\e87a\";\n}\n.icon-bofang:before {\n  content: \"\\e87c\";\n}\n";
  styleInject(css_248z$1);

  var css_248z = ".video-container {\n  position: relative;\n  overflow: hidden;\n}\n.video-container .video-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.video-container .video-wrapper video {\n  width: 100%;\n  height: 100%;\n}\n";
  styleInject(css_248z);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Player = /*#__PURE__*/function (_BaseEvent) {
    _inherits(Player, _BaseEvent);
    var _super = _createSuper(Player);
    function Player(options) {
      var _this;
      _classCallCheck(this, Player);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "playerOptions", {
        url: '',
        width: '100%',
        height: '100%',
        autoPlay: false
      });
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "toolbar", void 0);
      _defineProperty(_assertThisInitialized(_this), "video", void 0);
      _defineProperty(_assertThisInitialized(_this), "loadingMask", void 0);
      _defineProperty(_assertThisInitialized(_this), "errorMask", void 0);
      _this.playerOptions = _Object$assign(_this.playerOptions, options);
      _this.init();
      _this.initComponent();
      _this.initContainer();
      if (getFileExtension(_this.playerOptions.url) === 'mpd') {
        new MpdPlayer(_assertThisInitialized(_this));
      } else if (getFileExtension(_this.playerOptions.url) === 'mp4') {
        new Mp4Player(_assertThisInitialized(_this));
      }
      // // 初始化播放器事件
      // this.initEvent()
      return _this;
    }
    _createClass(Player, [{
      key: "init",
      value: function init() {
        var container = this.playerOptions.container;
        // 标签判断
        if (!this.isTagValidate(container)) {
          $warn('你传入的容器的元素类型不适合，建议传入块元素或者行内块元素，拒绝传入具有交互类型的元素例如input框等表单类型的元素');
        }
        this.container = container;
      }
      /**
       * @description 初始化播放器上的各种组件实例
       */
    }, {
      key: "initComponent",
      value: function initComponent() {
        // 初始化视频播放器的工具栏组件
        this.toolbar = new Toolbar(this.container);
        this.loadingMask = new LoadingMask(this.container);
        this.errorMask = new ErrorMask(this.container);
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        this.container.style.width = this.playerOptions.width;
        this.container.style.height = this.playerOptions.height;
        this.container.className = styles['video-container'];
        // this.container.innerHTML = `
        //   <div class=${styles['video-wrapper']}>
        //     <video>
        //       <source src="${this.playerOptions.url}" type="video/mp4">
        //       您的浏览器不支持 HTML5 video 标签。
        //     </video>
        //   </div>
        // `
        this.container.innerHTML = "\n      <div class=".concat(styles['video-wrapper'], ">\n        <video></video>\n      </div>\n    ");
        this.container.appendChild(this.toolbar.template);
        this.video = this.container.querySelector('video');
        this.video.height = this.container.clientHeight;
        this.video.width = this.container.clientWidth;
      }
      // initEvent() {
      //   this.toolbar.emit('mounted')
      //   this.container.onclick = (e: Event) => {
      //     if (e.target === this.video) {
      //       if (this.video.paused) {
      //         this.video.play()
      //       } else if (this.video.played) {
      //         this.video.pause()
      //       }
      //     }
      //   }
      //   this.container.addEventListener('mouseenter', (e: MouseEvent) => {
      //     this.toolbar.emit('showtoolbar', e)
      //   })
      //   this.container.addEventListener('mousemove', (e: MouseEvent) => {
      //     this.toolbar.emit('showtoolbar', e)
      //   })
      //   this.container.addEventListener('mouseleave', (e: MouseEvent) => {
      //     this.toolbar.emit('hidetoolbar', e)
      //   })
      //   this.video.addEventListener('loadedmetadata', (e: Event) => {
      //     console.log('元数据加载完毕', this.video.duration)
      //     // 设置自动播放
      //     // setTimeout(() => {
      //     //   this.video.muted = false
      //     //   this.playerOptions.autoPlay && this.video.play()
      //     // }, 500)
      //     //
      //     this.toolbar.emit('loadedmetadata', this.video.duration)
      //   })
      //   // 视频播放状态时，返回视频当前的播放时间
      //   // 视频暂停，则不会触发这个回调
      //   this.video.addEventListener('timeupdate', (e: Event) => {
      //     // console.log('currentTime', this.video.currentTime)
      //     this.toolbar.emit('timeupdate', this.video.currentTime)
      //   })
      //   // 当视频可以再次播放的时候就移除loading和error的mask，通常是为了应对在播放的过程中出现需要缓冲或者播放错误这种情况从而需要展示对应的mask
      //   this.video.addEventListener('play', (e: Event) => {
      //     this.loadingMask.removeLoadingMask()
      //     this.errorMask.removeErrorMask()
      //     this.toolbar.emit('play')
      //   })
      //   this.video.addEventListener('pause', (e: Event) => {
      //     this.toolbar.emit('pause')
      //   })
      //   this.video.addEventListener('waiting', (e: Event) => {
      //     this.loadingMask.removeLoadingMask()
      //     this.errorMask.removeErrorMask()
      //     this.loadingMask.addLoadingMask()
      //   })
      //   // 当浏览器请求视频发生错误的时候
      //   this.video.addEventListener('stalled', (e) => {
      //     console.log('视频加载发生错误')
      //     this.loadingMask.removeLoadingMask()
      //     this.errorMask.removeErrorMask()
      //     this.errorMask.addErrorMask()
      //   })
      //   this.video.addEventListener('error', (e) => {
      //     this.loadingMask.removeLoadingMask()
      //     this.errorMask.removeErrorMask()
      //     this.errorMask.addErrorMask()
      //   })
      //   this.video.addEventListener('abort', (e: Event) => {
      //     this.loadingMask.removeLoadingMask()
      //     this.errorMask.removeErrorMask()
      //     this.errorMask.addErrorMask()
      //   })
      // }
    }, {
      key: "isTagValidate",
      value: function isTagValidate(el) {
        if (window.getComputedStyle(el).display === 'block') return true;
        if (window.getComputedStyle(el).display === 'inline') return false;
        if (window.getComputedStyle(el).display === 'inline-block') {
          if (el instanceof HTMLImageElement || el instanceof HTMLInputElement || el instanceof HTMLButtonElement || el instanceof HTMLCanvasElement || el instanceof HTMLVideoElement || el instanceof HTMLAudioElement) {
            return false;
          }
        }
        return true;
      }
    }]);
    return Player;
  }(BaseEvent);

  exports.$warn = $warn;
  exports.BaseEvent = BaseEvent;
  exports.Controller = Controller;
  exports.ERROR_MASK_MAP = ERROR_MASK_MAP;
  exports.ErrorMask = ErrorMask;
  exports.LOADING_MASK_MAP = LOADING_MASK_MAP;
  exports.LoadingMask = LoadingMask;
  exports.Mp4Player = Mp4Player;
  exports.MpdPlayer = MpdPlayer;
  exports.Player = Player;
  exports.Progress = Progress;
  exports.Toolbar = Toolbar;
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
  exports.icon = icon;
  exports.parseDuration = parseDuration;
  exports.string2booolean = string2booolean;
  exports.string2number = string2number;
  exports.styles = styles;
  exports.switchToSeconds = switchToSeconds;

}));
//# sourceMappingURL=player.umd.js.map
