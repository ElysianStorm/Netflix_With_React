import React from "react";

const MovieCard = ({ poster_path }) => {
	return (
		<div className=" w-max mr-3    ">
			<img
				className="w-40   rounded-md"
				src={`https://image.tmdb.org/t/p/w200${poster_path}`}
				alt="poster"
			></img>
		</div>
	);
};

export default MovieCard;
// object-fill h-48 w-80
// object-fill h-48 w-80 mr-2
// object-fill h-48 w-80 rounded
