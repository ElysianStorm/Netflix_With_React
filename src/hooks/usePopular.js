import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
	const [popularMovies, setPopularMovies] = useState(null);

	async function getPopularMovies() {
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/movie/popular?page=2",
				API_OPTIONS,
			);
			const data = await res.json();
			setPopularMovies(data);
		} catch (error) {
			console.log("Error Encountered while fetching movies");
		}
	}

	useEffect(() => {
		getPopularMovies();
	}, []);

	return popularMovies?.results;
};

export default usePopularMovies;

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTQ5OTg3MzY4YzM3MWQxZGMzYjMzNTI5ZDRkMDlhZSIsInN1YiI6IjY1ZDA3NDk0MmRkYTg5MDE2MmRjNzllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t5WCeY1vfTU0vPm9kUOLUgVasmQuNs_I13Lnnee6eJk'
//     }
//   };

//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
