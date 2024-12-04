import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signinpage from './Pages/Signinpage';
import Emotionform from './Components/Emotionform';
import Loginpage from './Pages/Loginpage';
import Home from './Pages/Home';
import ForumPostForm from './Components/ForumPostForm';


const App = () => {

  if (localStorage.getItem('userID') === null)
    localStorage.setItem('userID', 2);

  return (<>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signinpage />} />
        <Route path="/login" element={<Loginpage />} /> {/* Ruta za login */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
