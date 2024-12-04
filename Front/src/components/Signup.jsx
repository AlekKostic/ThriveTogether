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

  const handleSubmit =  async(e) => {
    e.preventDefault();

    /*// Reset errors
    setUsernameE("");
    setPasswordE("");
    setMailE("");

    // Basic validation
    if (!name || !surname || !username || !mail || !password) {
      if (!username) setUsernameE("Please enter a username.");
      if (!password) setPasswordE("Please enter a password.");
      if (!mail) setMailE("Please enter a valid email.");
      return;
    }*/

      const userData = { name, surname, mail, password, username };

        try {
            const response = await axios.post('http://192.168.14.217:8080/api/users', {
              "username":"test",
              "ime":"test",
              "prezime": "prezime",
              "email": "test@test.com",
              "password": "jeuju"
            }, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Korisnik je uspešno kreiran:', response.data);
        } catch (error) {
            console.error('Greška prilikom kreiranja korisnika:', error.response ? error.response.data : error.message);
        }
      // Clear form fields
      setName("");
      setSurname("");
      setUsername("");
      setMail("");
      setPassword("");

      // Optionally, show a success message or redirect
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
