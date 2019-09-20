"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _random = _interopRequireDefault(require("../utils/random"));

var fs = "\nuniform vec2 center;\nuniform float strength;\n\nvec4 zoomBlur_sampleColor(sampler2D texture, vec2 texSize, vec2 texCoord) {\n  vec4 color = vec4(0.0);\n  float total = 0.0;\n  vec2 toCenter = center - texCoord * texSize;\n\n  /* randomize the lookup values to hide the fixed number of samples */\n  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n  for (float t = 0.0; t <= 40.0; t++) {\n    float percent = (t + offset) / 40.0;\n    float weight = 4.0 * (percent - percent * percent);\n    vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);\n\n    /* switch to pre-multiplied alpha to correctly blur transparent images */\n    sample.rgb *= sample.a;\n\n    color += sample * weight;\n    total += weight;\n  }\n\n  color = color / total;\n\n  /* switch back from pre-multiplied alpha */\n  color.rgb /= color.a + 0.00001;\n\n  return color;\n}\n";
var uniforms = {
  center: [0.5, 0.5],
  strength: {
    value: 0.3,
    min: 0,
    softMax: 1
  }
};
var _default = {
  name: 'zoomBlur',
  uniforms: uniforms,
  fs: fs,
  dependencies: [_random["default"]],
  passes: [{
    sampler: true
  }]
};
exports["default"] = _default;
//# sourceMappingURL=zoomblur.js.map