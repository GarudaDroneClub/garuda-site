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
          <h2>Team Information</h2>
          <p>
            This is some default text about the team. You can include details about the team's achievements,
            goals, members, and other relevant information here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FI;
