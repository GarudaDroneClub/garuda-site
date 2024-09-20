import React from 'react';
import './UpcomingEvents.css';
import UpcomingEventPhoto from './UpcomingEventPhoto.jpg'; // Ensure this path is correct
import SilIcon from './SilIcon.png'; // Ensure this path is correct
import Header from './Header';


const UpcomingEvents = () => {
  return (
    <div className="events-container">
      <Header />

      <header className="events-header">
        <h2>Upcoming Events</h2>
      </header>
      <div className="events-content">
        <img src={UpcomingEventPhoto} alt="Upcoming Event" className="events-photo" />
        <p>Stay Tuned for Updates!!!</p>
      </div>
      <div className="social-links">
        <a href="https://academics.klef.in/login" target="_blank" rel="noopener noreferrer">
          <img src={SilIcon} alt="Instagram" className="social-icon" />
          </a>
    </div>
    </div>
  );
};

export default UpcomingEvents;
