import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SiteActionsProvider from './components/SiteActionsProvider';
import NotFound from './pages/NotFound';

// Page Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Alumni from './pages/Alumni';
import LifeAtNDRK from './pages/LifeAtNDRK';
import Admissions from './pages/Admissions';
import Coursera from './pages/Coursera';
import FAQs from './pages/FAQs';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Courses from './pages/Courses';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <SiteActionsProvider>
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
        <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </SiteActionsProvider>
    </Router>
  );
}

export default App;
