import React from "react";
import "./login.css"; // Import your custom styles

const Reply = ({ odg }) => {
  console.log(odg);
  return (
    <div className="reply-card">
      <p className="reply-text">{odg}</p>
    </div>
  );
};

export default Reply;
