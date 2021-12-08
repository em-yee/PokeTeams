import { combineReducers } from 'redux';

import { PokemonReducer } from './PokemonReducer';
import { PokemonListReducer } from './PokemonListReducer';


const rootReducer = combineReducers({
  PokemonListReducer,
  PokemonReducer,
});

export default rootReducer;
