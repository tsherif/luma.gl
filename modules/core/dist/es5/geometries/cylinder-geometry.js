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

var CylinderGeometry = function (_TruncatedConeGeometr) {
  (0, _inherits2["default"])(CylinderGeometry, _TruncatedConeGeometr);

  function CylinderGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CylinderGeometry);
    var _props$id = props.id,
        id = _props$id === void 0 ? (0, _utils.uid)('cylinder-geometry') : _props$id,
        _props$radius = props.radius,
        radius = _props$radius === void 0 ? 1 : _props$radius;
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CylinderGeometry).call(this, (0, _objectSpread2["default"])({}, props, {
      id: id,
      bottomRadius: radius,
      topRadius: radius
    })));
  }

  return CylinderGeometry;
}(_truncatedConeGeometry["default"]);

exports["default"] = CylinderGeometry;
//# sourceMappingURL=cylinder-geometry.js.map