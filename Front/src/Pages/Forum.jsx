import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
<<<<<<< HEAD
import ForumPost from '../Components/ForumPost';
=======
import ForumPost from "../Components/ForumPost";
import axios from "axios";

>>>>>>> 9945220ee188e6e595e52515fd014b42b076b56f
const Forum = () => {
  const [posts, setPosts] = useState([]);

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

      {posts.map((post) => (
        <ForumPost key={post.id_pitanja} post={post} />
      ))}

      <Footer />
    </div>
  );
};

export default Forum;
