import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_POKEMON):
      newState = merge({}, state);
      action.pokemon.items.map((item) => {newState[item.id] = item;});
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
