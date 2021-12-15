import React from 'react';
import { Image, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Text } from '@chakra-ui/react';
import { FlexWrapper } from '../index.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokemon } from '../../redux/actions/pokemonActions';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { useWindowSize } from '../../hooks';
import * as TypeIcon from '../../assets/icons';
import styled from '@emotion/styled';

const PokemonTypeImage = styled(Image)`
  max-height: 40px;
`;

function PokemonInfo() {
  const { pokemon } = useParams();
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.PokemonReducer);
  const [pokeData, setPokeData] = React.useState({
    exp: 0,
    artwork: '',
    number: 0,
    types: [],
  });
  const [bgColor, setBgColor] = React.useState('');
  const size = useWindowSize();

  //giant switch statement to change between the different icon size depending on size of screen
  const handleFindIconType = (pokemonType) => {
    switch (pokemonType) {
      case 'bug':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.BugSm : TypeIcon.BugLg}
            maxH="40px"
          />
        );
      case 'dark':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.DarkSm : TypeIcon.DarkLg}
            maxH="40px"
          />
        );

      case 'dragon':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.DragonSm : TypeIcon.DragonLg}
            maxH="40px"
          />
        );

      case 'electric':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.ElectricSm : TypeIcon.ElectricLg}
            maxH="40px"
          />
        );

      case 'fairy':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.FairySm : TypeIcon.FairyLg}
            maxH="40px"
          />
        );

      case 'fight':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.FightSm : TypeIcon.FightLg}
            maxH="40px"
          />
        );

      case 'fire':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.FireSm : TypeIcon.FireLg}
            maxH="40px"
          />
        );

      case 'flying':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.FlyingSm : TypeIcon.FlyingLg}
            maxH="40px"
          />
        );

      case 'rock':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.RockSm : TypeIcon.RockLg}
            maxH="40px"
          />
        );

      case 'psychic':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.PsychicSm : TypeIcon.PsychicLg}
            maxH="40px"
          />
        );

      case 'poison':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.PoisonSm : TypeIcon.PoisonLg}
            maxH="40px"
          />
        );

      case 'normal':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.NormalSm : TypeIcon.NormalLg}
            maxH="40px"
          />
        );

      case 'ground':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.GroundSm : TypeIcon.GroundLg}
            maxH="40px"
          />
        );

      case 'grass':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.GrassSm : TypeIcon.GrassLg}
            maxH="40px"
          />
        );

      case 'ghost':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.GhostSm : TypeIcon.GhostLg}
            maxH="40px"
          />
        );

      case 'steel':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.SteelSm : TypeIcon.SteelLg}
            maxH="40px"
          />
        );

      case 'water':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.WaterSm : TypeIcon.WaterLg}
            maxH="40px"
          />
        );

      case 'ice':
        return (
          <PokemonTypeImage
            key={uuidv4()}
            src={size.width < 800 ? TypeIcon.IceSm : TypeIcon.IceLg}
            maxH="40px"
          />
        );

      default:
        return;
    }
  };

  React.useEffect(() => {
    dispatch(FetchPokemon(pokemon));
  }, [dispatch, pokemon]);

  React.useEffect(() => {
    if (pokemonData.data[pokemon] !== undefined) {
      setPokeData({
        exp: pokemonData.data[pokemon].base_experience,
        artwork: pokemonData.data[pokemon].sprites.other['official-artwork'].front_default,
        number: pokemonData.data[pokemon].id,
        types: pokemonData.data[pokemon].types,
      });
    }
  }, [pokemonData, pokemon]);

  //giant switch statement to change between the different themes for bg depending on type
  React.useEffect(() => {
    if (pokeData.types.length !== 0) {
      console.log(pokeData);
      switch (pokeData.types[0].type.name) {
        case 'bug':
          setBgColor('#5eae49');
          break;
        case 'dark':
          setBgColor('#A1AACE');
          break;
        case 'dragon':
          setBgColor('#E4F0FF');
          break;
        case 'electric':
          setBgColor('#FDF0CA');
          break;
        case 'fairy':
          setBgColor('#FFE6FF');
          break;
        case 'fight':
          setBgColor('#E49B95');
          break;
        case 'fire':
          setBgColor('#FFEACF');
          break;
        case 'flying':
          setBgColor('#E2F0FF');
          break;
        case 'rock':
          setBgColor('#FBF1CA');
          break;
        case 'psychic':
          setBgColor('#FFE4DF');
          break;
        case 'poison':
          setBgColor('#FFE8FF');
          break;
        case 'normal':
          setBgColor('#F1FAFF');
          break;
        case 'ground':
          setBgColor('#FFE7D3');
          break;
        case 'grass':
          setBgColor('#e9f5db');
          break;
        case 'ghost':
          setBgColor('#D6D7FF');
          break;
        case 'steel':
          setBgColor('#C8E1D9');
          break;
        case 'water':
          setBgColor('#D4F4FF');
          break;
        default:
          setBgColor('#ffda9b');
      }
    }
  }, [pokeData]);

  return (
    <FlexWrapper
      height="100vh"
      width="100%"
      margin="0 auto"
      p={[6]}
      maxWidth="800px"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        background={bgColor}
        position="absolute"
        top={0}
        left={0}
        height="100vh"
        width="100%"
        zIndex={1}
      />
      <Navbar pokeType={pokeData.types.length !== 0 && pokeData.types[0].type.name} />
      <Image pos="relative" zIndex={2} maxW="300px" src={pokeData.artwork} mr="2rem" />
      <Box pos="relative" zIndex={2} background="rgba(255, 255, 255, 0.5)" p={4} borderRadius="5px">
        <Table size="sm">
          <Tbody>
            <Tr>
              <Th>No.</Th>
              <Td>{pokeData.number}</Td>
            </Tr>
            <Tr>
              <Th>Base Experience:</Th>
              <Td>{pokeData.exp}</Td>
            </Tr>
            <Tr>
              <Th>Types:</Th>
              <Td>{pokeData.types.map((item) => handleFindIconType(item.type.name))}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </FlexWrapper>
  );
}

export default PokemonInfo;
