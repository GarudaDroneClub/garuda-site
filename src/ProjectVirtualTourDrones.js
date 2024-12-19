import React from 'react';
import './ProjectReport.css'; // Your custom CSS for this project

// Import the image directly from the 'src' folder
import virtualTourDronesImage from './virtual-tour-drones.jpg'; // Adjust path accordingly

const ProjectVirtualTourDrones = () => {
  return (
    <div className="project-details-container">
      <div className="image-container">
        {/* Adding the image for Virtual Tour Drones with a matte overlay */}
        <img 
          src={virtualTourDronesImage} // Use the imported image here
          alt="Virtual Tour Drones"
          className="project-image"
        />
        <div className="image-overlay"></div>
      </div>
      
      <h1>Virtual Tour Drones</h1>
      <p>
        The drone system for virtual university tours is an innovative solution designed to assist parents
        during the admissions process. This system deploys drones equipped with high-definition cameras 
        to capture real-time video footage of the campus. The footage is streamed to an interactive platform, 
        allowing parents to explore various university facilities remotely. The drone system offers a 
        comprehensive view of the university, providing a vivid and immersive experience. This technology ensures 
        that parents can gain a thorough understanding of the campus environment, even if they are unable to visit 
        in person.
      </p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Flight Time: 30-40 minutes per charge</li>
        <li>Range: Up to 2-5 km (depending on campus size)</li>
        <li>Speed: 10-15 m/s (adjustable for smooth campus tours)</li>
        <li>Payload Capacity: 500-800g to support cameras and additional modules</li>
        <li>Flight Controller: ArduPilot 2.8.0 and DJI NAZA M-Lite</li>
      </ul>
    </div>
  );
};

export default ProjectVirtualTourDrones;
