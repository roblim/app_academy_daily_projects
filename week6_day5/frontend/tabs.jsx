import React from 'react';
import Header from './tab_headers';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = props.tabs;
    this.state = {
      tabIdx: 0
    };
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(idx) {
    this.setState({tabIdx: idx});
  }

  render() {
    return (
      <div className='tab-container'>
        <Header tabs={this.tabs} that={this} />
        <div className='content-cont'><article className='tab-content'>{this.tabs[this.state.tabIdx].content}</article></div>
      </div>
    );
  }
}

export default Tabs;
