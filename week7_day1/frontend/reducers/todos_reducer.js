import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';
import {receiveTodos, receiveTodo} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(function(todo) {newState[todo.id] = todo;});
      return newState;
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
