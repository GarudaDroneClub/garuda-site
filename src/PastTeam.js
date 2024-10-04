// PastTeam.js
import React from 'react';
import Header from './Header';
import './Team.css';
import dumbdemo from './dumbdemo.png';
// ...import other photos

const PastTeam = () => {
  const pastTeamMembers = [
    {
      name: 'A. John',
      role: 'Former President',
      photo: dumbdemo,
    },
    {
      name: 'B. Sarah',
      role: 'Former Vice President',
      photo: dumbdemo,
    },
    // ... add more past team members
  ];

  return (
    <div className="team-container">
      <Header />
      <header className="team-header">
        <h2>Meet Our Past Team Members</h2>
      </header>
      <div className="team-content">
        {pastTeamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastTeam;
