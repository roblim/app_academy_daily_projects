import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const uiReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_POKEMON):
      newState = merge({}, state);
      newState.pokeDisplay = action.pokemon.pokemon.id;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
