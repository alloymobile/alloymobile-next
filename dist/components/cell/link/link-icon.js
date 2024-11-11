"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlloyLinkIcon;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _icon = _interopRequireDefault(require("../icon/icon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AlloyLinkIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: props.linkIcon.href,
    className: "".concat(props.linkIcon.className, " ").concat(props.linkIcon.active)
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: props.linkIcon.icon
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "px-2"
  }, props.linkIcon.name));
}