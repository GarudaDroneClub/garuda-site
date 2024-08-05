import React from 'react';
import Header from './Header';
import './Team.css'; // Use the same CSS or create specific CSS for each year
import teamPhoto11 from './teamPhoto11.jpg';
import teamPhoto18 from './teamPhoto18.jpg';

// ... import other photos

const Y21 = () => {
  const teamMembers = [
    {
      name: 'B.Manesh',
      role: 'Technical Core',
      photo: teamPhoto11,
    },
     {
      name: 'P.Anvitha',
      role: 'Technical Core',
      photo: teamPhoto18,
    },
    // ... add other team members
  ];

  return (
    <div className="team-container">
      <Header />
      <header className="team-header">
        <h2>Meet Our Team - Y21</h2>
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

export default Y21;
