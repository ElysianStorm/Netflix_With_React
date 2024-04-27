import React from "react";
import MovieList from "./MovieList";
import useNowPlaying from "../../hooks/useNowPlaying";
import usePopularMovies from "../../hooks/usePopular";
import useMostLikedMovies from "../../hooks/useMostLiked";

const Secondarycontainer = ({ movies }) => {
	console.log("Secondarycontainer-->", movies);

	const nowPlaying = useNowPlaying();
	const popularMovies = usePopularMovies();

	const mostLiked = useMostLikedMovies();

	return (
		<div className="pl-12 bg-[#221F1F]">
			<div className="-mt-48 relative z-20">
				<MovieList title={"Most Liked"} movies={mostLiked}></MovieList>
				<MovieList title={"Top Rated"} movies={movies}></MovieList>

				<MovieList title={"Now Playing"} movies={nowPlaying}></MovieList>

				<MovieList title={"Popular"} movies={popularMovies}></MovieList>
			</div>
		</div>
	);
};

export default Secondarycontainer;
