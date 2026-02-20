// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import OurJourney from './pages/OurJourney';
import UpcomingEvents from './pages/UpcomingEvents';
import PastEvents from './pages/PastEvents';
import Team from './pages/Team';
import YearPage from './pages/YearPage';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--color-background)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourjourney" element={<OurJourney />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<YearPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/header" element={<Header />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
