"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MutateButton;

var _react = _interopRequireDefault(require("react"));

var _reactApollo = require("react-apollo");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MutateButton(_ref) {
  var mutation = _ref.mutation,
      children = _ref.children,
      variables = _ref.variables;
  return _react["default"].createElement(_reactApollo.Mutation, {
    mutation: mutation
  }, function (action) {
    return _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        e.preventDefault();
        action({
          variables: variables
        });
      }
    }, children);
  });
}

MutateButton.propTypes = {
  mutation: _propTypes["default"].object.isRequired,
  variables: _propTypes["default"].object,
  children: _propTypes["default"].node
};
MutateButton.defaultProps = {
  children: null,
  variables: {
    variables: {}
  }
};