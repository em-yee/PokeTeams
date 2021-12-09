import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, SimpleGrid } from '@chakra-ui/react';
import PokemonItem from '../PokemonItem';
import { FetchPokemonList } from '../../redux/actions/pokemonActions';
import PokemonTeam from '../PokemonTeam';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonListReducer);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pokemonTeam, setPokemonTeam] = React.useState([]);

  React.useEffect(() => {
    const handleFetchPokemonList = () => {
      dispatch(FetchPokemonList(currentPage));
    };

    handleFetchPokemonList();
  }, [dispatch, currentPage]);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      minWidth="50vw"
      height="100vh"
      boxSizing="border-box"
      overflow="auto"
    >
      <SimpleGrid columns="5" spacing="50" mb="2rem">
        {pokemonList.data.map((pokemonItem, index) => (
          <PokemonItem key={index} name={pokemonItem.name} setPokemonTeam={setPokemonTeam} pokemonTeam={pokemonTeam}/>
        ))}
      </SimpleGrid>
      <h1>{currentPage}</h1>
      <div>
        <Button onClick={() => setCurrentPage(currentPage - 1)}>-</Button>
        <Button onClick={() => setCurrentPage(currentPage + 1)}>+</Button>
      </div>
      {pokemonTeam.length !== 0 ?
        <PokemonTeam pokemonTeam={pokemonTeam}/>
        :
        <div>You have no Pokemon D:</div>

      }
    </Container>
  );
};

export default PokemonList;
