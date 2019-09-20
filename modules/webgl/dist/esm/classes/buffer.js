import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Resource from './resource';
import Accessor from './accessor';
import { assertWebGL2Context, getGLTypeFromTypedArray, getTypedArrayFromGLType } from '../webgl-utils';
import { log, assert, checkProps } from '../utils';
var DEBUG_DATA_LENGTH = 10;
var DEPRECATED_PROPS = {
  offset: 'accessor.offset',
  stride: 'accessor.stride',
  type: 'accessor.type',
  size: 'accessor.size',
  divisor: 'accessor.divisor',
  normalized: 'accessor.normalized',
  integer: 'accessor.integer',
  instanced: 'accessor.divisor',
  isInstanced: 'accessor.divisor'
};
var PROP_CHECKS_INITIALIZE = {
  removedProps: {},
  replacedProps: {
    bytes: 'byteLength'
  },
  deprecatedProps: DEPRECATED_PROPS
};
var PROP_CHECKS_SET_PROPS = {
  removedProps: DEPRECATED_PROPS
};

var Buffer = function (_Resource) {
  _inherits(Buffer, _Resource);

  function Buffer(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Buffer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Buffer).call(this, gl, props));

    _this.stubRemovedMethods('Buffer', 'v6.0', ['layout', 'setLayout', 'getIndexedParameter']);

    _this.target = props.target || (_this.gl.webgl2 ? 36662 : 34962);

    _this.initialize(props);

    Object.seal(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Buffer, [{
    key: "getElementCount",
    value: function getElementCount() {
      var accessor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.accessor;
      return Math.round(this.byteLength / Accessor.getBytesPerElement(accessor));
    }
  }, {
    key: "getVertexCount",
    value: function getVertexCount() {
      var accessor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.accessor;
      return Math.round(this.byteLength / Accessor.getBytesPerVertex(accessor));
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (ArrayBuffer.isView(props)) {
        props = {
          data: props
        };
      }

      if (Number.isFinite(props)) {
        props = {
          byteLength: props
        };
      }

      props = checkProps('Buffer', props, PROP_CHECKS_INITIALIZE);
      this.usage = props.usage || 35044;
      this.debugData = null;
      this.setAccessor(Object.assign({}, props, props.accessor));

      if (props.data) {
        this._setData(props.data);
      } else {
        this._setByteLength(props.byteLength || 0);
      }

      return this;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      props = checkProps('Buffer', props, PROP_CHECKS_SET_PROPS);

      if ('accessor' in props) {
        this.setAccessor(props.accessor);
      }

      return this;
    }
  }, {
    key: "setAccessor",
    value: function setAccessor(accessor) {
      accessor = Object.assign({}, accessor);
      delete accessor.buffer;
      this.accessor = new Accessor(accessor);
      return this;
    }
  }, {
    key: "reallocate",
    value: function reallocate(byteLength) {
      if (byteLength > this.byteLength) {
        this._setByteLength(byteLength);

        return true;
      }

      this.bytesUsed = byteLength;
      return false;
    }
  }, {
    key: "setData",
    value: function setData(props) {
      return this.initialize(props);
    }
  }, {
    key: "subData",
    value: function subData(props) {
      if (ArrayBuffer.isView(props)) {
        props = {
          data: props
        };
      }

      var _props = props,
          data = _props.data,
          _props$offset = _props.offset,
          offset = _props$offset === void 0 ? 0 : _props$offset,
          _props$srcOffset = _props.srcOffset,
          srcOffset = _props$srcOffset === void 0 ? 0 : _props$srcOffset;
      var byteLength = props.byteLength || props.length;
      assert(data);
      var target = this.gl.webgl2 ? 36663 : this.target;
      this.gl.bindBuffer(target, this.handle);

      if (srcOffset !== 0 || byteLength !== undefined) {
        assertWebGL2Context(this.gl);
        this.gl.bufferSubData(this.target, offset, data, srcOffset, byteLength);
      } else {
        this.gl.bufferSubData(target, offset, data);
      }

      this.gl.bindBuffer(target, null);
      this.debugData = null;

      this._inferType(data);

      return this;
    }
  }, {
    key: "copyData",
    value: function copyData(_ref) {
      var sourceBuffer = _ref.sourceBuffer,
          _ref$readOffset = _ref.readOffset,
          readOffset = _ref$readOffset === void 0 ? 0 : _ref$readOffset,
          _ref$writeOffset = _ref.writeOffset,
          writeOffset = _ref$writeOffset === void 0 ? 0 : _ref$writeOffset,
          size = _ref.size;
      var gl = this.gl;
      assertWebGL2Context(gl);
      gl.bindBuffer(36662, sourceBuffer.handle);
      gl.bindBuffer(36663, this.handle);
      gl.copyBufferSubData(36662, 36663, readOffset, writeOffset, size);
      gl.bindBuffer(36662, null);
      gl.bindBuffer(36663, null);
      this.debugData = null;
      return this;
    }
  }, {
    key: "getData",
    value: function getData() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$dstData = _ref2.dstData,
          dstData = _ref2$dstData === void 0 ? null : _ref2$dstData,
          _ref2$srcByteOffset = _ref2.srcByteOffset,
          srcByteOffset = _ref2$srcByteOffset === void 0 ? 0 : _ref2$srcByteOffset,
          _ref2$dstOffset = _ref2.dstOffset,
          dstOffset = _ref2$dstOffset === void 0 ? 0 : _ref2$dstOffset,
          _ref2$length = _ref2.length,
          length = _ref2$length === void 0 ? 0 : _ref2$length;

      assertWebGL2Context(this.gl);
      var ArrayType = getTypedArrayFromGLType(this.accessor.type || 5126, {
        clamped: false
      });

      var sourceAvailableElementCount = this._getAvailableElementCount(srcByteOffset);

      var dstElementOffset = dstOffset;
      var dstAvailableElementCount;
      var dstElementCount;

      if (dstData) {
        dstElementCount = dstData.length;
        dstAvailableElementCount = dstElementCount - dstElementOffset;
      } else {
        dstAvailableElementCount = Math.min(sourceAvailableElementCount, length || sourceAvailableElementCount);
        dstElementCount = dstElementOffset + dstAvailableElementCount;
      }

      var copyElementCount = Math.min(sourceAvailableElementCount, dstAvailableElementCount);
      length = length || copyElementCount;
      assert(length <= copyElementCount);
      dstData = dstData || new ArrayType(dstElementCount);
      this.gl.bindBuffer(36662, this.handle);
      this.gl.getBufferSubData(36662, srcByteOffset, dstData, dstOffset, length);
      this.gl.bindBuffer(36662, null);
      return dstData;
    }
  }, {
    key: "bind",
    value: function bind() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target,
          target = _ref3$target === void 0 ? this.target : _ref3$target,
          _ref3$index = _ref3.index,
          index = _ref3$index === void 0 ? this.accessor && this.accessor.index : _ref3$index,
          _ref3$offset = _ref3.offset,
          offset = _ref3$offset === void 0 ? 0 : _ref3$offset,
          size = _ref3.size;

      if (target === 35345 || target === 35982) {
        if (size !== undefined) {
          this.gl.bindBufferRange(target, index, this.handle, offset, size);
        } else {
          assert(offset === 0);
          this.gl.bindBufferBase(target, index, this.handle);
        }
      } else {
        this.gl.bindBuffer(target, this.handle);
      }

      return this;
    }
  }, {
    key: "unbind",
    value: function unbind() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$target = _ref4.target,
          target = _ref4$target === void 0 ? this.target : _ref4$target,
          _ref4$index = _ref4.index,
          index = _ref4$index === void 0 ? this.accessor && this.accessor.index : _ref4$index;

      var isIndexedBuffer = target === 35345 || target === 35982;

      if (isIndexedBuffer) {
        this.gl.bindBufferBase(target, index, null);
      } else {
        this.gl.bindBuffer(target, null);
      }

      return this;
    }
  }, {
    key: "getDebugData",
    value: function getDebugData() {
      if (!this.debugData) {
        this.debugData = this.getData({
          length: DEBUG_DATA_LENGTH
        });
        return {
          data: this.debugData,
          changed: true
        };
      }

      return {
        data: this.debugData,
        changed: false
      };
    }
  }, {
    key: "invalidateDebugData",
    value: function invalidateDebugData() {
      this.debugData = null;
    }
  }, {
    key: "_setData",
    value: function _setData(data) {
      var usage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.usage;
      assert(ArrayBuffer.isView(data));

      this._trackDeallocatedMemory();

      var target = this._getTarget();

      this.gl.bindBuffer(target, this.handle);
      this.gl.bufferData(target, data, usage);
      this.gl.bindBuffer(target, null);
      this.usage = usage;
      this.debugData = data.slice(0, DEBUG_DATA_LENGTH);
      this.bytesUsed = data.byteLength;

      this._trackAllocatedMemory(data.byteLength);

      var type = getGLTypeFromTypedArray(data);
      assert(type);
      this.setAccessor(new Accessor(this.accessor, {
        type: type
      }));
      return this;
    }
  }, {
    key: "_setByteLength",
    value: function _setByteLength(byteLength) {
      var usage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.usage;
      assert(byteLength >= 0);

      this._trackDeallocatedMemory();

      var data = byteLength;

      if (byteLength === 0) {
        data = new Float32Array(0);
      }

      var target = this._getTarget();

      this.gl.bindBuffer(target, this.handle);
      this.gl.bufferData(target, data, usage);
      this.gl.bindBuffer(target, null);
      this.usage = usage;
      this.debugData = null;
      this.bytesUsed = byteLength;

      this._trackAllocatedMemory(byteLength);

      return this;
    }
  }, {
    key: "_getTarget",
    value: function _getTarget() {
      return this.gl.webgl2 ? 36663 : this.target;
    }
  }, {
    key: "_getAvailableElementCount",
    value: function _getAvailableElementCount(srcByteOffset) {
      var ArrayType = getTypedArrayFromGLType(this.accessor.type || 5126, {
        clamped: false
      });
      var sourceElementOffset = srcByteOffset / ArrayType.BYTES_PER_ELEMENT;
      return this.getElementCount() - sourceElementOffset;
    }
  }, {
    key: "_inferType",
    value: function _inferType(data) {
      if (!this.accessor.type) {
        this.setAccessor(new Accessor(this.accessor, {
          type: getGLTypeFromTypedArray(data)
        }));
      }
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createBuffer();
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteBuffer(this.handle);

      this._trackDeallocatedMemory();
    }
  }, {
    key: "_getParameter",
    value: function _getParameter(pname) {
      this.gl.bindBuffer(this.target, this.handle);
      var value = this.gl.getBufferParameter(this.target, pname);
      this.gl.bindBuffer(this.target, null);
      return value;
    }
  }, {
    key: "setByteLength",
    value: function setByteLength(byteLength) {
      log.deprecated('setByteLength', 'reallocate')();
      return this.reallocate(byteLength);
    }
  }, {
    key: "updateAccessor",
    value: function updateAccessor(opts) {
      log.deprecated('updateAccessor(...)', 'setAccessor(new Accessor(buffer.accessor, ...)')();
      this.accessor = new Accessor(this.accessor, opts);
      return this;
    }
  }, {
    key: "type",
    get: function get() {
      log.deprecated('Buffer.type', 'Buffer.accessor.type')();
      return this.accessor.type;
    }
  }, {
    key: "bytes",
    get: function get() {
      log.deprecated('Buffer.bytes', 'Buffer.byteLength')();
      return this.byteLength;
    }
  }]);

  return Buffer;
}(Resource);

export { Buffer as default };
//# sourceMappingURL=buffer.js.map