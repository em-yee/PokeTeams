import React from 'react';
import { Image, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Text } from '@chakra-ui/react';
import { FlexWrapper } from '../index.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokemon } from '../../redux/actions/pokemonActions';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { useWindowSize } from '../../hooks';
import {
  BugSm,
  BugLg,
  DarkLg,
  DarkSm,
  DragonLg,
  DragonSm,
  ElectricLg,
  ElectricSm,
  FairyLg,
  FairySm,
  FightLg,
  FightSm,
  FireLg,
  FireSm,
  FlyingLg,
  FlyingSm,
  GhostLg,
  GhostSm,
  GrassLg,
  GrassSm,
  GroundLg,
  GroundSm,
  IceLg,
  IceSm,
  NormalLg,
  NormalSm,
  PoisonLg,
  PoisonSm,
  PsychicLg,
  PsychicSm,
  RockLg,
  RockSm,
  SteelLg,
  SteelSm,
  WaterLg,
  WaterSm,
} from '../../assets/icons';

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

  const handleFindIconType = (pokemonType) => {
    switch (pokemonType) {
      case 'bug':
        return <Image key={uuidv4()} src={size.width < 800 ? BugSm : BugLg} maxH="40px" />;
      case 'dark':
        return <Image key={uuidv4()} src={size.width < 800 ? DarkSm : DarkLg} maxH="40px" />;

      case 'dragon':
        return <Image key={uuidv4()} src={size.width < 800 ? DragonSm : DragonLg} maxH="40px" />;

      case 'electric':
        return (
          <Image key={uuidv4()} src={size.width < 800 ? ElectricSm : ElectricLg} maxH="40px" />
        );

      case 'fairy':
        return <Image key={uuidv4()} src={size.width < 800 ? FairySm : FairyLg} maxH="40px" />;

      case 'fight':
        return <Image key={uuidv4()} src={size.width < 800 ? FightSm : FightLg} maxH="40px" />;

      case 'fire':
        return <Image key={uuidv4()} src={size.width < 800 ? FireSm : FireLg} maxH="40px" />;

      case 'flying':
        return <Image key={uuidv4()} src={size.width < 800 ? FlyingSm : FlyingLg} maxH="40px" />;

      case 'rock':
        return <Image key={uuidv4()} src={size.width < 800 ? RockSm : RockLg} maxH="40px" />;

      case 'psychic':
        return <Image key={uuidv4()} src={size.width < 800 ? PsychicSm : PsychicLg} maxH="40px" />;

      case 'poison':
        return <Image key={uuidv4()} src={size.width < 800 ? PoisonSm : PoisonLg} maxH="40px" />;

      case 'normal':
        return <Image key={uuidv4()} src={size.width < 800 ? NormalSm : NormalLg} maxH="40px" />;

      case 'ground':
        return <Image key={uuidv4()} src={size.width < 800 ? GroundSm : GroundLg} maxH="40px" />;

      case 'grass':
        return <Image key={uuidv4()} src={size.width < 800 ? GrassSm : GrassLg} maxH="40px" />;

      case 'ghost':
        return <Image key={uuidv4()} src={size.width < 800 ? GhostSm : GhostLg} maxH="40px" />;

      case 'steel':
        return <Image key={uuidv4()} src={size.width < 800 ? SteelSm : SteelLg} maxH="40px" />;

      case 'water':
        return <Image key={uuidv4()} src={size.width < 800 ? WaterSm : WaterLg} maxH="40px" />;

      case 'ice':
        return <Image key={uuidv4()} src={size.width < 800 ? IceSm : IceLg} maxH="40px" />;

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
          setBgColor('#CD7626');
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
          setBgColor('#4E7950');
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

  // React.useEffect(() => {
  //   // console.log(pokeData);
  //   console.log(pokeData.types[0].type.name);
  // }, [pokeData]);

  // React.useEffect(() => {
  //   console.log(pokeData);
  // }, [pokeData]);

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
              <Td>
                {pokeData.types.map((item) => handleFindIconType(item.type.name))}
                {/*{handleFindIconType(pokeData.types[0].type.name)}*/}
                {/*<br />*/}
                {/*{handleFindIconType(pokeData.types[1].type.name)}*/}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </FlexWrapper>
  );
}

export default PokemonInfo;
