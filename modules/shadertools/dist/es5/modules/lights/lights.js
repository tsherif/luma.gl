"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lights = _interopRequireDefault(require("./lights.glsl"));

var _default = {
  name: 'lights',
  vs: _lights["default"],
  fs: _lights["default"],
  getUniforms: getUniforms,
  defines: {
    MAX_LIGHTS: 3
  }
};
exports["default"] = _default;
var INITIAL_MODULE_OPTIONS = {};

function convertColor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? [0, 0, 0] : _ref$color,
      _ref$intensity = _ref.intensity,
      intensity = _ref$intensity === void 0 ? 1.0 : _ref$intensity;

  return color.map(function (component) {
    return component * intensity / 255.0;
  });
}

function getLightSourceUniforms(_ref2) {
  var ambientLight = _ref2.ambientLight,
      _ref2$pointLights = _ref2.pointLights,
      pointLights = _ref2$pointLights === void 0 ? [] : _ref2$pointLights,
      _ref2$directionalLigh = _ref2.directionalLights,
      directionalLights = _ref2$directionalLigh === void 0 ? [] : _ref2$directionalLigh;
  var lightSourceUniforms = {};

  if (ambientLight) {
    lightSourceUniforms['lighting_uAmbientLight.color'] = convertColor(ambientLight);
  } else {
    lightSourceUniforms['lighting_uAmbientLight.color'] = [0, 0, 0];
  }

  pointLights.forEach(function (pointLight, index) {
    lightSourceUniforms["lighting_uPointLight[".concat(index, "].color")] = convertColor(pointLight);
    lightSourceUniforms["lighting_uPointLight[".concat(index, "].position")] = pointLight.position;
    lightSourceUniforms["lighting_uPointLight[".concat(index, "].attenuation")] = pointLight.attenuation;
  });
  lightSourceUniforms.lighting_uPointLightCount = pointLights.length;
  directionalLights.forEach(function (directionalLight, index) {
    lightSourceUniforms["lighting_uDirectionalLight[".concat(index, "].color")] = convertColor(directionalLight);
    lightSourceUniforms["lighting_uDirectionalLight[".concat(index, "].direction")] = directionalLight.direction;
  });
  lightSourceUniforms.lighting_uDirectionalLightCount = directionalLights.length;
  return lightSourceUniforms;
}

function getUniforms() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_MODULE_OPTIONS;

  if ('lightSources' in opts) {
    var _ref3 = opts.lightSources || {},
        ambientLight = _ref3.ambientLight,
        pointLights = _ref3.pointLights,
        directionalLights = _ref3.directionalLights;

    var hasLights = ambientLight || pointLights && pointLights.length > 0 || directionalLights && directionalLights.length > 0;

    if (!hasLights) {
      return {
        lighting_uEnabled: false
      };
    }

    return Object.assign({}, getLightSourceUniforms({
      ambientLight: ambientLight,
      pointLights: pointLights,
      directionalLights: directionalLights
    }), {
      lighting_uEnabled: true
    });
  }

  if ('lights' in opts) {
    var lightSources = {
      pointLights: [],
      directionalLights: []
    };
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (opts.lights || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var light = _step.value;

        switch (light.type) {
          case 'ambient':
            lightSources.ambientLight = light;
            break;

          case 'directional':
            lightSources.directionalLights.push(light);
            break;

          case 'point':
            lightSources.pointLights.push(light);
            break;

          default:
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

    return getUniforms({
      lightSources: lightSources
    });
  }

  return {};
}
//# sourceMappingURL=lights.js.map