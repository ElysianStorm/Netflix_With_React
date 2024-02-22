import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import useAuth from "../hooks/useAuth";

const Header = ({ className, logoStyle }) => {
	const { user, setUser } = useAuth();

	function handleSignOut() {
		setUser(() => null);
	}
	//
	return (
		<div
			className={` absolute flex justify-between   w-screen  left-0 right-0  z-20 bg-gradient-to-b from-black ${className}`}
		>
			<div className={` ${logoStyle}`}>
				<img
					alt="logo"
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				></img>
			</div>
			{user && (
				<button
					onClick={handleSignOut}
					className="bg-red-700 hover:bg-red-800 rounded-md px-4 py-1 text-white  my-auto mr-16"
				>
					Sign out
				</button>
			)}
		</div>
	);
};

export default Header;
