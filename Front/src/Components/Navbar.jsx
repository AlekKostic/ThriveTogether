import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // State initialization from localStorage or default values
  const [userID, setUserID] = useState(() => {
    return localStorage.getItem('userID') ? parseInt(localStorage.getItem('userID')) : -1;
  });
  
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || 'hakaton';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setUserID(localStorage.getItem('userID') ? parseInt(localStorage.getItem('userID')) : -1);
      setUsername(localStorage.getItem('username') || 'hakaton');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleSigninRedirect = () => {
    navigate("/signup");
  };

  const handleForumRedirect = () => {
    navigate('/forum');
  };

  const handleStatistikaRedirect = () => {
    navigate('/statistika');
  };

  const handleKurseviRedirect = () => {
    navigate('/kursevi');
  };

  const handleHomeRedirect = () => {
    navigate('/');
  };

  const logout = () => {
    localStorage.setItem('userID', -1);
    ///localStorage.setItem('username', '');
    setUserID(-1);
    //setUsername('');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="./public/MentalHealthLogo.png" className="llogo" alt="Logo" />
        <a onClick={handleHomeRedirect}>Home</a>
        <a onClick={handleForumRedirect}>Forum</a>
        <a onClick={handleStatistikaRedirect}>Statistika</a>
        <a onClick={handleKurseviRedirect}>Kursevi</a>
      </div>
      <div className="navbar-right">
        {userID === -1 ? (
          <>
            <a onClick={handleLoginRedirect}>Login</a>
            <a onClick={handleSigninRedirect}>Signup</a>
          </>
        ) : (
          <>
            <p className="usernamee">{username}</p>
            <button className="logout-dugme" onClick={logout}>Odjavi se</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
