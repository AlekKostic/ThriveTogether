import React, { useEffect, useState } from 'react';
import './login.css';
import { IoMdHappy } from "react-icons/io";
import { FaRegSadTear } from "react-icons/fa";
import { MdOutlineSentimentNeutral } from "react-icons/md";

const Emotionform = () => {
  const [tekst, setTekst] = useState("");
  const [emotion, setEmotion] = useState(""); // Track the selected emotion

  const [emotionE, setEmotionE]=useState("");

  const handleEmotionChange = (e) => {
    setEmotion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tekst:', tekst);
    console.log('Emotion:', emotion);
    
    if(!emotion)
    {
      setEmotionE("Obavezno je obeleziti osecanje.")
    }else{
      setEmotionE("");
    }
  };

  return (
    <div className="sve">
      <div className="forum-emo-form">
        <div className="naslov-posta">
          <p>Kako ste se danas osecali?</p>
        </div>
      <hr></hr>
        <form onSubmit={handleSubmit}>
          {/* Emotion Radio Buttons */}
          <div className="emotion-selection">
            <label className="dugme">
              <input
                type="radio"
                name="emotion"
                value="happy"
                checked={emotion === "happy"}
                onChange={handleEmotionChange}
              />
              Srecno <IoMdHappy />
            </label>
            <label className="dugme">
              <input
                type="radio"
                name="emotion"
                value="sad"
                checked={emotion === "sad"}
                onChange={handleEmotionChange}
              />
              Tuzno <FaRegSadTear />
            </label>
            <label className="dugme">
              <input
                type="radio"
                name="emotion"
                value="neutral"
                checked={emotion === "neutral"}
                onChange={handleEmotionChange}
              />
              Neutralno <MdOutlineSentimentNeutral />
            </label>
          </div>
          <div className="login-error ">{emotionE}</div>

          {/* Emotion Description */}
          <div>
            <input
              value={tekst}
              placeholder="Opisite svoja osecanja..."
              onChange={(e) => setTekst(e.target.value)}
              className="input-post-emo"
            />
          </div>

          {/* Submit Button */}
          <div className="post-submit-dugme-div"> 
            <button type="submit" className="post-submit-dugme">Zabelezi</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Emotionform;
