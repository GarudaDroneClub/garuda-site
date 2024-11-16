import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Team.css';

const Team = () => {
  return (
    <div className="team-container">
      <Header />
      <header className="team-header">
        <h2>Select Year</h2>
      </header>
      <div className="team-year-sections">
        <Link to="/team/fi" className="team-section">
          <h2>Faculty Incharge</h2>
        </Link>

        <Link to="/team/2024-2025" className="team-section">
          <h2>2024-2025</h2>
        </Link>

        <Link to="/team/y22" className="team-section">
          <h2>2023-2024</h2>
        </Link>

        <Link to="/team/y20" className="team-section">
          <h2>2022-2023 [ALUMNI]</h2>
        </Link>
      </div>
    </div>
  );
};

export default Team;
