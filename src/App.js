import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import PokemonList from './components/PokemonList';
import { css } from '@emotion/react';

const wrapper = css`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  return (
    <div css={wrapper}>
      <PokemonList />
    </div>
  );
}

export default App;
