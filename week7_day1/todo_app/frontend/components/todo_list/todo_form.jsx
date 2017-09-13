import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.receiveTodo = props.receiveTodo;
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    let todo = { id: uniqueId(), title: this.state.title, body: this.state.body, done: false };
    this.props.createTodo(todo).then(
      () => this.setState({title: '', body: ''})
    );
  }

  render() {
    return (
      <form className='todo-form'>
          <h4>Title:</h4>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
          <h4>Description:</h4>
          <textarea name='body' value={this.state.body} onChange={this.handleChange}></textarea>

        <input type='submit' value='Create Todo' onClick={this.handleClick} />
      </form>
    );
  }
}

export default TodoForm;
