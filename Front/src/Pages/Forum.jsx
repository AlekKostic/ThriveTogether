import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ForumPost from '../Components/ForumPost';
const Forum = () => {
  const posts = [
    { index:1, user: 'Svetlana', text: 'Mazem venogel i to mi pomaze.' },
    { index:2, user: 'Zorica', text: 'Ja popijem caj od zove i brusnicu i resi sve moje probleme.' },
    { index:3, user: 'Ruška', text: 'Stari su govorili oduvek. Rakija je zakon za sve.' },
  ];

  return (
    <div className="forum-container">
      <Navbar />

      <h2>Mentalno zdravlje</h2>
      <p>Pitanja i odgovori koje ljudi postavljaju</p>

      {posts.map((post) => (
        <ForumPost key={post.index} post={post} />
      ))}

      <Footer />
    </div>
  );
};

export default Forum;
