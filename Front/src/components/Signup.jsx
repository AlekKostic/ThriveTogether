import React, { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  useEffect(() => {
    document.body.classList.add("login-body");
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameE, setUsernameE] = useState("");
  const [passwordE, setPasswordE] = useState("");
  const [mailE, setMailE] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Ime:", name);
    console.log("Prezime:", surname);
    console.log("Mejl:", mail);
    setPassword("");
    setUsername("");
    setName("");
    setSurname("");
    setMail("");
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
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
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
          <div className="login-error"></div>
        </div>

        <div>
          <input
            value={surname}
            placeholder="Unesite prezime"
            onChange={(e) => setSurname(e.target.value)}
            className="input-polja"
          />
          <div className="login-error"></div>
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
    </div>
  );
};

export default Signup;
