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
    this.props.receiveTodo({ id: uniqueId(), title: this.state.title, body: this.state.body, done: false });
    this.state = {title: '', body: ''};
  }

  render() {
    return (
      <form className='todo-form'>
        <label>
          Title:
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
        </label>
        <br />
        <br />
        <label>
          Body:
          <textarea name='body' value={this.state.body} onChange={this.handleChange}></textarea>
        </label>
        <input type='submit' value='Create Todo' onClick={this.handleClick} />
      </form>
    );
  }
}

export default TodoForm;
