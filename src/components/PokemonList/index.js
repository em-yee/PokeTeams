import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, SimpleGrid, Image, Text } from '@chakra-ui/react';
import PokemonItem from '../PokemonItem';
import { FetchPokemonList } from '../../redux/actions/pokemonActions';
import PokemonTeam from '../PokemonTeam';
import { v4 as uuidv4 } from 'uuid';
import PokeballSpinner from '../../assets/images/loading-pokeball.gif';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonListReducer);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pokemonTeam, setPokemonTeam] = React.useState([]);
  // const [list, setList] = React.useState([]);

  const handleNextPage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  React.useEffect(() => {
    dispatch(FetchPokemonList(currentPage));
  }, [currentPage, dispatch]);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDir="column"
      width="100%"
      height="100vh"
      boxSizing="border-box"
      p="4rem 2rem 2rem 2rem"
      maxWidth="1000px"
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        py="1rem"
        position="relative"
        mb="2rem"
        zIndex="2"
        backgroundColor="gray.100"
      >
        {pokemonTeam.length !== 0 ? (
          <PokemonTeam pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} />
        ) : (
          <div>You have no Pokemon :/</div>
        )}
      </Box>
      {pokemonList.loading ? (
        <Image src={PokeballSpinner} alt="spinning pokeball" />
      ) : (
        <Box width="100%" position="relative" zIndex="1">
          <SimpleGrid columns={[3, null, 4, 5]} spacing={15} mb="2rem">
            {pokemonList.data.length !== 0 &&
              pokemonList.data.map((pokemonItem) => {
                return (
                  <PokemonItem
                    key={uuidv4()}
                    data={pokemonItem}
                    setPokemonTeam={setPokemonTeam}
                    pokemonTeam={pokemonTeam}
                  />
                );
              })}
          </SimpleGrid>

          {/*{handleShowData()}*/}
          <Box my={[3]}>
            <Button mr="0.2rem" onClick={handlePrevPage}>
              -
            </Button>
            <Button ml="0.2rem" onClick={handleNextPage}>
              +
            </Button>
            <Text textAlign="center">page: {currentPage}</Text>
          </Box>
        </Box>
      )}
      {pokemonList.errorMessage !== '' ? <Text>{pokemonList.errorMessage}</Text> : null}
      <Image src={PokeballSpinner} alt="spinning pokeball" maxW="220px" />
    </Container>
  );
};

export default PokemonList;
