export default function getShaderName(shader) {
  var defaultName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unnamed';
  var SHADER_NAME_REGEXP = /#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/;
  var match = shader.match(SHADER_NAME_REGEXP);
  return match ? match[1] : defaultName;
}
//# sourceMappingURL=get-shader-name.js.map