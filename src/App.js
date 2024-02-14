import Browse from "./components/Browse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import AuthProvider from "./utils/UserContext";
import ProtectedRoute from "./utils/ProtectedRoute";
function App() {
	// const [user, setUser] = useState(null);
	console.log(process.env);
	const port = process.env.PORT;
	console.log("port = ", port);
	// function setLoggenInUser(user) {
	// 	setUser(user);
	// }
	// console.log("App-->", user);
	return (
		<>
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
