"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyValue = getKeyValue;
exports.getKey = getKey;
exports.getKeyType = getKeyType;

var _utils = require("../utils");

function getKeyValue(gl, name) {
  if (typeof name !== 'string') {
    return name;
  }

  var number = Number(name);

  if (!isNaN(number)) {
    return number;
  }

  name = name.replace(/^.*\./, '');
  var value = gl[name];
  (0, _utils.assert)(value !== undefined, "Accessing undefined constant GL.".concat(name));
  return value;
}

function getKey(gl, value) {
  value = Number(value);

  for (var key in gl) {
    if (gl[key] === value) {
      return "GL.".concat(key);
    }
  }

  return String(value);
}

function getKeyType(gl, value) {
  (0, _utils.assert)(value !== undefined, 'undefined key');
  value = Number(value);

  for (var key in gl) {
    if (gl[key] === value) {
      return "GL.".concat(key);
    }
  }

  return String(value);
}
//# sourceMappingURL=constants-to-keys.js.map