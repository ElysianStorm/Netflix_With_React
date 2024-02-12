import Browse from "./components/Browse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/browse" element={<Browse />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
