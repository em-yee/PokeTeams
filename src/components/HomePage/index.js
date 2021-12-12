import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import background from '../../assets/images/pokemon-bg.png';

function HomePage() {
  return (
    <Box
      width="100vw"
      overflow="none"
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
    >
      <Image src={background} position="absolute" bottom="0" />
      <h1>Home Page!!</h1>
    </Box>
  );
}

export default HomePage;
