import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Resource from './resource';
import Buffer from './buffer';
import { isWebGL2 } from '../webgl-utils';
import { getScratchArray, fillArray } from '../utils/array-utils-flat';
import { assert } from '../utils';
import { getBrowser } from 'probe.gl';
var OES_vertex_array_object = 'OES_vertex_array_object';
var ERR_ELEMENTS = 'elements must be GL.ELEMENT_ARRAY_BUFFER';

var VertexArrayObject = function (_Resource) {
  _inherits(VertexArrayObject, _Resource);

  _createClass(VertexArrayObject, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (options.constantAttributeZero) {
        return isWebGL2(gl) || getBrowser() === 'Chrome';
      }

      return isWebGL2(gl) || gl.getExtension(OES_vertex_array_object);
    }
  }, {
    key: "getDefaultArray",
    value: function getDefaultArray(gl) {
      gl.luma = gl.luma || {};

      if (!gl.luma.defaultVertexArray) {
        gl.luma.defaultVertexArray = new VertexArrayObject(gl, {
          handle: null
        });
      }

      return gl.luma.defaultVertexArray;
    }
  }, {
    key: "getMaxAttributes",
    value: function getMaxAttributes(gl) {
      VertexArrayObject.MAX_ATTRIBUTES = VertexArrayObject.MAX_ATTRIBUTES || gl.getParameter(34921);
      return VertexArrayObject.MAX_ATTRIBUTES;
    }
  }, {
    key: "setConstant",
    value: function setConstant(gl, location, array) {
      switch (array.constructor) {
        case Float32Array:
          VertexArrayObject._setConstantFloatArray(gl, location, array);

          break;

        case Int32Array:
          VertexArrayObject._setConstantIntArray(gl, location, array);

          break;

        case Uint32Array:
          VertexArrayObject._setConstantUintArray(gl, location, array);

          break;

        default:
          assert(false);
      }
    }
  }]);

  function VertexArrayObject(gl) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, VertexArrayObject);

    var id = opts.id || opts.program && opts.program.id;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(VertexArrayObject).call(this, gl, Object.assign({}, opts, {
      id: id
    })));
    _this.hasVertexArrays = VertexArrayObject.isSupported(gl);
    _this.buffer = null;
    _this.bufferValue = null;

    _this.initialize(opts);

    Object.seal(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VertexArrayObject, [{
    key: "delete",
    value: function _delete() {
      _get(_getPrototypeOf(VertexArrayObject.prototype), "delete", this).call(this);

      if (this.buffer) {
        this.buffer["delete"]();
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.setProps(props);
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      return this;
    }
  }, {
    key: "setElementBuffer",
    value: function setElementBuffer() {
      var _this2 = this;

      var elementBuffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      assert(!elementBuffer || elementBuffer.target === 34963, ERR_ELEMENTS);
      this.bind(function () {
        _this2.gl.bindBuffer(34963, elementBuffer ? elementBuffer.handle : null);
      });
      return this;
    }
  }, {
    key: "setBuffer",
    value: function setBuffer(location, buffer, accessor) {
      if (buffer.target === 34963) {
        return this.setElementBuffer(buffer, accessor);
      }

      var size = accessor.size,
          type = accessor.type,
          stride = accessor.stride,
          offset = accessor.offset,
          normalized = accessor.normalized,
          integer = accessor.integer,
          divisor = accessor.divisor;
      var gl = this.gl;
      location = Number(location);
      this.bind(function () {
        gl.bindBuffer(34962, buffer.handle);

        if (integer) {
          assert(isWebGL2(gl));
          gl.vertexAttribIPointer(location, size, type, stride, offset);
        } else {
          gl.vertexAttribPointer(location, size, type, normalized, stride, offset);
        }

        gl.enableVertexAttribArray(location);
        gl.vertexAttribDivisor(location, divisor || 0);
      });
      return this;
    }
  }, {
    key: "enable",
    value: function enable(location) {
      var _this3 = this;

      var _enable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var disablingAttributeZero = !_enable && location === 0 && !VertexArrayObject.isSupported(this.gl, {
        constantAttributeZero: true
      });

      if (!disablingAttributeZero) {
        location = Number(location);
        this.bind(function () {
          return _enable ? _this3.gl.enableVertexAttribArray(location) : _this3.gl.disableVertexAttribArray(location);
        });
      }

      return this;
    }
  }, {
    key: "getConstantBuffer",
    value: function getConstantBuffer(elementCount, value, accessor) {
      var constantValue = this._normalizeConstantArrayValue(value, accessor);

      var byteLength = constantValue.byteLength * elementCount;
      var length = constantValue.length * elementCount;
      var updateNeeded = !this.buffer;
      this.buffer = this.buffer || new Buffer(this.gl, byteLength);
      updateNeeded = updateNeeded || this.buffer.reallocate(byteLength);
      updateNeeded = updateNeeded || !this._compareConstantArrayValues(constantValue, this.bufferValue);

      if (updateNeeded) {
        var typedArray = getScratchArray(value.constructor, length);
        fillArray({
          target: typedArray,
          source: constantValue,
          start: 0,
          count: length
        });
        this.buffer.subData(typedArray);
        this.bufferValue = value;
      }

      return this.buffer;
    }
  }, {
    key: "_normalizeConstantArrayValue",
    value: function _normalizeConstantArrayValue(arrayValue, accessor) {
      if (Array.isArray(arrayValue)) {
        return new Float32Array(arrayValue);
      }

      return arrayValue;
    }
  }, {
    key: "_compareConstantArrayValues",
    value: function _compareConstantArrayValues(v1, v2) {
      if (!v1 || !v2 || v1.length !== v2.length || v1.constructor !== v2.constructor) {
        return false;
      }

      for (var i = 0; i < v1.length; ++i) {
        if (v1[i] !== v2[i]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      this.hasVertexArrays = VertexArrayObject.isSupported(this.gl);

      if (this.hasVertexArrays) {
        return this.gl.createVertexArray();
      }

      return null;
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle(handle) {
      if (this.hasVertexArrays) {
        this.gl.deleteVertexArray(handle);
      }

      return [this.elements];
    }
  }, {
    key: "_bindHandle",
    value: function _bindHandle(handle) {
      if (this.hasVertexArrays) {
        this.gl.bindVertexArray(handle);
      }
    }
  }, {
    key: "_getParameter",
    value: function _getParameter(pname, _ref) {
      var _this4 = this;

      var location = _ref.location;
      assert(Number.isFinite(location));
      return this.bind(function () {
        switch (pname) {
          case 34373:
            return _this4.gl.getVertexAttribOffset(location, pname);

          default:
            return _this4.gl.getVertexAttrib(location, pname);
        }
      });
    }
  }, {
    key: "MAX_ATTRIBUTES",
    get: function get() {
      return VertexArrayObject.getMaxAttributes(this.gl);
    }
  }], [{
    key: "_setConstantFloatArray",
    value: function _setConstantFloatArray(gl, location, array) {
      switch (array.length) {
        case 1:
          gl.vertexAttrib1fv(location, array);
          break;

        case 2:
          gl.vertexAttrib2fv(location, array);
          break;

        case 3:
          gl.vertexAttrib3fv(location, array);
          break;

        case 4:
          gl.vertexAttrib4fv(location, array);
          break;

        default:
          assert(false);
      }
    }
  }, {
    key: "_setConstantIntArray",
    value: function _setConstantIntArray(gl, location, array) {
      assert(isWebGL2(gl));

      switch (array.length) {
        case 1:
          gl.vertexAttribI1iv(location, array);
          break;

        case 2:
          gl.vertexAttribI2iv(location, array);
          break;

        case 3:
          gl.vertexAttribI3iv(location, array);
          break;

        case 4:
          gl.vertexAttribI4iv(location, array);
          break;

        default:
          assert(false);
      }
    }
  }, {
    key: "_setConstantUintArray",
    value: function _setConstantUintArray(gl, location, array) {
      assert(isWebGL2(gl));

      switch (array.length) {
        case 1:
          gl.vertexAttribI1uiv(location, array);
          break;

        case 2:
          gl.vertexAttribI2uiv(location, array);
          break;

        case 3:
          gl.vertexAttribI3uiv(location, array);
          break;

        case 4:
          gl.vertexAttribI4uiv(location, array);
          break;

        default:
          assert(false);
      }
    }
  }]);

  return VertexArrayObject;
}(Resource);

export { VertexArrayObject as default };
//# sourceMappingURL=vertex-array-object.js.map