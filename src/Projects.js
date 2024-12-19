// src/Projects.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import Header from './Header'; // Import the Header component

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      {/* Including Header at the top of the page */}
      <Header />

      <div className="projects-content">
        <h1 className="projects-heading">Our Projects</h1>

        {/* Road Crack Detection */}
        <div className="project-card">
          <span className="project-id-tag">ID: #001</span> {/* Project ID Tag */}
          <h2>Road Crack Detection</h2>
          <p>
            Using drones to detect road cracks and damages, improving infrastructure maintenance.
          </p>
          <button 
            className="view-details-button" 
            onClick={() => navigate('/projects/crack-detection')}
          >
            View Details
          </button>
        </div>

        {/* Medical Drone */}
        <div className="project-card">
          <span className="project-id-tag">ID: #002</span> {/* Project ID Tag */}
          <h2>Medical Drone</h2>
          <p>
            A drone-based system for transporting medical supplies quickly and efficiently to remote areas.
          </p>
          <button 
            className="view-details-button" 
            onClick={() => navigate('/projects/medical-drone')}
          >
            View Details
          </button>
        </div>

        {/* University Surveillance */}
        <div className="project-card">
          <span className="project-id-tag">ID: #003</span> {/* Project ID Tag */}
          <h2>University Surveillance</h2>
          <p>
            Using drones equipped with cameras for enhanced surveillance, ensuring campus safety and security.
          </p>
          <button 
            className="view-details-button" 
            onClick={() => navigate('/projects/university-surveillance')}
          >
            View Details
          </button>
        </div>

        {/* Virtual Tour Drones */}
        <div className="project-card">
          <span className="project-id-tag">ID: #004</span> {/* Project ID Tag */}
          <h2>Virtual Tour Drones</h2>
          <p>
            Drones capturing real-time aerial views for virtual tours, enhancing the online experience for viewers.
          </p>
          <button 
            className="view-details-button" 
            onClick={() => navigate('/projects/virtual-tour-drones')}
          >
            View Details
          </button>
        </div>

        {/* Project ID Tag Detection */}
        <div className="project-card">
          <span className="project-id-tag">ID: #005</span> {/* Project ID Tag */}
          <h2>Project ID Tag Detection</h2>
          <p>
            A drone-based system for detecting and scanning unique ID tags for asset tracking and surveillance.
          </p>
          <button 
            className="view-details-button" 
            onClick={() => navigate('/projects/project-id-tag-detection')}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
