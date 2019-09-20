(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!***************************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!************************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*********************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!************************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!*************************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!***************************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!***************************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!****************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/get-browser.js":
/*!****************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/env/get-browser.js ***!
  \****************************************************************************************/
/*! exports provided: isMobile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBrowser; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "../../node_modules/probe.gl/dist/esm/env/globals.js");
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser */ "../../node_modules/probe.gl/dist/esm/env/is-browser.js");
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-electron */ "../../node_modules/probe.gl/dist/esm/env/is-electron.js");



function isMobile() {
  return typeof _globals__WEBPACK_IMPORTED_MODULE_0__["window"].orientation !== 'undefined';
}
function getBrowser(mockUserAgent) {
  if (!mockUserAgent && !Object(_is_browser__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    return 'Node';
  }

  if (Object(_is_electron__WEBPACK_IMPORTED_MODULE_2__["default"])(mockUserAgent)) {
    return 'Electron';
  }

  var navigator_ = typeof navigator !== 'undefined' ? navigator : {};
  var userAgent = mockUserAgent || navigator_.userAgent || '';

  if (userAgent.indexOf('Edge') > -1) {
    return 'Edge';
  }

  var isMSIE = userAgent.indexOf('MSIE ') !== -1;
  var isTrident = userAgent.indexOf('Trident/') !== -1;

  if (isMSIE || isTrident) {
    return 'IE';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["window"].chrome) {
    return 'Chrome';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["window"].safari) {
    return 'Safari';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["window"].mozInnerScreenX) {
    return 'Firefox';
  }

  return 'Unknown';
}
//# sourceMappingURL=get-browser.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/globals.js":
/*!************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/env/globals.js ***!
  \************************************************************************************/
/*! exports provided: self, window, global, document, process, console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "console", function() { return console_; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");

var globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global,
  document: typeof document !== 'undefined' && document,
  process: (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(process)) === 'object' && process
};
var self_ = globals.self || globals.window || globals.global;
var window_ = globals.window || globals.self || globals.global;
var global_ = globals.global || globals.self || globals.window;
var document_ = globals.document || {};
var process_ = globals.process || {};
var console_ = console;

//# sourceMappingURL=globals.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/is-browser.js":
/*!***************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/env/is-browser.js ***!
  \***************************************************************************************/
/*! exports provided: default, isBrowserMainThread */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserMainThread", function() { return isBrowserMainThread; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-electron */ "../../node_modules/probe.gl/dist/esm/env/is-electron.js");


function isBrowser() {
  var isNode = (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(process)) === 'object' && String(process) === '[object process]' && !process.browser;
  return !isNode || Object(_is_electron__WEBPACK_IMPORTED_MODULE_1__["default"])();
}
function isBrowserMainThread() {
  return isBrowser() && typeof document !== 'undefined';
}
//# sourceMappingURL=is-browser.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/env/is-electron.js":
/*!****************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/env/is-electron.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isElectron; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");

function isElectron(mockUserAgent) {
  if (typeof window !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(window.process) === 'object' && window.process.type === 'renderer') {
    return true;
  }

  if (typeof process !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(process.versions) === 'object' && Boolean(process.versions.electron)) {
    return true;
  }

  var realUserAgent = (typeof navigator === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(navigator)) === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent;
  var userAgent = mockUserAgent || realUserAgent;

  if (userAgent && userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}
//# sourceMappingURL=is-electron.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/index.js":
/*!******************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/index.js ***!
  \******************************************************************************/
/*! exports provided: VERSION, self, window, global, document, process, console, isBrowser, isBrowserMainThread, getBrowser, isMobile, isElectron, assert, Stats, Log, COLOR, default, addColor, leftPad, rightPad, autobind, LocalStorage, getHiResTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "../../node_modules/probe.gl/dist/esm/init.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony import */ var _env_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env/globals */ "../../node_modules/probe.gl/dist/esm/env/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["process"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "console", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["console"]; });

/* harmony import */ var _env_is_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env/is-browser */ "../../node_modules/probe.gl/dist/esm/env/is-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _env_is_browser__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowserMainThread", function() { return _env_is_browser__WEBPACK_IMPORTED_MODULE_3__["isBrowserMainThread"]; });

/* harmony import */ var _env_get_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env/get-browser */ "../../node_modules/probe.gl/dist/esm/env/get-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return _env_get_browser__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _env_get_browser__WEBPACK_IMPORTED_MODULE_4__["isMobile"]; });

/* harmony import */ var _env_is_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./env/is-electron */ "../../node_modules/probe.gl/dist/esm/env/is-electron.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElectron", function() { return _env_is_electron__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/assert */ "../../node_modules/probe.gl/dist/esm/utils/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _utils_assert__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _lib_stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/stats */ "../../node_modules/probe.gl/dist/esm/lib/stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return _lib_stats__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/log */ "../../node_modules/probe.gl/dist/esm/lib/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _lib_log__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/color */ "../../node_modules/probe.gl/dist/esm/utils/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_9__["COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addColor", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_9__["addColor"]; });

/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/formatters */ "../../node_modules/probe.gl/dist/esm/utils/formatters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return _utils_formatters__WEBPACK_IMPORTED_MODULE_10__["leftPad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightPad", function() { return _utils_formatters__WEBPACK_IMPORTED_MODULE_10__["rightPad"]; });

/* harmony import */ var _utils_autobind__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/autobind */ "../../node_modules/probe.gl/dist/esm/utils/autobind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return _utils_autobind__WEBPACK_IMPORTED_MODULE_11__["autobind"]; });

/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/local-storage */ "../../node_modules/probe.gl/dist/esm/utils/local-storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return _utils_local_storage__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/hi-res-timestamp */ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHiResTimestamp", function() { return _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_13__["default"]; });












/* harmony default export */ __webpack_exports__["default"] = (new _lib_log__WEBPACK_IMPORTED_MODULE_8__["default"]({
  id: 'probe.gl'
}));





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/init.js":
/*!*****************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/init.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");

_utils_globals__WEBPACK_IMPORTED_MODULE_0__["global"].probe = {};
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/lib/log.js":
/*!********************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/lib/log.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/local-storage */ "../../node_modules/probe.gl/dist/esm/utils/local-storage.js");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/formatters */ "../../node_modules/probe.gl/dist/esm/utils/formatters.js");
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/color */ "../../node_modules/probe.gl/dist/esm/utils/color.js");
/* harmony import */ var _utils_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/autobind */ "../../node_modules/probe.gl/dist/esm/utils/autobind.js");
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/assert */ "../../node_modules/probe.gl/dist/esm/utils/assert.js");
/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/hi-res-timestamp */ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js");












var originalConsole = {
  debug: _utils_globals__WEBPACK_IMPORTED_MODULE_5__["isBrowser"] ? console.debug || console.log : console.log,
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error
};
var DEFAULT_SETTINGS = {
  enabled: false,
  priority: 0
};

function noop() {}

var cache = {};

function getTableHeader(table) {
  for (var key in table) {
    for (var title in table[key]) {
      return title || 'untitled';
    }
  }

  return 'empty';
}

var Log = function () {
  function Log() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Log);

    this.id = id;
    this.VERSION = _utils_globals__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
    this._startTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
    this._deltaTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
    this.LOG_THROTTLE_TIMEOUT = 0;
    this._storage = new _utils_local_storage__WEBPACK_IMPORTED_MODULE_6__["default"]("__probe-".concat(this.id, "__"), DEFAULT_SETTINGS);
    this.userData = {};
    this.timeStamp("".concat(this.id, " started"));
    Object(_utils_autobind__WEBPACK_IMPORTED_MODULE_9__["autobind"])(this);
    Object.seal(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Log, [{
    key: "isEnabled",
    value: function isEnabled() {
      return this._storage.config.enabled;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this._storage.config.priority;
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return this._storage.config.priority;
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      return Number((Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])() - this._startTs).toPrecision(10));
    }
  }, {
    key: "getDelta",
    value: function getDelta() {
      return Number((Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])() - this._deltaTs).toPrecision(10));
    }
  }, {
    key: "enable",
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._storage.updateConfiguration({
        enabled: enabled
      });

      return this;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      this._storage.updateConfiguration({
        priority: level
      });

      return this;
    }
  }, {
    key: "assert",
    value: function assert(condition, message) {
      Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(condition, message);
    }
  }, {
    key: "warn",
    value: function warn(message) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this._getLogFunction({
        message: message,
        args: args,
        method: originalConsole.warn,
        once: true
      });
    }
  }, {
    key: "error",
    value: function error(message) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return this._getLogFunction({
        message: message,
        args: args,
        method: originalConsole.error
      });
    }
  }, {
    key: "deprecated",
    value: function deprecated(oldUsage, newUsage) {
      return this.warn("`".concat(oldUsage, "` is deprecated and will be removed in a later version. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "removed",
    value: function removed(oldUsage, newUsage) {
      return this.error("`".concat(oldUsage, "` has been removed. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "probe",
    value: function probe(priority, message) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: originalConsole.log,
        time: true,
        once: true
      });
    }
  }, {
    key: "log",
    value: function log(priority, message) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: originalConsole.debug
      });
    }
  }, {
    key: "info",
    value: function info(priority, message) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: console.info
      });
    }
  }, {
    key: "once",
    value: function once(priority, message) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        args[_key6 - 2] = arguments[_key6];
      }

      return this._getLogFunction({
        priority: priority,
        message: message,
        args: args,
        method: originalConsole.debug || originalConsole.info,
        once: true
      });
    }
  }, {
    key: "table",
    value: function table(priority, _table, columns) {
      if (_table) {
        var tag = getTableHeader(_table);
        return this._getLogFunction({
          priority: priority,
          message: _table,
          args: columns && [columns],
          tag: tag,
          method: console.table || noop
        });
      }

      return noop;
    }
  }, {
    key: "image",
    value: function image(_ref2) {
      var priority = _ref2.priority,
          _image = _ref2.image,
          _ref2$message = _ref2.message,
          message = _ref2$message === void 0 ? '' : _ref2$message,
          _ref2$scale = _ref2.scale,
          scale = _ref2$scale === void 0 ? 1 : _ref2$scale;

      if (priority > this.getPriority()) {
        return noop;
      }

      return _utils_globals__WEBPACK_IMPORTED_MODULE_5__["isBrowser"] ? this._logImageInBrowser({
        image: _image,
        message: message,
        scale: scale
      }) : this._logImageInNode({
        image: _image,
        message: message,
        scale: scale
      });
    }
  }, {
    key: "settings",
    value: function settings() {
      if (console.table) {
        console.table(this._storage.config);
      } else {
        console.log(this._storage.config);
      }
    }
  }, {
    key: "get",
    value: function get(setting) {
      return this._storage.config[setting];
    }
  }, {
    key: "set",
    value: function set(setting, value) {
      this._storage.updateConfiguration(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, setting, value));
    }
  }, {
    key: "_logImageInNode",
    value: function _logImageInNode(_ref3) {
      var image = _ref3.image,
          _ref3$message = _ref3.message,
          message = _ref3$message === void 0 ? '' : _ref3$message,
          _ref3$scale = _ref3.scale,
          scale = _ref3$scale === void 0 ? 1 : _ref3$scale;
      var asciify = null;

      try {
        asciify = __webpack_require__(/*! asciify-image */ 0);
      } catch (error) {}

      if (asciify) {
        return function () {
          return asciify(image, {
            fit: 'box',
            width: "".concat(Math.round(80 * scale), "%")
          }).then(function (data) {
            return console.log(data);
          });
        };
      }

      return noop;
    }
  }, {
    key: "_logImageInBrowser",
    value: function _logImageInBrowser(_ref4) {
      var image = _ref4.image,
          _ref4$message = _ref4.message,
          message = _ref4$message === void 0 ? '' : _ref4$message,
          _ref4$scale = _ref4.scale,
          scale = _ref4$scale === void 0 ? 1 : _ref4$scale;

      if (typeof image === 'string') {
        var img = new Image();

        img.onload = function () {
          var _console;

          var args = Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatImage"])(img, message, scale);

          (_console = console).log.apply(_console, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(args));
        };

        img.src = image;
        return noop;
      }

      var element = image.nodeName || '';

      if (element.toLowerCase() === 'img') {
        var _console2;

        (_console2 = console).log.apply(_console2, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatImage"])(image, message, scale)));

        return noop;
      }

      if (element.toLowerCase() === 'canvas') {
        var _img = new Image();

        _img.onload = function () {
          var _console3;

          return (_console3 = console).log.apply(_console3, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatImage"])(_img, message, scale)));
        };

        _img.src = image.toDataURL();
        return noop;
      }

      return noop;
    }
  }, {
    key: "time",
    value: function time(priority, message) {
      return this._getLogFunction({
        priority: priority,
        message: message,
        method: console.time ? console.time : console.info
      });
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(priority, message) {
      return this._getLogFunction({
        priority: priority,
        message: message,
        method: console.timeEnd ? console.timeEnd : console.info
      });
    }
  }, {
    key: "timeStamp",
    value: function timeStamp(priority, message) {
      return this._getLogFunction({
        priority: priority,
        message: message,
        method: console.timeStamp || noop
      });
    }
  }, {
    key: "group",
    value: function group(priority, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        collapsed: false
      };
      opts = this._normalizeArguments({
        priority: priority,
        message: message,
        opts: opts
      });
      var _opts = opts,
          collapsed = _opts.collapsed;
      return this._getLogFunction({
        priority: priority,
        message: message,
        opts: opts,
        method: (collapsed ? console.groupCollapsed : console.group) || console.info
      });
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed(priority, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.group(priority, message, Object.assign({}, opts, {
        collapsed: true
      }));
    }
  }, {
    key: "groupEnd",
    value: function groupEnd(priority) {
      return this._getLogFunction({
        priority: priority,
        message: '',
        method: console.groupEnd || noop
      });
    }
  }, {
    key: "withGroup",
    value: function withGroup(priority, message, func) {
      var opts = this._normalizeArguments({
        priority: priority,
        message: message
      });

      this.group(opts);

      try {
        func();
      } finally {
        this.groupEnd(opts.message);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      if (console.trace) {
        console.trace();
      }
    }
  }, {
    key: "_shouldLog",
    value: function _shouldLog(priority) {
      priority = this._normalizePriority(priority);
      return priority === 0 || this.isEnabled() && this.getPriority() >= priority;
    }
  }, {
    key: "_getElapsedTime",
    value: function _getElapsedTime() {
      var total = this.getTotal();
      var delta = this.getDelta();
      this._deltaTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
      return {
        total: total,
        delta: delta
      };
    }
  }, {
    key: "_getLogFunction",
    value: function _getLogFunction(opts) {
      if (this._shouldLog(opts.priority)) {
        var _opts2 = opts,
            method = _opts2.method;
        opts = this._parseArguments(opts);

        Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(method);

        var _opts3 = opts,
            message = _opts3.message;
        var tag = opts.tag || opts.message;

        if (opts.once) {
          if (!cache[tag]) {
            cache[tag] = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"])();
          } else {
            return noop;
          }
        }

        message = this._decorateMessage(message, opts);
        return method.bind.apply(method, [console, message].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(opts.args)));
      }

      return noop;
    }
  }, {
    key: "_parseArguments",
    value: function _parseArguments(options) {
      var normOpts = this._normalizeArguments(options);

      var _this$_getElapsedTime = this._getElapsedTime(),
          delta = _this$_getElapsedTime.delta,
          total = _this$_getElapsedTime.total;

      return Object.assign(options, normOpts, {
        delta: delta,
        total: total
      });
    }
  }, {
    key: "_normalizePriority",
    value: function _normalizePriority(priority) {
      var resolvedPriority;

      switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(priority)) {
        case 'number':
          resolvedPriority = priority;
          break;

        case 'object':
          resolvedPriority = priority.priority || 0;
          break;

        default:
          resolvedPriority = 0;
      }

      Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(Number.isFinite(resolvedPriority) && resolvedPriority >= 0);

      return resolvedPriority;
    }
  }, {
    key: "_normalizeArguments",
    value: function _normalizeArguments(_ref5) {
      var priority = _ref5.priority,
          message = _ref5.message,
          _ref5$args = _ref5.args,
          args = _ref5$args === void 0 ? [] : _ref5$args,
          opts = _ref5.opts;
      var newOpts = {
        priority: this._normalizePriority(priority),
        message: message,
        args: args
      };

      switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(priority)) {
        case 'string':
        case 'function':
          if (message !== undefined) {
            args.unshift(message);
          }

          Object.assign(newOpts, {
            message: priority
          });
          break;

        case 'object':
          Object.assign(newOpts, priority);
          break;

        default:
      }

      if (typeof newOpts.message === 'function') {
        newOpts.message = this._shouldLog(newOpts.priority) ? newOpts.message() : '';
      }

      Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__["default"])(typeof newOpts.message === 'string' || Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(newOpts.message) === 'object');

      return Object.assign(newOpts, opts);
    }
  }, {
    key: "_decorateMessage",
    value: function _decorateMessage(message, opts) {
      if (typeof message === 'string') {
        var time = '';

        if (opts.time) {
          var _this$_getElapsedTime2 = this._getElapsedTime(),
              total = _this$_getElapsedTime2.total;

          time = Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["leftPad"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__["formatTime"])(total));
        }

        message = opts.time ? "".concat(this.id, ": ").concat(time, "  ").concat(message) : "".concat(this.id, ": ").concat(message);
        message = Object(_utils_color__WEBPACK_IMPORTED_MODULE_8__["addColor"])(message, opts.color, opts.background);
      }

      return message;
    }
  }, {
    key: "priority",
    set: function set(newPriority) {
      this._storage.updateConfiguration({
        priority: newPriority
      });

      return this;
    },
    get: function get() {
      return this._storage.config.priority;
    }
  }]);

  return Log;
}();


Log.VERSION = _utils_globals__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/lib/stat.js":
/*!*********************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/lib/stat.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stat; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hi-res-timestamp */ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js");




var Stat = function () {
  function Stat(name) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stat);

    this.name = name;
    this.reset();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stat, [{
    key: "incrementCount",
    value: function incrementCount() {
      this.addCount(1);
    }
  }, {
    key: "decrementCount",
    value: function decrementCount() {
      this.subtractCount(1);
    }
  }, {
    key: "addCount",
    value: function addCount(value) {
      this.count += value;
    }
  }, {
    key: "subtractCount",
    value: function subtractCount(value) {
      this.count -= value;
    }
  }, {
    key: "addTime",
    value: function addTime(time) {
      this.time += time;
      this.lastTiming = time;
      this.count++;
    }
  }, {
    key: "timeStart",
    value: function timeStart() {
      this._startTime = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__["default"])();
      this._timerPending = true;
    }
  }, {
    key: "timeEnd",
    value: function timeEnd() {
      if (!this._timerPending) {
        return;
      }

      this.addTime(Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__["default"])() - this._startTime);
      this._timerPending = false;
    }
  }, {
    key: "getAverageTime",
    value: function getAverageTime() {
      return this.count > 0 ? this.time / this.count : 0;
    }
  }, {
    key: "getHz",
    value: function getHz() {
      return this.time > 0 ? this.count / (this.time / 1000) : 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.time = 0;
      this.count = 0;
      this.lastTiming = 0;
      this._startTime = 0;
      this._timerPending = false;
    }
  }]);

  return Stat;
}();


//# sourceMappingURL=stat.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/lib/stats.js":
/*!**********************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/lib/stats.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat */ "../../node_modules/probe.gl/dist/esm/lib/stat.js");




var Stats = function () {
  function Stats(_ref) {
    var id = _ref.id;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stats);

    this.id = id;
    this.stats = {};
    Object.seal(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stats, [{
    key: "get",
    value: function get(name) {
      this.stats[name] = this.stats[name] || new _stat__WEBPACK_IMPORTED_MODULE_2__["default"](name);
      return this.stats[name];
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var key in this.stats) {
        this.stats[key].reset();
      }

      return this;
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      for (var key in this.stats) {
        fn(this.stats[key]);
      }
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var table = {};
      this.forEach(function (stat) {
        table[stat.name] = {
          time: stat.time || 0,
          count: stat.count || 0,
          average: stat.getAverageTime() || 0,
          hz: stat.getHz() || 0
        };
      });
      return table;
    }
  }]);

  return Stats;
}();


//# sourceMappingURL=stats.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/assert.js":
/*!*************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/utils/assert.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/autobind.js":
/*!***************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/utils/autobind.js ***!
  \***************************************************************************************/
/*! exports provided: autobind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return autobind; });
function autobind(obj) {
  var predefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['constructor'];
  var proto = Object.getPrototypeOf(obj);
  var propNames = Object.getOwnPropertyNames(proto);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var key = _step.value;

      if (typeof obj[key] === 'function') {
        if (!predefined.find(function (name) {
          return key === name;
        })) {
          obj[key] = obj[key].bind(obj);
        }
      }
    };

    for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
//# sourceMappingURL=autobind.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/color.js":
/*!************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/utils/color.js ***!
  \************************************************************************************/
/*! exports provided: COLOR, addColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addColor", function() { return addColor; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");

var COLOR = {
  BLACK: 30,
  RED: 31,
  GREEN: 32,
  YELLOW: 33,
  BLUE: 34,
  MAGENTA: 35,
  CYAN: 36,
  WHITE: 37,
  BRIGHT_BLACK: 90,
  BRIGHT_RED: 91,
  BRIGHT_GREEN: 92,
  BRIGHT_YELLOW: 93,
  BRIGHT_BLUE: 94,
  BRIGHT_MAGENTA: 95,
  BRIGHT_CYAN: 96,
  BRIGHT_WHITE: 97
};

function getColor(color) {
  return typeof color === 'string' ? COLOR[color.toUpperCase()] || COLOR.WHITE : color;
}

function addColor(string, color, background) {
  if (!_globals__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && typeof string === 'string') {
    if (color) {
      color = getColor(color);
      string = "\x1B[".concat(color, "m").concat(string, "\x1B[39m");
    }

    if (background) {
      color = getColor(background);
      string = "\x1B[".concat(background + 10, "m").concat(string, "\x1B[49m");
    }
  }

  return string;
}
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/formatters.js":
/*!*****************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/utils/formatters.js ***!
  \*****************************************************************************************/
/*! exports provided: formatTime, leftPad, rightPad, formatValue, formatImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return leftPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightPad", function() { return rightPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatImage", function() { return formatImage; });
function formatTime(ms) {
  var formatted;

  if (ms < 10) {
    formatted = "".concat(ms.toFixed(2), "ms");
  } else if (ms < 100) {
    formatted = "".concat(ms.toFixed(1), "ms");
  } else if (ms < 1000) {
    formatted = "".concat(ms.toFixed(0), "ms");
  } else {
    formatted = "".concat((ms / 1000).toFixed(2), "s");
  }

  return formatted;
}
function leftPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(' '.repeat(padLength)).concat(string);
}
function rightPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(string).concat(' '.repeat(padLength));
}
function formatValue(v) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var EPSILON = 1e-16;
  var _opts$isInteger = opts.isInteger,
      isInteger = _opts$isInteger === void 0 ? false : _opts$isInteger;

  if (Array.isArray(v) || ArrayBuffer.isView(v)) {
    return formatArrayValue(v, opts);
  }

  if (!Number.isFinite(v)) {
    return String(v);
  }

  if (Math.abs(v) < EPSILON) {
    return isInteger ? '0' : '0.';
  }

  if (isInteger) {
    return v.toFixed(0);
  }

  if (Math.abs(v) > 100 && Math.abs(v) < 10000) {
    return v.toFixed(0);
  }

  var string = v.toPrecision(2);
  var decimal = string.indexOf('.0');
  return decimal === string.length - 2 ? string.slice(0, -1) : string;
}

function formatArrayValue(v, opts) {
  var _opts$maxElts = opts.maxElts,
      maxElts = _opts$maxElts === void 0 ? 16 : _opts$maxElts,
      _opts$size = opts.size,
      size = _opts$size === void 0 ? 1 : _opts$size;
  var string = '[';

  for (var i = 0; i < v.length && i < maxElts; ++i) {
    if (i > 0) {
      string += ",".concat(i % size === 0 ? ' ' : '');
    }

    string += formatValue(v[i], opts);
  }

  var terminator = v.length > maxElts ? '...' : ']';
  return "".concat(string).concat(terminator);
}

function formatImage(image, message, scale) {
  var maxWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
  var imageUrl = image.src.replace(/\(/g, '%28').replace(/\)/g, '%29');

  if (image.width > maxWidth) {
    scale = Math.min(scale, maxWidth / image.width);
  }

  var width = image.width * scale;
  var height = image.height * scale;
  var style = ['font-size:1px;', "padding:".concat(Math.floor(height / 2), "px ").concat(Math.floor(width / 2), "px;"), "line-height:".concat(height, "px;"), "background:url(".concat(imageUrl, ");"), "background-size:".concat(width, "px ").concat(height, "px;"), 'color:transparent;'].join('');
  return ["".concat(message, " %c+"), style];
}
//# sourceMappingURL=formatters.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/globals.js":
/*!**************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/utils/globals.js ***!
  \**************************************************************************************/
/*! exports provided: self, window, global, document, process, console, VERSION, isBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony import */ var _env_is_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/is-browser */ "../../node_modules/probe.gl/dist/esm/env/is-browser.js");
/* harmony import */ var _env_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env/globals */ "../../node_modules/probe.gl/dist/esm/env/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["process"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "console", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_1__["console"]; });



var VERSION =  true ? "7.0.0-rc.3" : undefined;
var isBrowser = Object(_env_is_browser__WEBPACK_IMPORTED_MODULE_0__["default"])();
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js":
/*!***********************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHiResTimestamp; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "../../node_modules/probe.gl/dist/esm/utils/globals.js");

function getHiResTimestamp() {
  var timestamp;

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && _globals__WEBPACK_IMPORTED_MODULE_0__["window"].performance) {
    timestamp = _globals__WEBPACK_IMPORTED_MODULE_0__["window"].performance.now();
  } else if (_globals__WEBPACK_IMPORTED_MODULE_0__["process"].hrtime) {
    var timeParts = _globals__WEBPACK_IMPORTED_MODULE_0__["process"].hrtime();
    timestamp = timeParts[0] * 1000 + timeParts[1] / 1e6;
  } else {
    timestamp = Date.now();
  }

  return timestamp;
}
//# sourceMappingURL=hi-res-timestamp.js.map

/***/ }),

/***/ "../../node_modules/probe.gl/dist/esm/utils/local-storage.js":
/*!********************************************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/probe.gl/dist/esm/utils/local-storage.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");



function getStorage(type) {
  try {
    var storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return storage;
  } catch (e) {
    return null;
  }
}

var LocalStorage = function () {
  function LocalStorage(id, defaultSettings) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sessionStorage';

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocalStorage);

    this.storage = getStorage(type);
    this.id = id;
    this.config = {};
    Object.assign(this.config, defaultSettings);

    this._loadConfiguration();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocalStorage, [{
    key: "getConfiguration",
    value: function getConfiguration() {
      return this.config;
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      this.config = {};
      return this.updateConfiguration(configuration);
    }
  }, {
    key: "updateConfiguration",
    value: function updateConfiguration(configuration) {
      Object.assign(this.config, configuration);

      if (this.storage) {
        var serialized = JSON.stringify(this.config);
        this.storage.setItem(this.id, serialized);
      }

      return this;
    }
  }, {
    key: "_loadConfiguration",
    value: function _loadConfiguration() {
      var configuration = {};

      if (this.storage) {
        var serializedConfiguration = this.storage.getItem(this.id);
        configuration = serializedConfiguration ? JSON.parse(serializedConfiguration) : {};
      }

      Object.assign(this.config, configuration);
      return this;
    }
  }]);

  return LocalStorage;
}();


//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**********************************************************************!*\
  !*** /Users/tsherif/code/luma-tarek/node_modules/process/browser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../constants/src/index.js":
/*!*********************************!*\
  !*** ../constants/src/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// GL constants, copied from Mozilla documentation
// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants

// Standard WebGL 1 constants
// These constants are defined on the WebGLRenderingContext interface.

/* eslint-disable key-spacing, max-len, no-inline-comments, camelcase */
// eslint-disable-next-line
module.exports = {
  // Clearing buffers
  // Constants passed to clear() to clear buffer masks.

  DEPTH_BUFFER_BIT: 0x00000100,
  STENCIL_BUFFER_BIT: 0x00000400,
  COLOR_BUFFER_BIT: 0x00004000,

  // Rendering primitives
  // Constants passed to drawElements() or drawArrays() to specify what kind of primitive to render.

  POINTS: 0x0000,
  LINES: 0x0001,
  LINE_LOOP: 0x0002,
  LINE_STRIP: 0x0003,
  TRIANGLES: 0x0004,
  TRIANGLE_STRIP: 0x0005,
  TRIANGLE_FAN: 0x0006,

  // Blending modes
  // Constants passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).

  ZERO: 0,
  ONE: 1,
  SRC_COLOR: 0x0300,
  ONE_MINUS_SRC_COLOR: 0x0301,
  SRC_ALPHA: 0x0302,
  ONE_MINUS_SRC_ALPHA: 0x0303,
  DST_ALPHA: 0x0304,
  ONE_MINUS_DST_ALPHA: 0x0305,
  DST_COLOR: 0x0306,
  ONE_MINUS_DST_COLOR: 0x0307,
  SRC_ALPHA_SATURATE: 0x0308,
  CONSTANT_COLOR: 0x8001,
  ONE_MINUS_CONSTANT_COLOR: 0x8002,
  CONSTANT_ALPHA: 0x8003,
  ONE_MINUS_CONSTANT_ALPHA: 0x8004,

  // Blending equations
  // Constants passed to blendEquation() or blendEquationSeparate() to control
  // how the blending is calculated (for both, RBG and alpha, or separately).

  FUNC_ADD: 0x8006,
  FUNC_SUBTRACT: 0x800a,
  FUNC_REVERSE_SUBTRACT: 0x800b,

  // Getting GL parameter information
  // Constants passed to getParameter() to specify what information to return.

  BLEND_EQUATION: 0x8009,
  BLEND_EQUATION_RGB: 0x8009,
  BLEND_EQUATION_ALPHA: 0x883d,
  BLEND_DST_RGB: 0x80c8,
  BLEND_SRC_RGB: 0x80c9,
  BLEND_DST_ALPHA: 0x80ca,
  BLEND_SRC_ALPHA: 0x80cb,
  BLEND_COLOR: 0x8005,
  ARRAY_BUFFER_BINDING: 0x8894,
  ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,
  LINE_WIDTH: 0x0b21,
  ALIASED_POINT_SIZE_RANGE: 0x846d,
  ALIASED_LINE_WIDTH_RANGE: 0x846e,
  CULL_FACE_MODE: 0x0b45,
  FRONT_FACE: 0x0b46,
  DEPTH_RANGE: 0x0b70,
  DEPTH_WRITEMASK: 0x0b72,
  DEPTH_CLEAR_VALUE: 0x0b73,
  DEPTH_FUNC: 0x0b74,
  STENCIL_CLEAR_VALUE: 0x0b91,
  STENCIL_FUNC: 0x0b92,
  STENCIL_FAIL: 0x0b94,
  STENCIL_PASS_DEPTH_FAIL: 0x0b95,
  STENCIL_PASS_DEPTH_PASS: 0x0b96,
  STENCIL_REF: 0x0b97,
  STENCIL_VALUE_MASK: 0x0b93,
  STENCIL_WRITEMASK: 0x0b98,
  STENCIL_BACK_FUNC: 0x8800,
  STENCIL_BACK_FAIL: 0x8801,
  STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,
  STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,
  STENCIL_BACK_REF: 0x8ca3,
  STENCIL_BACK_VALUE_MASK: 0x8ca4,
  STENCIL_BACK_WRITEMASK: 0x8ca5,
  VIEWPORT: 0x0ba2,
  SCISSOR_BOX: 0x0c10,
  COLOR_CLEAR_VALUE: 0x0c22,
  COLOR_WRITEMASK: 0x0c23,
  UNPACK_ALIGNMENT: 0x0cf5,
  PACK_ALIGNMENT: 0x0d05,
  MAX_TEXTURE_SIZE: 0x0d33,
  MAX_VIEWPORT_DIMS: 0x0d3a,
  SUBPIXEL_BITS: 0x0d50,
  RED_BITS: 0x0d52,
  GREEN_BITS: 0x0d53,
  BLUE_BITS: 0x0d54,
  ALPHA_BITS: 0x0d55,
  DEPTH_BITS: 0x0d56,
  STENCIL_BITS: 0x0d57,
  POLYGON_OFFSET_UNITS: 0x2a00,
  POLYGON_OFFSET_FACTOR: 0x8038,
  TEXTURE_BINDING_2D: 0x8069,
  SAMPLE_BUFFERS: 0x80a8,
  SAMPLES: 0x80a9,
  SAMPLE_COVERAGE_VALUE: 0x80aa,
  SAMPLE_COVERAGE_INVERT: 0x80ab,
  COMPRESSED_TEXTURE_FORMATS: 0x86a3,
  VENDOR: 0x1f00,
  RENDERER: 0x1f01,
  VERSION: 0x1f02,
  IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a,
  IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b,
  BROWSER_DEFAULT_WEBGL: 0x9244,

  // Buffers
  // Constants passed to bufferData(), bufferSubData(), bindBuffer(), or
  // getBufferParameter().

  STATIC_DRAW: 0x88e4,
  STREAM_DRAW: 0x88e0,
  DYNAMIC_DRAW: 0x88e8,
  ARRAY_BUFFER: 0x8892,
  ELEMENT_ARRAY_BUFFER: 0x8893,
  BUFFER_SIZE: 0x8764,
  BUFFER_USAGE: 0x8765,

  // Vertex attributes
  // Constants passed to getVertexAttrib().

  CURRENT_VERTEX_ATTRIB: 0x8626,
  VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,
  VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,
  VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,
  VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,
  VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a,
  VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f,

  // Culling
  // Constants passed to cullFace().

  CULL_FACE: 0x0b44,
  FRONT: 0x0404,
  BACK: 0x0405,
  FRONT_AND_BACK: 0x0408,

  // Enabling and disabling
  // Constants passed to enable() or disable().

  BLEND: 0x0be2,
  DEPTH_TEST: 0x0b71,
  DITHER: 0x0bd0,
  POLYGON_OFFSET_FILL: 0x8037,
  SAMPLE_ALPHA_TO_COVERAGE: 0x809e,
  SAMPLE_COVERAGE: 0x80a0,
  SCISSOR_TEST: 0x0c11,
  STENCIL_TEST: 0x0b90,

  // Errors
  // Constants returned from getError().

  NO_ERROR: 0,
  INVALID_ENUM: 0x0500,
  INVALID_VALUE: 0x0501,
  INVALID_OPERATION: 0x0502,
  OUT_OF_MEMORY: 0x0505,
  CONTEXT_LOST_WEBGL: 0x9242,

  // Front face directions
  // Constants passed to frontFace().

  CW: 0x0900,
  CCW: 0x0901,

  // Hints
  // Constants passed to hint()

  DONT_CARE: 0x1100,
  FASTEST: 0x1101,
  NICEST: 0x1102,
  GENERATE_MIPMAP_HINT: 0x8192,

  // Data types

  BYTE: 0x1400,
  UNSIGNED_BYTE: 0x1401,
  SHORT: 0x1402,
  UNSIGNED_SHORT: 0x1403,
  INT: 0x1404,
  UNSIGNED_INT: 0x1405,
  FLOAT: 0x1406,

  // Pixel formats

  DEPTH_COMPONENT: 0x1902,
  ALPHA: 0x1906,
  RGB: 0x1907,
  RGBA: 0x1908,
  LUMINANCE: 0x1909,
  LUMINANCE_ALPHA: 0x190a,

  // Pixel types

  // UNSIGNED_BYTE: 0x1401,
  UNSIGNED_SHORT_4_4_4_4: 0x8033,
  UNSIGNED_SHORT_5_5_5_1: 0x8034,
  UNSIGNED_SHORT_5_6_5: 0x8363,

  // Shaders
  // Constants passed to createShader() or getShaderParameter()

  FRAGMENT_SHADER: 0x8b30,
  VERTEX_SHADER: 0x8b31,
  COMPILE_STATUS: 0x8b81,
  DELETE_STATUS: 0x8b80,
  LINK_STATUS: 0x8b82,
  VALIDATE_STATUS: 0x8b83,
  ATTACHED_SHADERS: 0x8b85,
  ACTIVE_ATTRIBUTES: 0x8b89,
  ACTIVE_UNIFORMS: 0x8b86,
  MAX_VERTEX_ATTRIBS: 0x8869,
  MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb,
  MAX_VARYING_VECTORS: 0x8dfc,
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d,
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c,
  MAX_TEXTURE_IMAGE_UNITS: 0x8872,
  MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd,
  SHADER_TYPE: 0x8b4f,
  SHADING_LANGUAGE_VERSION: 0x8b8c,
  CURRENT_PROGRAM: 0x8b8d,

  // Depth or stencil tests
  // Constants passed to depthFunc() or stencilFunc().

  NEVER: 0x0200,
  ALWAYS: 0x0207,
  LESS: 0x0201,
  EQUAL: 0x0202,
  LEQUAL: 0x0203,
  GREATER: 0x0204,
  GEQUAL: 0x0206,
  NOTEQUAL: 0x0205,

  // Stencil actions
  // Constants passed to stencilOp().

  KEEP: 0x1e00,
  REPLACE: 0x1e01,
  INCR: 0x1e02,
  DECR: 0x1e03,
  INVERT: 0x150a,
  INCR_WRAP: 0x8507,
  DECR_WRAP: 0x8508,

  // Textures
  // Constants passed to texParameteri(),
  // texParameterf(), bindTexture(), texImage2D(), and others.

  NEAREST: 0x2600,
  LINEAR: 0x2601,
  NEAREST_MIPMAP_NEAREST: 0x2700,
  LINEAR_MIPMAP_NEAREST: 0x2701,
  NEAREST_MIPMAP_LINEAR: 0x2702,
  LINEAR_MIPMAP_LINEAR: 0x2703,
  TEXTURE_MAG_FILTER: 0x2800,
  TEXTURE_MIN_FILTER: 0x2801,
  TEXTURE_WRAP_S: 0x2802,
  TEXTURE_WRAP_T: 0x2803,
  TEXTURE_2D: 0x0de1,
  TEXTURE: 0x1702,
  TEXTURE_CUBE_MAP: 0x8513,
  TEXTURE_BINDING_CUBE_MAP: 0x8514,
  TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
  TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,
  TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,
  TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,
  TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,
  TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a,
  MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c,
  // TEXTURE0 - 31 0x84C0 - 0x84DF A texture unit.
  TEXTURE0: 0x84c0,
  ACTIVE_TEXTURE: 0x84e0,
  REPEAT: 0x2901,
  CLAMP_TO_EDGE: 0x812f,
  MIRRORED_REPEAT: 0x8370,

  // Emulation
  TEXTURE_WIDTH: 0x1000,
  TEXTURE_HEIGHT: 0x1001,

  // Uniform types

  FLOAT_VEC2: 0x8b50,
  FLOAT_VEC3: 0x8b51,
  FLOAT_VEC4: 0x8b52,
  INT_VEC2: 0x8b53,
  INT_VEC3: 0x8b54,
  INT_VEC4: 0x8b55,
  BOOL: 0x8b56,
  BOOL_VEC2: 0x8b57,
  BOOL_VEC3: 0x8b58,
  BOOL_VEC4: 0x8b59,
  FLOAT_MAT2: 0x8b5a,
  FLOAT_MAT3: 0x8b5b,
  FLOAT_MAT4: 0x8b5c,
  SAMPLER_2D: 0x8b5e,
  SAMPLER_CUBE: 0x8b60,

  // Shader precision-specified types

  LOW_FLOAT: 0x8df0,
  MEDIUM_FLOAT: 0x8df1,
  HIGH_FLOAT: 0x8df2,
  LOW_INT: 0x8df3,
  MEDIUM_INT: 0x8df4,
  HIGH_INT: 0x8df5,

  // Framebuffers and renderbuffers

  FRAMEBUFFER: 0x8d40,
  RENDERBUFFER: 0x8d41,
  RGBA4: 0x8056,
  RGB5_A1: 0x8057,
  RGB565: 0x8d62,
  DEPTH_COMPONENT16: 0x81a5,
  STENCIL_INDEX: 0x1901,
  STENCIL_INDEX8: 0x8d48,
  DEPTH_STENCIL: 0x84f9,
  RENDERBUFFER_WIDTH: 0x8d42,
  RENDERBUFFER_HEIGHT: 0x8d43,
  RENDERBUFFER_INTERNAL_FORMAT: 0x8d44,
  RENDERBUFFER_RED_SIZE: 0x8d50,
  RENDERBUFFER_GREEN_SIZE: 0x8d51,
  RENDERBUFFER_BLUE_SIZE: 0x8d52,
  RENDERBUFFER_ALPHA_SIZE: 0x8d53,
  RENDERBUFFER_DEPTH_SIZE: 0x8d54,
  RENDERBUFFER_STENCIL_SIZE: 0x8d55,
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0,
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3,
  COLOR_ATTACHMENT0: 0x8ce0,
  DEPTH_ATTACHMENT: 0x8d00,
  STENCIL_ATTACHMENT: 0x8d20,
  DEPTH_STENCIL_ATTACHMENT: 0x821a,
  NONE: 0,
  FRAMEBUFFER_COMPLETE: 0x8cd5,
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6,
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7,
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9,
  FRAMEBUFFER_UNSUPPORTED: 0x8cdd,
  FRAMEBUFFER_BINDING: 0x8ca6,
  RENDERBUFFER_BINDING: 0x8ca7,
  READ_FRAMEBUFFER: 0x8ca8,
  DRAW_FRAMEBUFFER: 0x8ca9,
  MAX_RENDERBUFFER_SIZE: 0x84e8,
  INVALID_FRAMEBUFFER_OPERATION: 0x0506,

  // Pixel storage modes
  // Constants passed to pixelStorei().

  UNPACK_FLIP_Y_WEBGL: 0x9240,
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,
  UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,

  // /////////////////////////////////////////////////////
  // Additional constants defined WebGL 2
  // These constants are defined on the WebGL2RenderingContext interface.
  // All WebGL 1 constants are also available in a WebGL 2 context.
  // /////////////////////////////////////////////////////

  // Getting GL parameter information
  // Constants passed to getParameter()
  // to specify what information to return.

  READ_BUFFER: 0x0c02,
  UNPACK_ROW_LENGTH: 0x0cf2,
  UNPACK_SKIP_ROWS: 0x0cf3,
  UNPACK_SKIP_PIXELS: 0x0cf4,
  PACK_ROW_LENGTH: 0x0d02,
  PACK_SKIP_ROWS: 0x0d03,
  PACK_SKIP_PIXELS: 0x0d04,
  TEXTURE_BINDING_3D: 0x806a,
  UNPACK_SKIP_IMAGES: 0x806d,
  UNPACK_IMAGE_HEIGHT: 0x806e,
  MAX_3D_TEXTURE_SIZE: 0x8073,
  MAX_ELEMENTS_VERTICES: 0x80e8,
  MAX_ELEMENTS_INDICES: 0x80e9,
  MAX_TEXTURE_LOD_BIAS: 0x84fd,
  MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8b49,
  MAX_VERTEX_UNIFORM_COMPONENTS: 0x8b4a,
  MAX_ARRAY_TEXTURE_LAYERS: 0x88ff,
  MIN_PROGRAM_TEXEL_OFFSET: 0x8904,
  MAX_PROGRAM_TEXEL_OFFSET: 0x8905,
  MAX_VARYING_COMPONENTS: 0x8b4b,
  FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8b8b,
  RASTERIZER_DISCARD: 0x8c89,
  VERTEX_ARRAY_BINDING: 0x85b5,
  MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122,
  MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125,
  MAX_SERVER_WAIT_TIMEOUT: 0x9111,
  MAX_ELEMENT_INDEX: 0x8d6b,

  // Textures
  // Constants passed to texParameteri(),
  // texParameterf(), bindTexture(), texImage2D(), and others.

  RED: 0x1903,
  RGB8: 0x8051,
  RGBA8: 0x8058,
  RGB10_A2: 0x8059,
  TEXTURE_3D: 0x806f,
  TEXTURE_WRAP_R: 0x8072,
  TEXTURE_MIN_LOD: 0x813a,
  TEXTURE_MAX_LOD: 0x813b,
  TEXTURE_BASE_LEVEL: 0x813c,
  TEXTURE_MAX_LEVEL: 0x813d,
  TEXTURE_COMPARE_MODE: 0x884c,
  TEXTURE_COMPARE_FUNC: 0x884d,
  SRGB: 0x8c40,
  SRGB8: 0x8c41,
  SRGB8_ALPHA8: 0x8c43,
  COMPARE_REF_TO_TEXTURE: 0x884e,
  RGBA32F: 0x8814,
  RGB32F: 0x8815,
  RGBA16F: 0x881a,
  RGB16F: 0x881b,
  TEXTURE_2D_ARRAY: 0x8c1a,
  TEXTURE_BINDING_2D_ARRAY: 0x8c1d,
  R11F_G11F_B10F: 0x8c3a,
  RGB9_E5: 0x8c3d,
  RGBA32UI: 0x8d70,
  RGB32UI: 0x8d71,
  RGBA16UI: 0x8d76,
  RGB16UI: 0x8d77,
  RGBA8UI: 0x8d7c,
  RGB8UI: 0x8d7d,
  RGBA32I: 0x8d82,
  RGB32I: 0x8d83,
  RGBA16I: 0x8d88,
  RGB16I: 0x8d89,
  RGBA8I: 0x8d8e,
  RGB8I: 0x8d8f,
  RED_INTEGER: 0x8d94,
  RGB_INTEGER: 0x8d98,
  RGBA_INTEGER: 0x8d99,
  R8: 0x8229,
  RG8: 0x822b,
  R16F: 0x822d,
  R32F: 0x822e,
  RG16F: 0x822f,
  RG32F: 0x8230,
  R8I: 0x8231,
  R8UI: 0x8232,
  R16I: 0x8233,
  R16UI: 0x8234,
  R32I: 0x8235,
  R32UI: 0x8236,
  RG8I: 0x8237,
  RG8UI: 0x8238,
  RG16I: 0x8239,
  RG16UI: 0x823a,
  RG32I: 0x823b,
  RG32UI: 0x823c,
  R8_SNORM: 0x8f94,
  RG8_SNORM: 0x8f95,
  RGB8_SNORM: 0x8f96,
  RGBA8_SNORM: 0x8f97,
  RGB10_A2UI: 0x906f,

  /* covered by extension
  COMPRESSED_R11_EAC : 0x9270,
  COMPRESSED_SIGNED_R11_EAC: 0x9271,
  COMPRESSED_RG11_EAC: 0x9272,
  COMPRESSED_SIGNED_RG11_EAC : 0x9273,
  COMPRESSED_RGB8_ETC2 : 0x9274,
  COMPRESSED_SRGB8_ETC2: 0x9275,
  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 : 0x9276,
  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC : 0x9277,
  COMPRESSED_RGBA8_ETC2_EAC: 0x9278,
  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : 0x9279,
  */
  TEXTURE_IMMUTABLE_FORMAT: 0x912f,
  TEXTURE_IMMUTABLE_LEVELS: 0x82df,

  // Pixel types

  UNSIGNED_INT_2_10_10_10_REV: 0x8368,
  UNSIGNED_INT_10F_11F_11F_REV: 0x8c3b,
  UNSIGNED_INT_5_9_9_9_REV: 0x8c3e,
  FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8dad,
  UNSIGNED_INT_24_8: 0x84fa,
  HALF_FLOAT: 0x140b,
  RG: 0x8227,
  RG_INTEGER: 0x8228,
  INT_2_10_10_10_REV: 0x8d9f,

  // Queries

  CURRENT_QUERY: 0x8865,
  QUERY_RESULT: 0x8866,
  QUERY_RESULT_AVAILABLE: 0x8867,
  ANY_SAMPLES_PASSED: 0x8c2f,
  ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8d6a,

  // Draw buffers

  MAX_DRAW_BUFFERS: 0x8824,
  DRAW_BUFFER0: 0x8825,
  DRAW_BUFFER1: 0x8826,
  DRAW_BUFFER2: 0x8827,
  DRAW_BUFFER3: 0x8828,
  DRAW_BUFFER4: 0x8829,
  DRAW_BUFFER5: 0x882a,
  DRAW_BUFFER6: 0x882b,
  DRAW_BUFFER7: 0x882c,
  DRAW_BUFFER8: 0x882d,
  DRAW_BUFFER9: 0x882e,
  DRAW_BUFFER10: 0x882f,
  DRAW_BUFFER11: 0x8830,
  DRAW_BUFFER12: 0x8831,
  DRAW_BUFFER13: 0x8832,
  DRAW_BUFFER14: 0x8833,
  DRAW_BUFFER15: 0x8834,
  MAX_COLOR_ATTACHMENTS: 0x8cdf,
  COLOR_ATTACHMENT1: 0x8ce1,
  COLOR_ATTACHMENT2: 0x8ce2,
  COLOR_ATTACHMENT3: 0x8ce3,
  COLOR_ATTACHMENT4: 0x8ce4,
  COLOR_ATTACHMENT5: 0x8ce5,
  COLOR_ATTACHMENT6: 0x8ce6,
  COLOR_ATTACHMENT7: 0x8ce7,
  COLOR_ATTACHMENT8: 0x8ce8,
  COLOR_ATTACHMENT9: 0x8ce9,
  COLOR_ATTACHMENT10: 0x8cea,
  COLOR_ATTACHMENT11: 0x8ceb,
  COLOR_ATTACHMENT12: 0x8cec,
  COLOR_ATTACHMENT13: 0x8ced,
  COLOR_ATTACHMENT14: 0x8cee,
  COLOR_ATTACHMENT15: 0x8cef,

  // Samplers

  SAMPLER_3D: 0x8b5f,
  SAMPLER_2D_SHADOW: 0x8b62,
  SAMPLER_2D_ARRAY: 0x8dc1,
  SAMPLER_2D_ARRAY_SHADOW: 0x8dc4,
  SAMPLER_CUBE_SHADOW: 0x8dc5,
  INT_SAMPLER_2D: 0x8dca,
  INT_SAMPLER_3D: 0x8dcb,
  INT_SAMPLER_CUBE: 0x8dcc,
  INT_SAMPLER_2D_ARRAY: 0x8dcf,
  UNSIGNED_INT_SAMPLER_2D: 0x8dd2,
  UNSIGNED_INT_SAMPLER_3D: 0x8dd3,
  UNSIGNED_INT_SAMPLER_CUBE: 0x8dd4,
  UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8dd7,
  MAX_SAMPLES: 0x8d57,
  SAMPLER_BINDING: 0x8919,

  // Buffers

  PIXEL_PACK_BUFFER: 0x88eb,
  PIXEL_UNPACK_BUFFER: 0x88ec,
  PIXEL_PACK_BUFFER_BINDING: 0x88ed,
  PIXEL_UNPACK_BUFFER_BINDING: 0x88ef,
  COPY_READ_BUFFER: 0x8f36,
  COPY_WRITE_BUFFER: 0x8f37,
  COPY_READ_BUFFER_BINDING: 0x8f36,
  COPY_WRITE_BUFFER_BINDING: 0x8f37,

  // Data types

  FLOAT_MAT2x3: 0x8b65,
  FLOAT_MAT2x4: 0x8b66,
  FLOAT_MAT3x2: 0x8b67,
  FLOAT_MAT3x4: 0x8b68,
  FLOAT_MAT4x2: 0x8b69,
  FLOAT_MAT4x3: 0x8b6a,
  UNSIGNED_INT_VEC2: 0x8dc6,
  UNSIGNED_INT_VEC3: 0x8dc7,
  UNSIGNED_INT_VEC4: 0x8dc8,
  UNSIGNED_NORMALIZED: 0x8c17,
  SIGNED_NORMALIZED: 0x8f9c,

  // Vertex attributes

  VERTEX_ATTRIB_ARRAY_INTEGER: 0x88fd,
  VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88fe,

  // Transform feedback

  TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8c7f,
  MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8c80,
  TRANSFORM_FEEDBACK_VARYINGS: 0x8c83,
  TRANSFORM_FEEDBACK_BUFFER_START: 0x8c84,
  TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8c85,
  TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8c88,
  MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8c8a,
  MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8c8b,
  INTERLEAVED_ATTRIBS: 0x8c8c,
  SEPARATE_ATTRIBS: 0x8c8d,
  TRANSFORM_FEEDBACK_BUFFER: 0x8c8e,
  TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8c8f,
  TRANSFORM_FEEDBACK: 0x8e22,
  TRANSFORM_FEEDBACK_PAUSED: 0x8e23,
  TRANSFORM_FEEDBACK_ACTIVE: 0x8e24,
  TRANSFORM_FEEDBACK_BINDING: 0x8e25,

  // Framebuffers and renderbuffers

  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210,
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211,
  FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212,
  FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213,
  FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214,
  FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215,
  FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216,
  FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217,
  FRAMEBUFFER_DEFAULT: 0x8218,
  // DEPTH_STENCIL_ATTACHMENT : 0x821A,
  // DEPTH_STENCIL: 0x84F9,
  DEPTH24_STENCIL8: 0x88f0,
  DRAW_FRAMEBUFFER_BINDING: 0x8ca6,
  READ_FRAMEBUFFER_BINDING: 0x8caa,
  RENDERBUFFER_SAMPLES: 0x8cab,
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8cd4,
  FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8d56,

  // Uniforms

  UNIFORM_BUFFER: 0x8a11,
  UNIFORM_BUFFER_BINDING: 0x8a28,
  UNIFORM_BUFFER_START: 0x8a29,
  UNIFORM_BUFFER_SIZE: 0x8a2a,
  MAX_VERTEX_UNIFORM_BLOCKS: 0x8a2b,
  MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8a2d,
  MAX_COMBINED_UNIFORM_BLOCKS: 0x8a2e,
  MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f,
  MAX_UNIFORM_BLOCK_SIZE: 0x8a30,
  MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8a31,
  MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8a33,
  UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8a34,
  ACTIVE_UNIFORM_BLOCKS: 0x8a36,
  UNIFORM_TYPE: 0x8a37,
  UNIFORM_SIZE: 0x8a38,
  UNIFORM_BLOCK_INDEX: 0x8a3a,
  UNIFORM_OFFSET: 0x8a3b,
  UNIFORM_ARRAY_STRIDE: 0x8a3c,
  UNIFORM_MATRIX_STRIDE: 0x8a3d,
  UNIFORM_IS_ROW_MAJOR: 0x8a3e,
  UNIFORM_BLOCK_BINDING: 0x8a3f,
  UNIFORM_BLOCK_DATA_SIZE: 0x8a40,
  UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8a42,
  UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8a43,
  UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8a44,
  UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8a46,

  // Sync objects

  OBJECT_TYPE: 0x9112,
  SYNC_CONDITION: 0x9113,
  SYNC_STATUS: 0x9114,
  SYNC_FLAGS: 0x9115,
  SYNC_FENCE: 0x9116,
  SYNC_GPU_COMMANDS_COMPLETE: 0x9117,
  UNSIGNALED: 0x9118,
  SIGNALED: 0x9119,
  ALREADY_SIGNALED: 0x911a,
  TIMEOUT_EXPIRED: 0x911b,
  CONDITION_SATISFIED: 0x911c,
  WAIT_FAILED: 0x911d,
  SYNC_FLUSH_COMMANDS_BIT: 0x00000001,

  // Miscellaneous constants

  COLOR: 0x1800,
  DEPTH: 0x1801,
  STENCIL: 0x1802,
  MIN: 0x8007,
  MAX: 0x8008,
  DEPTH_COMPONENT24: 0x81a6,
  STREAM_READ: 0x88e1,
  STREAM_COPY: 0x88e2,
  STATIC_READ: 0x88e5,
  STATIC_COPY: 0x88e6,
  DYNAMIC_READ: 0x88e9,
  DYNAMIC_COPY: 0x88ea,
  DEPTH_COMPONENT32F: 0x8cac,
  DEPTH32F_STENCIL8: 0x8cad,
  INVALID_INDEX: 0xffffffff,
  TIMEOUT_IGNORED: -1,
  MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247,

  // Constants defined in WebGL extensions

  // ANGLE_instanced_arrays

  VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88fe,

  // WEBGL_debug_renderer_info

  UNMASKED_VENDOR_WEBGL: 0x9245,
  UNMASKED_RENDERER_WEBGL: 0x9246,

  // EXT_texture_filter_anisotropic

  MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84ff,
  TEXTURE_MAX_ANISOTROPY_EXT: 0x84fe,

  // WEBGL_compressed_texture_s3tc

  COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83f0,
  COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83f1,
  COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83f2,
  COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83f3,

  // WEBGL_compressed_texture_es3

  COMPRESSED_R11_EAC: 0x9270,
  COMPRESSED_SIGNED_R11_EAC: 0x9271,
  COMPRESSED_RG11_EAC: 0x9272,
  COMPRESSED_SIGNED_RG11_EAC: 0x9273,
  COMPRESSED_RGB8_ETC2: 0x9274,
  COMPRESSED_RGBA8_ETC2_EAC: 0x9275,
  COMPRESSED_SRGB8_ETC2: 0x9276,
  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9277,
  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9278,
  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9279,

  // WEBGL_compressed_texture_pvrtc

  COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8c00,
  COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8c02,
  COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8c01,
  COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8c03,

  // WEBGL_compressed_texture_etc1

  COMPRESSED_RGB_ETC1_WEBGL: 0x8d64,

  // WEBGL_compressed_texture_atc

  COMPRESSED_RGB_ATC_WEBGL: 0x8c92,
  COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: 0x8c92,
  COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: 0x87ee,

  // WEBGL_depth_texture

  UNSIGNED_INT_24_8_WEBGL: 0x84fa,

  // OES_texture_half_float

  HALF_FLOAT_OES: 0x8d61,

  // WEBGL_color_buffer_float

  RGBA32F_EXT: 0x8814,
  RGB32F_EXT: 0x8815,
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211,
  UNSIGNED_NORMALIZED_EXT: 0x8c17,

  // EXT_blend_minmax

  MIN_EXT: 0x8007,
  MAX_EXT: 0x8008,

  // EXT_sRGB

  SRGB_EXT: 0x8c40,
  SRGB_ALPHA_EXT: 0x8c42,
  SRGB8_ALPHA8_EXT: 0x8c43,
  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210,

  // OES_standard_derivatives

  FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8b8b,

  // WEBGL_draw_buffers

  COLOR_ATTACHMENT0_WEBGL: 0x8ce0,
  COLOR_ATTACHMENT1_WEBGL: 0x8ce1,
  COLOR_ATTACHMENT2_WEBGL: 0x8ce2,
  COLOR_ATTACHMENT3_WEBGL: 0x8ce3,
  COLOR_ATTACHMENT4_WEBGL: 0x8ce4,
  COLOR_ATTACHMENT5_WEBGL: 0x8ce5,
  COLOR_ATTACHMENT6_WEBGL: 0x8ce6,
  COLOR_ATTACHMENT7_WEBGL: 0x8ce7,
  COLOR_ATTACHMENT8_WEBGL: 0x8ce8,
  COLOR_ATTACHMENT9_WEBGL: 0x8ce9,
  COLOR_ATTACHMENT10_WEBGL: 0x8cea,
  COLOR_ATTACHMENT11_WEBGL: 0x8ceb,
  COLOR_ATTACHMENT12_WEBGL: 0x8cec,
  COLOR_ATTACHMENT13_WEBGL: 0x8ced,
  COLOR_ATTACHMENT14_WEBGL: 0x8cee,
  COLOR_ATTACHMENT15_WEBGL: 0x8cef,
  DRAW_BUFFER0_WEBGL: 0x8825,
  DRAW_BUFFER1_WEBGL: 0x8826,
  DRAW_BUFFER2_WEBGL: 0x8827,
  DRAW_BUFFER3_WEBGL: 0x8828,
  DRAW_BUFFER4_WEBGL: 0x8829,
  DRAW_BUFFER5_WEBGL: 0x882a,
  DRAW_BUFFER6_WEBGL: 0x882b,
  DRAW_BUFFER7_WEBGL: 0x882c,
  DRAW_BUFFER8_WEBGL: 0x882d,
  DRAW_BUFFER9_WEBGL: 0x882e,
  DRAW_BUFFER10_WEBGL: 0x882f,
  DRAW_BUFFER11_WEBGL: 0x8830,
  DRAW_BUFFER12_WEBGL: 0x8831,
  DRAW_BUFFER13_WEBGL: 0x8832,
  DRAW_BUFFER14_WEBGL: 0x8833,
  DRAW_BUFFER15_WEBGL: 0x8834,
  MAX_COLOR_ATTACHMENTS_WEBGL: 0x8cdf,
  MAX_DRAW_BUFFERS_WEBGL: 0x8824,

  // OES_vertex_array_object

  VERTEX_ARRAY_BINDING_OES: 0x85b5,

  // EXT_disjoint_timer_query

  QUERY_COUNTER_BITS_EXT: 0x8864,
  CURRENT_QUERY_EXT: 0x8865,
  QUERY_RESULT_EXT: 0x8866,
  QUERY_RESULT_AVAILABLE_EXT: 0x8867,
  TIME_ELAPSED_EXT: 0x88bf,
  TIMESTAMP_EXT: 0x8e28,
  GPU_DISJOINT_EXT: 0x8fbb // A Boolean indicating whether or not the GPU performed any disjoint operation.
};


/***/ }),

/***/ "../webgl-state-tracker/src/index.js":
/*!************************************!*\
  !*** .-state-tracker/src/index.js ***!
  \************************************/
/*! exports provided: getParameter, getParameters, setParameter, resetParameters, getModifiedParameters, setParameters, default, trackContextState, pushContextState, popContextState, withParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unified-parameter-api/unified-parameter-api */ "../webgl-state-tracker/src/unified-parameter-api/unified-parameter-api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParameter", function() { return _unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__["getParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParameters", function() { return _unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__["getParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setParameter", function() { return _unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__["setParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetParameters", function() { return _unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__["resetParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModifiedParameters", function() { return _unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__["getModifiedParameters"]; });

/* harmony import */ var _unified_parameter_api_set_parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unified-parameter-api/set-parameters */ "../webgl-state-tracker/src/unified-parameter-api/set-parameters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setParameters", function() { return _unified_parameter_api_set_parameters__WEBPACK_IMPORTED_MODULE_1__["setParameters"]; });

/* harmony import */ var _state_tracking_track_context_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-tracking/track-context-state */ "../webgl-state-tracker/src/state-tracking/track-context-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _state_tracking_track_context_state__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackContextState", function() { return _state_tracking_track_context_state__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushContextState", function() { return _state_tracking_track_context_state__WEBPACK_IMPORTED_MODULE_2__["pushContextState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popContextState", function() { return _state_tracking_track_context_state__WEBPACK_IMPORTED_MODULE_2__["popContextState"]; });

/* harmony import */ var _state_tracking_with_parameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-tracking/with-parameters */ "../webgl-state-tracker/src/state-tracking/with-parameters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withParameters", function() { return _state_tracking_with_parameters__WEBPACK_IMPORTED_MODULE_3__["withParameters"]; });

// unified parameter APIs




// state tracking





/***/ }),

/***/ "../webgl-state-tracker/src/state-tracking/track-context-state.js":
/*!*****************************************************************!*\
  !*** .-state-tracker/src/state-tracking/track-context-state.js ***!
  \*****************************************************************/
/*! exports provided: clone, deepEqual, default, pushContextState, popContextState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trackContextState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushContextState", function() { return pushContextState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popContextState", function() { return popContextState; });
/* harmony import */ var _webgl_function_to_parameters_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl-function-to-parameters-table */ "../webgl-state-tracker/src/state-tracking/webgl-function-to-parameters-table.js");
/* harmony import */ var _unified_parameter_api_webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unified-parameter-api/webgl-parameter-tables */ "../webgl-state-tracker/src/unified-parameter-api/webgl-parameter-tables.js");
/* harmony import */ var _unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unified-parameter-api/unified-parameter-api */ "../webgl-state-tracker/src/unified-parameter-api/unified-parameter-api.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../webgl-state-tracker/src/utils/index.js");
// Support for listening to context state changes and intercepting state queries
//
// NOTE: this system does not handle buffer bindings





const clone = x => {
  return Array.isArray(x) || ArrayBuffer.isView(x) ? x.slice() : x;
};

const deepEqual = (x, y) => {
  const isArrayX = Array.isArray(x) || ArrayBuffer.isView(x);
  const isArrayY = Array.isArray(y) || ArrayBuffer.isView(y);
  if (isArrayX && isArrayY && x.length === y.length) {
    for (let i = 0; i < x.length; ++i) {
      if (x[i] !== y[i]) {
        return false;
      }
    }
    return true;
  }
  return x === y;
};

// HELPER FUNCTIONS - INSTALL GET/SET INTERCEPTORS (SPYS) ON THE CONTEXT

// Overrides a WebGLRenderingContext state "getter" function
// to return values directly from cache
function installGetterOverride(gl, functionName) {
  // Get the original function from the WebGLRenderingContext
  const originalGetterFunc = gl[functionName].bind(gl);

  // Wrap it with a spy so that we can update our state cache when it gets called
  gl[functionName] = function get(...params) {
    const pname = params[0];

    // WebGL limits are not prepopulated in the cache, we must
    // query first time. They are all primitive (single value)
    if (!(pname in gl.state.cache)) {
      gl.state.cache[pname] = originalGetterFunc(...params);
    }

    // Optionally call the original function to do a "hard" query from the WebGLRenderingContext
    return gl.state.enable
      ? // Call the getter the params so that it can e.g. serve from a cache
        gl.state.cache[pname]
      : // Optionally call the original function to do a "hard" query from the WebGLRenderingContext
        originalGetterFunc(...params);
  };

  // Set the name of this anonymous function to help in debugging and profiling
  Object.defineProperty(gl[functionName], 'name', {
    value: `${functionName}-from-cache`,
    configurable: false
  });
}

// Overrides a WebGLRenderingContext state "setter" function
// to call a setter spy before the actual setter. Allows us to keep a cache
// updated with a copy of the WebGL context state.
function installSetterSpy(gl, functionName, setter) {
  // Get the original function from the WebGLRenderingContext
  const originalSetterFunc = gl[functionName].bind(gl);

  // Wrap it with a spy so that we can update our state cache when it gets called
  gl[functionName] = function set(...params) {
    // Update the value
    // Call the setter with the state cache and the params so that it can store the parameters
    const {valueChanged, oldValue} = setter(gl.state._updateCache, ...params);

    // Call the original WebGLRenderingContext func to make sure the context actually gets updated
    if (valueChanged) {
      gl.state.log(`gl.${functionName}`, ...params); // eslint-disable-line
      originalSetterFunc(...params);
    }

    // Note: if the original function fails to set the value, our state cache will be bad
    // No solution for this at the moment, but assuming that this is unlikely to be a real problem
    // We could call the setter after the originalSetterFunc. Concern is that this would
    // cause different behavior in debug mode, where originalSetterFunc can throw exceptions

    return oldValue;
  };

  // Set the name of this anonymous function to help in debugging and profiling
  Object.defineProperty(gl[functionName], 'name', {
    value: `${functionName}-to-cache`,
    configurable: false
  });
}

// HELPER CLASS - GLState

/* eslint-disable no-shadow */
class GLState {
  constructor(
    gl,
    {
      copyState = false, // Copy cache from params (slow) or initialize from WebGL defaults (fast)
      log = () => {} // Logging function, called when gl parameter change calls are actually issued
    } = {}
  ) {
    this.gl = gl;
    this.stateStack = [];
    this.enable = true;
    this.cache = copyState ? Object(_unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_2__["getParameters"])(gl) : Object.assign({}, _unified_parameter_api_webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_1__["GL_PARAMETER_DEFAULTS"]);
    this.log = log;

    this._updateCache = this._updateCache.bind(this);
    Object.seal(this);
  }

  push(values = {}) {
    this.stateStack.push({});
  }

  pop() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(this.stateStack.length > 0);
    // Use the saved values in the state stack to restore parameters
    const oldValues = this.stateStack[this.stateStack.length - 1];
    Object(_unified_parameter_api_unified_parameter_api__WEBPACK_IMPORTED_MODULE_2__["setParameters"])(this.gl, oldValues, this.cache);
    // Don't pop until we have reset parameters (to make sure other "stack frames" are not affected)
    this.stateStack.pop();
  }

  // interceptor for context set functions - update our cache and our stack
  // values (Object) - the key values for this setter
  _updateCache(values) {
    let valueChanged = false;
    let oldValue; // = undefined

    const oldValues = this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1];

    for (const key in values) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(key !== undefined);
      // Check that value hasn't already been shadowed
      if (!deepEqual(values[key], this.cache[key])) {
        valueChanged = true;
        oldValue = this.cache[key];

        // First, save current value being shadowed
        // If a state stack frame is active, save the current parameter values for pop
        // but first check that value hasn't already been shadowed and saved
        if (oldValues && !(key in oldValues)) {
          oldValues[key] = this.cache[key];
        }

        // Save current value being shadowed
        this.cache[key] = values[key];
      }
    }

    return {valueChanged, oldValue};
  }
}

// PUBLIC API

/**
 * Initialize WebGL state caching on a context
 * can be called multiple times to enable/disable
 * @param {WebGLRenderingContext} - context
 */
// After calling this function, context state will be cached
// gl.state.push() and gl.state.pop() will be available for saving,
// temporarily modifying, and then restoring state.
function trackContextState(gl, {enable = true, copyState} = {}) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(copyState !== undefined);
  if (!gl.state) {
    /* global window, global */
    const global_ = typeof global !== 'undefined' ? global : window;
    if (global_.polyfillContext) {
      global_.polyfillContext(gl);
    }

    // Create a state cache
    gl.state = new GLState(gl, {copyState, enable});

    // intercept all setter functions in the table
    for (const key in _webgl_function_to_parameters_table__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      const setter = _webgl_function_to_parameters_table__WEBPACK_IMPORTED_MODULE_0__["default"][key];
      installSetterSpy(gl, key, setter);
    }

    // intercept all getter functions in the table
    installGetterOverride(gl, 'getParameter');
    installGetterOverride(gl, 'isEnabled');
  }

  gl.state.enable = enable;

  return gl;
}

function pushContextState(gl) {
  if (!gl.state) {
    trackContextState(gl, {copyState: false});
  }
  gl.state.push();
}

function popContextState(gl) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(gl.state);
  gl.state.pop();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../webgl-state-tracker/src/state-tracking/webgl-function-to-parameters-table.js":
/*!********************************************************************************!*\
  !*** .-state-tracker/src/state-tracking/webgl-function-to-parameters-table.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
// Replacements for WebGL state setting functions that call supplied 'update'
// function setting the individual parameters.
// i.e. these "setters" map functions to gl parameters

// The 'update' function is used to interceptor WEBGL functions that set
// WebGLRenderingContext state so that state changes can be tracked.

// It also enables checking values against cache and avoid unnecessary WebGL
// set/get operations.



/* harmony default export */ __webpack_exports__["default"] = ({
  // GENERIC SETTERS

  enable: (update, capability) =>
    update({
      [capability]: true
    }),
  disable: (update, capability) =>
    update({
      [capability]: false
    }),
  pixelStorei: (update, pname, value) =>
    update({
      [pname]: value
    }),
  hint: (update, pname, hint) =>
    update({
      [pname]: hint
    }),

  // SPECIFIC SETTERS

  bindFramebuffer: (update, target, framebuffer) => {
    switch (target) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER:
        return update({
          [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DRAW_FRAMEBUFFER_BINDING]: framebuffer,
          [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER_BINDING]: framebuffer
        });
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DRAW_FRAMEBUFFER:
        return update({[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DRAW_FRAMEBUFFER_BINDING]: framebuffer});
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER:
        return update({[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER_BINDING]: framebuffer});
      default:
        return null;
    }
  },
  blendColor: (update, r, g, b, a) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_COLOR]: new Float32Array([r, g, b, a])
    }),

  blendEquation: (update, mode) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_RGB]: mode,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_ALPHA]: mode
    }),

  blendEquationSeparate: (update, modeRGB, modeAlpha) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_RGB]: modeRGB,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_ALPHA]: modeAlpha
    }),

  blendFunc: (update, src, dst) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_RGB]: src,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_RGB]: dst,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_ALPHA]: src,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_ALPHA]: dst
    }),

  blendFuncSeparate: (update, srcRGB, dstRGB, srcAlpha, dstAlpha) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_RGB]: srcRGB,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_RGB]: dstRGB,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_ALPHA]: srcAlpha,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_ALPHA]: dstAlpha
    }),

  clearColor: (update, r, g, b, a) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_CLEAR_VALUE]: new Float32Array([r, g, b, a])
    }),

  clearDepth: (update, depth) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_CLEAR_VALUE]: depth
    }),

  clearStencil: (update, s) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_CLEAR_VALUE]: s
    }),

  colorMask: (update, r, g, b, a) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_WRITEMASK]: [r, g, b, a]
    }),

  cullFace: (update, mode) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE_MODE]: mode
    }),

  depthFunc: (update, func) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_FUNC]: func
    }),

  depthRange: (update, zNear, zFar) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_RANGE]: new Float32Array([zNear, zFar])
    }),

  depthMask: (update, mask) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_WRITEMASK]: mask
    }),

  frontFace: (update, face) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT_FACE]: face
    }),

  lineWidth: (update, width) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINE_WIDTH]: width
    }),

  polygonOffset: (update, factor, units) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FACTOR]: factor,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_UNITS]: units
    }),

  sampleCoverage: (update, value, invert) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_VALUE]: value,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_INVERT]: invert
    }),

  scissor: (update, x, y, width, height) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_BOX]: new Int32Array([x, y, width, height])
    }),

  stencilMask: (update, mask) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_WRITEMASK]: mask,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_WRITEMASK]: mask
    }),

  stencilMaskSeparate: (update, face, mask) =>
    update({
      [face === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_WRITEMASK : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_WRITEMASK]: mask
    }),

  stencilFunc: (update, func, ref, mask) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FUNC]: func,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_REF]: ref,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_VALUE_MASK]: mask,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FUNC]: func,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_REF]: ref,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_VALUE_MASK]: mask
    }),

  stencilFuncSeparate: (update, face, func, ref, mask) =>
    update({
      [face === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FUNC : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FUNC]: func,
      [face === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_REF : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_REF]: ref,
      [face === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_VALUE_MASK : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_VALUE_MASK]: mask
    }),

  stencilOp: (update, fail, zfail, zpass) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FAIL]: fail,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_FAIL]: zfail,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_PASS]: zpass,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FAIL]: fail,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_FAIL]: zfail,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_PASS]: zpass
    }),

  stencilOpSeparate: (update, face, fail, zfail, zpass) =>
    update({
      [face === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FAIL : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FAIL]: fail,
      [face === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_FAIL : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_FAIL]: zfail,
      [face === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_PASS : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_PASS]: zpass
    }),

  viewport: (update, x, y, width, height) =>
    update({
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VIEWPORT]: new Int32Array([x, y, width, height])
    })
});


/***/ }),

/***/ "../webgl-state-tracker/src/state-tracking/with-parameters.js":
/*!*************************************************************!*\
  !*** .-state-tracker/src/state-tracking/with-parameters.js ***!
  \*************************************************************/
/*! exports provided: withParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withParameters", function() { return withParameters; });
/* harmony import */ var _track_context_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track-context-state */ "../webgl-state-tracker/src/state-tracking/track-context-state.js");
/* harmony import */ var _unified_parameter_api_set_parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unified-parameter-api/set-parameters */ "../webgl-state-tracker/src/unified-parameter-api/set-parameters.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../webgl-state-tracker/src/utils/index.js");




// Stores current "global" WebGL context settings, changes selected parameters,
// executes function, restores parameters
function withParameters(gl, parameters, func) {
  // assertWebGLContext(gl);

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isObjectEmpty"])(parameters)) {
    // Avoid setting state if no parameters provided. Just call and return
    return func(gl);
  }

  const {nocatch = true} = parameters;

  // frameBuffer not supported: use framebuffer API
  // TODO - is this still true?
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(!parameters.frameBuffer);

  Object(_track_context_state__WEBPACK_IMPORTED_MODULE_0__["pushContextState"])(gl);
  Object(_unified_parameter_api_set_parameters__WEBPACK_IMPORTED_MODULE_1__["setParameters"])(gl, parameters);

  // Setup is done, call the function
  let value;

  if (nocatch) {
    // Avoid try catch to minimize stack size impact for safe execution paths
    value = func(gl);
    Object(_track_context_state__WEBPACK_IMPORTED_MODULE_0__["popContextState"])(gl);
  } else {
    // Wrap in a try-catch to ensure that parameters are restored on exceptions
    try {
      value = func(gl);
    } finally {
      Object(_track_context_state__WEBPACK_IMPORTED_MODULE_0__["popContextState"])(gl);
    }
  }

  return value;
}


/***/ }),

/***/ "../webgl-state-tracker/src/unified-parameter-api/set-parameters.js":
/*!*******************************************************************!*\
  !*** .-state-tracker/src/unified-parameter-api/set-parameters.js ***!
  \*******************************************************************/
/*! exports provided: setParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParameters", function() { return setParameters; });
/* harmony import */ var _unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unified-parameter-api */ "../webgl-state-tracker/src/unified-parameter-api/unified-parameter-api.js");
/* harmony import */ var _webgl_setter_function_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl-setter-function-table */ "../webgl-state-tracker/src/unified-parameter-api/webgl-setter-function-table.js");



// Adds support for using gl function names (in addition to parameter constants)
// as keys in setParameters
//
// Note: Value may be "normalized" (in case a short form is supported).
// In that case the normalized value is returned.

function setParameters(gl, parameters) {
  // Handles any GL parameter keys
  Object(_unified_parameter_api__WEBPACK_IMPORTED_MODULE_0__["setParameters"])(gl, parameters);
  // Check for function style keys
  for (const key in parameters) {
    const setter = _webgl_setter_function_table__WEBPACK_IMPORTED_MODULE_1__["default"][key];
    if (setter) {
      setter(gl, parameters[key], key);
    }
  }
}


/***/ }),

/***/ "../webgl-state-tracker/src/unified-parameter-api/unified-parameter-api.js":
/*!**************************************************************************!*\
  !*** .-state-tracker/src/unified-parameter-api/unified-parameter-api.js ***!
  \**************************************************************************/
/*! exports provided: setParameter, setParameters, getParameter, getParameters, getDefaultParameters, resetParameters, getModifiedParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParameter", function() { return setParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParameters", function() { return setParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameter", function() { return getParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameters", function() { return getParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultParameters", function() { return getDefaultParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetParameters", function() { return resetParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModifiedParameters", function() { return getModifiedParameters; });
/* harmony import */ var _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl-parameter-tables */ "../webgl-state-tracker/src/unified-parameter-api/webgl-parameter-tables.js");
/* harmony import */ var _utils_deep_array_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deep-array-equal */ "../webgl-state-tracker/src/utils/deep-array-equal.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../webgl-state-tracker/src/utils/index.js");
// Provides a unified API for getting and setting any WebGL parameter
// Also knows default values of all parameters, enabling fast cache initialization
// Provides base functionality for the state caching.





// PUBLIC METHODS

// Sets any single GL parameter regardless of function (gl.getParameter/gl.isEnabled...)
// Returns the previous value
// Note: limited to parameter values
function setParameter(gl, key, value) {
  const getter = _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_GETTERS"][key];
  const prevValue = getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
  const setter = _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_SETTERS"][key];
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(typeof setter === 'function');
  setter(gl, value, Number(key));
  return prevValue;
}

// Sets any GL parameter regardless of function (gl.blendMode, ...)
// Note: requires a `cache` object to be set on the context (gl.state.cache)
// This object is used to fill in any missing values for composite setter functions
function setParameters(gl, values) {
  const compositeSetters = {};

  // HANDLE PRIMITIVE SETTERS (and make note of any composite setters)

  for (const key in values) {
    const glConstant = Number(key);
    const setter = _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_SETTERS"][key];
    if (setter) {
      // Composite setters should only be called once, so save them
      if (typeof setter === 'string') {
        compositeSetters[setter] = true;
      } else {
        // if (gl[glConstant] !== undefined) {
        // TODO - added above check since this is being called on WebGL2 values in WebGL1...
        // TODO - deep equal on values? only call setter if value has changed?
        // NOTE - the setter will automatically update this.state
        setter(gl, values[key], glConstant);
      }
    }
  }

  // HANDLE COMPOSITE SETTERS

  // NOTE: any non-provided values needed by composite setters are filled in from state cache
  // The cache parameter is automatically retrieved from the context
  // This depends on `trackContextState`, which is technically a "circular" dependency.
  // But it is too inconvenient to always require a cache parameter here.
  // This is the ONLY external dependency in this module/
  const cache = gl.state && gl.state.cache;
  if (cache) {
    const mergedValues = Object.assign({}, cache, values);

    for (const key in compositeSetters) {
      // TODO - avoid calling composite setters if values have not changed.
      const compositeSetter = _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_COMPOSITE_PARAMETER_SETTERS"][key];
      // Note - if `trackContextState` has been called,
      // the setter will automatically update this.state.cache
      compositeSetter(gl, mergedValues);
    }
  }
  // Add a log for the else case?
}

// Queries any single GL parameter regardless of function (gl.getParameter/gl.isEnabled...)
function getParameter(gl, key) {
  const getter = _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_GETTERS"][key];
  return getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
}

// Copies the state from a context (gl.getParameter should not be overriden)
// Reads the entire WebGL state from a context
// Caveat: This generates a huge amount of synchronous driver roundtrips and should be
// considered a very slow operation, to be used only if/when a context already manipulated
// by external code needs to be synchronized for the first time
// @return {Object} - a newly created map, with values keyed by GL parameters
function getParameters(gl, parameters) {
  // default to querying all parameters
  parameters = parameters || _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_DEFAULTS"];
  // support both arrays of parameters and objects (keys represent parameters)
  const parameterKeys = Array.isArray(parameters) ? parameters : Object.keys(parameters);

  const state = {};
  for (const key of parameterKeys) {
    state[key] = getParameter(gl, key);
  }
  return state;
}

function getDefaultParameters(gl) {
  // TODO - Query GL.VIEWPORT and GL.SCISSOR_BOX since these are dynamic
  return Object.assign({}, _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_DEFAULTS"], {
    // TODO: For viewport and scissor default values are set at the time of
    // context creation based on canvas size, we can query them here but it will
    // not match with what we have in GL_PARAMETER_DEFAULTS table, we should revisit.
    // [GL.VIEWPORT]: gl.constructor.prototype.getParameter.call(gl, GL.VIEWPORT),
    // [GL.SCISSOR_BOX]: gl.constructor.prototype.getParameter.call(gl, GL.SCISSOR_BOX)
  });
}

// Reset all parameters to a pure context state
function resetParameters(gl) {
  setParameters(gl, getDefaultParameters(gl));
}

// Get all parameters that have been modified from a pure context state
function getModifiedParameters(gl) {
  const values = getParameters(_webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_DEFAULTS"]);
  const modified = {};
  for (const key in _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_DEFAULTS"]) {
    if (!Object(_utils_deep_array_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(values[key], _webgl_parameter_tables__WEBPACK_IMPORTED_MODULE_0__["GL_PARAMETER_DEFAULTS"][key])) {
      modified[key] = values[key];
    }
  }
  return modified;
}


/***/ }),

/***/ "../webgl-state-tracker/src/unified-parameter-api/webgl-parameter-tables.js":
/*!***************************************************************************!*\
  !*** .-state-tracker/src/unified-parameter-api/webgl-parameter-tables.js ***!
  \***************************************************************************/
/*! exports provided: GL_PARAMETER_DEFAULTS, GL_PARAMETER_SETTERS, GL_COMPOSITE_PARAMETER_SETTERS, GL_PARAMETER_GETTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GL_PARAMETER_DEFAULTS", function() { return GL_PARAMETER_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GL_PARAMETER_SETTERS", function() { return GL_PARAMETER_SETTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GL_COMPOSITE_PARAMETER_SETTERS", function() { return GL_COMPOSITE_PARAMETER_SETTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GL_PARAMETER_GETTERS", function() { return GL_PARAMETER_GETTERS; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../webgl-state-tracker/src/utils/index.js");
// Tables describing WebGL parameters



// DEFAULT SETTINGS - FOR FAST CACHE INITIALIZATION AND CONTEXT RESETS

const GL_PARAMETER_DEFAULTS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_COLOR]: new Float32Array([0, 0, 0, 0]),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_RGB]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FUNC_ADD,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_ALPHA]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FUNC_ADD,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_RGB]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_RGB]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ZERO,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_ALPHA]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_ALPHA]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ZERO,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_CLEAR_VALUE]: new Float32Array([0, 0, 0, 0]), // TBD
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_WRITEMASK]: [true, true, true, true],
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE_MODE]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_TEST]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_CLEAR_VALUE]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_FUNC]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LESS,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_RANGE]: new Float32Array([0, 1]), // TBD
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_WRITEMASK]: true,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DITHER]: true,
  // FRAMEBUFFER_BINDING and DRAW_FRAMEBUFFER_BINDING(WebGL2) refer same state.
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_BINDING]: null,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT_FACE]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CCW,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.GENERATE_MIPMAP_HINT]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DONT_CARE,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINE_WIDTH]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FILL]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FACTOR]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_UNITS]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_VALUE]: 1.0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_INVERT]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_TEST]: false,
  // Note: Dynamic value. If scissor test enabled we expect users to set correct scissor box
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_BOX]: new Int32Array([0, 0, 1024, 1024]),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_TEST]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_CLEAR_VALUE]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_WRITEMASK]: 0xffffffff,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_WRITEMASK]: 0xffffffff,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FUNC]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALWAYS,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_REF]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_VALUE_MASK]: 0xffffffff,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FUNC]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALWAYS,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_REF]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_VALUE_MASK]: 0xffffffff,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FAIL]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.KEEP,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_FAIL]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.KEEP,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_PASS]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.KEEP,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FAIL]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.KEEP,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_FAIL]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.KEEP,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_PASS]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.KEEP,
  // Dynamic value: We use [0, 0, 1024, 1024] as default, but usually this is updated in each frame.
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VIEWPORT]: new Int32Array([0, 0, 1024, 1024]),
  // WEBGL1 PIXEL PACK/UNPACK MODES
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_ALIGNMENT]: 4,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_ALIGNMENT]: 4,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_FLIP_Y_WEBGL]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_PREMULTIPLY_ALPHA_WEBGL]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_COLORSPACE_CONVERSION_WEBGL]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BROWSER_DEFAULT_WEBGL,

  // WEBGL2 / EXTENSIONS
  // gl1: 'OES_standard_derivatives'
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAGMENT_SHADER_DERIVATIVE_HINT]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DONT_CARE,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER_BINDING]: null,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RASTERIZER_DISCARD]: false,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_ROW_LENGTH]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_SKIP_PIXELS]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_SKIP_ROWS]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_ROW_LENGTH]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_IMAGE_HEIGHT]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_SKIP_PIXELS]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_SKIP_ROWS]: 0,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_SKIP_IMAGES]: 0
};

// SETTER TABLES - ENABLES SETTING ANY PARAMETER WITH A COMMON API

const enable = (gl, value, key) => (value ? gl.enable(key) : gl.disable(key));
const hint = (gl, value, key) => gl.hint(key, value);
const pixelStorei = (gl, value, key) => gl.pixelStorei(key, value);

const drawFramebuffer = (gl, value) => {
  const target = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(gl) ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DRAW_FRAMEBUFFER : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER;
  return gl.bindFramebuffer(target, value);
};
const readFramebuffer = (gl, value) => {
  return gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER, value);
};

// Map from WebGL parameter names to corresponding WebGL setter functions
// WegGL constants are read by parameter names, but set by function names
// NOTE: When value type is a string, it will be handled by 'GL_COMPOSITE_PARAMETER_SETTERS'
const GL_PARAMETER_SETTERS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_COLOR]: (gl, value) => gl.blendColor(...value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_RGB]: 'blendEquation',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_ALPHA]: 'blendEquation',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_RGB]: 'blendFunc',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_RGB]: 'blendFunc',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_ALPHA]: 'blendFunc',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_ALPHA]: 'blendFunc',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_CLEAR_VALUE]: (gl, value) => gl.clearColor(...value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_WRITEMASK]: (gl, value) => gl.colorMask(...value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE_MODE]: (gl, value) => gl.cullFace(value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_TEST]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_CLEAR_VALUE]: (gl, value) => gl.clearDepth(value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_FUNC]: (gl, value) => gl.depthFunc(value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_RANGE]: (gl, value) => gl.depthRange(...value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_WRITEMASK]: (gl, value) => gl.depthMask(value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DITHER]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAGMENT_SHADER_DERIVATIVE_HINT]: hint,
  // NOTE: FRAMEBUFFER_BINDING and DRAW_FRAMEBUFFER_BINDING(WebGL2) refer same state.
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_BINDING]: drawFramebuffer,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT_FACE]: (gl, value) => gl.frontFace(value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.GENERATE_MIPMAP_HINT]: hint,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINE_WIDTH]: (gl, value) => gl.lineWidth(value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FILL]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FACTOR]: 'polygonOffset',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_UNITS]: 'polygonOffset',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RASTERIZER_DISCARD]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_VALUE]: 'sampleCoverage',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_INVERT]: 'sampleCoverage',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_TEST]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_BOX]: (gl, value) => gl.scissor(...value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_TEST]: enable,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_CLEAR_VALUE]: (gl, value) => gl.clearStencil(value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_WRITEMASK]: (gl, value) => gl.stencilMaskSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_WRITEMASK]: (gl, value) => gl.stencilMaskSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FUNC]: 'stencilFuncFront',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_REF]: 'stencilFuncFront',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_VALUE_MASK]: 'stencilFuncFront',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FUNC]: 'stencilFuncBack',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_REF]: 'stencilFuncBack',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_VALUE_MASK]: 'stencilFuncBack',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FAIL]: 'stencilOpFront',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_FAIL]: 'stencilOpFront',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_PASS]: 'stencilOpFront',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FAIL]: 'stencilOpBack',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_FAIL]: 'stencilOpBack',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_PASS]: 'stencilOpBack',
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VIEWPORT]: (gl, value) => gl.viewport(...value),

  // WEBGL1 PIXEL PACK/UNPACK MODES
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_ALIGNMENT]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_ALIGNMENT]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_FLIP_Y_WEBGL]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_PREMULTIPLY_ALPHA_WEBGL]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_COLORSPACE_CONVERSION_WEBGL]: pixelStorei,

  // WEBGL2 PIXEL PACK/UNPACK MODES
  // RASTERIZER_DISCARD ...
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_ROW_LENGTH]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_SKIP_PIXELS]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PACK_SKIP_ROWS]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER_BINDING]: readFramebuffer,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_ROW_LENGTH]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_IMAGE_HEIGHT]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_SKIP_PIXELS]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_SKIP_ROWS]: pixelStorei,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_SKIP_IMAGES]: pixelStorei
};

// COMPOSITE_WEBGL_PARAMETER_
const GL_COMPOSITE_PARAMETER_SETTERS = {
  blendEquation: (gl, values) =>
    gl.blendEquationSeparate(values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_RGB], values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_EQUATION_ALPHA]),
  blendFunc: (gl, values) =>
    gl.blendFuncSeparate(
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_RGB],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_RGB],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_SRC_ALPHA],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND_DST_ALPHA]
    ),
  polygonOffset: (gl, values) =>
    gl.polygonOffset(values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FACTOR], values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_UNITS]),
  sampleCoverage: (gl, values) =>
    gl.sampleCoverage(values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_VALUE], values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE_INVERT]),
  stencilFuncFront: (gl, values) =>
    gl.stencilFuncSeparate(
      _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT,
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FUNC],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_REF],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_VALUE_MASK]
    ),
  stencilFuncBack: (gl, values) =>
    gl.stencilFuncSeparate(
      _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK,
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FUNC],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_REF],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_VALUE_MASK]
    ),
  stencilOpFront: (gl, values) =>
    gl.stencilOpSeparate(
      _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT,
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_FAIL],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_FAIL],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_PASS_DEPTH_PASS]
    ),
  stencilOpBack: (gl, values) =>
    gl.stencilOpSeparate(
      _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK,
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_FAIL],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_FAIL],
      values[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BACK_PASS_DEPTH_PASS]
    )
};

// GETTER TABLE - FOR READING OUT AN ENTIRE CONTEXT

const isEnabled = (gl, key) => gl.isEnabled(key);

// Exceptions for any keys that cannot be queried by gl.getParameters
const GL_PARAMETER_GETTERS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_TEST]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DITHER]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FILL]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_ALPHA_TO_COVERAGE]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLE_COVERAGE]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_TEST]: isEnabled,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_TEST]: isEnabled,

  // WebGL 2
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RASTERIZER_DISCARD]: isEnabled
};


/***/ }),

/***/ "../webgl-state-tracker/src/unified-parameter-api/webgl-setter-function-table.js":
/*!********************************************************************************!*\
  !*** .-state-tracker/src/unified-parameter-api/webgl-setter-function-table.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
// map of parameter setter function names, parameter constants, default values and types
// - Uses gl function names, except when setter function exist that are named differently
// - When the WebGL api offers <setter> and <setter>Separate (e.g. blendEquation and
//   blendEquationSeparate, we use non-separate name, but accept both non-separate and
//   separate arguments. Thus, a `getParameter` call will always return all the separate values
//   in an array, in a form that can be accepted by the setter.



// HELPERS

function isArray(array) {
  return Array.isArray(array) || ArrayBuffer.isView(array);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  framebuffer: (gl, framebuffer) => {
    // accepts 1) a WebGLFramebuffer 2) null (default framebuffer), or 3) luma.gl Framebuffer class
    // framebuffer is null when restoring to default framebuffer, otherwise use the WebGL handle.
    const handle = framebuffer && 'handle' in framebuffer ? framebuffer.handle : framebuffer;
    return gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, handle);
  },
  blend: (gl, value) => (value ? gl.enable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND) : gl.disable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BLEND)),
  blendColor: (gl, value) => gl.blendColor(...value),
  blendEquation: (gl, args) => {
    args = isArray(args) ? args : [args, args];
    gl.blendEquationSeparate(...args);
  },
  blendFunc: (gl, args) => {
    args = isArray(args) && args.length === 2 ? [...args, ...args] : args;
    gl.blendFuncSeparate(...args);
  },

  clearColor: (gl, value) => gl.clearColor(...value),
  clearDepth: (gl, value) => gl.clearDepth(value),
  clearStencil: (gl, value) => gl.clearStencil(value),

  colorMask: (gl, value) => gl.colorMask(...value),

  cull: (gl, value) => (value ? gl.enable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE) : gl.disable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CULL_FACE)),
  cullFace: (gl, value) => gl.cullFace(value),

  depthTest: (gl, value) => (value ? gl.enable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_TEST) : gl.disable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_TEST)),
  depthFunc: (gl, value) => gl.depthFunc(value),
  depthMask: (gl, value) => gl.depthMask(value),
  depthRange: (gl, value) => gl.depthRange(...value),

  dither: (gl, value) => (value ? gl.enable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DITHER) : gl.disable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DITHER)),

  derivativeHint: (gl, value) => {
    // gl1: 'OES_standard_derivatives'
    gl.hint(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAGMENT_SHADER_DERIVATIVE_HINT, value);
  },

  frontFace: (gl, value) => gl.frontFace(value),

  mipmapHint: (gl, value) => gl.hint(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.GENERATE_MIPMAP_HINT, value),

  lineWidth: (gl, value) => gl.lineWidth(value),

  polygonOffsetFill: (gl, value) =>
    value ? gl.enable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FILL) : gl.disable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POLYGON_OFFSET_FILL),
  polygonOffset: (gl, value) => gl.polygonOffset(...value),

  sampleCoverage: (gl, value) => gl.sampleCoverage(...value),

  scissorTest: (gl, value) => (value ? gl.enable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_TEST) : gl.disable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SCISSOR_TEST)),
  scissor: (gl, value) => gl.scissor(...value),

  stencilTest: (gl, value) => (value ? gl.enable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_TEST) : gl.disable(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_TEST)),
  stencilMask: (gl, value) => {
    value = isArray(value) ? value : [value, value];
    const [mask, backMask] = value;
    gl.stencilMaskSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT, mask);
    gl.stencilMaskSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK, backMask);
  },
  stencilFunc: (gl, args) => {
    args = isArray(args) && args.length === 3 ? [...args, ...args] : args;
    const [func, ref, mask, backFunc, backRef, backMask] = args;
    gl.stencilFuncSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT, func, ref, mask);
    gl.stencilFuncSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK, backFunc, backRef, backMask);
  },
  stencilOp: (gl, args) => {
    args = isArray(args) && args.length === 3 ? [...args, ...args] : args;
    const [sfail, dpfail, dppass, backSfail, backDpfail, backDppass] = args;
    gl.stencilOpSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT, sfail, dpfail, dppass);
    gl.stencilOpSeparate(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK, backSfail, backDpfail, backDppass);
  },

  viewport: (gl, value) => gl.viewport(...value)
});


/***/ }),

/***/ "../webgl-state-tracker/src/utils/assert.js":
/*!*******************************************!*\
  !*** .-state-tracker/src/utils/assert.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
// Avoid bundling assert polyfill module
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'luma.gl: assertion failed.');
  }
}


/***/ }),

/***/ "../webgl-state-tracker/src/utils/deep-array-equal.js":
/*!*****************************************************!*\
  !*** .-state-tracker/src/utils/deep-array-equal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepArrayEqual; });
function deepArrayEqual(x, y) {
  if (x === y) {
    return true;
  }
  const isArrayX = Array.isArray(x) || ArrayBuffer.isView(x);
  const isArrayY = Array.isArray(y) || ArrayBuffer.isView(y);
  if (isArrayX && isArrayY && x.length === y.length) {
    for (let i = 0; i < x.length; ++i) {
      if (x[i] !== y[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}


/***/ }),

/***/ "../webgl-state-tracker/src/utils/index.js":
/*!******************************************!*\
  !*** .-state-tracker/src/utils/index.js ***!
  \******************************************/
/*! exports provided: assert, deepArrayEqual, isWebGL2, isObjectEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "../webgl-state-tracker/src/utils/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _assert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deep_array_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deep-array-equal */ "../webgl-state-tracker/src/utils/deep-array-equal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepArrayEqual", function() { return _deep_array_equal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../webgl-state-tracker/src/utils/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWebGL2", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isWebGL2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isObjectEmpty"]; });






/***/ }),

/***/ "../webgl-state-tracker/src/utils/utils.js":
/*!******************************************!*\
  !*** .-state-tracker/src/utils/utils.js ***!
  \******************************************/
/*! exports provided: isObjectEmpty, isWebGL2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGL2", function() { return isWebGL2; });
// Returns true if given object is empty, false otherwise.
function isObjectEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

// Returns true if WebGL2 context (Heuristic)
function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}


/***/ }),

/***/ "../webgl2-polyfill/src/assert.js":
/*!*********************************!*\
  !*** .2-polyfill/src/assert.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'webgl2-polyfill: assertion failed.');
  }
}


/***/ }),

/***/ "../webgl2-polyfill/src/index.js":
/*!********************************!*\
  !*** .2-polyfill/src/index.js ***!
  \********************************/
/*! exports provided: polyfillContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill-context */ "../webgl2-polyfill/src/polyfill-context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polyfillContext", function() { return _polyfill_context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _polyfill_context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// Installs polyfills to support a subset of WebGL2 APIs on WebGL1 contexts





/***/ }),

/***/ "../webgl2-polyfill/src/polyfill-context.js":
/*!*******************************************!*\
  !*** .2-polyfill/src/polyfill-context.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return polyfillContext; });
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "../webgl2-polyfill/src/assert.js");
/* harmony import */ var _polyfill_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill-table */ "../webgl2-polyfill/src/polyfill-table.js");
// WebGL1/WebGL2 extension polyfill support
//
// Provides a function that creates polyfills for WebGL2 functions based
// on available extensions and installs them on a supplied target (could be
// the WebGLContext or its prototype, or a separate object).
//
// This is intended to be a stand-alone file with minimal dependencies,
// easy to reuse or repurpose in other projects.

/* eslint-disable camelcase, brace-style */




// Registers extensions, polyfills or mock functions for extensions in the polyfills list
// TODO - remove use of name `luma`.
function polyfillContext(gl) {
  gl.luma = gl.luma || {};
  initializeExtensions(gl);
  if (!gl.luma.polyfilled) {
    installPolyfills(gl, _polyfill_table__WEBPACK_IMPORTED_MODULE_1__["WEBGL2_CONTEXT_POLYFILLS"]);
    installOverrides(gl, {target: gl.luma, target2: gl});
    gl.luma.polyfilled = true;
  }
  return gl;
}

// TODO - is this still required?
/* global window, global */
const global_ = typeof global !== 'undefined' ? global : window;
global_.polyfillContext = polyfillContext;

function initializeExtensions(gl) {
  gl.luma.extensions = {};
  // `getSupportedExtensions` can return null when context is lost.
  const EXTENSIONS = gl.getSupportedExtensions() || [];
  for (const extension of EXTENSIONS) {
    gl.luma[extension] = gl.getExtension(extension);
  }
}

// Install simple overrides (mostly get* functions)
function installOverrides(gl, {target, target2}) {
  Object.keys(_polyfill_table__WEBPACK_IMPORTED_MODULE_1__["WEBGL2_CONTEXT_OVERRIDES"]).forEach(key => {
    if (typeof _polyfill_table__WEBPACK_IMPORTED_MODULE_1__["WEBGL2_CONTEXT_OVERRIDES"][key] === 'function') {
      // install an override, if no implementation was detected
      const originalFunc = gl[key] ? gl[key].bind(gl) : () => {};
      const polyfill = _polyfill_table__WEBPACK_IMPORTED_MODULE_1__["WEBGL2_CONTEXT_OVERRIDES"][key].bind(null, gl, originalFunc);
      target[key] = polyfill;
      target2[key] = polyfill;
    }
  });
}

function installPolyfills(gl, polyfills) {
  for (const extension of Object.getOwnPropertyNames(polyfills)) {
    if (extension !== 'overrides') {
      polyfillExtension(gl, {extension, target: gl.luma, target2: gl});
    }
  }
}

// Polyfills a single WebGL extension into the `target` object
function polyfillExtension(gl, {extension, target, target2}) {
  const defaults = _polyfill_table__WEBPACK_IMPORTED_MODULE_1__["WEBGL2_CONTEXT_POLYFILLS"][extension];
  Object(_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(defaults);

  const {meta = {}} = defaults;
  const {suffix = ''} = meta;

  const ext = gl.getExtension(extension);

  for (const key of Object.keys(defaults)) {
    const extKey = `${key}${suffix}`;

    let polyfill = null;
    if (key === 'meta') {
      // ignore
    } else if (typeof gl[key] === 'function') {
      // WebGL2 implementation is already
    } else if (ext && typeof ext[extKey] === 'function') {
      // pick extension implemenentation,if available
      polyfill = (...args) => ext[extKey](...args);
    } else if (typeof defaults[key] === 'function') {
      // pick the mock implementation, if no implementation was detected
      polyfill = defaults[key].bind(target);
    }

    if (polyfill) {
      target[key] = polyfill;
      target2[key] = polyfill;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../webgl2-polyfill/src/polyfill-table.js":
/*!*****************************************!*\
  !*** .2-polyfill/src/polyfill-table.js ***!
  \*****************************************/
/*! exports provided: WEBGL2_CONTEXT_POLYFILLS, WEBGL2_CONTEXT_OVERRIDES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL2_CONTEXT_POLYFILLS", function() { return WEBGL2_CONTEXT_POLYFILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL2_CONTEXT_OVERRIDES", function() { return WEBGL2_CONTEXT_OVERRIDES; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assert */ "../webgl2-polyfill/src/assert.js");
/* harmony import */ var _polyfills_get_parameter_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills/get-parameter-polyfill */ "../webgl2-polyfill/src/polyfills/get-parameter-polyfill.js");





const OES_vertex_array_object = 'OES_vertex_array_object';
const ANGLE_instanced_arrays = 'ANGLE_instanced_arrays';
const WEBGL_draw_buffers = 'WEBGL_draw_buffers';
const EXT_disjoint_timer_query = 'EXT_disjoint_timer_query';
const EXT_texture_filter_anisotropic = 'EXT_texture_filter_anisotropic';

const ERR_VAO_NOT_SUPPORTED = 'VertexArray requires WebGL2 or OES_vertex_array_object extension';

// Return true if WebGL2 context
function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

// Return object with webgl2 flag and an extension
function getExtensionData(gl, extension) {
  return {
    webgl2: isWebGL2(gl),
    ext: gl.getExtension(extension)
  };
}

// function mapExtensionConstant(gl, constant) {
//   switch (constant) {
//   case ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES: return GL.FRAGMENT_SHADER_DERIVATIVE_HINT;
//   }
// }

const WEBGL2_CONTEXT_POLYFILLS = {
  // POLYFILL TABLE
  [OES_vertex_array_object]: {
    meta: {suffix: 'OES'},
    // NEW METHODS
    createVertexArray: () => {
      Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false, ERR_VAO_NOT_SUPPORTED);
    },
    deleteVertexArray: () => {},
    bindVertexArray: () => {},
    isVertexArray: () => false
  },
  [ANGLE_instanced_arrays]: {
    meta: {
      suffix: 'ANGLE'
      // constants: {
      //   VERTEX_ATTRIB_ARRAY_DIVISOR: 'VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE'
      // }
    },
    vertexAttribDivisor(location, divisor) {
      // Accept divisor 0 even if instancing is not supported (0 = no instancing)
      Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(divisor === 0, 'WebGL instanced rendering not supported');
    },
    drawElementsInstanced: () => {},
    drawArraysInstanced: () => {}
  },
  [WEBGL_draw_buffers]: {
    meta: {
      suffix: 'WEBGL'
    },
    drawBuffers: () => {
      Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    }
  },
  [EXT_disjoint_timer_query]: {
    meta: {suffix: 'EXT'},
    // WebGL1: Polyfills the WebGL2 Query API
    createQuery: () => {
      Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    },
    deleteQuery: () => {
      Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    },
    beginQuery: () => {
      Object(_assert__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    },
    endQuery: () => {},
    getQuery(handle, pname) {
      return this.getQueryObject(handle, pname);
    },
    // The WebGL1 extension uses getQueryObject rather then getQueryParameter
    getQueryParameter(handle, pname) {
      return this.getQueryObject(handle, pname);
    },
    getQueryObject: () => {}
  }
};

const WEBGL2_CONTEXT_OVERRIDES = {
  // Ensure readBuffer is a no-op
  readBuffer: (gl, originalFunc, attachment) => {
    if (isWebGL2(gl)) {
      originalFunc(attachment);
    } else {
      // assert(attachment !== GL_COLOR_ATTACHMENT0 && attachment !== GL_FRONT);
    }
  },
  // Override for getVertexAttrib that returns sane values for non-WebGL1 constants
  getVertexAttrib: (gl, originalFunc, location, pname) => {
    // const gl = this; // eslint-disable-line
    const {webgl2, ext} = getExtensionData(gl, ANGLE_instanced_arrays);

    let result;
    switch (pname) {
      // WebGL1 attributes will never be integer
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERTEX_ATTRIB_ARRAY_INTEGER:
        result = !webgl2 ? false : undefined;
        break;
      // if instancing is not available, return 0 meaning divisor has not been set
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERTEX_ATTRIB_ARRAY_DIVISOR:
        result = !webgl2 && !ext ? 0 : undefined;
        break;
      default:
    }

    return result !== undefined ? result : originalFunc(location, pname);
  },
  // Handle transform feedback and uniform block queries in WebGL1
  getProgramParameter: (gl, originalFunc, program, pname) => {
    if (!isWebGL2(gl)) {
      switch (pname) {
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK_BUFFER_MODE:
          return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SEPARATE_ATTRIBS;
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK_VARYINGS:
          return 0;
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ACTIVE_UNIFORM_BLOCKS:
          return 0;
        default:
      }
    }
    return originalFunc(program, pname);
  },
  getInternalformatParameter: (gl, originalFunc, target, format, pname) => {
    if (!isWebGL2(gl)) {
      switch (pname) {
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLES:
          return new Int32Array([0]);
        default:
      }
    }
    return gl.getInternalformatParameter(target, format, pname);
  },
  getTexParameter(gl, originalFunc, target, pname) {
    switch (pname) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAX_ANISOTROPY_EXT:
        const {extensions} = gl.luma;
        const ext = extensions[EXT_texture_filter_anisotropic];
        pname = (ext && ext.TEXTURE_MAX_ANISOTROPY_EXT) || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAX_ANISOTROPY_EXT;
        break;
      default:
    }
    return originalFunc(target, pname);
  },
  getParameter: _polyfills_get_parameter_polyfill__WEBPACK_IMPORTED_MODULE_2__["getParameterPolyfill"],
  hint(gl, originalFunc, pname, value) {
    // TODO - handle GL.FRAGMENT_SHADER_DERIVATIVE_HINT:
    // switch (pname) {
    // case GL.FRAGMENT_SHADER_DERIVATIVE_HINT:
    // }
    return originalFunc(pname, value);
  }
};


/***/ }),

/***/ "../webgl2-polyfill/src/polyfills/get-parameter-polyfill.js":
/*!***********************************************************!*\
  !*** .2-polyfill/src/polyfills/get-parameter-polyfill.js ***!
  \***********************************************************/
/*! exports provided: getParameterPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterPolyfill", function() { return getParameterPolyfill; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-inline-comments, max-len, camelcase */


const OES_element_index = 'OES_element_index';
const WEBGL_draw_buffers = 'WEBGL_draw_buffers';
const EXT_disjoint_timer_query = 'EXT_disjoint_timer_query';
const EXT_disjoint_timer_query_webgl2 = 'EXT_disjoint_timer_query_webgl2';
const EXT_texture_filter_anisotropic = 'EXT_texture_filter_anisotropic';
const WEBGL_debug_renderer_info = 'WEBGL_debug_renderer_info';

const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;
const GL_DONT_CARE = 0x1100;
const GL_GPU_DISJOINT_EXT = 0x8fbb;
const GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff;
const GL_UNMASKED_VENDOR_WEBGL = 0x9245; // vendor string of the graphics driver.
const GL_UNMASKED_RENDERER_WEBGL = 0x9246; // renderer string of the graphics driver.

const getWebGL2ValueOrZero = gl => (!isWebGL2(gl) ? 0 : undefined);

// if a function returns undefined in this table,
// the original getParameter will be called, defeating the override
const WEBGL_PARAMETERS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_BUFFER]: gl => (!isWebGL2(gl) ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0 : undefined),

  // WebGL2 context parameters
  [GL_FRAGMENT_SHADER_DERIVATIVE_HINT]: gl => (!isWebGL2(gl) ? GL_DONT_CARE : undefined),

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RASTERIZER_DISCARD]: getWebGL2ValueOrZero,

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLES]: getWebGL2ValueOrZero,

  // WebGL2 extension context parameters
  [GL_GPU_DISJOINT_EXT]: (gl, getParameter) => {
    const ext = isWebGL2(gl)
      ? gl.getExtension(EXT_disjoint_timer_query_webgl2)
      : gl.getExtension(EXT_disjoint_timer_query);
    return ext && ext.GPU_DISJOINT_EXT ? getParameter(ext.GPU_DISJOINT_EXT) : 0;
  },

  // Extension fixed values
  [GL_UNMASKED_VENDOR_WEBGL]: (gl, getParameter) => {
    const ext = gl.getExtension(WEBGL_debug_renderer_info);
    return getParameter((ext && ext.UNMASKED_VENDOR_WEBGL) || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VENDOR);
  },

  [GL_UNMASKED_RENDERER_WEBGL]: (gl, getParameter) => {
    const ext = gl.getExtension(WEBGL_debug_renderer_info);
    return getParameter((ext && ext.UNMASKED_RENDERER_WEBGL) || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERER);
  },

  // Extension LIMITS
  [GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT]: (gl, getParameter) => {
    const ext = gl.luma.extensions[EXT_texture_filter_anisotropic];
    return ext ? getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1.0;
  },

  // WebGL2 Limits
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_3D_TEXTURE_SIZE]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ARRAY_TEXTURE_LAYERS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_CLIENT_WAIT_TIMEOUT_WEBGL]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COLOR_ATTACHMENTS]: (gl, getParameter) => {
    if (!isWebGL2(gl)) {
      const ext = gl.getExtension(WEBGL_draw_buffers);
      return ext ? getParameter(ext.MAX_COLOR_ATTACHMENTS_WEBGL) : 0;
    }
    return undefined;
  },
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COMBINED_UNIFORM_BLOCKS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_DRAW_BUFFERS]: gl => {
    if (!isWebGL2(gl)) {
      const ext = gl.getExtension(WEBGL_draw_buffers);
      return ext ? ext.MAX_DRAW_BUFFERS_WEBGL : 0;
    }
    return undefined;
  },
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ELEMENT_INDEX]:
    // Guess: per webglstats.com 99.6% of webgl2 supports 2147483647
    gl => (gl.getExtension(OES_element_index) ? 2147483647 : 65535),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ELEMENTS_INDICES]:
    // Guess: "Reasonably safe" per webglstats.com - could be higher/lower (on some mobile devices)
    gl => (gl.getExtension(OES_element_index) ? 16777216 : 65535),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ELEMENTS_VERTICES]:
    // Guess: "Reasonably safe" per webglstats.com - could be higher/lower (on some mobile devices)
    gl => 16777216,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_FRAGMENT_INPUT_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_FRAGMENT_UNIFORM_BLOCKS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_FRAGMENT_UNIFORM_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_SAMPLES]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_SERVER_WAIT_TIMEOUT]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TEXTURE_LOD_BIAS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_UNIFORM_BLOCK_SIZE]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_UNIFORM_BUFFER_BINDINGS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VARYING_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_OUTPUT_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_UNIFORM_BLOCKS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_UNIFORM_COMPONENTS]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MIN_PROGRAM_TEXEL_OFFSET]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_PROGRAM_TEXEL_OFFSET]: getWebGL2ValueOrZero,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNIFORM_BUFFER_OFFSET_ALIGNMENT]: getWebGL2ValueOrZero
};

// Return true if WebGL2 context
function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

// A "replacement" gl.getParameter that accepts "enums" from extensions and WebGL2
// and returns reasonably safe defaults
function getParameterPolyfill(gl, originalGetParameter, pname) {
  // Return mock limits (usually 0) for WebGL2 constants to ensure these
  // can be queries without error
  const limit = WEBGL_PARAMETERS[pname];
  const value = typeof limit === 'function' ? limit(gl, originalGetParameter, pname) : limit;
  const result = value !== undefined ? value : originalGetParameter(pname);
  return result;
}


/***/ }),

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global window, global */
const moduleExports = __webpack_require__(/*! ./index */ "./src/index.js");

const _global = typeof window === 'undefined' ? global : window;
_global.loaders = _global.luma || {};

module.exports = Object.assign(_global.luma, moduleExports);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/classes/accessor.js":
/*!*********************************!*\
  !*** ./src/classes/accessor.js ***!
  \*********************************/
/*! exports provided: default, DEFAULT_ACCESSOR_VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ACCESSOR_VALUES", function() { return DEFAULT_ACCESSOR_VALUES; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




const DEFAULT_ACCESSOR_VALUES = {
  offset: 0,
  stride: 0,
  type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT,
  size: 1,
  divisor: 0,
  normalized: false,
  integer: false
};

const PROP_CHECKS = {
  deprecatedProps: {
    instanced: 'divisor',
    isInstanced: 'divisor'
  }
};

class Accessor {
  static getBytesPerElement(accessor) {
    // TODO: using `FLOAT` when type is not specified,
    // ensure this assumption is valid or force API to specify type.
    const ArrayType = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getTypedArrayFromGLType"])(accessor.type || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT);
    return ArrayType.BYTES_PER_ELEMENT;
  }

  static getBytesPerVertex(accessor) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(accessor.size);
    // TODO: using `FLOAT` when type is not specified,
    // ensure this assumption is valid or force API to specify type.
    const ArrayType = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getTypedArrayFromGLType"])(accessor.type || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT);
    return ArrayType.BYTES_PER_ELEMENT * accessor.size;
  }

  // Combines (merges) a list of accessors. On top of default values
  // Usually [programAccessor, bufferAccessor, appAccessor]
  // All props will be set in the returned object.
  // TODO check for conflicts between values in the supplied accessors
  static resolve(...accessors) {
    return new Accessor(...[DEFAULT_ACCESSOR_VALUES, ...accessors]); // Default values
  }

  constructor(...accessors) {
    accessors.forEach(accessor => this._assign(accessor)); // Merge in sequence
    Object.freeze(this);
  }

  toString() {
    return JSON.stringify(this);
  }

  // ACCESSORS

  // TODO - remove>
  get BYTES_PER_ELEMENT() {
    return Accessor.getBytesPerElement(this);
  }

  get BYTES_PER_VERTEX() {
    return Accessor.getBytesPerVertex(this);
  }

  // PRIVATE

  // eslint-disable-next-line complexity, max-statements
  _assign(props = {}) {
    props = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkProps"])('Accessor', props, PROP_CHECKS);

    if (props.type !== undefined) {
      this.type = props.type;

      // Auto-deduce integer type?
      if (props.type === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT || props.type === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT) {
        this.integer = true;
      }
    }
    if (props.size !== undefined) {
      this.size = props.size;
    }
    if (props.offset !== undefined) {
      this.offset = props.offset;
    }
    if (props.stride !== undefined) {
      this.stride = props.stride;
    }
    if (props.normalized !== undefined) {
      this.normalized = props.normalized;
    }
    if (props.integer !== undefined) {
      this.integer = props.integer;
    }

    // INSTANCE DIVISOR
    if (props.divisor !== undefined) {
      this.divisor = props.divisor;
    }

    // Buffer is optional
    if (props.buffer !== undefined) {
      this.buffer = props.buffer;
    }

    // The binding index (for binding e.g. Transform feedbacks and Uniform buffers)
    // TODO - should this be part of accessor?
    if (props.index !== undefined) {
      if (typeof index === 'boolean') {
        this.index = props.index ? 1 : 0;
      } else {
        this.index = props.index;
      }
    }

    // DEPRECATED
    if (props.instanced !== undefined) {
      this.divisor = props.instanced ? 1 : 0;
    }
    if (props.isInstanced !== undefined) {
      this.divisor = props.isInstanced ? 1 : 0;
    }

    return this;
  }
}

// TEST EXPORTS



/***/ }),

/***/ "./src/classes/buffer.js":
/*!*******************************!*\
  !*** ./src/classes/buffer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buffer; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessor */ "./src/classes/accessor.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






const DEBUG_DATA_LENGTH = 10;

// Shared prop checks for constructor and setProps
const DEPRECATED_PROPS = {
  offset: 'accessor.offset',
  stride: 'accessor.stride',
  type: 'accessor.type',
  size: 'accessor.size',
  divisor: 'accessor.divisor',
  normalized: 'accessor.normalized',
  integer: 'accessor.integer',
  instanced: 'accessor.divisor',
  isInstanced: 'accessor.divisor'
};

// Prop checks for constructor
const PROP_CHECKS_INITIALIZE = {
  removedProps: {},
  replacedProps: {
    bytes: 'byteLength'
  },
  // new Buffer() with individual accessor props is still used in apps, emit warnings
  deprecatedProps: DEPRECATED_PROPS
};

// Prop checks for setProps
const PROP_CHECKS_SET_PROPS = {
  // Buffer.setProps() with individual accessor props is rare => emit errors
  removedProps: DEPRECATED_PROPS
};

class Buffer extends _resource__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(gl, props = {}) {
    super(gl, props);

    this.stubRemovedMethods('Buffer', 'v6.0', ['layout', 'setLayout', 'getIndexedParameter']);
    // this.stubRemovedMethods('Buffer', 'v7.0', ['updateAccessor']);

    // In WebGL1, need to make sure we use GL.ELEMENT_ARRAY_BUFFER when initializing element buffers
    // otherwise buffer type will lock to generic (non-element) buffer
    // In WebGL2, we can use GL.COPY_READ_BUFFER which avoids locking the type here
    this.target = props.target || (this.gl.webgl2 ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_READ_BUFFER : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ARRAY_BUFFER);

    this.initialize(props);

    Object.seal(this);
  }

  // returns number of elements in the buffer (assuming that the full buffer is used)
  getElementCount(accessor = this.accessor) {
    return Math.round(this.byteLength / _accessor__WEBPACK_IMPORTED_MODULE_2__["default"].getBytesPerElement(accessor));
  }

  // returns number of vertices in the buffer (assuming that the full buffer is used)
  getVertexCount(accessor = this.accessor) {
    return Math.round(this.byteLength / _accessor__WEBPACK_IMPORTED_MODULE_2__["default"].getBytesPerVertex(accessor));
  }

  // Creates and initializes the buffer object's data store.
  // Signature: `new Buffer(gl, {data: new Float32Array(...)})`
  // Signature: `new Buffer(gl, new Float32Array(...))`
  // Signature: `new Buffer(gl, 100)`
  initialize(props = {}) {
    // Signature `new Buffer(gl, new Float32Array(...)`
    if (ArrayBuffer.isView(props)) {
      props = {data: props};
    }

    // Signature: `new Buffer(gl, 100)`
    if (Number.isFinite(props)) {
      props = {byteLength: props};
    }

    props = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["checkProps"])('Buffer', props, PROP_CHECKS_INITIALIZE);

    // Initialize member fields
    this.usage = props.usage || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STATIC_DRAW;
    this.debugData = null;

    // Deprecated: Merge main props and accessor
    this.setAccessor(Object.assign({}, props, props.accessor));

    // Set data: (re)initializes the buffer
    if (props.data) {
      this._setData(props.data);
    } else {
      this._setByteLength(props.byteLength || 0);
    }

    return this;
  }

  setProps(props) {
    props = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["checkProps"])('Buffer', props, PROP_CHECKS_SET_PROPS);

    if ('accessor' in props) {
      this.setAccessor(props.accessor);
    }

    return this;
  }

  // Optionally stores an accessor with the buffer, makes it easier to use it as an attribute later
  // {type, size = 1, offset = 0, stride = 0, normalized = false, integer = false, divisor = 0}
  setAccessor(accessor) {
    // NOTE: From luma.gl v7.0, Accessors have an optional `buffer `field
    // (mainly to support "interleaving")
    // To avoid confusion, ensure `buffer.accessor` does not have a `buffer.accessor.buffer` field:
    accessor = Object.assign({}, accessor);
    delete accessor.buffer;

    // This new statement ensures that an "accessor object" is re-packaged as an Accessor instance
    this.accessor = new _accessor__WEBPACK_IMPORTED_MODULE_2__["default"](accessor);
    return this;
  }

  // Allocate a bigger GPU buffer (if the current buffer is not big enough).
  // If a reallocation is triggered it clears the buffer
  // Returns:
  //  `true`: buffer was reallocated, data was cleared
  //  `false`: buffer was big enough, data is intact
  reallocate(byteLength) {
    if (byteLength > this.byteLength) {
      this._setByteLength(byteLength);
      return true;
    }
    this.bytesUsed = byteLength;
    return false;
  }

  // Update with new data. Reinitializes the buffer
  setData(props) {
    return this.initialize(props);
  }

  // Updates a subset of a buffer object's data store.
  // Data (Typed Array or ArrayBuffer), length is inferred unless provided
  // Offset into buffer
  // WebGL2 only: Offset into srcData
  // WebGL2 only: Number of bytes to be copied
  subData(props) {
    // Signature: buffer.subData(new Float32Array([...]))
    if (ArrayBuffer.isView(props)) {
      props = {data: props};
    }

    const {data, offset = 0, srcOffset = 0} = props;
    const byteLength = props.byteLength || props.length;

    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(data);

    // Create the buffer - binding it here for the first time locks the type
    // In WebGL2, use GL.COPY_WRITE_BUFFER to avoid locking the type
    const target = this.gl.webgl2 ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_WRITE_BUFFER : this.target;
    this.gl.bindBuffer(target, this.handle);
    // WebGL2: subData supports additional srcOffset and length parameters
    if (srcOffset !== 0 || byteLength !== undefined) {
      Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["assertWebGL2Context"])(this.gl);
      this.gl.bufferSubData(this.target, offset, data, srcOffset, byteLength);
    } else {
      this.gl.bufferSubData(target, offset, data);
    }
    this.gl.bindBuffer(target, null);

    // TODO - update local `data` if offsets are right
    this.debugData = null;

    this._inferType(data);

    return this;
  }

  // WEBGL2 ONLY: Copies part of the data of another buffer into this buffer
  copyData({sourceBuffer, readOffset = 0, writeOffset = 0, size}) {
    const {gl} = this;
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["assertWebGL2Context"])(gl);

    // Use GL.COPY_READ_BUFFER+GL.COPY_WRITE_BUFFER avoid disturbing other targets and locking type
    gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_READ_BUFFER, sourceBuffer.handle);
    gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_WRITE_BUFFER, this.handle);
    gl.copyBufferSubData(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_READ_BUFFER, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_WRITE_BUFFER, readOffset, writeOffset, size);
    gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_READ_BUFFER, null);
    gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_WRITE_BUFFER, null);

    // TODO - update local `data` if offsets are 0
    this.debugData = null;

    return this;
  }

  // WEBGL2 ONLY: Reads data from buffer into an ArrayBufferView or SharedArrayBuffer.
  getData({dstData = null, srcByteOffset = 0, dstOffset = 0, length = 0} = {}) {
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["assertWebGL2Context"])(this.gl);

    const ArrayType = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["getTypedArrayFromGLType"])(this.accessor.type || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT, {clamped: false});
    const sourceAvailableElementCount = this._getAvailableElementCount(srcByteOffset);

    const dstElementOffset = dstOffset;

    let dstAvailableElementCount;
    let dstElementCount;
    if (dstData) {
      dstElementCount = dstData.length;
      dstAvailableElementCount = dstElementCount - dstElementOffset;
    } else {
      // Allocate ArrayBufferView with enough size to copy all eligible data.
      dstAvailableElementCount = Math.min(
        sourceAvailableElementCount,
        length || sourceAvailableElementCount
      );
      dstElementCount = dstElementOffset + dstAvailableElementCount;
    }

    const copyElementCount = Math.min(sourceAvailableElementCount, dstAvailableElementCount);
    length = length || copyElementCount;
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(length <= copyElementCount);
    dstData = dstData || new ArrayType(dstElementCount);

    // Use GL.COPY_READ_BUFFER to avoid disturbing other targets and locking type
    this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_READ_BUFFER, this.handle);
    this.gl.getBufferSubData(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_READ_BUFFER, srcByteOffset, dstData, dstOffset, length);
    this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_READ_BUFFER, null);

    // TODO - update local `data` if offsets are 0
    return dstData;
  }

  /**
   * Binds a buffer to a given binding point (target).
   *   GL.TRANSFORM_FEEDBACK_BUFFER and GL.UNIFORM_BUFFER take an index, and optionally a range.
   *   - GL.TRANSFORM_FEEDBACK_BUFFER and GL.UNIFORM_BUFFER need an index to affect state
   *   - GL.UNIFORM_BUFFER: `offset` must be aligned to GL.UNIFORM_BUFFER_OFFSET_ALIGNMENT.
   *   - GL.UNIFORM_BUFFER: `size` must be a minimum of GL.UNIFORM_BLOCK_SIZE_DATA.
   */
  bind({
    target = this.target, // target for the bind operation
    index = this.accessor && this.accessor.index, // index = index of target (indexed bind point)
    offset = 0,
    size
  } = {}) {
    // NOTE: While GL.TRANSFORM_FEEDBACK_BUFFER and GL.UNIFORM_BUFFER could
    // be used as direct binding points, they will not affect transform feedback or
    // uniform buffer state. Instead indexed bindings need to be made.
    if (target === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNIFORM_BUFFER || target === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK_BUFFER) {
      if (size !== undefined) {
        this.gl.bindBufferRange(target, index, this.handle, offset, size);
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(offset === 0); // Make sure offset wasn't supplied
        this.gl.bindBufferBase(target, index, this.handle);
      }
    } else {
      this.gl.bindBuffer(target, this.handle);
    }

    return this;
  }

  unbind({target = this.target, index = this.accessor && this.accessor.index} = {}) {
    const isIndexedBuffer = target === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNIFORM_BUFFER || target === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK_BUFFER;
    if (isIndexedBuffer) {
      this.gl.bindBufferBase(target, index, null);
    } else {
      this.gl.bindBuffer(target, null);
    }
    return this;
  }

  // PROTECTED METHODS (INTENDED FOR USE BY OTHER FRAMEWORK CODE ONLY)

  // Returns a short initial data array
  getDebugData() {
    if (!this.debugData) {
      this.debugData = this.getData({length: DEBUG_DATA_LENGTH});
      return {data: this.debugData, changed: true};
    }
    return {data: this.debugData, changed: false};
  }

  invalidateDebugData() {
    this.debugData = null;
  }

  // PRIVATE METHODS

  // Allocate a new buffer and initialize to contents of typed array
  _setData(data, usage = this.usage) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(ArrayBuffer.isView(data));

    this._trackDeallocatedMemory();

    const target = this._getTarget();
    this.gl.bindBuffer(target, this.handle);
    this.gl.bufferData(target, data, usage);
    this.gl.bindBuffer(target, null);

    this.usage = usage;
    this.debugData = data.slice(0, DEBUG_DATA_LENGTH);
    this.bytesUsed = data.byteLength;

    this._trackAllocatedMemory(data.byteLength);

    // infer GL type from supplied typed array
    const type = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["getGLTypeFromTypedArray"])(data);
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(type);
    this.setAccessor(new _accessor__WEBPACK_IMPORTED_MODULE_2__["default"](this.accessor, {type}));
    return this;
  }

  // Allocate a GPU buffer of specified size.
  _setByteLength(byteLength, usage = this.usage) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(byteLength >= 0);

    this._trackDeallocatedMemory();

    // Workaround needed for Safari (#291):
    // gl.bufferData with size equal to 0 crashes. Instead create zero sized array.
    let data = byteLength;
    if (byteLength === 0) {
      data = new Float32Array(0);
    }

    const target = this._getTarget();
    this.gl.bindBuffer(target, this.handle);
    this.gl.bufferData(target, data, usage);
    this.gl.bindBuffer(target, null);

    this.usage = usage;
    this.debugData = null;
    this.bytesUsed = byteLength;

    this._trackAllocatedMemory(byteLength);

    return this;
  }

  // Binding a buffer for the first time locks the type
  // In WebGL2, use GL.COPY_WRITE_BUFFER to avoid locking the type
  _getTarget() {
    return this.gl.webgl2 ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COPY_WRITE_BUFFER : this.target;
  }

  _getAvailableElementCount(srcByteOffset) {
    const ArrayType = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["getTypedArrayFromGLType"])(this.accessor.type || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT, {clamped: false});
    const sourceElementOffset = srcByteOffset / ArrayType.BYTES_PER_ELEMENT;
    return this.getElementCount() - sourceElementOffset;
  }

  // Automatically infers type from typed array passed to setData
  // Note: No longer that useful, since type is now autodeduced from the compiled shaders
  _inferType(data) {
    if (!this.accessor.type) {
      this.setAccessor(new _accessor__WEBPACK_IMPORTED_MODULE_2__["default"](this.accessor, {type: Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["getGLTypeFromTypedArray"])(data)}));
    }
  }

  // RESOURCE METHODS

  _createHandle() {
    return this.gl.createBuffer();
  }

  _deleteHandle() {
    this.gl.deleteBuffer(this.handle);
    this._trackDeallocatedMemory();
  }

  _getParameter(pname) {
    this.gl.bindBuffer(this.target, this.handle);
    const value = this.gl.getBufferParameter(this.target, pname);
    this.gl.bindBuffer(this.target, null);
    return value;
  }

  // DEPRECATIONS - v7.0
  get type() {
    _utils__WEBPACK_IMPORTED_MODULE_4__["log"].deprecated('Buffer.type', 'Buffer.accessor.type')();
    return this.accessor.type;
  }

  get bytes() {
    _utils__WEBPACK_IMPORTED_MODULE_4__["log"].deprecated('Buffer.bytes', 'Buffer.byteLength')();
    return this.byteLength;
  }

  // DEPRECATIONS - v6.0
  // Deprecated in v6.x, but not warnings not properly implemented
  setByteLength(byteLength) {
    _utils__WEBPACK_IMPORTED_MODULE_4__["log"].deprecated('setByteLength', 'reallocate')();
    return this.reallocate(byteLength);
  }

  // Deprecated in v6.x, but not warnings not properly implemented
  updateAccessor(opts) {
    _utils__WEBPACK_IMPORTED_MODULE_4__["log"].deprecated('updateAccessor(...)', 'setAccessor(new Accessor(buffer.accessor, ...)')();
    this.accessor = new _accessor__WEBPACK_IMPORTED_MODULE_2__["default"](this.accessor, opts);
    return this;
  }
}


/***/ }),

/***/ "./src/classes/clear.js":
/*!******************************!*\
  !*** ./src/classes/clear.js ***!
  \******************************/
/*! exports provided: clear, clearBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBuffer", function() { return clearBuffer; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ "./src/context/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




// Should collapse during minification
const GL_DEPTH_BUFFER_BIT = 0x00000100;
const GL_STENCIL_BUFFER_BIT = 0x00000400;
const GL_COLOR_BUFFER_BIT = 0x00004000;

const GL_COLOR = 0x1800;
const GL_DEPTH = 0x1801;
const GL_STENCIL = 0x1802;
const GL_DEPTH_STENCIL = 0x84f9;

// Should disappear if asserts are removed
const ERR_ARGUMENTS = 'clear: bad arguments';

// Optionally clears depth, color and stencil buffers
function clear(gl, {framebuffer = null, color = null, depth = null, stencil = null} = {}) {
  const parameters = {};

  if (framebuffer) {
    parameters.framebuffer = framebuffer;
  }

  let clearFlags = 0;

  if (color) {
    clearFlags |= GL_COLOR_BUFFER_BIT;
    if (color !== true) {
      parameters.clearColor = color;
    }
  }

  if (depth) {
    clearFlags |= GL_DEPTH_BUFFER_BIT;
    if (depth !== true) {
      parameters.clearDepth = depth;
    }
  }

  if (stencil) {
    clearFlags |= GL_STENCIL_BUFFER_BIT;
    if (depth !== true) {
      parameters.clearStencil = depth;
    }
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(clearFlags !== 0, ERR_ARGUMENTS);

  // Temporarily set any clear "colors" and call clear
  Object(_context__WEBPACK_IMPORTED_MODULE_0__["withParameters"])(gl, parameters, () => {
    gl.clear(clearFlags);
  });
}

// WebGL2 - clear a specific drawing buffer
function clearBuffer(
  gl,
  {framebuffer = null, buffer = GL_COLOR, drawBuffer = 0, value = [0, 0, 0, 0]} = {}
) {
  Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["assertWebGL2Context"])(gl);

  Object(_context__WEBPACK_IMPORTED_MODULE_0__["withParameters"])(gl, {framebuffer}, () => {
    // Method selection per OpenGL ES 3 docs
    switch (buffer) {
      case GL_COLOR:
        switch (value.constructor) {
          case Int32Array:
            gl.clearBufferiv(buffer, drawBuffer, value);
            break;
          case Uint32Array:
            gl.clearBufferuiv(buffer, drawBuffer, value);
            break;
          case Float32Array:
          default:
            gl.clearBufferfv(buffer, drawBuffer, value);
        }
        break;

      case GL_DEPTH:
        gl.clearBufferfv(GL_DEPTH, 0, [value]);
        break;

      case GL_STENCIL:
        gl.clearBufferiv(GL_STENCIL, 0, [value]);
        break;

      case GL_DEPTH_STENCIL:
        const [depth, stencil] = value;
        gl.clearBufferfi(GL_DEPTH_STENCIL, 0, depth, stencil);
        break;

      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(false, ERR_ARGUMENTS);
    }
  });
}


/***/ }),

/***/ "./src/classes/copy-and-blit.js":
/*!**************************************!*\
  !*** ./src/classes/copy-and-blit.js ***!
  \**************************************/
/*! exports provided: readPixelsToArray, readPixelsToBuffer, copyToDataUrl, copyToImage, copyToTexture, blit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPixelsToArray", function() { return readPixelsToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPixelsToBuffer", function() { return readPixelsToBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToDataUrl", function() { return copyToDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToImage", function() { return copyToImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToTexture", function() { return copyToTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blit", function() { return blit; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./src/classes/buffer.js");
/* harmony import */ var _framebuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framebuffer */ "./src/classes/framebuffer.js");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture */ "./src/classes/texture.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./src/context/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _webgl_utils_typed_array_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl-utils/typed-array-utils */ "./src/webgl-utils/typed-array-utils.js");
/* harmony import */ var _webgl_utils_format_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl-utils/format-utils */ "./src/webgl-utils/format-utils.js");
/* harmony import */ var _webgl_utils_texture_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webgl-utils/texture-utils */ "./src/webgl-utils/texture-utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");











// NOTE: Slow requires roundtrip to GPU
// Copies data from a Framebuffer or a Texture object into ArrayBuffer object.
// App can provide targetPixelArray or have it auto allocated by this method
// @returns {Uint8Array|Uint16Array|FloatArray} - pixel array,
//  newly allocated by this method unless provided by app.
function readPixelsToArray(
  source,
  {
    sourceX = 0,
    sourceY = 0,
    sourceFormat = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
    sourceAttachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0, // TODO - support gl.readBuffer
    target = null,
    // following parameters are auto deduced if not provided
    sourceWidth,
    sourceHeight,
    sourceType
  } = {}
) {
  const {framebuffer, deleteFramebuffer} = getFramebuffer(source);
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(framebuffer);
  const {gl, handle, attachments} = framebuffer;
  sourceWidth = sourceWidth || framebuffer.width;
  sourceHeight = sourceHeight || framebuffer.height;

  // TODO - Set and unset gl.readBuffer
  if (sourceAttachment === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0 && handle === null) {
    sourceAttachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT;
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(attachments[sourceAttachment]);

  // Deduce the type from color attachment if not provided.
  sourceType = sourceType || attachments[sourceAttachment].type;

  // Deduce type and allocated pixelArray if needed
  target = getPixelArray(target, sourceType, sourceFormat, sourceWidth, sourceHeight);

  // Pixel array available, if necessary, deduce type from it.
  sourceType = sourceType || Object(_webgl_utils_typed_array_utils__WEBPACK_IMPORTED_MODULE_6__["getGLTypeFromTypedArray"])(target);

  const prevHandle = gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, handle);
  gl.readPixels(sourceX, sourceY, sourceWidth, sourceHeight, sourceFormat, sourceType, target);
  gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, prevHandle || null);
  if (deleteFramebuffer) {
    framebuffer.delete();
  }
  return target;
}

// NOTE: doesn't wait for copy to be complete, it programs GPU to perform a DMA transffer.
// Copies data from a Framebuffer or a Texture object into a Buffer object.
function readPixelsToBuffer(
  source,
  {
    sourceX = 0,
    sourceY = 0,
    sourceFormat = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
    target = null, // A new Buffer object is created when not provided.
    targetByteOffset = 0, // byte offset in buffer object
    // following parameters are auto deduced if not provided
    sourceWidth,
    sourceHeight,
    sourceType
  }
) {
  const {framebuffer, deleteFramebuffer} = getFramebuffer(source);
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(framebuffer);
  const {gl} = framebuffer;
  sourceWidth = sourceWidth || framebuffer.width;
  sourceHeight = sourceHeight || framebuffer.height;

  // Asynchronus read (PIXEL_PACK_BUFFER) is WebGL2 only feature
  Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["assertWebGL2Context"])(gl);

  // deduce type if not available.
  sourceType = sourceType || (target ? target.type : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE);

  if (!target) {
    // Create new buffer with enough size
    const components = Object(_webgl_utils_format_utils__WEBPACK_IMPORTED_MODULE_7__["glFormatToComponents"])(sourceFormat);
    const byteCount = Object(_webgl_utils_format_utils__WEBPACK_IMPORTED_MODULE_7__["glTypeToBytes"])(sourceType);
    const byteLength = targetByteOffset + sourceWidth * sourceHeight * components * byteCount;
    target = new _buffer__WEBPACK_IMPORTED_MODULE_1__["default"](gl, {byteLength, accessor: {type: sourceType, size: components}});
  }

  target.bind({target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PIXEL_PACK_BUFFER});
  Object(_context__WEBPACK_IMPORTED_MODULE_4__["withParameters"])(gl, {framebuffer}, () => {
    gl.readPixels(
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      sourceFormat,
      sourceType,
      targetByteOffset
    );
  });
  target.unbind({target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PIXEL_PACK_BUFFER});
  if (deleteFramebuffer) {
    framebuffer.delete();
  }

  return target;
}

// Reads pixels from a Framebuffer or Texture object to a dataUrl
function copyToDataUrl(
  source,
  {
    sourceAttachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0, // TODO - support gl.readBuffer
    targetMaxHeight = Number.MAX_SAFE_INTEGER
  } = {}
) {
  let data = readPixelsToArray(source, {sourceAttachment});

  // Scale down
  let {width, height} = source;
  while (height > targetMaxHeight) {
    ({data, width, height} = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["scalePixels"])({data, width, height}));
  }

  // Flip to top down coordinate system
  Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["flipRows"])({data, width, height});

  /* global document */
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');

  // Copy the pixels to a 2D canvas
  const imageData = context.createImageData(width, height);
  imageData.data.set(data);
  context.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}

// Reads pixels from a Framebuffer or Texture object into an HTML Image
function copyToImage(
  source,
  {
    sourceAttachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0, // TODO - support gl.readBuffer
    targetImage = null
  } = {}
) {
  /* global Image */
  const dataUrl = copyToDataUrl(source, {sourceAttachment});
  targetImage = targetImage || new Image();
  targetImage.src = dataUrl;
  return targetImage;
}

// Copy a rectangle from a Framebuffer or Texture object into a texture (at an offset)
// eslint-disable-next-line complexity, max-statements
function copyToTexture(
  source,
  target,
  {
    sourceX = 0,
    sourceY = 0,
    // attachment = GL.COLOR_ATTACHMENT0, // TODO - support gl.readBuffer

    targetX,
    targetY,
    targetZ,
    targetMipmaplevel = 0,
    targetInternalFormat = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,

    width, // defaults to target width
    height // defaults to target height
  } = {}
) {
  const {framebuffer, deleteFramebuffer} = getFramebuffer(source);
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(framebuffer);
  const {gl, handle} = framebuffer;
  const isSubCopy =
    typeof targetX !== 'undefined' ||
    typeof targetY !== 'undefined' ||
    typeof targetZ !== 'undefined';
  targetX = targetX || 0;
  targetY = targetY || 0;
  targetZ = targetZ || 0;
  const prevHandle = gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, handle);
  // TODO - support gl.readBuffer (WebGL2 only)
  // const prevBuffer = gl.readBuffer(attachment);
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(target);
  let texture = null;
  if (target instanceof _texture__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    texture = target;
    width = Number.isFinite(width) ? width : texture.width;
    height = Number.isFinite(height) ? height : texture.height;
    texture.bind(0);
    target = texture.target;
  }

  if (!isSubCopy) {
    gl.copyTexImage2D(
      target,
      targetMipmaplevel,
      targetInternalFormat,
      sourceX,
      sourceY,
      width,
      height,
      0 /* border must be 0 */
    );
  } else {
    switch (target) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_2D:
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP:
        gl.copyTexSubImage2D(
          target,
          targetMipmaplevel,
          targetX,
          targetY,
          sourceX,
          sourceY,
          width,
          height
        );
        break;
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_2D_ARRAY:
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_3D:
        gl.copyTexSubImage3D(
          target,
          targetMipmaplevel,
          targetX,
          targetY,
          targetZ,
          sourceX,
          sourceY,
          width,
          height
        );
        break;
      default:
    }
  }
  if (texture) {
    texture.unbind();
  }
  gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, prevHandle || null);
  if (deleteFramebuffer) {
    framebuffer.delete();
  }
  return texture;
}

// NOTE: WEBLG2 only
// Copies a rectangle of pixels between Framebuffer or Texture objects
// eslint-disable-next-line max-statements, complexity
function blit(
  source,
  target,
  {
    sourceAttachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0,
    sourceX0 = 0,
    sourceY0 = 0,
    sourceX1,
    sourceY1,
    targetX0 = 0,
    targetY0 = 0,
    targetX1,
    targetY1,
    color = true,
    depth = false,
    stencil = false,
    mask = 0,
    filter = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.NEAREST
  } = {}
) {
  const {framebuffer: srcFramebuffer, deleteFramebuffer: deleteSrcFramebuffer} = getFramebuffer(
    source
  );
  const {framebuffer: dstFramebuffer, deleteFramebuffer: deleteDstFramebuffer} = getFramebuffer(
    target
  );

  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(srcFramebuffer);
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(dstFramebuffer);
  const {gl, handle, width, height, readBuffer} = dstFramebuffer;
  Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["assertWebGL2Context"])(gl);

  if (!srcFramebuffer.handle && sourceAttachment === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0) {
    sourceAttachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRONT;
  }

  if (color) {
    mask |= _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_BUFFER_BIT;
  }
  if (depth) {
    mask |= _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_BUFFER_BIT;
  }
  if (stencil) {
    mask |= _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BUFFER_BIT;
  }

  if (deleteSrcFramebuffer || deleteDstFramebuffer) {
    // Either source or destiantion was a texture object, which is wrapped in a Framebuffer objecgt as color attachment.
    // Overwrite the mask to `COLOR_BUFFER_BIT`
    if (mask & (_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_BUFFER_BIT | _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_BUFFER_BIT)) {
      mask = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_BUFFER_BIT;
      _utils__WEBPACK_IMPORTED_MODULE_9__["log"].warn('Blitting from or into a Texture object, forcing mask to GL.COLOR_BUFFER_BIT')();
    }
  }
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["assert"])(mask);

  sourceX1 = sourceX1 === undefined ? srcFramebuffer.width : sourceX1;
  sourceY1 = sourceY1 === undefined ? srcFramebuffer.height : sourceY1;
  targetX1 = targetX1 === undefined ? width : targetX1;
  targetY1 = targetY1 === undefined ? height : targetY1;

  const prevDrawHandle = gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DRAW_FRAMEBUFFER, handle);
  const prevReadHandle = gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER, srcFramebuffer.handle);
  gl.readBuffer(sourceAttachment);
  gl.blitFramebuffer(
    sourceX0,
    sourceY0,
    sourceX1,
    sourceY1,
    targetX0,
    targetY0,
    targetX1,
    targetY1,
    mask,
    filter
  );
  gl.readBuffer(readBuffer);
  gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER, prevReadHandle || null);
  gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DRAW_FRAMEBUFFER, prevDrawHandle || null);
  if (deleteSrcFramebuffer) {
    srcFramebuffer.delete();
  }
  if (deleteDstFramebuffer) {
    dstFramebuffer.delete();
  }

  return dstFramebuffer;
}

// Helper methods

function getFramebuffer(source) {
  if (!(source instanceof _framebuffer__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    return {framebuffer: Object(_webgl_utils_texture_utils__WEBPACK_IMPORTED_MODULE_8__["toFramebuffer"])(source), deleteFramebuffer: true};
  }
  return {framebuffer: source, deleteFramebuffer: false};
}

function getPixelArray(pixelArray, type, format, width, height) {
  if (pixelArray) {
    return pixelArray;
  }
  // Allocate pixel array if not already available, using supplied type
  type = type || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE;
  const ArrayType = Object(_webgl_utils_typed_array_utils__WEBPACK_IMPORTED_MODULE_6__["getTypedArrayFromGLType"])(type, {clamped: false});
  const components = Object(_webgl_utils_format_utils__WEBPACK_IMPORTED_MODULE_7__["glFormatToComponents"])(format);
  // TODO - check for composite type (components = 1).
  return new ArrayType(width * height * components);
}


/***/ }),

/***/ "./src/classes/framebuffer.js":
/*!************************************!*\
  !*** ./src/classes/framebuffer.js ***!
  \************************************/
/*! exports provided: default, FRAMEBUFFER_ATTACHMENT_PARAMETERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Framebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAMEBUFFER_ATTACHMENT_PARAMETERS", function() { return FRAMEBUFFER_ATTACHMENT_PARAMETERS; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _texture_2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texture-2d */ "./src/classes/texture-2d.js");
/* harmony import */ var _renderbuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderbuffer */ "./src/classes/renderbuffer.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear */ "./src/classes/clear.js");
/* harmony import */ var _copy_and_blit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copy-and-blit.js */ "./src/classes/copy-and-blit.js");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features */ "./src/features/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");














const ERR_MULTIPLE_RENDERTARGETS = 'Multiple render targets not supported';

class Framebuffer extends _resource__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static isSupported(
    gl,
    {
      colorBufferFloat, // Whether floating point textures can be rendered and read
      colorBufferHalfFloat // Whether half float textures can be rendered and read
    } = {}
  ) {
    let supported = true;
    supported =
      colorBufferFloat &&
      gl.getExtension(Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["isWebGL2"])(gl) ? 'EXT_color_buffer_float' : 'WEBGL.color_buffer_float');
    supported =
      colorBufferHalfFloat &&
      gl.getExtension(Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["isWebGL2"])(gl) ? 'EXT_color_buffer_float' : 'EXT_color_buffer_half_float');
    return supported;
  }

  // Create a Framebuffer wrapper for the default framebuffer (target === null)
  static getDefaultFramebuffer(gl) {
    gl.luma = gl.luma || {};
    gl.luma.defaultFramebuffer =
      gl.luma.defaultFramebuffer ||
      new Framebuffer(gl, {
        id: 'default-framebuffer',
        handle: null,
        attachments: {}
      });
    // TODO - can we query for and get a handle to the GL.FRONT renderbuffer?
    return gl.luma.defaultFramebuffer;
  }

  get MAX_COLOR_ATTACHMENTS() {
    return this.gl.getParameter(this.gl.MAX_COLOR_ATTACHMENTS);
  }

  get MAX_DRAW_BUFFERS() {
    return this.gl.getParameter(this.gl.MAX_DRAW_BUFFERS);
  }

  constructor(gl, opts = {}) {
    super(gl, opts);

    // Public members
    this.width = null;
    this.height = null;
    this.attachments = {};
    this.readBuffer = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0;
    this.drawBuffers = [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0];
    this.initialize(opts);

    Object.seal(this);
  }

  get color() {
    return this.attachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0] || null;
  }

  get texture() {
    return this.attachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0] || null;
  }

  get depth() {
    return (
      this.attachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_ATTACHMENT] || this.attachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_STENCIL_ATTACHMENT] || null
    );
  }

  get stencil() {
    return (
      this.attachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_ATTACHMENT] ||
      this.attachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_STENCIL_ATTACHMENT] ||
      null
    );
  }

  initialize({
    width = 1,
    height = 1,
    attachments = null,
    color = true,
    depth = true,
    stencil = false,
    check = true,
    readBuffer,
    drawBuffers
  }) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_8__["assert"])(width >= 0 && height >= 0, 'Width and height need to be integers');

    // Store actual width and height for diffing
    this.width = width;
    this.height = height;

    // Resize any provided attachments - note that resize only resizes if needed
    // Note: A framebuffer has no separate size, it is defined by its attachments (which must agree)
    if (attachments) {
      for (const attachment in attachments) {
        const target = attachments[attachment];
        const object = Array.isArray(target) ? target[0] : target;
        object.resize({width, height});
      }
    } else {
      // Create any requested default attachments
      attachments = this._createDefaultAttachments(color, depth, stencil, width, height);
    }

    this.update({clearAttachments: true, attachments, readBuffer, drawBuffers});

    // Checks that framebuffer was properly set up, if not, throws an explanatory error
    if (attachments && check) {
      this.checkStatus();
    }
  }

  update({
    attachments = {},
    readBuffer,
    drawBuffers,
    clearAttachments = false,
    resizeAttachments = true
  }) {
    this.attach(attachments, {clearAttachments, resizeAttachments});

    const {gl} = this;
    // Multiple render target support, set read buffer and draw buffers
    const prevHandle = gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, this.handle);
    if (readBuffer) {
      this._setReadBuffer(readBuffer);
    }
    if (drawBuffers) {
      this._setDrawBuffers(drawBuffers);
    }
    gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, prevHandle || null);

    return this;
  }

  // Attachment resize is expected to be a noop if size is same
  resize({width, height} = {}) {
    // for default framebuffer, just update the stored size
    if (this.handle === null) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_8__["assert"])(width === undefined && height === undefined);
      this.width = this.gl.drawingBufferWidth;
      this.height = this.gl.drawingBufferHeight;
      return this;
    }

    if (width === undefined) {
      width = this.gl.drawingBufferWidth;
    }
    if (height === undefined) {
      height = this.gl.drawingBufferHeight;
    }

    if (width !== this.width && height !== this.height) {
      _utils__WEBPACK_IMPORTED_MODULE_8__["log"].log(2, `Resizing framebuffer ${this.id} to ${width}x${height}`)();
    }
    for (const attachmentPoint in this.attachments) {
      this.attachments[attachmentPoint].resize({width, height});
    }
    this.width = width;
    this.height = height;
    return this;
  }

  // Attach from a map of attachments
  attach(attachments, {clearAttachments = false, resizeAttachments = true} = {}) {
    const newAttachments = {};

    // Any current attachments need to be removed, add null values to map
    if (clearAttachments) {
      Object.keys(this.attachments).forEach(key => {
        newAttachments[key] = null;
      });
    }

    // Overlay the new attachments
    Object.assign(newAttachments, attachments);

    const prevHandle = this.gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, this.handle);

    // Walk the attachments
    for (const key in newAttachments) {
      // Ensure key is not undefined
      Object(_utils__WEBPACK_IMPORTED_MODULE_8__["assert"])(key !== undefined, 'Misspelled framebuffer binding point?');

      const attachment = Number(key);

      const descriptor = newAttachments[attachment];
      let object = descriptor;
      if (!object) {
        this._unattach(attachment);
      } else if (object instanceof _renderbuffer__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        this._attachRenderbuffer({attachment, renderbuffer: object});
      } else if (Array.isArray(descriptor)) {
        const [texture, layer = 0, level = 0] = descriptor;
        object = texture;
        this._attachTexture({attachment, texture, layer, level});
      } else {
        this._attachTexture({attachment, texture: object, layer: 0, level: 0});
      }

      // Resize objects
      if (resizeAttachments && object) {
        object.resize({width: this.width, height: this.height});
      }
    }

    this.gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, prevHandle || null);

    // Assign to attachments and remove any nulls to get a clean attachment map
    Object.assign(this.attachments, attachments);
    Object.keys(this.attachments)
      .filter(key => !this.attachments[key])
      .forEach(key => {
        delete this.attachments[key];
      });
  }

  checkStatus() {
    const {gl} = this;
    const prevHandle = gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, this.handle);
    const status = gl.checkFramebufferStatus(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER);
    gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, prevHandle || null);
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
      throw new Error(_getFrameBufferStatus(status));
    }
    return this;
  }

  clear({color, depth, stencil, drawBuffers = []} = {}) {
    // Bind framebuffer and delegate to global clear functions
    const prevHandle = this.gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, this.handle);

    if (color || depth || stencil) {
      Object(_clear__WEBPACK_IMPORTED_MODULE_4__["clear"])(this.gl, {color, depth, stencil});
    }

    drawBuffers.forEach((value, drawBuffer) => {
      Object(_clear__WEBPACK_IMPORTED_MODULE_4__["clearBuffer"])({drawBuffer, value});
    });

    this.gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, prevHandle || null);

    return this;
  }

  // NOTE: Slow requires roundtrip to GPU
  // App can provide pixelArray or have it auto allocated by this method
  // @returns {Uint8Array|Uint16Array|FloatArray} - pixel array,
  //  newly allocated by this method unless provided by app.
  readPixels(opts = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_8__["log"].error(
      'Framebuffer.readPixels() is no logner supported, use readPixelsToArray(framebuffer)'
    )();
    return null;
  }

  // Reads data into provided buffer object asynchronously
  // This function doesn't wait for copy to be complete, it programs GPU to perform a DMA transffer.
  readPixelsToBuffer(opts = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_8__["log"].error(
      'Framebuffer.readPixelsToBuffer()is no logner supported, use readPixelsToBuffer(framebuffer)'
    )();
    return null;
  }

  // Reads pixels as a dataUrl
  copyToDataUrl(opts = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_8__["log"].error(
      'Framebuffer.copyToDataUrl() is no logner supported, use copyToDataUrl(framebuffer)'
    )();
    return null;
  }

  // Reads pixels into an HTML Image
  copyToImage(opts = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_8__["log"].error('Framebuffer.copyToImage() is no logner supported, use copyToImage(framebuffer)')();
    return null;
  }

  // copyToFramebuffer({width, height}) {
  //   const scaleX = width / this.width;
  //   const scaleY = height / this.height;
  //   const scale = Math.min(scaleX, scaleY);
  //   width = width * scale;
  //   height = height * scale;
  //   const scaledFramebuffer = new Framebuffer(this.gl, {width, height});
  //   this.blit();
  // }

  // Copy a rectangle from a framebuffer attachment into a texture (at an offset)
  // NOTE: assumes texture has enough storage allocated
  // eslint-disable-next-line complexity
  copyToTexture(opts = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_8__["log"].error(
      'Framebuffer.copyToTexture({...}) is no logner supported, use copyToTexture(source, target, opts})'
    )();
    return null;
  }

  // WEBGL2 INTERFACE

  // Copies a rectangle of pixels between framebuffers
  // eslint-disable-next-line complexity
  blit(opts = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_8__["log"].error('Framebuffer.blit({...}) is no logner supported, use blit(source, target, opts)')();
    return null;
  }

  // signals to the GL that it need not preserve all pixels of a specified region of the framebuffer
  invalidate({attachments = [], x = 0, y = 0, width, height}) {
    const {gl} = this;
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["assertWebGL2Context"])(gl);
    const prevHandle = gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER, this.handle);
    const invalidateAll = x === 0 && y === 0 && width === undefined && height === undefined;
    if (invalidateAll) {
      gl.invalidateFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER, attachments);
    } else {
      gl.invalidateFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER, attachments, x, y, width, height);
    }
    gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.READ_FRAMEBUFFER, prevHandle);
    return this;
  }

  // Return the value for `pname` of the specified attachment.
  // The type returned is the type of the requested pname
  getAttachmentParameter(attachment, pname, keys) {
    let value = this._getAttachmentParameterFallback(pname);
    if (value === null) {
      this.gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, this.handle);
      value = this.gl.getFramebufferAttachmentParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, attachment, pname);
      this.gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, null);
    }
    if (keys && value > 1000) {
      value = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["getKey"])(this.gl, value);
    }
    return value;
  }

  getAttachmentParameters(
    attachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0,
    keys,
    parameters = this.constructor.ATTACHMENT_PARAMETERS || []
  ) {
    const values = {};
    for (const pname of parameters) {
      const key = keys ? Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["getKey"])(this.gl, pname) : pname;
      values[key] = this.getAttachmentParameter(attachment, pname, keys);
    }
    return values;
  }

  getParameters(keys = true) {
    const attachments = Object.keys(this.attachments);
    // if (this === this.gl.luma.defaultFramebuffer) {
    //   attachments = [GL.COLOR_ATTACHMENT0, GL.DEPTH_STENCIL_ATTACHMENT];
    // }
    const parameters = {};
    for (const attachmentName of attachments) {
      const attachment = Number(attachmentName);
      const key = keys ? Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["getKey"])(this.gl, attachment) : attachment;
      parameters[key] = this.getAttachmentParameters(attachment, keys);
    }
    return parameters;
  }

  // DEBUG

  // Note: Will only work when called in an event handler
  show() {
    /* global window */
    if (typeof window !== 'undefined') {
      window.open(Object(_copy_and_blit_js__WEBPACK_IMPORTED_MODULE_5__["copyToDataUrl"])(this), 'luma-debug-texture');
    }
    return this;
  }

  log(priority = 0, message = '') {
    if (priority > _utils__WEBPACK_IMPORTED_MODULE_8__["log"].priority || typeof window === 'undefined') {
      return this;
    }
    message = message || `Framebuffer ${this.id}`;
    const image = Object(_copy_and_blit_js__WEBPACK_IMPORTED_MODULE_5__["copyToDataUrl"])(this, {maxHeight: 100});
    _utils__WEBPACK_IMPORTED_MODULE_8__["log"].image({priority, message, image}, message)();
    return this;
  }

  // WEBGL INTERFACE
  bind({target = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER} = {}) {
    this.gl.bindFramebuffer(target, this.handle);
    return this;
  }

  unbind({target = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER} = {}) {
    this.gl.bindFramebuffer(target, null);
    return this;
  }

  // PRIVATE METHODS

  _createDefaultAttachments(color, depth, stencil, width, height) {
    let defaultAttachments = null;

    // Add a color buffer if requested and not supplied
    if (color) {
      defaultAttachments = defaultAttachments || {};
      defaultAttachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0] = new _texture_2d__WEBPACK_IMPORTED_MODULE_2__["default"](this.gl, {
        id: `${this.id}-color0`,
        pixels: null, // reserves texture memory, but texels are undefined
        format: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE,
        width,
        height,
        // Note: Mipmapping can be disabled by texture resource when we resize the texture
        // to a non-power-of-two dimenstion (NPOT texture) under WebGL1. To have consistant
        // behavior we always disable mipmaps.
        mipmaps: false,
        // Set MIN and MAG filtering parameters so mipmaps are not used in sampling.
        // Set WRAP modes that support NPOT textures too.
        parameters: {
          [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MIN_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.NEAREST,
          [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAG_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.NEAREST,
          [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_S]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE,
          [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_T]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE
        }
      });
    }

    if (depth && stencil) {
      // TODO - handle separate stencil
      defaultAttachments = defaultAttachments || {};
      defaultAttachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_STENCIL_ATTACHMENT] = new _renderbuffer__WEBPACK_IMPORTED_MODULE_3__["default"](this.gl, {
        id: `${this.id}-depth-stencil`,
        format: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH24_STENCIL8,
        width,
        height: 111
      });
      // TODO - optional texture
      // new Texture2D(this.gl, {
      //   id: `${this.id}-depth-stencil`,
      //   format: GL.DEPTH24_STENCIL8,
      //   dataFormat: GL.DEPTH_STENCIL,
      //   type: GL.UNSIGNED_INT_24_8,
      //   width,
      //   height,
      //   mipmaps: false
      // });
    } else if (depth) {
      // Add a depth buffer if requested and not supplied
      defaultAttachments = defaultAttachments || {};
      defaultAttachments[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_ATTACHMENT] = new _renderbuffer__WEBPACK_IMPORTED_MODULE_3__["default"](this.gl, {
        id: `${this.id}-depth`,
        format: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_COMPONENT16,
        width,
        height
      });
    } else if (stencil) {
      // TODO - handle separate stencil
      Object(_utils__WEBPACK_IMPORTED_MODULE_8__["assert"])(false);
    }

    return defaultAttachments;
  }

  _unattach(attachment) {
    const oldAttachment = this.attachments[attachment];
    if (!oldAttachment) {
      return;
    }
    if (oldAttachment instanceof _renderbuffer__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      // render buffer
      this.gl.framebufferRenderbuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, attachment, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, null);
    } else {
      // Must be a texture attachment
      this.gl.framebufferTexture2D(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, attachment, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_2D, null, 0);
    }
    delete this.attachments[attachment];
  }

  _attachRenderbuffer({attachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0, renderbuffer}) {
    const {gl} = this;
    // TODO - is the bind needed?
    // gl.bindRenderbuffer(GL.RENDERBUFFER, renderbuffer.handle);
    gl.framebufferRenderbuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, attachment, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, renderbuffer.handle);
    // TODO - is the unbind needed?
    // gl.bindRenderbuffer(GL.RENDERBUFFER, null);

    this.attachments[attachment] = renderbuffer;
  }

  // layer = 0 - index into Texture2DArray and Texture3D or face for `TextureCubeMap`
  // level = 0 - mipmapLevel (must be 0 in WebGL1)
  _attachTexture({attachment = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0, texture, layer, level}) {
    const {gl} = this;
    gl.bindTexture(texture.target, texture.handle);

    switch (texture.target) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_2D_ARRAY:
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_3D:
        gl.framebufferTextureLayer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, attachment, texture.target, level, layer);
        break;

      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP:
        // layer must be a cubemap face (or if index, converted to cube map face)
        const face = mapIndexToCubeMapFace(layer);
        gl.framebufferTexture2D(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, attachment, face, texture.handle, level);
        break;

      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_2D:
        gl.framebufferTexture2D(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, attachment, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_2D, texture.handle, level);
        break;

      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_8__["assert"])(false, 'Illegal texture type');
    }

    gl.bindTexture(texture.target, null);
    this.attachments[attachment] = texture;
  }

  // Expects framebuffer to be bound
  _setReadBuffer(gl, readBuffer) {
    if (Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["isWebGL2"])(gl)) {
      gl.readBuffer(readBuffer);
    } else {
      // Setting to color attachment 0 is a noop, so allow it in WebGL1
      Object(_utils__WEBPACK_IMPORTED_MODULE_8__["assert"])(
        readBuffer === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0 || readBuffer === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK,
        ERR_MULTIPLE_RENDERTARGETS
      );
    }
    this.readBuffer = readBuffer;
  }

  // Expects framebuffer to be bound
  _setDrawBuffers(gl, drawBuffers) {
    if (Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_7__["isWebGL2"])(gl)) {
      gl.drawBuffers(drawBuffers);
    } else {
      const ext = gl.getExtension('WEBGL.draw_buffers');
      if (ext) {
        ext.drawBuffersWEBGL(drawBuffers);
      } else {
        // Setting a single draw buffer to color attachment 0 is a noop, allow in WebGL1
        Object(_utils__WEBPACK_IMPORTED_MODULE_8__["assert"])(
          drawBuffers.length === 1 &&
            (drawBuffers[0] === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0 || drawBuffers[0] === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BACK),
          ERR_MULTIPLE_RENDERTARGETS
        );
      }
    }
    this.drawBuffers = drawBuffers;
  }

  // Attempt to provide workable defaults for WebGL2 symbols under WebGL1
  // null means OK to query
  // TODO - move to webgl1 polyfills
  /* eslint-disable complexity */
  _getAttachmentParameterFallback(pname) {
    const caps = Object(_features__WEBPACK_IMPORTED_MODULE_6__["getFeatures"])(this.gl);

    switch (pname) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: // GLint
        return !caps.webgl2 ? 0 : null;
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_RED_SIZE: // GLint
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: // GLint
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: // GLint
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: // GLint
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: // GLint
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: // GLint
        return !caps.webgl2 ? 8 : null;
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: // GLenum
        return !caps.webgl2 ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT : null;
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:
        return !caps.webgl2 && !caps.EXT_sRGB ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR : null;
      default:
        return null;
    }
  }
  /* eslint-enable complexity */

  // RESOURCE METHODS

  _createHandle() {
    return this.gl.createFramebuffer();
  }

  _deleteHandle() {
    this.gl.deleteFramebuffer(this.handle);
  }

  _bindHandle(handle) {
    return this.gl.bindFramebuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER, handle);
  }
}

// PUBLIC METHODS

// Map an index to a cube map face constant
function mapIndexToCubeMapFace(layer) {
  // TEXTURE_CUBE_MAP_POSITIVE_X is a big value (0x8515)
  // if smaller assume layer is index, otherwise assume it is already a cube map face constant
  return layer < _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_POSITIVE_X ? layer + _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_POSITIVE_X : layer;
}

// Helper METHODS
// Get a string describing the framebuffer error if installed
function _getFrameBufferStatus(status) {
  // Use error mapping if installed
  const STATUS = Framebuffer.STATUS || {};
  return STATUS[status] || `Framebuffer error ${status}`;
}

const FRAMEBUFFER_ATTACHMENT_PARAMETERS = [
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME, // WebGLRenderbuffer or WebGLTexture
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE, // GL.RENDERBUFFER, GL.TEXTURE, GL.NONE
  // GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE, // GL.TEXTURE_CUBE_MAP_POSITIVE_X, etc.
  // GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL, // GLint
  // EXT_sRGB or WebGL2
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING, // GL.LINEAR, GL.SRBG
  // WebGL2
  // GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER, // GLint
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_RED_SIZE, // GLint
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE, // GLint
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE, // GLint
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE, // GLint
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE, // GLint
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE // GLint
  // GL.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE
  // GL.FLOAT, GL.INT, GL.UNSIGNED_INT, GL.SIGNED_NORMALIZED, OR GL.UNSIGNED_NORMALIZED.
];

Framebuffer.ATTACHMENT_PARAMETERS = FRAMEBUFFER_ATTACHMENT_PARAMETERS;


/***/ }),

/***/ "./src/classes/program-configuration.js":
/*!**********************************************!*\
  !*** ./src/classes/program-configuration.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgramConfiguration; });
/* harmony import */ var _accessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessor */ "./src/classes/accessor.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-utils/attribute-utils */ "./src/webgl-utils/attribute-utils.js");
// Contains metadata describing attribute configurations for a program's shaders
// Much of this is automatically extracted from shaders after program linking




class ProgramConfiguration {
  constructor(program) {
    this.id = program.id;
    this.attributeInfos = [];
    this.attributeInfosByName = {};

    // Locations may not be contiguous the case of matrix attributes
    // so keep a separate location->attribute map.
    this.attributeInfosByLocation = [];
    this.varyingInfos = [];
    this.varyingInfosByName = {};
    Object.seal(this);
    this._readAttributesFromProgram(program);
    this._readVaryingsFromProgram(program);
  }

  getAttributeInfo(locationOrName) {
    const location = Number(locationOrName);
    if (Number.isFinite(location)) {
      return this.attributeInfosByLocation[location];
    }
    return this.attributeInfosByName[locationOrName] || null;
  }

  // Resolves an attribute name or index to an index
  getAttributeLocation(locationOrName) {
    const attributeInfo = this.getAttributeInfo(locationOrName);
    return attributeInfo ? attributeInfo.location : -1;
  }

  getAttributeAccessor(locationOrName) {
    const attributeInfo = this.getAttributeInfo(locationOrName);
    return attributeInfo ? attributeInfo.accessor : null;
  }

  getVaryingInfo(locationOrName) {
    const location = Number(locationOrName);
    if (Number.isFinite(location)) {
      return this.varyingInfos[location];
    }
    return this.varyingInfosByName[locationOrName] || null;
  }

  getVaryingIndex(locationOrName) {
    const varying = this.getVaryingInfo();
    return varying ? varying.location : -1;
  }

  getVaryingAccessor(locationOrName) {
    const varying = this.getVaryingInfo();
    return varying ? varying.accessor : null;
  }

  // PRIVATE METHODS

  // linkProgram needs to have been called, although linking does not need to have been successful
  _readAttributesFromProgram(program) {
    const {gl} = program;
    const count = gl.getProgramParameter(program.handle, gl.ACTIVE_ATTRIBUTES);

    for (let index = 0; index < count; index++) {
      const {name, type, size} = gl.getActiveAttrib(program.handle, index);
      const location = gl.getAttribLocation(program.handle, name);
      // Add only user provided attributes, for built-in attributes like
      // `gl_InstanceID` locaiton will be < 0
      if (location >= 0) {
        this._addAttribute(location, name, type, size);
      }
    }

    this.attributeInfos.sort((a, b) => a.location - b.location);
  }

  // linkProgram needs to have been called, although linking does not need to have been successful
  _readVaryingsFromProgram(program) {
    const {gl} = program;
    if (!Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(gl)) {
      return;
    }

    const count = gl.getProgramParameter(program.handle, gl.TRANSFORM_FEEDBACK_VARYINGS);
    for (let location = 0; location < count; location++) {
      const {name, type, size} = gl.getTransformFeedbackVarying(program.handle, location);
      this._addVarying(location, name, type, size);
    }

    this.varyingInfos.sort((a, b) => a.location - b.location);
  }

  _addAttribute(location, name, compositeType, size) {
    const {type, components} = Object(_webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_2__["decomposeCompositeGLType"])(compositeType);
    const accessor = {type, size: size * components};
    this._inferProperties(location, name, accessor);

    const attributeInfo = {location, name, accessor: new _accessor__WEBPACK_IMPORTED_MODULE_0__["default"](accessor)}; // Base values
    this.attributeInfos.push(attributeInfo);
    this.attributeInfosByLocation[location] = attributeInfo; // For quick location based lookup
    this.attributeInfosByName[attributeInfo.name] = attributeInfo; // For quick name based lookup
  }

  // Extract additional attribute metadata from shader names (based on attribute naming conventions)
  _inferProperties(location, name, accessor) {
    if (/instance/i.test(name)) {
      // Any attribute containing the word "instance" will be assumed to be instanced
      accessor.divisor = 1;
    }
  }

  _addVarying(location, name, compositeType, size) {
    const {type, components} = Object(_webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_2__["decomposeCompositeGLType"])(compositeType);
    const accessor = new _accessor__WEBPACK_IMPORTED_MODULE_0__["default"]({type, size: size * components});

    const varying = {location, name, accessor}; // Base values
    this.varyingInfos.push(varying);
    this.varyingInfosByName[varying.name] = varying; // For quick name based lookup
  }
}


/***/ }),

/***/ "./src/classes/program.js":
/*!********************************!*\
  !*** ./src/classes/program.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Program; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texture */ "./src/classes/texture.js");
/* harmony import */ var _framebuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framebuffer */ "./src/classes/framebuffer.js");
/* harmony import */ var _uniforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uniforms */ "./src/classes/uniforms.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shader */ "./src/classes/shader.js");
/* harmony import */ var _program_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program-configuration */ "./src/classes/program-configuration.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ "./src/context/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../webgl-utils/attribute-utils */ "./src/webgl-utils/attribute-utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");















const LOG_PROGRAM_PERF_PRIORITY = 4;

const GL_SEPARATE_ATTRIBS = 0x8c8d;

const V6_DEPRECATED_METHODS = [
  'setVertexArray',
  'setAttributes',
  'setBuffers',
  'unsetBuffers',

  'use',
  'getUniformCount',
  'getUniformInfo',
  'getUniformLocation',
  'getUniformValue',

  'getVarying',
  'getFragDataLocation',
  'getAttachedShaders',
  'getAttributeCount',
  'getAttributeLocation',
  'getAttributeInfo'
];

class Program extends _resource__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(gl, props = {}) {
    super(gl, props);

    this.stubRemovedMethods('Program', 'v6.0', V6_DEPRECATED_METHODS);

    // Experimental flag to avoid deleting Program object while it is cached
    this._isCached = false;

    this.initialize(props);

    Object.seal(this);

    this._setId(props.id);
  }

  initialize(props = {}) {
    const {vs, fs, varyings, bufferMode = GL_SEPARATE_ATTRIBS} = props;
    // Create shaders if needed
    this.vs =
      typeof vs === 'string' ? new _shader__WEBPACK_IMPORTED_MODULE_5__["VertexShader"](this.gl, {id: `${props.id}-vs`, source: vs}) : vs;
    this.fs =
      typeof fs === 'string' ? new _shader__WEBPACK_IMPORTED_MODULE_5__["FragmentShader"](this.gl, {id: `${props.id}-fs`, source: fs}) : fs;
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["assert"])(this.vs instanceof _shader__WEBPACK_IMPORTED_MODULE_5__["VertexShader"]);
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["assert"])(this.fs instanceof _shader__WEBPACK_IMPORTED_MODULE_5__["FragmentShader"]);

    // uniforms
    this.uniforms = {};

    // Setup varyings if supplied
    if (varyings) {
      Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_8__["assertWebGL2Context"])(this.gl);
      this.varyings = varyings;
      this.gl.transformFeedbackVaryings(this.handle, varyings, bufferMode);
    }

    this._compileAndLink();
    this._readUniformLocationsFromLinkedProgram();
    this.configuration = new _program_configuration__WEBPACK_IMPORTED_MODULE_6__["default"](this);

    return this.setProps(props);
  }

  delete(options = {}) {
    if (this._isCached) {
      // This object is cached, do not delete
      return this;
    }
    return super.delete(options);
  }

  setProps(props) {
    if ('uniforms' in props) {
      this.setUniforms(props.uniforms);
    }
    return this;
  }

  // A good thing about the WebGL API is that there are so many ways to draw things ;)
  // This function unifies those ways into a single call using common parameters with sane defaults
  draw({
    logPriority, // Probe log priority, enables Model to do more integrated logging

    drawMode = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRIANGLES,
    vertexCount,
    offset = 0,
    start,
    end,
    isIndexed = false,
    indexType = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT,
    isInstanced = false,
    instanceCount = 0,

    vertexArray = null,
    transformFeedback,
    framebuffer,
    parameters = {},

    // Deprecated
    uniforms,
    samplers
  }) {
    if (uniforms || samplers) {
      // DEPRECATED: v7.0 (deprecated earlier but warning not properly implemented)
      _utils__WEBPACK_IMPORTED_MODULE_10__["log"].deprecated('Program.draw({uniforms})', 'Program.setUniforms(uniforms)')();
      this.setUniforms(uniforms || {});
    }

    if (logPriority !== undefined) {
      const fb = framebuffer ? framebuffer.id : 'default';
      const message =
        `mode=${Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_8__["getKey"])(this.gl, drawMode)} verts=${vertexCount} ` +
        `instances=${instanceCount} indexType=${Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_8__["getKey"])(this.gl, indexType)} ` +
        `isInstanced=${isInstanced} isIndexed=${isIndexed} ` +
        `Framebuffer=${fb}`;
      _utils__WEBPACK_IMPORTED_MODULE_10__["log"].log(logPriority, message)();
    }

    // TODO - move vertex array binding and transform feedback binding to withParameters?
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["assert"])(vertexArray);

    this.gl.useProgram(this.handle);

    // Note: async textures set as uniforms might still be loading.
    // Now that all uniforms have been updated, check if any texture
    // in the uniforms is not yet initialized, then we don't draw
    if (!this._areTexturesRenderable()) {
      return false;
    }

    vertexArray.bindForDraw(vertexCount, instanceCount, () => {
      if (framebuffer !== undefined) {
        parameters = Object.assign({}, parameters, {framebuffer});
      }

      if (transformFeedback) {
        const primitiveMode = Object(_webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_9__["getPrimitiveDrawMode"])(drawMode);
        transformFeedback.begin(primitiveMode);
      }

      this._bindTextures();

      Object(_context__WEBPACK_IMPORTED_MODULE_7__["withParameters"])(this.gl, parameters, () => {
        // TODO - Use polyfilled WebGL2RenderingContext instead of ANGLE extension
        if (isIndexed && isInstanced) {
          this.gl.drawElementsInstanced(drawMode, vertexCount, indexType, offset, instanceCount);
        } else if (isIndexed && Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_8__["isWebGL2"])(this.gl) && !isNaN(start) && !isNaN(end)) {
          this.gl.drawRangeElements(drawMode, start, end, vertexCount, indexType, offset);
        } else if (isIndexed) {
          this.gl.drawElements(drawMode, vertexCount, indexType, offset);
        } else if (isInstanced) {
          this.gl.drawArraysInstanced(drawMode, offset, vertexCount, instanceCount);
        } else {
          this.gl.drawArrays(drawMode, offset, vertexCount);
        }
      });

      if (transformFeedback) {
        transformFeedback.end();
      }
    });

    return true;
  }

  setUniforms(uniforms = {}, _onChangeCallback = () => {}) {
    // Simple change detection - if all uniforms are unchanged, do nothing
    let somethingChanged = false;
    const changedUniforms = {};
    for (const key in uniforms) {
      if (!Object(_uniforms__WEBPACK_IMPORTED_MODULE_4__["areUniformsEqual"])(this.uniforms[key], uniforms[key])) {
        somethingChanged = true;
        changedUniforms[key] = uniforms[key];
        this.uniforms[key] = Object(_uniforms__WEBPACK_IMPORTED_MODULE_4__["getUniformCopy"])(uniforms[key]);
      }
    }

    if (somethingChanged) {
      _onChangeCallback();
      Object(_uniforms__WEBPACK_IMPORTED_MODULE_4__["checkUniformValues"])(changedUniforms, this.id, this._uniformSetters);
      this._setUniforms(changedUniforms);
    }

    return this;
  }

  // PRIVATE METHODS

  // stub for shader chache, should reset uniforms to default valiues
  reset() {}

  // Checks if all texture-values uniforms are renderable (i.e. loaded)
  // Note: This is currently done before every draw call
  _areTexturesRenderable() {
    let texturesRenderable = true;

    for (const uniformName in this.uniforms) {
      const uniformSetter = this._uniformSetters[uniformName];

      if (uniformSetter && uniformSetter.textureIndex !== undefined) {
        let uniform = this.uniforms[uniformName];

        if (uniform instanceof _framebuffer__WEBPACK_IMPORTED_MODULE_3__["default"]) {
          const framebuffer = uniform;
          uniform = framebuffer.texture;
        }

        if (uniform instanceof _texture__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          const texture = uniform;
          // Check that texture is loaded
          texturesRenderable = texturesRenderable && texture.loaded;
        }
      }
    }

    return texturesRenderable;
  }

  // Binds textures
  // Note: This is currently done before every draw call
  _bindTextures() {
    for (const uniformName in this.uniforms) {
      const uniformSetter = this._uniformSetters[uniformName];

      if (uniformSetter && uniformSetter.textureIndex !== undefined) {
        let uniform = this.uniforms[uniformName];

        if (uniform instanceof _framebuffer__WEBPACK_IMPORTED_MODULE_3__["default"]) {
          uniform = uniform.texture;
        }
        if (uniform instanceof _texture__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          const texture = uniform;
          // Bind texture to index
          texture.bind(uniformSetter.textureIndex);
        }
      }
    }
  }

  // Apply a set of uniform values to a program
  // Only uniforms actually present in the linked program will be updated.
  _setUniforms(uniforms) {
    this.gl.useProgram(this.handle);

    for (const uniformName in uniforms) {
      let uniform = uniforms[uniformName];
      const uniformSetter = this._uniformSetters[uniformName];

      if (uniformSetter) {
        if (uniform instanceof _framebuffer__WEBPACK_IMPORTED_MODULE_3__["default"]) {
          uniform = uniform.texture;
        }
        if (uniform instanceof _texture__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          // eslint-disable-next-line max-depth
          if (uniformSetter.textureIndex === undefined) {
            uniformSetter.textureIndex = this._textureIndexCounter++;
          }

          // Bind texture to index
          const texture = uniform;
          const {textureIndex} = uniformSetter;

          texture.bind(textureIndex);

          // Set the uniform sampler to the texture index
          uniformSetter(textureIndex);
        } else {
          // Just set the value
          uniformSetter(uniform);
        }
      }
    }

    return this;
  }

  // RESOURCE METHODS

  _createHandle() {
    return this.gl.createProgram();
  }

  _deleteHandle() {
    this.gl.deleteProgram(this.handle);
  }

  // Extract opts needed to initialize a `Program` from an independently created WebGLProgram handle
  _getOptionsFromHandle(handle) {
    const shaderHandles = this.gl.getAttachedShaders(handle);
    const opts = {};
    for (const shaderHandle of shaderHandles) {
      const type = this.gl.getShaderParameter(this.handle, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SHADER_TYPE);
      switch (type) {
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERTEX_SHADER:
          opts.vs = new _shader__WEBPACK_IMPORTED_MODULE_5__["VertexShader"]({handle: shaderHandle});
          break;
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAGMENT_SHADER:
          opts.fs = new _shader__WEBPACK_IMPORTED_MODULE_5__["FragmentShader"]({handle: shaderHandle});
          break;
        default:
      }
    }
    return opts;
  }

  _getParameter(pname) {
    return this.gl.getProgramParameter(this.handle, pname);
  }

  // If program is not named, name it after shader names
  // TODO - this.id will already have been initialized
  _setId(id) {
    if (!id) {
      const programName = this._getName();
      this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["uid"])(programName);
    }
  }

  // Generate a default name for the program based on names of the shaders
  _getName() {
    let programName = this.vs.getName() || this.fs.getName();
    programName = programName.replace(/shader/i, '');
    programName = programName ? `${programName}-program` : 'program';
    return programName;
  }

  _compileAndLink() {
    const {gl} = this;
    gl.attachShader(this.handle, this.vs.handle);
    gl.attachShader(this.handle, this.fs.handle);
    _utils__WEBPACK_IMPORTED_MODULE_10__["log"].time(LOG_PROGRAM_PERF_PRIORITY, `linkProgram for ${this._getName()}`)();
    gl.linkProgram(this.handle);
    _utils__WEBPACK_IMPORTED_MODULE_10__["log"].timeEnd(LOG_PROGRAM_PERF_PRIORITY, `linkProgram for ${this._getName()}`)();

    // Avoid checking program linking error in production
    if (gl.debug || _utils__WEBPACK_IMPORTED_MODULE_10__["log"].priority > 0) {
      gl.validateProgram(this.handle);
      const linked = gl.getProgramParameter(this.handle, gl.LINK_STATUS);
      if (!linked) {
        throw new Error(`Error linking: ${gl.getProgramInfoLog(this.handle)}`);
      }
    }
  }

  // query uniform locations and build name to setter map.
  // TODO - This overlaps with ProgramConfiguration?
  _readUniformLocationsFromLinkedProgram() {
    const {gl} = this;
    this._uniformSetters = {};
    this._uniformCount = this._getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ACTIVE_UNIFORMS);
    for (let i = 0; i < this._uniformCount; i++) {
      const info = this.gl.getActiveUniform(this.handle, i);
      const {name, isArray} = Object(_uniforms__WEBPACK_IMPORTED_MODULE_4__["parseUniformName"])(info.name);
      const location = gl.getUniformLocation(this.handle, name);
      this._uniformSetters[name] = Object(_uniforms__WEBPACK_IMPORTED_MODULE_4__["getUniformSetter"])(gl, location, info, isArray);
    }
    this._textureIndexCounter = 0;
  }

  // TO BE REMOVED in v7?

  // Rretrieves information about active uniforms identifed by their indices (`uniformIndices`)
  // https://
  // developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniforms
  getActiveUniforms(uniformIndices, pname) {
    return this.gl.getActiveUniforms(this.handle, uniformIndices, pname);
  }

  // Retrieves the index of a uniform block
  getUniformBlockIndex(blockName) {
    return this.gl.getUniformBlockIndex(this.handle, blockName);
  }

  // Retrieves information about an active uniform block (`blockIndex`)
  // https://
  // developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter
  getActiveUniformBlockParameter(blockIndex, pname) {
    return this.gl.getActiveUniformBlockParameter(this.handle, blockIndex, pname);
  }

  // Binds a uniform block (`blockIndex`) to a specific binding point (`blockBinding`)
  uniformBlockBinding(blockIndex, blockBinding) {
    this.gl.uniformBlockBinding(this.handle, blockIndex, blockBinding);
  }
}


/***/ }),

/***/ "./src/classes/query.js":
/*!******************************!*\
  !*** ./src/classes/query.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Query; });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features */ "./src/features/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
// WebGL2 Query (also handles disjoint timer extensions)
/* global requestAnimationFrame */





const GL_QUERY_RESULT = 0x8866; // Returns a GLuint containing the query result.
const GL_QUERY_RESULT_AVAILABLE = 0x8867; // whether query result is available.

const GL_TIME_ELAPSED_EXT = 0x88bf; // Elapsed time (in nanoseconds).
const GL_GPU_DISJOINT_EXT = 0x8fbb; // Whether GPU performed any disjoint operation.

const GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88; // #primitives written to feedback buffers
const GL_ANY_SAMPLES_PASSED = 0x8c2f; // Occlusion query (if drawing passed depth test)
const GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a; // Occlusion query less accurate/faster version

class Query extends _resource__WEBPACK_IMPORTED_MODULE_0__["default"] {
  // Returns true if Query is supported by the WebGL implementation
  // Can also check whether timestamp queries are available.
  static isSupported(gl, opts = []) {
    const webgl2 = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_2__["isWebGL2"])(gl);

    // Initial value
    const hasTimerQuery = Object(_features__WEBPACK_IMPORTED_MODULE_1__["hasFeatures"])(gl, _features__WEBPACK_IMPORTED_MODULE_1__["FEATURES"].TIMER_QUERY);
    let supported = webgl2 || hasTimerQuery;

    for (const key of opts) {
      switch (key) {
        case 'queries':
          supported = supported && webgl2;
          break;
        case 'timers':
          supported = supported && hasTimerQuery;
          break;
        default:
          Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(false);
      }
    }

    return supported;
  }

  // Create a query class
  constructor(gl, opts = {}) {
    super(gl, opts);

    this.target = null;
    this._queryPending = false;
    this._pollingPromise = null;

    Object.seal(this);
  }

  // Shortcut for timer query (dependent on extension in both WebGL1 and 2)
  // Measures GPU time delta between this call and a matching `end` call in the
  // GPU instruction stream.
  beginTimeElapsedQuery() {
    return this.begin(GL_TIME_ELAPSED_EXT);
  }

  // Shortcut for occlusion queries
  beginOcclusionQuery({conservative = false} = {}) {
    return this.begin(conservative ? GL_ANY_SAMPLES_PASSED_CONSERVATIVE : GL_ANY_SAMPLES_PASSED);
  }

  // Shortcut for transformFeedbackQuery
  beginTransformFeedbackQuery() {
    return this.begin(GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN);
  }

  // Due to OpenGL API limitations, after calling `begin()` on one Query
  // instance, `end()` must be called on that same instance before
  // calling `begin()` on another query. While there can be multiple
  // outstanding queries representing disjoint `begin()`/`end()` intervals.
  // It is not possible to interleave or overlap `begin` and `end` calls.
  begin(target) {
    // Don't start a new query if one is already active.
    if (this._queryPending) {
      return this;
    }

    this.target = target;
    this.gl.beginQuery(this.target, this.handle);

    return this;
  }

  // ends the current query
  end() {
    // Can't end a new query if the last one hasn't been resolved.
    if (this._queryPending) {
      return this;
    }

    if (this.target) {
      this.gl.endQuery(this.target);
      this.target = null;
      this._queryPending = true;
    }
    return this;
  }

  // Returns true if the query result is available
  isResultAvailable() {
    if (!this._queryPending) {
      return false;
    }

    const resultAvailable = this.gl.getQueryParameter(this.handle, GL_QUERY_RESULT_AVAILABLE);
    if (resultAvailable) {
      this._queryPending = false;
    }
    return resultAvailable;
  }

  // Timing query is disjoint, i.e. results are invalid
  isTimerDisjoint() {
    return this.gl.getParameter(GL_GPU_DISJOINT_EXT);
  }

  // Returns query result.
  getResult() {
    return this.gl.getQueryParameter(this.handle, GL_QUERY_RESULT);
  }

  // Returns the query result, converted to milliseconds to match JavaScript conventions.
  getTimerMilliseconds() {
    return this.getResult() / 1e6;
  }

  // Polls the query
  createPoll(limit = Number.POSITIVE_INFINITY) {
    if (this._pollingPromise) {
      return this._pollingPromise;
    }

    let counter = 0;

    this._pollingPromise = new Promise((resolve, reject) => {
      const poll = () => {
        if (this.isResultAvailable()) {
          resolve(this.getResult());
          this._pollingPromise = null;
        } else if (counter++ > limit) {
          reject('Timed out');
          this._pollingPromise = null;
        } else {
          requestAnimationFrame(poll);
        }
      };

      requestAnimationFrame(poll);
    });

    return this._pollingPromise;
  }

  _createHandle() {
    return Query.isSupported(this.gl) ? this.gl.createQuery() : null;
  }

  _deleteHandle() {
    this.gl.deleteQuery(this.handle);
  }
}


/***/ }),

/***/ "./src/classes/renderbuffer-formats.js":
/*!*********************************************!*\
  !*** ./src/classes/renderbuffer-formats.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);


// Define local extension strings to optimize minification
// const SRGB = 'EXT_sRGB';
// const EXT_FLOAT_WEBGL1 = 'WEBGL.color_buffer_float';
const EXT_FLOAT_WEBGL2 = 'EXT_color_buffer_float';
// const EXT_HALF_FLOAT_WEBGL1 = 'EXT_color_buffer_half_float';

// NOTE(Tarek): bpp === "bytes per pixel", used for
// memory usage calculations.
/* harmony default export */ __webpack_exports__["default"] = ({
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_COMPONENT16]: {bpp: 2}, // 16 depth bits.
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_COMPONENT24]: {gl2: true, bpp: 3},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_COMPONENT32F]: {gl2: true, bpp: 4},

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.STENCIL_INDEX8]: {bpp: 1}, // 8 stencil bits.

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_STENCIL]: {bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH24_STENCIL8]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH32F_STENCIL8]: {gl2: true, bpp: 5},

  // When using a WebGL 1 context, color renderbuffer formats are limited
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA4]: {bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB565]: {bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB5_A1]: {bpp: 2},

  // When using a WebGL 2 context, the following values are available additionally:
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R8]: {gl2: true, bpp: 1},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R8UI]: {gl2: true, bpp: 1},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R8I]: {gl2: true, bpp: 1},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R16UI]: {gl2: true, bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R16I]: {gl2: true, bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R32UI]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R32I]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG8]: {gl2: true, bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG8UI]: {gl2: true, bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG8I]: {gl2: true, bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG16UI]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG16I]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG32UI]: {gl2: true, bpp: 8},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG32I]: {gl2: true, bpp: 8},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB8]: {gl2: true, bpp: 3},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA8]: {gl2: true, bpp: 4},
  // [GL.SRGB8_ALPHA8]: {gl2: true, gl1: SRGB}, // When using the EXT_sRGB WebGL1 extension
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB10_A2]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA8UI]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA8I]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB10_A2UI]: {gl2: true, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA16UI]: {gl2: true, bpp: 8},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA16I]: {gl2: true, bpp: 8},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA32I]: {gl2: true, bpp: 16},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA32UI]: {gl2: true, bpp: 16},

  // When using a WebGL 2 context and the EXT_color_buffer_float WebGL2 extension
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R16F]: {gl2: EXT_FLOAT_WEBGL2, bpp: 2},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG16F]: {gl2: EXT_FLOAT_WEBGL2, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA16F]: {gl2: EXT_FLOAT_WEBGL2, bpp: 8},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R32F]: {gl2: EXT_FLOAT_WEBGL2, bpp: 4},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG32F]: {gl2: EXT_FLOAT_WEBGL2, bpp: 8},
  // TODO - can't get WEBGL.color_buffer_float to work on renderbuffers
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA32F]: {gl2: EXT_FLOAT_WEBGL2, bpp: 16},
  // [GL.RGBA32F]: {gl2: EXT_FLOAT_WEBGL2, gl1: EXT_FLOAT_WEBGL1},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R11F_G11F_B10F]: {gl2: EXT_FLOAT_WEBGL2, bpp: 4}
});


/***/ }),

/***/ "./src/classes/renderbuffer.js":
/*!*************************************!*\
  !*** ./src/classes/renderbuffer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderbuffer; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _renderbuffer_formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderbuffer-formats */ "./src/classes/renderbuffer-formats.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* eslint-disable no-inline-comments */






function isFormatSupported(gl, format, formats) {
  const info = formats[format];
  if (!info) {
    return false;
  }
  const value = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(gl) ? info.gl2 || info.gl1 : info.gl1;
  if (typeof value === 'string') {
    return gl.getExtension(value);
  }
  return value;
}

class Renderbuffer extends _resource__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static isSupported(gl, {format} = {}) {
    return !format || isFormatSupported(gl, format, _renderbuffer_formats__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  static getSamplesForFormat(gl, {format}) {
    // Polyfilled to return [0] under WebGL1
    return gl.getInternalformatParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, format, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLES);
  }

  constructor(gl, opts = {}) {
    super(gl, opts);

    this.initialize(opts);

    Object.seal(this);
  }

  // Creates and initializes a renderbuffer object's data store
  initialize({format, width = 1, height = 1, samples = 0}) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(format, 'Needs format');

    this._trackDeallocatedMemory();

    this.gl.bindRenderbuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, this.handle);

    if (samples !== 0 && Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(this.gl)) {
      this.gl.renderbufferStorageMultisample(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, samples, format, width, height);
    } else {
      this.gl.renderbufferStorage(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, format, width, height);
    }

    // this.gl.bindRenderbuffer(GL.RENDERBUFFER, null);

    this.format = format;
    this.width = width;
    this.height = height;
    this.samples = samples;

    this._trackAllocatedMemory(
      this.width * this.height * (this.samples || 1) * _renderbuffer_formats__WEBPACK_IMPORTED_MODULE_2__["default"][this.format].bpp
    );

    return this;
  }

  resize({width, height}) {
    // Don't resize if width/height haven't changed
    if (width !== this.width || height !== this.height) {
      return this.initialize({width, height, format: this.format, samples: this.samples});
    }
    return this;
  }

  // PRIVATE METHODS
  _createHandle() {
    return this.gl.createRenderbuffer();
  }

  _deleteHandle() {
    this.gl.deleteRenderbuffer(this.handle);
    this._trackDeallocatedMemory();
  }

  _bindHandle(handle) {
    this.gl.bindRenderbuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, handle);
  }

  _syncHandle(handle) {
    this.format = this.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER_INTERNAL_FORMAT);
    this.width = this.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER_WIDTH);
    this.height = this.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER_HEIGHT);
    this.samples = this.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER_SAMPLES);
  }

  // @param {Boolean} opt.autobind=true - method call will bind/unbind object
  // @returns {GLenum|GLint} - depends on pname
  _getParameter(pname) {
    this.gl.bindRenderbuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, this.handle);
    const value = this.gl.getRenderbufferParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERBUFFER, pname);
    // this.gl.bindRenderbuffer(GL.RENDERBUFFER, null);
    return value;
  }
}


/***/ }),

/***/ "./src/classes/resource.js":
/*!*********************************!*\
  !*** ./src/classes/resource.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resource; });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init */ "./src/init.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




const ERR_RESOURCE_METHOD_UNDEFINED = 'Resource subclass must define virtual methods';

// TODO - Handle context loss
// function glGetContextLossCount(gl) {
//   return (gl.luma && gl.luma.glCount) || 0;
// }

class Resource {
  constructor(gl, opts = {}) {
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["assertWebGLContext"])(gl);

    const {id, userData = {}} = opts;
    this.gl = gl;
    // this.ext = polyfillContext(gl);
    this.id = id || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uid"])(this.constructor.name);
    this.userData = userData;
    this._bound = false;

    // Set the handle
    // If handle was provided, use it, otherwise create a new handle

    // TODO - Stores the handle with context loss information
    // this.glCount = glGetContextLossCount(this.gl);

    // Default VertexArray needs to be created with null handle, so compare against undefined
    this._handle = opts.handle;
    if (this._handle === undefined) {
      this._handle = this._createHandle();
    }

    // Only meaningful for resources that allocate GPU memory
    this.byteLength = 0;

    this._addStats();
  }

  toString() {
    return `${this.constructor.name}(${this.id})`;
  }

  get handle() {
    // TODO - Add context loss handling
    // Will regenerate and reinitialize the handle if necessary
    // const glCount = glGetContextLossCount(this.gl);
    // if (this.glCount !== glCount) {
    //   this._handle = this._createHandle(this.opts);
    //   this._glCount = glCount;
    //   // Reinitialize object
    //   this.initialize(this.opts);
    // }
    return this._handle;
  }

  delete({deleteChildren = false} = {}) {
    // Delete this object, and get refs to any children
    const children = this._handle && this._deleteHandle(this._handle);
    this._handle = null;
    this._removeStats();

    // Optionally, recursively delete the children
    if (children && deleteChildren) {
      children.filter(Boolean).forEach(child => {
        child.delete();
      });
    }

    return this;
  }

  bind(funcOrHandle = this.handle) {
    if (typeof funcOrHandle !== 'function') {
      this._bindHandle(funcOrHandle);
      return this;
    }

    let value;

    if (!this._bound) {
      this._bindHandle(this.handle);
      this._bound = true;

      value = funcOrHandle();

      this._bound = false;
      this._bindHandle(null);
    } else {
      value = funcOrHandle();
    }

    return value;
  }

  unbind() {
    this.bind(null);
  }

  /**
   * Query a Resource parameter
   *
   * @param {GLenum} pname
   * @return {GLint|GLfloat|GLenum} param
   */
  getParameter(pname, opts = {}) {
    pname = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getKeyValue"])(this.gl, pname);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(pname);

    const parameters = this.constructor.PARAMETERS || {};

    // Use parameter definitions to handle unsupported parameters
    const parameter = parameters[pname];
    if (parameter) {
      const isWebgl2 = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(this.gl);

      // Check if we can query for this parameter
      const parameterAvailable =
        (!('webgl2' in parameter) || isWebgl2) &&
        (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

      if (!parameterAvailable) {
        const webgl1Default = parameter.webgl1;
        const webgl2Default = 'webgl2' in parameter ? parameter.webgl2 : parameter.webgl1;
        const defaultValue = isWebgl2 ? webgl2Default : webgl1Default;
        return defaultValue;
      }
    }

    // If unknown parameter - Could be a valid parameter not covered by PARAMS
    // Attempt to query for it and let WebGL report errors
    return this._getParameter(pname, opts);
  }

  // Many resources support a getParameter call -
  // getParameters will get all parameters - slow but useful for debugging
  // eslint-disable-next-line complexity
  getParameters(opts = {}) {
    const {parameters, keys} = {};

    // Get parameter definitions for this Resource
    const PARAMETERS = this.constructor.PARAMETERS || {};

    const isWebgl2 = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(this.gl);

    const values = {};

    // Query all parameters if no list provided
    const parameterKeys = parameters || Object.keys(PARAMETERS);

    // WEBGL limits
    for (const pname of parameterKeys) {
      const parameter = PARAMETERS[pname];

      // Check if this parameter is available on this platform
      const parameterAvailable =
        parameter &&
        (!('webgl2' in parameter) || isWebgl2) &&
        (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

      if (parameterAvailable) {
        const key = keys ? Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getKey"])(this.gl, pname) : pname;
        values[key] = this.getParameter(pname, opts);
        if (keys && parameter.type === 'GLenum') {
          values[key] = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getKey"])(this.gl, values[key]);
        }
      }
    }

    return values;
  }

  /**
   * Update a Resource setting
   *
   * @todo - cache parameter to avoid issuing WebGL calls?
   *
   * @param {GLenum} pname - parameter (GL constant, value or key)
   * @param {GLint|GLfloat|GLenum} value
   * @return {Resource} returns self to enable chaining
   */
  setParameter(pname, value) {
    pname = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getKeyValue"])(this.gl, pname);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(pname);

    const parameters = this.constructor.PARAMETERS || {};

    const parameter = parameters[pname];
    if (parameter) {
      const isWebgl2 = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(this.gl);

      // Check if this parameter is available on this platform
      const parameterAvailable =
        (!('webgl2' in parameter) || isWebgl2) &&
        (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

      if (!parameterAvailable) {
        throw new Error('Parameter not available on this platform');
      }

      // Handle string keys
      if (parameter.type === 'GLenum') {
        value = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getKeyValue"])(value);
      }
    }

    // If unknown parameter - Could be a valid parameter not covered by PARAMS
    // attempt to set it and let WebGL report errors
    this._setParameter(pname, value);
    return this;
  }

  /*
   * Batch update resource parameters
   * Assumes the subclass supports a setParameter call
   */
  setParameters(parameters) {
    for (const pname in parameters) {
      this.setParameter(pname, parameters[pname]);
    }
    return this;
  }

  // Install stubs for removed methods
  stubRemovedMethods(className, version, methodNames) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["stubRemovedMethods"])(this, className, version, methodNames);
  }

  // PUBLIC VIRTUAL METHODS
  initialize(opts) {}

  // PROTECTED METHODS - These must be overridden by subclass
  _createHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _deleteHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _bindHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _getOptsFromHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _getParameter(pname, opts) {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  /**
   * @param {GLenum} pname
   * @param {GLint|GLfloat|GLenum} param
   * @return {Sampler} returns self to enable chaining
   */
  _setParameter(pname, value) {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  // PRIVATE METHODS

  _context() {
    this.gl.luma = this.gl.luma || {};
    return this.gl.luma;
  }

  _addStats() {
    const name = this.constructor.name;
    const stats = _init__WEBPACK_IMPORTED_MODULE_0__["lumaStats"].get('Resource Counts');

    stats.get('Resources Created').incrementCount();
    stats.get(`${name}s Created`).incrementCount();
    stats.get(`${name}s Active`).incrementCount();
  }

  _removeStats() {
    const name = this.constructor.name;
    const stats = _init__WEBPACK_IMPORTED_MODULE_0__["lumaStats"].get('Resource Counts');

    stats.get(`${name}s Active`).decrementCount();
  }

  _trackAllocatedMemory(bytes, name = this.constructor.name) {
    const stats = _init__WEBPACK_IMPORTED_MODULE_0__["lumaStats"].get('Memory Usage');

    stats.get('GPU Memory').addCount(bytes);
    stats.get(`${name} Memory`).addCount(bytes);
    this.byteLength = bytes;
  }

  _trackDeallocatedMemory(name = this.constructor.name) {
    const stats = _init__WEBPACK_IMPORTED_MODULE_0__["lumaStats"].get('Memory Usage');

    stats.get('GPU Memory').subtractCount(this.byteLength);
    stats.get(`${name} Memory`).subtractCount(this.byteLength);
    this.byteLength = 0;
  }
}


/***/ }),

/***/ "./src/classes/shader.js":
/*!*******************************!*\
  !*** ./src/classes/shader.js ***!
  \*******************************/
/*! exports provided: Shader, VertexShader, FragmentShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return Shader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexShader", function() { return VertexShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentShader", function() { return FragmentShader; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glsl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glsl-utils */ "./src/glsl-utils/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");






const ERR_SOURCE = 'Shader: GLSL source code must be a JavaScript string';

// For now this is an internal class
class Shader extends _resource__WEBPACK_IMPORTED_MODULE_4__["default"] {
  static getTypeName(shaderType) {
    switch (shaderType) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERTEX_SHADER:
        return 'vertex-shader';
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAGMENT_SHADER:
        return 'fragment-shader';
      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(false);
        return 'unknown';
    }
  }

  /* eslint-disable max-statements */
  constructor(gl, props) {
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_2__["assertWebGLContext"])(gl);

    // Validate arguments
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(typeof props.source === 'string', ERR_SOURCE);

    // Deduce an id, from shader source, or supplied id, or shader type
    const id =
      Object(_glsl_utils__WEBPACK_IMPORTED_MODULE_1__["getShaderName"])(props.source, null) ||
      props.id ||
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uid"])(`unnamed ${Shader.getTypeName(props.shaderType)}`);

    super(gl, {id});

    this.shaderType = props.shaderType;
    this.source = props.source;

    this.initialize(props);
  }

  initialize({source}) {
    const shaderName = Object(_glsl_utils__WEBPACK_IMPORTED_MODULE_1__["getShaderName"])(source, null);
    if (shaderName) {
      this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uid"])(shaderName);
    }
    this._compile(source);
  }

  // Accessors

  getParameter(pname) {
    return this.gl.getShaderParameter(this.handle, pname);
  }

  toString() {
    return `${Shader.getTypeName(this.shaderType)}:${this.id}`;
  }

  getName() {
    return Object(_glsl_utils__WEBPACK_IMPORTED_MODULE_1__["getShaderName"])(this.source) || 'unnamed-shader';
  }

  getSource() {
    return this.gl.getShaderSource(this.handle);
  }

  // Debug method - Returns translated source if available
  getTranslatedSource() {
    const extension = this.gl.getExtension('WEBGL.debug_shaders');
    return extension
      ? extension.getTranslatedShaderSource(this.handle)
      : 'No translated source available. WEBGL.debug_shaders not implemented';
  }

  // PRIVATE METHODS
  _compile() {
    this.gl.shaderSource(this.handle, this.source);
    this.gl.compileShader(this.handle);

    // TODO - For performance reasons, avoid checking shader compilation errors on production?
    // TODO - Load log even when no error reported, to catch warnings?
    // https://gamedev.stackexchange.com/questions/30429/how-to-detect-glsl-warnings
    const compileStatus = this.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COMPILE_STATUS);
    if (!compileStatus) {
      const infoLog = this.gl.getShaderInfoLog(this.handle);
      const {shaderName, errors, warnings} = Object(_glsl_utils__WEBPACK_IMPORTED_MODULE_1__["parseGLSLCompilerError"])(
        infoLog,
        this.source,
        this.shaderType,
        this.id
      );
      _utils__WEBPACK_IMPORTED_MODULE_3__["log"].error(`GLSL compilation errors in ${shaderName}\n${errors}`)();
      _utils__WEBPACK_IMPORTED_MODULE_3__["log"].warn(`GLSL compilation warnings in ${shaderName}\n${warnings}`)();
      throw new Error(`GLSL compilation errors in ${shaderName}`);
    }
  }

  _deleteHandle() {
    this.gl.deleteShader(this.handle);
  }

  _getOptsFromHandle() {
    return {
      type: this.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SHADER_TYPE),
      source: this.getSource()
    };
  }
}

class VertexShader extends Shader {
  constructor(gl, props) {
    // Signature: new VertexShader(gl, source)
    if (typeof props === 'string') {
      props = {source: props};
    }
    super(gl, Object.assign({}, props, {shaderType: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERTEX_SHADER}));
  }

  // PRIVATE METHODS
  _createHandle() {
    return this.gl.createShader(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERTEX_SHADER);
  }
}

class FragmentShader extends Shader {
  constructor(gl, props) {
    // Signature: new FragmentShader(gl, source)
    if (typeof props === 'string') {
      props = {source: props};
    }

    super(gl, Object.assign({}, props, {shaderType: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAGMENT_SHADER}));
  }

  // PRIVATE METHODS
  _createHandle() {
    return this.gl.createShader(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FRAGMENT_SHADER);
  }
}


/***/ }),

/***/ "./src/classes/texture-2d.js":
/*!***********************************!*\
  !*** ./src/classes/texture-2d.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Texture2D; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texture */ "./src/classes/texture.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils_load_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/load-file */ "./src/utils/load-file.js");





class Texture2D extends _texture__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static isSupported(gl, opts) {
    return _texture__WEBPACK_IMPORTED_MODULE_1__["default"].isSupported(gl, opts);
  }

  constructor(gl, props = {}) {
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_2__["assertWebGLContext"])(gl);

    // Signature: new Texture2D(gl, url | Promise)
    if (props instanceof Promise || typeof props === 'string') {
      props = {data: props};
    }

    // Signature: new Texture2D(gl, {data: url})
    if (typeof props.data === 'string') {
      props = Object.assign({}, props, {data: Object(_utils_load_file__WEBPACK_IMPORTED_MODULE_3__["loadImage"])(props.data)});
    }

    super(gl, Object.assign({}, props, {target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_2D}));

    this.initialize(props);

    Object.seal(this);
  }
}


/***/ }),

/***/ "./src/classes/texture-3d.js":
/*!***********************************!*\
  !*** ./src/classes/texture-3d.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Texture3D; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./src/context/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture */ "./src/classes/texture.js");
/* harmony import */ var _texture_formats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./texture-formats */ "./src/classes/texture-formats.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buffer */ "./src/classes/buffer.js");







class Texture3D extends _texture__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static isSupported(gl) {
    return Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_2__["isWebGL2"])(gl);
  }

  constructor(gl, props = {}) {
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_2__["assertWebGL2Context"])(gl);
    props = Object.assign({depth: 1}, props, {target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_3D, unpackFlipY: false});
    super(gl, props);
    this.initialize(props);

    Object.seal(this);
  }

  // Image 3D copies from Typed Array or WebGLBuffer
  setImageData({
    level = 0,
    dataFormat = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
    width,
    height,
    depth = 1,
    border = 0,
    format,
    type = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE,
    offset = 0,
    data,
    parameters = {}
  }) {
    this._trackDeallocatedMemory('Texture');

    this.gl.bindTexture(this.target, this.handle);

    Object(_context__WEBPACK_IMPORTED_MODULE_1__["withParameters"])(this.gl, parameters, () => {
      if (ArrayBuffer.isView(data)) {
        this.gl.texImage3D(
          this.target,
          level,
          dataFormat,
          width,
          height,
          depth,
          border,
          format,
          type,
          data
        );
      }

      if (data instanceof _buffer__WEBPACK_IMPORTED_MODULE_5__["default"]) {
        this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PIXEL_UNPACK_BUFFER, data.handle);
        this.gl.texImage3D(
          this.target,
          level,
          dataFormat,
          width,
          height,
          depth,
          border,
          format,
          type,
          offset
        );
      }
    });

    if (data && data.byteLength) {
      this._trackAllocatedMemory(data.byteLength, 'Texture');
    } else {
      // NOTE(Tarek): Default to RGBA bytes
      const channels = _texture_formats__WEBPACK_IMPORTED_MODULE_4__["DATA_FORMAT_CHANNELS"][this.dataFormat] || 4;
      const channelSize = _texture_formats__WEBPACK_IMPORTED_MODULE_4__["TYPE_SIZES"][this.type] || 1;

      this._trackAllocatedMemory(
        this.width * this.height * this.depth * channels * channelSize,
        'Texture'
      );
    }

    this.loaded = true;

    return this;
  }
}


/***/ }),

/***/ "./src/classes/texture-cube.js":
/*!*************************************!*\
  !*** ./src/classes/texture-cube.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextureCube; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texture */ "./src/classes/texture.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");





const FACES = [
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_POSITIVE_X,
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_NEGATIVE_X,
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_POSITIVE_Y,
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_NEGATIVE_Y,
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_POSITIVE_Z,
  _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP_NEGATIVE_Z
];

class TextureCube extends _texture__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(gl, props = {}) {
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_2__["assertWebGLContext"])(gl);

    super(gl, Object.assign({}, props, {target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_CUBE_MAP}));

    this.initialize(props);

    Object.seal(this);
  }

  /* eslint-disable max-len, max-statements */
  initialize(props = {}) {
    const {/* format = GL.RGBA, */ mipmaps = true, parameters = {}} = props;

    // let {width = 1, height = 1, type = GL.UNSIGNED_BYTE, dataFormat} = props;

    // Deduce width and height based on one of the faces
    // ({type, dataFormat} = this._deduceParameters({format, type, dataFormat}));
    // ({width, height} = this._deduceImageSize({
    //   data: props[GL.TEXTURE_CUBE_MAP_POSITIVE_X],
    //   width,
    //   height
    // }));

    // Enforce cube
    // assert(width === height);

    // Temporarily apply any pixel store paramaters and build textures
    // withParameters(this.gl, props, () => {
    //   for (const face of CUBE_MAP_FACES) {
    //     this.setImageData({
    //       target: face,
    //       data: props[face],
    //       width, height, format, type, dataFormat, border, mipmaps
    //     });
    //   }
    // });

    // Store props for accessors
    this.opts = props;

    this.setCubeMapImageData(props).then(() => {
      this.loaded = true;

      // TODO - should genMipmap() be called on the cubemap or on the faces?
      // TODO - without generateMipmap() cube textures do not work at all!!! Why?
      if (mipmaps) {
        this.generateMipmap(props);
      }

      this.setParameters(parameters);
    });
  }

  subImage({face, data, x = 0, y = 0, mipmapLevel = 0}) {
    return this._subImage({target: face, data, x, y, mipmapLevel});
  }

  /* eslint-disable max-statements, max-len */
  async setCubeMapImageData({
    width,
    height,
    pixels,
    data,
    border = 0,
    format = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
    type = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE
  }) {
    const {gl} = this;
    const imageDataMap = pixels || data;

    // pixel data (imageDataMap) is an Object from Face to Image or Promise.
    // For example:
    // {
    // GL.TEXTURE_CUBE_MAP_POSITIVE_X : Image-or-Promise,
    // GL.TEXTURE_CUBE_MAP_NEGATIVE_X : Image-or-Promise,
    // ... }
    // To provide multiple level-of-details (LODs) this can be Face to Array
    // of Image or Promise, like this
    // {
    // GL.TEXTURE_CUBE_MAP_POSITIVE_X : [Image-or-Promise-LOD-0, Image-or-Promise-LOD-1],
    // GL.TEXTURE_CUBE_MAP_NEGATIVE_X : [Image-or-Promise-LOD-0, Image-or-Promise-LOD-1],
    // ... }

    const resolvedFaces = await Promise.all(
      FACES.map(face => {
        const facePixels = imageDataMap[face];
        return Promise.all(Array.isArray(facePixels) ? facePixels : [facePixels]);
      })
    );

    this.bind();

    FACES.forEach((face, index) => {
      if (resolvedFaces[index].length > 1 && this.opts.mipmaps !== false) {
        // If the user provides multiple LODs, then automatic mipmap
        // generation generateMipmap() should be disabled to avoid overwritting them.
        _utils__WEBPACK_IMPORTED_MODULE_3__["log"].warn(`${this.id} has mipmap and multiple LODs.`)();
      }
      resolvedFaces[index].forEach((image, lodLevel) => {
        // TODO: adjust width & height for LOD!
        if (width && height) {
          gl.texImage2D(face, lodLevel, format, width, height, border, format, type, image);
        } else {
          gl.texImage2D(face, lodLevel, format, format, type, image);
        }
      });
    });

    this.unbind();
  }

  // TODO: update this method to accept LODs
  setImageDataForFace(options) {
    const {
      face,
      width,
      height,
      pixels,
      data,
      border = 0,
      format = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
      type = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE
      // generateMipmap = false // TODO
    } = options;

    const {gl} = this;

    const imageData = pixels || data;

    this.bind();
    if (imageData instanceof Promise) {
      imageData.then(resolvedImageData =>
        this.setImageDataForFace(
          Object.assign({}, options, {
            face,
            data: resolvedImageData,
            pixels: resolvedImageData
          })
        )
      );
    } else if (this.width || this.height) {
      gl.texImage2D(face, 0, format, width, height, border, format, type, imageData);
    } else {
      gl.texImage2D(face, 0, format, format, type, imageData);
    }

    return this;
  }
}

TextureCube.FACES = FACES;


/***/ }),

/***/ "./src/classes/texture-formats.js":
/*!****************************************!*\
  !*** ./src/classes/texture-formats.js ***!
  \****************************************/
/*! exports provided: TEXTURE_FORMATS, DATA_FORMAT_CHANNELS, TYPE_SIZES, isFormatSupported, isLinearFilteringSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_FORMATS", function() { return TEXTURE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_FORMAT_CHANNELS", function() { return DATA_FORMAT_CHANNELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SIZES", function() { return TYPE_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormatSupported", function() { return isFormatSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinearFilteringSupported", function() { return isLinearFilteringSupported; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");



// const S3TC = 'WEBGL_compressed_texture_s3tc';
// const PVRTC = 'WEBGL_compressed_texture_pvrtc';
// const ES3 = 'WEBGL_compressed_texture_es3';
// const ETC1 = 'WEBGL_compressed_texture_etc1';
// const SRGB = 'EXT_sRGB';
// const DEPTH = 'WEBGL_depth_texture';

// Legal combinations for internalFormat, format and type
const TEXTURE_FORMATS = {
  // Unsized texture format - more performance
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_5_6_5]},
  // TODO: format: GL.RGBA type: GL.FLOAT is supported in WebGL1 when 'OES_texure_float' is suported
  // we need to update this table structure to specify extensions (gl1: 'OES_texure_float', gl2: false) for each type.
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA]: {
    dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
    types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_4_4_4_4, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_5_5_5_1]
  },
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALPHA]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALPHA, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE]},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LUMINANCE]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LUMINANCE, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE]},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LUMINANCE_ALPHA]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LUMINANCE_ALPHA, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE]},

  // 32 bit floats
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R32F]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RED, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT], gl2: true},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG32F]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT], gl2: true},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB32F]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT], gl2: true},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA32F]: {dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA, types: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT], gl2: true}

  // [GL.DEPTH_COMPONENT]: {types: [GL.UNSIGNED_SHORT, GL.UNSIGNED_INT, GL.UNSIGNED_INT_24_8], gl1: DEPTH},
  // [GL.DEPTH_STENCIL]: {gl1: DEPTH},

  // Sized texture format - more performance
  // R
  // [GL.R8]: {dataFormat: GL.RED, types: [GL.UNSIGNED_BYTE], gl2: true},
  // [GL.R16F]: {dataFormat: GL.RED, types: [GL.HALF_FLOAT, GL.FLOAT], gl2: true},
  // [GL.R8UI]: {dataFormat: GL.RED_INTEGER, types: [GL.UNSIGNED_BYTE], gl2: true},
  // // RG
  // [GL.RG8]: {dataFormat: GL.RG, types: [GL.UNSIGNED_BYTE], gl2: true},
  // [GL.RG16F]: {dataFormat: GL.RG, types: [GL.HALF_FLOAT, GL.FLOAT], gl2: true},
  // [GL.RG8UI]: {dataFormat: GL.RG_INTEGER, types: [GL.UNSIGNED_BYTE], gl2: true},
  // // RGB
  // [GL.RGB8]: {dataFormat: GL.RGB, types: [GL.UNSIGNED_BYTE], gl2: true, gl1: SRGB},
  // [GL.SRGB8]: {dataFormat: GL.RGB, types: [GL.UNSIGNED_BYTE], gl2: true, gl1: SRGB},
  // [GL.RGB565]: {dataFormat: GL.RGB, types: [GL.UNSIGNED_BYTE, GL.UNSIGNED_SHORT_5_6_5], gl2: true},
  // [GL.R11F_G11F_B10F]: {dataFormat: GL.RGB, types: [GL.UNSIGNED_INT_10F_11F_11F_REV, GL.HALF_FLOAT, GL.FLOAT], gl2: true},
  // [GL.RGB9_E5]: {dataFormat: GL.RGB, types: [GL.HALF_FLOAT, GL.FLOAT], gl2: true, gl1: 'WEBGL_color_buffer_half_float'},
  // [GL.RGB16F]: {dataFormat: GL.RGB, types: [GL.HALF_FLOAT, GL.FLOAT], gl2: true, gl1: 'WEBGL_color_buffer_float'},
  // [GL.RGB8UI]: {dataFormat: GL.RGB_INTEGER, types: [GL.UNSIGNED_BYTE], gl2: true},
  // // RGBA
  // [GL.RGBA8]: {dataFormat: GL.RGBA, types: [GL.UNSIGNED_BYTE], gl2: true, gl1: SRGB},
  // [GL.SRGB8_ALPHA8]: {dataFormat: GL.RGBA, types: [GL.UNSIGNED_BYTE], gl2: true, gl1: SRGB},
  // [GL.RGB5_A1]: {dataFormat: GL.RGBA, types: [GL.UNSIGNED_BYTE, GL.UNSIGNED_SHORT_5_5_5_1], gl2: true},
  // [GL.RGBA4]: {dataFormat: GL.RGBA, types: [GL.UNSIGNED_BYTE, GL.UNSIGNED_SHORT_4_4_4_4], gl2: true},
  // [GL.RGBA16F]: {dataFormat: GL.RGBA, types: [GL.HALF_FLOAT, GL.FLOAT], gl2: true},
  // [GL.RGBA8UI]: {dataFormat: GL.RGBA_INTEGER, types: [GL.UNSIGNED_BYTE], gl2: true}

  // Compressed formats

  // WEBGL_compressed_texture_s3tc

  // [GL.COMPRESSED_RGB_S3TC_DXT1_EXT]: {compressed: true, gl1: S3TC},
  // [GL.COMPRESSED_RGBA_S3TC_DXT1_EXT]: {compressed: true, gl1: S3TC},
  // [GL.COMPRESSED_RGBA_S3TC_DXT3_EXT]: {compressed: true, gl1: S3TC},
  // [GL.COMPRESSED_RGBA_S3TC_DXT5_EXT]: {compressed: true, gl1: S3TC},

  // WEBGL_compressed_texture_es3

  // [GL.COMPRESSED_R11_EAC]: {compressed: true, gl1: ES3}, // RED
  // [GL.COMPRESSED_SIGNED_R11_EAC]: {compressed: true, gl1: ES3}, // RED
  // [GL.COMPRESSED_RG11_EAC]: {compressed: true, gl1: ES3}, // RG
  // [GL.COMPRESSED_SIGNED_RG11_EAC]: {compressed: true, gl1: ES3}, // RG
  // [GL.COMPRESSED_RGB8_ETC2]: {compressed: true, gl1: ES3}, // RGB
  // [GL.COMPRESSED_RGBA8_ETC2_EAC]: {compressed: true, gl1: ES3}, // RBG
  // [GL.COMPRESSED_SRGB8_ETC2]: {compressed: true, gl1: ES3}, // RGB
  // [GL.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]: {compressed: true, gl1: ES3}, // RGBA
  // [GL.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]: {compressed: true, gl1: ES3}, // RGBA
  // [GL.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]: {compressed: true, gl1: ES3}, // RGBA
  /* WebGL2 guaranteed availability compressed formats?
  COMPRESSED_R11_EAC RED
  COMPRESSED_SIGNED_R11_EAC RED
  COMPRESSED_RG11_EAC RG
  COMPRESSED_SIGNED_RG11_EAC RG
  COMPRESSED_RGB8_ETC2 RGB
  COMPRESSED_SRGB8_ETC2 RGB
  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 RGBA
  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 RGBA
  COMPRESSED_RGBA8_ETC2_EAC RGBA
  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
  */

  // WEBGL_compressed_texture_pvrtc

  // [GL.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]: {compressed: true, gl1: PVRTC},
  // [GL.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]: {compressed: true, gl1: PVRTC},
  // [GL.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]: {compressed: true, gl1: PVRTC},
  // [GL.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]: {compressed: true, gl1: PVRTC},

  // WEBGL_compressed_texture_etc1

  // [GL.COMPRESSED_RGB_ETC1_WEBGL]: {compressed: true, gl1: ETC1},

  // WEBGL_compressed_texture_atc

  // [GL.COMPRESSED_RGB_ATC_WEBGL]: {compressed: true, gl1: ETC1},
  // [GL.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]: {compressed: true, gl1: ETC1},
  // [GL.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]: {compressed: true, gl1: ETC1}
};

const DATA_FORMAT_CHANNELS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RED]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RED_INTEGER]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG]: 2,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG_INTEGER]: 2,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB]: 3,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB_INTEGER]: 3,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA]: 4,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA_INTEGER]: 4,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_COMPONENT]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.DEPTH_STENCIL]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALPHA]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LUMINANCE]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LUMINANCE_ALPHA]: 2
};

const TYPE_SIZES = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT]: 4,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT]: 4,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT]: 4,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT]: 2,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SHORT]: 2,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.HALF_FLOAT]: 2,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BYTE]: 1,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE]: 1
};

function isFormatSupported(gl, format) {
  const info = TEXTURE_FORMATS[format];
  if (!info) {
    return false;
  }
  if (info.gl1 === undefined && info.gl2 === undefined) {
    // No info - always supported
    return true;
  }
  const value = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(gl) ? info.gl2 || info.gl1 : info.gl1;
  return typeof value === 'string' ? gl.getExtension(value) : value;
}

function isLinearFilteringSupported(gl, format) {
  const info = TEXTURE_FORMATS[format];
  switch (info && info.types[0]) {
    // Both WebGL1 and WebGL2?
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT:
      return gl.getExtension('OES_texture_float_linear');
    // Not in WebGL2?
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.HALF_FLOAT:
      return gl.getExtension('OES_texture_half_float_linear');
    default:
      return true;
  }
}


/***/ }),

/***/ "./src/classes/texture.js":
/*!********************************!*\
  !*** ./src/classes/texture.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Texture; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer */ "./src/classes/buffer.js");
/* harmony import */ var _texture_formats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture-formats */ "./src/classes/texture-formats.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./src/context/index.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");










// Supported min filters for NPOT texture.
const NPOT_MIN_FILTERS = [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.NEAREST];

class Texture extends _resource__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static isSupported(gl, {format, linearFiltering} = {}) {
    let supported = true;
    if (format) {
      supported = supported && Object(_texture_formats__WEBPACK_IMPORTED_MODULE_3__["isFormatSupported"])(gl, format);
      supported = supported && (!linearFiltering || Object(_texture_formats__WEBPACK_IMPORTED_MODULE_3__["isLinearFilteringSupported"])(gl, format));
    }
    return supported;
  }

  // target cannot be modified by bind:
  // textures are special because when you first bind them to a target,
  // they get special information. When you first bind a texture as a
  // GL_TEXTURE_2D, you are actually setting special state in the texture.
  // You are saying that this texture is a 2D texture.
  // And it will always be a 2D texture; this state cannot be changed ever.
  // If you have a texture that was first bound as a GL_TEXTURE_2D,
  // you must always bind it as a GL_TEXTURE_2D;
  // attempting to bind it as GL_TEXTURE_1D will give rise to an error
  // (while run-time).
  constructor(gl, props) {
    const {
      id = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["uid"])('texture'),
      handle,
      target
      // , magFilter, minFilter, wrapS, wrapT
    } = props;

    super(gl, {id, handle});

    this.target = target;
    this.hasFloatTexture = gl.getExtension('OES_texture_float');
    this.textureUnit = undefined;

    // Program.draw() checks the loaded flag of all textures to avoid
    // Textures that are still loading from promises
    // Set to true as soon as texture has been initialized with valid data
    this.loaded = false;

    this.width = undefined;
    this.height = undefined;
    this.depth = undefined;
    this.format = undefined;
    this.type = undefined;
    this.dataFormat = undefined;
    this.border = undefined;
    this.textureUnit = undefined;
    this.mipmaps = undefined;
  }

  toString() {
    return `Texture(${this.id},${this.width}x${this.height})`;
  }

  /* eslint-disable max-len, max-statements */
  initialize(props = {}) {
    let data = props.data;

    if (data instanceof Promise) {
      data.then(resolvedImageData =>
        this.initialize(
          Object.assign({}, props, {
            pixels: resolvedImageData,
            data: resolvedImageData
          })
        )
      );
      return this;
    }

    const {
      pixels = null,
      format = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
      type = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE,
      border = 0,
      recreate = false,
      parameters = {},
      pixelStore = {},
      textureUnit = undefined,
      // Deprecated parameters
      unpackFlipY = true
    } = props;

    let {mipmaps = true} = props;

    // pixels variable is for API compatibility purpose
    if (!data) {
      // TODO - This looks backwards? Commenting out for now until we decide
      // which prop to use
      // log.deprecated('data', 'pixels')();
      data = pixels;
    }

    let {width, height, dataFormat} = props;
    const {depth = 0} = props;

    // Deduce width and height
    ({width, height, dataFormat} = this._deduceParameters({
      format,
      type,
      dataFormat,
      compressed: false,
      data,
      width,
      height
    }));

    // Store opts for accessors
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.format = format;
    this.type = type;
    this.dataFormat = dataFormat;
    this.border = border;
    this.textureUnit = textureUnit;

    if (Number.isFinite(this.textureUnit)) {
      this.gl.activeTexture(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE0 + this.textureUnit);
      this.gl.bindTexture(this.target, this.handle);
    }

    // Note: luma.gl defaults to GL.UNPACK_FLIP_Y_WEBGL = true;
    // TODO - compare v4 and v3
    const DEFAULT_TEXTURE_SETTINGS = {
      // Pixel store
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_FLIP_Y_WEBGL]: unpackFlipY
    };
    const glSettings = Object.assign({}, DEFAULT_TEXTURE_SETTINGS, pixelStore);

    if (this._isNPOT() && mipmaps) {
      _utils__WEBPACK_IMPORTED_MODULE_6__["log"].warn(`texture: ${this} is Non-Power-Of-Two, disabling mipmaping`)();
      mipmaps = false;

      this._updateForNPOT(parameters);
    }

    this.mipmaps = mipmaps;

    this.setImageData({
      data,
      width,
      height,
      depth,
      format,
      type,
      dataFormat,
      border,
      mipmaps,
      parameters: glSettings
    });

    if (mipmaps) {
      this.generateMipmap();
    }

    // Set texture sampler parameters
    this.setParameters(parameters);

    // TODO - Store data to enable auto recreate on context loss
    if (recreate) {
      this.data = data;
    }

    return this;
  }

  // If size has changed, reinitializes with current format
  // note clears image and mipmaps
  resize({width, height}) {
    if (width !== this.width || height !== this.height) {
      return this.initialize({
        width,
        height,
        format: this.format,
        type: this.type,
        dataFormat: this.dataFormat,
        border: this.border,
        mipmaps: false
      });
    }
    return this;
  }

  // Call to regenerate mipmaps after modifying texture(s)
  generateMipmap(params = {}) {
    this.gl.bindTexture(this.target, this.handle);
    Object(_context__WEBPACK_IMPORTED_MODULE_4__["withParameters"])(this.gl, params, () => {
      this.gl.generateMipmap(this.target);
    });
    this.gl.bindTexture(this.target, null);
    return this;
  }

  /*
   * Allocates storage
   * @param {*} pixels -
   *  null - create empty texture of specified format
   *  Typed array - init from image data in typed array
   *  Buffer|WebGLBuffer - (WEBGL2) init from image data in WebGLBuffer
   *  HTMLImageElement|Image - Inits with content of image. Auto width/height
   *  HTMLCanvasElement - Inits with contents of canvas. Auto width/height
   *  HTMLVideoElement - Creates video texture. Auto width/height
   *
   * @param {GLint} width -
   * @param {GLint} height -
   * @param {GLint} mipMapLevel -
   * @param {GLenum} format - format of image data.
   * @param {GLenum} type
   *  - format of array (autodetect from type) or
   *  - (WEBGL2) format of buffer
   * @param {Number} offset - (WEBGL2) offset from start of buffer
   * @param {GLint} border - must be 0.
   * @parameters - temporary settings to be applied, can be used to supply pixel store settings.
   */
  /* eslint-disable max-len, max-statements, complexity */
  setImageData(options) {
    this._trackDeallocatedMemory('Texture');

    const {
      target = this.target,
      pixels = null,
      level = 0,
      format = this.format,
      border = this.border,
      offset = 0,
      parameters = {}
    } = options;

    let {
      data = null,
      type = this.type,
      width = this.width,
      height = this.height,
      dataFormat = this.dataFormat,
      compressed = false
    } = options;

    // pixels variable is  for API compatibility purpose
    if (!data) {
      data = pixels;
    }

    ({type, dataFormat, compressed, width, height} = this._deduceParameters({
      format,
      type,
      dataFormat,
      compressed,
      data,
      width,
      height
    }));

    const {gl} = this;
    gl.bindTexture(this.target, this.handle);

    let dataType = null;
    ({data, dataType} = this._getDataType({data, compressed}));

    Object(_context__WEBPACK_IMPORTED_MODULE_4__["withParameters"])(this.gl, parameters, () => {
      switch (dataType) {
        case 'null':
          gl.texImage2D(target, level, format, width, height, border, dataFormat, type, data);
          break;
        case 'typed-array':
          // Looks like this assert is not necessary, as offset is ignored under WebGL1
          // assert((offset === 0 || isWebGL2(gl)), 'offset supported in WebGL2 only');
          gl.texImage2D(
            target,
            level,
            format,
            width,
            height,
            border,
            dataFormat,
            type,
            data,
            offset
          );
          break;
        case 'buffer':
          // WebGL2 enables creating textures directly from a WebGL buffer
          Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["assertWebGL2Context"])(gl);
          gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PIXEL_UNPACK_BUFFER, data.handle || data);
          gl.texImage2D(target, level, format, width, height, border, dataFormat, type, offset);
          gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PIXEL_UNPACK_BUFFER, null);
          break;
        case 'browser-object':
          if (Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["isWebGL2"])(gl)) {
            gl.texImage2D(target, level, format, width, height, border, dataFormat, type, data);
          } else {
            gl.texImage2D(target, level, format, dataFormat, type, data);
          }
          break;
        case 'compressed':
          gl.compressedTexImage2D(target, level, format, width, height, border, data);
          break;
        default:
          Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(false, 'Unknown image data type');
      }
    });

    if (data && data.byteLength) {
      this._trackAllocatedMemory(data.byteLength, 'Texture');
    } else {
      // NOTE(Tarek): Default to RGBA bytes
      const channels = _texture_formats__WEBPACK_IMPORTED_MODULE_3__["DATA_FORMAT_CHANNELS"][this.dataFormat] || 4;
      const channelSize = _texture_formats__WEBPACK_IMPORTED_MODULE_3__["TYPE_SIZES"][this.type] || 1;

      this._trackAllocatedMemory(this.width * this.height * channels * channelSize, 'Texture');
    }

    this.loaded = true;

    return this;
  }
  /* eslint-enable max-len, max-statements, complexity */

  /**
   * Redefines an area of an existing texture
   * Note: does not allocate storage
   */
  /*
   * Redefines an area of an existing texture
   * @param {*} pixels, data -
   *  null - create empty texture of specified format
   *  Typed array - init from image data in typed array
   *  Buffer|WebGLBuffer - (WEBGL2) init from image data in WebGLBuffer
   *  HTMLImageElement|Image - Inits with content of image. Auto width/height
   *  HTMLCanvasElement - Inits with contents of canvas. Auto width/height
   *  HTMLVideoElement - Creates video texture. Auto width/height
   *
   * @param {GLint} x - xOffset from where texture to be updated
   * @param {GLint} y - yOffset from where texture to be updated
   * @param {GLint} width - width of the sub image to be updated
   * @param {GLint} height - height of the sub image to be updated
   * @param {GLint} level - mip level to be updated
   * @param {GLenum} format - internal format of image data.
   * @param {GLenum} type
   *  - format of array (autodetect from type) or
   *  - (WEBGL2) format of buffer or ArrayBufferView
   * @param {GLenum} dataFormat - format of image data.
   * @param {Number} offset - (WEBGL2) offset from start of buffer
   * @param {GLint} border - must be 0.
   * @parameters - temporary settings to be applied, can be used to supply pixel store settings.
   */
  setSubImageData({
    target = this.target,
    pixels = null,
    data = null,
    x = 0,
    y = 0,
    width = this.width,
    height = this.height,
    level = 0,
    format = this.format,
    type = this.type,
    dataFormat = this.dataFormat,
    compressed = false,
    offset = 0,
    border = this.border,
    parameters = {}
  }) {
    ({type, dataFormat, compressed, width, height} = this._deduceParameters({
      format,
      type,
      dataFormat,
      compressed,
      data,
      width,
      height
    }));

    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(this.depth === 0, 'texSubImage not supported for 3D textures');

    // pixels variable is  for API compatibility purpose
    if (!data) {
      data = pixels;
    }

    // Support ndarrays
    if (data && data.data) {
      const ndarray = data;
      data = ndarray.data;
      width = ndarray.shape[0];
      height = ndarray.shape[1];
    }

    // Support buffers
    if (data instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      data = data.handle;
    }

    this.gl.bindTexture(this.target, this.handle);

    Object(_context__WEBPACK_IMPORTED_MODULE_4__["withParameters"])(this.gl, parameters, () => {
      // TODO - x,y parameters
      if (compressed) {
        this.gl.compressedTexSubImage2D(target, level, x, y, width, height, format, data);
      } else if (data === null) {
        this.gl.texSubImage2D(target, level, x, y, width, height, dataFormat, type, null);
      } else if (ArrayBuffer.isView(data)) {
        this.gl.texSubImage2D(target, level, x, y, width, height, dataFormat, type, data, offset);
      } else if (data instanceof _webgl_utils__WEBPACK_IMPORTED_MODULE_5__["WebGLBuffer"]) {
        // WebGL2 allows us to create texture directly from a WebGL buffer
        Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["assertWebGL2Context"])(this.gl);
        // This texImage2D signature uses currently bound GL.PIXEL_UNPACK_BUFFER
        this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PIXEL_UNPACK_BUFFER, data);
        this.gl.texSubImage2D(target, level, x, y, width, height, dataFormat, type, offset);
        this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.PIXEL_UNPACK_BUFFER, null);
      } else if (Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["isWebGL2"])(this.gl)) {
        // Assume data is a browser supported object (ImageData, Canvas, ...)
        this.gl.texSubImage2D(target, level, x, y, width, height, dataFormat, type, data);
      } else {
        this.gl.texSubImage2D(target, level, x, y, dataFormat, type, data);
      }
    });

    this.gl.bindTexture(this.target, null);
  }
  /* eslint-enable max-len, max-statements, complexity */

  /**
   * Defines a two-dimensional texture image or cube-map texture image with
   * pixels from the current framebuffer (rather than from client memory).
   * (gl.copyTexImage2D wrapper)
   *
   * Note that binding a texture into a Framebuffer's color buffer and
   * rendering can be faster.
   */
  copyFramebuffer(opts = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_6__["log"].error(
      'Texture.copyFramebuffer({...}) is no logner supported, use copyToTexture(source, target, opts})'
    )();
    return null;
  }

  getActiveUnit() {
    return this.gl.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ACTIVE_TEXTURE) - _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE0;
  }

  // target cannot be modified by bind:
  // textures are special because when you first bind them to a target,
  // they get special information. When you first bind a texture as a
  // GL_TEXTURE_2D, you are actually setting special state in the texture.
  // You are saying that this texture is a 2D texture.
  // And it will always be a 2D texture; this state cannot be changed ever.
  // If you have a texture that was first bound as a GL_TEXTURE_2D,
  // you must always bind it as a GL_TEXTURE_2D;
  // attempting to bind it as GL_TEXTURE_1D will give rise to an error
  // (while run-time).

  bind(textureUnit = this.textureUnit) {
    const {gl} = this;

    if (textureUnit !== undefined) {
      this.textureUnit = textureUnit;
      gl.activeTexture(gl.TEXTURE0 + textureUnit);
    }

    gl.bindTexture(this.target, this.handle);
    return textureUnit;
  }

  unbind(textureUnit = this.textureUnit) {
    const {gl} = this;

    if (textureUnit !== undefined) {
      this.textureUnit = textureUnit;
      gl.activeTexture(gl.TEXTURE0 + textureUnit);
    }

    gl.bindTexture(this.target, null);
    return textureUnit;
  }

  // PRIVATE METHODS

  _getDataType({data, compressed = false}) {
    if (compressed) {
      return {data, dataType: 'compressed'};
    }
    if (data === null) {
      return {data, dataType: 'null'};
    }
    if (ArrayBuffer.isView(data)) {
      return {data, dataType: 'typed-array'};
    }
    if (data instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      return {data: data.handle, dataType: 'buffer'};
    }
    if (data instanceof _webgl_utils__WEBPACK_IMPORTED_MODULE_5__["WebGLBuffer"]) {
      return {data, dataType: 'buffer'};
    }
    // Assume data is a browser supported object (ImageData, Canvas, ...)
    return {data, dataType: 'browser-object'};
  }

  /* Copied from texture-2d.js
  // WebGL2
  setPixels(opts = {}) {
    const {
      buffer,
      width = null,
      height = null,
      mipmapLevel = 0,
      format = GL.RGBA,
      type = GL.UNSIGNED_BYTE,
      border = 0
    } = opts;

    const {gl} = this;

    // This signature of texImage2D uses currently bound GL.PIXEL_UNPACK_BUFFER
    gl.bindBuffer(GL.PIXEL_UNPACK_BUFFER, buffer.target);
    // And as always, we must also bind the texture itself
    this.bind();

    gl.texImage2D(gl.TEXTURE_2D,
      mipmapLevel, format, width, height, border, format, type, buffer.target);

    this.unbind();
    gl.bindBuffer(GL.GL.PIXEL_UNPACK_BUFFER, null);
    return this;
  }

  setImageDataFromCompressedBuffer(opts) {
    const {
      buffer,
      // offset = 0,
      width = null,
      height = null,
      mipmapLevel = 0,
      internalFormat = GL.RGBA,
      // format = GL.RGBA,
      // type = GL.UNSIGNED_BYTE,
      border = 0
    } = opts;

    const {gl} = this;
    gl.compressedTexImage2D(this.target,
      mipmapLevel, internalFormat, width, height, border, buffer);
    // gl.compressedTexSubImage2D(target,
    //   level, xoffset, yoffset, width, height, format, ArrayBufferView? pixels);
    return this;
  }

  copySubImage(opts) {
    const {
      // pixels,
      // offset = 0,
      // x,
      // y,
      // width,
      // height,
      // mipmapLevel = 0,
      // internalFormat = GL.RGBA,
      // type = GL.UNSIGNED_BYTE,
      // border = 0
    } = opts;

    // if (pixels instanceof ArrayBufferView) {
    //   gl.texSubImage2D(target, level, x, y, width, height, format, type, pixels);
    // }
    // gl.texSubImage2D(target, level, x, y, format, type, ? pixels);
    // gl.texSubImage2D(target, level, x, y, format, type, HTMLImageElement pixels);
    // gl.texSubImage2D(target, level, x, y, format, type, HTMLCanvasElement pixels);
    // gl.texSubImage2D(target, level, x, y, format, type, HTMLVideoElement pixels);
    // // Additional signature in a WebGL 2 context:
    // gl.texSubImage2D(target, level, x, y, format, type, GLintptr offset);
  }
  */

  // HELPER METHODS

  _deduceParameters(opts) {
    const {format, data} = opts;
    let {width, height, dataFormat, type, compressed} = opts;

    // Deduce format and type from format
    const textureFormat = _texture_formats__WEBPACK_IMPORTED_MODULE_3__["TEXTURE_FORMATS"][format];
    dataFormat = dataFormat || (textureFormat && textureFormat.dataFormat);
    type = type || (textureFormat && textureFormat.types[0]);

    // Deduce compression from format
    compressed = compressed || (textureFormat && textureFormat.compressed);

    ({width, height} = this._deduceImageSize(data, width, height));

    return {dataFormat, type, compressed, width, height, format, data};
  }

  /* global ImageData, HTMLImageElement, HTMLCanvasElement, HTMLVideoElement */
  // eslint-disable-next-line complexity
  _deduceImageSize(data, width, height) {
    let size;

    if (typeof ImageData !== 'undefined' && data instanceof ImageData) {
      size = {width: data.width, height: data.height};
    } else if (typeof HTMLImageElement !== 'undefined' && data instanceof HTMLImageElement) {
      size = {width: data.naturalWidth, height: data.naturalHeight};
    } else if (typeof HTMLCanvasElement !== 'undefined' && data instanceof HTMLCanvasElement) {
      size = {width: data.width, height: data.height};
    } else if (typeof HTMLVideoElement !== 'undefined' && data instanceof HTMLVideoElement) {
      size = {width: data.videoWidth, height: data.videoHeight};
    } else if (!data) {
      size = {width: width >= 0 ? width : 1, height: height >= 0 ? height : 1};
    } else {
      size = {width, height};
    }

    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(size, 'Could not deduced texture size');
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(
      width === undefined || size.width === width,
      'Deduced texture width does not match supplied width'
    );
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(
      height === undefined || size.height === height,
      'Deduced texture height does not match supplied height'
    );

    return size;
  }

  // RESOURCE METHODS

  _createHandle() {
    return this.gl.createTexture();
  }

  _deleteHandle() {
    this.gl.deleteTexture(this.handle);
    this._trackDeallocatedMemory('Texture');
  }

  _getParameter(pname) {
    switch (pname) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WIDTH:
        return this.width;
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_HEIGHT:
        return this.height;
      default:
        this.gl.bindTexture(this.target, this.handle);
        const value = this.gl.getTexParameter(this.target, pname);
        this.gl.bindTexture(this.target, null);
        return value;
    }
  }

  _setParameter(pname, param) {
    this.gl.bindTexture(this.target, this.handle);

    // NOTE: Apply NPOT workaround
    param = this._getNPOTParam(pname, param);

    // Apparently there are some integer/float conversion rules that made
    // the WebGL committe expose two parameter setting functions in JavaScript.
    // For now, pick the float version for parameters specified as GLfloat.
    switch (pname) {
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MIN_LOD:
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAX_LOD:
        this.gl.texParameterf(this.handle, pname, param);
        break;

      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WIDTH:
      case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_HEIGHT:
        Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(false);
        break;

      default:
        this.gl.texParameteri(this.target, pname, param);
        break;
    }

    this.gl.bindTexture(this.target, null);
    return this;
  }

  _isNPOT() {
    return !Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_5__["isWebGL2"])(this.gl) && (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isPowerOfTwo"])(this.width) || !Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isPowerOfTwo"])(this.height));
  }

  // Update default settings which are not supported by NPOT textures.
  _updateForNPOT(parameters) {
    if (parameters[this.gl.TEXTURE_MIN_FILTER] === undefined) {
      // log.warn(`texture: ${this} is Non-Power-Of-Two, forcing TEXTURE_MIN_FILTER to LINEAR`)();
      parameters[this.gl.TEXTURE_MIN_FILTER] = this.gl.LINEAR;
    }
    if (parameters[this.gl.TEXTURE_WRAP_S] === undefined) {
      // log.warn(`texture: ${this} is Non-Power-Of-Two, forcing TEXTURE_WRAP_S to CLAMP_TO_EDGE`)();
      parameters[this.gl.TEXTURE_WRAP_S] = this.gl.CLAMP_TO_EDGE;
    }
    if (parameters[this.gl.TEXTURE_WRAP_T] === undefined) {
      // log.warn(`texture: ${this} is Non-Power-Of-Two, forcing TEXTURE_WRAP_T to CLAMP_TO_EDGE`)();
      parameters[this.gl.TEXTURE_WRAP_T] = this.gl.CLAMP_TO_EDGE;
    }
  }

  _getNPOTParam(pname, param) {
    if (this._isNPOT()) {
      switch (pname) {
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MIN_FILTER:
          if (NPOT_MIN_FILTERS.indexOf(param) === -1) {
            // log.warn(`texture: ${this} is Non-Power-Of-Two, forcing TEXTURE_MIN_FILTER to LINEAR`)();
            param = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR;
          }
          break;
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_S:
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_T:
          if (param !== _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE) {
            // log.warn(`texture: ${this} is Non-Power-Of-Two, ${getKey(this.gl, pname)} to CLAMP_TO_EDGE`)();
            param = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE;
          }
          break;
        default:
          break;
      }
    }
    return param;
  }
}


/***/ }),

/***/ "./src/classes/transform-feedback.js":
/*!*******************************************!*\
  !*** ./src/classes/transform-feedback.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransformFeedback; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer */ "./src/classes/buffer.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






// NOTE: The `bindOnUse` flag is a major workaround:
// See https://github.com/KhronosGroup/WebGL/issues/2346

class TransformFeedback extends _resource__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static isSupported(gl) {
    return Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(gl);
  }

  constructor(gl, props = {}) {
    Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["assertWebGL2Context"])(gl);
    super(gl, props);

    this.initialize(props);
    this.stubRemovedMethods('TransformFeedback', 'v6.0', ['pause', 'resume']);
    Object.seal(this);
  }

  initialize(props = {}) {
    this.buffers = {};
    this.unused = {};
    this.configuration = null;
    this.bindOnUse = true;

    // Unbind any currently bound buffers
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isObjectEmpty"])(this.buffers)) {
      this.bind(() => this._unbindBuffers());
    }

    this.setProps(props);
    return this;
  }

  setProps(props) {
    if ('program' in props) {
      this.configuration = props.program && props.program.configuration;
    }
    if ('configuration' in props) {
      this.configuration = props.configuration;
    }
    if ('bindOnUse' in props) {
      props = props.bindOnUse;
    }
    if ('buffers' in props) {
      this.setBuffers(props.buffers);
    }
  }

  setBuffers(buffers = {}) {
    this.bind(() => {
      for (const bufferName in buffers) {
        this.setBuffer(bufferName, buffers[bufferName]);
      }
    });
    return this;
  }

  setBuffer(locationOrName, bufferOrParams) {
    const location = this._getVaryingIndex(locationOrName);
    const {buffer, byteSize, byteOffset} = this._getBufferParams(bufferOrParams);

    if (location < 0) {
      this.unused[locationOrName] = buffer;
      _utils__WEBPACK_IMPORTED_MODULE_4__["log"].warn(() => `${this.id} unused varying buffer ${locationOrName}`)();
      return this;
    }

    this.buffers[location] = bufferOrParams;

    // Need to avoid chrome bug where buffer that is already bound to a different target
    // cannot be bound to 'TRANSFORM_FEEDBACK_BUFFER' target.
    if (!this.bindOnUse) {
      this._bindBuffer(location, buffer, byteOffset, byteSize);
    }

    return this;
  }

  begin(primitiveMode = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POINTS) {
    this.gl.bindTransformFeedback(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK, this.handle);
    this._bindBuffers();
    this.gl.beginTransformFeedback(primitiveMode);
    return this;
  }

  end() {
    this.gl.endTransformFeedback();
    this._unbindBuffers();
    this.gl.bindTransformFeedback(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK, null);
    return this;
  }

  // PRIVATE METHODS

  _getBufferParams(bufferOrParams) {
    let byteOffset;
    let byteSize;
    let buffer;
    if (bufferOrParams instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"] === false) {
      buffer = bufferOrParams.buffer;
      byteSize = bufferOrParams.byteSize;
      byteOffset = bufferOrParams.byteOffset;
    } else {
      buffer = bufferOrParams;
    }
    // to use bindBufferRange, either offset or size must be specified, use default value for the other.
    if (byteOffset !== undefined || byteSize !== undefined) {
      byteOffset = byteOffset || 0;
      byteSize = byteSize || buffer.byteLength - byteOffset;
    }
    return {buffer, byteOffset, byteSize};
  }

  _getVaryingInfo(locationOrName) {
    return this.configuration && this.configuration.getVaryingInfo(locationOrName);
  }

  _getVaryingIndex(locationOrName) {
    if (this.configuration) {
      return this.configuration.getVaryingInfo(locationOrName).location;
    }
    const location = Number(locationOrName);
    return Number.isFinite(location) ? location : -1;
  }

  // Need to avoid chrome bug where buffer that is already bound to a different target
  // cannot be bound to 'TRANSFORM_FEEDBACK_BUFFER' target.
  _bindBuffers() {
    if (this.bindOnUse) {
      for (const bufferIndex in this.buffers) {
        const {buffer, byteSize, byteOffset} = this._getBufferParams(this.buffers[bufferIndex]);
        this._bindBuffer(bufferIndex, buffer, byteOffset, byteSize);
      }
    }
  }

  _unbindBuffers() {
    if (this.bindOnUse) {
      for (const bufferIndex in this.buffers) {
        this._bindBuffer(bufferIndex, null);
      }
    }
  }

  _bindBuffer(index, buffer, byteOffset = 0, byteSize) {
    const handle = buffer && buffer.handle;
    if (!handle || byteSize === undefined) {
      this.gl.bindBufferBase(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK_BUFFER, index, handle);
    } else {
      this.gl.bindBufferRange(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK_BUFFER, index, handle, byteOffset, byteSize);
    }
    return this;
  }

  // RESOURCE METHODS

  _createHandle() {
    return this.gl.createTransformFeedback();
  }

  _deleteHandle() {
    this.gl.deleteTransformFeedback(this.handle);
  }

  _bindHandle(handle) {
    this.gl.bindTransformFeedback(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRANSFORM_FEEDBACK, this.handle);
  }
}


/***/ }),

/***/ "./src/classes/uniform-buffer-layout.js":
/*!**********************************************!*\
  !*** ./src/classes/uniform-buffer-layout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UniformBufferLayout; });
/* harmony import */ var _webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl-utils/attribute-utils */ "./src/webgl-utils/attribute-utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* eslint-disable camelcase */



const ERR_ARGUMENT = 'UniformBufferLayout illegal argument';

// Local constants - these will "collapse" during minification
const GL_FLOAT = 0x1406;
const GL_INT = 0x1404;
const GL_UNSIGNED_INT = 0x1405;

// Std140 layout for uniforms
class UniformBufferLayout {
  constructor(layout) {
    this.layout = {};
    this.size = 0;

    // Add layout (type, size and offset) definitions for each uniform in the layout
    for (const key in layout) {
      this._addUniform(key, layout[key]);
    }

    this.size += (4 - (this.size % 4)) % 4;

    // Allocate three typed arrays pointing at same memory
    const data = new Float32Array(this.size);
    this.typedArray = {
      [GL_FLOAT]: data,
      [GL_INT]: new Int32Array(data.buffer),
      [GL_UNSIGNED_INT]: new Uint32Array(data.buffer)
    };
  }

  // Get number of bytes needed for buffer allocation
  getBytes() {
    return this.size * 4;
  }

  // Get the current data as Float32Array, for bufferSubData
  getData() {
    return this.typedArray[GL_FLOAT];
  }

  // Get offset and data for one object (for bufferSubData)
  getSubData(index) {
    let data;
    let offset;
    if (index === undefined) {
      data = this.data;
      offset = 0;
    } else {
      const begin = this.offsets[index];
      const end = begin + this.sizes[index];
      data = this.data.subarray(begin, end);
      offset = begin * 4;
    }
    return {data, offset};
  }

  // Set a map of values
  setUniforms(values) {
    for (const key in values) {
      this._setValue(key, values[key]);
    }
    return this;
  }

  _setValue(key, value) {
    const layout = this.layout[key];
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(layout, 'UniformLayoutStd140 illegal argument');
    const typedArray = this.typedArray[layout.type];
    if (layout.size === 1) {
      // single value -> just set it
      typedArray[layout.offset] = value;
    } else {
      // vector/matrix -> copy the supplied (typed) array, starting from offset
      typedArray.set(value, layout.offset);
    }
  }

  _addUniform(key, uniformType) {
    const typeAndComponents = Object(_webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_0__["decomposeCompositeGLType"])(uniformType);
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(typeAndComponents, ERR_ARGUMENT);
    const {type, components: count} = typeAndComponents;

    // First, align (bump) current offset to an even multiple of current object (1, 2, 4)
    this.size = this._alignTo(this.size, count);
    // Use the aligned size as the offset of the current uniform.
    const offset = this.size;
    // Then, add our object's padded size ((1, 2, multiple of 4) to the current offset
    this.size += count;

    this.layout[key] = {type, size: count, offset};
  }

  // Align offset to 1, 2 or 4 elements (4, 8 or 16 bytes)
  _alignTo(size, count) {
    switch (count) {
      case 1:
        return size; // Pad upwards to even multiple of 2
      case 2:
        return size + (size % 2); // Pad upwards to even multiple of 2
      default:
        return size + ((4 - (size % 4)) % 4); // Pad upwards to even multiple of 4
    }
  }
}


/***/ }),

/***/ "./src/classes/uniforms.js":
/*!*********************************!*\
  !*** ./src/classes/uniforms.js ***!
  \*********************************/
/*! exports provided: parseUniformName, getUniformSetter, checkUniformValues, areUniformsEqual, getUniformCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUniformName", function() { return parseUniformName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniformSetter", function() { return getUniformSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUniformValues", function() { return checkUniformValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areUniformsEqual", function() { return areUniformsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniformCopy", function() { return getUniformCopy; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framebuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framebuffer */ "./src/classes/framebuffer.js");
/* harmony import */ var _renderbuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderbuffer */ "./src/classes/renderbuffer.js");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture */ "./src/classes/texture.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






const UNIFORM_SETTERS = {
  // WEBGL1

  /* eslint-disable max-len */
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT]: (gl, location, value) => gl.uniform1fv(location, toFloatArray(value, 1)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_VEC2]: (gl, location, value) => gl.uniform2fv(location, toFloatArray(value, 2)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_VEC3]: (gl, location, value) => gl.uniform3fv(location, toFloatArray(value, 3)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_VEC4]: (gl, location, value) => gl.uniform4fv(location, toFloatArray(value, 4)),

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT]: (gl, location, value) => gl.uniform1iv(location, toIntArray(value, 1)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT_VEC2]: (gl, location, value) => gl.uniform2iv(location, toIntArray(value, 2)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT_VEC3]: (gl, location, value) => gl.uniform3iv(location, toIntArray(value, 3)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT_VEC4]: (gl, location, value) => gl.uniform4iv(location, toIntArray(value, 4)),

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BOOL]: (gl, location, value) => gl.uniform1iv(location, toIntArray(value, 1)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BOOL_VEC2]: (gl, location, value) => gl.uniform2iv(location, toIntArray(value, 2)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BOOL_VEC3]: (gl, location, value) => gl.uniform3iv(location, toIntArray(value, 3)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BOOL_VEC4]: (gl, location, value) => gl.uniform4iv(location, toIntArray(value, 4)),

  // uniformMatrix(false): don't transpose the matrix
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT2]: (gl, location, value) =>
    gl.uniformMatrix2fv(location, false, toFloatArray(value, 4)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT3]: (gl, location, value) =>
    gl.uniformMatrix3fv(location, false, toFloatArray(value, 9)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT4]: (gl, location, value) =>
    gl.uniformMatrix4fv(location, false, toFloatArray(value, 16)),

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLER_2D]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLER_CUBE]: (gl, location, value) => gl.uniform1i(location, value),

  // WEBGL2 - unsigned integers, irregular matrices, additional texture samplers

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT]: (gl, location, value) => gl.uniform1uiv(location, toUIntArray(value, 1)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT_VEC2]: (gl, location, value) => gl.uniform2uiv(location, toUIntArray(value, 2)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT_VEC3]: (gl, location, value) => gl.uniform3uiv(location, toUIntArray(value, 3)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT_VEC4]: (gl, location, value) => gl.uniform4uiv(location, toUIntArray(value, 4)),

  // uniformMatrix(false): don't transpose the matrix
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT2x3]: (gl, location, value) =>
    gl.uniformMatrix2x3fv(location, false, toFloatArray(value, 6)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT2x4]: (gl, location, value) =>
    gl.uniformMatrix2x4fv(location, false, toFloatArray(value, 8)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT3x2]: (gl, location, value) =>
    gl.uniformMatrix3x2fv(location, false, toFloatArray(value, 6)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT3x4]: (gl, location, value) =>
    gl.uniformMatrix3x4fv(location, false, toFloatArray(value, 12)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT4x2]: (gl, location, value) =>
    gl.uniformMatrix4x2fv(location, false, toFloatArray(value, 8)),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT_MAT4x3]: (gl, location, value) =>
    gl.uniformMatrix4x3fv(location, false, toFloatArray(value, 12)),

  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLER_3D]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLER_2D_SHADOW]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLER_2D_ARRAY]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLER_2D_ARRAY_SHADOW]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SAMPLER_CUBE_SHADOW]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT_SAMPLER_2D]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT_SAMPLER_3D]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT_SAMPLER_CUBE]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT_SAMPLER_2D_ARRAY]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT_SAMPLER_2D]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT_SAMPLER_3D]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT_SAMPLER_CUBE]: (gl, location, value) => gl.uniform1i(location, value),
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT_SAMPLER_2D_ARRAY]: (gl, location, value) => gl.uniform1i(location, value)
  /* eslint-enable max-len */
};

// Pre-allocated typed arrays for temporary conversion
const FLOAT_ARRAY = {};
const INT_ARRAY = {};
const UINT_ARRAY = {};

const array1 = [0];

// Functions to ensure the type of uniform values
// TODO - Why is this necessary? The uniform*v funtions can consume Arrays
function toTypedArray(value, uniformLength, Type, cache) {
  // convert boolean uniforms to Number
  if (uniformLength === 1 && typeof value === 'boolean') {
    value = value ? 1 : 0;
  }
  if (Number.isFinite(value)) {
    array1[0] = value;
    value = array1;
  }
  const length = value.length;
  if (length % uniformLength) {
    _utils__WEBPACK_IMPORTED_MODULE_4__["log"].warn(`Uniform size should be multiples of ${uniformLength}`, value)();
  }

  if (value instanceof Type) {
    return value;
  }
  let result = cache[length];
  if (!result) {
    result = new Type(length);
    cache[length] = result;
  }
  for (let i = 0; i < length; i++) {
    result[i] = value[i];
  }
  return result;
}

function toFloatArray(value, uniformLength) {
  return toTypedArray(value, uniformLength, Float32Array, FLOAT_ARRAY);
}

function toIntArray(value, uniformLength) {
  return toTypedArray(value, uniformLength, Int32Array, INT_ARRAY);
}

function toUIntArray(value, uniformLength) {
  return toTypedArray(value, uniformLength, Uint32Array, UINT_ARRAY);
}

function parseUniformName(name) {
  // Shortcut to avoid redundant or bad matches
  if (name[name.length - 1] !== ']') {
    return {
      name,
      length: 1,
      isArray: false
    };
  }

  // if array name then clean the array brackets
  const UNIFORM_NAME_REGEXP = /([^[]*)(\[[0-9]+\])?/;
  const matches = name.match(UNIFORM_NAME_REGEXP);
  if (!matches || matches.length < 2) {
    throw new Error(`Failed to parse GLSL uniform name ${name}`);
  }

  return {
    name: matches[1],
    length: matches[2] || 1,
    isArray: Boolean(matches[2])
  };
}

// Returns a Magic Uniform Setter
/* eslint-disable complexity */
function getUniformSetter(gl, location, info) {
  const setter = UNIFORM_SETTERS[info.type];
  if (!setter) {
    throw new Error(`Unknown GLSL uniform type ${info.type}`);
  }
  return setter.bind(null, gl, location);
}

// Basic checks of uniform values (with or without knowledge of program)
// To facilitate early detection of e.g. undefined values in JavaScript
function checkUniformValues(uniforms, source, uniformMap) {
  for (const uniformName in uniforms) {
    const value = uniforms[uniformName];
    const shouldCheck = !uniformMap || Boolean(uniformMap[uniformName]);
    if (shouldCheck && !checkUniformValue(value)) {
      // Add space to source
      source = source ? `${source} ` : '';
      // Value could be unprintable so write the object on console
      console.error(`${source} Bad uniform ${uniformName}`, value); // eslint-disable-line
      /* eslint-enable no-console */
      throw new Error(`${source} Bad uniform ${uniformName}`);
    }
  }
  return true;
}

// TODO use type information during validation
function checkUniformValue(value) {
  if (Array.isArray(value) || ArrayBuffer.isView(value)) {
    return checkUniformArray(value);
  }

  // Check if single value is a number
  if (isFinite(value)) {
    return true;
  } else if (value === true || value === false) {
    return true;
  } else if (value instanceof _texture__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    return true;
  } else if (value instanceof _renderbuffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    return true;
  } else if (value instanceof _framebuffer__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    return Boolean(value.texture);
  }
  return false;
}

function checkUniformArray(value) {
  // Check that every element in array is a number, and at least 1 element
  if (value.length === 0) {
    return false;
  }

  const checkLength = Math.min(value.length, 16);

  for (let i = 0; i < checkLength; ++i) {
    if (!Number.isFinite(value[i])) {
      return false;
    }
  }

  return true;
}

/**
 * Given two values of a uniform, returns `true` if they are equal
 */
function areUniformsEqual(uniform1, uniform2) {
  if (Array.isArray(uniform1) || ArrayBuffer.isView(uniform1)) {
    if (!uniform2) {
      return false;
    }
    const len = uniform1.length;
    if (uniform2.length !== len) {
      return false;
    }
    for (let i = 0; i < len; i++) {
      if (uniform1[i] !== uniform2[i]) {
        return false;
      }
    }
    return true;
  }
  return uniform1 === uniform2;
}

/**
 * Creates a copy of the uniform
 */
function getUniformCopy(uniform) {
  if (Array.isArray(uniform) || ArrayBuffer.isView(uniform)) {
    return uniform.slice();
  }
  return uniform;
}


/***/ }),

/***/ "./src/classes/vertex-array-object.js":
/*!********************************************!*\
  !*** ./src/classes/vertex-array-object.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VertexArrayObject; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource */ "./src/classes/resource.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer */ "./src/classes/buffer.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils_array_utils_flat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/array-utils-flat */ "./src/utils/array-utils-flat.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var probe_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! probe.gl */ "../../node_modules/probe.gl/dist/esm/index.js");








/* eslint-disable camelcase */
const OES_vertex_array_object = 'OES_vertex_array_object';

const ERR_ELEMENTS = 'elements must be GL.ELEMENT_ARRAY_BUFFER';

class VertexArrayObject extends _resource__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static isSupported(gl, options = {}) {
    // Attribute 0 can not be disable on most desktop OpenGL based browsers
    // and on iOS Safari browser.
    if (options.constantAttributeZero) {
      return Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(gl) || Object(probe_gl__WEBPACK_IMPORTED_MODULE_6__["getBrowser"])() === 'Chrome';
    }

    // Whether additional objects can be created
    return Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(gl) || gl.getExtension(OES_vertex_array_object);
  }

  // Returns the global (null) vertex array object. Exists even when no extension available
  static getDefaultArray(gl) {
    gl.luma = gl.luma || {};
    if (!gl.luma.defaultVertexArray) {
      gl.luma.defaultVertexArray = new VertexArrayObject(gl, {handle: null});
    }
    return gl.luma.defaultVertexArray;
  }

  static getMaxAttributes(gl) {
    // TODO - should be cached per context
    VertexArrayObject.MAX_ATTRIBUTES =
      VertexArrayObject.MAX_ATTRIBUTES || gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
    return VertexArrayObject.MAX_ATTRIBUTES;
  }

  // Note: Constants are stored globally on the WebGL context, not the VAO
  // So they need to be updated before every render
  // TODO - use known type (in configuration or passed in) to allow non-typed arrays?
  // TODO - remember/cache values to avoid setting them unnecessarily?
  static setConstant(gl, location, array) {
    switch (array.constructor) {
      case Float32Array:
        VertexArrayObject._setConstantFloatArray(gl, location, array);
        break;
      case Int32Array:
        VertexArrayObject._setConstantIntArray(gl, location, array);
        break;
      case Uint32Array:
        VertexArrayObject._setConstantUintArray(gl, location, array);
        break;
      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(false);
    }
  }

  // Create a VertexArray
  constructor(gl, opts = {}) {
    // Use program's id if program but no id is supplied
    const id = opts.id || (opts.program && opts.program.id);
    super(gl, Object.assign({}, opts, {id}));

    this.hasVertexArrays = VertexArrayObject.isSupported(gl);
    this.buffer = null;
    this.bufferValue = null;

    this.initialize(opts);

    Object.seal(this);
  }

  delete() {
    super.delete();
    if (this.buffer) {
      this.buffer.delete();
    }
  }

  get MAX_ATTRIBUTES() {
    return VertexArrayObject.getMaxAttributes(this.gl);
  }

  initialize(props = {}) {
    return this.setProps(props);
  }

  setProps(props) {
    // TODO: decide which props should be supported
    return this;
  }

  // Set (bind) an elements buffer, for indexed rendering.
  // Must be a Buffer bound to GL.ELEMENT_ARRAY_BUFFER. Constants not supported
  setElementBuffer(elementBuffer = null, opts = {}) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(!elementBuffer || elementBuffer.target === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ELEMENT_ARRAY_BUFFER, ERR_ELEMENTS);

    // The GL.ELEMENT_ARRAY_BUFFER_BINDING is stored on the VertexArrayObject...
    this.bind(() => {
      this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ELEMENT_ARRAY_BUFFER, elementBuffer ? elementBuffer.handle : null);
    });

    return this;
  }

  // Set a location in vertex attributes array to a bufferk, enables the location, sets divisor
  setBuffer(location, buffer, accessor) {
    // Check target
    if (buffer.target === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ELEMENT_ARRAY_BUFFER) {
      return this.setElementBuffer(buffer, accessor);
    }

    const {size, type, stride, offset, normalized, integer, divisor} = accessor;

    const {gl} = this;
    location = Number(location);

    this.bind(() => {
      // A non-zero buffer object must be bound to the GL_ARRAY_BUFFER target
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer.handle);

      // WebGL2 supports *integer* data formats, i.e. GPU will see integer values
      if (integer) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(gl));
        gl.vertexAttribIPointer(location, size, type, stride, offset);
      } else {
        // Attaches ARRAY_BUFFER with specified buffer format to location
        gl.vertexAttribPointer(location, size, type, normalized, stride, offset);
      }
      gl.enableVertexAttribArray(location);
      gl.vertexAttribDivisor(location, divisor || 0);

      // NOTE We don't unbind buffer here, typically another buffer will be bound just after
    });

    return this;
  }

  // Enabling an attribute location makes it reference the currently bound buffer
  // Disabling an attribute location makes it reference the global constant value
  // TODO - handle single values for size 1 attributes?
  // TODO - convert classic arrays based on known type?
  enable(location, enable = true) {
    // Attribute 0 cannot be disabled in most desktop OpenGL based browsers
    const disablingAttributeZero =
      !enable &&
      location === 0 &&
      !VertexArrayObject.isSupported(this.gl, {constantAttributeZero: true});

    if (!disablingAttributeZero) {
      location = Number(location);
      this.bind(
        () =>
          enable
            ? this.gl.enableVertexAttribArray(location)
            : this.gl.disableVertexAttribArray(location)
      );
    }
    return this;
  }

  // Provide a means to create a buffer that is equivalent to a constant.
  // NOTE: Desktop OpenGL cannot disable attribute 0.
  // https://stackoverflow.com/questions/20305231/webgl-warning-attribute-0-is-disabled-
  // this-has-significant-performance-penalt
  getConstantBuffer(elementCount, value, accessor) {
    // Create buffer only when needed, and reuse it (avoids inflating buffer creation statistics)

    const constantValue = this._normalizeConstantArrayValue(value, accessor);

    const byteLength = constantValue.byteLength * elementCount;
    const length = constantValue.length * elementCount;

    let updateNeeded = !this.buffer;

    this.buffer = this.buffer || new _buffer__WEBPACK_IMPORTED_MODULE_2__["default"](this.gl, byteLength);
    updateNeeded = updateNeeded || this.buffer.reallocate(byteLength);

    // Reallocate and update contents if needed
    updateNeeded =
      updateNeeded || !this._compareConstantArrayValues(constantValue, this.bufferValue);

    if (updateNeeded) {
      // Create a typed array that is big enough, and fill it with the required data
      const typedArray = Object(_utils_array_utils_flat__WEBPACK_IMPORTED_MODULE_4__["getScratchArray"])(value.constructor, length);
      Object(_utils_array_utils_flat__WEBPACK_IMPORTED_MODULE_4__["fillArray"])({target: typedArray, source: constantValue, start: 0, count: length});
      this.buffer.subData(typedArray);
      this.bufferValue = value;
    }

    return this.buffer;
  }

  // PRIVATE

  // TODO - convert Arrays based on known type? (read type from accessor, don't assume Float32Array)
  // TODO - handle single values for size 1 attributes?
  _normalizeConstantArrayValue(arrayValue, accessor) {
    if (Array.isArray(arrayValue)) {
      return new Float32Array(arrayValue);
    }
    return arrayValue;
  }

  _compareConstantArrayValues(v1, v2) {
    if (!v1 || !v2 || v1.length !== v2.length || v1.constructor !== v2.constructor) {
      return false;
    }
    for (let i = 0; i < v1.length; ++i) {
      if (v1[i] !== v2[i]) {
        return false;
      }
    }
    return true;
  }

  static _setConstantFloatArray(gl, location, array) {
    switch (array.length) {
      case 1:
        gl.vertexAttrib1fv(location, array);
        break;
      case 2:
        gl.vertexAttrib2fv(location, array);
        break;
      case 3:
        gl.vertexAttrib3fv(location, array);
        break;
      case 4:
        gl.vertexAttrib4fv(location, array);
        break;
      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(false);
    }
  }

  static _setConstantIntArray(gl, location, array) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(gl));
    switch (array.length) {
      case 1:
        gl.vertexAttribI1iv(location, array);
        break;
      case 2:
        gl.vertexAttribI2iv(location, array);
        break;
      case 3:
        gl.vertexAttribI3iv(location, array);
        break;
      case 4:
        gl.vertexAttribI4iv(location, array);
        break;
      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(false);
    }
  }

  static _setConstantUintArray(gl, location, array) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_3__["isWebGL2"])(gl));
    switch (array.length) {
      case 1:
        gl.vertexAttribI1uiv(location, array);
        break;
      case 2:
        gl.vertexAttribI2uiv(location, array);
        break;
      case 3:
        gl.vertexAttribI3uiv(location, array);
        break;
      case 4:
        gl.vertexAttribI4uiv(location, array);
        break;
      default:
        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(false);
    }
  }

  // RESOURCE IMPLEMENTATION

  _createHandle() {
    this.hasVertexArrays = VertexArrayObject.isSupported(this.gl);
    if (this.hasVertexArrays) {
      return this.gl.createVertexArray();
    }
    return null;
  }

  _deleteHandle(handle) {
    if (this.hasVertexArrays) {
      this.gl.deleteVertexArray(handle);
    }
    return [this.elements];
    // return [this.elements, ...this.buffers];
  }

  _bindHandle(handle) {
    if (this.hasVertexArrays) {
      this.gl.bindVertexArray(handle);
    }
  }

  // Generic getter for information about a vertex attribute at a given position
  _getParameter(pname, {location}) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(Number.isFinite(location));
    return this.bind(() => {
      switch (pname) {
        case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERTEX_ATTRIB_ARRAY_POINTER:
          return this.gl.getVertexAttribOffset(location, pname);
        default:
          return this.gl.getVertexAttrib(location, pname);
      }
    });
  }

  // DEPRECATED

  /*
  setDivisor(location, divisor) {
    location = Number(location);
    this.bind(() => this.gl.vertexAttribDivisor(location, divisor));
    return this;
  }

  // match assumed WebGL defaults
  static resetConstants(gl) {
    const MAX_ATTRIBUTES = VertexArrayObject.getMaxAttributes(gl);
    for (let i = 0; i < MAX_ATTRIBUTES; i++) {
      VertexArrayObject.setConstant(gl, i, [0, 0, 0, 1]);
    }
  }

  // Resets all attributes (to default valued constants)
  resetAttributes() {
    // WebGL offers disabling, but no clear way to set a VertexArray buffer to `null`
    // But Chrome does not like buffers that are bound to several binding points.
    // So we just bind all the attributes to the dummy "attribute zero" buffer
    this.buffer = this.buffer || new Buffer(this.gl, {size: 4});

    for (const location in this.values) {
      if (this.values[location] instanceof Buffer) {
        this.gl.disableVertexAttribArray(location);
        this.gl.bindBuffer(GL.ARRAY_BUFFER, this.buffer.handle);
        this.gl.vertexAttribPointer(location, 1, GL.FLOAT, false, 0, 0);
      }
    }

    this.setElementBuffer(null);
    return this;
  }
  */
}


/***/ }),

/***/ "./src/classes/vertex-array.js":
/*!*************************************!*\
  !*** ./src/classes/vertex-array.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VertexArray; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessor */ "./src/classes/accessor.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer */ "./src/classes/buffer.js");
/* harmony import */ var _vertex_array_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vertex-array-object */ "./src/classes/vertex-array-object.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






const ERR_ATTRIBUTE_TYPE =
  'VertexArray: attributes must be Buffers or constants (i.e. typed array)';

// This is done to support mat type attributes.
// See section "Notes about setting mat type attributes"
// in vertex-array.md
const MULTI_LOCATION_ATTRIBUTE_REGEXP = /^(.+)__LOCATION_([0-9]+)$/;

const DEPRECATIONS_V6 = [
  'setBuffers',
  'setGeneric',
  'clearBindings',
  'setLocations',
  'setGenericValues',
  'setDivisor',
  'enable',
  'disable'
];

class VertexArray {
  constructor(gl, opts = {}) {
    // Use program's id if program is supplied but no id is supplied
    const id = opts.id || (opts.program && opts.program.id);
    // super(gl, Object.assign({}, opts, {id}));

    this.id = id;
    this.gl = gl;
    this.configuration = null;

    // Extracted information
    this.elements = null;
    this.elementsAccessor = null;
    this.values = null;
    this.accessors = null;
    this.unused = null;
    this.drawParams = null;
    this.buffer = null; // For attribute 0 on desktops, and created when unbinding buffers

    this.vertexArrayObject = _vertex_array_object__WEBPACK_IMPORTED_MODULE_3__["default"].isSupported(gl)
      ? new _vertex_array_object__WEBPACK_IMPORTED_MODULE_3__["default"](gl)
      : _vertex_array_object__WEBPACK_IMPORTED_MODULE_3__["default"].getDefaultArray(gl);

    // Issue errors when using removed methods
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["stubRemovedMethods"])(this, 'VertexArray', 'v6.0', DEPRECATIONS_V6);

    this.initialize(opts);
    Object.seal(this);
  }

  delete() {
    if (this.buffer) {
      this.buffer.delete();
    }
  }

  initialize(props = {}) {
    this.reset();
    this.configuration = null;
    this.bindOnUse = false;
    return this.setProps(props);
  }

  // Resets all attributes (to default valued constants)
  reset() {
    // this.vertexArrayObject.reset();

    this.elements = null;
    this.elementsAccessor = null;
    const {MAX_ATTRIBUTES} = this.vertexArrayObject;
    this.values = new Array(MAX_ATTRIBUTES).fill(null);
    this.accessors = new Array(MAX_ATTRIBUTES).fill(null);
    this.unused = {};

    // Auto detects draw params
    this.drawParams = null;

    return this;
  }

  setProps(props) {
    if ('program' in props) {
      this.configuration = props.program && props.program.configuration;
    }
    if ('configuration' in props) {
      this.configuration = props.configuration;
    }
    if ('attributes' in props) {
      this.setAttributes(props.attributes);
    }
    if ('elements' in props) {
      this.setElementBuffer(props.elements);
    }
    if ('bindOnUse' in props) {
      props = props.bindOnUse;
    }
    return this;
  }

  // Automatically called if buffers changed through VertexArray API
  clearDrawParams() {
    this.drawParams = null;
  }

  getDrawParams(appParameters) {
    // Auto deduced draw parameters
    this.drawParams = this.drawParams || this._updateDrawParams();

    // Override with any application supplied draw parameters
    return Object.assign({}, this.drawParams, appParameters);
  }

  // Set (bind) an array or map of vertex array buffers, either in numbered or named locations.
  // For names that are not present in `location`, the supplied buffers will be ignored.
  // if a single buffer of type GL.ELEMENT_ARRAY_BUFFER is present, it will be set as elements
  //   Signatures:
  //     {attributeName: buffer}
  //     {attributeName: [buffer, accessor]}
  //     {attributeName: (typed) array} => constant
  setAttributes(attributes) {
    this.vertexArrayObject.bind(() => {
      for (const locationOrName in attributes) {
        const value = attributes[locationOrName];
        this._setAttribute(locationOrName, value);
      }
      // Make sure we don't leave any bindings
      this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ARRAY_BUFFER, null);
    });

    return this;
  }

  // Set (bind) an elements buffer, for indexed rendering.
  // Must be a Buffer bound to GL.ELEMENT_ARRAY_BUFFER. Constants not supported
  setElementBuffer(elementBuffer = null, accessor = {}) {
    this.elements = elementBuffer; // Save value for debugging
    this.elementsAccessor = accessor;
    this.clearDrawParams();

    // Update vertexArray immediately if we have our own array
    if (!this.vertexArrayObject.isDefaultArray) {
      this.vertexArrayObject.setElementBuffer(elementBuffer, accessor);
    }
    return this;
  }

  // Set a location in vertex attributes array to a buffer
  setBuffer(locationOrName, buffer, appAccessor = {}) {
    // Check target
    if (buffer.target === _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ELEMENT_ARRAY_BUFFER) {
      return this.setElementBuffer(buffer, appAccessor);
    }

    const {location, accessor} = this._resolveLocationAndAccessor(
      locationOrName,
      buffer,
      buffer.accessor,
      appAccessor
    );

    if (location >= 0) {
      this.values[location] = buffer;
      this.accessors[location] = accessor;
      this.clearDrawParams();

      // Update vertexArray immediately if we have our own array
      if (!this.vertexArrayObject.isDefaultArray) {
        this.vertexArrayObject.setBuffer(location, buffer, accessor);
      }
    }

    return this;
  }

  // Set attribute to constant value (small typed array corresponding to one vertex' worth of data)
  setConstant(locationOrName, arrayValue, appAccessor = {}) {
    const {location, accessor} = this._resolveLocationAndAccessor(
      locationOrName,
      arrayValue,
      appAccessor
    );

    if (location >= 0) {
      arrayValue = this.vertexArrayObject._normalizeConstantArrayValue(arrayValue, accessor);

      this.values[location] = arrayValue;
      this.accessors[location] = accessor;
      this.clearDrawParams();

      // Update vertexArray immediately if we have our own array
      // NOTE: We set the actual constant value later on bind. We can't set the value now since
      // constants are global and affect all other VertexArrays that have disabled attributes
      // in the same location.
      // We do disable the attribute which makes it use the global constant value at that location
      if (!this.vertexArrayObject.isDefaultArray) {
        this.vertexArrayObject.enable(location, false);
      }
    }

    return this;
  }

  // Workaround for Chrome TransformFeedback binding issue
  // If required, unbind temporarily to avoid conflicting with TransformFeedback
  unbindBuffers() {
    this.vertexArrayObject.bind(() => {
      if (this.elements) {
        this.setElementBuffer(null);
      }

      // Chrome does not like buffers that are bound to several binding points,
      // so we need to offer and unbind facility
      // WebGL offers disabling, but no clear way to set a VertexArray buffer to `null`
      // So we just bind all the attributes to the dummy "attribute zero" buffer
      this.buffer = this.buffer || new _buffer__WEBPACK_IMPORTED_MODULE_2__["default"](this.gl, {size: 4});

      for (let location = 0; location < this.vertexArrayObject.MAX_ATTRIBUTES; location++) {
        if (this.values[location] instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          this.gl.disableVertexAttribArray(location);
          this.gl.bindBuffer(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ARRAY_BUFFER, this.buffer.handle);
          this.gl.vertexAttribPointer(location, 1, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT, false, 0, 0);
        }
      }
    });
    return this;
  }

  // Workaround for Chrome TransformFeedback binding issue
  // If required, rebind rebind after temporary unbind
  bindBuffers() {
    this.vertexArrayObject.bind(() => {
      if (this.elements) {
        this.setElementBuffer(this.elements);
      }

      for (let location = 0; location < this.vertexArrayObject.MAX_ATTRIBUTES; location++) {
        const buffer = this.values[location];
        if (buffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          this.setBuffer(location, buffer);
        }
      }
    });
    return this;
  }

  // Bind for use
  // When a vertex array is about to be used, we must:
  // - Set constant attributes (since these are stored on the context and reset on bind)
  // - Check if we need to initialize the buffer
  bindForDraw(vertexCount, instanceCount, func) {
    let value;

    this.vertexArrayObject.bind(() => {
      // Make sure that any constant attributes are updated (stored on the context, not the VAO)
      // Also handles attribute 0
      this._setConstantAttributes(vertexCount, instanceCount);

      if (!this.vertexArrayObject.hasVertexArrays) {
        this.bindBuffers();
      }

      value = func();

      if (!this.vertexArrayObject.hasVertexArrays) {
        this.unbindBuffers();
      }
    });

    return value;
  }

  // PRIVATE

  // Resolve locations and accessors
  _resolveLocationAndAccessor(locationOrName, value, valueAccessor, appAccessor) {
    const {location, name} = this._getAttributeIndex(locationOrName);
    if (!Number.isFinite(location) || location < 0) {
      this.unused[locationOrName] = value;
      _utils__WEBPACK_IMPORTED_MODULE_4__["log"].once(3, () => `unused value ${locationOrName} in ${this.id}`)();
      return this;
    }

    const accessInfo = this._getAttributeInfo(name || location);

    // Attribute location wasn't directly found.
    // Likely due to multi-location attributes (e.g. matrix)
    if (!accessInfo) {
      return {
        location: -1,
        accessor: null
      };
    }

    // Resolve the partial accessors into a final accessor
    const accessor = _accessor__WEBPACK_IMPORTED_MODULE_1__["default"].resolve(accessInfo.accessor, valueAccessor, appAccessor);

    const {size, type} = accessor;
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["assert"])(Number.isFinite(size) && Number.isFinite(type));

    return {location, accessor};
  }

  _getAttributeInfo(attributeName) {
    return this.configuration && this.configuration.getAttributeInfo(attributeName);
  }

  _getAttributeIndex(locationOrName) {
    const location = Number(locationOrName);
    if (Number.isFinite(location)) {
      return {location};
    }

    const multiLocation = MULTI_LOCATION_ATTRIBUTE_REGEXP.exec(locationOrName);
    const name = multiLocation ? multiLocation[1] : locationOrName;
    const locationOffset = multiLocation ? Number(multiLocation[2]) : 0;

    if (this.configuration) {
      return {
        location: this.configuration.getAttributeLocation(name) + locationOffset,
        name
      };
    }

    return {location: -1};
  }

  _setAttribute(locationOrName, value) {
    if (value instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      //  Signature: {attributeName: Buffer}
      this.setBuffer(locationOrName, value);
    } else if (Array.isArray(value) && value.length && value[0] instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      // Signature: {attributeName: [buffer, accessor]}
      const buffer = value[0];
      const accessor = value[1];
      this.setBuffer(locationOrName, buffer, accessor);
    } else if (ArrayBuffer.isView(value) || Array.isArray(value)) {
      // Signature: {attributeName: constant}, constant == short (typed) array
      const constant = value;
      this.setConstant(locationOrName, constant);
    } else if (value.buffer instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      // luma.gl v7: Support accessor objects with 'buffer' field
      // for interleaved data
      // Signature: {attributeName: {...accessor, buffer}}
      const accessor = value;
      this.setBuffer(locationOrName, accessor.buffer, accessor);
    } else {
      throw new Error(ERR_ATTRIBUTE_TYPE);
    }
  }

  // Updates all constant attribute values (constants are used when vertex attributes are disabled).
  // This needs to be done repeatedly since in contrast to buffer bindings,
  // constants are stored on the WebGL context, not the VAO
  _setConstantAttributes(vertexCount, instanceCount) {
    // TODO - use accessor to determine what length to use
    const elementCount = Math.max(vertexCount | 0, instanceCount | 0);
    let constant = this.values[0];
    if (ArrayBuffer.isView(constant)) {
      this._setConstantAttributeZero(constant, elementCount);
    }

    for (let location = 1; location < this.vertexArrayObject.MAX_ATTRIBUTES; location++) {
      constant = this.values[location];
      if (ArrayBuffer.isView(constant)) {
        this._setConstantAttribute(location, constant);
      }
    }
  }

  _setConstantAttributeZero(constant, elementCount) {
    if (_vertex_array_object__WEBPACK_IMPORTED_MODULE_3__["default"].isSupported(this.gl, {constantAttributeZero: true})) {
      this._setConstantAttribute(0, constant);
      return;
    }

    // Get a dummy buffer populated with repeated constants
    const buffer = this.vertexArrayObject.getConstantBuffer(elementCount, constant);

    // Set the buffer on location 0
    this.vertexArrayObject.setBuffer(0, buffer, this.accessors[0]);
  }

  _setConstantAttribute(location, constant) {
    _vertex_array_object__WEBPACK_IMPORTED_MODULE_3__["default"].setConstant(this.gl, location, constant);

    // If we are using the global VertexArrayObject, we need to disable the attribute now
    if (this.vertexArrayObject.isDefault) {
      this.vertexArrayObject.enable(location, false);
    }
  }

  // Walks the buffers and updates draw parameters
  _updateDrawParams() {
    const drawParams = {
      isIndexed: false,
      isInstanced: false,
      indexCount: Infinity,
      vertexCount: Infinity,
      instanceCount: Infinity
    };

    for (let location = 0; location < this.vertexArrayObject.MAX_ATTRIBUTES; location++) {
      this._updateDrawParamsForLocation(drawParams, location);
    }

    if (this.elements) {
      // indexing is autodetected - buffer with target GL.ELEMENT_ARRAY_BUFFER
      // index type is saved for drawElement calls
      drawParams.elementCount = this.elements.getElementCount(this.elements.accessor);
      drawParams.isIndexed = true;
      drawParams.indexType = this.elementsAccessor.type || this.elements.accessor.type;
      drawParams.indexOffset = this.elementsAccessor.offset || 0;
    }

    // Post-calculation checks
    if (drawParams.indexCount === Infinity) {
      drawParams.indexCount = 0;
    }
    if (drawParams.vertexCount === Infinity) {
      drawParams.vertexCount = 0;
    }
    if (drawParams.instanceCount === Infinity) {
      drawParams.instanceCount = 0;
    }

    return drawParams;
  }

  _updateDrawParamsForLocation(drawParams, location) {
    const value = this.values[location];
    const accessor = this.accessors[location];

    if (!value) {
      return;
    }

    // Check if instanced (whether buffer or constant)
    const {divisor} = accessor;
    const isInstanced = divisor > 0;
    drawParams.isInstanced = drawParams.isInstanced || isInstanced;

    if (value instanceof _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      const buffer = value;

      if (isInstanced) {
        // instance attribute
        const instanceCount = buffer.getVertexCount(accessor);
        drawParams.instanceCount = Math.min(drawParams.instanceCount, instanceCount);
      } else {
        // normal attribute
        const vertexCount = buffer.getVertexCount(accessor);
        drawParams.vertexCount = Math.min(drawParams.vertexCount, vertexCount);
      }
    }
  }

  // DEPRECATED in v6.x - but not warnings not properly implemented

  setElements(elementBuffer = null, accessor = {}) {
    _utils__WEBPACK_IMPORTED_MODULE_4__["log"].deprecated('setElements', 'setElementBuffer')();
    return this.setElementBuffer(elementBuffer, accessor);
  }
}


/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/*! exports provided: ERR_CONTEXT, ERR_WEBGL, ERR_WEBGL2, isWebGL, isWebGL2, assertWebGLContext, assertWebGL2Context, setGLContextDefaults, createGLContext, instrumentGLContext, destroyGLContext, resizeGLContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CONTEXT", function() { return ERR_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_WEBGL", function() { return ERR_WEBGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_WEBGL2", function() { return ERR_WEBGL2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGL", function() { return isWebGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGL2", function() { return isWebGL2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWebGLContext", function() { return assertWebGLContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWebGL2Context", function() { return assertWebGL2Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGLContextDefaults", function() { return setGLContextDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGLContext", function() { return createGLContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instrumentGLContext", function() { return instrumentGLContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyGLContext", function() { return destroyGLContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeGLContext", function() { return resizeGLContext; });
/* harmony import */ var _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/webgl-state-tracker */ "../webgl-state-tracker/src/index.js");
/* harmony import */ var _create_headless_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-headless-context */ "./src/context/create-headless-context.js");
/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-canvas */ "./src/context/create-canvas.js");
/* harmony import */ var _create_browser_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-browser-context */ "./src/context/create-browser-context.js");
/* harmony import */ var _debug_get_context_debug_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../debug/get-context-debug-info */ "./src/debug/get-context-debug-info.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* eslint-disable quotes */
// WebGLRenderingContext related methods












const ERR_CONTEXT = 'Invalid WebGLRenderingContext';
const ERR_WEBGL = ERR_CONTEXT;
const ERR_WEBGL2 = 'Requires WebGL2';

function isWebGL(gl) {
  return Boolean(gl && Number.isFinite(gl._version));
}

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function assertWebGLContext(gl) {
  // Need to handle debug context
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(isWebGL(gl), ERR_CONTEXT);
}

function assertWebGL2Context(gl) {
  // Need to handle debug context
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["assert"])(isWebGL2(gl), ERR_WEBGL2);
}

const contextDefaults = {
  // COMMON CONTEXT PARAMETERS
  // Attempt to allocate WebGL2 context
  webgl2: true, // Attempt to create a WebGL2 context (false to force webgl1)
  webgl1: true, // Attempt to create a WebGL1 context (false to fail if webgl2 not available)
  throwOnFailure: true,
  manageState: true,
  // BROWSER CONTEXT PARAMETERS
  canvas: null, // A canvas element or a canvas string id
  debug: false, // Instrument context (at the expense of performance)
  // HEADLESS CONTEXT PARAMETERS
  width: 800, // width are height are only used by headless gl
  height: 600
  // WEBGL/HEADLESS CONTEXT PARAMETERS
  // Remaining options are passed through to context creator
};

/*
 * Change default context creation parameters.
 * Main use case is regression test suite.
 */
function setGLContextDefaults(options = {}) {
  Object.assign(contextDefaults, {width: 1, height: 1}, options);
}

/*
 * Creates a context giving access to the WebGL API
 */
/* eslint-disable complexity, max-statements */
function createGLContext(options = {}) {
  options = Object.assign({}, contextDefaults, options);
  const {width, height} = options;

  // Error reporting function, enables exceptions to be disabled
  function onError(message) {
    if (options.throwOnError) {
      throw new Error(message);
    }
    return null;
  }

  let gl;
  if (_utils__WEBPACK_IMPORTED_MODULE_6__["isBrowser"]) {
    // Get or create a canvas
    const {canvas} = options;
    const targetCanvas = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_2__["getCanvas"])({canvas, width, height, onError});
    // Create a WebGL context in the canvas
    gl = Object(_create_browser_context__WEBPACK_IMPORTED_MODULE_3__["createBrowserContext"])(targetCanvas, options);
  } else {
    // Create a headless-gl context under Node.js
    gl = Object(_create_headless_context__WEBPACK_IMPORTED_MODULE_1__["createHeadlessContext"])({...options, width, height, onError});
  }

  if (!gl) {
    return null;
  }

  gl = instrumentGLContext(gl, options);

  // Log some debug info about the newly created context
  logInfo(gl);

  // Add to seer integration
  return gl;
}

function instrumentGLContext(gl, options = {}) {
  // Avoid multiple instrumentations
  if (gl._instrumented) {
    return gl;
  }

  gl._version = gl._version || getVersion(gl);

  options = Object.assign({}, contextDefaults, options);
  const {manageState, debug} = options;

  // Install context state tracking
  if (manageState) {
    Object(_luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["trackContextState"])(gl, {
      copyState: false,
      log: (...args) => _utils__WEBPACK_IMPORTED_MODULE_6__["log"].log(1, ...args)()
    });
  }

  // Add debug instrumentation to the context
  if (_utils__WEBPACK_IMPORTED_MODULE_6__["isBrowser"] && debug) {
    if (!_utils_globals__WEBPACK_IMPORTED_MODULE_7__["global"].makeDebugContext) {
      _utils__WEBPACK_IMPORTED_MODULE_6__["log"].warn('WebGL debug mode not activated. import "@luma.gl/debug" to enable.')();
    } else {
      gl = _utils_globals__WEBPACK_IMPORTED_MODULE_7__["global"].makeDebugContext(gl, {debug});
      // Debug forces log level to at least 1
      _utils__WEBPACK_IMPORTED_MODULE_6__["log"].priority = Math.max(_utils__WEBPACK_IMPORTED_MODULE_6__["log"].priority, 1);
    }
  }

  gl._instrumented = true;

  return gl;
}

function destroyGLContext(gl) {
  // TODO - Remove from seer integration

  // TODO - Unregister any tracking/polyfills

  // There is no way to delete browser based context

  // Destroy headless gl context
  const ext = gl.getExtension('STACKGL_destroy_context');
  if (ext) {
    ext.destroy();
  }
}

/**
 * Resize the canvas' drawing buffer.
 *
 * Can match the canvas CSS size, and optionally also consider devicePixelRatio
 * Can be called every frame
 *
 * Regardless of size, the drawing buffer will always be scaled to the viewport, but
 * for best visual results, usually set to either:
 *  canvas CSS width x canvas CSS height
 *  canvas CSS width * devicePixelRatio x canvas CSS height * devicePixelRatio
 * See http://webgl2fundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
 *
 * resizeGLContext(gl, {width, height, useDevicePixels})
 */
function resizeGLContext(gl, options = {}) {
  // Resize browser context
  if (gl.canvas) {
    /* global window */
    const devicePixelRatio = options.useDevicePixels ? window.devicePixelRatio || 1 : 1;

    const width = `width` in options ? options.width : gl.canvas.clientWidth;
    const height = `height` in options ? options.height : gl.canvas.clientHeight;

    gl.canvas.width = width * devicePixelRatio;
    gl.canvas.height = height * devicePixelRatio;

    return;
  }

  // Resize headless gl context
  const ext = gl.getExtension('STACKGL_resize_drawingbuffer');
  if (ext && `width` in options && `height` in options) {
    ext.resize(options.width, options.height);
  }
}

// HELPER METHODS

function logInfo(gl) {
  const webGL = isWebGL2(gl) ? 'WebGL2' : 'WebGL1';
  const info = Object(_debug_get_context_debug_info__WEBPACK_IMPORTED_MODULE_4__["getContextDebugInfo"])(gl);
  const driver = info ? `(${info.vendor},${info.renderer})` : '';
  const debug = gl.debug ? ' debug' : '';
  _utils__WEBPACK_IMPORTED_MODULE_6__["log"].once(1, `${webGL}${debug} context ${driver}`)();
}

function getVersion(gl) {
  if (typeof _webgl_utils__WEBPACK_IMPORTED_MODULE_5__["WebGL2RenderingContext"] !== 'undefined' && gl instanceof _webgl_utils__WEBPACK_IMPORTED_MODULE_5__["WebGL2RenderingContext"]) {
    // WebGL2 context.
    return 2;
  }
  // Must be a WebGL1 context.
  return 1;
}


/***/ }),

/***/ "./src/context/create-browser-context.js":
/*!***********************************************!*\
  !*** ./src/context/create-browser-context.js ***!
  \***********************************************/
/*! exports provided: createBrowserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserContext", function() { return createBrowserContext; });
/**
 * Create a WebGL context for a canvas
 * Note calling this multiple time on the same canvas does return the same context
 */
function createBrowserContext(canvas, options) {
  const {onError = message => null} = options;

  // Try to extract any extra information about why context creation failed
  const onCreateError = error => onError(`WebGL context: ${error.statusMessage || 'error'}`);
  canvas.addEventListener('webglcontextcreationerror', onCreateError, false);

  const {webgl1 = true, webgl2 = true} = options;
  let gl = null;
  // Prefer webgl2 over webgl1, prefer conformant over experimental
  if (webgl2) {
    gl = gl || canvas.getContext('webgl2', options);
    gl = gl || canvas.getContext('experimental-webgl2', options);
  }
  if (webgl1) {
    gl = gl || canvas.getContext('webgl', options);
    gl = gl || canvas.getContext('experimental-webgl', options);
  }

  canvas.removeEventListener('webglcontextcreationerror', onCreateError, false);

  if (!gl) {
    return onError(`Failed to create ${webgl2 && !webgl1 ? 'WebGL2' : 'WebGL'} context`);
  }

  return gl;
}


/***/ }),

/***/ "./src/context/create-canvas.js":
/*!**************************************!*\
  !*** ./src/context/create-canvas.js ***!
  \**************************************/
/*! exports provided: getPageLoadPromise, createCanvas, getCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageLoadPromise", function() { return getPageLoadPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvas", function() { return getCanvas; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
// Resizing a webgl canvas

/* global window, document */


const isPage = _utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && typeof document !== 'undefined';
let isPageLoaded = isPage && document.readyState === 'complete';

let pageLoadPromise;

/**
 * Returns a promise that resolves when the page is loaded
 * at this point the DOM can be manipulated, and e.g. a new canvas can be inserted
 * @return {Promise} - resolves when the page is loaded
 */
function getPageLoadPromise() {
  if (!pageLoadPromise) {
    pageLoadPromise = isPage
      ? new Promise((resolve, reject) => {
          if (isPage && document.readyState === 'complete') {
            isPageLoaded = true;
            resolve(document);
            return;
          }
          window.onload = () => {
            isPageLoaded = true;
            resolve(document);
          };
        })
      : Promise.resolve({});
  }
  return pageLoadPromise;
}

/**
 * Create a canvas
 * @param {Number} width - set to 100%
 * @param {Number} height - set to 100%
 */
function createCanvas({width = 800, height = 600, id = 'gl-canvas', insert = true}) {
  const canvas = document.createElement('canvas');
  canvas.id = id;
  canvas.style.width = Number.isFinite(width) ? `${width}px` : '100%';
  canvas.style.height = Number.isFinite(height) ? `${height}px` : '100%';
  // add the canvas to the body element once the page has loaded
  if (insert) {
    const body = document.body;
    body.insertBefore(canvas, body.firstChild);
    // getPageLoadPromise().then(document => {});
  }
  return canvas;
}

function getCanvas({canvas, width, height, onError = () => {}}) {
  let targetCanvas;
  if (typeof canvas === 'string') {
    if (!isPageLoaded) {
      onError(`createGLContext called on canvas '${canvas}' before page was loaded`);
    }
    targetCanvas = document.getElementById(canvas);
  } else if (canvas) {
    targetCanvas = canvas;
  } else {
    targetCanvas = createCanvas({id: 'lumagl-canvas', width, height, onError});
  }

  return targetCanvas;
}


/***/ }),

/***/ "./src/context/create-headless-context.js":
/*!************************************************!*\
  !*** ./src/context/create-headless-context.js ***!
  \************************************************/
/*! exports provided: createHeadlessContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeadlessContext", function() { return createHeadlessContext; });
/* harmony import */ var _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl-utils/webgl-types */ "./src/webgl-utils/webgl-types.js");


const ERR_HEADLESSGL_NOT_AVAILABLE =
  'Failed to create WebGL context in Node.js, headless gl not available';

const ERR_HEADLESSGL_FAILED =
  'Failed to create WebGL context in Node.js, headless gl returned null';

// Create headless gl context (for running under Node.js)
function createHeadlessContext(options) {
  const {width, height, webgl1, webgl2, onError} = options;
  if (webgl2 && !webgl1) {
    return onError('headless-gl does not support WebGL2');
  }
  if (!_webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_0__["headlessGL"]) {
    return onError(ERR_HEADLESSGL_NOT_AVAILABLE);
  }
  const gl = Object(_webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_0__["headlessGL"])(width, height, options);
  if (!gl) {
    return onError(ERR_HEADLESSGL_FAILED);
  }
  return gl;
}


/***/ }),

/***/ "./src/context/index.js":
/*!******************************!*\
  !*** ./src/context/index.js ***!
  \******************************/
/*! exports provided: trackContextState, resetParameters, getParameter, getParameters, setParameter, setParameters, withParameters, getModifiedParameters, createGLContext, instrumentGLContext, destroyGLContext, resizeGLContext, setGLContextDefaults, getPageLoadPromise, getCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/webgl-state-tracker */ "../webgl-state-tracker/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackContextState", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["trackContextState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["resetParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParameter", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["getParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["getParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setParameter", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["setParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["setParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["withParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModifiedParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_0__["getModifiedParameters"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/context/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGLContext", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["createGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instrumentGLContext", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["instrumentGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroyGLContext", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["destroyGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resizeGLContext", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["resizeGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setGLContextDefaults", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["setGLContextDefaults"]; });

/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-canvas */ "./src/context/create-canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPageLoadPromise", function() { return _create_canvas__WEBPACK_IMPORTED_MODULE_2__["getPageLoadPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCanvas", function() { return _create_canvas__WEBPACK_IMPORTED_MODULE_2__["getCanvas"]; });








/***/ }),

/***/ "./src/debug/debug-program-configuration.js":
/*!**************************************************!*\
  !*** ./src/debug/debug-program-configuration.js ***!
  \**************************************************/
/*! exports provided: getDebugTableForProgramConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugTableForProgramConfiguration", function() { return getDebugTableForProgramConfiguration; });
/* harmony import */ var _webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl-utils/attribute-utils */ "./src/webgl-utils/attribute-utils.js");


function getDebugTableForProgramConfiguration(config) {
  const table = {};

  const header = `Accessors for ${config.id}`;

  for (const attributeInfo of config.attributeInfos) {
    if (attributeInfo) {
      const glslDeclaration = getGLSLDeclaration(attributeInfo);
      table[`in ${glslDeclaration}`] = {[header]: JSON.stringify(attributeInfo.accessor)};
    }
  }

  for (const varyingInfo of config.varyingInfos) {
    if (varyingInfo) {
      const glslDeclaration = getGLSLDeclaration(varyingInfo);
      table[`out ${glslDeclaration}`] = {[header]: JSON.stringify(varyingInfo.accessor)};
    }
  }

  return table;
}

function getGLSLDeclaration(attributeInfo) {
  const {type, size} = attributeInfo.accessor;
  const typeAndName = Object(_webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_0__["getCompositeGLType"])(type, size);
  if (typeAndName) {
    return `${typeAndName.name} ${attributeInfo.name}`;
  }
  return attributeInfo.name;
}


/***/ }),

/***/ "./src/debug/debug-uniforms.js":
/*!*************************************!*\
  !*** ./src/debug/debug-uniforms.js ***!
  \*************************************/
/*! exports provided: getDebugTableForUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugTableForUniforms", function() { return getDebugTableForUniforms; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");


// Prepares a table suitable for console.table
/* eslint-disable max-statements, complexity */
function getDebugTableForUniforms({
  header = 'Uniforms',
  program,
  uniforms,
  undefinedOnly = false
} = {}) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(program);

  const SHADER_MODULE_UNIFORM_REGEXP = '.*_.*';
  const PROJECT_MODULE_UNIFORM_REGEXP = '.*Matrix'; // TODO - Use explicit list

  const uniformLocations = program._uniformSetters;
  const table = {}; // {[header]: {}};

  // Add program's provided uniforms (in alphabetical order)
  const uniformNames = Object.keys(uniformLocations).sort();

  let count = 0;

  // First add non-underscored uniforms (assumed not coming from shader modules)
  for (const uniformName of uniformNames) {
    if (
      !uniformName.match(SHADER_MODULE_UNIFORM_REGEXP) &&
      !uniformName.match(PROJECT_MODULE_UNIFORM_REGEXP)
    ) {
      if (addUniformToTable({table, header, uniforms, uniformName, undefinedOnly})) {
        count++;
      }
    }
  }

  // add underscored uniforms (assumed from shader modules)
  for (const uniformName of uniformNames) {
    if (uniformName.match(PROJECT_MODULE_UNIFORM_REGEXP)) {
      if (addUniformToTable({table, header, uniforms, uniformName, undefinedOnly})) {
        count++;
      }
    }
  }

  for (const uniformName of uniformNames) {
    if (!table[uniformName]) {
      if (addUniformToTable({table, header, uniforms, uniformName, undefinedOnly})) {
        count++;
      }
    }
  }

  // Create a table of unused uniforms
  let unusedCount = 0;
  const unusedTable = {};
  if (!undefinedOnly) {
    for (const uniformName in uniforms) {
      const uniform = uniforms[uniformName];
      if (!table[uniformName]) {
        unusedCount++;
        unusedTable[uniformName] = {
          Type: `NOT USED: ${uniform}`,
          [header]: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatValue"])(uniform)
        };
      }
    }
  }

  return {table, count, unusedTable, unusedCount};
}

// Helper
function addUniformToTable({table, header, uniforms, uniformName, undefinedOnly}) {
  const value = uniforms[uniformName];
  const isDefined = isUniformDefined(value);
  if (!undefinedOnly || !isDefined) {
    table[uniformName] = {
      // Add program's unprovided uniforms
      [header]: isDefined ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatValue"])(value) : 'N/A',
      'Uniform Type': isDefined ? value : 'NOT PROVIDED'
    };
    return true;
  }
  return false;
}

function isUniformDefined(value) {
  return value !== undefined && value !== null;
}


/***/ }),

/***/ "./src/debug/debug-vertex-array.js":
/*!*****************************************!*\
  !*** ./src/debug/debug-vertex-array.js ***!
  \*****************************************/
/*! exports provided: getDebugTableForVertexArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugTableForVertexArray", function() { return getDebugTableForVertexArray; });
/* harmony import */ var _classes_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/buffer */ "./src/classes/buffer.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-utils/attribute-utils */ "./src/webgl-utils/attribute-utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");





// Creates object suitable as input for console.table
function getDebugTableForVertexArray({vertexArray, header = 'Attributes'} = {}) {
  if (!vertexArray.configuration) {
    return {};
  }

  const table = {}; // {[header]: {}};

  // Add index (elements) if available
  if (vertexArray.elements) {
    // const elements = Object.assign({size: 1}, vertexArray.elements);
    table.ELEMENT_ARRAY_BUFFER = getDebugTableRow(vertexArray, vertexArray.elements, null, header);
  }

  // Add used attributes
  const attributes = vertexArray.values;

  for (const attributeLocation in attributes) {
    const info = vertexArray._getAttributeInfo(attributeLocation);
    if (info) {
      let rowHeader = `${attributeLocation}: ${info.name}`;
      const accessor = vertexArray.accessors[info.location];
      if (accessor) {
        rowHeader = `${attributeLocation}: ${getGLSLDeclaration(info.name, accessor)}`;
      }
      table[rowHeader] = getDebugTableRow(
        vertexArray,
        attributes[attributeLocation],
        accessor,
        header
      );
    }
  }

  return table;
}

/* eslint-disable max-statements */
function getDebugTableRow(vertexArray, attribute, accessor, header) {
  // const round = xnum => Math.round(num * 10) / 10;
  const {gl} = vertexArray;

  let type = 'NOT PROVIDED';
  let size = 'N/A';
  let verts = 'N/A';
  let bytes = 'N/A';

  let isInteger;
  let marker;
  let value;

  if (accessor) {
    type = accessor.type;
    size = accessor.size;

    // Generate a type name by dropping Array from Float32Array etc.
    type = String(type).replace('Array', '');

    // Look for 'nt' to detect integer types, e.g. Int32Array, Uint32Array
    isInteger = type.indexOf('nt') !== -1;
  }

  if (attribute instanceof _classes_buffer__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    const buffer = attribute;

    const {data, modified} = buffer.getDebugData();
    marker = modified ? '*' : '';

    value = data;
    bytes = buffer.byteLength;
    verts = bytes / data.BYTES_PER_ELEMENT / size;

    let format;

    if (accessor) {
      const instanced = accessor.divisor > 0;
      format = `${instanced ? 'I ' : 'P '} ${verts} (x${size}=${bytes} bytes ${Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["getKey"])(gl, type)})`;
    } else {
      // element buffer
      isInteger = true;
      format = `${bytes} bytes`;
    }

    return {
      [header]: `${marker}${Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatValue"])(value, {size, isInteger})}`,
      'Format ': format
    };
  }

  // CONSTANT VALUE
  value = attribute;
  size = attribute.length;
  // Generate a type name by dropping Array from Float32Array etc.
  type = String(attribute.constructor.name).replace('Array', '');
  // Look for 'nt' to detect integer types, e.g. Int32Array, Uint32Array
  isInteger = type.indexOf('nt') !== -1;

  return {
    [header]: `${Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatValue"])(value, {size, isInteger})} (constant)`,
    'Format ': `${size}x${type} (constant)`
  };
}
/* eslint-ensable max-statements */

function getGLSLDeclaration(name, accessor) {
  const {type, size} = accessor;
  const typeAndName = Object(_webgl_utils_attribute_utils__WEBPACK_IMPORTED_MODULE_2__["getCompositeGLType"])(type, size);
  if (typeAndName) {
    return `${name} (${typeAndName.name})`;
  }
  return name;
}


/***/ }),

/***/ "./src/debug/get-context-debug-info.js":
/*!*********************************************!*\
  !*** ./src/debug/get-context-debug-info.js ***!
  \*********************************************/
/*! exports provided: getContextDebugInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextDebugInfo", function() { return getContextDebugInfo; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Provides strings identifying the GPU vendor and driver.
 * https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
 * @param {WebGLRenderingContext} gl - context
 * @return {Object} - 'vendor' and 'renderer' string fields.
 */
function getContextDebugInfo(gl) {
  const vendorMasked = gl.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VENDOR);
  const rendererMasked = gl.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERER);
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const vendorUnmasked = ext && gl.getParameter(ext.UNMASKED_VENDOR_WEBGL || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VENDOR);
  const rendererUnmasked = ext && gl.getParameter(ext.UNMASKED_RENDERER_WEBGL || _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERER);
  return {
    vendor: vendorUnmasked || vendorMasked,
    renderer: rendererUnmasked || rendererMasked,
    vendorMasked,
    rendererMasked,
    version: gl.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERSION),
    shadingLanguageVersion: gl.getParameter(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SHADING_LANGUAGE_VERSION)
  };
}


/***/ }),

/***/ "./src/features/check-glsl-extension.js":
/*!**********************************************!*\
  !*** ./src/features/check-glsl-extension.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canCompileGLGSExtension; });
/* harmony import */ var _check_old_ie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-old-ie */ "./src/features/check-old-ie.js");
/* harmony import */ var _webgl_features_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl-features-table */ "./src/features/webgl-features-table.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




// Enables feature detection in IE11 due to a bug where gl.getExtension may return true
// but fail to compile when the extension is enabled in the shader. Specifically,
// the OES_standard_derivatives extension fails to compile in IE11 even though its included
// in the list of supported extensions.
const compiledGlslExtensions = {};

// options allows user agent to be overridden for testing
function canCompileGLGSExtension(gl, cap, options = {}) {
  const feature = _webgl_features_table__WEBPACK_IMPORTED_MODULE_1__["default"][cap];
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(feature, cap);

  if (!Object(_check_old_ie__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    return true;
  }

  if (cap in compiledGlslExtensions) {
    return compiledGlslExtensions[cap];
  }

  const extensionName = feature[0];
  const source = `#extension GL_${extensionName} : enable\nvoid main(void) {}`;

  const shader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const canCompile = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  gl.deleteShader(shader);
  compiledGlslExtensions[cap] = canCompile;
  return canCompile;
}


/***/ }),

/***/ "./src/features/check-old-ie.js":
/*!**************************************!*\
  !*** ./src/features/check-old-ie.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOldIE; });
/* global window */

// opts allows user agent to be overridden for testing
function isOldIE(opts = {}) {
  const navigator = (typeof window !== 'undefined' && window.navigator) || {};
  const userAgent = opts.userAgent || navigator.userAgent || '';
  // We only care about older versions of IE (IE 11 and below). Newer versions of IE (Edge)
  // have much better web standards support.
  const isMSIE = userAgent.indexOf('MSIE ') !== -1;
  const isTrident = userAgent.indexOf('Trident/') !== -1;
  return isMSIE || isTrident;
}


/***/ }),

/***/ "./src/features/features.js":
/*!**********************************!*\
  !*** ./src/features/features.js ***!
  \**********************************/
/*! exports provided: hasFeature, hasFeatures, getFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFeature", function() { return hasFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFeatures", function() { return hasFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeatures", function() { return getFeatures; });
/* harmony import */ var _webgl_features_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl-features-table */ "./src/features/webgl-features-table.js");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
// Feature detection for WebGL
//
// Provides a function that enables simple checking of which WebGL features are
// available in an WebGL1 or WebGL2 environment.





// Check one feature
function hasFeature(gl, feature) {
  return hasFeatures(gl, feature);
}

// Check one or more features
function hasFeatures(gl, features) {
  features = Array.isArray(features) ? features : [features];
  return features.every(feature => {
    return isFeatureSupported(gl, feature);
  });
}

// Return a list of supported features
function getFeatures(gl) {
  gl.luma = gl.luma || {};
  if (!gl.luma.caps) {
    gl.luma.caps = {};
    gl.luma.caps.webgl2 = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(gl);
    for (const cap in _webgl_features_table__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      gl.luma.caps[cap] = isFeatureSupported(gl, cap);
    }
  }
  return gl.luma.caps;
}

// TODO - cache the value
function isFeatureSupported(gl, cap) {
  const feature = _webgl_features_table__WEBPACK_IMPORTED_MODULE_0__["default"][cap];
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(feature, cap);

  // Get extension name from table
  const featureDefinition = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(gl) ? feature[1] || feature[0] : feature[0];

  let isSupported;

  // Check if the value is dependent on checking one or more extensions
  if (typeof featureDefinition === 'function') {
    isSupported = featureDefinition(gl);
  } else if (Array.isArray(featureDefinition)) {
    isSupported = true;
    for (const extension of featureDefinition) {
      isSupported = isSupported && Boolean(gl.getExtension(extension));
    }
  } else if (typeof featureDefinition === 'string') {
    isSupported = Boolean(gl.getExtension(featureDefinition));
  } else if (typeof featureDefinition === 'boolean') {
    isSupported = featureDefinition;
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assert"])(false);
  }

  return isSupported;
}


/***/ }),

/***/ "./src/features/index.js":
/*!*******************************!*\
  !*** ./src/features/index.js ***!
  \*******************************/
/*! exports provided: getContextInfo, getGLContextInfo, getContextLimits, FEATURES, hasFeature, hasFeatures, getFeatures, canCompileGLGSExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _limits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./limits */ "./src/features/limits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContextInfo", function() { return _limits__WEBPACK_IMPORTED_MODULE_0__["getContextInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGLContextInfo", function() { return _limits__WEBPACK_IMPORTED_MODULE_0__["getGLContextInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContextLimits", function() { return _limits__WEBPACK_IMPORTED_MODULE_0__["getContextLimits"]; });

/* harmony import */ var _webgl_features_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl-features-table */ "./src/features/webgl-features-table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return _webgl_features_table__WEBPACK_IMPORTED_MODULE_1__["FEATURES"]; });

/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features */ "./src/features/features.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasFeature", function() { return _features__WEBPACK_IMPORTED_MODULE_2__["hasFeature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasFeatures", function() { return _features__WEBPACK_IMPORTED_MODULE_2__["hasFeatures"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeatures", function() { return _features__WEBPACK_IMPORTED_MODULE_2__["getFeatures"]; });

/* harmony import */ var _check_glsl_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-glsl-extension */ "./src/features/check-glsl-extension.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canCompileGLGSExtension", function() { return _check_glsl_extension__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./src/features/limits.js":
/*!********************************!*\
  !*** ./src/features/limits.js ***!
  \********************************/
/*! exports provided: getContextLimits, getGLContextInfo, getContextInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextLimits", function() { return getContextLimits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGLContextInfo", function() { return getGLContextInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextInfo", function() { return getContextInfo; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");
/* harmony import */ var _webgl_limits_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl-limits-table */ "./src/features/webgl-limits-table.js");
/* harmony import */ var _debug_get_context_debug_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../debug/get-context-debug-info */ "./src/debug/get-context-debug-info.js");






function getContextLimits(gl) {
  gl.luma = gl.luma || {};

  if (!gl.luma.limits) {
    gl.luma.limits = {};
    gl.luma.webgl1MinLimits = {};
    gl.luma.webgl2MinLimits = {};

    const isWebgl2 = Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(gl);

    // WEBGL limits
    for (const parameter in _webgl_limits_table__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      const limit = _webgl_limits_table__WEBPACK_IMPORTED_MODULE_2__["default"][parameter];

      const webgl1MinLimit = limit.gl1;
      const webgl2MinLimit = 'gl2' in limit ? limit.gl2 : limit.gl1;
      const minLimit = isWebgl2 ? webgl2MinLimit : webgl1MinLimit;

      // Check if we can query for this limit
      const limitNotAvailable =
        ('gl2' in limit && !isWebgl2) ||
        ('extension' in limit && !gl.getExtension(limit.extension));

      const value = limitNotAvailable ? minLimit : gl.getParameter(parameter);
      gl.luma.limits[parameter] = value;
      gl.luma.webgl1MinLimits[parameter] = webgl1MinLimit;
      gl.luma.webgl2MinLimits[parameter] = webgl2MinLimit;
    }
  }

  return gl.luma.limits;
}

function getGLContextInfo(gl) {
  gl.luma = gl.luma || {};

  const info = Object(_debug_get_context_debug_info__WEBPACK_IMPORTED_MODULE_3__["getContextDebugInfo"])(gl);
  if (!gl.luma.info) {
    gl.luma.info = {
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNMASKED_VENDOR_WEBGL]: info.vendor,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNMASKED_RENDERER_WEBGL]: info.renderer,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VENDOR]: info.vendorMasked,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RENDERER]: info.rendererMasked,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.VERSION]: info.version,
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SHADING_LANGUAGE_VERSION]: info.shadingLanguageVersion
    };
  }

  return gl.luma.info;
}

function getContextInfo(gl) {
  return Object.assign(Object(_debug_get_context_debug_info__WEBPACK_IMPORTED_MODULE_3__["getContextDebugInfo"])(gl), {
    limits: getContextLimits(gl),
    info: getGLContextInfo(gl),
    webgl1MinLimits: gl.luma.webgl1MinLimits,
    webgl2MinLimits: gl.luma.webgl2MinLimits
  });
}


/***/ }),

/***/ "./src/features/webgl-features-table.js":
/*!**********************************************!*\
  !*** ./src/features/webgl-features-table.js ***!
  \**********************************************/
/*! exports provided: FEATURES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return FEATURES; });
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl-utils */ "./src/webgl-utils/index.js");


// TODO - this should be the default export, test cases need updating
const FEATURES = {
  WEBGL2: 'WEBGL2',

  // API SUPPORT
  VERTEX_ARRAY_OBJECT: 'VERTEX_ARRAY_OBJECT',
  TIMER_QUERY: 'TIMER_QUERY',
  INSTANCED_RENDERING: 'INSTANCED_RENDERING',
  MULTIPLE_RENDER_TARGETS: 'MULTIPLE_RENDER_TARGETS',

  // FEATURES
  ELEMENT_INDEX_UINT32: 'ELEMENT_INDEX_UINT32',
  BLEND_EQUATION_MINMAX: 'BLEND_EQUATION_MINMAX',

  // TEXTURES: '// TEXTURES', RENDERBUFFERS
  COLOR_ENCODING_SRGB: 'COLOR_ENCODING_SRGB',

  // TEXTURES
  TEXTURE_DEPTH: 'TEXTURE_DEPTH',
  TEXTURE_FLOAT: 'TEXTURE_FLOAT',
  TEXTURE_HALF_FLOAT: 'TEXTURE_HALF_FLOAT',

  TEXTURE_FILTER_LINEAR_FLOAT: 'TEXTURE_FILTER_LINEAR_FLOAT',
  TEXTURE_FILTER_LINEAR_HALF_FLOAT: 'TEXTURE_FILTER_LINEAR_HALF_FLOAT',
  TEXTURE_FILTER_ANISOTROPIC: 'TEXTURE_FILTER_ANISOTROPIC',

  // FRAMEBUFFERS: '// FRAMEBUFFERS', TEXTURES AND RENDERBUFFERS
  COLOR_ATTACHMENT_RGBA32F: 'COLOR_ATTACHMENT_RGBA32F',
  COLOR_ATTACHMENT_FLOAT: 'COLOR_ATTACHMENT_FLOAT',
  COLOR_ATTACHMENT_HALF_FLOAT: 'COLOR_ATTACHMENT_HALF_FLOAT',

  // GLSL extensions
  GLSL_FRAG_DATA: 'GLSL_FRAG_DATA',
  GLSL_FRAG_DEPTH: 'GLSL_FRAG_DEPTH',
  GLSL_DERIVATIVES: 'GLSL_DERIVATIVES',
  GLSL_TEXTURE_LOD: 'GLSL_TEXTURE_LOD'
};

// Defines luma.gl "feature" names and semantics
/* harmony default export */ __webpack_exports__["default"] = ({
  [FEATURES.WEBGL2]: [gl => Object(_webgl_utils__WEBPACK_IMPORTED_MODULE_0__["isWebGL2"])(gl)],

  // API SUPPORT
  [FEATURES.VERTEX_ARRAY_OBJECT]: ['OES_vertex_array_object', true],
  [FEATURES.TIMER_QUERY]: ['EXT_disjoint_timer_query', 'EXT_disjoint_timer_query_webgl2'],
  [FEATURES.INSTANCED_RENDERING]: ['ANGLE_instanced_arrays', true],
  [FEATURES.MULTIPLE_RENDER_TARGETS]: ['WEBGL_draw_buffers', true],

  // FEATURES
  [FEATURES.ELEMENT_INDEX_UINT32]: ['OES_element_index_uint', true],
  [FEATURES.BLEND_EQUATION_MINMAX]: ['EXT_blend_minmax', true],

  // TEXTURES, RENDERBUFFERS
  [FEATURES.COLOR_ENCODING_SRGB]: ['EXT_sRGB', true],

  // TEXTURES
  [FEATURES.TEXTURE_DEPTH]: ['WEBGL_depth_texture', true],
  [FEATURES.TEXTURE_FLOAT]: ['OES_texture_float', true],
  [FEATURES.TEXTURE_HALF_FLOAT]: ['OES_texture_half_float', true],

  [FEATURES.TEXTURE_FILTER_LINEAR_FLOAT]: ['OES_texture_float_linear'],
  [FEATURES.TEXTURE_FILTER_LINEAR_HALF_FLOAT]: ['OES_texture_half_float_linear'],
  [FEATURES.TEXTURE_FILTER_ANISOTROPIC]: ['EXT_texture_filter_anisotropic'],

  // FRAMEBUFFERS, TEXTURES AND RENDERBUFFERS
  [FEATURES.COLOR_ATTACHMENT_RGBA32F]: ['WEBGL_color_buffer_float', 'EXT_color_buffer_float'],
  [FEATURES.COLOR_ATTACHMENT_FLOAT]: [false, 'EXT_color_buffer_float'],
  [FEATURES.COLOR_ATTACHMENT_HALF_FLOAT]: [false, 'EXT_color_buffer_half_float'],

  // GLSL extensions
  [FEATURES.GLSL_FRAG_DATA]: ['WEBGL_draw_buffers', true],
  [FEATURES.GLSL_FRAG_DEPTH]: ['EXT_frag_depth', true],
  [FEATURES.GLSL_DERIVATIVES]: ['OES_standard_derivatives', true],
  [FEATURES.GLSL_TEXTURE_LOD]: ['EXT_shader_texture_lod', true]
});


/***/ }),

/***/ "./src/features/webgl-limits-table.js":
/*!********************************************!*\
  !*** ./src/features/webgl-limits-table.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALIASED_LINE_WIDTH_RANGE]: {gl1: new Float32Array([1, 1])},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALIASED_POINT_SIZE_RANGE]: {gl1: new Float32Array([1, 1])},
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TEXTURE_SIZE]: {gl1: 64, gl2: 2048}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_CUBE_MAP_TEXTURE_SIZE]: {gl1: 16}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TEXTURE_IMAGE_UNITS]: {gl1: 8}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COMBINED_TEXTURE_IMAGE_UNITS]: {gl1: 8}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_TEXTURE_IMAGE_UNITS]: {gl1: 0}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_RENDERBUFFER_SIZE]: {gl1: 1}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VARYING_VECTORS]: {gl1: 8}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_ATTRIBS]: {gl1: 8}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_UNIFORM_VECTORS]: {gl1: 128}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_FRAGMENT_UNIFORM_VECTORS]: {gl1: 16}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VIEWPORT_DIMS]: {gl1: new Int32Array([0, 0])},

  // Extensions
  // [GL.MAX_TEXTURE_MAX_ANISOTROPY_EXT]: {gl1: 1.0, extension: 'EXT_texture_filter_anisotropic'},

  // WebGL2 Limits
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_3D_TEXTURE_SIZE]: {gl1: 0, gl2: 256}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ARRAY_TEXTURE_LAYERS]: {gl1: 0, gl2: 256}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_CLIENT_WAIT_TIMEOUT_WEBGL]: {gl1: 0, gl2: 0}, //  GLint64
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COLOR_ATTACHMENTS]: {gl1: 0, gl2: 4}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS]: {gl1: 0, gl2: 0}, // GLint64
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COMBINED_UNIFORM_BLOCKS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS]: {gl1: 0, gl2: 0}, // GLint64
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_DRAW_BUFFERS]: {gl1: 0, gl2: 4}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ELEMENT_INDEX]: {gl1: 0, gl2: 0}, //  GLint64
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ELEMENTS_INDICES]: {gl1: 0, gl2: 0}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_ELEMENTS_VERTICES]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_FRAGMENT_INPUT_COMPONENTS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_FRAGMENT_UNIFORM_BLOCKS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_FRAGMENT_UNIFORM_COMPONENTS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_SAMPLES]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_SERVER_WAIT_TIMEOUT]: {gl1: 0, gl2: 0}, //  GLint64
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TEXTURE_LOD_BIAS]: {gl1: 0, gl2: 0}, // GLfloat
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS]: {gl1: 0, gl2: 0}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_UNIFORM_BLOCK_SIZE]: {gl1: 0, gl2: 0}, // GLint64
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_UNIFORM_BUFFER_BINDINGS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VARYING_COMPONENTS]: {gl1: 0, gl2: 0}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_OUTPUT_COMPONENTS]: {gl1: 0, gl2: 0}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_UNIFORM_BLOCKS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_VERTEX_UNIFORM_COMPONENTS]: {gl1: 0, gl2: 0}, //  GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MIN_PROGRAM_TEXEL_OFFSET]: {gl1: 0, gl2: -8, negative: true}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX_PROGRAM_TEXEL_OFFSET]: {gl1: 0, gl2: 7}, // GLint
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNIFORM_BUFFER_OFFSET_ALIGNMENT]: {gl1: 0, gl2: 0} // GLint
});


/***/ }),

/***/ "./src/glsl-utils/format-glsl-error.js":
/*!*********************************************!*\
  !*** ./src/glsl-utils/format-glsl-error.js ***!
  \*********************************************/
/*! exports provided: default, parseGLSLCompilerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatGLSLCompilerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGLSLCompilerError", function() { return parseGLSLCompilerError; });
/* harmony import */ var _get_shader_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-shader-name */ "./src/glsl-utils/get-shader-name.js");
/* harmony import */ var _get_shader_type_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-shader-type-name */ "./src/glsl-utils/get-shader-type-name.js");
// TODO - formatGLSLCompilerError should not depend on this



// Formats GLSL compiler error log into single string
function formatGLSLCompilerError(errLog, src, shaderType) {
  const {shaderName, errors, warnings} = parseGLSLCompilerError(errLog, src, shaderType);
  return `GLSL compilation error in ${shaderName}\n\n${errors}\n${warnings}`;
}

/**
 * Parse a GLSL compiler error log into a string showing the source code around each error.
 * Based on https://github.com/wwwtyro/gl-format-compiler-error (public domain)
 */
/* eslint-disable no-continue, max-statements */
function parseGLSLCompilerError(errLog, src, shaderType, shaderName) {
  const errorStrings = errLog.split(/\r?\n/);
  const errors = {};
  const warnings = {};

  // Patch the shader name
  const name = shaderName || Object(_get_shader_name__WEBPACK_IMPORTED_MODULE_0__["default"])(src) || '(unnamed)';
  const shaderDescription = `${Object(_get_shader_type_name__WEBPACK_IMPORTED_MODULE_1__["default"])(shaderType)} shader ${name}`;

  // Parse the error - note: browser and driver dependent
  for (let i = 0; i < errorStrings.length; i++) {
    const errorString = errorStrings[i];
    if (errorString.length <= 1) {
      continue;
    }
    const segments = errorString.split(':');
    const type = segments[0];
    const line = parseInt(segments[2], 10);
    if (isNaN(line)) {
      throw new Error(`GLSL compilation error in ${shaderDescription}: ${errLog}`);
    }
    if (type !== 'WARNING') {
      errors[line] = errorString;
    } else {
      warnings[line] = errorString;
    }
  }

  // Format the error inline with the code
  const lines = addLineNumbers(src);

  return {
    shaderName: shaderDescription,
    errors: formatErrors(errors, lines),
    warnings: formatErrors(warnings, lines)
  };
}

// helper function, outputs annotated errors or warnings
function formatErrors(errors, lines) {
  let message = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!errors[i + 3] && !errors[i + 2] && !errors[i + 1]) {
      continue;
    }
    message += `${line}\n`;
    if (errors[i + 1]) {
      const error = errors[i + 1];
      const segments = error.split(':', 3);
      const type = segments[0];
      const column = parseInt(segments[1], 10) || 0;
      const err = error.substring(segments.join(':').length + 1).trim();
      message += padLeft(`^^^ ${type}: ${err}\n\n`, column);
    }
  }
  return message;
}

/**
 * Prepends line numbers to each line of a string.
 * The line numbers will be left-padded with spaces to ensure an
 * aligned layout when rendered using monospace fonts.
 * @param {String} string - multi-line string to add line numbers to
 * @param {Number} start=1 - number of spaces to add
 * @param {String} delim =': ' - injected between line number and original line
 * @return {String[]} strings - array of string, one per line, with line numbers added
 */
function addLineNumbers(string, start = 1, delim = ': ') {
  const lines = string.split(/\r?\n/);
  const maxDigits = String(lines.length + start - 1).length;
  return lines.map((line, i) => {
    const lineNumber = i + start;
    const digits = String(lineNumber).length;
    const prefix = padLeft(lineNumber, maxDigits - digits);
    return prefix + delim + line;
  });
}

/**
 * Pads a string with a number of spaces (space characters) to the left
 * @param {String} string - string to pad
 * @param {Number} digits - number of spaces to add
 * @return {String} string - The padded string
 */
function padLeft(string, digits) {
  let result = '';
  for (let i = 0; i < digits; ++i) {
    result += ' ';
  }
  return `${result}${string}`;
}


/***/ }),

/***/ "./src/glsl-utils/get-shader-name.js":
/*!*******************************************!*\
  !*** ./src/glsl-utils/get-shader-name.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getShaderName; });
// Supports GLSLIFY style naming of shaders
// #define SHADER_NAME ...
function getShaderName(shader, defaultName = 'unnamed') {
  const SHADER_NAME_REGEXP = /#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/;
  const match = shader.match(SHADER_NAME_REGEXP);
  return match ? match[1] : defaultName;
}


/***/ }),

/***/ "./src/glsl-utils/get-shader-type-name.js":
/*!************************************************!*\
  !*** ./src/glsl-utils/get-shader-type-name.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getShaderTypeName; });
const GL_FRAGMENT_SHADER = 0x8b30;
const GL_VERTEX_SHADER = 0x8b31;

function getShaderTypeName(type) {
  switch (type) {
    case GL_FRAGMENT_SHADER:
      return 'fragment';
    case GL_VERTEX_SHADER:
      return 'vertex';
    default:
      return 'unknown type';
  }
}


/***/ }),

/***/ "./src/glsl-utils/get-shader-version.js":
/*!**********************************************!*\
  !*** ./src/glsl-utils/get-shader-version.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getShaderVersion; });
// returns GLSL shader version of given shader string
function getShaderVersion(source) {
  let version = 100;
  const words = source.match(/[^\s]+/g);
  if (words.length >= 2 && words[0] === '#version') {
    const v = parseInt(words[1], 10);
    if (Number.isFinite(v)) {
      version = v;
    }
  }
  return version;
}


/***/ }),

/***/ "./src/glsl-utils/index.js":
/*!*********************************!*\
  !*** ./src/glsl-utils/index.js ***!
  \*********************************/
/*! exports provided: formatGLSLCompilerError, parseGLSLCompilerError, getShaderName, getShaderVersion, getShaderTypeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_glsl_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-glsl-error */ "./src/glsl-utils/format-glsl-error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatGLSLCompilerError", function() { return _format_glsl_error__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseGLSLCompilerError", function() { return _format_glsl_error__WEBPACK_IMPORTED_MODULE_0__["parseGLSLCompilerError"]; });

/* harmony import */ var _get_shader_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-shader-name */ "./src/glsl-utils/get-shader-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShaderName", function() { return _get_shader_name__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_shader_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-shader-version */ "./src/glsl-utils/get-shader-version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShaderVersion", function() { return _get_shader_version__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _get_shader_type_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-shader-type-name */ "./src/glsl-utils/get-shader-type-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShaderTypeName", function() { return _get_shader_type_name__WEBPACK_IMPORTED_MODULE_3__["default"]; });

// PARSE SHADER ERRORS


// PARSE SHADER SOURCE






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: lumaStats, resetParameters, getParameter, getParameters, setParameter, setParameters, withParameters, getModifiedParameters, Image, WebGLRenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, WebGL2RenderingContext, webGLTypesAvailable, createGLContext, destroyGLContext, resizeGLContext, instrumentGLContext, setGLContextDefaults, getCanvas, getPageLoadPromise, requestAnimationFrame, cancelAnimationFrame, isWebGL, isWebGL2, cloneTextureFrom, getKeyValue, getKey, getContextInfo, getGLContextInfo, getContextLimits, getContextDebugInfo, FEATURES, hasFeature, hasFeatures, getFeatures, canCompileGLGSExtension, Accessor, Buffer, Shader, VertexShader, FragmentShader, Program, Framebuffer, Renderbuffer, Texture2D, TextureCube, clear, clearBuffer, readPixelsToArray, readPixelsToBuffer, copyToDataUrl, copyToImage, copyToTexture, blit, Query, Texture3D, TransformFeedback, VertexArrayObject, VertexArray, UniformBufferLayout, setPathPrefix, loadFile, loadImage, getShaderName, getShaderVersion, log, assert, uid, isObjectEmpty, self, window, global, document, isBrowser, parseUniformName, getUniformSetter, getDebugTableForUniforms, getDebugTableForVertexArray, getDebugTableForProgramConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lumaStats", function() { return _init__WEBPACK_IMPORTED_MODULE_0__["lumaStats"]; });

/* harmony import */ var _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/webgl-state-tracker */ "../webgl-state-tracker/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__["resetParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParameter", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__["getParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__["getParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setParameter", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__["setParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__["setParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__["withParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModifiedParameters", function() { return _luma_gl_webgl_state_tracker__WEBPACK_IMPORTED_MODULE_1__["getModifiedParameters"]; });

/* harmony import */ var _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl-utils/webgl-types */ "./src/webgl-utils/webgl-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderingContext", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderingContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLProgram", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLShader", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLShader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLBuffer", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLFramebuffer", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLFramebuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderbuffer", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderbuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLTexture", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLTexture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLUniformLocation", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLUniformLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLActiveInfo", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLActiveInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLShaderPrecisionFormat", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGLShaderPrecisionFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGL2RenderingContext", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["WebGL2RenderingContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webGLTypesAvailable", function() { return _webgl_utils_webgl_types__WEBPACK_IMPORTED_MODULE_2__["webGLTypesAvailable"]; });

/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/context */ "./src/context/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGLContext", function() { return _context_context__WEBPACK_IMPORTED_MODULE_3__["createGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroyGLContext", function() { return _context_context__WEBPACK_IMPORTED_MODULE_3__["destroyGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resizeGLContext", function() { return _context_context__WEBPACK_IMPORTED_MODULE_3__["resizeGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instrumentGLContext", function() { return _context_context__WEBPACK_IMPORTED_MODULE_3__["instrumentGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setGLContextDefaults", function() { return _context_context__WEBPACK_IMPORTED_MODULE_3__["setGLContextDefaults"]; });

/* harmony import */ var _context_create_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/create-canvas */ "./src/context/create-canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCanvas", function() { return _context_create_canvas__WEBPACK_IMPORTED_MODULE_4__["getCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPageLoadPromise", function() { return _context_create_canvas__WEBPACK_IMPORTED_MODULE_4__["getPageLoadPromise"]; });

/* harmony import */ var _webgl_utils_request_animation_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl-utils/request-animation-frame */ "./src/webgl-utils/request-animation-frame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return _webgl_utils_request_animation_frame__WEBPACK_IMPORTED_MODULE_5__["requestAnimationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return _webgl_utils_request_animation_frame__WEBPACK_IMPORTED_MODULE_5__["cancelAnimationFrame"]; });

/* harmony import */ var _webgl_utils_webgl_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl-utils/webgl-checks */ "./src/webgl-utils/webgl-checks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWebGL", function() { return _webgl_utils_webgl_checks__WEBPACK_IMPORTED_MODULE_6__["isWebGL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWebGL2", function() { return _webgl_utils_webgl_checks__WEBPACK_IMPORTED_MODULE_6__["isWebGL2"]; });

/* harmony import */ var _webgl_utils_texture_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webgl-utils/texture-utils */ "./src/webgl-utils/texture-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneTextureFrom", function() { return _webgl_utils_texture_utils__WEBPACK_IMPORTED_MODULE_7__["cloneTextureFrom"]; });

/* harmony import */ var _webgl_utils_constants_to_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webgl-utils/constants-to-keys */ "./src/webgl-utils/constants-to-keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKeyValue", function() { return _webgl_utils_constants_to_keys__WEBPACK_IMPORTED_MODULE_8__["getKeyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return _webgl_utils_constants_to_keys__WEBPACK_IMPORTED_MODULE_8__["getKey"]; });

/* harmony import */ var _features_limits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/limits */ "./src/features/limits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContextInfo", function() { return _features_limits__WEBPACK_IMPORTED_MODULE_9__["getContextInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGLContextInfo", function() { return _features_limits__WEBPACK_IMPORTED_MODULE_9__["getGLContextInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContextLimits", function() { return _features_limits__WEBPACK_IMPORTED_MODULE_9__["getContextLimits"]; });

/* harmony import */ var _debug_get_context_debug_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./debug/get-context-debug-info */ "./src/debug/get-context-debug-info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContextDebugInfo", function() { return _debug_get_context_debug_info__WEBPACK_IMPORTED_MODULE_10__["getContextDebugInfo"]; });

/* harmony import */ var _features_webgl_features_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/webgl-features-table */ "./src/features/webgl-features-table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return _features_webgl_features_table__WEBPACK_IMPORTED_MODULE_11__["FEATURES"]; });

/* harmony import */ var _features_features__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/features */ "./src/features/features.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasFeature", function() { return _features_features__WEBPACK_IMPORTED_MODULE_12__["hasFeature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasFeatures", function() { return _features_features__WEBPACK_IMPORTED_MODULE_12__["hasFeatures"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeatures", function() { return _features_features__WEBPACK_IMPORTED_MODULE_12__["getFeatures"]; });

/* harmony import */ var _features_check_glsl_extension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/check-glsl-extension */ "./src/features/check-glsl-extension.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canCompileGLGSExtension", function() { return _features_check_glsl_extension__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _classes_accessor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes/accessor */ "./src/classes/accessor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessor", function() { return _classes_accessor__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _classes_buffer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./classes/buffer */ "./src/classes/buffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return _classes_buffer__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _classes_shader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./classes/shader */ "./src/classes/shader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return _classes_shader__WEBPACK_IMPORTED_MODULE_16__["Shader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VertexShader", function() { return _classes_shader__WEBPACK_IMPORTED_MODULE_16__["VertexShader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentShader", function() { return _classes_shader__WEBPACK_IMPORTED_MODULE_16__["FragmentShader"]; });

/* harmony import */ var _classes_program__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/program */ "./src/classes/program.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return _classes_program__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _classes_framebuffer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classes/framebuffer */ "./src/classes/framebuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Framebuffer", function() { return _classes_framebuffer__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _classes_renderbuffer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classes/renderbuffer */ "./src/classes/renderbuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderbuffer", function() { return _classes_renderbuffer__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _classes_texture_2d__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./classes/texture-2d */ "./src/classes/texture-2d.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture2D", function() { return _classes_texture_2d__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _classes_texture_cube__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classes/texture-cube */ "./src/classes/texture-cube.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureCube", function() { return _classes_texture_cube__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _classes_clear__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./classes/clear */ "./src/classes/clear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return _classes_clear__WEBPACK_IMPORTED_MODULE_22__["clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearBuffer", function() { return _classes_clear__WEBPACK_IMPORTED_MODULE_22__["clearBuffer"]; });

/* harmony import */ var _classes_copy_and_blit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./classes/copy-and-blit */ "./src/classes/copy-and-blit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readPixelsToArray", function() { return _classes_copy_and_blit__WEBPACK_IMPORTED_MODULE_23__["readPixelsToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readPixelsToBuffer", function() { return _classes_copy_and_blit__WEBPACK_IMPORTED_MODULE_23__["readPixelsToBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToDataUrl", function() { return _classes_copy_and_blit__WEBPACK_IMPORTED_MODULE_23__["copyToDataUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToImage", function() { return _classes_copy_and_blit__WEBPACK_IMPORTED_MODULE_23__["copyToImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToTexture", function() { return _classes_copy_and_blit__WEBPACK_IMPORTED_MODULE_23__["copyToTexture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blit", function() { return _classes_copy_and_blit__WEBPACK_IMPORTED_MODULE_23__["blit"]; });

/* harmony import */ var _classes_query__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./classes/query */ "./src/classes/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _classes_query__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _classes_texture_3d__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./classes/texture-3d */ "./src/classes/texture-3d.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture3D", function() { return _classes_texture_3d__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _classes_transform_feedback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./classes/transform-feedback */ "./src/classes/transform-feedback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformFeedback", function() { return _classes_transform_feedback__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _classes_vertex_array_object__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./classes/vertex-array-object */ "./src/classes/vertex-array-object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VertexArrayObject", function() { return _classes_vertex_array_object__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _classes_vertex_array__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./classes/vertex-array */ "./src/classes/vertex-array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VertexArray", function() { return _classes_vertex_array__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _classes_uniform_buffer_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./classes/uniform-buffer-layout */ "./src/classes/uniform-buffer-layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniformBufferLayout", function() { return _classes_uniform_buffer_layout__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _utils_load_file__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/load-file */ "./src/utils/load-file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPathPrefix", function() { return _utils_load_file__WEBPACK_IMPORTED_MODULE_30__["setPathPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFile", function() { return _utils_load_file__WEBPACK_IMPORTED_MODULE_30__["loadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return _utils_load_file__WEBPACK_IMPORTED_MODULE_30__["loadImage"]; });

/* harmony import */ var _glsl_utils_get_shader_name__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./glsl-utils/get-shader-name */ "./src/glsl-utils/get-shader-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShaderName", function() { return _glsl_utils_get_shader_name__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _glsl_utils_get_shader_version__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./glsl-utils/get-shader-version */ "./src/glsl-utils/get-shader-version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShaderVersion", function() { return _glsl_utils_get_shader_version__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utils/log */ "./src/utils/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _utils_log__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils/assert */ "./src/utils/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _utils_assert__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_35__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_35__["isObjectEmpty"]; });

/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./utils/globals */ "./src/utils/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_36__["self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_36__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_36__["global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_36__["document"]; });

/* harmony import */ var _utils_is_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./utils/is-browser */ "./src/utils/is-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _utils_is_browser__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _classes_uniforms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./classes/uniforms */ "./src/classes/uniforms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUniformName", function() { return _classes_uniforms__WEBPACK_IMPORTED_MODULE_38__["parseUniformName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUniformSetter", function() { return _classes_uniforms__WEBPACK_IMPORTED_MODULE_38__["getUniformSetter"]; });

/* harmony import */ var _debug_debug_uniforms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./debug/debug-uniforms */ "./src/debug/debug-uniforms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDebugTableForUniforms", function() { return _debug_debug_uniforms__WEBPACK_IMPORTED_MODULE_39__["getDebugTableForUniforms"]; });

/* harmony import */ var _debug_debug_vertex_array__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./debug/debug-vertex-array */ "./src/debug/debug-vertex-array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDebugTableForVertexArray", function() { return _debug_debug_vertex_array__WEBPACK_IMPORTED_MODULE_40__["getDebugTableForVertexArray"]; });

/* harmony import */ var _debug_debug_program_configuration__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./debug/debug-program-configuration */ "./src/debug/debug-program-configuration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDebugTableForProgramConfiguration", function() { return _debug_debug_program_configuration__WEBPACK_IMPORTED_MODULE_41__["getDebugTableForProgramConfiguration"]; });

// luma.gl Base WebGL wrapper library
// Provides simple class/function wrappers around the low level webgl objects
// These classes are intentionally close to the WebGL API
// but make it easier to use.
// Higher level abstractions can be built on these classes

// Initialize any global state



// TODO - should we reexport these?


// Exports WebGL API constants and types, plus some basic type checks






// UTILS


// WebGL Functions









// WebGL Helper Classes


// WebGL1 classes










// Copy and Blit


// WebGL2 classes & Extensions







// experimental WebGL exports



// PARSE SHADER SOURCE



// UTILS






// INTERNAL






/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! exports provided: global, lumaStats, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lumaStats", function() { return lumaStats; });
/* harmony import */ var _utils_is_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-browser */ "./src/utils/is-browser.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/globals */ "./src/utils/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"]; });

/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/log */ "./src/utils/log.js");
/* harmony import */ var probe_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! probe.gl */ "../../node_modules/probe.gl/dist/esm/index.js");
/* harmony import */ var _luma_gl_webgl2_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @luma.gl/webgl2-polyfill */ "../webgl2-polyfill/src/index.js");





// TODO - when webgl2 gets ubiquitous, remove default support for webgl1 by dropping next line
// Can be installed by applications


// Version detection using babel plugin
/* global __VERSION__ */
const VERSION =  true ? "7.0.0-rc.3" : undefined;

const STARTUP_MESSAGE = 'set luma.log.priority=1 (or higher) to trace rendering';
// Assign luma.log.priority in console to control logging: \
// 0: none, 1: minimal, 2: verbose, 3: attribute/uniforms, 4: gl logs
// luma.log.break[], set to gl funcs, luma.log.profile[] set to model names`;

class StatsManager {
  constructor() {
    this.stats = new Map();
  }

  get(name) {
    if (!this.stats.has(name)) {
      this.stats.set(name, new probe_gl__WEBPACK_IMPORTED_MODULE_3__["Stats"]({id: name}));
    }

    return this.stats.get(name);
  }
}

const lumaStats = new StatsManager();

if (_utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"].luma && _utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"].luma.VERSION !== VERSION) {
  throw new Error(`luma.gl - multiple VERSIONs detected: ${_utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"].luma.VERSION} vs ${VERSION}`);
}

if (!_utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"].luma) {
  if (_utils_is_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].log(1, `luma.gl ${VERSION} - ${STARTUP_MESSAGE}`)();
  }

  _utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"].luma = _utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"].luma || {
    VERSION,
    version: VERSION,
    log: _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"],

    // A global stats object that various components can add information to
    // E.g. see webgl/resource.js
    stats: lumaStats,

    // Keep some luma globals in a sub-object
    // This allows us to dynamically detect if certain modules have been
    // included (such as IO and headless) and enable related functionality,
    // without unconditionally requiring and thus bundling big dependencies
    // into the app.
    globals: {
      modules: {},
      nodeIO: {}
    }
  };
}



/* harmony default export */ __webpack_exports__["default"] = (_utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"].luma);


/***/ }),

/***/ "./src/utils/array-utils-flat.js":
/*!***************************************!*\
  !*** ./src/utils/array-utils-flat.js ***!
  \***************************************/
/*! exports provided: getScratchArrayBuffer, getScratchArray, fillArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScratchArrayBuffer", function() { return getScratchArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScratchArray", function() { return getScratchArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillArray", function() { return fillArray; });
let arrayBuffer = null;

function getScratchArrayBuffer(byteLength) {
  if (!arrayBuffer || arrayBuffer.byteLength < byteLength) {
    arrayBuffer = new ArrayBuffer(byteLength);
  }
  return arrayBuffer;
}

function getScratchArray(Type, length) {
  const scratchArrayBuffer = getScratchArrayBuffer(Type.BYTES_PER_ELEMENT * length);
  return new Type(scratchArrayBuffer, 0, length); // arrayBuffer, byteOffset, length (in elements)
}

// Uses copyWithin to significantly speed up typed array value filling
function fillArray({target, source, start = 0, count = 1}) {
  const length = source.length;
  const total = count * length;
  let copied = 0;
  for (let i = start; copied < length; copied++) {
    target[i++] = source[copied];
  }

  while (copied < total) {
    // If we have copied less than half, copy everything we got
    // else copy remaining in one operation
    if (copied < total - copied) {
      target.copyWithin(start + copied, start, start + copied);
      copied *= 2;
    } else {
      target.copyWithin(start + copied, start, start + total - copied);
      copied = total;
    }
  }

  return target;
}

/*

// Creates a new Uint8Array based on two different ArrayBuffers
// @private
// @param {ArrayBuffers} buffer1 The first buffer.
// @param {ArrayBuffers} buffer2 The second buffer.
// @return {ArrayBuffers} The new ArrayBuffer created out of the two.
//
export function copyArrayBuffer(
  targetBuffer, sourceBuffer, byteOffset, byteLength = sourceBuffer.byteLength
) {
  const targetArray = new Uint8Array(targetBuffer, byteOffset, byteLength);
  const sourceArray = new Uint8Array(sourceBuffer);
  targetArray.set(sourceArray);
  return targetBuffer;
}

*/


/***/ }),

/***/ "./src/utils/assert.js":
/*!*****************************!*\
  !*** ./src/utils/assert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
// Recommendation is to ignore message but current test suite checks agains the
// message so keep it for now.
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'luma.gl: assertion failed.');
  }
}


/***/ }),

/***/ "./src/utils/check-props.js":
/*!**********************************!*\
  !*** ./src/utils/check-props.js ***!
  \**********************************/
/*! exports provided: checkProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProps", function() { return checkProps; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/utils/log.js");
/* Use as
import {checkProps} from '../util/check-props;'

const PROP_CHECKS = {
  // Removed props no longer supported, print error and link to upgrade guide
  removedProps: {
  },
  // Deprecated props
  deprecatedProps: {
    offset: 'accessor',
    stride: 'accessor',
    type: 'accessor',
    size: 'accessor',
    divisor: 'accessor',
    normalized: 'accessor',
    integer: 'accessor'
  },
  // Deprecated props that can be autosubstituted, print warning and return updated props object
  replacedProps: {
    bytes: 'byteLength'
  }
}

class Buffer {
  setProps(props) {
    checkProps('Buffer', props, PROP_CHECKS);
  }
}
*/


function checkProps(className, props, propChecks) {
  const {removedProps = {}, deprecatedProps = {}, replacedProps = {}} = propChecks;

  // removedProps: Removed props no longer supported
  // print error and link to upgrade guide
  for (const propName in removedProps) {
    if (propName in props) {
      const replacementProp = removedProps[propName];
      const replacement = replacementProp ? `${className}.${removedProps[propName]}` : 'N/A';
      _log__WEBPACK_IMPORTED_MODULE_0__["default"].removed(`${className}.${propName}`, replacement)();
    }
  }

  // deprecatedProps: Deprecated props that can not be autosubstituted
  // print warning and rely on caller to substitute
  for (const propName in deprecatedProps) {
    if (propName in props) {
      const replacementProp = deprecatedProps[propName];
      _log__WEBPACK_IMPORTED_MODULE_0__["default"].deprecated(`${className}.${propName}`, `${className}.${replacementProp}`)();
    }
  }

  // replacedProps: Deprecated props that can be autosubstituted
  // print warning and return updated props object
  let newProps = null;
  for (const propName in replacedProps) {
    if (propName in props) {
      const replacementProp = replacedProps[propName];
      _log__WEBPACK_IMPORTED_MODULE_0__["default"].deprecated(`${className}.${propName}`, `${className}.${replacementProp}`)();
      newProps = newProps || Object.assign({}, props);
      newProps[replacementProp] = props[propName];
      delete newProps[propName];
    }
  }

  return newProps || props;
}


/***/ }),

/***/ "./src/utils/format-value.js":
/*!***********************************!*\
  !*** ./src/utils/format-value.js ***!
  \***********************************/
/*! exports provided: formatValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
// TODO / DEPRECATED - delete when confident that probe.gl logging implements all opts
/* eslint-disable no-console */
function formatArrayValue(v, opts) {
  const {maxElts = 16, size = 1} = opts;
  let string = '[';
  for (let i = 0; i < v.length && i < maxElts; ++i) {
    if (i > 0) {
      string += `,${i % size === 0 ? ' ' : ''}`;
    }
    string += formatValue(v[i], opts);
  }
  const terminator = v.length > maxElts ? '...' : ']';
  return `${string}${terminator}`;
}

function formatValue(v, opts = {}) {
  const EPSILON = 1e-16;
  const {isInteger = false} = opts;
  if (Array.isArray(v) || ArrayBuffer.isView(v)) {
    return formatArrayValue(v, opts);
  }
  if (!Number.isFinite(v)) {
    return String(v);
  }
  if (Math.abs(v) < EPSILON) {
    return isInteger ? '0' : '0.';
  }
  if (isInteger) {
    return v.toFixed(0);
  }
  if (Math.abs(v) > 100 && Math.abs(v) < 10000) {
    return v.toFixed(0);
  }
  const string = v.toPrecision(2);
  const decimal = string.indexOf('.0');
  return decimal === string.length - 2 ? string.slice(0, -1) : string;
}


/***/ }),

/***/ "./src/utils/globals.js":
/*!******************************!*\
  !*** ./src/utils/globals.js ***!
  \******************************/
/*! exports provided: self, window, global, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document_; });
/* eslint-disable no-restricted-globals */
/* global self, window, global, document */
/* eslint-disable no-restricted-globals */
const globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global,
  document: typeof document !== 'undefined' && document
};

const self_ = globals.self || globals.window || globals.global;
const window_ = globals.window || globals.self || globals.global;
const global_ = globals.global || globals.self || globals.window;
const document_ = globals.document || {};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: assert, log, isBrowser, isOldIE, uid, isPowerOfTwo, isObjectEmpty, formatValue, stubRemovedMethods, checkProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./src/utils/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _assert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/utils/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _log__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-browser */ "./src/utils/is-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _is_browser__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _is_old_ie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-old-ie */ "./src/utils/is-old-ie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOldIE", function() { return _is_old_ie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPowerOfTwo", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["isPowerOfTwo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["isObjectEmpty"]; });

/* harmony import */ var _format_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-value */ "./src/utils/format-value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return _format_value__WEBPACK_IMPORTED_MODULE_5__["formatValue"]; });

/* harmony import */ var _stub_methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stub-methods */ "./src/utils/stub-methods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stubRemovedMethods", function() { return _stub_methods__WEBPACK_IMPORTED_MODULE_6__["stubRemovedMethods"]; });

/* harmony import */ var _check_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./check-props */ "./src/utils/check-props.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkProps", function() { return _check_props__WEBPACK_IMPORTED_MODULE_7__["checkProps"]; });











/***/ }),

/***/ "./src/utils/is-browser.js":
/*!*********************************!*\
  !*** ./src/utils/is-browser.js ***!
  \*********************************/
/*! exports provided: isBrowserMainThread, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserMainThread", function() { return isBrowserMainThread; });
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-electron */ "./src/utils/is-electron.js");
// This function is needed in initialization stages,
// make sure it can be imported in isolation
/* global process */



const isNode =
  typeof process === 'object' && String(process) === '[object process]' && !process.browser;

const isBrowser = !isNode || _is_electron__WEBPACK_IMPORTED_MODULE_0__["default"];

// document does not exist on worker thread
const isBrowserMainThread = isBrowser && typeof document !== 'undefined';

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils/is-electron.js":
/*!**********************************!*\
  !*** ./src/utils/is-electron.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {// based on https://github.com/cheton/is-electron
// https://github.com/electron/electron/issues/2288
/* global window, process, navigator */
function isElectron() {
  // Renderer process
  if (
    typeof window !== 'undefined' &&
    typeof window.process === 'object' &&
    window.process.type === 'renderer'
  ) {
    return true;
  }
  // Main process
  if (
    typeof process !== 'undefined' &&
    typeof process.versions === 'object' &&
    Boolean(process.versions.electron)
  ) {
    return true;
  }
  // Detect the user agent when the `nodeIntegration` option is set to true
  if (
    typeof navigator === 'object' &&
    typeof navigator.userAgent === 'string' &&
    navigator.userAgent.indexOf('Electron') >= 0
  ) {
    return true;
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (isElectron());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils/is-old-ie.js":
/*!********************************!*\
  !*** ./src/utils/is-old-ie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOldIE; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/utils/globals.js");


// opts allows user agent to be overridden for testing
function isOldIE(opts = {}) {
  const navigator = _globals__WEBPACK_IMPORTED_MODULE_0__["window"].navigator || {};
  const userAgent = opts.userAgent || navigator.userAgent || '';
  // We only care about older versions of IE (IE 11 and below). Newer versions of IE (Edge)
  // have much better web standards support.
  const isMSIE = userAgent.indexOf('MSIE ') !== -1;
  const isTrident = userAgent.indexOf('Trident/') !== -1;
  return isMSIE || isTrident;
}


/***/ }),

/***/ "./src/utils/load-file.js":
/*!********************************!*\
  !*** ./src/utils/load-file.js ***!
  \********************************/
/*! exports provided: setPathPrefix, loadFile, loadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPathPrefix", function() { return setPathPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFile", function() { return loadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* global fetch, Image */


let pathPrefix = '';

/*
 * Set a relative path prefix
 */
function setPathPrefix(prefix) {
  pathPrefix = prefix;
}

// Reads raw file data from:
function loadFile(url, options = {}) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(typeof url === 'string');
  url = pathPrefix + url;
  const dataType = options.dataType || 'text';
  return fetch(url, options).then(res => res[dataType]());
}

/*
 * Loads images asynchronously
 * image.crossOrigin can be set via opts.crossOrigin, default to 'anonymous'
 * returns a promise tracking the load
 */
function loadImage(url, opts) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(typeof url === 'string');
  url = pathPrefix + url;
  return new Promise((resolve, reject) => {
    try {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Could not load image ${url}.`));
      image.crossOrigin = (opts && opts.crossOrigin) || 'anonymous';
      image.src = url;
    } catch (error) {
      reject(error);
    }
  });
}


/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var probe_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! probe.gl */ "../../node_modules/probe.gl/dist/esm/index.js");


/* harmony default export */ __webpack_exports__["default"] = (new probe_gl__WEBPACK_IMPORTED_MODULE_0__["Log"]({id: 'luma'}).enable());


/***/ }),

/***/ "./src/utils/stub-methods.js":
/*!***********************************!*\
  !*** ./src/utils/stub-methods.js ***!
  \***********************************/
/*! exports provided: stubRemovedMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stubRemovedMethods", function() { return stubRemovedMethods; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/utils/log.js");


// Install stubs for removed methods
function stubRemovedMethods(instance, className, version, methodNames) {
  const upgradeMessage = `See luma.gl ${version} Upgrade Guide at \
http://uber.github.io/luma.gl/#/documentation/overview/upgrade-guide`;

  const prototype = Object.getPrototypeOf(instance);

  methodNames.forEach(methodName => {
    if (prototype.methodName) {
      return;
    }

    prototype[methodName] = () => {
      _log__WEBPACK_IMPORTED_MODULE_0__["default"].removed(`Calling removed method ${className}.${methodName}: `, upgradeMessage)();
      throw new Error(methodName);
    };
  });
}


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: uid, isPowerOfTwo, isObjectEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPowerOfTwo", function() { return isPowerOfTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./src/utils/assert.js");


const uidCounters = {};

/**
 * Returns a UID.
 * @param {String} id= - Identifier base name
 * @return {number} uid
 **/
function uid(id = 'id') {
  uidCounters[id] = uidCounters[id] || 1;
  const count = uidCounters[id]++;
  return `${id}-${count}`;
}

/**
 * Verifies if a given number is power of two or not.
 * @param {object} n - The number to check.
 * @return {Array} Returns true if the given number is power of 2, false otherwise.
 **/
function isPowerOfTwo(n) {
  Object(_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(typeof n === 'number', 'Input must be a number');
  return n && (n & (n - 1)) === 0;
}

// Returns true if given object is empty, false otherwise.
function isObjectEmpty(obj) {
  let isEmpty = true;
  /* eslint-disable no-unused-vars  */
  for (const key in obj) {
    isEmpty = false;
    break;
  }
  /* eslint-enable no-unused-vars  */
  return isEmpty;
}


/***/ }),

/***/ "./src/webgl-utils/attribute-utils.js":
/*!********************************************!*\
  !*** ./src/webgl-utils/attribute-utils.js ***!
  \********************************************/
/*! exports provided: getPrimitiveDrawMode, getPrimitiveCount, getVertexCount, decomposeCompositeGLType, getCompositeGLType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimitiveDrawMode", function() { return getPrimitiveDrawMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimitiveCount", function() { return getPrimitiveCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVertexCount", function() { return getVertexCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decomposeCompositeGLType", function() { return decomposeCompositeGLType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompositeGLType", function() { return getCompositeGLType; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* eslint-disable camelcase */


const GL_BYTE = 0x1400;
const GL_UNSIGNED_BYTE = 0x1401;
const GL_SHORT = 0x1402;
const GL_UNSIGNED_SHORT = 0x1403;

const GL_POINTS = 0x0;
const GL_LINES = 0x1;
const GL_LINE_LOOP = 0x2;
const GL_LINE_STRIP = 0x3;
const GL_TRIANGLES = 0x4;
const GL_TRIANGLE_STRIP = 0x5;
const GL_TRIANGLE_FAN = 0x6;

// Local constants - these will "collapse" during minification
const GL_FLOAT = 0x1406;
const GL_FLOAT_VEC2 = 0x8b50;
const GL_FLOAT_VEC3 = 0x8b51;
const GL_FLOAT_VEC4 = 0x8b52;

const GL_INT = 0x1404;
const GL_INT_VEC2 = 0x8b53;
const GL_INT_VEC3 = 0x8b54;
const GL_INT_VEC4 = 0x8b55;

const GL_UNSIGNED_INT = 0x1405;
const GL_UNSIGNED_INT_VEC2 = 0x8dc6;
const GL_UNSIGNED_INT_VEC3 = 0x8dc7;
const GL_UNSIGNED_INT_VEC4 = 0x8dc8;

const GL_BOOL = 0x8b56;
const GL_BOOL_VEC2 = 0x8b57;
const GL_BOOL_VEC3 = 0x8b58;
const GL_BOOL_VEC4 = 0x8b59;

const GL_FLOAT_MAT2 = 0x8b5a;
const GL_FLOAT_MAT3 = 0x8b5b;
const GL_FLOAT_MAT4 = 0x8b5c;

const GL_FLOAT_MAT2x3 = 0x8b65;
const GL_FLOAT_MAT2x4 = 0x8b66;
const GL_FLOAT_MAT3x2 = 0x8b67;
const GL_FLOAT_MAT3x4 = 0x8b68;
const GL_FLOAT_MAT4x2 = 0x8b69;
const GL_FLOAT_MAT4x3 = 0x8b6a;

// Composite types table
const COMPOSITE_GL_TYPES = {
  [GL_FLOAT]: [GL_FLOAT, 1, 'float'],
  [GL_FLOAT_VEC2]: [GL_FLOAT, 2, 'vec2'],
  [GL_FLOAT_VEC3]: [GL_FLOAT, 3, 'vec3'],
  [GL_FLOAT_VEC4]: [GL_FLOAT, 4, 'vec4'],

  [GL_INT]: [GL_INT, 1, 'int'],
  [GL_INT_VEC2]: [GL_INT, 2, 'ivec2'],
  [GL_INT_VEC3]: [GL_INT, 3, 'ivec3'],
  [GL_INT_VEC4]: [GL_INT, 4, 'ivec4'],

  [GL_UNSIGNED_INT]: [GL_UNSIGNED_INT, 1, 'uint'],
  [GL_UNSIGNED_INT_VEC2]: [GL_UNSIGNED_INT, 2, 'uvec2'],
  [GL_UNSIGNED_INT_VEC3]: [GL_UNSIGNED_INT, 3, 'uvec3'],
  [GL_UNSIGNED_INT_VEC4]: [GL_UNSIGNED_INT, 4, 'uvec4'],

  [GL_BOOL]: [GL_FLOAT, 1, 'bool'],
  [GL_BOOL_VEC2]: [GL_FLOAT, 2, 'bvec2'],
  [GL_BOOL_VEC3]: [GL_FLOAT, 3, 'bvec3'],
  [GL_BOOL_VEC4]: [GL_FLOAT, 4, 'bvec4'],

  [GL_FLOAT_MAT2]: [GL_FLOAT, 8, 'mat2'], // 4
  [GL_FLOAT_MAT2x3]: [GL_FLOAT, 8, 'mat2x3'], // 6
  [GL_FLOAT_MAT2x4]: [GL_FLOAT, 8, 'mat2x4'], // 8

  [GL_FLOAT_MAT3]: [GL_FLOAT, 12, 'mat3'], // 9
  [GL_FLOAT_MAT3x2]: [GL_FLOAT, 12, 'mat3x2'], // 6
  [GL_FLOAT_MAT3x4]: [GL_FLOAT, 12, 'mat3x4'], // 12

  [GL_FLOAT_MAT4]: [GL_FLOAT, 16, 'mat4'], // 16
  [GL_FLOAT_MAT4x2]: [GL_FLOAT, 16, 'mat4x2'], // 8
  [GL_FLOAT_MAT4x3]: [GL_FLOAT, 16, 'mat4x3'] // 12
};

// Counts the number of complete primitives given a number of vertices and a drawMode
function getPrimitiveDrawMode(drawMode) {
  switch (drawMode) {
    case GL_POINTS:
      return GL_POINTS;
    case GL_LINES:
      return GL_LINES;
    case GL_LINE_STRIP:
      return GL_LINES;
    case GL_LINE_LOOP:
      return GL_LINES;
    case GL_TRIANGLES:
      return GL_TRIANGLES;
    case GL_TRIANGLE_STRIP:
      return GL_TRIANGLES;
    case GL_TRIANGLE_FAN:
      return GL_TRIANGLES;
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
      return 0;
  }
}

// Counts the number of complete "primitives" given a number of vertices and a drawMode
function getPrimitiveCount({drawMode, vertexCount}) {
  switch (drawMode) {
    case GL_POINTS:
    case GL_LINE_LOOP:
      return vertexCount;
    case GL_LINES:
      return vertexCount / 2;
    case GL_LINE_STRIP:
      return vertexCount - 1;
    case GL_TRIANGLES:
      return vertexCount / 3;
    case GL_TRIANGLE_STRIP:
    case GL_TRIANGLE_FAN:
      return vertexCount - 2;
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
      return 0;
  }
}

// Counts the number of vertices after splitting the vertex stream into separate "primitives"
function getVertexCount({drawMode, vertexCount}) {
  const primitiveCount = getPrimitiveCount({drawMode, vertexCount});
  switch (getPrimitiveDrawMode(drawMode)) {
    case GL_POINTS:
      return primitiveCount;
    case GL_LINES:
      return primitiveCount * 2;
    case GL_TRIANGLES:
      return primitiveCount * 3;
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
      return 0;
  }
}

// Decomposes a composite type GL.VEC3 into a basic type (GL.FLOAT) and components (3)
function decomposeCompositeGLType(compositeGLType) {
  const typeAndSize = COMPOSITE_GL_TYPES[compositeGLType];
  if (!typeAndSize) {
    return null;
  }
  const [type, components] = typeAndSize;
  return {type, components};
}

function getCompositeGLType(type, components) {
  switch (type) {
    case GL_BYTE:
    case GL_UNSIGNED_BYTE:
    case GL_SHORT:
    case GL_UNSIGNED_SHORT:
      type = GL_FLOAT;
      break;
    default:
  }

  for (const glType in COMPOSITE_GL_TYPES) {
    const [compType, compComponents, name] = COMPOSITE_GL_TYPES[glType];
    if (compType === type && compComponents === components) {
      return {glType, name};
    }
  }
  return null;
}


/***/ }),

/***/ "./src/webgl-utils/constants-to-keys.js":
/*!**********************************************!*\
  !*** ./src/webgl-utils/constants-to-keys.js ***!
  \**********************************************/
/*! exports provided: getKeyValue, getKey, getKeyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyValue", function() { return getKeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyType", function() { return getKeyType; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");


// Resolve a WebGL enumeration name (returns itself if already a number)
function getKeyValue(gl, name) {
  // If not a string, return (assume number)
  if (typeof name !== 'string') {
    return name;
  }

  // If string converts to number, return number
  const number = Number(name);
  if (!isNaN(number)) {
    return number;
  }

  // Look up string, after removing any 'GL.' or 'gl.' prefix
  name = name.replace(/^.*\./, '');
  const value = gl[name];
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(value !== undefined, `Accessing undefined constant GL.${name}`);
  return value;
}

function getKey(gl, value) {
  value = Number(value);
  for (const key in gl) {
    if (gl[key] === value) {
      return `GL.${key}`;
    }
  }
  return String(value);
}

function getKeyType(gl, value) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(value !== undefined, 'undefined key');
  value = Number(value);
  for (const key in gl) {
    if (gl[key] === value) {
      return `GL.${key}`;
    }
  }
  return String(value);
}


/***/ }),

/***/ "./src/webgl-utils/format-utils.js":
/*!*****************************************!*\
  !*** ./src/webgl-utils/format-utils.js ***!
  \*****************************************/
/*! exports provided: glFormatToComponents, glTypeToBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glFormatToComponents", function() { return glFormatToComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glTypeToBytes", function() { return glTypeToBytes; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");



// Returns number of components in a specific readPixels WebGL format
function glFormatToComponents(format) {
  switch (format) {
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ALPHA:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.R32F:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RED:
      return 1;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG32F:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RG:
      return 2;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGB32F:
      return 3;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA32F:
      return 4;
    // TODO: Add support for additional WebGL2 formats
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(false);
      return 0;
  }
}

// Return byte count for given readPixels WebGL type
function glTypeToBytes(type) {
  switch (type) {
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE:
      return 1;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_5_6_5:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_4_4_4_4:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_5_5_5_1:
      return 2;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT:
      return 4;
    // TODO: Add support for additional WebGL2 types
    default:
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assert"])(false);
      return 0;
  }
}


/***/ }),

/***/ "./src/webgl-utils/index.js":
/*!**********************************!*\
  !*** ./src/webgl-utils/index.js ***!
  \**********************************/
/*! exports provided: Image, WebGLRenderingContext, WebGL2RenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, webGLTypesAvailable, isWebGL, isWebGL2, assertWebGLContext, assertWebGL2Context, requestAnimationFrame, cancelAnimationFrame, getGLTypeFromTypedArray, getTypedArrayFromGLType, flipRows, scalePixels, getKeyValue, getKey, getKeyType, cloneTextureFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl-types */ "./src/webgl-utils/webgl-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderingContext", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderingContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGL2RenderingContext", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGL2RenderingContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLProgram", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLShader", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLShader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLBuffer", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLFramebuffer", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLFramebuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderbuffer", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderbuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLTexture", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLTexture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLUniformLocation", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLUniformLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLActiveInfo", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLActiveInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebGLShaderPrecisionFormat", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["WebGLShaderPrecisionFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webGLTypesAvailable", function() { return _webgl_types__WEBPACK_IMPORTED_MODULE_0__["webGLTypesAvailable"]; });

/* harmony import */ var _webgl_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl-checks */ "./src/webgl-utils/webgl-checks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWebGL", function() { return _webgl_checks__WEBPACK_IMPORTED_MODULE_1__["isWebGL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWebGL2", function() { return _webgl_checks__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWebGLContext", function() { return _webgl_checks__WEBPACK_IMPORTED_MODULE_1__["assertWebGLContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWebGL2Context", function() { return _webgl_checks__WEBPACK_IMPORTED_MODULE_1__["assertWebGL2Context"]; });

/* harmony import */ var _request_animation_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-animation-frame */ "./src/webgl-utils/request-animation-frame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return _request_animation_frame__WEBPACK_IMPORTED_MODULE_2__["requestAnimationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return _request_animation_frame__WEBPACK_IMPORTED_MODULE_2__["cancelAnimationFrame"]; });

/* harmony import */ var _typed_array_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typed-array-utils */ "./src/webgl-utils/typed-array-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGLTypeFromTypedArray", function() { return _typed_array_utils__WEBPACK_IMPORTED_MODULE_3__["getGLTypeFromTypedArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTypedArrayFromGLType", function() { return _typed_array_utils__WEBPACK_IMPORTED_MODULE_3__["getTypedArrayFromGLType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipRows", function() { return _typed_array_utils__WEBPACK_IMPORTED_MODULE_3__["flipRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePixels", function() { return _typed_array_utils__WEBPACK_IMPORTED_MODULE_3__["scalePixels"]; });

/* harmony import */ var _constants_to_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-to-keys */ "./src/webgl-utils/constants-to-keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKeyValue", function() { return _constants_to_keys__WEBPACK_IMPORTED_MODULE_4__["getKeyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return _constants_to_keys__WEBPACK_IMPORTED_MODULE_4__["getKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKeyType", function() { return _constants_to_keys__WEBPACK_IMPORTED_MODULE_4__["getKeyType"]; });

/* harmony import */ var _texture_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./texture-utils */ "./src/webgl-utils/texture-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneTextureFrom", function() { return _texture_utils__WEBPACK_IMPORTED_MODULE_5__["cloneTextureFrom"]; });

// Exports WebGL API constants and types, plus some basic type checks













/***/ }),

/***/ "./src/webgl-utils/request-animation-frame.js":
/*!****************************************************!*\
  !*** ./src/webgl-utils/request-animation-frame.js ***!
  \****************************************************/
/*! exports provided: requestAnimationFrame, cancelAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
// Node.js polyfills for requestAnimationFrame and cancelAnimationFrame
/* global window, setTimeout, clearTimeout */

function requestAnimationFrame(callback) {
  return typeof window !== 'undefined' && window.requestAnimationFrame
    ? window.requestAnimationFrame(callback)
    : setTimeout(callback, 1000 / 60);
}

function cancelAnimationFrame(timerId) {
  return typeof window !== 'undefined' && window.cancelAnimationFrame
    ? window.cancelAnimationFrame(timerId)
    : clearTimeout(timerId);
}


/***/ }),

/***/ "./src/webgl-utils/texture-utils.js":
/*!******************************************!*\
  !*** ./src/webgl-utils/texture-utils.js ***!
  \******************************************/
/*! exports provided: cloneTextureFrom, toFramebuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneTextureFrom", function() { return cloneTextureFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFramebuffer", function() { return toFramebuffer; });
/* harmony import */ var _classes_texture_2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/texture-2d */ "./src/classes/texture-2d.js");
/* harmony import */ var _classes_texture_cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/texture-cube */ "./src/classes/texture-cube.js");
/* harmony import */ var _classes_texture_3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/texture-3d */ "./src/classes/texture-3d.js");
/* harmony import */ var _classes_framebuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/framebuffer */ "./src/classes/framebuffer.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
// TODO: Two subdirectories must not depend on each other (classes vs utils)!







// Clone a new texture object from a reference texture object.
function cloneTextureFrom(refTexture, overrides) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_5__["assert"])(
    refTexture instanceof _classes_texture_2d__WEBPACK_IMPORTED_MODULE_0__["default"] ||
      refTexture instanceof _classes_texture_cube__WEBPACK_IMPORTED_MODULE_1__["default"] ||
      refTexture instanceof _classes_texture_3d__WEBPACK_IMPORTED_MODULE_2__["default"]
  );

  const TextureType = refTexture.constructor;

  const {gl, width, height, format, type, dataFormat, border, mipmaps} = refTexture;

  const textureOptions = Object.assign(
    {
      width,
      height,
      format,
      type,
      dataFormat,
      border,
      mipmaps
    },
    overrides
  );

  // TODO: move this to `Texture` class as instance method and use this.constructor
  return new TextureType(gl, textureOptions);
}

// Wraps a given texture into a framebuffer object, that can be further used
// to read data from the texture object.
function toFramebuffer(texture, opts) {
  const {gl, width, height, id} = texture;
  const framebuffer = new _classes_framebuffer__WEBPACK_IMPORTED_MODULE_3__["default"](
    gl,
    Object.assign({}, opts, {
      id: `framebuffer-for-${id}`,
      width,
      height,
      attachments: {
        [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_4___default.a.COLOR_ATTACHMENT0]: texture
      }
    })
  );
  return framebuffer;
}


/***/ }),

/***/ "./src/webgl-utils/typed-array-utils.js":
/*!**********************************************!*\
  !*** ./src/webgl-utils/typed-array-utils.js ***!
  \**********************************************/
/*! exports provided: getGLTypeFromTypedArray, getTypedArrayFromGLType, flipRows, scalePixels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGLTypeFromTypedArray", function() { return getGLTypeFromTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypedArrayFromGLType", function() { return getTypedArrayFromGLType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipRows", function() { return flipRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePixels", function() { return scalePixels; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);


const ERR_TYPE_DEDUCTION = 'Failed to deduce GL constant from typed array';

// Converts TYPED ARRAYS to corresponding GL constant
// Used to auto deduce gl parameter types
function getGLTypeFromTypedArray(arrayOrType) {
  // If typed array, look up constructor
  const type = ArrayBuffer.isView(arrayOrType) ? arrayOrType.constructor : arrayOrType;
  switch (type) {
    case Float32Array:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT;
    case Uint16Array:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT;
    case Uint32Array:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT;
    case Uint8Array:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE;
    case Uint8ClampedArray:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE;
    case Int8Array:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BYTE;
    case Int16Array:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SHORT;
    case Int32Array:
      return _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT;
    default:
      throw new Error(ERR_TYPE_DEDUCTION);
  }
}

// Converts GL constant to corresponding TYPED ARRAY
// Used to auto deduce gl parameter types

/* eslint-disable complexity */
function getTypedArrayFromGLType(glType, {clamped = true} = {}) {
  // Sorted in some order of likelihood to reduce amount of comparisons
  switch (glType) {
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT:
      return Float32Array;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_5_6_5:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_4_4_4_4:
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_SHORT_5_5_5_1:
      return Uint16Array;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_INT:
      return Uint32Array;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNSIGNED_BYTE:
      return clamped ? Uint8ClampedArray : Uint8Array;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.BYTE:
      return Int8Array;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.SHORT:
      return Int16Array;
    case _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.INT:
      return Int32Array;
    default:
      throw new Error('Failed to deduce typed array type from GL constant');
  }
}
/* eslint-enable complexity */

// Flip rows (can be used on arrays returned from `Framebuffer.readPixels`)
// https://stackoverflow.com/questions/41969562/
// how-can-i-flip-the-result-of-webglrenderingcontext-readpixels
function flipRows({data, width, height, bytesPerPixel = 4, temp}) {
  const bytesPerRow = width * bytesPerPixel;

  // make a temp buffer to hold one row
  temp = temp || new Uint8Array(bytesPerRow);
  for (let y = 0; y < height / 2; ++y) {
    const topOffset = y * bytesPerRow;
    const bottomOffset = (height - y - 1) * bytesPerRow;
    // make copy of a row on the top half
    temp.set(data.subarray(topOffset, topOffset + bytesPerRow));
    // copy a row from the bottom half to the top
    data.copyWithin(topOffset, bottomOffset, bottomOffset + bytesPerRow);
    // copy the copy of the top half row to the bottom half
    data.set(temp, bottomOffset);
  }
}

function scalePixels({data, width, height}) {
  const newWidth = Math.round(width / 2);
  const newHeight = Math.round(height / 2);
  const newData = new Uint8Array(newWidth * newHeight * 4);
  for (let y = 0; y < newHeight; y++) {
    for (let x = 0; x < newWidth; x++) {
      for (let c = 0; c < 4; c++) {
        newData[(y * newWidth + x) * 4 + c] = data[(y * 2 * width + x * 2) * 4 + c];
      }
    }
  }
  return {data: newData, width: newWidth, height: newHeight};
}


/***/ }),

/***/ "./src/webgl-utils/webgl-checks.js":
/*!*****************************************!*\
  !*** ./src/webgl-utils/webgl-checks.js ***!
  \*****************************************/
/*! exports provided: ERR_CONTEXT, ERR_WEBGL, ERR_WEBGL2, isWebGL, isWebGL2, assertWebGLContext, assertWebGL2Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CONTEXT", function() { return ERR_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_WEBGL", function() { return ERR_WEBGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_WEBGL2", function() { return ERR_WEBGL2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGL", function() { return isWebGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGL2", function() { return isWebGL2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWebGLContext", function() { return assertWebGLContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWebGL2Context", function() { return assertWebGL2Context; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
// import {WebGLRenderingContext, WebGL2RenderingContext} from './webgl-types';


// Heuristic testing of contexts (to indentify debug wrappers around gl contexts)
// const GL_ARRAY_BUFFER = 0x8892;

const ERR_CONTEXT = 'Invalid WebGLRenderingContext';
const ERR_WEBGL = ERR_CONTEXT;
const ERR_WEBGL2 = 'Requires WebGL2';

function isWebGL(gl) {
  return Boolean(gl && Number.isFinite(gl._version));
}

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function assertWebGLContext(gl) {
  // Need to handle debug context
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(isWebGL(gl), ERR_CONTEXT);
}

function assertWebGL2Context(gl) {
  // Need to handle debug context
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(isWebGL2(gl), ERR_WEBGL2);
}


/***/ }),

/***/ "./src/webgl-utils/webgl-types.js":
/*!****************************************!*\
  !*** ./src/webgl-utils/webgl-types.js ***!
  \****************************************/
/*! exports provided: ERR_HEADLESSGL_LOAD, headlessTypes, headlessGL, webGLTypesAvailable, Image, WebGLRenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, WebGL2RenderingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_HEADLESSGL_LOAD", function() { return ERR_HEADLESSGL_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headlessTypes", function() { return headlessTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headlessGL", function() { return headlessGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webGLTypesAvailable", function() { return webGLTypesAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderingContext", function() { return WebGLRenderingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLProgram", function() { return WebGLProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLShader", function() { return WebGLShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLBuffer", function() { return WebGLBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLFramebuffer", function() { return WebGLFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderbuffer", function() { return WebGLRenderbuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLTexture", function() { return WebGLTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLUniformLocation", function() { return WebGLUniformLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLActiveInfo", function() { return WebGLActiveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLShaderPrecisionFormat", function() { return WebGLShaderPrecisionFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGL2RenderingContext", function() { return WebGL2RenderingContext; });
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _utils_is_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-browser */ "./src/utils/is-browser.js");
// WEBGL BUILT-IN TYPES
// 1) Exports all WebGL constants as {GL}
// 2) Enables app to "import" WebGL types
//    - Importing these types makes them known to eslint etc.
//    - Provides dummy types for WebGL2 when not available to streamline
//      library code.
//    - Exports types from headless gl when running under Node.js

/* eslint-disable quotes, no-console */



const ERR_HEADLESSGL_LOAD = `\
luma.gl: loaded under Node.js without headless gl installed, meaning that WebGL \
contexts can not be created. This may not be an error. For example, this is a \
typical configuration for isorender applications running on the server.`;

// Load headless gl dynamically, if available
let headlessTypes = null;
function headlessGL(...args) {
  const headless = __webpack_require__(/*! gl */ 1);
  if (!headless) {
    throw new Error(ERR_HEADLESSGL_LOAD);
  }
  return headless(...args);
}

if (!_utils_is_browser__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  try {
    headlessTypes = __webpack_require__(/*! gl/wrap */ 2);
  } catch (error) {
    // /* global console */
    // console.info(ERR_HEADLESSGL_LOAD);
  }
}

class DummyType {}

const {
  WebGLRenderingContext = DummyType,
  WebGLProgram = DummyType,
  WebGLShader = DummyType,
  WebGLBuffer = DummyType,
  WebGLFramebuffer = DummyType,
  WebGLRenderbuffer = DummyType,
  WebGLTexture = DummyType,
  WebGLUniformLocation = DummyType,
  WebGLActiveInfo = DummyType,
  WebGLShaderPrecisionFormat = DummyType
} = headlessTypes || _utils_globals__WEBPACK_IMPORTED_MODULE_0__["global"];

const webGLTypesAvailable =
  WebGLRenderingContext !== DummyType &&
  WebGLProgram !== DummyType &&
  WebGLShader !== DummyType &&
  WebGLBuffer !== DummyType &&
  WebGLFramebuffer !== DummyType &&
  WebGLRenderbuffer !== DummyType &&
  WebGLTexture !== DummyType &&
  WebGLUniformLocation !== DummyType &&
  WebGLActiveInfo !== DummyType &&
  WebGLShaderPrecisionFormat !== DummyType;

// Ensures that WebGL2RenderingContext is defined in non-WebGL2 environments
// so that apps can test their gl contexts with instanceof
// E.g. if (gl instanceof WebGL2RenderingContext) { }
function getWebGL2RenderingContext() {
  class WebGL2RenderingContextNotSupported {}
  return _utils_globals__WEBPACK_IMPORTED_MODULE_0__["global"].WebGL2RenderingContext || WebGL2RenderingContextNotSupported;
}

// Ensure that Image is defined under Node.js
function getImage() {
  class ImageNotSupported {}
  return _utils_globals__WEBPACK_IMPORTED_MODULE_0__["global"].Image || ImageNotSupported;
}

const WebGL2RenderingContext = getWebGL2RenderingContext();
const Image = getImage();

// Export the standard WebGL types



/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** asciify-image (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!********************!*\
  !*** gl (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*************************!*\
  !*** gl/wrap (ignored) ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});