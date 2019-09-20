const fs = "uniform float amount;\n\nfloat rand(vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 noise_filterColor(vec4 color, vec2 texCoord) {\n  float diff = (rand(texCoord) - 0.5) * amount;\n  color.r += diff;\n  color.g += diff;\n  color.b += diff;\n  return color;\n}\n\nvec4 noise_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  return noise_filterColor(color, texCoord);\n}\n";
const uniforms = {
  amount: {
    value: 0.5,
    min: 0,
    max: 1
  }
};
export default {
  name: 'noise',
  uniforms,
  fs,
  passes: [{
    filter: true
  }]
};
//# sourceMappingURL=noise.js.map