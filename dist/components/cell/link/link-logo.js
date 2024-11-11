"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlloyLinkLogo;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AlloyLinkLogo(props) {
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: props.linkLogo.href,
    className: "".concat(props.linkLogo.className, " ").concat(props.linkLogo.active)
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.linkLogo.logo.src,
    alt: props.linkLogo.logo.alt,
    width: props.linkLogo.logo.width,
    height: props.linkLogo.logo.height
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "px-2"
  }, props.linkLogo.name));
}