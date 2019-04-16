import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import ShaderModule from './shader-module';
import { assert } from '../utils';

var ShaderModuleRegistry = function () {
  function ShaderModuleRegistry() {
    _classCallCheck(this, ShaderModuleRegistry);

    this.shaderModules = {};
    this.defaultShaderModules = [];
  }

  _createClass(ShaderModuleRegistry, [{
    key: "setDefaultShaderModules",
    value: function setDefaultShaderModules(modules) {
      this.defaultShaderModules = this.resolveModules(modules);
    }
  }, {
    key: "registerShaderModules",
    value: function registerShaderModules(shaderModuleList) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$ignoreMultipleRe = _ref.ignoreMultipleRegistrations,
          ignoreMultipleRegistrations = _ref$ignoreMultipleRe === void 0 ? false : _ref$ignoreMultipleRe;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = shaderModuleList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var shaderModule = _step.value;

          this._registerShaderModule(shaderModule, ignoreMultipleRegistrations);
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
    }
  }, {
    key: "getShaderModule",
    value: function getShaderModule(moduleOrName) {
      if (moduleOrName instanceof ShaderModule) {
        return moduleOrName;
      }

      if (typeof moduleOrName !== 'string') {
        return this._registerShaderModule(moduleOrName, true);
      }

      var module = this.shaderModules[moduleOrName];

      if (!module) {
        assert(false, "Unknown shader module ".concat(moduleOrName));
      }

      return module;
    }
  }, {
    key: "resolveModules",
    value: function resolveModules(modules) {
      var _this = this;

      return modules.map(function (moduleOrName) {
        return _this.getShaderModule(moduleOrName);
      });
    }
  }, {
    key: "_registerShaderModule",
    value: function _registerShaderModule(module) {
      var ignoreMultipleRegistrations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (module instanceof ShaderModule) {
        return module;
      }

      assert(module.name, 'shader module has no name');

      if (!this.shaderModules[module.name] || ignoreMultipleRegistrations) {
        module = new ShaderModule(module);
        module.dependencies = this.resolveModules(module.dependencies);
        this.shaderModules[module.name] = module;
      } else {
        throw new Error("shader module ".concat(module.name, " already registered"));
      }

      return this.shaderModules[module.name];
    }
  }]);

  return ShaderModuleRegistry;
}();

export { ShaderModuleRegistry as default };
//# sourceMappingURL=shader-module-registry.js.map