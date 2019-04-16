import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { withParameters } from '../context';
import { assertWebGL2Context } from '../webgl-utils';
import { assert } from '../utils';
const GL_DEPTH_BUFFER_BIT = 0x00000100;
const GL_STENCIL_BUFFER_BIT = 0x00000400;
const GL_COLOR_BUFFER_BIT = 0x00004000;
const GL_COLOR = 0x1800;
const GL_DEPTH = 0x1801;
const GL_STENCIL = 0x1802;
const GL_DEPTH_STENCIL = 0x84f9;
const ERR_ARGUMENTS = 'clear: bad arguments';
export function clear(gl) {
  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$framebuffer = _ref.framebuffer,
      framebuffer = _ref$framebuffer === void 0 ? null : _ref$framebuffer,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? null : _ref$color,
      _ref$depth = _ref.depth,
      depth = _ref$depth === void 0 ? null : _ref$depth,
      _ref$stencil = _ref.stencil,
      stencil = _ref$stencil === void 0 ? null : _ref$stencil;

  const parameters = {};

  if (framebuffer) {
    parameters.framebuffer = framebuffer;
  }

  let clearFlags = 0;

  if (color) {
    clearFlags |= GL_COLOR_BUFFER_BIT;

    if (color !== true) {
      parameters.clearColor = color;
    }
  }

  if (depth) {
    clearFlags |= GL_DEPTH_BUFFER_BIT;

    if (depth !== true) {
      parameters.clearDepth = depth;
    }
  }

  if (stencil) {
    clearFlags |= GL_STENCIL_BUFFER_BIT;

    if (depth !== true) {
      parameters.clearStencil = depth;
    }
  }

  assert(clearFlags !== 0, ERR_ARGUMENTS);
  withParameters(gl, parameters, () => {
    gl.clear(clearFlags);
  });
}
export function clearBuffer(gl) {
  let _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$framebuffer = _ref2.framebuffer,
      framebuffer = _ref2$framebuffer === void 0 ? null : _ref2$framebuffer,
      _ref2$buffer = _ref2.buffer,
      buffer = _ref2$buffer === void 0 ? GL_COLOR : _ref2$buffer,
      _ref2$drawBuffer = _ref2.drawBuffer,
      drawBuffer = _ref2$drawBuffer === void 0 ? 0 : _ref2$drawBuffer,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? [0, 0, 0, 0] : _ref2$value;

  assertWebGL2Context(gl);
  withParameters(gl, {
    framebuffer
  }, () => {
    switch (buffer) {
      case GL_COLOR:
        switch (value.constructor) {
          case Int32Array:
            gl.clearBufferiv(buffer, drawBuffer, value);
            break;

          case Uint32Array:
            gl.clearBufferuiv(buffer, drawBuffer, value);
            break;

          case Float32Array:
          default:
            gl.clearBufferfv(buffer, drawBuffer, value);
        }

        break;

      case GL_DEPTH:
        gl.clearBufferfv(GL_DEPTH, 0, [value]);
        break;

      case GL_STENCIL:
        gl.clearBufferiv(GL_STENCIL, 0, [value]);
        break;

      case GL_DEPTH_STENCIL:
        const _value = _slicedToArray(value, 2),
              depth = _value[0],
              stencil = _value[1];

        gl.clearBufferfi(GL_DEPTH_STENCIL, 0, depth, stencil);
        break;

      default:
        assert(false, ERR_ARGUMENTS);
    }
  });
}
//# sourceMappingURL=clear.js.map