'use client';

import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import React from 'react';

interface IChakaraProvider {
  children: React.ReactNode;
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Set 'dark' as the default color mode
  },
});

function CustomChakraProvider({ children }: IChakaraProvider) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}

export default CustomChakraProvider;
