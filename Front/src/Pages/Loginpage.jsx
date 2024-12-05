import React from 'react';
import Login from '../components/Login';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Loginpage = () => {
  return (
    <div className="page-background"> {/* Apply the background class */}
      <Navbar />
      <Login />
    </div>
  );
};

export default Loginpage;
