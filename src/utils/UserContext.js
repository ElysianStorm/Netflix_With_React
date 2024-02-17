import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
	user: null,
	setUser: (...args) => {},
});
// localStorage.setItem( key, value );
// return localStorage.getItem(key) || null;

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
	
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);
	console.log("AuthProvider user-->", user);
	const navigate = useNavigate();
	console.log("AuthProvider called");
	// useEffect(() => {
	// 	console.log("Inside AuthProvider useEffecte");
	// 	if (user) {
	// 		navigate("/browse");
	// 	}
	// }, [user]);

	// if (user) navigate("/browse");

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
