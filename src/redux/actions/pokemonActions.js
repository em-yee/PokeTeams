import axios from 'axios';

export const FetchPokemonList = (page) => async (dispatch) => {
  const itemsPerPage = 15;
  const offset = page * itemsPerPage - itemsPerPage;

  try {
    dispatch({
      type: 'FETCH_POKEMON_LIST_LOADING'
    });

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
    );

    dispatch({
      type: 'FETCH_POKEMON_LIST_SUCCESS',
      payload: response.data,
    });
  } catch(err){
    console.log(err.message);
    dispatch({
      type:'FETCH_POKEMON_LIST_FAIL',
    });
  }
};

export const FetchPokemon = (pokemon) => async (dispatch) => {
  try{
    dispatch({
      type: 'FETCH_POKEMON_LOADING',
    });

    const response = await axios.get(
      `https://pokeapi.co/api/v2/${pokemon}`
    );

    dispatch({
      type: 'FETCH_POKEMON_SUCCESS',
      payload: response.data,
      pokemonName: pokemon,
    });
  } catch(err){
    console.log(err.message);
    dispatch({
      type: 'FETCH_POKEMON_FAIL',
    });
  }
};
