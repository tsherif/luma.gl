import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import { isWebGL, Query, Program, VertexArray, clear as _clear } from '@luma.gl/webgl';
import { MODULAR_SHADERS, assembleShaders } from '@luma.gl/shadertools';
import { getDebugTableForUniforms, getDebugTableForVertexArray, getDebugTableForProgramConfiguration } from '@luma.gl/webgl';
import { addModel, removeModel, logModel, getOverrides } from '../debug/seer-integration';
import { log, isObjectEmpty, uid, assert } from '../utils';
var LOG_DRAW_PRIORITY = 2;
var LOG_DRAW_TIMEOUT = 10000;
var DEPRECATED_PICKING_UNIFORMS = ['renderPickingBuffer', 'pickingEnabled'];

var BaseModel = function () {
  function BaseModel(gl) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BaseModel);

    assert(isWebGL(gl));
    var _props$id = props.id,
        id = _props$id === void 0 ? uid('base-model') : _props$id;
    this.id = id;
    this.gl = gl;
    this.id = props.id || uid('Model');
    this.lastLogTime = 0;
    this.initialize(props);

    this._setBaseModelProps(props);
  }

  _createClass(BaseModel, [{
    key: "initialize",
    value: function initialize() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.props = {};
      this.program = this._createProgram(props);
      this.vertexArray = new VertexArray(this.gl, {
        program: this.program
      });
      this.userData = {};
      this.needsRedraw = true;
      this._attributes = {};
      this.attributes = {};
      this.animatedUniforms = {};
      this.animated = false;
      this.animationLoop = null;
      this.timerQueryEnabled = false;
      this.timeElapsedQuery = undefined;
      this.lastQueryReturned = true;
      this.stats = {
        accumulatedFrameTime: 0,
        averageFrameTime: 0,
        profileFrameCount: 0
      };
      this.pickable = true;

      this._setBaseModelProps(props);

      this.setUniforms(Object.assign({}, this.getModuleUniforms(), this.getModuleUniforms(props.moduleSettings)));
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      this._setBaseModelProps(props);
    }
  }, {
    key: "delete",
    value: function _delete() {
      for (var key in this._attributes) {
        if (this._attributes[key] !== this.attributes[key]) {
          this._attributes[key]["delete"]();
        }
      }

      this.program["delete"]();
      this.vertexArray["delete"]();
      removeModel(this.id);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this["delete"]();
    }
  }, {
    key: "isAnimated",
    value: function isAnimated() {
      return this.animated;
    }
  }, {
    key: "getProgram",
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: "getUniforms",
    value: function getUniforms() {
      return this.program.getUniforms();
    }
  }, {
    key: "setUniforms",
    value: function setUniforms() {
      var _this = this;

      var uniforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      uniforms = Object.assign({}, uniforms);
      getOverrides(this.id, uniforms);
      uniforms = this._extractAnimatedUniforms(uniforms);
      this.program.setUniforms(uniforms, function () {
        _this._checkForDeprecatedUniforms(uniforms);
      });
      return this;
    }
  }, {
    key: "updateModuleSettings",
    value: function updateModuleSettings(opts) {
      var uniforms = this.getModuleUniforms(opts || {});
      return this.setUniforms(uniforms);
    }
  }, {
    key: "clear",
    value: function clear(opts) {
      _clear(this.program.gl, opts);

      return this;
    }
  }, {
    key: "drawGeometry",
    value: function drawGeometry() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _opts$moduleSettings = opts.moduleSettings,
          moduleSettings = _opts$moduleSettings === void 0 ? null : _opts$moduleSettings,
          framebuffer = opts.framebuffer,
          _opts$uniforms = opts.uniforms,
          uniforms = _opts$uniforms === void 0 ? {} : _opts$uniforms,
          _opts$attributes = opts.attributes,
          attributes = _opts$attributes === void 0 ? {} : _opts$attributes,
          _opts$transformFeedba = opts.transformFeedback,
          transformFeedback = _opts$transformFeedba === void 0 ? this.transformFeedback : _opts$transformFeedba,
          _opts$parameters = opts.parameters,
          parameters = _opts$parameters === void 0 ? {} : _opts$parameters,
          _opts$vertexArray = opts.vertexArray,
          vertexArray = _opts$vertexArray === void 0 ? this.vertexArray : _opts$vertexArray,
          animationProps = opts.animationProps;
      addModel(this);
      this.setAttributes(attributes);
      this.updateModuleSettings(moduleSettings);
      this.setUniforms(uniforms);

      this._refreshAnimationProps(animationProps);

      var logPriority = this._logDrawCallStart(2);

      var drawParams = this.vertexArray.getDrawParams(this.props);

      if (drawParams.isInstanced && !this.isInstanced) {
        log.warn('Found instanced attributes on non-instanced model', this.id)();
      }

      var isIndexed = drawParams.isIndexed,
          indexType = drawParams.indexType,
          indexOffset = drawParams.indexOffset;
      var isInstanced = this.isInstanced,
          instanceCount = this.instanceCount;

      var noop = function noop() {};

      var _this$props = this.props,
          _this$props$onBeforeR = _this$props.onBeforeRender,
          onBeforeRender = _this$props$onBeforeR === void 0 ? noop : _this$props$onBeforeR,
          _this$props$onAfterRe = _this$props.onAfterRender,
          onAfterRender = _this$props$onAfterRe === void 0 ? noop : _this$props$onAfterRe;
      onBeforeRender();

      this._timerQueryStart();

      var didDraw = this.program.draw(Object.assign({}, opts, {
        logPriority: logPriority,
        uniforms: null,
        framebuffer: framebuffer,
        parameters: parameters,
        drawMode: this.getDrawMode(),
        vertexCount: this.getVertexCount(),
        vertexArray: vertexArray,
        transformFeedback: transformFeedback,
        isIndexed: isIndexed,
        indexType: indexType,
        isInstanced: isInstanced,
        instanceCount: instanceCount,
        offset: isIndexed ? indexOffset : 0
      }));

      this._timerQueryEnd();

      onAfterRender();

      this._logDrawCallEnd(logPriority, vertexArray, framebuffer);

      return didDraw;
    }
  }, {
    key: "transform",
    value: function transform() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _opts$discard = opts.discard,
          discard = _opts$discard === void 0 ? true : _opts$discard,
          feedbackBuffers = opts.feedbackBuffers,
          _opts$unbindModels = opts.unbindModels,
          unbindModels = _opts$unbindModels === void 0 ? [] : _opts$unbindModels;
      var parameters = opts.parameters;

      if (feedbackBuffers) {
        this._setFeedbackBuffers(feedbackBuffers);
      }

      if (discard) {
        parameters = Object.assign({}, parameters, _defineProperty({}, 35977, discard));
      }

      unbindModels.forEach(function (model) {
        return model.vertexArray.unbindBuffers();
      });

      try {
        this.draw(Object.assign({}, opts, {
          parameters: parameters
        }));
      } finally {
        unbindModels.forEach(function (model) {
          return model.vertexArray.bindBuffers();
        });
      }

      return this;
    }
  }, {
    key: "_setBaseModelProps",
    value: function _setBaseModelProps(props) {
      Object.assign(this.props, props);

      if ('uniforms' in props) {
        this.setUniforms(props.uniforms);
      }

      if ('pickable' in props) {
        this.pickable = props.pickable;
      }

      if ('timerQueryEnabled' in props) {
        this.timerQueryEnabled = props.timerQueryEnabled && Query.isSupported(this.gl, ['timers']);

        if (props.timerQueryEnabled && !this.timerQueryEnabled) {
          log.warn('GPU timer not supported')();
        }
      }

      if ('_animationProps' in props) {
        this._setAnimationProps(props._animationProps);
      }

      if ('_animationLoop' in props) {
        this.animationLoop = props._animationLoop;
      }
    }
  }, {
    key: "_createProgram",
    value: function _createProgram(_ref) {
      var _ref$vs = _ref.vs,
          vs = _ref$vs === void 0 ? null : _ref$vs,
          _ref$fs = _ref.fs,
          fs = _ref$fs === void 0 ? null : _ref$fs,
          _ref$modules = _ref.modules,
          modules = _ref$modules === void 0 ? null : _ref$modules,
          _ref$defines = _ref.defines,
          defines = _ref$defines === void 0 ? {} : _ref$defines,
          _ref$inject = _ref.inject,
          inject = _ref$inject === void 0 ? {} : _ref$inject,
          _ref$shaderCache = _ref.shaderCache,
          shaderCache = _ref$shaderCache === void 0 ? null : _ref$shaderCache,
          _ref$varyings = _ref.varyings,
          varyings = _ref$varyings === void 0 ? null : _ref$varyings,
          _ref$bufferMode = _ref.bufferMode,
          bufferMode = _ref$bufferMode === void 0 ? 35981 : _ref$bufferMode,
          _ref$program = _ref.program,
          program = _ref$program === void 0 ? null : _ref$program;

      this.getModuleUniforms = function (x) {};

      var id = this.id;

      if (!program) {
        vs = vs || MODULAR_SHADERS.vs;
        fs = fs || MODULAR_SHADERS.fs;
        var assembleResult = assembleShaders(this.gl, {
          vs: vs,
          fs: fs,
          modules: modules,
          inject: inject,
          defines: defines,
          log: log
        });
        vs = assembleResult.vs;
        fs = assembleResult.fs;

        if (shaderCache) {
          program = shaderCache.getProgram(this.gl, {
            id: id,
            vs: vs,
            fs: fs
          });
        } else {
          program = new Program(this.gl, {
            id: id,
            vs: vs,
            fs: fs,
            varyings: varyings,
            bufferMode: bufferMode
          });
        }

        this.getModuleUniforms = assembleResult.getUniforms || function (x) {};
      }

      assert(program instanceof Program, 'Model needs a program');
      return program;
    }
  }, {
    key: "_checkForDeprecatedUniforms",
    value: function _checkForDeprecatedUniforms(uniforms) {
      DEPRECATED_PICKING_UNIFORMS.forEach(function (uniform) {
        if (uniform in uniforms) {
          log.deprecated(uniform, 'use picking shader module and Model class updateModuleSettings()')();
        }
      });
    }
  }, {
    key: "_refreshAnimationProps",
    value: function _refreshAnimationProps(animationProps) {
      animationProps = animationProps || this.animationLoop && this.animationLoop.animationProps;

      if (animationProps) {
        this._setAnimationProps(animationProps);
      }
    }
  }, {
    key: "_evaluateAnimateUniforms",
    value: function _evaluateAnimateUniforms(animationProps) {
      if (!this.animated) {
        return {};
      }

      var animatedUniforms = {};

      for (var uniformName in this.animatedUniforms) {
        var valueFunction = this.animatedUniforms[uniformName];
        animatedUniforms[uniformName] = valueFunction(animationProps);
      }

      return animatedUniforms;
    }
  }, {
    key: "_extractAnimatedUniforms",
    value: function _extractAnimatedUniforms(uniforms) {
      var foundAnimated = false;

      for (var uniformName in uniforms) {
        var newValue = uniforms[uniformName];

        if (typeof newValue === 'function') {
          this.animatedUniforms[uniformName] = newValue;
          foundAnimated = true;
        } else {
          delete this.animatedUniforms[uniformName];
        }
      }

      this.animated = !isObjectEmpty(this.animatedUniforms);

      if (!foundAnimated) {
        return uniforms;
      }

      var staticUniforms = {};

      for (var _uniformName in uniforms) {
        if (!this.animatedUniforms[_uniformName]) {
          staticUniforms[_uniformName] = uniforms[_uniformName];
        }
      }

      return staticUniforms;
    }
  }, {
    key: "_timerQueryStart",
    value: function _timerQueryStart() {
      if (this.timerQueryEnabled === true) {
        if (!this.timeElapsedQuery) {
          this.timeElapsedQuery = new Query(this.gl);
        }

        if (this.lastQueryReturned) {
          this.lastQueryReturned = false;
          this.timeElapsedQuery.beginTimeElapsedQuery();
        }
      }
    }
  }, {
    key: "_timerQueryEnd",
    value: function _timerQueryEnd() {
      if (this.timerQueryEnabled === true) {
        this.timeElapsedQuery.end();

        if (this.timeElapsedQuery.isResultAvailable()) {
          this.lastQueryReturned = true;
          var elapsedTime = this.timeElapsedQuery.getTimerMilliseconds();
          this.stats.lastFrameTime = elapsedTime;
          this.stats.accumulatedFrameTime += elapsedTime;
          this.stats.profileFrameCount++;
          this.stats.averageFrameTime = this.stats.accumulatedFrameTime / this.stats.profileFrameCount;
          log.log(LOG_DRAW_PRIORITY, "GPU time ".concat(this.program.id, ": ").concat(this.stats.lastFrameTime, "ms average ").concat(this.stats.averageFrameTime, "ms accumulated: ").concat(this.stats.accumulatedFrameTime, "ms count: ").concat(this.stats.profileFrameCount))();
        }
      }
    }
  }, {
    key: "_logDrawCallStart",
    value: function _logDrawCallStart(priority) {
      var logDrawTimeout = priority > 3 ? 0 : LOG_DRAW_TIMEOUT;

      if (log.priority < priority || Date.now() - this.lastLogTime < logDrawTimeout) {
        return undefined;
      }

      this.lastLogTime = Date.now();
      log.group(LOG_DRAW_PRIORITY, ">>> DRAWING MODEL ".concat(this.id), {
        collapsed: log.priority <= 2
      })();
      return priority;
    }
  }, {
    key: "_logDrawCallEnd",
    value: function _logDrawCallEnd(priority, vertexArray, uniforms, framebuffer) {
      if (priority === undefined) {
        return;
      }

      var attributeTable = getDebugTableForVertexArray({
        vertexArray: vertexArray,
        header: "".concat(this.id, " attributes"),
        attributes: this._attributes
      });

      var _getDebugTableForUnif = getDebugTableForUniforms({
        header: "".concat(this.id, " uniforms"),
        program: this.program,
        uniforms: Object.assign({}, this.program.uniforms, uniforms)
      }),
          uniformTable = _getDebugTableForUnif.table,
          unusedTable = _getDebugTableForUnif.unusedTable,
          unusedCount = _getDebugTableForUnif.unusedCount;

      var _getDebugTableForUnif2 = getDebugTableForUniforms({
        header: "".concat(this.id, " uniforms"),
        program: this.program,
        uniforms: Object.assign({}, this.program.uniforms, uniforms),
        undefinedOnly: true
      }),
          missingTable = _getDebugTableForUnif2.table,
          missingCount = _getDebugTableForUnif2.count;

      if (missingCount > 0) {
        log.log('MISSING UNIFORMS', Object.keys(missingTable))();
      }

      if (unusedCount > 0) {
        log.log('UNUSED UNIFORMS', Object.keys(unusedTable))();
      }

      var configTable = getDebugTableForProgramConfiguration(this.vertexArray.configuration);
      log.table(priority, attributeTable)();
      log.table(priority, uniformTable)();
      log.table(priority + 1, configTable)();
      logModel(this, uniforms);

      if (framebuffer) {
        framebuffer.log({
          priority: LOG_DRAW_PRIORITY,
          message: "Rendered to ".concat(framebuffer.id)
        });
      }

      log.groupEnd(LOG_DRAW_PRIORITY, ">>> DRAWING MODEL ".concat(this.id))();
    }
  }]);

  return BaseModel;
}();

export { BaseModel as default };
//# sourceMappingURL=base-model.js.map