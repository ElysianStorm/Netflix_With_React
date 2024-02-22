import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = ({ mainMovie: { id, overview, title } }) => {
	// console.log("mainMovie-->", mainMovie);
	console.log("id-->", id);
	return (
		<div>
			<VideoTitle title={title} overview={overview}></VideoTitle>
			<VideoBackground movieId={id}></VideoBackground>
		</div>
	);
};

export default Maincontainer;
