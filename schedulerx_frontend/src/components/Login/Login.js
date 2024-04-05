import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import ReactDOM from "react-dom";

function Login({ verifyAuthentification }) {
    const[showRegisterModal, setShowRegisterModal]=useState(false);
    return (
        <div>
            <p>You don't have an account yet? <button onClick={() => setShowRegisterModal(true)}>Register</button></p>
            {showRegisterModal &&
                ReactDOM.createPortal(<div className="overlay">
                    <RegisterModal onRegisterClose={()=> setShowRegisterModal(false)}/>
                </div>, document.body
                )}
            <LoginForm verifyAuthentification={verifyAuthentification}/>
            <Link to="http://localhost:8080/oauth2/authorization/github">Continue with Github</Link>
            <br/>
            <Link to="http://localhost:8080/oauth2/authorization/google">Continue with Google</Link>
        </div>
    );
}

export default Login;
