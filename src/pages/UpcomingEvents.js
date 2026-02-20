import React from 'react';
import Header from '../components/Header';
import UpcomingEventPhoto from '../assets/images/UpcomingEventPhoto.jpg';
import SilIcon from '../assets/images/SilIcon.png';

const UpcomingEvents = () => {
  return (
    <div className="page-container">
      <Header />

      <div className="page-header">
        <h1 className="page-title">Upcoming <span className="highlight">Events</span></h1>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className="card-image-container" style={{ height: 'auto', marginBottom: '20px' }}>
            <img src={UpcomingEventPhoto} alt="Upcoming Event" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </div>
          <p className="card-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>Stay Tuned for Updates!!!</p>

          <div style={{ marginTop: '20px' }}>
            <a href="https://academics.klef.in/login" target="_blank" rel="noopener noreferrer">
              <img src={SilIcon} alt="SIL" style={{ height: '60px', opacity: 0.8, transition: 'opacity 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
