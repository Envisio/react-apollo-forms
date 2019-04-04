"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactApollo = require("react-apollo");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Input(_ref) {
  var mutation = _ref.mutation,
      variables = _ref.variables,
      valuePath = _ref.valuePath,
      value = _ref.value;
  return _react["default"].createElement(_reactApollo.Mutation, {
    mutation: mutation
  }, function (action) {
    return _react["default"].createElement("input", {
      value: value,
      onChange: function onChange(_ref2) {
        var newValue = _ref2.target.value;
        action({
          variables: (0, _lodash.set)(variables, valuePath, newValue)
        });
      }
    });
  });
}

Input.propTypes = {
  mutation: _propTypes["default"].object.isRequired,
  variables: _propTypes["default"].object,
  valuePath: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string
};
Input.defaultProps = {
  variables: {
    variables: {}
  },
  value: ''
};
//# sourceMappingURL=input.js.map