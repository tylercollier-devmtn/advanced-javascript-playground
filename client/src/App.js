import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';

function turnCallbackIntoPromise(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      })
    })
  }
}

function superAgentGet(url, callback) {
  return request.get(url).end(callback)
}

function doRequest(url) {
  return new Promise((resolve, reject) => {
    request.get(url).end((err, response) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(response);
    })
  })
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello, happy 4th'
    };
  }

  componentDidMount() {
    // doRequest('https://swapi.co/api/people/1').then(response => {
    //   this.setState({ message: 'The data from swapi is: ' + response.body.name });
    // }).catch(error => {
    //   this.setState({ message: 'Got an error: ' + error.message });
    // });


    // superAgentGet('https://swapi.co/api/people/1', (error, response) => {
    //   if (error) {
    //     this.setState({ message: 'Got an error: ' + error.message });
    //     return;
    //   }
    //   this.setState({ message: 'The data from swapi is: ' + response.body.name });
    // });
    const superAgentGetWithPromise = turnCallbackIntoPromise(superAgentGet);
    superAgentGetWithPromise('https://swapi.co/api/people/1').then(response => {
      this.setState({ message: 'The data from swapi is: ' + response.body.name });
    }).catch(error => {
      this.setState({ message: 'Got an error: ' + error.message });
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Message: {this.state.message}</div>
      </div>
    );
  }
}

export default App;
