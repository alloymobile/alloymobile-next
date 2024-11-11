"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlloyIconLink;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _icon = _interopRequireDefault(require("../icon/icon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AlloyIconLink(props) {
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: props.iconLink.href,
    className: "".concat(props.iconLink.className, " ").concat(props.iconLink.active)
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: props.iconLink.icon
  }));
}