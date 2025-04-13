import React from 'react';
import Header from './Header';
import './Team.css'; // Use the same CSS or create specific CSS for each year
import teamPhoto2 from './teamPhoto2.jpg';
import teamPhoto3 from './teamPhoto3.png';
import teamPhoto4 from './teamPhoto4.jpg';
import teamPhoto5 from './teamPhoto5.jpg';
import teamPhoto6 from './teamPhoto6.jpg';
import teamPhoto20 from './teamPhoto20.jpg';
import teamPhoto11 from './teamPhoto11.jpg';
import teamPhoto18 from './teamPhoto18.jpg';
import teamPhoto12 from './teamPhoto12.jpg';
import teamPhoto17 from './teamPhoto17.jpg';
import teamPhoto29 from './teamPhoto29.png';
import teamPhoto30 from './teamPhoto30.png';
import teamPhoto31 from './teamPhoto31.png';
import teamPhoto32 from './teamPhoto32.png';
import teamPhoto33 from './teamPhoto33.png';
import teamPhoto34 from './teamPhoto34.png';
import teamPhoto35 from './teamPhoto35.jpg';
import teamPhoto36 from './teamPhoto36.png';
import teamPhoto37 from './teamPhoto37.jpg';
import teamPhoto38 from './teamPhoto38.png';
import teamPhoto39 from './teamPhoto39.jpg';
import teamPhoto40 from './teamPhoto40.png';
import teamPhoto41 from './teamPhoto41.png';
import teamPhoto42 from './teamPhoto42.jpg';
import teamPhoto43 from './teamPhoto43.png';
import teamPhoto44 from './teamPhoto44.jpeg';
import teamPhoto45 from './teamPhoto45.png';
import teamPhoto46 from './teamPhoto46.jpg';
import teamPhoto51 from './teamPhoto51.jpg';



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
      name: 'M.Mani Dileep',
      role: 'Technical Core',
      photo: teamPhoto12,
    },

    {
      name: 'T.Gowtham Sai',
      role: 'Technical Core',
      photo: teamPhoto17,
    },
    {
      name: 'J.Hema Sundhara Rao',
      role: 'Technical Core',
      photo: teamPhoto29,
    },
    {
      name: 'K.Sri Sai Taran',
      role: 'Technical Core',
      photo: teamPhoto30,
    },
    {
      name: 'G.Rohith',
      role: 'Technical Core',
      photo: teamPhoto31,
    },
    {
      name: 'T.Harshitha',
      role: 'Technical Core',
      photo: teamPhoto32,
    },
    {
      name: 'Ch.Heshmitha',
      role: 'Technical Core',
      photo: teamPhoto33,
    },
    {
      name: 'B.Govardhini',
      role: 'Technical Core',
      photo: teamPhoto34,
    },
    {
      name: 'T.Navya Sri',
      role: 'Technical Core',
      photo: teamPhoto35,
    },
    {
      name: 'V.Subhashini',
      role: 'Technical Core',
      photo: teamPhoto36,
    },
    {
      name: 'Y.Manikanta Sai',
      role: 'Technical Core',
      photo: teamPhoto37,
    },
    {
      name: 'V.Sai Kumar',
      role: 'Technical Core',
      photo: teamPhoto38,
    },
    {
      name: 'M.Mithilesh',
      role: 'Technical Core',
      photo: teamPhoto39,
    },
    {
      name: 'G.Harshitha',
      role: 'Technical Core',
      photo: teamPhoto40,
    },
    {
      name: 'R.Ritesh Venkata Sai Mani',
      role: 'Technical Core',
      photo: teamPhoto41,
    },
    {
      name: 'Ch.tejasree',
      role: 'Technical Core',
      photo: teamPhoto42,
    },
    {
      name: 'R.Sri ram kumar',
      role: 'Technical Core',
      photo: teamPhoto43,
    },
    {
      name: 'S.Pranav',
      role: 'Technical Core',
      photo: teamPhoto44,
    },
    {
      name: 'M.Sasank Reddy',
      role: 'Technical Core',
      photo: teamPhoto45,
    },
    {
      name: 'P.Siva',
      role: 'Technical Core',
      photo: teamPhoto46,
    },
   {
      name: 'D.Kalyan',
      role: 'Technical Core',
      photo: teamPhoto51,
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
