const initialState = {
  loading: false,
  data: {},
  errorMessage: '',
};

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_LOADING':
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case 'FETCH_POKEMON_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: 'No Pokemon found!!',
      };
    case 'FETCH_POKEMON_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMessage: '',
        data: {
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};
