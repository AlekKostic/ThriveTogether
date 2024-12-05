import Navbar from "./Navbar";
import Footer from "./Footer";
import "./uredjivanje.css";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";

const Component = () => {
  return (
    <div className="glavni-container">
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
      </article>
      <Footer />
    </div>
  );
};

export default Component;
