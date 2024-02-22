import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const trailer = useMovieTrailer(movieId);

	if (trailer) console.log("Trailer-->", trailer);

	return (
		<div className="w-screen relative -mt-24 ">
			<iframe
				className="w-screen aspect-video"
				src={`https://www.youtube.com/embed/${trailer?.key}?si=u6GVNnX6uw3yI6mu?&autoplay=1&mute=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBackground;
