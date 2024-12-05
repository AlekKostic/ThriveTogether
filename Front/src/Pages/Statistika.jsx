import React, { useState } from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Emotionform from "../Components/Emotionform";

const Statistika = () => {

  const [isModalOpen, setModalOpen] = useState(false); // State to control popup visibility

  const addPost = () => {
    setModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal when called
  };

  return (
    <div>
        <div className="statistika-container">
        <Navbar />
        <div className="hero-section">
            <div className="Hero4"></div>
        </div> 

        <div className="postavi-objavi2">
        <button className="postt" onClick={addPost}>+ Dodaj osecanje</button>
      </div>
 
        {/* Render the ForumPostForm if the modal is open */}
       {isModalOpen && <Emotionform closeModal={closeModal} />}
      

        <Footer />
      </div>
    </div>
  )
}

export default Statistika