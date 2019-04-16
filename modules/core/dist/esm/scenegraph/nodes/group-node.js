import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Matrix4 } from 'math.gl';
import { log, assert } from '../../utils';
import ScenegraphNode from './scenegraph-node';

var GroupNode = function (_ScenegraphNode) {
  _inherits(GroupNode, _ScenegraphNode);

  function GroupNode() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GroupNode);

    props = Array.isArray(props) ? {
      children: props
    } : props;
    var _props = props,
        _props$children = _props.children,
        children = _props$children === void 0 ? [] : _props$children;
    children.every(function (child) {
      return assert(child instanceof ScenegraphNode);
    });
    _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupNode).call(this, props));
    _this.children = children;
    return _this;
  }

  _createClass(GroupNode, [{
    key: "add",
    value: function add() {
      for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
      }

      for (var _i = 0, _children = children; _i < _children.length; _i++) {
        var child = _children[_i];

        if (Array.isArray(child)) {
          this.add.apply(this, _toConsumableArray(child));
        } else {
          this.children.push(child);
        }
      }

      return this;
    }
  }, {
    key: "remove",
    value: function remove(child) {
      var children = this.children;
      var indexOf = children.indexOf(child);

      if (indexOf > -1) {
        children.splice(indexOf, 1);
      }

      return this;
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.children = [];
      return this;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.children.forEach(function (child) {
        return child["delete"]();
      });
      this.removeAll();

      _get(_getPrototypeOf(GroupNode.prototype), "delete", this).call(this);
    }
  }, {
    key: "traverse",
    value: function traverse(visitor) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$worldMatrix = _ref.worldMatrix,
          worldMatrix = _ref$worldMatrix === void 0 ? new Matrix4() : _ref$worldMatrix;

      var modelMatrix = new Matrix4(worldMatrix).multiplyRight(this.matrix);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          if (child instanceof GroupNode) {
            child.traverse(visitor, {
              worldMatrix: modelMatrix
            });
          } else {
            visitor(child, {
              worldMatrix: modelMatrix
            });
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
    }
  }, {
    key: "traverseReverse",
    value: function traverseReverse(visitor, opts) {
      log.warn('traverseReverse is not reverse')();
      return this.traverse(visitor, opts);
    }
  }]);

  return GroupNode;
}(ScenegraphNode);

export { GroupNode as default };
//# sourceMappingURL=group-node.js.map