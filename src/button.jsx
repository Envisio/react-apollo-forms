import React from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { omit } from 'lodash';

const Button = ({
  children,
  // Mutation props
  mutation,
  variables,
  update,
  ignoreResults,
  optimisticResponse,
  refetchQueries,
  awaitRefetchQueries,
  onCompleted,
  onError,
  // Event handler
  eventType,
  // HTML attributes
  ...props
}) => {
  const [mutate] = useMutation(mutation, {
    variables,
    update,
    ignoreResults,
    refetchQueries,
    onCompleted,
    onError,
  });
  const onMutate = (...originalEvents) => {
    if (props[eventType]) {
      props[eventType](...originalEvents, mutate);
    } else {
      mutate();
    }
  };

  return (
    <button
      type="button"
      {...{ [eventType]: onMutate }}
      {...omit(props, [eventType])}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  mutation: PropTypes.shape({ }).isRequired,
  variables: PropTypes.shape({ }),
  update: PropTypes.func,
  ignoreResults: PropTypes.bool,
  optimisticResponse: PropTypes.shape({ }),
  refetchQueries: PropTypes.arrayOf(PropTypes.shape({})),
  awaitRefetchQueries: PropTypes.bool,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  children: PropTypes.node,
  eventType: PropTypes.string,
};
Button.defaultProps = {
  children: null,
  variables: {},
  update: undefined,
  ignoreResults: false,
  optimisticResponse: undefined,
  refetchQueries: undefined,
  awaitRefetchQueries: false,
  onCompleted: undefined,
  onError: undefined,
  eventType: 'onClick',
};

export default Button;
