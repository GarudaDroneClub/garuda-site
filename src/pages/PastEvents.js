import React from 'react';
import Header from '../components/Header';
import eventsData from '../data/events.json';

const PastEvents = () => {
  const getImagePath = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  const renderEventSection = (year, events) => (
    <div key={year} style={{ marginBottom: '60px' }}>
      <h2 className="section-title" style={{ textAlign: 'left', borderBottom: '1px solid var(--color-surface)', paddingBottom: '10px', marginBottom: '30px' }}>
        {year} <span className="highlight">Events</span>
      </h2>
      <div className="grid-container" style={{ padding: 0 }}>
        {events.map((photoName, index) => {
          const src = getImagePath(photoName);
          if (!src) return null;
          return (
            <div key={index} className="card" style={{ padding: '10px' }}>
              <div className="card-image-container" style={{ height: '250px', marginBottom: 0 }}>
                <img src={src} alt={`Past Event ${year}`} className="card-image" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <Header />
      <div className="page-header">
        <h1 className="page-title">Past <span className="highlight">Events</span></h1>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {Object.keys(eventsData).sort((a, b) => b - a).map(year => renderEventSection(year, eventsData[year]))}
      </div>
    </div>
  );
};

export default PastEvents;
