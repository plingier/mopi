import React from 'react';

const MopiMovieBlock = ({ title, posterURL}) => {
	if(title) {
		return(
			<div className="tc">
				<h2> MovieTitle: {title} </h2>
				<img src={posterURL} alt="poster"/>
			</div>
		);
	}
	else {
		return(
			<h2> LOADING </h2>
		);
	}
}


export default MopiMovieBlock;