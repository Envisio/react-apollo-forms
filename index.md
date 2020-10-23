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

> This component accepts all the options base on [`useMutation`](https://www.apollographql.com/docs/react/data/mutations/#options) hook except `context` and `client`

> This component accepts all the HTML attributes and event handlers passed in.