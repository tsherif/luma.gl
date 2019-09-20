"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrimitiveDrawMode = getPrimitiveDrawMode;
exports.getPrimitiveCount = getPrimitiveCount;
exports.getVertexCount = getVertexCount;
exports.decomposeCompositeGLType = decomposeCompositeGLType;
exports.getCompositeGLType = getCompositeGLType;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _COMPOSITE_GL_TYPES;

var GL_BYTE = 0x1400;
var GL_UNSIGNED_BYTE = 0x1401;
var GL_SHORT = 0x1402;
var GL_UNSIGNED_SHORT = 0x1403;
var GL_POINTS = 0x0;
var GL_LINES = 0x1;
var GL_LINE_LOOP = 0x2;
var GL_LINE_STRIP = 0x3;
var GL_TRIANGLES = 0x4;
var GL_TRIANGLE_STRIP = 0x5;
var GL_TRIANGLE_FAN = 0x6;
var GL_FLOAT = 0x1406;
var GL_FLOAT_VEC2 = 0x8b50;
var GL_FLOAT_VEC3 = 0x8b51;
var GL_FLOAT_VEC4 = 0x8b52;
var GL_INT = 0x1404;
var GL_INT_VEC2 = 0x8b53;
var GL_INT_VEC3 = 0x8b54;
var GL_INT_VEC4 = 0x8b55;
var GL_UNSIGNED_INT = 0x1405;
var GL_UNSIGNED_INT_VEC2 = 0x8dc6;
var GL_UNSIGNED_INT_VEC3 = 0x8dc7;
var GL_UNSIGNED_INT_VEC4 = 0x8dc8;
var GL_BOOL = 0x8b56;
var GL_BOOL_VEC2 = 0x8b57;
var GL_BOOL_VEC3 = 0x8b58;
var GL_BOOL_VEC4 = 0x8b59;
var GL_FLOAT_MAT2 = 0x8b5a;
var GL_FLOAT_MAT3 = 0x8b5b;
var GL_FLOAT_MAT4 = 0x8b5c;
var GL_FLOAT_MAT2x3 = 0x8b65;
var GL_FLOAT_MAT2x4 = 0x8b66;
var GL_FLOAT_MAT3x2 = 0x8b67;
var GL_FLOAT_MAT3x4 = 0x8b68;
var GL_FLOAT_MAT4x2 = 0x8b69;
var GL_FLOAT_MAT4x3 = 0x8b6a;
var COMPOSITE_GL_TYPES = (_COMPOSITE_GL_TYPES = {}, (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT, [GL_FLOAT, 1, 'float']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_VEC2, [GL_FLOAT, 2, 'vec2']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_VEC3, [GL_FLOAT, 3, 'vec3']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_VEC4, [GL_FLOAT, 4, 'vec4']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_INT, [GL_INT, 1, 'int']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_INT_VEC2, [GL_INT, 2, 'ivec2']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_INT_VEC3, [GL_INT, 3, 'ivec3']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_INT_VEC4, [GL_INT, 4, 'ivec4']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_UNSIGNED_INT, [GL_UNSIGNED_INT, 1, 'uint']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_UNSIGNED_INT_VEC2, [GL_UNSIGNED_INT, 2, 'uvec2']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_UNSIGNED_INT_VEC3, [GL_UNSIGNED_INT, 3, 'uvec3']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_UNSIGNED_INT_VEC4, [GL_UNSIGNED_INT, 4, 'uvec4']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_BOOL, [GL_FLOAT, 1, 'bool']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_BOOL_VEC2, [GL_FLOAT, 2, 'bvec2']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_BOOL_VEC3, [GL_FLOAT, 3, 'bvec3']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_BOOL_VEC4, [GL_FLOAT, 4, 'bvec4']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT2, [GL_FLOAT, 8, 'mat2']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT2x3, [GL_FLOAT, 8, 'mat2x3']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT2x4, [GL_FLOAT, 8, 'mat2x4']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT3, [GL_FLOAT, 12, 'mat3']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT3x2, [GL_FLOAT, 12, 'mat3x2']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT3x4, [GL_FLOAT, 12, 'mat3x4']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT4, [GL_FLOAT, 16, 'mat4']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT4x2, [GL_FLOAT, 16, 'mat4x2']), (0, _defineProperty2["default"])(_COMPOSITE_GL_TYPES, GL_FLOAT_MAT4x3, [GL_FLOAT, 16, 'mat4x3']), _COMPOSITE_GL_TYPES);

function getPrimitiveDrawMode(drawMode) {
  switch (drawMode) {
    case GL_POINTS:
      return GL_POINTS;

    case GL_LINES:
      return GL_LINES;

    case GL_LINE_STRIP:
      return GL_LINES;

    case GL_LINE_LOOP:
      return GL_LINES;

    case GL_TRIANGLES:
      return GL_TRIANGLES;

    case GL_TRIANGLE_STRIP:
      return GL_TRIANGLES;

    case GL_TRIANGLE_FAN:
      return GL_TRIANGLES;

    default:
      (0, _utils.assert)(false);
      return 0;
  }
}

function getPrimitiveCount(_ref) {
  var drawMode = _ref.drawMode,
      vertexCount = _ref.vertexCount;

  switch (drawMode) {
    case GL_POINTS:
    case GL_LINE_LOOP:
      return vertexCount;

    case GL_LINES:
      return vertexCount / 2;

    case GL_LINE_STRIP:
      return vertexCount - 1;

    case GL_TRIANGLES:
      return vertexCount / 3;

    case GL_TRIANGLE_STRIP:
    case GL_TRIANGLE_FAN:
      return vertexCount - 2;

    default:
      (0, _utils.assert)(false);
      return 0;
  }
}

function getVertexCount(_ref2) {
  var drawMode = _ref2.drawMode,
      vertexCount = _ref2.vertexCount;
  var primitiveCount = getPrimitiveCount({
    drawMode: drawMode,
    vertexCount: vertexCount
  });

  switch (getPrimitiveDrawMode(drawMode)) {
    case GL_POINTS:
      return primitiveCount;

    case GL_LINES:
      return primitiveCount * 2;

    case GL_TRIANGLES:
      return primitiveCount * 3;

    default:
      (0, _utils.assert)(false);
      return 0;
  }
}

function decomposeCompositeGLType(compositeGLType) {
  var typeAndSize = COMPOSITE_GL_TYPES[compositeGLType];

  if (!typeAndSize) {
    return null;
  }

  var _typeAndSize = (0, _slicedToArray2["default"])(typeAndSize, 2),
      type = _typeAndSize[0],
      components = _typeAndSize[1];

  return {
    type: type,
    components: components
  };
}

function getCompositeGLType(type, components) {
  switch (type) {
    case GL_BYTE:
    case GL_UNSIGNED_BYTE:
    case GL_SHORT:
    case GL_UNSIGNED_SHORT:
      type = GL_FLOAT;
      break;

    default:
  }

  for (var glType in COMPOSITE_GL_TYPES) {
    var _COMPOSITE_GL_TYPES$g = (0, _slicedToArray2["default"])(COMPOSITE_GL_TYPES[glType], 3),
        compType = _COMPOSITE_GL_TYPES$g[0],
        compComponents = _COMPOSITE_GL_TYPES$g[1],
        name = _COMPOSITE_GL_TYPES$g[2];

    if (compType === type && compComponents === components) {
      return {
        glType: glType,
        name: name
      };
    }
  }

  return null;
}
//# sourceMappingURL=attribute-utils.js.map