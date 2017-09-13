export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import { fetchAll, postTodo } from '../util/todo_api_util';

const receiveTodos = function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

const receiveTodo = function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

const removeTodo = function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    todo: todo
  };
};

const fetchTodos = () => (dispatch) => {
  return fetchAll().then((todos) => dispatch(receiveTodos(todos)));
};

const createTodo = (todo) => (dispatch) => {
  return postTodo(todo).then((todo2) => dispatch(receiveTodo(todo2)));
};

window.fetchTodos = fetchTodos;

export {receiveTodos, receiveTodo, removeTodo, fetchTodos, createTodo};
