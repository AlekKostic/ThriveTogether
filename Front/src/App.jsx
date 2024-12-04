import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signinpage from './Pages/Signinpage';
import Loginpage from './Pages/Loginpage';
import Home from './Pages/Home';

const App = () => {
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
