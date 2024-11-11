"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlloyLink;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AlloyLink(props) {
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: props.link.href,
    className: "".concat(props.link.className, " ").concat(props.link.active)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "px-2"
  }, props.link.name));
}