import Navbar from "./Navbar";
import Footer from "./Footer";
import "./uredjivanje.css";
import { useNavigate } from "react-router-dom"; // Importujte useNavigate
import Hero from "./Hero";
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
      <Hero />
      <article className="Mentalno-zdravlje">
        <div className="bold-text">ThriveTogether</div>
        <div className="text-section">
          <div className="text-box">
            ThriveTogether nudi prostor gde mozete postavljati pitanja i
            dobijati odgovore od drugih kosrinsika, sluzi za deljenje iskustava,
            saveta i skolskih pitanja, bez straha od osude.
          </div>
          <div className="text-box">
            ThriveTogether nudi prostor gde mozete beleziti svoje emocije i
            pratiti sopstveno mentalno stanje kroz personalizovane grafike.
          </div>
          <div className="text-box">
            ThriveTogether nudi prostor ispunjen raznim besplatnim kursevima iz
            oblasti informatike, marketinga i slicno. Ovde mozete pronaci
            inspiraciju za unapredjenje svog znanja.
          </div>
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
  );
};

export default Component;
