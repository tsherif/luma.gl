import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import { trackContextState } from '@luma.gl/webgl-state-tracker';
import { createHeadlessContext } from './create-headless-context';
import { getCanvas } from './create-canvas';
import { createBrowserContext } from './create-browser-context';
import { getContextDebugInfo } from '../debug/get-context-debug-info';
import { WebGL2RenderingContext } from '../webgl-utils';
import { log as _log, isBrowser, assert } from '../utils';
import { global } from '../utils/globals';
export var ERR_CONTEXT = 'Invalid WebGLRenderingContext';
export var ERR_WEBGL = ERR_CONTEXT;
export var ERR_WEBGL2 = 'Requires WebGL2';
export function isWebGL(gl) {
  return Boolean(gl && Number.isFinite(gl._version));
}
export function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}
export function assertWebGLContext(gl) {
  assert(isWebGL(gl), ERR_CONTEXT);
}
export function assertWebGL2Context(gl) {
  assert(isWebGL2(gl), ERR_WEBGL2);
}
var contextDefaults = {
  webgl2: true,
  webgl1: true,
  throwOnFailure: true,
  manageState: true,
  canvas: null,
  debug: false,
  width: 800,
  height: 600
};
export function setGLContextDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.assign(contextDefaults, {
    width: 1,
    height: 1
  }, options);
}
export function createGLContext() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = Object.assign({}, contextDefaults, options);
  var _options = options,
      width = _options.width,
      height = _options.height;

  function onError(message) {
    if (options.throwOnError) {
      throw new Error(message);
    }

    return null;
  }

  var gl;

  if (isBrowser) {
    var _options2 = options,
        canvas = _options2.canvas;
    var targetCanvas = getCanvas({
      canvas: canvas,
      width: width,
      height: height,
      onError: onError
    });
    gl = createBrowserContext(targetCanvas, options);
  } else {
    gl = createHeadlessContext(_objectSpread({}, options, {
      width: width,
      height: height,
      onError: onError
    }));
  }

  if (!gl) {
    return null;
  }

  gl = instrumentGLContext(gl, options);
  logInfo(gl);
  return gl;
}
export function instrumentGLContext(gl) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (gl._instrumented) {
    return gl;
  }

  gl._version = gl._version || getVersion(gl);
  options = Object.assign({}, contextDefaults, options);
  var _options3 = options,
      manageState = _options3.manageState,
      debug = _options3.debug;

  if (manageState) {
    trackContextState(gl, {
      copyState: false,
      log: function log() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _log.log.apply(_log, [1].concat(args))();
      }
    });
  }

  if (isBrowser && debug) {
    if (!global.makeDebugContext) {
      _log.warn('WebGL debug mode not activated. import "@luma.gl/debug" to enable.')();
    } else {
      gl = global.makeDebugContext(gl, {
        debug: debug
      });
      _log.priority = Math.max(_log.priority, 1);
    }
  }

  gl._instrumented = true;
  return gl;
}
export function destroyGLContext(gl) {
  var ext = gl.getExtension('STACKGL_destroy_context');

  if (ext) {
    ext.destroy();
  }
}
export function resizeGLContext(gl) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (gl.canvas) {
    var devicePixelRatio = options.useDevicePixels ? window.devicePixelRatio || 1 : 1;
    var width = "width" in options ? options.width : gl.canvas.clientWidth;
    var height = "height" in options ? options.height : gl.canvas.clientHeight;
    gl.canvas.width = width * devicePixelRatio;
    gl.canvas.height = height * devicePixelRatio;
    return;
  }

  var ext = gl.getExtension('STACKGL_resize_drawingbuffer');

  if (ext && "width" in options && "height" in options) {
    ext.resize(options.width, options.height);
  }
}

function logInfo(gl) {
  var webGL = isWebGL2(gl) ? 'WebGL2' : 'WebGL1';
  var info = getContextDebugInfo(gl);
  var driver = info ? "(".concat(info.vendor, ",").concat(info.renderer, ")") : '';
  var debug = gl.debug ? ' debug' : '';

  _log.once(1, "".concat(webGL).concat(debug, " context ").concat(driver))();
}

function getVersion(gl) {
  if (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext) {
    return 2;
  }

  return 1;
}
//# sourceMappingURL=context.js.map