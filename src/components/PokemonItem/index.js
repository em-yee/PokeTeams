import React from 'react';
import { Box, Image, Skeleton, Text, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokemon } from '../../redux/actions/pokemonActions';
import { InfoIcon, AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const PokemonItem = ({ data, pokemonTeam, setPokemonTeam }) => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.PokemonReducer);
  const [pokeData, setPokeData] = React.useState({
    name: '',
    imgUrl: '',
  });

  const { name } = data;

  const handleAddToPokemonTeam = (e) => {
    e.preventDefault();
    if (pokemonTeam.length <= 5) {
      setPokemonTeam([...pokemonTeam, pokeData]);
    }
  };

  React.useEffect(() => {
    dispatch(FetchPokemon(name));
  }, [dispatch, name]);

  React.useEffect(() => {
    if (pokemonData.data[name] !== undefined && !pokemonData.loading) {
      setPokeData({
        name,
        imgUrl: pokemonData.data[name].sprites.other['official-artwork'].front_default,
      });
    }
  }, [data.name, name, pokemonData]);

  return pokeData.imgUrl !== '' && !pokemonData.loading ? (
    <Box
      maxW="150px"
      width="100%"
      p={[2]}
      m={[2]}
      borderRadius="md"
      boxShadow="lg"
      backgroundColor="white"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      sx={{
        cursor: pokemonTeam.length <= 5 ? 'pointer' : 'not-allowed',
      }}
    >
      {/*{pokemonData.data[name] !== undefined && handleShowPokemon()}*/}
      {pokemonData.loading ? <Skeleton height="134px" /> : <Image src={pokeData.imgUrl} />}

      <Box>
        <Text textAlign="center">{name}</Text>
        <Flex width="100%" alignItems="center" justifyContent="space-between" minWidth="125px">
          <Link to={`/pokemon-info/${name}`} mr="4px">
            <InfoIcon w={4} h={4} />
          </Link>
          <AddIcon w={4} h={4} ml="4px" onClick={handleAddToPokemonTeam} />
        </Flex>
      </Box>
    </Box>
  ) : null;
};
export default PokemonItem;
