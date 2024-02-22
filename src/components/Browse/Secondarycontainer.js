import React from "react";
import MovieList from "./MovieList";

const Secondarycontainer = ({ movies }) => {
	console.log("Secondarycontainer-->", movies);
	return (
		<div className="pl-12 bg-[#221F1F]">
			<div className="-mt-56 relative z-20">
				<MovieList title={"Now playing"} movies={movies}></MovieList>

				<MovieList title={"Popular"} movies={movies}></MovieList>

				<MovieList title={"Horror"} movies={movies}></MovieList>

				<MovieList title={"New Release"} movies={movies}></MovieList>
			</div>
		</div>
	);
};

export default Secondarycontainer;
