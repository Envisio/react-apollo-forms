import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

export default function MutateButton({
  mutation,
  children,
  variables,
}) {
  return (
    <Mutation mutation={mutation}>
      {action => (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            action({ variables });
          }}
        >
          {children}
        </button>
      )}
    </Mutation>
  );
}

MutateButton.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object,
  children: PropTypes.node,
};

MutateButton.defaultProps = {
  children: null,
  variables: {
    variables: {},
  },
};
