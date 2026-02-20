import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import projectsData from '../data/projects.json';

const Projects = () => {
  // Helper to get image path dynamically
  const getImagePath = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="page-container">
      <Header />

      <div className="page-header">
        <h1 className="page-title">Our <span className="highlight">Projects</span></h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '10px' }}>
          Innovations shaping the future.
        </p>
      </div>

      <div className="grid-container">
        {Object.keys(projectsData).map((slug) => {
          const project = projectsData[slug];
          const imageSrc = getImagePath(project.image);

          return (
            <div className="card" key={slug}>
              <div className="card-image-container">
                {imageSrc ? (
                  <img src={imageSrc} alt={project.title} className="card-image" />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#333' }}></div>
                )}
              </div>

              <h2 className="card-title">{project.title}</h2>
              <p className="card-subtitle">{project.description.substring(0, 100)}...</p>

              <Link to={`/projects/${slug}`} className="btn btn-outline" style={{ display: 'block' }}>
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
