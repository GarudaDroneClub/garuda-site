import React from 'react';
import Header from './Header';
import './Team.css'; // Use the same CSS or create specific CSS for each year
import teamPhoto2 from './teamPhoto2.jpg';
import teamPhoto3 from './teamPhoto3.png';
import teamPhoto4 from './teamPhoto4.jpg';
import teamPhoto5 from './teamPhoto5.jpg';
import teamPhoto6 from './teamPhoto6.jpg';
import teamPhoto10 from './teamPhoto10.jpg';
import teamPhoto19 from './teamPhoto19.jpg';
import teamPhoto20 from './teamPhoto20.jpg';
import teamPhoto21 from './teamPhoto21.jpg';
import teamPhoto11 from './teamPhoto11.jpg';
import teamPhoto18 from './teamPhoto18.jpg';
import teamPhoto12 from './teamPhoto12.jpg';
import teamPhoto17 from './teamPhoto17.jpg';

// ... import other photos

const Y2024_2025 = () => {
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
      name: 'A.Harshini ',
      role: 'Secretary',
      photo: teamPhoto20,
    },  
    
    {
      name: 'V.Vishnu Vardhan',
      role: 'Director',
      photo: teamPhoto4,
    },
    {
      name: 'Mouli Sagar',
      role: 'ADVISOR',
      photo: teamPhoto5,
    },
    {
      name: 'M.Yatish Datta',
      role: 'Mentor',
      photo: teamPhoto6,
    },
 

     {
      name: 'Ch.Smile Sofia ',
      role: 'Technical Core',
      photo: teamPhoto19,
    },
    
     {
      name: 'P.Thanmaie ',
      role: 'Event Monitor',
      photo: teamPhoto21,
    },
    {
      name: 'Md.Arze Hayat',
      role: 'Event Handler',
      photo: teamPhoto10,
    },
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
