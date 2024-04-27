import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
	const [showOverview, setShowOverview] = useState(true);

	setTimeout(() => {
		console.log("setTimeout triggered");
		setShowOverview(false);
	}, 5500);

	// useEffect(() => {
	// 	if (showOverview) {
	// 		setTimeout(() => {
	// 			setShowOverview(false);
	// 		}, 5500);
	// 	}
	// }, [showOverview]);

	const playicon = (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="ltr-4z3qvp e1svuwfo1"
			data-name="Play"
			aria-labelledby=":R19kpt9llkm:"
			aria-hidden="true"
		>
			<path
				d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
				fill="currentColor"
			></path>
		</svg>
	);

	const infoIcon = (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="ltr-4z3qvp e1svuwfo1"
			data-name="CircleI"
			aria-labelledby=":Rkqt9llkm:"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
				fill="currentColor"
			></path>
		</svg>
	);

	return (
		<div
			className={`absolute z-10  pr-20 pl-12 text-white  ${
				!showOverview ? " mt-[30%]" : " mt-[20%]"
			} `}
		>
			<h1
				className={`text-6xl font-bold mb-3 ${
					!showOverview ? " text-3xl opacity-70 mb-10" : ""
				}`}
			>
				{title}
			</h1>
			{showOverview && <p className="w-4/12  ">{overview.substring(0, 204)}</p>}

			<div className={`flex text-2xl mt-4 ${!showOverview ? " mt-12 " : ""}`}>
				<button
					onClick={() => console.log("clicked")}
					className="bg-white flex  items-center  text-black px-8 py-2 rounded"
				>
					<div>{playicon}</div>

					<div className="pl-2">Play</div>
				</button>
				<button
					onClick={() => setShowOverview(true)}
					className="flex mx-2  items-center hover:bg-gray-700 bg-gray-600 text-white px-3 py-2 opacity-80 rounded-md"
				>
					<div>{infoIcon}</div>
					<div className="pl-2">More info</div>
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
