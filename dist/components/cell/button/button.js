"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AlloyButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AlloyButton(props) {
  var handleClick = function handleClick() {
    props.onClick(props.button.name);
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(props.button.className, " ").concat(props.button.active),
    type: props.button.type,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "px-2"
  }, props.button.name));
}