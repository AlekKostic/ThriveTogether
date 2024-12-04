import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";

const ForumPost = ({ post }) => {
  const handleShowComments = () => {
    return;
  };

  return (
    <div className="post" key={post.id_pitanja}>
      <h3 className="post-user">{post.user.username}</h3>
      <p className="post-text">{post.head}</p>
      <div className="dugmecom">
        <button className="showcom" onClick={handleShowComments}>
          <MdOutlineExpandMore />
          Prikazi komentare
        </button>
      </div>
    </div>
  );
};

export default ForumPost;
