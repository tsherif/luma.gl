import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Resource from './resource';
import RENDERBUFFER_FORMATS from './renderbuffer-formats';
import { isWebGL2 } from '../webgl-utils';
import { assert } from '../utils';

function isFormatSupported(gl, format, formats) {
  var info = formats[format];

  if (!info) {
    return false;
  }

  var value = isWebGL2(gl) ? info.gl2 || info.gl1 : info.gl1;

  if (typeof value === 'string') {
    return gl.getExtension(value);
  }

  return value;
}

var Renderbuffer = function (_Resource) {
  _inherits(Renderbuffer, _Resource);

  _createClass(Renderbuffer, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          format = _ref.format;

      return !format || isFormatSupported(gl, format, RENDERBUFFER_FORMATS);
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

    _classCallCheck(this, Renderbuffer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Renderbuffer).call(this, gl, opts));

    _this.initialize(opts);

    Object.seal(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Renderbuffer, [{
    key: "initialize",
    value: function initialize(_ref3) {
      var format = _ref3.format,
          _ref3$width = _ref3.width,
          width = _ref3$width === void 0 ? 1 : _ref3$width,
          _ref3$height = _ref3.height,
          height = _ref3$height === void 0 ? 1 : _ref3$height,
          _ref3$samples = _ref3.samples,
          samples = _ref3$samples === void 0 ? 0 : _ref3$samples;
      assert(format, 'Needs format');

      this._trackDeallocatedMemory();

      this.gl.bindRenderbuffer(36161, this.handle);

      if (samples !== 0 && isWebGL2(this.gl)) {
        this.gl.renderbufferStorageMultisample(36161, samples, format, width, height);
      } else {
        this.gl.renderbufferStorage(36161, format, width, height);
      }

      this.format = format;
      this.width = width;
      this.height = height;
      this.samples = samples;

      this._trackAllocatedMemory(this.width * this.height * (this.samples || 1) * RENDERBUFFER_FORMATS[this.format].bpp);

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
}(Resource);

export { Renderbuffer as default };
//# sourceMappingURL=renderbuffer.js.map