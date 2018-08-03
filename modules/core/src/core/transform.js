import GL from '../constants';
import Model from './model';
import Buffer from '../webgl/buffer';
import Texture2D from '../webgl/texture-2d';
import Framebuffer from '../webgl/framebuffer';
import TransformFeedback from '../webgl/transform-feedback';
import {isWebGL2, assertWebGL2Context, getShaderVersion} from '../webgl-utils';
import {getGLTypeFromTypedArray, getTypedArrayFromGLType} from '../webgl-utils/typed-array-utils';
import {FEATURES, hasFeatures, hasFeature} from '../webgl-context/context-features';
import {_transform as transform} from '../shadertools/src'
import assert from '../utils/assert';
import {log} from '../utils';

// HACK
// Able to run using WebGL2 and setup textures
// function isWebGL2(gl) {
//   return false;
// }

const FS100 = 'void main() {}';
const FS100_WEBGL1 = `\
precision highp float;
varying float outValue; //_TODO: define outValue based on user varying name
void main(void) {
  gl_FragColor = vec4(outValue, 0.1, 0.2, 1.0);
}
`;
const USE_FLOAT_TEXTURE = false;

const FS300 = `#version 300 es\n${FS100}`;
const REGEX_START_OF_MAIN = /main\s*\([^\)]*\)\s*\{\n?/; // Beginning of main

export default class Transform {

  static isSupported(gl) {
    // For now WebGL2 only
    // return isWebGL2(gl);
    console.log(`WebGL2 : ${isWebGL2(gl)}`);
    console.log(`TEXTURE_FLOAT: ${hasFeature(gl, FEATURES.TEXTURE_FLOAT)}`);
    console.log(`COLOR_ATTACHMENT_RGBA32F: ${hasFeature(gl, FEATURES.COLOR_ATTACHMENT_RGBA32F)}`);
    return isWebGL2(gl) || hasFeatures(
      gl, [FEATURES.TEXTURE_FLOAT, FEATURES.COLOR_ATTACHMENT_RGBA32F]
    );
    // return true;
  }

  constructor(gl, opts = {}) {
    // assertWebGL2Context(gl);

    this.gl = gl;
    this.model = null;
    this.currentIndex = 0;
    this.sourceBuffers = new Array(2);
    this.feedbackBuffers = new Array(2);
    this.transformFeedbacks = new Array(2);

    // For WebGL1

    // Under WebGL1 there can only be one varying (one output)
    // if we have s1, s2, s3 source textures, d1 destination textures then
    // we create 4 textures s1Tex, s2Tex, s3Tex and d1Tex
    // and feedbackMap is  s1 : d1
    // textures[0] = [{s1: s1Tex, s2: s2Tex, s3: s3Tex, d1: d1Tex}]
    // textures[1] = [{s1: d1Tex, s2: s2Tex, s3: s3Tex, d1: s1Tex}]
    // framebuffers[0] = framebuffer(colorattachment: d1Tex);
    // framebuffers[1] = framebuffer(colorattachment: s1Tex);
    // each object is a map of attribute name to Texture2D object
    this.srcTextures = [{}, {}];
    // Array of two Texture2D objects corresponding to destination Texture2D object.
    this.destTextures = new Array(2);
    // Array of two FrameBuffer objects
    this.framebuffers = new Array(2);

    this._buffersCreated = {};

    this._initialize(opts);
    Object.seal(this);
  }

  // Delete owned resources.
  delete() {
    for (const name in this._buffersCreated) {
      this._buffersCreated[name].delete();
    }
    this.model.delete();
  }

  // get elementCount() {
  //   return this.model.getVertexCount();
  // }
  //
  // Return Buffer object for given varying name.
  getBuffer(varyingName = null) {
    assert(varyingName && this.feedbackBuffers[this.currentIndex][varyingName]);
    return this.feedbackBuffers[this.currentIndex][varyingName];
  }

  getData(varyingName = null) {
    if (isWebGL2(this.gl)) {
      assert(varyingName && this.feedbackBuffers[this.currentIndex][varyingName]);
      return this.feedbackBuffers[this.currentIndex][varyingName].getData();
    }
    const type = USE_FLOAT_TEXTURE ? GL.FLOAT : GL.UNSIGNED_BYTE;
    const out = this.framebuffers[this.currentIndex].readPixels({type});
    // Just return R component.
    return out.reduce((result, element, index) => {
      if (index % 4 === 0) {
        result.push(element);
      }
      return result;
    }, []).slice(0, this.elementCount);
  }
  // Run one transform feedback loop.
  /* eslint-disable camelcase */
  run({uniforms = {}, unbindModels = []} = {}) {
    if (isWebGL2(this.gl)) {
      this.model.setAttributes(this.sourceBuffers[this.currentIndex]);
      this.model.transform({
        transformFeedback: this.transformFeedbacks[this.currentIndex],
        parameters: {[GL.RASTERIZER_DISCARD]: true},
        uniforms,
        unbindModels
      });
    } else {
      const framebuffer = this.framebuffers[this.currentIndex];
      const windowSize = [framebuffer.width, framebuffer.height];
      this.model.setAttributes({
        transform_instanceID: this.instanceIDBuffer
      });
      const samplerUniforms = this._getSamplerUniforms();
      const updatedUniforms = Object.assign({}, uniforms, samplerUniforms, {windowSize});
      this.gl.viewport(0, 0, framebuffer.width, framebuffer.height);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);

      this.model.draw({
        framebuffer,
        uniforms: updatedUniforms
      });
    }
  }
  /* eslint-enable camelcase */

  _getSamplerUniforms() {
    const uniforms = {};
    // uniform for 'name is 'transform_uSampler_name : Texture2D'
    for (const name in this.srcTextures[this.currentIndex]) {
      const uniformName = `transform_uSampler_${name}`;
      uniforms[uniformName] = this.srcTextures[this.currentIndex][name];
    }
    return uniforms;
  }

  // Swap source and destination buffers.
  swapBuffers() {
    assert(this.feedbackMap);
    this.currentIndex = (this.currentIndex + 1) % 2;
  }

  // Update some or all buffer bindings.
  update({sourceBuffers = null, feedbackBuffers = null, elementCount = this.elementCount}) {
    if (!sourceBuffers && !feedbackBuffers) {
      log.warn('Transform : no buffers updated')();
      return this;
    }

    if (this.elementCount !== elementCount) {
      this._updateElementCount(elementCount);
    }

    for (const bufferName in feedbackBuffers) {
      assert(feedbackBuffers[bufferName] instanceof Buffer);
    }

    const {currentIndex} = this;
    Object.assign(this.sourceBuffers[currentIndex], sourceBuffers);
    Object.assign(this.feedbackBuffers[currentIndex], feedbackBuffers);
    this._createFeedbackBuffers({feedbackBuffers});
    this.transformFeedbacks[currentIndex].setBuffers(this.feedbackBuffers[currentIndex]);

    // Buffers have changed, need to re-setup swap buffers.
    this._setupSwapBuffers();
    return this;
  }

  _updateElementCount(elementCount) {
    this.elementCount = elementCount;
    this.size = Math.ceil(Math.sqrt(elementCount));
    this._createInstanceIDBuffer(elementCount);
  }

  // Private

  /* eslint-disable complexity */
  _initialize(opts = {}) {
    let {feedbackBuffers, feedbackMap} = opts;
    const {destinationBuffers, sourceDestinationMap} = opts;
    if (destinationBuffers) {
      log.deprecated('destinationBuffers', 'feedbackBuffers')();
      feedbackBuffers = feedbackBuffers || destinationBuffers;
    }
    if (sourceDestinationMap) {
      log.deprecated('sourceDestinationMap', 'feedbackMap')();
      feedbackMap = feedbackMap || sourceDestinationMap;
    }

    const {sourceBuffers, vs, elementCount} = opts;
    assert(sourceBuffers && vs && elementCount >= 0);
    // If feedbackBuffers are not provided, sourceDestinationMap must be provided
    // to create destinaitonBuffers with layout of corresponding source buffer.
    assert(feedbackBuffers || feedbackMap, ' Transform needs feedbackBuffers or feedbackMap');
    for (const bufferName in feedbackBuffers || {}) {
      assert(feedbackBuffers[bufferName] instanceof Buffer);
    }

    const {varyings} = opts;
    // If varyings are not provided feedbackMap must be provided to deduce varyings
    assert(Array.isArray(varyings) || feedbackMap);
    let varyingsArray = varyings;
    if (!Array.isArray(varyings)) {
      varyingsArray = Object.values(feedbackMap);
    }
    this.varyingsArray = varyingsArray;

    this.feedbackMap = feedbackMap;

    this.elementCount = elementCount;
    this.size = Math.ceil(Math.sqrt(elementCount));
    console.log(`Tranfsorm setup, elementCount: ${elementCount} textureSize: ${this.size}`);

    this._setupSourceDestinations({sourceBuffers, feedbackBuffers, feedbackMap});
    this._setupSwapResources();
    this._buildModel(Object.assign({}, opts, {
      id: opts.id || 'transform-model',
      drawMode: opts.drawMode || GL.POINTS,
      varyings: varyingsArray
    }));

    this.data = {};
  }
  /* eslint-enable complexity */

  _setupSourceDestinations({sourceBuffers = null, feedbackBuffers = null, feedbackMap = null}) {
    if (isWebGL2(this.gl)) {
      this._setupBuffers({sourceBuffers, feedbackBuffers});
      return;
    }

    // WebGL1
    this._setupTextures({sourceBuffers, feedbackBuffers, feedbackMap});
  }

  _setupSwapResources() {
    if (!this.feedbackMap) {
      // feedbackMap required set up swap buffers.
      return;
    }
    if (isWebGL2(this.gl)) {
      this._setupSwapBuffers();
      return;
    }

    this._setupSwapTextures();

  }

  // setup source and destination buffers
  _setupBuffers({sourceBuffers = null, feedbackBuffers = null}) {
    this.sourceBuffers[0] = Object.assign({}, sourceBuffers);
    this.feedbackBuffers[0] = Object.assign({}, feedbackBuffers);
    this._createFeedbackBuffers({feedbackBuffers});
    this.sourceBuffers[1] = {};
    this.feedbackBuffers[1] = {};
  }

  _setupTextures({sourceBuffers = null, feedbackBuffers = null, feedbackMap = null}) {

    for (const sourceName in sourceBuffers) {
      // assert type data is a typed array
      ArrayBuffer.isView(sourceBuffers.sourceName);
      this.srcTextures[0][sourceName] = this._createTexture({array: sourceBuffers[sourceName]});
    }

    // Only one output texture/buffer is supported under WebGL1
    assert(
      isWebGL2(this.gl) ||
      (feedbackBuffers ? Object.keys(feedbackBuffers).length === 1 : true)
    );
    for (const destName in feedbackBuffers) {
      // assert type data is a typed array
      ArrayBuffer.isView(sourceBuffers.sourceName);
      assert(this.varyingsArray[0] === destName);
      this.destTextures[0] = this._createTexture({array: feedbackBuffers[destName]});
    }

    // auto create destination texture from corresponding source
    this._autoCreateDestTexture();
  }

  // auto create any feedback buffers
  _createFeedbackBuffers({feedbackBuffers}) {
    if (!this.feedbackMap) {
      // feedbackMap required to auto create buffers.
      return;
    }
    const current = this.currentIndex;
    for (const sourceBufferName in this.feedbackMap) {
      const feedbackBufferName = this.feedbackMap[sourceBufferName];
      if (!feedbackBuffers || !feedbackBuffers[feedbackBufferName]) {
        // Create new buffer with same layout and settings as source buffer
        const sourceBuffer = this.sourceBuffers[current][sourceBufferName];
        const {bytes, type, usage, accessor} = sourceBuffer;
        const buffer = new Buffer(this.gl, {bytes, type, usage, accessor});

        if (this._buffersCreated[feedbackBufferName]) {
          this._buffersCreated[feedbackBufferName].delete();
          this._buffersCreated[feedbackBufferName] = buffer;
        }
        this.feedbackBuffers[current][feedbackBufferName] = buffer;
      }
    }
  }

  // auto create destination texture
  _autoCreateDestTexture() {
    if (!this.feedbackMap) {
      // feedbackMap required to auto create texture.
      return;
    }
    // Only one output texture/buffer is supported under WebGL1
    assert(isWebGL2(this.gl) || Object.keys(this.feedbackMap).length === 1);
    const srcName = Object.keys(this.feedbackMap)[0];
    const sourceTexture = this.srcTextures[0][srcName];
    const destName = this.feedbackMap[srcName];
    assert(this.varyingsArray[0] === destName);
    this.destTextures[0] = this._createTexture({refTexture: sourceTexture});
  }

  // setup buffers for swapping.
  // Second set of source and feedback objects are setup to point
  // to corresponding feedback and source buffers.
  _setupSwapBuffers() {
    assert(this.feedbackMap);
    const current = this.currentIndex;
    const next = (current + 1) % 2;

    for (const sourceBufferName in this.feedbackMap) {
      const feedbackBufferName = this.feedbackMap[sourceBufferName];

      this.sourceBuffers[next][sourceBufferName] =
        this.feedbackBuffers[current][feedbackBufferName];
      this.feedbackBuffers[next][feedbackBufferName] =
        this.sourceBuffers[current][sourceBufferName];

      // make sure the new destination buffer is a Buffer object
      assert(this.feedbackBuffers[next][feedbackBufferName] instanceof Buffer);
    }

    // When triggered by `update()` TranformFeedback objects are already set up,
    // if so update buffers
    if (this.transformFeedbacks[next]) {
      this.transformFeedbacks[next].setBuffers(this.feedbackBuffers[next]);
    }
  }

  _setupSwapTextures() {
    const current = this.currentIndex;
    const next = (current + 1) % 2;
    Object.assign(this.srcTextures[next], this.srcTextures[current]);

    // swap source destination textures
    const srcName = Object.keys(this.feedbackMap)[0];
    const destName = this.feedbackMap[srcName];
    assert(this.varyingsArray[0] === destName);
    // next source is current destination
    this.srcTextures[next][srcName] = this.destTextures[current];
    // next destination is current source
    this.destTextures[next] = this.srcTextures[current][srcName];

    //_TODO: update framebuffers?
  }

  // build Model and TransformFeedback objects
  _buildModel(opts = {}) {
    const elementCount = opts.elementCount;
    let vs = opts.vs;
    // use a minimal fragment shader with matching version of vertex shader.
    let fs = null;
    let varyings = null;
    let modules = opts.modules;
    const shaderVersion = getShaderVersion(vs);

    if (isWebGL2(this.gl)) {
      fs = shaderVersion === 300 ? FS300 : FS100;
      varyings = opts.varyings;
    } else {
      assert(shaderVersion === 100); // TODO use transpiler always, 300 -> 100 or 100 -> 100
      vs = this._updateAttributes(vs);
      fs = FS100_WEBGL1;
      varyings = null;
      modules = modules ? modules.push(transform) : [transform];
    }

    this.model = new Model(this.gl, Object.assign({}, opts, {
      vs,
      fs,
      modules,
      varyings,
      vertexCount: elementCount
    }));

    if (isWebGL2(this.gl)) {
      this._setupTransformFeedback();
    } else {
      this._setupFramebuffers();
      this._createInstanceIDBuffer(elementCount);
    }

  }

  // remove 'attribute' definitions and add sample instructions for inputs
  _updateAttributes(vs) {
    // Detect and remove all attribute def. corresponding to all input textures.
    const vsLines = vs.split('\n');
    const updateVsLines = vsLines.slice();
    const attributeNames = Object.keys(this.srcTextures[this.currentIndex]);
    const attributeDefs = attributeNames.map(name => `${name};`);
    vsLines.forEach((line, index, lines) => {
      // let newLine = line;
      // if (this._isAttributeDefinition(line, attributeNames)) {
      //     newLine = `// ${line} // Removed by Transform`;
      //     removedAttributes++;
      // }
      // updateVsLines[updateIndex++] = newLine;
      updateVsLines[index] = this._replaceAttributeWithSampler(line, attributeDefs);
    });
    // if (removedAttributes === attributeNames.length) {
    //   log.warn('Transform: Not all attributes found in VS');
    // }
    let updatedVs = updateVsLines.join('\n');
    const sampleInstructions = this._getSampleInstructions(attributeNames);
    updatedVs = updatedVs.replace(REGEX_START_OF_MAIN, match => match + sampleInstructions);
    return updatedVs;
  }

  _isAttributeDefinition(line, names) {
    const words = line.replace(/^\s+/, '').split(/\s+/); // .split(/\b(\s)/);
    if (words[0] !== 'attribute') {
      return false;
    }
    if (names.includes(words[2])) {
      // Under WebGL1 only single float attribute are supported.
      assert(words[1] === 'float');
      return true;
    }
    return false;
  }

  _replaceAttributeWithSampler(line, names) {
    const words = line.replace(/^\s+/, '').split(/\s+/); //.split(/\b(\s)/);
    if (words[0] !== 'attribute') {
      return line;
    }
    if (names.includes(words[2])) {
      // Under WebGL1 only single float attribute are supported.
      assert(words[1] === 'float');
      const newLine = `uniform sampler2D transform_uSampler_${words[2]} \// ${line}`
      return newLine;
    }
    return line;
  }

  _getSampleInstructions(textureNames) {
    return textureNames.reduce((result, name) => {
      result.push(`  float ${name} = transform_getInput(transform_uSampler_${name});\n`);
      return result;
    }, []);
  }

  // setup float texture framebuffer, to which results are rendered
  _setupFramebuffers() {

    let {width, height} = this.destTextures[0];

    this.framebuffers[0] = new Framebuffer(this.gl, {
      id: `${this.id || 'transform'}-framebuffer-0`,
      width,
      height,
      attachments: {
        [GL.COLOR_ATTACHMENT0]: this.destTextures[0]
      }
    });

    if (this.feedbackMap) {
      ({width, height} = this.destTextures[1]);

      this.framebuffers[1] = new Framebuffer(this.gl, {
        id: `${this.id || 'transform'}-framebuffer-1`,
        width,
        height,
        attachments: {
          [GL.COLOR_ATTACHMENT0]: this.destTextures[1]
        }
      });
    }
  }

  // setup TransformFeedback objects to capture the results
  _setupTransformFeedback() {
    this.transformFeedbacks[0] = new TransformFeedback(this.gl, {
      program: this.model.program,
      buffers: this.feedbackBuffers[0]
    });

    // If buffers are swappable setup second transform feedback object.
    if (this.feedbackMap) {
      this.transformFeedbacks[1] = new TransformFeedback(this.gl, {
        program: this.model.program,
        buffers: this.feedbackBuffers[1]
      });
    }
  }

  // WebGL1 specific

  // Convert Buffers/Arrays into textures, may be a utility method on Textuer2D?
  _createTexture({array, refTexture} = {}) {

    assert(array || refTexture);

    let data = null;
    let format = GL.RGBA;
    let height = 1;
    let type = GL.UNSIGNED_BYTE;
    let width = 1;

    if (array) {
      width = Math.ceil(Math.sqrt(array.length));
      height = width;
      type = getGLTypeFromTypedArray(array);
      format = isWebGL2(this.gl) && type === GL.FLOAT ? GL.RGBA32F : GL.RGBA;

      data = this._getPaddedArray({array, width, height});
    } else {
      ({width, height, format, type} = refTexture);
    }

    return new Texture2D(this.gl, {
      id: `${this.id}-source-texture`,
      data,
      width,
      height,
      format,
      dataFormat: GL.RGBA,
      type,
      mipmaps: false,
      parameters: {
        [GL.TEXTURE_MIN_FILTER]: GL.NEAREST,
        [GL.TEXTURE_MAG_FILTER]: GL.NEAREST,
        [GL.TEXTURE_WRAP_S]: GL.CLAMP_TO_EDGE,
        [GL.TEXTURE_WRAP_T]: GL.CLAMP_TO_EDGE
      },
      pixelStore: {
        [GL.UNPACK_FLIP_Y_WEBGL]: false
      }
    });
  }

  // Pads G B A channels, and any ending elements
  _getPaddedArray({array = null, width, height} = {}) {
    let ArrayType = USE_FLOAT_TEXTURE ? Float32Array : Uint8Array;

    const data = new ArrayType(width * height * 4);
    if (array) {
      array.forEach((element, index) => {
        data[4 * index] = element;
      });
    }
    return data;
  }

  _createInstanceIDBuffer(instanceCount) {
    if (this.instanceIDBuffer) {
      this.instanceIDBuffer.delete();
    }
    // WebGL1 attributes can only be float, vec2 etc (no int or uint)
    const instanceIds = new Float32Array(instanceCount);
    instanceIds.forEach((_, index, array) => {
      array[index] = index;
    });
    this.instanceIDBuffer = new Buffer(this.gl, {data: instanceIds, size: 1});
  }
}
