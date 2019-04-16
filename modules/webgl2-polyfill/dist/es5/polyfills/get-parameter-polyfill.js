"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParameterPolyfill = getParameterPolyfill;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _WEBGL_PARAMETERS;

var OES_element_index = 'OES_element_index';
var WEBGL_draw_buffers = 'WEBGL_draw_buffers';
var EXT_disjoint_timer_query = 'EXT_disjoint_timer_query';
var EXT_disjoint_timer_query_webgl2 = 'EXT_disjoint_timer_query_webgl2';
var EXT_texture_filter_anisotropic = 'EXT_texture_filter_anisotropic';
var WEBGL_debug_renderer_info = 'WEBGL_debug_renderer_info';
var GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;
var GL_DONT_CARE = 0x1100;
var GL_GPU_DISJOINT_EXT = 0x8fbb;
var GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff;
var GL_UNMASKED_VENDOR_WEBGL = 0x9245;
var GL_UNMASKED_RENDERER_WEBGL = 0x9246;

var getWebGL2ValueOrZero = function getWebGL2ValueOrZero(gl) {
  return !isWebGL2(gl) ? 0 : undefined;
};

var WEBGL_PARAMETERS = (_WEBGL_PARAMETERS = {}, (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 3074, function (gl) {
  return !isWebGL2(gl) ? 36064 : undefined;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, GL_FRAGMENT_SHADER_DERIVATIVE_HINT, function (gl) {
  return !isWebGL2(gl) ? GL_DONT_CARE : undefined;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35977, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 32937, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, GL_GPU_DISJOINT_EXT, function (gl, getParameter) {
  var ext = isWebGL2(gl) ? gl.getExtension(EXT_disjoint_timer_query_webgl2) : gl.getExtension(EXT_disjoint_timer_query);
  return ext && ext.GPU_DISJOINT_EXT ? getParameter(ext.GPU_DISJOINT_EXT) : 0;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, GL_UNMASKED_VENDOR_WEBGL, function (gl, getParameter) {
  var ext = gl.getExtension(WEBGL_debug_renderer_info);
  return getParameter(ext && ext.UNMASKED_VENDOR_WEBGL || 7936);
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, GL_UNMASKED_RENDERER_WEBGL, function (gl, getParameter) {
  var ext = gl.getExtension(WEBGL_debug_renderer_info);
  return getParameter(ext && ext.UNMASKED_RENDERER_WEBGL || 7937);
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT, function (gl, getParameter) {
  var ext = gl.luma.extensions[EXT_texture_filter_anisotropic];
  return ext ? getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1.0;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 32883, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35071, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 37447, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 36063, function (gl, getParameter) {
  if (!isWebGL2(gl)) {
    var ext = gl.getExtension(WEBGL_draw_buffers);
    return ext ? getParameter(ext.MAX_COLOR_ATTACHMENTS_WEBGL) : 0;
  }

  return undefined;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35379, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35374, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35377, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 34852, function (gl) {
  if (!isWebGL2(gl)) {
    var ext = gl.getExtension(WEBGL_draw_buffers);
    return ext ? ext.MAX_DRAW_BUFFERS_WEBGL : 0;
  }

  return undefined;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 36203, function (gl) {
  return gl.getExtension(OES_element_index) ? 2147483647 : 65535;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 33001, function (gl) {
  return gl.getExtension(OES_element_index) ? 16777216 : 65535;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 33000, function (gl) {
  return 16777216;
}), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 37157, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35373, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35657, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 36183, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 37137, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 34045, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35978, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35979, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35968, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35376, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35375, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35659, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 37154, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35371, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35658, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35076, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35077, getWebGL2ValueOrZero), (0, _defineProperty2["default"])(_WEBGL_PARAMETERS, 35380, getWebGL2ValueOrZero), _WEBGL_PARAMETERS);

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function getParameterPolyfill(gl, originalGetParameter, pname) {
  var limit = WEBGL_PARAMETERS[pname];
  var value = typeof limit === 'function' ? limit(gl, originalGetParameter, pname) : limit;
  var result = value !== undefined ? value : originalGetParameter(pname);
  return result;
}
//# sourceMappingURL=get-parameter-polyfill.js.map