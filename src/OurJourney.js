import React from 'react';
import './OurJourney.css';
import OurJourneyPhoto1 from './OurJourneyPhoto1.jpg'; 
import OurJourneyPhoto2 from './OurJourneyPhoto2.jpg'; 
import OurJourneyPhoto3 from './OurJourneyPhoto3.jpg'; 
import OurJourneyPhoto4 from './OurJourneyPhoto4.jpg'; 
import Header from './Header'; // Import the Header component

const OurJourney = () => {
  return (
    <div className="journey-container">
      <Header /> {/* Include the Header component */}
      <header className="journey-header">
        <h2>Our Journey</h2>
      </header>
      <div className="journey-content">
        <h3>Our First Drone: </h3>
        <img src={OurJourneyPhoto1} alt="Our Journey" className="journey-photo" />
        <p>We have made a budget drone using Arduino UNO as a flight controller. </p>
      </div>
      <div className="journey-content">
        <h3>Our Second Drone: </h3>
        <img src={OurJourneyPhoto2} alt="Our Journey" className="journey-photo" />
        <p>We have replaced the Arduino UNO to Naza-M Lite flight controller for more stability.</p>
      </div>
      <div className="journey-content">
        <h3>Logistic Drone</h3>
        <img src={OurJourneyPhoto3} alt="Our Journey" className="journey-photo" />
        <p>We have successfully made logistic drone which can carry the goods up to 1KG. </p>
      </div>
      <div className="journey-content">
        <h3>Poster Launch with Drone</h3>
        <img src={OurJourneyPhoto4} alt="Our Journey" className="journey-photo" />
        <p>We made Guest Inauguration Drone which can launch posters.</p>
      </div>
    </div>
  );
};

export default OurJourney;
