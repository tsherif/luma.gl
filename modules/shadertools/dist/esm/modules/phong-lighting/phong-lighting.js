import lights from '../lights/lights';
import lightingShader from './phong-lighting.glsl';
var gouraudlighting = {
  name: 'gouraud-lighting',
  dependencies: [lights],
  vs: lightingShader,
  defines: {
    LIGHTING_VERTEX: 1
  },
  getUniforms: getUniforms
};
var phonglighting = {
  name: 'phong-lighting',
  dependencies: [lights],
  fs: lightingShader,
  defines: {
    LIGHTING_FRAGMENT: 1
  },
  getUniforms: getUniforms
};
var INITIAL_MODULE_OPTIONS = {};

function getMaterialUniforms(material) {
  var materialUniforms = {};
  materialUniforms.lighting_uAmbient = material.ambient;
  materialUniforms.lighting_uDiffuse = material.diffuse;
  materialUniforms.lighting_uShininess = material.shininess;
  materialUniforms.lighting_uSpecularColor = material.specularColor;
  return materialUniforms;
}

function getUniforms() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_MODULE_OPTIONS;

  if (!('material' in opts)) {
    return {};
  }

  var material = opts.material;

  if (!material) {
    return {
      lighting_uEnabled: false
    };
  }

  return getMaterialUniforms(material);
}

export { gouraudlighting, phonglighting };
//# sourceMappingURL=phong-lighting.js.map