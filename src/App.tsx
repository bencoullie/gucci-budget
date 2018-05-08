import './App.css';

import logo from './logo.svg';

import * as React from 'react';

import pagerDutyGet from './helpers/pagerDutyGet'

class App extends React.Component {


  public componentDidMount() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.pagerduty.com/schedules", {
      headers: {
        "Accept": "application/vnd.pagerduty+json;version=2",
        "Authorization": "Token token=LxS9M5rWErDQTqVDaQsH"
      },
      method: 'GET'
    })
      .then(res => {
        window.console.log(res.json())
        return res.json()
      })
      .then(
        (result: object) => {
          this.setState({
            isLoaded: true,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error,
            isLoaded: true
          });
        }
      )
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
