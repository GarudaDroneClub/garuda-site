import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import '../styles/Team.css'; // Removed in favor of global components

const Team = () => {
  const years = [
    { id: 'fi', title: 'Faculty Incharge', desc: 'Our Guiding Light', color: 'var(--color-primary)' },
    { id: '2024-2025', title: '2024-2025', desc: 'Current Team', color: 'var(--color-secondary)' },
    { id: 'y22', title: '2023-2024', desc: 'Previous Team', color: 'var(--color-text-secondary)' },
    { id: 'y20', title: '2022-2023 [ALUMNI]', desc: 'Founding Members', color: 'var(--color-text-secondary)' },
  ];

  return (
    <div className="page-container">
      <Header />
      <div className="page-header">
        <h1 className="page-title">Meet The <span className="highlight">Team</span></h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '10px' }}>
          The minds behind the machines.
        </p>
      </div>

      <div className="grid-container">
        {years.map((year) => (
          <Link to={`/team/${year.id}`} className="card" key={year.id} style={{ textDecoration: 'none', alignItems: 'center', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `linear-gradient(45deg, ${year.color}, transparent)`,
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#fff',
              fontFamily: 'var(--font-heading-hero)'
            }}>
              {year.title.substring(0, 1)}
            </div>
            <h2 className="card-title">{year.title}</h2>
            <p className="card-subtitle">{year.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Team;
