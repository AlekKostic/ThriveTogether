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

  const [showMenu, setShowMenu] = useState(false);  // State to show/hide the dropdown menu
  const [newUsername, setNewUsername] = useState('');  // State for updating username
  const [newUsernameE, setNewUsernameE] = useState('');
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
    localStorage.setItem('username', '');
    setUserID(-1);
    setUsername('');
    setShowMenu(false); // Hide menu after logout
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle the visibility of the dropdown menu
  };

  const handleUpdateUsername = () => {
    if (newUsername.trim()) {
      localStorage.setItem('username', newUsername);
      setUsername(newUsername);
      setShowMenu(false);  // Hide menu after update
      setNewUsername("")
      setNewUsernameE("")
    }else setNewUsernameE("Unesite ime.")
  };

  const handleDeleteAccount = () => {
    // Here you would send a request to your backend to delete the account
    // For now, we will just reset localStorage
    localStorage.removeItem('userID');
    localStorage.removeItem('username');
    setUserID(-1);
    setUsername('');
    setShowMenu(false);  // Hide menu after deleting account
  };

  return (
    <>

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
              <p className="usernamee" onClick={toggleMenu}>{username}</p>
              {showMenu && (
                <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
                  <div className="dropdown-item">
                    <input
                      type="text"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      placeholder="New username"
                    />
                    <p className="login-error">{newUsernameE}</p>
                    <button onClick={handleUpdateUsername}>Update Username</button>
                  </div>
                  <div className="dropdown-item">
                    <button onClick={handleDeleteAccount}>Delete Account</button>
                  </div>
                </div>
              )}
              <button className="logout-dugme" onClick={logout}>Odjavi se</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
