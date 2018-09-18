import React from 'react';


const MovieInfoCard = ({ releaseDate, voteAverage }) => {
	console.log("checken",releaseDate, voteAverage);
	return(
		<div className="card">
		  <img className="card-img-top" src="http://www.ritcs.be/sites/default/files/styles/image_953x500_/public/2017-12/Cinema%20RITS.jpg?h=2a390987&itok=hj9nGgt3" alt="Card image cap"/>
		  <div className="card-body">
		    <h5 className="card-title" style={{fontWeight: 'bold'}}>Movie info</h5>
		      <ul className="list-group list-group-flush">
		  	  	<li className="list-group-item">Release date: {releaseDate}</li>
			    <li className="list-group-item">Vote Average: {voteAverage}</li>
			  </ul>
		    <a href="#" className="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="multiCollapseExample2">See more info</a>
		  	  <div className="collapse" id="collapseExample">
		  	  	<p>Ziever, ziever, meer ziever</p>
		  	  </div>
		  </div>
		</div>
	);
}

export default MovieInfoCard;