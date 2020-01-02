"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactApollo = require("react-apollo");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateHandler", function (mutate, value) {
      var _this$props = _this.props,
          variablesFormatter = _this$props.variablesFormatter,
          variables = _this$props.variables,
          valuePath = _this$props.valuePath;
      mutate({
        variables: variablesFormatter({
          variables: variables,
          valuePath: valuePath,
          value: value
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "debounceUpdateHandler", (0, _lodash.debounce)(function (mutate) {
      var _this$props2 = _this.props,
          variablesFormatter = _this$props2.variablesFormatter,
          variables = _this$props2.variables,
          valuePath = _this$props2.valuePath;
      var value = _this.state.value;
      mutate({
        variables: variablesFormatter({
          variables: variables,
          valuePath: valuePath,
          value: value
        })
      });
    }, _this.props.wait));

    var defaultValue = _this.props.defaultValue;
    _this.state = {
      value: defaultValue
    };
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          mutation = _this$props3.mutation,
          variables = _this$props3.variables,
          valuePath = _this$props3.valuePath,
          variablesFormatter = _this$props3.variablesFormatter,
          mutateEvent = _this$props3.mutateEvent,
          pattern = _this$props3.pattern,
          debouncable = _this$props3.debouncable,
          wait = _this$props3.wait,
          type = _this$props3.type,
          props = _objectWithoutProperties(_this$props3, ["mutation", "variables", "valuePath", "variablesFormatter", "mutateEvent", "pattern", "debouncable", "wait", "type"]);

      return _react["default"].createElement(_reactApollo.Mutation, {
        mutation: mutation
      }, function (mutate) {
        var eventProps = _defineProperty({}, "on".concat((0, _lodash.capitalize)(mutateEvent)), function on(_ref) {
          var value = _ref.target.value;

          if (pattern && (0, _lodash.gt)((0, _lodash.size)(pattern), 0)) {
            var regexp = new RegExp(pattern);

            if (value.match(regexp)) {
              if (debouncable) {
                _this2.setState({
                  value: value
                });

                _this2.debounceUpdateHandler(mutate);
              } else {
                _this2.updateHandler(mutate, value);
              }
            } else {// onInvalid
            }
          } else {
            if (debouncable) {
              _this2.setState({
                value: value
              });

              _this2.debounceUpdateHandler(mutate);
            } else {
              _this2.updateHandler(mutate, value);
            }
          }
        });

        return _react["default"].createElement("input", _extends({
          type: type
        }, props, eventProps));
      });
    }
  }]);

  return Input;
}(_react.Component);

exports["default"] = Input;

_defineProperty(Input, "propTypes", {
  mutation: _propTypes["default"].object.isRequired,
  variables: _propTypes["default"].object,
  update: _propTypes["default"].func,
  valuePath: _propTypes["default"].string,
  variablesFormatter: _propTypes["default"].func,
  mutateEvent: _propTypes["default"].string.isRequired,
  pattern: _propTypes["default"].string,
  debouncable: _propTypes["default"].bool,
  wait: _propTypes["default"].number,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object, _propTypes["default"].array]),
  type: _propTypes["default"].string
});

_defineProperty(Input, "defaultProps", {
  variables: {
    variables: {}
  },
  variablesFormatter: function variablesFormatter(_ref2) {
    var variables = _ref2.variables,
        valuePath = _ref2.valuePath,
        value = _ref2.value;
    return (0, _lodash.set)(variables, valuePath, value);
  },
  valuePath: '',
  update: null,
  pattern: undefined,
  debouncable: false,
  wait: 0,
  defaultValue: '',
  type: undefined
});