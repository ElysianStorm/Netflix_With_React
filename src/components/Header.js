import React from "react";

const Header = () => {
	return (
		<div className="flex justify-between  bg-gradient-to-b from-black ">
			<img
				className="w-44"
				alt="logo"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
			></img>
			<div className=" bg-red-600 rounded-lg mt-4 px-2 py-1  ">
				<button>sign in</button>
			</div>
		</div>
	);
};

export default Header;
