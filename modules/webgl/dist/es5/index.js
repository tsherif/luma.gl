"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "lumaStats", {
  enumerable: true,
  get: function get() {
    return _init.lumaStats;
  }
});
Object.defineProperty(exports, "resetParameters", {
  enumerable: true,
  get: function get() {
    return _webglStateTracker.resetParameters;
  }
});
Object.defineProperty(exports, "getParameter", {
  enumerable: true,
  get: function get() {
    return _webglStateTracker.getParameter;
  }
});
Object.defineProperty(exports, "getParameters", {
  enumerable: true,
  get: function get() {
    return _webglStateTracker.getParameters;
  }
});
Object.defineProperty(exports, "setParameter", {
  enumerable: true,
  get: function get() {
    return _webglStateTracker.setParameter;
  }
});
Object.defineProperty(exports, "setParameters", {
  enumerable: true,
  get: function get() {
    return _webglStateTracker.setParameters;
  }
});
Object.defineProperty(exports, "withParameters", {
  enumerable: true,
  get: function get() {
    return _webglStateTracker.withParameters;
  }
});
Object.defineProperty(exports, "getModifiedParameters", {
  enumerable: true,
  get: function get() {
    return _webglStateTracker.getModifiedParameters;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _webglTypes.Image;
  }
});
Object.defineProperty(exports, "WebGLRenderingContext", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLRenderingContext;
  }
});
Object.defineProperty(exports, "WebGLProgram", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLProgram;
  }
});
Object.defineProperty(exports, "WebGLShader", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLShader;
  }
});
Object.defineProperty(exports, "WebGLBuffer", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLBuffer;
  }
});
Object.defineProperty(exports, "WebGLFramebuffer", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLFramebuffer;
  }
});
Object.defineProperty(exports, "WebGLRenderbuffer", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLRenderbuffer;
  }
});
Object.defineProperty(exports, "WebGLTexture", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLTexture;
  }
});
Object.defineProperty(exports, "WebGLUniformLocation", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLUniformLocation;
  }
});
Object.defineProperty(exports, "WebGLActiveInfo", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLActiveInfo;
  }
});
Object.defineProperty(exports, "WebGLShaderPrecisionFormat", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGLShaderPrecisionFormat;
  }
});
Object.defineProperty(exports, "WebGL2RenderingContext", {
  enumerable: true,
  get: function get() {
    return _webglTypes.WebGL2RenderingContext;
  }
});
Object.defineProperty(exports, "webGLTypesAvailable", {
  enumerable: true,
  get: function get() {
    return _webglTypes.webGLTypesAvailable;
  }
});
Object.defineProperty(exports, "createGLContext", {
  enumerable: true,
  get: function get() {
    return _context.createGLContext;
  }
});
Object.defineProperty(exports, "destroyGLContext", {
  enumerable: true,
  get: function get() {
    return _context.destroyGLContext;
  }
});
Object.defineProperty(exports, "resizeGLContext", {
  enumerable: true,
  get: function get() {
    return _context.resizeGLContext;
  }
});
Object.defineProperty(exports, "instrumentGLContext", {
  enumerable: true,
  get: function get() {
    return _context.instrumentGLContext;
  }
});
Object.defineProperty(exports, "setGLContextDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setGLContextDefaults;
  }
});
Object.defineProperty(exports, "getCanvas", {
  enumerable: true,
  get: function get() {
    return _createCanvas.getCanvas;
  }
});
Object.defineProperty(exports, "getPageLoadPromise", {
  enumerable: true,
  get: function get() {
    return _createCanvas.getPageLoadPromise;
  }
});
Object.defineProperty(exports, "requestAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _requestAnimationFrame.requestAnimationFrame;
  }
});
Object.defineProperty(exports, "cancelAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _requestAnimationFrame.cancelAnimationFrame;
  }
});
Object.defineProperty(exports, "isWebGL", {
  enumerable: true,
  get: function get() {
    return _webglChecks.isWebGL;
  }
});
Object.defineProperty(exports, "isWebGL2", {
  enumerable: true,
  get: function get() {
    return _webglChecks.isWebGL2;
  }
});
Object.defineProperty(exports, "cloneTextureFrom", {
  enumerable: true,
  get: function get() {
    return _textureUtils.cloneTextureFrom;
  }
});
Object.defineProperty(exports, "getKeyValue", {
  enumerable: true,
  get: function get() {
    return _constantsToKeys.getKeyValue;
  }
});
Object.defineProperty(exports, "getKey", {
  enumerable: true,
  get: function get() {
    return _constantsToKeys.getKey;
  }
});
Object.defineProperty(exports, "getContextInfo", {
  enumerable: true,
  get: function get() {
    return _limits.getContextInfo;
  }
});
Object.defineProperty(exports, "getGLContextInfo", {
  enumerable: true,
  get: function get() {
    return _limits.getGLContextInfo;
  }
});
Object.defineProperty(exports, "getContextLimits", {
  enumerable: true,
  get: function get() {
    return _limits.getContextLimits;
  }
});
Object.defineProperty(exports, "getContextDebugInfo", {
  enumerable: true,
  get: function get() {
    return _getContextDebugInfo.getContextDebugInfo;
  }
});
Object.defineProperty(exports, "FEATURES", {
  enumerable: true,
  get: function get() {
    return _webglFeaturesTable.FEATURES;
  }
});
Object.defineProperty(exports, "hasFeature", {
  enumerable: true,
  get: function get() {
    return _features.hasFeature;
  }
});
Object.defineProperty(exports, "hasFeatures", {
  enumerable: true,
  get: function get() {
    return _features.hasFeatures;
  }
});
Object.defineProperty(exports, "getFeatures", {
  enumerable: true,
  get: function get() {
    return _features.getFeatures;
  }
});
Object.defineProperty(exports, "canCompileGLGSExtension", {
  enumerable: true,
  get: function get() {
    return _checkGlslExtension["default"];
  }
});
Object.defineProperty(exports, "Accessor", {
  enumerable: true,
  get: function get() {
    return _accessor["default"];
  }
});
Object.defineProperty(exports, "Buffer", {
  enumerable: true,
  get: function get() {
    return _buffer["default"];
  }
});
Object.defineProperty(exports, "Shader", {
  enumerable: true,
  get: function get() {
    return _shader.Shader;
  }
});
Object.defineProperty(exports, "VertexShader", {
  enumerable: true,
  get: function get() {
    return _shader.VertexShader;
  }
});
Object.defineProperty(exports, "FragmentShader", {
  enumerable: true,
  get: function get() {
    return _shader.FragmentShader;
  }
});
Object.defineProperty(exports, "Program", {
  enumerable: true,
  get: function get() {
    return _program["default"];
  }
});
Object.defineProperty(exports, "Framebuffer", {
  enumerable: true,
  get: function get() {
    return _framebuffer["default"];
  }
});
Object.defineProperty(exports, "Renderbuffer", {
  enumerable: true,
  get: function get() {
    return _renderbuffer["default"];
  }
});
Object.defineProperty(exports, "Texture2D", {
  enumerable: true,
  get: function get() {
    return _texture2d["default"];
  }
});
Object.defineProperty(exports, "TextureCube", {
  enumerable: true,
  get: function get() {
    return _textureCube["default"];
  }
});
Object.defineProperty(exports, "clear", {
  enumerable: true,
  get: function get() {
    return _clear.clear;
  }
});
Object.defineProperty(exports, "clearBuffer", {
  enumerable: true,
  get: function get() {
    return _clear.clearBuffer;
  }
});
Object.defineProperty(exports, "readPixelsToArray", {
  enumerable: true,
  get: function get() {
    return _copyAndBlit.readPixelsToArray;
  }
});
Object.defineProperty(exports, "readPixelsToBuffer", {
  enumerable: true,
  get: function get() {
    return _copyAndBlit.readPixelsToBuffer;
  }
});
Object.defineProperty(exports, "copyToDataUrl", {
  enumerable: true,
  get: function get() {
    return _copyAndBlit.copyToDataUrl;
  }
});
Object.defineProperty(exports, "copyToImage", {
  enumerable: true,
  get: function get() {
    return _copyAndBlit.copyToImage;
  }
});
Object.defineProperty(exports, "copyToTexture", {
  enumerable: true,
  get: function get() {
    return _copyAndBlit.copyToTexture;
  }
});
Object.defineProperty(exports, "blit", {
  enumerable: true,
  get: function get() {
    return _copyAndBlit.blit;
  }
});
Object.defineProperty(exports, "Query", {
  enumerable: true,
  get: function get() {
    return _query["default"];
  }
});
Object.defineProperty(exports, "Texture3D", {
  enumerable: true,
  get: function get() {
    return _texture3d["default"];
  }
});
Object.defineProperty(exports, "TransformFeedback", {
  enumerable: true,
  get: function get() {
    return _transformFeedback["default"];
  }
});
Object.defineProperty(exports, "VertexArrayObject", {
  enumerable: true,
  get: function get() {
    return _vertexArrayObject["default"];
  }
});
Object.defineProperty(exports, "VertexArray", {
  enumerable: true,
  get: function get() {
    return _vertexArray["default"];
  }
});
Object.defineProperty(exports, "UniformBufferLayout", {
  enumerable: true,
  get: function get() {
    return _uniformBufferLayout["default"];
  }
});
Object.defineProperty(exports, "setPathPrefix", {
  enumerable: true,
  get: function get() {
    return _loadFile.setPathPrefix;
  }
});
Object.defineProperty(exports, "loadFile", {
  enumerable: true,
  get: function get() {
    return _loadFile.loadFile;
  }
});
Object.defineProperty(exports, "loadImage", {
  enumerable: true,
  get: function get() {
    return _loadFile.loadImage;
  }
});
Object.defineProperty(exports, "getShaderName", {
  enumerable: true,
  get: function get() {
    return _getShaderName["default"];
  }
});
Object.defineProperty(exports, "getShaderVersion", {
  enumerable: true,
  get: function get() {
    return _getShaderVersion["default"];
  }
});
Object.defineProperty(exports, "log", {
  enumerable: true,
  get: function get() {
    return _log["default"];
  }
});
Object.defineProperty(exports, "assert", {
  enumerable: true,
  get: function get() {
    return _assert["default"];
  }
});
Object.defineProperty(exports, "uid", {
  enumerable: true,
  get: function get() {
    return _utils.uid;
  }
});
Object.defineProperty(exports, "isObjectEmpty", {
  enumerable: true,
  get: function get() {
    return _utils.isObjectEmpty;
  }
});
Object.defineProperty(exports, "self", {
  enumerable: true,
  get: function get() {
    return _globals.self;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _globals.window;
  }
});
Object.defineProperty(exports, "global", {
  enumerable: true,
  get: function get() {
    return _globals.global;
  }
});
Object.defineProperty(exports, "document", {
  enumerable: true,
  get: function get() {
    return _globals.document;
  }
});
Object.defineProperty(exports, "isBrowser", {
  enumerable: true,
  get: function get() {
    return _isBrowser["default"];
  }
});
Object.defineProperty(exports, "parseUniformName", {
  enumerable: true,
  get: function get() {
    return _uniforms.parseUniformName;
  }
});
Object.defineProperty(exports, "getUniformSetter", {
  enumerable: true,
  get: function get() {
    return _uniforms.getUniformSetter;
  }
});
Object.defineProperty(exports, "getDebugTableForUniforms", {
  enumerable: true,
  get: function get() {
    return _debugUniforms.getDebugTableForUniforms;
  }
});
Object.defineProperty(exports, "getDebugTableForVertexArray", {
  enumerable: true,
  get: function get() {
    return _debugVertexArray.getDebugTableForVertexArray;
  }
});
Object.defineProperty(exports, "getDebugTableForProgramConfiguration", {
  enumerable: true,
  get: function get() {
    return _debugProgramConfiguration.getDebugTableForProgramConfiguration;
  }
});

