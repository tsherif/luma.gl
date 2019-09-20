"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _init = require("../init");

var _webglUtils = require("../webgl-utils");

var _utils = require("../utils");

var ERR_RESOURCE_METHOD_UNDEFINED = 'Resource subclass must define virtual methods';

var Resource = function () {
  function Resource(gl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, Resource);
    (0, _webglUtils.assertWebGLContext)(gl);
    var id = opts.id,
        _opts$userData = opts.userData,
        userData = _opts$userData === void 0 ? {} : _opts$userData;
    this.gl = gl;
    this.id = id || (0, _utils.uid)(this.constructor.name);
    this.userData = userData;
    this._bound = false;
    this._handle = opts.handle;

    if (this._handle === undefined) {
      this._handle = this._createHandle();
    }

    this.byteLength = 0;

    this._addStats();
  }

  (0, _createClass2["default"])(Resource, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.constructor.name, "(").concat(this.id, ")");
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$deleteChildren = _ref.deleteChildren,
          deleteChildren = _ref$deleteChildren === void 0 ? false : _ref$deleteChildren;

      var children = this._handle && this._deleteHandle(this._handle);

      this._handle = null;

      this._removeStats();

      if (children && deleteChildren) {
        children.filter(Boolean).forEach(function (child) {
          child["delete"]();
        });
      }

      return this;
    }
  }, {
    key: "bind",
    value: function bind() {
      var funcOrHandle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.handle;

      if (typeof funcOrHandle !== 'function') {
        this._bindHandle(funcOrHandle);

        return this;
      }

      var value;

      if (!this._bound) {
        this._bindHandle(this.handle);

        this._bound = true;
        value = funcOrHandle();
        this._bound = false;

        this._bindHandle(null);
      } else {
        value = funcOrHandle();
      }

      return value;
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.bind(null);
    }
  }, {
    key: "getParameter",
    value: function getParameter(pname) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      pname = (0, _webglUtils.getKeyValue)(this.gl, pname);
      (0, _utils.assert)(pname);
      var parameters = this.constructor.PARAMETERS || {};
      var parameter = parameters[pname];

      if (parameter) {
        var isWebgl2 = (0, _webglUtils.isWebGL2)(this.gl);
        var parameterAvailable = (!('webgl2' in parameter) || isWebgl2) && (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

        if (!parameterAvailable) {
          var webgl1Default = parameter.webgl1;
          var webgl2Default = 'webgl2' in parameter ? parameter.webgl2 : parameter.webgl1;
          var defaultValue = isWebgl2 ? webgl2Default : webgl1Default;
          return defaultValue;
        }
      }

      return this._getParameter(pname, opts);
    }
  }, {
    key: "getParameters",
    value: function getParameters() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref2 = {},
          parameters = _ref2.parameters,
          keys = _ref2.keys;
      var PARAMETERS = this.constructor.PARAMETERS || {};
      var isWebgl2 = (0, _webglUtils.isWebGL2)(this.gl);
      var values = {};
      var parameterKeys = parameters || Object.keys(PARAMETERS);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parameterKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pname = _step.value;
          var parameter = PARAMETERS[pname];
          var parameterAvailable = parameter && (!('webgl2' in parameter) || isWebgl2) && (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

          if (parameterAvailable) {
            var key = keys ? (0, _webglUtils.getKey)(this.gl, pname) : pname;
            values[key] = this.getParameter(pname, opts);

            if (keys && parameter.type === 'GLenum') {
              values[key] = (0, _webglUtils.getKey)(this.gl, values[key]);
            }
          }
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
    key: "setParameter",
    value: function setParameter(pname, value) {
      pname = (0, _webglUtils.getKeyValue)(this.gl, pname);
      (0, _utils.assert)(pname);
      var parameters = this.constructor.PARAMETERS || {};
      var parameter = parameters[pname];

      if (parameter) {
        var isWebgl2 = (0, _webglUtils.isWebGL2)(this.gl);
        var parameterAvailable = (!('webgl2' in parameter) || isWebgl2) && (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

        if (!parameterAvailable) {
          throw new Error('Parameter not available on this platform');
        }

        if (parameter.type === 'GLenum') {
          value = (0, _webglUtils.getKeyValue)(value);
        }
      }

      this._setParameter(pname, value);

      return this;
    }
  }, {
    key: "setParameters",
    value: function setParameters(parameters) {
      for (var pname in parameters) {
        this.setParameter(pname, parameters[pname]);
      }

      return this;
    }
  }, {
    key: "stubRemovedMethods",
    value: function stubRemovedMethods(className, version, methodNames) {
      return (0, _utils.stubRemovedMethods)(this, className, version, methodNames);
    }
  }, {
    key: "initialize",
    value: function initialize(opts) {}
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
    }
  }, {
    key: "_bindHandle",
    value: function _bindHandle() {
      throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
    }
  }, {
    key: "_getOptsFromHandle",
    value: function _getOptsFromHandle() {
      throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
    }
  }, {
    key: "_getParameter",
    value: function _getParameter(pname, opts) {
      throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
    }
  }, {
    key: "_setParameter",
    value: function _setParameter(pname, value) {
      throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
    }
  }, {
    key: "_context",
    value: function _context() {
      this.gl.luma = this.gl.luma || {};
      return this.gl.luma;
    }
  }, {
    key: "_addStats",
    value: function _addStats() {
      var name = this.constructor.name;

      var stats = _init.lumaStats.get('Resource Counts');

      stats.get('Resources Created').incrementCount();
      stats.get("".concat(name, "s Created")).incrementCount();
      stats.get("".concat(name, "s Active")).incrementCount();
    }
  }, {
    key: "_removeStats",
    value: function _removeStats() {
      var name = this.constructor.name;

      var stats = _init.lumaStats.get('Resource Counts');

      stats.get("".concat(name, "s Active")).decrementCount();
    }
  }, {
    key: "_trackAllocatedMemory",
    value: function _trackAllocatedMemory(bytes) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.name;

      var stats = _init.lumaStats.get('Memory Usage');

      stats.get('GPU Memory').addCount(bytes);
      stats.get("".concat(name, " Memory")).addCount(bytes);
      this.byteLength = bytes;
    }
  }, {
    key: "_trackDeallocatedMemory",
    value: function _trackDeallocatedMemory() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.constructor.name;

      var stats = _init.lumaStats.get('Memory Usage');

      stats.get('GPU Memory').subtractCount(this.byteLength);
      stats.get("".concat(name, " Memory")).subtractCount(this.byteLength);
      this.byteLength = 0;
    }
  }, {
    key: "handle",
    get: function get() {
      return this._handle;
    }
  }]);
  return Resource;
}();

exports["default"] = Resource;
//# sourceMappingURL=resource.js.map