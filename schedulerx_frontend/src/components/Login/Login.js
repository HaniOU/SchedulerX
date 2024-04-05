import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
function Login({ verifyAuthentification }) {
    return (
        <div>
            <LoginForm verifyAuthentification={verifyAuthentification}/>
            <Link to="http://localhost:8080/oauth2/authorization/github">Continue with Github</Link>
            <br/>
            <Link to="http://localhost:8080/oauth2/authorization/google">Continue with Google</Link>
        </div>
    );
}

export default Login;
