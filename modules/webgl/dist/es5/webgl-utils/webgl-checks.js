"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWebGL = isWebGL;
exports.isWebGL2 = isWebGL2;
exports.assertWebGLContext = assertWebGLContext;
exports.assertWebGL2Context = assertWebGL2Context;
exports.ERR_WEBGL2 = exports.ERR_WEBGL = exports.ERR_CONTEXT = void 0;

var _utils = require("../utils");

var ERR_CONTEXT = 'Invalid WebGLRenderingContext';
exports.ERR_CONTEXT = ERR_CONTEXT;
var ERR_WEBGL = ERR_CONTEXT;
exports.ERR_WEBGL = ERR_WEBGL;
var ERR_WEBGL2 = 'Requires WebGL2';
exports.ERR_WEBGL2 = ERR_WEBGL2;

function isWebGL(gl) {
  return Boolean(gl && Number.isFinite(gl._version));
}

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function assertWebGLContext(gl) {
  (0, _utils.assert)(isWebGL(gl), ERR_CONTEXT);
}

function assertWebGL2Context(gl) {
  (0, _utils.assert)(isWebGL2(gl), ERR_WEBGL2);
}
//# sourceMappingURL=webgl-checks.js.map