import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function LoginForm({ verifyAuthentification }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false)
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    if (username === "hani" && password === "123"){
      verifyAuthentification();
      navigate('/calendar'); 
    }
    setUsername("");
    setPassword("");
    setErrorLogin(true)
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
      {errorLogin && <h2>Username or Password wrong, please try again!</h2>}
    </>
    
  );
}

export default LoginForm;
