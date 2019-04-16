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

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _model = _interopRequireDefault(require("../../lib/model"));

var _scenegraphNode = _interopRequireDefault(require("./scenegraph-node"));

var ModelNode = function (_ScenegraphNode) {
  (0, _inherits2["default"])(ModelNode, _ScenegraphNode);

  function ModelNode(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, ModelNode);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ModelNode).call(this, props));
    _this.onBeforeRender = null;
    _this.AfterRender = null;

    if (gl instanceof _model["default"]) {
      _this.model = gl;

      _this._setModelNodeProps(props);
    } else {
      _this.model = new _model["default"](gl, props);
    }

    _this.managedResources = props.managedResources || [];
    return _this;
  }

  (0, _createClass2["default"])(ModelNode, [{
    key: "setProps",
    value: function setProps(props) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ModelNode.prototype), "setProps", this).call(this, props);

      this._setModelNodeProps(props);

      return this;
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (this.model) {
        this.model["delete"]();
        this.model = null;
      }

      this.managedResources.forEach(function (resource) {
        return resource["delete"]();
      });
      this.managedResources = [];
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$model;

      return (_this$model = this.model).draw.apply(_this$model, arguments);
    }
  }, {
    key: "setUniforms",
    value: function setUniforms() {
      var _this$model2;

      (_this$model2 = this.model).setUniforms.apply(_this$model2, arguments);

      return this;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes() {
      var _this$model3;

      (_this$model3 = this.model).setAttributes.apply(_this$model3, arguments);

      return this;
    }
  }, {
    key: "updateModuleSettings",
    value: function updateModuleSettings() {
      var _this$model4;

      (_this$model4 = this.model).updateModuleSettings.apply(_this$model4, arguments);

      return this;
    }
  }, {
    key: "_setModelNodeProps",
    value: function _setModelNodeProps(props) {
      this.model.setProps(props);
    }
  }]);
  return ModelNode;
}(_scenegraphNode["default"]);

exports["default"] = ModelNode;
//# sourceMappingURL=model-node.js.map