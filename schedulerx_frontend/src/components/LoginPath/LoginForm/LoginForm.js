import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import user_icon from "../../../Assets/person.png"
import password_icon from "../../../Assets/password.png"

import classes from "./LoginForm.module.css"
import RegisterModal from "../Register/RegisterModal";
import ReactDOM from "react-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("")
  const navigate = useNavigate();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      navigate("/calendar");
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!username || !password) {
      setErrorLogin('Please fill in all fields.');
      return;
    }
    const newUser = { username: username, password: password }
    try {
      const response = await fetch("http://localhost:8080/auth/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      const jwt = await response.text();
      localStorage.setItem('jwt', jwt);
      navigate("/calendar");

    } catch (error) {
      setUsername("");
      setPassword("");
      setErrorLogin(error.message);
    }

  }

  /*<>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorLogin && <h2>{errorLogin}</h2>}
      </> */
  return (<>

    <div className={classes.center}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.txt_field}>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span></span>
          <label htmlFor="username">Username</label>
        </div>

        <div className={classes.txt_field}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span></span>
          <label htmlFor="password">Password</label>
        </div>
        <div className={classes.pass}>Forgot Password?</div>
        <button type="submit" className={classes.login}>Login</button>
        <div className={classes.signup_link}>
          Not a member? <button  type="button" onClick={() => setShowRegisterModal(true)}>Register</button>
        </div>

      </form>
      {errorLogin && <h2 className={classes.errorMessage}>{errorLogin}</h2>}
    </div>
    {showRegisterModal &&
      ReactDOM.createPortal(<div>
        <RegisterModal onRegisterClose={() => setShowRegisterModal(false)} />
      </div>, document.body
      )}
  </>
  );
}

export default LoginForm;
