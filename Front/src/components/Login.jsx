import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './login.css';
import { useNavigate } from 'react-router-dom'; // Importujte useNavigate

const Login = () => {

  const navigate = useNavigate(); // Inicijalizujte useNavigate
  useEffect(() => {
    document.body.classList.add('login-body');
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameE, setUsernameE] = useState('');
  const [passwordE, setPasswordE] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUsernameE('');
    setPasswordE('');

    let isValid = true;

    if (!username) {
      setUsernameE('Please enter your email.');
      isValid = false;
    }
    if (!password) {
      setPasswordE('Please enter your password.');
      isValid = false;
    }

    if(!isValid)return;

    axios({
      method: "get",
      url: `http://localhost:8080/api/users/login/${username}/${password}`,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {

        setpasswordE("Neispravna lozinka ili korisnicko ime.")
        console.log(response);
      });
  };

  const handleLoginRedirect = () => {
    navigate("/signup"); // Ovaj kod preusmerava na login stranicu
  };

  return (
    <div className="sve">
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
      <div className="log-upit">
        <p >
          Nemate nalog?{" "}
          <a onClick={handleLoginRedirect}>Kreirajte ga</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
