"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _core = require("@luma.gl/core");

var Display = function () {
  function Display() {
    (0, _classCallCheck2["default"])(this, Display);
  }

  (0, _createClass2["default"])(Display, [{
    key: "getViews",
    value: function getViews(options) {
      var width = options.width,
          height = options.height;
      return [{
        params: {
          viewport: [0, 0, width, height],
          scissor: [0, 0, width, height],
          scissorTest: true
        }
      }];
    }
  }, {
    key: "submitFrame",
    value: function submitFrame() {
      return true;
    }
  }, {
    key: "requestAnimationFrame",
    value: function requestAnimationFrame(renderFrame) {
      return false;
    }
  }, {
    key: "delete",
    value: function _delete() {}
  }, {
    key: "_renderFrame",
    value: function _renderFrame(options) {
      var _this = this;

      var views = this.getViews(options);

      if (!views) {
        return false;
      }

      var gl = this.animationLoop.gl;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var view = _step.value;
          (0, _core.withParameters)(gl, view.params, function () {
            return _this.animationLoop.onRender((0, _objectSpread2["default"])({}, options, view));
          });
        };

        for (var _iterator = views[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
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

      this.submitFrame();
      return true;
    }
  }]);
  return Display;
}();

exports["default"] = Display;
//# sourceMappingURL=display.js.map