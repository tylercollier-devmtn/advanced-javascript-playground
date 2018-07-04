import React, { Component } from 'react';
import request from 'superagent';

class Wpx5Promise {
  constructor(callback) {
    this.callback = callback;
    this.callback(this.resolve, this.reject);
    this.thens = [];
    this.catches = [];
  }

  resolve = (value) => {
    // const resultFromFirstCallback = this.thens[0](...args);
    // const resultFromSecondCallback = this.thens[1](resultFromFirstCallback);
    let result = value;
    this.thens.forEach(cb => {
      try {
        result = cb(result);
      } catch (error) {
        this.reject(error);
      }
    });
  }

  reject = (value) => {
    if (this.catches.length) {
      this.catches[0](value);
    }
  }

  then = (cb) => {
    this.thens.push(cb);
    return this;
  }

  catch = (cb) => {
    this.catches.push(cb);
    return this;
  }
}

function requestWithPromise(url) {
  return new Wpx5Promise((resolve, reject) => {
    request.get(url).end((err, response) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(response);
    });
  });
}

export default class PromiseDemo extends Component {
  constructor() {
    super();
    this.state = {
      message: 'promise message will go here'
    };
  }

  componentDidMount() {
    // request.get('https://swapi.co/api/people/1').end((err, response) => {
    //   if (err) {
    //     this.setState({ message: 'Error!!!!' + err});
    //     return;
    //   }
    //   this.setState({ message: response.body.name });
    // })
    const myPromise = requestWithPromise('https://swapi.co/api/people/1');
    console.log('-------------- myPromise', myPromise);
    
    myPromise.then(response => {
      this.setState({ message: response.body.name });
      // console.log('did first .then in promise chain');
      // throw new Error('something happened here');
      return 7
    }).then(value => {
      console.log('-------------- value', value);
    }).catch(err => {
      this.setState({ message: 'Error!!!!' + err});
    });
  }
  
  render() {
    return (
      <div>
        <h1>Promise Demo</h1>
        <div>{this.state.message}</div>
      </div>
    );
  }
}
