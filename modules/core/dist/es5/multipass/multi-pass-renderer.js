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

var _compositePass = _interopRequireDefault(require("./composite-pass"));

var _renderState = _interopRequireDefault(require("./render-state"));

var MultiPassRenderer = function (_CompositePass) {
  (0, _inherits2["default"])(MultiPassRenderer, _CompositePass);

  function MultiPassRenderer(gl, props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MultiPassRenderer);
    props = Array.isArray(props) ? {
      passes: props
    } : props;
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MultiPassRenderer).call(this, gl, Object.assign({
      id: 'multi-pass'
    }, props)));
    _this.renderState = new _renderState["default"](gl, props);
    return _this;
  }

  (0, _createClass2["default"])(MultiPassRenderer, [{
    key: "render",
    value: function render(animationProps) {
      this.renderState.reset();
      var _this$props$passes = this.props.passes,
          passes = _this$props$passes === void 0 ? [] : _this$props$passes;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = passes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pass = _step.value;
          pass.render(this.renderState, animationProps);
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

      return this;
    }
  }]);
  return MultiPassRenderer;
}(_compositePass["default"]);

exports["default"] = MultiPassRenderer;
//# sourceMappingURL=multi-pass-renderer.js.map