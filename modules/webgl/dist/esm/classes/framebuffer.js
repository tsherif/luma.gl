import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Resource from './resource';
import Texture2D from './texture-2d';
import Renderbuffer from './renderbuffer';
import { clear as _clear, clearBuffer } from './clear';
import { copyToDataUrl } from './copy-and-blit.js';
import { getFeatures } from '../features';
import { isWebGL2, assertWebGL2Context, getKey } from '../webgl-utils';
import { log as _log, assert } from '../utils';
var ERR_MULTIPLE_RENDERTARGETS = 'Multiple render targets not supported';

var Framebuffer = function (_Resource) {
  _inherits(Framebuffer, _Resource);

  _createClass(Framebuffer, [{
    key: "MAX_COLOR_ATTACHMENTS",
    get: function get() {
      return this.gl.getParameter(this.gl.MAX_COLOR_ATTACHMENTS);
    }
  }, {
    key: "MAX_DRAW_BUFFERS",
    get: function get() {
      return this.gl.getParameter(this.gl.MAX_DRAW_BUFFERS);
    }
  }], [{
    key: "isSupported",
    value: function isSupported(gl) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          colorBufferFloat = _ref.colorBufferFloat,
          colorBufferHalfFloat = _ref.colorBufferHalfFloat;

      var supported = true;
      supported = colorBufferFloat && gl.getExtension(isWebGL2(gl) ? 'EXT_color_buffer_float' : 'WEBGL.color_buffer_float');
      supported = colorBufferHalfFloat && gl.getExtension(isWebGL2(gl) ? 'EXT_color_buffer_float' : 'EXT_color_buffer_half_float');
      return supported;
    }
  }, {
    key: "getDefaultFramebuffer",
    value: function getDefaultFramebuffer(gl) {
      gl.luma = gl.luma || {};
      gl.luma.defaultFramebuffer = gl.luma.defaultFramebuffer || new Framebuffer(gl, {
        id: 'default-framebuffer',
        handle: null,
        attachments: {}
      });
      return gl.luma.defaultFramebuffer;
    }
  }]);

  function Framebuffer(gl) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Framebuffer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Framebuffer).call(this, gl, opts));
    _this.width = null;
    _this.height = null;
    _this.attachments = {};
    _this.readBuffer = 36064;
    _this.drawBuffers = [36064];

    _this.initialize(opts);

    Object.seal(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Framebuffer, [{
    key: "initialize",
    value: function initialize(_ref2) {
      var _ref2$width = _ref2.width,
          width = _ref2$width === void 0 ? 1 : _ref2$width,
          _ref2$height = _ref2.height,
          height = _ref2$height === void 0 ? 1 : _ref2$height,
          _ref2$attachments = _ref2.attachments,
          attachments = _ref2$attachments === void 0 ? null : _ref2$attachments,
          _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? true : _ref2$color,
          _ref2$depth = _ref2.depth,
          depth = _ref2$depth === void 0 ? true : _ref2$depth,
          _ref2$stencil = _ref2.stencil,
          stencil = _ref2$stencil === void 0 ? false : _ref2$stencil,
          _ref2$check = _ref2.check,
          check = _ref2$check === void 0 ? true : _ref2$check,
          readBuffer = _ref2.readBuffer,
          drawBuffers = _ref2.drawBuffers;
      assert(width >= 0 && height >= 0, 'Width and height need to be integers');
      this.width = width;
      this.height = height;

      if (attachments) {
        for (var attachment in attachments) {
          var target = attachments[attachment];
          var object = Array.isArray(target) ? target[0] : target;
          object.resize({
            width: width,
            height: height
          });
        }
      } else {
        attachments = this._createDefaultAttachments(color, depth, stencil, width, height);
      }

      this.update({
        clearAttachments: true,
        attachments: attachments,
        readBuffer: readBuffer,
        drawBuffers: drawBuffers
      });

      if (attachments && check) {
        this.checkStatus();
      }
    }
  }, {
    key: "update",
    value: function update(_ref3) {
      var _ref3$attachments = _ref3.attachments,
          attachments = _ref3$attachments === void 0 ? {} : _ref3$attachments,
          readBuffer = _ref3.readBuffer,
          drawBuffers = _ref3.drawBuffers,
          _ref3$clearAttachment = _ref3.clearAttachments,
          clearAttachments = _ref3$clearAttachment === void 0 ? false : _ref3$clearAttachment,
          _ref3$resizeAttachmen = _ref3.resizeAttachments,
          resizeAttachments = _ref3$resizeAttachmen === void 0 ? true : _ref3$resizeAttachmen;
      this.attach(attachments, {
        clearAttachments: clearAttachments,
        resizeAttachments: resizeAttachments
      });
      var gl = this.gl;
      var prevHandle = gl.bindFramebuffer(36160, this.handle);

      if (readBuffer) {
        this._setReadBuffer(readBuffer);
      }

      if (drawBuffers) {
        this._setDrawBuffers(drawBuffers);
      }

      gl.bindFramebuffer(36160, prevHandle || null);
      return this;
    }
  }, {
    key: "resize",
    value: function resize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          width = _ref4.width,
          height = _ref4.height;

      if (this.handle === null) {
        assert(width === undefined && height === undefined);
        this.width = this.gl.drawingBufferWidth;
        this.height = this.gl.drawingBufferHeight;
        return this;
      }

      if (width === undefined) {
        width = this.gl.drawingBufferWidth;
      }

      if (height === undefined) {
        height = this.gl.drawingBufferHeight;
      }

      if (width !== this.width && height !== this.height) {
        _log.log(2, "Resizing framebuffer ".concat(this.id, " to ").concat(width, "x").concat(height))();
      }

      for (var attachmentPoint in this.attachments) {
        this.attachments[attachmentPoint].resize({
          width: width,
          height: height
        });
      }

      this.width = width;
      this.height = height;
      return this;
    }
  }, {
    key: "attach",
    value: function attach(attachments) {
      var _this2 = this;

      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$clearAttachment = _ref5.clearAttachments,
          clearAttachments = _ref5$clearAttachment === void 0 ? false : _ref5$clearAttachment,
          _ref5$resizeAttachmen = _ref5.resizeAttachments,
          resizeAttachments = _ref5$resizeAttachmen === void 0 ? true : _ref5$resizeAttachmen;

      var newAttachments = {};

      if (clearAttachments) {
        Object.keys(this.attachments).forEach(function (key) {
          newAttachments[key] = null;
        });
      }

      Object.assign(newAttachments, attachments);
      var prevHandle = this.gl.bindFramebuffer(36160, this.handle);

      for (var key in newAttachments) {
        assert(key !== undefined, 'Misspelled framebuffer binding point?');
        var attachment = Number(key);
        var descriptor = newAttachments[attachment];
        var object = descriptor;

        if (!object) {
          this._unattach(attachment);
        } else if (object instanceof Renderbuffer) {
          this._attachRenderbuffer({
            attachment: attachment,
            renderbuffer: object
          });
        } else if (Array.isArray(descriptor)) {
          var _descriptor = _slicedToArray(descriptor, 3),
              texture = _descriptor[0],
              _descriptor$ = _descriptor[1],
              layer = _descriptor$ === void 0 ? 0 : _descriptor$,
              _descriptor$2 = _descriptor[2],
              level = _descriptor$2 === void 0 ? 0 : _descriptor$2;

          object = texture;

          this._attachTexture({
            attachment: attachment,
            texture: texture,
            layer: layer,
            level: level
          });
        } else {
          this._attachTexture({
            attachment: attachment,
            texture: object,
            layer: 0,
            level: 0
          });
        }

        if (resizeAttachments && object) {
          object.resize({
            width: this.width,
            height: this.height
          });
        }
      }

      this.gl.bindFramebuffer(36160, prevHandle || null);
      Object.assign(this.attachments, attachments);
      Object.keys(this.attachments).filter(function (key) {
        return !_this2.attachments[key];
      }).forEach(function (key) {
        delete _this2.attachments[key];
      });
    }
  }, {
    key: "checkStatus",
    value: function checkStatus() {
      var gl = this.gl;
      var prevHandle = gl.bindFramebuffer(36160, this.handle);
      var status = gl.checkFramebufferStatus(36160);
      gl.bindFramebuffer(36160, prevHandle || null);

      if (status !== 36053) {
        throw new Error(_getFrameBufferStatus(status));
      }

      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          color = _ref6.color,
          depth = _ref6.depth,
          stencil = _ref6.stencil,
          _ref6$drawBuffers = _ref6.drawBuffers,
          drawBuffers = _ref6$drawBuffers === void 0 ? [] : _ref6$drawBuffers;

      var prevHandle = this.gl.bindFramebuffer(36160, this.handle);

      if (color || depth || stencil) {
        _clear(this.gl, {
          color: color,
          depth: depth,
          stencil: stencil
        });
      }

      drawBuffers.forEach(function (value, drawBuffer) {
        clearBuffer({
          drawBuffer: drawBuffer,
          value: value
        });
      });
      this.gl.bindFramebuffer(36160, prevHandle || null);
      return this;
    }
  }, {
    key: "readPixels",
    value: function readPixels() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _log.error('Framebuffer.readPixels() is no logner supported, use readPixelsToArray(framebuffer)')();

      return null;
    }
  }, {
    key: "readPixelsToBuffer",
    value: function readPixelsToBuffer() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _log.error('Framebuffer.readPixelsToBuffer()is no logner supported, use readPixelsToBuffer(framebuffer)')();

      return null;
    }
  }, {
    key: "copyToDataUrl",
    value: function copyToDataUrl() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _log.error('Framebuffer.copyToDataUrl() is no logner supported, use copyToDataUrl(framebuffer)')();

      return null;
    }
  }, {
    key: "copyToImage",
    value: function copyToImage() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _log.error('Framebuffer.copyToImage() is no logner supported, use copyToImage(framebuffer)')();

      return null;
    }
  }, {
    key: "copyToTexture",
    value: function copyToTexture() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _log.error('Framebuffer.copyToTexture({...}) is no logner supported, use copyToTexture(source, target, opts})')();

      return null;
    }
  }, {
    key: "blit",
    value: function blit() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _log.error('Framebuffer.blit({...}) is no logner supported, use blit(source, target, opts)')();

      return null;
    }
  }, {
    key: "invalidate",
    value: function invalidate(_ref7) {
      var _ref7$attachments = _ref7.attachments,
          attachments = _ref7$attachments === void 0 ? [] : _ref7$attachments,
          _ref7$x = _ref7.x,
          x = _ref7$x === void 0 ? 0 : _ref7$x,
          _ref7$y = _ref7.y,
          y = _ref7$y === void 0 ? 0 : _ref7$y,
          width = _ref7.width,
          height = _ref7.height;
      var gl = this.gl;
      assertWebGL2Context(gl);
      var prevHandle = gl.bindFramebuffer(36008, this.handle);
      var invalidateAll = x === 0 && y === 0 && width === undefined && height === undefined;

      if (invalidateAll) {
        gl.invalidateFramebuffer(36008, attachments);
      } else {
        gl.invalidateFramebuffer(36008, attachments, x, y, width, height);
      }

      gl.bindFramebuffer(36008, prevHandle);
      return this;
    }
  }, {
    key: "getAttachmentParameter",
    value: function getAttachmentParameter(attachment, pname, keys) {
      var value = this._getAttachmentParameterFallback(pname);

      if (value === null) {
        this.gl.bindFramebuffer(36160, this.handle);
        value = this.gl.getFramebufferAttachmentParameter(36160, attachment, pname);
        this.gl.bindFramebuffer(36160, null);
      }

      if (keys && value > 1000) {
        value = getKey(this.gl, value);
      }

      return value;
    }
  }, {
    key: "getAttachmentParameters",
    value: function getAttachmentParameters() {
      var attachment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 36064;
      var keys = arguments.length > 1 ? arguments[1] : undefined;
      var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.constructor.ATTACHMENT_PARAMETERS || [];
      var values = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parameters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pname = _step.value;
          var key = keys ? getKey(this.gl, pname) : pname;
          values[key] = this.getAttachmentParameter(attachment, pname, keys);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return values;
    }
  }, {
    key: "getParameters",
    value: function getParameters() {
      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var attachments = Object.keys(this.attachments);
      var parameters = {};

      for (var _i = 0, _attachments = attachments; _i < _attachments.length; _i++) {
        var attachmentName = _attachments[_i];
        var attachment = Number(attachmentName);
        var key = keys ? getKey(this.gl, attachment) : attachment;
        parameters[key] = this.getAttachmentParameters(attachment, keys);
      }

      return parameters;
    }
  }, {
    key: "show",
    value: function show() {
      if (typeof window !== 'undefined') {
        window.open(copyToDataUrl(this), 'luma-debug-texture');
      }

      return this;
    }
  }, {
    key: "log",
    value: function log() {
      var priority = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (priority > _log.priority || typeof window === 'undefined') {
        return this;
      }

      message = message || "Framebuffer ".concat(this.id);
      var image = copyToDataUrl(this, {
        maxHeight: 100
      });

      _log.image({
        priority: priority,
        message: message,
        image: image
      }, message)();

      return this;
    }
  }, {
    key: "bind",
    value: function bind() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref8$target = _ref8.target,
          target = _ref8$target === void 0 ? 36160 : _ref8$target;

      this.gl.bindFramebuffer(target, this.handle);
      return this;
    }
  }, {
    key: "unbind",
    value: function unbind() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref9$target = _ref9.target,
          target = _ref9$target === void 0 ? 36160 : _ref9$target;

      this.gl.bindFramebuffer(target, null);
      return this;
    }
  }, {
    key: "_createDefaultAttachments",
    value: function _createDefaultAttachments(color, depth, stencil, width, height) {
      var defaultAttachments = null;

      if (color) {
        var _parameters;

        defaultAttachments = defaultAttachments || {};
        defaultAttachments[36064] = new Texture2D(this.gl, {
          id: "".concat(this.id, "-color0"),
          pixels: null,
          format: 6408,
          type: 5121,
          width: width,
          height: height,
          mipmaps: false,
          parameters: (_parameters = {}, _defineProperty(_parameters, 10241, 9728), _defineProperty(_parameters, 10240, 9728), _defineProperty(_parameters, 10242, 33071), _defineProperty(_parameters, 10243, 33071), _parameters)
        });
      }

      if (depth && stencil) {
        defaultAttachments = defaultAttachments || {};
        defaultAttachments[33306] = new Renderbuffer(this.gl, {
          id: "".concat(this.id, "-depth-stencil"),
          format: 35056,
          width: width,
          height: 111
        });
      } else if (depth) {
        defaultAttachments = defaultAttachments || {};
        defaultAttachments[36096] = new Renderbuffer(this.gl, {
          id: "".concat(this.id, "-depth"),
          format: 33189,
          width: width,
          height: height
        });
      } else if (stencil) {
        assert(false);
      }

      return defaultAttachments;
    }
  }, {
    key: "_unattach",
    value: function _unattach(attachment) {
      var oldAttachment = this.attachments[attachment];

      if (!oldAttachment) {
        return;
      }

      if (oldAttachment instanceof Renderbuffer) {
        this.gl.framebufferRenderbuffer(36160, attachment, 36161, null);
      } else {
        this.gl.framebufferTexture2D(36160, attachment, 3553, null, 0);
      }

      delete this.attachments[attachment];
    }
  }, {
    key: "_attachRenderbuffer",
    value: function _attachRenderbuffer(_ref10) {
      var _ref10$attachment = _ref10.attachment,
          attachment = _ref10$attachment === void 0 ? 36064 : _ref10$attachment,
          renderbuffer = _ref10.renderbuffer;
      var gl = this.gl;
      gl.framebufferRenderbuffer(36160, attachment, 36161, renderbuffer.handle);
      this.attachments[attachment] = renderbuffer;
    }
  }, {
    key: "_attachTexture",
    value: function _attachTexture(_ref11) {
      var _ref11$attachment = _ref11.attachment,
          attachment = _ref11$attachment === void 0 ? 36064 : _ref11$attachment,
          texture = _ref11.texture,
          layer = _ref11.layer,
          level = _ref11.level;
      var gl = this.gl;
      gl.bindTexture(texture.target, texture.handle);

      switch (texture.target) {
        case 35866:
        case 32879:
          gl.framebufferTextureLayer(36160, attachment, texture.target, level, layer);
          break;

        case 34067:
          var face = mapIndexToCubeMapFace(layer);
          gl.framebufferTexture2D(36160, attachment, face, texture.handle, level);
          break;

        case 3553:
          gl.framebufferTexture2D(36160, attachment, 3553, texture.handle, level);
          break;

        default:
          assert(false, 'Illegal texture type');
      }

      gl.bindTexture(texture.target, null);
      this.attachments[attachment] = texture;
    }
  }, {
    key: "_setReadBuffer",
    value: function _setReadBuffer(gl, readBuffer) {
      if (isWebGL2(gl)) {
        gl.readBuffer(readBuffer);
      } else {
        assert(readBuffer === 36064 || readBuffer === 1029, ERR_MULTIPLE_RENDERTARGETS);
      }

      this.readBuffer = readBuffer;
    }
  }, {
    key: "_setDrawBuffers",
    value: function _setDrawBuffers(gl, drawBuffers) {
      if (isWebGL2(gl)) {
        gl.drawBuffers(drawBuffers);
      } else {
        var ext = gl.getExtension('WEBGL.draw_buffers');

        if (ext) {
          ext.drawBuffersWEBGL(drawBuffers);
        } else {
          assert(drawBuffers.length === 1 && (drawBuffers[0] === 36064 || drawBuffers[0] === 1029), ERR_MULTIPLE_RENDERTARGETS);
        }
      }

      this.drawBuffers = drawBuffers;
    }
  }, {
    key: "_getAttachmentParameterFallback",
    value: function _getAttachmentParameterFallback(pname) {
      var caps = getFeatures(this.gl);

      switch (pname) {
        case 36052:
          return !caps.webgl2 ? 0 : null;

        case 33298:
        case 33299:
        case 33300:
        case 33301:
        case 33302:
        case 33303:
          return !caps.webgl2 ? 8 : null;

        case 33297:
          return !caps.webgl2 ? 5125 : null;

        case 33296:
          return !caps.webgl2 && !caps.EXT_sRGB ? 9729 : null;

        default:
          return null;
      }
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createFramebuffer();
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteFramebuffer(this.handle);
    }
  }, {
    key: "_bindHandle",
    value: function _bindHandle(handle) {
      return this.gl.bindFramebuffer(36160, handle);
    }
  }, {
    key: "color",
    get: function get() {
      return this.attachments[36064] || null;
    }
  }, {
    key: "texture",
    get: function get() {
      return this.attachments[36064] || null;
    }
  }, {
    key: "depth",
    get: function get() {
      return this.attachments[36096] || this.attachments[33306] || null;
    }
  }, {
    key: "stencil",
    get: function get() {
      return this.attachments[36128] || this.attachments[33306] || null;
    }
  }]);

  return Framebuffer;
}(Resource);

export { Framebuffer as default };

function mapIndexToCubeMapFace(layer) {
  return layer < 34069 ? layer + 34069 : layer;
}

function _getFrameBufferStatus(status) {
  var STATUS = Framebuffer.STATUS || {};
  return STATUS[status] || "Framebuffer error ".concat(status);
}

export var FRAMEBUFFER_ATTACHMENT_PARAMETERS = [36049, 36048, 33296, 33298, 33299, 33300, 33301, 33302, 33303];
Framebuffer.ATTACHMENT_PARAMETERS = FRAMEBUFFER_ATTACHMENT_PARAMETERS;
//# sourceMappingURL=framebuffer.js.map