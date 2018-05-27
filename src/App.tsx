import './App.css';

import * as React from 'react';

import logo from './logo.svg';
import pagerDutyGet from './helpers/pagerDutyGet'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      isLoaded: false
    }
  }

  public componentDidMount() {
    this.setState({ isLoaded: false })

    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => json.msg)
      .then(netlifyResponse => {
        pagerDutyGet('schedules').then(
          (schedules: object) => {
            this.setState({
              isLoaded: true,
              schedules
            });
            window.console.log('this.state', this.state)
            window.console.log('netlifyResponse', netlifyResponse)
          }
        )
      })
  }

  public render() {
    return this.loadApp()
  }

  private loadApp() {
    const isLoaded = this.state.isLoaded

    if (isLoaded) {
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
      )
    } else {
      return ('loading!')
    }
  }
}

export default App;
