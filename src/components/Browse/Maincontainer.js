import React from "react";
import VideoBackground from "./VideoBackground";

const Maincontainer = ({ mainMovie: { id } }) => {
	// console.log("mainMovie-->", mainMovie);
	console.log("id-->", id);
	return (
		<div>
			<VideoBackground movieId={id}></VideoBackground>
		</div>
	);
};

export default Maincontainer;
