import React from 'react';
import './Achievements.css';
import Header from './Header'; // Import the Header component

import AchievementPhoto1 from './AchievementPhoto1.jpg'; // Replace with actual paths
import AchievementPhoto2 from './AchievementPhoto2.jpg';
import AchievementPhoto3 from './AchievementPhoto3.jpg';
import AchievementPhoto4 from './AchievementPhoto4.jpg';
import AchievementPhoto5 from './AchievementPhoto5.jpg';
import AchievementPhoto6 from './AchievementPhoto6.jpg';
import AchievementPhoto7 from './AchievementPhoto7.jpg';

const Achievements = () => {
  // Array of achievements with photos and descriptions
  const achievements = [
    {
      image: AchievementPhoto1,
      text: "Congratulations to Gullapalli Venkat, Challagulla Nithin, Ambati Harshini, Gullinkala Mouli Sagar, and Madala Yatish Datta for being selected for the Regional Level competition! Your innovative project, Project Sanjeevani, demonstrates exceptional commitment to enhancing emergency response. Best of luck for your upcoming International Startup Festival National Ideathon."
    },
    {
      image: AchievementPhoto2,
      text: "Another remarkable milestone achieved! Stay tuned for more updates on our journey."
    },
    {
      image: AchievementPhoto3,
      text: "Dear participants, as you embark on Round 2 of the Mahakumbh Hackathon 2025, I extend my heartfelt wishes for a journey filled with innovation, collaboration, and success. Your dedication and creativity have brought you to this stage, and I have no doubt that you will continue to showcase your exceptional talents. Embrace the challenges, learn from every moment, and let your passion drive you to new heights. May this round be a testament to your hard work and determination. Best wishes for an enriching and rewarding experience in Round 2 of the Mahakumbh Hackathon 2025! May your ideas flourish and your solutions inspire. Go team!"
    },
    {
      image: AchievementPhoto6,
      image2: AchievementPhoto7, // Second image property
      text: `We are excited to share that we made a remarkable impact at the Amaravati Drone Summit 2024, showcasing our cutting-edge innovations in drone technology! Our participation in this prestigious event reinforced our commitment to pushing the boundaries of aerial advancements and smart solutions. Competing alongside some of the brightest minds, we demonstrated groundbreaking ideas that captured attention and appreciation. A heartfelt thank you to everyone who supported us on this journey. Stay tuned as we continue to redefine possibilities in the world of drones and technology!  
      <br/><br/>
      <a href="https://www.kluniversity.in/view.aspx?id=3467" target="_blank" rel="noopener noreferrer">Click here to learn more</a>`
    },
    {
      image: AchievementPhoto4,
      text: "We are thrilled to announce that our team has emerged victorious in the zonal round of the prestigious Eureka Pitchathon! This milestone reflects our innovative ideas, hard work, and determination to excel. Competing against some of the brightest minds, we presented a compelling vision that resonated with the judges and stood out as a winning concept."
    },
    {
      image: AchievementPhoto5,
      text: "We are thrilled to announce that we have emerged as the National Winners of the prestigious Smart India Hackathon 2025 and secured victory in the zonal round of the Eureka Pitchathon! These achievements highlight our relentless pursuit of innovation and excellence, as we presented impactful solutions that stood out among the best minds across the country. We extend our gratitude to everyone who supported us on this journey and remain committed to pushing the boundaries of creativity and technology. Stay tuned as we continue to make a difference with our ideas!"
    }
  ];

  return (
    <div className="achievements-container">
      <Header />
      <h2>Our Achievements</h2>
      {achievements.map((achievement, index) => (
        <div className="achievement-item" key={index}>
          <img src={achievement.image} alt={`Achievement ${index + 1}`} className="achievement-photo" />
          {achievement.image2 && (
            <img src={achievement.image2} alt={`Achievement ${index + 1} - 2`} className="achievement-photo" />
          )}
          <div className="achievement-text" dangerouslySetInnerHTML={{ __html: achievement.text }} />
        </div>
      ))}
    </div>
  );
};

export default Achievements;
