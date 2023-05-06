'use strict';

function $warn(msg) {
  throw new Error(msg);
}

var icon = {
  iconfont: '',
  'icon-bofang': '',
  'icon-shezhi': '',
  'icon-yinliang': '',
  'icon-quanping': '',
  'icon-cuowutishi': '' // 错误提示
};

var styles = {
  // 'video-container': 'player_video-container__ndwL-',
  'video-container': 'video-container',
  // 'video-wrapper': 'player_video-wrapper__zkaDS',
  'video-wrapper': 'video-wrapper',
  // 'video-controls': 'toolbar_video-controls__z6g6I',
  'video-controls': 'video-controls',
  'video-controls-hidden': '',
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
var global$d =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails$g = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$f = fails$g;

var functionBindNative = !fails$f(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var apply$2 = FunctionPrototype$2.apply;
var call$a = FunctionPrototype$2.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$3 ? call$a.bind(apply$2) : function () {
  return call$a.apply(apply$2, arguments);
});

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$9 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$1.bind.bind(call$9, call$9);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$9.apply(fn, arguments);
  };
};

var uncurryThis$j = functionUncurryThis;

var toString$7 = uncurryThis$j({}.toString);
var stringSlice$1 = uncurryThis$j(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$1(toString$7(it), 8, -1);
};

var classofRaw$1 = classofRaw$2;
var uncurryThis$i = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThis$i(fn);
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
var isCallable$f = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor = {};

var fails$e = fails$g;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var NATIVE_BIND$1 = functionBindNative;

var call$8 = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$8.bind(call$8) : function () {
  return call$8.apply(call$8, arguments);
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

var uncurryThis$h = functionUncurryThis;
var fails$d = fails$g;
var classof$8 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$h(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$d(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$6 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$3 = function (it) {
  if (isNullOrUndefined$1(it)) throw $TypeError$6("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$7 = function (it) {
  return IndexedObject$2(requireObjectCoercible$2(it));
};

var isCallable$e = isCallable$f;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$8 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it);
};

var path$7 = {};

var path$6 = path$7;
var global$c = global$d;
var isCallable$d = isCallable$f;

var aFunction = function (variable) {
  return isCallable$d(variable) ? variable : undefined;
};

var getBuiltIn$9 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path$6[namespace]) || aFunction(global$c[namespace])
    : path$6[namespace] && path$6[namespace][method] || global$c[namespace] && global$c[namespace][method];
};

var uncurryThis$g = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$b = global$d;
var userAgent = engineUserAgent;

var process = global$b.process;
var Deno = global$b.Deno;
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
var fails$c = fails$g;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$c(function () {
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

var getBuiltIn$8 = getBuiltIn$9;
var isCallable$c = isCallable$f;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$8('Symbol');
  return isCallable$c($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
};

var $String$3 = String;

var tryToString$2 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$b = isCallable$f;
var tryToString$1 = tryToString$2;

var $TypeError$5 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$b(argument)) return argument;
  throw $TypeError$5(tryToString$1(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable$1(func);
};

var call$7 = functionCall;
var isCallable$a = isCallable$f;
var isObject$7 = isObject$8;

var $TypeError$4 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$7(val = call$7(fn, input))) return val;
  if (isCallable$a(fn = input.valueOf) && !isObject$7(val = call$7(fn, input))) return val;
  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$7(val = call$7(fn, input))) return val;
  throw $TypeError$4("Can't convert object to primitive value");
};

var shared$7 = {exports: {}};

var global$a = global$d;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$b = Object.defineProperty;

var defineGlobalProperty$1 = function (key, value) {
  try {
    defineProperty$b(global$a, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$a[key] = value;
  } return value;
};

var global$9 = global$d;
var defineGlobalProperty = defineGlobalProperty$1;

var SHARED = '__core-js_shared__';
var store$3 = global$9[SHARED] || defineGlobalProperty(SHARED, {});

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

var requireObjectCoercible$1 = requireObjectCoercible$3;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return $Object$2(requireObjectCoercible$1(argument));
};

var uncurryThis$f = functionUncurryThis;
var toObject$5 = toObject$6;

var hasOwnProperty = uncurryThis$f({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$5(it), key);
};

