import React from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: #dd8749;
  color: white;
  padding: 1rem;
`;

function Navbar(pokeType) {
  const [bgColor, setBgColor] = React.useState('');

  React.useEffect(() => {
    console.log(pokeType);
    if (pokeType !== undefined) {
      switch (pokeType) {
        case 'Bug':
          setBgColor('#');
          break;
        default:
          setBgColor('#');
      }
    }
  }, [pokeType]);
  return (
    <NavbarWrapper background={bgColor}>
      <Link to="/">Home</Link>
      <Link to="/find-pokemon">Find Pokémon!</Link>
      {/* <Link>About Me(?)</Link> */}
    </NavbarWrapper>
  );
}

export default Navbar;
