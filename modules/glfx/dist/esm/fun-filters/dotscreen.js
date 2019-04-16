var fs = "uniform vec2 center;\nuniform float angle;\nuniform float size;\n\nfloat pattern(vec2 texSize, vec2 texCoord) {\n  float scale = 3.1415 / size;\n\n  float s = sin(angle), c = cos(angle);\n  vec2 tex = texCoord * texSize - center;\n  vec2 point = vec2(\n    c * tex.x - s * tex.y,\n    s * tex.x + c * tex.y\n  ) * scale;\n  return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvec4 dotScreen_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  float average = (color.r + color.g + color.b) / 3.0;\n  return vec4(vec3(average * 10.0 - 5.0 + pattern(texSize, texCoord)), color.a);\n}\n";
var uniforms = {
  center: [0.5, 0.5],
  angle: {
    value: 1.1,
    softMin: 0,
    softMax: Math.PI / 2
  },
  size: {
    value: 3,
    min: 1,
    softMin: 3,
    softMax: 20
  }
};
export default {
  name: 'dotScreen',
  uniforms: uniforms,
  fs: fs,
  passes: [{
    filter: true
  }]
};
//# sourceMappingURL=dotscreen.js.map