import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import isBrowser from './utils/is-browser';
import { global } from './utils/globals';
import log from './utils/log';
import { Stats } from 'probe.gl';
import '@luma.gl/webgl2-polyfill';
var VERSION = typeof "7.0.0-rc.3" !== 'undefined' ? "7.0.0-rc.3" : 'untranspiled source';
var STARTUP_MESSAGE = 'set luma.log.priority=1 (or higher) to trace rendering';

var StatsManager = function () {
  function StatsManager() {
    _classCallCheck(this, StatsManager);

    this.stats = new Map();
  }

  _createClass(StatsManager, [{
    key: "get",
    value: function get(name) {
      if (!this.stats.has(name)) {
        this.stats.set(name, new Stats({
          id: name
        }));
      }

      return this.stats.get(name);
    }
  }]);

  return StatsManager;
}();

var lumaStats = new StatsManager();

if (global.luma && global.luma.VERSION !== VERSION) {
  throw new Error("luma.gl - multiple VERSIONs detected: ".concat(global.luma.VERSION, " vs ").concat(VERSION));
}

if (!global.luma) {
  if (isBrowser) {
    log.log(1, "luma.gl ".concat(VERSION, " - ").concat(STARTUP_MESSAGE))();
  }

  global.luma = global.luma || {
    VERSION: VERSION,
    version: VERSION,
    log: log,
    stats: lumaStats,
    globals: {
      modules: {},
      nodeIO: {}
    }
  };
}

export { global };
export { lumaStats };
export default global.luma;
//# sourceMappingURL=init.js.map