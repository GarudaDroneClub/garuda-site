// Contact.js
import React from 'react';
import './Contact.css';
import Header from './Header';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
      <Header /> {/* Include the Header component */}
      <header className="about-header">
        <h2>Contact Us</h2>
      </header>

        <p>Email: <a href="mailto:garuda.techclub@kluniversity.in">garuda.techclub@kluniversity.in</a></p>
        <p>Telegram IDs for Direct Contact:</p>
          <p>Garuda Support Bot - <a href="https://t.me/klgarudabot" target="_blank" rel="noopener noreferrer">https://https://t.me/klgarudabot</a></p>
        <p>President (G. Venkat) - <a href="https://t.me/venkatchowdary6666" target="_blank" rel="noopener noreferrer">https://t.me/venkatchowdary6666</a></p>
        <p>Vice President (Ch. Nithin) - <a href="https://t.me/Nithin1738E" target="_blank" rel="noopener noreferrer">https://t.me/Nithin1738E</a></p>
      </div>
    </div>
  );
};

export default Contact;
