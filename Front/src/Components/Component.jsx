import Navbar from "./Navbar";
import Footer from "./Footer";
import "./uredjivanje.css"
import { useNavigate } from 'react-router-dom'; // Importujte useNavigate
/*
const posts = [
  { user: 'Svetlana', text: 'Mazem venogel i to mi pomaze.' },
  { user: 'Zorica', text: 'Ja popijem caj od zove i brusnicu i resi sve moje probleme.' },
  { user: 'Ruška', text: 'Stari su govorili oduvek. Rakija je zakon za sve.' },
];
*/
const Component = () => {
  /*
  const getCurrentDateTime = () => {
    const date = new Date();
    return date.toLocaleString();
  };
  */
  return (
    <div className="glavni-container">
    {/*<header className="container">
      <h1>Mentalno Zdravlje</h1>
    </header>*/}
    <Navbar />
    <div className="Hero">
        <div className="Hero-content">
            <h1>Uvod U Mentalno Zdravlje</h1>
            <p>O mentalnom zdravlju</p>
        </div>
    </div>
    <div className="Mentalno-zdravlje">
      <h1>a</h1>
        {/*{posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.user}</h3>
            <p>{post.text}</p>
            <p className="post-date">{getCurrentDateTime()}</p>
          </div>
        ))}
          */}
      </div>
    <Footer />
  </div>
  )
}

export default Component