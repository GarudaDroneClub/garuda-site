import React from 'react';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="page-header" style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="page-title">Contact <span className="highlight">Us</span></h1>
      </div>

      <div className="grid-container" style={{ maxWidth: '800px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h2 className="card-title">Get In Touch</h2>
          <p className="card-subtitle">
            Email: <a href="mailto:garuda.techclub@kluniversity.in" style={{ color: 'var(--color-primary)' }}>garuda.techclub@kluniversity.in</a>
          </p>

          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '10px' }}>Telegram</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Garuda Support Bot: </span>
                <a href="https://t.me/klgarudabot" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>@klgarudabot</a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>President (G. Venkat): </span>
                <a href="https://t.me/venkatchowdary6666" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>@venkatchowdary6666</a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Vice President (Ch. Nithin): </span>
                <a href="https://t.me/Nithin1738E" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>@Nithin1738E</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
