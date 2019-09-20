"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createGLTFObjects;

var _gltfInstantiator = _interopRequireDefault(require("./gltf-instantiator"));

function createGLTFObjects(gl, gltf, options) {
  var instantiator = new _gltfInstantiator["default"](gl, options);
  var scenes = instantiator.instantiate(gltf);
  var animator = instantiator.createAnimator();
  return {
    scenes: scenes,
    animator: animator
  };
}
//# sourceMappingURL=create-gltf-objects.js.map