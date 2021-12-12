import React from 'react';
import { Box } from '@chakra-ui/react';

import Navbar from '../Navbar';


function BaseLayout({ children }) {
  return (
    <Box
      width="100vw"
      overflow="none"
      h="100vh"
      boxSizing="border-box"
      position="absolute"
      >
      <Navbar />

      {children}
    </Box>
  );
}

export default BaseLayout;
