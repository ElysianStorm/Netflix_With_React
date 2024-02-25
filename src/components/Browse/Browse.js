import React, { useEffect, useState } from "react";
import Header from "../Header";
import useAuth from "../../hooks/useAuth";
import { API_OPTIONS } from "../../utils/constants";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useNowPlaying from "../../hooks/useNowPlaying";
const Browse = () => {
	const { user } = useAuth();
	// const movieData = useNowPlaying();
	const topMovies = useTopRatedMovies();

	console.log("Browse user-->", user);
	console.log("movieData-->", topMovies);
	if (!topMovies) return;
	return (
		<div>
			<Header className="mt-24" logoStyle="w-32 ml-12"></Header>
			<Maincontainer mainMovie={topMovies?.results[7]}></Maincontainer>

			<Secondarycontainer movies={topMovies?.results}></Secondarycontainer>
		</div>
	);
};

export default Browse;
