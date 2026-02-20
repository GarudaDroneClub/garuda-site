import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import projectsData from '../data/projects.json';

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projectsData[slug];

    if (!project) {
        return (
            <div className="page-container">
                <Header />
                <div className="page-header">
                    <h1 className="page-title">Project Not Found</h1>
                </div>
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
                </div>
            </div>
        );
    }

    const getImagePath = (imageName) => {
        try {
            return require(`../assets/images/${imageName}`);
        } catch (err) {
            return null;
        }
    };

    const imageSrc = getImagePath(project.image);

    return (
        <div className="page-container">
            <Header />
            <div className="page-header">
                <h1 className="page-title">{project.title}</h1>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
                        {imageSrc && (
                            <img
                                src={imageSrc}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))'
                        }}></div>
                    </div>

                    <div style={{ padding: '40px' }}>
                        <h2 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading-section)', marginBottom: '20px' }}>Overview</h2>
                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '40px' }}>
                            {project.description}
                        </p>

                        {project.features && project.features.length > 0 && (
                            <>
                                <h2 style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading-section)', marginBottom: '20px' }}>Key Features</h2>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {project.features.map((feature, index) => (
                                        <li key={index} style={{
                                            marginBottom: '15px',
                                            paddingLeft: '25px',
                                            position: 'relative',
                                            color: 'var(--color-text-primary)'
                                        }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <div style={{ marginTop: '50px', textAlign: 'center' }}>
                            <Link to="/projects" className="btn btn-outline">Back to Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
