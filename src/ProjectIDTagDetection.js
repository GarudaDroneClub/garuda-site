// src/ProjectIDTagDetection.js

import React from 'react';
import './ProjectReport.css'; // Custom CSS for styling

// Import the image from the 'src' folder
import projectImage from './project-id-tag-detection.jpg'; // Correct import from the 'src' folder

const ProjectIDTagDetection = () => {
  return (
    <div className="project-details-container">
      <div className="image-container">
        {/* Use the imported image here */}
        <img 
          src={projectImage} // Use the imported image variable
          alt="Project ID Tag Detection"
          className="project-image"
        />
        <div className="image-overlay"></div>
      </div>

      <h1>Project ID Tag Detection</h1>
      <p>
        The drone system for ID tag identification is an innovative solution designed to enhance student
        security and management on campus. These drones are equipped with Raspberry Pi and cameras to detect 
        and verify student ID tags. By autonomously patrolling the campus, they can quickly identify students 
        who are not wearing their ID tags and alert campus security. This system ensures that only authorized 
        individuals are present in restricted areas, thereby improving safety and compliance with university regulations.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Flight Time: 30-40 minutes per charge.</li>
        <li>Range: Up to 2-5 km (depending on campus size).</li>
        <li>Speed: 10-15 m/s (adjustable for steady detection).</li>
        <li>Payload Capacity: 500-800g to support cameras and additional modules.</li>
        <li>Flight Controller: RadioLink CrossFlight </li>
      </ul>
    </div>
  );
};

export default ProjectIDTagDetection;
