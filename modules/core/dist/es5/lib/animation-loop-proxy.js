"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _webgl = require("@luma.gl/webgl");

var _utils = require("../utils");

var AnimationLoopProxy = function () {
  (0, _createClass2["default"])(AnimationLoopProxy, null, [{
    key: "createWorker",
    value: function createWorker(animationLoop) {
      return function (self) {
        animationLoop.setProps({
          useDevicePixels: false,
          autoResizeDrawingBuffer: false
        });
        self.canvas = null;

        function initializeCanvas(canvas) {
          var eventHandlers = new Map();

          canvas.addEventListener = function (type, handler) {
            self.postMessage({
              command: 'addEventListener',
              type: type
            });

            if (!eventHandlers.has(type)) {
              eventHandlers.set(type, []);
            }

            eventHandlers.get(type).push(handler);
          };

          canvas.removeEventListener = function (type, handler) {
            self.postMessage({
              command: 'removeEventListener',
              type: type
            });
            var handlers = eventHandlers.get(type);

            if (handlers) {
              handlers.splice(handlers.indexOf(handler), 1);
            }
          };

          canvas.dispatchEvent = function (type, event) {
            var handlers = eventHandlers.get(type);

            if (handlers) {
              handlers.forEach(function (handler) {
                return handler(event);
              });
            }
          };

          self.canvas = canvas;
        }

        self.addEventListener('message', function (evt) {
          switch (evt.data.command) {
            case 'start':
              initializeCanvas(evt.data.opts.canvas);
              animationLoop.start(evt.data.opts);
              break;

            case 'stop':
              animationLoop.stop();
              break;

            case 'resize':
              self.canvas.width = evt.data.width;
              self.canvas.height = evt.data.height;
              break;

            case 'event':
              self.canvas.dispatchEvent(evt.data.type, evt.data.event);
              break;

            default:
          }
        });
      };
    }
  }]);

  function AnimationLoopProxy(worker) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, AnimationLoopProxy);
    var _opts$onInitialize = opts.onInitialize,
        onInitialize = _opts$onInitialize === void 0 ? function () {} : _opts$onInitialize,
        _opts$onFinalize = opts.onFinalize,
        onFinalize = _opts$onFinalize === void 0 ? function () {} : _opts$onFinalize,
        _opts$useDevicePixels = opts.useDevicePixels,
        useDevicePixels = _opts$useDevicePixels === void 0 ? true : _opts$useDevicePixels,
        _opts$autoResizeDrawi = opts.autoResizeDrawingBuffer,
        autoResizeDrawingBuffer = _opts$autoResizeDrawi === void 0 ? true : _opts$autoResizeDrawi;
    this.props = {
      onInitialize: onInitialize,
      onFinalize: onFinalize
    };
    this.setProps({
      autoResizeDrawingBuffer: autoResizeDrawingBuffer,
      useDevicePixels: useDevicePixels
    });
    (0, _utils.assert)(worker instanceof Worker);
    this.worker = worker;
    this.canvas = null;
    this.width = null;
    this.height = null;
    this._running = false;
    this._animationFrameId = null;
    this._resolveNextFrame = null;
    this._nextFramePromise = null;
    this._onMessage = this._onMessage.bind(this);
    this._onEvent = this._onEvent.bind(this);
    this._updateFrame = this._updateFrame.bind(this);
  }

  (0, _createClass2["default"])(AnimationLoopProxy, [{
    key: "setProps",
    value: function setProps(props) {
      if ('autoResizeDrawingBuffer' in props) {
        this.autoResizeDrawingBuffer = props.autoResizeDrawingBuffer;
      }

      if ('useDevicePixels' in props) {
        this.useDevicePixels = props.useDevicePixels;
      }

      return this;
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this._running) {
        return this;
      }

      this._running = true;
      this.worker.onmessage = this._onMessage;
      (0, _webgl.getPageLoadPromise)().then(function () {
        if (!_this._running) {
          return null;
        }

        _this._createAndTransferCanvas(opts);

        return _this.props.onInitialize(_this);
      }).then(function () {
        if (_this._running) {
          _this._animationFrameId = (0, _webgl.requestAnimationFrame)(_this._updateFrame);
        }
      });
      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._running) {
        (0, _webgl.cancelAnimationFrame)(this._animationFrameId);
        this._animationFrameId = null;
        this._nextFramePromise = null;
        this._resolveNextFrame = null;
        this._running = false;
        this.props.onFinalize(this);
      }

      this.worker.postMessage({
        command: 'stop'
      });
      return this;
    }
  }, {
    key: "waitForRender",
    value: function waitForRender() {
      var _this2 = this;

      if (!this._nextFramePromise) {
        this._nextFramePromise = new Promise(function (resolve) {
          _this2._resolveNextFrame = resolve;
        });
      }

      return this._nextFramePromise;
    }
  }, {
    key: "_onMessage",
    value: function _onMessage(evt) {
      switch (evt.data.command) {
        case 'addEventListener':
          this.canvas.addEventListener(evt.data.type, this._onEvent);
          break;

        case 'removeEventListener':
          this.canvas.removeEventListener(evt.data.type, this._onEvent);
          break;

        default:
      }
    }
  }, {
    key: "_onEvent",
    value: function _onEvent(evt) {
      var devicePixelRatio = this.useDevicePixels ? window.devicePixelRatio || 1 : 1;
      var type = evt.type;
      var safeEvent = {};

      for (var key in evt) {
        var value = evt[key];
        var valueType = (0, _typeof2["default"])(value);

        if (key === 'offsetX' || key === 'offsetY') {
          value *= devicePixelRatio;
        }

        if (valueType === 'number' || valueType === 'boolean' || valueType === 'string') {
          safeEvent[key] = value;
        }
      }

      this.worker.postMessage({
        command: 'event',
        type: type,
        event: safeEvent
      });
    }
  }, {
    key: "_updateFrame",
    value: function _updateFrame() {
      this._resizeCanvasDrawingBuffer();

      if (this._resolveNextFrame) {
        this._resolveNextFrame(this);

        this._nextFramePromise = null;
        this._resolveNextFrame = null;
      }

      this._animationFrameId = (0, _webgl.requestAnimationFrame)(this._updateFrame);
    }
  }, {
    key: "_createAndTransferCanvas",
    value: function _createAndTransferCanvas(opts) {
      var screenCanvas = (0, _webgl.getCanvas)(opts);

      if (!screenCanvas.transferControlToOffscreen) {
        _utils.log.error('OffscreenCanvas is not available in your browser.')();
      }

      var offscreenCanvas = screenCanvas.transferControlToOffscreen();
      this.worker.postMessage({
        command: 'start',
        opts: Object.assign({}, opts, {
          canvas: offscreenCanvas
        })
      }, [offscreenCanvas]);
      this.canvas = screenCanvas;
    }
  }, {
    key: "_resizeCanvasDrawingBuffer",
    value: function _resizeCanvasDrawingBuffer() {
      if (this.autoResizeDrawingBuffer) {
        var devicePixelRatio = this.useDevicePixels ? window.devicePixelRatio || 1 : 1;
        var width = this.canvas.clientWidth * devicePixelRatio;
        var height = this.canvas.clientHeight * devicePixelRatio;

        if (this.width !== width || this.height !== height) {
          this.width = width;
          this.height = height;
          this.worker.postMessage({
            command: 'resize',
            width: width,
            height: height
          });
        }
      }
    }
  }]);
  return AnimationLoopProxy;
}();

exports["default"] = AnimationLoopProxy;
//# sourceMappingURL=animation-loop-proxy.js.map