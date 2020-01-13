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

cache.writeData({ data: { status: true } })

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

export const basic = () => (
  <ApolloProvider client={client}>
    <Button mutation={loader('./graphqls/toggleStatus.gql')}>
      <Content />
    </Button>
  </ApolloProvider>
);
