import React from 'react';
import './Achievements.css';
import Header from './Header'; // Import the Header component

import AchievementPhoto1 from './AchievementPhoto1.jpg'; // Replace with actual paths
import AchievementPhoto2 from './AchievementPhoto2.jpg';

const Achievements = () => {
  // Array of achievements with photos and descriptions
  const achievements = [
    {
      image: AchievementPhoto1,
      text: "Won the National Drone Competition 2023 for precision flying and innovative designs."
    },
    {
      image: AchievementPhoto2,
      text: "Awarded the Best Innovation in Drone Technology at Tech Expo 2022."
    },
    // Add more achievements here
  ];

  return (
    <div className="achievements-container">
    <Header />
      <h2>Our Achievements</h2>
      {achievements.map((achievement, index) => (
        <div className="achievement-item" key={index}>
          <img src={achievement.image} alt={`Achievement ${index + 1}`} className="achievement-photo" />
          <div className="achievement-text">
            <p>{achievement.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
