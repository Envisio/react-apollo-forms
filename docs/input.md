---
id: input
title: Input
---

# Props

- `mutation {Object}`: a mutation gql object
- `defaultValue {Any}`: the value passed to input control
- `variables {Object}`: for gql variables (don't need the top level `variables` key)
- `valuePath {String}`: point to the variables for changing value inside
- `mutateEvent {String}`: e.g. `blur`/`change`, for indicate which event your want to fire the mutation
