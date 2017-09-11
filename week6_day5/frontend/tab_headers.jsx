import React from 'react';

const Header = ({ tabs, that }) => (
  <ul className='headers'>
    {
    tabs.map((tab, idx) => <h1 key={`tab${idx}`} onClick={that.tabClick.bind(null, idx)} className='tab-header'>{tab.title}</h1>)
    }
  </ul>
);

export default Header;
