import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import useAuth from "../hooks/useAuth";

const Header = () => {
	const { user } = useAuth();
	//
	return (
		<div
			className={`absolute flex justify-between   w-screen  left-0 right-0  z-10 bg-gradient-to-b from-black `}
		>
			<div className="w-48 ml-32">
				<img
					alt="logo"
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				></img>
			</div>
			{user && (
				<button className="bg-red-600 rounded-md px-4 py-1 text-white  my-auto mr-28">
					Sign out
				</button>
			)}
		</div>
	);
};

export default Header;
