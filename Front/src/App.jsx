import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signinpage from "./Pages/Signinpage";
import Emotionform from "./Components/Emotionform";
import Loginpage from "./Pages/Loginpage";
import Home from "./Pages/Home";
import Forum from "./Pages/Forum";
import Statistika from "./Pages/Statistika";
import Kursevi from "./Pages/Kursevi";
import ForumPostForm from "./components/ForumPostForm";
import Signup from "./components/Signup";

const App = () => {
  if (localStorage.getItem("userID") === null) {
    localStorage.setItem("userID", 1);
    localStorage.setItem("username", "hakaton");
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signinpage />} />
          <Route path="/login" element={<Loginpage />} /> {/* Ruta za login */}
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/statistika" element={<Statistika />} />
          <Route path="/kursevi" element={<Kursevi />} />
          <Route path="/addpost" element={<ForumPostForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
