import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import { Matrix4 } from 'math.gl';
export var ATTRIBUTE_TYPE_TO_COMPONENTS = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
export var ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};

function accessorToJsArray(accessor) {
  if (!accessor._animation) {
    var ArrayType = ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY[accessor.componentType];
    var components = ATTRIBUTE_TYPE_TO_COMPONENTS[accessor.type];
    var length = components * accessor.count;
    var _accessor$bufferView$ = accessor.bufferView.data,
        buffer = _accessor$bufferView$.buffer,
        byteOffset = _accessor$bufferView$.byteOffset;
    var array = new ArrayType(buffer, byteOffset + (accessor.byteOffset || 0), length);

    if (components === 1) {
      accessor._animation = Array.from(array);
    } else {
      var slicedArray = [];

      for (var i = 0; i < array.length; i += components) {
        slicedArray.push(Array.from(array.slice(i, i + components)));
      }

      accessor._animation = slicedArray;
    }
  }

  return accessor._animation;
}

var helperMatrix = new Matrix4();

function applyTranslationRotationScale(gltfNode, node) {
  node.matrix.identity();

  if (gltfNode.translation) {
    node.matrix.translate(gltfNode.translation);
  }

  if (gltfNode.rotation) {
    var rotationMatrix = helperMatrix.fromQuaternion(gltfNode.rotation);
    node.matrix.multiplyRight(rotationMatrix);
  }

  if (gltfNode.scale) {
    node.matrix.scale(gltfNode.scale);
  }
}

var GLTFAnimation = function () {
  function GLTFAnimation(props) {
    _classCallCheck(this, GLTFAnimation);

    this.startTime = 0;
    this.playing = true;
    this.speed = 1;
    Object.assign(this, props);
  }

  _createClass(GLTFAnimation, [{
    key: "animate",
    value: function animate(timeMs) {
      var _this = this;

      if (!this.playing) {
        return;
      }

      var absTime = timeMs / 1000;
      var time = (absTime - this.startTime) * this.speed;
      this.channels.forEach(function (_ref) {
        var _ref$sampler = _ref.sampler,
            input = _ref$sampler.input,
            output = _ref$sampler.output,
            target = _ref.target,
            path = _ref.path;
        var index = input.findIndex(function (t) {
          return t > time;
        });

        if (index === -1) {
          index = 0;
          _this.startTime = absTime;
        }

        target[path] = output[index];
        applyTranslationRotationScale(target, target._node);
      });
    }
  }]);

  return GLTFAnimation;
}();

var GLTFAnimator = function () {
  function GLTFAnimator(gltf) {
    _classCallCheck(this, GLTFAnimator);

    this.animations = gltf.animations.map(function (animation, index) {
      var name = animation.name || "Animation-".concat(index);
      var samplers = animation.samplers.map(function (_ref2) {
        var input = _ref2.input,
            _ref2$interpolation = _ref2.interpolation,
            interpolation = _ref2$interpolation === void 0 ? 'LINEAR' : _ref2$interpolation,
            output = _ref2.output;
        return {
          input: accessorToJsArray(gltf.accessors[input]),
          interpolation: interpolation,
          output: accessorToJsArray(gltf.accessors[output])
        };
      });
      var channels = animation.channels.map(function (_ref3) {
        var sampler = _ref3.sampler,
            target = _ref3.target;
        return {
          sampler: samplers[sampler],
          target: gltf.nodes[target.node],
          path: target.path
        };
      });
      return new GLTFAnimation({
        name: name,
        channels: channels
      });
    });
  }

  _createClass(GLTFAnimator, [{
    key: "animate",
    value: function animate(timeMs) {
      this.animations.forEach(function (animation) {
        return animation.animate(timeMs);
      });
    }
  }, {
    key: "getAnimations",
    value: function getAnimations() {
      return this.animations;
    }
  }]);

  return GLTFAnimator;
}();

export { GLTFAnimator as default };
//# sourceMappingURL=gltf-animator.js.map