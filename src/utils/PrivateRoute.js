// import { Navigate, Route } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const PrivateRoute = ({ children, ...rest }) => {
// 	const { user } = useAuth();

// 	return (
// 		<Route
// 			{...rest}
// 			render={({ location }) =>
// 				user && rest.path === "/signup" ? (
// 					<Navigate to="/browse" replace />
// 				) : !user && rest.path === "/browse" ? (
// 					<Navigate to="/signup" replace />
// 				) : (
// 					children
// 				)
// 			}
// 		/>
// 	);
// };

// export default PrivateRoute;
