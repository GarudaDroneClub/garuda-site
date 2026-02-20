import React from 'react';
import Header from '../components/Header';
import OurJourneyPhoto1 from '../assets/images/OurJourneyPhoto1.jpg';
import OurJourneyPhoto2 from '../assets/images/OurJourneyPhoto2.jpg';
import OurJourneyPhoto3 from '../assets/images/OurJourneyPhoto3.jpg';
import OurJourneyPhoto4 from '../assets/images/OurJourneyPhoto4.jpg';

const OurJourney = () => {
  const milestones = [
    { title: 'Our First Drone', img: OurJourneyPhoto1, desc: 'We have made a budget drone using Arduino UNO as a flight controller.' },
    { title: 'Our Second Drone', img: OurJourneyPhoto2, desc: 'We have replaced the Arduino UNO to Naza-M Lite flight controller for more stability.' },
    { title: 'Logistic Drone', img: OurJourneyPhoto3, desc: 'We have successfully made logistic drone which can carry the goods up to 1KG.' },
    { title: 'Poster Launch with Drone', img: OurJourneyPhoto4, desc: 'We made Guest Inauguration Drone which can launch posters.' },
  ];

  return (
    <div className="page-container">
      <Header />
      <div className="page-header">
        <h1 className="page-title">Our <span className="highlight">Journey</span></h1>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {milestones.map((item, index) => (
          <div className="card" key={index} style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            marginBottom: '40px',
            padding: '20px',
            gap: '20px'
          }}>
            <div style={{ flex: 1 }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurJourney;
