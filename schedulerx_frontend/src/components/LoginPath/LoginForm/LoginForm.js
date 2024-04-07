import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      navigate("/calendar");
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!username || !password ) {
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


  return (
    <>
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
    </>

  );
}

export default LoginForm;
