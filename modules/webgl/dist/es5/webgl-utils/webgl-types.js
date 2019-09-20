"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headlessGL = headlessGL;
exports.WebGL2RenderingContext = exports.WebGLShaderPrecisionFormat = exports.WebGLActiveInfo = exports.WebGLUniformLocation = exports.WebGLTexture = exports.WebGLRenderbuffer = exports.WebGLFramebuffer = exports.WebGLBuffer = exports.WebGLShader = exports.WebGLProgram = exports.WebGLRenderingContext = exports.Image = exports.webGLTypesAvailable = exports.headlessTypes = exports.ERR_HEADLESSGL_LOAD = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _globals = require("../utils/globals");

var _isBrowser = _interopRequireDefault(require("../utils/is-browser"));

var ERR_HEADLESSGL_LOAD = "luma.gl: loaded under Node.js without headless gl installed, meaning that WebGL contexts can not be created. This may not be an error. For example, this is a typical configuration for isorender applications running on the server.";
exports.ERR_HEADLESSGL_LOAD = ERR_HEADLESSGL_LOAD;
var headlessTypes = null;
exports.headlessTypes = headlessTypes;

function headlessGL() {
  var headless = module.require('gl');

  if (!headless) {
    throw new Error(ERR_HEADLESSGL_LOAD);
  }

  return headless.apply(void 0, arguments);
}

if (!_isBrowser["default"]) {
  try {
    exports.headlessTypes = headlessTypes = module.require('gl/wrap');
  } catch (error) {}
}

var DummyType = function DummyType() {
  (0, _classCallCheck2["default"])(this, DummyType);
};

var _ref = headlessTypes || _globals.global,
    _ref$WebGLRenderingCo = _ref.WebGLRenderingContext,
    WebGLRenderingContext = _ref$WebGLRenderingCo === void 0 ? DummyType : _ref$WebGLRenderingCo,
    _ref$WebGLProgram = _ref.WebGLProgram,
    WebGLProgram = _ref$WebGLProgram === void 0 ? DummyType : _ref$WebGLProgram,
    _ref$WebGLShader = _ref.WebGLShader,
    WebGLShader = _ref$WebGLShader === void 0 ? DummyType : _ref$WebGLShader,
    _ref$WebGLBuffer = _ref.WebGLBuffer,
    WebGLBuffer = _ref$WebGLBuffer === void 0 ? DummyType : _ref$WebGLBuffer,
    _ref$WebGLFramebuffer = _ref.WebGLFramebuffer,
    WebGLFramebuffer = _ref$WebGLFramebuffer === void 0 ? DummyType : _ref$WebGLFramebuffer,
    _ref$WebGLRenderbuffe = _ref.WebGLRenderbuffer,
    WebGLRenderbuffer = _ref$WebGLRenderbuffe === void 0 ? DummyType : _ref$WebGLRenderbuffe,
    _ref$WebGLTexture = _ref.WebGLTexture,
    WebGLTexture = _ref$WebGLTexture === void 0 ? DummyType : _ref$WebGLTexture,
    _ref$WebGLUniformLoca = _ref.WebGLUniformLocation,
    WebGLUniformLocation = _ref$WebGLUniformLoca === void 0 ? DummyType : _ref$WebGLUniformLoca,
    _ref$WebGLActiveInfo = _ref.WebGLActiveInfo,
    WebGLActiveInfo = _ref$WebGLActiveInfo === void 0 ? DummyType : _ref$WebGLActiveInfo,
    _ref$WebGLShaderPreci = _ref.WebGLShaderPrecisionFormat,
    WebGLShaderPrecisionFormat = _ref$WebGLShaderPreci === void 0 ? DummyType : _ref$WebGLShaderPreci;

exports.WebGLShaderPrecisionFormat = WebGLShaderPrecisionFormat;
exports.WebGLActiveInfo = WebGLActiveInfo;
exports.WebGLUniformLocation = WebGLUniformLocation;
exports.WebGLTexture = WebGLTexture;
exports.WebGLRenderbuffer = WebGLRenderbuffer;
exports.WebGLFramebuffer = WebGLFramebuffer;
exports.WebGLBuffer = WebGLBuffer;
exports.WebGLShader = WebGLShader;
exports.WebGLProgram = WebGLProgram;
exports.WebGLRenderingContext = WebGLRenderingContext;
var webGLTypesAvailable = WebGLRenderingContext !== DummyType && WebGLProgram !== DummyType && WebGLShader !== DummyType && WebGLBuffer !== DummyType && WebGLFramebuffer !== DummyType && WebGLRenderbuffer !== DummyType && WebGLTexture !== DummyType && WebGLUniformLocation !== DummyType && WebGLActiveInfo !== DummyType && WebGLShaderPrecisionFormat !== DummyType;
exports.webGLTypesAvailable = webGLTypesAvailable;

function getWebGL2RenderingContext() {
  var WebGL2RenderingContextNotSupported = function WebGL2RenderingContextNotSupported() {
    (0, _classCallCheck2["default"])(this, WebGL2RenderingContextNotSupported);
  };

  return _globals.global.WebGL2RenderingContext || WebGL2RenderingContextNotSupported;
}

function getImage() {
  var ImageNotSupported = function ImageNotSupported() {
    (0, _classCallCheck2["default"])(this, ImageNotSupported);
  };

  return _globals.global.Image || ImageNotSupported;
}

var WebGL2RenderingContext = getWebGL2RenderingContext();
exports.WebGL2RenderingContext = WebGL2RenderingContext;
var Image = getImage();
exports.Image = Image;
//# sourceMappingURL=webgl-types.js.map