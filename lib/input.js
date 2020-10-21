"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;

var _react = _interopRequireWildcard(require("react"));

var _client = require("@apollo/client");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function Input(_ref) {
  var mutation = _ref.mutation,
      variables = _ref.variables,
      valuePath = _ref.valuePath,
      formatter = _ref.formatter,
      mutateEvent = _ref.mutateEvent,
      pattern = _ref.pattern,
      wait = _ref.wait,
      type = _ref.type,
      defaultValue = _ref.value,
      props = _objectWithoutProperties(_ref, ["mutation", "variables", "valuePath", "formatter", "mutateEvent", "pattern", "wait", "type", "value"]);

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useMutation = (0, _client.useMutation)(mutation),
      _useMutation2 = _slicedToArray(_useMutation, 1),
      mutate = _useMutation2[0];

  var updater = function updater(targetValue) {
    mutate({
      variables: formatter({
        variables: variables,
        valuePath: valuePath,
        value: targetValue
      })
    });
  };

  var debouncer = (0, _lodash.debounce)(updater, wait);

  var eventProps = _defineProperty({}, "on".concat((0, _lodash.capitalize)(mutateEvent)), function on(_ref2) {
    var targetValue = _ref2.target.value;
    setValue(targetValue);

    if (pattern) {
      var regexp = new RegExp(pattern);

      if (targetValue.match(regexp)) {
        if (wait) {
          debouncer(targetValue);
        } else {
          updater(targetValue);
        }
      } else {// onInvalid
      }
    } else if (wait) {
      debouncer(targetValue);
    } else {
      updater(targetValue);
    }
  });

  (0, _react.useEffect)(function () {
    setValue(defaultValue);
  }, [defaultValue]);
  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: type,
    value: value
  }, props, eventProps));
}

Input.propTypes = {
  mutation: _propTypes["default"].object.isRequired,
  variables: _propTypes["default"].object,
  update: _propTypes["default"].func,
  valuePath: _propTypes["default"].string,
  formatter: _propTypes["default"].func,
  mutateEvent: _propTypes["default"].string,
  pattern: _propTypes["default"].string,
  wait: _propTypes["default"].number,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object, _propTypes["default"].array]),
  type: _propTypes["default"].string
};
Input.defaultProps = {
  variables: {
    variables: {}
  },
  formatter: function formatter(_ref3) {
    var variables = _ref3.variables,
        valuePath = _ref3.valuePath,
        value = _ref3.value;
    return (0, _lodash.set)(variables, valuePath, value);
  },
  valuePath: '',
  update: null,
  pattern: undefined,
  wait: 0,
  value: '',
  type: undefined,
  mutateEvent: 'change'
};