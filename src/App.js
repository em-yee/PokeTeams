import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import PokemonList from './components/PokemonList';
import { css } from '@emotion/react';
import { Container } from '@chakra-ui/react';

const wrapper = css`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  return (
    <ChakraProvider>
      <Container
        css={wrapper}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <PokemonList />
      </Container>
    </ChakraProvider>
  );
}

export default App;
