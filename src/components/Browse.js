import React from "react";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
const Browse = () => {
	const { user } = useAuth();
	console.log("Browse user-->", user);
	console.log();
	return <Header></Header>;
};

export default Browse;
