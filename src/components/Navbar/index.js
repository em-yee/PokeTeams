import React from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  postion: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

function Navbar() {
  return (
    <NavbarWrapper>
      <Link to="/">Home</Link>
      <Link to="/find-pokemon">Find Pokémon!</Link>
      {/* <Link>About Me(?)</Link> */}
    </NavbarWrapper>
  );
}

export default Navbar;
