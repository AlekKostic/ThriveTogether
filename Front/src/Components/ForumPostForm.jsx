import React, { useEffect,  useState } from 'react'
import './login.css'

const ForumPostForm = () => {
  

  const [tekst, setTekst] = useState("")
  const [tekstE, setTekstE] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tekst:', tekst);
    
    if(!tekst)
    {
      setTekstE("Unesite sadrzaj.")
    }else{
      setTekstE("");
    }
  };


  return (
    <div className="sve">
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
          <button type="submit" className="post-submit-dugme">Objavi</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ForumPostForm
