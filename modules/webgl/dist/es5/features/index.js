"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
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

var _limits = require("./limits");

var _webglFeaturesTable = require("./webgl-features-table");

var _features = require("./features");

var _checkGlslExtension = _interopRequireDefault(require("./check-glsl-extension"));
//# sourceMappingURL=index.js.map