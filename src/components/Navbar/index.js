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

function Navbar({ pokeType }) {
  const [bgColor, setBgColor] = React.useState('');

  React.useEffect(() => {
    if (pokeType !== '') {
      switch (pokeType) {
        case 'bug':
          setBgColor('#009268');
          break;
        case 'dark':
          setBgColor('#424656');
          break;
        case 'dragon':
          setBgColor('#0090D7');
          break;
        case 'electric':
          setBgColor('#FFCF70');
          break;
        case 'fairy':
          setBgColor('#FF8BC0');
          break;
        case 'fight':
          setBgColor('#680000');
          break;
        case 'fire':
          setBgColor('#FFEACF');
          break;
        case 'flying':
          setBgColor('#526C9D');
          break;
        case 'rock':
          setBgColor('#978C56');
          break;
        case 'psychic':
          setBgColor('#D35D5A');
          break;
        case 'posion':
          setBgColor('#701F89');
          break;
        case 'normal':
          setBgColor('#3C4856');
          break;
        case 'ground':
          setBgColor('#9F4D25');
          break;
        case 'grass':
          setBgColor('#e9f5db');
          break;
        case 'ghost':
          setBgColor('#5A63B5');
          break;
        case 'steel':
          setBgColor('#003F47');
          break;
        case 'water':
          setBgColor('#006CA2');
          break;
        default:
          setBgColor('#d87c47');
      }
    }
  }, [pokeType]);

  React.useEffect(() => {
    console.log(bgColor);
  }, [bgColor]);

  return (
    <NavbarWrapper background={`${bgColor} !important`} color="black !important">
      <Link to="/">Home</Link>
      <Link to="/find-pokemon">Find Pokémon!</Link>
      {/* <Link>About Me(?)</Link> */}
    </NavbarWrapper>
  );
}

export default Navbar;
