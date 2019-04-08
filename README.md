# react-apollo-forms

## Input (type="text")

### APIs

#### Props

- `mutation {Object}`: A mutation gql object
- `defaultValue {Any}`: The value passed to input control
- `variables {Object}`: For gql variables (don't need the top level `variables` key)
- `valuePath {String}`: Point to the variables for changing value inside
- `mutateEvent {String}`: Ex. `blur`/`change`, for indicate which event your want to fire the mutation

## Basic
```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-apollo-forms';

import updateMutation from './update.gql';

export default class ColumnDetail extends Component {
  const name = 'Barry Allen';

  render() {
    return (
      <Input
        mutation={updateMutation}
        defaultValue={name}
        variables={{
          id: 1,
        }}
        valuePath="name"
        mutateEvent="blur"
      />
    );
  }
}
```