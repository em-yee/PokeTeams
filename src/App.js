import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import HomePage from './components/HomePage';
import PokemonInfo from './components/PokemonInfo/index';

const AppWrapper = styled(Box)`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-pokemon" element={<PokemonList />} />
        <Route path="/pokemon-info/:pokemon" element={<PokemonInfo />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
