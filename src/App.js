import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import OurJourney from './OurJourney';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import Team from './Team';
import Y20 from './Y20';
import Y21 from './Y21';
import Y22 from './Y22';
import Y23 from './Y23';
import FI from './FI';
import Contact from './Contact';
import Header from './Header';
import Gallery from './Gallery';
import Achievements from './Achievements'; // Import the Achievements page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourjourney" element={<OurJourney />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/y20" element={<Y20 />} />
        <Route path="/team/y21" element={<Y21 />} />
        <Route path="/team/y22" element={<Y22 />} />
        <Route path="/team/y23" element={<Y23 />} />
        <Route path="/team/fi" element={<FI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/header" element={<Header />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievements />} /> {/* Add the new Achievements route */}
      </Routes>
    </Router>
  );
};

export default App;
