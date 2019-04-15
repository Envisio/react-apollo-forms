import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import {
  capitalize,
  set,
  size,
  gt,
  debounce,
} from 'lodash';

export default class Input extends Component {
  static propTypes = {
    mutation: PropTypes.object.isRequired,
    variables: PropTypes.object,
    update: PropTypes.func,
    valuePath: PropTypes.string,
    variablesFormatter: PropTypes.func,
    mutateEvent: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    debouncable: PropTypes.bool,
    wait: PropTypes.number,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ]),
    type: PropTypes.string,
  }

  static defaultProps = {
    variables: {
      variables: {},
    },
    variablesFormatter: ({
      variables,
      valuePath,
      value,
    }) => set(variables, valuePath, value),
    valuePath: '',
    update: null,
    pattern: undefined,
    debouncable: false,
    wait: 0,
    defaultValue: '',
    type: undefined,
  }

  constructor(props) {
    super(props);

    const { defaultValue } = this.props;

    this.state = { value: defaultValue };
  }

  updateHandler = (mutate, value) => {
    const {
      variablesFormatter,
      variables,
      valuePath,
    } = this.props;

    mutate({
      variables: variablesFormatter({
        variables,
        valuePath,
        value,
      }),
    });
  }

  debounceUpdateHandler = debounce((mutate) => {
    const {
      variablesFormatter,
      variables,
      valuePath,
    } = this.props;
    const { value } = this.state;

    mutate({
      variables: variablesFormatter({
        variables,
        valuePath,
        value,
      }),
    });
  }, this.props.wait)

  render() {
    const {
      mutation,
      variables,
      valuePath,
      variablesFormatter,
      mutateEvent,
      pattern,
      debouncable,
      wait,
      type,
      ...props
    } = this.props;

    return (
      <Mutation mutation={mutation}>
        {(mutate) => {
          const eventProps = {
            [`on${capitalize(mutateEvent)}`]: ({
              target: { value },
            }) => {
              if (pattern && gt(size(pattern), 0)) {
                const regexp = new RegExp(pattern);

                if (value.match(regexp)) {
                  if (debouncable) {
                    this.setState({ value });
                    this.debounceUpdateHandler(mutate);
                  } else {
                    this.updateHandler(mutate, value);
                  }
                } else {
                  // onInvalid
                }
              } else {
                if (debouncable) {
                  this.setState({ value });
                  this.debounceUpdateHandler(mutate);
                } else {
                  this.updateHandler(mutate, value);
                }
              }
            },
          };

          return (
            <input
              type={type}
              {...props}
              {...eventProps}
            />
          );
        }}
      </Mutation>
    );
  }
}
