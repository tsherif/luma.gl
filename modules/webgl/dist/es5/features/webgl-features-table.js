"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FEATURES = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _webglUtils = require("../webgl-utils");

var _FEATURES$WEBGL2$FEAT;

var FEATURES = {
  WEBGL2: 'WEBGL2',
  VERTEX_ARRAY_OBJECT: 'VERTEX_ARRAY_OBJECT',
  TIMER_QUERY: 'TIMER_QUERY',
  INSTANCED_RENDERING: 'INSTANCED_RENDERING',
  MULTIPLE_RENDER_TARGETS: 'MULTIPLE_RENDER_TARGETS',
  ELEMENT_INDEX_UINT32: 'ELEMENT_INDEX_UINT32',
  BLEND_EQUATION_MINMAX: 'BLEND_EQUATION_MINMAX',
  COLOR_ENCODING_SRGB: 'COLOR_ENCODING_SRGB',
  TEXTURE_DEPTH: 'TEXTURE_DEPTH',
  TEXTURE_FLOAT: 'TEXTURE_FLOAT',
  TEXTURE_HALF_FLOAT: 'TEXTURE_HALF_FLOAT',
  TEXTURE_FILTER_LINEAR_FLOAT: 'TEXTURE_FILTER_LINEAR_FLOAT',
  TEXTURE_FILTER_LINEAR_HALF_FLOAT: 'TEXTURE_FILTER_LINEAR_HALF_FLOAT',
  TEXTURE_FILTER_ANISOTROPIC: 'TEXTURE_FILTER_ANISOTROPIC',
  COLOR_ATTACHMENT_RGBA32F: 'COLOR_ATTACHMENT_RGBA32F',
  COLOR_ATTACHMENT_FLOAT: 'COLOR_ATTACHMENT_FLOAT',
  COLOR_ATTACHMENT_HALF_FLOAT: 'COLOR_ATTACHMENT_HALF_FLOAT',
  GLSL_FRAG_DATA: 'GLSL_FRAG_DATA',
  GLSL_FRAG_DEPTH: 'GLSL_FRAG_DEPTH',
  GLSL_DERIVATIVES: 'GLSL_DERIVATIVES',
  GLSL_TEXTURE_LOD: 'GLSL_TEXTURE_LOD'
};
exports.FEATURES = FEATURES;

var _default = (_FEATURES$WEBGL2$FEAT = {}, (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.WEBGL2, [function (gl) {
  return (0, _webglUtils.isWebGL2)(gl);
}]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.VERTEX_ARRAY_OBJECT, ['OES_vertex_array_object', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.TIMER_QUERY, ['EXT_disjoint_timer_query', 'EXT_disjoint_timer_query_webgl2']), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.INSTANCED_RENDERING, ['ANGLE_instanced_arrays', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.MULTIPLE_RENDER_TARGETS, ['WEBGL_draw_buffers', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.ELEMENT_INDEX_UINT32, ['OES_element_index_uint', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.BLEND_EQUATION_MINMAX, ['EXT_blend_minmax', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.COLOR_ENCODING_SRGB, ['EXT_sRGB', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.TEXTURE_DEPTH, ['WEBGL_depth_texture', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.TEXTURE_FLOAT, ['OES_texture_float', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.TEXTURE_HALF_FLOAT, ['OES_texture_half_float', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.TEXTURE_FILTER_LINEAR_FLOAT, ['OES_texture_float_linear']), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.TEXTURE_FILTER_LINEAR_HALF_FLOAT, ['OES_texture_half_float_linear']), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.TEXTURE_FILTER_ANISOTROPIC, ['EXT_texture_filter_anisotropic']), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.COLOR_ATTACHMENT_RGBA32F, ['WEBGL_color_buffer_float', 'EXT_color_buffer_float']), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.COLOR_ATTACHMENT_FLOAT, [false, 'EXT_color_buffer_float']), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.COLOR_ATTACHMENT_HALF_FLOAT, [false, 'EXT_color_buffer_half_float']), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.GLSL_FRAG_DATA, ['WEBGL_draw_buffers', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.GLSL_FRAG_DEPTH, ['EXT_frag_depth', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.GLSL_DERIVATIVES, ['OES_standard_derivatives', true]), (0, _defineProperty2["default"])(_FEATURES$WEBGL2$FEAT, FEATURES.GLSL_TEXTURE_LOD, ['EXT_shader_texture_lod', true]), _FEATURES$WEBGL2$FEAT);

exports["default"] = _default;
//# sourceMappingURL=webgl-features-table.js.map