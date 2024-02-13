import { useContext } from "react";
import { AuthContext } from "../utils/UserContext";

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw Error("useAuthContext must be used inside an AuthContextProvider");
	}
	return context;
};

export default useAuth;
