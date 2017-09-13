import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailViewHidden: true
    };
    this.doneToggle = this.doneToggle.bind(this);
    this.hiddenToggle = this.hiddenToggle.bind(this);
  }

  doneToggle() {
    let done = this.props.todo.done ? false : true;
    this.props.todo.done = done;
    this.props.createTodo(this.props.todo);
  }

  done() {
    return this.props.todo.done ? 'Mark Undone' : 'Mark Done';
  }

  hiddenToggle() {
    if (this.state.detailViewHidden) {
      this.setState({ detailViewHidden: false });
    } else {
      this.setState({ detailViewHidden: true });
    }
  }



  render() {
    return (
      <div className="todo-item">
        <li className='todo-li'><span className='todo-li-text' onClick={this.hiddenToggle}>{ this.props.todo.title }</span></li>
        <button type="button" name="done-toggle" onClick={this.doneToggle}>{this.done()}</button>
          {this.state.detailViewHidden ? null: <TodoDetailView todo={this.props.todo} removeTodo={this.props.removeTodo}/>}
      </div>
    );
  }
}

export default TodoListItem;
