const fs = "uniform float hue;\nuniform float saturation;\n\nvec4 hueSaturation_filterColor(vec4 color) {\n  // hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}]\n  float angle = hue * 3.14159265;\n  float s = sin(angle), c = cos(angle);\n  vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;\n  float len = length(color.rgb);\n  color.rgb = vec3(\n    dot(color.rgb, weights.xyz),\n    dot(color.rgb, weights.zxy),\n    dot(color.rgb, weights.yzx)\n  );\n\n  // saturation adjustment\n  float average = (color.r + color.g + color.b) / 3.0;\n  if (saturation > 0.0) {\n    color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));\n  } else {\n    color.rgb += (average - color.rgb) * (-saturation);\n  }\n\n  return color;\n}\n\nvec4 hueSaturation_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  return hueSaturation_filterColor(color);\n}\n";
const uniforms = {
  hue: {
    value: 0,
    min: -1,
    max: 1
  },
  saturation: {
    value: 0,
    min: -1,
    max: 1
  }
};
export default {
  name: 'hueSaturation',
  uniforms,
  fs,
  passes: [{
    filter: true
  }]
};
//# sourceMappingURL=huesaturation.js.map