import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Button } from '@chakra-ui/react';
import background from '../../assets/images/pokemon-bg.png';

function HomePage() {
  return (
    <Box
      width="100vw"
      h="100vh"
      boxSizing="border-box"
      d="flex"
      position="absolute"
      top="0"
      left="0"
      alignItems="center"
      justifyContent="center"
      background="#ffdfa0"
      zIndex="1"
      flexDirection="column"
    >
      <Image src={background} position="absolute" bottom="0" pb={[0, 1, 3]} />
      <h1 style={{ fontSize: '2rem' }}>Welcome to PokéTeams!</h1>
      <br />
      <Button
        background="#ffdfa0"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="#ffca59"
        _hover={{ bg: '#ffca59' }}
      >
        <Link to="/find-pokemon">Create your team here!</Link>
      </Button>
    </Box>
  );
}

export default HomePage;
