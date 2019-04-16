import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { withParameters } from '../context';
import { isWebGL2, assertWebGL2Context } from '../webgl-utils';
import Texture from './texture';
import { DATA_FORMAT_CHANNELS, TYPE_SIZES } from './texture-formats';
import Buffer from './buffer';

var Texture3D = function (_Texture) {
  _inherits(Texture3D, _Texture);

  _createClass(Texture3D, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      return isWebGL2(gl);
    }
  }]);

  function Texture3D(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Texture3D);

    assertWebGL2Context(gl);
    props = Object.assign({
      depth: 1
    }, props, {
      target: 32879,
      unpackFlipY: false
    });
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Texture3D).call(this, gl, props));

    _this.initialize(props);

    Object.seal(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Texture3D, [{
    key: "setImageData",
    value: function setImageData(_ref) {
      var _this2 = this;

      var _ref$level = _ref.level,
          level = _ref$level === void 0 ? 0 : _ref$level,
          _ref$dataFormat = _ref.dataFormat,
          dataFormat = _ref$dataFormat === void 0 ? 6408 : _ref$dataFormat,
          width = _ref.width,
          height = _ref.height,
          _ref$depth = _ref.depth,
          depth = _ref$depth === void 0 ? 1 : _ref$depth,
          _ref$border = _ref.border,
          border = _ref$border === void 0 ? 0 : _ref$border,
          format = _ref.format,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? 5121 : _ref$type,
          _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          data = _ref.data,
          _ref$parameters = _ref.parameters,
          parameters = _ref$parameters === void 0 ? {} : _ref$parameters;

      this._trackDeallocatedMemory('Texture');

      this.gl.bindTexture(this.target, this.handle);
      withParameters(this.gl, parameters, function () {
        if (ArrayBuffer.isView(data)) {
          _this2.gl.texImage3D(_this2.target, level, dataFormat, width, height, depth, border, format, type, data);
        }

        if (data instanceof Buffer) {
          _this2.gl.bindBuffer(35052, data.handle);

          _this2.gl.texImage3D(_this2.target, level, dataFormat, width, height, depth, border, format, type, offset);
        }
      });

      if (data && data.byteLength) {
        this._trackAllocatedMemory(data.byteLength, 'Texture');
      } else {
        var channels = DATA_FORMAT_CHANNELS[this.dataFormat] || 4;
        var channelSize = TYPE_SIZES[this.type] || 1;

        this._trackAllocatedMemory(this.width * this.height * this.depth * channels * channelSize, 'Texture');
      }

      this.loaded = true;
      return this;
    }
  }]);

  return Texture3D;
}(Texture);

export { Texture3D as default };
//# sourceMappingURL=texture-3d.js.map