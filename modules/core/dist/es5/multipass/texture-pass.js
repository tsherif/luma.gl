"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _clipSpace = _interopRequireDefault(require("../lib/clip-space"));

var _pass = _interopRequireDefault(require("./pass"));

var fs = "uniform sampler2D uDiffuseSampler;\nuniform float uOpacity;\nvarying vec2 uv;\n\nvoid main() {\n  vec4 texel = texture2D(uDiffuseSampler, uv);\n  gl_FragColor = uOpacity * texel;\n}\n";

var TexturePass = function (_Pass) {
  (0, _inherits2["default"])(TexturePass, _Pass);

  function TexturePass(gl) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, TexturePass);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TexturePass).call(this, gl, Object.assign({
      id: 'texture-pass'
    }, options)));
    var texture = options.texture,
        _options$opacity = options.opacity,
        opacity = _options$opacity === void 0 ? 1.0 : _options$opacity;
    _this.clipspace = new _clipSpace["default"](gl, {
      id: 'texture-pass',
      fs: fs,
      uniforms: {
        uDiffuseSampler: texture,
        uOpacity: opacity
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(TexturePass, [{
    key: "_renderPass",
    value: function _renderPass() {
      this.clipspace.draw({
        parameters: {
          depthWrite: false,
          depthTest: false
        }
      });
    }
  }]);
  return TexturePass;
}(_pass["default"]);

exports["default"] = TexturePass;
//# sourceMappingURL=texture-pass.js.map