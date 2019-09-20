import random from '../utils/random';
var fs = "uniform float radius;\nuniform vec2 delta;\n\nvec4 edgeWork_sampleColor1(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec2 relativeDelta = radius * delta / texSize;\n\n  vec2 color = vec2(0.0);\n  vec2 total = vec2(0.0);\n\n  /* randomize the lookup values to hide the fixed number of samples */\n  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n  for (float t = -30.0; t <= 30.0; t++) {\n    float percent = (t + offset - 0.5) / 30.0;\n    float weight = 1.0 - abs(percent);\n    vec3 sample = texture2D(texture, texCoord + relativeDelta * percent).rgb;\n    float average = (sample.r + sample.g + sample.b) / 3.0;\n    color.x += average * weight;\n    total.x += weight;\n    if (abs(t) < 15.0) {\n      weight = weight * 2.0 - 1.0;\n      color.y += average * weight;\n      total.y += weight;\n    }\n  }\n  return vec4(color / total, 0.0, 1.0);\n}\n\nvec4 edgeWork_sampleColor2(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec2 relativeDelta = radius * delta / texSize;\n\n  vec2 color = vec2(0.0);\n  vec2 total = vec2(0.0);\n\n  /* randomize the lookup values to hide the fixed number of samples */\n  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n  for (float t = -30.0; t <= 30.0; t++) {\n    float percent = (t + offset - 0.5) / 30.0;\n    float weight = 1.0 - abs(percent);\n    vec2 sample = texture2D(texture, texCoord + relativeDelta * percent).xy;\n    color.x += sample.x * weight;\n    total.x += weight;\n    if (abs(t) < 15.0) {\n      weight = weight * 2.0 - 1.0;\n      color.y += sample.y * weight;\n      total.y += weight;\n    }\n  }\n  float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);\n  return vec4(c, c, c, 1.0);\n}\n";
var uniforms = {
  radius: {
    value: 2,
    min: 1,
    softMax: 50
  },
  delta: {
    value: [1, 0],
    "private": true
  }
};
export default {
  name: 'edgeWork',
  uniforms: uniforms,
  fs: fs,
  dependencies: [random],
  passes: [{
    sampler: 'edgeWork_sampleColor1',
    uniforms: {
      delta: [1, 0]
    }
  }, {
    sampler: 'edgeWork_sampleColor2',
    uniforms: {
      delta: [0, 1]
    }
  }]
};
//# sourceMappingURL=edgework.js.map