var uncurryThis$e = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$6 = uncurryThis$e(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
};

var global$8 = global$d;
var shared$6 = sharedExports;
var hasOwn$b = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL$4 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$3 = global$8.Symbol;
var WellKnownSymbolsStore$2 = shared$6('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3['for'] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$2;

var wellKnownSymbol$e = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore$2, name)) {
    WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$b(Symbol$3, name)
      ? Symbol$3[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore$2[name];
};

var call$6 = functionCall;
var isObject$6 = isObject$8;
var isSymbol$4 = isSymbol$5;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$d = wellKnownSymbol$e;

var $TypeError$3 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$7 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$4(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$4(result)) return result;
    throw $TypeError$3("Can't convert object to primitive value");
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

var global$7 = global$d;
var isObject$5 = isObject$8;

var document$1 = global$7.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$9 = descriptors;
var fails$b = fails$g;
var createElement = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$9 && !fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$8 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$6 = toIndexedObject$7;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$a = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$6(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$a(O, P)) return createPropertyDescriptor$4(!call$5(propertyIsEnumerableModule$2.f, O, P), O[P]);
};

var fails$a = fails$g;
var isCallable$9 = isCallable$f;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$9(detection) ? fails$a(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var uncurryThis$d = functionUncurryThisClause;
var aCallable = aCallable$2;
var NATIVE_BIND = functionBindNative;

var bind$2 = uncurryThis$d(uncurryThis$d.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty = {};

var DESCRIPTORS$7 = descriptors;
var fails$9 = fails$g;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$4 = isObject$8;

var $String$2 = String;
var $TypeError$2 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$4 = function (argument) {
  if (isObject$4(argument)) return argument;
  throw $TypeError$2($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$3 = anObject$4;
var toPropertyKey$2 = toPropertyKey$4;

var $TypeError$1 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$1 = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$3(O);
  P = toPropertyKey$2(P);
  anObject$3(Attributes);
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
  anObject$3(O);
  P = toPropertyKey$2(P);
  anObject$3(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$1('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var global$6 = global$d;
var apply$1 = functionApply;
var uncurryThis$c = functionUncurryThisClause;
var isCallable$8 = isCallable$f;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var isForced = isForced_1;
var path$5 = path$7;
var bind$1 = functionBindContext;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$9 = hasOwnProperty_1;

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply$1(NativeConstructor, this, arguments);
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

  var nativeSource = GLOBAL ? global$6 : STATIC ? global$6[TARGET] : (global$6[TARGET] || {}).prototype;

  var target = GLOBAL ? path$5 : path$5[TARGET] || createNonEnumerableProperty$4(path$5, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn$9(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind methods to global for calling from export context
    if (options.bind && USE_NATIVE) resultProperty = bind$1(sourceProperty, global$6);
    // wrap global constructors for prevent changes in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable$8(sourceProperty)) resultProperty = uncurryThis$c(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty$4(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn$9(path$5, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$4(path$5, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty$4(path$5[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
        createNonEnumerableProperty$4(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var $$a = _export;
var DESCRIPTORS$4 = descriptors;
var defineProperty$a = objectDefineProperty.f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$$a({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$a, sham: !DESCRIPTORS$4 }, {
  defineProperty: defineProperty$a
});

var path$4 = path$7;

var Object$1 = path$4.Object;

var defineProperty$9 = defineProperty$c.exports = function defineProperty(it, key, desc) {
  return Object$1.defineProperty(it, key, desc);
};

if (Object$1.defineProperty.sham) defineProperty$9.sham = true;

var definePropertyExports = defineProperty$c.exports;

var parent$h = definePropertyExports;

var defineProperty$8 = parent$h;

var parent$g = defineProperty$8;

var defineProperty$7 = parent$g;

var parent$f = defineProperty$7;

var defineProperty$6 = parent$f;

var defineProperty$5 = defineProperty$6;

var defineProperty$4 = defineProperty$5;

var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$4);

var classof$7 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$7(argument) == 'Array';
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
var lengthOfArrayLike$4 = function (obj) {
  return toLength(obj.length);
};

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$1 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$2(0, value));
  else object[propertyKey] = value;
};

var wellKnownSymbol$c = wellKnownSymbol$e;

var TO_STRING_TAG$3 = wellKnownSymbol$c('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$7 = isCallable$f;
var classofRaw = classofRaw$2;
var wellKnownSymbol$b = wellKnownSymbol$e;

var TO_STRING_TAG$2 = wellKnownSymbol$b('toStringTag');
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
var classof$6 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
};

var uncurryThis$b = functionUncurryThis;
var isCallable$6 = isCallable$f;
var store$1 = sharedStore;

var functionToString = uncurryThis$b(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var uncurryThis$a = functionUncurryThis;
var fails$8 = fails$g;
var isCallable$5 = isCallable$f;
var classof$5 = classof$6;
var getBuiltIn$7 = getBuiltIn$9;
var inspectSource = inspectSource$1;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$7('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$a(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  switch (classof$5(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$8(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isArray$2 = isArray$3;
var isConstructor = isConstructor$1;
var isObject$3 = isObject$8;
var wellKnownSymbol$a = wellKnownSymbol$e;

var SPECIES$1 = wellKnownSymbol$a('species');
var $Array$1 = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$2(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array$1 || isArray$2(C.prototype))) C = undefined;
    else if (isObject$3(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$7 = fails$g;
var wellKnownSymbol$9 = wellKnownSymbol$e;
var V8_VERSION$1 = engineV8Version;

var SPECIES = wellKnownSymbol$9('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$7(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$9 = _export;
var fails$6 = fails$g;
var isArray$1 = isArray$3;
var isObject$2 = isObject$8;
var toObject$4 = toObject$6;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var createProperty$1 = createProperty$2;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol$8 = wellKnownSymbol$e;
var V8_VERSION = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$8('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$6(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject$2(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$1(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$9({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$4(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$3(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty$1(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var classof$4 = classof$6;

var $String$1 = String;

var toString$5 = function (argument) {
  if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var objectDefineProperties = {};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

var max$1 = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min(integer, length);
};

var toIndexedObject$5 = toIndexedObject$7;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$2(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
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
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var hiddenKeys$5 = {};

var uncurryThis$9 = functionUncurryThis;
var hasOwn$8 = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$7;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$4 = hiddenKeys$5;

var push$3 = uncurryThis$9([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$8(hiddenKeys$4, key) && hasOwn$8(O, key) && push$3(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
    ~indexOf(result, key) || push$3(result, key);
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

var DESCRIPTORS$3 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$2 = anObject$4;
var toIndexedObject$3 = toIndexedObject$7;
var objectKeys$2 = objectKeys$3;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$3 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
  var props = toIndexedObject$3(Properties);
  var keys = objectKeys$2(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$6 = getBuiltIn$9;

var html$1 = getBuiltIn$6('document', 'documentElement');

var shared$5 = sharedExports;
var uid$1 = uid$3;

var keys = shared$5('keys');

var sharedKey$4 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$1 = anObject$4;
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
    EmptyConstructor[PROTOTYPE$1] = anObject$1(O);
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

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var createProperty = createProperty$2;

var $Array = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var classof$3 = classofRaw$2;
var toIndexedObject$2 = toIndexedObject$7;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$2 = arraySliceSimple;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$2(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$3(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames$1(toIndexedObject$2(it));
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

var wellKnownSymbol$7 = wellKnownSymbol$e;

wellKnownSymbolWrapped.f = wellKnownSymbol$7;

var path$3 = path$7;
var hasOwn$7 = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$2 = objectDefineProperty.f;

var wellKnownSymbolDefine = function (NAME) {
  var Symbol = path$3.Symbol || (path$3.Symbol = {});
  if (!hasOwn$7(Symbol, NAME)) defineProperty$2(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var call$4 = functionCall;
var getBuiltIn$5 = getBuiltIn$9;
var wellKnownSymbol$6 = wellKnownSymbol$e;
var defineBuiltIn$3 = defineBuiltIn$4;

var symbolDefineToPrimitive = function () {
  var Symbol = getBuiltIn$5('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol$6('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn$3(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call$4(valueOf, this);
    }, { arity: 1 });
  }
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$2 = classof$6;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$2(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineProperty$1 = objectDefineProperty.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var hasOwn$6 = hasOwnProperty_1;
var toString$4 = objectToString;
var wellKnownSymbol$5 = wellKnownSymbol$e;

var TO_STRING_TAG$1 = wellKnownSymbol$5('toStringTag');

var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn$6(target, TO_STRING_TAG$1)) {
      defineProperty$1(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$2(target, 'toString', toString$4);
    }
  }
};

var global$5 = global$d;
var isCallable$4 = isCallable$f;

var WeakMap$1 = global$5.WeakMap;

var weakMapBasicDetection = isCallable$4(WeakMap$1) && /native code/.test(String(WeakMap$1));

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$4 = global$d;
var isObject$1 = isObject$8;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var hasOwn$5 = hasOwnProperty_1;
var shared$4 = sharedStore;
var sharedKey$2 = sharedKey$4;
var hiddenKeys$1 = hiddenKeys$5;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$4.TypeError;
var WeakMap = global$4.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
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
    if (hasOwn$5(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$5(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$5(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var bind = functionBindContext;
var uncurryThis$8 = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toObject$3 = toObject$6;
var lengthOfArrayLike = lengthOfArrayLike$4;
var arraySpeciesCreate = arraySpeciesCreate$2;

var push$2 = uncurryThis$8([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$3($this);
    var self = IndexedObject$1(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
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
          case 2: push$2(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$2(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$1(7)
};

var $$8 = _export;
var global$3 = global$d;
var call$3 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var DESCRIPTORS$2 = descriptors;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var fails$5 = fails$g;
var hasOwn$4 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var anObject = anObject$4;
var toIndexedObject$1 = toIndexedObject$7;
var toPropertyKey = toPropertyKey$4;
var $toString = toString$5;
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
var wellKnownSymbol$4 = wellKnownSymbol$e;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$l = wellKnownSymbolDefine;
var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
var setToStringTag$4 = setToStringTag$5;
var InternalStateModule$2 = internalState;
var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey$1('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$2 = InternalStateModule$2.getterFor(SYMBOL);

var ObjectPrototype$1 = Object[PROTOTYPE];
var $Symbol = global$3.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError$1 = global$3.TypeError;
var QObject = global$3.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
var push$1 = uncurryThis$7([].push);

var AllSymbols = shared$3('symbols');
var ObjectPrototypeSymbols = shared$3('op-symbols');
var WellKnownSymbolsStore$1 = shared$3('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS$2 && fails$5(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$1, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState$2(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$2) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn$4(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$4(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$4(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$1(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject$1(Properties);
  var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS$2 || call$3($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call$3(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$1 && hasOwn$4(AllSymbols, P) && !hasOwn$4(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$4(this, P) || !hasOwn$4(AllSymbols, P) || hasOwn$4(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$1(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$1 && hasOwn$4(AllSymbols, key) && !hasOwn$4(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn$4(AllSymbols, key) && !(hasOwn$4(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$1(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn$4(AllSymbols, key) && !hasOwn$4(hiddenKeys, key)) push$1(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$1(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn$4(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$4(ObjectPrototype$1, key))) {
      push$1(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL$3) {
  $Symbol = function Symbol() {
    if (isPrototypeOf$1(SymbolPrototype, this)) throw TypeError$1('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype$1) call$3(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$4(this, HIDDEN) && hasOwn$4(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
    };
    if (DESCRIPTORS$2 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
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
    return wrap(wellKnownSymbol$4(name), name);
  };

  if (DESCRIPTORS$2) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
      }
    });
  }
}

$$8({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
  Symbol: $Symbol
});

$forEach(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
  defineWellKnownSymbol$l(name);
});

$$8({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$$8({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$2 }, {
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

$$8({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
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

var $$7 = _export;
var getBuiltIn$4 = getBuiltIn$9;
var hasOwn$3 = hasOwnProperty_1;
var toString$3 = toString$5;
var shared$2 = sharedExports;
var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$$7({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  'for': function (key) {
    var string = toString$3(key);
    if (hasOwn$3(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$4('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});

var $$6 = _export;
var hasOwn$2 = hasOwnProperty_1;
var isSymbol$2 = isSymbol$5;
var tryToString = tryToString$2;
var shared$1 = sharedExports;
var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$$6({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$2(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn$2(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

var uncurryThis$6 = functionUncurryThis;

var arraySlice$1 = uncurryThis$6([].slice);

var uncurryThis$5 = functionUncurryThis;
var isArray = isArray$3;
var isCallable$3 = isCallable$f;
var classof$1 = classofRaw$2;
var toString$2 = toString$5;

var push = uncurryThis$5([].push);

var getJsonReplacerFunction = function (replacer) {
  if (isCallable$3(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof$1(element) == 'Number' || classof$1(element) == 'String') push(keys, toString$2(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};

var $$5 = _export;
var getBuiltIn$3 = getBuiltIn$9;
var apply = functionApply;
var call$2 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fails$4 = fails$g;
var isCallable$2 = isCallable$f;
var isSymbol$1 = isSymbol$5;
var arraySlice = arraySlice$1;
var getReplacerFunction = getJsonReplacerFunction;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var $String = String;
var $stringify = getBuiltIn$3('JSON', 'stringify');
var exec = uncurryThis$4(/./.exec);
var charAt$2 = uncurryThis$4(''.charAt);
var charCodeAt$1 = uncurryThis$4(''.charCodeAt);
var replace = uncurryThis$4(''.replace);
var numberToString = uncurryThis$4(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$4(function () {
  var symbol = getBuiltIn$3('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails$4(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable$2($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable$2($replacer)) value = call$2($replacer, this, $String(key), value);
    if (!isSymbol$1(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt$2(string, offset - 1);
  var next = charAt$2(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt$1(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $$5({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}

var $$4 = _export;
var NATIVE_SYMBOL = symbolConstructorDetection;
var fails$3 = fails$g;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var toObject$2 = toObject$6;

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails$3(function () { getOwnPropertySymbolsModule$1.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$$4({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$2(it)) : [];
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

var getBuiltIn$2 = getBuiltIn$9;
var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
var setToStringTag$3 = setToStringTag$5;

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol$9('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$3(getBuiltIn$2('Symbol'), 'Symbol');

var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol$8('unscopables');

var global$2 = global$d;
var setToStringTag$2 = setToStringTag$5;

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag$2(global$2.JSON, 'JSON', true);

var path$2 = path$7;

var symbol$5 = path$2.Symbol;

var iterators = {};

var DESCRIPTORS$1 = descriptors;
var hasOwn$1 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$1(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || (DESCRIPTORS$1 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var fails$2 = fails$g;

var correctPrototypeGetter = !fails$2(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn = hasOwnProperty_1;
var isCallable$1 = isCallable$f;
var toObject$1 = toObject$6;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$1(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails$1 = fails$g;
var isCallable = isCallable$f;
var isObject = isObject$8;
var create$1 = objectCreate;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$4;
var wellKnownSymbol$3 = wellKnownSymbol$e;

var ITERATOR$1 = wellKnownSymbol$3('iterator');
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
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype$1) || fails$1(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$1[ITERATOR$1].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
else IteratorPrototype$1 = create$1(IteratorPrototype$1);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype$1[ITERATOR$1])) {
  defineBuiltIn$1(IteratorPrototype$1, ITERATOR$1, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var setToStringTag$1 = setToStringTag$5;
var Iterators$3 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators$3[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $$3 = _export;
var call$1 = functionCall;
var FunctionName = functionName;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setToStringTag = setToStringTag$5;
var defineBuiltIn = defineBuiltIn$4;
var wellKnownSymbol$2 = wellKnownSymbol$e;
var Iterators$2 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
FunctionName.CONFIGURABLE;
IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol$2('iterator');
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
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$2[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$1(nativeIterator, this); };
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
    } else $$3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators$2[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$2 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$7;
var Iterators$1 = iterators;
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
    target: toIndexedObject(iterated), // target
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
Iterators$1.Arguments = Iterators$1.Array;

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

var DOMIterables = domIterables;
var global$1 = global$d;
var classof = classof$6;
var createNonEnumerableProperty = createNonEnumerableProperty$5;
var Iterators = iterators;
var wellKnownSymbol$1 = wellKnownSymbol$e;

var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global$1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}

var parent$e = symbol$5;


var symbol$4 = parent$e;

var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
defineWellKnownSymbol$7('dispose');

var parent$d = symbol$4;



var symbol$3 = parent$d;

var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-async-explicit-resource-management
defineWellKnownSymbol$6('asyncDispose');

var $$2 = _export;
var getBuiltIn$1 = getBuiltIn$9;
var uncurryThis$3 = functionUncurryThis;

var Symbol$2 = getBuiltIn$1('Symbol');
var keyFor = Symbol$2.keyFor;
var thisSymbolValue$1 = uncurryThis$3(Symbol$2.prototype.valueOf);

// `Symbol.isRegistered` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregistered
$$2({ target: 'Symbol', stat: true }, {
  isRegistered: function isRegistered(value) {
    try {
      return keyFor(thisSymbolValue$1(value)) !== undefined;
    } catch (error) {
      return false;
    }
  }
});

var $$1 = _export;
var shared = sharedExports;
var getBuiltIn = getBuiltIn$9;
var uncurryThis$2 = functionUncurryThis;
var isSymbol = isSymbol$5;
var wellKnownSymbol = wellKnownSymbol$e;

var Symbol$1 = getBuiltIn('Symbol');
var $isWellKnown = Symbol$1.isWellKnown;
var getOwnPropertyNames = getBuiltIn('Object', 'getOwnPropertyNames');
var thisSymbolValue = uncurryThis$2(Symbol$1.prototype.valueOf);
var WellKnownSymbolsStore = shared('wks');

for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$1), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
  // some old engines throws on access to some keys like `arguments` or `caller`
  try {
    var symbolKey = symbolKeys[i];
    if (isSymbol(Symbol$1[symbolKey])) wellKnownSymbol(symbolKey);
  } catch (error) { /* empty */ }
}

// `Symbol.isWellKnown` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknown
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
$$1({ target: 'Symbol', stat: true, forced: true }, {
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

var parent$c = symbol$3;






// TODO: Remove from `core-js@4`




var symbol$2 = parent$c;

var symbol$1 = symbol$2;

var symbol = symbol$1;

var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

var uncurryThis$1 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$5;
var requireObjectCoercible = requireObjectCoercible$3;

var charAt$1 = uncurryThis$1(''.charAt);
var charCodeAt = uncurryThis$1(''.charCodeAt);
var stringSlice = uncurryThis$1(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
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
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt = stringMultibyte.charAt;
var toString = toString$5;
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
    string: toString(iterated),
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

var parent$b = iterator$5;


var iterator$4 = parent$b;

var parent$a = iterator$4;

var iterator$3 = parent$a;

var parent$9 = iterator$3;

var iterator$2 = parent$9;

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

var parent$8 = toPrimitive$5;

var toPrimitive$4 = parent$8;

var parent$7 = toPrimitive$4;

var toPrimitive$3 = parent$7;

var parent$6 = toPrimitive$3;

var toPrimitive$2 = parent$6;

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

var DESCRIPTORS = descriptors;
var uncurryThis = functionUncurryThis;
var call = functionCall;
var fails = fails$g;
var objectKeys = objectKeys$3;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject = toObject$6;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat$7 = uncurryThis([].concat);

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
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$7(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $ = _export;
var assign$6 = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$6 }, {
  assign: assign$6
});

var path$1 = path$7;

var assign$5 = path$1.Object.assign;

var parent$5 = assign$5;

var assign$4 = parent$5;

var parent$4 = assign$4;

var assign$3 = parent$4;

var parent$3 = assign$3;

var assign$2 = parent$3;

var assign$1 = assign$2;

var assign = assign$1;

var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign);

var path = path$7;

var entryVirtual$1 = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

var entryVirtual = entryVirtual$1;

var concat$6 = entryVirtual('Array').concat;

var isPrototypeOf = objectIsPrototypeOf;
var method = concat$6;

var ArrayPrototype = Array.prototype;

var concat$5 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat) ? method : own;
};

var parent$2 = concat$5;

var concat$4 = parent$2;

var parent$1 = concat$4;

var concat$3 = parent$1;

var parent = concat$3;

var concat$2 = parent;

var concat$1 = concat$2;

var concat = concat$1;

var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat);

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

var css_248z$5 = ".video-progress {\n  width: 100%;\n  height: 5px;\n  background-color: #fff;\n  cursor: pointer;\n  position: relative;\n}\n.video-progress .video-pretime {\n  position: absolute;\n  left: 0;\n  top: -18px;\n  height: 15px;\n  width: 35px;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  line-height: 15px;\n  text-align: center;\n  font-size: 10px;\n  display: none;\n}\n.video-progress .video-buffered {\n  left: 0;\n  height: 100%;\n  width: 0;\n  z-index: 1001;\n  position: absolute;\n  background-color: gray;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.video-progress .video-completed {\n  position: absolute;\n  background-color: #00aeec;\n  height: 100%;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  left: 0;\n  width: 0;\n  z-index: 1002;\n}\n.video-progress .video-dot-hidden {\n  opacity: 0;\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n}\n.video-progress .video-dot {\n  position: absolute;\n  left: 0px;\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n  background-color: black;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  cursor: pointer;\n  z-index: 1003;\n}\n";
styleInject(css_248z$5);

var Progress = /*#__PURE__*/function () {
  function Progress() {
    _classCallCheck(this, Progress);
    _defineProperty(this, "_template", void 0);
    this.init();
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
  }]);
  return Progress;
}();

var css_248z$4 = ".video-play {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px 5px 0 5px;\n}\n.video-play .video-subplay {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-subplay .video-start-pause {\n  margin-right: 5px;\n  cursor: pointer;\n}\n.video-play .video-subplay .video-duration {\n  font-size: 12px;\n  margin-left: 5px;\n}\n.video-play .video-subplay .video-duration .video-duration-completed {\n  font-size: 12px;\n}\n.video-play .video-subplay .video-duration .video-duration-all {\n  font-size: 12px;\n}\n.video-play .video-settings {\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n}\n.video-play .video-settings .video-subsettings {\n  margin-right: 10px;\n}\n.video-play .video-settings .video-subsettings i {\n  cursor: pointer;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.video-play .video-settings .video-subsettings i:hover {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n}\n.video-play .video-settings .video-volume {\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-play .video-settings .video-volume i {\n  cursor: pointer;\n  font-size: 18px;\n  margin-right: 8px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.video-play .video-settings .video-volume i:hover {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n}\n.video-play .video-settings .video-volume .video-volume-progress {\n  height: 5px;\n  background-color: #fff;\n  width: 50px;\n  border-radius: 5px;\n}\n.video-play .video-settings .video-volume .video-volume-progress .video-volume-completed {\n  width: 50%;\n  background-color: #00aeec;\n  border-radius: 5px;\n  height: 100%;\n}\n.video-play .video-settings .video-fullscreen i {\n  cursor: pointer;\n  font-size: 18px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.video-play .video-settings .video-fullscreen i:hover {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n}\n";
styleInject(css_248z$4);

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
    _defineProperty(this, "_template", void 0);
    this.init();
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
      this._template = _concatInstanceProperty(_context = _concatInstanceProperty(_context2 = _concatInstanceProperty(_context3 = _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = _concatInstanceProperty(_context6 = _concatInstanceProperty(_context7 = _concatInstanceProperty(_context8 = _concatInstanceProperty(_context9 = _concatInstanceProperty(_context10 = _concatInstanceProperty(_context11 = _concatInstanceProperty(_context12 = _concatInstanceProperty(_context13 = _concatInstanceProperty(_context14 = _concatInstanceProperty(_context15 = _concatInstanceProperty(_context16 = _concatInstanceProperty(_context17 = _concatInstanceProperty(_context18 = _concatInstanceProperty(_context19 = _concatInstanceProperty(_context20 = "\n      <div class=\"".concat(styles["video-play"], "\">\n        <div class=\"")).call(_context20, styles["video-subplay"], "\">\n            <div class=\"")).call(_context19, styles["video-start-pause"], "\">\n              <i class=\"")).call(_context18, icon["iconfont"], " ")).call(_context17, icon["icon-bofang"], "\"></i>\n            </div>\n            <div class=\"")).call(_context16, styles["video-duration"], "\">\n              <span class=\"")).call(_context15, styles["video-duration-completed"], "\">00:00</span>&nbsp;/&nbsp;<span class=\"")).call(_context14, styles["video-duration-all"], "\">00:00</span>\n            </div>\n        </div>\n        <div class=\"")).call(_context13, styles["video-settings"], "\">\n          <div class=\"")).call(_context12, styles["video-subsettings"], "\">\n            <i class=\"")).call(_context11, icon["iconfont"], " ")).call(_context10, icon["icon-shezhi"], "\"></i>\n          </div>\n          <div class=\"")).call(_context9, styles["video-volume"], "\">\n            <i class=\"")).call(_context8, icon["iconfont"], " ")).call(_context7, icon["icon-yinliang"], "\"></i>\n            <div class=\"")).call(_context6, styles["video-volume-progress"], "\">\n              <div class=\"")).call(_context5, styles["video-volume-completed"], "\"></div>\n              <div class=\"")).call(_context4, styles["video-volume-dot"], "\"></div>\n            </div>\n          </div>\n          <div class=\"")).call(_context3, styles["video-fullscreen"], "\">\n            <i class=\"")).call(_context2, icon["iconfont"], " ")).call(_context, icon["icon-quanping"], "\"></i>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }]);
  return Controller;
}();

var css_248z$3 = ".video-controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  height: 55px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n";
styleInject(css_248z$3);

var Toolbar = /*#__PURE__*/function () {
  function Toolbar() {
    _classCallCheck(this, Toolbar);
    _defineProperty(this, "_template", void 0);
    this.init();
  }
  _createClass(Toolbar, [{
    key: "template",
    get: function get() {
      return this._template;
    }
  }, {
    key: "init",
    value: function init() {
      var _context;
      var div = document.createElement('div');
      div.className = _concatInstanceProperty(_context = "".concat(styles['video-controls'], " ")).call(_context, styles['video-controls-hidden']);
      div.innerHTML += new Progress().template;
      div.innerHTML += new Controller().template;
      this._template = div;
    }
  }]);
  return Toolbar;
}();

var css_248z$2 = ".video-container {\n  position: relative;\n  overflow: hidden;\n}\n.video-container .video-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.video-container .video-wrapper video {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css_248z$2);

var Player = /*#__PURE__*/function () {
  function Player(options) {
    _classCallCheck(this, Player);
    _defineProperty(this, "playerOptions", {
      url: '',
      width: '100%',
      height: '100%',
      autoPlay: false
    });
    _defineProperty(this, "container", void 0);
    _defineProperty(this, "toolbar", void 0);
    this.playerOptions = _Object$assign(this.playerOptions, options);
    this.init();
    this.initComponent();
    this.initContainer();
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
  }, {
    key: "initComponent",
    value: function initComponent() {
      // 初始化视频播放器的工具栏组件
      this.toolbar = new Toolbar();
    }
  }, {
    key: "initContainer",
    value: function initContainer() {
      var _context;
      this.container.style.width = this.playerOptions.width;
      this.container.style.height = this.playerOptions.height;
      this.container.className = styles['video-container'];
      this.container.innerHTML = _concatInstanceProperty(_context = "\n      <div class=".concat(styles['video-wrapper'], ">\n        <video>\n          <source src=\"")).call(_context, this.playerOptions.url, "\" type=\"video/mp4\">\n          \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 video \u6807\u7B7E\u3002\n        </video>\n      </div>\n    ");
      this.container.appendChild(this.toolbar.template);
    }
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
}();

var css_248z$1 = "";
styleInject(css_248z$1);

var LoadingMask = /*#__PURE__*/function () {
  function LoadingMask() {
    _classCallCheck(this, LoadingMask);
    _defineProperty(this, "_template", void 0);
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
      this._template = mask;
    }
  }]);
  return LoadingMask;
}();

var css_248z = "";
styleInject(css_248z);

var ErrorMask = /*#__PURE__*/function () {
  function ErrorMask() {
    _classCallCheck(this, ErrorMask);
    _defineProperty(this, "_template", void 0);
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
  }]);
  return ErrorMask;
}();

exports.$warn = $warn;
exports.Controller = Controller;
exports.ErrorMask = ErrorMask;
exports.LoadingMask = LoadingMask;
exports.Player = Player;
exports.Progress = Progress;
exports.Toolbar = Toolbar;
exports.icon = icon;
exports.styles = styles;
