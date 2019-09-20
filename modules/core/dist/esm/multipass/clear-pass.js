import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Pass from './pass';

var ClearPass = function (_Pass) {
  _inherits(ClearPass, _Pass);

  function ClearPass(gl) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ClearPass);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClearPass).call(this, gl, Object.assign({
      id: 'clear-pass'
    }, props)));
  }

  _createClass(ClearPass, [{
    key: "_renderPass",
    value: function _renderPass(_ref) {
      var gl = _ref.gl;
      var _this$props$clearBits = this.props.clearBits,
          clearBits = _this$props$clearBits === void 0 ? 16384 | 256 : _this$props$clearBits;
      gl.clear(clearBits);
    }
  }]);

  return ClearPass;
}(Pass);

export { ClearPass as default };
//# sourceMappingURL=clear-pass.js.map