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

var _resource = _interopRequireDefault(require("./resource"));

var _renderbufferFormats = _interopRequireDefault(require("./renderbuffer-formats"));

var _webglUtils = require("../webgl-utils");

var _utils = require("../utils");

function isFormatSupported(gl, format, formats) {
  var info = formats[format];

  if (!info) {
    return false;
  }

  var value = (0, _webglUtils.isWebGL2)(gl) ? info.gl2 || info.gl1 : info.gl1;

  if (typeof value === 'string') {
    return gl.getExtension(value);
  }

  return value;
}

var Renderbuffer = function (_Resource) {
  (0, _inherits2["default"])(Renderbuffer, _Resource);
  (0, _createClass2["default"])(Renderbuffer, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          format = _ref.format;

      return !format || isFormatSupported(gl, format, _renderbufferFormats["default"]);
    }
  }, {
    key: "getSamplesForFormat",
    value: function getSamplesForFormat(gl, _ref2) {
      var format = _ref2.format;
      return gl.getInternalformatParameter(36161, format, 32937);
    }
  }]);

  function Renderbuffer(gl) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, Renderbuffer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Renderbuffer).call(this, gl, opts));

    _this.initialize(opts);

    Object.seal((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Renderbuffer, [{
    key: "initialize",
    value: function initialize(_ref3) {
      var format = _ref3.format,
          _ref3$width = _ref3.width,
          width = _ref3$width === void 0 ? 1 : _ref3$width,
          _ref3$height = _ref3.height,
          height = _ref3$height === void 0 ? 1 : _ref3$height,
          _ref3$samples = _ref3.samples,
          samples = _ref3$samples === void 0 ? 0 : _ref3$samples;
      (0, _utils.assert)(format, 'Needs format');

      this._trackDeallocatedMemory();

      this.gl.bindRenderbuffer(36161, this.handle);

      if (samples !== 0 && (0, _webglUtils.isWebGL2)(this.gl)) {
        this.gl.renderbufferStorageMultisample(36161, samples, format, width, height);
      } else {
        this.gl.renderbufferStorage(36161, format, width, height);
      }

      this.format = format;
      this.width = width;
      this.height = height;
      this.samples = samples;

      this._trackAllocatedMemory(this.width * this.height * (this.samples || 1) * _renderbufferFormats["default"][this.format].bpp);

      return this;
    }
  }, {
    key: "resize",
    value: function resize(_ref4) {
      var width = _ref4.width,
          height = _ref4.height;

      if (width !== this.width || height !== this.height) {
        return this.initialize({
          width: width,
          height: height,
          format: this.format,
          samples: this.samples
        });
      }

      return this;
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createRenderbuffer();
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteRenderbuffer(this.handle);

      this._trackDeallocatedMemory();
    }
  }, {
    key: "_bindHandle",
    value: function _bindHandle(handle) {
      this.gl.bindRenderbuffer(36161, handle);
    }
  }, {
    key: "_syncHandle",
    value: function _syncHandle(handle) {
      this.format = this.getParameter(36164);
      this.width = this.getParameter(36162);
      this.height = this.getParameter(36163);
      this.samples = this.getParameter(36011);
    }
  }, {
    key: "_getParameter",
    value: function _getParameter(pname) {
      this.gl.bindRenderbuffer(36161, this.handle);
      var value = this.gl.getRenderbufferParameter(36161, pname);
      return value;
    }
  }]);
  return Renderbuffer;
}(_resource["default"]);

exports["default"] = Renderbuffer;
//# sourceMappingURL=renderbuffer.js.map