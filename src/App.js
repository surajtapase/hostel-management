// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hostels from './pages/Hostels';
import HostelDetail from './pages/HostelDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';      // Import About
import Contact from './pages/Contact';  // Import Contact

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/hostels/:id" element={<HostelDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />       {/* Add About Route */}
        <Route path="/contact" element={<Contact />} />   {/* Add Contact Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
