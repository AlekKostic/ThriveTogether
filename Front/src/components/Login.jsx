import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom"; // Importujte useNavigate
import { IoIosClose } from "react-icons/io";

const Login = () => {
  const navigate = useNavigate(); // Inicijalizujte useNavigate

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameE, setUsernameE] = useState("");
  const [passwordE, setPasswordE] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("userID", 1);

    setUsernameE("");
    setPasswordE("");

    let isValid = true;

    if (!username) {
      setUsernameE("Please enter your email.");
      isValid = false;
    }
    if (!password) {
      setPasswordE("Please enter your password.");
      isValid = false;
    }

    if (!isValid) return;

    axios({
      method: "get",
      url: `http://localhost:8080/api/users/login/${username}/${password}`,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        localStorage.setItem("userID", response.data.id);
        localStorage.setItem("username", response.data.username);
        navigate("/");
        console.log(response);
      })
      .catch(function (response) {
        setPasswordE("Neispravna lozinka ili korisnicko ime.");
        console.log(response);
      });
  };

  const handleLoginRedirect = () => {
    navigate("/signup"); // Ovaj kod preusmerava na login stranicu
  };

  const handleClose = () => {
    navigate("/"); // Ovaj kod preusmerava na login stranicu
  };

  return (
    <div className="sve">
      <div className="forma">
        <div className="gase" onClick={handleClose}>
          <IoIosClose />
        </div>
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
            <button type="submit" className="submit-login">
              Submit
            </button>
          </div>
        </form>
        <div className="log-upit">
          <p>
            Nemate nalog? <a onClick={handleLoginRedirect}>Kreirajte ga</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
