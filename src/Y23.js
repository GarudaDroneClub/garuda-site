import React from 'react';
import Header from './Header';
import './Team.css'; // Use the same CSS or create specific CSS for each year
import teamPhoto12 from './teamPhoto12.jpg';
import teamPhoto17 from './teamPhoto17.jpg';


// ... import other photos

const Y23 = () => {
  const teamMembers = [
    {
      name: 'M.Mani Dileep',
      role: 'Technical Core',
      photo: teamPhoto12,
    },

    {
      name: 'T.Gowtham Sai',
      role: 'Technical Core',
      photo: teamPhoto17,
    },
   
    // ... add other team members
  ];

  return (
    <div className="team-container">
      <Header />
      <header className="team-header">
        <h2>Meet Our Team - Y23</h2>
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

export default Y23;
