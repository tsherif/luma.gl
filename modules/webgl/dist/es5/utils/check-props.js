"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkProps = checkProps;

var _log = _interopRequireDefault(require("./log"));

function checkProps(className, props, propChecks) {
  var _propChecks$removedPr = propChecks.removedProps,
      removedProps = _propChecks$removedPr === void 0 ? {} : _propChecks$removedPr,
      _propChecks$deprecate = propChecks.deprecatedProps,
      deprecatedProps = _propChecks$deprecate === void 0 ? {} : _propChecks$deprecate,
      _propChecks$replacedP = propChecks.replacedProps,
      replacedProps = _propChecks$replacedP === void 0 ? {} : _propChecks$replacedP;

  for (var propName in removedProps) {
    if (propName in props) {
      var replacementProp = removedProps[propName];
      var replacement = replacementProp ? "".concat(className, ".").concat(removedProps[propName]) : 'N/A';

      _log["default"].removed("".concat(className, ".").concat(propName), replacement)();
    }
  }

  for (var _propName in deprecatedProps) {
    if (_propName in props) {
      var _replacementProp = deprecatedProps[_propName];

      _log["default"].deprecated("".concat(className, ".").concat(_propName), "".concat(className, ".").concat(_replacementProp))();
    }
  }

  var newProps = null;

  for (var _propName2 in replacedProps) {
    if (_propName2 in props) {
      var _replacementProp2 = replacedProps[_propName2];

      _log["default"].deprecated("".concat(className, ".").concat(_propName2), "".concat(className, ".").concat(_replacementProp2))();

      newProps = newProps || Object.assign({}, props);
      newProps[_replacementProp2] = props[_propName2];
      delete newProps[_propName2];
    }
  }

  return newProps || props;
}
//# sourceMappingURL=check-props.js.map