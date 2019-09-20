import assert from './assert';
import { WEBGL2_CONTEXT_POLYFILLS, WEBGL2_CONTEXT_OVERRIDES } from './polyfill-table';
export default function polyfillContext(gl) {
  gl.luma = gl.luma || {};
  initializeExtensions(gl);

  if (!gl.luma.polyfilled) {
    installPolyfills(gl, WEBGL2_CONTEXT_POLYFILLS);
    installOverrides(gl, {
      target: gl.luma,
      target2: gl
    });
    gl.luma.polyfilled = true;
  }

  return gl;
}
var global_ = typeof global !== 'undefined' ? global : window;
global_.polyfillContext = polyfillContext;

function initializeExtensions(gl) {
  gl.luma.extensions = {};
  var EXTENSIONS = gl.getSupportedExtensions() || [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = EXTENSIONS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var extension = _step.value;
      gl.luma[extension] = gl.getExtension(extension);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function installOverrides(gl, _ref) {
  var target = _ref.target,
      target2 = _ref.target2;
  Object.keys(WEBGL2_CONTEXT_OVERRIDES).forEach(function (key) {
    if (typeof WEBGL2_CONTEXT_OVERRIDES[key] === 'function') {
      var originalFunc = gl[key] ? gl[key].bind(gl) : function () {};
      var polyfill = WEBGL2_CONTEXT_OVERRIDES[key].bind(null, gl, originalFunc);
      target[key] = polyfill;
      target2[key] = polyfill;
    }
  });
}

function installPolyfills(gl, polyfills) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.getOwnPropertyNames(polyfills)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var extension = _step2.value;

      if (extension !== 'overrides') {
        polyfillExtension(gl, {
          extension: extension,
          target: gl.luma,
          target2: gl
        });
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function polyfillExtension(gl, _ref2) {
  var extension = _ref2.extension,
      target = _ref2.target,
      target2 = _ref2.target2;
  var defaults = WEBGL2_CONTEXT_POLYFILLS[extension];
  assert(defaults);
  var _defaults$meta = defaults.meta,
      meta = _defaults$meta === void 0 ? {} : _defaults$meta;
  var _meta$suffix = meta.suffix,
      suffix = _meta$suffix === void 0 ? '' : _meta$suffix;
  var ext = gl.getExtension(extension);

  var _loop = function _loop() {
    var key = _Object$keys[_i];
    var extKey = "".concat(key).concat(suffix);
    var polyfill = null;

    if (key === 'meta') {} else if (typeof gl[key] === 'function') {} else if (ext && typeof ext[extKey] === 'function') {
      polyfill = function polyfill() {
        return ext[extKey].apply(ext, arguments);
      };
    } else if (typeof defaults[key] === 'function') {
      polyfill = defaults[key].bind(target);
    }

    if (polyfill) {
      target[key] = polyfill;
      target2[key] = polyfill;
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(defaults); _i < _Object$keys.length; _i++) {
    _loop();
  }
}
//# sourceMappingURL=polyfill-context.js.map