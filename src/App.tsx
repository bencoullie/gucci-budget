import './App.css';

import * as React from 'react';

import logo from './logo.svg';

// import pagerDutyGet from './helpers/pagerDutyGet'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      isLoaded: false
    }
  }

  public componentDidMount() {
    const poop = () => {
      fetch('/.netlify/functions/hello')
        .then(response => {
          window.console.log('getting here', response.json)
          // return response.json()
        })
      // .then(json => json)
      // .then(netlifyResponse => {
      //   window.console.log('netlifyResponse.msg', netlifyResponse.msg)
      //   this.setState({
      //     isLoaded: true
      //   })
      // })
    }

    window.setTimeout(poop, 2000)

    // pagerDutyGet('schedules').then(
    //   (schedules: object) => {
    //     this.setState({
    //       isLoaded: true,
    //       schedules
    //     });
    //     window.console.log('this.state', this.state)
    //   }
    // )
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
