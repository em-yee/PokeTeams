import React from 'react';
import { Container, Text } from '@chakra-ui/react';

const PokemonItem = ({ name, pokemonTeam, setPokemonTeam }) => {
  const handleAddToPokemonTeam = () => {
    setPokemonTeam([...pokemonTeam, name]);
  }

  return (
    <Container minWidth="120px" onClick={handleAddToPokemonTeam}>
      <Text>{name}</Text>
    </Container>
  );
};

export default PokemonItem;
