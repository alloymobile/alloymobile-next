"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Button(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      padding: '10px 20px',
      fontSize: '16px'
    }
  }, label);
}