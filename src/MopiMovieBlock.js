import React from 'react';

const MopiMovieBlock = ({ title, posterURL}) => {
	return(
		<div className="tc">
			<h2> MovieTitle: {title} </h2>
			<img src="{posterURL}" alt="poster"/>
		</div>
	);
}


export default MopiMovieBlock;