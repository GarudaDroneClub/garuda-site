import React from 'react';
import './ProjectReport.css';

// Import the image into your component
import roadCrackImage from './road-crack-detection.jpg'; // Ensure the image is in the same folder as this component or adjust the path

const ProjectCrackDetection = () => {
  return (
    <div className="project-details-container"> {/* Updated CSS class */}
      <div className="image-container"> {/* Image container for consistent styling */}
        <img
          src={roadCrackImage} // This will be handled by Webpack
          alt="Road Crack Detection"
          className="project-image" // Ensures consistent styling for images
        />
        <div className="image-overlay"></div> {/* Adds the overlay effect */}
      </div>

      <h1>Road Crack Detection Using Drones</h1>

      <p>
        Road infrastructure is a critical component of any nation's development, ensuring the safe and efficient movement of people and goods. Over time, roads are subjected to various stressors such as traffic loads, weather conditions, and natural wear and tear, leading to the formation of cracks. These cracks, if not identified and repaired promptly, can deteriorate further, compromising road safety and increasing maintenance costs. Traditionally, road inspection has relied on manual surveys, which are labor-intensive, time-consuming, and prone to human error. This project introduces a cutting-edge solution using deep learning technology to automate the detection of cracks on road surfaces.
      </p>

      <h2>Key Features:</h2>
      <ul>
        <li>High-resolution imaging for accurate detection</li>
        <li>AI-powered classification of road cracks</li>
        <li>Efficient mapping of affected areas</li>
        <li>Assists in road maintenance decision-making</li>
      </ul>
    </div>
  );
};

export default ProjectCrackDetection;
