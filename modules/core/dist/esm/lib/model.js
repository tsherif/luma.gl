import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Query, TransformFeedback, Buffer } from '@luma.gl/webgl';
import { getBuffersFromGeometry } from './model-utils';
import BaseModel from './base-model';
import { log, isObjectEmpty, uid, assert } from '../utils';
var ERR_MODEL_PARAMS = 'Model needs drawMode and vertexCount';
var LOG_DRAW_PRIORITY = 2;

var Model = function (_BaseModel) {
  _inherits(Model, _BaseModel);

  function Model(gl, props) {
    _classCallCheck(this, Model);

    var _props$id = props.id,
        id = _props$id === void 0 ? uid('model') : _props$id;
    return _possibleConstructorReturn(this, _getPrototypeOf(Model).call(this, gl, _objectSpread({}, props, {
      id: id
    })));
  }

  _createClass(Model, [{
    key: "initialize",
    value: function initialize() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _get(_getPrototypeOf(Model.prototype), "initialize", this).call(this, props);

      this.drawMode = props.drawMode !== undefined ? props.drawMode : 4;
      this.vertexCount = props.vertexCount || 0;
      this.geometryBuffers = {};
      this.isInstanced = props.isInstanced || props.instanced;

      this._setModelProps(props);

      this.geometry = {};
      assert(this.drawMode !== undefined && Number.isFinite(this.vertexCount), ERR_MODEL_PARAMS);
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      _get(_getPrototypeOf(Model.prototype), "setProps", this).call(this, props);

      this._setModelProps(props);
    }
  }, {
    key: "delete",
    value: function _delete() {
      _get(_getPrototypeOf(Model.prototype), "delete", this).call(this);

      this._deleteGeometryBuffers();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this["delete"]();
    }
  }, {
    key: "getDrawMode",
    value: function getDrawMode() {
      return this.drawMode;
    }
  }, {
    key: "getVertexCount",
    value: function getVertexCount() {
      return this.vertexCount;
    }
  }, {
    key: "getInstanceCount",
    value: function getInstanceCount() {
      return this.instanceCount;
    }
  }, {
    key: "getAttributes",
    value: function getAttributes() {
      return this.attributes;
    }
  }, {
    key: "setDrawMode",
    value: function setDrawMode(drawMode) {
      this.drawMode = drawMode;
      return this;
    }
  }, {
    key: "setVertexCount",
    value: function setVertexCount(vertexCount) {
      assert(Number.isFinite(vertexCount));
      this.vertexCount = vertexCount;
      return this;
    }
  }, {
    key: "setInstanceCount",
    value: function setInstanceCount(instanceCount) {
      assert(Number.isFinite(instanceCount));
      this.instanceCount = instanceCount;
      return this;
    }
  }, {
    key: "setGeometry",
    value: function setGeometry(geometry) {
      this.drawMode = geometry.drawMode;
      this.vertexCount = geometry.getVertexCount();

      this._deleteGeometryBuffers();

      this.geometryBuffers = getBuffersFromGeometry(this.gl, geometry);
      this.vertexArray.setAttributes(this.geometryBuffers);
      return this;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isObjectEmpty(attributes)) {
        return this;
      }

      var normalizedAttributes = {};

      for (var name in attributes) {
        var attribute = attributes[name];
        normalizedAttributes[name] = attribute.getValue ? attribute.getValue() : attribute;
      }

      this.vertexArray.setAttributes(normalizedAttributes);
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.drawGeometry(options);
    }
  }, {
    key: "transform",
    value: function transform() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$discard = options.discard,
          discard = _options$discard === void 0 ? true : _options$discard,
          feedbackBuffers = options.feedbackBuffers,
          _options$unbindModels = options.unbindModels,
          unbindModels = _options$unbindModels === void 0 ? [] : _options$unbindModels;
      var parameters = options.parameters;

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
        this.draw(Object.assign({}, options, {
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
    key: "render",
    value: function render() {
      var uniforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      log.warn('Model.render() is deprecated. Use Model.setUniforms() and Model.draw()')();
      return this.setUniforms(uniforms).draw();
    }
  }, {
    key: "_setModelProps",
    value: function _setModelProps(props) {
      if ('instanceCount' in props) {
        this.instanceCount = props.instanceCount;
      }

      if ('geometry' in props) {
        this.setGeometry(props.geometry);
      }

      if ('attributes' in props) {
        this.setAttributes(props.attributes);
      }

      if ('_feedbackBuffers' in props) {
        this._setFeedbackBuffers(props._feedbackBuffers);
      }
    }
  }, {
    key: "_deleteGeometryBuffers",
    value: function _deleteGeometryBuffers() {
      for (var name in this.geometryBuffers) {
        var buffer = this.geometryBuffers[name][0] || this.geometryBuffers[name];

        if (buffer instanceof Buffer) {
          buffer["delete"]();
        }
      }
    }
  }, {
    key: "_setAnimationProps",
    value: function _setAnimationProps(animationProps) {
      var _this = this;

      if (this.animated) {
        assert(animationProps, 'Model.draw(): animated uniforms but no animationProps');

        var animatedUniforms = this._evaluateAnimateUniforms(animationProps);

        this.program.setUniforms(animatedUniforms, function () {
          _this._checkForDeprecatedUniforms(animatedUniforms);
        });
      }
    }
  }, {
    key: "_setFeedbackBuffers",
    value: function _setFeedbackBuffers() {
      var feedbackBuffers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isObjectEmpty(feedbackBuffers)) {
        return this;
      }

      var gl = this.program.gl;
      this.transformFeedback = this.transformFeedback || new TransformFeedback(gl, {
        program: this.program
      });
      this.transformFeedback.setBuffers(feedbackBuffers);
      return this;
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
  }]);

  return Model;
}(BaseModel);

export { Model as default };
//# sourceMappingURL=model.js.map