import React from 'react';
import './ProjectReport.css'; // Your CSS for styling

// Import the image from the same folder
import medicalDroneImage from './medical-drone.jpg';  // No need for an additional folder

const ProjectMedicalDrone = () => {
  return (
    <div className="project-details-container">
      <div className="image-container">
        {/* Adding the image with a matte overlay */}
        <img 
          src={medicalDroneImage} 
          alt="Medical Drone"
          className="project-image"
        />
        <div className="image-overlay"></div>
      </div>
      
      <h1>Medical Drone</h1>
      <p>
        The drone system for medical deliveries is an advanced solution designed to transport
        medicines swiftly and efficiently. Equipped with GPS navigation and temperature-controlled
        compartments, these drones can carry essential medications to remote or hard-to-reach areas.
        The system ensures timely delivery of pharmaceuticals, especially during emergencies or
        natural disasters, where traditional transportation methods may be hindered. By leveraging
        advanced technology, this drone system enhances healthcare accessibility and supports the
        timely treatment of patients in need.
      </p>
      
      <h2>Specifications</h2>
      <ul>
        <li>Purpose: Transportation of medicines, vaccines, and medical supplies.</li>
        <li>Design Type: Multirotor Quadcopter</li>
        <li>Payload Capacity: 2-5 kg (customizable based on use case).</li>
        <li>Weight: 7 kg (including payload).</li>
        <li>Flight Controller: DJI NAZA M-Lite with GPS</li>
      </ul>
    </div>
  );
};

export default ProjectMedicalDrone;
