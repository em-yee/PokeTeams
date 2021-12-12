import React from 'react';
import { Box } from '@chakra-ui/react';

import Navbar from '../Navbar';


function BaseLayout({ children }) {
  return (
    <Box w="100%">
      <Navbar />

      {children}
    </Box>
  );
}

export default BaseLayout;
