import Browse from "./components/Browse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import AuthProvider, { UserContext } from "./utils/UserContext";
import { useState } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";
function App() {
	// const [user, setUser] = useState(null);

	// function setLoggenInUser(user) {
	// 	setUser(user);
	// }
	// console.log("App-->", user);
	return (
		<>
			{/* <UserContext.Provider value={{ user, setUser }}> */}
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route
							path="/browse"
							element={<ProtectedRoute path="/browse" component={Browse} />}
						/>
						<Route
							path="/signup"
							element={<ProtectedRoute path="/signup" component={Signup} />}
						/>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
			{/* </UserContext.Provider> */}
		</>
	);
}

export default App;
