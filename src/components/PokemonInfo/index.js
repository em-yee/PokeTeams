import React from 'react';
import { Image, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Text } from '@chakra-ui/react';
import { FlexWrapper } from '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokemon } from '../../redux/actions/pokemonActions';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

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
    // console.log(pokeData);
    console.log(pokeData);

    // switch (pokeData.types[0].type.name) {
    //   case 'Bug':
    //     setBgColor('#5eae49');
    //     break;
    //   case 'Dark':
    //     setBgColor('#A1AACE');
    //     break;
    //   case 'Dragon':
    //     setBgColor('#E4F0FF');
    //     break;
    //   case 'Electric':
    //     setBgColor('#FDF0CA');
    //     break;
    //   case 'Fairy':
    //     setBgColor('#FFE6FF');
    //     break;
    //   case 'Fight':
    //     setBgColor('#E49B95');
    //     break;
    //    case 'Fire':
    //     setBgColor('#CD7626');
    //     break;
    //    case 'Flying':
    //     setBgColor('#E2F0FF');
    //     break;
    //    case 'Rock':
    //     setBgColor('#FBF1CA');
    //     break;
    //    case 'Psychic':
    //     setBgColor('#FFE4DF');
    //     break;
    //    case 'Posion':
    //     setBgColor('#FFE8FF');
    //     break;
    //    case 'Normal':
    //     setBgColor('#F1FAFF');
    //     break;
    //    case 'Ground':
    //     setBgColor('#FFE7D3');
    //     break;
    //    case 'Grass':
    //     setBgColor('#4E7950');
    //     break;
    //    case 'Ghost':
    //     setBgColor('#D6D7FF');
    //     break;
    //    case 'Steel':
    //     setBgColor('#C8E1D9');
    //     break;
    //    case 'Water':
    //     setBgColor('#D4F4FF');
    //     break;
    //   default:
    //     setBgColor('#ffda9b');
    // }
  }, [pokeData]);

  // React.useEffect(() => {
  //   // console.log(pokeData);
  //   console.log(pokeData.types[0].type.name);
  // }, [pokeData]);

  // React.useEffect(() => {
  //   console.log(pokeData);
  // }, [pokeData]);

  return (
    <FlexWrapper height="100vh" width="100%" margin="0 auto" p={[6]} maxWidth="800px">
      <Navbar />
      <Image maxW="300px" src={pokeData.artwork} mr="2rem" />
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
              {pokeData.types.map((item) => (
                <Text>{item.type.name}</Text>
              ))}
            </Td>
            {/* <Td>{pokeData.types}</Td> */}
          </Tr>
        </Tbody>
      </Table>
    </FlexWrapper>
  );
}

export default PokemonInfo;
