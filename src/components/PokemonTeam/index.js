import React from 'react';
import { Box, Button, CloseButton, Container, Flex, Image, Text } from '@chakra-ui/react';

function PokemonTeam({ pokemonTeam, setPokemonTeam }) {
  const handleClearPokemonTeam = (e) => {
    e.preventDefault();
    setPokemonTeam([]);
  };

  React.useEffect(() => {
    console.log(pokemonTeam);
  }, [pokemonTeam]);

  return (
    <Container
      width="100%"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDir="column"
      maxWidth="none"
    >
      <Flex alignItems="flex-start" justifyContent="space-between" w="100%">
        <Text fontSize="1.4rem">My Team</Text>
        <Button backgroundColor="red.200" onClick={handleClearPokemonTeam}>
          Clear Team
        </Button>
      </Flex>
      <Flex width="100%" alignItems="flex-start" justifyContent="center" mb="1rem">
        {pokemonTeam.length !== 0 &&
          pokemonTeam.map((member, index) => (
            <Box
              key={index}
              p={[4]}
              mx="1rem"
              backgroundColor="white"
              borderRadius="md"
              shadow="md"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              pos="relative"
            >
              <CloseButton
                boxSize="0.8em"
                onClick={() => setPokemonTeam(pokemonTeam.filter((pokemon) => pokemon !== member))}
                sx={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  cursor: 'pointer',
                }}
              />
              <Image height="80px" width="80px" src={member.imgUrl} alt="name" />
              <Text>{member.name}</Text>
            </Box>
          ))}
      </Flex>
    </Container>
  );
}

export default PokemonTeam;
