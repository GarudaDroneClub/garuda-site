import React from 'react';
import './Team.css';
import teamPhoto1 from './teamPhoto1.jpg'; // Make sure to add your team photos in the src folder or adjust paths accordingly
import teamPhoto2 from './teamPhoto2.jpg';
import teamPhoto3 from './teamPhoto3.jpg';
import teamPhoto4 from './teamPhoto4.jpg';
import teamPhoto5 from './teamPhoto5.jpg';
import teamPhoto6 from './teamPhoto6.jpg';
import teamPhoto7 from './teamPhoto7.jpg';
import teamPhoto8 from './teamPhoto8.jpg';
import teamPhoto9 from './teamPhoto9.jpg';
import teamPhoto10 from './teamPhoto10.jpg';
import teamPhoto11 from './teamPhoto11.jpg';
import teamPhoto12 from './teamPhoto12.jpg';
import teamPhoto13 from './teamPhoto13.jpg';
import teamPhoto14 from './teamPhoto14.jpg';
import teamPhoto15 from './teamPhoto15.jpg';
const Team = () => {
  const teamMembers = [
    {
      name: 'Dr.Nilu Singh',
      role: 'Faculty Incharge',
      photo: teamPhoto1,
    },
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
      name: 'Shine Sharon ',
      role: 'Technical Core',
      photo: teamPhoto9,
    },
    {
      name: 'Md.Arze Hayat',
      role: 'Technical Core',
      photo: teamPhoto10,
    },
    {
      name: 'B.Mahesh',
      role: 'Technical Core',
      photo: teamPhoto11,
    },
    {
      name: 'M.Mani Dileep',
      role: 'Technical Core',
      photo: teamPhoto12,
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
    {
      name: 'B.Chaitanya',
      role: 'Drafting',
      photo: teamPhoto15,
    }, 
  ];

  return (
    <div className="team-container">
      <header className="team-header">
        <h2>Meet Our Team</h2>
        <h4>Y22</h4>
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

export default Team;
