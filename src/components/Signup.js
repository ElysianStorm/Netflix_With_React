import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidator } from "../utils/validateForm";
import { UsersModule } from "../utils/database";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signup = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const navigate = useNavigate();
	const { setUser } = useAuth();
	const email = useRef(null);
	const password = useRef(null);

	function toggleForm() {
		setIsSignIn((prevState) => !prevState);
	}

	function handleSubmit(e) {
		const { value: enteredEmail } = email.current;
		const { value: enteredPassword } = password.current;
		const validationError = formValidator(enteredEmail, enteredPassword);
		console.log(validationError);
		if (validationError) return;
		UsersModule.addUser({
			email: enteredEmail,
			password: enteredPassword,
		});

		console.log(UsersModule.getAllUsers());
		setUser({
			email: enteredEmail,
			password: enteredPassword,
		});

		// navigate("/browse");
	}

	return (
		<div className=" ">
			<Header></Header>
			<div className="w-full ">
				<img
					className="absolute"
					alt="backgroud"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
				></img>
				<div className="absolute w-screen h-screen bg-black opacity-55 text-white"></div>
			</div>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-4/12 py-12 px-20 mt-44 bg-black absolute mx-auto left-0 right-0 text-white rounded bg-opacity-65"
			>
				<h1 className="font-bold text-3xl pb-2">
					{isSignIn ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignIn && (
					<input
						className="p-4  my-2 w-full rounded bg-gray-800 bg-opacity-80"
						type="text"
						placeholder="Full Name"
					></input>
				)}

				<input
					ref={email}
					className="p-4   my-2 w-full rounded bg-gray-800 bg-opacity-80"
					type="text"
					placeholder="email or phone number"
				></input>
				<input
					ref={password}
					className="p-4 my-2 w-full rounded bg-gray-800 bg-opacity-80"
					type="password"
					placeholder="Password"
				></input>
				<button
					onClick={handleSubmit}
					className="bg-red-600 rounded-md p-2 my-4    w-full"
				>
					Sign In
				</button>
				<p>
					<span className="text-gray-300">
						{isSignIn ? "new to netflix? " : "Already registered? "}
					</span>
					<span className="cursor-pointer " onClick={toggleForm}>
						{isSignIn ? "Sign up now." : "Sign in"}
					</span>
				</p>
			</form>
		</div>
	);
};

export default Signup;
