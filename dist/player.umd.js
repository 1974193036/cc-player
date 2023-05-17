
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
  var global$e =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var fails$k = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$j = fails$k;

  var functionBindNative = !fails$j(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$4 = functionBindNative;

  var FunctionPrototype$3 = Function.prototype;
  var apply$3 = FunctionPrototype$3.apply;
  var call$d = FunctionPrototype$3.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$d.bind(apply$3) : function () {
    return call$d.apply(apply$3, arguments);
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$c = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$c, call$c);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$c.apply(fn, arguments);
    };
  };

  var uncurryThis$n = functionUncurryThis;

  var toString$9 = uncurryThis$n({}.toString);
  var stringSlice$1 = uncurryThis$n(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$1(toString$9(it), 8, -1);
  };

  var classofRaw$1 = classofRaw$2;
  var uncurryThis$m = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw$1(fn) === 'Function') return uncurryThis$m(fn);
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
  var isCallable$g = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var objectGetOwnPropertyDescriptor = {};

  var fails$i = fails$k;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$i(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$b = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$b.bind(call$b) : function () {
    return call$b.apply(call$b, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var createPropertyDescriptor$5 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var uncurryThis$l = functionUncurryThis;
  var fails$h = fails$k;
  var classof$a = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$l(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$h(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$a(it) == 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$3 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$2 = isNullOrUndefined$3;

  var $TypeError$9 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$4 = function (it) {
    if (isNullOrUndefined$2(it)) throw $TypeError$9("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$3 = requireObjectCoercible$4;

  var toIndexedObject$8 = function (it) {
    return IndexedObject$2(requireObjectCoercible$3(it));
  };

  var isCallable$f = isCallable$g;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$b = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$f(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$f(it);
  };

  var path$e = {};

  var path$d = path$e;
  var global$d = global$e;
  var isCallable$e = isCallable$g;

  var aFunction = function (variable) {
    return isCallable$e(variable) ? variable : undefined;
  };

  var getBuiltIn$a = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path$d[namespace]) || aFunction(global$d[namespace])
      : path$d[namespace] && path$d[namespace][method] || global$d[namespace] && global$d[namespace][method];
  };

  var uncurryThis$k = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$k({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$c = global$e;
  var userAgent = engineUserAgent;

  var process = global$c.process;
  var Deno = global$c.Deno;
  var versions = process && process.versions || Deno && Deno.version;
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
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$2 = engineV8Version;
  var fails$g = fails$k;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$g(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$5 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$5
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$9 = getBuiltIn$a;
  var isCallable$d = isCallable$g;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$9('Symbol');
    return isCallable$d($Symbol) && isPrototypeOf$5($Symbol.prototype, $Object$3(it));
  };

  var $String$4 = String;

  var tryToString$4 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$c = isCallable$g;
  var tryToString$3 = tryToString$4;

  var $TypeError$8 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$5 = function (argument) {
    if (isCallable$c(argument)) return argument;
    throw $TypeError$8(tryToString$3(argument) + ' is not a function');
  };

  var aCallable$4 = aCallable$5;
  var isNullOrUndefined$1 = isNullOrUndefined$3;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$3 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$1(func) ? undefined : aCallable$4(func);
  };

  var call$a = functionCall;
  var isCallable$b = isCallable$g;
  var isObject$a = isObject$b;

  var $TypeError$7 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$b(fn = input.toString) && !isObject$a(val = call$a(fn, input))) return val;
    if (isCallable$b(fn = input.valueOf) && !isObject$a(val = call$a(fn, input))) return val;
    if (pref !== 'string' && isCallable$b(fn = input.toString) && !isObject$a(val = call$a(fn, input))) return val;
    throw $TypeError$7("Can't convert object to primitive value");
  };

  var shared$7 = {exports: {}};

  var global$b = global$e;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$b = Object.defineProperty;

  var defineGlobalProperty$1 = function (key, value) {
    try {
      defineProperty$b(global$b, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$b[key] = value;
    } return value;
  };

  var global$a = global$e;
  var defineGlobalProperty = defineGlobalProperty$1;

  var SHARED = '__core-js_shared__';
  var store$3 = global$a[SHARED] || defineGlobalProperty(SHARED, {});

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

  var requireObjectCoercible$2 = requireObjectCoercible$4;

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$8 = function (argument) {
    return $Object$2(requireObjectCoercible$2(argument));
  };

  var uncurryThis$j = functionUncurryThis;
  var toObject$7 = toObject$8;

  var hasOwnProperty = uncurryThis$j({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$7(it), key);
  };

  var uncurryThis$i = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$i(1.0.toString);

  var uid$3 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
  };

  var global$9 = global$e;
  var shared$6 = sharedExports;
  var hasOwn$d = hasOwnProperty_1;
  var uid$2 = uid$3;
  var NATIVE_SYMBOL$4 = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$4 = global$9.Symbol;
  var WellKnownSymbolsStore$2 = shared$6('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$4['for'] || Symbol$4 : Symbol$4 && Symbol$4.withoutSetter || uid$2;

  var wellKnownSymbol$i = function (name) {
    if (!hasOwn$d(WellKnownSymbolsStore$2, name)) {
      WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$d(Symbol$4, name)
        ? Symbol$4[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore$2[name];
  };

  var call$9 = functionCall;
  var isObject$9 = isObject$b;
  var isSymbol$4 = isSymbol$5;
  var getMethod$2 = getMethod$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$h = wellKnownSymbol$i;

  var $TypeError$6 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$h('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$7 = function (input, pref) {
    if (!isObject$9(input) || isSymbol$4(input)) return input;
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$9(exoticToPrim, input, pref);
      if (!isObject$9(result) || isSymbol$4(result)) return result;
      throw $TypeError$6("Can't convert object to primitive value");
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

  var global$8 = global$e;
  var isObject$8 = isObject$b;

  var document$1 = global$8.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$8(document$1) && isObject$8(document$1.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$a = descriptors;
  var fails$f = fails$k;
  var createElement = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$a && !fails$f(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$9 = descriptors;
  var call$8 = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$4 = createPropertyDescriptor$5;
  var toIndexedObject$7 = toIndexedObject$8;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$c = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$7(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$c(O, P)) return createPropertyDescriptor$4(!call$8(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };

  var fails$e = fails$k;
  var isCallable$a = isCallable$g;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$a(detection) ? fails$e(detection)
      : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';

  var isForced_1 = isForced$1;

  var uncurryThis$h = functionUncurryThisClause;
  var aCallable$3 = aCallable$5;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$c = uncurryThis$h(uncurryThis$h.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$3(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$c(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$8 = descriptors;
  var fails$d = fails$k;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$d(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$7 = isObject$b;

  var $String$3 = String;
  var $TypeError$5 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$9 = function (argument) {
    if (isObject$7(argument)) return argument;
    throw $TypeError$5($String$3(argument) + ' is not an object');
  };

  var DESCRIPTORS$7 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$8 = anObject$9;
  var toPropertyKey$2 = toPropertyKey$4;

  var $TypeError$4 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$1 = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$8(O);
    P = toPropertyKey$2(P);
    anObject$8(Attributes);
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
    anObject$8(O);
    P = toPropertyKey$2(P);
    anObject$8(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$4('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$3 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$5;

  var createNonEnumerableProperty$5 = DESCRIPTORS$6 ? function (object, key, value) {
    return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$7 = global$e;
  var apply$2 = functionApply;
  var uncurryThis$g = functionUncurryThisClause;
  var isCallable$9 = isCallable$g;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var isForced = isForced_1;
  var path$c = path$e;
  var bind$b = functionBindContext;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
  var hasOwn$b = hasOwnProperty_1;

  var wrapConstructor = function (NativeConstructor) {
    var Wrapper = function (a, b, c) {
      if (this instanceof Wrapper) {
        switch (arguments.length) {
          case 0: return new NativeConstructor();
          case 1: return new NativeConstructor(a);
          case 2: return new NativeConstructor(a, b);
        } return new NativeConstructor(a, b, c);
      } return apply$2(NativeConstructor, this, arguments);
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

    var nativeSource = GLOBAL ? global$7 : STATIC ? global$7[TARGET] : (global$7[TARGET] || {}).prototype;

    var target = GLOBAL ? path$c : path$c[TARGET] || createNonEnumerableProperty$4(path$c, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;

    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

    for (key in source) {
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && hasOwn$b(nativeSource, key);

      targetProperty = target[key];

      if (USE_NATIVE) if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else nativeProperty = nativeSource[key];

      // export native or implementation
      sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

      if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

      // bind methods to global for calling from export context
      if (options.bind && USE_NATIVE) resultProperty = bind$b(sourceProperty, global$7);
      // wrap global constructors for prevent changes in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
      // make static versions for prototype methods
      else if (PROTO && isCallable$9(sourceProperty)) resultProperty = uncurryThis$g(sourceProperty);
      // default case
      else resultProperty = sourceProperty;

      // add a flag to not completely full polyfills
      if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$4(resultProperty, 'sham', true);
      }

      createNonEnumerableProperty$4(target, key, resultProperty);

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
        if (!hasOwn$b(path$c, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty$4(path$c, VIRTUAL_PROTOTYPE, {});
        }
        // export virtual prototype methods
        createNonEnumerableProperty$4(path$c[VIRTUAL_PROTOTYPE], key, sourceProperty);
        // export real prototype methods
        if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
          createNonEnumerableProperty$4(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var $$l = _export;
  var DESCRIPTORS$5 = descriptors;
  var defineProperty$a = objectDefineProperty.f;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  $$l({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$a, sham: !DESCRIPTORS$5 }, {
    defineProperty: defineProperty$a
  });

  var path$b = path$e;

  var Object$2 = path$b.Object;

  var defineProperty$9 = defineProperty$c.exports = function defineProperty(it, key, desc) {
    return Object$2.defineProperty(it, key, desc);
  };

  if (Object$2.defineProperty.sham) defineProperty$9.sham = true;

  var definePropertyExports = defineProperty$c.exports;

  var parent$O = definePropertyExports;

  var defineProperty$8 = parent$O;

  var parent$N = defineProperty$8;

  var defineProperty$7 = parent$N;

  var parent$M = defineProperty$7;

  var defineProperty$6 = parent$M;

  var defineProperty$5 = defineProperty$6;

  var defineProperty$4 = defineProperty$5;

  var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$4);

  var classof$9 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$b = Array.isArray || function isArray(argument) {
    return classof$9(argument) == 'Array';
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
  var lengthOfArrayLike$6 = function (obj) {
    return toLength(obj.length);
  };

  var $TypeError$3 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$3('Maximum allowed index exceeded');
    return it;
  };

  var toPropertyKey$1 = toPropertyKey$4;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$5;

  var createProperty$4 = function (object, key, value) {
    var propertyKey = toPropertyKey$1(key);
    if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$2(0, value));
    else object[propertyKey] = value;
  };

  var wellKnownSymbol$g = wellKnownSymbol$i;

  var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag');
  var test = {};

  test[TO_STRING_TAG$3] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$8 = isCallable$g;
  var classofRaw = classofRaw$2;
  var wellKnownSymbol$f = wellKnownSymbol$i;

  var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');
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
  var classof$8 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$f = functionUncurryThis;
  var isCallable$7 = isCallable$g;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$f(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$7(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$1 = store$1.inspectSource;

  var uncurryThis$e = functionUncurryThis;
  var fails$c = fails$k;
  var isCallable$6 = isCallable$g;
  var classof$7 = classof$8;
  var getBuiltIn$8 = getBuiltIn$a;
  var inspectSource = inspectSource$1;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct$7 = getBuiltIn$8('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$2 = uncurryThis$e(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$6(argument)) return false;
    try {
      construct$7(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$6(argument)) return false;
    switch (classof$7(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$4 = !construct$7 || fails$c(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$a = isArray$b;
  var isConstructor$3 = isConstructor$4;
  var isObject$6 = isObject$b;
  var wellKnownSymbol$e = wellKnownSymbol$i;

  var SPECIES$2 = wellKnownSymbol$e('species');
  var $Array$3 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$a(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$3(C) && (C === $Array$3 || isArray$a(C.prototype))) C = undefined;
      else if (isObject$6(C)) {
        C = C[SPECIES$2];
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

  var fails$b = fails$k;
  var wellKnownSymbol$d = wellKnownSymbol$i;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$1 = wellKnownSymbol$d('species');

  var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$b(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$k = _export;
  var fails$a = fails$k;
  var isArray$9 = isArray$b;
  var isObject$5 = isObject$b;
  var toObject$6 = toObject$8;
  var lengthOfArrayLike$5 = lengthOfArrayLike$6;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty$3 = createProperty$4;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
  var wellKnownSymbol$c = wellKnownSymbol$i;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$c('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$a(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$5(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$9(O);
  };

  var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$1('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$k({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$6(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$5(E);
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

  var classof$6 = classof$8;

  var $String$2 = String;

  var toString$7 = function (argument) {
    if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
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
  var lengthOfArrayLike$4 = lengthOfArrayLike$6;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$6($this);
      var length = lengthOfArrayLike$4(O);
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

  var uncurryThis$d = functionUncurryThis;
  var hasOwn$a = hasOwnProperty_1;
  var toIndexedObject$5 = toIndexedObject$8;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$5;

  var push$4 = uncurryThis$d([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$5(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$a(hiddenKeys$4, key) && hasOwn$a(O, key) && push$4(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
      ~indexOf(result, key) || push$4(result, key);
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

  var DESCRIPTORS$4 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$1 = objectDefineProperty;
  var anObject$7 = anObject$9;
  var toIndexedObject$4 = toIndexedObject$8;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$7(O);
    var props = toIndexedObject$4(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$7 = getBuiltIn$a;

  var html$1 = getBuiltIn$7('document', 'documentElement');

  var shared$5 = sharedExports;
  var uid$1 = uid$3;

  var keys = shared$5('keys');

  var sharedKey$4 = function (key) {
    return keys[key] || (keys[key] = uid$1(key));
  };

  /* global ActiveXObject -- old IE, WSH */

  var anObject$6 = anObject$9;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$3 = hiddenKeys$5;
  var html = html$1;
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
    html.appendChild(iframe);
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
      EmptyConstructor[PROTOTYPE$1] = anObject$6(O);
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
  var lengthOfArrayLike$3 = lengthOfArrayLike$6;
  var createProperty$2 = createProperty$4;

  var $Array$2 = Array;
  var max$1 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$3(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
    var result = $Array$2(max$1(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty$2(result, n, O[k]);
    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$5 = classofRaw$2;
  var toIndexedObject$3 = toIndexedObject$8;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$3 = arraySliceSimple;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$3(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$5(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames$1(toIndexedObject$3(it));
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;

  var defineBuiltIn$4 = function (target, key, value, options) {
    if (options && options.enumerable) target[key] = value;
    else createNonEnumerableProperty$3(target, key, value);
    return target;
  };

  var defineProperty$3 = objectDefineProperty;

  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    return defineProperty$3.f(target, name, descriptor);
  };

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$b = wellKnownSymbol$i;

  wellKnownSymbolWrapped.f = wellKnownSymbol$b;

  var path$a = path$e;
  var hasOwn$9 = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$2 = objectDefineProperty.f;

  var wellKnownSymbolDefine = function (NAME) {
    var Symbol = path$a.Symbol || (path$a.Symbol = {});
    if (!hasOwn$9(Symbol, NAME)) defineProperty$2(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var call$7 = functionCall;
  var getBuiltIn$6 = getBuiltIn$a;
  var wellKnownSymbol$a = wellKnownSymbol$i;
  var defineBuiltIn$3 = defineBuiltIn$4;

  var symbolDefineToPrimitive = function () {
    var Symbol = getBuiltIn$6('Symbol');
    var SymbolPrototype = Symbol && Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol$a('toPrimitive');

    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
      // eslint-disable-next-line no-unused-vars -- required for .length
      defineBuiltIn$3(SymbolPrototype, TO_PRIMITIVE, function (hint) {
        return call$7(valueOf, this);
      }, { arity: 1 });
    }
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$4 = classof$8;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$4(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineProperty$1 = objectDefineProperty.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
  var hasOwn$8 = hasOwnProperty_1;
  var toString$6 = objectToString;
  var wellKnownSymbol$9 = wellKnownSymbol$i;

  var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');

  var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
    if (it) {
      var target = STATIC ? it : it.prototype;
      if (!hasOwn$8(target, TO_STRING_TAG$1)) {
        defineProperty$1(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
      }
      if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
        createNonEnumerableProperty$2(target, 'toString', toString$6);
      }
    }
  };

  var global$6 = global$e;
  var isCallable$5 = isCallable$g;

  var WeakMap$1 = global$6.WeakMap;

  var weakMapBasicDetection = isCallable$5(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$5 = global$e;
  var isObject$4 = isObject$b;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
  var hasOwn$7 = hasOwnProperty_1;
  var shared$4 = sharedStore;
  var sharedKey$2 = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$5;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$2 = global$5.TypeError;
  var WeakMap = global$5.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
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
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
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
    set = function (it, metadata) {
      if (hasOwn$7(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$1(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$7(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$7(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var bind$a = functionBindContext;
  var uncurryThis$c = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$5 = toObject$8;
  var lengthOfArrayLike$2 = lengthOfArrayLike$6;
  var arraySpeciesCreate = arraySpeciesCreate$2;

  var push$3 = uncurryThis$c([].push);

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
      var boundFunction = bind$a(callbackfn, that);
      var length = lengthOfArrayLike$2(self);
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
            case 2: push$3(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$3(target, value);      // filterReject
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

  var $$j = _export;
  var global$4 = global$e;
  var call$6 = functionCall;
  var uncurryThis$b = functionUncurryThis;
  var DESCRIPTORS$3 = descriptors;
  var NATIVE_SYMBOL$3 = symbolConstructorDetection;
  var fails$9 = fails$k;
  var hasOwn$6 = hasOwnProperty_1;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var anObject$5 = anObject$9;
  var toIndexedObject$2 = toIndexedObject$8;
  var toPropertyKey = toPropertyKey$4;
  var $toString = toString$7;
  var createPropertyDescriptor$1 = createPropertyDescriptor$5;
  var nativeObjectCreate = objectCreate;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var defineBuiltIn$2 = defineBuiltIn$4;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;
  var shared$3 = sharedExports;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys = hiddenKeys$5;
  var uid = uid$3;
  var wellKnownSymbol$8 = wellKnownSymbol$i;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$l = wellKnownSymbolDefine;
  var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
  var setToStringTag$4 = setToStringTag$5;
  var InternalStateModule$2 = internalState;
  var $forEach$1 = arrayIteration.forEach;

  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';

  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState$2 = InternalStateModule$2.getterFor(SYMBOL);

  var ObjectPrototype$2 = Object[PROTOTYPE];
  var $Symbol = global$4.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$1 = global$4.TypeError;
  var QObject = global$4.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$2 = uncurryThis$b([].push);

  var AllSymbols = shared$3('symbols');
  var ObjectPrototypeSymbols = shared$3('op-symbols');
  var WellKnownSymbolsStore$1 = shared$3('wks');

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = DESCRIPTORS$3 && fails$9(function () {
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
    setInternalState$2(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$3) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$2) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$5(O);
    var key = toPropertyKey(P);
    anObject$5(Attributes);
    if (hasOwn$6(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$6(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$6(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$1(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$5(O);
    var properties = toIndexedObject$2(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$3 || call$6($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = call$6(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$2 && hasOwn$6(AllSymbols, P) && !hasOwn$6(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$6(this, P) || !hasOwn$6(AllSymbols, P) || hasOwn$6(this, HIDDEN) && this[HIDDEN][P]
      ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$2(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype$2 && hasOwn$6(AllSymbols, key) && !hasOwn$6(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwn$6(AllSymbols, key) && !(hasOwn$6(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$6(AllSymbols, key) && !hasOwn$6(hiddenKeys, key)) push$2(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function (O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (hasOwn$6(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$6(ObjectPrototype$2, key))) {
        push$2(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$3) {
    $Symbol = function Symbol() {
      if (isPrototypeOf$4(SymbolPrototype, this)) throw TypeError$1('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype$2) call$6(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$6(this, HIDDEN) && hasOwn$6(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
      };
      if (DESCRIPTORS$3 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    SymbolPrototype = $Symbol[PROTOTYPE];

    defineBuiltIn$2(SymbolPrototype, 'toString', function toString() {
      return getInternalState$2(this).tag;
    });

    defineBuiltIn$2($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });

    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$8(name), name);
    };

    if (DESCRIPTORS$3) {
      // https://github.com/tc39/proposal-Symbol-description
      defineBuiltInAccessor(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$2(this).description;
        }
      });
    }
  }

  $$j({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
    Symbol: $Symbol
  });

  $forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol$l(name);
  });

  $$j({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  $$j({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$3 }, {
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

  $$j({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames
  });

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive$1();

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$4($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var NATIVE_SYMBOL$2 = symbolConstructorDetection;

  /* eslint-disable es/no-symbol -- safe */
  var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

  var $$i = _export;
  var getBuiltIn$5 = getBuiltIn$a;
  var hasOwn$5 = hasOwnProperty_1;
  var toString$5 = toString$7;
  var shared$2 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

  var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  $$i({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
    'for': function (key) {
      var string = toString$5(key);
      if (hasOwn$5(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = getBuiltIn$5('Symbol')(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry$1[symbol] = string;
      return symbol;
    }
  });

  var $$h = _export;
  var hasOwn$4 = hasOwnProperty_1;
  var isSymbol$2 = isSymbol$5;
  var tryToString$2 = tryToString$4;
  var shared$1 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

  var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  $$h({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
    keyFor: function keyFor(sym) {
      if (!isSymbol$2(sym)) throw TypeError(tryToString$2(sym) + ' is not a symbol');
      if (hasOwn$4(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
  });

  var uncurryThis$a = functionUncurryThis;

  var arraySlice$2 = uncurryThis$a([].slice);

  var uncurryThis$9 = functionUncurryThis;
  var isArray$8 = isArray$b;
  var isCallable$4 = isCallable$g;
  var classof$3 = classofRaw$2;
  var toString$4 = toString$7;

  var push$1 = uncurryThis$9([].push);

  var getJsonReplacerFunction = function (replacer) {
    if (isCallable$4(replacer)) return replacer;
    if (!isArray$8(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$1(keys, element);
      else if (typeof element == 'number' || classof$3(element) == 'Number' || classof$3(element) == 'String') push$1(keys, toString$4(element));
    }
    var keysLength = keys.length;
    var root = true;
    return function (key, value) {
      if (root) {
        root = false;
        return value;
      }
      if (isArray$8(this)) return value;
      for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
    };
  };

  var $$g = _export;
  var getBuiltIn$4 = getBuiltIn$a;
  var apply$1 = functionApply;
  var call$5 = functionCall;
  var uncurryThis$8 = functionUncurryThis;
  var fails$8 = fails$k;
  var isCallable$3 = isCallable$g;
  var isSymbol$1 = isSymbol$5;
  var arraySlice$1 = arraySlice$2;
  var getReplacerFunction = getJsonReplacerFunction;
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var $String$1 = String;
  var $stringify = getBuiltIn$4('JSON', 'stringify');
  var exec$1 = uncurryThis$8(/./.exec);
  var charAt$2 = uncurryThis$8(''.charAt);
  var charCodeAt$1 = uncurryThis$8(''.charCodeAt);
  var replace$1 = uncurryThis$8(''.replace);
  var numberToString = uncurryThis$8(1.0.toString);

  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$8(function () {
    var symbol = getBuiltIn$4('Symbol')();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails$8(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify('\uDEAD') !== '"\\udead"';
  });

  var stringifyWithSymbolsFix = function (it, replacer) {
    var args = arraySlice$1(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$3($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$3($replacer)) value = call$5($replacer, this, $String$1(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply$1($stringify, null, args);
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
    $$g({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$1(arguments);
        var result = apply$1(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$1(result, tester, fixIllFormed) : result;
      }
    });
  }

  var $$f = _export;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var fails$7 = fails$k;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var toObject$4 = toObject$8;

  // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FORCED$2 = !NATIVE_SYMBOL || fails$7(function () { getOwnPropertySymbolsModule$1.f(1); });

  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  $$f({ target: 'Object', stat: true, forced: FORCED$2 }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
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

  var getBuiltIn$3 = getBuiltIn$a;
  var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
  var setToStringTag$3 = setToStringTag$5;

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol$9('toStringTag');

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$3(getBuiltIn$3('Symbol'), 'Symbol');

  var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

  // `Symbol.unscopables` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.unscopables
  defineWellKnownSymbol$8('unscopables');

  var global$3 = global$e;
  var setToStringTag$2 = setToStringTag$5;

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag$2(global$3.JSON, 'JSON', true);

  var path$9 = path$e;

  var symbol$5 = path$9.Symbol;

  var iterators = {};

  var DESCRIPTORS$2 = descriptors;
  var hasOwn$3 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$3(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var fails$6 = fails$k;

  var correctPrototypeGetter = !fails$6(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$2 = hasOwnProperty_1;
  var isCallable$2 = isCallable$g;
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
    if (hasOwn$2(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$2(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype$1 : null;
  };

  var fails$5 = fails$k;
  var isCallable$1 = isCallable$g;
  var isObject$3 = isObject$b;
  var create$9 = objectCreate;
  var getPrototypeOf$7 = objectGetPrototypeOf;
  var defineBuiltIn$1 = defineBuiltIn$4;
  var wellKnownSymbol$7 = wellKnownSymbol$i;

  var ITERATOR$5 = wellKnownSymbol$7('iterator');
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
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$7(getPrototypeOf$7(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$3(IteratorPrototype$1) || fails$5(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$1[ITERATOR$5].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
  else IteratorPrototype$1 = create$9(IteratorPrototype$1);

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$1(IteratorPrototype$1[ITERATOR$5])) {
    defineBuiltIn$1(IteratorPrototype$1, ITERATOR$5, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$1,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var create$8 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$5;
  var setToStringTag$1 = setToStringTag$5;
  var Iterators$5 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$8(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators$5[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$7 = functionUncurryThis;
  var aCallable$2 = aCallable$5;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$7(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable = isCallable$g;

  var $String = String;
  var $TypeError$2 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable(argument)) return argument;
    throw $TypeError$2("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$4 = anObject$9;
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
      anObject$4(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$e = _export;
  var call$4 = functionCall;
  var FunctionName = functionName;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf$6 = objectGetPrototypeOf;
  var setToStringTag = setToStringTag$5;
  var defineBuiltIn = defineBuiltIn$4;
  var wellKnownSymbol$6 = wellKnownSymbol$i;
  var Iterators$4 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  FunctionName.CONFIGURABLE;
  IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol$6('iterator');
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
      CurrentIteratorPrototype = getPrototypeOf$6(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        Iterators$4[TO_STRING_TAG] = returnThis;
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$4(nativeIterator, this); };
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
          defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$e({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if ((FORCED) && IterablePrototype[ITERATOR$4] !== defaultIterator) {
      defineBuiltIn(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
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
  var InternalStateModule$1 = internalState;
  objectDefineProperty.f;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$1 = createIterResultObject$2;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

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
    setInternalState$1(this, {
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
  var global$2 = global$e;
  var classof$2 = classof$8;
  var createNonEnumerableProperty = createNonEnumerableProperty$5;
  var Iterators$2 = iterators;
  var wellKnownSymbol$5 = wellKnownSymbol$i;

  var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');

  for (var COLLECTION_NAME in DOMIterables$1) {
    var Collection = global$2[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype && classof$2(CollectionPrototype) !== TO_STRING_TAG) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
  }

  var parent$L = symbol$5;


  var symbol$4 = parent$L;

  var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

  // `Symbol.dispose` well-known symbol
  // https://github.com/tc39/proposal-explicit-resource-management
  defineWellKnownSymbol$7('dispose');

  var parent$K = symbol$4;



  var symbol$3 = parent$K;

  var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

  // `Symbol.asyncDispose` well-known symbol
  // https://github.com/tc39/proposal-async-explicit-resource-management
  defineWellKnownSymbol$6('asyncDispose');

  var $$d = _export;
  var getBuiltIn$2 = getBuiltIn$a;
  var uncurryThis$6 = functionUncurryThis;

  var Symbol$3 = getBuiltIn$2('Symbol');
  var keyFor = Symbol$3.keyFor;
  var thisSymbolValue$1 = uncurryThis$6(Symbol$3.prototype.valueOf);

  // `Symbol.isRegistered` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregistered
  $$d({ target: 'Symbol', stat: true }, {
    isRegistered: function isRegistered(value) {
      try {
        return keyFor(thisSymbolValue$1(value)) !== undefined;
      } catch (error) {
        return false;
      }
    }
  });

  var $$c = _export;
  var shared = sharedExports;
  var getBuiltIn$1 = getBuiltIn$a;
  var uncurryThis$5 = functionUncurryThis;
  var isSymbol = isSymbol$5;
  var wellKnownSymbol$4 = wellKnownSymbol$i;

  var Symbol$2 = getBuiltIn$1('Symbol');
  var $isWellKnown = Symbol$2.isWellKnown;
  var getOwnPropertyNames = getBuiltIn$1('Object', 'getOwnPropertyNames');
  var thisSymbolValue = uncurryThis$5(Symbol$2.prototype.valueOf);
  var WellKnownSymbolsStore = shared('wks');

  for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$2), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
    // some old engines throws on access to some keys like `arguments` or `caller`
    try {
      var symbolKey = symbolKeys[i];
      if (isSymbol(Symbol$2[symbolKey])) wellKnownSymbol$4(symbolKey);
    } catch (error) { /* empty */ }
  }

  // `Symbol.isWellKnown` method
  // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknown
  // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
  $$c({ target: 'Symbol', stat: true, forced: true }, {
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

  var parent$J = symbol$3;






  // TODO: Remove from `core-js@4`




  var symbol$2 = parent$J;

  var symbol$1 = symbol$2;

  var symbol = symbol$1;

  var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

  var uncurryThis$4 = functionUncurryThis;
  var toIntegerOrInfinity = toIntegerOrInfinity$3;
  var toString$3 = toString$7;
  var requireObjectCoercible$1 = requireObjectCoercible$4;

  var charAt$1 = uncurryThis$4(''.charAt);
  var charCodeAt = uncurryThis$4(''.charCodeAt);
  var stringSlice = uncurryThis$4(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$3(requireObjectCoercible$1($this));
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
  var toString$2 = toString$7;
  var InternalStateModule = internalState;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$2;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: toString$2(iterated),
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

  var parent$I = iterator$5;


  var iterator$4 = parent$I;

  var parent$H = iterator$4;

  var iterator$3 = parent$H;

  var parent$G = iterator$3;

  var iterator$2 = parent$G;

  var iterator$1 = iterator$2;

  var iterator = iterator$1;

  var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

  var toPrimitive$5 = WrappedWellKnownSymbolModule.f('toPrimitive');

  var parent$F = toPrimitive$5;

  var toPrimitive$4 = parent$F;

  var parent$E = toPrimitive$4;

  var toPrimitive$3 = parent$E;

  var parent$D = toPrimitive$3;

  var toPrimitive$2 = parent$D;

  var toPrimitive$1 = toPrimitive$2;

  var toPrimitive = toPrimitive$1;

  var _Symbol$toPrimitive = /*@__PURE__*/getDefaultExportFromCjs(toPrimitive);

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[_Symbol$toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
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

  var fails$4 = fails$k;

  var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$4(function () {
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

  var $$b = _export;
  var forEach$7 = arrayForEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  $$b({ target: 'Array', proto: true, forced: [].forEach != forEach$7 }, {
    forEach: forEach$7
  });

  var path$8 = path$e;

  var entryVirtual$4 = function (CONSTRUCTOR) {
    return path$8[CONSTRUCTOR + 'Prototype'];
  };

  var entryVirtual$3 = entryVirtual$4;

  var forEach$6 = entryVirtual$3('Array').forEach;

  var parent$C = forEach$6;

  var forEach$5 = parent$C;

  var classof$1 = classof$8;
  var hasOwn$1 = hasOwnProperty_1;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var method$3 = forEach$5;

  var ArrayPrototype$3 = Array.prototype;

  var DOMIterables = {
    DOMTokenList: true,
    NodeList: true
  };

  var forEach$4 = function (it) {
    var own = it.forEach;
    return it === ArrayPrototype$3 || (isPrototypeOf$3(ArrayPrototype$3, it) && own === ArrayPrototype$3.forEach)
      || hasOwn$1(DOMIterables, classof$1(it)) ? method$3 : own;
  };

  var parent$B = forEach$4;

  var forEach$3 = parent$B;

  var parent$A = forEach$3;

  var forEach$2 = parent$A;

  var forEach$1 = forEach$2;

  var forEach = forEach$1;

  var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach);

  var entryVirtual$2 = entryVirtual$4;

  var concat$8 = entryVirtual$2('Array').concat;

  var isPrototypeOf$2 = objectIsPrototypeOf;
  var method$2 = concat$8;

  var ArrayPrototype$2 = Array.prototype;

  var concat$7 = function (it) {
    var own = it.concat;
    return it === ArrayPrototype$2 || (isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.concat) ? method$2 : own;
  };

  var parent$z = concat$7;

  var concat$6 = parent$z;

  var parent$y = concat$6;

  var concat$5 = parent$y;

  var parent$x = concat$5;

  var concat$4 = parent$x;

  var concat$3 = concat$4;

  var concat$2 = concat$3;

  var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat$2);

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

  var uncurryThis$3 = functionUncurryThis;
  var requireObjectCoercible = requireObjectCoercible$4;
  var toString$1 = toString$7;
  var whitespaces$1 = whitespaces$2;

  var replace = uncurryThis$3(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$1(requireObjectCoercible($this));
      if (TYPE & 1) string = replace(string, ltrim, '');
      if (TYPE & 2) string = replace(string, rtrim, '$1');
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

  var global$1 = global$e;
  var fails$3 = fails$k;
  var uncurryThis$2 = functionUncurryThis;
  var toString = toString$7;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$2;

  var $parseInt$1 = global$1.parseInt;
  var Symbol$1 = global$1.Symbol;
  var ITERATOR$3 = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec = uncurryThis$2(hex.exec);
  var FORCED$1 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$3 && !fails$3(function () { $parseInt$1(Object(ITERATOR$3)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
    var S = trim(toString(string));
    return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $$a = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$a({ global: true, forced: parseInt != $parseInt }, {
    parseInt: $parseInt
  });

  var path$7 = path$e;

  var _parseInt$6 = path$7.parseInt;

  var parent$w = _parseInt$6;

  var _parseInt$5 = parent$w;

  var parent$v = _parseInt$5;

  var _parseInt$4 = parent$v;

  var parent$u = _parseInt$4;

  var _parseInt$3 = parent$u;

  var _parseInt$2 = _parseInt$3;

  var _parseInt = _parseInt$2;

  var _parseInt$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt);

  var $$9 = _export;
  var isArray$7 = isArray$b;
  var isConstructor$2 = isConstructor$4;
  var isObject$2 = isObject$b;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var lengthOfArrayLike$1 = lengthOfArrayLike$6;
  var toIndexedObject = toIndexedObject$8;
  var createProperty$1 = createProperty$4;
  var wellKnownSymbol$3 = wellKnownSymbol$i;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;
  var nativeSlice = arraySlice$2;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

  var SPECIES = wellKnownSymbol$3('species');
  var $Array$1 = Array;
  var max = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$9({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike$1(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$7(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor$2(Constructor) && (Constructor === $Array$1 || isArray$7(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$2(Constructor)) {
          Constructor = Constructor[SPECIES];
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

  var entryVirtual$1 = entryVirtual$4;

  var slice$6 = entryVirtual$1('Array').slice;

  var isPrototypeOf$1 = objectIsPrototypeOf;
  var method$1 = slice$6;

  var ArrayPrototype$1 = Array.prototype;

  var slice$5 = function (it) {
    var own = it.slice;
    return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.slice) ? method$1 : own;
  };

  var parent$t = slice$5;

  var slice$4 = parent$t;

  var parent$s = slice$4;

  var slice$3 = parent$s;

  var parent$r = slice$3;

  var slice$2 = parent$r;

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

  var uncurryThis$1 = functionUncurryThis;
  var aCallable$1 = aCallable$5;
  var isObject$1 = isObject$b;
  var hasOwn = hasOwnProperty_1;
  var arraySlice = arraySlice$2;
  var NATIVE_BIND = functionBindNative;

  var $Function = Function;
  var concat$1 = uncurryThis$1([].concat);
  var join = uncurryThis$1([].join);
  var factories = {};

  var construct$6 = function (C, argsLength, args) {
    if (!hasOwn(factories, argsLength)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
    var F = aCallable$1(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = concat$1(partArgs, arraySlice(arguments));
      return this instanceof boundFunction ? construct$6(F, args.length, args) : F.apply(that, args);
    };
    if (isObject$1(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  var isConstructor$1 = isConstructor$4;
  var tryToString$1 = tryToString$4;

  var $TypeError$1 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor$1(argument)) return argument;
    throw $TypeError$1(tryToString$1(argument) + ' is not a constructor');
  };

  var $$8 = _export;
  var getBuiltIn = getBuiltIn$a;
  var apply = functionApply;
  var bind$9 = functionBind;
  var aConstructor = aConstructor$1;
  var anObject$3 = anObject$9;
  var isObject = isObject$b;
  var create$7 = objectCreate;
  var fails$2 = fails$k;

  var nativeConstruct = getBuiltIn('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push = [].push;

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails$2(function () {
    function F() { /* empty */ }
    return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
  });

  var ARGS_BUG = !fails$2(function () {
    nativeConstruct(function () { /* empty */ });
  });

  var FORCED = NEW_TARGET_BUG || ARGS_BUG;

  $$8({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
    construct: function construct(Target, args /* , newTarget */) {
      aConstructor(Target);
      anObject$3(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
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
        apply(push, $args, args);
        return new (apply(bind$9, Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = create$7(isObject(proto) ? proto : ObjectPrototype);
      var result = apply(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });

  var path$6 = path$e;

  var construct$5 = path$6.Reflect.construct;

  var parent$q = construct$5;

  var construct$4 = parent$q;

  var parent$p = construct$4;

  var construct$3 = parent$p;

  var parent$o = construct$3;

  var construct$2 = parent$o;

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
  var $$7 = _export;
  var DESCRIPTORS$1 = descriptors;
  var create$6 = objectCreate;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  $$7({ target: 'Object', stat: true, sham: !DESCRIPTORS$1 }, {
    create: create$6
  });

  var path$5 = path$e;

  var Object$1 = path$5.Object;

  var create$5 = function create(P, D) {
    return Object$1.create(P, D);
  };

  var parent$n = create$5;

  var create$4 = parent$n;

  var parent$m = create$4;

  var create$3 = parent$m;

  var parent$l = create$3;

  var create$2 = parent$l;

  var create$1 = create$2;

  var create = create$1;

  var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create);

  var $$6 = _export;
  var setPrototypeOf$6 = objectSetPrototypeOf;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  $$6({ target: 'Object', stat: true }, {
    setPrototypeOf: setPrototypeOf$6
  });

  var path$4 = path$e;

  var setPrototypeOf$5 = path$4.Object.setPrototypeOf;

  var parent$k = setPrototypeOf$5;

  var setPrototypeOf$4 = parent$k;

  var parent$j = setPrototypeOf$4;

  var setPrototypeOf$3 = parent$j;

  var parent$i = setPrototypeOf$3;

  var setPrototypeOf$2 = parent$i;

  var setPrototypeOf$1 = setPrototypeOf$2;

  var setPrototypeOf = setPrototypeOf$1;

  var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf);

  // TODO: Remove from `core-js@4`
  var $$5 = _export;
  var bind$8 = functionBind;

  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  $$5({ target: 'Function', proto: true, forced: Function.bind !== bind$8 }, {
    bind: bind$8
  });

  var entryVirtual = entryVirtual$4;

  var bind$7 = entryVirtual('Function').bind;

  var isPrototypeOf = objectIsPrototypeOf;
  var method = bind$7;

  var FunctionPrototype = Function.prototype;

  var bind$6 = function (it) {
    var own = it.bind;
    return it === FunctionPrototype || (isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method : own;
  };

  var parent$h = bind$6;

  var bind$5 = parent$h;

  var parent$g = bind$5;

  var bind$4 = parent$g;

  var parent$f = bind$4;

  var bind$3 = parent$f;

  var bind$2 = bind$3;

  var bind$1 = bind$2;

  var _bindInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(bind$1);

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
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }

  var $$4 = _export;
  var fails$1 = fails$k;
  var toObject$2 = toObject$8;
  var nativeGetPrototypeOf = objectGetPrototypeOf;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var FAILS_ON_PRIMITIVES = fails$1(function () { nativeGetPrototypeOf(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $$4({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$2(it));
    }
  });

  var path$3 = path$e;

  var getPrototypeOf$5 = path$3.Object.getPrototypeOf;

  var parent$e = getPrototypeOf$5;

  var getPrototypeOf$4 = parent$e;

  var parent$d = getPrototypeOf$4;

  var getPrototypeOf$3 = parent$d;

  var parent$c = getPrototypeOf$3;

  var getPrototypeOf$2 = parent$c;

  var getPrototypeOf$1 = getPrototypeOf$2;

  var getPrototypeOf = getPrototypeOf$1;

  var _Object$getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf);

  function _getPrototypeOf(o) {
    var _context;
    _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf(o) {
      return o.__proto__ || _Object$getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var DESCRIPTORS = descriptors;
  var uncurryThis = functionUncurryThis;
  var call$3 = functionCall;
  var fails = fails$k;
  var objectKeys = objectKeys$3;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$1 = toObject$8;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty = Object.defineProperty;
  var concat = uncurryThis([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
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
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS || call$3(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$3 = _export;
  var assign$6 = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$3({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$6 }, {
    assign: assign$6
  });

  var path$2 = path$e;

  var assign$5 = path$2.Object.assign;

  var parent$b = assign$5;

  var assign$4 = parent$b;

  var parent$a = assign$4;

  var assign$3 = parent$a;

  var parent$9 = assign$3;

  var assign$2 = parent$9;

  var assign$1 = assign$2;

  var assign = assign$1;

  var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign);

  var $$2 = _export;
  var isArray$6 = isArray$b;

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  $$2({ target: 'Array', stat: true }, {
    isArray: isArray$6
  });

  var path$1 = path$e;

  var isArray$5 = path$1.Array.isArray;

  var parent$8 = isArray$5;

  var isArray$4 = parent$8;

  var parent$7 = isArray$4;

  var isArray$3 = parent$7;

  var parent$6 = isArray$3;

  var isArray$2 = parent$6;

  var isArray$1 = isArray$2;

  var isArray = isArray$1;

  var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray);

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (_Array$isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  var classof = classof$8;
  var getMethod$1 = getMethod$3;
  var isNullOrUndefined = isNullOrUndefined$3;
  var Iterators$1 = iterators;
  var wellKnownSymbol$2 = wellKnownSymbol$i;

  var ITERATOR$2 = wellKnownSymbol$2('iterator');

  var getIteratorMethod$8 = function (it) {
    if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$2)
      || getMethod$1(it, '@@iterator')
      || Iterators$1[classof(it)];
  };

  var getIteratorMethod$7 = getIteratorMethod$8;

  var getIteratorMethod_1 = getIteratorMethod$7;

  var parent$5 = getIteratorMethod_1;


  var getIteratorMethod$6 = parent$5;

  var parent$4 = getIteratorMethod$6;

  var getIteratorMethod$5 = parent$4;

  var parent$3 = getIteratorMethod$5;

  var getIteratorMethod$4 = parent$3;

  var getIteratorMethod$3 = getIteratorMethod$4;

  var getIteratorMethod$2 = getIteratorMethod$3;

  var _getIteratorMethod = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$2);

  var call$2 = functionCall;
  var anObject$2 = anObject$9;
  var getMethod = getMethod$3;

  var iteratorClose$1 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$2(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$2(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$2(innerResult);
    return value;
  };

  var anObject$1 = anObject$9;
  var iteratorClose = iteratorClose$1;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  var wellKnownSymbol$1 = wellKnownSymbol$i;
  var Iterators = iterators;

  var ITERATOR$1 = wellKnownSymbol$1('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR$1] === it);
  };

  var call$1 = functionCall;
  var aCallable = aCallable$5;
  var anObject = anObject$9;
  var tryToString = tryToString$4;
  var getIteratorMethod$1 = getIteratorMethod$8;

  var $TypeError = TypeError;

  var getIterator$1 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call$1(iteratorMethod, argument));
    throw $TypeError(tryToString(argument) + ' is not iterable');
  };

  var bind = functionBindContext;
  var call = functionCall;
  var toObject = toObject$8;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod = isArrayIteratorMethod$1;
  var isConstructor = isConstructor$4;
  var lengthOfArrayLike = lengthOfArrayLike$6;
  var createProperty = createProperty$4;
  var getIterator = getIterator$1;
  var getIteratorMethod = getIteratorMethod$8;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = call(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var wellKnownSymbol = wellKnownSymbol$i;

  var ITERATOR = wellKnownSymbol('iterator');
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

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
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

  var $$1 = _export;
  var from$6 = arrayFrom;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$1({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from$6
  });

  var path = path$e;

  var from$5 = path.Array.from;

  var parent$2 = from$5;

  var from$4 = parent$2;

  var parent$1 = from$4;

  var from$3 = parent$1;

  var parent = from$3;

  var from$2 = parent;

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

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var SELECTOR_REG = /([\w-]+)?(?:#([\w-]+))?(?:\.([\w-]+))?/;
  /**
   * @description 根据desc的标签描述和props的属性描述来创建一个DOM对象，并且在实例上挂载各种属性
   * @param {string} desc
   * @param {DOMProps} props
   * @param {Node[]} children
   * @returns
   */
  function $(desc, props, children) {
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
      if (_typeof(props[key]) === 'object') {
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
      var _iterator = _createForOfIteratorHelper(children),
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
    var _iterator2 = _createForOfIteratorHelper(classNames),
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

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Component = /*#__PURE__*/function (_BaseEvent) {
    _inherits(Component, _BaseEvent);
    var _super = _createSuper$8(Component);
    //el代表着该组件对应的整个HTML元素
    function Component(container, desc, props, children) {
      var _this;
      _classCallCheck(this, Component);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "el", void 0);
      var dom = $(desc, props, children);
      _this.el = dom;
      // 安装组件成功
      container.append(dom);
      return _this;
    }
    return _createClass(Component);
  }(BaseEvent);

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Dot = /*#__PURE__*/function (_Component) {
    _inherits(Dot, _Component);
    var _super = _createSuper$7(Dot);
    function Dot(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Dot);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Dot');
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.props = props;
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(Dot, [{
      key: "init",
      value: function init() {
        addClass(this.el, ['video-dot', 'video-dot-hidden']);
        this.initEvent();
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

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var CompletedProgress = /*#__PURE__*/function (_Component) {
    _inherits(CompletedProgress, _Component);
    var _super = _createSuper$6(CompletedProgress);
    function CompletedProgress(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, CompletedProgress);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'CompletedProgress');
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.props = props;
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(CompletedProgress, [{
      key: "init",
      value: function init() {
        this.initEvent();
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
    return CompletedProgress;
  }(Component);

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var BufferedProgress = /*#__PURE__*/function (_Component) {
    _inherits(BufferedProgress, _Component);
    var _super = _createSuper$5(BufferedProgress);
    function BufferedProgress(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, BufferedProgress);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'BufferedProgress');
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.props = props;
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(BufferedProgress, [{
      key: "init",
      value: function init() {
        this.initEvent();
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

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Progress = /*#__PURE__*/function (_Component) {
    _inherits(Progress, _Component);
    var _super = _createSuper$4(Progress);
    function Progress(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Progress);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Progress');
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "dot", void 0);
      _defineProperty(_assertThisInitialized(_this), "completedProgress", void 0);
      _defineProperty(_assertThisInitialized(_this), "bufferedProgress", void 0);
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(Progress, [{
      key: "init",
      value: function init() {
        this.initComponent();
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
          _this2.player.emit('progress-mouseenter', e, _this2);
        };
        this.el.onmouseleave = function (e) {
          _this2.player.emit('progress-mouseleave', e, _this2);
        };
        this.el.onclick = function (e) {
          _this2.player.emit('progress-click', e, _this2);
        };
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

  var playPath = 'M254.132978 880.390231c-6.079462 0-12.155854-1.511423-17.643845-4.497431-11.828396-6.482645-19.195178-18.85851-19.195178-32.341592L217.293955 180.465165c0-13.483082 7.366781-25.898857 19.195178-32.346709 11.787464-6.483668 26.226315-5.928013 37.57478 1.363044L789.797957 481.028615c10.536984 6.77531 16.908088 18.456351 16.908088 30.979572 0 12.523221-6.371104 24.203238-16.908088 30.982642L274.063913 874.53385C267.983427 878.403994 261.060761 880.390231 254.132978 880.390231L254.132978 880.390231zM254.132978 880.390231';
  var pausePath = 'M304 176h80v672h-80zM712 176h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z';

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PlayButton = /*#__PURE__*/function (_Component) {
    _inherits(PlayButton, _Component);
    var _super = _createSuper$3(PlayButton);
    function PlayButton(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, PlayButton);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'PlayButton');
      _defineProperty(_assertThisInitialized(_this), "pauseIcon", void 0);
      _defineProperty(_assertThisInitialized(_this), "playIcon", void 0);
      _defineProperty(_assertThisInitialized(_this), "button", void 0);
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(PlayButton, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initEvent();
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        this.pauseIcon = createSvg(pausePath);
        this.playIcon = createSvg(playPath);
        this.button = this.playIcon;
        this.el.appendChild(this.button);
      }
    }, {
      key: "initEvent",
      value: function initEvent() {
        var _this2 = this;
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
        this.el.onclick = function (e) {
          if (_this2.player.video.paused) {
            _this2.player.video.play();
          } else {
            _this2.player.video.pause();
          }
        };
      }
    }]);
    return PlayButton;
  }(Component);

  var css_248z$3 = ".video-play {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px 5px 0 5px;\n}\n.video-play .video-subplay {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 22px;\n}\n.video-play .video-subplay .video-start-pause {\n  height: 100%;\n  margin-right: 5px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-subplay .video-start-pause svg {\n  width: 20px;\n  height: 20px;\n}\n.video-play .video-subplay .video-start-pause svg path {\n  fill: #fff;\n  stroke-width: 3px;\n}\n.video-play .video-subplay .video-duration {\n  margin-left: 5px;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n}\n.video-play .video-settings {\n  position: relative;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 20px;\n  color: hsla(0, 0%, 100%, 0.8);\n  fill: hsla(0, 0%, 100%, 0.8);\n  height: 22px;\n}\n.video-play .video-settings .video-subsettings svg {\n  -webkit-transition: fill 0.15s ease-in-out;\n  transition: fill 0.15s ease-in-out;\n}\n.video-play .video-settings .video-volume {\n  position: relative;\n}\n.video-play .video-settings .video-volume .video-volume-set {\n  position: absolute;\n  bottom: 41px;\n  left: 50%;\n  margin-left: -16px;\n  width: 32px;\n  height: 100px;\n  padding-bottom: 8px;\n  background: rgba(21, 21, 21, 0.9);\n  border-radius: 2px;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-volume-show {\n  width: 100%;\n  height: 15px;\n  padding-top: 5px;\n  text-align: center;\n  line-height: 15px;\n  font-size: 12px;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-voulme-progress {\n  width: 2px;\n  height: calc(100% - 20px - 10px);\n  margin-top: 8px;\n  margin-left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background-color: #fff;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-voulme-progress .video-volume-completed {\n  height: 50%;\n  width: 100%;\n  background-color: #00a1d6;\n}\n.video-play .video-settings .video-volume .video-volume-set .video-voulme-progress .video-volume-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #00a1d6;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 1003;\n}\n.video-play .video-settings .video-playrate {\n  position: relative;\n}\n.video-play .video-settings .video-playrate .video-playrate-set {\n  border-radius: 2px;\n  bottom: 41px;\n  background-color: rgba(21, 21, 21, 0.9);\n  width: 70px;\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  list-style: none;\n  outline: none;\n}\n.video-play .video-settings .video-playrate .video-playrate-set li {\n  color: #fff;\n  text-align: center;\n  height: 36px;\n  line-height: 36px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.video-play .video-settings .video-playrate .video-playrate-set li:hover {\n  background-color: #C9CCD0;\n}\n.video-play .video-settings .video-resolvepower {\n  position: relative;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set {\n  list-style: none;\n  outline: none;\n  border-radius: 2px;\n  bottom: 41px;\n  background-color: rgba(21, 21, 21, 0.9);\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  cursor: pointer;\n  display: none;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set li {\n  width: 145px;\n  padding: 0 12px;\n  height: 36px;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.video-play .video-settings .video-resolvepower .video-resolvepower-set li:hover {\n  background-color: #C9CCD0;\n}\n.video-play .video-settings .video-playrate,\n.video-play .video-settings .video-resolvepower {\n  font-size: 14px;\n  font-weight: 550;\n  color: #fff;\n  margin: 0 10px;\n}\n.video-play .video-settings .video-controller {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 33px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  color: #fff;\n  opacity: 0.9;\n}\n.video-play .video-settings .video-controller .video-icon {\n  height: 100%;\n  width: 100%;\n}\n";
  styleInject(css_248z$3);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Controller = /*#__PURE__*/function (_Component) {
    _inherits(Controller, _Component);
    var _super = _createSuper$2(Controller);
    function Controller(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, Controller);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'Controller');
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "playButton", void 0);
      _defineProperty(_assertThisInitialized(_this), "subPlay", void 0);
      _defineProperty(_assertThisInitialized(_this), "settings", void 0);
      _this.player = player;
      _this.init();
      return _this;
    }
    _createClass(Controller, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initComponent();
      }
    }, {
      key: "initTemplate",
      value: function initTemplate() {
        this.subPlay = $('div.video-subplay');
        this.settings = $('div.video-settings');
        this.el.appendChild(this.subPlay);
        this.el.appendChild(this.settings);
      }
    }, {
      key: "initComponent",
      value: function initComponent() {
        this.playButton = new PlayButton(this.player, this.subPlay, 'div.video-start-pause');
      }
    }]);
    return Controller;
  }(Component);

  var css_248z$2 = ".video-controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  color: #fff;\n  height: 55px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n";
  styleInject(css_248z$2);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var ToolBar = /*#__PURE__*/function (_Component) {
    _inherits(ToolBar, _Component);
    var _super = _createSuper$1(ToolBar);
    function ToolBar(player, container, desc, props, children) {
      var _this;
      _classCallCheck(this, ToolBar);
      _this = _super.call(this, container, desc, props, children);
      _defineProperty(_assertThisInitialized(_this), "id", 'ToolBar');
      _defineProperty(_assertThisInitialized(_this), "player", void 0);
      _defineProperty(_assertThisInitialized(_this), "progress", void 0);
      _defineProperty(_assertThisInitialized(_this), "controller", void 0);
      _defineProperty(_assertThisInitialized(_this), "props", void 0);
      _defineProperty(_assertThisInitialized(_this), "timer", 0);
      _this.player = player;
      _this.props = props;
      _this.init();
      return _this;
    }
    _createClass(ToolBar, [{
      key: "init",
      value: function init() {
        this.initTemplate();
        this.initComponent();
        this.initEvent();
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
      // 播放器的默认配置
      _defineProperty(_assertThisInitialized(_this), "playerOptions", {
        url: '',
        autoplay: false,
        width: '100%',
        height: '100%'
      });
      _defineProperty(_assertThisInitialized(_this), "video", void 0);
      _defineProperty(_assertThisInitialized(_this), "toolBar", void 0);
      _this.playerOptions = _Object$assign(_this.playerOptions, options);
      options.container.className = 'video-container';
      options.container.style.width = _this.playerOptions.width;
      options.container.style.height = _this.playerOptions.height;
      _this.init();
      return _this;
    }
    _createClass(Player, [{
      key: "init",
      value: function init() {
        this.video = $('video');
        this.video.src = this.playerOptions.url || '';
        this.el.appendChild(this.video);
        this.toolBar = new ToolBar(this, this.el, 'div');
        this.initEvent();
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
      key: "attendSource",
      value: function attendSource(url) {
        this.video.src = url;
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
  exports.Controller = Controller;
  exports.Player = Player;
  exports.Progress = Progress;
  exports.ToolBar = ToolBar;
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
