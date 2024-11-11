"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlloyIcon;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AlloyIcon(props) {
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: props.icon.className
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: props.icon.name
  }));
}