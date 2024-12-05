import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ForumPost from "../Components/ForumPost";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import ForumPostForm from "../Components/ForumPostForm"; // Import the popup form
import Hero from "../Components/Hero";

const Forum = () => {
  const [posts, setPosts] = useState([{
    "id_pitanja": 1,
    "head": "test",
    "user": {
        "id": 6,
        "ime": "test",
        "prezime": "prezime",
        "email": "test@test.com",
        "password": "jeuju",
        "username": "test"
    }
},
{
    "id_pitanja": 5,
    "head": "test3",
    "user": {
        "id": 4,
        "ime": "Aleksandar",
        "prezime": "Kostic",
        "email": "kostic.aleksandar006@gmail.com",
        "password": "test1234",
        "username": "alek"
    }
}]);

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
      <div className="hero-section">
            <div className="Hero3"></div>
        </div> 

      <div className="forumm">
      <div className="postavi-objavi">
        <button className="postt" onClick={addPost}>
          + Postavi objavu
        </button>
      </div>
      <hr></hr>

      {isModalOpen && <ForumPostForm closeModal={closeModal} user_id={4} />}
      <div className="postovi">
        <div>
       {posts.map((post) => (
        <ForumPost key={post.id_pitanja} post={post} />
      ))}
       </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forum;
