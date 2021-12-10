import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokemon } from '../../redux/actions/pokemonActions';

const PokemonItem = ({ name, pokemonTeam, setPokemonTeam }) => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.PokemonReducer);
  const [pokemonImage, setPokemonImage] = React.useState('');
  
  const handleAddToPokemonTeam = () => {
    setPokemonTeam([...pokemonTeam, name]);
  };
  
  React.useEffect(() => {
    dispatch(FetchPokemon(name));
    
  }, [dispatch, name]);
  
  React.useEffect(() => {
    if (pokemonData.data[name] !== undefined) {
      setPokemonImage(pokemonData.data[name].sprites.other['official-artwork'].front_default);
    }
  }, [name, pokemonData]);
  
  return pokemonImage !== '' && (
    <Box onClick={handleAddToPokemonTeam} maxW='sm' p={[2]} borderRadius='md' boxShadow='lg' overflow='hidden'>
      <Image src={pokemonImage} alt='name' />
      <Text textAlign='center'>{name}</Text>
    </Box>
  );
};
export default PokemonItem;
