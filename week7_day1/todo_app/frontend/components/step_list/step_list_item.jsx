import React from 'react';
import merge from 'lodash/merge';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.doneToggle = this.doneToggle.bind(this);
    this.done = this.done.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  doneToggle() {
    let done = this.props.step.done ? false : true;
    let toggled = merge({}, this.props.step, { done: done });
    this.props.receiveStep(toggled);
  }

  done() {
    return this.props.step.done ? 'Mark Undone' : 'Mark Done';
  }

  handleDelete() {
    this.props.removeStep(this.props.step);
  }

  render() {
    return(
      <div>
        <li>{this.props.step.title}</li>
        <p>{this.props.step.body}</p>
        <button type="button" name="done-toggle" onClick={this.doneToggle}>{this.done()}</button>
        <button type="button" name="delete" onClick={this.handleDelete}>Delete</button>
      </div>
    );}

}

export default StepListItem;
