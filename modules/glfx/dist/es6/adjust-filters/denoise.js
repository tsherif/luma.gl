const fs = "uniform float strength;\n\nvec4 denoise_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  float adjustedExponent = 3. + 200. * pow(1. - strength, 4.);\n\n  vec4 center = texture2D(texture, texCoord);\n  vec4 color = vec4(0.0);\n  float total = 0.0;\n  for (float x = -4.0; x <= 4.0; x += 1.0) {\n    for (float y = -4.0; y <= 4.0; y += 1.0) {\n      vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);\n      float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));\n      weight = pow(weight, adjustedExponent);\n      color += sample * weight;\n      total += weight;\n    }\n  }\n\n  return color / total;\n}\n";
const uniforms = {
  strength: {
    value: 0.5,
    min: 0,
    max: 0.1,
    adjust: strength => 0.53 + 200 * Math.pow(1 - strength, 4)
  }
};
export default {
  name: 'denoise',
  uniforms,
  fs,
  passes: [{
    sampler: true
  }, {
    sampler: true
  }]
};
//# sourceMappingURL=denoise.js.map