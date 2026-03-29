import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Alumni from './pages/Alumni';
import LifeAtNDRK from './pages/LifeAtNDRK';
import Admissions from './pages/Admissions';
import Coursera from './pages/Coursera';
import FAQs from './pages/FAQs';
import Courses from './pages/Courses';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/life" element={<LifeAtNDRK />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/career-academy" element={<Coursera />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;
