import React from 'react';
import TodoListItem from './todo_list_item';

export const TodoList = (props) => (
  <ul>
    {
      props.todos.map((todo) => <TodoListItem key={todo.id} todo={ todo } />)
    }
  </ul>
);
