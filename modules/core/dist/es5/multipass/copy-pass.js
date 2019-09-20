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

var fs = "uniform sampler2D uDiffuseSampler;\nuniform float uOpacity;\n\nvarying vec2 uv;\n\nvoid main() {\n  vec4 texel = texture2D(uDiffuseSampler, uv);\n  gl_FragColor = uOpacity * texel;\n}\n";

var CopyPass = function (_Pass) {
  (0, _inherits2["default"])(CopyPass, _Pass);

  function CopyPass(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, CopyPass);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CopyPass).call(this, gl, Object.assign({
      id: 'copy-pass',
      swap: true
    }, props)));
    _this.clipspace = new _clipSpace["default"](gl, {
      id: 'copy-pass',
      fs: fs
    });
    return _this;
  }

  (0, _createClass2["default"])(CopyPass, [{
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var inputBuffer = _ref.inputBuffer;
      var _this$props$opacity = this.props.opacity,
          opacity = _this$props$opacity === void 0 ? 1.0 : _this$props$opacity;
      this.clipspace.draw({
        uniforms: {
          uDiffuseSampler: inputBuffer,
          uOpacity: opacity
        },
        parameters: {
          depthWrite: false,
          depthTest: false
        }
      });
    }
  }]);
  return CopyPass;
}(_pass["default"]);

exports["default"] = CopyPass;
//# sourceMappingURL=copy-pass.js.map