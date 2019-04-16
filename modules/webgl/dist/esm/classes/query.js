import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import Resource from './resource';
import { FEATURES, hasFeatures } from '../features';
import { isWebGL2 } from '../webgl-utils';
import { assert } from '../utils';
var GL_QUERY_RESULT = 0x8866;
var GL_QUERY_RESULT_AVAILABLE = 0x8867;
var GL_TIME_ELAPSED_EXT = 0x88bf;
var GL_GPU_DISJOINT_EXT = 0x8fbb;
var GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88;
var GL_ANY_SAMPLES_PASSED = 0x8c2f;
var GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a;

var Query = function (_Resource) {
  _inherits(Query, _Resource);

  _createClass(Query, null, [{
    key: "isSupported",
    value: function isSupported(gl) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var webgl2 = isWebGL2(gl);
      var hasTimerQuery = hasFeatures(gl, FEATURES.TIMER_QUERY);
      var supported = webgl2 || hasTimerQuery;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = opts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          switch (key) {
            case 'queries':
              supported = supported && webgl2;
              break;

            case 'timers':
              supported = supported && hasTimerQuery;
              break;

            default:
              assert(false);
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

      return supported;
    }
  }]);

  function Query(gl) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Query);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Query).call(this, gl, opts));
    _this.target = null;
    _this._queryPending = false;
    _this._pollingPromise = null;
    Object.seal(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Query, [{
    key: "beginTimeElapsedQuery",
    value: function beginTimeElapsedQuery() {
      return this.begin(GL_TIME_ELAPSED_EXT);
    }
  }, {
    key: "beginOcclusionQuery",
    value: function beginOcclusionQuery() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$conservative = _ref.conservative,
          conservative = _ref$conservative === void 0 ? false : _ref$conservative;

      return this.begin(conservative ? GL_ANY_SAMPLES_PASSED_CONSERVATIVE : GL_ANY_SAMPLES_PASSED);
    }
  }, {
    key: "beginTransformFeedbackQuery",
    value: function beginTransformFeedbackQuery() {
      return this.begin(GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN);
    }
  }, {
    key: "begin",
    value: function begin(target) {
      if (this._queryPending) {
        return this;
      }

      this.target = target;
      this.gl.beginQuery(this.target, this.handle);
      return this;
    }
  }, {
    key: "end",
    value: function end() {
      if (this._queryPending) {
        return this;
      }

      if (this.target) {
        this.gl.endQuery(this.target);
        this.target = null;
        this._queryPending = true;
      }

      return this;
    }
  }, {
    key: "isResultAvailable",
    value: function isResultAvailable() {
      if (!this._queryPending) {
        return false;
      }

      var resultAvailable = this.gl.getQueryParameter(this.handle, GL_QUERY_RESULT_AVAILABLE);

      if (resultAvailable) {
        this._queryPending = false;
      }

      return resultAvailable;
    }
  }, {
    key: "isTimerDisjoint",
    value: function isTimerDisjoint() {
      return this.gl.getParameter(GL_GPU_DISJOINT_EXT);
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.gl.getQueryParameter(this.handle, GL_QUERY_RESULT);
    }
  }, {
    key: "getTimerMilliseconds",
    value: function getTimerMilliseconds() {
      return this.getResult() / 1e6;
    }
  }, {
    key: "createPoll",
    value: function createPoll() {
      var _this2 = this;

      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;

      if (this._pollingPromise) {
        return this._pollingPromise;
      }

      var counter = 0;
      this._pollingPromise = new Promise(function (resolve, reject) {
        var poll = function poll() {
          if (_this2.isResultAvailable()) {
            resolve(_this2.getResult());
            _this2._pollingPromise = null;
          } else if (counter++ > limit) {
            reject('Timed out');
            _this2._pollingPromise = null;
          } else {
            requestAnimationFrame(poll);
          }
        };

        requestAnimationFrame(poll);
      });
      return this._pollingPromise;
    }
  }, {
    key: "_createHandle",
    value: function _createHandle() {
      return Query.isSupported(this.gl) ? this.gl.createQuery() : null;
    }
  }, {
    key: "_deleteHandle",
    value: function _deleteHandle() {
      this.gl.deleteQuery(this.handle);
    }
  }]);

  return Query;
}(Resource);

export { Query as default };
//# sourceMappingURL=query.js.map