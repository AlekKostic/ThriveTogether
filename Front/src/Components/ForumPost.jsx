import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import Reply from "./Reply";
import axios from "axios";

const ForumPost = ({ post }) => {
  const [odg, setOdg] = useState([]);
  const [novio, setnovio] = useState("");

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

  const handleNew = () => {
    setShowComments(true);
    axios({
      method: "post",
      url: "http://localhost:8080/api/odgovori/create",
      data: {
        odgovor: novio,
        id_pitanja: post.id_pitanja,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  return (
    <div className="post" key={post.id_pitanja}>
      <h3 className="post-user">{post.user.username}</h3>
      <p className="post-text">{post.head}</p>
      <div className="malifooter">
        <div>
          <input
            className="showcom2"
            value={novio}
            placeholder="Comment..."
            onChange={(e) => setnovio(e.target.value)}
          />
        </div>

        <div className="dugmecom">
          <button className="showcom" onClick={handleNew}>
            Komentarisi
          </button>
          <button className="showcom" onClick={handleShowComments}>
            {showComments ? <FaAngleDown /> : <FaAngleUp />}
            {showComments ? "Sakrij komentare" : "Prikazi komentare"}
          </button>
        </div>
      </div>
      {showComments &&
        (odg.length > 0 ? (
          <div className="comments">
            {odg.map((o) => (
              <Reply key={o.id_odgovora} odg={o.odgovor} />
            ))}
          </div>
        ) : (
          <p className="befr">Budite prvi da komentarisete!</p>
        ))}
    </div>
  );
};

export default ForumPost;
