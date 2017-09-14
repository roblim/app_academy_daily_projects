import { values } from 'lodash';

const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

const selectPokemon = (state) => {
  let pokemonId = state.ui.pokeDisplay;
  return state.entities.pokemon[pokemonId];
};

export { selectAllPokemon, selectPokemon };
