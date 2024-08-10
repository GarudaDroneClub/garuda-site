import React from 'react';
import Header from './Header';
import './Team.css'; // Use the same CSS or create specific CSS for each year
import teamPhoto2 from './teamPhoto2.jpg';
import teamPhoto3 from './teamPhoto3.jpg';
import teamPhoto4 from './teamPhoto4.jpg';
import teamPhoto5 from './teamPhoto5.jpg';
import teamPhoto6 from './teamPhoto6.jpg';
import teamPhoto7 from './teamPhoto7.jpg';
import teamPhoto8 from './teamPhoto8.jpg';
import teamPhoto9 from './teamPhoto9.jpg';
import teamPhoto10 from './teamPhoto10.jpg';
import teamPhoto13 from './teamPhoto13.jpg';
import teamPhoto14 from './teamPhoto14.jpg';
import teamPhoto19 from './teamPhoto19.jpg';
import teamPhoto20 from './teamPhoto20.jpg';
import teamPhoto21 from './teamPhoto21.jpg';

// ... import other photos

const Y22 = () => {
  const teamMembers = [
    
    {
      name: 'Gullapalli Venkat',
      role: 'President & Website Development',
      photo: teamPhoto2,
    },
    {
      name: 'Ch.Nithin',
      role: 'Vice-president & Alumni Relations',
      photo: teamPhoto3,
    },
    {
      name: 'V.Vishnu Vardhan',
      role: 'Secretary',
      photo: teamPhoto4,
    },
    {
      name: 'Mouli Sagar',
      role: 'Mentor',
      photo: teamPhoto5,
    },
    {
      name: 'M.Yatish Datta',
      role: 'Club Instructor',
      photo: teamPhoto6,
    },
    {
      name: 'G.Jaya Ram Charan',
      role: 'Technical Core',
      photo: teamPhoto7,
    },
    {
      name: 'Kaif Baig',
      role: 'Technical Core',
      photo: teamPhoto8,
    },
    {
      name: 'Ch.Shine Sharon ',
      role: 'Technical Core',
      photo: teamPhoto9,
    },
     {
      name: 'Ch.Smile Sofia ',
      role: 'Technical Core',
      photo: teamPhoto19,
    },
     {
      name: 'A.Harshini ',
      role: 'Technical Core',
      photo: teamPhoto20,
    },
     {
      name: 'P.Thanmaie ',
      role: 'Technical Core',
      photo: teamPhoto21,
    },
    {
      name: 'Md.Arze Hayat',
      role: 'Technical Core',
      photo: teamPhoto10,
    },
    {
      name: 'B.Ram Teja',
      role: 'PR',
      photo: teamPhoto13,
    },
    {
      name: 'Siddarth Varma',
      role: ' Design Team',
      photo: teamPhoto14,
    },
     
    // ... add other team members
  ];

  return (
    <div className="team-container">
      <Header />
      <header className="team-header">
        <h2>Meet Our Team - Y22</h2>
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

export default Y22;
