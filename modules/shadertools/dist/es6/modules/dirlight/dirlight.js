import project from '../project/project';
const DEFAULT_LIGHT_DIRECTION = new Float32Array([1, 1, 2]);
const DEFAULT_MODULE_OPTIONS = {
  lightDirection: DEFAULT_LIGHT_DIRECTION
};

function getUniforms() {
  let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MODULE_OPTIONS;
  const uniforms = {};

  if (opts.lightDirection) {
    uniforms.dirlight_uLightDirection = opts.lightDirection;
  }

  return uniforms;
}

const vs = null;
const fs = "uniform vec3 dirlight_uLightDirection;\nvec4 dirlight_filterColor(vec4 color) {\n  vec3 normal = project_getNormal_World();\n  float d = abs(dot(normalize(normal), normalize(dirlight_uLightDirection)));\n  return vec4(color.rgb * d, color.a);\n}\n";
export default {
  name: 'dirlight',
  vs,
  fs,
  getUniforms,
  dependencies: [project]
};
//# sourceMappingURL=dirlight.js.map