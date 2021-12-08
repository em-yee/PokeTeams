import React from 'react';
import { Container, Text } from '@chakra-ui/react';

const PokemonItem = ({ name }) => {
  return (
    <Container minWidth="120px">
      <Text>{name}</Text>
    </Container>
  );
};

export default PokemonItem;
