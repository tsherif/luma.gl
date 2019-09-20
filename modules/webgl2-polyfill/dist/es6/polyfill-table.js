import assert from './assert';
import { getParameterPolyfill } from './polyfills/get-parameter-polyfill';
const OES_vertex_array_object = 'OES_vertex_array_object';
const ANGLE_instanced_arrays = 'ANGLE_instanced_arrays';
const WEBGL_draw_buffers = 'WEBGL_draw_buffers';
const EXT_disjoint_timer_query = 'EXT_disjoint_timer_query';
const EXT_texture_filter_anisotropic = 'EXT_texture_filter_anisotropic';
const ERR_VAO_NOT_SUPPORTED = 'VertexArray requires WebGL2 or OES_vertex_array_object extension';

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

function getExtensionData(gl, extension) {
  return {
    webgl2: isWebGL2(gl),
    ext: gl.getExtension(extension)
  };
}

export const WEBGL2_CONTEXT_POLYFILLS = {
  [OES_vertex_array_object]: {
    meta: {
      suffix: 'OES'
    },
    createVertexArray: () => {
      assert(false, ERR_VAO_NOT_SUPPORTED);
    },
    deleteVertexArray: () => {},
    bindVertexArray: () => {},
    isVertexArray: () => false
  },
  [ANGLE_instanced_arrays]: {
    meta: {
      suffix: 'ANGLE'
    },

    vertexAttribDivisor(location, divisor) {
      assert(divisor === 0, 'WebGL instanced rendering not supported');
    },

    drawElementsInstanced: () => {},
    drawArraysInstanced: () => {}
  },
  [WEBGL_draw_buffers]: {
    meta: {
      suffix: 'WEBGL'
    },
    drawBuffers: () => {
      assert(false);
    }
  },
  [EXT_disjoint_timer_query]: {
    meta: {
      suffix: 'EXT'
    },
    createQuery: () => {
      assert(false);
    },
    deleteQuery: () => {
      assert(false);
    },
    beginQuery: () => {
      assert(false);
    },
    endQuery: () => {},

    getQuery(handle, pname) {
      return this.getQueryObject(handle, pname);
    },

    getQueryParameter(handle, pname) {
      return this.getQueryObject(handle, pname);
    },

    getQueryObject: () => {}
  }
};
export const WEBGL2_CONTEXT_OVERRIDES = {
  readBuffer: (gl, originalFunc, attachment) => {
    if (isWebGL2(gl)) {
      originalFunc(attachment);
    } else {}
  },
  getVertexAttrib: (gl, originalFunc, location, pname) => {
    const _getExtensionData = getExtensionData(gl, ANGLE_instanced_arrays),
          webgl2 = _getExtensionData.webgl2,
          ext = _getExtensionData.ext;

    let result;

    switch (pname) {
      case 35069:
        result = !webgl2 ? false : undefined;
        break;

      case 35070:
        result = !webgl2 && !ext ? 0 : undefined;
        break;

      default:
    }

    return result !== undefined ? result : originalFunc(location, pname);
  },
  getProgramParameter: (gl, originalFunc, program, pname) => {
    if (!isWebGL2(gl)) {
      switch (pname) {
        case 35967:
          return 35981;

        case 35971:
          return 0;

        case 35382:
          return 0;

        default:
      }
    }

    return originalFunc(program, pname);
  },
  getInternalformatParameter: (gl, originalFunc, target, format, pname) => {
    if (!isWebGL2(gl)) {
      switch (pname) {
        case 32937:
          return new Int32Array([0]);

        default:
      }
    }

    return gl.getInternalformatParameter(target, format, pname);
  },

  getTexParameter(gl, originalFunc, target, pname) {
    switch (pname) {
      case 34046:
        const extensions = gl.luma.extensions;
        const ext = extensions[EXT_texture_filter_anisotropic];
        pname = ext && ext.TEXTURE_MAX_ANISOTROPY_EXT || 34046;
        break;

      default:
    }

    return originalFunc(target, pname);
  },

  getParameter: getParameterPolyfill,

  hint(gl, originalFunc, pname, value) {
    return originalFunc(pname, value);
  }

};
//# sourceMappingURL=polyfill-table.js.map