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
            Dr.Nilu Singh,PHD is the club incharge and the power behind the progressive success of our Club.
            She has been constantly encouraging us in making better projects everytime and has been a constant support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FI;
