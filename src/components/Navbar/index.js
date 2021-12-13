import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
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

function Navbar({ pokeType, setDrawerOpen }) {
  const [bgColor, setBgColor] = React.useState('');
  const [whiteText, setWhiteText] = React.useState(true);

  React.useEffect(() => {
    if (pokeType !== '') {
      switch (pokeType) {
        case 'bug':
          setBgColor('#009268');
          setWhiteText(false);
          break;
        case 'dark':
          setBgColor('#424656');
          setWhiteText(true);
          break;
        case 'dragon':
          setBgColor('#0090D7');
          setWhiteText(false);
          break;
        case 'electric':
          setBgColor('#FFCF70');
          setWhiteText(false);
          break;
        case 'fairy':
          setBgColor('#FF8BC0');
          setWhiteText(false);
          break;
        case 'fight':
          setBgColor('#680000');
          setWhiteText(true);
          break;
        case 'fire':
          setBgColor('#CD7626');
          setWhiteText(false);
          break;
        case 'flying':
          setBgColor('#526C9D');
          setWhiteText(true);
          break;
        case 'rock':
          setBgColor('#978C56');
          setWhiteText(false);
          break;
        case 'psychic':
          setBgColor('#D35D5A');
          setWhiteText(false);
          break;
        case 'poison':
          setBgColor('#701F89');
          setWhiteText(true);
          break;
        case 'normal':
          setBgColor('#3C4856');
          setWhiteText(true);
          break;
        case 'ground':
          setBgColor('#9F4D25');
          setWhiteText(true);
          break;
        case 'grass':
          setBgColor('#4E7950');
          setWhiteText(false);
          break;
        case 'ghost':
          setBgColor('#5A63B5');
          setWhiteText(true);
          break;
        case 'steel':
          setBgColor('#003F47');
          setWhiteText(true);
          break;
        case 'water':
          setBgColor('#006CA2');
          setWhiteText(true);
          break;
        default:
          setBgColor('#d87c47');
          setWhiteText(false);
      }
    }
  }, [pokeType]);

  React.useEffect(() => {
    console.log(bgColor);
  }, [bgColor]);

  return (
    <NavbarWrapper background={`${bgColor} !important`} color={whiteText ? 'white' : 'black'}>
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
        Home
      </Link>
      <Link to="/find-pokemon" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
        Find Pokémon!
      </Link>
      {/* <Link>About Me(?)</Link> */}
    </NavbarWrapper>
  );
}

export default Navbar;
