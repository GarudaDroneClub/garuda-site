import React from 'react';
import './UpcomingEvents.css';
import UpcomingEventPhoto from './UpcomingEventPhoto.jpg'; // Ensure this path is correct

const UpcomingEvents = () => {
  return (
    <div className="events-container">
      <header className="events-header">
        <h2>Upcoming Events</h2>
      </header>
      <div className="events-content">
        <img src={UpcomingEventPhoto} alt="Upcoming Event" className="events-photo" />
        <p>Join us for our next event where we showcase the latest in drone technology and innovation...</p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
