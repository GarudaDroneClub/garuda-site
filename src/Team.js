import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Team.css';
import teamVideo from './TeamVideo.mp4';

const Team = () => {
  return (
    <div className="team-container">
      <Header />
      <video autoPlay loop muted className="team-video">
        <source src={teamVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="team-header">
        <h2>Select Year</h2>
      </header>
      <div className="team-year-sections">
        <Link to="/team/fi" className="team-section">
          <h2>Faculty Incharge</h2>
        </Link>
        <Link to="/team/y22" className="team-section">
          <h2>Y22</h2>
        </Link>
        <Link to="/team/y23" className="team-section">
          <h2>Y23</h2>
        </Link>
        <Link to="/team/y21" className="team-section">
          <h2>Y21</h2>
        </Link>
        <Link to="/team/y20" className="team-section">
          <h2>Y20 - ALUMNI</h2>
        </Link>
      </div>
    </div>
  );
};

export default Team;
