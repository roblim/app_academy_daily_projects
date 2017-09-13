import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import * as Actions from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = Actions.receiveAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = Actions.requestAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
