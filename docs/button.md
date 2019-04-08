---
id: button
title: Button
---

## Props

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

