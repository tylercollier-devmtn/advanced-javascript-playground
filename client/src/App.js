import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counter2: 0,
    };
  }

  increment = () => {
    // this.setState({ counter: this.state.counter + 1 })
    // this.incrementBy5()
    // this.setState(prevState => {
    //   return { counter: prevState.counter + 1 }
    // })
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
    // this.setState(prevState => {
    //   return { counter: prevState.counter + 1 }
    // })
  }

  incrementBy5 = () => {
    this.setState({ counter: this.state.counter + 5 })
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
        <button onClick={this.increment}>Click me</button>
        <div>Counter value: {this.state.counter}</div>
        <div>Counter2 value: {this.state.counter2}</div>
      </div>
    );
  }
}

export default App;
