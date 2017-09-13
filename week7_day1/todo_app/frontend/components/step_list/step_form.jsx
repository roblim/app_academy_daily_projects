import React from 'react';
import { uniqueId } from '../../util/utils';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.receiveStep({ id: uniqueId(), todo_id: this.props.todo_id, title: this.state.title, body: this.state.body, done: false });
    this.state = {title: '', body: ''};
  }

  render() {
    return (
      <form className='step-form'>
          <h4>Title:</h4>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
          <h4>Description:</h4>
          <textarea name='body' value={this.state.body} onChange={this.handleChange}></textarea>

        <input type='submit' value='Create Step' onClick={this.handleClick} />
      </form>
    );
  }
}

export default StepForm;
