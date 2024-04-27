import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Mute from "./Mute";

const Maincontainer = ({ mainMovie: { id, overview, title } }) => {
	const [audio, setAudio] = useState("mute=1");
	console.log("id-->", id);
	function xyz() {
		console.log("xyz triggered");
		setAudio((prevAudio) => {
			return prevAudio === "mute=1" ? "mute=0" : "mute=1";
		});
	}

	return (
		<div className="">
			<Mute func={xyz} audio={audio}></Mute>
			<VideoTitle title={title} overview={overview}></VideoTitle>
			<VideoBackground movieId={id} audio={audio}></VideoBackground>
		</div>
	);
};

export default Maincontainer;
