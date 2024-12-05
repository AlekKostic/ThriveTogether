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
  console.log(localStorage.getItem('userID'));
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/*<ul className="sidenav">*/}
        <a id="#NazivSajta" onClick={handleHomeRedirect}>MemoCare</a>
        <a href="#forum" onClick={handleForumRedirect}>Forum</a>
        <a href="#statistika" onClick={handleStatistikaRedirect}>Statistika</a>
        <a href="#kursevi" onClick={handleKurseviRedirect}>Kursevi</a>
        {/*</ul>*/}
      </div>
      <div className="navbar-right">
      {
      parseInt(localStorage.getItem('userID')) === -1 ? (
        <>
          <a onClick={handleLoginRedirect}>Login</a>
          <a onClick={handleSigninRedirect}>Signup</a>
        </>
      ) : (
        <span>aaa</span>
      )
    }
      </div>
    </nav>
  )
}

export default Navbar
