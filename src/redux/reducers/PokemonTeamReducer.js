const initialState = {
  team: [],
  count: 0,
}

export const PokemonTeamReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_TO_TEAM":
      return{
        team: [...state.team, action.payload.pokemonMember],
        count: state.count++,
      }
    case "REMOVE_FROM_TEAM":
      return{
        
      }

    default:
      return state;
  }



}
