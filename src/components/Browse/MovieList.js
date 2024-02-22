import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
	return (
		<div className="pb-12">
			<h1 className=" text-3xl text-white  py-3 "> {title}</h1>
			<div className="flex overflow-x-scroll">
				<div className="flex">
					{/* <MovieCard poster_path={movies[0].poster_path}></MovieCard> */}
					{movies?.map((movie) => (
						<MovieCard
							key={movie.id}
							poster_path={movie?.poster_path}
						></MovieCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
