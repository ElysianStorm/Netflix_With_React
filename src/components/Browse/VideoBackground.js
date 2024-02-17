import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const [trailer, setTrailer] = useState(null);

	useMovieTrailer(movieId, setTrailer);

	if (trailer) console.log("Trailer-->", trailer);

	return (
		<div>
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${trailer?.key}?si=u6GVNnX6uw3yI6mu`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoBackground;
