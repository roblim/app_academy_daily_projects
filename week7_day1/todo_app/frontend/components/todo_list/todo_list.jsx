import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return(
      <div>
        <h2>Todo List</h2>
        <ul className="todo-ul">
          {
            this.props.todos.map((todo) => <TodoListItem
                                      key={todo.id}
                                      todo={todo}
                                      removeTodo={this.props.removeTodo}
                                      createTodo={this.props.createTodo}
                                      />)
          }
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}

export default TodoList;
