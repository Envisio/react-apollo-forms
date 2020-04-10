# react-apollo-forms

## Basic
```
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-apollo-forms';

import mutation from './update.gql';

export default function HeroName() {
  const name = 'Barry Allen';

  return (
    <Input
      mutation={mutation}
      value={name}
      variables={{ id: 1 }}
      valuePath="name"
      mutateEvent="blur"
    />
  );
}
```
## Props
| Prop | Type  | Required | Default | Description |
| :--- | :--- | :---: | :--- | :--- |
| `mutation` | Object | True |  | The mutation gql object |
| `value` | String &#124; Number &#124; Boolean &#124; Object &#124; Array | False | '' | The default value passed to input value |
| `variables` | Object | False | {} | For gql variables without the top level `variables` key |
| `valuePath` | String | False | '' | The path of variables which need to mutate |
| `mutateEvent` | String | True | 'change' | It supports all the DOM even types, and specifies the condition of firing the mutation, e.g. `blur`, `change`, `mouseover`, etc. |
| `wait` | Number | False | 0 | Set debounce time in millionseconds |
| `pattern` | String | False | undefined | Passing regexp (same like html `pattern` attribute), if the value is invalid it will stop the mutate event |
