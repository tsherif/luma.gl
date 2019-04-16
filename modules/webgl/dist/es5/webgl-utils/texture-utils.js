"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneTextureFrom = cloneTextureFrom;
exports.toFramebuffer = toFramebuffer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _texture2d = _interopRequireDefault(require("../classes/texture-2d"));

var _textureCube = _interopRequireDefault(require("../classes/texture-cube"));

var _texture3d = _interopRequireDefault(require("../classes/texture-3d"));

var _framebuffer = _interopRequireDefault(require("../classes/framebuffer"));

var _utils = require("../utils");

function cloneTextureFrom(refTexture, overrides) {
  (0, _utils.assert)(refTexture instanceof _texture2d["default"] || refTexture instanceof _textureCube["default"] || refTexture instanceof _texture3d["default"]);
  var TextureType = refTexture.constructor;
  var gl = refTexture.gl,
      width = refTexture.width,
      height = refTexture.height,
      format = refTexture.format,
      type = refTexture.type,
      dataFormat = refTexture.dataFormat,
      border = refTexture.border,
      mipmaps = refTexture.mipmaps;
  var textureOptions = Object.assign({
    width: width,
    height: height,
    format: format,
    type: type,
    dataFormat: dataFormat,
    border: border,
    mipmaps: mipmaps
  }, overrides);
  return new TextureType(gl, textureOptions);
}

function toFramebuffer(texture, opts) {
  var gl = texture.gl,
      width = texture.width,
      height = texture.height,
      id = texture.id;
  var framebuffer = new _framebuffer["default"](gl, Object.assign({}, opts, {
    id: "framebuffer-for-".concat(id),
    width: width,
    height: height,
    attachments: (0, _defineProperty2["default"])({}, 36064, texture)
  }));
  return framebuffer;
}
//# sourceMappingURL=texture-utils.js.map