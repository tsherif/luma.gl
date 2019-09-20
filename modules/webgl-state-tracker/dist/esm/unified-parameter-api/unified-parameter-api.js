import { GL_PARAMETER_DEFAULTS, GL_PARAMETER_SETTERS, GL_COMPOSITE_PARAMETER_SETTERS, GL_PARAMETER_GETTERS } from './webgl-parameter-tables';
import deepArrayEqual from '../utils/deep-array-equal';
import { assert } from '../utils';
export function setParameter(gl, key, value) {
  var getter = GL_PARAMETER_GETTERS[key];
  var prevValue = getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
  var setter = GL_PARAMETER_SETTERS[key];
  assert(typeof setter === 'function');
  setter(gl, value, Number(key));
  return prevValue;
}
export function setParameters(gl, values) {
  var compositeSetters = {};

  for (var key in values) {
    var glConstant = Number(key);
    var setter = GL_PARAMETER_SETTERS[key];

    if (setter) {
      if (typeof setter === 'string') {
        compositeSetters[setter] = true;
      } else {
        setter(gl, values[key], glConstant);
      }
    }
  }

  var cache = gl.state && gl.state.cache;

  if (cache) {
    var mergedValues = Object.assign({}, cache, values);

    for (var _key in compositeSetters) {
      var compositeSetter = GL_COMPOSITE_PARAMETER_SETTERS[_key];
      compositeSetter(gl, mergedValues);
    }
  }
}
export function getParameter(gl, key) {
  var getter = GL_PARAMETER_GETTERS[key];
  return getter ? getter(gl, Number(key)) : gl.getParameter(Number(key));
}
export function getParameters(gl, parameters) {
  parameters = parameters || GL_PARAMETER_DEFAULTS;
  var parameterKeys = Array.isArray(parameters) ? parameters : Object.keys(parameters);
  var state = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = parameterKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      state[key] = getParameter(gl, key);
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

  return state;
}
export function getDefaultParameters(gl) {
  return Object.assign({}, GL_PARAMETER_DEFAULTS, {});
}
export function resetParameters(gl) {
  setParameters(gl, getDefaultParameters(gl));
}
export function getModifiedParameters(gl) {
  var values = getParameters(GL_PARAMETER_DEFAULTS);
  var modified = {};

  for (var key in GL_PARAMETER_DEFAULTS) {
    if (!deepArrayEqual(values[key], GL_PARAMETER_DEFAULTS[key])) {
      modified[key] = values[key];
    }
  }

  return modified;
}
//# sourceMappingURL=unified-parameter-api.js.map