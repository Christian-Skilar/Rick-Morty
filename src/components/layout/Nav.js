import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navigation() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (


        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            {auth ? (
                <>
                    <Link to="/admin">Admin</Link> <button className="login-btn" onClick={logout}>Log out</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>

	);
}

export default Navigation;
