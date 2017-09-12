export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

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

export {receiveTodos, receiveTodo, removeTodo};
