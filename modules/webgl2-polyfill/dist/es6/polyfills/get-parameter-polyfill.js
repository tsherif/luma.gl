const OES_element_index = 'OES_element_index';
const WEBGL_draw_buffers = 'WEBGL_draw_buffers';
const EXT_disjoint_timer_query = 'EXT_disjoint_timer_query';
const EXT_disjoint_timer_query_webgl2 = 'EXT_disjoint_timer_query_webgl2';
const EXT_texture_filter_anisotropic = 'EXT_texture_filter_anisotropic';
const WEBGL_debug_renderer_info = 'WEBGL_debug_renderer_info';
const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;
const GL_DONT_CARE = 0x1100;
const GL_GPU_DISJOINT_EXT = 0x8fbb;
const GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff;
const GL_UNMASKED_VENDOR_WEBGL = 0x9245;
const GL_UNMASKED_RENDERER_WEBGL = 0x9246;

const getWebGL2ValueOrZero = gl => !isWebGL2(gl) ? 0 : undefined;

const WEBGL_PARAMETERS = {
  [3074]: gl => !isWebGL2(gl) ? 36064 : undefined,
  [GL_FRAGMENT_SHADER_DERIVATIVE_HINT]: gl => !isWebGL2(gl) ? GL_DONT_CARE : undefined,
  [35977]: getWebGL2ValueOrZero,
  [32937]: getWebGL2ValueOrZero,
  [GL_GPU_DISJOINT_EXT]: (gl, getParameter) => {
    const ext = isWebGL2(gl) ? gl.getExtension(EXT_disjoint_timer_query_webgl2) : gl.getExtension(EXT_disjoint_timer_query);
    return ext && ext.GPU_DISJOINT_EXT ? getParameter(ext.GPU_DISJOINT_EXT) : 0;
  },
  [GL_UNMASKED_VENDOR_WEBGL]: (gl, getParameter) => {
    const ext = gl.getExtension(WEBGL_debug_renderer_info);
    return getParameter(ext && ext.UNMASKED_VENDOR_WEBGL || 7936);
  },
  [GL_UNMASKED_RENDERER_WEBGL]: (gl, getParameter) => {
    const ext = gl.getExtension(WEBGL_debug_renderer_info);
    return getParameter(ext && ext.UNMASKED_RENDERER_WEBGL || 7937);
  },
  [GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT]: (gl, getParameter) => {
    const ext = gl.luma.extensions[EXT_texture_filter_anisotropic];
    return ext ? getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1.0;
  },
  [32883]: getWebGL2ValueOrZero,
  [35071]: getWebGL2ValueOrZero,
  [37447]: getWebGL2ValueOrZero,
  [36063]: (gl, getParameter) => {
    if (!isWebGL2(gl)) {
      const ext = gl.getExtension(WEBGL_draw_buffers);
      return ext ? getParameter(ext.MAX_COLOR_ATTACHMENTS_WEBGL) : 0;
    }

    return undefined;
  },
  [35379]: getWebGL2ValueOrZero,
  [35374]: getWebGL2ValueOrZero,
  [35377]: getWebGL2ValueOrZero,
  [34852]: gl => {
    if (!isWebGL2(gl)) {
      const ext = gl.getExtension(WEBGL_draw_buffers);
      return ext ? ext.MAX_DRAW_BUFFERS_WEBGL : 0;
    }

    return undefined;
  },
  [36203]: gl => gl.getExtension(OES_element_index) ? 2147483647 : 65535,
  [33001]: gl => gl.getExtension(OES_element_index) ? 16777216 : 65535,
  [33000]: gl => 16777216,
  [37157]: getWebGL2ValueOrZero,
  [35373]: getWebGL2ValueOrZero,
  [35657]: getWebGL2ValueOrZero,
  [36183]: getWebGL2ValueOrZero,
  [37137]: getWebGL2ValueOrZero,
  [34045]: getWebGL2ValueOrZero,
  [35978]: getWebGL2ValueOrZero,
  [35979]: getWebGL2ValueOrZero,
  [35968]: getWebGL2ValueOrZero,
  [35376]: getWebGL2ValueOrZero,
  [35375]: getWebGL2ValueOrZero,
  [35659]: getWebGL2ValueOrZero,
  [37154]: getWebGL2ValueOrZero,
  [35371]: getWebGL2ValueOrZero,
  [35658]: getWebGL2ValueOrZero,
  [35076]: getWebGL2ValueOrZero,
  [35077]: getWebGL2ValueOrZero,
  [35380]: getWebGL2ValueOrZero
};

function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

export function getParameterPolyfill(gl, originalGetParameter, pname) {
  const limit = WEBGL_PARAMETERS[pname];
  const value = typeof limit === 'function' ? limit(gl, originalGetParameter, pname) : limit;
  const result = value !== undefined ? value : originalGetParameter(pname);
  return result;
}
//# sourceMappingURL=get-parameter-polyfill.js.map