import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export const TodoList = (props) => (
  <div>
    <ul className="todo-ul">
      {
        props.todos.map((todo) => <TodoListItem
                                  key={todo.id}
                                  todo={todo}
                                  removeTodo={props.removeTodo}
                                  receiveTodo={props.receiveTodo}
                                  />)
      }
    </ul>
    <TodoForm receiveTodo={props.receiveTodo}/>
  </div>
);
