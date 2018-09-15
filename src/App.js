import React, { Component } from 'react';
import './App.css';
import MopiHeader from './MopiHeader';

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
      <MopiHeader />
    );
  }
}

export default App;
