import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Forum = () => {
    return (
      <div className="forum-container">
        <Navbar />
        <h2>Mentalno zdravlje</h2>
        <p>Pitanja i odgovori koje ljudi postavljaju</p>
        <Footer />
      </div>
    )
  }

export default Forum