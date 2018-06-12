import Resource from './resource';
import {isWebGL2, assertWebGL2Context} from '../webgl-utils';
import {log} from '../utils';

const GL_TRANSFORM_FEEDBACK_BUFFER = 0x8C8E;
const GL_TRANSFORM_FEEDBACK = 0x8E22;

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
    this.bindBuffers(props.buffers || {});
  }

  reset() {
    this._unbindBuffers();
    this.unused = [];
    this.buffers = {};
  }

  setBuffers(buffers = {}) {
    for (const bufferName in buffers) {
      this.setBuffer(bufferName, buffers[bufferName]);
    }
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

    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, this.handle);
    this.gl.bindBufferBase(GL_TRANSFORM_FEEDBACK_BUFFER, location, buffer.handle);
    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, null);

    // if (size === undefined) {
    // } else {
    //   this.gl.bindBufferRange(GL_TRANSFORM_FEEDBACK_BUFFER, index, buffer.handle, offset, size);
    // }

    return this;
  }

  begin(primitiveMode) {
    // this._bindBuffers();
    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, this.handle);
    this.gl.beginTransformFeedback(primitiveMode);
    return this;
  }

  pause() {
    this.gl.pauseTransformFeedback();
    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, null);
    // this._unbindBuffers();
    return this;
  }

  resume() {
    // this._bindBuffers();
    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, this.handle);
    this.gl.resumeTransformFeedback();
    return this;
  }

  end() {
    this.gl.endTransformFeedback();
    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, null);
    this._unbindBuffers();
    return this;
  }

  bindBuffer({index, buffer, offset = 0, size}) {
    // Need to avoid chrome bug where buffer that is already bound to a different target
    // cannot be bound to 'TRANSFORM_FEEDBACK_BUFFER' target.
    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, this.handle);
    if (size === undefined) {
      this.gl.bindBufferBase(GL_TRANSFORM_FEEDBACK_BUFFER, index, buffer.handle);
    } else {
      this.gl.bindBufferRange(GL_TRANSFORM_FEEDBACK_BUFFER, index, buffer.handle, offset, size);
    }
    return this;
  }

  unbindBuffer({index}) {
    this.gl.bindTransformFeedback(GL_TRANSFORM_FEEDBACK, this.handle);
    this.gl.bindBufferBase(GL_TRANSFORM_FEEDBACK_BUFFER, index, null);
    return this;
  }

  bind(funcOrHandle = this.handle) {
    if (typeof funcOrHandle !== 'function') {
      this.bindTransformFeedback(funcOrHandle);
      return this;
    }

    let value;

    if (!this._bound) {
      this.gl.bindTransformFeedback(this.handle);
      this._bound = true;

      value = funcOrHandle();

      this.gl.bindTransformFeedback(null);
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

  // See https://github.com/KhronosGroup/WebGL/issues/2346
  // If it was true that having a buffer on an unused TF was a problem
  // it would make the entire concept of transform feedback objects pointless.
  // The whole point of them is like VertexArrayObjects.
  // You set them up with all in outputs at init time and
  // then in one call you can setup all the outputs just before drawing.
  // Since the point of transform feedback is to generate data that will
  // then be used as inputs to attributes it makes zero sense you'd
  // have to unbind them from every unused transform feedback object
  // before you could use them in an attribute. If that was the case
  // there would be no reason to setup transform feedback objects ever.
  // You'd always use the default because you'd always have to bind and
  // unbind all the buffers.
  _bindBuffers() {
    for (const bufferIndex in this.buffers) {
      this.bindBuffer({buffer: this.buffers[bufferIndex], index: Number(bufferIndex)});
    }
  }

  _unbindBuffers() {
    for (const bufferIndex in this.buffers) {
      this.unbindBuffer({buffer: this.buffers[bufferIndex], index: Number(bufferIndex)});
    }
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
