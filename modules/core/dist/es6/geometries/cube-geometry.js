import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import Geometry from '../geometry/geometry';
import { uid } from '../utils';
const CUBE_INDICES = new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]);
const CUBE_POSITIONS = new Float32Array([-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1]);
const CUBE_NORMALS = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]);
const CUBE_TEX_COORDS = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1]);
const ATTRIBUTES = {
  POSITION: {
    size: 3,
    value: new Float32Array(CUBE_POSITIONS)
  },
  NORMAL: {
    size: 3,
    value: new Float32Array(CUBE_NORMALS)
  },
  TEXCOORD_0: {
    size: 2,
    value: new Float32Array(CUBE_TEX_COORDS)
  }
};
export default class CubeGeometry extends Geometry {
  constructor() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const _props$id = props.id,
          id = _props$id === void 0 ? uid('cube-geometry') : _props$id;
    super(_objectSpread({}, props, {
      id,
      indices: {
        size: 1,
        value: new Uint16Array(CUBE_INDICES)
      },
      attributes: _objectSpread({}, ATTRIBUTES, props.attributes)
    }));
  }

}
//# sourceMappingURL=cube-geometry.js.map