import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_ALL_POKEMON):
      newState = merge({}, state, action.pokemon);
      return newState;
    case(RECEIVE_POKEMON):
      newState = merge({}, state);
      let items = [];
      let pokemon = action.pokemon.pokemon;
      action.pokemon.items.forEach((item) => items.push(item.id));
      pokemon['item_ids'] = items;
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
