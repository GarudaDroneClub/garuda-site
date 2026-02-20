import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import teamData from '../data/team.json';
// import '../styles/Team.css'; // Removed
// import '../styles/FI.css'; // Removed

const YearPage = () => {
    const { id } = useParams();
    const data = teamData[id];

    if (!data) {
        return (
            <div className="page-container">
                <Header />
                <div className="page-header">
                    <h1 className="page-title">Year not found</h1>
                </div>
            </div>
        );
    }

    const getImagePath = (photoName) => {
        try {
            return require(`../assets/images/${photoName}`);
        } catch (err) {
            return null;
        }
    };

    const isFI = id === 'fi';

    return (
        <div className="page-container">
            <Header />
            <div className="page-header">
                <h1 className="page-title">{isFI ? 'Faculty Incharge' : data.title}</h1>
            </div>

            <div className="grid-container">
                {data.members.map((member, index) => {
                    const imageSrc = getImagePath(member.photo);

                    return (
                        <div className="card" key={index} style={{ textAlign: 'center' }}>
                            <div className="card-image-container" style={{ width: '100%', height: 'auto', margin: '0 auto 20px' }}>
                                {imageSrc ? (
                                    <img src={imageSrc} alt={member.name} className="card-image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '200px', background: '#333', borderRadius: '8px' }}></div>
                                )}
                            </div>
                            <h2 className="card-title" style={{ fontSize: '1.2rem' }}>{member.name}</h2>
                            {isFI ? (
                                <p className="card-subtitle" style={{ textAlign: 'left' }}>{member.description}</p>
                            ) : (
                                <p style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{member.role}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default YearPage;
