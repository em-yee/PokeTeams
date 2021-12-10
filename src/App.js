import React from 'react';
import PokemonList from './components/PokemonList';
import styled from '@emotion/styled';
import { Container } from '@chakra-ui/react';

const AppWrapper = styled(Container)`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  return (
    <AppWrapper maxW="1200px">
      <PokemonList />
    </AppWrapper>
  );
}

export default App;
