import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { capitalize, set } from 'lodash';

export default function Input({
  mutation,
  variables,
  valuePath,
  variablesFormatter,
  mutateEvent,
  type,
  ...props
}) {
  return (
    <Mutation mutation={mutation}>
      {(mutate) => {
        const eventProps = {
          [`on${capitalize(mutateEvent)}`]: ({
            target: {
              value: newValue,
            },
          }) => {
            mutate({
              variables: variablesFormatter({
                variables,
                valuePath,
                value: newValue,
              }),
            });
          },
        };

        return (
          <input
            {...props}
            {...eventProps}
          />
        );
      }}
    </Mutation>
  );
}

Input.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object,
  update: PropTypes.func,
  valuePath: PropTypes.string,
  variablesFormatter: PropTypes.func,
  mutateEvent: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
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
  type: undefined,
};
