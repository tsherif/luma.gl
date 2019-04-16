"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _truncatedConeGeometry = _interopRequireDefault(require("./truncated-cone-geometry"));

var _utils = require("../utils");

var ConeGeometry = function (_TruncatedConeGeometr) {
  (0, _inherits2["default"])(ConeGeometry, _TruncatedConeGeometr);

  function ConeGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, ConeGeometry);
    var _props$id = props.id,
        id = _props$id === void 0 ? (0, _utils.uid)('cone-geometry') : _props$id,
        _props$radius = props.radius,
        radius = _props$radius === void 0 ? 1 : _props$radius,
        _props$cap = props.cap,
        cap = _props$cap === void 0 ? true : _props$cap;
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ConeGeometry).call(this, (0, _objectSpread2["default"])({}, props, {
      id: id,
      topRadius: 0,
      topCap: Boolean(cap),
      bottomCap: Boolean(cap),
      bottomRadius: radius
    })));
  }

  return ConeGeometry;
}(_truncatedConeGeometry["default"]);

exports["default"] = ConeGeometry;
//# sourceMappingURL=cone-geometry.js.map