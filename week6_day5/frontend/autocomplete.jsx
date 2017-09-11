import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.names = props.names.sort();
    this.state = {
      inputVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterNames = this.filterNames.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({inputVal: event.target.value});
  }

  handleClick(event) {
    this.setState({inputVal: event.target.innerHTML});
  }

  filterNames() {
    const result = [];
    this.names.forEach((name) => {
      if (name.toLowerCase().startsWith(this.state.inputVal.toLowerCase())) {
        result.push(name);
      }
    });
    return result;
  }

  render() {
    return (
      <div className="auto">
        <h1>Super Name Searcher</h1>
        <label>
          Search:
          <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
        </label>
        <ul className='names'>
          {this.filterNames().map((name, idx) => <li key={`names${idx}`} onClick={this.handleClick}><span>{name}</span></li>)}
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
