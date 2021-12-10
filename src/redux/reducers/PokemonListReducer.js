const initialState = {
  loading: false,
  data: [],
  errorMessage: '',
  count: 0,
};

export const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_LIST_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_POKEMON_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: 'No Pokemon found!!',
      };
    case 'FETCH_POKEMON_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        count: action.payload.count,
      };
    default:
      return state;
  }
};
