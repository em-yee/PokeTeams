import React from 'react';
import { Box, Image, Skeleton, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokemon } from '../../redux/actions/pokemonActions';

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

  // const handleShowPokemon = () => {
  //   if (pokemonData.loading) {
  //     return <p>Loading...</p>;
  //   }
  //
  //   if (pokemonData.data[name] !== undefined && !pokemonData.loading) {
  //     // const pokeData = pokemonData.data[name];
  //
  //     return <Image src={pokeData.imgUrl} alt="name" />;
  //   }
  //
  //   if (pokemonData.errorMessage !== '') {
  //     return <p>{pokemonData.errorMessage}</p>;
  //   }
  //
  //   return <p>error fetching pokemon data</p>;
  // };

  return pokeData.imgUrl !== '' && !pokemonData.loading ? (
    <Box
      onClick={handleAddToPokemonTeam}
      maxW="150px"
      p={[2]}
      borderRadius="md"
      boxShadow="lg"
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

      <Text textAlign="center">{name}</Text>
    </Box>
  ) : null;
};
export default PokemonItem;
