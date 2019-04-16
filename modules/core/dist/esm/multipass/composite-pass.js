import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Pass from './pass';

var CompositePass = function (_Pass) {
  _inherits(CompositePass, _Pass);

  function CompositePass(gl, props) {
    _classCallCheck(this, CompositePass);

    props = Array.isArray(props) ? {
      passes: props
    } : props;
    return _possibleConstructorReturn(this, _getPrototypeOf(CompositePass).call(this, gl, Object.assign({
      id: 'composite-pass'
    }, props)));
  }

  _createClass(CompositePass, [{
    key: "render",
    value: function render() {
      var _this$props$passes = this.props.passes,
          passes = _this$props$passes === void 0 ? [] : _this$props$passes;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = passes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pass = _step.value;
          pass.render.apply(pass, arguments);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return CompositePass;
}(Pass);

export { CompositePass as default };
//# sourceMappingURL=composite-pass.js.map