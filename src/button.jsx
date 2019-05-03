import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

export default function MutateButton({
  mutation,
  refetchQueries,
  update,
  onCompleted,
  onError,
  ignoreResults,
  children,
  variables,
  onClick,
  awaitRefetchQueries,
  ...props
}) {
  return (
    <Mutation
      mutation={mutation}
      update={update}
      refetchQueries={refetchQueries}
      onCompleted={onCompleted}
      onError={onError}
      ignoreResults={ignoreResults}
      awaitRefetchQueries={awaitRefetchQueries}
    >
      {action => (
        <button
          type="button"
          {...props}
          onClick={(mouseEvent) => {
            action({ variables });
            onClick(mouseEvent);
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
  refetchQueries: PropTypes.array,
  onCompleted: PropTypes.func,
  update: PropTypes.func,
  ignoreResults: PropTypes.bool,
  onError: PropTypes.func,
  onClick: PropTypes.func,
  awaitRefetchQueries: PropTypes.bool,
};

MutateButton.defaultProps = {
  children: null,
  variables: {
    variables: {},
  },
  update: () => { },
  onCompleted: () => { },
  refetchQueries: [],
  ignoreResults: false,
  onError: () => {},
  onClick: () => {},
  awaitRefetchQueries: false,
};
