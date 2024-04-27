import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMostLikedMovies = () => {
	const [mostLikedMovies, setMostLikedMovies] = useState(null);

	async function getMostLikedMovies() {
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?page=2",
				API_OPTIONS,
			);
			const data = await res.json();
			setMostLikedMovies(data);
		} catch (error) {}
	}

	useEffect(() => {
		getMostLikedMovies();
	}, []);

	return mostLikedMovies?.results;
};

export default useMostLikedMovies;
