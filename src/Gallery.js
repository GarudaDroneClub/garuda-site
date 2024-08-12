import React from 'react';
import './Gallery.css';
import GalleryPhoto1 from './GalleryPhoto1.jpg'; // Replace with actual paths
import GalleryPhoto2 from './GalleryPhoto2.jpg';
import GalleryPhoto3 from './GalleryPhoto3.jpg';
import GalleryPhoto4 from './GalleryPhoto3.jpg';
import GalleryPhoto5 from './GalleryPhoto3.jpg';
import GalleryPhoto6 from './GalleryPhoto3.jpg';
import GalleryPhoto7 from './GalleryPhoto3.jpg';
import GalleryPhoto8 from './GalleryPhoto3.jpg';
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
  <div className="gallery-item">
          <img src={GalleryPhoto4} alt="Gallery Photo 4" className="gallery-photo" />
        </div>  
  <div className="gallery-item">
          <img src={GalleryPhoto5} alt="Gallery Photo 5" className="gallery-photo" />
        </div>  
  <div className="gallery-item">
          <img src={GalleryPhoto6} alt="Gallery Photo 6" className="gallery-photo" />
        </div>  
  <div className="gallery-item">
          <img src={GalleryPhoto7} alt="Gallery Photo 7" className="gallery-photo" />
        </div>  
  <div className="gallery-item">
          <img src={GalleryPhoto8} alt="Gallery Photo 8" className="gallery-photo" />
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
