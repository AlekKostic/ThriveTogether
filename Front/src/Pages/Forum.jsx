import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ForumPost from "../Components/ForumPost";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import ForumPostForm from "../Components/ForumPostForm"; // Import the popup form

const Forum = () => {
  const [posts, setPosts] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false); // State to control popup visibility

  const addPost = () => {
    setModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal when called
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/pitanja",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="forum-container">
      <Navbar />

      <h2>Mentalno zdravlje</h2>
      <p>Pitanja i odgovori koje ljudi postavljaju</p>
      <div className="postavi-objavi">
        <button className="postt" onClick={addPost}>
          + Postavi objavu
        </button>
      </div>

      {/* Render the ForumPostForm if the modal is open */}
      {isModalOpen && <ForumPostForm closeModal={closeModal} user_id={4} />}

      {posts.map((post) => (
        <ForumPost key={post.id_pitanja} post={post} />
      ))}

      <Footer />
    </div>
  );
};

export default Forum;
