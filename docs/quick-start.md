---
id: quick-start
title: Quick start
---

# Installation

```
npm i react-apollo-forms
```
Or
```
yarn add react-apollo-forms
```

# Usage

```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-apollo-forms';

import updateMutation from './update.gql';

export default function NameSection() {
  return (
    <Input
      mutation={updateMutation}
      defaultValue="Barry Allen"
      variables={{
        id: 1,
      }}
      valuePath="name"
      mutateEvent="blur"
    />
  );
}
```