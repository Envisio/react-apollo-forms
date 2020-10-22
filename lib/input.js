"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _client = require("@apollo/client");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(_ref) {
  var mutation = _ref.mutation,
      variables = _ref.variables,
      update = _ref.update,
      ignoreResults = _ref.ignoreResults,
      optimisticResponse = _ref.optimisticResponse,
      refetchQueries = _ref.refetchQueries,
      awaitRefetchQueries = _ref.awaitRefetchQueries,
      onCompleted = _ref.onCompleted,
      onError = _ref.onError,
      eventType = _ref.eventType,
      props = _objectWithoutProperties(_ref, ["mutation", "variables", "update", "ignoreResults", "optimisticResponse", "refetchQueries", "awaitRefetchQueries", "onCompleted", "onError", "eventType"]);

  var _useMutation = (0, _client.useMutation)(mutation, {
    variables: variables,
    update: update,
    ignoreResults: ignoreResults,
    refetchQueries: refetchQueries,
    onCompleted: onCompleted,
    onError: onError
  }),
      _useMutation2 = _slicedToArray(_useMutation, 1),
      mutate = _useMutation2[0];

  var onMutate = function onMutate() {
    if (props[eventType]) {
      for (var _len = arguments.length, originalEvents = new Array(_len), _key = 0; _key < _len; _key++) {
        originalEvents[_key] = arguments[_key];
      }

      props[eventType].apply(props, originalEvents.concat([mutate]));
    } else {
      mutate();
    }
  };

  return /*#__PURE__*/_react["default"].createElement("input", _extends({}, _defineProperty({}, eventType, onMutate), (0, _lodash.omit)(props, [eventType])));
};

Input.propTypes = {
  mutation: _propTypes["default"].shape({}).isRequired,
  variables: _propTypes["default"].shape({}),
  update: _propTypes["default"].func,
  ignoreResults: _propTypes["default"].bool,
  optimisticResponse: _propTypes["default"].shape({}),
  refetchQueries: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
  awaitRefetchQueries: _propTypes["default"].bool,
  onCompleted: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  eventType: _propTypes["default"].string
};
Input.defaultProps = {
  variables: {},
  update: undefined,
  ignoreResults: false,
  optimisticResponse: undefined,
  refetchQueries: undefined,
  awaitRefetchQueries: false,
  onCompleted: undefined,
  onError: undefined,
  eventType: 'onChange'
};
var _default = Input;
exports["default"] = _default;