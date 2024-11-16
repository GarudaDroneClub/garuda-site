import React from 'react';
import Header from './Header';
import './Team.css'; // Reuse the same CSS for team styles
import teamPhoto19 from './teamPhoto19.jpg';


// ... import additional photos as necessary

const Y2024_2025 = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'President',
      photo: teamPhoto19,
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      photo: teamPhoto19,
    },
    {
      name: 'Emily Johnson',
      role: 'Secretary',
      photo: teamPhoto19,
    },
    {
      name: 'Michael Brown',
      role: 'Advisor',
      photo: teamPhoto19,
    },

    // Add more members if necessary
  ];

  return (
    <div className="team-container">
      <Header />
      <header className="team-header">
        <h2>Meet Our Team - 2024-2025</h2>
      </header>
      <div className="team-content">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={`${member.name}`} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Y2024_2025;
