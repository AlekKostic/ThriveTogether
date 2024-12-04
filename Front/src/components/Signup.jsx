import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Importujte useNavigate

const Signup = () => {
  const navigate = useNavigate(); // Inicijalizujte useNavigate

  

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [nameE, setNameE] = useState("");
  const [surnameE, setSurnameE] = useState("");
  const [usernameE, setUsernameE] = useState("");
  const [passwordE, setPasswordE] = useState("");
  const [mailE, setMailE] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsernameE("");
    setPasswordE("");
    setMailE("");
    setNameE("");
    setSurnameE("");

    let isValid = true;

    // Validate fields
    if (!username) {
      setUsernameE("Username is required.");
      isValid = false;
    }

    if (!password) {
      setPasswordE("Password is required.");
      isValid = false;
    }

    if (!mail) {
      setMailE("Email is required.");
      isValid = false;
    }

    if (!name) {
      setNameE("Name is required.");
      isValid = false;
    }

    if (!surname) {
      setSurnameE("Surname is required.");
      isValid = false;
    }

    if (!isValid) {
      return; 
    }

    // Clear form
    setPassword("");
    setUsername("");
    setName("");
    setSurname("");
    setMail("");

    // Make API request if validation passed
    axios({
      method: "post",
      url: "http://localhost:8080/api/users",
      data: {
        username: username,
        ime: name,
        prezime: surname,
        email: mail,
        password: password,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        // Handle success
        console.log(response);
      })
      .catch(function (response) {
        // Handle error
        console.log(response);
      });
  };

  // Navigacija na Login stranicu
  const handleLoginRedirect = () => {
    navigate("/login"); // Ovaj kod preusmerava na login stranicu
  };

  return (
    <div className="sve">
    <div className="forma">
      <div className="naslovforme">
        <p>Sign up</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            placeholder="Unesite ime"
            onChange={(e) => setName(e.target.value)}
            className="input-polja"
          />
          <div className="login-error">{nameE}</div>
        </div>

        <div>
          <input
            value={surname}
            placeholder="Unesite prezime"
            onChange={(e) => setSurname(e.target.value)}
            className="input-polja"
          />
          <div className="login-error">{surnameE}</div>
        </div>

        <div>
          <input
            value={username}
            placeholder="Unesite korisnicko ime"
            onChange={(e) => setUsername(e.target.value)}
            className="input-polja"
          />
          <div className="login-error">{usernameE}</div>
        </div>

        <div>
          <input
            value={mail}
            placeholder="Unesite email"
            onChange={(e) => setMail(e.target.value)}
            className="input-polja"
          />
          <div className="login-error">{mailE}</div>
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
          Već imate nalog?{" "}
          <a onClick={handleLoginRedirect}>Ulogujte se</a> {/* Link koji preusmerava na login */}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
