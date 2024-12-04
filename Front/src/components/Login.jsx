import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './login.css';

const Login = () => {
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

    // Reset errors
    setUsernameE('');
    setPasswordE('');

    // Validation
    if (!username) {
      setUsernameE('Please enter your email.');
      return;
    }
    if (!password) {
      setPasswordE('Please enter your password.');
      return;
    }

    try {
      const response = await axios.post('/login', {
        username,
        password,
      });

      console.log('Login successful:', response.data);

      // Clear inputs after success
      setUsername('');
      setPassword('');

      // Redirect or handle success (e.g., save token)
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);

      // Show error messages based on the error
      if (error.response?.status === 401) {
        setUsernameE('Invalid username or password.');
      } else {
        setUsernameE('An error occurred. Please try again.');
      }
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
