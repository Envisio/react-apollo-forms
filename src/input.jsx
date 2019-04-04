import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { set } from 'lodash';

export default function Input({
  mutation,
  variables,
  valuePath,
  value,
}) {
  return (
    <Mutation mutation={mutation}>
      {action => (
        <input
          value={value}
          onChange={({
            target: {
              value: newValue,
            },
          }) => {
            action({
              variables: set(variables, valuePath, newValue),
            });
          }}
        />
      )}
    </Mutation>
  );
}

Input.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object,
  valuePath: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  variables: {
    variables: {},
  },
  value: '',
};
