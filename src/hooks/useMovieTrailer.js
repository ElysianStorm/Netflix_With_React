import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId,setTrailer) =>
{
    async function getMovieVideo() {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos`,
			API_OPTIONS,
		);

		const videos = await res.json();

		console.log("videos---->", videos);

		let myTrailer = null;

		for (let video of videos.results) {
			if (video.type === "Trailer") {
				myTrailer = video;
				break;
			}
		}
		if (!myTrailer) myTrailer = videos[0];
		setTrailer(myTrailer);
	}

	useEffect(() => {
		getMovieVideo();
	}, []);
}

export default useMovieTrailer;