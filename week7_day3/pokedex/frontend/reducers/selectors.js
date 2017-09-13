import { values } from 'lodash';

const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export { selectAllPokemon };
