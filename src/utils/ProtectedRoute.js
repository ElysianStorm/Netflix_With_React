import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component, path }) => {
	const { user } = useAuth();

	console.log("ProtectedRoute user-->", user);

	if (user && path === "/signup") return <Navigate to="/browse" />;

	if (!user && path === "/browse") return <Navigate to={"/signup"} />;

	const Component = component;
	return <Component />;
};

export default ProtectedRoute;
