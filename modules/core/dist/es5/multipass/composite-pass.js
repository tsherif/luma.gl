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

var _pass = _interopRequireDefault(require("./pass"));

var CompositePass = function (_Pass) {
  (0, _inherits2["default"])(CompositePass, _Pass);

  function CompositePass(gl, props) {
    (0, _classCallCheck2["default"])(this, CompositePass);
    props = Array.isArray(props) ? {
      passes: props
    } : props;
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CompositePass).call(this, gl, Object.assign({
      id: 'composite-pass'
    }, props)));
  }

  (0, _createClass2["default"])(CompositePass, [{
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
}(_pass["default"]);

exports["default"] = CompositePass;
//# sourceMappingURL=composite-pass.js.map