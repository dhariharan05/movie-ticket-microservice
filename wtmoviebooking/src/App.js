import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route,Routes } from "react-router-dom";
import Services from './components/pages/Services';
import Movies from './components/pages/Movies';
import Contactus from './components/pages/Contactus';
import Products from './components/pages/Products';
import Bookingmain from './components/pages/Bookingmain';
import Login  from './components/pages/Login';
import Theatre from './components/pages/Theatre';
import { ReactSession } from 'react-client-session';
import Footer from './components/Footer';
import Tpage from './components/pages/Tpage';
import HeroSection from './components/HeroSection';

import Navbar2 from './components/Navbar2'
import Register from './components/pages/Register';
import Loginmain from './components/Loginmain';

// import { Route } from 'react-router-dom';

function App() {
  ReactSession.setStoreType("localStorage");
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/signup' component={SignUp} />
        </Routes> 
        <HeroSection />
        <Cards />
        <Footer />
      </Router> */}

       <Navbar />
      
   
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* <Route path="/experiences" element={<Experiences />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Bookingmain />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginmain" element={<Loginmain />} />
        <Route path="/theatre" element={<Theatre />} />
        <Route path="/tpage" element={<Tpage />} />

      </Routes>



    </>
  );
}

export default App;
