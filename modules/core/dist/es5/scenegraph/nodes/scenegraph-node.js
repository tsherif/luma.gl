"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _math = require("math.gl");

var _utils = require("../../utils");

var ScenegraphNode = function () {
  function ScenegraphNode(props) {
    (0, _classCallCheck2["default"])(this, ScenegraphNode);
    var id = props.id;
    this.id = id || (0, _utils.uid)(this.constructor.name);
    this.display = true;
    this.position = new _math.Vector3();
    this.rotation = new _math.Vector3();
    this.scale = new _math.Vector3(1, 1, 1);
    this.matrix = new _math.Matrix4();
    this.userData = {};
    this.props = {};

    this._setScenegraphNodeProps(props);
  }

  (0, _createClass2["default"])(ScenegraphNode, [{
    key: "delete",
    value: function _delete() {}
  }, {
    key: "setProps",
    value: function setProps(props) {
      this._setScenegraphNodeProps(props);

      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "{type: ScenegraphNode, id: ".concat(this.id, ")}");
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      (0, _utils.assert)(position.length === 3, 'setPosition requires vector argument');
      this.position = position;
      return this;
    }
  }, {
    key: "setRotation",
    value: function setRotation(rotation) {
      (0, _utils.assert)(rotation.length === 3, 'setRotation requires vector argument');
      this.rotation = rotation;
      return this;
    }
  }, {
    key: "setScale",
    value: function setScale(scale) {
      (0, _utils.assert)(scale.length === 3, 'setScale requires vector argument');
      this.scale = scale;
      return this;
    }
  }, {
    key: "setMatrix",
    value: function setMatrix(matrix) {
      var copyMatrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (copyMatrix) {
        this.matrix.copy(matrix);
      } else {
        this.matrix = matrix;
      }
    }
  }, {
    key: "setMatrixComponents",
    value: function setMatrixComponents(_ref) {
      var position = _ref.position,
          rotation = _ref.rotation,
          scale = _ref.scale,
          _ref$update = _ref.update,
          update = _ref$update === void 0 ? true : _ref$update;

      if (position) {
        this.setPosition(position);
      }

      if (rotation) {
        this.setRotation(rotation);
      }

      if (scale) {
        this.setScale(scale);
      }

      if (update) {
        this.updateMatrix();
      }

      return this;
    }
  }, {
    key: "updateMatrix",
    value: function updateMatrix() {
      var pos = this.position;
      var rot = this.rotation;
      var scale = this.scale;
      this.matrix.identity();
      this.matrix.translate(pos);
      this.matrix.rotateXYZ(rot);
      this.matrix.scale(scale);
      return this;
    }
  }, {
    key: "update",
    value: function update() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          position = _ref2.position,
          rotation = _ref2.rotation,
          scale = _ref2.scale;

      if (position) {
        this.setPosition(position);
      }

      if (rotation) {
        this.setRotation(rotation);
      }

      if (scale) {
        this.setScale(scale);
      }

      this.updateMatrix();
      return this;
    }
  }, {
    key: "getCoordinateUniforms",
    value: function getCoordinateUniforms(viewMatrix, modelMatrix) {
      (0, _utils.assert)(viewMatrix);
      modelMatrix = modelMatrix || this.matrix;
      var worldMatrix = new _math.Matrix4(viewMatrix).multiplyRight(modelMatrix);
      var worldInverse = worldMatrix.invert();
      var worldInverseTranspose = worldInverse.transpose();
      return {
        viewMatrix: viewMatrix,
        modelMatrix: modelMatrix,
        objectMatrix: modelMatrix,
        worldMatrix: worldMatrix,
        worldInverseMatrix: worldInverse,
        worldInverseTransposeMatrix: worldInverseTranspose
      };
    }
  }, {
    key: "transform",
    value: function transform() {
      if (!this.parent) {
        this.endPosition.set(this.position);
        this.endRotation.set(this.rotation);
        this.endScale.set(this.scale);
      } else {
        var parent = this.parent;
        this.endPosition.set(this.position.add(parent.endPosition));
        this.endRotation.set(this.rotation.add(parent.endRotation));
        this.endScale.set(this.scale.add(parent.endScale));
      }

      var ch = this.children;

      for (var i = 0; i < ch.length; ++i) {
        ch[i].transform();
      }

      return this;
    }
  }, {
    key: "_setScenegraphNodeProps",
    value: function _setScenegraphNodeProps(props) {
      if ('display' in props) {
        this.display = props.display;
      }

      if ('position' in props) {
        this.setPosition(props.position);
      }

      if ('rotation' in props) {
        this.setPosition(props.rotation);
      }

      if ('scale' in props) {
        this.setScale(props.scale);
      }

      if ('matrix' in props) {
        this.setPosition(props.matrix);
      }

      Object.assign(this.props, props);
    }
  }]);
  return ScenegraphNode;
}();

exports["default"] = ScenegraphNode;
//# sourceMappingURL=scenegraph-node.js.map