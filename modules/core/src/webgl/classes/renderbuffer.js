/* eslint-disable no-inline-comments */
import GL from '@luma.gl/constants';
import Resource from './resource';
import RENDERBUFFER_FORMATS from './renderbuffer-formats';
import {isWebGL2} from '../utils';
import {assert} from '../../utils';
import statsManager from '../../core/stats-manager';

function isFormatSupported(gl, format, formats) {
  const info = formats[format];
  if (!info) {
    return false;
  }
  const value = isWebGL2(gl) ? info.gl2 || info.gl1 : info.gl1;
  if (typeof value === 'string') {
    return gl.getExtension(value);
  }
  return value;
}

export default class Renderbuffer extends Resource {
  static isSupported(gl, {format} = {}) {
    return !format || isFormatSupported(gl, format, RENDERBUFFER_FORMATS);
  }

  static getSamplesForFormat(gl, {format}) {
    // Polyfilled to return [0] under WebGL1
    return gl.getInternalformatParameter(GL.RENDERBUFFER, format, GL.SAMPLES);
  }

  constructor(gl, opts = {}) {
    super(gl, opts);
    this.gpuMemoryStats = statsManager.get('Memory Usage').get('GPU Memory');
    this.renderbufferMemoryStats = statsManager.get('Memory Usage').get('Renderbuffer Memory');
    this.byteLength = 0;

    this.initialize(opts);

    Object.seal(this);
  }

  // Creates and initializes a renderbuffer object's data store
  initialize({format, width = 1, height = 1, samples = 0}) {
    assert(format, 'Needs format');

    this.gpuMemoryStats.subtractCount(this.byteLength);
    this.renderbufferMemoryStats.subtractCount(this.byteLength);

    this.gl.bindRenderbuffer(GL.RENDERBUFFER, this.handle);

    if (samples !== 0 && isWebGL2(this.gl)) {
      this.gl.renderbufferStorageMultisample(GL.RENDERBUFFER, samples, format, width, height);
    } else {
      this.gl.renderbufferStorage(GL.RENDERBUFFER, format, width, height);
    }

    // this.gl.bindRenderbuffer(GL.RENDERBUFFER, null);

    this.format = format;
    this.width = width;
    this.height = height;
    this.samples = samples;

    this.byteLength = width * height * (samples || 1) * this._getFormatSize();

    this.gpuMemoryStats.addCount(this.byteLength);
    this.renderbufferMemoryStats.addCount(this.byteLength);

    return this;
  }

  resize({width, height}) {
    // Don't resize if width/height haven't changed
    if (width !== this.width || height !== this.height) {
      return this.initialize({width, height, format: this.format, samples: this.samples});
    }
    return this;
  }

  // PRIVATE METHODS
  _createHandle() {
    return this.gl.createRenderbuffer();
  }

  _deleteHandle() {
    this.gl.deleteRenderbuffer(this.handle);
    this.gpuMemoryStats.subtractCount(this.byteLength);
    this.renderbufferMemoryStats.subtractCount(this.byteLength);
    this.byteLength = 0;
  }

  _bindHandle(handle) {
    this.gl.bindRenderbuffer(GL.RENDERBUFFER, handle);
  }

  _syncHandle(handle) {
    this.format = this.getParameter(GL.RENDERBUFFER_INTERNAL_FORMAT);
    this.width = this.getParameter(GL.RENDERBUFFER_WIDTH);
    this.height = this.getParameter(GL.RENDERBUFFER_HEIGHT);
    this.samples = this.getParameter(GL.RENDERBUFFER_SAMPLES);
  }

  // @param {Boolean} opt.autobind=true - method call will bind/unbind object
  // @returns {GLenum|GLint} - depends on pname
  _getParameter(pname) {
    this.gl.bindRenderbuffer(GL.RENDERBUFFER, this.handle);
    const value = this.gl.getRenderbufferParameter(GL.RENDERBUFFER, pname);
    // this.gl.bindRenderbuffer(GL.RENDERBUFFER, null);
    return value;
  }

  /* eslint-disable complexity */
  _getFormatSize() {
    // TODO(Tarek): Cover all formats?
    let size;
    switch (this.format) {
      case GL.RGBA32F:
        size = 16;
        break;
      case GL.RG32F:
        size = 8;
        break;
      case GL.DEPTH_COMPONENT32F:
      case GL.RGBA8:
      case GL.R32F:
        size = 4;
        break;
      case GL.DEPTH_COMPONENT24:
      case GL.RGB8:
        size = 3;
        break;
      case GL.RGBA4:
      case GL.RGB565:
      case GL.RGB5_A1:
      case GL.DEPTH_COMPONENT16:
        size = 2;
        break;
      default:
        size = 1;
        break;
    }

    return size;
  }
}
