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
    //     setBgColor('#');
    //     break;
    //   case '':
    //     setBgColor('#');
    //     break;
    //   case '':
    //     setBgColor('#');
    //     break;
    //   case '':
    //     setBgColor('#');
    //     break;
    //   case '':
    //     setBgColor('#');
    //     break;
    //case '':
    //     setBgColor('#');
    //     break;
    //case '':
    //     setBgColor('#');
    //     break;
    //case '':
    //     setBgColor('#');
    //     break;

    //   default:
    //     setBgColor('#');
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
