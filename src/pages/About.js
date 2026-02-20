import React from 'react';
import Header from '../components/Header';
import aboutPhoto from '../assets/images/aboutPhoto.jpg';
import instagramIcon from '../assets/images/instagramIcon.png';
import telegramIcon from '../assets/images/telegramIcon.png';
import linkedinIcon from '../assets/images/linkedinIcon.png';
import youtubeIcon from '../assets/images/youtubeIcon.png';

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="page-header">
        <h1 className="page-title">About <span className="highlight">Us</span></h1>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="card-image-container" style={{ height: 'auto', width: '100%', marginBottom: '30px' }}>
            <img src={aboutPhoto} alt="About GARUDA" className="card-image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>

          <p className="card-subtitle" style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
            Welcome to GARUDA, where passion unites! As a dynamic club, we foster a vibrant community of like-minded individuals dedicated to UAV's. From engaging events to collaborative projects, GARUDA thrives on creativity, diversity, and mutual growth. Our members share a common enthusiasm for Drones, creating an atmosphere that inspires innovation and camaraderie. Join us on this exciting journey, where every member is a valued contributor to the unique tapestry of GARUDA. Together, we soar to new heights, celebrating shared interests and forging lasting connections. Welcome to the GARUDA family!
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
            <a href="https://www.instagram.com/kl_garuda/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" style={{ width: '40px', transition: 'transform 0.3s' }} className="social-icon" />
            </a>
            <a href="https://t.me/+PyZu5e4v7R4wNDI1" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" style={{ width: '40px', transition: 'transform 0.3s' }} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/garuda-drone-technology-club/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" style={{ width: '40px', transition: 'transform 0.3s' }} className="social-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UChIpX_oIvk00sA4-7qwfX4w" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" style={{ width: '40px', transition: 'transform 0.3s' }} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
