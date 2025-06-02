import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;