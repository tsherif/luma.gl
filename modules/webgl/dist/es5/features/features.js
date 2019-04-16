"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasFeature = hasFeature;
exports.hasFeatures = hasFeatures;
exports.getFeatures = getFeatures;

var _webglFeaturesTable = _interopRequireDefault(require("./webgl-features-table"));

var _webglUtils = require("../webgl-utils");

var _utils = require("../utils");

function hasFeature(gl, feature) {
  return hasFeatures(gl, feature);
}

function hasFeatures(gl, features) {
  features = Array.isArray(features) ? features : [features];
  return features.every(function (feature) {
    return isFeatureSupported(gl, feature);
  });
}

function getFeatures(gl) {
  gl.luma = gl.luma || {};

  if (!gl.luma.caps) {
    gl.luma.caps = {};
    gl.luma.caps.webgl2 = (0, _webglUtils.isWebGL2)(gl);

    for (var cap in _webglFeaturesTable["default"]) {
      gl.luma.caps[cap] = isFeatureSupported(gl, cap);
    }
  }

  return gl.luma.caps;
}

function isFeatureSupported(gl, cap) {
  var feature = _webglFeaturesTable["default"][cap];
  (0, _utils.assert)(feature, cap);
  var featureDefinition = (0, _webglUtils.isWebGL2)(gl) ? feature[1] || feature[0] : feature[0];
  var isSupported;

  if (typeof featureDefinition === 'function') {
    isSupported = featureDefinition(gl);
  } else if (Array.isArray(featureDefinition)) {
    isSupported = true;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = featureDefinition[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var extension = _step.value;
        isSupported = isSupported && Boolean(gl.getExtension(extension));
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
  } else if (typeof featureDefinition === 'string') {
    isSupported = Boolean(gl.getExtension(featureDefinition));
  } else if (typeof featureDefinition === 'boolean') {
    isSupported = featureDefinition;
  } else {
    (0, _utils.assert)(false);
  }

  return isSupported;
}
//# sourceMappingURL=features.js.map