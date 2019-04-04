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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Input(_ref) {
  var mutation = _ref.mutation,
      variables = _ref.variables,
      valuePath = _ref.valuePath,
      variablesFormatter = _ref.variablesFormatter,
      mutateEvent = _ref.mutateEvent,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["mutation", "variables", "valuePath", "variablesFormatter", "mutateEvent", "type"]);

  return _react["default"].createElement(_reactApollo.Mutation, {
    mutation: mutation
  }, function (mutate) {
    var eventProps = _defineProperty({}, "on".concat((0, _lodash.capitalize)(mutateEvent)), function on(_ref2) {
      var newValue = _ref2.target.value;
      mutate({
        variables: variablesFormatter({
          variables: variables,
          valuePath: valuePath,
          value: newValue
        })
      });
    });

    return _react["default"].createElement("input", _extends({}, props, eventProps));
  });
}

Input.propTypes = {
  mutation: _propTypes["default"].object.isRequired,
  variables: _propTypes["default"].object,
  update: _propTypes["default"].func,
  valuePath: _propTypes["default"].string,
  variablesFormatter: _propTypes["default"].func,
  mutateEvent: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string
};
Input.defaultProps = {
  variables: {
    variables: {}
  },
  variablesFormatter: function variablesFormatter(_ref3) {
    var variables = _ref3.variables,
        valuePath = _ref3.valuePath,
        value = _ref3.value;
    return (0, _lodash.set)(variables, valuePath, value);
  },
  valuePath: '',
  update: null,
  type: undefined
};