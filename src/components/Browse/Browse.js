import React, { useEffect, useState } from "react";
import Header from "../Header";
import useAuth from "../../hooks/useAuth";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";

const Browse = () => {
	const { user } = useAuth();
	// const movieData = useNowPlaying();
	const topMovies = useTopRatedMovies();

	console.log("Browse user-->", user);
	console.log("movieData-->", topMovies);
	if (!topMovies) return;
	console.log("hi->", topMovies.results[7]);
	return (
		<div>
			<Header className="mt-24" logoStyle="w-32 ml-12"></Header>
			<Maincontainer mainMovie={topMovies?.results[7]}></Maincontainer>

			<Secondarycontainer movies={topMovies?.results}></Secondarycontainer>
		</div>
	);
};

export default Browse;