var _init = require("./init");

var _webglStateTracker = require("@luma.gl/webgl-state-tracker");

var _webglTypes = require("./webgl-utils/webgl-types");

var _context = require("./context/context");

var _createCanvas = require("./context/create-canvas");

var _requestAnimationFrame = require("./webgl-utils/request-animation-frame");

var _webglChecks = require("./webgl-utils/webgl-checks");

var _textureUtils = require("./webgl-utils/texture-utils");

var _constantsToKeys = require("./webgl-utils/constants-to-keys");

var _limits = require("./features/limits");

var _getContextDebugInfo = require("./debug/get-context-debug-info");

var _webglFeaturesTable = require("./features/webgl-features-table");

var _features = require("./features/features");

var _checkGlslExtension = _interopRequireDefault(require("./features/check-glsl-extension"));

var _accessor = _interopRequireDefault(require("./classes/accessor"));

var _buffer = _interopRequireDefault(require("./classes/buffer"));

var _shader = require("./classes/shader");

var _program = _interopRequireDefault(require("./classes/program"));

var _framebuffer = _interopRequireDefault(require("./classes/framebuffer"));

var _renderbuffer = _interopRequireDefault(require("./classes/renderbuffer"));

var _texture2d = _interopRequireDefault(require("./classes/texture-2d"));

