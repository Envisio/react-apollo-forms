---
id: input
title: Input
---

## Props

- `mutation` **Object**

  a mutation gql object

- `defaultValue` **String | Number | Boolean | Object**

  the value passed to input control

- `variables` **Object**

  for gql variables (don't need the top level `variables` key)
- `valuePath` **String**

  point to the variables for changing value inside
- `mutateEvent` **String**

  e.g. `blur`/`change`, for indicate which event your want to fire the mutation
- `debouncable` **Boolean**

  enable debounce for event handler e.g. `onChange`/`onKeyPress`
- `wait` **Number**

  set debounce time in seconds
- `pattern` **String**

  passing regexp (same like html `pattern` attribute), if the value is invalid it will stop the mutate event