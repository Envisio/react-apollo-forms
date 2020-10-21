import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { capitalize, set, debounce } from 'lodash';

export default function Input({
  mutation,
  variables,
  valuePath,
  formatter,
  mutateEvent,
  pattern,
  wait,
  type,
  value: defaultValue,
  ...props
}) {
  const [value, setValue] = useState(defaultValue);
  const [mutate] = useMutation(mutation);
  const updater = (targetValue) => {
    mutate({
      variables: formatter({
        variables,
        valuePath,
        value: targetValue,
      }),
    });
  };
  const debouncer = debounce(updater, wait);
  const eventProps = {
    [`on${capitalize(mutateEvent)}`]: ({ target: { value: targetValue } }) => {
      setValue(targetValue);

      if (pattern) {
        const regexp = new RegExp(pattern);

        if (targetValue.match(regexp)) {
          if (wait) {
            debouncer(targetValue);
          } else {
            updater(targetValue);
          }
        } else {
          // onInvalid
        }
      } else if (wait) {
        debouncer(targetValue);
      } else {
        updater(targetValue);
      }
    },
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <input
      type={type}
      value={value}
      {...props}
      {...eventProps}
    />
  );
}

Input.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object,
  update: PropTypes.func,
  valuePath: PropTypes.string,
  formatter: PropTypes.func,
  mutateEvent: PropTypes.string,
  pattern: PropTypes.string,
  wait: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]),
  type: PropTypes.string,
};

Input.defaultProps = {
  variables: {
    variables: {},
  },
  formatter: ({
    variables,
    valuePath,
    value,
  }) => set(variables, valuePath, value),
  valuePath: '',
  update: null,
  pattern: undefined,
  wait: 0,
  value: '',
  type: undefined,
  mutateEvent: 'change',
};
