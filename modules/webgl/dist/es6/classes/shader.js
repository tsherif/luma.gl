import { parseGLSLCompilerError, getShaderName } from '../glsl-utils';
import { assertWebGLContext } from '../webgl-utils';
import { uid, log, assert } from '../utils';
import Resource from './resource';
const ERR_SOURCE = 'Shader: GLSL source code must be a JavaScript string';
export class Shader extends Resource {
  static getTypeName(shaderType) {
    switch (shaderType) {
      case 35633:
        return 'vertex-shader';

      case 35632:
        return 'fragment-shader';

      default:
        assert(false);
        return 'unknown';
    }
  }

  constructor(gl, props) {
    assertWebGLContext(gl);
    assert(typeof props.source === 'string', ERR_SOURCE);
    const id = getShaderName(props.source, null) || props.id || uid("unnamed ".concat(Shader.getTypeName(props.shaderType)));
    super(gl, {
      id
    });
    this.shaderType = props.shaderType;
    this.source = props.source;
    this.initialize(props);
  }

  initialize(_ref) {
    let source = _ref.source;
    const shaderName = getShaderName(source, null);

    if (shaderName) {
      this.id = uid(shaderName);
    }

    this._compile(source);
  }

  getParameter(pname) {
    return this.gl.getShaderParameter(this.handle, pname);
  }

  toString() {
    return "".concat(Shader.getTypeName(this.shaderType), ":").concat(this.id);
  }

  getName() {
    return getShaderName(this.source) || 'unnamed-shader';
  }

  getSource() {
    return this.gl.getShaderSource(this.handle);
  }

  getTranslatedSource() {
    const extension = this.gl.getExtension('WEBGL.debug_shaders');
    return extension ? extension.getTranslatedShaderSource(this.handle) : 'No translated source available. WEBGL.debug_shaders not implemented';
  }

  _compile() {
    this.gl.shaderSource(this.handle, this.source);
    this.gl.compileShader(this.handle);
    const compileStatus = this.getParameter(35713);

    if (!compileStatus) {
      const infoLog = this.gl.getShaderInfoLog(this.handle);

      const _parseGLSLCompilerErr = parseGLSLCompilerError(infoLog, this.source, this.shaderType, this.id),
            shaderName = _parseGLSLCompilerErr.shaderName,
            errors = _parseGLSLCompilerErr.errors,
            warnings = _parseGLSLCompilerErr.warnings;

      log.error("GLSL compilation errors in ".concat(shaderName, "\n").concat(errors))();
      log.warn("GLSL compilation warnings in ".concat(shaderName, "\n").concat(warnings))();
      throw new Error("GLSL compilation errors in ".concat(shaderName));
    }
  }

  _deleteHandle() {
    this.gl.deleteShader(this.handle);
  }

  _getOptsFromHandle() {
    return {
      type: this.getParameter(35663),
      source: this.getSource()
    };
  }

}
export class VertexShader extends Shader {
  constructor(gl, props) {
    if (typeof props === 'string') {
      props = {
        source: props
      };
    }

    super(gl, Object.assign({}, props, {
      shaderType: 35633
    }));
  }

  _createHandle() {
    return this.gl.createShader(35633);
  }

}
export class FragmentShader extends Shader {
  constructor(gl, props) {
    if (typeof props === 'string') {
      props = {
        source: props
      };
    }

    super(gl, Object.assign({}, props, {
      shaderType: 35632
    }));
  }

  _createHandle() {
    return this.gl.createShader(35632);
  }

}
//# sourceMappingURL=shader.js.map