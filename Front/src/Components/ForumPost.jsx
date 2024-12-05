import React, { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import Reply from "./Reply";

const ForumPost = ({ post }) => {
  const [odg, setOdg] = useState([
    {
      id_odgovora: 2,
      odgovor: "test2",
      pitanja: {
        id_pitanja: 1,
        head: "test",
        user: {
          id: 6,
          ime: "test",
          prezime: "prezime",
          email: "test@test.com",
          password: "jeuju",
          username: "test"
        }
      }
    },
    {
      id_odgovora: 3,
      odgovor: "test3",
      pitanja: {
        id_pitanja: 1,
        head: "test",
        user: {
          id: 6,
          ime: "test",
          prezime: "prezime",
          email: "test@test.com",
          password: "jeuju",
          username: "test"
        }
      }
    }
  ]);

  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments); // Toggle the visibility of comments
  };

  return (
    <div className="post" key={post.id_pitanja}>
      <h3 className="post-user">{post.user.username}</h3>
      <p className="post-text">{post.head}</p>
      <div className="dugmecom">
        <button className="showcom" onClick={handleShowComments}>
          <MdOutlineExpandMore />
          {showComments ? "Sakrij komentare" : "Prikazi komentare"}
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
