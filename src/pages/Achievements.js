import React from 'react';
import Header from '../components/Header';
import achievementsData from '../data/achievements.json';

const Achievements = () => {
  const getImagePath = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="page-header">
        <h1 className="page-title">Our <span className="highlight">Achievements</span></h1>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        {achievementsData.map((achievement, index) => {
          const src1 = getImagePath(achievement.image);
          const src2 = achievement.image2 ? getImagePath(achievement.image2) : null;

          return (
            <div className="card" key={index} style={{ marginBottom: '40px', padding: '30px' }}>
              <div className="grid-container" style={{ padding: 0, gridTemplateColumns: src2 ? '1fr 1fr' : '1fr' }}>
                {src1 && (
                  <div className="card-image-container" style={{ height: '300px' }}>
                    <img src={src1} alt={`Achievement ${index + 1}`} className="card-image" />
                  </div>
                )}
                {src2 && (
                  <div className="card-image-container" style={{ height: '300px' }}>
                    <img src={src2} alt={`Achievement ${index + 1} - 2`} className="card-image" />
                  </div>
                )}
              </div>

              <div style={{ marginTop: '20px', color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}
                dangerouslySetInnerHTML={{ __html: achievement.text }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
