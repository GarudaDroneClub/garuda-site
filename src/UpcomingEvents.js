import React from 'react';
import './UpcomingEvents.css';
import drone101 from './drone101.png'; // Ensure this path is correct
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
        <img src={drone101} alt="Upcoming Event" className="events-photo" />
        <p>Hello Drone Aspirants
We the team of Garuda Drone Technology Club invite you to join us in "DRONE 101" , An exciting introductory seminar on Drones
Date: 19/09/24
Time: 5:30 PM to 7PM
Venue : C325
Registration Link - https://forms.office.com/r/gEzdHF3i3X
Registrations will open from 8PM on 14th September until wednesday. Limited Slots Only!

There is "NO"  Bus Facility for dayscholars.Please make a note of it.</p>
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
