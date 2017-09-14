import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import * as Actions from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon, selectPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.fetchPokemon = APIUtil.fetchPokemon;
  // window.selectPokemon = selectPokemon;
  // window.receiveAllPokemon = Actions.receiveAllPokemon;
  // window.receivePokemon = Actions.receivePokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  // window.requestAllPokemon = Actions.requestAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
