import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import TruncatedConeGeometry from './truncated-cone-geometry';
import { uid } from '../utils';

var CylinderGeometry = function (_TruncatedConeGeometr) {
  _inherits(CylinderGeometry, _TruncatedConeGeometr);

  function CylinderGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CylinderGeometry);

    var _props$id = props.id,
        id = _props$id === void 0 ? uid('cylinder-geometry') : _props$id,
        _props$radius = props.radius,
        radius = _props$radius === void 0 ? 1 : _props$radius;
    return _possibleConstructorReturn(this, _getPrototypeOf(CylinderGeometry).call(this, _objectSpread({}, props, {
      id: id,
      bottomRadius: radius,
      topRadius: radius
    })));
  }

  return CylinderGeometry;
}(TruncatedConeGeometry);

export { CylinderGeometry as default };
//# sourceMappingURL=cylinder-geometry.js.map