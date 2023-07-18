'use client';

import React from 'react';
import {
  createClient,
  Provider,
  subscriptionExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

interface IUrqlProvider {
  children: React.ReactNode;
}

const wsClinet = createWSClient({
  url: 'ws://localhost:4000/graphql',
});

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: (operation: any) => ({
        subscribe: (sink: any) => ({
          unsubscribe: wsClinet.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});

function UrqlProvider({ children }: IUrqlProvider) {
  return <Provider value={client}>{children}</Provider>;
}

export default UrqlProvider;
