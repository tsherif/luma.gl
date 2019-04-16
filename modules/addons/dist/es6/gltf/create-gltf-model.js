import { isWebGL2, ModelNode, log, pbr } from '@luma.gl/core';
import GLTFMaterialParser from './gltf-material-parser';
const vs = "\n#if (__VERSION__ < 300)\n  #define _attr attribute\n#else\n  #define _attr in\n#endif\n\n  _attr vec4 POSITION;\n\n  #ifdef HAS_NORMALS\n    _attr vec4 NORMAL;\n  #endif\n\n  #ifdef HAS_TANGENTS\n    _attr vec4 TANGENT;\n  #endif\n\n  #ifdef HAS_UV\n    _attr vec2 TEXCOORD_0;\n  #endif\n\n  void main(void) {\n    vec4 _NORMAL = vec4(0.);\n    vec4 _TANGENT = vec4(0.);\n    vec2 _TEXCOORD_0 = vec2(0.);\n\n    #ifdef HAS_NORMALS\n      _NORMAL = NORMAL;\n    #endif\n\n    #ifdef HAS_TANGENTS\n      _TANGENT = TANGENT;\n    #endif\n\n    #ifdef HAS_UV\n      _TEXCOORD_0 = TEXCOORD_0;\n    #endif\n\n    pbr_setPositionNormalTangentUV(POSITION, _NORMAL, _TANGENT, _TEXCOORD_0);\n    gl_Position = u_MVPMatrix * POSITION;\n  }\n";
const fs = "\n#if (__VERSION__ < 300)\n  #define fragmentColor gl_FragColor\n#else\n  out vec4 fragmentColor;\n#endif\n\n  void main(void) {\n    fragmentColor = pbr_filterColor(vec4(0));\n  }\n";

function addVersionToShader(gl, source) {
  if (isWebGL2(gl)) {
    return "#version 300 es\n".concat(source);
  }

  return source;
}

export default function createGLTFModel(gl, options) {
  const id = options.id,
        drawMode = options.drawMode,
        vertexCount = options.vertexCount,
        attributes = options.attributes,
        modelOptions = options.modelOptions;
  const materialParser = new GLTFMaterialParser(gl, options);
  log.info(4, 'createGLTFModel defines: ', materialParser.defines)();
  const managedResources = [];
  managedResources.push(...materialParser.generatedTextures);
  managedResources.push(...Object.values(attributes).map(attribute => attribute.buffer));
  const model = new ModelNode(gl, Object.assign({
    id,
    drawMode,
    vertexCount,
    modules: [pbr],
    defines: materialParser.defines,
    parameters: materialParser.parameters,
    vs: addVersionToShader(gl, vs),
    fs: addVersionToShader(gl, fs),
    managedResources
  }, modelOptions));
  model.setProps({
    attributes
  });
  model.setUniforms(materialParser.uniforms);
  return model;
}
//# sourceMappingURL=create-gltf-model.js.map