import React, { Component } from 'react';
import './App.css';
import MopiHeader from './MopiHeader';

// Define a minimum and maximum year (the max is the current year)
const MIN_YEAR = 1990;
const MAX_YEAR = (new Date()).getFullYear();

// These are URL prefixes for the backdrop and poster images
const BACKDROP_PATH_PREFIX = 'https://image.tmdb.org/t/p/w780';
const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500';

class App extends Component {
  componentDidMount() {
    // Set initial state
    this.setState({
      randomMovie: {}
    });

    // Calculate a random year between MIN_YEAR and MAX_YEAR (excluded)
    let randomYear = Math.floor(Math.random() * (MAX_YEAR - MIN_YEAR) + MIN_YEAR);

    // Fetch all movies from the random year
    fetch('https://api.themoviedb.org/3/discover/movie?year=' + randomYear + '&api_key=c42d6110155d2e79d0d1fd378a0fe02e')
      .then(response => response.json())
      .then(data => {
        // Now fetch a random page, based on the total_pages property returned by the previous call
        fetch('https://api.themoviedb.org/3/discover/movie?page=' + Math.floor((Math.random() * data.total_pages) + 1) + '&api_key=c42d6110155d2e79d0d1fd378a0fe02e')
          .then(response => response.json())
          .then(data => {
            // Get a random movie from that page
            let randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

            // Update our state
            this.setState({randomMovie: randomMovie});

            // This is just for debugging
            console.log('Random movie: ', randomMovie);
            console.log('Backdrop path: ', BACKDROP_PATH_PREFIX + randomMovie.backdrop_path);
            console.log('Poster path: ', POSTER_PATH_PREFIX + randomMovie.poster_path);
          });
      });
  }

  render() {
    return (
      <div>
        <MopiHeader />

        <footer>Powered by <a href="https://www.tmdb.org/">The Movie DB</a></footer>
      </div>
    );
  }
}

export default App;
