"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "global", {
  enumerable: true,
  get: function get() {
    return _globals.global;
  }
});
exports["default"] = exports.lumaStats = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _isBrowser = _interopRequireDefault(require("./utils/is-browser"));

var _globals = require("./utils/globals");

var _log = _interopRequireDefault(require("./utils/log"));

var _probe = require("probe.gl");

require("@luma.gl/webgl2-polyfill");

var VERSION = typeof "7.0.0-rc.3" !== 'undefined' ? "7.0.0-rc.3" : 'untranspiled source';
var STARTUP_MESSAGE = 'set luma.log.priority=1 (or higher) to trace rendering';

var StatsManager = function () {
  function StatsManager() {
    (0, _classCallCheck2["default"])(this, StatsManager);
    this.stats = new Map();
  }

  (0, _createClass2["default"])(StatsManager, [{
    key: "get",
    value: function get(name) {
      if (!this.stats.has(name)) {
        this.stats.set(name, new _probe.Stats({
          id: name
        }));
      }

      return this.stats.get(name);
    }
  }]);
  return StatsManager;
}();

var lumaStats = new StatsManager();
exports.lumaStats = lumaStats;

if (_globals.global.luma && _globals.global.luma.VERSION !== VERSION) {
  throw new Error("luma.gl - multiple VERSIONs detected: ".concat(_globals.global.luma.VERSION, " vs ").concat(VERSION));
}

if (!_globals.global.luma) {
  if (_isBrowser["default"]) {
    _log["default"].log(1, "luma.gl ".concat(VERSION, " - ").concat(STARTUP_MESSAGE))();
  }

  _globals.global.luma = _globals.global.luma || {
    VERSION: VERSION,
    version: VERSION,
    log: _log["default"],
    stats: lumaStats,
    globals: {
      modules: {},
      nodeIO: {}
    }
  };
}

var _default = _globals.global.luma;
exports["default"] = _default;
//# sourceMappingURL=init.js.map