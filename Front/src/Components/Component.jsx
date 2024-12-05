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
    <div className="hero-section">
      <div className="Hero"></div>
    </div>
    <article className="Mentalno-zdravlje">
    <div className="bold-text">Tekst1</div>
      <div className="text-section">
        <div className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Assumenda eum explicabo velit, perferendis enim sit dolores! 
          Molestiae voluptatum nesciunt, laudantium suscipit similique 
          asperiores doloribus magni quis aperiam, incidunt aut excepturi!
          </div>
        <div className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Assumenda eum explicabo velit, perferendis enim sit dolores! 
          Molestiae voluptatum nesciunt, laudantium suscipit similique 
          asperiores doloribus magni quis aperiam, incidunt aut excepturi!</div>
        <div className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Assumenda eum explicabo velit, perferendis enim sit dolores! 
          Molestiae voluptatum nesciunt, laudantium suscipit similique 
          asperiores doloribus magni quis aperiam, incidunt aut excepturi!</div>
      </div>
        {/*{posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.user}</h3>
            <p>{post.text}</p>
            <p className="post-date">{getCurrentDateTime()}</p>
          </div>
        ))}
          */}
      </article>
    <Footer />
  </div>
  )
}

export default Component