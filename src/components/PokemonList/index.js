import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import PokemonItem from '../PokemonItem';
import { FetchPokemonList } from '../../redux/actions/pokemonActions';
import PokemonTeam from '../PokemonTeam';
import { v4 as uuidv4 } from 'uuid';
import PokeballSpinner from '../../assets/images/loading-pokeball.gif';
import { FlexWrapper } from '../index.css';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonListReducer);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pokemonTeam, setPokemonTeam] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
      minHeight="100vh"
      boxSizing="border-box"
      p="4rem 2rem 2rem 2rem"
      minWidth="100vw"
      // maxWidth="2000px"
      backgroundColor="#ffda9b"
    >
      <Drawer
        isOpen={drawerOpen}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        size="sm"
        backgroundColor="gray.100"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            {pokemonTeam.length !== 0 ? (
              <PokemonTeam pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} />
            ) : (
              <div>You have no Pokemon :/</div>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {pokemonList.loading ? (
        <Image src={PokeballSpinner} alt="spinning pokeball" />
      ) : (
        <FlexWrapper
          alignItems="center"
          justifyContent="center"
          width="100%"
          position="relative"
          zIndex="1"
          flexDir="column"
          maxW={['350px', '500px', '800px', '1020px']}
        >
          <FlexWrapper flexWrap="wrap">
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
          </FlexWrapper>
          {/*{handleShowData()}*/}
          <FlexWrapper my={[3]} justifyContent="space-evenly" w="100%" mb={4}>
            <Box>
              <Button mr="0.2rem" onClick={handlePrevPage}>
                -
              </Button>
              <Button ml="0.2rem" onClick={handleNextPage}>
                +
              </Button>
            </Box>
            <Button onClick={() => setDrawerOpen(true)}>See Team</Button>
            <Text textAlign="center">page: {currentPage}</Text>
          </FlexWrapper>
        </FlexWrapper>
      )}
      {pokemonList.errorMessage !== '' ? <Text>{pokemonList.errorMessage}</Text> : null}
    </Container>
  );
};

export default PokemonList;
