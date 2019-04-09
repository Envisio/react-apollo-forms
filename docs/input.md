---
id: input
title: Input
---

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