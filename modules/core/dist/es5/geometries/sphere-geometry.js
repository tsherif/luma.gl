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

var _geometry = _interopRequireDefault(require("../geometry/geometry"));

var _utils = require("../utils");

var SphereGeometry = function (_Geometry) {
  (0, _inherits2["default"])(SphereGeometry, _Geometry);

  function SphereGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, SphereGeometry);
    var _props$id = props.id,
        id = _props$id === void 0 ? (0, _utils.uid)('sphere-geometry') : _props$id;

    var _tesselateSphere = tesselateSphere(props),
        indices = _tesselateSphere.indices,
        attributes = _tesselateSphere.attributes;

    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SphereGeometry).call(this, (0, _objectSpread2["default"])({}, props, {
      id: id,
      indices: indices,
      attributes: (0, _objectSpread2["default"])({}, attributes, props.attributes)
    })));
  }

  return SphereGeometry;
}(_geometry["default"]);

exports["default"] = SphereGeometry;

function tesselateSphere(props) {
  var _props$nlat = props.nlat,
      nlat = _props$nlat === void 0 ? 10 : _props$nlat,
      _props$nlong = props.nlong,
      nlong = _props$nlong === void 0 ? 10 : _props$nlong;
  var _props$radius = props.radius,
      radius = _props$radius === void 0 ? 1 : _props$radius;
  var startLat = 0;
  var endLat = Math.PI;
  var latRange = endLat - startLat;
  var startLong = 0;
  var endLong = 2 * Math.PI;
  var longRange = endLong - startLong;
  var numVertices = (nlat + 1) * (nlong + 1);

  if (typeof radius === 'number') {
    var value = radius;

    radius = function radius(n1, n2, n3, u, v) {
      return value;
    };
  }

  var positions = new Float32Array(numVertices * 3);
  var normals = new Float32Array(numVertices * 3);
  var texCoords = new Float32Array(numVertices * 2);
  var indices = new Uint16Array(nlat * nlong * 6);

  for (var y = 0; y <= nlat; y++) {
    for (var x = 0; x <= nlong; x++) {
      var u = x / nlong;
      var v = y / nlat;
      var index = x + y * (nlong + 1);
      var i2 = index * 2;
      var i3 = index * 3;
      var theta = longRange * u;
      var phi = latRange * v;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);
      var ux = cosTheta * sinPhi;
      var uy = cosPhi;
      var uz = sinTheta * sinPhi;
      var r = radius(ux, uy, uz, u, v);
      positions[i3 + 0] = r * ux;
      positions[i3 + 1] = r * uy;
      positions[i3 + 2] = r * uz;
      normals[i3 + 0] = ux;
      normals[i3 + 1] = uy;
      normals[i3 + 2] = uz;
      texCoords[i2 + 0] = u;
      texCoords[i2 + 1] = 1 - v;
    }
  }

  var numVertsAround = nlat + 1;

  for (var _x = 0; _x < nlat; _x++) {
    for (var _y = 0; _y < nlong; _y++) {
      var _index = (_x * nlong + _y) * 6;

      indices[_index + 0] = _y * numVertsAround + _x;
      indices[_index + 1] = _y * numVertsAround + _x + 1;
      indices[_index + 2] = (_y + 1) * numVertsAround + _x;
      indices[_index + 3] = (_y + 1) * numVertsAround + _x;
      indices[_index + 4] = _y * numVertsAround + _x + 1;
      indices[_index + 5] = (_y + 1) * numVertsAround + _x + 1;
    }
  }

  return {
    indices: {
      size: 1,
      value: indices
    },
    attributes: {
      POSITION: {
        size: 3,
        value: positions
      },
      NORMAL: {
        size: 3,
        value: normals
      },
      TEXCOORD_0: {
        size: 2,
        value: texCoords
      }
    }
  };
}
//# sourceMappingURL=sphere-geometry.js.map