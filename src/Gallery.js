import React from 'react';
import './Gallery.css';
import GalleryPhoto1 from './GalleryPhoto1.jpg'; // Replace with actual paths
import GalleryPhoto2 from './GalleryPhoto2.jpg';
import GalleryPhoto3 from './GalleryPhoto3.jpg';
import GalleryVideo1 from './GalleryVideo1.mp4';
import Header from './Header';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Header />
      <header className="gallery-header">
        <h2>Gallery</h2>
        <h3>Photos & Videos</h3>
      </header>
      <div className="gallery-content">
        {/* Photos */}
        <div className="gallery-item">
          <img src={GalleryPhoto1} alt="Gallery Photo 1" className="gallery-photo" />
        </div>
        <div className="gallery-item">
          <img src={GalleryPhoto2} alt="Gallery Photo 2" className="gallery-photo" />
        </div>
        <div className="gallery-item">
          <img src={GalleryPhoto3} alt="Gallery Photo 3" className="gallery-photo" />
        </div>
        {/* Videos */}
        <div className="gallery-item">
          <video controls className="gallery-video">
            <source src={GalleryVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Add more photos/videos as needed */}
      </div>
    </div>
  );
};

export default Gallery;
