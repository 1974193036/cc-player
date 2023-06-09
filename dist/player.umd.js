
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Player = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$o =
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

	var toString$e = uncurryThis$x({}.toString);
	var stringSlice$3 = uncurryThis$x(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$3(toString$e(it), 8, -1);
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

	var uncurryThis$v = functionUncurryThis;
	var fails$u = fails$x;
	var classof$e = classofRaw$2;

	var $Object$4 = Object;
	var split$3 = uncurryThis$v(''.split);

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

	var isCallable$o = isCallable$p;
	var $documentAll = documentAll_1;

	var documentAll = $documentAll.all;

	var isObject$k = $documentAll.IS_HTMLDDA ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$o(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$o(it);
	};

	var path$m = {};

	var path$l = path$m;
	var global$n = global$o;
	var isCallable$n = isCallable$p;

	var aFunction = function (variable) {
	  return isCallable$n(variable) ? variable : undefined;
	};

	var getBuiltIn$h = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path$l[namespace]) || aFunction(global$n[namespace])
	    : path$l[namespace] && path$l[namespace][method] || global$n[namespace] && global$n[namespace][method];
	};

	var uncurryThis$u = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$u({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$m = global$o;
	var userAgent$3 = engineUserAgent;

	var process$4 = global$m.process;
	var Deno$1 = global$m.Deno;
	var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version$1;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version$1 && userAgent$3) {
	  match = userAgent$3.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$3.match(/Chrome\/(\d+)/);
	    if (match) version$1 = +match[1];
	  }
	}

	var engineV8Version = version$1;

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION$3 = engineV8Version;
	var fails$t = fails$x;
	var global$l = global$o;

	var $String$5 = global$l.String;

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
	var isCallable$m = isCallable$p;
	var isPrototypeOf$c = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$3 = Object;

	var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$g('Symbol');
	  return isCallable$m($Symbol) && isPrototypeOf$c($Symbol.prototype, $Object$3(it));
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
	var isObject$j = isObject$k;

	var $TypeError$h = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$k(fn = input.toString) && !isObject$j(val = call$n(fn, input))) return val;
	  if (isCallable$k(fn = input.valueOf) && !isObject$j(val = call$n(fn, input))) return val;
	  if (pref !== 'string' && isCallable$k(fn = input.toString) && !isObject$j(val = call$n(fn, input))) return val;
	  throw $TypeError$h("Can't convert object to primitive value");
	};

	var shared$7 = {exports: {}};

	var isPure = true;

	var global$k = global$o;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$e = Object.defineProperty;

	var defineGlobalProperty$1 = function (key, value) {
	  try {
	    defineProperty$e(global$k, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$k[key] = value;
	  } return value;
	};

	var global$j = global$o;
	var defineGlobalProperty = defineGlobalProperty$1;

	var SHARED = '__core-js_shared__';
	var store$3 = global$j[SHARED] || defineGlobalProperty(SHARED, {});

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

	var uncurryThis$t = functionUncurryThis;
	var toObject$9 = toObject$a;

	var hasOwnProperty = uncurryThis$t({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$9(it), key);
	};

	var uncurryThis$s = functionUncurryThis;

	var id$1 = 0;
	var postfix = Math.random();
	var toString$d = uncurryThis$s(1.0.toString);

	var uid$4 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$d(++id$1 + postfix, 36);
	};

	var global$i = global$o;
	var shared$6 = sharedExports;
	var hasOwn$i = hasOwnProperty_1;
	var uid$3 = uid$4;
	var NATIVE_SYMBOL$4 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$5 = global$i.Symbol;
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
	var isObject$i = isObject$k;
	var isSymbol$4 = isSymbol$5;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$p = wellKnownSymbol$q;

	var $TypeError$g = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$p('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$7 = function (input, pref) {
	  if (!isObject$i(input) || isSymbol$4(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$m(exoticToPrim, input, pref);
	    if (!isObject$i(result) || isSymbol$4(result)) return result;
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

	var global$h = global$o;
	var isObject$h = isObject$k;

	var document$4 = global$h.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$h(document$4) && isObject$h(document$4.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS$1 ? document$4.createElement(it) : {};
	};

	var DESCRIPTORS$j = descriptors;
	var fails$s = fails$x;
	var createElement$2 = documentCreateElement$1;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$j && !fails$s(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement$2('div'), 'a', {
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
	var isCallable$j = isCallable$p;

	var replacement = /#|\.prototype\./;

	var isForced$2 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$j(detection) ? fails$r(detection)
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

	var isObject$g = isObject$k;

	var $String$3 = String;
	var $TypeError$f = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$f = function (argument) {
	  if (isObject$g(argument)) return argument;
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

	var global$g = global$o;
	var apply$3 = functionApply;
	var uncurryThis$q = functionUncurryThisClause;
	var isCallable$i = isCallable$p;
	var getOwnPropertyDescriptor$a = objectGetOwnPropertyDescriptor.f;
	var isForced$1 = isForced_1;
	var path$k = path$m;
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

	  var nativeSource = GLOBAL ? global$g : STATIC ? global$g[TARGET] : (global$g[TARGET] || {}).prototype;

	  var target = GLOBAL ? path$k : path$k[TARGET] || createNonEnumerableProperty$8(path$k, TARGET, {})[TARGET];
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
	    if (options.bind && USE_NATIVE) resultProperty = bind$q(sourceProperty, global$g);
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
	      if (!hasOwn$g(path$k, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$8(path$k, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty$8(path$k[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
	        createNonEnumerableProperty$8(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var uncurryThis$p = functionUncurryThis;

	var arraySlice$7 = uncurryThis$p([].slice);

	var uncurryThis$o = functionUncurryThis;
	var aCallable$e = aCallable$h;
	var isObject$f = isObject$k;
	var hasOwn$f = hasOwnProperty_1;
	var arraySlice$6 = arraySlice$7;
	var NATIVE_BIND = functionBindNative;

	var $Function = Function;
	var concat$9 = uncurryThis$o([].concat);
	var join$3 = uncurryThis$o([].join);
	var factories = {};

	var construct$7 = function (C, argsLength, args) {
	  if (!hasOwn$f(factories, argsLength)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = $Function('C,a', 'return new C(' + join$3(list, ',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	// eslint-disable-next-line es/no-function-prototype-bind -- detection
	var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
	  var F = aCallable$e(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice$6(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = concat$9(partArgs, arraySlice$6(arguments));
	    return this instanceof boundFunction ? construct$7(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject$f(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	var wellKnownSymbol$o = wellKnownSymbol$q;

	var TO_STRING_TAG$4 = wellKnownSymbol$o('toStringTag');
	var test = {};

	test[TO_STRING_TAG$4] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

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
	var classof$d = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$h(O.callee) ? 'Arguments' : result;
	};

	var uncurryThis$n = functionUncurryThis;
	var isCallable$g = isCallable$p;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$n(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$g(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$2 = store$1.inspectSource;

	var uncurryThis$m = functionUncurryThis;
	var fails$p = fails$x;
	var isCallable$f = isCallable$p;
	var classof$c = classof$d;
	var getBuiltIn$f = getBuiltIn$h;
	var inspectSource$1 = inspectSource$2;

	var noop = function () { /* empty */ };
	var empty$1 = [];
	var construct$6 = getBuiltIn$f('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$4 = uncurryThis$m(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$f(argument)) return false;
	  try {
	    construct$6(noop, empty$1, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$f(argument)) return false;
	  switch (classof$c(argument)) {
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
	var isConstructor$4 = !construct$6 || fails$p(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor$3 = isConstructor$4;
	var tryToString$5 = tryToString$7;

	var $TypeError$d = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$3 = function (argument) {
	  if (isConstructor$3(argument)) return argument;
	  throw $TypeError$d(tryToString$5(argument) + ' is not a constructor');
	};

	var objectDefineProperties = {};

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

	var max$3 = Math.max;
	var min$2 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$4 = function (index, length) {
	  var integer = toIntegerOrInfinity$3(index);
	  return integer < 0 ? max$3(integer + length, 0) : min$2(integer, length);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$8 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$8 = toIndexedObject$a;
	var toAbsoluteIndex$3 = toAbsoluteIndex$4;
	var lengthOfArrayLike$7 = lengthOfArrayLike$8;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$3 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$8($this);
	    var length = lengthOfArrayLike$7(O);
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

	var uncurryThis$l = functionUncurryThis;
	var hasOwn$e = hasOwnProperty_1;
	var toIndexedObject$7 = toIndexedObject$a;
	var indexOf$7 = arrayIncludes.indexOf;
	var hiddenKeys$5 = hiddenKeys$6;

	var push$a = uncurryThis$l([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$7(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$e(hiddenKeys$5, key) && hasOwn$e(O, key) && push$a(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$e(O, key = names[i++])) {
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

	var DESCRIPTORS$e = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$3 = objectDefineProperty;
	var anObject$d = anObject$f;
	var toIndexedObject$6 = toIndexedObject$a;
	var objectKeys$2 = objectKeys$3;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$e && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$d(O);
	  var props = toIndexedObject$6(Properties);
	  var keys = objectKeys$2(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
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

	var $$12 = _export;
	var getBuiltIn$d = getBuiltIn$h;
	var apply$2 = functionApply;
	var bind$p = functionBind;
	var aConstructor$2 = aConstructor$3;
	var anObject$b = anObject$f;
	var isObject$e = isObject$k;
	var create$c = objectCreate;
	var fails$o = fails$x;

	var nativeConstruct = getBuiltIn$d('Reflect', 'construct');
	var ObjectPrototype$2 = Object.prototype;
	var push$9 = [].push;

	// `Reflect.construct` method
	// https://tc39.es/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails$o(function () {
	  function F() { /* empty */ }
	  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
	});

	var ARGS_BUG = !fails$o(function () {
	  nativeConstruct(function () { /* empty */ });
	});

	var FORCED$6 = NEW_TARGET_BUG || ARGS_BUG;

	$$12({ target: 'Reflect', stat: true, forced: FORCED$6, sham: FORCED$6 }, {
	  construct: function construct(Target, args /* , newTarget */) {
	    aConstructor$2(Target);
	    anObject$b(args);
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
	      apply$2(push$9, $args, args);
	      return new (apply$2(bind$p, Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create$c(isObject$e(proto) ? proto : ObjectPrototype$2);
	    var result = apply$2(Target, instance, args);
	    return isObject$e(result) ? result : instance;
	  }
	});

	var path$j = path$m;

	var construct$5 = path$j.Reflect.construct;

	var parent$1m = construct$5;

	var construct$4 = parent$1m;

	var parent$1l = construct$4;

	var construct$3 = parent$1l;

	var parent$1k = construct$3;

	var construct$2 = parent$1k;

	var construct$1 = construct$2;

	var construct = construct$1;

	var _Reflect$construct = /*@__PURE__*/getDefaultExportFromCjs(construct);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var defineProperty$d = {exports: {}};

	var $$11 = _export;
	var DESCRIPTORS$d = descriptors;
	var defineProperty$c = objectDefineProperty.f;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	$$11({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$c, sham: !DESCRIPTORS$d }, {
	  defineProperty: defineProperty$c
	});

	var path$i = path$m;

	var Object$3 = path$i.Object;

	var defineProperty$b = defineProperty$d.exports = function defineProperty(it, key, desc) {
	  return Object$3.defineProperty(it, key, desc);
	};

	if (Object$3.defineProperty.sham) defineProperty$b.sham = true;

	var definePropertyExports = defineProperty$d.exports;

	var parent$1j = definePropertyExports;

	var defineProperty$a = parent$1j;

	var parent$1i = defineProperty$a;

	var defineProperty$9 = parent$1i;

	var parent$1h = defineProperty$9;

	var defineProperty$8 = parent$1h;

	var defineProperty$7 = defineProperty$8;

	var defineProperty$6 = defineProperty$7;

	var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$6);

	var classof$b = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$c = Array.isArray || function isArray(argument) {
	  return classof$b(argument) == 'Array';
	};

	var $TypeError$c = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$2 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$c('Maximum allowed index exceeded');
	  return it;
	};

	var toPropertyKey$1 = toPropertyKey$4;
	var definePropertyModule$2 = objectDefineProperty;
	var createPropertyDescriptor$5 = createPropertyDescriptor$8;

	var createProperty$6 = function (object, key, value) {
	  var propertyKey = toPropertyKey$1(key);
	  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$5(0, value));
	  else object[propertyKey] = value;
	};

	var isArray$b = isArray$c;
	var isConstructor$2 = isConstructor$4;
	var isObject$d = isObject$k;
	var wellKnownSymbol$m = wellKnownSymbol$q;

	var SPECIES$5 = wellKnownSymbol$m('species');
	var $Array$3 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$b(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$2(C) && (C === $Array$3 || isArray$b(C.prototype))) C = undefined;
	    else if (isObject$d(C)) {
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

	var fails$n = fails$x;
	var wellKnownSymbol$l = wellKnownSymbol$q;
	var V8_VERSION$2 = engineV8Version;

	var SPECIES$4 = wellKnownSymbol$l('species');

	var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$2 >= 51 || !fails$n(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$4] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$10 = _export;
	var fails$m = fails$x;
	var isArray$a = isArray$c;
	var isObject$c = isObject$k;
	var toObject$8 = toObject$a;
	var lengthOfArrayLike$6 = lengthOfArrayLike$8;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
	var createProperty$5 = createProperty$6;
	var arraySpeciesCreate$2 = arraySpeciesCreate$3;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
	var wellKnownSymbol$k = wellKnownSymbol$q;
	var V8_VERSION$1 = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$k('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$m(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var isConcatSpreadable = function (O) {
	  if (!isObject$c(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$a(O);
	};

	var FORCED$5 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$10({ target: 'Array', proto: true, arity: 1, forced: FORCED$5 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$8(this);
	    var A = arraySpeciesCreate$2(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$6(E);
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

	var classof$a = classof$d;

	var $String$2 = String;

	var toString$c = function (argument) {
	  if (classof$a(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String$2(argument);
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
	var arraySlice$5 = arraySliceSimple;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$5(windowNames);
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

	var path$h = path$m;
	var hasOwn$d = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$4 = objectDefineProperty.f;

	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path$h.Symbol || (path$h.Symbol = {});
	  if (!hasOwn$d(Symbol, NAME)) defineProperty$4(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var call$k = functionCall;
	var getBuiltIn$c = getBuiltIn$h;
	var wellKnownSymbol$i = wellKnownSymbol$q;
	var defineBuiltIn$7 = defineBuiltIn$8;

	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn$c('Symbol');
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
	var classof$8 = classof$d;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$8(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$3 = objectDefineProperty.f;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
	var hasOwn$c = hasOwnProperty_1;
	var toString$b = objectToString;
	var wellKnownSymbol$h = wellKnownSymbol$q;

	var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');

	var setToStringTag$9 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwn$c(target, TO_STRING_TAG$2)) {
	      defineProperty$3(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty$6(target, 'toString', toString$b);
	    }
	  }
	};

	var global$f = global$o;
	var isCallable$e = isCallable$p;

	var WeakMap$1 = global$f.WeakMap;

	var weakMapBasicDetection = isCallable$e(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$e = global$o;
	var isObject$b = isObject$k;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
	var hasOwn$b = hasOwnProperty_1;
	var shared$4 = sharedStore;
	var sharedKey$2 = sharedKey$4;
	var hiddenKeys$2 = hiddenKeys$6;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$5 = global$e.TypeError;
	var WeakMap = global$e.WeakMap;
	var set$7, get$2, has$2;

	var enforce = function (it) {
	  return has$2(it) ? get$2(it) : set$7(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$b(it) || (state = get$2(it)).type !== TYPE) {
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
	    if (hasOwn$b(it, STATE)) throw TypeError$5(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$5(it, STATE, metadata);
	    return metadata;
	  };
	  get$2 = function (it) {
	    return hasOwn$b(it, STATE) ? it[STATE] : {};
	  };
	  has$2 = function (it) {
	    return hasOwn$b(it, STATE);
	  };
	}

	var internalState = {
	  set: set$7,
	  get: get$2,
	  has: has$2,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var bind$o = functionBindContext;
	var uncurryThis$k = functionUncurryThis;
	var IndexedObject$1 = indexedObject;
	var toObject$7 = toObject$a;
	var lengthOfArrayLike$4 = lengthOfArrayLike$8;
	var arraySpeciesCreate$1 = arraySpeciesCreate$3;

	var push$8 = uncurryThis$k([].push);

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
	    var boundFunction = bind$o(callbackfn, that);
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
	          case 2: push$8(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$8(target, value);      // filterReject
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

	var $$$ = _export;
	var global$d = global$o;
	var call$j = functionCall;
	var uncurryThis$j = functionUncurryThis;
	var DESCRIPTORS$c = descriptors;
	var NATIVE_SYMBOL$3 = symbolConstructorDetection;
	var fails$l = fails$x;
	var hasOwn$a = hasOwnProperty_1;
	var isPrototypeOf$b = objectIsPrototypeOf;
	var anObject$a = anObject$f;
	var toIndexedObject$4 = toIndexedObject$a;
	var toPropertyKey = toPropertyKey$4;
	var $toString$2 = toString$c;
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

	var ObjectPrototype$1 = Object[PROTOTYPE];
	var $Symbol = global$d.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var TypeError$4 = global$d.TypeError;
	var QObject = global$d.QObject;
	var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$2.f;
	var nativeDefineProperty = definePropertyModule$1.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$7 = uncurryThis$j([].push);

	var AllSymbols = shared$3('symbols');
	var ObjectPrototypeSymbols = shared$3('op-symbols');
	var WellKnownSymbolsStore$1 = shared$3('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = DESCRIPTORS$c && fails$l(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap$1 = function (tag, description) {
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
	  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$a(O);
	  var key = toPropertyKey(P);
	  anObject$a(Attributes);
	  if (hasOwn$a(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$a(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$4(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$a(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$4(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$a(O);
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
	  if (this === ObjectPrototype$1 && hasOwn$a(AllSymbols, P) && !hasOwn$a(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$a(this, P) || !hasOwn$a(AllSymbols, P) || hasOwn$a(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$4(O);
	  var key = toPropertyKey(P);
	  if (it === ObjectPrototype$1 && hasOwn$a(AllSymbols, key) && !hasOwn$a(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
	  if (descriptor && hasOwn$a(AllSymbols, key) && !(hasOwn$a(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwn$a(AllSymbols, key) && !hasOwn$a(hiddenKeys$1, key)) push$7(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwn$a(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$a(ObjectPrototype$1, key))) {
	      push$7(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL$3) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$b(SymbolPrototype, this)) throw TypeError$4('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$2(arguments[0]);
	    var tag = uid$1(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype$1) call$j(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$a(this, HIDDEN) && hasOwn$a(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor$4(1, value));
	    };
	    if (DESCRIPTORS$c && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
	    return wrap$1(tag, description);
	  };

	  SymbolPrototype = $Symbol[PROTOTYPE];

	  defineBuiltIn$6(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$2(this).tag;
	  });

	  defineBuiltIn$6($Symbol, 'withoutSetter', function (description) {
	    return wrap$1(uid$1(description), description);
	  });

	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule$1.f = $defineProperty;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$2.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap$1(wellKnownSymbol$g(name), name);
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

	$$$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol$l(name);
	});

	$$$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$$$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$c }, {
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

	$$$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
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

	var $$_ = _export;
	var getBuiltIn$b = getBuiltIn$h;
	var hasOwn$9 = hasOwnProperty_1;
	var toString$a = toString$c;
	var shared$2 = sharedExports;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

	var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	$$_({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
	  'for': function (key) {
	    var string = toString$a(key);
	    if (hasOwn$9(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$b('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$Z = _export;
	var hasOwn$8 = hasOwnProperty_1;
	var isSymbol$2 = isSymbol$5;
	var tryToString$4 = tryToString$7;
	var shared$1 = sharedExports;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

	var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	$$Z({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$2(sym)) throw TypeError(tryToString$4(sym) + ' is not a symbol');
	    if (hasOwn$8(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var uncurryThis$i = functionUncurryThis;
	var isArray$9 = isArray$c;
	var isCallable$d = isCallable$p;
	var classof$7 = classofRaw$2;
	var toString$9 = toString$c;

	var push$6 = uncurryThis$i([].push);

	var getJsonReplacerFunction = function (replacer) {
	  if (isCallable$d(replacer)) return replacer;
	  if (!isArray$9(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$6(keys, element);
	    else if (typeof element == 'number' || classof$7(element) == 'Number' || classof$7(element) == 'String') push$6(keys, toString$9(element));
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

	var $$Y = _export;
	var getBuiltIn$a = getBuiltIn$h;
	var apply$1 = functionApply;
	var call$i = functionCall;
	var uncurryThis$h = functionUncurryThis;
	var fails$k = fails$x;
	var isCallable$c = isCallable$p;
	var isSymbol$1 = isSymbol$5;
	var arraySlice$4 = arraySlice$7;
	var getReplacerFunction = getJsonReplacerFunction;
	var NATIVE_SYMBOL$1 = symbolConstructorDetection;

	var $String$1 = String;
	var $stringify = getBuiltIn$a('JSON', 'stringify');
	var exec$3 = uncurryThis$h(/./.exec);
	var charAt$5 = uncurryThis$h(''.charAt);
	var charCodeAt$2 = uncurryThis$h(''.charCodeAt);
	var replace$5 = uncurryThis$h(''.replace);
	var numberToString$1 = uncurryThis$h(1.0.toString);

	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$k(function () {
	  var symbol = getBuiltIn$a('Symbol')();
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) != '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify({ a: symbol }) != '{}'
	    // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) != '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails$k(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice$4(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$c($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$c($replacer)) value = call$i($replacer, this, $String$1(key), value);
	    if (!isSymbol$1(value)) return value;
	  };
	  return apply$1($stringify, null, args);
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
	  $$Y({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$4(arguments);
	      var result = apply$1(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$5(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$X = _export;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var fails$j = fails$x;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var toObject$6 = toObject$a;

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$4 = !NATIVE_SYMBOL || fails$j(function () { getOwnPropertySymbolsModule$2.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	$$X({ target: 'Object', stat: true, forced: FORCED$4 }, {
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

	var getBuiltIn$9 = getBuiltIn$h;
	var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
	var setToStringTag$7 = setToStringTag$9;

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol$9('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$7(getBuiltIn$9('Symbol'), 'Symbol');

	var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

	// `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol$8('unscopables');

	var global$c = global$o;
	var setToStringTag$6 = setToStringTag$9;

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag$6(global$c.JSON, 'JSON', true);

	var path$g = path$m;

	var symbol$5 = path$g.Symbol;

	var iterators = {};

	var DESCRIPTORS$b = descriptors;
	var hasOwn$7 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$b || (DESCRIPTORS$b && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var fails$i = fails$x;

	var correctPrototypeGetter = !fails$i(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$6 = hasOwnProperty_1;
	var isCallable$b = isCallable$p;
	var toObject$5 = toObject$a;
	var sharedKey = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object = Object;
	var ObjectPrototype = $Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function (O) {
	  var object = toObject$5(O);
	  if (hasOwn$6(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$b(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object ? ObjectPrototype : null;
	};

	var fails$h = fails$x;
	var isCallable$a = isCallable$p;
	var isObject$a = isObject$k;
	var create$b = objectCreate;
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

	var NEW_ITERATOR_PROTOTYPE = !isObject$a(IteratorPrototype$1) || fails$h(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$1[ITERATOR$8].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$b(IteratorPrototype$1);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$a(IteratorPrototype$1[ITERATOR$8])) {
	  defineBuiltIn$5(IteratorPrototype$1, ITERATOR$8, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create$a = objectCreate;
	var createPropertyDescriptor$3 = createPropertyDescriptor$8;
	var setToStringTag$5 = setToStringTag$9;
	var Iterators$5 = iterators;

	var returnThis$1 = function () { return this; };

	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$a(IteratorPrototype, { next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$5[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var uncurryThis$g = functionUncurryThis;
	var aCallable$d = aCallable$h;

	var functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$g(aCallable$d(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) { /* empty */ }
	};

	var isCallable$9 = isCallable$p;

	var $String = String;
	var $TypeError$b = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$9(argument)) return argument;
	  throw $TypeError$b("Can't set " + $String(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */

	var uncurryThisAccessor = functionUncurryThisAccessor;
	var anObject$9 = anObject$f;
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
	    anObject$9(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$W = _export;
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
	    } else $$W({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
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
	var global$b = global$o;
	var classof$6 = classof$d;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
	var Iterators$2 = iterators;
	var wellKnownSymbol$d = wellKnownSymbol$q;

	var TO_STRING_TAG$1 = wellKnownSymbol$d('toStringTag');

	for (var COLLECTION_NAME in DOMIterables$1) {
	  var Collection = global$b[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof$6(CollectionPrototype) !== TO_STRING_TAG$1) {
	    createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
	  }
	  Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
	}

	var parent$1g = symbol$5;


	var symbol$4 = parent$1g;

	var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-explicit-resource-management
	defineWellKnownSymbol$7('dispose');

	var parent$1f = symbol$4;



	var symbol$3 = parent$1f;

	var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-async-explicit-resource-management
	defineWellKnownSymbol$6('asyncDispose');

	var $$V = _export;
	var getBuiltIn$8 = getBuiltIn$h;
	var uncurryThis$f = functionUncurryThis;

	var Symbol$4 = getBuiltIn$8('Symbol');
	var keyFor = Symbol$4.keyFor;
	var thisSymbolValue$1 = uncurryThis$f(Symbol$4.prototype.valueOf);

	// `Symbol.isRegistered` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregistered
	$$V({ target: 'Symbol', stat: true }, {
	  isRegistered: function isRegistered(value) {
	    try {
	      return keyFor(thisSymbolValue$1(value)) !== undefined;
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var $$U = _export;
	var shared = sharedExports;
	var getBuiltIn$7 = getBuiltIn$h;
	var uncurryThis$e = functionUncurryThis;
	var isSymbol = isSymbol$5;
	var wellKnownSymbol$c = wellKnownSymbol$q;

	var Symbol$3 = getBuiltIn$7('Symbol');
	var $isWellKnown = Symbol$3.isWellKnown;
	var getOwnPropertyNames = getBuiltIn$7('Object', 'getOwnPropertyNames');
	var thisSymbolValue = uncurryThis$e(Symbol$3.prototype.valueOf);
	var WellKnownSymbolsStore = shared('wks');

	for (var i$1 = 0, symbolKeys = getOwnPropertyNames(Symbol$3), symbolKeysLength = symbolKeys.length; i$1 < symbolKeysLength; i$1++) {
	  // some old engines throws on access to some keys like `arguments` or `caller`
	  try {
	    var symbolKey = symbolKeys[i$1];
	    if (isSymbol(Symbol$3[symbolKey])) wellKnownSymbol$c(symbolKey);
	  } catch (error) { /* empty */ }
	}

	// `Symbol.isWellKnown` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknown
	// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
	$$U({ target: 'Symbol', stat: true, forced: true }, {
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

	var parent$1e = symbol$3;






	// TODO: Remove from `core-js@4`




	var symbol$2 = parent$1e;

	var symbol$1 = symbol$2;

	var symbol = symbol$1;

	var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

	var uncurryThis$d = functionUncurryThis;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
	var toString$8 = toString$c;
	var requireObjectCoercible$2 = requireObjectCoercible$5;

	var charAt$4 = uncurryThis$d(''.charAt);
	var charCodeAt$1 = uncurryThis$d(''.charCodeAt);
	var stringSlice$2 = uncurryThis$d(''.slice);

	var createMethod$1 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$8(requireObjectCoercible$2($this));
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
	var toString$7 = toString$c;
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
	    string: toString$7(iterated),
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

	var parent$1d = iterator$5;


	var iterator$4 = parent$1d;

	var parent$1c = iterator$4;

	var iterator$3 = parent$1c;

	var parent$1b = iterator$3;

	var iterator$2 = parent$1b;

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

	var parent$1a = toPrimitive$5;

	var toPrimitive$4 = parent$1a;

	var parent$19 = toPrimitive$4;

	var toPrimitive$3 = parent$19;

	var parent$18 = toPrimitive$3;

	var toPrimitive$2 = parent$18;

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

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}

	// TODO: Remove from `core-js@4`
	var $$T = _export;
	var DESCRIPTORS$a = descriptors;
	var create$9 = objectCreate;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	$$T({ target: 'Object', stat: true, sham: !DESCRIPTORS$a }, {
	  create: create$9
	});

	var path$f = path$m;

	var Object$2 = path$f.Object;

	var create$8 = function create(P, D) {
	  return Object$2.create(P, D);
	};

	var parent$17 = create$8;

	var create$7 = parent$17;

	var parent$16 = create$7;

	var create$6 = parent$16;

	var parent$15 = create$6;

	var create$5 = parent$15;

	var create$4 = create$5;

	var create$3 = create$4;

	var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create$3);

	var $$S = _export;
	var setPrototypeOf$7 = objectSetPrototypeOf;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	$$S({ target: 'Object', stat: true }, {
	  setPrototypeOf: setPrototypeOf$7
	});

	var path$e = path$m;

	var setPrototypeOf$6 = path$e.Object.setPrototypeOf;

	var parent$14 = setPrototypeOf$6;

	var setPrototypeOf$5 = parent$14;

	var parent$13 = setPrototypeOf$5;

	var setPrototypeOf$4 = parent$13;

	var parent$12 = setPrototypeOf$4;

	var setPrototypeOf$3 = parent$12;

	var setPrototypeOf$2 = setPrototypeOf$3;

	var setPrototypeOf$1 = setPrototypeOf$2;

	var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf$1);

	// TODO: Remove from `core-js@4`
	var $$R = _export;
	var bind$n = functionBind;

	// `Function.prototype.bind` method
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	// eslint-disable-next-line es/no-function-prototype-bind -- detection
	$$R({ target: 'Function', proto: true, forced: Function.bind !== bind$n }, {
	  bind: bind$n
	});

	var path$d = path$m;

	var entryVirtual$9 = function (CONSTRUCTOR) {
	  return path$d[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$8 = entryVirtual$9;

	var bind$m = entryVirtual$8('Function').bind;

	var isPrototypeOf$a = objectIsPrototypeOf;
	var method$6 = bind$m;

	var FunctionPrototype = Function.prototype;

	var bind$l = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || (isPrototypeOf$a(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method$6 : own;
	};

	var parent$11 = bind$l;

	var bind$k = parent$11;

	var parent$10 = bind$k;

	var bind$j = parent$10;

	var parent$$ = bind$j;

	var bind$i = parent$$;

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
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}

	var $$Q = _export;
	var fails$g = fails$x;
	var toObject$4 = toObject$a;
	var nativeGetPrototypeOf = objectGetPrototypeOf;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var FAILS_ON_PRIMITIVES$2 = fails$g(function () { nativeGetPrototypeOf(1); });

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	$$Q({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !CORRECT_PROTOTYPE_GETTER }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$4(it));
	  }
	});

	var path$c = path$m;

	var getPrototypeOf$6 = path$c.Object.getPrototypeOf;

	var parent$_ = getPrototypeOf$6;

	var getPrototypeOf$5 = parent$_;

	var parent$Z = getPrototypeOf$5;

	var getPrototypeOf$4 = parent$Z;

	var parent$Y = getPrototypeOf$4;

	var getPrototypeOf$3 = parent$Y;

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

	var $$P = _export;
	var isArray$8 = isArray$c;

	// `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray
	$$P({ target: 'Array', stat: true }, {
	  isArray: isArray$8
	});

	var path$b = path$m;

	var isArray$7 = path$b.Array.isArray;

	var parent$X = isArray$7;

	var isArray$6 = parent$X;

	var parent$W = isArray$6;

	var isArray$5 = parent$W;

	var parent$V = isArray$5;

	var isArray$4 = parent$V;

	var isArray$3 = isArray$4;

	var isArray$2 = isArray$3;

	var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$2);

	function _arrayLikeToArray$4(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}

	function _arrayWithoutHoles(arr) {
	  if (_Array$isArray(arr)) return _arrayLikeToArray$4(arr);
	}

	var classof$5 = classof$d;
	var getMethod$1 = getMethod$3;
	var isNullOrUndefined$3 = isNullOrUndefined$6;
	var Iterators$1 = iterators;
	var wellKnownSymbol$b = wellKnownSymbol$q;

	var ITERATOR$6 = wellKnownSymbol$b('iterator');

	var getIteratorMethod$a = function (it) {
	  if (!isNullOrUndefined$3(it)) return getMethod$1(it, ITERATOR$6)
	    || getMethod$1(it, '@@iterator')
	    || Iterators$1[classof$5(it)];
	};

	var getIteratorMethod$9 = getIteratorMethod$a;

	var getIteratorMethod_1 = getIteratorMethod$9;

	var parent$U = getIteratorMethod_1;


	var getIteratorMethod$8 = parent$U;

	var parent$T = getIteratorMethod$8;

	var getIteratorMethod$7 = parent$T;

	var parent$S = getIteratorMethod$7;

	var getIteratorMethod$6 = parent$S;

	var getIteratorMethod$5 = getIteratorMethod$6;

	var getIteratorMethod$4 = getIteratorMethod$5;

	var _getIteratorMethod = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$4);

	var call$g = functionCall;
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
	    innerResult = call$g(innerResult, iterator);
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

	var wellKnownSymbol$a = wellKnownSymbol$q;
	var Iterators = iterators;

	var ITERATOR$5 = wellKnownSymbol$a('iterator');
	var ArrayPrototype$7 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$2 = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayPrototype$7[ITERATOR$5] === it);
	};

	var call$f = functionCall;
	var aCallable$c = aCallable$h;
	var anObject$6 = anObject$f;
	var tryToString$3 = tryToString$7;
	var getIteratorMethod$3 = getIteratorMethod$a;

	var $TypeError$a = TypeError;

	var getIterator$3 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
	  if (aCallable$c(iteratorMethod)) return anObject$6(call$f(iteratorMethod, argument));
	  throw $TypeError$a(tryToString$3(argument) + ' is not iterable');
	};

	var bind$f = functionBindContext;
	var call$e = functionCall;
	var toObject$3 = toObject$a;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
	var isConstructor$1 = isConstructor$4;
	var lengthOfArrayLike$3 = lengthOfArrayLike$8;
	var createProperty$3 = createProperty$6;
	var getIterator$2 = getIterator$3;
	var getIteratorMethod$2 = getIteratorMethod$a;

	var $Array$1 = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$3(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor$1(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind$f(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod$2(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod$1(iteratorMethod))) {
	    iterator = getIterator$2(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (;!(step = call$e(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$3(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike$3(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$3(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$9 = wellKnownSymbol$q;

	var ITERATOR$4 = wellKnownSymbol$9('iterator');
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
	  iteratorWithReturn[ITERATOR$4] = function () {
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
	    object[ITERATOR$4] = function () {
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

	var path$a = path$m;

	var from$6 = path$a.Array.from;

	var parent$R = from$6;

	var from$5 = parent$R;

	var parent$Q = from$5;

	var from$4 = parent$Q;

	var parent$P = from$4;

	var from$3 = parent$P;

	var from$2 = from$3;

	var from$1 = from$2;

	var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from$1);

	function _iterableToArray(iter) {
	  if (typeof _Symbol !== "undefined" && _getIteratorMethod(iter) != null || iter["@@iterator"] != null) return _Array$from(iter);
	}

	var $$N = _export;
	var isArray$1 = isArray$c;
	var isConstructor = isConstructor$4;
	var isObject$9 = isObject$k;
	var toAbsoluteIndex$1 = toAbsoluteIndex$4;
	var lengthOfArrayLike$2 = lengthOfArrayLike$8;
	var toIndexedObject$2 = toIndexedObject$a;
	var createProperty$2 = createProperty$6;
	var wellKnownSymbol$8 = wellKnownSymbol$q;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
	var nativeSlice = arraySlice$7;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');

	var SPECIES$3 = wellKnownSymbol$8('species');
	var $Array = Array;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$N({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$2(this);
	    var length = lengthOfArrayLike$2(O);
	    var k = toAbsoluteIndex$1(start, length);
	    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$1(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor(Constructor) && (Constructor === $Array || isArray$1(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$9(Constructor)) {
	        Constructor = Constructor[SPECIES$3];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var entryVirtual$7 = entryVirtual$9;

	var slice$6 = entryVirtual$7('Array').slice;

	var isPrototypeOf$9 = objectIsPrototypeOf;
	var method$5 = slice$6;

	var ArrayPrototype$6 = Array.prototype;

	var slice$5 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$6 || (isPrototypeOf$9(ArrayPrototype$6, it) && own === ArrayPrototype$6.slice) ? method$5 : own;
	};

	var parent$O = slice$5;

	var slice$4 = parent$O;

	var parent$N = slice$4;

	var slice$3 = parent$N;

	var parent$M = slice$3;

	var slice$2 = parent$M;

	var slice$1 = slice$2;

	var slice = slice$1;

	var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice);

	function _unsupportedIterableToArray$4(o, minLen) {
	  var _context;
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
	  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return _Array$from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread();
	}

	var entryVirtual$6 = entryVirtual$9;

	var concat$8 = entryVirtual$6('Array').concat;

	var isPrototypeOf$8 = objectIsPrototypeOf;
	var method$4 = concat$8;

	var ArrayPrototype$5 = Array.prototype;

	var concat$7 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$5 || (isPrototypeOf$8(ArrayPrototype$5, it) && own === ArrayPrototype$5.concat) ? method$4 : own;
	};

	var parent$L = concat$7;

	var concat$6 = parent$L;

	var parent$K = concat$6;

	var concat$5 = parent$K;

	var parent$J = concat$5;

	var concat$4 = parent$J;

	var concat$3 = concat$4;

	var concat$2 = concat$3;

	var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat$2);

	function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray$3(o, minLen) { var _context5; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = _sliceInstanceProperty(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
	function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	function getDOMPoint(dom) {
	  var rect = dom.getBoundingClientRect();
	  return {
	    x: rect.left,
	    y: rect.top
	  };
	  // var t = 0
	  // var l = 0
	  // //判断是否有父容器，如果存在则累加其边距
	  // while (dom !== document.body) {
	  //   t += dom.offsetTop //叠加父容器的上边距
	  //   l += dom.offsetLeft //叠加父容器的左边距
	  //   //if(dom.style.borderLeftWidth) l += Number(dom.style.borderLeftWidth);
	  //   //if(dom.style.borderTopWidth) t += Number(dom.style.borderTopWidth);
	  //   dom = dom.parentNode as HTMLElement
	  // }
	  // console.log('22', { x: l, y: t })
	  // return { x: l, y: t }
	}

	/**
	 * @description 查看当前的鼠标位置是否在父元素和绝对定位的子元素的组合范围内，如果超出则返回false
	 * @param parent
	 * @param topChild
	 * @param pageX
	 * @param pageY
	 * @returns {boolean}
	 */
	function checkIsMouseInRange(parent, topChild, bottom, pageX, pageY) {
	  var _getDOMPoint = getDOMPoint(parent),
	    x = _getDOMPoint.x,
	    y = _getDOMPoint.y;
	  var allTop = y - bottom - topChild.clientHeight;
	  var allBottom = y + parent.clientHeight;
	  var allLeft = x + Math.round(parent.clientWidth / 2) - Math.round(topChild.clientWidth / 2);
	  var allRight = x + Math.round(parent.clientWidth / 2) + Math.round(topChild.clientWidth / 2);
	  var parentLeft = x;
	  var parentRight = x + parent.clientWidth;
	  if (pageX >= allLeft && pageX <= allRight && pageY <= y && pageY >= allTop) return true;
	  if (pageX >= parentLeft - 5 && pageX <= parentRight + 5 && pageY >= y - 5 && pageY <= allBottom + 5) return true;
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
	function $$M(desc, props, children) {
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
	    var _iterator = _createForOfIteratorHelper$3(children),
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
	/**
	 * @description 根据传入的字符串获取对应的DOM元素
	 * @param dom
	 * @returns {HTMLElement | null}
	 */
	function getEl(dom) {
	  if (dom instanceof HTMLElement) return dom;
	  if (typeof dom === 'string') {
	    return document.querySelector(dom);
	  }
	  return null;
	}
	function addClass(dom, classNames) {
	  var classList = dom.classList;
	  var _iterator2 = _createForOfIteratorHelper$3(classNames),
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
	function changeClass(dom, className) {
	  dom.className = className;
	}
	function includeClass(dom, className) {
	  var classList = dom.classList;
	  for (var key in classList) {
	    if (classList[key] === className) return true;
	  }
	  return false;
	}
	function containsDOM(parent, child) {
	  // if (parent.childNodes.length > 0) {
	  //   parent.childNodes.forEach((node) => {
	  //     if (node !== child) {
	  //       if (containsDOM(node as Element, child) === true) return true
	  //     } else return true
	  //   })
	  // }
	  // return false

	  if (parent !== child && parent.contains(child)) {
	    return true;
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
	function setSvgPath(svg, d) {
	  var path = svg.getElementsByTagNameNS(svgNS, 'path')[0];
	  path.setAttributeNS(null, 'd', d);
	}
	function createSvgs(d) {
	  var viewBox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0 0 24 24';
	  var svg = document.createElementNS(svgNS, 'svg');
	  svg.setAttribute('viewBox', viewBox);
	  var _iterator3 = _createForOfIteratorHelper$3(d),
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
	function patchComponent(target, another, options) {
	  if (target.id !== another.id) throw new Error('需要合并的两个组件的id不相同');
	  var replaceElementType = (options === null || options === void 0 ? void 0 : options.replaceElType) || 'replaceOuterHTMLOfComponent';
	  for (var key in another) {
	    if (key in target) {
	      if (key === 'props') {
	        patchDOMProps(target[key], another[key], target.el);
	      } else if (key === 'el') {
	        if (replaceElementType === 'replaceOuterHTMLOfComponent') {
	          target.el = another.el;
	        } else {
	          var _iterator4 = _createForOfIteratorHelper$3(target.el.childNodes),
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
	            var _parentNode, _parentNode2;
	            (_parentNode = target[key].parentNode) === null || _parentNode === void 0 ? void 0 : _parentNode.insertBefore(another[key], target[key]);
	            (_parentNode2 = target[key].parentNode) === null || _parentNode2 === void 0 ? void 0 : _parentNode2.removeChild(target[key]);
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

	var $$L = _export;
	var $includes = arrayIncludes.includes;
	var fails$f = fails$x;

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$f(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$L({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$5 = entryVirtual$9;

	var includes$7 = entryVirtual$5('Array').includes;

	var isObject$8 = isObject$k;
	var classof$4 = classofRaw$2;
	var wellKnownSymbol$7 = wellKnownSymbol$q;

	var MATCH$1 = wellKnownSymbol$7('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$8(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
	};

	var isRegExp = isRegexp;

	var $TypeError$9 = TypeError;

	var notARegexp = function (it) {
	  if (isRegExp(it)) {
	    throw $TypeError$9("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol$6 = wellKnownSymbol$q;

	var MATCH = wellKnownSymbol$6('match');

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

	var $$K = _export;
	var uncurryThis$c = functionUncurryThis;
	var notARegExp = notARegexp;
	var requireObjectCoercible$1 = requireObjectCoercible$5;
	var toString$6 = toString$c;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	var stringIndexOf = uncurryThis$c(''.indexOf);

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$K({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~stringIndexOf(
	      toString$6(requireObjectCoercible$1(this)),
	      toString$6(notARegExp(searchString)),
	      arguments.length > 1 ? arguments[1] : undefined
	    );
	  }
	});

	var entryVirtual$4 = entryVirtual$9;

	var includes$6 = entryVirtual$4('String').includes;

	var isPrototypeOf$7 = objectIsPrototypeOf;
	var arrayMethod = includes$7;
	var stringMethod = includes$6;

	var ArrayPrototype$4 = Array.prototype;
	var StringPrototype = String.prototype;

	var includes$5 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype$4 || (isPrototypeOf$7(ArrayPrototype$4, it) && own === ArrayPrototype$4.includes)) return arrayMethod;
	  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf$7(StringPrototype, it) && own === StringPrototype.includes)) {
	    return stringMethod;
	  } return own;
	};

	var parent$I = includes$5;

	var includes$4 = parent$I;

	var parent$H = includes$4;

	var includes$3 = parent$H;

	var parent$G = includes$3;

	var includes$2 = parent$G;

	var includes$1 = includes$2;

	var includes = includes$1;

	var _includesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(includes);

	var fails$e = fails$x;

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

	var $$J = _export;
	var forEach$8 = arrayForEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	$$J({ target: 'Array', proto: true, forced: [].forEach != forEach$8 }, {
	  forEach: forEach$8
	});

	var entryVirtual$3 = entryVirtual$9;

	var forEach$7 = entryVirtual$3('Array').forEach;

	var parent$F = forEach$7;

	var forEach$6 = parent$F;

	var classof$3 = classof$d;
	var hasOwn$5 = hasOwnProperty_1;
	var isPrototypeOf$6 = objectIsPrototypeOf;
	var method$3 = forEach$6;

	var ArrayPrototype$3 = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach$5 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$3 || (isPrototypeOf$6(ArrayPrototype$3, it) && own === ArrayPrototype$3.forEach)
	    || hasOwn$5(DOMIterables, classof$3(it)) ? method$3 : own;
	};

	var parent$E = forEach$5;

	var forEach$4 = parent$E;

	var parent$D = forEach$4;

	var forEach$3 = parent$D;

	var forEach$2 = forEach$3;

	var forEach$1 = forEach$2;

	var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach$1);

	var $$I = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$I({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$2 = entryVirtual$9;

	var filter$6 = entryVirtual$2('Array').filter;

	var isPrototypeOf$5 = objectIsPrototypeOf;
	var method$2 = filter$6;

	var ArrayPrototype$2 = Array.prototype;

	var filter$5 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$2 || (isPrototypeOf$5(ArrayPrototype$2, it) && own === ArrayPrototype$2.filter) ? method$2 : own;
	};

	var parent$C = filter$5;

	var filter$4 = parent$C;

	var parent$B = filter$4;

	var filter$3 = parent$B;

	var parent$A = filter$3;

	var filter$2 = parent$A;

	var filter$1 = filter$2;

	var filter = filter$1;

	var _filterInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(filter);

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
	    key: "off",
	    value: function off(event, cb) {
	      if (this.$events[event]) {
	        var _context3;
	        this.$events[event] = _filterInstanceProperty(_context3 = this.$events[event]).call(_context3, function (fn) {
	          if (fn !== cb) return true;
	          return false;
	        });
	      }
	    }
	  }]);
	  return BaseEvent;
	}();

	function _createSuper$x(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$x(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$x() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Component = /*#__PURE__*/function (_BaseEvent) {
	  _inherits(Component, _BaseEvent);
	  var _super = _createSuper$x(Component);
	  //el代表着该组件对应的整个HTML元素

	  function Component(container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, Component);
	    _this = _super.call(this);
	    if (!desc) {
	      desc = 'div';
	    }
	    var dom = $$M(desc, props, children);
	    _this.el = dom;
	    _this.container = container;
	    // 安装组件成功
	    if (container) {
	      container.append(dom);
	    }
	    return _this;
	  }
	  _createClass(Component, [{
	    key: "init",
	    value: function init() {}
	  }, {
	    key: "initEvent",
	    value: function initEvent() {}
	  }, {
	    key: "initPCEvent",
	    value: function initPCEvent() {}
	  }, {
	    key: "initMobileEvent",
	    value: function initMobileEvent() {}
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {}
	  }, {
	    key: "initPCTemplate",
	    value: function initPCTemplate() {}
	  }, {
	    key: "initMobileTemplate",
	    value: function initMobileTemplate() {}
	  }, {
	    key: "initComponent",
	    value: function initComponent() {}
	  }, {
	    key: "resetEvent",
	    value: function resetEvent() {}
	  }, {
	    key: "dispose",
	    value: function dispose() {}
	  }]);
	  return Component;
	}(BaseEvent);

	function _createSuper$w(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$w(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$w() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Loading = /*#__PURE__*/function (_Component) {
	  _inherits(Loading, _Component);
	  var _super = _createSuper$w(Loading);
	  function Loading(player, msg, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, Loading);
	    _this = _super.call(this, null, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'Loading');
	    _this.props = props || {};
	    _this.player = player;
	    _this.container = container;
	    _this.message = msg;
	    _this.init();
	    return _this;
	  }
	  _createClass(Loading, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-loading']);
	      this.loadingBox = $$M('div');
	      this.messageBox = $$M('div.video-loading-msgbox');
	      this.messageBox.innerText = this.message;
	      this.el.appendChild(this.loadingBox);
	      this.el.appendChild(this.messageBox);
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {}
	  }, {
	    key: "addLoading",
	    value: function addLoading() {
	      var _context;
	      if (!_includesInstanceProperty(_context = _toConsumableArray(this.container.childNodes)).call(_context, this.el)) {
	        this.container.appendChild(this.el);
	      }
	    }
	  }, {
	    key: "removeLoading",
	    value: function removeLoading() {
	      var _context2;
	      if (_includesInstanceProperty(_context2 = _toConsumableArray(this.container.childNodes)).call(_context2, this.el)) {
	        this.container.removeChild(this.el);
	      }
	    }
	  }]);
	  return Loading;
	}(Component);

	var EVENT = /*#__PURE__*/function (EVENT) {
	  EVENT["LOADED_META_DATA"] = "loadedmetadata";
	  EVENT["TIME_UPDATE"] = "timeupdate";
	  EVENT["PLAY"] = "play";
	  EVENT["PAUSE"] = "pause";
	  EVENT["SEEKING"] = "seeking";
	  EVENT["SEEKED"] = "seeked";
	  EVENT["WAITING"] = "waiting";
	  EVENT["CAN_PLAY"] = "canplay";
	  EVENT["ERROR"] = "videoError";
	  EVENT["RATE_CHANGE"] = "ratechange";
	  EVENT["VIDEO_CLICK"] = "videoClick";
	  EVENT["PROGRESS_CLICK"] = "progress-click";
	  EVENT["PROGRESS_MOUSE_ENTER"] = "progress-mouseenter";
	  EVENT["PROGRESS_MOUSE_LEAVE"] = "progress-mouseleave";
	  EVENT["VIDEO_PROGRESS_CLICK"] = "video-progress-click";
	  EVENT["DANMAKU_INPUT_FOCUS"] = "inputFocus";
	  EVENT["DANMAKU_INPUT_BLUR"] = "inputBlur";
	  EVENT["DOT_DOWN"] = "dotdown";
	  EVENT["DOT_UP"] = "dotup";
	  EVENT["DOT_DRAG"] = "dotdrag";
	  EVENT["VIDEO_DOT_DOWN"] = "videoDotDown";
	  EVENT["VIDEO_DOT_UP"] = "videoDotUp";
	  EVENT["VIDEO_DOT_DRAG"] = "videoDotDrag";
	  EVENT["ENTER_FULLSCREEN"] = "enterFullscreen";
	  EVENT["LEAVE_FULLSCREEN"] = "leaveFullscreen";
	  EVENT["RESIZE"] = "resize";
	  EVENT["SHOW_TOOLBAR"] = "showtoolbar";
	  EVENT["HIDE_TOOLBAR"] = "hidetoolbar";
	  EVENT["MOVE_VERTICAL"] = "moveVertical";
	  EVENT["MOVE_HORIZONTAL"] = "moveHorizontal";
	  EVENT["SLIDE_VERTICAL"] = "slideVertical";
	  EVENT["SLIDE_HORIZONTAL"] = "slideHorizontal";
	  EVENT["VOLUME_PROGRESS_CLICK"] = "volume-progress-click";
	  EVENT["REQUEST_DANMAKU_DATA"] = "RequestDanmakuData";
	  EVENT["SEND_DANMAKU_DATA"] = "SendDanmakuData";
	  return EVENT;
	}({});

	function _createSuper$v(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$v(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$v() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var ErrorLoading = /*#__PURE__*/function (_Loading) {
	  _inherits(ErrorLoading, _Loading);
	  var _super = _createSuper$v(ErrorLoading);
	  // el: div.video-loading

	  function ErrorLoading(player, msg, container) {
	    var _this;
	    _classCallCheck(this, ErrorLoading);
	    _this = _super.call(this, player, msg, container);
	    _defineProperty(_assertThisInitialized(_this), "id", 'errorloading');
	    addClass(_this.loadingBox, ['video-loading-errorloading']);
	    _this.initEvent();
	    return _this;
	  }
	  _createClass(ErrorLoading, [{
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      // 视频加载发生错误时
	      this.player.on(EVENT.ERROR, function (e) {
	        _this2.addLoading();
	      });

	      // 该视频已准备好开始播放
	      this.player.on(EVENT.CAN_PLAY, function (e) {
	        _this2.removeLoading();
	      });
	    }
	  }]);
	  return ErrorLoading;
	}(Loading);

	function _createSuper$u(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$u(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$u() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var TimeLoading = /*#__PURE__*/function (_Loading) {
	  _inherits(TimeLoading, _Loading);
	  var _super = _createSuper$u(TimeLoading);
	  // el: div.video-loading

	  function TimeLoading(player, msg, container) {
	    var _this;
	    _classCallCheck(this, TimeLoading);
	    _this = _super.call(this, player, msg, container);
	    _defineProperty(_assertThisInitialized(_this), "id", 'timeloading');
	    addClass(_this.loadingBox, ['video-loading-loadingbox']);
	    _this.initEvent();
	    return _this;
	  }
	  _createClass(TimeLoading, [{
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      // 在视频由于需要缓冲下一帧而停止时触发
	      this.player.on(EVENT.WAITING, function () {
	        _this2.addLoading();
	      });

	      // 该视频已准备好开始播放
	      this.player.on(EVENT.CAN_PLAY, function () {
	        _this2.removeLoading();
	      });
	    }
	  }]);
	  return TimeLoading;
	}(Loading);

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$H = _export;
	var uncurryThis$b = functionUncurryThisClause;
	var $indexOf = arrayIncludes.indexOf;
	var arrayMethodIsStrict = arrayMethodIsStrict$2;

	var nativeIndexOf = uncurryThis$b([].indexOf);

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$3 = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$H({ target: 'Array', proto: true, forced: FORCED$3 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
	      : $indexOf(this, searchElement, fromIndex);
	  }
	});

	var entryVirtual$1 = entryVirtual$9;

	var indexOf$6 = entryVirtual$1('Array').indexOf;

	var isPrototypeOf$4 = objectIsPrototypeOf;
	var method$1 = indexOf$6;

	var ArrayPrototype$1 = Array.prototype;

	var indexOf$5 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$1 || (isPrototypeOf$4(ArrayPrototype$1, it) && own === ArrayPrototype$1.indexOf) ? method$1 : own;
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

	var DESCRIPTORS$9 = descriptors;
	var isArray = isArray$c;

	var $TypeError$8 = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$9 = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$9 && !function () {
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
	  if (isArray(O) && !getOwnPropertyDescriptor$9(O, 'length').writable) {
	    throw $TypeError$8('Cannot set read only .length');
	  } return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var tryToString$2 = tryToString$7;

	var $TypeError$7 = TypeError;

	var deletePropertyOrThrow$1 = function (O, P) {
	  if (!delete O[P]) throw $TypeError$7('Cannot delete property ' + tryToString$2(P) + ' of ' + tryToString$2(O));
	};

	var $$G = _export;
	var toObject$2 = toObject$a;
	var toAbsoluteIndex = toAbsoluteIndex$4;
	var toIntegerOrInfinity = toIntegerOrInfinity$4;
	var lengthOfArrayLike$1 = lengthOfArrayLike$8;
	var setArrayLength = arraySetLength;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
	var arraySpeciesCreate = arraySpeciesCreate$3;
	var createProperty$1 = createProperty$6;
	var deletePropertyOrThrow = deletePropertyOrThrow$1;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

	var max = Math.max;
	var min = Math.min;

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$$G({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject$2(this);
	    var len = lengthOfArrayLike$1(O);
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

	var entryVirtual = entryVirtual$9;

	var splice$7 = entryVirtual('Array').splice;

	var isPrototypeOf$3 = objectIsPrototypeOf;
	var method = splice$7;

	var ArrayPrototype = Array.prototype;

	var splice$6 = function (it) {
	  var own = it.splice;
	  return it === ArrayPrototype || (isPrototypeOf$3(ArrayPrototype, it) && own === ArrayPrototype.splice) ? method : own;
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

	function _createSuper$t(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$t(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$t() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Toast = /*#__PURE__*/function (_Component) {
	  _inherits(Toast, _Component);
	  var _super = _createSuper$t(Toast);
	  function Toast(player, dom, props) {
	    var _this;
	    _classCallCheck(this, Toast);
	    _this = _super.call(this, null, 'div', props, null);
	    _defineProperty(_assertThisInitialized(_this), "id", 'Toast');
	    _this.player = player;
	    _this.props = props;
	    _this.dom = dom || null;
	    _this.init();
	    return _this;
	  }
	  _createClass(Toast, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      var _this2 = this;
	      if (this.dom) {
	        this.el.appendChild(this.dom);
	      }
	      addClass(this.el, ['video-toast-wrapper']);
	      this.player.el.appendChild(this.el);
	      window.setTimeout(function () {
	        addClass(_this2.el, ['video-toast-animate']);
	        var start = 30;
	        for (var i in Toast.ToastQueue) {
	          start += Toast.ToastQueue[i].el.clientHeight + 10;
	        }
	        _this2.el.style.transform = "translateY(".concat(start, "px)");
	        Toast.ToastQueue.push(_this2);
	      });
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {}
	  }, {
	    key: "dispose",
	    value: function dispose() {
	      var _context, _context2;
	      var index = _indexOfInstanceProperty(_context = Toast.ToastQueue).call(_context, this);
	      _spliceInstanceProperty(_context2 = Toast.ToastQueue).call(_context2, index, 1);
	      this.el.parentElement.removeChild(this.el);
	      for (var i = index; i < Toast.ToastQueue.length; i++) {
	        var toast = Toast.ToastQueue[i];
	        if (i === index) {
	          toast.el.style.transform = "translateY(".concat(10 + this.el.clientHeight, "px)");
	        } else {
	          toast.el.style.transform = "translateY(".concat(10 + Toast.ToastQueue[i - 1].el.clientHeight, "px)");
	        }
	      }
	    }
	  }]);
	  return Toast;
	}(Component);
	_defineProperty(Toast, "ToastQueue", []);

	var playPath = "M6 2.914v18.172L20.279 12 6 2.914z";
	var pausePath = "M14.333 20.133H19V3.8h-4.667M5 20.133h4.667V3.8H5v16.333z";
	var volumePath$1 = "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";
	var fullscreenPath = "M181.333333 213.333333h661.333334a53.393333 53.393333 0 0 1 53.333333 53.333334v490.666666a53.393333 53.393333 0 0 1-53.333333 53.333334H181.333333a53.393333 53.393333 0 0 1-53.333333-53.333334V266.666667a53.393333 53.393333 0 0 1 53.333333-53.333334z m53.333334 640H96a10.666667 10.666667 0 0 1-10.666667-10.666666v-138.666667a21.333333 21.333333 0 0 0-42.666666 0v138.666667a53.393333 53.393333 0 0 0 53.333333 53.333333h138.666667a21.333333 21.333333 0 0 0 0-42.666667zM64 341.333333a21.333333 21.333333 0 0 0 21.333333-21.333333V181.333333a10.666667 10.666667 0 0 1 10.666667-10.666666h138.666667a21.333333 21.333333 0 0 0 0-42.666667H96a53.393333 53.393333 0 0 0-53.333333 53.333333v138.666667a21.333333 21.333333 0 0 0 21.333333 21.333333z m896 341.333334a21.333333 21.333333 0 0 0-21.333333 21.333333v138.666667a10.666667 10.666667 0 0 1-10.666667 10.666666h-138.666667a21.333333 21.333333 0 0 0 0 42.666667h138.666667a53.393333 53.393333 0 0 0 53.333333-53.333333v-138.666667a21.333333 21.333333 0 0 0-21.333333-21.333333z m-32-554.666667h-138.666667a21.333333 21.333333 0 0 0 0 42.666667h138.666667a10.666667 10.666667 0 0 1 10.666667 10.666666v138.666667a21.333333 21.333333 0 0 0 42.666666 0V181.333333a53.393333 53.393333 0 0 0-53.333333-53.333333z";
	var fullscreenExitPath = "M768 629.333333a53.393333 53.393333 0 0 1-53.333333 53.333334H309.333333a53.393333 53.393333 0 0 1-53.333333-53.333334V394.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h405.333334a53.393333 53.393333 0 0 1 53.333333 53.333334z m53.333333-288h138.666667a21.333333 21.333333 0 0 0 0-42.666666h-138.666667a10.666667 10.666667 0 0 1-10.666666-10.666667V149.333333a21.333333 21.333333 0 0 0-42.666667 0v138.666667a53.393333 53.393333 0 0 0 53.333333 53.333333zM64 341.333333h138.666667a53.393333 53.393333 0 0 0 53.333333-53.333333V149.333333a21.333333 21.333333 0 0 0-42.666667 0v138.666667a10.666667 10.666667 0 0 1-10.666666 10.666667H64a21.333333 21.333333 0 0 0 0 42.666666z m138.666667 341.333334H64a21.333333 21.333333 0 0 0 0 42.666666h138.666667a10.666667 10.666667 0 0 1 10.666666 10.666667v138.666667a21.333333 21.333333 0 0 0 42.666667 0v-138.666667a53.393333 53.393333 0 0 0-53.333333-53.333333z m757.333333 0h-138.666667a53.393333 53.393333 0 0 0-53.333333 53.333333v138.666667a21.333333 21.333333 0 0 0 42.666667 0v-138.666667a10.666667 10.666667 0 0 1 10.666666-10.666667h138.666667a21.333333 21.333333 0 0 0 0-42.666666z";
	var subSettingPath = "M920.606667 611.153333A106.153333 106.153333 0 0 1 853.333333 512v-0.593333a106.166667 106.166667 0 0 1 67.106667-99.273334c26.82-10.713333 40.186667-41.426667 29.793333-68.466666a468.233333 468.233333 0 0 0-74.46-128.24A53.226667 53.226667 0 0 0 801.6 207.333333a106.666667 106.666667 0 0 1-119.433333 8.666667 106.253333 106.253333 0 0 1-52.366667-107.253333 53.46 53.46 0 0 0-44.62-60.4 474.34 474.34 0 0 0-147.893333 0.24 52.613333 52.613333 0 0 0-34.546667 21.333333 53.566667 53.566667 0 0 0-9.62 39.173333 106.753333 106.753333 0 0 1-105.493333 121.813334 107.333333 107.333333 0 0 1-66-22.793334 53.233333 53.233333 0 0 0-74.186667 8.286667A468 468 0 0 0 73.333333 344.82c-10.32 27.053333 3.126667 57.733333 30 68.38a106.706667 106.706667 0 0 1 0.166667 198.306667c-26.826667 10.666667-40.22 41.393333-29.853333 68.44A468.086667 468.086667 0 0 0 148 808.253333a52.6 52.6 0 0 0 35.673333 19.22 53.566667 53.566667 0 0 0 38.666667-11.213333 106.706667 106.706667 0 0 1 171.513333 98.893333 53.466667 53.466667 0 0 0 44.58 60.44 474.366667 474.366667 0 0 0 147.566667-0.066666 53.48 53.48 0 0 0 44.533333-60.486667 106.253333 106.253333 0 0 1 52.173334-107.373333 106.226667 106.226667 0 0 1 119.24 8.333333 53.52 53.52 0 0 0 38.706666 11.18 52.606667 52.606667 0 0 0 35.653334-19.253333 468 468 0 0 0 74.22-128.346667c10.34-27.066667-3.08-57.753333-29.92-68.426667zM640 512c0 70.58-57.42 128-128 128s-128-57.42-128-128 57.42-128 128-128 128 57.42 128 128z";
	var fullPagePath = "M928 128H96a53.393333 53.393333 0 0 0-53.333333 53.333333v661.333334a53.393333 53.393333 0 0 0 53.333333 53.333333h832a53.393333 53.393333 0 0 0 53.333333-53.333333V181.333333a53.393333 53.393333 0 0 0-53.333333-53.333333zM377.753333 591.086667L200.833333 768H320a21.333333 21.333333 0 0 1 0 42.666667H149.206667a21.333333 21.333333 0 0 1-21.206667-21.206667V618.666667a21.333333 21.333333 0 0 1 42.666667 0v119.166666l176.913333-176.92a21.333333 21.333333 0 0 1 30.173333 30.173334zM896 405.333333a21.333333 21.333333 0 0 1-42.666667 0V286.166667l-176.913333 176.92a21.333333 21.333333 0 0 1-30.173333-30.173334L823.166667 256H704a21.333333 21.333333 0 0 1 0-42.666667h170.793333a21.333333 21.333333 0 0 1 21.206667 21.206667V405.333333z";
	var fullPageExitPath = "M928 128H96a53.393333 53.393333 0 0 0-53.333333 53.333333v661.333334a53.393333 53.393333 0 0 0 53.333333 53.333333h832a53.393333 53.393333 0 0 0 53.333333-53.333333V181.333333a53.393333 53.393333 0 0 0-53.333333-53.333333z m-544 618.666667a21.333333 21.333333 0 0 1-42.666667 0V627.5l-176.913333 176.92a21.333333 21.333333 0 0 1-30.173333-30.173333L311.166667 597.333333H192a21.333333 21.333333 0 0 1 0-42.666666h170.766667A21.333333 21.333333 0 0 1 384 575.9z m505.753333-496.913334L712.833333 426.666667H832a21.333333 21.333333 0 0 1 0 42.666666H661.233333A21.333333 21.333333 0 0 1 640 448.1V277.333333a21.333333 21.333333 0 0 1 42.666667 0v119.166667l176.913333-176.92a21.333333 21.333333 0 1 1 30.173333 30.173333z";
	var picInPicPath = "M768 213.333333H256a85.333333 85.333333 0 0 0-85.333333 85.333334v426.666666a85.333333 85.333333 0 0 0 85.333333 85.333334h170.666667a42.666667 42.666667 0 1 1 0 85.333333H256a170.666667 170.666667 0 0 1-170.666667-170.666667V298.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h512a170.666667 170.666667 0 0 1 170.666667 170.666667v128a42.666667 42.666667 0 1 1-85.333334 0V298.666667a85.333333 85.333333 0 0 0-85.333333-85.333334z m-128 341.333334a128 128 0 0 0-128 128v85.333333a128 128 0 0 0 128 128h170.666667a128 128 0 0 0 128-128v-85.333333a128 128 0 0 0-128-128h-170.666667z";
	var screenShotPath = "M981.333333 224v661.333333a53.393333 53.393333 0 0 1-53.333333 53.333334H96a53.393333 53.393333 0 0 1-53.333333-53.333334V224a53.393333 53.393333 0 0 1 53.333333-53.333333h80a10.713333 10.713333 0 0 0 8.533333-4.266667L229.333333 106.666667a53.58 53.58 0 0 1 42.666667-21.333334h138.666667a53.58 53.58 0 0 1 42.666666 21.333334l44.8 59.733333A10.713333 10.713333 0 0 0 506.666667 170.666667h421.333333a53.393333 53.393333 0 0 1 53.333333 53.333333z m-348.666666 451.333333a170.666667 170.666667 0 1 0-120.666667 50 169.553333 169.553333 0 0 0 120.666667-50z m7.333333-120.666666c0 70.58-57.42 128-128 128s-128-57.42-128-128 57.42-128 128-128 128 57.42 128 128z m213.333333-234.666667a21.333333 21.333333 0 0 0-21.333333-21.333333h-85.333333a21.333333 21.333333 0 0 0 0 42.666666h85.333333a21.333333 21.333333 0 0 0 21.333333-21.333333z";
	var videoShotPath$1 = "M640 266.666667v490.666666a53.393333 53.393333 0 0 1-53.333333 53.333334H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333334V266.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h533.333334a53.393333 53.393333 0 0 1 53.333333 53.333334z m357.053333-46.133334a52.746667 52.746667 0 0 0-53.613333 0.493334l-192 114a53.553333 53.553333 0 0 0-26.106667 45.853333v262.24a53.54 53.54 0 0 0 26.106667 45.853333l192 114a53.333333 53.333333 0 0 0 80.56-45.853333V266.88a52.746667 52.746667 0 0 0-26.946667-46.346667z";
	var countdownPath = "M449.59694 552.460488c-2.589471 0-5.210911-0.319688-7.800382-0.959063C313.729623 519.308862 224.280976 404.668816 224.280976 272.733659L224.280976 160.842927c0-17.646767 14.322014-31.96878 31.96878-31.96878s31.96878 14.322014 31.96878 31.96878l0 111.890732c0 102.587817 69.564066 191.716777 169.114849 216.748332 17.134267 4.315785 27.52512 21.674833 23.241303 38.778131C476.930248 542.805916 463.886985 552.460488 449.59694 552.460488L449.59694 552.460488zM574.40306 552.460488c-14.290045 0-27.301339-9.654572-30.977748-24.168398-4.315785-17.134267 6.074068-34.493315 23.208336-38.777132C666.217397 464.450435 735.781463 375.321475 735.781463 272.733659L735.781463 160.842927c0-17.646767 14.290045-31.96878 31.96878-31.96878s31.96878 14.322014 31.96878 31.96878l0 111.890732c0 131.935157-89.448648 246.575204-217.483614 278.767766C579.613971 552.1408 576.992531 552.460488 574.40306 552.460488zM767.750244 896.124878c-17.678736 0-31.96878-14.322014-31.96878-31.96878l0-95.906341c0-102.619785-69.564066-191.748745-169.114849-216.748332-17.134267-4.283817-27.52512-21.674833-23.241303-38.778131 4.347754-17.134267 21.930583-27.397245 38.777132-23.208336C710.270377 521.642583 799.719024 636.28263 799.719024 768.249756l0 95.906341C799.719024 881.802864 785.42898 896.124878 767.750244 896.124878zM256.249756 896.124878c-17.646767 0-31.96878-14.322014-31.96878-31.96878l0-95.906341c0-131.967126 89.448648-246.607173 217.516581-278.767766 17.167235-4.18791 34.461346 6.074068 38.777132 23.209335 4.315785 17.134267-6.074068 34.493315-23.241303 38.777132C357.750634 576.501011 288.218537 665.629971 288.218537 768.249756l0 95.906341C288.218537 881.802864 273.896523 896.124878 256.249756 896.124878zM863.656585 192.811707 160.343415 192.811707c-17.646767 0-31.96878-14.322014-31.96878-31.96878L128.374634 32.967805c0-17.646767 14.322014-31.96878 31.96878-31.96878l703.313171 0c17.678736 0 31.96878 14.322014 31.96878 31.96878l0 127.875122C895.625366 178.489694 881.335321 192.811707 863.656585 192.811707zM192.312195 128.874146l639.37561 0L831.687805 64.936585 192.312195 64.936585 192.312195 128.874146zM863.656585 1024 160.343415 1024c-17.646767 0-31.96878-14.322014-31.96878-31.96878L128.374634 864.156098c0-17.646767 14.322014-31.96878 31.96878-31.96878l703.313171 0c17.678736 0 31.96878 14.322014 31.96878 31.96878l0 127.875122C895.625366 1009.677986 881.335321 1024 863.656585 1024zM192.312195 960.062439l639.37561 0 0-63.937561L192.312195 896.124878 192.312195 960.062439z";
	var danmakuClosePath = "M217.8 319.89h-48c-35.9 0-65-29.1-65-65s29.1-65 65-65h48c35.9 0 65 29.1 65 65s-29.1 65-65 65zM714.8 319.89h-322c-35.9 0-65-29.1-65-65s29.1-65 65-65h322c35.9 0 65 29.1 65 65s-29.1 65-65 65zM403.8 579.89h-234c-35.9 0-65-29.1-65-65s29.1-65 65-65h234c35.9 0 65 29.1 65 65s-29.1 65-65 65zM252.8 838.89h-83c-35.9 0-65-29.1-65-65s29.1-65 65-65h83c35.9 0 65 29.1 65 65s-29.1 65-65 65zM425.8 838.89h-1c-35.9 0-65-29.1-65-65s29.1-65 65-65h1c35.9 0 65 29.1 65 65s-29.1 65-65 65zM717.73 398.22c-122.04 0-220.97 98.93-220.97 220.97 0 122.04 98.93 220.97 220.97 220.97 122.04 0 220.97-98.93 220.97-220.97 0.01-122.04-98.93-220.97-220.97-220.97zM822 554.48l-165.25 171.2c-5.9 6.12-13.77 9.19-21.65 9.19-7.52 0-15.05-2.8-20.89-8.44-11.95-11.54-12.29-30.58-0.75-42.54l165.25-171.2c11.54-11.96 30.58-12.29 42.54-0.75 11.95 11.55 12.29 30.59 0.75 42.54z";
	var danmakuOpenPath = "M221.58 319.89h-48c-35.9 0-65-29.1-65-65s29.1-65 65-65h48c35.9 0 65 29.1 65 65s-29.1 65-65 65zM718.58 319.89h-322c-35.9 0-65-29.1-65-65s29.1-65 65-65h322c35.9 0 65 29.1 65 65s-29.1 65-65 65zM407.58 579.89h-234c-35.9 0-65-29.1-65-65s29.1-65 65-65h234c35.9 0 65 29.1 65 65s-29.1 65-65 65zM256.58 838.89h-83c-35.9 0-65-29.1-65-65s29.1-65 65-65h83c35.9 0 65 29.1 65 65s-29.1 65-65 65zM429.58 838.89h-1c-35.9 0-65-29.1-65-65s29.1-65 65-65h1c35.9 0 65 29.1 65 65s-29.1 65-65 65zM713.96 396.72c-122.04 0-220.97 98.93-220.97 220.97s98.93 220.97 220.97 220.97 220.97-98.93 220.97-220.97S836 396.72 713.96 396.72zM837.9 561.91L689.88 715.26a30.078 30.078 0 0 1-21.38 9.19h-0.27c-7.97 0-15.63-3.17-21.27-8.81l-56.57-56.57c-11.75-11.75-11.75-30.79 0-42.54s30.79-11.75 42.54 0l34.92 34.91 126.76-131.32c11.54-11.96 30.58-12.29 42.54-0.75 11.95 11.54 12.29 30.58 0.75 42.54z";
	var playratePath = "M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z";
	var rightarrowPath = "M558.933333 490.666667L384 665.6l59.733333 59.733333 234.666667-234.666666L443.733333 256 384 315.733333l174.933333 174.933334z";
	var propotionPath$1 = "M117.297548 128.825806h762.483613v172.659613a28.771097 28.771097 0 0 1-57.542193 0V186.401032H174.839742v115.084387a28.771097 28.771097 0 0 1-57.542194 0V128.825806zM117.297548 888.567742h762.483613v-172.626581a28.771097 28.771097 0 1 0-57.542193 0v115.084387H174.839742v-115.084387a28.771097 28.771097 0 1 0-57.542194 0V888.567742z";
	var leftarrowPath = "M503.466667 490.666667l174.933333 174.933333-59.733333 59.733333L384 490.666667 618.666667 256l59.733333 59.733333-174.933333 174.933334z";
	var propotionPath$2 = "M392.588387 645.615484h-54.701419v-210.811871l-65.271742 20.248774V410.590968l114.093419-40.860903h5.879742v275.885419zM487.192774 618.727226c0-8.687484 2.906839-15.756387 8.687484-21.173678a31.545806 31.545806 0 0 1 22.131613-8.158967c8.984774 0 16.350968 2.741677 22.131613 8.158967a27.416774 27.416774 0 0 1 8.91871 21.173678c0 8.588387-2.906839 15.591226-8.687484 21.008516-5.813677 5.285161-13.245935 7.927742-22.329807 7.927742a31.545806 31.545806 0 0 1-22.131613-7.927742 27.449806 27.449806 0 0 1-8.720516-21.008516z m0-154.954323c0-8.720516 2.906839-15.756387 8.687484-21.206709a31.545806 31.545806 0 0 1 22.131613-8.125936c8.984774 0 16.350968 2.708645 22.131613 8.125936a27.416774 27.416774 0 0 1 8.91871 21.206709 27.416774 27.416774 0 0 1-8.687484 21.008516c-5.813677 5.285161-13.245935 7.927742-22.329807 7.927742a31.545806 31.545806 0 0 1-22.131613-7.927742 27.416774 27.416774 0 0 1-8.720516-21.008516zM724.463484 645.615484h-54.668387v-210.811871l-65.271742 20.248774V410.590968l114.093419-40.860903h5.84671v275.885419z";
	var flipPath = "M554.666667 810.666667v85.333333h-85.333334v-85.333333h85.333334zM170.666667 178.005333a42.666667 42.666667 0 0 1 34.986666 18.218667l203.904 291.328a42.666667 42.666667 0 0 1 0 48.896l-203.946666 291.328A42.666667 42.666667 0 0 1 128 803.328V220.672a42.666667 42.666667 0 0 1 42.666667-42.666667z m682.666666 0a42.666667 42.666667 0 0 1 42.368 37.717334l0.298667 4.949333v582.656a42.666667 42.666667 0 0 1-74.24 28.629333l-3.413333-4.181333-203.904-291.328a42.666667 42.666667 0 0 1-3.029334-43.861333l3.029334-5.034667 203.946666-291.328A42.666667 42.666667 0 0 1 853.333333 178.005333zM554.666667 640v85.333333h-85.333334v-85.333333h85.333334zM196.266667 319.104V716.8L335.957333 512 196.309333 319.104zM554.666667 469.333333v85.333334h-85.333334v-85.333334h85.333334z m0-170.666666v85.333333h-85.333334V298.666667h85.333334z m0-170.666667v85.333333h-85.333334V128h85.333334z";
	var confirmPath = "M456.899566 728.522382c-15.978926 15.977903-40.33873 18.47477-58.932204 7.492648-3.446495-2.039449-9.653871-9.990538-9.653871-9.990538L188.797435 526.509459c-18.938328-18.938328-18.938328-47.148833 0-66.084091 18.934235-18.938328 49.64263-16.442484 68.579935 2.495844l165.227112 165.225065 312.24449-312.24142c18.938328-18.938328 49.6457-21.435195 68.583005-2.495844 18.938328 18.940374 18.939351 47.149856 0 66.085114L456.909799 728.507032c0 0-0.005117 0.00921-0.010233 0.013303l0 0L456.899566 728.522382zM510.742868 64.090691c-246.752894 0-446.786743 200.032826-446.786743 446.786743 0 246.75187 200.033849 446.785719 446.786743 446.785719 246.752894 0 446.787766-200.034872 446.787766-446.785719C957.531658 264.125563 757.495762 64.090691 510.742868 64.090691L510.742868 64.090691 510.742868 64.090691 510.742868 64.090691z";
	var settingsConfirmPath = "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z";
	var subtitlePath$1 = "M803.6 150.498H220.4c-65.286 0-118.4 53.114-118.4 118.4v486.203c0 65.286 53.114 118.4 118.4 118.4h583.2c65.286 0 118.4-53.114 118.4-118.4V268.898c0-65.286-53.114-118.4-118.4-118.4zM862 755.102c0 32.202-26.198 58.4-58.4 58.4H220.4c-32.202 0-58.4-26.198-58.4-58.4V268.898c0-32.202 26.198-58.4 58.4-58.4h583.2c32.202 0 58.4 26.198 58.4 58.4v486.204z";
	var subtitlePath$2 = "M691.841 322.542H332.159c-16.568 0-30 13.432-30 30s13.432 30 30 30H482v288.917c0 16.568 13.432 30 30 30 16.569 0 30-13.432 30-30V382.542h149.841c16.568 0 30-13.432 30-30s-13.432-30-30-30z";
	var subtitleShowPath = "M128.512 214.016h768v81.92h-768zM128.512 718.336h768v81.92h-768zM128.512 466.432h486.4v81.92h-486.4zM896.512 507.392l-174.592-133.12v266.24l174.08-133.12";
	var switchOnPath = "M764 252H260C116.4 252 0 368.4 0 512s116.4 260 260 260h504c143.6 0 260-116.4 260-260S907.6 252 764 252zM260 736C136.3 736 36 635.7 36 512s100.3-224 224-224 224 100.3 224 224-100.3 224-224 224z";
	var switchOffPath = "M764 252H260C116.4 252 0 368.4 0 512s116.4 260 260 260h504c143.6 0 260-116.4 260-260S907.6 252 764 252z m0 484c-123.7 0-224-100.3-224-224s100.3-224 224-224 224 100.3 224 224-100.3 224-224 224z";
	var danmakuPath$1 = "M714.752 555.008h-112.64v-26.624h61.44c24.576 0 36.864-14.336 36.864-36.864v-147.456c0-34.816-20.48-38.912-32.768-38.912h-16.384c6.144-8.192 10.24-14.336 14.336-20.48 8.192-14.336 4.096-24.576-8.192-32.768-12.288-6.144-24.576-2.048-32.768 8.192-2.048 2.048-6.144 8.192-8.192 12.288-10.24 16.384-18.432 26.624-20.48 32.768H552.96c-8.192-14.336-18.432-30.72-28.672-47.104-8.192-10.24-20.48-12.288-32.768-6.144-12.288 8.192-16.384 20.48-8.192 32.768 4.096 4.096 8.192 12.288 14.336 22.528h-8.192c-12.288-2.048-20.48 2.048-26.624 6.144-6.144 6.144-8.192 16.384-8.192 28.672V491.52c0 12.288 2.048 22.528 8.192 28.672 6.144 6.144 16.384 8.192 26.624 8.192H552.96v28.672h-102.4c-4.096 0-8.192 0-12.288 6.144v-43.008c0-28.672-16.384-36.864-28.672-36.864h-51.2s-2.048-2.048 0-10.24l2.048-45.056c0-4.096 0-8.192 2.048-8.192H395.264c8.192 0 16.384-2.048 20.48-6.144 6.144-6.144 10.24-16.384 10.24-32.768V307.2c0-14.336-2.048-24.576-10.24-30.72-6.144-6.144-16.384-10.24-30.72-10.24h-65.536c-8.192 0-20.48 2.048-22.528 22.528 0 14.336 6.144 22.528 20.48 24.576h53.248c6.144 0 10.24 2.048 10.24 12.288v30.72c0 14.336-6.144 16.384-12.288 16.384h-22.528c-12.288 0-20.48 2.048-26.624 8.192-6.144 6.144-8.192 16.384-8.192 28.672l-2.048 86.016c0 10.24 2.048 20.48 8.192 24.576 6.144 6.144 14.336 8.192 24.576 8.192h40.96c4.096 0 6.144 0 6.144 2.048 2.048 2.048 4.096 4.096 2.048 14.336 0 2.048 0 8.192-2.048 16.384-2.048 43.008-6.144 59.392-8.192 65.536-6.144 12.288-26.624 6.144-43.008 0-18.432-6.144-26.624 2.048-32.768 10.24-6.144 14.336-2.048 26.624 12.288 32.768 47.104 16.384 79.872 14.336 100.352-8.192 6.144-6.144 14.336-20.48 18.432-67.584 4.096 6.144 10.24 8.192 14.336 8.192h102.4v69.632c0 6.144 2.048 20.48 24.576 20.48 14.336 0 22.528-8.192 22.528-20.48v-69.632h110.592c6.144 0 18.432-2.048 20.48-22.528 2.048-20.48-8.192-24.576-16.384-24.576z m-151.552-65.536h-53.248c-10.24 2.048-14.336-6.144-12.288-18.432v-34.816h65.536v53.248z m0-90.112h-65.536v-43.008c-2.048-10.24 2.048-14.336 12.288-12.288h53.248v55.296z m32.768-53.248h51.2c10.24-2.048 14.336 2.048 14.336 12.288v43.008h-65.536v-55.296z m0 141.312v-53.248h65.536V471.04c0 10.24-6.144 16.384-16.384 16.384h-49.152z";
	var danmakuPath$2 = "M724.992 145.408H299.008C200.704 145.408 122.88 223.232 122.88 321.536v288.768c0 96.256 77.824 176.128 176.128 176.128h106.496l83.968 83.968c6.144 6.144 14.336 8.192 22.528 8.192s16.384-2.048 22.528-8.192l83.968-83.968h106.496c96.256 0 176.128-77.824 176.128-176.128V321.536c0-98.304-77.824-176.128-176.128-176.128zM839.68 610.304c0 63.488-51.2 114.688-114.688 114.688h-118.784c-4.096 0-8.192 0-10.24 2.048-4.096 2.048-8.192 4.096-10.24 6.144L512 804.864l-71.68-71.68c-2.048-2.048-6.144-6.144-10.24-6.144-4.096-2.048-8.192-2.048-10.24-2.048h-118.784c-63.488 0-114.688-51.2-114.688-114.688V321.536c0-63.488 51.2-114.688 114.688-114.688h428.032c63.488 0 114.688 51.2 114.688 114.688v288.768z";

	var internalMetadata = {exports: {}};

	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
	var fails$d = fails$x;

	var arrayBufferNonExtensible = fails$d(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	var fails$c = fails$x;
	var isObject$7 = isObject$k;
	var classof$2 = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

	// eslint-disable-next-line es/no-object-isextensible -- safe
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$1 = fails$c(function () { $isExtensible(1); });

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	var objectIsExtensible = (FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject$7(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) == 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var fails$b = fails$x;

	var freezing = !fails$b(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var $$F = _export;
	var uncurryThis$a = functionUncurryThis;
	var hiddenKeys = hiddenKeys$6;
	var isObject$6 = isObject$k;
	var hasOwn$4 = hasOwnProperty_1;
	var defineProperty$2 = objectDefineProperty.f;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible = objectIsExtensible;
	var uid = uid$4;
	var FREEZING = freezing;

	var REQUIRED = false;
	var METADATA = uid('meta');
	var id = 0;

	var setMetadata = function (it) {
	  defineProperty$2(it, METADATA, { value: {
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

	    $$F({ target: 'Object', stat: true, forced: true }, {
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
	var call$d = functionCall;
	var anObject$5 = anObject$f;
	var tryToString$1 = tryToString$7;
	var isArrayIteratorMethod = isArrayIteratorMethod$2;
	var lengthOfArrayLike = lengthOfArrayLike$8;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var getIterator$1 = getIterator$3;
	var getIteratorMethod$1 = getIteratorMethod$a;
	var iteratorClose = iteratorClose$2;

	var $TypeError$6 = TypeError;

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
	    if (!iterFn) throw $TypeError$6(tryToString$1(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator$1(iterable, iterFn);
	  }

	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$d(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var isPrototypeOf$1 = objectIsPrototypeOf;

	var $TypeError$5 = TypeError;

	var anInstance$5 = function (it, Prototype) {
	  if (isPrototypeOf$1(Prototype, it)) return it;
	  throw $TypeError$5('Incorrect invocation');
	};

	var $$E = _export;
	var global$a = global$o;
	var InternalMetadataModule = internalMetadataExports;
	var fails$a = fails$x;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
	var iterate$k = iterate$l;
	var anInstance$4 = anInstance$5;
	var isCallable$8 = isCallable$p;
	var isObject$5 = isObject$k;
	var setToStringTag$3 = setToStringTag$9;
	var defineProperty$1 = objectDefineProperty.f;
	var forEach = arrayIteration.forEach;
	var DESCRIPTORS$8 = descriptors;
	var InternalStateModule$4 = internalState;

	var setInternalState$4 = InternalStateModule$4.set;
	var internalStateGetterFor$1 = InternalStateModule$4.getterFor;

	var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$a[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var exported = {};
	  var Constructor;

	  if (!DESCRIPTORS$8 || !isCallable$8(NativeConstructor)
	    || !(IS_WEAK || NativePrototype.forEach && !fails$a(function () { new NativeConstructor().entries().next(); }))
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

	    IS_WEAK || defineProperty$1(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }

	  setToStringTag$3(Constructor, CONSTRUCTOR_NAME, false, true);

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$E({ global: true, forced: true }, exported);

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
	var wellKnownSymbol$5 = wellKnownSymbol$q;
	var DESCRIPTORS$7 = descriptors;

	var SPECIES$2 = wellKnownSymbol$5('species');

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

	var path$9 = path$m;

	var map$6 = path$9.Map;

	var parent$t = map$6;


	var map$5 = parent$t;

	var parent$s = map$5;

	var map$4 = parent$s;

	// https://tc39.github.io/proposal-setmap-offrom/
	var bind$c = functionBindContext;
	var call$c = functionCall;
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
	      call$c(push$5, array, boundFunction(nextItem, n++));
	    });
	  } else {
	    iterate$i(source, push$5, { that: array });
	  }
	  return new this(array);
	};

	var $$D = _export;
	var from = collectionFrom;

	// `Map.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	$$D({ target: 'Map', stat: true, forced: true }, {
	  from: from
	});

	var arraySlice$3 = arraySlice$7;

	// https://tc39.github.io/proposal-setmap-offrom/
	var collectionOf = function of() {
	  return new this(arraySlice$3(arguments));
	};

	var $$C = _export;
	var of = collectionOf;

	// `Map.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	$$C({ target: 'Map', stat: true, forced: true }, {
	  of: of
	});

	var tryToString = tryToString$7;

	// Perform ? RequireInternalSlot(M, [[MapData]])
	var aMap$e = function (it) {
	  if (typeof it == 'object' && 'size' in it && 'has' in it && 'get' in it && 'set' in it && 'delete' in it && 'entries' in it) return it;
	  throw TypeError(tryToString(it) + ' is not a map');
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

	var $$B = _export;
	var aMap$d = aMap$e;
	var remove = mapHelpers.remove;

	// `Map.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$$B({ target: 'Map', proto: true, real: true, forced: true }, {
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

	var $$A = _export;
	var aMap$c = aMap$e;
	var MapHelpers$4 = mapHelpers;

	var get$1 = MapHelpers$4.get;
	var has$1 = MapHelpers$4.has;
	var set$6 = MapHelpers$4.set;

	// `Map.prototype.emplace` method
	// https://github.com/tc39/proposal-upsert
	$$A({ target: 'Map', proto: true, real: true, forced: true }, {
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

	var call$b = functionCall;

	var iterateSimple$1 = function (iterator, fn, $next) {
	  var next = $next || iterator.next;
	  var step, result;
	  while (!(step = call$b(next, iterator)).done) {
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

	var $$z = _export;
	var bind$b = functionBindContext;
	var aMap$b = aMap$e;
	var iterate$h = mapIterate;

	// `Map.prototype.every` method
	// https://github.com/tc39/proposal-collection-methods
	$$z({ target: 'Map', proto: true, real: true, forced: true }, {
	  every: function every(callbackfn /* , thisArg */) {
	    var map = aMap$b(this);
	    var boundFunction = bind$b(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate$h(map, function (value, key) {
	      if (!boundFunction(value, key, map)) return false;
	    }, true) !== false;
	  }
	});

	var $$y = _export;
	var bind$a = functionBindContext;
	var aMap$a = aMap$e;
	var MapHelpers$3 = mapHelpers;
	var iterate$g = mapIterate;

	var Map$4 = MapHelpers$3.Map;
	var set$5 = MapHelpers$3.set;

	// `Map.prototype.filter` method
	// https://github.com/tc39/proposal-collection-methods
	$$y({ target: 'Map', proto: true, real: true, forced: true }, {
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

	var $$x = _export;
	var bind$9 = functionBindContext;
	var aMap$9 = aMap$e;
	var iterate$f = mapIterate;

	// `Map.prototype.find` method
	// https://github.com/tc39/proposal-collection-methods
	$$x({ target: 'Map', proto: true, real: true, forced: true }, {
	  find: function find(callbackfn /* , thisArg */) {
	    var map = aMap$9(this);
	    var boundFunction = bind$9(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate$f(map, function (value, key) {
	      if (boundFunction(value, key, map)) return { value: value };
	    }, true);
	    return result && result.value;
	  }
	});

	var $$w = _export;
	var bind$8 = functionBindContext;
	var aMap$8 = aMap$e;
	var iterate$e = mapIterate;

	// `Map.prototype.findKey` method
	// https://github.com/tc39/proposal-collection-methods
	$$w({ target: 'Map', proto: true, real: true, forced: true }, {
	  findKey: function findKey(callbackfn /* , thisArg */) {
	    var map = aMap$8(this);
	    var boundFunction = bind$8(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate$e(map, function (value, key) {
	      if (boundFunction(value, key, map)) return { key: key };
	    }, true);
	    return result && result.key;
	  }
	});

	var $$v = _export;
	var call$a = functionCall;
	var uncurryThis$9 = functionUncurryThis;
	var isCallable$7 = isCallable$p;
	var aCallable$a = aCallable$h;
	var iterate$d = iterate$l;
	var Map$3 = mapHelpers.Map;

	var push$4 = uncurryThis$9([].push);

	// `Map.groupBy` method
	// https://github.com/tc39/proposal-collection-methods
	$$v({ target: 'Map', stat: true, forced: true }, {
	  groupBy: function groupBy(iterable, keyDerivative) {
	    var C = isCallable$7(this) ? this : Map$3;
	    var newMap = new C();
	    aCallable$a(keyDerivative);
	    var has = aCallable$a(newMap.has);
	    var get = aCallable$a(newMap.get);
	    var set = aCallable$a(newMap.set);
	    iterate$d(iterable, function (element) {
	      var derivedKey = keyDerivative(element);
	      if (!call$a(has, newMap, derivedKey)) call$a(set, newMap, derivedKey, [element]);
	      else push$4(call$a(get, newMap, derivedKey), element);
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

	var $$u = _export;
	var sameValueZero = sameValueZero$1;
	var aMap$7 = aMap$e;
	var iterate$c = mapIterate;

	// `Map.prototype.includes` method
	// https://github.com/tc39/proposal-collection-methods
	$$u({ target: 'Map', proto: true, real: true, forced: true }, {
	  includes: function includes(searchElement) {
	    return iterate$c(aMap$7(this), function (value) {
	      if (sameValueZero(value, searchElement)) return true;
	    }, true) === true;
	  }
	});

	var $$t = _export;
	var call$9 = functionCall;
	var iterate$b = iterate$l;
	var isCallable$6 = isCallable$p;
	var aCallable$9 = aCallable$h;
	var Map$2 = mapHelpers.Map;

	// `Map.keyBy` method
	// https://github.com/tc39/proposal-collection-methods
	$$t({ target: 'Map', stat: true, forced: true }, {
	  keyBy: function keyBy(iterable, keyDerivative) {
	    var C = isCallable$6(this) ? this : Map$2;
	    var newMap = new C();
	    aCallable$9(keyDerivative);
	    var setter = aCallable$9(newMap.set);
	    iterate$b(iterable, function (element) {
	      call$9(setter, newMap, keyDerivative(element), element);
	    });
	    return newMap;
	  }
	});

	var $$s = _export;
	var aMap$6 = aMap$e;
	var iterate$a = mapIterate;

	// `Map.prototype.keyOf` method
	// https://github.com/tc39/proposal-collection-methods
	$$s({ target: 'Map', proto: true, real: true, forced: true }, {
	  keyOf: function keyOf(searchElement) {
	    var result = iterate$a(aMap$6(this), function (value, key) {
	      if (value === searchElement) return { key: key };
	    }, true);
	    return result && result.key;
	  }
	});

	var $$r = _export;
	var bind$7 = functionBindContext;
	var aMap$5 = aMap$e;
	var MapHelpers$2 = mapHelpers;
	var iterate$9 = mapIterate;

	var Map$1 = MapHelpers$2.Map;
	var set$4 = MapHelpers$2.set;

	// `Map.prototype.mapKeys` method
	// https://github.com/tc39/proposal-collection-methods
	$$r({ target: 'Map', proto: true, real: true, forced: true }, {
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

	var $$q = _export;
	var bind$6 = functionBindContext;
	var aMap$4 = aMap$e;
	var MapHelpers$1 = mapHelpers;
	var iterate$8 = mapIterate;

	var Map = MapHelpers$1.Map;
	var set$3 = MapHelpers$1.set;

	// `Map.prototype.mapValues` method
	// https://github.com/tc39/proposal-collection-methods
	$$q({ target: 'Map', proto: true, real: true, forced: true }, {
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

	var $$p = _export;
	var aMap$3 = aMap$e;
	var iterate$7 = iterate$l;
	var set$2 = mapHelpers.set;

	// `Map.prototype.merge` method
	// https://github.com/tc39/proposal-collection-methods
	$$p({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
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

	var $$o = _export;
	var aCallable$8 = aCallable$h;
	var aMap$2 = aMap$e;
	var iterate$6 = mapIterate;

	var $TypeError$4 = TypeError;

	// `Map.prototype.reduce` method
	// https://github.com/tc39/proposal-collection-methods
	$$o({ target: 'Map', proto: true, real: true, forced: true }, {
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
	    if (noInitial) throw $TypeError$4('Reduce of empty map with no initial value');
	    return accumulator;
	  }
	});

	var $$n = _export;
	var bind$5 = functionBindContext;
	var aMap$1 = aMap$e;
	var iterate$5 = mapIterate;

	// `Map.prototype.some` method
	// https://github.com/tc39/proposal-collection-methods
	$$n({ target: 'Map', proto: true, real: true, forced: true }, {
	  some: function some(callbackfn /* , thisArg */) {
	    var map = aMap$1(this);
	    var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate$5(map, function (value, key) {
	      if (boundFunction(value, key, map)) return true;
	    }, true) === true;
	  }
	});

	var $$m = _export;
	var aCallable$7 = aCallable$h;
	var aMap = aMap$e;
	var MapHelpers = mapHelpers;

	var $TypeError$3 = TypeError;
	var get = MapHelpers.get;
	var has = MapHelpers.has;
	var set$1 = MapHelpers.set;

	// `Map.prototype.update` method
	// https://github.com/tc39/proposal-collection-methods
	$$m({ target: 'Map', proto: true, real: true, forced: true }, {
	  update: function update(key, callback /* , thunk */) {
	    var map = aMap(this);
	    var length = arguments.length;
	    aCallable$7(callback);
	    var isPresentInMap = has(map, key);
	    if (!isPresentInMap && length < 3) {
	      throw $TypeError$3('Updating absent value');
	    }
	    var value = isPresentInMap ? get(map, key) : aCallable$7(length > 2 ? arguments[2] : undefined)(key, map);
	    set$1(map, key, callback(value, key, map));
	    return map;
	  }
	});

	var call$8 = functionCall;
	var aCallable$6 = aCallable$h;
	var isCallable$5 = isCallable$p;
	var anObject$4 = anObject$f;

	var $TypeError$2 = TypeError;

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
	    throw $TypeError$2('At least one callback required');
	  }
	  if (call$8(has, map, key)) {
	    value = call$8(get, map, key);
	    if (isCallable$5(updateFn)) {
	      value = updateFn(value);
	      call$8(set, map, key, value);
	    }
	  } else if (isCallable$5(insertFn)) {
	    value = insertFn();
	    call$8(set, map, key, value);
	  } return value;
	};

	// TODO: remove from `core-js@4`
	var $$l = _export;
	var upsert$1 = mapUpsert;

	// `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
	// https://github.com/thumbsupep/proposal-upsert
	$$l({ target: 'Map', proto: true, real: true, forced: true }, {
	  upsert: upsert$1
	});

	// TODO: remove from `core-js@4`
	var $$k = _export;
	var upsert = mapUpsert;

	// `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
	// https://github.com/thumbsupep/proposal-upsert
	$$k({ target: 'Map', proto: true, real: true, name: 'upsert', forced: true }, {
	  updateOrInsert: upsert
	});

	var parent$r = map$4;


















	// TODO: remove from `core-js@4`

	// TODO: remove from `core-js@4`


	var map$3 = parent$r;

	var map$2 = map$3;

	var map$1 = map$2;

	var _Map = /*@__PURE__*/getDefaultExportFromCjs(map$1);

	// COMPONENT_STORE存储目前还展示在视图上的组件，也就是没用卸载或者删除的组件
	var COMPONENT_STORE = new _Map();

	// ONCE_COMPONENT_STORE存储的是只要曾经在视图上展示过哪怕已经卸载，都会一直保留在此处，除非通过delete进行彻底删除
	var ONCE_COMPONENT_STORE = new _Map();

	// 存储需要隐藏的元素，但不进行卸载
	var HIDEEN_COMPONENT_STORE = new _Map();

	// 内置的原子组件
	var BuiltInControllerComponent = ['DurationShow', 'FullPage', 'FullScreen', 'PicInPic', 'PlayButton', 'Playrate', 'ScreenShot', 'SubSetting', 'VideoShot', 'Toast'];

	// 存储组件，包括用户自定义组件和内置组件
	function storeControlComponent(item) {
	  COMPONENT_STORE.set(item.id, item);
	  ONCE_COMPONENT_STORE.set(item.id, item);
	}

	function _createSuper$s(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$s(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$s() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Options = /*#__PURE__*/function (_Component) {
	  _inherits(Options, _Component);
	  var _super = _createSuper$s(Options);
	  function Options(player, container, hideWidth, hideHeight, desc, props, children) {
	    var _this;
	    _classCallCheck(this, Options);
	    _this = _super.call(this, container, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'Options');
	    _defineProperty(_assertThisInitialized(_this), "bottom", 48);
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
	      this.hideBox = $$M('div');
	      addClass(this.hideBox, ['video-set', 'video-set-hidden']);
	      if (this.hideHeight && this.hideHeight > 0) {
	        this.hideBox.style.height = this.hideHeight + 'px';
	      }
	      if (this.hideWidth && this.hideWidth > 0) {
	        this.hideBox.style.width = this.hideWidth + 'px';
	      }
	      this.el.appendChild(this.hideBox);
	      this.iconBox = $$M('div');
	      addClass(this.iconBox, ['video-icon']);
	      this.el.appendChild(this.iconBox);
	    }
	  }, {
	    key: "initBaseEvent",
	    value: function initBaseEvent() {
	      if (this.player.env === 'PC') {
	        this.initBasePCEvent();
	      } else {
	        this.initBaseMobileEvent();
	      }
	    }
	  }, {
	    key: "initBasePCEvent",
	    value: function initBasePCEvent() {
	      var _this2 = this;
	      this.el.onmouseenter = function (e) {
	        var ctx = _this2;
	        removeClass(_this2.hideBox, ['video-set-hidden']);
	        document.body.onmousemove = ctx.handleMouseMove.bind(_this2);
	        _this2.player.emit('oneControllerHover', _this2);
	      };

	      // 让当前控件显示，让其他的隐藏
	      this.player.on('oneControllerHover', function (controller) {
	        // console.log(this, controller, this === controller)
	        if (_this2 !== controller) {
	          if (!includeClass(_this2.hideBox, 'video-set-hidden')) {
	            addClass(_this2.hideBox, ['video-set-hidden']);
	          }
	        }
	      });
	      this.player.on(EVENT.VIDEO_CLICK, function () {
	        addClass(_this2.hideBox, ['video-set-hidden']);
	      });
	    }
	  }, {
	    key: "initBaseMobileEvent",
	    value: function initBaseMobileEvent() {}
	  }, {
	    key: "handleMouseMove",
	    value: function handleMouseMove(e) {
	      var pX = e.clientX,
	        pY = e.clientY;
	      var ctx = this;
	      if (!checkIsMouseInRange(ctx.el, ctx.hideBox, this.bottom, pX, pY)) {
	        addClass(this.hideBox, ['video-set-hidden']);
	        document.body.onmousemove = null;
	      }
	    }
	  }, {
	    key: "replaceIcon",
	    value: function replaceIcon(icon) {
	      this.iconBox.removeChild(this.icon);
	      this.iconBox.appendChild(icon);
	      this.icon = icon;
	    }
	  }]);
	  return Options;
	}(Component);

	var main_min = {};

	(function (exports) {
	Object.defineProperty(exports,"__esModule",{value:!0}),exports.toggleFull=exports.isFull=exports.exitFull=exports.beFull=void 0;var e=document.documentElement,l=e.querySelector("head"),n=document.createElement("style"),t="requestFullscreen",u="exitFullscreen",r="fullscreenElement";if("webkitRequestFullScreen"in e)t="webkitRequestFullScreen",u="webkitExitFullscreen",r="webkitFullscreenElement";else if("msRequestFullscreen"in e)t="msRequestFullscreen",u="msExitFullscreen",r="msFullscreenElement";else if("mozRequestFullScreen"in e)t="mozRequestFullScreen",u="mozCancelFullScreen",r="mozFullScreenElement";else if(!("requestFullscreen"in e))throw "当前浏览器不支持Fullscreen API !";function c(l){return l instanceof HTMLElement?l:e}function o(e,u){return u&&(null===l&&(l=document.createElement("head")),n.innerHTML=":fullscreen{background-color:"+u+";}",l.appendChild(n)),c(e)[t]()}function i(){return e.contains(n)&&(null==l||l.removeChild(n)),document[u]()}function F(e){return c(e)===document[r]}function m(e,l){return F(e)?(i(),!1):(o(e,l),!0)}exports.beFull=o,exports.exitFull=i,exports.isFull=F,exports.toggleFull=m; 
	} (main_min));

	let fn1 = Document.prototype.createElement;
	// 此函数为重载实现
	function createElement$1(tagName, options) {
	    let dom = fn1.call(window.document, tagName, options);
	    let prototype = dom.__proto__;
	    let proto = Object.create(prototype);
	    proto.addEventListener = addEventListener$1;
	    Object.setPrototypeOf(dom, proto);
	    Object.setPrototypeOf(proto, prototype);
	    return dom;
	}

	let fn3$1 = Document.prototype.getElementsByClassName;
	function getElementsByClassName(classNames) {
	    let doms = fn3$1.call(window.document, classNames);
	    doms.forEach(dom => {
	        if (dom.__proto__ instanceof HTMLElement) {
	            let proto = Object.create(dom.__proto__);
	            proto.addEventListener = addEventListener$1;
	            Object.setPrototypeOf(dom, proto);
	        }
	    });
	    return doms;
	}

	let fn2 = Document.prototype.getElementById;
	function getElementById(elementId) {
	    let dom = fn2.call(window.document, elementId) || null;
	    if (dom === null)
	        return null;
	    if (dom.__proto__ instanceof HTMLElement) {
	        let proto = Object.create(dom.__proto__);
	        proto.addEventListener = addEventListener$1;
	        Object.setPrototypeOf(dom, proto);
	    }
	    return dom;
	}

	let fn3 = Document.prototype.getElementsByTagName;
	function getElementsByTagName(qualifiedName) {
	    let doms = fn3.call(window.document, qualifiedName);
	    doms.forEach(dom => {
	        if (dom.__proto__ instanceof HTMLElement) {
	            let proto = Object.create(dom.__proto__);
	            proto.addEventListener = addEventListener$1;
	            Object.setPrototypeOf(dom, proto);
	        }
	    });
	    return doms;
	}

	function computeDistance(x1, y1, x2, y2) {
	    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	}
	function computeVectorLen(v) {
	    return Math.sqrt(v.x * v.x + v.y * v.y);
	}
	// 计算两个向量之间的角度
	function computeAngle$1(v1, v2) {
	    let lv1 = computeVectorLen(v1);
	    let lv2 = computeVectorLen(v2);
	    let angle = 0;
	    let l = (lv1 * lv2);
	    if (l) {
	        let cosVal = (v1.x * v2.x + v1.y * v2.y) / l;
	        angle = Math.acos(Math.min(cosVal, 1)); //得到两个向量的夹角
	        angle = v1.x * v2.y - v2.x * v1.y > 0 ? -angle : angle; //得到夹角的方向（顺时针逆时针）
	        return angle * 180 / Math.PI;
	    }
	    return 0;
	}
	function isListenerConfig(value) {
	    return typeof value === "object" && value.stopPropagation !== null;
	}

	function singleOrDoubleOrLongTap(ctx, event, listener, options) {
	    let tapTimer = null;
	    let longTapTimer = null;
	    let lastTapEndTime = -1;
	    let isMove = false;
	    let startTime = 0;
	    let isDoubleTap = false;
	    let betweenTime = 0;
	    let ifStop = false;
	    if (isListenerConfig(options)) {
	        ifStop = options.stopPropagation;
	    }
	    ctx.addEventListener("touchstart", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        startTime = Date.now();
	        if (event === "longTap") {
	            longTapTimer = window.setTimeout(() => {
	                // ToDo,触发长按事件
	            }, 800);
	        }
	        // 如果lastTapEndTime不小于0的话则表明上一次也发生过点击事件且上一次的单击事件的监听器还未触发，说明两次点击间隔很短，
	        // 但是为了区别是双击还是单击，在第二次点击发生时判断开始点击的时间和上一次点击结束的时间，
	        // 如果间隔很短，说明是双击，此时不应该触发单击事件;如果距离上一次点击间隔很长，表明此次点击是单击
	        if (lastTapEndTime > 0 && startTime - lastTapEndTime < 150) {
	            window.clearTimeout(tapTimer);
	            betweenTime = startTime - lastTapEndTime;
	            tapTimer = null;
	            lastTapEndTime = -1;
	            isDoubleTap = true;
	        }
	    });
	    ctx.addEventListener("touchmove", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        isMove = true;
	        e.preventDefault();
	        if (longTapTimer) {
	            window.clearTimeout(longTapTimer);
	            longTapTimer = null;
	        }
	    });
	    ctx.addEventListener("touchend", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        let interval = Date.now() - startTime;
	        if (longTapTimer) {
	            window.clearTimeout(longTapTimer);
	            longTapTimer = null;
	        }
	        if (interval < 150 && !isMove) {
	            if (event === "singleTap" && isDoubleTap === false) {
	                tapTimer = window.setTimeout(() => {
	                    let ev = Object.assign(Object.assign({}, e), { interval, e });
	                    if (listener instanceof Function) {
	                        listener(ev);
	                    }
	                    else {
	                        listener.handleEvent(ev);
	                    }
	                }, 150);
	            }
	            else if (event === "doubleTap" && isDoubleTap === true) {
	                tapTimer = window.setTimeout(() => {
	                    let ev = Object.assign(Object.assign({}, e), { interval: betweenTime, e });
	                    if (listener instanceof Function) {
	                        listener(ev);
	                    }
	                    else {
	                        listener.handleEvent(ev);
	                    }
	                });
	            }
	            lastTapEndTime = Date.now();
	        }
	        isMove = false;
	        isDoubleTap = false;
	    });
	}

	function moveOrSwipe(ctx, event, listener, options) {
	    let isMove = false;
	    let pos = {
	        x: 0,
	        y: 0,
	    };
	    let dx = 0, dy = 0;
	    let ifStop = false;
	    if (isListenerConfig(options)) {
	        ifStop = options.stopPropagation;
	    }
	    ctx.addEventListener("touchstart", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        pos.x = e.touches[0].clientX;
	        pos.y = e.touches[0].clientY;
	    });
	    ctx.addEventListener("touchmove", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        isMove = true;
	        e.preventDefault();
	        let x = e.touches[0].clientX;
	        let y = e.touches[0].clientY;
	        dx = x - pos.x;
	        dy = y - pos.y;
	        if ((event === "moveLeft" && dx < 0) ||
	            (event === "moveRight" && dx > 0) ||
	            (event === "moveTop" && dy < 0) ||
	            (event === "moveDown" && dy > 0) ||
	            event === "move") {
	            let ev = Object.assign(Object.assign({}, e), { startPos: pos, deltaX: dx, deltaY: dy, e });
	            if (listener instanceof Function) {
	                listener(ev);
	            }
	            else {
	                listener.handleEvent(ev);
	            }
	        }
	    });
	    ctx.addEventListener("touchend", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        let end = {
	            x: pos.x + dx,
	            y: pos.y + dy,
	        };
	        if (isMove &&
	            ((event === "swipeLeft" && dx < 0) ||
	                (event === "swipeRight" && dx > 0) ||
	                (event === "swipeTop" && dy < 0) ||
	                (event === "swipeDown" && dy > 0) ||
	                event === "swipe")) {
	            let ev = Object.assign(Object.assign({}, e), { startPos: pos, endPos: end, e });
	            if (listener instanceof Function) {
	                listener(ev);
	            }
	            else {
	                listener.handleEvent(ev);
	            }
	        }
	        isMove = false;
	    });
	}

	function fastSlide(ctx, event, listener, options) {
	    let lastTime = 0;
	    let startTime = 0;
	    // 初始的x,y坐标
	    let x = 0, y = 0;
	    let lastPos = { x: 0, y: 0 };
	    let startPos = { x: 0, y: 0 };
	    let speed = [];
	    let ifStop = false;
	    if (isListenerConfig(options)) {
	        ifStop = options.stopPropagation;
	    }
	    ctx.addEventListener("touchstart", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        lastTime = Date.now();
	        startTime = Date.now();
	        startPos = {
	            x: e.touches[0].clientX,
	            y: e.touches[0].clientY,
	        };
	        lastPos = {
	            x: e.touches[0].clientX,
	            y: e.touches[0].clientY,
	        };
	        (x = lastPos.x), (y = lastPos.y);
	    });
	    ctx.addEventListener("touchmove", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        e.preventDefault();
	        let now = Date.now();
	        if (now - lastTime >= 10) {
	            let distance = computeDistance(e.touches[0].clientX, lastPos.x, e.touches[0].clientY, lastPos.y);
	            speed.push(distance / (now - lastTime));
	            lastPos = {
	                x: e.touches[0].clientX,
	                y: e.touches[0].clientY,
	            };
	            lastTime = now;
	        }
	    });
	    ctx.addEventListener("touchend", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1)
	            return;
	        let sum = 0;
	        let index = 1;
	        lastTime = Date.now();
	        console.log(speed);
	        for (let i = speed.length - 1; i >= 0; i--) {
	            if (speed[i] > speed[i - 1]) {
	                sum += speed[i] - speed[i - 1];
	                index++;
	            }
	            else
	                break;
	        }
	        let dx = lastPos.x - x;
	        let dy = lastPos.y - y;
	        if ((sum / index) * 100 >= 10 && speed[speed.length - 1] >= 20) {
	            if ((dx <= 0 && event === "fastSlideLeft") ||
	                (dx >= 0 && event === "fastSlideRight") ||
	                (dy >= 0 && event === "fastSlideDown") ||
	                (dy <= 0 && event === "fastSlideTop") ||
	                event === "fastSlide") {
	                let ev = Object.assign(Object.assign({}, e), { startPos: startPos, endPos: lastPos, interval: lastTime - startTime, lastSpeed: speed[speed.length - 1], e });
	                if (listener instanceof Function) {
	                    listener(ev);
	                }
	                else {
	                    listener.handleEvent(ev);
	                }
	            }
	        }
	        speed = [];
	        lastPos = { x: 0, y: 0 };
	        startPos = { x: 0, y: 0 };
	        lastTime = 0;
	        startTime = 0;
	    });
	}

	function pintchOrRotate(ctx, event, listener, options) {
	    let prevV = { x: 0, y: 0 };
	    let v1, v2;
	    let scale = 1;
	    let ifStop = false;
	    if (isListenerConfig(options)) {
	        ifStop = options.stopPropagation;
	    }
	    ctx.addEventListener("touchstart", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        if (e.touches.length > 1) {
	            v1 = e.touches[0];
	            v2 = e.touches[1];
	            prevV = {
	                x: v2.clientX - v1.clientX,
	                y: v2.clientY - v1.clientY,
	            };
	        }
	    });
	    ctx.addEventListener("touchmove", (e) => {
	        if (ifStop)
	            e.stopPropagation();
	        e.preventDefault();
	        if (e.touches.length > 1) {
	            let v1 = e.touches[0];
	            let v2 = e.touches[1];
	            let V = {
	                x: v2.clientX - v1.clientX,
	                y: v2.clientY - v1.clientY,
	            };
	            //利用前后的向量模比计算放大或缩小的倍数
	            scale = computeVectorLen(V) / computeVectorLen(prevV);
	            if (event === "pintch") {
	                let ev = Object.assign(Object.assign({}, e), { scale, e });
	                if (listener instanceof Function) {
	                    listener(ev);
	                }
	                else {
	                    listener.handleEvent(ev);
	                }
	            }
	            // 计算出拖动时旋转的角度
	            let angle = computeAngle$1(prevV, V);
	            if (event === "rotate") {
	                let ev = Object.assign(Object.assign({}, e), { angle, e });
	                if (listener instanceof Function) {
	                    listener(ev);
	                }
	                else {
	                    listener.handleEvent(ev);
	                }
	            }
	        }
	    });
	    ctx.addEventListener("touchend", (e) => {
	        //ToDo
	        if (ifStop)
	            e.stopPropagation();
	        // 只要最初的两个手指离开一个就行
	        if ([...e.touches].indexOf(v1) === -1 ||
	            [...e.touches].indexOf(v2) === -1) {
	            if (event === "pintchOver") {
	                let ev = Object.assign(Object.assign({}, e), { scale, e });
	                if (listener instanceof Function) {
	                    listener(ev);
	                }
	                else {
	                    listener.handleEvent(ev);
	                }
	            }
	        }
	        prevV = { x: 0, y: 0 };
	    });
	}

	function wrap(dom) {
	    if (dom.__proto__.addEventListener === addEventListener$1) {
	        return dom;
	    }
	    let prototype = dom.__proto__;
	    let proto = Object.create(prototype);
	    proto.addEventListener = addEventListener$1;
	    Object.setPrototypeOf(dom, proto);
	    Object.setPrototypeOf(proto, prototype);
	    return dom;
	}

	const fn = HTMLElement.prototype.addEventListener;
	function addEventListener$1(event, listener, options) {
	    let ctx = this;
	    switch (event) {
	        case "singleTap":
	        case "doubleTap":
	        case "longTap":
	            singleOrDoubleOrLongTap(ctx, event, listener, options);
	            break;
	        case "swipe":
	        case "swipeLeft":
	        case "swipeRight":
	        case "swipeTop":
	        case "swipeDown":
	        case "move":
	        case "moveLeft":
	        case "moveRight":
	        case "moveTop":
	        case "moveDown":
	            moveOrSwipe(ctx, event, listener, options);
	            break;
	        case "fastSlide":
	        case "fastSlideLeft":
	        case "fastSlideRight":
	        case "fastSlideTop":
	        case "fastSlideDown":
	            fastSlide(ctx, event, listener, options);
	            break;
	        case "pintch":
	        case "pintchOver":
	        case "rotate":
	            pintchOrRotate(ctx, event, listener, options);
	            break;
	        default:
	            if (ctx === document$3.body) {
	                fn.call(window.document.body, event, listener, options);
	            }
	            else {
	                fn.call(ctx, event, listener, options);
	            }
	    }
	}
	let body = Object.create(window.document.body);
	body.addEventListener = addEventListener$1;
	let document$3 = { body: body };
	document$3.createElement = createElement$1;
	document$3.getElementById = getElementById;
	document$3.getElementsByClassName = getElementsByClassName;
	document$3.getElementsByTagName = getElementsByTagName;
	Object.setPrototypeOf(document$3, Document.prototype);

	function _createSuper$r(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$r(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$r() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var FullScreen = /*#__PURE__*/function (_Options) {
	  _inherits(FullScreen, _Options);
	  var _super = _createSuper$r(FullScreen);
	  function FullScreen(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, FullScreen);
	    _this = _super.call(this, player, container, 0, 0, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'FullScreen');
	    _defineProperty(_assertThisInitialized(_this), "enterFullScreen", false);
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
	      this.icon = createSvg(fullscreenPath, '0 0 1024 1024');
	      this.iconBox.appendChild(this.icon);
	      this.hideBox.innerText = '全屏';
	      this.hideBox.style.fontSize = '13px';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      this.requestFullScreen = this.requestFullScreen.bind(this);
	      if (this.player.env === 'PC') {
	        this.el.onclick = this.requestFullScreen;
	      } else {
	        wrap(this.el).addEventListener('singleTap', this.requestFullScreen, {
	          stopPropagation: true
	        });
	      }
	    }
	  }, {
	    key: "requestFullScreen",
	    value: function requestFullScreen(e) {
	      if (e instanceof Event) {
	        e.stopPropagation();
	      }
	      if (!main_min.isFull(this.player.container)) {
	        // 调用浏览器提供的全屏API接口去请求元素的全屏，原生全屏分为  竖屏全屏 + 横屏全屏
	        main_min.beFull(this.player.container);
	        this.iconBox.removeChild(this.icon);
	        this.icon = createSvg(fullscreenExitPath, '0 0 1024 1024');
	        this.iconBox.appendChild(this.icon);
	        // this.player.container.addEventListener('fullscreenchange', (e) => {
	        //   console.log('11111')
	        //   this.player.emit(EVENT.ENTER_FULLSCREEN)
	        // })
	        this.player.emit(EVENT.ENTER_FULLSCREEN);
	      } else if (main_min.isFull(this.player.container)) {
	        main_min.exitFull();
	        this.iconBox.removeChild(this.icon);
	        this.icon = createSvg(fullscreenPath, '0 0 1024 1024');
	        this.iconBox.appendChild(this.icon);
	        // this.player.container.addEventListener('fullscreenchange', (e) => {
	        //   console.log('22222')
	        //   this.player.emit(EVENT.LEAVE_FULLSCREEN)
	        // })
	        this.player.emit(EVENT.LEAVE_FULLSCREEN);
	      }
	    }
	  }]);
	  return FullScreen;
	}(Options);

	function _createSuper$q(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$q(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$q() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var PlayButton = /*#__PURE__*/function (_Component) {
	  _inherits(PlayButton, _Component);
	  var _super = _createSuper$q(PlayButton);
	  // el: div.video-start-pause.video-controller

	  function PlayButton(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, PlayButton);
	    _this = _super.call(this, container, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'PlayButton');
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
	      this.iconBox = $$M('div.video-icon');
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
	      this.player.on(EVENT.PLAY, function (e) {
	        _this2.iconBox.removeChild(_this2.button);
	        _this2.button = _this2.pauseIcon;
	        _this2.iconBox.appendChild(_this2.button);
	      });
	      this.player.on(EVENT.PAUSE, function (e) {
	        _this2.iconBox.removeChild(_this2.button);
	        _this2.button = _this2.playIcon;
	        _this2.iconBox.appendChild(_this2.button);
	      });
	      this.onClick = this.onClick.bind(this);
	      if (this.player.env === 'Mobile') {
	        this.initMobileEvent();
	      } else {
	        this.initPCEvent();
	      }
	    }
	  }, {
	    key: "initPCEvent",
	    value: function initPCEvent() {
	      this.el.onclick = this.onClick;
	    }
	  }, {
	    key: "initMobileEvent",
	    value: function initMobileEvent() {
	      wrap(this.el).addEventListener('singleTap', this.onClick, {
	        stopPropagation: true
	      });
	    }
	  }, {
	    key: "onClick",
	    value: function onClick(e) {
	      if (e instanceof Event) {
	        e.stopPropagation();
	      }
	      if (this.player.video.paused) {
	        this.player.video.play();
	      } else {
	        this.player.video.pause();
	      }
	      e.stopPropagation && e.stopPropagation();
	    }
	  }, {
	    key: "resetEvent",
	    value: function resetEvent() {
	      this.onClick = this.onClick.bind(this);
	      this.el.onclick = null;
	      this.el.onclick = this.onClick;
	    }
	  }]);
	  return PlayButton;
	}(Component);

	// a string of all valid unicode whitespaces
	var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$8 = functionUncurryThis;
	var requireObjectCoercible = requireObjectCoercible$5;
	var toString$5 = toString$c;
	var whitespaces$2 = whitespaces$3;

	var replace$4 = uncurryThis$8(''.replace);
	var ltrim = RegExp('^[' + whitespaces$2 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod = function (TYPE) {
	  return function ($this) {
	    var string = toString$5(requireObjectCoercible($this));
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

	var global$9 = global$o;
	var fails$9 = fails$x;
	var uncurryThis$7 = functionUncurryThis;
	var toString$4 = toString$c;
	var trim$1 = stringTrim.trim;
	var whitespaces$1 = whitespaces$3;

	var $parseInt$1 = global$9.parseInt;
	var Symbol$2 = global$9.Symbol;
	var ITERATOR$3 = Symbol$2 && Symbol$2.iterator;
	var hex = /^[+-]?0x/i;
	var exec$2 = uncurryThis$7(hex.exec);
	var FORCED$2 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22
	  // MS Edge 18- broken with boxed symbols
	  || (ITERATOR$3 && !fails$9(function () { $parseInt$1(Object(ITERATOR$3)); }));

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
	  var S = trim$1(toString$4(string));
	  return $parseInt$1(S, (radix >>> 0) || (exec$2(hex, S) ? 16 : 10));
	} : $parseInt$1;

	var $$j = _export;
	var $parseInt = numberParseInt;

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	$$j({ global: true, forced: parseInt != $parseInt }, {
	  parseInt: $parseInt
	});

	var path$8 = path$m;

	var _parseInt$6 = path$8.parseInt;

	var parent$q = _parseInt$6;

	var _parseInt$5 = parent$q;

	var parent$p = _parseInt$5;

	var _parseInt$4 = parent$p;

	var parent$o = _parseInt$4;

	var _parseInt$3 = parent$o;

	var _parseInt$2 = _parseInt$3;

	var _parseInt = _parseInt$2;

	var _parseInt$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt);

	function _createSuper$p(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$p(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$p() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Volume = /*#__PURE__*/function (_Options) {
	  _inherits(Volume, _Options);
	  var _super = _createSuper$p(Volume);
	  function Volume(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, Volume);
	    _this = _super.call(this, player, container, 0, 0, desc);
	    _defineProperty(_assertThisInitialized(_this), "id", 'Volume');
	    _defineProperty(_assertThisInitialized(_this), "volume", 0.5);
	    _defineProperty(_assertThisInitialized(_this), "mouseY", 0);
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
	      this.volumeProgress = $$M('div.video-volume-progress', {
	        style: {
	          height: '70px'
	        }
	      });
	      this.volumeShow = $$M('div.video-volume-show');
	      this.volumeShow.innerText = (this.volume * 100).toFixed(0);
	      // this.volumeCompleted = new VolumeCompletedProgress(
	      //   this.player,
	      //   this.volumeProgress,
	      //   'div.video-volume-completed'
	      // )
	      this.volumeCompleted = $$M('div.video-volume-completed');
	      this.volumeProgress.appendChild(this.volumeCompleted);
	      this.hideBox.appendChild(this.volumeShow);
	      this.hideBox.appendChild(this.volumeProgress);
	      this.volumeDot = $$M('div.video-volume-dot');
	      this.volumeProgress.appendChild(this.volumeDot);
	      this.icon = createSvg(volumePath$1);
	      this.iconBox.appendChild(this.icon);
	      this.player.video.volume = this.volume;
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.player.on(EVENT.VOLUME_PROGRESS_CLICK, function (e, ctx) {
	        var eoffsetY = e.clientY - getDOMPoint(_this2.volumeProgress).y;
	        var offsetY = _this2.volumeProgress.clientHeight - eoffsetY;
	        var scale = offsetY / _this2.volumeProgress.clientHeight;
	        if (scale < 0) {
	          scale = 0;
	        } else if (scale > 1) {
	          scale = 1;
	        }
	        _this2.volumeCompleted.style.height = scale * 100 + '%';
	        _this2.volumeDot.style.top = (1 - scale) * _this2.volumeProgress.clientHeight + 'px';
	        _this2.volume = scale;
	        _this2.volumeShow.innerText = Math.round(_this2.volume * 100) + '';
	        _this2.player.video.volume = _this2.volume;
	      });
	      this.volumeProgress.onclick = function (e) {
	        e.stopPropagation();
	        _this2.player.emit(EVENT.VOLUME_PROGRESS_CLICK, e, _this2);
	      };
	      this.volumeDot.onmousedown = function (e) {
	        e.stopPropagation();
	        _this2.mouseY = e.pageY;
	        var top = _parseInt$1(getComputedStyle(_this2.volumeDot).top);
	        document.body.onmousemove = function (e) {
	          e.preventDefault();
	          var dy = top + e.pageY - _this2.mouseY;
	          // console.log(dy)
	          var scale = (_this2.volumeProgress.clientHeight - dy) / _this2.volumeProgress.clientHeight;
	          if (scale < 0) {
	            scale = 0;
	          } else if (scale > 1) {
	            scale = 1;
	          }
	          _this2.volumeDot.style.top = (1 - scale) * _this2.volumeProgress.clientHeight + 'px';
	          _this2.volumeCompleted.style.height = scale * 100 + '%';
	          _this2.volumeShow.innerText = Math.round(scale * 100) + '';
	          _this2.player.video.volume = scale;
	          _this2.volume = scale;
	        };
	        document.body.onmouseup = function (e) {
	          document.body.onmousemove = null;
	          document.body.onmouseup = null;
	        };
	      };
	    }
	  }]);
	  return Volume;
	}(Options);

	function addZero(num) {
	  return num > 9 ? '' + num : '0' + num;
	}
	function formatTime(seconds) {
	  seconds = Math.floor(seconds);
	  var minute = Math.floor(seconds / 60);
	  var second = seconds % 60;
	  return addZero(minute) + ':' + addZero(second);
	}
	function computeAngle(dx, dy) {
	  if (dx === 0) return 90;
	  if (dy === 0) return 0;
	  return Math.round(Math.atan(Math.abs(dy) / Math.abs(dx)) * 180 / Math.PI);
	}

	function _createSuper$o(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$o(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$o() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var DutaionShow = /*#__PURE__*/function (_Component) {
	  _inherits(DutaionShow, _Component);
	  var _super = _createSuper$o(DutaionShow);
	  function DutaionShow(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, DutaionShow);
	    _this = _super.call(this, container, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'DurationShow');
	    // el: div.video-duration-time.video-controller
	    _defineProperty(_assertThisInitialized(_this), "currentTime", '00:00');
	    _defineProperty(_assertThisInitialized(_this), "totalTime", '00:00');
	    _this.player = player;
	    _this.props = props;
	    _this.init();
	    return _this;
	  }
	  _createClass(DutaionShow, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      var _context;
	      addClass(this.el, ['video-duration-time', 'video-controller']);
	      this.el.innerText = _concatInstanceProperty(_context = "".concat(this.currentTime, "/")).call(_context, this.totalTime);
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.player.on(EVENT.LOADED_META_DATA, function (e) {
	        var _context2;
	        var video = e.target;
	        // console.log(video.duration) // 12.612
	        _this2.totalTime = formatTime(video.duration);
	        // console.log(this.totalTime) // 00:12
	        _this2.el.innerText = _concatInstanceProperty(_context2 = "".concat(_this2.currentTime, "/")).call(_context2, _this2.totalTime);
	      });
	      this.player.on(EVENT.TIME_UPDATE, function (e) {
	        var _context3;
	        var video = e.target;
	        _this2.currentTime = formatTime(video.currentTime);
	        _this2.el.innerText = _concatInstanceProperty(_context3 = "".concat(_this2.currentTime, "/")).call(_context3, _this2.totalTime);
	      });
	      this.player.on(EVENT.VIDEO_DOT_DRAG, function (scale, e) {
	        var _context4;
	        _this2.currentTime = formatTime(_this2.player.video.duration * scale);
	        _this2.el.innerText = _concatInstanceProperty(_context4 = "".concat(_this2.currentTime, "/")).call(_context4, _this2.totalTime);
	      });
	    }
	  }]);
	  return DutaionShow;
	}(Component);

	function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var FullPage = /*#__PURE__*/function (_Options) {
	  _inherits(FullPage, _Options);
	  var _super = _createSuper$n(FullPage);
	  function FullPage(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, FullPage);
	    _this = _super.call(this, player, container, 0, 0, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'FullPage');
	    // el: div.video-fullpage.video-controller
	    _defineProperty(_assertThisInitialized(_this), "isFullPage", false);
	    _this.init();
	    return _this;
	  }
	  _createClass(FullPage, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-fullpage', 'video-controller']);
	      this.icon = createSvg(fullPagePath, '0 0 1024 1024');
	      this.iconBox.appendChild(this.icon);
	      this.hideBox.innerText = '网页全屏';
	      this.hideBox.style.fontSize = '13px';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      this.onClick = this.onClick.bind(this);
	      if (this.player.env === 'Mobile') {
	        wrap(this.el).addEventListener('singleTap', this.onClick, {
	          stopPropagation: true
	        });
	      } else {
	        this.el.onclick = this.onClick;
	      }
	    }
	  }, {
	    key: "onClick",
	    value: function onClick(e) {
	      if (e instanceof Event) {
	        e.stopPropagation();
	      }
	      if (!this.isFullPage) {
	        addClass(this.player.el, ['video-wrapper-fullpage']);
	        this.iconBox.removeChild(this.icon);
	        this.icon = createSvg(fullPageExitPath, '0 0 1024 1024');
	        this.iconBox.appendChild(this.icon);
	      } else {
	        removeClass(this.player.el, ['video-wrapper-fullpage']);
	        this.iconBox.removeChild(this.icon);
	        this.icon = createSvg(fullPagePath, '0 0 1024 1024');
	        this.iconBox.appendChild(this.icon);
	      }
	      this.isFullPage = !this.isFullPage;
	    }
	  }]);
	  return FullPage;
	}(Options);

	function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var PicInPic = /*#__PURE__*/function (_Options) {
	  _inherits(PicInPic, _Options);
	  var _super = _createSuper$m(PicInPic);
	  // el: div.video-picInpic.video-controller

	  function PicInPic(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, PicInPic);
	    _this = _super.call(this, player, container, 0, 0, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'PicInPic');
	    _this.init();
	    return _this;
	  }
	  _createClass(PicInPic, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-picInpic', 'video-controller']);
	      this.icon = createSvg(picInPicPath, '0 0 1024 1024');
	      this.iconBox.appendChild(this.icon);
	      this.hideBox.innerText = '画中画';
	      this.hideBox.style.fontSize = '13px';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      this.onClick = this.onClick.bind(this);
	      if (this.player.env === 'Mobile') {
	        wrap(this.el).addEventListener('singleTap', this.onClick, {
	          stopPropagation: true
	        });
	      } else {
	        this.el.onclick = this.onClick;
	      }
	    }
	  }, {
	    key: "onClick",
	    value: function onClick(e) {
	      if (e instanceof Event) {
	        e.stopPropagation();
	      }
	      // document.pictureInPictureElement: 当前画中画的元素

	      if (document.pictureInPictureElement) {
	        // 当前存在画中画的元素，则退出画中画
	        document.exitPictureInPicture();
	      } else {
	        // 当前不存在画中画的元素，则开启画中画
	        this.player.video.requestPictureInPicture(); // 返回 Promise，里面是 pipWindow
	      }
	    }
	  }]);
	  return PicInPic;
	}(Options);

	var fails$8 = fails$x;
	var wellKnownSymbol$4 = wellKnownSymbol$q;
	var DESCRIPTORS$5 = descriptors;
	var IS_PURE$1 = isPure;

	var ITERATOR$2 = wellKnownSymbol$4('iterator');

	var urlConstructorDetection = !fails$8(function () {
	  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
	  var url = new URL('b?a=1&b=2&c=3', 'http://a');
	  var searchParams = url.searchParams;
	  var result = '';
	  url.pathname = 'c%20d';
	  searchParams.forEach(function (value, key) {
	    searchParams['delete']('b');
	    result += key + value;
	  });
	  return (IS_PURE$1 && !url.toJSON)
	    || (!searchParams.size && (IS_PURE$1 || !DESCRIPTORS$5))
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

	var DESCRIPTORS$4 = descriptors;
	var uncurryThis$6 = functionUncurryThis;
	var call$7 = functionCall;
	var fails$7 = fails$x;
	var objectKeys = objectKeys$3;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$1 = toObject$a;
	var IndexedObject = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty = Object.defineProperty;
	var concat$1 = uncurryThis$6([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$7(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$4 && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
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
	      if (!DESCRIPTORS$4 || call$7(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
	var uncurryThis$5 = functionUncurryThis;

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
	var exec$1 = uncurryThis$5(regexSeparators.exec);
	var floor$2 = Math.floor;
	var fromCharCode = String.fromCharCode;
	var charCodeAt = uncurryThis$5(''.charCodeAt);
	var join$2 = uncurryThis$5([].join);
	var push$3 = uncurryThis$5([].push);
	var replace$3 = uncurryThis$5(''.replace);
	var split$2 = uncurryThis$5(''.split);
	var toLowerCase$1 = uncurryThis$5(''.toLowerCase);

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
	        push$3(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
	      } else {
	        // It's an unmatched surrogate; only append this code unit, in case the
	        // next code unit is the high surrogate of a surrogate pair.
	        push$3(output, value);
	        counter--;
	      }
	    } else {
	      push$3(output, value);
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
	var encode$2 = function (input) {
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
	      push$3(output, fromCharCode(currentValue));
	    }
	  }

	  var basicLength = output.length; // number of basic code points.
	  var handledCPCount = basicLength; // number of code points that have been handled;

	  // Finish the basic string with a delimiter unless it's empty.
	  if (basicLength) {
	    push$3(output, delimiter);
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
	          push$3(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
	          q = floor$2(qMinusT / baseMinusT);
	          k += base;
	        }

	        push$3(output, fromCharCode(digitToBasic(q)));
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
	  var labels = split$2(replace$3(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
	  var i, label;
	  for (i = 0; i < labels.length; i++) {
	    label = labels[i];
	    push$3(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode$2(label) : label);
	  }
	  return join$2(encoded, '.');
	};

	var $TypeError$1 = TypeError;

	var validateArgumentsLength$4 = function (passed, required) {
	  if (passed < required) throw $TypeError$1('Not enough arguments');
	  return passed;
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

	var $$i = _export;
	var global$8 = global$o;
	var call$6 = functionCall;
	var uncurryThis$4 = functionUncurryThis;
	var DESCRIPTORS$3 = descriptors;
	var USE_NATIVE_URL$2 = urlConstructorDetection;
	var defineBuiltIn$2 = defineBuiltIn$8;
	var defineBuiltInAccessor$1 = defineBuiltInAccessor$5;
	var defineBuiltIns = defineBuiltIns$2;
	var setToStringTag$2 = setToStringTag$9;
	var createIteratorConstructor = iteratorCreateConstructor;
	var InternalStateModule$2 = internalState;
	var anInstance$2 = anInstance$5;
	var isCallable$4 = isCallable$p;
	var hasOwn$3 = hasOwnProperty_1;
	var bind$4 = functionBindContext;
	var classof$1 = classof$d;
	var anObject$3 = anObject$f;
	var isObject$4 = isObject$k;
	var $toString$1 = toString$c;
	var create$1 = objectCreate;
	var createPropertyDescriptor$2 = createPropertyDescriptor$8;
	var getIterator = getIterator$3;
	var getIteratorMethod = getIteratorMethod$a;
	var validateArgumentsLength$3 = validateArgumentsLength$4;
	var wellKnownSymbol$3 = wellKnownSymbol$q;
	var arraySort = arraySort$1;

	var ITERATOR$1 = wellKnownSymbol$3('iterator');
	var URL_SEARCH_PARAMS = 'URLSearchParams';
	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalParamsState = InternalStateModule$2.getterFor(URL_SEARCH_PARAMS);
	var getInternalIteratorState = InternalStateModule$2.getterFor(URL_SEARCH_PARAMS_ITERATOR);
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor;

	// Avoid NodeJS experimental warning
	var safeGetBuiltIn = function (name) {
	  if (!DESCRIPTORS$3) return global$8[name];
	  var descriptor = getOwnPropertyDescriptor$8(global$8, name);
	  return descriptor && descriptor.value;
	};

	var nativeFetch = safeGetBuiltIn('fetch');
	var NativeRequest = safeGetBuiltIn('Request');
	var Headers = safeGetBuiltIn('Headers');
	var RequestPrototype = NativeRequest && NativeRequest.prototype;
	var HeadersPrototype = Headers && Headers.prototype;
	var RegExp$1 = global$8.RegExp;
	var TypeError$3 = global$8.TypeError;
	var decodeURIComponent$1 = global$8.decodeURIComponent;
	var encodeURIComponent$1 = global$8.encodeURIComponent;
	var charAt$2 = uncurryThis$4(''.charAt);
	var join$1 = uncurryThis$4([].join);
	var push$2 = uncurryThis$4([].push);
	var replace$2 = uncurryThis$4(''.replace);
	var shift$1 = uncurryThis$4([].shift);
	var splice = uncurryThis$4([].splice);
	var split$1 = uncurryThis$4(''.split);
	var stringSlice$1 = uncurryThis$4(''.slice);

	var plus = /\+/g;
	var sequences = Array(4);

	var percentSequence = function (bytes) {
	  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
	};

	var percentDecode = function (sequence) {
	  try {
	    return decodeURIComponent$1(sequence);
	  } catch (error) {
	    return sequence;
	  }
	};

	var deserialize = function (it) {
	  var result = replace$2(it, plus, ' ');
	  var bytes = 4;
	  try {
	    return decodeURIComponent$1(result);
	  } catch (error) {
	    while (bytes) {
	      result = replace$2(result, percentSequence(bytes--), percentDecode);
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
	  return replace$2(encodeURIComponent$1(it), find, replacer);
	};

	var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
	  setInternalState$2(this, {
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
	    if (isObject$4(init)) this.parseObject(init);
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
	      while (!(step = call$6(next, iterator)).done) {
	        entryIterator = getIterator(anObject$3(step.value));
	        entryNext = entryIterator.next;
	        if (
	          (first = call$6(entryNext, entryIterator)).done ||
	          (second = call$6(entryNext, entryIterator)).done ||
	          !call$6(entryNext, entryIterator).done
	        ) throw TypeError$3('Expected sequence with length 2');
	        push$2(this.entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
	      }
	    } else for (var key in object) if (hasOwn$3(object, key)) {
	      push$2(this.entries, { key: key, value: $toString$1(object[key]) });
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
	          push$2(this.entries, {
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
	      push$2(result, serialize(entry.key) + '=' + serialize(entry.value));
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
	  anInstance$2(this, URLSearchParamsPrototype);
	  var init = arguments.length > 0 ? arguments[0] : undefined;
	  var state = setInternalState$2(this, new URLSearchParamsState(init));
	  if (!DESCRIPTORS$3) this.length = state.entries.length;
	};

	var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

	defineBuiltIns(URLSearchParamsPrototype, {
	  // `URLSearchParams.prototype.append` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
	  append: function append(name, value) {
	    validateArgumentsLength$3(arguments.length, 2);
	    var state = getInternalParamsState(this);
	    push$2(state.entries, { key: $toString$1(name), value: $toString$1(value) });
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
	      if (entries[index].key === key) push$2(result, entries[index].value);
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
	    if (!found) push$2(entries, { key: key, value: val });
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
	    var boundFunction = bind$4(callback, arguments.length > 1 ? arguments[1] : undefined);
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
	defineBuiltIn$2(URLSearchParamsPrototype, ITERATOR$1, URLSearchParamsPrototype.entries, { name: 'entries' });

	// `URLSearchParams.prototype.toString` method
	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
	defineBuiltIn$2(URLSearchParamsPrototype, 'toString', function toString() {
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

	setToStringTag$2(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

	$$i({ global: true, constructor: true, forced: !USE_NATIVE_URL$2 }, {
	  URLSearchParams: URLSearchParamsConstructor
	});

	// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
	if (!USE_NATIVE_URL$2 && isCallable$4(Headers)) {
	  var headersHas = uncurryThis$4(HeadersPrototype.has);
	  var headersSet = uncurryThis$4(HeadersPrototype.set);

	  var wrapRequestOptions = function (init) {
	    if (isObject$4(init)) {
	      var body = init.body;
	      var headers;
	      if (classof$1(body) === URL_SEARCH_PARAMS) {
	        headers = init.headers ? new Headers(init.headers) : new Headers();
	        if (!headersHas(headers, 'content-type')) {
	          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	        return create$1(init, {
	          body: createPropertyDescriptor$2(0, $toString$1(body)),
	          headers: createPropertyDescriptor$2(0, headers)
	        });
	      }
	    } return init;
	  };

	  if (isCallable$4(nativeFetch)) {
	    $$i({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
	      fetch: function fetch(input /* , init */) {
	        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	      }
	    });
	  }

	  if (isCallable$4(NativeRequest)) {
	    var RequestConstructor = function Request(input /* , init */) {
	      anInstance$2(this, RequestPrototype);
	      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	    };

	    RequestPrototype.constructor = RequestConstructor;
	    RequestConstructor.prototype = RequestPrototype;

	    $$i({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
	      Request: RequestConstructor
	    });
	  }
	}

	var web_urlSearchParams_constructor = {
	  URLSearchParams: URLSearchParamsConstructor,
	  getState: getInternalParamsState
	};

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var $$h = _export;
	var DESCRIPTORS$2 = descriptors;
	var USE_NATIVE_URL$1 = urlConstructorDetection;
	var global$7 = global$o;
	var bind$3 = functionBindContext;
	var uncurryThis$3 = functionUncurryThis;
	var defineBuiltIn$1 = defineBuiltIn$8;
	var defineBuiltInAccessor = defineBuiltInAccessor$5;
	var anInstance$1 = anInstance$5;
	var hasOwn$2 = hasOwnProperty_1;
	var assign$7 = objectAssign;
	var arrayFrom = arrayFrom$1;
	var arraySlice$1 = arraySliceSimple;
	var codeAt = stringMultibyte.codeAt;
	var toASCII = stringPunycodeToAscii;
	var $toString = toString$c;
	var setToStringTag$1 = setToStringTag$9;
	var validateArgumentsLength$2 = validateArgumentsLength$4;
	var URLSearchParamsModule = web_urlSearchParams_constructor;
	var InternalStateModule$1 = internalState;

	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalURLState = InternalStateModule$1.getterFor('URL');
	var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
	var getInternalSearchParamsState = URLSearchParamsModule.getState;

	var NativeURL = global$7.URL;
	var TypeError$2 = global$7.TypeError;
	var parseInt$1 = global$7.parseInt;
	var floor = Math.floor;
	var pow = Math.pow;
	var charAt$1 = uncurryThis$3(''.charAt);
	var exec = uncurryThis$3(/./.exec);
	var join = uncurryThis$3([].join);
	var numberToString = uncurryThis$3(1.0.toString);
	var pop = uncurryThis$3([].pop);
	var push$1 = uncurryThis$3([].push);
	var replace$1 = uncurryThis$3(''.replace);
	var shift = uncurryThis$3([].shift);
	var split = uncurryThis$3(''.split);
	var stringSlice = uncurryThis$3(''.slice);
	var toLowerCase = uncurryThis$3(''.toLowerCase);
	var unshift = uncurryThis$3([].unshift);

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
	    push$1(numbers, number);
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
	var fragmentPercentEncodeSet = assign$7({}, C0ControlPercentEncodeSet, {
	  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
	});
	var pathPercentEncodeSet = assign$7({}, fragmentPercentEncodeSet, {
	  '#': 1, '?': 1, '{': 1, '}': 1
	});
	var userinfoPercentEncodeSet = assign$7({}, pathPercentEncodeSet, {
	  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
	});

	var percentEncode = function (chr, set) {
	  var code = codeAt(chr, 0);
	  return code > 0x20 && code < 0x7F && !hasOwn$2(set, chr) ? chr : encodeURIComponent(chr);
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
	    if (failure) throw TypeError$2(failure);
	    this.searchParams = null;
	  } else {
	    if (base !== undefined) baseState = new URLState(base, true);
	    failure = this.parse(urlString, null, baseState);
	    if (failure) throw TypeError$2(failure);
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
	      input = replace$1(input, LEADING_C0_CONTROL_OR_SPACE, '');
	      input = replace$1(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
	    }

	    input = replace$1(input, TAB_AND_NEW_LINE, '');

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
	              (url.isSpecial() != hasOwn$2(specialSchemes, buffer)) ||
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
	              push$1(url.path, '');
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
	            if (isWindowsDriveLetter(base.path[0], true)) push$1(url.path, base.path[0]);
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
	                push$1(url.path, '');
	              }
	            } else if (isSingleDot(buffer)) {
	              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
	                push$1(url.path, '');
	              }
	            } else {
	              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
	                if (url.host) url.host = '';
	                buffer = charAt$1(buffer, 0) + ':'; // normalize windows drive letter
	              }
	              push$1(url.path, buffer);
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
	    return hasOwn$2(specialSchemes, this.scheme);
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
	    if (failure) throw TypeError$2(failure);
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
	  var that = anInstance$1(this, URLPrototype);
	  var base = validateArgumentsLength$2(arguments.length, 1) > 1 ? arguments[1] : undefined;
	  var state = setInternalState$1(that, new URLState(url, false, base));
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
	defineBuiltIn$1(URLPrototype, 'toJSON', function toJSON() {
	  return getInternalURLState(this).serialize();
	}, { enumerable: true });

	// `URL.prototype.toString` method
	// https://url.spec.whatwg.org/#URL-stringification-behavior
	defineBuiltIn$1(URLPrototype, 'toString', function toString() {
	  return getInternalURLState(this).serialize();
	}, { enumerable: true });

	if (NativeURL) {
	  var nativeCreateObjectURL = NativeURL.createObjectURL;
	  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
	  // `URL.createObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
	  if (nativeCreateObjectURL) defineBuiltIn$1(URLConstructor, 'createObjectURL', bind$3(nativeCreateObjectURL, NativeURL));
	  // `URL.revokeObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
	  if (nativeRevokeObjectURL) defineBuiltIn$1(URLConstructor, 'revokeObjectURL', bind$3(nativeRevokeObjectURL, NativeURL));
	}

	setToStringTag$1(URLConstructor, 'URL');

	$$h({ global: true, constructor: true, forced: !USE_NATIVE_URL$1, sham: !DESCRIPTORS$2 }, {
	  URL: URLConstructor
	});

	var $$g = _export;
	var getBuiltIn$4 = getBuiltIn$h;
	var fails$6 = fails$x;
	var validateArgumentsLength$1 = validateArgumentsLength$4;
	var toString$3 = toString$c;
	var USE_NATIVE_URL = urlConstructorDetection;

	var URL$1 = getBuiltIn$4('URL');

	// https://github.com/nodejs/node/issues/47505
	// https://github.com/denoland/deno/issues/18893
	var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails$6(function () {
	  URL$1.canParse();
	});

	// `URL.canParse` method
	// https://url.spec.whatwg.org/#dom-url-canparse
	$$g({ target: 'URL', stat: true, forced: !THROWS_WITHOUT_ARGUMENTS }, {
	  canParse: function canParse(url) {
	    var length = validateArgumentsLength$1(arguments.length, 1);
	    var urlString = toString$3(url);
	    var base = length < 2 || arguments[1] === undefined ? undefined : toString$3(arguments[1]);
	    try {
	      return !!new URL$1(urlString, base);
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var path$7 = path$m;

	var url$6 = path$7.URL;

	var parent$n = url$6;

	var url$5 = parent$n;

	var parent$m = url$5;

	var url$4 = parent$m;

	var parent$l = url$4;

	var url$3 = parent$l;

	var url$2 = url$3;

	var url$1 = url$2;

	var _URL = /*@__PURE__*/getDefaultExportFromCjs(url$1);

	function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var ScreenShot = /*#__PURE__*/function (_Options) {
	  _inherits(ScreenShot, _Options);
	  var _super = _createSuper$l(ScreenShot);
	  // el: div.video-screenshot.video-controller

	  function ScreenShot(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, ScreenShot);
	    _this = _super.call(this, player, container, 0, 0, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'ScreenShot');
	    _this.init();
	    return _this;
	  }
	  _createClass(ScreenShot, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.confirmIcon = createSvg(confirmPath, '0 0 1024 1024');
	      addClass(this.el, ['video-screenshot', 'video-controller']);
	      this.icon = createSvg(screenShotPath, '0 0 1024 1024');
	      this.iconBox.appendChild(this.icon);
	      this.hideBox.innerText = '截图';
	      this.hideBox.style.fontSize = '13px';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      this.onClick = this.onClick.bind(this);
	      if (this.player.env === 'PC') {
	        this.el.addEventListener('click', this.onClick);
	      } else {
	        wrap(this.el).addEventListener('singleTap', this.onClick, {
	          stopPropagation: true
	        });
	      }
	    }
	  }, {
	    key: "onClick",
	    value: function onClick(e) {
	      var _this2 = this;
	      if (e instanceof Event) {
	        e.stopPropagation();
	      }
	      if (!includeClass(this.icon, 'video-screenshot-animate')) {
	        addClass(this.icon, ['video-screenshot-animate']);
	        this.icon.ontransitionend = function (e) {
	          removeClass(_this2.icon, ['video-screenshot-animate']);
	          _this2.icon.ontransitionend = null;
	        };
	      }
	      this.screenShot();
	    }
	  }, {
	    key: "screenShot",
	    value: function screenShot() {
	      var _context, _context2;
	      var canvas = document.createElement('canvas');
	      var video = this.player.video;
	      canvas.width = video.videoWidth;
	      canvas.height = video.videoHeight;
	      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	      var fileName = _concatInstanceProperty(_context = "".concat(_sliceInstanceProperty(_context2 = Math.random().toString(36)).call(_context2, -8), "_")).call(_context, video.currentTime, ".png");
	      try {
	        canvas.toBlob(function (blob) {
	          var url = _URL.createObjectURL(blob);
	          var a = document.createElement('a');
	          a.href = url;
	          a.download = fileName;
	          a.style.display = 'none';
	          document.body.appendChild(a);
	          a.click();
	          document.body.removeChild(a);
	          _URL.revokeObjectURL(url);
	        }, 'image/png');
	      } catch (_unused) {
	        // todo
	      }
	      var dom = $$M('div.video-screenshot-toast');
	      var span = $$M('span');
	      span.innerText = '截图成功!';
	      var icon = this.confirmIcon.cloneNode(true);
	      dom.appendChild(icon);
	      dom.appendChild(span);
	      var toast = new Toast(this.player, dom);
	      setTimeout(function () {
	        toast.dispose();
	        toast = null;
	      }, 2000);
	    }
	  }]);
	  return ScreenShot;
	}(Options);

	function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var VideoShot = /*#__PURE__*/function (_Options) {
	  _inherits(VideoShot, _Options);
	  var _super = _createSuper$k(VideoShot);
	  function VideoShot(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, VideoShot);
	    _this = _super.call(this, player, container, 0, 0, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'VideoShot');
	    // el: div.video-videoshot.video-controller
	    _defineProperty(_assertThisInitialized(_this), "countDown", 30);
	    _defineProperty(_assertThisInitialized(_this), "timer", null);
	    _this.init();
	    return _this;
	  }
	  _createClass(VideoShot, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-videoshot', 'video-controller']);
	      this.icon = createSvg(videoShotPath$1, "0 0 1024 1024");
	      this.iconBox.appendChild(this.icon);
	      this.hideBox.innerText = '视频录制';
	      this.hideBox.style.fontSize = '13px';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      this.onDown = this.onDown.bind(this);
	      if (this.player.env === 'PC') {
	        this.el.onmousedown = this.onDown;
	      } else {
	        this.el.ontouchstart = this.onDown;
	      }
	    }

	    // 当鼠标或者手指按下的时刻开始启动录屏
	  }, {
	    key: "onDown",
	    value: function onDown(e) {
	      e.stopPropagation();
	      addClass(this.icon, ['video-videoshot-animate']);
	      if (this.player.video.played) {
	        this.videoShot();
	      }
	    }
	  }, {
	    key: "videoShot",
	    value: function videoShot() {
	      var _this2 = this;
	      var inProgressToast = this.createInProgressToast();

	      // MediaRecorder(stream[, options]) 构造函数会创建一个对指定的 MediaStream 进行录制的 MediaRecorder 对象
	      var recorder = new MediaRecorder(this.player.video.captureStream(60));
	      recorder.addEventListener('start', function (e) {
	        console.log('开始录制视频');
	      });
	      recorder.addEventListener('stop', function (e) {
	        console.log('结束录制视频');
	      });

	      // 当 MediaRecorder 将媒体数据传递到您的应用程序以供使用时，将触发该事件。数据在包含数据的Blob对象中提供
	      recorder.addEventListener('dataavailable', function (e) {
	        // console.log(e.data) // 是一个Blob

	        var data = e.data;
	        var a = document.createElement('a');
	        // createObjectURL: 用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象
	        a.href = _URL.createObjectURL(data);
	        a.download = 'Test.mp4';
	        a.style.display = 'none';
	        document.body.appendChild(a);
	        a.click();
	        document.body.removeChild(a);
	        a = null;
	      });

	      // 开始录制视频
	      recorder.start();
	      this.timer = window.setInterval(function () {
	        console.log(_this2.countDown);
	        inProgressToast.el.querySelector('span').innerText = "\u5F00\u59CB\u5F55\u5C4F\uFF0C\u6700\u591A\u5F55\u523630\u79D2; \u8FD8\u5269".concat(_this2.countDown, "\u79D2");
	        if (_this2.countDown === 0) {
	          // 结束录制视频，30s后自动结束录制
	          _this2.stop(recorder);
	          return;
	        }
	        _this2.countDown--;
	      }, 1000);
	      if (this.player.env === 'Mobile') {
	        this.el.ontouchend = function (e) {
	          removeClass(_this2.icon, ['video-videoshot-animate']);
	          _this2.stop(recorder);
	          // 销毁toast组件
	          inProgressToast.dispose();
	          inProgressToast = null;
	          var successToast = _this2.createSuccessToast();
	          window.setTimeout(function () {
	            successToast.dispose();
	            successToast = null;
	          }, 2000);
	        };
	      } else {
	        // 结束录制视频，手动抬起鼠标结束录制
	        this.el.onmouseup = function (e) {
	          removeClass(_this2.icon, ['video-videoshot-animate']);
	          _this2.stop(recorder);
	          // 销毁toast组件
	          inProgressToast.dispose();
	          inProgressToast = null;
	          var successToast = _this2.createSuccessToast();
	          window.setTimeout(function () {
	            successToast.dispose();
	            successToast = null;
	          }, 2000);
	        };
	      }
	    }
	  }, {
	    key: "stop",
	    value: function stop(recorder) {
	      recorder.stop();
	      recorder = null;
	      window.clearInterval(this.timer);
	      this.timer = null;
	      this.el.onmouseup = null;
	      this.el.ontouchend = null;
	      this.countDown = 30;
	    }
	  }, {
	    key: "createInProgressToast",
	    value: function createInProgressToast() {
	      var inProgressIcon = createSvg(countdownPath, '0 0 1024 1024');
	      var dom = $$M('div.video-videoshot-inprogress-toast');
	      var span = $$M('span');
	      span.innerText = "\u5F00\u59CB\u5F55\u5C4F\uFF0C\u6700\u591A\u5F55\u523630\u79D2; \u8FD8\u5269".concat(this.countDown, "\u79D2");
	      dom.appendChild(inProgressIcon);
	      dom.appendChild(span);
	      var toast = new Toast(this.player, dom);
	      return toast;
	    }
	  }, {
	    key: "createSuccessToast",
	    value: function createSuccessToast() {
	      var successIcon = createSvg(confirmPath, '0 0 1024 1024');
	      var dom = $$M('div.video-videoshot-success-toast');
	      var span = $$M('span');
	      span.innerText = "\u5F55\u5236\u6210\u529F!";
	      dom.appendChild(successIcon);
	      dom.appendChild(span);
	      var toast = new Toast(this.player, dom);
	      return toast;
	    }
	  }]);
	  return VideoShot;
	}(Options);

	var SubsettingItem = /*#__PURE__*/function () {
	  // el: div.video-subsettings-item

	  function SubsettingItem(player, leftIcon, leftText, rightTip, rightIcon) {
	    _classCallCheck(this, SubsettingItem);
	    this.player = player;
	    this.init();
	    if (leftIcon) this.leftIconBox.appendChild(leftIcon);
	    if (leftText) this.leftTextBox.innerText = leftText;
	    if (rightTip) this.rightTipBox.innerText = rightTip;
	    if (rightIcon) this.rightIcon.appendChild(rightIcon);
	  }
	  _createClass(SubsettingItem, [{
	    key: "init",
	    value: function init() {
	      this.el = $$M('div.video-subsettings-item');
	      this.leftArea = $$M('div.video-subsettings-itemleft');
	      this.rightArea = $$M('div.video-subsettings-itemright');
	      this.leftIconBox = $$M('div.video-subsettings-itemleft-icon');
	      this.leftTextBox = $$M('div.video-subsettings-itemleft-text');
	      this.rightTipBox = $$M('div.video-subsettings-itemright-tip');
	      this.rightIcon = $$M('div.video-subsettings-itemright-icon');
	      this.el.append(this.leftArea, this.rightArea);
	      this.leftArea.append(this.leftIconBox, this.leftTextBox);
	      this.rightArea.append(this.rightTipBox, this.rightIcon);
	    }
	  }]);
	  return SubsettingItem;
	}();

	function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubsettingsBase = /*#__PURE__*/function (_BaseEvent) {
	  _inherits(SubsettingsBase, _BaseEvent);
	  var _super = _createSuper$j(SubsettingsBase);
	  function SubsettingsBase(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsBase);
	    _this = _super.call(this);
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubsettingsBase');
	    _defineProperty(_assertThisInitialized(_this), "clickOrTap", 'click');
	    _this.player = player;
	    _this.subsetting = subsetting;
	    _assertThisInitialized(_this).__proto__.constructor.instance = _assertThisInitialized(_this);
	    return _this;
	  }
	  _createClass(SubsettingsBase, [{
	    key: "initBaseSubsettingsItem",
	    value: function initBaseSubsettingsItem() {
	      var _context,
	        _this2 = this;
	      _forEachInstanceProperty(_context = this.SubsettingsItem).call(_context, function (item) {
	        _this2.registerSubsettingsItem(item);
	        item.instance.el.dataset.SubsettingsSubtitleType = item.leftText;
	      });
	    }
	  }, {
	    key: "initPCEvent",
	    value: function initPCEvent() {
	      this.clickOrTap = 'click';
	    }
	  }, {
	    key: "initMobileEvent",
	    value: function initMobileEvent() {
	      this.clickOrTap = 'singleTap';
	    }

	    // target表示点击你这个item，需要跳转到哪一个SubsettingsBase
	  }, {
	    key: "registerSubsettingsItem",
	    value: function registerSubsettingsItem(item) {
	      var _this3 = this;
	      var base = null;
	      if (item.target) {
	        if (item.target instanceof SubsettingsBase) {
	          // 如果是个实例对象
	          base = item.target;
	        } else {
	          if (item.target.instance) {
	            base = item.target.instance;
	          } else {
	            base = new item.target(this.subsetting, this.player);
	          }
	        }
	        this.subsetting.registerSubsettingsBase(base);
	        if (!this.subsetting.subsettingsBaseGraph.has(this)) {
	          this.subsetting.subsettingsBaseGraph.set(this, [base]);
	        } else {
	          var res = this.subsetting.subsettingsBaseGraph.get(this);
	          !_includesInstanceProperty(res).call(res, base) && res.push(base);
	          this.subsetting.subsettingsBaseGraph.set(this, res);
	        }
	      }

	      // if (!this.SubsettingsItem.includes(item)) this.SubsettingsItem.push(item)

	      var instance = new SubsettingItem(this.player, item.leftIcon, item.leftText, item.rightTip, item.rightIcon);
	      item.instance = instance;
	      this.el.appendChild(instance.el);
	      if (this.player.env === 'PC') {
	        this.initPCEvent();
	      } else {
	        this.initMobileEvent();
	      }
	      wrap(instance.el).addEventListener(this.clickOrTap, function (e) {
	        if (e instanceof MouseEvent) {
	          e.stopPropagation();
	        }
	        if (item.target) {
	          _this3.el.style.display = 'none';
	          base.el.style.display = '';
	          _this3.subsetting.hideBox.style.width = base.el.dataset.width ? base.el.dataset.width + 'px' : '200px';
	        }
	        if (item.click) item.click(item);
	      }, {
	        stopPropagation: true
	      });
	      return item;
	    }
	  }]);
	  return SubsettingsBase;
	}(BaseEvent);

	function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray$2(o, minLen) { var _context2; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = _sliceInstanceProperty(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
	function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	// import { SubsettingItem } from '../SubsettingItem'
	// import { BaseEvent } from '@/class/BaseEvent'

	var SubsettingsPlayrate = /*#__PURE__*/function (_SubsettingsBase) {
	  _inherits(SubsettingsPlayrate, _SubsettingsBase);
	  var _super = _createSuper$i(SubsettingsPlayrate);
	  function SubsettingsPlayrate(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsPlayrate);
	    _this = _super.call(this, subsetting, player);
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubsettingsPlayrate');
	    // el: div.video-subsettings-playrate
	    _defineProperty(_assertThisInitialized(_this), "SubsettingsItem", [{
	      leftIcon: createSvg(leftarrowPath, '0 0 1024 1024'),
	      leftText: '播放速度',
	      target: SubsettingsMain
	    }, {
	      leftText: '0.5',
	      target: SubsettingsMain
	    }, {
	      leftText: '0.75',
	      target: SubsettingsMain
	    }, {
	      leftIcon: createSvg(settingsConfirmPath),
	      leftText: '正常',
	      target: SubsettingsMain
	    }, {
	      leftText: '1.5',
	      target: SubsettingsMain
	    }, {
	      leftText: '2',
	      target: SubsettingsMain
	    }]);
	    _this.init();
	    return _this;
	  }
	  _createClass(SubsettingsPlayrate, [{
	    key: "init",
	    value: function init() {
	      this.el = $$M('div.video-subsettings-playrate');
	      this.el.dataset.width = '170';
	      this.el.style.display = 'none';
	      this.initSubsettingsItem();
	      this.initEvent();
	    }
	  }, {
	    key: "initSubsettingsItem",
	    value: function initSubsettingsItem() {
	      this.initBaseSubsettingsItem();
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _context,
	        _this2 = this;
	      _forEachInstanceProperty(_context = this.SubsettingsItem).call(_context, function (item, index) {
	        item.instance.el.onclick = function (e) {
	          e.stopPropagation();
	          if (item.leftText === '播放速度') {
	            _this2.el.style.display = 'none';
	            var instance = _this2.subsetting.subsettingsBaseGraph.get(_this2)[0];
	            instance.el.style.display = '';
	            return;
	          } else {
	            if (item.leftText === '正常') {
	              // playbackRate: 设置video的播放速度
	              _this2.player.video.playbackRate = 1;
	            } else {
	              _this2.player.video.playbackRate = Number(item.leftText);
	            }
	          }
	          item.leftIcon = createSvg(settingsConfirmPath);
	          item.instance.leftIconBox.innerHTML = '';
	          item.instance.leftIconBox.appendChild(item.leftIcon);
	          var _iterator = _createForOfIteratorHelper$2(_this2.SubsettingsItem),
	            _step;
	          try {
	            for (_iterator.s(); !(_step = _iterator.n()).done;) {
	              var another = _step.value;
	              if (another !== item) {
	                another.instance.leftIconBox.innerHTML = '';
	              }
	            }
	          } catch (err) {
	            _iterator.e(err);
	          } finally {
	            _iterator.f();
	          }
	          _this2.subsetting.emit('PlayrateChange', item.leftText);
	        };
	      });
	    }
	  }]);
	  return SubsettingsPlayrate;
	}(SubsettingsBase);

	function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubsettingsMain = /*#__PURE__*/function (_SubsettingsBase) {
	  _inherits(SubsettingsMain, _SubsettingsBase);
	  var _super = _createSuper$h(SubsettingsMain);
	  function SubsettingsMain(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsMain);
	    _this = _super.call(this, subsetting, player);
	    // el: div.video-subsettings-main
	    _defineProperty(_assertThisInitialized(_this), "SubsettingsItem", [{
	      leftIcon: createSvg(playratePath, '0 0 1024 1024'),
	      leftText: '播放速度',
	      rightTip: '正常',
	      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024'),
	      target: SubsettingsPlayrate
	    }, {
	      leftIcon: createSvgs([propotionPath$1, propotionPath$2], '0 0 1024 1024'),
	      leftText: '画面比例',
	      rightTip: '默认',
	      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024')
	    }, {
	      leftIcon: createSvg(flipPath, '0 0 1024 1024'),
	      leftText: '画面翻转',
	      rightTip: '正常',
	      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024')
	    }]);
	    _this.init();
	    return _this;
	  }
	  _createClass(SubsettingsMain, [{
	    key: "init",
	    value: function init() {
	      this.el = $$M('div.video-subsettings-main');
	      this.el.dataset.width = '200';
	      this.subsetting.hideBox.style.width = this.el.dataset.width + 'px';
	      this.initSubsettingsItem();
	      this.initEvent();
	    }
	  }, {
	    key: "initSubsettingsItem",
	    value: function initSubsettingsItem() {
	      this.initBaseSubsettingsItem();
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.subsetting.on('PlayrateChange', function (leftText) {
	        _this2.SubsettingsItem[0].instance.rightTipBox.innerText = leftText;
	      });
	    }
	  }]);
	  return SubsettingsMain;
	}(SubsettingsBase);

	function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubSetting = /*#__PURE__*/function (_Options) {
	  _inherits(SubSetting, _Options);
	  var _super = _createSuper$g(SubSetting);
	  // subsettingsMain: SubsettingsMain
	  // subsettingsPlayrate: SubsettingsPlayrate
	  // subsettingsSubtitle: SubsettingsSubtitle
	  // currentShow: HTMLElement

	  function SubSetting(player, container, desc) {
	    var _this;
	    _classCallCheck(this, SubSetting);
	    _this = _super.call(this, player, container, 0, 0, desc);
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubSetting');
	    _defineProperty(_assertThisInitialized(_this), "subsettingsBaseGraph", new _Map());
	    _this.init();
	    return _this;
	  }
	  _createClass(SubSetting, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-subsettings', 'video-controller']);
	      addClass(this.hideBox, ['video-subsettings-set']);
	      this.el['aria-label'] = '设置';
	      this.icon = createSvg(subSettingPath, '0 0 1024 1024');
	      this.iconBox.appendChild(this.icon);
	      this.el.appendChild(this.iconBox);
	      this.el.appendChild(this.hideBox);
	      this.initSubSettingBase();
	    }
	  }, {
	    key: "initSubSettingBase",
	    value: function initSubSettingBase() {
	      this.subsettingsMain = new SubsettingsMain(this, this.player);
	      this.registerSubsettingsBase(this.subsettingsMain);
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      if (this.player.env === 'PC') {
	        this.initPCEvent();
	      } else {
	        this.initMobileEvent();
	      }
	      this.el.onmouseenter = null;
	      wrap(this.iconBox).addEventListener(this.clickOrTap, function (e) {
	        if (e instanceof Event) {
	          e.stopPropagation();
	        }
	        if (!includeClass(_this2.icon, 'video-subsettings-animate')) {
	          addClass(_this2.icon, ['video-subsettings-animate']);
	        } else {
	          removeClass(_this2.icon, ['video-subsettings-animate']);
	        }
	        if (!includeClass(_this2.hideBox, 'video-set-hidden')) {
	          addClass(_this2.hideBox, ['video-set-hidden']);
	        } else {
	          removeClass(_this2.hideBox, ['video-set-hidden']);
	        }
	        _this2.player.emit('oneControllerHover', _this2);
	      }, {
	        stopPropagation: true
	      });
	    }
	  }, {
	    key: "initPCEvent",
	    value: function initPCEvent() {
	      this.clickOrTap = 'click';
	    }
	  }, {
	    key: "initMobileEvent",
	    value: function initMobileEvent() {
	      this.clickOrTap = 'singleTap';
	    }

	    // 注册基础的子设置项
	  }, {
	    key: "registerSubsettingsBase",
	    value: function registerSubsettingsBase(baseCons) {
	      if (baseCons instanceof SubsettingsBase) {
	        this.hideBox.appendChild(baseCons.el);
	      } else {
	        var base = new baseCons(this, this.player);
	        this.hideBox.appendChild(base.el);
	      }
	    }
	  }]);
	  return SubSetting;
	}(Options);

	function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubsettingsSubtitle = /*#__PURE__*/function (_SubsettingsBase) {
	  _inherits(SubsettingsSubtitle, _SubsettingsBase);
	  var _super = _createSuper$f(SubsettingsSubtitle);
	  function SubsettingsSubtitle(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsSubtitle);
	    _this = _super.call(this, subsetting, player);
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubsettingsSubtitle');
	    _defineProperty(_assertThisInitialized(_this), "switchOnIcon", createSvg(switchOffPath, '0 0 1024 1024'));
	    _defineProperty(_assertThisInitialized(_this), "switchOffIcon", createSvg(switchOnPath, '0 0 1024 1024'));
	    _defineProperty(_assertThisInitialized(_this), "status", 'show');
	    _defineProperty(_assertThisInitialized(_this), "SubsettingsItem", [{
	      leftIcon: createSvg(leftarrowPath, '0 0 1024 1024'),
	      leftText: '字幕设置',
	      target: SubsettingsMain
	    }, {
	      leftIcon: createSvg(subtitleShowPath),
	      leftText: '字幕显示',
	      rightTip: 'Show',
	      rightIcon: _this.switchOnIcon
	    }]);
	    _this.init();
	    return _this;
	  }
	  _createClass(SubsettingsSubtitle, [{
	    key: "init",
	    value: function init() {
	      this.el = $$M('div.video-subsettings-subtitle');
	      this.el.dataset.width = '180';
	      this.el.style.display = 'none';
	      addClass(this.switchOffIcon, ['video-switch-off']);
	      addClass(this.switchOnIcon, ['video-switch-on']);
	      this.initSubsettingsItem();
	      this.initEvent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initSubsettingsItem",
	    value: function initSubsettingsItem() {
	      this.initBaseSubsettingsItem();
	      this.SubsettingsItem[1].instance.rightIcon.appendChild(this.switchOffIcon);
	      this.switchOffIcon.style.display = 'none';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      var _loop = function _loop(i) {
	        _this2.SubsettingsItem[i].instance.el.onclick = function (e) {
	          e.stopPropagation();
	          if (i === 1) {
	            if (_this2.status === 'show') {
	              _this2.player.emit('HideSubtitle');
	              _this2.switchOffIcon.style.display = 'block';
	              _this2.switchOnIcon.style.display = 'none';
	              _this2.status = 'hide';
	              _this2.SubsettingsItem[i].instance.rightTipBox.innerText = 'Hide';
	            } else {
	              _this2.player.emit('ShowSubtitle');
	              _this2.switchOffIcon.style.display = 'none';
	              _this2.switchOnIcon.style.display = 'block';
	              _this2.status = 'show';
	              _this2.SubsettingsItem[i].instance.rightTipBox.innerText = 'Show';
	            }
	            return;
	          }
	          _this2.player.emit('SubsettingsSubtitleClick', _this2.SubsettingsItem[i], i);
	        };
	      };
	      for (var i = 0; i < this.SubsettingsItem.length; i++) {
	        _loop(i);
	      }
	    }
	  }]);
	  return SubsettingsSubtitle;
	}(SubsettingsBase);

	function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Controller = /*#__PURE__*/function (_Component) {
	  _inherits(Controller, _Component);
	  var _super = _createSuper$e(Controller);
	  // fullscreen: FullScreen
	  // playButton: PlayButton
	  // playrate: Playrate
	  // volume: Volume
	  // subPlay: HTMLElement
	  // settings: HTMLElement
	  //代表着最左侧的区域

	  //代表最右侧的区域

	  function Controller(player, container, desc) {
	    var _this;
	    _classCallCheck(this, Controller);
	    _this = _super.call(this, container, desc);
	    _defineProperty(_assertThisInitialized(_this), "id", 'Controller');
	    // 控件
	    _defineProperty(_assertThisInitialized(_this), "leftControllers", [PlayButton, Volume, DutaionShow]);
	    _defineProperty(_assertThisInitialized(_this), "rightControllers", [SubSetting, VideoShot, ScreenShot, PicInPic, FullPage, FullScreen]);
	    _this.player = player;
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
	      var leftControllers = this.player.playerOptions.leftBottomBarControllers;
	      var rightControllers = this.player.playerOptions.rightBottomBarControllers;
	      if (leftControllers) {
	        this.leftControllers = leftControllers;
	      }
	      if (rightControllers) {
	        this.rightControllers = rightControllers;
	      }
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      // this.leftArea = $('div.video-subplay')
	      // this.mediumArea = $('div.video-medium')
	      // this.rightArea = $('div.video-settings')
	      this.leftArea = $$M('div.video-bottombar-left');
	      this.mediumArea = $$M('div.video-bottombar-medium');
	      this.rightArea = $$M('div.video-bottombar-right');
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
	        if (!ONCE_COMPONENT_STORE.get(instance.id)) storeControlComponent(instance);
	        _this2[instance.id] = instance;
	      });
	      _forEachInstanceProperty(_context2 = this.rightControllers).call(_context2, function (ControlConstructor) {
	        var instance = new ControlConstructor(_this2.player, _this2.rightArea, 'div');
	        if (!ONCE_COMPONENT_STORE.get(instance.id)) storeControlComponent(instance);
	        _this2[instance.id] = instance;
	      });
	      // this.playButton = new PlayButton(this.player, this.leftArea, 'div')
	      // this.volume = new Volume(this.player, this.leftArea, 'div')
	      // this.DutaionShow = new DutaionShow(this.player, this.leftArea, 'div')
	      // this.playrate = new Playrate(this.player, this.rightArea, 'div')
	      // this.SubSetting = new SubSetting(this.player, this.rightArea, 'div')
	      // this.VideoShot = new VideoShot(this.player, this.rightArea, 'div')
	      // this.ScreenShot = new ScreenShot(this.player, this.rightArea, 'div')
	      // this.PicInPic = new PicInPic(this.player, this.rightArea, 'div')
	      // this.FullPage = new FullPage(this.player, this.rightArea, 'div')
	      // this.fullscreen = new FullScreen(this.player, this.rightArea, 'div')
	    }
	  }]);
	  return Controller;
	}(Component);

	var $$f = _export;
	var assign$6 = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$f({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$6 }, {
	  assign: assign$6
	});

	var path$6 = path$m;

	var assign$5 = path$6.Object.assign;

	var parent$k = assign$5;

	var assign$4 = parent$k;

	var parent$j = assign$4;

	var assign$3 = parent$j;

	var parent$i = assign$3;

	var assign$2 = parent$i;

	var assign$1 = assign$2;

	var assign = assign$1;

	var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign);

	var global$6 = global$o;
	var fails$5 = fails$x;
	var uncurryThis$2 = functionUncurryThis;
	var toString$2 = toString$c;
	var trim = stringTrim.trim;
	var whitespaces = whitespaces$3;

	var charAt = uncurryThis$2(''.charAt);
	var $parseFloat$1 = global$6.parseFloat;
	var Symbol$1 = global$6.Symbol;
	var ITERATOR = Symbol$1 && Symbol$1.iterator;
	var FORCED$1 = 1 / $parseFloat$1(whitespaces + '-0') !== -Infinity
	  // MS Edge 18- broken with boxed symbols
	  || (ITERATOR && !fails$5(function () { $parseFloat$1(Object(ITERATOR)); }));

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	var numberParseFloat = FORCED$1 ? function parseFloat(string) {
	  var trimmedString = trim(toString$2(string));
	  var result = $parseFloat$1(trimmedString);
	  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
	} : $parseFloat$1;

	var $$e = _export;
	var $parseFloat = numberParseFloat;

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	$$e({ global: true, forced: parseFloat != $parseFloat }, {
	  parseFloat: $parseFloat
	});

	var path$5 = path$m;

	var _parseFloat$6 = path$5.parseFloat;

	var parent$h = _parseFloat$6;

	var _parseFloat$5 = parent$h;

	var parent$g = _parseFloat$5;

	var _parseFloat$4 = parent$g;

	var parent$f = _parseFloat$4;

	var _parseFloat$3 = parent$f;

	var _parseFloat$2 = _parseFloat$3;

	var _parseFloat = _parseFloat$2;

	var _parseFloat$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseFloat);

	var env = window.navigator.userAgent.toLowerCase();

	// 'mozilla/5.0 (macintosh; intel mac os x 10_15_7) applewebkit/537.36 (khtml, like gecko) chrome/113.0.0.0 safari/537.36'

	var Env = {
	  isInWeixin: function isInWeixin() {
	    return _indexOfInstanceProperty(env).call(env, 'micromessenger') !== -1;
	  },
	  isInApp: function isInApp() {
	    return /(^|;\s)app\//.test(env);
	  },
	  isInIOS: function isInIOS() {
	    return env.match(/(iphone|ipod|ipad);?/i);
	  },
	  isInAndroid: function isInAndroid() {
	    return env.match(/android|adr/i);
	  },
	  isInPc: function isInPc() {
	    return !(Env.isInAndroid() || Env.isInApp() || Env.isInIOS() || Env.isInWeixin());
	  },
	  get env() {
	    return this.isInPc() ? 'PC' : 'Mobile';
	  }
	};

	var getBuiltIn$3 = getBuiltIn$h;
	var uncurryThis$1 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject$2 = anObject$f;

	var concat = uncurryThis$1([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$3 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$2(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$1 = hasOwnProperty_1;
	var ownKeys$2 = ownKeys$3;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys$2(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var isObject$3 = isObject$k;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;

	// `InstallErrorCause` abstract operation
	// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
	var installErrorCause$1 = function (O, options) {
	  if (isObject$3(options) && 'cause' in options) {
	    createNonEnumerableProperty$2(O, 'cause', options.cause);
	  }
	};

	var uncurryThis = functionUncurryThis;

	var $Error$1 = Error;
	var replace = uncurryThis(''.replace);

	var TEST = (function (arg) { return String($Error$1(arg).stack); })('zxcasd');
	// eslint-disable-next-line redos/no-vulnerable -- safe
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

	var errorStackClear = function (stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
	    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } return stack;
	};

	var fails$4 = fails$x;
	var createPropertyDescriptor$1 = createPropertyDescriptor$8;

	var errorStackInstallable = !fails$4(function () {
	  var error = Error('a');
	  if (!('stack' in error)) return true;
	  // eslint-disable-next-line es/no-object-defineproperty -- safe
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$1(1, 7));
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

	var toString$1 = toString$c;

	var normalizeStringArgument$1 = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$1(argument);
	};

	var $$d = _export;
	var isPrototypeOf = objectIsPrototypeOf;
	var getPrototypeOf = objectGetPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var copyConstructorProperties = copyConstructorProperties$1;
	var create = objectCreate;
	var createNonEnumerableProperty = createNonEnumerableProperty$9;
	var createPropertyDescriptor = createPropertyDescriptor$8;
	var installErrorCause = installErrorCause$1;
	var installErrorStack = errorStackInstall;
	var iterate$4 = iterate$l;
	var normalizeStringArgument = normalizeStringArgument$1;
	var wellKnownSymbol$2 = wellKnownSymbol$q;

	var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
	var $Error = Error;
	var push = [].push;

	var $AggregateError = function AggregateError(errors, message /* , options */) {
	  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
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

	var anObject$1 = anObject$f;
	var aConstructor = aConstructor$3;
	var isNullOrUndefined = isNullOrUndefined$6;
	var wellKnownSymbol$1 = wellKnownSymbol$q;

	var SPECIES$1 = wellKnownSymbol$1('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$2 = function (O, defaultConstructor) {
	  var C = anObject$1(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined(S = anObject$1(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
	};

	var userAgent$2 = engineUserAgent;

	// eslint-disable-next-line redos/no-vulnerable -- safe
	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

	var global$5 = global$o;
	var apply = functionApply;
	var bind$2 = functionBindContext;
	var isCallable$3 = isCallable$p;
	var hasOwn = hasOwnProperty_1;
	var fails$3 = fails$x;
	var html = html$2;
	var arraySlice = arraySlice$7;
	var createElement = documentCreateElement$1;
	var validateArgumentsLength = validateArgumentsLength$4;
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

	fails$3(function () {
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
	    !fails$3(globalPostMessageDefer)
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

	var global$4 = global$o;
	var bind$1 = functionBindContext;
	var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;
	var macrotask = task$1.set;
	var Queue$1 = queue$1;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$2 = engineIsNode;

	var MutationObserver$1 = global$4.MutationObserver || global$4.WebKitMutationObserver;
	var document$2 = global$4.document;
	var process$2 = global$4.process;
	var Promise$1 = global$4.Promise;
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$7(global$4, 'queueMicrotask');
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

	var global$3 = global$o;

	var promiseNativeConstructor = global$3.Promise;

	/* global Deno -- Deno case */

	var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

	var IS_DENO$1 = engineIsDeno;
	var IS_NODE$1 = engineIsNode;

	var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
	  && typeof window == 'object'
	  && typeof document == 'object';

	var global$2 = global$o;
	var NativePromiseConstructor$5 = promiseNativeConstructor;
	var isCallable$2 = isCallable$p;
	var isForced = isForced_1;
	var inspectSource = inspectSource$2;
	var wellKnownSymbol = wellKnownSymbol$q;
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

	var aCallable$5 = aCallable$h;

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
	var global$1 = global$o;
	var call$5 = functionCall;
	var defineBuiltIn = defineBuiltIn$8;
	var setToStringTag = setToStringTag$9;
	var setSpecies = setSpecies$2;
	var aCallable$4 = aCallable$h;
	var isCallable$1 = isCallable$p;
	var isObject$2 = isObject$k;
	var anInstance = anInstance$5;
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
	  return isObject$2(it) && isCallable$1(then = it.then) ? then : false;
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
	var aCallable$3 = aCallable$h;
	var newPromiseCapabilityModule$5 = newPromiseCapability$2;
	var perform$4 = perform$6;
	var iterate$3 = iterate$l;
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
	var aCallable$2 = aCallable$h;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;
	var perform$3 = perform$6;
	var iterate$2 = iterate$l;
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

	var anObject = anObject$f;
	var isObject$1 = isObject$k;
	var newPromiseCapability = newPromiseCapability$2;

	var promiseResolve$2 = function (C, x) {
	  anObject(C);
	  if (isObject$1(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$7 = _export;
	var getBuiltIn$2 = getBuiltIn$h;
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
	var aCallable$1 = aCallable$h;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$2 = perform$6;
	var iterate$1 = iterate$l;
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
	var aCallable = aCallable$h;
	var getBuiltIn$1 = getBuiltIn$h;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform$1 = perform$6;
	var iterate = iterate$l;
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
	var fails$2 = fails$x;
	var getBuiltIn = getBuiltIn$h;
	var isCallable = isCallable$p;
	var speciesConstructor = speciesConstructor$2;
	var promiseResolve = promiseResolve$2;

	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!NativePromiseConstructor && fails$2(function () {
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

	var path$4 = path$m;

	var promise$5 = path$4.Promise;

	var parent$e = promise$5;


	var promise$4 = parent$e;

	var parent$d = promise$4;

	var promise$3 = parent$d;

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

	var parent$c = promise$3;

	// TODO: Remove from `core-js@4`




	var promise$2 = parent$c;

	var promise$1 = promise$2;

	var promise = promise$1;

	var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise);

	function isNative(Ctor) {
	  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
	}
	function nextTick$1(cb) {
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
	  } else {
	    setTimeout(function () {
	      return cb();
	    });
	  }
	}

	function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Progress = /*#__PURE__*/function (_Component) {
	  _inherits(Progress, _Component);
	  var _super = _createSuper$d(Progress);
	  function Progress(player, container, desc) {
	    var _this;
	    _classCallCheck(this, Progress);
	    _this = _super.call(this, container, desc);
	    _defineProperty(_assertThisInitialized(_this), "id", 'Progress');
	    _defineProperty(_assertThisInitialized(_this), "mouseX", 0);
	    _defineProperty(_assertThisInitialized(_this), "dotLeft", 0);
	    _this.player = player;
	    _this.initBase();
	    return _this;
	  }
	  _createClass(Progress, [{
	    key: "initBase",
	    value: function initBase() {
	      this.initBaseTemplate();
	      this.initBaseEvent();
	    }
	  }, {
	    key: "initBaseTemplate",
	    value: function initBaseTemplate() {
	      this.dot = $$M('div');
	      this.completedProgress = $$M('div');
	      this.bufferProgress = $$M('div');
	      this.el.append(this.dot, this.completedProgress, this.bufferProgress);
	    }
	  }, {
	    key: "initBaseEvent",
	    value: function initBaseEvent() {
	      var _this2 = this;
	      this.onMouseMove = this.onMouseMove.bind(this);
	      if (this.player.env === 'PC') {
	        this.initBasePCEvent();
	      } else {
	        this.initBaseMobileEvent();
	      }
	      this.on(EVENT.PROGRESS_CLICK, function (dx, ctx) {
	        var scale = dx / _this2.el.clientWidth;
	        if (scale < 0) {
	          scale = 0;
	        } else if (scale > 1) {
	          scale = 1;
	        }
	        _this2.dot.style.left = scale * 100 + '%';
	        _this2.completedProgress.style.width = scale * 100 + '%';
	      });
	      this.on(EVENT.DOT_DRAG, function (dx, ctx) {
	        var scale = (dx + _this2.dotLeft) / _this2.el.clientWidth;
	        if (scale < 0) {
	          scale = 0;
	        } else if (scale > 1) {
	          scale = 1;
	        }
	        _this2.dot.style.left = scale * 100 + '%';
	        _this2.completedProgress.style.width = scale * 100 + '%';
	      });
	    }
	  }, {
	    key: "initBasePCEvent",
	    value: function initBasePCEvent() {
	      var _this3 = this;
	      var ctx = this;
	      this.el.onmouseenter = function (e) {
	        _this3.emit(EVENT.PROGRESS_MOUSE_ENTER, e, ctx);
	      };
	      this.el.onmouseleave = function (e) {
	        _this3.emit(EVENT.PROGRESS_MOUSE_LEAVE, e, ctx);
	      };
	      this.el.onclick = function (e) {
	        e.stopPropagation();
	        if (e.target === _this3.dot) return;
	        _this3.emit(EVENT.PROGRESS_CLICK, e.offsetX, ctx);
	      };
	      this.dot.addEventListener('mousedown', function (e) {
	        e.stopPropagation();
	        _this3.emit(EVENT.DOT_DOWN);
	        _this3.mouseX = e.pageX;
	        // this.dot.style.left是一个百分比如"40.8%，变成px
	        // this.dotLeft = (parseFloat(this.dot.style.left || '0') / 100) * this.el.clientWidth

	        document.body.addEventListener('mousemove', ctx.onMouseMove);
	        document.body.onmouseup = function (e) {
	          _this3.emit(EVENT.DOT_UP, _this3.completedProgress.clientWidth / _this3.el.clientWidth, ctx);
	          document.body.removeEventListener('mousemove', ctx.onMouseMove);
	          document.body.onmouseup = null;
	        };
	      });
	    }
	  }, {
	    key: "initBaseMobileEvent",
	    value: function initBaseMobileEvent() {
	      var _this4 = this;
	      var ctx = this;
	      wrap(this.el).addEventListener('singleTap', function (e) {
	        var dx = e.e.changedTouches[0].clientX - getDOMPoint(_this4.el).x;
	        _this4.emit(EVENT.PROGRESS_CLICK, dx, ctx);
	      });
	      wrap(this.dot).addEventListener('touchstart', function (e) {
	        e.preventDefault();
	        _this4.emit(EVENT.DOT_DOWN);
	        _this4.mouseX = e.touches[0].clientX;
	        // this.dotLeft = this.el.style.left ? parseInt(this.el.style.left) : 0
	        // this.dot.style.left是一个百分比如"40.8%，变成px
	        _this4.dotLeft = _parseFloat$1(_this4.dot.style.left || '0') / 100 * _this4.el.clientWidth;
	        document.body.addEventListener('touchmove', _this4.onMouseMove);
	        document.body.ontouchend = function (e) {
	          _this4.emit(EVENT.DOT_UP, _this4.completedProgress.clientWidth / _this4.el.clientWidth, ctx);
	          document.body.removeEventListener('touchmove', _this4.onMouseMove);
	          document.body.ontouchend = null;
	        };
	      });
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(e) {
	      if (e instanceof MouseEvent) {
	        var dx = e.pageX - this.mouseX;
	        this.emit(EVENT.DOT_DRAG, dx, this);
	      } else {
	        var _dx = e.touches[0].clientX - this.mouseX;
	        this.emit(EVENT.DOT_DRAG, _dx, this);
	      }
	    }
	  }]);
	  return Progress;
	}(Component);

	function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var VideoProgress = /*#__PURE__*/function (_Progress) {
	  _inherits(VideoProgress, _Progress);
	  var _super = _createSuper$c(VideoProgress);
	  function VideoProgress(player, container, desc) {
	    var _this;
	    _classCallCheck(this, VideoProgress);
	    _this = _super.call(this, player, container, desc);
	    _defineProperty(_assertThisInitialized(_this), "id", 'VideoProgress');
	    _defineProperty(_assertThisInitialized(_this), "thumbnailsOptions", null);
	    _defineProperty(_assertThisInitialized(_this), "currentIndex", null);
	    _this.init();
	    return _this;
	  }
	  _createClass(VideoProgress, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      if (this.thumbnailsOptions) {
	        this.initThumbnails();
	      }
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      if (this.player.playerOptions.thumbnails) {
	        this.thumbnailsOptions = _Object$assign({
	          width: 160,
	          height: 90,
	          margin: 0
	        }, this.player.playerOptions.thumbnails);
	      }
	      this.preTime = $$M('div.video-progress-pretime');
	      this.thumbnails = $$M('div.video-progress-thumbnails');
	      this.thumbnails.style.height = this.thumbnailsOptions.height + 'px';
	      this.thumbnails.style.width = this.thumbnailsOptions.width + 'px';
	      this.el.append(this.preTime, this.thumbnails);
	      addClass(this.el, ['video-progress']);
	      addClass(this.dot, ['video-progress-dot', 'video-progress-dot-hidden']);
	      addClass(this.completedProgress, ['video-progress-completed']);
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      if (this.player.env === 'PC') {
	        this.initPCEvent();
	      } else {
	        this.initMobileEvent();
	      }
	      this.on(EVENT.DOT_DRAG, function (dx, ctx) {
	        var scale = (dx + _this2.dotLeft) / _this2.el.clientWidth;
	        if (scale < 0) {
	          scale = 0;
	        } else if (scale > 1) {
	          scale = 1;
	        }
	        _this2.player.emit(EVENT.VIDEO_DOT_DRAG, scale);
	      });

	      // this.on(EVENT.PROGRESS_MOUSE_ENTER, () => {
	      //   removeClass(this.dot, ['video-progress-dot-hidden'])
	      // })

	      // this.on(EVENT.PROGRESS_MOUSE_LEAVE, () => {
	      //   addClass(this.dot, ['video-progress-dot-hidden'])
	      // })

	      this.on(EVENT.DOT_DOWN, function () {
	        _this2.dotLeft = _parseFloat$1(_this2.dot.style.left || '0') / 100 * _this2.el.clientWidth;
	        _this2.player.emit(EVENT.DOT_DOWN);
	      });
	      this.on(EVENT.DOT_UP, function (scale) {
	        _this2.player.emit(EVENT.DOT_UP);
	        _this2.dotLeft = _this2.el.clientWidth * scale;
	        _this2.player.video.currentTime = scale * _this2.player.video.duration;
	      });
	      this.player.video.addEventListener('timeupdate', function (e) {
	        if (_this2.player.enableSeek) {
	          var scale = _this2.player.video.currentTime / _this2.player.video.duration;
	          _this2.dot.style.left = scale * 100 + '%';
	          _this2.completedProgress.style.width = scale * 100 + '%';
	        }
	      });
	    }
	  }, {
	    key: "initPCEvent",
	    value: function initPCEvent() {
	      var _this3 = this;
	      this.el.addEventListener('mouseenter', function (e) {
	        _this3.preTime.style.display = 'block';
	        _this3.thumbnails.style.display = 'block';
	        var left = e.clientX - getDOMPoint(_this3.el).x;
	        _this3.preTime.style.left = left - _this3.preTime.clientWidth / 2 + 'px';
	        var time = formatTime(left / e.currentTarget.clientWidth * _this3.player.video.duration);
	        _this3.preTime.innerText = time;
	      });
	      this.el.addEventListener('mousemove', function (e) {
	        var left = e.clientX - getDOMPoint(_this3.el).x;
	        var time = formatTime(left / e.currentTarget.clientWidth * _this3.player.video.duration);
	        _this3.preTime.style.left = left - _this3.preTime.clientWidth / 2 + 'px';
	        _this3.preTime.innerText = time;
	        if (left - _this3.thumbnails.clientWidth / 2 >= 0) {
	          _this3.thumbnails.style.left = left - _this3.thumbnails.clientWidth / 2 + 'px';
	        } else {
	          _this3.thumbnails.style.left = 0 + 'px';
	        }
	      });
	      this.el.addEventListener('mouseleave', function () {
	        _this3.preTime.style.display = 'none';
	        _this3.thumbnails.style.display = 'none';
	      });
	      this.on(EVENT.PROGRESS_CLICK, function (dx, ctx) {
	        var scale = dx / _this3.el.clientWidth;
	        if (scale < 0) {
	          scale = 0;
	        } else if (scale > 1) {
	          scale = 1;
	        }
	        _this3.player.video.currentTime = scale * _this3.player.video.duration;
	        if (_this3.player.video.paused) {
	          _this3.player.video.play();
	        }
	      });
	      this.on(EVENT.PROGRESS_MOUSE_ENTER, function () {
	        removeClass(_this3.dot, ['video-progress-dot-hidden']);
	      });
	      this.on(EVENT.PROGRESS_MOUSE_LEAVE, function () {
	        addClass(_this3.dot, ['video-progress-dot-hidden']);
	      });
	    }
	  }, {
	    key: "initMobileEvent",
	    value: function initMobileEvent() {
	      var _this4 = this;
	      // 手势左右处于滑动中
	      this.player.on(EVENT.MOVE_HORIZONTAL, function (e) {
	        var dx = e.deltaX;
	        _this4.emit(EVENT.DOT_DRAG, dx, _this4);
	      });

	      // 手势左右滑动结束
	      this.player.on(EVENT.SLIDE_HORIZONTAL, function (e) {
	        if (_this4.player.video.paused) {
	          _this4.player.video.play();
	        }
	        var dx = e.endPos.x - e.startPos.x;
	        var scale = (_this4.dotLeft + dx) / _this4.el.clientWidth;
	        _this4.emit(EVENT.DOT_UP, scale);
	      });
	    }
	  }, {
	    key: "initThumbnails",
	    value: function initThumbnails() {
	      var _this5 = this;
	      this.el.addEventListener('mousemove', function (e) {
	        var time = (e.clientX - getDOMPoint(_this5.el).x) / _this5.el.clientWidth * _this5.player.video.duration;
	        var index = Math.floor(time / _this5.thumbnailsOptions.interval); // 180 / 5

	        if (_this5.currentIndex === null || _this5.currentIndex !== index || index >= _this5.thumbnailsOptions.total) {
	          _this5.currentIndex = index;
	          var y = Math.floor(index / _this5.thumbnailsOptions.col) * _this5.thumbnailsOptions.margin * 2 + _this5.thumbnailsOptions.margin + index * _this5.thumbnailsOptions.height;
	          var x = Math.floor(index % _this5.thumbnailsOptions.col) * _this5.thumbnailsOptions.margin * 2 + _this5.thumbnailsOptions.margin + index * _this5.thumbnailsOptions.width;
	          _this5.thumbnails.style.backgroundImage = "url(".concat(_this5.thumbnailsOptions.source, ")");
	          _this5.thumbnails.style.backgroundPositionX = "-".concat(x, "px");
	          _this5.thumbnails.style.backgroundPositionY = "-".concat(y, "px");
	        }
	      });
	    }
	  }]);
	  return VideoProgress;
	}(Progress);

	function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var MediumBar = /*#__PURE__*/function (_Component) {
	  _inherits(MediumBar, _Component);
	  var _super = _createSuper$b(MediumBar);
	  // el: div.video-mediumbar

	  function MediumBar(player, container, desc) {
	    var _this;
	    _classCallCheck(this, MediumBar);
	    _this = _super.call(this, container, desc);
	    _defineProperty(_assertThisInitialized(_this), "id", 'MediumBar');
	    _this.player = player;
	    _this.init();
	    return _this;
	  }
	  _createClass(MediumBar, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initComponent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.leftArea = $$M('div.video-mediumbar-left');
	      this.mediumArea = $$M('div.video-mediumbar-medium');
	      this.rightArea = $$M('div.video-mediumbar-right');
	      this.el.append(this.leftArea, this.mediumArea, this.rightArea);
	    }
	  }, {
	    key: "initComponent",
	    value: function initComponent() {
	      this.videoProgress = new VideoProgress(this.player, this.el, 'div');
	      this.mediumArea.append(this.videoProgress.el);
	    }
	  }]);
	  return MediumBar;
	}(Component);

	function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var ToolBar = /*#__PURE__*/function (_Component) {
	  _inherits(ToolBar, _Component);
	  var _super = _createSuper$a(ToolBar);
	  function ToolBar(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, ToolBar);
	    _this = _super.call(this, container, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'ToolBar');
	    _defineProperty(_assertThisInitialized(_this), "status", 'hidden');
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
	      addClass(this.el, ['video-toolbar']);
	    }
	  }, {
	    key: "initComponent",
	    value: function initComponent() {
	      // this.progress = new Progress(this.player, this.el, 'div.video-progress')
	      // this.controller = new Controller(this.player, this.el, 'div.video-play')

	      this.mediumbar = new MediumBar(this.player, this.el, 'div.video-mediumbar');
	      this.controller = new Controller(this.player, this.el, 'div.video-bottombar');
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.player.on(EVENT.SHOW_TOOLBAR, function () {
	        _this2.onShowToolBar();
	      });
	      this.player.on(EVENT.HIDE_TOOLBAR, function () {
	        _this2.onHideToolBar();
	      });
	    }
	  }, {
	    key: "onShowToolBar",
	    value: function onShowToolBar() {
	      if (this.timer) {
	        window.clearTimeout(this.timer);
	        this.timer = null;
	      }
	      this.showToolBar();
	    }
	  }, {
	    key: "onHideToolBar",
	    value: function onHideToolBar() {
	      this.hideToolBar();
	    }
	  }, {
	    key: "showToolBar",
	    value: function showToolBar() {
	      var _this3 = this;
	      if (includeClass(this.el, 'video-toolbar-hidden')) {
	        removeClass(this.el, ['video-toolbar-hidden']);
	        this.status = 'show';
	      }
	      this.timer = window.setTimeout(function () {
	        if (!_this3.player.video.paused) _this3.hideToolBar();
	      }, 3000);
	    }
	  }, {
	    key: "hideToolBar",
	    value: function hideToolBar() {
	      if (!includeClass(this.el, 'video-toolbar-hidden') && !this.player.video.paused) {
	        addClass(this.el, ['video-toolbar-hidden']);
	        this.status = 'hidden';
	      }
	    }
	  }]);
	  return ToolBar;
	}(Component);

	function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var TopBar = /*#__PURE__*/function (_Component) {
	  _inherits(TopBar, _Component);
	  var _super = _createSuper$9(TopBar);
	  // 先初始化播放器的默认样式，暂时不考虑用户的自定义样式
	  function TopBar(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, TopBar);
	    _this = _super.call(this, container, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'TopBar');
	    _defineProperty(_assertThisInitialized(_this), "timer", null);
	    _this.player = player;
	    _this.props = props || {};
	    _this.init();
	    return _this;
	  }
	  _createClass(TopBar, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      storeControlComponent(this);
	    }

	    /**
	     * @description 需要注意的是此处元素的class名字是官方用于控制整体toolbar一栏的显示和隐藏
	     */
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-topbar', 'video-topbar-hidden']);
	      this.leftArea = $$M('div.video-topbar-left');
	      this.rightArea = $$M('div.video-topbar-right');
	      this.el.appendChild(this.leftArea);
	      this.el.appendChild(this.rightArea);
	      if (this.player.playerOptions.title) {
	        var title = this.player.playerOptions.title;
	        var titleBox = $$M('div');
	        if (_typeof(title) === 'object') {
	          titleBox.innerText = title.message;
	          if (title.style) {
	            for (var key in title.style) {
	              titleBox[key] = title.style[key];
	            }
	          }
	        } else {
	          titleBox.innerText = title;
	        }
	        this.leftArea.appendChild(titleBox);
	      }
	    }
	  }, {
	    key: "initComponent",
	    value: function initComponent() {
	      var _context,
	        _this2 = this,
	        _context2;
	      this.leftControllers = this.player.playerOptions.leftTopBarControllers || [];
	      this.rightController = this.player.playerOptions.rightTopBarController || [];
	      _forEachInstanceProperty(_context = this.leftControllers).call(_context, function (ControlConstructor) {
	        var instance = new ControlConstructor(_this2.player, _this2.leftArea, 'div');
	        if (!ONCE_COMPONENT_STORE.get(instance.id)) storeControlComponent(instance);
	        _this2[instance.id] = instance;
	      });
	      _forEachInstanceProperty(_context2 = this.rightController).call(_context2, function (ControlConstructor) {
	        var instance = new ControlConstructor(_this2.player, _this2.rightArea, 'div');
	        if (!ONCE_COMPONENT_STORE.get(instance.id)) storeControlComponent(instance);
	        _this2[instance.id] = instance;
	      });
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this3 = this;
	      this.player.on(EVENT.SHOW_TOOLBAR, function () {
	        _this3.onShowToolBar();
	      });
	      this.player.on(EVENT.HIDE_TOOLBAR, function () {
	        _this3.onHideToolBar();
	      });
	    }
	  }, {
	    key: "hideToolBar",
	    value: function hideToolBar() {
	      if (!includeClass(this.el, 'video-topbar-hidden')) {
	        addClass(this.el, ['video-topbar-hidden']);
	      }
	    }
	  }, {
	    key: "showToolBar",
	    value: function showToolBar() {
	      var _this4 = this;
	      if (includeClass(this.el, 'video-topbar-hidden')) {
	        removeClass(this.el, ['video-topbar-hidden']);
	      }
	      this.timer = window.setTimeout(function () {
	        _this4.hideToolBar();
	      }, 3000);
	    }
	  }, {
	    key: "onShowToolBar",
	    value: function onShowToolBar() {
	      if (this.timer) {
	        window.clearTimeout(this.timer);
	        this.timer = null;
	      }
	      this.showToolBar();
	    }
	  }, {
	    key: "onHideToolBar",
	    value: function onHideToolBar() {
	      this.hideToolBar();
	    }
	  }]);
	  return TopBar;
	}(Component);

	var $$2 = _export;
	var toObject = toObject$a;
	var nativeKeys = objectKeys$3;
	var fails$1 = fails$x;

	var FAILS_ON_PRIMITIVES = fails$1(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	$$2({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject(it));
	  }
	});

	var path$3 = path$m;

	var keys$5 = path$3.Object.keys;

	var parent$b = keys$5;

	var keys$4 = parent$b;

	var parent$a = keys$4;

	var keys$3 = parent$a;

	var parent$9 = keys$3;

	var keys$2 = parent$9;

	var keys$1 = keys$2;

	var keys = keys$1;

	var _Object$keys = /*@__PURE__*/getDefaultExportFromCjs(keys);

	var path$2 = path$m;

	var getOwnPropertySymbols$5 = path$2.Object.getOwnPropertySymbols;

	var parent$8 = getOwnPropertySymbols$5;

	var getOwnPropertySymbols$4 = parent$8;

	var parent$7 = getOwnPropertySymbols$4;

	var getOwnPropertySymbols$3 = parent$7;

	var parent$6 = getOwnPropertySymbols$3;

	var getOwnPropertySymbols$2 = parent$6;

	var getOwnPropertySymbols$1 = getOwnPropertySymbols$2;

	var getOwnPropertySymbols = getOwnPropertySymbols$1;

	var _Object$getOwnPropertySymbols = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols);

	var getOwnPropertyDescriptor$6 = {exports: {}};

	var $$1 = _export;
	var fails = fails$x;
	var toIndexedObject$1 = toIndexedObject$a;
	var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$1 = descriptors;

	var FORCED = !DESCRIPTORS$1 || fails(function () { nativeGetOwnPropertyDescriptor(1); });

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	$$1({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS$1 }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
	  }
	});

	var path$1 = path$m;

	var Object$1 = path$1.Object;

	var getOwnPropertyDescriptor$5 = getOwnPropertyDescriptor$6.exports = function getOwnPropertyDescriptor(it, key) {
	  return Object$1.getOwnPropertyDescriptor(it, key);
	};

	if (Object$1.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$5.sham = true;

	var getOwnPropertyDescriptorExports = getOwnPropertyDescriptor$6.exports;

	var parent$5 = getOwnPropertyDescriptorExports;

	var getOwnPropertyDescriptor$4 = parent$5;

	var parent$4 = getOwnPropertyDescriptor$4;

	var getOwnPropertyDescriptor$3 = parent$4;

	var parent$3 = getOwnPropertyDescriptor$3;

	var getOwnPropertyDescriptor$2 = parent$3;

	var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2;

	var getOwnPropertyDescriptor = getOwnPropertyDescriptor$1;

	var _Object$getOwnPropertyDescriptor = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptor);

	var $ = _export;
	var DESCRIPTORS = descriptors;
	var ownKeys$1 = ownKeys$3;
	var toIndexedObject = toIndexedObject$a;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var createProperty = createProperty$6;

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
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

	var path = path$m;

	var getOwnPropertyDescriptors$5 = path.Object.getOwnPropertyDescriptors;

	var parent$2 = getOwnPropertyDescriptors$5;

	var getOwnPropertyDescriptors$4 = parent$2;

	var parent$1 = getOwnPropertyDescriptors$4;

	var getOwnPropertyDescriptors$3 = parent$1;

	var parent = getOwnPropertyDescriptors$3;

	var getOwnPropertyDescriptors$2 = parent;

	var getOwnPropertyDescriptors$1 = getOwnPropertyDescriptors$2;

	var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

	var _Object$getOwnPropertyDescriptors = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptors);

	var PriorityQueue = /*#__PURE__*/function () {
	  function PriorityQueue() {
	    _classCallCheck(this, PriorityQueue);
	    _defineProperty(this, "newestTime", 0);
	    _defineProperty(this, "maxInterval", 5);
	    this.queue = [];
	  }

	  // 清理过期数据
	  _createClass(PriorityQueue, [{
	    key: "removeOutTimeData",
	    value: function removeOutTimeData() {
	      var _context,
	        _this = this;
	      _filterInstanceProperty(_context = this.queue).call(_context, function (value, index) {
	        return _this.newestTime - value.timestamp <= _this.maxInterval;
	      });
	    }

	    // 添加新的数据
	  }, {
	    key: "add",
	    value: function add(data) {
	      this.newestTime = data.timestamp;
	      this.queue.unshift(data);

	      // 清除过期的数据
	      this.removeOutTimeData();
	      return this;
	    }

	    // 直接将数据添加到缓冲队列的末尾
	  }, {
	    key: "push",
	    value: function push(data) {
	      this.queue.push(data);
	      return this;
	    }

	    // 弹出队列的首个数据
	  }, {
	    key: "shift",
	    value: function shift() {
	      return this.queue.shift();
	    }
	  }, {
	    key: "splice",
	    value: function splice(index, number) {
	      var _context2;
	      _spliceInstanceProperty(_context2 = this.queue).call(_context2, index, number);
	      return this;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      while (this.queue.length) {
	        this.queue.pop();
	      }
	      return this;
	    }
	  }, {
	    key: "forEach",
	    value: function forEach(cb) {
	      for (var _index = 0; _index < this.queue.length; _index++) {
	        cb(this.queue[_index], _index);
	      }
	    }
	  }, {
	    key: "length",
	    get: function get() {
	      return this.queue.length;
	    }
	  }]);
	  return PriorityQueue;
	}();

	function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context18, _context19; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _forEachInstanceProperty(_context18 = ownKeys(Object(source), !0)).call(_context18, function (key) { _defineProperty(target, key, source[key]); }) : _Object$getOwnPropertyDescriptors ? Object.defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context19 = ownKeys(Object(source))).call(_context19, function (key) { Object.defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } return target; }
	var Danmaku = /*#__PURE__*/function () {
	  function Danmaku(container, player) {
	    _classCallCheck(this, Danmaku);
	    _defineProperty(this, "moovingQueue", []);
	    _defineProperty(this, "timer", null);
	    _defineProperty(this, "renderInterval", 100);
	    // 每一条弹幕轨道的高度默认为10px
	    _defineProperty(this, "trackHeight", 10);
	    _defineProperty(this, "opacity", 1);
	    _defineProperty(this, "fontSizeScale", 1);
	    _defineProperty(this, "isHidden", false);
	    _defineProperty(this, "isPaused", true);
	    // 弹幕占据屏幕的尺寸，默认占据一半屏幕
	    _defineProperty(this, "showScale", 1 / 2);
	    _defineProperty(this, "defaultDanma", {
	      message: 'default message',
	      fontColor: '#fff',
	      fontSize: this.trackHeight,
	      fontFamily: '',
	      fontWeight: 500
	    });
	    this.queue = new PriorityQueue();
	    this.container = container; // div.video-danmaku-container
	    this.player = player;
	    // 默认的轨道数目占据屏幕的一半
	    this.trackNumber = this.container.clientHeight / 2 / this.trackHeight;
	    this.tracks = new Array(this.container.clientHeight / this.trackHeight);
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
	          priority: 15 - i // 轨道的优先级
	        };
	      }
	    }

	    // 暂停所有的弹幕
	  }, {
	    key: "pause",
	    value: function pause() {
	      var _context,
	        _this = this;
	      this.setPaused(true);
	      _forEachInstanceProperty(_context = this.moovingQueue).call(_context, function (data) {
	        _this.pauseOneData(data);
	      });
	    }

	    // 恢复弹幕的运动,恢复弹幕运动此处的逻辑有问题(已修复)
	  }, {
	    key: "resume",
	    value: function resume() {
	      var _this2 = this,
	        _context2;
	      this.setPaused(false);
	      this.timer = window.setTimeout(function () {
	        _this2.render();
	      }, this.renderInterval);
	      _forEachInstanceProperty(_context2 = this.moovingQueue).call(_context2, function (data) {
	        _this2.resumeOneData(data);
	      });
	    }

	    // 恢复单条弹幕的运动
	  }, {
	    key: "resumeOneData",
	    value: function resumeOneData(data) {
	      data.dom.style.transform = "translateX(-".concat(data.totalDistance, "px)");
	      data.startTime = Date.now();
	      data.rollTime = (data.totalDistance - data.rollDistance) / data.rollSpeed;
	      data.dom.style.transition = "transform ".concat(data.rollTime, "s linear");
	    }

	    // 暂停单条弹幕的运动
	  }, {
	    key: "pauseOneData",
	    value: function pauseOneData(data) {
	      var currentRollDistance = (Date.now() - data.startTime) * data.rollSpeed / 1000;
	      data.rollDistance = currentRollDistance + (data.rollDistance ? data.rollDistance : 0);
	      data.dom.style.transition = '';
	      data.dom.style.transform = "translateX(".concat(-data.rollDistance, "px)");
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
	      this.queue.push(this.parseData(data));

	      // 如果检测到缓冲区弹幕为0,也就是定时器被关闭的话就重新开启定时器
	      // if (flag) return
	      if (this.timer === null) {
	        this.render();
	        // nextTick(() => {
	        //   this.render()
	        // })
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
	          fontWeight: 500,
	          timestamp: this.player.video.currentTime
	        };
	      }
	      if (_typeof(data) === 'object') {
	        if (!data.message || data.message === '') {
	          throw new Error("\u4F20\u5165\u7684\u5F39\u5E55\u6570\u636E".concat(data, "\u4E0D\u5408\u6CD5"));
	        }
	        return _Object$assign(_objectSpread(_objectSpread({}, this.defaultDanma), {}, {
	          timestamp: this.player.video.currentTime
	        }), data);
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
	      var data = this.queue.shift();
	      if (!data.dom) {
	        var dom = $$M('div.video-danmaku-message');
	        dom.innerText = data.message;
	        if (data.fontFamily !== '') {
	          dom.style.fontFamily = data.fontFamily;
	        }
	        dom.style.color = data.fontColor;
	        dom.style.fontSize = data.fontSize * this.fontSizeScale + 'px';
	        dom.style.fontWeight = data.fontWeight + '';
	        dom.style.position = 'absolute';
	        dom.style.left = '100%';
	        dom.style.whiteSpace = 'nowrap';
	        dom.style.willChange = 'transform';
	        dom.style.cursor = 'pointer';
	        dom.style.opacity = this.opacity + '';
	        dom.style.visibility = this.isHidden ? 'hidden' : '';
	        data.dom = dom;
	      }
	      data.dom.style.fontSize = data.fontSize * this.fontSizeScale + 'px';
	      data.dom.style.opacity = this.opacity + '';
	      this.container.appendChild(data.dom);
	      data.totalDistance = this.container.clientWidth + data.dom.clientWidth;
	      data.width = data.dom.clientWidth;
	      // 弹幕的总的位移时间，用于计算弹幕的速度
	      data.rollTime = data.rollTime || Math.floor(data.totalDistance * 0.0058 * (Math.random() * 0.3 + 0.7));
	      // 弹幕的移动速度
	      data.rollSpeed = _parseFloat$1((data.totalDistance / data.rollTime).toFixed(2));
	      // useTracks描述的是该弹幕占用了多少个轨道
	      data.useTracks = Math.ceil(data.dom.clientHeight / this.trackHeight);
	      // 重点，此处数组y的作用是表明该弹幕占的轨道的id数组
	      data.y = [];
	      this.addDataToTrack(data);
	      if (data.y.length === 0) {
	        var _context3;
	        if (_includesInstanceProperty(_context3 = _toConsumableArray(this.container.childNodes)).call(_context3, data.dom)) {
	          this.container.removeChild(data.dom);
	        }
	        this.queue.push(data);
	      } else {
	        data.dom.style.top = data.y[0] * this.trackHeight + 'px';
	        this.startAnimate(data); // 开启弹幕的动画
	      }

	      data.dom.ontransitionstart = function (e) {
	        data.startTime = Date.now();
	      };

	      // data.dom.onmouseenter = () => {
	      //   if (this.isStopped) return
	      //   this.pauseOneData(data)
	      // }

	      // data.dom.onmouseleave = () => {
	      //   if (this.isStopped) return
	      //   this.resumeOneData(data)
	      // }
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
	      // console.log(this.trackNumber)
	      var y = [];
	      for (var i = 0; i < this.trackNumber; i++) {
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
	          var _context4;
	          data.y = y;
	          _forEachInstanceProperty(_context4 = data.y).call(_context4, function (id) {
	            _this4.tracks[id].datas.push(data);
	          });
	          break;
	        }
	      }
	    }
	  }, {
	    key: "removeDataFromTrack",
	    value: function removeDataFromTrack(data) {
	      var _context5,
	        _this5 = this;
	      _forEachInstanceProperty(_context5 = data.y).call(_context5, function (id) {
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
	      // 如果当前是暂停的话则该弹幕不应该开启动画
	      if (this.isPaused || this.player.video.paused) {
	        this.queue.add(data);
	        this.removeDataFromTrack(data);
	        return;
	      }
	      if (this.isHidden) {
	        data.dom.style.visibility = 'hidden';
	      }
	      // moovingQueue中存储的都是在运动中的弹幕
	      this.moovingQueue.push(data);
	      data.dom.style.transform = "translateX(-".concat(data.totalDistance, "px)");
	      data.dom.style.transition = "transform ".concat(data.rollTime, "s linear");
	      data.dom.ontransitionend = function (e) {
	        var _context6;
	        _this6.container.removeChild(data.dom);
	        _this6.removeDataFromTrack(data);
	        var index = _indexOfInstanceProperty(_context6 = _this6.moovingQueue).call(_context6, data);
	        if (index > -1) {
	          var _context7;
	          _spliceInstanceProperty(_context7 = _this6.moovingQueue).call(_context7, index, 1);
	        }
	      };
	    }

	    // 清空所有的弹幕，包括正在运动中的或者还在缓冲区未被释放的
	  }, {
	    key: "flush",
	    value: function flush() {
	      var _context8,
	        _context9,
	        _this7 = this,
	        _context11;
	      console.log('flush');
	      window.clearTimeout(this.timer);
	      this.timer = null;
	      _forEachInstanceProperty(_context8 = this.moovingQueue).call(_context8, function (data) {
	        var _data$dom$parentNode;
	        (_data$dom$parentNode = data.dom.parentNode) === null || _data$dom$parentNode === void 0 ? void 0 : _data$dom$parentNode.removeChild(data.dom);
	        data.dom.ontransitionstart = null;
	        data.dom.ontransitionend = null;
	      });
	      _forEachInstanceProperty(_context9 = this.queue).call(_context9, function (data) {
	        var _context10;
	        if (_includesInstanceProperty(_context10 = _toConsumableArray(_this7.container.children)).call(_context10, data.dom)) {
	          var _data$dom$parentNode2;
	          (_data$dom$parentNode2 = data.dom.parentNode) === null || _data$dom$parentNode2 === void 0 ? void 0 : _data$dom$parentNode2.removeChild(data.dom);
	          data.dom.ontransitionstart = null;
	          data.dom.ontransitionend = null;
	        }
	      });
	      // 清空轨道上的所有数据
	      _forEachInstanceProperty(_context11 = this.tracks).call(_context11, function (obj) {
	        obj.datas = [];
	      });
	      this.moovingQueue = [];
	      this.queue.clear();
	    }

	    // 隐藏所有的弹幕
	  }, {
	    key: "close",
	    value: function close() {
	      var _context12, _context13;
	      this.isHidden = true;
	      _forEachInstanceProperty(_context12 = this.moovingQueue).call(_context12, function (data) {
	        data.dom.style.visibility = 'hidden';
	      });
	      _forEachInstanceProperty(_context13 = this.queue).call(_context13, function (data, index) {
	        if (data.dom) {
	          data.dom.style.visibility = 'hidden';
	        }
	      });
	    }
	  }, {
	    key: "open",
	    value: function open() {
	      var _context14, _context15;
	      this.isHidden = false;
	      _forEachInstanceProperty(_context14 = this.moovingQueue).call(_context14, function (data) {
	        data.dom.style.visibility = '';
	      });
	      _forEachInstanceProperty(_context15 = this.queue).call(_context15, function (data, index) {
	        if (data.dom) {
	          data.dom.style.visibility = '';
	        }
	      });
	    }

	    //* 设置弹幕的透明度
	  }, {
	    key: "setOpacity",
	    value: function setOpacity(opacity) {
	      var _context16;
	      this.opacity = opacity;
	      _forEachInstanceProperty(_context16 = this.moovingQueue).call(_context16, function (data) {
	        data.dom.style.opacity = opacity + '';
	      });
	    }

	    //* 设置弹幕轨道是数目
	  }, {
	    key: "setTrackNumber",
	    value: function setTrackNumber(num) {
	      if (!num) {
	        this.trackNumber = this.container.clientHeight / this.trackHeight * this.showScale;
	        return;
	      }
	      this.showScale = num;
	      this.trackNumber = this.container.clientHeight / this.trackHeight * this.showScale;
	    }
	  }, {
	    key: "setFontSize",
	    value: function setFontSize(scale) {
	      var _context17,
	        _this8 = this;
	      this.fontSizeScale = scale;
	      _forEachInstanceProperty(_context17 = this.moovingQueue).call(_context17, function (data) {
	        data.dom.style.fontSize = data.fontSize * _this8.fontSizeScale + 'px';
	      });
	    }
	  }, {
	    key: "setPaused",
	    value: function setPaused(val) {
	      this.isPaused = val;
	    }

	    // // 丢弃一部分没用或者过时的弹幕
	    // disCard(start: number, end: number) {
	    //   this.queue.splice(start, end - start + 1)
	    // }

	    // clearOutdatedDanmaku(currentTime: number, interval: number) {
	    //   this.queue = this.queue.filter((item) => {
	    //     if (currentTime - item.timestamp > interval) {
	    //       return false
	    //     }
	    //     return true
	    //   })
	    // }
	  }]);
	  return Danmaku;
	}();

	function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var DanmakuOpenClose = /*#__PURE__*/function (_Options) {
	  _inherits(DanmakuOpenClose, _Options);
	  var _super = _createSuper$8(DanmakuOpenClose);
	  function DanmakuOpenClose(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, DanmakuOpenClose);
	    _this = _super.call(this, player, container, 0, 0, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'DanmakuOpenClose');
	    // el: div.video-danmaku-openclose.video-controller
	    _defineProperty(_assertThisInitialized(_this), "danmakuClosePath", danmakuClosePath);
	    _defineProperty(_assertThisInitialized(_this), "danmakuOpenPath", danmakuOpenPath);
	    _defineProperty(_assertThisInitialized(_this), "status", 'open');
	    _defineProperty(_assertThisInitialized(_this), "msg", '关闭弹幕');
	    _this.props = props || {};
	    _this.player = player;
	    _this.init();
	    return _this;
	  }
	  _createClass(DanmakuOpenClose, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-danmaku-openclose', 'video-controller']);
	      // 设置画布大小为1024 * 1024
	      this.icon = createSvg(this.danmakuOpenPath, '0 0 1024 1024');
	      this.iconBox.appendChild(this.icon);
	      this.hideBox.innerText = this.msg;
	      this.hideBox.style.fontSize = '13px';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.iconBox.addEventListener('click', function (e) {
	        e.stopPropagation();
	        if (_this2.status === 'open') {
	          _this2.replaceIcon(createSvg(danmakuClosePath, '0 0 1024 1024'));
	          _this2.status = 'close';
	          _this2.player.emit('closeDanmaku');
	          _this2.msg = '开启弹幕';
	        } else {
	          _this2.replaceIcon(createSvg(danmakuOpenPath, '0 0 1024 1024'));
	          _this2.status = 'open';
	          _this2.player.emit('openDanmaku');
	          _this2.msg = '关闭弹幕';
	        }
	        _this2.hideBox.innerText = _this2.msg;
	      });
	    }
	  }]);
	  return DanmakuOpenClose;
	}(Options);

	function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubsettingsDanmakuOpacity = /*#__PURE__*/function (_SubsettingsBase) {
	  _inherits(SubsettingsDanmakuOpacity, _SubsettingsBase);
	  var _super = _createSuper$7(SubsettingsDanmakuOpacity);
	  function SubsettingsDanmakuOpacity(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsDanmakuOpacity);
	    _this = _super.call(this, subsetting, player);
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubsettingsDanmakuOpacity');
	    // el: div.video-subsettings-danmaku-opacity
	    _defineProperty(_assertThisInitialized(_this), "SubsettingsItem", [{
	      leftIcon: createSvg(leftarrowPath, '0 0 1024 1024'),
	      leftText: '弹幕透明度',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '100%',
	      leftIcon: createSvg(settingsConfirmPath),
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '75%',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '50%',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '0',
	      target: SubsettingsDanmakuMain
	    }]);
	    _this.init();
	    return _this;
	  }
	  _createClass(SubsettingsDanmakuOpacity, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initSubsettingsItem();
	      this.initEvent();
	    }
	  }, {
	    key: "initSubsettingsItem",
	    value: function initSubsettingsItem() {
	      this.initBaseSubsettingsItem();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.el = $$M('div.video-subsettings-danmaku-opacity');
	      this.el.dataset.width = '200';
	      this.el.style.display = 'none';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _context,
	        _this2 = this;
	      _forEachInstanceProperty(_context = this.SubsettingsItem).call(_context, function (item, index) {
	        if (index === 0) return;
	        item.instance.el.onclick = function () {
	          _this2.subsetting.emit('OpacityChange', _parseFloat$1(item.leftText) * 0.01);
	          item.instance.leftIconBox.innerHTML = '';
	          item.instance.leftIconBox.appendChild(createSvg(settingsConfirmPath));
	          for (var i = 1; i < _this2.SubsettingsItem.length; i++) {
	            var another = _this2.SubsettingsItem[i];
	            if (another !== item) {
	              another.instance.leftIconBox.innerHTML = '';
	            }
	          }
	        };
	      });
	    }
	  }]);
	  return SubsettingsDanmakuOpacity;
	}(SubsettingsBase);

	function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubsettingsDanmakuRange = /*#__PURE__*/function (_SubsettingsBase) {
	  _inherits(SubsettingsDanmakuRange, _SubsettingsBase);
	  var _super = _createSuper$6(SubsettingsDanmakuRange);
	  function SubsettingsDanmakuRange(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsDanmakuRange);
	    _this = _super.call(this, subsetting, player);
	    // div.video-subsettings-danmakus-range
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubsettingsDanmakuRange');
	    _defineProperty(_assertThisInitialized(_this), "SubsettingsItem", [{
	      leftIcon: createSvg(leftarrowPath, '0 0 1024 1024'),
	      leftText: '弹幕显示范围',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '1/4',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '半屏',
	      leftIcon: createSvg(settingsConfirmPath),
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '3/4',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '满屏',
	      target: SubsettingsDanmakuMain
	    }]);
	    _this.init();
	    return _this;
	  }
	  _createClass(SubsettingsDanmakuRange, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initSubsettingsItem();
	      this.initEvent();
	    }
	  }, {
	    key: "initSubsettingsItem",
	    value: function initSubsettingsItem() {
	      this.initBaseSubsettingsItem();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.el = $$M('div.video-subsettings-danmaku-range');
	      this.el.dataset.width = '200';
	      this.el.style.display = 'none';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _context,
	        _this2 = this;
	      _forEachInstanceProperty(_context = this.SubsettingsItem).call(_context, function (item, index) {
	        if (index === 0) return;
	        item.instance.el.onclick = function () {
	          _this2.subsetting.emit('RangeChange', item.leftText);
	          item.instance.leftIconBox.innerHTML = '';
	          item.instance.leftIconBox.appendChild(createSvg(settingsConfirmPath));
	          for (var i = 1; i < _this2.SubsettingsItem.length; i++) {
	            var another = _this2.SubsettingsItem[i];
	            if (another !== item) {
	              another.instance.leftIconBox.innerHTML = '';
	            }
	          }
	        };
	      });
	    }
	  }]);
	  return SubsettingsDanmakuRange;
	}(SubsettingsBase);

	function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubsettingsDanmakuSize = /*#__PURE__*/function (_SubsettingsBase) {
	  _inherits(SubsettingsDanmakuSize, _SubsettingsBase);
	  var _super = _createSuper$5(SubsettingsDanmakuSize);
	  function SubsettingsDanmakuSize(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsDanmakuSize);
	    _this = _super.call(this, subsetting, player);
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubsettingsDanmakuSize');
	    // el: div.video-subsettings-danmaku-size
	    _defineProperty(_assertThisInitialized(_this), "SubsettingsItem", [{
	      leftIcon: createSvg(leftarrowPath, '0 0 1024 1024'),
	      leftText: '字体大小',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '极小',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '小',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '适中',
	      leftIcon: createSvg(settingsConfirmPath),
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '大',
	      target: SubsettingsDanmakuMain
	    }, {
	      leftText: '极大',
	      target: SubsettingsDanmakuMain
	    }]);
	    _this.init();
	    return _this;
	  }
	  _createClass(SubsettingsDanmakuSize, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initSubsettingsItem();
	      this.initEvent();
	    }
	  }, {
	    key: "initSubsettingsItem",
	    value: function initSubsettingsItem() {
	      this.initBaseSubsettingsItem();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.el = $$M('div.video-subsettings-danmaku-size');
	      this.el.dataset.width = '200';
	      this.el.style.display = 'none';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _context,
	        _this2 = this;
	      _forEachInstanceProperty(_context = this.SubsettingsItem).call(_context, function (item, index) {
	        if (index === 0) return;
	        item.instance.el.onclick = function () {
	          _this2.subsetting.emit('SizeChange', item.leftText);
	          item.instance.leftIconBox.innerHTML = '';
	          item.instance.leftIconBox.appendChild(createSvg(settingsConfirmPath));
	          for (var i = 1; i < _this2.SubsettingsItem.length; i++) {
	            var another = _this2.SubsettingsItem[i];
	            if (another !== item) {
	              another.instance.leftIconBox.innerHTML = '';
	            }
	          }
	        };
	      });
	    }
	  }]);
	  return SubsettingsDanmakuSize;
	}(SubsettingsBase);

	function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var SubsettingsDanmakuMain = /*#__PURE__*/function (_SubsettingsBase) {
	  _inherits(SubsettingsDanmakuMain, _SubsettingsBase);
	  var _super = _createSuper$4(SubsettingsDanmakuMain);
	  function SubsettingsDanmakuMain(subsetting, player) {
	    var _this;
	    _classCallCheck(this, SubsettingsDanmakuMain);
	    _this = _super.call(this, subsetting, player);
	    _defineProperty(_assertThisInitialized(_this), "id", 'SubsettingsDanmakuMain');
	    // el: div.video-subsettings-danmaku-main
	    _defineProperty(_assertThisInitialized(_this), "SubsettingsItem", [{
	      leftIcon: createSvg(leftarrowPath, '0 0 1024 1024'),
	      leftText: '弹幕设置',
	      target: SubsettingsMain
	    }, {
	      leftText: '弹幕速度',
	      rightTip: '适中',
	      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024')
	    }, {
	      leftText: '弹幕透明度',
	      rightTip: '100%',
	      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024'),
	      target: SubsettingsDanmakuOpacity
	    }, {
	      leftText: '字体大小',
	      rightTip: '适中',
	      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024'),
	      target: SubsettingsDanmakuSize
	    }, {
	      leftText: '显示范围',
	      rightTip: '半屏',
	      rightIcon: createSvg(rightarrowPath, '0 0 1024 1024'),
	      target: SubsettingsDanmakuRange
	    }]);
	    _this.init();
	    return _this;
	  }
	  _createClass(SubsettingsDanmakuMain, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	      this.initSubsettingsItem();
	    }
	  }, {
	    key: "initSubsettingsItem",
	    value: function initSubsettingsItem() {
	      this.initBaseSubsettingsItem();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.el = $$M('div.video-subsettings-danmaku-main');
	      this.el.dataset.width = '250';
	      this.el.style.display = 'none';
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.subsetting.on('OpacityChange', function (opacity) {
	        _this2.player.danmakuController.setOpacity(opacity);
	        _this2.SubsettingsItem[2].instance.rightTipBox.innerText = opacity * 100 + '%';
	      });
	      this.subsetting.on('RangeChange', function (leftText) {
	        var range = null;
	        if (leftText === '满屏') {
	          range = 1;
	        } else if (leftText === '半屏') {
	          range = 1 / 2;
	        } else if (leftText === '1/4') {
	          range = 1 / 4;
	        } else if (leftText === '3/4') {
	          range = 3 / 4;
	        }
	        _this2.player.danmakuController.setTrackNumber(range);
	        _this2.SubsettingsItem[4].instance.rightTipBox.innerText = leftText;
	      });
	      this.subsetting.on('SizeChange', function (leftText) {
	        var size = null;
	        if (leftText === '极小') {
	          size = 0.5;
	        } else if (leftText === '小') {
	          size = 0.75;
	        } else if (leftText === '适中') {
	          size = 1;
	        } else if (leftText === '大') {
	          size = 1.25;
	        } else if (leftText === '极大') {
	          size = 1.5;
	        }
	        _this2.player.danmakuController.setFontSize(size);
	        _this2.SubsettingsItem[3].instance.rightTipBox.innerText = leftText;
	      });
	    }
	  }]);
	  return SubsettingsDanmakuMain;
	}(SubsettingsBase);

	var DanmakuSettings = /*#__PURE__*/function () {
	  function DanmakuSettings(player) {
	    _classCallCheck(this, DanmakuSettings);
	    _defineProperty(this, "id", 'DanmakuSettings');
	    this.player = player;
	    this.init();
	  }
	  _createClass(DanmakuSettings, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.subsettingsMain = SubsettingsMain.instance;
	      this.subsettingsMain.registerSubsettingsItem({
	        leftIcon: createSvgs([danmakuPath$1, danmakuPath$2], '0 0 1024 1024'),
	        leftText: '弹幕设置',
	        rightTip: '更多',
	        rightIcon: createSvg(rightarrowPath, '0 0 1024 1024'),
	        target: SubsettingsDanmakuMain
	      });
	    }
	  }]);
	  return DanmakuSettings;
	}();

	const PACKET_TYPES = Object.create(null); // no Map = no polyfill
	PACKET_TYPES["open"] = "0";
	PACKET_TYPES["close"] = "1";
	PACKET_TYPES["ping"] = "2";
	PACKET_TYPES["pong"] = "3";
	PACKET_TYPES["message"] = "4";
	PACKET_TYPES["upgrade"] = "5";
	PACKET_TYPES["noop"] = "6";
	const PACKET_TYPES_REVERSE = Object.create(null);
	Object.keys(PACKET_TYPES).forEach(key => {
	    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
	});
	const ERROR_PACKET = { type: "error", data: "parser error" };

	const withNativeBlob$1 = typeof Blob === "function" ||
	    (typeof Blob !== "undefined" &&
	        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
	const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
	// ArrayBuffer.isView method is not defined in IE10
	const isView$1 = obj => {
	    return typeof ArrayBuffer.isView === "function"
	        ? ArrayBuffer.isView(obj)
	        : obj && obj.buffer instanceof ArrayBuffer;
	};
	const encodePacket = ({ type, data }, supportsBinary, callback) => {
	    if (withNativeBlob$1 && data instanceof Blob) {
	        if (supportsBinary) {
	            return callback(data);
	        }
	        else {
	            return encodeBlobAsBase64(data, callback);
	        }
	    }
	    else if (withNativeArrayBuffer$2 &&
	        (data instanceof ArrayBuffer || isView$1(data))) {
	        if (supportsBinary) {
	            return callback(data);
	        }
	        else {
	            return encodeBlobAsBase64(new Blob([data]), callback);
	        }
	    }
	    // plain string
	    return callback(PACKET_TYPES[type] + (data || ""));
	};
	const encodeBlobAsBase64 = (data, callback) => {
	    const fileReader = new FileReader();
	    fileReader.onload = function () {
	        const content = fileReader.result.split(",")[1];
	        callback("b" + (content || ""));
	    };
	    return fileReader.readAsDataURL(data);
	};

	// imported from https://github.com/socketio/base64-arraybuffer
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// Use a lookup table to find the index.
	const lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
	for (let i = 0; i < chars.length; i++) {
	    lookup$1[chars.charCodeAt(i)] = i;
	}
	const decode$1 = (base64) => {
	    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
	    if (base64[base64.length - 1] === '=') {
	        bufferLength--;
	        if (base64[base64.length - 2] === '=') {
	            bufferLength--;
	        }
	    }
	    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
	    for (i = 0; i < len; i += 4) {
	        encoded1 = lookup$1[base64.charCodeAt(i)];
	        encoded2 = lookup$1[base64.charCodeAt(i + 1)];
	        encoded3 = lookup$1[base64.charCodeAt(i + 2)];
	        encoded4 = lookup$1[base64.charCodeAt(i + 3)];
	        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }
	    return arraybuffer;
	};

	const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
	const decodePacket = (encodedPacket, binaryType) => {
	    if (typeof encodedPacket !== "string") {
	        return {
	            type: "message",
	            data: mapBinary(encodedPacket, binaryType)
	        };
	    }
	    const type = encodedPacket.charAt(0);
	    if (type === "b") {
	        return {
	            type: "message",
	            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
	        };
	    }
	    const packetType = PACKET_TYPES_REVERSE[type];
	    if (!packetType) {
	        return ERROR_PACKET;
	    }
	    return encodedPacket.length > 1
	        ? {
	            type: PACKET_TYPES_REVERSE[type],
	            data: encodedPacket.substring(1)
	        }
	        : {
	            type: PACKET_TYPES_REVERSE[type]
	        };
	};
	const decodeBase64Packet = (data, binaryType) => {
	    if (withNativeArrayBuffer$1) {
	        const decoded = decode$1(data);
	        return mapBinary(decoded, binaryType);
	    }
	    else {
	        return { base64: true, data }; // fallback for old browsers
	    }
	};
	const mapBinary = (data, binaryType) => {
	    switch (binaryType) {
	        case "blob":
	            return data instanceof ArrayBuffer ? new Blob([data]) : data;
	        case "arraybuffer":
	        default:
	            return data; // assuming the data is already an ArrayBuffer
	    }
	};

	const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
	const encodePayload = (packets, callback) => {
	    // some packets may be added to the array while encoding, so the initial length must be saved
	    const length = packets.length;
	    const encodedPackets = new Array(length);
	    let count = 0;
	    packets.forEach((packet, i) => {
	        // force base64 encoding for binary packets
	        encodePacket(packet, false, encodedPacket => {
	            encodedPackets[i] = encodedPacket;
	            if (++count === length) {
	                callback(encodedPackets.join(SEPARATOR));
	            }
	        });
	    });
	};
	const decodePayload = (encodedPayload, binaryType) => {
	    const encodedPackets = encodedPayload.split(SEPARATOR);
	    const packets = [];
	    for (let i = 0; i < encodedPackets.length; i++) {
	        const decodedPacket = decodePacket(encodedPackets[i], binaryType);
	        packets.push(decodedPacket);
	        if (decodedPacket.type === "error") {
	            break;
	        }
	    }
	    return packets;
	};
	const protocol$1 = 4;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	}

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }

	  // Remove event specific arrays for event types that no
	  // one is subscribed for to avoid memory leak.
	  if (callbacks.length === 0) {
	    delete this._callbacks['$' + event];
	  }

	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};

	  var args = new Array(arguments.length - 1)
	    , callbacks = this._callbacks['$' + event];

	  for (var i = 1; i < arguments.length; i++) {
	    args[i - 1] = arguments[i];
	  }

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	// alias used for reserved events (protected method)
	Emitter.prototype.emitReserved = Emitter.prototype.emit;

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};

	const globalThisShim = (() => {
	    if (typeof self !== "undefined") {
	        return self;
	    }
	    else if (typeof window !== "undefined") {
	        return window;
	    }
	    else {
	        return Function("return this")();
	    }
	})();

	function pick(obj, ...attr) {
	    return attr.reduce((acc, k) => {
	        if (obj.hasOwnProperty(k)) {
	            acc[k] = obj[k];
	        }
	        return acc;
	    }, {});
	}
	// Keep a reference to the real timeout functions so they can be used when overridden
	const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
	const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
	function installTimerFunctions(obj, opts) {
	    if (opts.useNativeTimers) {
	        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
	        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
	    }
	    else {
	        obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
	        obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
	    }
	}
	// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
	const BASE64_OVERHEAD = 1.33;
	// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
	function byteLength(obj) {
	    if (typeof obj === "string") {
	        return utf8Length(obj);
	    }
	    // arraybuffer or blob
	    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
	}
	function utf8Length(str) {
	    let c = 0, length = 0;
	    for (let i = 0, l = str.length; i < l; i++) {
	        c = str.charCodeAt(i);
	        if (c < 0x80) {
	            length += 1;
	        }
	        else if (c < 0x800) {
	            length += 2;
	        }
	        else if (c < 0xd800 || c >= 0xe000) {
	            length += 3;
	        }
	        else {
	            i++;
	            length += 4;
	        }
	    }
	    return length;
	}

	class TransportError extends Error {
	    constructor(reason, description, context) {
	        super(reason);
	        this.description = description;
	        this.context = context;
	        this.type = "TransportError";
	    }
	}
	class Transport extends Emitter {
	    /**
	     * Transport abstract constructor.
	     *
	     * @param {Object} opts - options
	     * @protected
	     */
	    constructor(opts) {
	        super();
	        this.writable = false;
	        installTimerFunctions(this, opts);
	        this.opts = opts;
	        this.query = opts.query;
	        this.socket = opts.socket;
	    }
	    /**
	     * Emits an error.
	     *
	     * @param {String} reason
	     * @param description
	     * @param context - the error context
	     * @return {Transport} for chaining
	     * @protected
	     */
	    onError(reason, description, context) {
	        super.emitReserved("error", new TransportError(reason, description, context));
	        return this;
	    }
	    /**
	     * Opens the transport.
	     */
	    open() {
	        this.readyState = "opening";
	        this.doOpen();
	        return this;
	    }
	    /**
	     * Closes the transport.
	     */
	    close() {
	        if (this.readyState === "opening" || this.readyState === "open") {
	            this.doClose();
	            this.onClose();
	        }
	        return this;
	    }
	    /**
	     * Sends multiple packets.
	     *
	     * @param {Array} packets
	     */
	    send(packets) {
	        if (this.readyState === "open") {
	            this.write(packets);
	        }
	    }
	    /**
	     * Called upon open
	     *
	     * @protected
	     */
	    onOpen() {
	        this.readyState = "open";
	        this.writable = true;
	        super.emitReserved("open");
	    }
	    /**
	     * Called with data.
	     *
	     * @param {String} data
	     * @protected
	     */
	    onData(data) {
	        const packet = decodePacket(data, this.socket.binaryType);
	        this.onPacket(packet);
	    }
	    /**
	     * Called with a decoded packet.
	     *
	     * @protected
	     */
	    onPacket(packet) {
	        super.emitReserved("packet", packet);
	    }
	    /**
	     * Called upon close.
	     *
	     * @protected
	     */
	    onClose(details) {
	        this.readyState = "closed";
	        super.emitReserved("close", details);
	    }
	    /**
	     * Pauses the transport, in order not to lose packets during an upgrade.
	     *
	     * @param onPause
	     */
	    pause(onPause) { }
	}

	// imported from https://github.com/unshiftio/yeast
	const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {};
	let seed = 0, i = 0, prev;
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode$1(num) {
	    let encoded = '';
	    do {
	        encoded = alphabet[num % length] + encoded;
	        num = Math.floor(num / length);
	    } while (num > 0);
	    return encoded;
	}
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	    const now = encode$1(+new Date());
	    if (now !== prev)
	        return seed = 0, prev = now;
	    return now + '.' + encode$1(seed++);
	}
	//
	// Map each character to its index.
	//
	for (; i < length; i++)
	    map[alphabet[i]] = i;

	// imported from https://github.com/galkn/querystring
	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	function encode(obj) {
	    let str = '';
	    for (let i in obj) {
	        if (obj.hasOwnProperty(i)) {
	            if (str.length)
	                str += '&';
	            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	        }
	    }
	    return str;
	}
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	function decode(qs) {
	    let qry = {};
	    let pairs = qs.split('&');
	    for (let i = 0, l = pairs.length; i < l; i++) {
	        let pair = pairs[i].split('=');
	        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	    }
	    return qry;
	}

	// imported from https://github.com/component/has-cors
	let value = false;
	try {
	    value = typeof XMLHttpRequest !== 'undefined' &&
	        'withCredentials' in new XMLHttpRequest();
	}
	catch (err) {
	    // if XMLHttp support is disabled in IE then it will throw
	    // when trying to create
	}
	const hasCORS = value;

	// browser shim for xmlhttprequest module
	function XHR(opts) {
	    const xdomain = opts.xdomain;
	    // XMLHttpRequest can be disabled on IE
	    try {
	        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	            return new XMLHttpRequest();
	        }
	    }
	    catch (e) { }
	    if (!xdomain) {
	        try {
	            return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
	        }
	        catch (e) { }
	    }
	}

	function empty() { }
	const hasXHR2 = (function () {
	    const xhr = new XHR({
	        xdomain: false,
	    });
	    return null != xhr.responseType;
	})();
	class Polling extends Transport {
	    /**
	     * XHR Polling constructor.
	     *
	     * @param {Object} opts
	     * @package
	     */
	    constructor(opts) {
	        super(opts);
	        this.polling = false;
	        if (typeof location !== "undefined") {
	            const isSSL = "https:" === location.protocol;
	            let port = location.port;
	            // some user agents have empty `location.port`
	            if (!port) {
	                port = isSSL ? "443" : "80";
	            }
	            this.xd =
	                (typeof location !== "undefined" &&
	                    opts.hostname !== location.hostname) ||
	                    port !== opts.port;
	            this.xs = opts.secure !== isSSL;
	        }
	        /**
	         * XHR supports binary
	         */
	        const forceBase64 = opts && opts.forceBase64;
	        this.supportsBinary = hasXHR2 && !forceBase64;
	    }
	    get name() {
	        return "polling";
	    }
	    /**
	     * Opens the socket (triggers polling). We write a PING message to determine
	     * when the transport is open.
	     *
	     * @protected
	     */
	    doOpen() {
	        this.poll();
	    }
	    /**
	     * Pauses polling.
	     *
	     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
	     * @package
	     */
	    pause(onPause) {
	        this.readyState = "pausing";
	        const pause = () => {
	            this.readyState = "paused";
	            onPause();
	        };
	        if (this.polling || !this.writable) {
	            let total = 0;
	            if (this.polling) {
	                total++;
	                this.once("pollComplete", function () {
	                    --total || pause();
	                });
	            }
	            if (!this.writable) {
	                total++;
	                this.once("drain", function () {
	                    --total || pause();
	                });
	            }
	        }
	        else {
	            pause();
	        }
	    }
	    /**
	     * Starts polling cycle.
	     *
	     * @private
	     */
	    poll() {
	        this.polling = true;
	        this.doPoll();
	        this.emitReserved("poll");
	    }
	    /**
	     * Overloads onData to detect payloads.
	     *
	     * @protected
	     */
	    onData(data) {
	        const callback = (packet) => {
	            // if its the first message we consider the transport open
	            if ("opening" === this.readyState && packet.type === "open") {
	                this.onOpen();
	            }
	            // if its a close packet, we close the ongoing requests
	            if ("close" === packet.type) {
	                this.onClose({ description: "transport closed by the server" });
	                return false;
	            }
	            // otherwise bypass onData and handle the message
	            this.onPacket(packet);
	        };
	        // decode payload
	        decodePayload(data, this.socket.binaryType).forEach(callback);
	        // if an event did not trigger closing
	        if ("closed" !== this.readyState) {
	            // if we got data we're not polling
	            this.polling = false;
	            this.emitReserved("pollComplete");
	            if ("open" === this.readyState) {
	                this.poll();
	            }
	        }
	    }
	    /**
	     * For polling, send a close packet.
	     *
	     * @protected
	     */
	    doClose() {
	        const close = () => {
	            this.write([{ type: "close" }]);
	        };
	        if ("open" === this.readyState) {
	            close();
	        }
	        else {
	            // in case we're trying to close while
	            // handshaking is in progress (GH-164)
	            this.once("open", close);
	        }
	    }
	    /**
	     * Writes a packets payload.
	     *
	     * @param {Array} packets - data packets
	     * @protected
	     */
	    write(packets) {
	        this.writable = false;
	        encodePayload(packets, (data) => {
	            this.doWrite(data, () => {
	                this.writable = true;
	                this.emitReserved("drain");
	            });
	        });
	    }
	    /**
	     * Generates uri for connection.
	     *
	     * @private
	     */
	    uri() {
	        let query = this.query || {};
	        const schema = this.opts.secure ? "https" : "http";
	        let port = "";
	        // cache busting is forced
	        if (false !== this.opts.timestampRequests) {
	            query[this.opts.timestampParam] = yeast();
	        }
	        if (!this.supportsBinary && !query.sid) {
	            query.b64 = 1;
	        }
	        // avoid port if default for schema
	        if (this.opts.port &&
	            (("https" === schema && Number(this.opts.port) !== 443) ||
	                ("http" === schema && Number(this.opts.port) !== 80))) {
	            port = ":" + this.opts.port;
	        }
	        const encodedQuery = encode(query);
	        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
	        return (schema +
	            "://" +
	            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
	            port +
	            this.opts.path +
	            (encodedQuery.length ? "?" + encodedQuery : ""));
	    }
	    /**
	     * Creates a request.
	     *
	     * @param {String} method
	     * @private
	     */
	    request(opts = {}) {
	        Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
	        return new Request(this.uri(), opts);
	    }
	    /**
	     * Sends data.
	     *
	     * @param {String} data to send.
	     * @param {Function} called upon flush.
	     * @private
	     */
	    doWrite(data, fn) {
	        const req = this.request({
	            method: "POST",
	            data: data,
	        });
	        req.on("success", fn);
	        req.on("error", (xhrStatus, context) => {
	            this.onError("xhr post error", xhrStatus, context);
	        });
	    }
	    /**
	     * Starts a poll cycle.
	     *
	     * @private
	     */
	    doPoll() {
	        const req = this.request();
	        req.on("data", this.onData.bind(this));
	        req.on("error", (xhrStatus, context) => {
	            this.onError("xhr poll error", xhrStatus, context);
	        });
	        this.pollXhr = req;
	    }
	}
	class Request extends Emitter {
	    /**
	     * Request constructor
	     *
	     * @param {Object} options
	     * @package
	     */
	    constructor(uri, opts) {
	        super();
	        installTimerFunctions(this, opts);
	        this.opts = opts;
	        this.method = opts.method || "GET";
	        this.uri = uri;
	        this.async = false !== opts.async;
	        this.data = undefined !== opts.data ? opts.data : null;
	        this.create();
	    }
	    /**
	     * Creates the XHR object and sends the request.
	     *
	     * @private
	     */
	    create() {
	        const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
	        opts.xdomain = !!this.opts.xd;
	        opts.xscheme = !!this.opts.xs;
	        const xhr = (this.xhr = new XHR(opts));
	        try {
	            xhr.open(this.method, this.uri, this.async);
	            try {
	                if (this.opts.extraHeaders) {
	                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
	                    for (let i in this.opts.extraHeaders) {
	                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
	                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
	                        }
	                    }
	                }
	            }
	            catch (e) { }
	            if ("POST" === this.method) {
	                try {
	                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
	                }
	                catch (e) { }
	            }
	            try {
	                xhr.setRequestHeader("Accept", "*/*");
	            }
	            catch (e) { }
	            // ie6 check
	            if ("withCredentials" in xhr) {
	                xhr.withCredentials = this.opts.withCredentials;
	            }
	            if (this.opts.requestTimeout) {
	                xhr.timeout = this.opts.requestTimeout;
	            }
	            xhr.onreadystatechange = () => {
	                if (4 !== xhr.readyState)
	                    return;
	                if (200 === xhr.status || 1223 === xhr.status) {
	                    this.onLoad();
	                }
	                else {
	                    // make sure the `error` event handler that's user-set
	                    // does not throw in the same tick and gets caught here
	                    this.setTimeoutFn(() => {
	                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
	                    }, 0);
	                }
	            };
	            xhr.send(this.data);
	        }
	        catch (e) {
	            // Need to defer since .create() is called directly from the constructor
	            // and thus the 'error' event can only be only bound *after* this exception
	            // occurs.  Therefore, also, we cannot throw here at all.
	            this.setTimeoutFn(() => {
	                this.onError(e);
	            }, 0);
	            return;
	        }
	        if (typeof document !== "undefined") {
	            this.index = Request.requestsCount++;
	            Request.requests[this.index] = this;
	        }
	    }
	    /**
	     * Called upon error.
	     *
	     * @private
	     */
	    onError(err) {
	        this.emitReserved("error", err, this.xhr);
	        this.cleanup(true);
	    }
	    /**
	     * Cleans up house.
	     *
	     * @private
	     */
	    cleanup(fromError) {
	        if ("undefined" === typeof this.xhr || null === this.xhr) {
	            return;
	        }
	        this.xhr.onreadystatechange = empty;
	        if (fromError) {
	            try {
	                this.xhr.abort();
	            }
	            catch (e) { }
	        }
	        if (typeof document !== "undefined") {
	            delete Request.requests[this.index];
	        }
	        this.xhr = null;
	    }
	    /**
	     * Called upon load.
	     *
	     * @private
	     */
	    onLoad() {
	        const data = this.xhr.responseText;
	        if (data !== null) {
	            this.emitReserved("data", data);
	            this.emitReserved("success");
	            this.cleanup();
	        }
	    }
	    /**
	     * Aborts the request.
	     *
	     * @package
	     */
	    abort() {
	        this.cleanup();
	    }
	}
	Request.requestsCount = 0;
	Request.requests = {};
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	if (typeof document !== "undefined") {
	    // @ts-ignore
	    if (typeof attachEvent === "function") {
	        // @ts-ignore
	        attachEvent("onunload", unloadHandler);
	    }
	    else if (typeof addEventListener === "function") {
	        const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
	        addEventListener(terminationEvent, unloadHandler, false);
	    }
	}
	function unloadHandler() {
	    for (let i in Request.requests) {
	        if (Request.requests.hasOwnProperty(i)) {
	            Request.requests[i].abort();
	        }
	    }
	}

	const nextTick = (() => {
	    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
	    if (isPromiseAvailable) {
	        return (cb) => Promise.resolve().then(cb);
	    }
	    else {
	        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
	    }
	})();
	const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
	const usingBrowserWebSocket = true;
	const defaultBinaryType = "arraybuffer";

	// detect ReactNative environment
	const isReactNative = typeof navigator !== "undefined" &&
	    typeof navigator.product === "string" &&
	    navigator.product.toLowerCase() === "reactnative";
	class WS extends Transport {
	    /**
	     * WebSocket transport constructor.
	     *
	     * @param {Object} opts - connection options
	     * @protected
	     */
	    constructor(opts) {
	        super(opts);
	        this.supportsBinary = !opts.forceBase64;
	    }
	    get name() {
	        return "websocket";
	    }
	    doOpen() {
	        if (!this.check()) {
	            // let probe timeout
	            return;
	        }
	        const uri = this.uri();
	        const protocols = this.opts.protocols;
	        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
	        const opts = isReactNative
	            ? {}
	            : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
	        if (this.opts.extraHeaders) {
	            opts.headers = this.opts.extraHeaders;
	        }
	        try {
	            this.ws =
	                usingBrowserWebSocket && !isReactNative
	                    ? protocols
	                        ? new WebSocket(uri, protocols)
	                        : new WebSocket(uri)
	                    : new WebSocket(uri, protocols, opts);
	        }
	        catch (err) {
	            return this.emitReserved("error", err);
	        }
	        this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
	        this.addEventListeners();
	    }
	    /**
	     * Adds event listeners to the socket
	     *
	     * @private
	     */
	    addEventListeners() {
	        this.ws.onopen = () => {
	            if (this.opts.autoUnref) {
	                this.ws._socket.unref();
	            }
	            this.onOpen();
	        };
	        this.ws.onclose = (closeEvent) => this.onClose({
	            description: "websocket connection closed",
	            context: closeEvent,
	        });
	        this.ws.onmessage = (ev) => this.onData(ev.data);
	        this.ws.onerror = (e) => this.onError("websocket error", e);
	    }
	    write(packets) {
	        this.writable = false;
	        // encodePacket efficient as it uses WS framing
	        // no need for encodePayload
	        for (let i = 0; i < packets.length; i++) {
	            const packet = packets[i];
	            const lastPacket = i === packets.length - 1;
	            encodePacket(packet, this.supportsBinary, (data) => {
	                // always create a new object (GH-437)
	                const opts = {};
	                // Sometimes the websocket has already been closed but the browser didn't
	                // have a chance of informing us about it yet, in that case send will
	                // throw an error
	                try {
	                    if (usingBrowserWebSocket) {
	                        // TypeError is thrown when passing the second argument on Safari
	                        this.ws.send(data);
	                    }
	                }
	                catch (e) {
	                }
	                if (lastPacket) {
	                    // fake drain
	                    // defer to next tick to allow Socket to clear writeBuffer
	                    nextTick(() => {
	                        this.writable = true;
	                        this.emitReserved("drain");
	                    }, this.setTimeoutFn);
	                }
	            });
	        }
	    }
	    doClose() {
	        if (typeof this.ws !== "undefined") {
	            this.ws.close();
	            this.ws = null;
	        }
	    }
	    /**
	     * Generates uri for connection.
	     *
	     * @private
	     */
	    uri() {
	        let query = this.query || {};
	        const schema = this.opts.secure ? "wss" : "ws";
	        let port = "";
	        // avoid port if default for schema
	        if (this.opts.port &&
	            (("wss" === schema && Number(this.opts.port) !== 443) ||
	                ("ws" === schema && Number(this.opts.port) !== 80))) {
	            port = ":" + this.opts.port;
	        }
	        // append timestamp to URI
	        if (this.opts.timestampRequests) {
	            query[this.opts.timestampParam] = yeast();
	        }
	        // communicate binary support capabilities
	        if (!this.supportsBinary) {
	            query.b64 = 1;
	        }
	        const encodedQuery = encode(query);
	        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
	        return (schema +
	            "://" +
	            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
	            port +
	            this.opts.path +
	            (encodedQuery.length ? "?" + encodedQuery : ""));
	    }
	    /**
	     * Feature detection for WebSocket.
	     *
	     * @return {Boolean} whether this transport is available.
	     * @private
	     */
	    check() {
	        return !!WebSocket;
	    }
	}

	const transports = {
	    websocket: WS,
	    polling: Polling,
	};

	// imported from https://github.com/galkn/parseuri
	/**
	 * Parses a URI
	 *
	 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
	 *
	 * See:
	 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
	 * - https://caniuse.com/url
	 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
	 *
	 * History of the parse() method:
	 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
	 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
	 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	const parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];
	function parse(str) {
	    const src = str, b = str.indexOf('['), e = str.indexOf(']');
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	    let m = re.exec(str || ''), uri = {}, i = 14;
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	    uri.pathNames = pathNames(uri, uri['path']);
	    uri.queryKey = queryKey(uri, uri['query']);
	    return uri;
	}
	function pathNames(obj, path) {
	    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
	    if (path.slice(0, 1) == '/' || path.length === 0) {
	        names.splice(0, 1);
	    }
	    if (path.slice(-1) == '/') {
	        names.splice(names.length - 1, 1);
	    }
	    return names;
	}
	function queryKey(uri, query) {
	    const data = {};
	    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
	        if ($1) {
	            data[$1] = $2;
	        }
	    });
	    return data;
	}

	let Socket$1 = class Socket extends Emitter {
	    /**
	     * Socket constructor.
	     *
	     * @param {String|Object} uri - uri or options
	     * @param {Object} opts - options
	     */
	    constructor(uri, opts = {}) {
	        super();
	        this.writeBuffer = [];
	        if (uri && "object" === typeof uri) {
	            opts = uri;
	            uri = null;
	        }
	        if (uri) {
	            uri = parse(uri);
	            opts.hostname = uri.host;
	            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
	            opts.port = uri.port;
	            if (uri.query)
	                opts.query = uri.query;
	        }
	        else if (opts.host) {
	            opts.hostname = parse(opts.host).host;
	        }
	        installTimerFunctions(this, opts);
	        this.secure =
	            null != opts.secure
	                ? opts.secure
	                : typeof location !== "undefined" && "https:" === location.protocol;
	        if (opts.hostname && !opts.port) {
	            // if no port is specified manually, use the protocol default
	            opts.port = this.secure ? "443" : "80";
	        }
	        this.hostname =
	            opts.hostname ||
	                (typeof location !== "undefined" ? location.hostname : "localhost");
	        this.port =
	            opts.port ||
	                (typeof location !== "undefined" && location.port
	                    ? location.port
	                    : this.secure
	                        ? "443"
	                        : "80");
	        this.transports = opts.transports || ["polling", "websocket"];
	        this.writeBuffer = [];
	        this.prevBufferLen = 0;
	        this.opts = Object.assign({
	            path: "/engine.io",
	            agent: false,
	            withCredentials: false,
	            upgrade: true,
	            timestampParam: "t",
	            rememberUpgrade: false,
	            addTrailingSlash: true,
	            rejectUnauthorized: true,
	            perMessageDeflate: {
	                threshold: 1024,
	            },
	            transportOptions: {},
	            closeOnBeforeunload: true,
	        }, opts);
	        this.opts.path =
	            this.opts.path.replace(/\/$/, "") +
	                (this.opts.addTrailingSlash ? "/" : "");
	        if (typeof this.opts.query === "string") {
	            this.opts.query = decode(this.opts.query);
	        }
	        // set on handshake
	        this.id = null;
	        this.upgrades = null;
	        this.pingInterval = null;
	        this.pingTimeout = null;
	        // set on heartbeat
	        this.pingTimeoutTimer = null;
	        if (typeof addEventListener === "function") {
	            if (this.opts.closeOnBeforeunload) {
	                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
	                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
	                // closed/reloaded)
	                this.beforeunloadEventListener = () => {
	                    if (this.transport) {
	                        // silently close the transport
	                        this.transport.removeAllListeners();
	                        this.transport.close();
	                    }
	                };
	                addEventListener("beforeunload", this.beforeunloadEventListener, false);
	            }
	            if (this.hostname !== "localhost") {
	                this.offlineEventListener = () => {
	                    this.onClose("transport close", {
	                        description: "network connection lost",
	                    });
	                };
	                addEventListener("offline", this.offlineEventListener, false);
	            }
	        }
	        this.open();
	    }
	    /**
	     * Creates transport of the given type.
	     *
	     * @param {String} name - transport name
	     * @return {Transport}
	     * @private
	     */
	    createTransport(name) {
	        const query = Object.assign({}, this.opts.query);
	        // append engine.io protocol identifier
	        query.EIO = protocol$1;
	        // transport name
	        query.transport = name;
	        // session id if we already have one
	        if (this.id)
	            query.sid = this.id;
	        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
	            query,
	            socket: this,
	            hostname: this.hostname,
	            secure: this.secure,
	            port: this.port,
	        });
	        return new transports[name](opts);
	    }
	    /**
	     * Initializes transport to use and starts probe.
	     *
	     * @private
	     */
	    open() {
	        let transport;
	        if (this.opts.rememberUpgrade &&
	            Socket.priorWebsocketSuccess &&
	            this.transports.indexOf("websocket") !== -1) {
	            transport = "websocket";
	        }
	        else if (0 === this.transports.length) {
	            // Emit error on next tick so it can be listened to
	            this.setTimeoutFn(() => {
	                this.emitReserved("error", "No transports available");
	            }, 0);
	            return;
	        }
	        else {
	            transport = this.transports[0];
	        }
	        this.readyState = "opening";
	        // Retry with the next transport if the transport is disabled (jsonp: false)
	        try {
	            transport = this.createTransport(transport);
	        }
	        catch (e) {
	            this.transports.shift();
	            this.open();
	            return;
	        }
	        transport.open();
	        this.setTransport(transport);
	    }
	    /**
	     * Sets the current transport. Disables the existing one (if any).
	     *
	     * @private
	     */
	    setTransport(transport) {
	        if (this.transport) {
	            this.transport.removeAllListeners();
	        }
	        // set up transport
	        this.transport = transport;
	        // set up transport listeners
	        transport
	            .on("drain", this.onDrain.bind(this))
	            .on("packet", this.onPacket.bind(this))
	            .on("error", this.onError.bind(this))
	            .on("close", (reason) => this.onClose("transport close", reason));
	    }
	    /**
	     * Probes a transport.
	     *
	     * @param {String} name - transport name
	     * @private
	     */
	    probe(name) {
	        let transport = this.createTransport(name);
	        let failed = false;
	        Socket.priorWebsocketSuccess = false;
	        const onTransportOpen = () => {
	            if (failed)
	                return;
	            transport.send([{ type: "ping", data: "probe" }]);
	            transport.once("packet", (msg) => {
	                if (failed)
	                    return;
	                if ("pong" === msg.type && "probe" === msg.data) {
	                    this.upgrading = true;
	                    this.emitReserved("upgrading", transport);
	                    if (!transport)
	                        return;
	                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
	                    this.transport.pause(() => {
	                        if (failed)
	                            return;
	                        if ("closed" === this.readyState)
	                            return;
	                        cleanup();
	                        this.setTransport(transport);
	                        transport.send([{ type: "upgrade" }]);
	                        this.emitReserved("upgrade", transport);
	                        transport = null;
	                        this.upgrading = false;
	                        this.flush();
	                    });
	                }
	                else {
	                    const err = new Error("probe error");
	                    // @ts-ignore
	                    err.transport = transport.name;
	                    this.emitReserved("upgradeError", err);
	                }
	            });
	        };
	        function freezeTransport() {
	            if (failed)
	                return;
	            // Any callback called by transport should be ignored since now
	            failed = true;
	            cleanup();
	            transport.close();
	            transport = null;
	        }
	        // Handle any error that happens while probing
	        const onerror = (err) => {
	            const error = new Error("probe error: " + err);
	            // @ts-ignore
	            error.transport = transport.name;
	            freezeTransport();
	            this.emitReserved("upgradeError", error);
	        };
	        function onTransportClose() {
	            onerror("transport closed");
	        }
	        // When the socket is closed while we're probing
	        function onclose() {
	            onerror("socket closed");
	        }
	        // When the socket is upgraded while we're probing
	        function onupgrade(to) {
	            if (transport && to.name !== transport.name) {
	                freezeTransport();
	            }
	        }
	        // Remove all listeners on the transport and on self
	        const cleanup = () => {
	            transport.removeListener("open", onTransportOpen);
	            transport.removeListener("error", onerror);
	            transport.removeListener("close", onTransportClose);
	            this.off("close", onclose);
	            this.off("upgrading", onupgrade);
	        };
	        transport.once("open", onTransportOpen);
	        transport.once("error", onerror);
	        transport.once("close", onTransportClose);
	        this.once("close", onclose);
	        this.once("upgrading", onupgrade);
	        transport.open();
	    }
	    /**
	     * Called when connection is deemed open.
	     *
	     * @private
	     */
	    onOpen() {
	        this.readyState = "open";
	        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
	        this.emitReserved("open");
	        this.flush();
	        // we check for `readyState` in case an `open`
	        // listener already closed the socket
	        if ("open" === this.readyState && this.opts.upgrade) {
	            let i = 0;
	            const l = this.upgrades.length;
	            for (; i < l; i++) {
	                this.probe(this.upgrades[i]);
	            }
	        }
	    }
	    /**
	     * Handles a packet.
	     *
	     * @private
	     */
	    onPacket(packet) {
	        if ("opening" === this.readyState ||
	            "open" === this.readyState ||
	            "closing" === this.readyState) {
	            this.emitReserved("packet", packet);
	            // Socket is live - any packet counts
	            this.emitReserved("heartbeat");
	            switch (packet.type) {
	                case "open":
	                    this.onHandshake(JSON.parse(packet.data));
	                    break;
	                case "ping":
	                    this.resetPingTimeout();
	                    this.sendPacket("pong");
	                    this.emitReserved("ping");
	                    this.emitReserved("pong");
	                    break;
	                case "error":
	                    const err = new Error("server error");
	                    // @ts-ignore
	                    err.code = packet.data;
	                    this.onError(err);
	                    break;
	                case "message":
	                    this.emitReserved("data", packet.data);
	                    this.emitReserved("message", packet.data);
	                    break;
	            }
	        }
	    }
	    /**
	     * Called upon handshake completion.
	     *
	     * @param {Object} data - handshake obj
	     * @private
	     */
	    onHandshake(data) {
	        this.emitReserved("handshake", data);
	        this.id = data.sid;
	        this.transport.query.sid = data.sid;
	        this.upgrades = this.filterUpgrades(data.upgrades);
	        this.pingInterval = data.pingInterval;
	        this.pingTimeout = data.pingTimeout;
	        this.maxPayload = data.maxPayload;
	        this.onOpen();
	        // In case open handler closes socket
	        if ("closed" === this.readyState)
	            return;
	        this.resetPingTimeout();
	    }
	    /**
	     * Sets and resets ping timeout timer based on server pings.
	     *
	     * @private
	     */
	    resetPingTimeout() {
	        this.clearTimeoutFn(this.pingTimeoutTimer);
	        this.pingTimeoutTimer = this.setTimeoutFn(() => {
	            this.onClose("ping timeout");
	        }, this.pingInterval + this.pingTimeout);
	        if (this.opts.autoUnref) {
	            this.pingTimeoutTimer.unref();
	        }
	    }
	    /**
	     * Called on `drain` event
	     *
	     * @private
	     */
	    onDrain() {
	        this.writeBuffer.splice(0, this.prevBufferLen);
	        // setting prevBufferLen = 0 is very important
	        // for example, when upgrading, upgrade packet is sent over,
	        // and a nonzero prevBufferLen could cause problems on `drain`
	        this.prevBufferLen = 0;
	        if (0 === this.writeBuffer.length) {
	            this.emitReserved("drain");
	        }
	        else {
	            this.flush();
	        }
	    }
	    /**
	     * Flush write buffers.
	     *
	     * @private
	     */
	    flush() {
	        if ("closed" !== this.readyState &&
	            this.transport.writable &&
	            !this.upgrading &&
	            this.writeBuffer.length) {
	            const packets = this.getWritablePackets();
	            this.transport.send(packets);
	            // keep track of current length of writeBuffer
	            // splice writeBuffer and callbackBuffer on `drain`
	            this.prevBufferLen = packets.length;
	            this.emitReserved("flush");
	        }
	    }
	    /**
	     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
	     * long-polling)
	     *
	     * @private
	     */
	    getWritablePackets() {
	        const shouldCheckPayloadSize = this.maxPayload &&
	            this.transport.name === "polling" &&
	            this.writeBuffer.length > 1;
	        if (!shouldCheckPayloadSize) {
	            return this.writeBuffer;
	        }
	        let payloadSize = 1; // first packet type
	        for (let i = 0; i < this.writeBuffer.length; i++) {
	            const data = this.writeBuffer[i].data;
	            if (data) {
	                payloadSize += byteLength(data);
	            }
	            if (i > 0 && payloadSize > this.maxPayload) {
	                return this.writeBuffer.slice(0, i);
	            }
	            payloadSize += 2; // separator + packet type
	        }
	        return this.writeBuffer;
	    }
	    /**
	     * Sends a message.
	     *
	     * @param {String} msg - message.
	     * @param {Object} options.
	     * @param {Function} callback function.
	     * @return {Socket} for chaining.
	     */
	    write(msg, options, fn) {
	        this.sendPacket("message", msg, options, fn);
	        return this;
	    }
	    send(msg, options, fn) {
	        this.sendPacket("message", msg, options, fn);
	        return this;
	    }
	    /**
	     * Sends a packet.
	     *
	     * @param {String} type: packet type.
	     * @param {String} data.
	     * @param {Object} options.
	     * @param {Function} fn - callback function.
	     * @private
	     */
	    sendPacket(type, data, options, fn) {
	        if ("function" === typeof data) {
	            fn = data;
	            data = undefined;
	        }
	        if ("function" === typeof options) {
	            fn = options;
	            options = null;
	        }
	        if ("closing" === this.readyState || "closed" === this.readyState) {
	            return;
	        }
	        options = options || {};
	        options.compress = false !== options.compress;
	        const packet = {
	            type: type,
	            data: data,
	            options: options,
	        };
	        this.emitReserved("packetCreate", packet);
	        this.writeBuffer.push(packet);
	        if (fn)
	            this.once("flush", fn);
	        this.flush();
	    }
	    /**
	     * Closes the connection.
	     */
	    close() {
	        const close = () => {
	            this.onClose("forced close");
	            this.transport.close();
	        };
	        const cleanupAndClose = () => {
	            this.off("upgrade", cleanupAndClose);
	            this.off("upgradeError", cleanupAndClose);
	            close();
	        };
	        const waitForUpgrade = () => {
	            // wait for upgrade to finish since we can't send packets while pausing a transport
	            this.once("upgrade", cleanupAndClose);
	            this.once("upgradeError", cleanupAndClose);
	        };
	        if ("opening" === this.readyState || "open" === this.readyState) {
	            this.readyState = "closing";
	            if (this.writeBuffer.length) {
	                this.once("drain", () => {
	                    if (this.upgrading) {
	                        waitForUpgrade();
	                    }
	                    else {
	                        close();
	                    }
	                });
	            }
	            else if (this.upgrading) {
	                waitForUpgrade();
	            }
	            else {
	                close();
	            }
	        }
	        return this;
	    }
	    /**
	     * Called upon transport error
	     *
	     * @private
	     */
	    onError(err) {
	        Socket.priorWebsocketSuccess = false;
	        this.emitReserved("error", err);
	        this.onClose("transport error", err);
	    }
	    /**
	     * Called upon transport close.
	     *
	     * @private
	     */
	    onClose(reason, description) {
	        if ("opening" === this.readyState ||
	            "open" === this.readyState ||
	            "closing" === this.readyState) {
	            // clear timers
	            this.clearTimeoutFn(this.pingTimeoutTimer);
	            // stop event from firing again for transport
	            this.transport.removeAllListeners("close");
	            // ensure transport won't stay open
	            this.transport.close();
	            // ignore further transport communication
	            this.transport.removeAllListeners();
	            if (typeof removeEventListener === "function") {
	                removeEventListener("beforeunload", this.beforeunloadEventListener, false);
	                removeEventListener("offline", this.offlineEventListener, false);
	            }
	            // set ready state
	            this.readyState = "closed";
	            // clear session id
	            this.id = null;
	            // emit close event
	            this.emitReserved("close", reason, description);
	            // clean buffers after, so users can still
	            // grab the buffers on `close` event
	            this.writeBuffer = [];
	            this.prevBufferLen = 0;
	        }
	    }
	    /**
	     * Filters upgrades, returning only those matching client transports.
	     *
	     * @param {Array} upgrades - server upgrades
	     * @private
	     */
	    filterUpgrades(upgrades) {
	        const filteredUpgrades = [];
	        let i = 0;
	        const j = upgrades.length;
	        for (; i < j; i++) {
	            if (~this.transports.indexOf(upgrades[i]))
	                filteredUpgrades.push(upgrades[i]);
	        }
	        return filteredUpgrades;
	    }
	};
	Socket$1.protocol = protocol$1;

	/**
	 * URL parser.
	 *
	 * @param uri - url
	 * @param path - the request path of the connection
	 * @param loc - An object meant to mimic window.location.
	 *        Defaults to window.location.
	 * @public
	 */
	function url(uri, path = "", loc) {
	    let obj = uri;
	    // default to window.location
	    loc = loc || (typeof location !== "undefined" && location);
	    if (null == uri)
	        uri = loc.protocol + "//" + loc.host;
	    // relative path support
	    if (typeof uri === "string") {
	        if ("/" === uri.charAt(0)) {
	            if ("/" === uri.charAt(1)) {
	                uri = loc.protocol + uri;
	            }
	            else {
	                uri = loc.host + uri;
	            }
	        }
	        if (!/^(https?|wss?):\/\//.test(uri)) {
	            if ("undefined" !== typeof loc) {
	                uri = loc.protocol + "//" + uri;
	            }
	            else {
	                uri = "https://" + uri;
	            }
	        }
	        // parse
	        obj = parse(uri);
	    }
	    // make sure we treat `localhost:80` and `localhost` equally
	    if (!obj.port) {
	        if (/^(http|ws)$/.test(obj.protocol)) {
	            obj.port = "80";
	        }
	        else if (/^(http|ws)s$/.test(obj.protocol)) {
	            obj.port = "443";
	        }
	    }
	    obj.path = obj.path || "/";
	    const ipv6 = obj.host.indexOf(":") !== -1;
	    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
	    // define unique id
	    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
	    // define href
	    obj.href =
	        obj.protocol +
	            "://" +
	            host +
	            (loc && loc.port === obj.port ? "" : ":" + obj.port);
	    return obj;
	}

	const withNativeArrayBuffer = typeof ArrayBuffer === "function";
	const isView = (obj) => {
	    return typeof ArrayBuffer.isView === "function"
	        ? ArrayBuffer.isView(obj)
	        : obj.buffer instanceof ArrayBuffer;
	};
	const toString = Object.prototype.toString;
	const withNativeBlob = typeof Blob === "function" ||
	    (typeof Blob !== "undefined" &&
	        toString.call(Blob) === "[object BlobConstructor]");
	const withNativeFile = typeof File === "function" ||
	    (typeof File !== "undefined" &&
	        toString.call(File) === "[object FileConstructor]");
	/**
	 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
	 *
	 * @private
	 */
	function isBinary(obj) {
	    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
	        (withNativeBlob && obj instanceof Blob) ||
	        (withNativeFile && obj instanceof File));
	}
	function hasBinary(obj, toJSON) {
	    if (!obj || typeof obj !== "object") {
	        return false;
	    }
	    if (Array.isArray(obj)) {
	        for (let i = 0, l = obj.length; i < l; i++) {
	            if (hasBinary(obj[i])) {
	                return true;
	            }
	        }
	        return false;
	    }
	    if (isBinary(obj)) {
	        return true;
	    }
	    if (obj.toJSON &&
	        typeof obj.toJSON === "function" &&
	        arguments.length === 1) {
	        return hasBinary(obj.toJSON(), true);
	    }
	    for (const key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
	            return true;
	        }
	    }
	    return false;
	}

	/**
	 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @public
	 */
	function deconstructPacket(packet) {
	    const buffers = [];
	    const packetData = packet.data;
	    const pack = packet;
	    pack.data = _deconstructPacket(packetData, buffers);
	    pack.attachments = buffers.length; // number of binary 'attachments'
	    return { packet: pack, buffers: buffers };
	}
	function _deconstructPacket(data, buffers) {
	    if (!data)
	        return data;
	    if (isBinary(data)) {
	        const placeholder = { _placeholder: true, num: buffers.length };
	        buffers.push(data);
	        return placeholder;
	    }
	    else if (Array.isArray(data)) {
	        const newData = new Array(data.length);
	        for (let i = 0; i < data.length; i++) {
	            newData[i] = _deconstructPacket(data[i], buffers);
	        }
	        return newData;
	    }
	    else if (typeof data === "object" && !(data instanceof Date)) {
	        const newData = {};
	        for (const key in data) {
	            if (Object.prototype.hasOwnProperty.call(data, key)) {
	                newData[key] = _deconstructPacket(data[key], buffers);
	            }
	        }
	        return newData;
	    }
	    return data;
	}
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @public
	 */
	function reconstructPacket(packet, buffers) {
	    packet.data = _reconstructPacket(packet.data, buffers);
	    delete packet.attachments; // no longer useful
	    return packet;
	}
	function _reconstructPacket(data, buffers) {
	    if (!data)
	        return data;
	    if (data && data._placeholder === true) {
	        const isIndexValid = typeof data.num === "number" &&
	            data.num >= 0 &&
	            data.num < buffers.length;
	        if (isIndexValid) {
	            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
	        }
	        else {
	            throw new Error("illegal attachments");
	        }
	    }
	    else if (Array.isArray(data)) {
	        for (let i = 0; i < data.length; i++) {
	            data[i] = _reconstructPacket(data[i], buffers);
	        }
	    }
	    else if (typeof data === "object") {
	        for (const key in data) {
	            if (Object.prototype.hasOwnProperty.call(data, key)) {
	                data[key] = _reconstructPacket(data[key], buffers);
	            }
	        }
	    }
	    return data;
	}

	/**
	 * These strings must not be used as event names, as they have a special meaning.
	 */
	const RESERVED_EVENTS$1 = [
	    "connect",
	    "connect_error",
	    "disconnect",
	    "disconnecting",
	    "newListener",
	    "removeListener", // used by the Node.js EventEmitter
	];
	/**
	 * Protocol version.
	 *
	 * @public
	 */
	const protocol = 5;
	var PacketType;
	(function (PacketType) {
	    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
	    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
	    PacketType[PacketType["EVENT"] = 2] = "EVENT";
	    PacketType[PacketType["ACK"] = 3] = "ACK";
	    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
	    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
	    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
	})(PacketType || (PacketType = {}));
	/**
	 * A socket.io Encoder instance
	 */
	class Encoder {
	    /**
	     * Encoder constructor
	     *
	     * @param {function} replacer - custom replacer to pass down to JSON.parse
	     */
	    constructor(replacer) {
	        this.replacer = replacer;
	    }
	    /**
	     * Encode a packet as a single string if non-binary, or as a
	     * buffer sequence, depending on packet type.
	     *
	     * @param {Object} obj - packet object
	     */
	    encode(obj) {
	        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
	            if (hasBinary(obj)) {
	                return this.encodeAsBinary({
	                    type: obj.type === PacketType.EVENT
	                        ? PacketType.BINARY_EVENT
	                        : PacketType.BINARY_ACK,
	                    nsp: obj.nsp,
	                    data: obj.data,
	                    id: obj.id,
	                });
	            }
	        }
	        return [this.encodeAsString(obj)];
	    }
	    /**
	     * Encode packet as string.
	     */
	    encodeAsString(obj) {
	        // first is type
	        let str = "" + obj.type;
	        // attachments if we have them
	        if (obj.type === PacketType.BINARY_EVENT ||
	            obj.type === PacketType.BINARY_ACK) {
	            str += obj.attachments + "-";
	        }
	        // if we have a namespace other than `/`
	        // we append it followed by a comma `,`
	        if (obj.nsp && "/" !== obj.nsp) {
	            str += obj.nsp + ",";
	        }
	        // immediately followed by the id
	        if (null != obj.id) {
	            str += obj.id;
	        }
	        // json data
	        if (null != obj.data) {
	            str += JSON.stringify(obj.data, this.replacer);
	        }
	        return str;
	    }
	    /**
	     * Encode packet as 'buffer sequence' by removing blobs, and
	     * deconstructing packet into object with placeholders and
	     * a list of buffers.
	     */
	    encodeAsBinary(obj) {
	        const deconstruction = deconstructPacket(obj);
	        const pack = this.encodeAsString(deconstruction.packet);
	        const buffers = deconstruction.buffers;
	        buffers.unshift(pack); // add packet info to beginning of data list
	        return buffers; // write all the buffers
	    }
	}
	// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
	function isObject(value) {
	    return Object.prototype.toString.call(value) === "[object Object]";
	}
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 */
	class Decoder extends Emitter {
	    /**
	     * Decoder constructor
	     *
	     * @param {function} reviver - custom reviver to pass down to JSON.stringify
	     */
	    constructor(reviver) {
	        super();
	        this.reviver = reviver;
	    }
	    /**
	     * Decodes an encoded packet string into packet JSON.
	     *
	     * @param {String} obj - encoded packet
	     */
	    add(obj) {
	        let packet;
	        if (typeof obj === "string") {
	            if (this.reconstructor) {
	                throw new Error("got plaintext data when reconstructing a packet");
	            }
	            packet = this.decodeString(obj);
	            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
	            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
	                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
	                // binary packet's json
	                this.reconstructor = new BinaryReconstructor(packet);
	                // no attachments, labeled binary but no binary data to follow
	                if (packet.attachments === 0) {
	                    super.emitReserved("decoded", packet);
	                }
	            }
	            else {
	                // non-binary full packet
	                super.emitReserved("decoded", packet);
	            }
	        }
	        else if (isBinary(obj) || obj.base64) {
	            // raw binary data
	            if (!this.reconstructor) {
	                throw new Error("got binary data when not reconstructing a packet");
	            }
	            else {
	                packet = this.reconstructor.takeBinaryData(obj);
	                if (packet) {
	                    // received final buffer
	                    this.reconstructor = null;
	                    super.emitReserved("decoded", packet);
	                }
	            }
	        }
	        else {
	            throw new Error("Unknown type: " + obj);
	        }
	    }
	    /**
	     * Decode a packet String (JSON data)
	     *
	     * @param {String} str
	     * @return {Object} packet
	     */
	    decodeString(str) {
	        let i = 0;
	        // look up type
	        const p = {
	            type: Number(str.charAt(0)),
	        };
	        if (PacketType[p.type] === undefined) {
	            throw new Error("unknown packet type " + p.type);
	        }
	        // look up attachments if type binary
	        if (p.type === PacketType.BINARY_EVENT ||
	            p.type === PacketType.BINARY_ACK) {
	            const start = i + 1;
	            while (str.charAt(++i) !== "-" && i != str.length) { }
	            const buf = str.substring(start, i);
	            if (buf != Number(buf) || str.charAt(i) !== "-") {
	                throw new Error("Illegal attachments");
	            }
	            p.attachments = Number(buf);
	        }
	        // look up namespace (if any)
	        if ("/" === str.charAt(i + 1)) {
	            const start = i + 1;
	            while (++i) {
	                const c = str.charAt(i);
	                if ("," === c)
	                    break;
	                if (i === str.length)
	                    break;
	            }
	            p.nsp = str.substring(start, i);
	        }
	        else {
	            p.nsp = "/";
	        }
	        // look up id
	        const next = str.charAt(i + 1);
	        if ("" !== next && Number(next) == next) {
	            const start = i + 1;
	            while (++i) {
	                const c = str.charAt(i);
	                if (null == c || Number(c) != c) {
	                    --i;
	                    break;
	                }
	                if (i === str.length)
	                    break;
	            }
	            p.id = Number(str.substring(start, i + 1));
	        }
	        // look up json data
	        if (str.charAt(++i)) {
	            const payload = this.tryParse(str.substr(i));
	            if (Decoder.isPayloadValid(p.type, payload)) {
	                p.data = payload;
	            }
	            else {
	                throw new Error("invalid payload");
	            }
	        }
	        return p;
	    }
	    tryParse(str) {
	        try {
	            return JSON.parse(str, this.reviver);
	        }
	        catch (e) {
	            return false;
	        }
	    }
	    static isPayloadValid(type, payload) {
	        switch (type) {
	            case PacketType.CONNECT:
	                return isObject(payload);
	            case PacketType.DISCONNECT:
	                return payload === undefined;
	            case PacketType.CONNECT_ERROR:
	                return typeof payload === "string" || isObject(payload);
	            case PacketType.EVENT:
	            case PacketType.BINARY_EVENT:
	                return (Array.isArray(payload) &&
	                    (typeof payload[0] === "number" ||
	                        (typeof payload[0] === "string" &&
	                            RESERVED_EVENTS$1.indexOf(payload[0]) === -1)));
	            case PacketType.ACK:
	            case PacketType.BINARY_ACK:
	                return Array.isArray(payload);
	        }
	    }
	    /**
	     * Deallocates a parser's resources
	     */
	    destroy() {
	        if (this.reconstructor) {
	            this.reconstructor.finishedReconstruction();
	            this.reconstructor = null;
	        }
	    }
	}
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 */
	class BinaryReconstructor {
	    constructor(packet) {
	        this.packet = packet;
	        this.buffers = [];
	        this.reconPack = packet;
	    }
	    /**
	     * Method to be called when binary data received from connection
	     * after a BINARY_EVENT packet.
	     *
	     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	     * @return {null | Object} returns null if more binary data is expected or
	     *   a reconstructed packet object if all buffers have been received.
	     */
	    takeBinaryData(binData) {
	        this.buffers.push(binData);
	        if (this.buffers.length === this.reconPack.attachments) {
	            // done with buffer list
	            const packet = reconstructPacket(this.reconPack, this.buffers);
	            this.finishedReconstruction();
	            return packet;
	        }
	        return null;
	    }
	    /**
	     * Cleans up binary packet reconstruction variables.
	     */
	    finishedReconstruction() {
	        this.reconPack = null;
	        this.buffers = [];
	    }
	}

	var parser = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Decoder: Decoder,
		Encoder: Encoder,
		get PacketType () { return PacketType; },
		protocol: protocol
	});

	function on(obj, ev, fn) {
	    obj.on(ev, fn);
	    return function subDestroy() {
	        obj.off(ev, fn);
	    };
	}

	/**
	 * Internal events.
	 * These events can't be emitted by the user.
	 */
	const RESERVED_EVENTS = Object.freeze({
	    connect: 1,
	    connect_error: 1,
	    disconnect: 1,
	    disconnecting: 1,
	    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
	    newListener: 1,
	    removeListener: 1,
	});
	/**
	 * A Socket is the fundamental class for interacting with the server.
	 *
	 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
	 *
	 * @example
	 * const socket = io();
	 *
	 * socket.on("connect", () => {
	 *   console.log("connected");
	 * });
	 *
	 * // send an event to the server
	 * socket.emit("foo", "bar");
	 *
	 * socket.on("foobar", () => {
	 *   // an event was received from the server
	 * });
	 *
	 * // upon disconnection
	 * socket.on("disconnect", (reason) => {
	 *   console.log(`disconnected due to ${reason}`);
	 * });
	 */
	class Socket extends Emitter {
	    /**
	     * `Socket` constructor.
	     */
	    constructor(io, nsp, opts) {
	        super();
	        /**
	         * Whether the socket is currently connected to the server.
	         *
	         * @example
	         * const socket = io();
	         *
	         * socket.on("connect", () => {
	         *   console.log(socket.connected); // true
	         * });
	         *
	         * socket.on("disconnect", () => {
	         *   console.log(socket.connected); // false
	         * });
	         */
	        this.connected = false;
	        /**
	         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
	         * be transmitted by the server.
	         */
	        this.recovered = false;
	        /**
	         * Buffer for packets received before the CONNECT packet
	         */
	        this.receiveBuffer = [];
	        /**
	         * Buffer for packets that will be sent once the socket is connected
	         */
	        this.sendBuffer = [];
	        /**
	         * The queue of packets to be sent with retry in case of failure.
	         *
	         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
	         * @private
	         */
	        this._queue = [];
	        /**
	         * A sequence to generate the ID of the {@link QueuedPacket}.
	         * @private
	         */
	        this._queueSeq = 0;
	        this.ids = 0;
	        this.acks = {};
	        this.flags = {};
	        this.io = io;
	        this.nsp = nsp;
	        if (opts && opts.auth) {
	            this.auth = opts.auth;
	        }
	        this._opts = Object.assign({}, opts);
	        if (this.io._autoConnect)
	            this.open();
	    }
	    /**
	     * Whether the socket is currently disconnected
	     *
	     * @example
	     * const socket = io();
	     *
	     * socket.on("connect", () => {
	     *   console.log(socket.disconnected); // false
	     * });
	     *
	     * socket.on("disconnect", () => {
	     *   console.log(socket.disconnected); // true
	     * });
	     */
	    get disconnected() {
	        return !this.connected;
	    }
	    /**
	     * Subscribe to open, close and packet events
	     *
	     * @private
	     */
	    subEvents() {
	        if (this.subs)
	            return;
	        const io = this.io;
	        this.subs = [
	            on(io, "open", this.onopen.bind(this)),
	            on(io, "packet", this.onpacket.bind(this)),
	            on(io, "error", this.onerror.bind(this)),
	            on(io, "close", this.onclose.bind(this)),
	        ];
	    }
	    /**
	     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
	     *
	     * @example
	     * const socket = io();
	     *
	     * console.log(socket.active); // true
	     *
	     * socket.on("disconnect", (reason) => {
	     *   if (reason === "io server disconnect") {
	     *     // the disconnection was initiated by the server, you need to manually reconnect
	     *     console.log(socket.active); // false
	     *   }
	     *   // else the socket will automatically try to reconnect
	     *   console.log(socket.active); // true
	     * });
	     */
	    get active() {
	        return !!this.subs;
	    }
	    /**
	     * "Opens" the socket.
	     *
	     * @example
	     * const socket = io({
	     *   autoConnect: false
	     * });
	     *
	     * socket.connect();
	     */
	    connect() {
	        if (this.connected)
	            return this;
	        this.subEvents();
	        if (!this.io["_reconnecting"])
	            this.io.open(); // ensure open
	        if ("open" === this.io._readyState)
	            this.onopen();
	        return this;
	    }
	    /**
	     * Alias for {@link connect()}.
	     */
	    open() {
	        return this.connect();
	    }
	    /**
	     * Sends a `message` event.
	     *
	     * This method mimics the WebSocket.send() method.
	     *
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
	     *
	     * @example
	     * socket.send("hello");
	     *
	     * // this is equivalent to
	     * socket.emit("message", "hello");
	     *
	     * @return self
	     */
	    send(...args) {
	        args.unshift("message");
	        this.emit.apply(this, args);
	        return this;
	    }
	    /**
	     * Override `emit`.
	     * If the event is in `events`, it's emitted normally.
	     *
	     * @example
	     * socket.emit("hello", "world");
	     *
	     * // all serializable datastructures are supported (no need to call JSON.stringify)
	     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
	     *
	     * // with an acknowledgement from the server
	     * socket.emit("hello", "world", (val) => {
	     *   // ...
	     * });
	     *
	     * @return self
	     */
	    emit(ev, ...args) {
	        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
	            throw new Error('"' + ev.toString() + '" is a reserved event name');
	        }
	        args.unshift(ev);
	        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
	            this._addToQueue(args);
	            return this;
	        }
	        const packet = {
	            type: PacketType.EVENT,
	            data: args,
	        };
	        packet.options = {};
	        packet.options.compress = this.flags.compress !== false;
	        // event ack callback
	        if ("function" === typeof args[args.length - 1]) {
	            const id = this.ids++;
	            const ack = args.pop();
	            this._registerAckCallback(id, ack);
	            packet.id = id;
	        }
	        const isTransportWritable = this.io.engine &&
	            this.io.engine.transport &&
	            this.io.engine.transport.writable;
	        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
	        if (discardPacket) ;
	        else if (this.connected) {
	            this.notifyOutgoingListeners(packet);
	            this.packet(packet);
	        }
	        else {
	            this.sendBuffer.push(packet);
	        }
	        this.flags = {};
	        return this;
	    }
	    /**
	     * @private
	     */
	    _registerAckCallback(id, ack) {
	        var _a;
	        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
	        if (timeout === undefined) {
	            this.acks[id] = ack;
	            return;
	        }
	        // @ts-ignore
	        const timer = this.io.setTimeoutFn(() => {
	            delete this.acks[id];
	            for (let i = 0; i < this.sendBuffer.length; i++) {
	                if (this.sendBuffer[i].id === id) {
	                    this.sendBuffer.splice(i, 1);
	                }
	            }
	            ack.call(this, new Error("operation has timed out"));
	        }, timeout);
	        this.acks[id] = (...args) => {
	            // @ts-ignore
	            this.io.clearTimeoutFn(timer);
	            ack.apply(this, [null, ...args]);
	        };
	    }
	    /**
	     * Emits an event and waits for an acknowledgement
	     *
	     * @example
	     * // without timeout
	     * const response = await socket.emitWithAck("hello", "world");
	     *
	     * // with a specific timeout
	     * try {
	     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
	     * } catch (err) {
	     *   // the server did not acknowledge the event in the given delay
	     * }
	     *
	     * @return a Promise that will be fulfilled when the server acknowledges the event
	     */
	    emitWithAck(ev, ...args) {
	        // the timeout flag is optional
	        const withErr = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
	        return new Promise((resolve, reject) => {
	            args.push((arg1, arg2) => {
	                if (withErr) {
	                    return arg1 ? reject(arg1) : resolve(arg2);
	                }
	                else {
	                    return resolve(arg1);
	                }
	            });
	            this.emit(ev, ...args);
	        });
	    }
	    /**
	     * Add the packet to the queue.
	     * @param args
	     * @private
	     */
	    _addToQueue(args) {
	        let ack;
	        if (typeof args[args.length - 1] === "function") {
	            ack = args.pop();
	        }
	        const packet = {
	            id: this._queueSeq++,
	            tryCount: 0,
	            pending: false,
	            args,
	            flags: Object.assign({ fromQueue: true }, this.flags),
	        };
	        args.push((err, ...responseArgs) => {
	            if (packet !== this._queue[0]) {
	                // the packet has already been acknowledged
	                return;
	            }
	            const hasError = err !== null;
	            if (hasError) {
	                if (packet.tryCount > this._opts.retries) {
	                    this._queue.shift();
	                    if (ack) {
	                        ack(err);
	                    }
	                }
	            }
	            else {
	                this._queue.shift();
	                if (ack) {
	                    ack(null, ...responseArgs);
	                }
	            }
	            packet.pending = false;
	            return this._drainQueue();
	        });
	        this._queue.push(packet);
	        this._drainQueue();
	    }
	    /**
	     * Send the first packet of the queue, and wait for an acknowledgement from the server.
	     * @param force - whether to resend a packet that has not been acknowledged yet
	     *
	     * @private
	     */
	    _drainQueue(force = false) {
	        if (!this.connected || this._queue.length === 0) {
	            return;
	        }
	        const packet = this._queue[0];
	        if (packet.pending && !force) {
	            return;
	        }
	        packet.pending = true;
	        packet.tryCount++;
	        this.flags = packet.flags;
	        this.emit.apply(this, packet.args);
	    }
	    /**
	     * Sends a packet.
	     *
	     * @param packet
	     * @private
	     */
	    packet(packet) {
	        packet.nsp = this.nsp;
	        this.io._packet(packet);
	    }
	    /**
	     * Called upon engine `open`.
	     *
	     * @private
	     */
	    onopen() {
	        if (typeof this.auth == "function") {
	            this.auth((data) => {
	                this._sendConnectPacket(data);
	            });
	        }
	        else {
	            this._sendConnectPacket(this.auth);
	        }
	    }
	    /**
	     * Sends a CONNECT packet to initiate the Socket.IO session.
	     *
	     * @param data
	     * @private
	     */
	    _sendConnectPacket(data) {
	        this.packet({
	            type: PacketType.CONNECT,
	            data: this._pid
	                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
	                : data,
	        });
	    }
	    /**
	     * Called upon engine or manager `error`.
	     *
	     * @param err
	     * @private
	     */
	    onerror(err) {
	        if (!this.connected) {
	            this.emitReserved("connect_error", err);
	        }
	    }
	    /**
	     * Called upon engine `close`.
	     *
	     * @param reason
	     * @param description
	     * @private
	     */
	    onclose(reason, description) {
	        this.connected = false;
	        delete this.id;
	        this.emitReserved("disconnect", reason, description);
	    }
	    /**
	     * Called with socket packet.
	     *
	     * @param packet
	     * @private
	     */
	    onpacket(packet) {
	        const sameNamespace = packet.nsp === this.nsp;
	        if (!sameNamespace)
	            return;
	        switch (packet.type) {
	            case PacketType.CONNECT:
	                if (packet.data && packet.data.sid) {
	                    this.onconnect(packet.data.sid, packet.data.pid);
	                }
	                else {
	                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
	                }
	                break;
	            case PacketType.EVENT:
	            case PacketType.BINARY_EVENT:
	                this.onevent(packet);
	                break;
	            case PacketType.ACK:
	            case PacketType.BINARY_ACK:
	                this.onack(packet);
	                break;
	            case PacketType.DISCONNECT:
	                this.ondisconnect();
	                break;
	            case PacketType.CONNECT_ERROR:
	                this.destroy();
	                const err = new Error(packet.data.message);
	                // @ts-ignore
	                err.data = packet.data.data;
	                this.emitReserved("connect_error", err);
	                break;
	        }
	    }
	    /**
	     * Called upon a server event.
	     *
	     * @param packet
	     * @private
	     */
	    onevent(packet) {
	        const args = packet.data || [];
	        if (null != packet.id) {
	            args.push(this.ack(packet.id));
	        }
	        if (this.connected) {
	            this.emitEvent(args);
	        }
	        else {
	            this.receiveBuffer.push(Object.freeze(args));
	        }
	    }
	    emitEvent(args) {
	        if (this._anyListeners && this._anyListeners.length) {
	            const listeners = this._anyListeners.slice();
	            for (const listener of listeners) {
	                listener.apply(this, args);
	            }
	        }
	        super.emit.apply(this, args);
	        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
	            this._lastOffset = args[args.length - 1];
	        }
	    }
	    /**
	     * Produces an ack callback to emit with an event.
	     *
	     * @private
	     */
	    ack(id) {
	        const self = this;
	        let sent = false;
	        return function (...args) {
	            // prevent double callbacks
	            if (sent)
	                return;
	            sent = true;
	            self.packet({
	                type: PacketType.ACK,
	                id: id,
	                data: args,
	            });
	        };
	    }
	    /**
	     * Called upon a server acknowlegement.
	     *
	     * @param packet
	     * @private
	     */
	    onack(packet) {
	        const ack = this.acks[packet.id];
	        if ("function" === typeof ack) {
	            ack.apply(this, packet.data);
	            delete this.acks[packet.id];
	        }
	    }
	    /**
	     * Called upon server connect.
	     *
	     * @private
	     */
	    onconnect(id, pid) {
	        this.id = id;
	        this.recovered = pid && this._pid === pid;
	        this._pid = pid; // defined only if connection state recovery is enabled
	        this.connected = true;
	        this.emitBuffered();
	        this.emitReserved("connect");
	        this._drainQueue(true);
	    }
	    /**
	     * Emit buffered events (received and emitted).
	     *
	     * @private
	     */
	    emitBuffered() {
	        this.receiveBuffer.forEach((args) => this.emitEvent(args));
	        this.receiveBuffer = [];
	        this.sendBuffer.forEach((packet) => {
	            this.notifyOutgoingListeners(packet);
	            this.packet(packet);
	        });
	        this.sendBuffer = [];
	    }
	    /**
	     * Called upon server disconnect.
	     *
	     * @private
	     */
	    ondisconnect() {
	        this.destroy();
	        this.onclose("io server disconnect");
	    }
	    /**
	     * Called upon forced client/server side disconnections,
	     * this method ensures the manager stops tracking us and
	     * that reconnections don't get triggered for this.
	     *
	     * @private
	     */
	    destroy() {
	        if (this.subs) {
	            // clean subscriptions to avoid reconnections
	            this.subs.forEach((subDestroy) => subDestroy());
	            this.subs = undefined;
	        }
	        this.io["_destroy"](this);
	    }
	    /**
	     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
	     *
	     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
	     *
	     * @example
	     * const socket = io();
	     *
	     * socket.on("disconnect", (reason) => {
	     *   // console.log(reason); prints "io client disconnect"
	     * });
	     *
	     * socket.disconnect();
	     *
	     * @return self
	     */
	    disconnect() {
	        if (this.connected) {
	            this.packet({ type: PacketType.DISCONNECT });
	        }
	        // remove socket from pool
	        this.destroy();
	        if (this.connected) {
	            // fire events
	            this.onclose("io client disconnect");
	        }
	        return this;
	    }
	    /**
	     * Alias for {@link disconnect()}.
	     *
	     * @return self
	     */
	    close() {
	        return this.disconnect();
	    }
	    /**
	     * Sets the compress flag.
	     *
	     * @example
	     * socket.compress(false).emit("hello");
	     *
	     * @param compress - if `true`, compresses the sending data
	     * @return self
	     */
	    compress(compress) {
	        this.flags.compress = compress;
	        return this;
	    }
	    /**
	     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
	     * ready to send messages.
	     *
	     * @example
	     * socket.volatile.emit("hello"); // the server may or may not receive it
	     *
	     * @returns self
	     */
	    get volatile() {
	        this.flags.volatile = true;
	        return this;
	    }
	    /**
	     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
	     * given number of milliseconds have elapsed without an acknowledgement from the server:
	     *
	     * @example
	     * socket.timeout(5000).emit("my-event", (err) => {
	     *   if (err) {
	     *     // the server did not acknowledge the event in the given delay
	     *   }
	     * });
	     *
	     * @returns self
	     */
	    timeout(timeout) {
	        this.flags.timeout = timeout;
	        return this;
	    }
	    /**
	     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
	     * callback.
	     *
	     * @example
	     * socket.onAny((event, ...args) => {
	     *   console.log(`got ${event}`);
	     * });
	     *
	     * @param listener
	     */
	    onAny(listener) {
	        this._anyListeners = this._anyListeners || [];
	        this._anyListeners.push(listener);
	        return this;
	    }
	    /**
	     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
	     * callback. The listener is added to the beginning of the listeners array.
	     *
	     * @example
	     * socket.prependAny((event, ...args) => {
	     *   console.log(`got event ${event}`);
	     * });
	     *
	     * @param listener
	     */
	    prependAny(listener) {
	        this._anyListeners = this._anyListeners || [];
	        this._anyListeners.unshift(listener);
	        return this;
	    }
	    /**
	     * Removes the listener that will be fired when any event is emitted.
	     *
	     * @example
	     * const catchAllListener = (event, ...args) => {
	     *   console.log(`got event ${event}`);
	     * }
	     *
	     * socket.onAny(catchAllListener);
	     *
	     * // remove a specific listener
	     * socket.offAny(catchAllListener);
	     *
	     * // or remove all listeners
	     * socket.offAny();
	     *
	     * @param listener
	     */
	    offAny(listener) {
	        if (!this._anyListeners) {
	            return this;
	        }
	        if (listener) {
	            const listeners = this._anyListeners;
	            for (let i = 0; i < listeners.length; i++) {
	                if (listener === listeners[i]) {
	                    listeners.splice(i, 1);
	                    return this;
	                }
	            }
	        }
	        else {
	            this._anyListeners = [];
	        }
	        return this;
	    }
	    /**
	     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
	     * e.g. to remove listeners.
	     */
	    listenersAny() {
	        return this._anyListeners || [];
	    }
	    /**
	     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
	     * callback.
	     *
	     * Note: acknowledgements sent to the server are not included.
	     *
	     * @example
	     * socket.onAnyOutgoing((event, ...args) => {
	     *   console.log(`sent event ${event}`);
	     * });
	     *
	     * @param listener
	     */
	    onAnyOutgoing(listener) {
	        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
	        this._anyOutgoingListeners.push(listener);
	        return this;
	    }
	    /**
	     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
	     * callback. The listener is added to the beginning of the listeners array.
	     *
	     * Note: acknowledgements sent to the server are not included.
	     *
	     * @example
	     * socket.prependAnyOutgoing((event, ...args) => {
	     *   console.log(`sent event ${event}`);
	     * });
	     *
	     * @param listener
	     */
	    prependAnyOutgoing(listener) {
	        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
	        this._anyOutgoingListeners.unshift(listener);
	        return this;
	    }
	    /**
	     * Removes the listener that will be fired when any event is emitted.
	     *
	     * @example
	     * const catchAllListener = (event, ...args) => {
	     *   console.log(`sent event ${event}`);
	     * }
	     *
	     * socket.onAnyOutgoing(catchAllListener);
	     *
	     * // remove a specific listener
	     * socket.offAnyOutgoing(catchAllListener);
	     *
	     * // or remove all listeners
	     * socket.offAnyOutgoing();
	     *
	     * @param [listener] - the catch-all listener (optional)
	     */
	    offAnyOutgoing(listener) {
	        if (!this._anyOutgoingListeners) {
	            return this;
	        }
	        if (listener) {
	            const listeners = this._anyOutgoingListeners;
	            for (let i = 0; i < listeners.length; i++) {
	                if (listener === listeners[i]) {
	                    listeners.splice(i, 1);
	                    return this;
	                }
	            }
	        }
	        else {
	            this._anyOutgoingListeners = [];
	        }
	        return this;
	    }
	    /**
	     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
	     * e.g. to remove listeners.
	     */
	    listenersAnyOutgoing() {
	        return this._anyOutgoingListeners || [];
	    }
	    /**
	     * Notify the listeners for each packet sent
	     *
	     * @param packet
	     *
	     * @private
	     */
	    notifyOutgoingListeners(packet) {
	        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
	            const listeners = this._anyOutgoingListeners.slice();
	            for (const listener of listeners) {
	                listener.apply(this, packet.data);
	            }
	        }
	    }
	}

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	function Backoff(opts) {
	    opts = opts || {};
	    this.ms = opts.min || 100;
	    this.max = opts.max || 10000;
	    this.factor = opts.factor || 2;
	    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	    this.attempts = 0;
	}
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	Backoff.prototype.duration = function () {
	    var ms = this.ms * Math.pow(this.factor, this.attempts++);
	    if (this.jitter) {
	        var rand = Math.random();
	        var deviation = Math.floor(rand * this.jitter * ms);
	        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
	    }
	    return Math.min(ms, this.max) | 0;
	};
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	Backoff.prototype.reset = function () {
	    this.attempts = 0;
	};
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	Backoff.prototype.setMin = function (min) {
	    this.ms = min;
	};
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	Backoff.prototype.setMax = function (max) {
	    this.max = max;
	};
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	Backoff.prototype.setJitter = function (jitter) {
	    this.jitter = jitter;
	};

	class Manager extends Emitter {
	    constructor(uri, opts) {
	        var _a;
	        super();
	        this.nsps = {};
	        this.subs = [];
	        if (uri && "object" === typeof uri) {
	            opts = uri;
	            uri = undefined;
	        }
	        opts = opts || {};
	        opts.path = opts.path || "/socket.io";
	        this.opts = opts;
	        installTimerFunctions(this, opts);
	        this.reconnection(opts.reconnection !== false);
	        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	        this.reconnectionDelay(opts.reconnectionDelay || 1000);
	        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
	        this.backoff = new Backoff({
	            min: this.reconnectionDelay(),
	            max: this.reconnectionDelayMax(),
	            jitter: this.randomizationFactor(),
	        });
	        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	        this._readyState = "closed";
	        this.uri = uri;
	        const _parser = opts.parser || parser;
	        this.encoder = new _parser.Encoder();
	        this.decoder = new _parser.Decoder();
	        this._autoConnect = opts.autoConnect !== false;
	        if (this._autoConnect)
	            this.open();
	    }
	    reconnection(v) {
	        if (!arguments.length)
	            return this._reconnection;
	        this._reconnection = !!v;
	        return this;
	    }
	    reconnectionAttempts(v) {
	        if (v === undefined)
	            return this._reconnectionAttempts;
	        this._reconnectionAttempts = v;
	        return this;
	    }
	    reconnectionDelay(v) {
	        var _a;
	        if (v === undefined)
	            return this._reconnectionDelay;
	        this._reconnectionDelay = v;
	        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
	        return this;
	    }
	    randomizationFactor(v) {
	        var _a;
	        if (v === undefined)
	            return this._randomizationFactor;
	        this._randomizationFactor = v;
	        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
	        return this;
	    }
	    reconnectionDelayMax(v) {
	        var _a;
	        if (v === undefined)
	            return this._reconnectionDelayMax;
	        this._reconnectionDelayMax = v;
	        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
	        return this;
	    }
	    timeout(v) {
	        if (!arguments.length)
	            return this._timeout;
	        this._timeout = v;
	        return this;
	    }
	    /**
	     * Starts trying to reconnect if reconnection is enabled and we have not
	     * started reconnecting yet
	     *
	     * @private
	     */
	    maybeReconnectOnOpen() {
	        // Only try to reconnect if it's the first time we're connecting
	        if (!this._reconnecting &&
	            this._reconnection &&
	            this.backoff.attempts === 0) {
	            // keeps reconnection from firing twice for the same reconnection loop
	            this.reconnect();
	        }
	    }
	    /**
	     * Sets the current transport `socket`.
	     *
	     * @param {Function} fn - optional, callback
	     * @return self
	     * @public
	     */
	    open(fn) {
	        if (~this._readyState.indexOf("open"))
	            return this;
	        this.engine = new Socket$1(this.uri, this.opts);
	        const socket = this.engine;
	        const self = this;
	        this._readyState = "opening";
	        this.skipReconnect = false;
	        // emit `open`
	        const openSubDestroy = on(socket, "open", function () {
	            self.onopen();
	            fn && fn();
	        });
	        // emit `error`
	        const errorSub = on(socket, "error", (err) => {
	            self.cleanup();
	            self._readyState = "closed";
	            this.emitReserved("error", err);
	            if (fn) {
	                fn(err);
	            }
	            else {
	                // Only do this if there is no fn to handle the error
	                self.maybeReconnectOnOpen();
	            }
	        });
	        if (false !== this._timeout) {
	            const timeout = this._timeout;
	            if (timeout === 0) {
	                openSubDestroy(); // prevents a race condition with the 'open' event
	            }
	            // set timer
	            const timer = this.setTimeoutFn(() => {
	                openSubDestroy();
	                socket.close();
	                // @ts-ignore
	                socket.emit("error", new Error("timeout"));
	            }, timeout);
	            if (this.opts.autoUnref) {
	                timer.unref();
	            }
	            this.subs.push(function subDestroy() {
	                clearTimeout(timer);
	            });
	        }
	        this.subs.push(openSubDestroy);
	        this.subs.push(errorSub);
	        return this;
	    }
	    /**
	     * Alias for open()
	     *
	     * @return self
	     * @public
	     */
	    connect(fn) {
	        return this.open(fn);
	    }
	    /**
	     * Called upon transport open.
	     *
	     * @private
	     */
	    onopen() {
	        // clear old subs
	        this.cleanup();
	        // mark as open
	        this._readyState = "open";
	        this.emitReserved("open");
	        // add new subs
	        const socket = this.engine;
	        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
	    }
	    /**
	     * Called upon a ping.
	     *
	     * @private
	     */
	    onping() {
	        this.emitReserved("ping");
	    }
	    /**
	     * Called with data.
	     *
	     * @private
	     */
	    ondata(data) {
	        try {
	            this.decoder.add(data);
	        }
	        catch (e) {
	            this.onclose("parse error", e);
	        }
	    }
	    /**
	     * Called when parser fully decodes a packet.
	     *
	     * @private
	     */
	    ondecoded(packet) {
	        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
	        nextTick(() => {
	            this.emitReserved("packet", packet);
	        }, this.setTimeoutFn);
	    }
	    /**
	     * Called upon socket error.
	     *
	     * @private
	     */
	    onerror(err) {
	        this.emitReserved("error", err);
	    }
	    /**
	     * Creates a new socket for the given `nsp`.
	     *
	     * @return {Socket}
	     * @public
	     */
	    socket(nsp, opts) {
	        let socket = this.nsps[nsp];
	        if (!socket) {
	            socket = new Socket(this, nsp, opts);
	            this.nsps[nsp] = socket;
	        }
	        else if (this._autoConnect && !socket.active) {
	            socket.connect();
	        }
	        return socket;
	    }
	    /**
	     * Called upon a socket close.
	     *
	     * @param socket
	     * @private
	     */
	    _destroy(socket) {
	        const nsps = Object.keys(this.nsps);
	        for (const nsp of nsps) {
	            const socket = this.nsps[nsp];
	            if (socket.active) {
	                return;
	            }
	        }
	        this._close();
	    }
	    /**
	     * Writes a packet.
	     *
	     * @param packet
	     * @private
	     */
	    _packet(packet) {
	        const encodedPackets = this.encoder.encode(packet);
	        for (let i = 0; i < encodedPackets.length; i++) {
	            this.engine.write(encodedPackets[i], packet.options);
	        }
	    }
	    /**
	     * Clean up transport subscriptions and packet buffer.
	     *
	     * @private
	     */
	    cleanup() {
	        this.subs.forEach((subDestroy) => subDestroy());
	        this.subs.length = 0;
	        this.decoder.destroy();
	    }
	    /**
	     * Close the current socket.
	     *
	     * @private
	     */
	    _close() {
	        this.skipReconnect = true;
	        this._reconnecting = false;
	        this.onclose("forced close");
	        if (this.engine)
	            this.engine.close();
	    }
	    /**
	     * Alias for close()
	     *
	     * @private
	     */
	    disconnect() {
	        return this._close();
	    }
	    /**
	     * Called upon engine close.
	     *
	     * @private
	     */
	    onclose(reason, description) {
	        this.cleanup();
	        this.backoff.reset();
	        this._readyState = "closed";
	        this.emitReserved("close", reason, description);
	        if (this._reconnection && !this.skipReconnect) {
	            this.reconnect();
	        }
	    }
	    /**
	     * Attempt a reconnection.
	     *
	     * @private
	     */
	    reconnect() {
	        if (this._reconnecting || this.skipReconnect)
	            return this;
	        const self = this;
	        if (this.backoff.attempts >= this._reconnectionAttempts) {
	            this.backoff.reset();
	            this.emitReserved("reconnect_failed");
	            this._reconnecting = false;
	        }
	        else {
	            const delay = this.backoff.duration();
	            this._reconnecting = true;
	            const timer = this.setTimeoutFn(() => {
	                if (self.skipReconnect)
	                    return;
	                this.emitReserved("reconnect_attempt", self.backoff.attempts);
	                // check again for the case socket closed in above events
	                if (self.skipReconnect)
	                    return;
	                self.open((err) => {
	                    if (err) {
	                        self._reconnecting = false;
	                        self.reconnect();
	                        this.emitReserved("reconnect_error", err);
	                    }
	                    else {
	                        self.onreconnect();
	                    }
	                });
	            }, delay);
	            if (this.opts.autoUnref) {
	                timer.unref();
	            }
	            this.subs.push(function subDestroy() {
	                clearTimeout(timer);
	            });
	        }
	    }
	    /**
	     * Called upon successful reconnect.
	     *
	     * @private
	     */
	    onreconnect() {
	        const attempt = this.backoff.attempts;
	        this._reconnecting = false;
	        this.backoff.reset();
	        this.emitReserved("reconnect", attempt);
	    }
	}

	/**
	 * Managers cache.
	 */
	const cache = {};
	function lookup(uri, opts) {
	    if (typeof uri === "object") {
	        opts = uri;
	        uri = undefined;
	    }
	    opts = opts || {};
	    const parsed = url(uri, opts.path || "/socket.io");
	    const source = parsed.source;
	    const id = parsed.id;
	    const path = parsed.path;
	    const sameNamespace = cache[id] && path in cache[id]["nsps"];
	    const newConnection = opts.forceNew ||
	        opts["force new connection"] ||
	        false === opts.multiplex ||
	        sameNamespace;
	    let io;
	    if (newConnection) {
	        io = new Manager(source, opts);
	    }
	    else {
	        if (!cache[id]) {
	            cache[id] = new Manager(source, opts);
	        }
	        io = cache[id];
	    }
	    if (parsed.query && !opts.query) {
	        opts.query = parsed.queryKey;
	    }
	    return io.socket(parsed.path, opts);
	}
	// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
	// namespace (e.g. `io.connect(...)`), for backward compatibility
	Object.assign(lookup, {
	    Manager,
	    Socket,
	    io: lookup,
	    connect: lookup,
	});

	window.global = window;

	var Axios = /*#__PURE__*/function () {
	  function Axios(config) {
	    _classCallCheck(this, Axios);
	    this.config = _Object$assign({
	      baseURL: 'https://loaclhost:3000/',
	      timeout: 10000,
	      header: {}
	    }, config);
	  }
	  _createClass(Axios, [{
	    key: "get",
	    value: function get(url, options) {
	      var _this = this;
	      return new _Promise(function (res, rej) {
	        var _context;
	        var path = _concatInstanceProperty(_context = "".concat(_this.config.baseURL)).call(_context, url);
	        if (options.query) {
	          path += '?';
	          for (var key in options.query) {
	            var _context2;
	            path += _concatInstanceProperty(_context2 = "".concat(key, "=")).call(_context2, options.query[key], "&");
	          }
	          path = _sliceInstanceProperty(path).call(path, 0, path.length - 1);
	        }
	        fetch(path, {
	          method: 'GET',
	          mode: 'cors',
	          headers: _this.config.header
	        }).then(function (response) {
	          if (response.ok === false) rej('fail');
	          return response.json();
	        }, function (err) {
	          rej('fail');
	        }).then(function (value) {
	          res(value);
	        }, function (err) {
	          rej('fail');
	        });
	      });
	    }
	  }]);
	  return Axios;
	}();

	function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray$1(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
	function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	/**
	 * @description 控制弹幕的类 Controller层
	 */
	var DanmakuController = /*#__PURE__*/function () {
	  // el: div.video-danmaku-container

	  function DanmakuController(player, options) {
	    _classCallCheck(this, DanmakuController);
	    this.player = player;
	    this.video = player.video;
	    this.container = player.el; // div.Niplayer_video-wrapper

	    this.options = _Object$assign({
	      type: 'http'
	    }, options);
	    this.instance = new Axios({
	      baseURL: ''
	    });
	    this.init();
	  }
	  _createClass(DanmakuController, [{
	    key: "init",
	    value: function init() {
	      this.onTimeupdate = this.onTimeupdate.bind(this);
	      this.el = $$M('div.video-danmaku-container');
	      this.el.style.backgroundColor = '#000';
	      this.danmakuLoading = $$M('div');
	      addClass(this.danmakuLoading, ['video-danmaku-loading-base', 'video-danmaku-loading', 'video-danmaku-shaking']);
	      this.danmakuLoading.innerHTML = '<span>弹幕数据加载中...</span>';
	      this.container.appendChild(this.el);
	      this.el.appendChild(this.danmakuLoading);
	      this.danmaku = new Danmaku(this.el, this.player);
	      this.initTemplate();
	      this.initializeEvent();
	      if (this.options.type === 'websocket') {
	        this.initWebSocket();
	      } else {
	        this.initHTTP();
	      }
	    }

	    //TODO 初始化websocket连接
	  }, {
	    key: "initWebSocket",
	    value: function initWebSocket() {
	      var _this = this;
	      var socket = lookup(this.options.api, {
	        transports: ['websocket', 'polling']
	      });
	      socket.on('connect', function () {
	        _this.setDanmakuSuccess();
	        //* 当播放器时间更新时需要请求新的弹幕数据
	        _this.player.video.addEventListener('timeupdate', function (e) {
	          // console.log(this.player.video.currentTime)
	          socket.emit(EVENT.REQUEST_DANMAKU_DATA, {
	            time: _this.player.video.currentTime
	          });
	        });
	        socket.on(EVENT.SEND_DANMAKU_DATA, function (data) {
	          // console.log(`接受到数据${JSON.stringify(data)},当前时间${this.player.video.currentTime}`)
	          var _iterator = _createForOfIteratorHelper$1(data),
	            _step;
	          try {
	            for (_iterator.s(); !(_step = _iterator.n()).done;) {
	              var item = _step.value;
	              _this.danmaku.addData(item);
	            }
	          } catch (err) {
	            _iterator.e(err);
	          } finally {
	            _iterator.f();
	          }
	        });
	      });
	      socket.io.on('error', function () {
	        _this.setDanmakuFail();
	      });
	      socket.connect();
	    }
	  }, {
	    key: "initHTTP",
	    value: function initHTTP() {
	      var _this2 = this;
	      // TODO  初始化http轮询连接
	      this.instance.get(this.options.api, {
	        query: {
	          time: 0
	        }
	      }).then(function (value) {
	        _this2.setDanmakuSuccess();
	        _this2.player.video.addEventListener('timeupdate', _this2.onTimeupdate);
	      }, function (err) {
	        _this2.setDanmakuFail();
	      });
	    }
	  }, {
	    key: "setDanmakuSuccess",
	    value: function setDanmakuSuccess() {
	      var _this3 = this;
	      this.el.style.backgroundColor = '';
	      this.danmakuLoading.childNodes[0].innerText = '弹幕加载成功';
	      removeClass(this.danmakuLoading, ['video-danmaku-loading', 'video-danmaku-shaking']);
	      setTimeout(function () {
	        addClass(_this3.danmakuLoading, ['video-danmaku-loading-hide']);
	      }, 3000);
	    }
	  }, {
	    key: "setDanmakuFail",
	    value: function setDanmakuFail() {
	      var _this4 = this;
	      this.el.style.backgroundColor = '';
	      this.danmakuLoading.childNodes[0].innerText = '弹幕加载失败';
	      removeClass(this.danmakuLoading, ['video-danmaku-loading', 'video-danmaku-shaking']);
	      setTimeout(function () {
	        addClass(_this4.danmakuLoading, ['video-danmaku-loading-hide']);
	      }, 3000);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      var ctx = this;
	      this.danmakuInput = new DanmakuInput(this.player, null, 'div');
	      this.danmakuSettings = new DanmakuSettings(this.player);
	      this.danmakuOpenClose = new DanmakuOpenClose(this.player, null, 'div');
	      this.player.use({
	        install: function install(player) {
	          player.mountComponent(ctx.danmakuOpenClose.id, ctx.danmakuOpenClose, {
	            mode: {
	              type: 'BottomToolBar',
	              pos: 'medium'
	            }
	          });
	          // player.mountComponent(ctx.danmakuSettings.id, ctx.danmakuSettings, {
	          //   mode: {
	          //     type: 'BottomToolBar',
	          //     pos: 'medium'
	          //   }
	          // })
	          player.mountComponent(ctx.danmakuInput.id, ctx.danmakuInput, {
	            mode: {
	              type: 'BottomToolBar',
	              pos: 'medium'
	            }
	          });
	        }
	      });
	    }
	  }, {
	    key: "initializeEvent",
	    value: function initializeEvent() {
	      var _this5 = this;
	      // seeking 事件在每次用户开始移动/跳跃视频音频（ audio/video）到新的位置时触发。
	      // seeked 事件在用户完成移动/跳跃视频音频（ audio/video）到新的位置时触发。
	      this.video.addEventListener('seeked', function (e) {
	        _this5.onSeeked(e);
	      });
	      this.video.addEventListener('pause', function () {
	        console.log('pause');
	        // 暂停所有的弹幕
	        _this5.danmaku.pause();
	      });
	      this.video.addEventListener('waiting', function () {
	        _this5.danmaku.pause();
	      });
	      this.video.addEventListener('abort', function () {
	        _this5.danmaku.flush();
	      });
	      this.video.addEventListener('play', function () {
	        console.log('play');
	        _this5.danmaku.resume();
	      });
	      this.video.addEventListener('canplay', function () {
	        console.log('canplay');
	        _this5.danmaku.resume();
	      });
	      this.video.addEventListener('timeupdate', function () {
	        console.log('timeupdate');
	        _this5.danmaku.setPaused(false);
	      });
	      this.danmakuInput.on('sendData', function (data) {
	        // 此处为发送弹幕的逻辑
	      });

	      // this.player.on(EVENT.DOT_DRAG, () => {
	      //   this.danmaku.flush()
	      // })

	      this.player.on('closeDanmaku', function () {
	        // 隐藏所有的弹幕
	        _this5.danmaku.close();
	      });
	      this.player.on('openDanmaku', function () {
	        // 打开所有隐藏的弹幕
	        _this5.danmaku.open();
	      });
	      this.player.on(EVENT.RESIZE, function () {
	        _this5.setTrackNumber();
	      });
	    }
	  }, {
	    key: "onTimeupdate",
	    value: function onTimeupdate(e) {
	      var _this6 = this;
	      // 时间更新
	      // 如果默认请求弹幕数据的方式为http请求，则需要进行轮询
	      // let video = e.target as HTMLVideoElement
	      // // console.log(video.currentTime)
	      // for (let i = 0; i < 10; i++) {
	      //   this.danmaku.addData(queue[i % queue.length])
	      // }

	      // TODO 时间更新
	      // TODO 如果默认请求弹幕数据的方式为http请求，则需要进行轮询
	      this.instance.get(this.options.api, {
	        query: {
	          time: this.player.video.currentTime
	        }
	      }).then(function (value) {
	        var _iterator2 = _createForOfIteratorHelper$1(value),
	          _step2;
	        try {
	          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	            var data = _step2.value;
	            _this6.danmaku.addData(data);
	          }
	        } catch (err) {
	          _iterator2.e(err);
	        } finally {
	          _iterator2.f();
	        }
	      });
	    }

	    // start() {
	    //   this.timer = window.setInterval(() => {
	    //     this.danmaku.addData(queue[this.index++ % queue.length])
	    //     // if (this.index >= 250) {
	    //     //   window.clearInterval(this.timer)
	    //     //   this.timer = null
	    //     // }
	    //   }, 50)
	    //   // const send = () => {
	    //   //   if (this.index >= 30) return
	    //   //   let data = queue[(this.index++) % queue.length]
	    //   //   this.danmaku.addData(data)
	    //   //   send()
	    //   // }
	    //   // send()
	    // }

	    // pause() {
	    //   window.clearInterval(this.timer)
	    //   this.timer = null
	    // }

	    // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
	  }, {
	    key: "onSeeked",
	    value: function onSeeked(e) {
	      this.danmaku.flush();
	    }
	  }, {
	    key: "setTrackNumber",
	    value: function setTrackNumber(num) {
	      this.danmaku.setTrackNumber(num || null);
	    }
	  }, {
	    key: "setOpacity",
	    value: function setOpacity(opacity) {
	      // 1/2 3/4
	      this.danmaku.setOpacity(opacity);
	    }
	  }, {
	    key: "setFontSize",
	    value: function setFontSize(scale) {
	      this.danmaku.setFontSize(scale);
	    }
	  }]);
	  return DanmakuController;
	}();

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

	var css_248z$2 = ".danmaku-input-wrapper {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background-color: hsla(0, 0%, 100%, 0.15);\n  border-radius: 2px;\n}\n.danmaku-input-wrapper .danmaku-input {\n  background-color: transparent;\n  width: calc(100% - 40px);\n  height: 50%;\n  line-height: 100%;\n  color: #fff;\n  font-size: 13px;\n  outline: 0;\n  padding: 0;\n  border: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.danmaku-input-wrapper .danmaku-send {\n  height: 100%;\n  width: 50px;\n  text-align: center;\n  line-height: 30px;\n  background-color: transparent;\n  color: #fff;\n  font-size: 13px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.danmaku-box {\n  cursor: pointer;\n}\n.video-danmaku-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  left: 0;\n  top: 0;\n  z-index: 3001;\n}\n.video-danmaku-container .video-danmaku-message {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: pre;\n  pointer-events: none;\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  display: inline-block;\n  will-change: transform;\n  font-weight: normal;\n  line-height: 1.125;\n  font-family: SimHei, \"Microsoft JhengHei\", Arial, Helvetica, sans-serif;\n  text-shadow: #000000 1px 0px 1px, #000000 0px 1px 1px, #000000 0px -1px 1px, #000000 -1px 0px 1px;\n  opacity: 1;\n  margin-left: 0px;\n}\n.video-danmaku-container .video-danmaku-loading-base {\n  position: absolute;\n  z-index: 3001;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: hsla(0, 0%, 100%, 0.15);\n  padding: 10px 10px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  color: #fff;\n  border-radius: 5px;\n  left: 5px;\n  bottom: 60px;\n  overflow: hidden;\n  -webkit-transition: all 1.5s ease;\n  transition: all 1.5s ease;\n  font-size: 14px;\n}\n.video-danmaku-container .video-danmaku-loading {\n  left: 50%;\n  bottom: 50%;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%);\n}\n.video-danmaku-container .video-danmaku-shaking {\n  -webkit-animation: shake 2.5s 0.15s linear infinite;\n          animation: shake 2.5s 0.15s linear infinite;\n}\n.video-danmaku-container .video-danmaku-loading-hide {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n}\n@-webkit-keyframes shake {\n  10% {\n    -webkit-transform: rotate(15deg) translate(-50%, 50%);\n            transform: rotate(15deg) translate(-50%, 50%);\n  }\n  20% {\n    -webkit-transform: rotate(-10deg) translate(-50%, 50%);\n            transform: rotate(-10deg) translate(-50%, 50%);\n  }\n  30% {\n    -webkit-transform: rotate(5deg) translate(-50%, 50%);\n            transform: rotate(5deg) translate(-50%, 50%);\n  }\n  40% {\n    -webkit-transform: rotate(-5deg) translate(-50%, 50%);\n            transform: rotate(-5deg) translate(-50%, 50%);\n  }\n  50% {\n    -webkit-transform: rotate(10deg) translate(-50%, 50%);\n            transform: rotate(10deg) translate(-50%, 50%);\n  }\n  60% {\n    -webkit-transform: rotate(-15deg) translate(-50%, 50%);\n            transform: rotate(-15deg) translate(-50%, 50%);\n  }\n  70% {\n    -webkit-transform: rotate(10deg) translate(-50%, 50%);\n            transform: rotate(10deg) translate(-50%, 50%);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg) translate(-50%, 50%);\n            transform: rotate(-5deg) translate(-50%, 50%);\n  }\n  90%,\n  100% {\n    -webkit-transform: rotate(0deg) translate(-50%, 50%);\n            transform: rotate(0deg) translate(-50%, 50%);\n  }\n}\n@keyframes shake {\n  10% {\n    -webkit-transform: rotate(15deg) translate(-50%, 50%);\n            transform: rotate(15deg) translate(-50%, 50%);\n  }\n  20% {\n    -webkit-transform: rotate(-10deg) translate(-50%, 50%);\n            transform: rotate(-10deg) translate(-50%, 50%);\n  }\n  30% {\n    -webkit-transform: rotate(5deg) translate(-50%, 50%);\n            transform: rotate(5deg) translate(-50%, 50%);\n  }\n  40% {\n    -webkit-transform: rotate(-5deg) translate(-50%, 50%);\n            transform: rotate(-5deg) translate(-50%, 50%);\n  }\n  50% {\n    -webkit-transform: rotate(10deg) translate(-50%, 50%);\n            transform: rotate(10deg) translate(-50%, 50%);\n  }\n  60% {\n    -webkit-transform: rotate(-15deg) translate(-50%, 50%);\n            transform: rotate(-15deg) translate(-50%, 50%);\n  }\n  70% {\n    -webkit-transform: rotate(10deg) translate(-50%, 50%);\n            transform: rotate(10deg) translate(-50%, 50%);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg) translate(-50%, 50%);\n            transform: rotate(-5deg) translate(-50%, 50%);\n  }\n  90%,\n  100% {\n    -webkit-transform: rotate(0deg) translate(-50%, 50%);\n            transform: rotate(0deg) translate(-50%, 50%);\n  }\n}\n";
	styleInject(css_248z$2);

	function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var DanmakuInput = /*#__PURE__*/function (_Component) {
	  _inherits(DanmakuInput, _Component);
	  var _super = _createSuper$3(DanmakuInput);
	  // el: div.danmaku-input-wrapper

	  function DanmakuInput(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, DanmakuInput);
	    _this = _super.call(this, container, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'DanmakuInput');
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
	      this.inputBox = $$M('input.danmaku-input', {
	        type: 'text'
	      });
	      this.sendBox = $$M('span.danmaku-send');
	      this.sendBox.innerText = '发送';
	      this.el.appendChild(this.inputBox);
	      this.el.appendChild(this.sendBox);
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.sendBox.onclick = function (e) {
	        e.stopPropagation();
	        var value = _this2.inputBox.value;
	        _this2.emit('sendData', value);
	        _this2.inputBox.value = '';
	        _this2.inputBox.blur();
	      };
	      this.inputBox.addEventListener('focus', function (e) {
	        e.stopPropagation();
	        _this2.player.emit(EVENT.DANMAKU_INPUT_FOCUS);
	      });
	      this.inputBox.addEventListener('blur', function (e) {
	        e.stopPropagation();
	        _this2.player.emit(EVENT.DANMAKU_INPUT_BLUR);
	      });
	      this.inputBox.addEventListener('click', function (e) {
	        e.stopPropagation();
	      });
	    }
	  }]);
	  return DanmakuInput;
	}(Component);

	var css_248z$1 = ".Niplayer_video-wrapper {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  resize: auto;\n  -webkit-transform: all 0.5s ease;\n          transform: all 0.5s ease;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.Niplayer_video-wrapper:focus {\n  outline: none;\n}\n.Niplayer_video-wrapper video {\n  max-width: 100%;\n  max-height: 100%;\n  outline: none;\n  -ms-touch-action: none;\n      touch-action: none;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n}\n.Niplayer_video-wrapper video:focus {\n  outline: none;\n}\n.Niplayer_video-wrapper .video-context-menu {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200px;\n  border-radius: 3px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 5px 0;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n          backdrop-filter: saturate(180%) blur(20px);\n  background-color: #000000b3 !important;\n  z-index: 4002;\n}\n.Niplayer_video-wrapper .video-context-menu:last-child {\n  border-bottom: none !important;\n}\n.Niplayer_video-wrapper .video-context-menu .video-context-menu-item {\n  cursor: pointer;\n  color: #fff;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow: 0 0 2px #00000080;\n  border-bottom: 1px solid #ffffff1a;\n  padding: 10px 15px;\n  font-size: 12px;\n  display: block;\n  overflow: hidden;\n}\n.Niplayer_video-wrapper .video-context-menu .video-context-menu-item:hover {\n  background-color: #ffffff1a;\n  color: #f00;\n}\n.Niplayer_video-wrapper .video-texttrack-container-showtoolbar {\n  bottom: calc(50px + 5px) !important;\n}\n.Niplayer_video-wrapper .video-texttrack-container {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  position: absolute;\n  bottom: 5px;\n  color: #fe9200;\n  font-size: 20px;\n}\n.Niplayer_video-wrapper .video-texttrack-container p {\n  word-break: break-all;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 5px 0 0;\n  line-height: 1.2;\n}\n.Niplayer_video-wrapper .video-toast-wrapper {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  border-radius: 10px;\n}\n.Niplayer_video-wrapper .video-toast-animate {\n  opacity: 1;\n}\n.Niplayer_video-wrapper .video-topbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 35px;\n  color: #fff;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 4001;\n  padding: 5px 5px 0px 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  height: 100%;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set {\n  height: auto;\n  max-height: 300px;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n          backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 3px;\n  font-size: 13px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-main,\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-subtitle,\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-playrate,\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-main,\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-opacity,\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-range,\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-size {\n  width: 100%;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 35px;\n  cursor: pointer;\n  color: #fffc;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item:hover {\n  color: #f00;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft {\n  white-space: nowrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-icon {\n  height: 24px;\n  width: 24px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-icon svg {\n  height: 100%;\n  width: 100%;\n  fill: #fff;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-text {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-tip {\n  white-space: nowrap;\n  color: #ffffff80;\n  margin-right: 5px;\n  font-size: 12px;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-icon {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 24px;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-icon svg {\n  width: 100%;\n  height: 100%;\n  fill: #fff;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings svg {\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings .video-subsettings-set {\n  right: 0;\n  left: auto !important;\n  -webkit-transform: translateX(0) !important;\n          transform: translateX(0) !important;\n}\n.Niplayer_video-wrapper .video-topbar .video-topbar-right .video-subsettings-animate {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n.Niplayer_video-wrapper .video-topbar-hidden {\n  display: none;\n}\n.Niplayer_video-wrapper .video-toolbar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  height: 50px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 4001;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#000), color-stop(#0006), to(#0000));\n  background-image: linear-gradient(to top, #000, #0006, #0000);\n  background-position: bottom;\n  background-repeat: repeat-x;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-left,\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-right {\n  height: 100%;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium .video-progress {\n  width: calc(100% - 18px);\n  margin: 0 auto;\n  height: 3px;\n  -webkit-transition: width 0.5s ease;\n  transition: width 0.5s ease;\n  background-color: hsla(0, 0%, 100%, 0.2);\n  cursor: pointer;\n  position: relative;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium .video-progress .video-progress-pretime {\n  position: absolute;\n  left: 0;\n  top: -28px;\n  height: 15px;\n  width: 35px;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  line-height: 15px;\n  text-align: center;\n  font-size: 10px;\n  display: none;\n  z-index: 4002;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium .video-progress .video-progress-thumbnails {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  width: 160px;\n  height: 90px;\n  background-color: rgba(255, 255, 255, 0.5);\n  display: none;\n  overflow: hidden;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium .video-progress .video-progress-buffered {\n  left: 0;\n  height: 100%;\n  width: 0;\n  position: absolute;\n  background-color: hsla(0, 0%, 100%, 0.3);\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium .video-progress .video-progress-completed {\n  position: absolute;\n  background-color: #f00;\n  height: 100%;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  left: 0;\n  width: 0;\n  z-index: 4002;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium .video-progress .video-progress-dot-hidden {\n  opacity: 0;\n}\n.Niplayer_video-wrapper .video-toolbar .video-mediumbar .video-mediumbar-medium .video-progress .video-progress-dot {\n  position: absolute;\n  left: 0px;\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  background-color: #f00;\n  cursor: pointer;\n  z-index: 4002;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  -webkit-transition: opacity 0.6s ease;\n  transition: opacity 0.6s ease;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px 5px 0 5px;\n  position: relative;\n  height: 30px;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  position: relative;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-start-pause {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-volume {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-volume .video-volume-set {\n  position: absolute;\n  width: 32px;\n  height: 100px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-volume .video-volume-set .video-volume-show {\n  width: 100%;\n  height: 15px;\n  line-height: 15px;\n  text-align: center;\n  font-size: 12px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-volume .video-volume-set .video-volume-progress {\n  border-radius: 2px;\n  width: 3px;\n  padding-top: 5px;\n  height: calc(100% - 15px - 5px);\n  margin-left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background-color: #fff;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-volume .video-volume-set .video-volume-progress .video-volume-completed {\n  height: 50%;\n  background-color: #f00;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-volume .video-volume-set .video-volume-progress .video-volume-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #f00;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 4002;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-duration-time {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n  opacity: 0.7;\n  margin-left: 5px;\n  height: 100%;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-left .video-duration-time:hover {\n  opacity: 1;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-medium {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%;\n  position: relative;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin-right: 10px;\n  height: 100%;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-controller {\n  margin-left: 5px;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-playrate {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 5px;\n  position: relative;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-playrate .video-playrate-set {\n  width: 70px;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  list-style: none;\n  outline: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-playrate .video-playrate-set li {\n  color: #fff;\n  text-align: center;\n  height: 26px;\n  line-height: 26px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-playrate .video-playrate-set li:hover {\n  background-color: #c9ccd0;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set {\n  height: auto;\n  max-height: 300px;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n          backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 3px;\n  font-size: 13px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-main,\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-subtitle,\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-playrate,\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-main,\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-opacity,\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-range,\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-danmaku-size {\n  width: 100%;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 35px;\n  cursor: pointer;\n  color: #fffc;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item:hover {\n  color: #f00;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft {\n  white-space: nowrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-icon {\n  height: 24px;\n  width: 24px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-icon svg {\n  height: 100%;\n  width: 100%;\n  fill: #fff;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-text {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-tip {\n  white-space: nowrap;\n  color: #ffffff80;\n  margin-right: 5px;\n  font-size: 12px;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-icon {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 24px;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-icon svg {\n  width: 100%;\n  height: 100%;\n  fill: #fff;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings svg {\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-subsettings-animate {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-screenshot svg {\n  -webkit-transition: -webkit-transform 0.25s ease;\n  transition: -webkit-transform 0.25s ease;\n  transition: transform 0.25s ease;\n  transition: transform 0.25s ease, -webkit-transform 0.25s ease;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-screenshot-animate {\n  -webkit-transform: scale(0.85);\n          transform: scale(0.85);\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-videoshot svg {\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.Niplayer_video-wrapper .video-toolbar .video-bottombar .video-bottombar-right .video-videoshot-animate {\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n}\n.Niplayer_video-wrapper .video-mask {\n  position: absolute;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.Niplayer_video-wrapper .video-loading {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 4000;\n  background-color: rgba(0, 0, 0, 0.4);\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.Niplayer_video-wrapper .video-loading .video-loading-loadingbox {\n  height: 30px;\n  width: 30px;\n  border: 2px solid #fff;\n  border-top-color: transparent;\n  border-radius: 100%;\n  -webkit-animation: circle infinite 0.75s linear;\n          animation: circle infinite 0.75s linear;\n}\n.Niplayer_video-wrapper .video-loading .video-loading-errorbox {\n  height: 30px;\n  width: 30px;\n  background-color: red;\n}\n.Niplayer_video-wrapper .video-loading .video-loading-msgbox {\n  padding: 0px 5px;\n  color: #fff;\n  font-size: 13px;\n  margin-top: 10px;\n}\n@-webkit-keyframes circle {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes circle {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.video-switch-on {\n  fill: #007aff !important;\n}\n.video-switch-off {\n  fill: #fff !important;\n}\n.Nplayer_controller {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 4px;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  color: #fff;\n  opacity: 0.9;\n  position: relative;\n}\n.Nplayer_controller:hover svg {\n  opacity: 1 !important;\n}\n.Nplayer_controller:hover .video-controller-span {\n  opacity: 1;\n}\n.Nplayer_controller .video-controller-span,\n.Nplayer_controller span {\n  width: 100%;\n  height: 100%;\n  font-weight: 550;\n  color: #fff;\n  padding: 0 5px;\n  font-size: 14px;\n  line-height: 22px;\n  opacity: 0.85;\n}\n.Nplayer_controller .video-icon {\n  height: 100%;\n  width: 100%;\n}\n.Nplayer_controller .video-icon svg {\n  height: 100%;\n  width: 100%;\n  opacity: 0.8;\n}\n.Nplayer_controller .video-icon svg path {\n  fill: #fff;\n}\n.Nplayer_controller .video-set-hidden {\n  display: none !important;\n}\n.Nplayer_subsettings .video-subsettings-set {\n  height: auto;\n  max-height: 300px;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n          backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 3px;\n  font-size: 13px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-main,\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-subtitle,\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-playrate,\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-danmaku-main,\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-danmaku-opacity,\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-danmaku-range,\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-danmaku-size {\n  width: 100%;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 35px;\n  cursor: pointer;\n  color: #fffc;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item:hover {\n  color: #f00;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft {\n  white-space: nowrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-icon {\n  height: 24px;\n  width: 24px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-icon svg {\n  height: 100%;\n  width: 100%;\n  fill: #fff;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemleft .video-subsettings-itemleft-text {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-tip {\n  white-space: nowrap;\n  color: #ffffff80;\n  margin-right: 5px;\n  font-size: 12px;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-icon {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 24px;\n}\n.Nplayer_subsettings .video-subsettings-set .video-subsettings-item .video-subsettings-itemright .video-subsettings-itemright-icon svg {\n  width: 100%;\n  height: 100%;\n  fill: #fff;\n}\n.Nplayer_subsettings svg {\n  -webkit-transition: -webkit-transform 0.5s ease;\n  transition: -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n.video-controller {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 4px;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  color: #fff;\n  opacity: 0.9;\n  position: relative;\n}\n.video-controller:hover svg {\n  opacity: 1 !important;\n}\n.video-controller:hover .video-controller-span {\n  opacity: 1;\n}\n.video-controller .video-controller-span,\n.video-controller span {\n  width: 100%;\n  height: 100%;\n  font-weight: 550;\n  color: #fff;\n  padding: 0 5px;\n  font-size: 14px;\n  line-height: 22px;\n  opacity: 0.85;\n}\n.video-controller .video-icon {\n  height: 100%;\n  width: 100%;\n}\n.video-controller .video-icon svg {\n  height: 100%;\n  width: 100%;\n  opacity: 0.8;\n}\n.video-controller .video-icon svg path {\n  fill: #fff;\n}\n.video-controller .video-set-hidden {\n  display: none !important;\n}\n.video-controller .video-set {\n  bottom: 48px;\n  position: absolute;\n  background: rgba(21, 21, 21, 0.9);\n  text-align: center;\n  border-radius: 2px;\n  padding: 5px 5px;\n  left: 50%;\n  white-space: nowrap;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-animation: slideIn 0.5s ease;\n          animation: slideIn 0.5s ease;\n}\n@-webkit-keyframes slideIn {\n  from {\n    -webkit-transform: translate(-50%, 10px);\n            transform: translate(-50%, 10px);\n  }\n  to {\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n  }\n}\n@keyframes slideIn {\n  from {\n    -webkit-transform: translate(-50%, 10px);\n            transform: translate(-50%, 10px);\n  }\n  to {\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n  }\n}\n.video-topbar-controller {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 4px;\n  height: 100%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  color: #fff;\n  opacity: 0.9;\n  position: relative;\n  width: 30px;\n}\n.video-topbar-controller:hover svg {\n  opacity: 1 !important;\n}\n.video-topbar-controller:hover .video-controller-span {\n  opacity: 1;\n}\n.video-topbar-controller .video-controller-span,\n.video-topbar-controller span {\n  width: 100%;\n  height: 100%;\n  font-weight: 550;\n  color: #fff;\n  padding: 0 5px;\n  font-size: 14px;\n  line-height: 22px;\n  opacity: 0.85;\n}\n.video-topbar-controller .video-icon {\n  height: 100%;\n  width: 100%;\n}\n.video-topbar-controller .video-icon svg {\n  height: 100%;\n  width: 100%;\n  opacity: 0.8;\n}\n.video-topbar-controller .video-icon svg path {\n  fill: #fff;\n}\n.video-topbar-controller .video-set-hidden {\n  display: none !important;\n}\n.video-topbar-controller .video-set {\n  top: 32px;\n  position: absolute;\n  background: rgba(21, 21, 21, 0.9);\n  text-align: center;\n  border-radius: 2px;\n  padding: 5px 5px;\n  left: 50%;\n  white-space: nowrap;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-animation: slideIn 0.5s ease;\n          animation: slideIn 0.5s ease;\n}\n.flex-vertical-center {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.flex-vertical-horizontal-center {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.flex-horizontal-center {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.toast-icon {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n  margin-right: 10px;\n}\n.toast-content {\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 10px 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.toast-content svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n  margin-right: 10px;\n}\n.video-wrapper-fullpage {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 4000;\n}\n.fullscreen-mask {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #000;\n  z-index: 4000;\n}\n.video-cross-screen {\n  position: fixed;\n  top: -375px;\n  left: 50%;\n  background: #000;\n  -webkit-transform-origin: 0;\n          transform-origin: 0;\n  -webkit-transform: rotate(90deg) translate3d(0, 0, 0);\n          transform: rotate(90deg) translate3d(0, 0, 0);\n}\n.video-screenshot-toast {\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 10px 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-screenshot-toast svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n  margin-right: 10px;\n}\n.video-videoshot-inprogress-toast,\n.video-videoshot-success-toast {\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 10px 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.video-videoshot-inprogress-toast svg,\n.video-videoshot-success-toast svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n  margin-right: 10px;\n}\n.video-videoshot-inprogress-toast svg {\n  -webkit-animation: countdown 0.5s ease infinite;\n          animation: countdown 0.5s ease infinite;\n}\n@-webkit-keyframes countdown {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  100% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n}\n@keyframes countdown {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  100% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n}\n";
	styleInject(css_248z$1);

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

	var HTTPRequest = /*#__PURE__*/_createClass(function HTTPRequest(config) {
	  _classCallCheck(this, HTTPRequest);
	  _defineProperty(this, "url", '');
	  this.url = config.url;
	  this.header = config.header;
	  this.method = config.method;
	  this.responseType = config.responseType || 'arraybuffer';
	  this.xhr = config.xhr;
	});

	var XHRLoader = /*#__PURE__*/function () {
	  function XHRLoader() {
	    _classCallCheck(this, XHRLoader);
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
	      xhr.responseType = request.responseType;
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
	    _defineProperty(this, "timeoutID", null);
	    _defineProperty(this, "url", '');
	    _defineProperty(this, "callback", null);
	    _defineProperty(this, "eof", false);
	    this.url = url || '';
	    this.loader = new XHRLoader();
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
	      window.clearTimeout(this.timeoutID);
	      this.timeoutID = null;
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
	      if (this.isStopped()) return;
	      var ctx = this;
	      // eof为true表示整个媒体文件已经请求完毕
	      if (ctx.totalLength !== 0 && ctx.chunkStart >= ctx.totalLength) {
	        ctx.eof = true;
	      }
	      if (ctx.eof === true) {
	        mp4box_all.Log.info('Downloader', 'File download done.');
	        ctx.callback(null, true);
	        return;
	      }
	      var request = this.initHttpRequest();
	      this.loader.load({
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
	        if (ctx.totalLength === 0 && rangeReceived) {
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
	        // console.log('成功拿到请求:', buffer)
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
	  function MediaPlayer(url, player) {
	    _classCallCheck(this, MediaPlayer);
	    _defineProperty(this, "lastSeekTime", 0);
	    this.url = url;
	    this.player = player;
	    this.init();
	  }
	  _createClass(MediaPlayer, [{
	    key: "init",
	    value: function init() {
	      this.mp4boxfile = MP4Box.createFile();
	      this.downloader = new DownLoader(this.url);
	      this.mediaSource = new MediaSource();
	      this.player.video.src = _URL.createObjectURL(this.mediaSource);
	      this.initEvent();
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this = this;
	      var ctx = this;
	      this.mediaSource.addEventListener('sourceopen', function (e) {
	        _this.loadFile();
	      });

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
	        var sb = user;
	        sb.segmentIndex++;
	        sb.pendingAppends.push({
	          id: id,
	          buffer: buffer,
	          sampleNum: sampleNum,
	          is_last: is_last
	        });
	        ctx.onUpdateEnd.call(sb, true, false, ctx);
	      };

	      // 当用户开始移动/跳跃到新的视频播放位置时触发
	      this.player.on('seeking', function (e) {
	        var i, start, end;
	        var seek_info;
	        var video = _this.player.video;
	        if (_this.lastSeekTime !== video.currentTime) {
	          for (i = 0; i < video.buffered.length; i++) {
	            start = video.buffered.start(i);
	            end = video.buffered.end(i);
	            if (video.currentTime >= start && video.currentTime <= end) {
	              return;
	            }
	          }
	          _this.downloader.stop();
	          seek_info = _this.mp4boxfile.seek(video.currentTime, true);
	          _this.downloader.setChunkStart(seek_info.offset);
	          _this.downloader.resume();
	          _this.lastSeekTime = video.currentTime;
	        }
	      });
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      // seek(): 指示下一个要处理的样本(用于提取或分割)在给定时间(数字，以秒为单位)或在前一个随机接入点的时间(如果useRap为true，默认为false)开始
	      // 返回将通过appendBuffer提供的下一个字节在文件中的偏移量
	      this.downloader.setChunkStart(this.mp4boxfile.seek(0, true).offset);
	      this.downloader.setChunkSize(1000000);
	      this.downloader.setInterval(1000);
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
	      var sb;
	      if (MediaSource.isTypeSupported(mime)) {
	        try {
	          console.log('MSE - SourceBuffer #' + track_id, "Creation with type '" + mime + "'");
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
	          this.mp4boxfile.setSegmentOptions(track_id, sb);
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
	      // this.player.video.play()
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
	        // sb.addEventListener('updateend', this.onInitAppended)
	        sb.onupdateend = this.onInitAppended;
	        mp4box_all.Log.info('MSE - SourceBuffer #' + sb.id, 'Appending initialization data');
	        sb.appendBuffer(initSegs[i].buffer);
	        sb.segmentIndex = 0;
	        sb.ms.pendingInits++;
	      }
	    }
	  }, {
	    key: "onInitAppended",
	    value: function onInitAppended(e) {
	      console.log('@@@@', this);
	      var ctx = this;
	      var sb = e.target;
	      if (sb.ms.readyState === 'open') {
	        sb.sampleNum = 0;
	        // sb.removeEventListener('updateend', this.onInitAppended)
	        sb.onupdateend = null;
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

	var css_248z = ".video-mobile-medium-wrapper {\n  position: absolute;\n  height: 40px;\n  width: 40%;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  border-radius: 5px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.video-mobile-medium-wrapper .video-mobile-medium-iconbox {\n  height: 100%;\n  min-width: 30px;\n}\n.video-mobile-medium-wrapper .video-mobile-medium-iconbox svg {\n  height: 100%;\n  width: 100%;\n}\n.video-mobile-medium-wrapper .video-mobile-medium-iconbox svg path {\n  fill: #fff;\n}\n.video-mobile-medium-wrapper .video-mobile-medium-progressbox {\n  height: 3px;\n  background-color: #fff;\n  -webkit-box-flex: 0.9;\n  -webkit-flex-grow: 0.9;\n      -ms-flex-positive: 0.9;\n          flex-grow: 0.9;\n  margin-left: 5px;\n  border-radius: 3px;\n}\n.video-mobile-medium-wrapper .video-mobile-medium-progressbox .video-mobile-medium-completed {\n  background-color: #007aff;\n  height: 100%;\n  width: 0;\n}\n";
	styleInject(css_248z);

	function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var MobileVolume = /*#__PURE__*/function (_Component) {
	  _inherits(MobileVolume, _Component);
	  var _super = _createSuper$2(MobileVolume);
	  function MobileVolume(player, container, desc, props, children) {
	    var _this;
	    _classCallCheck(this, MobileVolume);
	    _this = _super.call(this, container, desc, props, children);
	    _defineProperty(_assertThisInitialized(_this), "id", 'MobileVolume');
	    _defineProperty(_assertThisInitialized(_this), "timer", 0);
	    _this.player = player;
	    _this.props = props || {};
	    _this.init();
	    return _this;
	  }
	  _createClass(MobileVolume, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-mobile-medium-wrapper']);
	      this.el.style.display = 'none';
	      this.iconBox = $$M('div.video-mobile-medium-iconbox');
	      this.progressBox = $$M('div.video-mobile-medium-progressbox');
	      this.completedBox = $$M('div.video-mobile-medium-completed', {
	        style: {
	          width: '0px'
	        }
	      });
	      this.icon = createSvg(volumePath$1);
	      this.iconBox.appendChild(this.icon);
	      this.progressBox.appendChild(this.completedBox);
	      this.el.appendChild(this.iconBox);
	      this.el.appendChild(this.progressBox);
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      var width = this.completedBox.clientWidth;
	      this.player.on(EVENT.MOVE_VERTICAL, function (e) {
	        // console.log('正在滑动')
	        if (_this2.timer) {
	          window.clearInterval(_this2.timer);
	        }
	        _this2.timer = null;
	        _this2.el.style.display = '';
	        var dy = e.deltaY;
	        var scale = (width + -dy) / _this2.progressBox.clientWidth;
	        if (scale < 0) {
	          scale = 0;
	        } else if (scale > 1) {
	          scale = 1;
	        }
	        // console.log(scale)
	        _this2.completedBox.style.width = scale * 100 + '%';
	        _this2.player.video.volume = scale;
	      });
	      this.player.on(EVENT.SLIDE_VERTICAL, function (e) {
	        // console.log('滑动结束')
	        width = _this2.completedBox.clientWidth;
	        _this2.timer = window.setTimeout(function () {
	          _this2.el.style.display = 'none';
	        }, 600);
	      });
	      this.player.on(EVENT.VIDEO_CLICK, function () {
	        _this2.el.style.display = 'none';
	      });
	    }
	  }]);
	  return MobileVolume;
	}(Component);

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray(o, minLen) { var _context3; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context3 = Object.prototype.toString.call(o)).call(_context3, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	var Subtitle = /*#__PURE__*/function () {
	  // readonly id = 'Subtitle'
	  // el: div.video-texttrack-container

	  // 一个textTrack对应一个字幕文件

	  function Subtitle(player, subtitles) {
	    _classCallCheck(this, Subtitle);
	    this.player = player;
	    this.subtitles = subtitles;
	    this.init();
	  }
	  _createClass(Subtitle, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initTextTrack();
	      this.adjustSubtitleStyle(this.defaultSubtitle);
	      this.initEvent();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      // 设置字幕的样式
	      this.el = $$M('div.video-texttrack-container');
	      this.player.el.appendChild(this.el);
	      this.subsettingsMain = SubsettingsMain.instance;
	      this.leadItem = this.subsettingsMain.registerSubsettingsItem({
	        leftIcon: createSvgs([subtitlePath$1, subtitlePath$2], '0 0 1024 1024'),
	        leftText: '字幕设置',
	        rightTip: '默认',
	        rightIcon: createSvg(rightarrowPath, '0 0 1024 1024'),
	        target: SubsettingsSubtitle
	      });
	    }

	    // 调整字幕的样式
	  }, {
	    key: "adjustSubtitleStyle",
	    value: function adjustSubtitleStyle(subtitle) {
	      // console.log(subtitle.style)
	      for (var key in this.defaultSubtitle.style) {
	        this.el.style[key] = '';
	      }
	      if (subtitle.style) {
	        for (var _key in subtitle.style) {
	          this.el.style[_key] = subtitle.style[_key];
	        }
	      }
	    }
	  }, {
	    key: "initTextTrack",
	    value: function initTextTrack() {
	      var _this = this;
	      this.xhrLoader = new XHRLoader();
	      this.onsuccess = this.onsuccess.bind(this);
	      this.defaultSubtitle = this.subtitles[0];
	      var _iterator = _createForOfIteratorHelper(this.subtitles),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var subtitle = _step.value;
	          if (subtitle.default) {
	            this.defaultSubtitle = subtitle;
	            break;
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	      this.trackElement = document.createElement('track');
	      this.player.video.appendChild(this.trackElement);
	      this.player.on('HideSubtitle', function () {
	        _this.currentSource = _this.trackElement.src;
	        _this.trackElement.src = '';
	        _this.el.innerHTML = '';
	      });
	      this.player.on('ShowSubtitle', function () {
	        _this.trackElement.src = _this.currentSource;
	      });

	      // 初始化设置栏中的字幕设置选项
	      nextTick$1(function () {
	        var _context;
	        var ctx = _this;
	        _this.subsettingsSubtitle = SubsettingsSubtitle.instance;
	        _forEachInstanceProperty(_context = _this.subtitles).call(_context, function (item) {
	          var leftIcon = null;
	          if (item === _this.defaultSubtitle) {
	            leftIcon = createSvg(settingsConfirmPath, '0 0 1024 1024');
	          }
	          var subsettingsItem = _this.subsettingsSubtitle.registerSubsettingsItem({
	            leftIcon: leftIcon,
	            leftText: item.tip,
	            target: SubsettingsMain,
	            click: function click(value) {
	              ctx.leadItem.instance.rightTipBox.innerText = value.leftText;
	              ctx.trackElement.src = item.source; //改变字幕，就是修改字幕的源文件
	              ctx.adjustSubtitleStyle(item); //每次修改字幕时都需要调整其字幕样式
	              ctx.defaultSubtitle = item;
	              for (var index in ctx.subtitles) {
	                ctx.subtitles[index].instance.leftIconBox.innerHTML = '';
	                if (value.leftIcon) delete value.leftIcon;
	                if (ctx.subtitles[index].instance === value.instance) {
	                  value.leftIcon = createSvg(settingsConfirmPath);
	                  ctx.subtitles[index].instance.leftIconBox.appendChild(value.leftIcon);
	                }
	              }
	            }
	          });
	          item.instance = subsettingsItem.instance;
	        });
	      });
	      this.loadVTTFile(this.defaultSubtitle.source);
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      this.player.on(EVENT.SHOW_TOOLBAR, function () {
	        addClass(_this2.el, ['video-texttrack-container-showtoolbar']);
	      });
	      this.player.on(EVENT.HIDE_TOOLBAR, function () {
	        removeClass(_this2.el, ['video-texttrack-container-showtoolbar']);
	      });

	      // textTracks 属性返回 TextTrackList 对象。TextTrackList 对象代表视频的可用文本轨道。
	      // 每个可用的文本轨道都由一个 TextTrack 对象表示。
	      this.textTrack = this.player.video.textTracks[0];
	      this.textTrack.mode = 'hidden'; // 默认隐藏字幕，使用我们自己的样式
	      this.textTrack.addEventListener('cuechange', function (e) {
	        // 设置mode: hidden, 每次加载字幕会触发这个回调
	        _this2.el.innerHTML = '';
	        if (_this2.textTrack.activeCues.length > 0) {
	          var _context2;
	          _forEachInstanceProperty(_context2 = _toConsumableArray(_this2.textTrack.activeCues)).call(_context2, function (cue) {
	            if (!cue) return;
	            var texts = cue.text.split('\n');
	            _forEachInstanceProperty(texts).call(texts, function (text) {
	              var p = $$M('p');
	              p.innerText = text;
	              _this2.el.appendChild(p);
	            });
	          });
	        }
	      });
	    }

	    // 加载字幕文件
	  }, {
	    key: "loadVTTFile",
	    value: function loadVTTFile(source) {
	      var _this3 = this;
	      var request = new HTTPRequest({
	        url: source,
	        method: 'get'
	      });
	      this.xhrLoader.load({
	        request: request,
	        success: function success(response) {
	          _this3.onsuccess(response);
	        } //指定成功加载的回调
	      });
	    }
	  }, {
	    key: "onsuccess",
	    value: function onsuccess(response) {
	      var url = _URL.createObjectURL(new Blob([response]));
	      this.trackElement.src = url;
	      this.trackElement.default = true;
	      this.trackElement.srclang = this.defaultSubtitle.tip;
	      this.trackElement.kind = 'subtitles';
	    }
	  }]);
	  return Subtitle;
	}();

	var ContextMenuItem = /*#__PURE__*/function () {
	  // el: div.video-context-menu-item

	  function ContextMenuItem(container, content) {
	    _classCallCheck(this, ContextMenuItem);
	    _defineProperty(this, "id", 'ContextMenuItem');
	    this.container = container;
	    this.content = content;
	    this.init();
	  }
	  _createClass(ContextMenuItem, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initEvent();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      this.el = $$M('div.video-context-menu-item');
	      this.container.append(this.el);
	      if (typeof this.content === 'string') {
	        this.el.innerHTML = this.content;
	      } else {
	        this.el.append(this.content);
	      }
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {}
	  }]);
	  return ContextMenuItem;
	}();

	var name = "niplayer";
	var version = "1.3.3";
	var description = "This is a TS library for video player";
	var main = "./dist/player.umd.js";
	var module = "./dist/player.esm.js";
	var types = "./dist/index.d.ts";
	var scripts = {
		"clean:dist": "rimraf dist",
		server: "node server.js",
		dev: "rollup -c script/rollup.config.dev.js --watch",
		start: "run-p server dev",
		build: "rollup -c script/rollup.config.prod.js",
		"build:tsc": "tsc",
		"build:dts": "dts-bundle-generator -o ./dist/index.d.ts ./src/index.ts --project tsconfig.json  --no-check",
		test: "vitest",
		coverage: "vitest run --coverage"
	};
	var author = "";
	var license = "ISC";
	var devDependencies = {
		"@babel/core": "^7.21.8",
		"@babel/plugin-transform-runtime": "^7.21.4",
		"@babel/preset-env": "^7.21.5",
		"@babel/preset-typescript": "^7.22.5",
		"@babel/runtime-corejs3": "^7.21.5",
		"@rollup/plugin-alias": "^5.0.0",
		"@rollup/plugin-babel": "^6.0.3",
		"@rollup/plugin-commonjs": "^24.1.0",
		"@rollup/plugin-json": "^6.0.0",
		"@rollup/plugin-node-resolve": "^15.0.2",
		"@rollup/plugin-terser": "^0.4.1",
		"@rollup/plugin-typescript": "^11.1.1",
		"@types/babel__core": "^7.20.0",
		"@types/node": "^20.2.5",
		"@vitest/coverage-c8": "^0.31.0",
		autoprefixer: "^10.4.14",
		"core-js": "^3.30.1",
		"dts-bundle-generator": "^8.0.1",
		express: "^4.18.2",
		less: "^4.1.3",
		"npm-run-all": "^4.1.5",
		postcss: "^8.4.23",
		rimraf: "^5.0.0",
		rollup: "^3.24.0",
		"rollup-plugin-livereload": "^2.0.5",
		"rollup-plugin-node-builtins": "^2.1.2",
		"rollup-plugin-node-globals": "^1.4.0",
		"rollup-plugin-postcss": "^4.0.2",
		"rollup-plugin-serve": "^2.0.2",
		typescript: "^4.9.5",
		vitest: "^0.31.0"
	};
	var browserslist = [
		"defaults",
		"not ie < 8",
		"last 2 versions",
		"> 1%",
		"iOS 7",
		"last 3 iOS versions"
	];
	var dependencies = {
		"be-full": "^0.1.4",
		mp4box: "^0.5.2",
		"ntouch.js": "^1.1.0",
		"socket.io": "^4.6.2",
		"socket.io-client": "^4.6.2"
	};
	var pkg = {
		name: name,
		version: version,
		description: description,
		main: main,
		module: module,
		types: types,
		scripts: scripts,
		author: author,
		license: license,
		devDependencies: devDependencies,
		browserslist: browserslist,
		dependencies: dependencies
	};

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	// 右击菜单部分
	var ContextMenu = /*#__PURE__*/function (_Component) {
	  _inherits(ContextMenu, _Component);
	  var _super = _createSuper$1(ContextMenu);
	  // el: div.video-context-menu

	  function ContextMenu(player, container, desc) {
	    var _this;
	    _classCallCheck(this, ContextMenu);
	    _this = _super.call(this, container, desc);
	    _defineProperty(_assertThisInitialized(_this), "id", 'ContextMenu');
	    _this.player = player;
	    _this.init();
	    return _this;
	  }
	  _createClass(ContextMenu, [{
	    key: "init",
	    value: function init() {
	      this.initTemplate();
	      this.initComponent();
	      storeControlComponent(this);
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      addClass(this.el, ['video-context-menu']);
	    }

	    // 初始化基础的菜单选项
	  }, {
	    key: "initComponent",
	    value: function initComponent() {
	      this.registerContextMenu('统计信息');
	      this.registerContextMenu("NiPlayer ".concat(pkg.version));
	      this.registerContextMenu('关闭', function (item) {
	        this.el.style.display = '';
	      });
	    }
	  }, {
	    key: "registerContextMenu",
	    value: function registerContextMenu(content, click) {
	      var _this2 = this;
	      var item = new ContextMenuItem(this.el, content);
	      item.el.addEventListener('click', function (e) {
	        e.stopPropagation();
	        if (e.target === item.el) {
	          _this2.el.style.display = '';
	          click && click.call(_this2, item, e);
	        }
	      });
	    }
	  }]);
	  return ContextMenu;
	}(Component);

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var Player = /*#__PURE__*/function (_Component) {
	  _inherits(Player, _Component);
	  var _super = _createSuper(Player);
	  function Player(options) {
	    var _this;
	    _classCallCheck(this, Player);
	    _this = _super.call(this, options.container, 'div.Niplayer_video-wrapper');
	    _defineProperty(_assertThisInitialized(_this), "id", 'Player');
	    _defineProperty(_assertThisInitialized(_this), "isFullscreen", false);
	    _defineProperty(_assertThisInitialized(_this), "enableSeek", true);
	    _defineProperty(_assertThisInitialized(_this), "env", Env.env);
	    _defineProperty(_assertThisInitialized(_this), "fullScreenMode", 'Horizontal');
	    _defineProperty(_assertThisInitialized(_this), "mediaProportion", 9 / 16);
	    _this.playerOptions = _Object$assign({
	      autoPlay: false,
	      streamPlay: false
	    }, options);
	    _this.container = options.container;
	    _this.containerHeight = options.container.clientHeight;
	    _this.containerWidth = options.container.clientWidth;
	    _this.init();
	    return _this;
	  }
	  _createClass(Player, [{
	    key: "init",
	    value: function init() {
	      var _this$playerOptions;
	      if (this.playerOptions.video) {
	        this.video = this.playerOptions.video;
	        this.video.parentNode && this.video.parentNode.removeChild(this.video);
	      } else {
	        // 兼容移动端设置的属性
	        this.video = $$M('video');
	        this.video['playsinline'] = true; // IOS微信浏览器支持小窗内播放,也就是不是全屏播放
	        this.video['x5-video-player-type'] = 'h5'; // 启用H5播放器,是wechat安卓版特性
	      }

	      this.video.crossOrigin = 'anonymous';
	      this.el.appendChild(this.video);

	      // 初始化媒体的播放源
	      ((_this$playerOptions = this.playerOptions) === null || _this$playerOptions === void 0 ? void 0 : _this$playerOptions.url) && this.attachSource(this.playerOptions.url);
	      this.initComponent();
	      this.initTemplate();
	      this.initEvent();
	      this.initPlugin();
	      this.initResizeObserver();
	      this.checkFullScreenMode();
	    }
	  }, {
	    key: "initTemplate",
	    value: function initTemplate() {
	      if (this.env === 'Mobile') {
	        // 如果是在移动端，则音量的调节使用手势决定的
	        this.unmountComponent('Volume');
	        new MobileVolume(this, this.el, 'div');
	      }
	    }
	  }, {
	    key: "initComponent",
	    value: function initComponent() {
	      this.loading = new TimeLoading(this, '视频姬正在努力加载中(⑅˃◡˂⑅)', this.el);
	      this.error = new ErrorLoading(this, '视频加载发送错误', this.el);
	      this.toolBar = new ToolBar(this, this.el, 'div');
	      this.topbar = new TopBar(this, this.el, 'div');
	      this.contextMenu = new ContextMenu(this, this.el, 'div');
	      if (this.playerOptions.subtitles && this.playerOptions.subtitles.length > 0) {
	        new Subtitle(this, this.playerOptions.subtitles);
	      }
	      if (this.playerOptions.danmaku && this.playerOptions.danmaku.open) {
	        this.danmakuController = new DanmakuController(this, this.playerOptions.danmaku);
	      }
	    }
	  }, {
	    key: "initEvent",
	    value: function initEvent() {
	      var _this2 = this;
	      if (this.env === 'Mobile') {
	        this.initMobileEvent();
	      } else {
	        this.initPCEvent();
	      }
	      this.video.addEventListener('loadedmetadata', function (e) {
	        _this2.emit(EVENT.LOADED_META_DATA, e);
	        // videoWidth: 视频原始宽度
	        // videoHeight: 视频原始高度
	        _this2.mediaProportion = _this2.video.videoHeight / _this2.video.videoWidth;
	        _this2.adjustMediaSize();
	      });
	      this.video.addEventListener('timeupdate', function (e) {
	        _this2.emit(EVENT.TIME_UPDATE, e);
	      });
	      this.video.addEventListener('play', function (e) {
	        _this2.emit(EVENT.PLAY, e);
	      });
	      this.video.addEventListener('pause', function (e) {
	        _this2.emit(EVENT.PAUSE, e);
	      });

	      // 寻址中（Seeking）指的是用户在音频/视频中移动/跳跃到新的位置
	      this.video.addEventListener('seeking', function (e) {
	        // 防抖效果：针对Dot按下并且拖动时不触发seeking，拖完鼠标抬起时再触发seeking
	        if (_this2.enableSeek) {
	          _this2.emit(EVENT.SEEKING, e);
	        }
	      });
	      this.video.addEventListener('seeked', function (e) {
	        _this2.emit(EVENT.SEEKED, e);
	      });

	      // waiting 事件在视频由于需要缓冲下一帧而停止时触发
	      this.video.addEventListener('waiting', function (e) {
	        _this2.emit(EVENT.WAITING, e);
	      });

	      // canplay 该视频已准备好开始播放
	      this.video.addEventListener('canplay', function (e) {
	        _this2.emit(EVENT.CAN_PLAY, e);
	      });

	      // error 视频加载发生错误时
	      this.video.addEventListener('error', function (e) {
	        _this2.emit(EVENT.ERROR);
	      });

	      // abort 视频终止加载时
	      this.video.addEventListener('abort', function (e) {
	        _this2.emit(EVENT.ERROR);
	      });

	      // ratechange 事件在音频/视频(audio/video)播放速度发生改变时触发(如用户切换到慢速或快速播放模式)。
	      this.video.addEventListener('ratechange', function (e) {
	        _this2.emit(EVENT.RATE_CHANGE);
	      });
	      this.on(EVENT.DANMAKU_INPUT_FOCUS, function () {
	        _this2.el.onmouseleave = null;
	      });
	      this.on(EVENT.DANMAKU_INPUT_BLUR, function () {
	        _this2.el.onmouseleave = function (e) {
	          _this2.emit(EVENT.HIDE_TOOLBAR, e);
	        };
	      });
	      this.on(EVENT.DOT_DOWN, function () {
	        // console.log('dotdown')
	        _this2.enableSeek = false;
	      });
	      this.on(EVENT.DOT_UP, function () {
	        // console.log('dotup')
	        _this2.enableSeek = true;
	      });
	      this.on(EVENT.VIDEO_DOT_DRAG, function (val, e) {
	        _this2.emit(EVENT.SHOW_TOOLBAR, e);
	      });
	      this.on(EVENT.ENTER_FULLSCREEN, function () {
	        var _context, _context2;
	        _forEachInstanceProperty(_context = document.querySelectorAll('.video-controller')).call(_context, function (el) {
	          el.style.marginRight = '15px';
	        });
	        _forEachInstanceProperty(_context2 = document.querySelectorAll('.video-topbar-controller')).call(_context2, function (el) {
	          el.style.marginRight = '15px';
	        });
	        _this2.isFullscreen = true;
	      });
	      this.on(EVENT.LEAVE_FULLSCREEN, function () {
	        var _context3, _context4;
	        _forEachInstanceProperty(_context3 = document.querySelectorAll('.video-controller')).call(_context3, function (el) {
	          el.style.marginRight = '';
	        });
	        _forEachInstanceProperty(_context4 = document.querySelectorAll('.video-topbar-controller')).call(_context4, function (el) {
	          el.style.marginRight = '';
	        });
	        _this2.isFullscreen = false;
	      });
	    }
	  }, {
	    key: "initPCEvent",
	    value: function initPCEvent() {
	      var _this3 = this;
	      this.el.onclick = function (e) {
	        // if (e.target === this.toolBar.el || e.target === this.toolBar.controller.el) {
	        //   return
	        // }
	        if (_this3.video.paused) {
	          _this3.video.play();
	        } else if (_this3.video.played) {
	          _this3.video.pause();
	        }
	      };
	      this.el.onmouseenter = function (e) {
	        _this3.emit(EVENT.SHOW_TOOLBAR, e);
	      };
	      this.el.onmousemove = function (e) {
	        _this3.emit(EVENT.SHOW_TOOLBAR, e);
	      };
	      this.el.onmouseleave = function (e) {
	        if (!_this3.video.paused) _this3.emit(EVENT.HIDE_TOOLBAR, e);
	      };

	      // 键盘事件
	      document.addEventListener('keyup', function (e) {
	        // console.log(e.key)
	        switch (e.key) {
	          case 'f':
	            ONCE_COMPONENT_STORE.get('FullScreen').requestFullScreen();
	            break;
	          case 'ArrowRight':
	            if (_this3.video.paused) _this3.video.play();
	            if (_this3.video.currentTime + 5 <= _this3.video.duration) {
	              _this3.video.currentTime += 5;
	            }
	            break;
	          case 'ArrowLeft':
	            if (_this3.video.paused) _this3.video.play();
	            if (_this3.video.currentTime - 5 >= 0) {
	              _this3.video.currentTime -= 5;
	            }
	            break;
	          case 'ArrowUp':
	          case 'ArrowDown':
	          case ' ':
	            // 按空格
	            // console.log(this.isFullscreen)
	            if (_this3.isFullscreen) {
	              if (_this3.video.paused) {
	                _this3.video.play();
	              } else if (_this3.video.played) {
	                _this3.video.pause();
	              }
	            }
	        }
	      });

	      // // 鼠标左键事件 单击 隐藏contextMenu
	      // this.el.addEventListener('mousedown', (e: MouseEvent) => {
	      //   if (
	      //     this.contextMenu.el.style.display &&
	      //     this.contextMenu.el.style.display !== '' &&
	      //     e.button === 0
	      //   ) {
	      //     this.contextMenu.el.style.display = ''
	      //   }
	      // })

	      // 鼠标右键事件 打开contextMenu
	      this.el.addEventListener('contextmenu', function (e) {
	        e.preventDefault();
	        _this3.contextMenu.el.style.display = 'block';
	        _this3.contextMenu.el.style.top = e.offsetY + 'px';
	        _this3.contextMenu.el.style.left = e.offsetX + 'px';
	      });
	    }
	  }, {
	    key: "initMobileEvent",
	    value: function initMobileEvent() {
	      var _this4 = this;
	      wrap(this.el).addEventListener('touchstart', function () {
	        _this4.emit(EVENT.DOT_DOWN);
	      });

	      // 单击
	      wrap(this.el).addEventListener('singleTap', function (e) {
	        // console.log(e, 'singletap')
	        if (_this4.toolBar.status === 'hidden') {
	          _this4.emit(EVENT.SHOW_TOOLBAR, e);
	        } else {
	          _this4.emit(EVENT.HIDE_TOOLBAR, e);
	        }
	        _this4.emit(EVENT.VIDEO_CLICK);
	      });

	      // 双击
	      wrap(this.el).addEventListener('doubleTap', function (e) {
	        // console.log(e, 'doubleTap')
	        if (_this4.video.paused) {
	          _this4.video.play();
	        } else if (_this4.video.played) {
	          _this4.video.pause();
	        }
	      });

	      // 手势上下处于滑动中
	      wrap(this.el).addEventListener('move', function (e) {
	        // console.log(e, 'move')
	        var dx = e.deltaX;
	        var dy = e.deltaY;
	        if (computeAngle(dx, dy) >= 75) {
	          _this4.emit(EVENT.MOVE_VERTICAL, e);
	        } else if (computeAngle(dx, dy) <= 15) {
	          _this4.emit(EVENT.MOVE_HORIZONTAL, e);
	        }
	      });

	      // 手势上下滑动结束
	      wrap(this.el).addEventListener('swipe', function (e) {
	        // console.log(e, 'swipe')
	        var dx = e.endPos.x - e.startPos.x;
	        var dy = e.endPos.y - e.startPos.y;
	        // if (Math.abs(dx) <= 20 && Math.abs(dx) < Math.abs(dy)) {
	        //   this.emit('slideVertical', e)
	        // }
	        if (computeAngle(dx, dy) >= 75) {
	          _this4.emit(EVENT.SLIDE_VERTICAL, e);
	        } else if (computeAngle(dx, dy) <= 15) {
	          _this4.emit(EVENT.SLIDE_HORIZONTAL, e);
	        }
	      });
	    }
	  }, {
	    key: "initPlugin",
	    value: function initPlugin() {
	      var _this5 = this;
	      if (this.playerOptions.plugins) {
	        var _context5;
	        _forEachInstanceProperty(_context5 = this.playerOptions.plugins).call(_context5, function (plugin) {
	          _this5.use(plugin);
	        });
	      }
	    }
	  }, {
	    key: "attachSource",
	    value: function attachSource(url) {
	      // 是否启动流式播放
	      if (this.playerOptions.streamPlay) {
	        new MediaPlayer(url, this);
	      } else {
	        this.video.src = url;
	      }
	    }

	    /**
	     * @@description 监听视频播放器大小的变化
	     */
	  }, {
	    key: "initResizeObserver",
	    value: function initResizeObserver() {
	      var _this6 = this;
	      /**
	        window.resize弊端
	          reize事件会在一秒内触发将近60次，所以很容易在改变窗口大小时导致性能问题
	          它会监听每个元素的大小变化，而不是具体到某个元素的变化
	          只有window对象才有resize事件，而不是具体某个元素有resize事件
	        ResizeObserver
	          可以监听到 Element 的内容区域或SVGElement的边界框改变
	       */

	      // 避免`COMPONENT_STORE.set(id, component)`的操作，让`COMPONENT_STORE.forEach`一直死循环
	      var _STORE = new _Map(COMPONENT_STORE);
	      var resizeObserver = new ResizeObserver(function (entries) {
	        // console.log('监听到了尺寸变化了...')
	        // 触发尺寸变化事件
	        _this6.emit(EVENT.RESIZE, {
	          width: entries[0].contentRect.width,
	          height: entries[0].contentRect.height
	        });
	        _this6.adjustMediaSize();
	        var width = entries[0].contentRect.width;
	        var subsetting;
	        // 当尺寸发生变化的时候视频库只调整基本的内置组件，其余用户自定义的组件响应式需要自己实现
	        if (width <= 600) {
	          // 默认在小屏幕的情况下只将SubSetting移动到上端，其余在底部注册的控件需要隐藏
	          _forEachInstanceProperty(_STORE).call(_STORE, function (value, key) {
	            var _context6, _context7;
	            if (_indexOfInstanceProperty(_context6 = ['SubSetting']).call(_context6, key) !== -1) {
	              subsetting = ONCE_COMPONENT_STORE.get(key);
	              _this6.unmountComponent(key);
	            } else if (_indexOfInstanceProperty(_context7 = ['PicInPic', 'Playrate', 'ScreenShot', 'VideoShot']).call(_context7, key) !== -1) {
	              if (!HIDEEN_COMPONENT_STORE.get(key)) {
	                _this6.hideComponent(key);
	              }
	            }
	          });
	          _this6.mountComponent(subsetting.id, subsetting, {
	            mode: {
	              type: 'TopToolBar',
	              pos: 'right'
	            }
	          });
	          addClass(subsetting.el, ['video-subsettings', 'video-topbar-controller']);
	        } else {
	          // 展示之前隐藏的组件
	          var _HIDDEN_STORE = new _Map(HIDEEN_COMPONENT_STORE);
	          _forEachInstanceProperty(_HIDDEN_STORE).call(_HIDDEN_STORE, function (value, key) {
	            _this6.showComponent(key);
	          });
	          if (COMPONENT_STORE.has('SubSetting')) {
	            var key = 'SubSetting';
	            var component = ONCE_COMPONENT_STORE.get(key);
	            // 如果SubSetting已经挂载到视图上，需要先卸载
	            _this6.unmountComponent(key);
	            _this6.mountComponent(key, component, {
	              mode: {
	                type: 'BottomToolBar',
	                pos: 'right'
	              },
	              index: 1
	            });
	            addClass(component.el, ['video-subsettings', 'video-controller']);
	          }
	        }
	      });
	      // 开始观察
	      resizeObserver.observe(this.el);
	    }

	    // 调整video的尺寸
	  }, {
	    key: "adjustMediaSize",
	    value: function adjustMediaSize() {
	      // console.log(this.container, this.container.clientWidth, this.container.clientHeight)
	      if (this.mediaProportion !== 0) {
	        // 容器宽度偏小，高度偏大
	        if (this.el.clientHeight / this.el.clientWidth > this.mediaProportion) {
	          this.video.style.width = '100%';
	          this.video.style.height = this.el.clientWidth * this.mediaProportion + 0.05 * this.el.clientWidth + 'px';
	        } else {
	          // 容器宽度偏大，高度偏小（类似带鱼屏）
	          this.video.style.height = '100%';
	          this.video.style.width = this.el.clientHeight / this.mediaProportion + 'px';
	        }
	      }
	    }
	  }, {
	    key: "checkFullScreenMode",
	    value: function checkFullScreenMode() {}

	    // 注册/挂载自己的组件,其中的id为组件实例的名称，分为内置和用户自定义这两种情况；注意，id是唯一的，不能存在两个具有相同id的组件实例!!!
	  }, {
	    key: "mountComponent",
	    value: function mountComponent(id, component, options) {
	      if (COMPONENT_STORE.has(id)) {
	        throw new Error('无法挂载一个已经存在于视图上的组件，请先将其卸载或者删除');
	      }
	      COMPONENT_STORE.set(id, component);
	      if (!ONCE_COMPONENT_STORE.has(id)) {
	        ONCE_COMPONENT_STORE.set(id, component);
	      }
	      if (!options) {
	        if (!component.container) {
	          throw new Error('必须传入Options选项或者传入的组件实例中需要有container选项');
	        }
	        component.container.appendChild(component.el);
	      } else {
	        var mode = options.mode;
	        if (mode.type === 'BottomToolBar') {
	          var area;
	          if (mode.pos === 'left') {
	            area = this.toolBar.controller.leftArea;
	          } else if (mode.pos === 'right') {
	            area = this.toolBar.controller.rightArea;
	          } else if (mode.pos === 'medium') {
	            area = this.toolBar.controller.mediumArea;
	          }
	          var children = _toConsumableArray(area.children);
	          if (!options.index) {
	            area.appendChild(component.el);
	          } else {
	            if (options.index < 0) throw new Error('index不能传入负值');
	            area.insertBefore(component.el, children[options.index] || null);
	          }
	        } else if (mode.type === 'TopToolBar') {
	          var _area;
	          if (mode.pos === 'left') {
	            _area = this.topbar.leftArea;
	          } else {
	            _area = this.topbar.rightArea;
	          }
	          var _children = _toConsumableArray(_area.children);
	          if (!options.index) {
	            _area.appendChild(component.el);
	          } else {
	            if (options.index < 0) throw new Error('index不能传入负值');
	            _area.insertBefore(component.el, _children[options.index] || null);
	          }
	        } else if (mode.type === 'AnyPosition') {
	          this.el.appendChild(component.el);
	        }
	        // 给组件中的container赋予新的值
	        component.container = component.el.parentElement;
	      }
	    }

	    // 更新一个已经挂载到视图层上的组件
	  }, {
	    key: "updateComponent",
	    value: function updateComponent(id, component, options) {
	      if (!COMPONENT_STORE.get(id)) {
	        throw new Error('该组件不存在或者已经被卸载');
	      }
	      patchComponent(COMPONENT_STORE.get(id), component, options);
	    }

	    // 隐藏某一个已经挂载到视图上的组件
	  }, {
	    key: "hideComponent",
	    value: function hideComponent(id) {
	      if (!COMPONENT_STORE.get(id)) {
	        throw new Error('无法隐藏一个未挂载在视图上的组件');
	      }
	      if (HIDEEN_COMPONENT_STORE.get(id)) {
	        throw new Error('该元素已经隐藏');
	      }
	      var instance = COMPONENT_STORE.get(id);
	      instance.el.style.display = 'none';
	      HIDEEN_COMPONENT_STORE.set(id, instance);
	    }

	    // 展示一个隐藏的组件
	  }, {
	    key: "showComponent",
	    value: function showComponent(id) {
	      if (!HIDEEN_COMPONENT_STORE.get(id)) {
	        throw new Error('该元素已经显示出来了');
	      }
	      if (!COMPONENT_STORE.get(id)) {
	        throw new Error('该元素不存在或者被卸载');
	      }
	      var instance = COMPONENT_STORE.get(id);
	      instance.el.style.display = '';
	      HIDEEN_COMPONENT_STORE.delete(id);
	    }

	    // 卸载某一个component组件，所谓卸载一个组件指的是仅仅将其DOM元素从视图上移除，但是不会删除其实例对象，还可以继续挂载
	    // 注意：卸载一个组件会清除该组件上挂载的class和id，意味着之后用户可以将组件挂载到任何位置
	  }, {
	    key: "unmountComponent",
	    value: function unmountComponent(id) {
	      if (!COMPONENT_STORE.has(id)) {
	        throw new Error('该组件不存在或者已经被卸载');
	      }
	      var instance = COMPONENT_STORE.get(id);
	      instance.el.parentElement.removeChild(instance.el);
	      removeClass(instance.el, _toConsumableArray(instance.el.classList));
	      COMPONENT_STORE.delete(id);
	    }

	    // 彻底删除一个组件，也就是直接销毁组件实例，卸载组件仅仅是将其el元素从视图上移除，但任然保留组建的实例对象
	  }, {
	    key: "deleteComponent",
	    value: function deleteComponent(id) {
	      if (COMPONENT_STORE.has(id)) {
	        this.unmountComponent(id);
	      }
	      ONCE_COMPONENT_STORE.delete(id);
	    }

	    // 注册一个右击菜单项
	  }, {
	    key: "registerContextMenu",
	    value: function registerContextMenu(content, click) {
	      this.contextMenu.registerContextMenu(content, click);
	    }

	    // 注册一个设置选项
	  }, {
	    key: "registerSubsetting",
	    value: function registerSubsetting() {}

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
	// 视频比例 原始高度/原始宽度，默认16:9
	_defineProperty(Player, "player", Player);

	exports.$ = $$M;
	exports.BuiltInControllerComponent = BuiltInControllerComponent;
	exports.COMPONENT_STORE = COMPONENT_STORE;
	exports.Controller = Controller;
	exports.Danmaku = Danmaku;
	exports.DanmakuController = DanmakuController;
	exports.DanmakuInput = DanmakuInput;
	exports.DanmakuOpenClose = DanmakuOpenClose;
	exports.DanmakuSettings = DanmakuSettings;
	exports.DutaionShow = DutaionShow;
	exports.Env = Env;
	exports.ErrorLoading = ErrorLoading;
	exports.FullPage = FullPage;
	exports.FullScreen = FullScreen;
	exports.HIDEEN_COMPONENT_STORE = HIDEEN_COMPONENT_STORE;
	exports.Loading = Loading;
	exports.MediumBar = MediumBar;
	exports.ONCE_COMPONENT_STORE = ONCE_COMPONENT_STORE;
	exports.Options = Options;
	exports.PicInPic = PicInPic;
	exports.PlayButton = PlayButton;
	exports.ScreenShot = ScreenShot;
	exports.SubSetting = SubSetting;
	exports.SubsettingItem = SubsettingItem;
	exports.SubsettingsMain = SubsettingsMain;
	exports.SubsettingsPlayrate = SubsettingsPlayrate;
	exports.SubsettingsSubtitle = SubsettingsSubtitle;
	exports.TimeLoading = TimeLoading;
	exports.Toast = Toast;
	exports.ToolBar = ToolBar;
	exports.TopBar = TopBar;
	exports.VideoProgress = VideoProgress;
	exports.VideoShot = VideoShot;
	exports.Volume = Volume;
	exports.addClass = addClass;
	exports.addZero = addZero;
	exports.changeClass = changeClass;
	exports.checkIsMouseInRange = checkIsMouseInRange;
	exports.computeAngle = computeAngle;
	exports.containsDOM = containsDOM;
	exports.createSvg = createSvg;
	exports.createSvgs = createSvgs;
	exports.default = Player;
	exports.formatTime = formatTime;
	exports.getDOMPoint = getDOMPoint;
	exports.getEl = getEl;
	exports.getElementSize = getElementSize;
	exports.includeClass = includeClass;
	exports.nextTick = nextTick$1;
	exports.patchComponent = patchComponent;
	exports.patchDOMProps = patchDOMProps;
	exports.patchFn = patchFn;
	exports.patchStyle = patchStyle;
	exports.removeClass = removeClass;
	exports.setSvgPath = setSvgPath;
	exports.storeControlComponent = storeControlComponent;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=player.umd.js.map
