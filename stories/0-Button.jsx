import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from '@apollo/client';
import { loader } from 'graphql.macro';
import { Button } from '../src';

export default { title: 'Button' };

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {
    Mutation: {
      toggleStatus: (_, variables, { cache: c }) => {
        const { status } = c.readQuery({ query: loader('./graphqls/getStatus.gql') });
        c.writeData({ data: { status: !status } });
      },
    },
  },
});

cache.writeData({ data: { status: true } });

const Content = () => {
  const {
    data,
    loading,
  } = useQuery(loader('./graphqls/getStatus.gql'));

  if (loading) {
    return '';
  }

  return data.status ? '🈶' : '🈚️';
};
const StateLabel = () => {
  const {
    data,
    loading,
  } = useQuery(loader('./graphqls/getStatus.gql'));

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

export const basic = () => (
  <ApolloProvider client={client}>
    <Button
      mutation={loader('./graphqls/toggleStatus.gql')}
      style={{
        fontSize: '128px',
        backgroundColor: 'transparent',
        borderStyle: 'none',
        cursor: 'pointer',
      }}
    >
      <Content />
    </Button>
    <StateLabel />
  </ApolloProvider>
);
