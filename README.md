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
## Props
| Prop | Type  | Required | Default | Description |
| :--- | :--- | :---: | :--- | :--- |
| `mutation` | Object | True |  | The default value passed to input form |
| `defaultValue` | String &#124; Number &#124; Boolean &#124; Object &#124; Array | False | '' | The default value of argument passed to mutation variable |
| `variables` | Object | False | {} | For gql variables (don't need the top level `variables` key) |
| `valuePath` | String | False | '' | The path of attribute specifies the value for input element |
| `mutateEvent` | String | True |  | It supports all the DOM even types, and specifies the condition of firing the mutation, e.g. `blur`, `change`, `mouseover`, ect |
| `debouncable` | Boolean | False | false |Enable debounce for the `mutateEvent` handler |
| `wait` | Number | False | 0 | Set debounce time in seconds |
| `pattern` | String | False | undefined | Passing regexp (same like html `pattern` attribute), if the value is invalid it will stop the mutate event |
### Mutation Props

those props will pass to the internal `Mutation` component directly
- `mutation` ***required***
- `refetchQueries`
- `update`
- `onCompleted`
- `onError`

### Specific Props

- `children` **Node**

  the children content for `button`, default to `null`

- `variables` **Object**

  same like the props `variables`, but do not need the `variables` highest level wrapped, default to `{}`

