import React from 'react';
import Header from './Header';
import './Team.css'; // Use the same CSS or create specific CSS for each year
import teamPhoto22 from './teamPhoto22.jpg';
import teamPhoto23 from './teamPhoto23.jpg';
import teamPhoto24 from './teamPhoto24.jpg';
import teamPhoto25 from './teamPhoto25.jpg';
import teamPhoto26 from './teamPhoto26.jpg';
import teamPhoto27 from './teamPhoto27.jpg';
import teamPhoto28 from './teamPhoto28.jpg';
  // ... import other photos

const Y20 = () => {
  const teamMembers = [
    {
      name: 'N.Likhitha',
      role: 'President',
      photo: teamPhoto22,
    },
    {
      name: 'N Naga Sai Venkat',
      role: 'Vice President',
      photo: teamPhoto23,
    },
      {
      name: 'N Sumadhur Royal',
      role: 'Secretary',
      photo: teamPhoto24,
    },
      {
      name: 'G Siddhartha',
      role: 'Mentor',
      photo: teamPhoto25,
    },
      {
      name: 'K Prasasthi',
      role: 'Technical Core',
      photo: teamPhoto26,
    },
      {
      name: 'K Siri Chandana',
      role: 'Technical Core',
      photo: teamPhoto27,
    },
    {
      name: 'P Likhitha',
      role: 'Technical Core',
      photo: teamPhoto28,
    },
    // ... add other team members
  ];

  return (
    <div className="team-container">
      <Header />
      <header className="team-header">
        <h2>Meet Our Team - Y20</h2>
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

export default Y20;
