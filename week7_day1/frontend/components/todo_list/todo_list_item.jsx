import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return (
      <li key={ this.props.todo.id }>{ this.props.todo.title }</li>
    );
  }
}

export default TodoListItem;
