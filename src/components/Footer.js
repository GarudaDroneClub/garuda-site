import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import instagramIcon from '../assets/images/instagramIcon.png';
import telegramIcon from '../assets/images/telegramIcon.png';
import linkedinIcon from '../assets/images/linkedinIcon.png';
import youtubeIcon from '../assets/images/youtubeIcon.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Explore</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Connect</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/kl_garuda/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://t.me/+PyZu5e4v7R4wNDI1" target="_blank" rel="noopener noreferrer">
                            <img src={telegramIcon} alt="Telegram" />
                        </a>
                        <a href="https://www.linkedin.com/company/garuda-drone-technology-club/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/channel/UChIpX_oIvk00sA4-7qwfX4w" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Garuda Drone Club</h3>
                    <p className="footer-text">
                        Innovating the skies. Fostering a community of drone enthusiasts and engineers.
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Garuda Drone Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
