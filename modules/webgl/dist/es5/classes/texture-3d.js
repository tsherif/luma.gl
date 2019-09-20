"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _context = require("../context");

var _webglUtils = require("../webgl-utils");

var _texture = _interopRequireDefault(require("./texture"));

var _textureFormats = require("./texture-formats");

var _buffer = _interopRequireDefault(require("./buffer"));

var Texture3D = function (_Texture) {
  (0, _inherits2["default"])(Texture3D, _Texture);
  (0, _createClass2["default"])(Texture3D, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      return (0, _webglUtils.isWebGL2)(gl);
    }
  }]);

  function Texture3D(gl) {
    var _this;

    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, Texture3D);
    (0, _webglUtils.assertWebGL2Context)(gl);
    props = Object.assign({
      depth: 1
    }, props, {
      target: 32879,
      unpackFlipY: false
    });
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Texture3D).call(this, gl, props));

    _this.initialize(props);

    Object.seal((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Texture3D, [{
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
      (0, _context.withParameters)(this.gl, parameters, function () {
        if (ArrayBuffer.isView(data)) {
          _this2.gl.texImage3D(_this2.target, level, dataFormat, width, height, depth, border, format, type, data);
        }

        if (data instanceof _buffer["default"]) {
          _this2.gl.bindBuffer(35052, data.handle);

          _this2.gl.texImage3D(_this2.target, level, dataFormat, width, height, depth, border, format, type, offset);
        }
      });

      if (data && data.byteLength) {
        this._trackAllocatedMemory(data.byteLength, 'Texture');
      } else {
        var channels = _textureFormats.DATA_FORMAT_CHANNELS[this.dataFormat] || 4;
        var channelSize = _textureFormats.TYPE_SIZES[this.type] || 1;

        this._trackAllocatedMemory(this.width * this.height * this.depth * channels * channelSize, 'Texture');
      }

      this.loaded = true;
      return this;
    }
  }]);
  return Texture3D;
}(_texture["default"]);

exports["default"] = Texture3D;
//# sourceMappingURL=texture-3d.js.map