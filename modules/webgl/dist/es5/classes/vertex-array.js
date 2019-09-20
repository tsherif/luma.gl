"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _accessor2 = _interopRequireDefault(require("./accessor"));

var _buffer = _interopRequireDefault(require("./buffer"));

var _vertexArrayObject = _interopRequireDefault(require("./vertex-array-object"));

var _utils = require("../utils");

var ERR_ATTRIBUTE_TYPE = 'VertexArray: attributes must be Buffers or constants (i.e. typed array)';
var MULTI_LOCATION_ATTRIBUTE_REGEXP = /^(.+)__LOCATION_([0-9]+)$/;
var DEPRECATIONS_V6 = ['setBuffers', 'setGeneric', 'clearBindings', 'setLocations', 'setGenericValues', 'setDivisor', 'enable', 'disable'];

var VertexArray = function () {
  function VertexArray(gl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, VertexArray);
    var id = opts.id || opts.program && opts.program.id;
    this.id = id;
    this.gl = gl;
    this.configuration = null;
    this.elements = null;
    this.elementsAccessor = null;
    this.values = null;
    this.accessors = null;
    this.unused = null;
    this.drawParams = null;
    this.buffer = null;
    this.vertexArrayObject = _vertexArrayObject["default"].isSupported(gl) ? new _vertexArrayObject["default"](gl) : _vertexArrayObject["default"].getDefaultArray(gl);
    (0, _utils.stubRemovedMethods)(this, 'VertexArray', 'v6.0', DEPRECATIONS_V6);
    this.initialize(opts);
    Object.seal(this);
  }

  (0, _createClass2["default"])(VertexArray, [{
    key: "delete",
    value: function _delete() {
      if (this.buffer) {
        this.buffer["delete"]();
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.reset();
      this.configuration = null;
      this.bindOnUse = false;
      return this.setProps(props);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.elements = null;
      this.elementsAccessor = null;
      var MAX_ATTRIBUTES = this.vertexArrayObject.MAX_ATTRIBUTES;
      this.values = new Array(MAX_ATTRIBUTES).fill(null);
      this.accessors = new Array(MAX_ATTRIBUTES).fill(null);
      this.unused = {};
      this.drawParams = null;
      return this;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      if ('program' in props) {
        this.configuration = props.program && props.program.configuration;
      }

      if ('configuration' in props) {
        this.configuration = props.configuration;
      }

      if ('attributes' in props) {
        this.setAttributes(props.attributes);
      }

      if ('elements' in props) {
        this.setElementBuffer(props.elements);
      }

      if ('bindOnUse' in props) {
        props = props.bindOnUse;
      }

      return this;
    }
  }, {
    key: "clearDrawParams",
    value: function clearDrawParams() {
      this.drawParams = null;
    }
  }, {
    key: "getDrawParams",
    value: function getDrawParams(appParameters) {
      this.drawParams = this.drawParams || this._updateDrawParams();
      return Object.assign({}, this.drawParams, appParameters);
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      var _this = this;

      this.vertexArrayObject.bind(function () {
        for (var locationOrName in attributes) {
          var value = attributes[locationOrName];

          _this._setAttribute(locationOrName, value);
        }

        _this.gl.bindBuffer(34962, null);
      });
      return this;
    }
  }, {
    key: "setElementBuffer",
    value: function setElementBuffer() {
      var elementBuffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var accessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.elements = elementBuffer;
      this.elementsAccessor = accessor;
      this.clearDrawParams();

      if (!this.vertexArrayObject.isDefaultArray) {
        this.vertexArrayObject.setElementBuffer(elementBuffer, accessor);
      }

      return this;
    }
  }, {
    key: "setBuffer",
    value: function setBuffer(locationOrName, buffer) {
      var appAccessor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (buffer.target === 34963) {
        return this.setElementBuffer(buffer, appAccessor);
      }

      var _this$_resolveLocatio = this._resolveLocationAndAccessor(locationOrName, buffer, buffer.accessor, appAccessor),
          location = _this$_resolveLocatio.location,
          accessor = _this$_resolveLocatio.accessor;

      if (location >= 0) {
        this.values[location] = buffer;
        this.accessors[location] = accessor;
        this.clearDrawParams();

        if (!this.vertexArrayObject.isDefaultArray) {
          this.vertexArrayObject.setBuffer(location, buffer, accessor);
        }
      }

      return this;
    }
  }, {
    key: "setConstant",
    value: function setConstant(locationOrName, arrayValue) {
      var appAccessor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _this$_resolveLocatio2 = this._resolveLocationAndAccessor(locationOrName, arrayValue, appAccessor),
          location = _this$_resolveLocatio2.location,
          accessor = _this$_resolveLocatio2.accessor;

      if (location >= 0) {
        arrayValue = this.vertexArrayObject._normalizeConstantArrayValue(arrayValue, accessor);
        this.values[location] = arrayValue;
        this.accessors[location] = accessor;
        this.clearDrawParams();

        if (!this.vertexArrayObject.isDefaultArray) {
          this.vertexArrayObject.enable(location, false);
        }
      }

      return this;
    }
  }, {
    key: "unbindBuffers",
    value: function unbindBuffers() {
      var _this2 = this;

      this.vertexArrayObject.bind(function () {
        if (_this2.elements) {
          _this2.setElementBuffer(null);
        }

        _this2.buffer = _this2.buffer || new _buffer["default"](_this2.gl, {
          size: 4
        });

        for (var location = 0; location < _this2.vertexArrayObject.MAX_ATTRIBUTES; location++) {
          if (_this2.values[location] instanceof _buffer["default"]) {
            _this2.gl.disableVertexAttribArray(location);

            _this2.gl.bindBuffer(34962, _this2.buffer.handle);

            _this2.gl.vertexAttribPointer(location, 1, 5126, false, 0, 0);
          }
        }
      });
      return this;
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers() {
      var _this3 = this;

      this.vertexArrayObject.bind(function () {
        if (_this3.elements) {
          _this3.setElementBuffer(_this3.elements);
        }

        for (var location = 0; location < _this3.vertexArrayObject.MAX_ATTRIBUTES; location++) {
          var buffer = _this3.values[location];

          if (buffer instanceof _buffer["default"]) {
            _this3.setBuffer(location, buffer);
          }
        }
      });
      return this;
    }
  }, {
    key: "bindForDraw",
    value: function bindForDraw(vertexCount, instanceCount, func) {
      var _this4 = this;

      var value;
      this.vertexArrayObject.bind(function () {
        _this4._setConstantAttributes(vertexCount, instanceCount);

        if (!_this4.vertexArrayObject.hasVertexArrays) {
          _this4.bindBuffers();
        }

        value = func();

        if (!_this4.vertexArrayObject.hasVertexArrays) {
          _this4.unbindBuffers();
        }
      });
      return value;
    }
  }, {
    key: "_resolveLocationAndAccessor",
    value: function _resolveLocationAndAccessor(locationOrName, value, valueAccessor, appAccessor) {
      var _this5 = this;

      var _this$_getAttributeIn = this._getAttributeIndex(locationOrName),
          location = _this$_getAttributeIn.location,
          name = _this$_getAttributeIn.name;

      if (!Number.isFinite(location) || location < 0) {
        this.unused[locationOrName] = value;

        _utils.log.once(3, function () {
          return "unused value ".concat(locationOrName, " in ").concat(_this5.id);
        })();

        return this;
      }

      var accessInfo = this._getAttributeInfo(name || location);

      if (!accessInfo) {
        return {
          location: -1,
          accessor: null
        };
      }

      var accessor = _accessor2["default"].resolve(accessInfo.accessor, valueAccessor, appAccessor);

      var size = accessor.size,
          type = accessor.type;
      (0, _utils.assert)(Number.isFinite(size) && Number.isFinite(type));
      return {
        location: location,
        accessor: accessor
      };
    }
  }, {
    key: "_getAttributeInfo",
    value: function _getAttributeInfo(attributeName) {
      return this.configuration && this.configuration.getAttributeInfo(attributeName);
    }
  }, {
    key: "_getAttributeIndex",
    value: function _getAttributeIndex(locationOrName) {
      var location = Number(locationOrName);

      if (Number.isFinite(location)) {
        return {
          location: location
        };
      }

      var multiLocation = MULTI_LOCATION_ATTRIBUTE_REGEXP.exec(locationOrName);
      var name = multiLocation ? multiLocation[1] : locationOrName;
      var locationOffset = multiLocation ? Number(multiLocation[2]) : 0;

      if (this.configuration) {
        return {
          location: this.configuration.getAttributeLocation(name) + locationOffset,
          name: name
        };
      }

      return {
        location: -1
      };
    }
  }, {
    key: "_setAttribute",
    value: function _setAttribute(locationOrName, value) {
      if (value instanceof _buffer["default"]) {
        this.setBuffer(locationOrName, value);
      } else if (Array.isArray(value) && value.length && value[0] instanceof _buffer["default"]) {
        var buffer = value[0];
        var accessor = value[1];
        this.setBuffer(locationOrName, buffer, accessor);
      } else if (ArrayBuffer.isView(value) || Array.isArray(value)) {
        var constant = value;
        this.setConstant(locationOrName, constant);
      } else if (value.buffer instanceof _buffer["default"]) {
        var _accessor = value;
        this.setBuffer(locationOrName, _accessor.buffer, _accessor);
      } else {
        throw new Error(ERR_ATTRIBUTE_TYPE);
      }
    }
  }, {
    key: "_setConstantAttributes",
    value: function _setConstantAttributes(vertexCount, instanceCount) {
      var elementCount = Math.max(vertexCount | 0, instanceCount | 0);
      var constant = this.values[0];

      if (ArrayBuffer.isView(constant)) {
        this._setConstantAttributeZero(constant, elementCount);
      }

      for (var location = 1; location < this.vertexArrayObject.MAX_ATTRIBUTES; location++) {
        constant = this.values[location];

        if (ArrayBuffer.isView(constant)) {
          this._setConstantAttribute(location, constant);
        }
      }
    }
  }, {
    key: "_setConstantAttributeZero",
    value: function _setConstantAttributeZero(constant, elementCount) {
      if (_vertexArrayObject["default"].isSupported(this.gl, {
        constantAttributeZero: true
      })) {
        this._setConstantAttribute(0, constant);

        return;
      }

      var buffer = this.vertexArrayObject.getConstantBuffer(elementCount, constant);
      this.vertexArrayObject.setBuffer(0, buffer, this.accessors[0]);
    }
  }, {
    key: "_setConstantAttribute",
    value: function _setConstantAttribute(location, constant) {
      _vertexArrayObject["default"].setConstant(this.gl, location, constant);

      if (this.vertexArrayObject.isDefault) {
        this.vertexArrayObject.enable(location, false);
      }
    }
  }, {
    key: "_updateDrawParams",
    value: function _updateDrawParams() {
      var drawParams = {
        isIndexed: false,
        isInstanced: false,
        indexCount: Infinity,
        vertexCount: Infinity,
        instanceCount: Infinity
      };

      for (var location = 0; location < this.vertexArrayObject.MAX_ATTRIBUTES; location++) {
        this._updateDrawParamsForLocation(drawParams, location);
      }

      if (this.elements) {
        drawParams.elementCount = this.elements.getElementCount(this.elements.accessor);
        drawParams.isIndexed = true;
        drawParams.indexType = this.elementsAccessor.type || this.elements.accessor.type;
        drawParams.indexOffset = this.elementsAccessor.offset || 0;
      }

      if (drawParams.indexCount === Infinity) {
        drawParams.indexCount = 0;
      }

      if (drawParams.vertexCount === Infinity) {
        drawParams.vertexCount = 0;
      }

      if (drawParams.instanceCount === Infinity) {
        drawParams.instanceCount = 0;
      }

      return drawParams;
    }
  }, {
    key: "_updateDrawParamsForLocation",
    value: function _updateDrawParamsForLocation(drawParams, location) {
      var value = this.values[location];
      var accessor = this.accessors[location];

      if (!value) {
        return;
      }

      var divisor = accessor.divisor;
      var isInstanced = divisor > 0;
      drawParams.isInstanced = drawParams.isInstanced || isInstanced;

      if (value instanceof _buffer["default"]) {
        var buffer = value;

        if (isInstanced) {
          var instanceCount = buffer.getVertexCount(accessor);
          drawParams.instanceCount = Math.min(drawParams.instanceCount, instanceCount);
        } else {
          var vertexCount = buffer.getVertexCount(accessor);
          drawParams.vertexCount = Math.min(drawParams.vertexCount, vertexCount);
        }
      }
    }
  }, {
    key: "setElements",
    value: function setElements() {
      var elementBuffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var accessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _utils.log.deprecated('setElements', 'setElementBuffer')();

      return this.setElementBuffer(elementBuffer, accessor);
    }
  }]);
  return VertexArray;
}();

exports["default"] = VertexArray;
//# sourceMappingURL=vertex-array.js.map