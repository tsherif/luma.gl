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

var _math = require("math.gl");

var _geometry = _interopRequireDefault(require("../geometry/geometry"));

var _utils = require("../utils");

var ICO_POSITIONS = [-1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, 0];
var ICO_INDICES = [3, 4, 5, 3, 5, 1, 3, 1, 0, 3, 0, 4, 4, 0, 2, 4, 2, 5, 2, 0, 1, 5, 2, 1];

var IcoSphereGeometry = function (_Geometry) {
  (0, _inherits2["default"])(IcoSphereGeometry, _Geometry);

  function IcoSphereGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, IcoSphereGeometry);
    var _props$id = props.id,
        id = _props$id === void 0 ? (0, _utils.uid)('ico-sphere-geometry') : _props$id;

    var _tesselateIcosaHedron = tesselateIcosaHedron(props),
        indices = _tesselateIcosaHedron.indices,
        attributes = _tesselateIcosaHedron.attributes;

    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(IcoSphereGeometry).call(this, (0, _objectSpread2["default"])({}, props, {
      id: id,
      indices: indices,
      attributes: (0, _objectSpread2["default"])({}, attributes, props.attributes)
    })));
  }

  return IcoSphereGeometry;
}(_geometry["default"]);

exports["default"] = IcoSphereGeometry;

function tesselateIcosaHedron() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$iterations = props.iterations,
      iterations = _props$iterations === void 0 ? 0 : _props$iterations;
  var PI = Math.PI;
  var PI2 = PI * 2;
  var positions = [].concat(ICO_POSITIONS);
  var indices = [].concat(ICO_INDICES);
  positions.push();
  indices.push();

  var getMiddlePoint = function () {
    var pointMemo = {};
    return function (i1, i2) {
      i1 *= 3;
      i2 *= 3;
      var mini = i1 < i2 ? i1 : i2;
      var maxi = i1 > i2 ? i1 : i2;
      var key = "".concat(mini, "|").concat(maxi);

      if (key in pointMemo) {
        return pointMemo[key];
      }

      var x1 = positions[i1];
      var y1 = positions[i1 + 1];
      var z1 = positions[i1 + 2];
      var x2 = positions[i2];
      var y2 = positions[i2 + 1];
      var z2 = positions[i2 + 2];
      var xm = (x1 + x2) / 2;
      var ym = (y1 + y2) / 2;
      var zm = (z1 + z2) / 2;
      var len = Math.sqrt(xm * xm + ym * ym + zm * zm);
      xm /= len;
      ym /= len;
      zm /= len;
      positions.push(xm, ym, zm);
      return pointMemo[key] = positions.length / 3 - 1;
    };
  }();

  for (var i = 0; i < iterations; i++) {
    var indices2 = [];

    for (var j = 0; j < indices.length; j += 3) {
      var a = getMiddlePoint(indices[j + 0], indices[j + 1]);
      var b = getMiddlePoint(indices[j + 1], indices[j + 2]);
      var c = getMiddlePoint(indices[j + 2], indices[j + 0]);
      indices2.push(c, indices[j + 0], a, a, indices[j + 1], b, b, indices[j + 2], c, a, b, c);
    }

    indices = indices2;
  }

  var normals = new Array(indices.length * 3);
  var texCoords = new Array(indices.length * 2);
  var l = indices.length;

  for (var _i = l - 3; _i >= 0; _i -= 3) {
    var i1 = indices[_i + 0];
    var i2 = indices[_i + 1];
    var i3 = indices[_i + 2];
    var in1 = i1 * 3;
    var in2 = i2 * 3;
    var in3 = i3 * 3;
    var iu1 = i1 * 2;
    var iu2 = i2 * 2;
    var iu3 = i3 * 2;
    var x1 = positions[in1 + 0];
    var y1 = positions[in1 + 1];
    var z1 = positions[in1 + 2];
    var theta1 = Math.acos(z1 / Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1));
    var phi1 = Math.atan2(y1, x1) + PI;
    var v1 = theta1 / PI;
    var u1 = 1 - phi1 / PI2;
    var x2 = positions[in2 + 0];
    var y2 = positions[in2 + 1];
    var z2 = positions[in2 + 2];
    var theta2 = Math.acos(z2 / Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2));
    var phi2 = Math.atan2(y2, x2) + PI;
    var v2 = theta2 / PI;
    var u2 = 1 - phi2 / PI2;
    var x3 = positions[in3 + 0];
    var y3 = positions[in3 + 1];
    var z3 = positions[in3 + 2];
    var theta3 = Math.acos(z3 / Math.sqrt(x3 * x3 + y3 * y3 + z3 * z3));
    var phi3 = Math.atan2(y3, x3) + PI;
    var v3 = theta3 / PI;
    var u3 = 1 - phi3 / PI2;
    var vec1 = [x3 - x2, y3 - y2, z3 - z2];
    var vec2 = [x1 - x2, y1 - y2, z1 - z2];
    var normal = new _math.Vector3(vec1).cross(vec2).normalize();
    var newIndex = void 0;

    if ((u1 === 0 || u2 === 0 || u3 === 0) && (u1 === 0 || u1 > 0.5) && (u2 === 0 || u2 > 0.5) && (u3 === 0 || u3 > 0.5)) {
      positions.push(positions[in1 + 0], positions[in1 + 1], positions[in1 + 2]);
      newIndex = positions.length / 3 - 1;
      indices.push(newIndex);
      texCoords[newIndex * 2 + 0] = 1;
      texCoords[newIndex * 2 + 1] = v1;
      normals[newIndex * 3 + 0] = normal.x;
      normals[newIndex * 3 + 1] = normal.y;
      normals[newIndex * 3 + 2] = normal.z;
      positions.push(positions[in2 + 0], positions[in2 + 1], positions[in2 + 2]);
      newIndex = positions.length / 3 - 1;
      indices.push(newIndex);
      texCoords[newIndex * 2 + 0] = 1;
      texCoords[newIndex * 2 + 1] = v2;
      normals[newIndex * 3 + 0] = normal.x;
      normals[newIndex * 3 + 1] = normal.y;
      normals[newIndex * 3 + 2] = normal.z;
      positions.push(positions[in3 + 0], positions[in3 + 1], positions[in3 + 2]);
      newIndex = positions.length / 3 - 1;
      indices.push(newIndex);
      texCoords[newIndex * 2 + 0] = 1;
      texCoords[newIndex * 2 + 1] = v3;
      normals[newIndex * 3 + 0] = normal.x;
      normals[newIndex * 3 + 1] = normal.y;
      normals[newIndex * 3 + 2] = normal.z;
    }

    normals[in1 + 0] = normals[in2 + 0] = normals[in3 + 0] = normal.x;
    normals[in1 + 1] = normals[in2 + 1] = normals[in3 + 1] = normal.y;
    normals[in1 + 2] = normals[in2 + 2] = normals[in3 + 2] = normal.z;
    texCoords[iu1 + 0] = u1;
    texCoords[iu1 + 1] = v1;
    texCoords[iu2 + 0] = u2;
    texCoords[iu2 + 1] = v2;
    texCoords[iu3 + 0] = u3;
    texCoords[iu3 + 1] = v3;
  }

  return {
    indices: {
      size: 1,
      value: new Uint16Array(indices)
    },
    attributes: {
      POSITION: {
        size: 3,
        value: new Float32Array(positions)
      },
      NORMAL: {
        size: 3,
        value: new Float32Array(normals)
      },
      TEXCOORD_0: {
        size: 2,
        value: new Float32Array(texCoords)
      }
    }
  };
}
//# sourceMappingURL=ico-sphere-geometry.js.map