import React from 'react'
import { MdOutlineExpandMore } from "react-icons/md";

const ForumPost = ({post}) => {

  const handleShowComments=()=>{
    return;
  }

  return (
    <div className="post" key={post.index}>
        <h3 className="post-user">{post.user}</h3>
        <p className="post-text">{post.text}</p>
        <div className="dugmecom">
          <button className="showcom" onClick={handleShowComments}><MdOutlineExpandMore />Prikazi komentare</button>
        </div>
    </div>
  )
}

export default ForumPost
