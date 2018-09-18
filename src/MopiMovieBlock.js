import React from 'react';
import './MopiMovieBlock.css';
import MovieInfoCard from './MovieInfoCard';

const MopiMovieBlock = ({ title, posterURL, release_date, vote_average}) => {
	if(title) {
		return(
			<div className="tc">
				<h3>{title}</h3>
				<div className="container">
				  <div className="row">
					<div className="col-lg-6 col-sm-12 block-left">
						<img className="img-fluid" src={posterURL} alt="poster" height="800px"/>
					</div>
					<div className="col-lg-6 col-sm-12 block-right">
						<MovieInfoCard 
							releaseDate={release_date}
							voteAverage={vote_average}
						/>
					</div>
				  </div>
				</div>
			</div>
		);
	}
	else {
		return(
			<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading"/>
		);
	}
}


export default MopiMovieBlock;