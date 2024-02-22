import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="absolute mt-[20%] px-20 text-white">
			<h1 className="text-6xl font-bold mb-3">{title}</h1>
			<p className="w-4/12  ">{overview}</p>
			<div className="flex ">
				<button className="bg-white text-black px-8 py-2 rounded">Play</button>
				<button className="mx-2 bg-gray-600 text-white px-3 py-2 opacity-55 rounded-md">
					More info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
