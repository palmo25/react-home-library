import React, { Component } from 'react';
import logo from './logo.svg';
import Booklist from './BookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Home Library</h2>
        </div>
         <Booklist />
      </div>
    );
  }
}

export default App;
