import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import Reply from "./Reply";
import axios from "axios";

const ForumPost = ({ post }) => {
  const [odg, setOdg] = useState([]);

  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments);
    axios({
      method: "get",
      url: `http://localhost:8080/api/odgovori/${post.id_pitanja}`,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setOdg(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="post" key={post.id_pitanja}>
      <h3 className="post-user">{post.user.username}</h3>
      <p className="post-text">{post.head}</p>
      <div className="dugmecom">
        <button className="showcom" onClick={handleShowComments}>
        {showComments ?<FaAngleDown /> :<FaAngleUp/>}
          {showComments ?"Sakrij komentare" :"Prikazi komentare"}
        </button>
      </div>
      {/* Render comments conditionally */}
      {showComments && (
        <div className="comments">
          {odg.map((o) => (
            <Reply key={o.id_odgovora} odg={o.odgovor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ForumPost;
