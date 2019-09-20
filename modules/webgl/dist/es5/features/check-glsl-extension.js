"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = canCompileGLGSExtension;

var _checkOldIe = _interopRequireDefault(require("./check-old-ie"));

var _webglFeaturesTable = _interopRequireDefault(require("./webgl-features-table"));

var _utils = require("../utils");

var compiledGlslExtensions = {};

function canCompileGLGSExtension(gl, cap) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var feature = _webglFeaturesTable["default"][cap];
  (0, _utils.assert)(feature, cap);

  if (!(0, _checkOldIe["default"])(options)) {
    return true;
  }

  if (cap in compiledGlslExtensions) {
    return compiledGlslExtensions[cap];
  }

  var extensionName = feature[0];
  var source = "#extension GL_".concat(extensionName, " : enable\nvoid main(void) {}");
  var shader = gl.createShader(35633);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var canCompile = gl.getShaderParameter(shader, 35713);
  gl.deleteShader(shader);
  compiledGlslExtensions[cap] = canCompile;
  return canCompile;
}
//# sourceMappingURL=check-glsl-extension.js.map