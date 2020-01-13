import React from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';

export default function Button({
  mutation,
  children,
  variables,
  onClick,
  ...props
}) {
  const [action] = useMutation(mutation);
  return (
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
  );
}

Button.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  variables: {
    variables: {},
  },
  onClick: () => { },
};
