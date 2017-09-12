import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.doneToggle = this.doneToggle.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo);
  }

  doneToggle() {
    let done = this.props.todo.done ? false : true;
    this.props.todo.done = done;
    this.props.receiveTodo(this.props.todo);
  }

  done() {
    return this.props.todo.done ? 'Mark Undone' : 'Mark Done';
  }

  render() {
    return (
      <div className="todo-item">
        <li className='todo-li'>{ this.props.todo.title }</li>
        <button type="button" name="delete" onClick={this.handleDelete}>Delete</button>
        <button type="button" name="done-toggle" onClick={this.doneToggle}>{this.done()}</button>
      </div>
    );
  }
}

export default TodoListItem;
