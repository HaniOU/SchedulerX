import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import classes from "./Login.module.css"
function Login() {
    // <Link to="http://localhost:8080/oauth2/authorization/github">Continue with Github</Link>
   // <Link to="http://localhost:8080/oauth2/authorization/google">Continue with Google</Link>
    return (
        <div >
            <h1 className={classes.title}>SchedulerX</h1>
            <LoginForm />

        </div>
    );
}

export default Login;
