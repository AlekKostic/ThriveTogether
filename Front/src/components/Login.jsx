import React, { useState } from 'react';
import './login.css'
import { useEffect } from 'react';

const Login = () => {

  useEffect(() => {

    document.body.classList.add('login-body');

    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameE, setUsernameE] = useState("");
  const [passwordE, setPasswordE] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Username:", username);
    console.log("Password:", password);
    setPassword("")
    setUsername("")

    if(usernameE==="input-polja")
    {
        setUsernameE("login-error-polje");
    }


  };

  return (
    <div className="forma">
      <div className="naslovforme">
        <p>Login</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={username}
            placeholder="Unesite email"
            onChange={(e) => setUsername(e.target.value)}
            className="input-polja"
          />
          <div className="login-error">{usernameE}</div>
        </div>
        <div>
          <input
            value={password}
            placeholder="Unesite password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input-polja"
          />
          <div className="login-error">{passwordE}</div>
        </div>
        <div>
          <button type="submit" className="submit-login">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
