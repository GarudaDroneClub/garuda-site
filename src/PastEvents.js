import React from 'react';
import './PastEvents.css';
import PastEventPhoto1 from './PastEventPhoto1.jpg';
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
import PastEventPhoto16 from './PastEventPhoto16.jpg';
import PastEventPhoto17 from './PastEventPhoto17.jpg';
import PastEventPhoto18 from './PastEventPhoto18.jpg';
import PastEventPhoto19 from './PastEventPhoto19.jpg';
import PastEventPhoto20 from './PastEventPhoto20.jpg';
import PastEventPhoto21 from './PastEventPhoto21.jpg';
import PastEventPhoto22 from './PastEventPhoto22.jpg';
import PastEventPhoto23 from './PastEventPhoto23.jpg';
import drone101 from './drone101.png';
import drone1012 from './drone1012.jpg';


import Header from './Header';

const PastEvents = () => {
  const events2023 = [
    PastEventPhoto1,
    PastEventPhoto2,
    PastEventPhoto3,
    PastEventPhoto4,
    PastEventPhoto5,
    PastEventPhoto6,
    PastEventPhoto7,
    PastEventPhoto8,
    PastEventPhoto9,
    PastEventPhoto10,
    PastEventPhoto11,
    PastEventPhoto12,
    PastEventPhoto13,
    PastEventPhoto14,
  ];

  const events2024 = [
    PastEventPhoto15,
    drone101,
    drone1012,
    PastEventPhoto16,
    PastEventPhoto17,
    PastEventPhoto18,
  PastEventPhoto19,
  PastEventPhoto20,
  PastEventPhoto21,
  PastEventPhoto22,
  PastEventPhoto23,
  ];

  const renderEventPhotos = (events) => {
    return events.map((photo, index) => (
      <div className="event-item" key={index}>
        <img src={photo} alt="Past Event" className="events-photo" />
      </div>
    ));
  };

  return (
    <div className="events-container">
      <Header />
      <header className="events-header">
        <h2>Past Events</h2>
        <h3>2023-2024</h3>
      </header>
      <div className="events-content">
        {renderEventPhotos(events2023)}
      </div>
      <header className="events-header">
        <h3>2024-2025</h3>
      </header>
      <div className="events-content">
        {renderEventPhotos(events2024)}
      </div>
    </div>
  );
};

export default PastEvents;
