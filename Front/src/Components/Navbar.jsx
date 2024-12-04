import React from 'react'
import { useNavigate } from 'react-router-dom'; // Importujte useNavigate

const Navbar = () => {
    const navigate = useNavigate(); // Inicijalizujte useNavigate
  const handleLoginRedirect = () => {
    navigate("/login"); // Ovaj kod preusmerava na login stranicu
  };
  const handleSigninRedirect = () => {
    navigate("/signup"); // Ovaj kod preusmerava na login stranicu
  };
  const handleLogo = () => {
    navigate("/"); // Ovaj kod preusmerava na main stranicu
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/*<ul className="sidenav">*/}
        <p id="#NazivSajta" onClick={handleLogo}>MemoCare</p>
        <a href="#forum">Forum</a>
        <a href="#statistika">Statistika</a>
        <a href="#kursevi">Kursevi</a>
        {/*</ul>*/}
      </div>
      <div className="navbar-right">
        <a onClick={handleLoginRedirect}>Login</a>
        <a onClick={handleSigninRedirect}>Signup</a>
      </div>
    </nav>
  )
}

export default Navbar