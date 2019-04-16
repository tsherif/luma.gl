const fs = "uniform float strength;\n\nvec4 ink_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec2 dx = vec2(1.0 / texSize.x, 0.0);\n  vec2 dy = vec2(0.0, 1.0 / texSize.y);\n  vec4 color = texture2D(texture, texCoord);\n  float bigTotal = 0.0;\n  float smallTotal = 0.0;\n  vec3 bigAverage = vec3(0.0);\n  vec3 smallAverage = vec3(0.0);\n  for (float x = -2.0; x <= 2.0; x += 1.0) {\n    for (float y = -2.0; y <= 2.0; y += 1.0) {\n      vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;\n      bigAverage += sample;\n      bigTotal += 1.0;\n      if (abs(x) + abs(y) < 2.0) {\n        smallAverage += sample;\n        smallTotal += 1.0;\n      }\n    }\n  }\n  vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);\n  float power = strength * strength * strength * strength * strength;\n  return vec4(color.rgb - dot(edge, edge) * power * 100000.0, color.a);\n}\n";
const uniforms = {
  strength: {
    value: 0.25,
    min: 0,
    softMax: 1
  }
};
export default {
  name: 'ink',
  uniforms,
  fs,
  passes: [{
    sampler: true
  }]
};
//# sourceMappingURL=ink.js.map