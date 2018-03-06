import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const API_SERVER_URL = 'http://localhost:3020';

class App extends Component {
  componentDidMount() {
    axios.get(`${API_SERVER_URL}/api/ping`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
      </div>
    );
  }
}

export default App;
