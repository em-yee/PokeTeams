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
          setBgColor('#009268');
          break;
        case 'Dark':
          setBgColor('#424656');
          break;
        case 'Dragon':
          setBgColor('#0090D7');
          break;
        case 'Electric':
          setBgColor('#FFCF70');
          break;
        case 'Fairy':
          setBgColor('#FF8BC0');
          break;
        case 'Fight':
          setBgColor('#680000');
          break;
        case 'Fire':
          setBgColor('#FFEACF');
          break;
        case 'Flying':
          setBgColor('#526C9D');
          break;
        case 'Rock':
          setBgColor('#978C56');
          break;
        case 'Psychic':
          setBgColor('#D35D5A');
          break;
        case 'Posion':
          setBgColor('#701F89');
          break;
        case 'Normal':
          setBgColor('#3C4856');
          break;
        case 'Ground':
          setBgColor('#9F4D25');
          break;
        case 'Grass':
          setBgColor('#e9f5db');
          break;
        case 'Ghost':
          setBgColor('#5A63B5');
          break;
        case 'Steel':
          setBgColor('#003F47');
          break;
        case 'Water':
          setBgColor('#006CA2');
          break;
        default:
          setBgColor('#d87c47');
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
