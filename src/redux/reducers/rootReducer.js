import { combineReducers } from 'redux';

import { PokemonReducer } from './PokemonReducer';
import { PokemonListReducer } from './PokemonListReducer';
import { PokemonTeamReducer } from './PokemonTeamReducer';

const rootReducer = combineReducers({
  PokemonListReducer,
  PokemonReducer,
  PokemonTeamReducer,
});

export default rootReducer;

//trying to get data from pokemonlistreducer from a component
//explain what an action creator does using redux thunk
