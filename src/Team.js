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
        
        
        <Link to="/team/y22" className="team-section">
          <h2>2023-2024</h2>
        </Link>
        <Link to="/team/y23" className="team-section">
          <h2>Y23</h2>
        </Link>
        <Link to="/team/y21" className="team-section">
          <h2>Y21</h2>
        </Link>
        <Link to="/team/y20" className="team-section">
          <h2>2022-2023</h2>
        </Link>
    <Link to="/team/past" className="team-section">
  <h2>Past Team Members</h2>
</Link>

      </div>
    </div>
  );
};

export default Team;
