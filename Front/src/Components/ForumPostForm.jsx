import React, { useState } from "react";
import "./login.css"; // Ensure styles are linked correctly
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForumPostForm = ({ closeModal, user_id }) => {
  const navigate = useNavigate();

  const [tekst, setTekst] = useState("");
  const [tekstE, setTekstE] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    if (!tekst) {
      setTekstE("Unesite tekst.");
      return;
    } else setTekstE("");

    axios({
      method: "post",
      url: "http://localhost:8080/api/pitanja/create",
      data: {
        head: tekst,
        userId: user_id,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        navigate("/forum");
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="forum-post-form">
        <div className="naslov-posta">
          <p>Nova objava</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={tekst}
              placeholder="Tekst objave..."
              onChange={(e) => setTekst(e.target.value)}
              className="input-post"
            />
          </div>
          <div className="login-error">{tekstE}</div>

          <div className="post-submit-dugme-div">
            <button
              type="button"
              className="post-cancel-dugme"
              onClick={closeModal}
            >
              Odustani
            </button>
            <button type="submit" className="post-submit-dugme">
              Objavi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForumPostForm;
