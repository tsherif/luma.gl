import GL from '../constants';
import Resource from './resource';
import {isWebGL2, assertWebGL2Context} from '../webgl-utils';
import {log} from '../utils';

export default class TranformFeedback extends Resource {

  static isSupported(gl) {
    return isWebGL2(gl);
  }

  static isHandle(handle) {
    return this.gl.isTransformFeedback(this.handle);
  }

  /**
   * @class
   * @param {WebGL2RenderingContext} gl - context
   * @param {Object} opts - options
   */
  constructor(gl, opts = {}) {
    assertWebGL2Context(gl);
    super(gl, opts);

    this.configuration = null;
    this.buffers = {};

    this.initialize(opts);
    Object.seal(this);
  }

  initialize(props) {
    const config = props.configuration || (props.program && props.program.getConfiguration());
    if (config) {
      this.configuration = config;
    }
    this.reset();
    this.setBuffers(props.buffers);
  }

  reset() {
    // Unbind any currently bound buffers
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.handle);
    for (const bufferIndex in this.buffers) {
      this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, Number(bufferIndex), null);
    }
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);

    this.unused = [];
    this.buffers = {};
    return this;
  }

  setBuffers(buffers = {}) {
    this.bind(() => {
      for (const bufferName in buffers) {
        this.setBuffer(bufferName, buffers[bufferName]);
      }
    });
    return this;
  }

  setBuffer(locationOrName, buffer) {
    // const index = Number.isFinite(Number(bufferName)) ?
    //   Number(bufferName) : varyingMap[bufferName];
    const location = this.getVaryingIndex(locationOrName, buffer);
    if (location < 0) {
      this.unused[locationOrName] = buffer;
      log.warn(() => `${this.id} unused varying buffer ${locationOrName}`)();
      return this;
    }
    this.buffers[location] = buffer;

    this.bind(() => {
      this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.handle);
      this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, location, buffer.handle);

      // if (size === undefined) {
      // } else {
      //   this.gl.bindBufferRange(GL.TRANSFORM_FEEDBACK_BUFFER,
      //     index, buffer.handle, offset, size);
      // }

      this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
    });

    return this;
  }

  begin(primitiveMode) {
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.handle);
    this.gl.beginTransformFeedback(primitiveMode);
    return this;
  }

  pause() {
    this.gl.pauseTransformFeedback();
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
    return this;
  }

  resume() {
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.handle);
    this.gl.resumeTransformFeedback();
    return this;
  }

  end() {
    this.gl.endTransformFeedback();
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
    return this;
  }

  bindBuffer({index, buffer, offset = 0, size}) {
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.handle);
    if (size === undefined) {
      this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, buffer.handle);
    } else {
      this.gl.bindBufferRange(GL.TRANSFORM_FEEDBACK_BUFFER, index, buffer.handle, offset, size);
    }
    return this;
  }

  unbindBuffer({index}) {
    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.handle);
    this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, null);
    return this;
  }

  bind(funcOrHandle = this.handle) {
    if (typeof funcOrHandle !== 'function') {
      this.bindTransformFeedback(funcOrHandle);
      return this;
    }

    let value;

    if (!this._bound) {
      this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.handle);
      this._bound = true;

      value = funcOrHandle();

      this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
      this._bound = false;
    } else {
      value = funcOrHandle();
    }

    return value;
  }

  // PRIVATE METHODS

  getVaryingInfo(locationOrName) {
    return this.configuration && this.configuration.getVaryingInfo(locationOrName);
  }

  getVaryingIndex(locationOrName) {
    if (this.configuration) {
      return this.configuration.getVaryingInfo(locationOrName).location;
    }
    const location = Number(locationOrName);
    if (Number.isFinite(location)) {
      return location;
    }
    return -1;
  }

  // RESOURCE METHODS

  _createHandle() {
    return this.gl.createTransformFeedback();
  }

  _deleteHandle() {
    this.gl.deleteTransformFeedback(this.handle);
  }

  // DEPRECATED

  bindBuffers(buffers = {}) {
    return this.setBuffers(buffers);
  }
}
