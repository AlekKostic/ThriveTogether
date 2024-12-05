import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ForumPost from "../Components/ForumPost";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";

import ForumPostForm from "../components/ForumPostForm";
import Hero from "../Components/Hero";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);

  const addPost = () => {
    if (parseInt(localStorage.getItem("userID")) === -1) {
      navigate("/login");
      return;
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("evo");
    setModalOpen(false);
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

        {isModalOpen && (
          <ForumPostForm
            closeModal={closeModal}
            user_id={localStorage.getItem("userID")}
          />
        )}
        <div className="postovi">
          <div>
            {[...posts].reverse().map((post) => (
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
