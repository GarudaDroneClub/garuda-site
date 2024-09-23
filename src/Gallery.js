import React from 'react';
import './Gallery.css';
import Header from './Header';

// Import photos and videos
import GalleryPhoto1 from './GalleryPhoto1.jpg'; // Replace with actual paths
import GalleryPhoto2 from './GalleryPhoto2.jpg';
import GalleryPhoto3 from './GalleryPhoto3.jpg';
import GalleryPhoto4 from './GalleryPhoto4.jpg';
import GalleryPhoto5 from './GalleryPhoto5.jpg';
import GalleryPhoto6 from './GalleryPhoto6.jpg';
import GalleryPhoto7 from './GalleryPhoto7.jpg';
import GalleryPhoto8 from './GalleryPhoto8.jpg';
import GalleryPhoto9 from './GalleryPhoto9.jpg';
import GalleryPhoto10 from './GalleryPhoto10.jpg';
import GalleryVideo1 from './GalleryVideo1.mp4';
import GalleryVideo2 from './GalleryVideo2.mp4';
import GalleryVideo4 from './GalleryVideo4.mp4';
import GalleryVideo5 from './GalleryVideo5.mp4';
import GalleryVideo6 from './GalleryVideo6.mp4';

const Gallery = () => {
  // Create arrays for photos and videos
  const photos = [
    GalleryPhoto1, GalleryPhoto2, GalleryPhoto3, GalleryPhoto4, 
    GalleryPhoto5, GalleryPhoto6, GalleryPhoto7, GalleryPhoto8, 
    GalleryPhoto9, GalleryPhoto10
  ];

  const videos = [
    GalleryVideo1, GalleryVideo2, GalleryVideo4, GalleryVideo5, GalleryVideo6
  ];

  return (
    <div className="gallery-container">
      <Header />
      <header className="gallery-header">
        <h2>Gallery</h2>
        <h3>Photos & Videos</h3>
      </header>
      <div className="gallery-content">
        {/* Render photos */}
        {photos.map((photo, index) => (
          <div className="gallery-item" key={`photo-${index}`}>
            <img src={photo} alt={`Gallery Photo ${index + 1}`} className="gallery-photo" />
          </div>
        ))}

        {/* Render videos */}
        {videos.map((video, index) => (
          <div className="gallery-item" key={`video-${index}`}>
            <video controls className="gallery-video">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
