
// <i className="fab fa-github"></i> <i className="fab fa-google"></i>
function Login() {
    return (
        <div>
            <h1>Please Log in:</h1>
            <a href="http://localhost:8080/oauth2/authorization/github">
                Login with GitHub
            </a>
            <br />
            <a href="http://localhost:8080/oauth2/authorization/google">
                Login with Google 
            </a>
        </div>
    );
}

export default Login;
