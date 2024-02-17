import React, { useEffect } from "react";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
const Browse = () => {
	const getNowPlayingMovies = async () => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTQ5OTg3MzY4YzM3MWQxZGMzYjMzNTI5ZDRkMDlhZSIsInN1YiI6IjY1ZDA3NDk0MmRkYTg5MDE2MmRjNzllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t5WCeY1vfTU0vPm9kUOLUgVasmQuNs_I13Lnnee6eJk",
			},
		};

		const res = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			options,
		);

		const data = await res.json();
		console.log("movies-->", data);

		return data;
	};
	useEffect(() => {
		const movies = getNowPlayingMovies();
	}, []);

	const { user } = useAuth();
	console.log("Browse user-->", user);
	return <Header></Header>;
};

export default Browse;
