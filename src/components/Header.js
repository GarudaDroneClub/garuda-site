import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="GARUDA Logo" className="header-logo" />
          <span className="logo-text">GARUDA</span>
        </Link>

        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={closeMenu}>Projects</Link>
          <Link to="/team" className={`nav-link ${isActive('/team')}`} onClick={closeMenu}>Team</Link>
          <Link to="/upcoming-events" className={`nav-link ${isActive('/upcoming-events')}`} onClick={closeMenu}>Upcoming Events</Link>
          <Link to="/past-events" className={`nav-link ${isActive('/past-events')}`} onClick={closeMenu}>Past Events</Link>
          <Link to="/achievements" className={`nav-link ${isActive('/achievements')}`} onClick={closeMenu}>Achievements</Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
