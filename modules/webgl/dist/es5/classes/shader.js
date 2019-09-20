"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FragmentShader = exports.VertexShader = exports.Shader = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _glslUtils = require("../glsl-utils");

var _webglUtils = require("../webgl-utils");

var _utils = require("../utils");

var _resource = _interopRequireDefault(require("./resource"));

var ERR_SOURCE = 'Shader: GLSL source code must be a JavaScript string';

var Shader = function (_Resource) {
  (0, _inherits2["default"])(Shader, _Resource);
  (0, _createClass2["default"])(Shader, null, [{
    key: "getTypeName",
    value: function getTypeName(shaderType) {
      switch (shaderType) {
        case 35633:
          return 'vertex-shader';

        case 35632:
          return 'fragment-shader';

        default:
          (0, _utils.assert)(false);
          return 'unknown';
      }
    }
  }]);

  function Shader(gl, props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Shader);
    (0, _webglUtils.assertWebGLContext)(gl);
    (0, _utils.assert)(typeof props.source === 'string', ERR_SOURCE);
    var id = (0, _glslUtils.getShaderName)(props.source, null) || props.id || (0, _utils.uid)("unnamed ".concat(Shader.getTypeName(props.shaderType)));
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Shader).call(this, gl, {
      id: id
    }));
    _this.shaderType = props.shaderType;
    _this.source = props.source;

    _this.initialize(props);

    return _this;
  }

  (0, _createClass2["default"])(Shader, [{
    key: "initialize",
    value: function initialize(_ref) {
      var source = _ref.source;
      var shaderName = (0, _glslUtils.getShaderName)(source, null);

      if (shaderName) {
        this.id = (0, _utils.uid)(shaderName);
      }

      this._compile(source);
    }
  }, {
    key: "getParameter",
    value: function getParameter(pname) {
      return this.gl.getShaderParameter(this.handle, pname);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(Shader.getTypeName(this.shaderType), ":").concat(this.id);
    }
  }, {
    key: "getName",
    value: function getName() {
      return (0, _glslUtils.getShaderName)(this.source) || 'unnamed-shader';
    }
  }, {
    key: "getSource",
    value: function getSource() {
      return this.gl.getShaderSource(this.handle);
    }
  }, {
    key: "getTranslatedSource",
    value: function getTranslatedSource() {
      var extension = this.gl.getExtension('WEBGL.debug_shaders');
      return extension ? extension.getTranslatedShaderSource(this.handle) : 'No translated source available. WEBGL.debug_shaders not implemented';
    }
  }, {
    key: "_compile",
    value: function _compile() {
      this.gl.shaderSource(this.handle, this.source);
      this.gl.compileShader(this.handle);
      var compileStatus = this.getParameter(35713);

      if (!compileStatus) {
        var infoLog = this.gl.getShaderInfoLog(this.handle);

        var _parseGLSLCompilerErr = (0, _glslUtils.parseGLSLCompilerError)(infoLog, this.source, this.shaderType, this.id),
            shaderName = _parseGLSLCompilerErr.shaderName,
            errors = _parseGLSLCompilerErr.errors,
            warnings = _parseGLSLCompilerErr.warnings;

        _utils.log.error("GLSL compilation errors in ".concat(shaderName, "\n").concat(errors))();

        _utils.log.warn("GLSL compilation warnings in ".concat(shaderName, "\n").concat(warnings))();

        throw new Error("GLSL compilation errors in ".concat(shaderName));
      }
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteShader(this.handle);
    }
  }, {
    key: "_getOptsFromHandle",
    value: function _getOptsFromHandle() {
      return {
        type: this.getParameter(35663),
        source: this.getSource()
      };
    }
  }]);
  return Shader;
}(_resource["default"]);

exports.Shader = Shader;

var VertexShader = function (_Shader) {
  (0, _inherits2["default"])(VertexShader, _Shader);

  function VertexShader(gl, props) {
    (0, _classCallCheck2["default"])(this, VertexShader);

    if (typeof props === 'string') {
      props = {
        source: props
      };
    }

    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VertexShader).call(this, gl, Object.assign({}, props, {
      shaderType: 35633
    })));
  }

  (0, _createClass2["default"])(VertexShader, [{
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createShader(35633);
    }
  }]);
  return VertexShader;
}(Shader);

exports.VertexShader = VertexShader;

var FragmentShader = function (_Shader2) {
  (0, _inherits2["default"])(FragmentShader, _Shader2);

  function FragmentShader(gl, props) {
    (0, _classCallCheck2["default"])(this, FragmentShader);

    if (typeof props === 'string') {
      props = {
        source: props
      };
    }

    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FragmentShader).call(this, gl, Object.assign({}, props, {
      shaderType: 35632
    })));
  }

  (0, _createClass2["default"])(FragmentShader, [{
    key: "_createHandle",
    value: function _createHandle() {
      return this.gl.createShader(35632);
    }
  }]);
  return FragmentShader;
}(Shader);

exports.FragmentShader = FragmentShader;
//# sourceMappingURL=shader.js.map