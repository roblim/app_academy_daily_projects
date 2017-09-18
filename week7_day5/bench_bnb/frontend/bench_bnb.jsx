import React from 'react';
import ReactDOM from 'react-dom';
import { postUser, postSession, deleteSession } from './util/session_api_util.js';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
