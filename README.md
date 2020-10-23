# react-apollo-forms

## `<Button>`
```
import React from 'react';
import { Button } from 'react-apollo-forms';
import mutation from './update.gql';

export const SaveButton = () => (
  <Button
    mutation={mutation}
    variables={{
      name: 'Barry Allen',
    }}
  >
    Change Name
  </Buttom>
);
```

## `<Input>`
```
import React from 'react';
import { Input } from 'react-apollo-forms';
import mutation from './update.gql';

export const UserInput = () => (
  <Input
    type="text"
    mutation={mutation}
    value="Clark Kent"
    onChange={({
      target: {
        value: name,
      },
    }, mutate) => mutate({
      variables: {
        name,
      },
    })}
  />
);
```

## `<Textarea>`
```
import React from 'react';
import { Textarea } from 'react-apollo-forms';
import mutation from './update.gql';

export const DescriptionInput = () => (
  <Textarea
    type="text"
    mutation={mutation}
    value="Bruce Wayne"
    onChange={({
      target: {
        value: description,
      },
    }, mutate) => mutate({
      variables: {
        description,
      },
    })}
  />
);
```

## `<Select>`
```
import React from 'react';
import { Select } from 'react-apollo-forms';
import mutation from './update.gql';

export const HeroPicker = () => (
  <Select
    type="text"
    mutation={mutation}
    value={hero} // Value comes from query results for dynamic change.
    onChange={({
      target: {
        value: hero,
      },
    }, mutate) => mutate({
      variables: {
        hero,
      },
    })}
  >
    <option value="bat-man">Bruce Wayne</option>
    <option value="super-man">Clark Kent</option>
    <option value="flash">Barry Allen</option>
  </Select>
);
```

### Props
| Prop | Type  | Required | Default | Description |
| :--- | :--- | :---: | :--- | :--- |
`mutation` | `DocumentNode` | Yes | | A GraphQL mutation document parsed into an AST by graphql-tag. Optional for the useMutation Hook since the mutation can be passed in as the first parameter to the Hook. Required for the Mutation component.
`variables` | `{ [key: string]: any }` | | `{}` | An object containing all of the variables your mutation needs to execute
`update` | `(cache: DataProxy, mutationResult: FetchResult)` | | `undefined` | A function used to update the cache after a mutation occurs
`ignoreResults` | `boolean` | | `false` | If true, the returned data property will not update with the mutation result.
`optimisticResponse` | `Object` | | `undefined` | Provide a mutation response before the result comes back from the server
`refetchQueries` | `Array<string|{ query: DocumentNode, variables?: TVariables}>|((mutationResult: FetchResult) => Array<string|{ query: DocumentNode, variables?: TVariables}>`) | | `undefined` | An array or function that allows you to specify which queries you want to refetch after a mutation has occurred. Array values can either be queries (with optional variables) or just the string names of queries to be refeteched.
`awaitRefetchQueries` | `boolean` | | `false` | Queries refetched as part of refetchQueries are handled asynchronously, and are not waited on before the mutation is completed (resolved). Setting this to true will make sure refetched queries are completed before the mutation is considered done. false by default.
`onCompleted` | `(data: TData) => void` | | `undefined` | A callback executed once your mutation successfully completes
`onError` | `(error: ApolloError) => void` | | `undefined` | A callback executed in the event of an error.
| `mutateEvent` | `String` | | `onClick` | It supports all the DOM even types, and specifies the condition of firing the mutation. |

> This component accepts all the options base on [`useMutation`](https://www.apollographql.com/docs/react/data/mutations/#options) hook except `context` and `client`

> This component accepts all the HTML attributes and event handlers passed in.