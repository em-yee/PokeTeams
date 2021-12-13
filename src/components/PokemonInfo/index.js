import React from 'react';
import { Image, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Text } from '@chakra-ui/react';
import { FlexWrapper } from '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokemon } from '../../redux/actions/pokemonActions';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { useWindowSize } from '../../hooks';
import {
  BugLg,
  BugSm,
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

  const pokemonTypes = [
    <Image src={size.width < 800 ? BugSm : BugLg} maxW="120px" />,
    <Image src={size.width < 800 ? DarkSm : DarkLg} maxW="120px" />,
    <Image src={size.width < 800 ? DragonSm : DragonLg} maxW="120px" />,
    <Image src={size.width < 800 ? ElectricSm : ElectricLg} maxW="120px" />,
    <Image src={size.width < 800 ? FairySm : FairyLg} maxW="120px" />,
    <Image src={size.width < 800 ? FightSm : FightLg} maxW="120px" />,
    <Image src={size.width < 800 ? FireSm : FireLg} maxW="120px" />,
    <Image src={size.width < 800 ? FlyingSm : FlyingLg} maxW="120px" />,
    <Image src={size.width < 800 ? GhostSm : GhostLg} maxW="120px" />,
    <Image src={size.width < 800 ? GrassSm : GrassLg} maxW="120px" />,
    <Image src={size.width < 800 ? GroundSm : GroundLg} maxW="120px" />,
    <Image src={size.width < 800 ? IceSm : IceLg} maxW="120px" />,
    <Image src={size.width < 800 ? NormalSm : NormalLg} maxW="120px" />,
    <Image src={size.width < 800 ? PoisonSm : PoisonLg} maxW="120px" />,
    <Image src={size.width < 800 ? PsychicSm : PsychicLg} maxW="120px" />,
    <Image src={size.width < 800 ? RockSm : RockLg} maxW="120px" />,
    <Image src={size.width < 800 ? SteelSm : SteelLg} maxW="120px" />,
    <Image src={size.width < 800 ? WaterSm : WaterLg} maxW="120px" />,
  ];

  const handleFindTypeImage = (type) => {
    console.log(type);
    switch (type) {
      case 'bug':
        return <Image src={size.width < 800 ? BugSm : BugLg} maxW="120px" />;
      default:
        return;
    }
  };

  React.useEffect(() => {
    dispatch(FetchPokemon(pokemon));
  }, [dispatch, pokemon]);

  React.useEffect(() => {
    if (pokemonData.data[pokemon] !== undefined) {
      console.log(pokeData.data[pokemon]);
      setPokeData({
        exp: pokemonData.data[pokemon].base_experience,
        artwork: pokemonData.data[pokemon].sprites.other['official-artwork'].front_default,
        number: pokemonData.data[pokemon].id,
        types: pokemonData.data[pokemon].types,
      });
    } else {
      console.log('error');
    }
  }, [pokemonData]);

  React.useEffect(() => {
    // console.log(pokeData);
    console.log(pokeData);

    switch (pokeData.types[0].type.name) {
      case 'Bug':
        setBgColor('#');
        break;
      case '':
        setBgColor('#');
        break;
      default:
        setBgColor('#');
    }
  }, [pokeData]);

  // React.useEffect(() => {
  //   // console.log(pokeData);
  //   console.log(pokeData.types[0].type.name);
  // }, [pokeData]);

  return (
    <FlexWrapper height="100vh" width="100%" margin="0 auto" p={[6]} maxWidth="800px">
      <Navbar pokeType={pokeData.types[0].type.name} />
      <Image maxW="300px" src={pokeData.artwork} mr="2rem" />
      <Table size="sm" backgroundColor="white">
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
              {pokeData.types.map((item) =>
                // <Text>{item.type.name}</Text>
                handleFindTypeImage(item.type.name)
              )}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </FlexWrapper>
  );
}

export default PokemonInfo;
