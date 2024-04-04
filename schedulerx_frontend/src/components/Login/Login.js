import LoginForm from "../LoginForm/LoginForm";

function Login() {
    return (
        <div>
            <h1>Please Log in:</h1>
            <LoginForm />
            <a href="http://localhost:8080/oauth2/authorization/github">
                Login with GitHub <i className="fab fa-github"></i>
            </a>
            <br />
            <a href="http://localhost:8080/oauth2/authorization/google">
                Login with Google <i className="fab fa-google"></i>
            </a>
        </div>
    );
}

export default Login;
