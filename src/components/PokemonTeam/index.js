import React from 'react';
import {
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

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
      // height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDir="column"
      maxWidth="none"
      p={3}
    >
      <Text fontSize="1.4rem">My Team</Text>
      <SimpleGrid
        // width="100%"
        // alignItems="center"
        // justifyContent="flex-start"
        // mb="1rem"
        // flexDirection="column"
        columns={2}
        spacing="5"
      >
        {pokemonTeam.length !== 0 &&
          pokemonTeam.map((member, index) => (
            <Box
              key={index}
              p={[4]}
              my="1rem"
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
              <Image height="100px" width="100px" src={member.imgUrl} alt="name" />
              <Text>{member.name}</Text>
            </Box>
          ))}
      </SimpleGrid>
      <Flex alignItems="flex-end" justifyContent="flex-end" w="100%" mt="2rem">
        <Button backgroundColor="red.200" onClick={handleClearPokemonTeam}>
          Clear Team
        </Button>
      </Flex>
    </Container>
  );
}

export default PokemonTeam;
