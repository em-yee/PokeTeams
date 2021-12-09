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
