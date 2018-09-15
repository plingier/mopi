import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=c42d6110155d2e79d0d1fd378a0fe02e')
      .then(response => response.json())
      .then(data => {
        fetch('https://api.themoviedb.org/3/discover/movie?page=' + Math.floor((Math.random() * data.total_pages) + 1) + '&api_key=c42d6110155d2e79d0d1fd378a0fe02e')
          .then(response => response.json())
          .then(data => {
            this.setState( data[Math.floor(Math.random() * data.length)] )
          });
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
      </div>
    );
  }
}

export default App;
