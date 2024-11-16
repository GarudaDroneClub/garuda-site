import React from 'react';
import Header from './Header';
import './Team.css'; // Reuse the same CSS for team styles
import teamPhoto24_1 from './teamPhoto24_1.jpg';
import teamPhoto24_2 from './teamPhoto24_2.jpg';
import teamPhoto24_3 from './teamPhoto24_3.jpg';
import teamPhoto24_4 from './teamPhoto24_4.jpg';
import teamPhoto24_5 from './teamPhoto24_5.jpg';
import teamPhoto24_6 from './teamPhoto24_6.jpg';
import teamPhoto24_7 from './teamPhoto24_7.jpg';
import teamPhoto24_8 from './teamPhoto24_8.jpg';
import teamPhoto24_9 from './teamPhoto24_9.jpg';
import teamPhoto24_10 from './teamPhoto24_10.jpg';

// ... import additional photos as necessary

const Y2024_2025 = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'President',
      photo: teamPhoto24_1,
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      photo: teamPhoto24_2,
    },
    {
      name: 'Emily Johnson',
      role: 'Secretary',
      photo: teamPhoto24_3,
    },
    {
      name: 'Michael Brown',
      role: 'Advisor',
      photo: teamPhoto24_4,
    },
    {
      name: 'Sarah Davis',
      role: 'Event Manager',
      photo: teamPhoto24_5,
    },
    {
      name: 'David Wilson',
      role: 'Technical Lead',
      photo: teamPhoto24_6,
    },
    {
      name: 'Sophia Martinez',
      role: 'Marketing Head',
      photo: teamPhoto24_7,
    },
    {
      name: 'James Anderson',
      role: 'Creative Head',
      photo: teamPhoto24_8,
    },
    {
      name: 'Linda Thomas',
      role: 'Public Relations',
      photo: teamPhoto24_9,
    },
    {
      name: 'Robert Lee',
      role: 'Operations Head',
      photo: teamPhoto24_10,
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
