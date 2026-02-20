import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import backgroundVideo from '../assets/videos/backgroundVideo.mp4';
import Header from '../components/Header';

const HomePage = () => {
  const sections = [
    { title: 'About Us', path: '/about', desc: 'Who we are and our mission.' },
    { title: 'Our Journey', path: '/ourjourney', desc: 'From inception to innovation.' },
    { title: 'Projects', path: '/projects', desc: 'Cutting-edge drone technology.' },
    { title: 'Team', path: '/team', desc: 'Meet the minds behind Garuda.' },
    { title: 'Events', path: '/upcoming-events', desc: 'Workshops and competitions.' },
    { title: 'Achievements', path: '/achievements', desc: 'Awards and recognitions.' },
    { title: 'Gallery', path: '/gallery', desc: 'Capturing moments of flight.' },
    { title: 'Contact', path: '/contact', desc: 'Get in touch with us.' },
  ];

  return (
    <div className="home-container">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="video-overlay"></div>
        <video autoPlay loop muted className="hero-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1 className="hero-title">GARUDA <span className="highlight">DRONE CLUB</span></h1>
          <p className="hero-subtitle">Innovating the future of autonomous flight.</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="features-section">
        <h2 className="section-title">Explore <span className="highlight">Garuda</span></h2>
        <div className="features-grid">
          {sections.map((section, index) => (
            <Link to={section.path} className="feature-card" key={index}>
              <div className="card-content">
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </div>
              <div className="card-glow"></div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Garuda Drone Club. Developed by G. Venkat and Ch.Nithin.</p>
      </footer>
    </div>
  );
};

export default HomePage;
