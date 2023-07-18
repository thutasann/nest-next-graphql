'use client';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

interface IChakaraProvider {
  children: React.ReactNode;
}

function CustomChakraProvider({ children }: IChakaraProvider) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default CustomChakraProvider;