var _textureCube = _interopRequireDefault(require("./classes/texture-cube"));

var _clear = require("./classes/clear");

var _copyAndBlit = require("./classes/copy-and-blit");

var _query = _interopRequireDefault(require("./classes/query"));

var _texture3d = _interopRequireDefault(require("./classes/texture-3d"));

var _transformFeedback = _interopRequireDefault(require("./classes/transform-feedback"));

var _vertexArrayObject = _interopRequireDefault(require("./classes/vertex-array-object"));

var _vertexArray = _interopRequireDefault(require("./classes/vertex-array"));

var _uniformBufferLayout = _interopRequireDefault(require("./classes/uniform-buffer-layout"));

var _loadFile = require("./utils/load-file");

var _getShaderName = _interopRequireDefault(require("./glsl-utils/get-shader-name"));

var _getShaderVersion = _interopRequireDefault(require("./glsl-utils/get-shader-version"));

var _log = _interopRequireDefault(require("./utils/log"));

var _assert = _interopRequireDefault(require("./utils/assert"));

var _utils = require("./utils/utils");

var _globals = require("./utils/globals");

var _isBrowser = _interopRequireDefault(require("./utils/is-browser"));

var _uniforms = require("./classes/uniforms");

var _debugUniforms = require("./debug/debug-uniforms");

var _debugVertexArray = require("./debug/debug-vertex-array");

var _debugProgramConfiguration = require("./debug/debug-program-configuration");
//# sourceMappingURL=index.js.map