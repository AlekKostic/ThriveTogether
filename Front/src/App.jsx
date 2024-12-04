import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signinpage from './Pages/Signinpage';
import Emotionform from './Components/Emotionform';
import Loginpage from './Pages/Loginpage';
import Home from './Pages/Home';
<<<<<<< HEAD
import Forum from './Pages/Forum';
import Statistika from './Pages/Statistika';
import Kursevi from './Pages/Kursevi';
=======
import ForumPostForm from './Components/ForumPostForm';
>>>>>>> 5872b843d19218739baeea5bce1795860a4be1fe

const App = () => {

  if (localStorage.getItem('userID') === null)
    localStorage.setItem('userID', 2);

  return (<>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signinpage />} />
        <Route path="/login" element={<Loginpage />} /> {/* Ruta za login */}
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/statistika" element={<Statistika />} />
        <Route path="/kursevi" element={<Kursevi />} />
=======
       {/* <Route path="/" element={<Home />} />*/}
>>>>>>> 5872b843d19218739baeea5bce1795860a4be1fe
      </Routes>
    </Router>
    </>
  );
};

export default App;
