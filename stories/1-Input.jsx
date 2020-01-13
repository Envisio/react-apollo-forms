import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from '@apollo/client';
import { loader } from 'graphql.macro';
import { Input } from '../src';

export default { title: 'Input' };

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {
    Mutation: {
      setText: (_, variables, { cache: c }) => {
        c.writeData({ data: variables });
      },
    },
  },
});

cache.writeData({ data: { value: 'Barry' } });

const Page = () => {
  const {
    data,
    loading,
  } = useQuery(loader('./graphqls/getText.gql'));

  if (loading) {
    return '';
  }

  return (
    <Input
      mutation={loader('./graphqls/setText.gql')}
      defaultValue={data.value}
      valuePath="value"
    />
  );
};

export const Text = () => (
  <ApolloProvider client={client}>
    <Page />
  </ApolloProvider>
);
