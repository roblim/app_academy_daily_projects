import configureStore from './store/store';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import Root from './components/root';
import ReactDOM from 'react-dom';
import React from 'react';
import { allTodos } from './reducers/selectors';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () =>{
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});
