// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png'; // Ensure the path is correct

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="GARUDA Logo" className="header-logo" />
      <nav className="header-nav">
        <br></br>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/ourjourney" className="nav-link">Our Journey</Link>
        <Link to="/upcoming-events" className="nav-link">Upcoming Events</Link>
        <Link to="/past-events" className="nav-link">Past Events</Link>
        <Link to="/team" className="nav-link">Team</Link>
            <Link to="/achievements" className="nav-link">Achievements</Link>
        <Link to="/projects" className="nav-link">Projects</Link> {/* Added Projects */}

            <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
