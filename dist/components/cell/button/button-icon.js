"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlloyButtonIcon;
var _react = _interopRequireDefault(require("react"));
var _icon = _interopRequireDefault(require("../icon/icon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AlloyButtonIcon(props) {
  var handleClick = function handleClick() {
    props.onClick(props.buttonIcon.name);
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(props.buttonIcon.className, " ").concat(props.buttonIcon.active),
    type: props.buttonIcon.type,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: props.buttonIcon.icon
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "px-2"
  }, props.buttonIcon.name));
}