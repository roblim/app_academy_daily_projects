import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let time = this.state.time;
    return (
    <div className="clock">
      <div className="clock-header">
        <h1>Clock Widget</h1>
      </div>
      <div className="time">
        <h2>Here is the Current Time:</h2>
        <h3>{time.toLocaleTimeString()}</h3>
      </div>
      <div className="date">
        <h2>This is the Current Date:</h2>
        <h3>{time.getMonth()}/{time.getDate()}/{time.getFullYear()}</h3>
      </div>

    </div>
    );
  }

}

export default Clock;
