import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, SimpleGrid } from '@chakra-ui/react';
import PokemonItem from '../PokemonItem';
import { FetchPokemonList } from '../../redux/actions/pokemonActions';
import PokemonTeam from '../PokemonTeam';
import { v4 as uuidv4 } from 'uuid';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonListReducer);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pokemonTeam, setPokemonTeam] = React.useState([]);
  
  React.useEffect(() => {
    dispatch(FetchPokemonList(currentPage));
  }, [currentPage, dispatch]);
  
  return (
    <Container
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      minWidth={[null, null, '800px', null]}
      width='100%'
      height='100vh'
      boxSizing='border-box'
      overflow='auto'
    >
      <SimpleGrid columns={[3, null, 4, 5]} spacing={25} mb='2rem'>
        {pokemonList.data.map((pokemonItem, index) => (
          <PokemonItem
            key={uuidv4()} id={index + 1} name={pokemonItem.name} setPokemonTeam={setPokemonTeam} pokemonTeam={pokemonTeam}
          />
        ))}
      </SimpleGrid>
      <h1>{currentPage}</h1>
      <div>
        <Button onClick={() => setCurrentPage(currentPage - 1)}>-</Button>
        <Button onClick={() => setCurrentPage(currentPage + 1)}>+</Button>
      </div>
      {pokemonTeam.length !== 0 ?
        <PokemonTeam pokemonTeam={pokemonTeam} />
        :
        <div>You have no Pokemon D:</div>
        
      }
    </Container>
  );
};

export default PokemonList;
