import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
	const [topRatedMovies, setTopRatedMovies] = useState(null);

	async function getTopRatedMovies() {
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?page=1",
				API_OPTIONS,
			);
			const data = await res.json();
			setTopRatedMovies(data);
		} catch (error) {}
	}

	useEffect(() => {
		getTopRatedMovies();
	}, []);

	return topRatedMovies;
};

export default useTopRatedMovies;
