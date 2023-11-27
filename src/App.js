import React from 'react';
import './index.css';
import HeaderNav from './components/general/HeaderNav';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/general/Footer';
import ProjectPage from './projects/ProjectPage';
import CV from './components/pages/CV';
import ScrollToTop from './components/general/ScrollToTop';
import MedipinPage from './projects/medipin/MedipinPage';

function App() {
  return (<>
    <Router>
      <ScrollToTop />
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/medipin" element={<MedipinPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  </>);
}

export default App;
