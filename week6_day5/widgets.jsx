import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';
import Tabs from './frontend/tabs';

const NAMES = ['Sally',
'Bobby',
'Jerry',
'Jose',
'Oswald',
'Genmiliano',
'Jonas',
'Henke',
'Chu',
'Zensuke',
'Yoon',
'Barb',
'Gertrude',
'Moritz',
'Sean',
'Alexander'
];

const TABS = [
  {title: 'One', content: 'I am tab one.'},
  {title: 'Two', content: 'I am tab two.'},
  {title: 'Three', content: 'I am tab three.'}
];

class Root extends React.Component {

  render() {
    return(
      <div>
        <Clock />
        <Weather />
        <AutoComplete names={NAMES}/>
        <Tabs tabs={TABS}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root />, main);
});
