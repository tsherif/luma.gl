import { lumaStats } from '../init';
import { assertWebGLContext, isWebGL2, getKey, getKeyValue } from '../webgl-utils';
import { uid, assert, stubRemovedMethods } from '../utils';
const ERR_RESOURCE_METHOD_UNDEFINED = 'Resource subclass must define virtual methods';
export default class Resource {
  constructor(gl) {
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    assertWebGLContext(gl);
    const id = opts.id,
          _opts$userData = opts.userData,
          userData = _opts$userData === void 0 ? {} : _opts$userData;
    this.gl = gl;
    this.id = id || uid(this.constructor.name);
    this.userData = userData;
    this._bound = false;
    this._handle = opts.handle;

    if (this._handle === undefined) {
      this._handle = this._createHandle();
    }

    this.byteLength = 0;

    this._addStats();
  }

  toString() {
    return "".concat(this.constructor.name, "(").concat(this.id, ")");
  }

  get handle() {
    return this._handle;
  }

  delete() {
    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$deleteChildren = _ref.deleteChildren,
        deleteChildren = _ref$deleteChildren === void 0 ? false : _ref$deleteChildren;

    const children = this._handle && this._deleteHandle(this._handle);

    this._handle = null;

    this._removeStats();

    if (children && deleteChildren) {
      children.filter(Boolean).forEach(child => {
        child.delete();
      });
    }

    return this;
  }

  bind() {
    let funcOrHandle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.handle;

    if (typeof funcOrHandle !== 'function') {
      this._bindHandle(funcOrHandle);

      return this;
    }

    let value;

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

  unbind() {
    this.bind(null);
  }

  getParameter(pname) {
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    pname = getKeyValue(this.gl, pname);
    assert(pname);
    const parameters = this.constructor.PARAMETERS || {};
    const parameter = parameters[pname];

    if (parameter) {
      const isWebgl2 = isWebGL2(this.gl);
      const parameterAvailable = (!('webgl2' in parameter) || isWebgl2) && (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

      if (!parameterAvailable) {
        const webgl1Default = parameter.webgl1;
        const webgl2Default = 'webgl2' in parameter ? parameter.webgl2 : parameter.webgl1;
        const defaultValue = isWebgl2 ? webgl2Default : webgl1Default;
        return defaultValue;
      }
    }

    return this._getParameter(pname, opts);
  }

  getParameters() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const _ref2 = {},
          parameters = _ref2.parameters,
          keys = _ref2.keys;
    const PARAMETERS = this.constructor.PARAMETERS || {};
    const isWebgl2 = isWebGL2(this.gl);
    const values = {};
    const parameterKeys = parameters || Object.keys(PARAMETERS);

    for (const pname of parameterKeys) {
      const parameter = PARAMETERS[pname];
      const parameterAvailable = parameter && (!('webgl2' in parameter) || isWebgl2) && (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

      if (parameterAvailable) {
        const key = keys ? getKey(this.gl, pname) : pname;
        values[key] = this.getParameter(pname, opts);

        if (keys && parameter.type === 'GLenum') {
          values[key] = getKey(this.gl, values[key]);
        }
      }
    }

    return values;
  }

  setParameter(pname, value) {
    pname = getKeyValue(this.gl, pname);
    assert(pname);
    const parameters = this.constructor.PARAMETERS || {};
    const parameter = parameters[pname];

    if (parameter) {
      const isWebgl2 = isWebGL2(this.gl);
      const parameterAvailable = (!('webgl2' in parameter) || isWebgl2) && (!('extension' in parameter) || this.gl.getExtension(parameter.extension));

      if (!parameterAvailable) {
        throw new Error('Parameter not available on this platform');
      }

      if (parameter.type === 'GLenum') {
        value = getKeyValue(value);
      }
    }

    this._setParameter(pname, value);

    return this;
  }

  setParameters(parameters) {
    for (const pname in parameters) {
      this.setParameter(pname, parameters[pname]);
    }

    return this;
  }

  stubRemovedMethods(className, version, methodNames) {
    return stubRemovedMethods(this, className, version, methodNames);
  }

  initialize(opts) {}

  _createHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _deleteHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _bindHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _getOptsFromHandle() {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _getParameter(pname, opts) {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _setParameter(pname, value) {
    throw new Error(ERR_RESOURCE_METHOD_UNDEFINED);
  }

  _context() {
    this.gl.luma = this.gl.luma || {};
    return this.gl.luma;
  }

  _addStats() {
    const name = this.constructor.name;
    const stats = lumaStats.get('Resource Counts');
    stats.get('Resources Created').incrementCount();
    stats.get("".concat(name, "s Created")).incrementCount();
    stats.get("".concat(name, "s Active")).incrementCount();
  }

  _removeStats() {
    const name = this.constructor.name;
    const stats = lumaStats.get('Resource Counts');
    stats.get("".concat(name, "s Active")).decrementCount();
  }

  _trackAllocatedMemory(bytes) {
    let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.name;
    const stats = lumaStats.get('Memory Usage');
    stats.get('GPU Memory').addCount(bytes);
    stats.get("".concat(name, " Memory")).addCount(bytes);
    this.byteLength = bytes;
  }

  _trackDeallocatedMemory() {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.constructor.name;
    const stats = lumaStats.get('Memory Usage');
    stats.get('GPU Memory').subtractCount(this.byteLength);
    stats.get("".concat(name, " Memory")).subtractCount(this.byteLength);
    this.byteLength = 0;
  }

}
//# sourceMappingURL=resource.js.map