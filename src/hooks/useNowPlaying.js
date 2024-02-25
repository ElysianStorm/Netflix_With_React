import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlaying = () => {
	const [movieData, setMovieData] = useState(null);

	const getNowPlayingMovies = async () => {
		const res = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			API_OPTIONS,
		);

		const data = await res.json();
		// console.log("data-->", data);
		setMovieData(data);
		// return data;
	};
	useEffect(() => {
		getNowPlayingMovies();
	}, []);
	return movieData;
};

export default useNowPlaying;
