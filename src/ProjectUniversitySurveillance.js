import React from 'react';
import './ProjectReport.css'; // Your custom CSS file for styling

// Import the image from the 'src' folder
import universitySurveillanceImage from './university-surveillance.jpg'; // Adjust the path

const ProjectUniversitySurveillance = () => {
  return (
    <div className="project-details-container">
      <div className="image-container">
        {/* Adding the image for University Surveillance with a matte overlay */}
        <img 
          src={universitySurveillanceImage} // Use the imported image here
          alt="University Surveillance"
          className="project-image"
        />
        <div className="image-overlay"></div>
      </div>
      
      <h1>University Surveillance</h1>
      <p>
        The drone surveillance system for the university provides continuous monitoring and security
        both day and night. Equipped with high-resolution cameras and night vision capabilities, these
        drones patrol the campus to ensure safety and detect any unusual activity. They offer real-time
        video feeds to the university's security team, enabling rapid response to potential threats.
      </p>
      
      <h2>Specifications</h2>
      <ul>
        <li>Payload Capacity: 3-5 kg (expandable based on requirements)</li>
        <li>Flight Time: 45–60 minutes per charge (depending on payload)</li>
        <li>Range: Up to 20 km (extendable with advanced battery packs)</li>
        <li>Onboard Computer: Raspberry Pi 4 Model B</li>
      </ul>
    </div>
  );
};

export default ProjectUniversitySurveillance;

