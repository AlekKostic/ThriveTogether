import React, { useEffect,  useState } from 'react'
import './login.css'

const ForumPostForm = () => {
  useEffect(() => {
    document.body.classList.add('login-body');
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const [tekst, setTekst] = useState("")

  return (
    <div className="forum-post-form">
      <div className="naslov-posta">
        <p>Nova objava</p>
      </div>

      <form>
      <div>
          <input
            value={tekst}
            placeholder="Tekst objave..."
            onChange={(e) => setTekst(e.target.value)}
            className="input-post"
          />
        </div>

        <div className="post-submit-dugme-div"> 
          <button type="submit" className="post-submit-dugme">Objavi</button>
        </div>
      </form>
    </div>
  )
}

export default ForumPostForm
