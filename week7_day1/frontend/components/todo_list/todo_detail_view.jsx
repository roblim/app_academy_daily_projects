import React from 'react';
import StepListContainer  from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return(
      <div>
        <p>{this.props.todo.body}</p>
        <StepListContainer todo_id={ this.props.todo.id } />
        <button type="button" name="delete" onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
