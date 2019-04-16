import isBrowser from './utils/is-browser';
import { global } from './utils/globals';
import log from './utils/log';
import { Stats } from 'probe.gl';
import '@luma.gl/webgl2-polyfill';
const VERSION = typeof "7.0.0-rc.3" !== 'undefined' ? "7.0.0-rc.3" : 'untranspiled source';
const STARTUP_MESSAGE = 'set luma.log.priority=1 (or higher) to trace rendering';

class StatsManager {
  constructor() {
    this.stats = new Map();
  }

  get(name) {
    if (!this.stats.has(name)) {
      this.stats.set(name, new Stats({
        id: name
      }));
    }

    return this.stats.get(name);
  }

}

const lumaStats = new StatsManager();

if (global.luma && global.luma.VERSION !== VERSION) {
  throw new Error("luma.gl - multiple VERSIONs detected: ".concat(global.luma.VERSION, " vs ").concat(VERSION));
}

if (!global.luma) {
  if (isBrowser) {
    log.log(1, "luma.gl ".concat(VERSION, " - ").concat(STARTUP_MESSAGE))();
  }

  global.luma = global.luma || {
    VERSION,
    version: VERSION,
    log,
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