import warp from './warp';
const fs = "uniform float radius;\nuniform float strength;\nuniform vec2 center;\n\nvec2 bulgePinch_warp(vec2 coord) {\n  coord -= center;\n  float distance = length(coord);\n  if (distance < radius) {\n    float percent = distance / radius;\n    if (strength > 0.0) {\n      coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n    } else {\n      coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n    }\n  }\n  coord += center;\n  return coord;\n}\n\nvec4 bulgePinch_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec2 coord = texCoord * texSize;\n  coord = bulgePinch_warp(coord);\n\n  return warp_sampleColor(texture, texSize, coord);\n}\n";
const uniforms = {
  center: [0.5, 0.5],
  radius: {
    value: 200,
    min: 1,
    softMax: 600
  },
  strength: {
    value: 0.5,
    min: -1,
    max: 1
  }
};
export default {
  name: 'bulgePinch',
  fs,
  uniforms,
  dependencies: [warp],
  passes: [{
    sampler: true
  }]
};
//# sourceMappingURL=bulgepinch.js.map