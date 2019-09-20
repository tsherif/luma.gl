var fs = "uniform vec2 center;\nuniform float scale;\n\nvec4 hexagonalPixelate_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec2 tex = (texCoord * texSize - center) / scale;\n  tex.y /= 0.866025404;\n  tex.x -= tex.y * 0.5;\n\n  vec2 a;\n  if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) {\n    a = vec2(floor(tex.x), floor(tex.y));\n  }\n  else a = vec2(ceil(tex.x), ceil(tex.y));\n  vec2 b = vec2(ceil(tex.x), floor(tex.y));\n  vec2 c = vec2(floor(tex.x), ceil(tex.y));\n\n  vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);\n  vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n  vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n  vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n  float alen = length(TEX - A);\n  float blen = length(TEX - B);\n  float clen = length(TEX - C);\n\n  vec2 choice;\n  if (alen < blen) {\n    if (alen < clen) choice = a;\n    else choice = c;\n  } else {\n    if (blen < clen) choice = b;\n    else choice = c;\n  }\n\n  choice.x += choice.y * 0.5;\n  choice.y *= 0.866025404;\n  choice *= scale / texSize;\n\n  return texture2D(texture, choice + center / texSize);\n}\n";
var uniforms = {
  center: {
    value: [0.5, 0.5],
    hint: 'screenspace'
  },
  scale: {
    value: 10,
    min: 1,
    softMin: 5,
    softMax: 50
  }
};
export default {
  name: 'hexagonalPixelate',
  uniforms: uniforms,
  fs: fs,
  passes: [{
    sampler: true
  }]
};
//# sourceMappingURL=hexagonalpixelate.js.map