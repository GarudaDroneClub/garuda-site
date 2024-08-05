import React from 'react';
import Header from './Header';
import teamPhoto from './teamPhoto1.jpg'; // Make sure the image path is correct
import './FI.css';

const FI = () => {
  return (
    <div className="fi-container">
      <Header />
      <div className="fi-content">
        <div className="fi-image">
          <img src={teamPhoto} alt="GARUDA Drone Technology Club Team" />
        </div>
        <div className="fi-text">
          <h2>Dr.Nilu Singh</h2>
          <p>
            Dr. Nilu Singh, Ph.D.,  is the Club Incharge and is the driving force behind our club's progressive success. Her unwavering support and continual encouragement have been instrumental in guiding us to create increasingly better projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FI;
