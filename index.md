## `<Button>`
```
import React from 'react';
import { Button } from 'react-apollo-forms';
import mutation from './update.gql';

export const SaveButton = () => {
  const variables = {
    variables: {
      name: 'Barry Allen',
    },
  };

  return (
    <Button
      mutation={mutation}
      variables={variables}
    >
      Change Name
    </Buttom>
  );
};
```

## `<Input>`
```
import React from 'react';
import { Input } from 'react-apollo-forms';
import mutation from './update.gql';

export const UserInput = () => {
  const onChange = ({
    target: {
      value: name,
    },
  }, mutate) => mutate({
    variables: {
      name,
    },
  });

  return (
    <Input
      type="text"
      mutation={mutation}
      value="Clark Kent"
      onChange={onChange}
    />
  );
};
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

> This component accepts all the options base on [`useMutation`](https://www.apollographql.com/docs/react/data/mutations/#options) hook except `context` and `client`

> This component accepts all the HTML attributes and event handlers passed in.