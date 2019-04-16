"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultShaderModules = setDefaultShaderModules;
exports.registerShaderModules = registerShaderModules;
exports.resolveModules = resolveModules;
exports.getShaderModule = getShaderModule;
exports.TEST_EXPORTS = void 0;

var _shaderModuleRegistry = _interopRequireDefault(require("./shader-module-registry"));

var shaderModuleRegistry = new _shaderModuleRegistry["default"]();

function setDefaultShaderModules(modules) {
  shaderModuleRegistry.setDefaultShaderModules(modules);
}

function registerShaderModules(shaderModuleList) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ignoreMultipleRe = _ref.ignoreMultipleRegistrations,
      ignoreMultipleRegistrations = _ref$ignoreMultipleRe === void 0 ? false : _ref$ignoreMultipleRe;

  shaderModuleRegistry.registerShaderModules(shaderModuleList, {
    ignoreMultipleRegistrations: ignoreMultipleRegistrations
  });
}

function resolveModules(modules) {
  modules = modules.concat(shaderModuleRegistry.defaultShaderModules);
  modules = shaderModuleRegistry.resolveModules(modules);
  return getShaderDependencies(modules);
}

function getShaderModule(moduleOrName) {
  return shaderModuleRegistry.getShaderModule(moduleOrName);
}

function getShaderDependencies(modules) {
  var moduleMap = {};
  var moduleDepth = {};
  getDependencyGraph({
    modules: modules,
    level: 0,
    moduleMap: moduleMap,
    moduleDepth: moduleDepth
  });
  return Object.keys(moduleDepth).sort(function (a, b) {
    return moduleDepth[b] - moduleDepth[a];
  }).map(function (name) {
    return moduleMap[name];
  });
}

function getDependencyGraph(_ref2) {
  var modules = _ref2.modules,
      level = _ref2.level,
      moduleMap = _ref2.moduleMap,
      moduleDepth = _ref2.moduleDepth;

  if (level >= 5) {
    throw new Error('Possible loop in shader dependency graph');
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = modules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var module = _step.value;
      moduleMap[module.name] = module;

      if (moduleDepth[module.name] === undefined || moduleDepth[module.name] < level) {
        moduleDepth[module.name] = level;
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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = modules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _module = _step2.value;

      if (_module.dependencies) {
        getDependencyGraph({
          modules: _module.dependencies,
          level: level + 1,
          moduleMap: moduleMap,
          moduleDepth: moduleDepth
        });
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

var TEST_EXPORTS = {
  getShaderDependencies: getShaderDependencies,
  getDependencyGraph: getDependencyGraph
};
exports.TEST_EXPORTS = TEST_EXPORTS;
//# sourceMappingURL=resolve-modules.js.map