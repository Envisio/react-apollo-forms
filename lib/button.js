"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MutateButton;

var _react = _interopRequireDefault(require("react"));

var _reactApollo = require("react-apollo");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MutateButton(_ref) {
  var mutation = _ref.mutation,
      refetchQueries = _ref.refetchQueries,
      update = _ref.update,
      onCompleted = _ref.onCompleted,
      onError = _ref.onError,
      ignoreResults = _ref.ignoreResults,
      children = _ref.children,
      variables = _ref.variables,
      _onClick = _ref.onClick,
      awaitRefetchQueries = _ref.awaitRefetchQueries,
      props = _objectWithoutProperties(_ref, ["mutation", "refetchQueries", "update", "onCompleted", "onError", "ignoreResults", "children", "variables", "onClick", "awaitRefetchQueries"]);

  return _react["default"].createElement(_reactApollo.Mutation, {
    mutation: mutation,
    update: update,
    refetchQueries: refetchQueries,
    onCompleted: onCompleted,
    onError: onError,
    ignoreResults: ignoreResults,
    awaitRefetchQueries: awaitRefetchQueries
  }, function (action) {
    return _react["default"].createElement("button", _extends({
      type: "button"
    }, props, {
      onClick: function onClick(mouseEvent) {
        action({
          variables: variables
        });

        _onClick(mouseEvent);
      }
    }), children);
  });
}

MutateButton.propTypes = {
  mutation: _propTypes["default"].object.isRequired,
  variables: _propTypes["default"].object,
  children: _propTypes["default"].node,
  refetchQueries: _propTypes["default"].array,
  onCompleted: _propTypes["default"].func,
  update: _propTypes["default"].func,
  ignoreResults: _propTypes["default"].bool,
  onError: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  awaitRefetchQueries: _propTypes["default"].bool
};
MutateButton.defaultProps = {
  children: null,
  variables: {
    variables: {}
  },
  update: function update() {},
  onCompleted: function onCompleted() {},
  refetchQueries: [],
  ignoreResults: false,
  onError: function onError() {},
  onClick: function onClick() {},
  awaitRefetchQueries: false
};