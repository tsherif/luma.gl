"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getShaderTypeName;
var GL_FRAGMENT_SHADER = 0x8b30;
var GL_VERTEX_SHADER = 0x8b31;

function getShaderTypeName(type) {
  switch (type) {
    case GL_FRAGMENT_SHADER:
      return 'fragment';

    case GL_VERTEX_SHADER:
      return 'vertex';

    default:
      return 'unknown type';
  }
}
//# sourceMappingURL=get-shader-type-name.js.map