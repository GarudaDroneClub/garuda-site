import React from 'react';
import './PastEvents.css';
import PastEventPhoto1 from './PastEventPhoto1.jpg'; // Ensure this path is correct
import PastEventPhoto2 from './PastEventPhoto2.jpg'; 
import PastEventPhoto3 from './PastEventPhoto3.jpg'; 
import PastEventPhoto4 from './PastEventPhoto4.jpg'; 
import PastEventPhoto5 from './PastEventPhoto5.jpg'; 
import PastEventPhoto6 from './PastEventPhoto6.jpg'; 
import PastEventPhoto7 from './PastEventPhoto7.jpg'; 
import PastEventPhoto8 from './PastEventPhoto8.jpg'; 
import PastEventPhoto9 from './PastEventPhoto9.jpg'; 
import PastEventPhoto10 from './PastEventPhoto10.jpg'; 
import PastEventPhoto11 from './PastEventPhoto11.jpg'; 
import PastEventPhoto12 from './PastEventPhoto12.jpg'; 
import PastEventPhoto13 from './PastEventPhoto13.jpg'; 
import PastEventPhoto14 from './PastEventPhoto14.jpg'; 
import PastEventPhoto15 from './PastEventPhoto15.jpg'; 

import Header from './Header';


const PastEvents = () => {
  return (
    <div className="events-container">
      <Header />
      <header className="events-header">
        <h2>Past Events</h2>
        <h3>2023-2024</h3>
      </header>
      <div className="events-content">
        <div className="event-item"><img src={PastEventPhoto1} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto2} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto3} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto4} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto5} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto6} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto7} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto8} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto9} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto10} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto11} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto12} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto13} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto14} alt="Past Event" className="events-photo" /></div>
      </div>
      <h4>2024-2025</h4>
            <div className="event-item"><img src={PastEventPhoto15} alt="Past Event" className="events-photo" /></div>
        <div className="event-item"><img src={PastEventPhoto10} alt="Past Event" className="events-photo" /></div>

    </div>
  );
};

export default PastEvents;
