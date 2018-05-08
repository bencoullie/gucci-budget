import './App.css';

import logo from './logo.svg';

import * as React from 'react';

import pagerDutyGet from './helpers/pagerDutyGet'

class App extends React.Component {
  public componentDidMount() {
    window.console.log('working')

    pagerDutyGet('jkh')
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gucci Oncall</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
