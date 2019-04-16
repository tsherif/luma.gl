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

/***/ "./src/assert.js":
/*!***********************!*\
  !*** ./src/assert.js ***!
  \***********************/
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: polyfillContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill-context */ "./src/polyfill-context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polyfillContext", function() { return _polyfill_context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _polyfill_context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// Installs polyfills to support a subset of WebGL2 APIs on WebGL1 contexts





/***/ }),

/***/ "./src/polyfill-context.js":
/*!*********************************!*\
  !*** ./src/polyfill-context.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return polyfillContext; });
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./src/assert.js");
/* harmony import */ var _polyfill_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill-table */ "./src/polyfill-table.js");
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

/***/ "./src/polyfill-table.js":
/*!*******************************!*\
  !*** ./src/polyfill-table.js ***!
  \*******************************/
/*! exports provided: WEBGL2_CONTEXT_POLYFILLS, WEBGL2_CONTEXT_OVERRIDES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL2_CONTEXT_POLYFILLS", function() { return WEBGL2_CONTEXT_POLYFILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL2_CONTEXT_OVERRIDES", function() { return WEBGL2_CONTEXT_OVERRIDES; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "../constants/src/index.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assert */ "./src/assert.js");
/* harmony import */ var _polyfills_get_parameter_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills/get-parameter-polyfill */ "./src/polyfills/get-parameter-polyfill.js");





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

/***/ "./src/polyfills/get-parameter-polyfill.js":
/*!*************************************************!*\
  !*** ./src/polyfills/get-parameter-polyfill.js ***!
  \*************************************************/
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


/***/ })

/******/ });
});