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
      setText: (_, variables, { cache: clientCache }) => {
        clientCache.writeData({ data: variables });
      },
    },
  },
});

cache.writeData({ data: { name: 'Barry Allen' } });

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
      value={data.name}
      valuePath="name"
      style={{
        display: 'block',
        fontSize: '64px',
        borderRadius: '10px',
        border: 'solid 1px grey',
      }}
    />
  );
};

const StateLabel = () => {
  const {
    data,
    loading,
  } = useQuery(loader('./graphqls/getText.gql'));

  if (loading) {
    return '';
  }

  return (
    <label
      style={{
        display: 'block',
        fontFamily: 'Monaco, Ubuntu, Courier',
      }}
    >
      {JSON.stringify(data)}
    </label>
  );
};

export const Text = () => (
  <ApolloProvider client={client}>
    <Page />
    <StateLabel />
  </ApolloProvider>
);
