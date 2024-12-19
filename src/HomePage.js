import React from 'react';
import './HomePage.css';
import backgroundVideo from './backgroundVideo.mp4';
import Header from './Header';

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <video autoPlay loop muted className="home-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-shadow-box">
        <header className="home-header">
          <h1>Welcome to KL- GARUDA Drone Technology Club</h1>
          <p>Innovating the future of drones and technology.</p>
        </header>
        <section className="home-content">
          <a href="/about" className="home-section">
            <h2>About Us</h2>
          </a>
          <a href="/ourjourney" className="home-section">
            <h2>Our Journey</h2>
          </a>
          <a href="/upcoming-events" className="home-section">
            <h2>Upcoming Events</h2>
          </a>
          <a href="/past-events" className="home-section">
            <h2>Past Events</h2>
          </a>
          <a href="/team" className="home-section">
            <h2>Team</h2>
          </a>
    <a href="/achievements" className="home-section">
            <h2>Our Achievements</h2>
          </a>
     <a href="/projects" className="home-section">
            <h2>Projects</h2> {/* Added Projects section */}
          </a>
          <a href="/gallery" className="home-section">
            <h2>Gallery</h2>
          </a>
          <a href="/contact" className="home-section">
            <h2>Contact Us</h2>
          </a>
          
        </section>
      </div>
      <footer className="home-footer">
        <p>Developed by G. Venkat and Ch.Nithin</p>
      </footer>
    </div>
  );
};

export default HomePage;
