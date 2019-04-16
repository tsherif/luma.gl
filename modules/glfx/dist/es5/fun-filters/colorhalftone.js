"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fs = "uniform vec2 center;\nuniform float angle;\nuniform float size;\n\nfloat scale = 3.1514 / size;\n\nfloat pattern(float angle, vec2 texSize, vec2 texCoord) {\n  float s = sin(angle), c = cos(angle);\n  vec2 tex = texCoord * texSize - center;\n  vec2 point = vec2(\n\tc * tex.x - s * tex.y,\n\ts * tex.x + c * tex.y\n  ) * scale;\n  return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvec4 colorHalftone_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {\n  vec3 cmy = 1.0 - color.rgb;\n  float k = min(cmy.x, min(cmy.y, cmy.z));\n  cmy = (cmy - k) / (1.0 - k);\n  cmy = clamp(\n\tcmy * 10.0 - 3.0 + vec3(\n    pattern(angle + 0.26179, texSize, texCoord),\n\t  pattern(angle + 1.30899, texSize, texCoord),\n    pattern(angle, texSize, texCoord)\n  ),\n\t0.0,\n\t1.0\n  );\n  k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539, texSize, texCoord), 0.0, 1.0);\n  return vec4(1.0 - cmy - k, color.a);\n}\n";
var uniforms = {
  center: [0.5, 0.5],
  angle: {
    value: 1.1,
    softMin: 0,
    softMax: Math.PI / 2
  },
  size: {
    value: 4,
    min: 1,
    softMin: 3,
    softMax: 20
  }
};
var _default = {
  name: 'colorHalftone',
  uniforms: uniforms,
  fs: fs,
  passes: [{
    filter: true
  }]
};
exports["default"] = _default;
//# sourceMappingURL=colorhalftone.js.map