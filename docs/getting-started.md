---
id: getting-started
title: Getting Started
---

# Installation

```
npm i react-apollo-forms
```

# Usage

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