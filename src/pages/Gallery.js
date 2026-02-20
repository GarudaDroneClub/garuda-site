import React from 'react';
import Header from '../components/Header';

// Import photos and videos
import GalleryPhoto1 from '../assets/images/GalleryPhoto1.jpg';
import GalleryPhoto2 from '../assets/images/GalleryPhoto2.jpg';
import GalleryPhoto3 from '../assets/images/GalleryPhoto3.jpg';
import GalleryPhoto4 from '../assets/images/GalleryPhoto4.jpg';
import GalleryPhoto5 from '../assets/images/GalleryPhoto5.jpg';
import GalleryPhoto6 from '../assets/images/GalleryPhoto6.jpg';
import GalleryPhoto7 from '../assets/images/GalleryPhoto7.jpg';
import GalleryPhoto8 from '../assets/images/GalleryPhoto8.jpg';
import GalleryPhoto9 from '../assets/images/GalleryPhoto9.jpg';
import GalleryPhoto10 from '../assets/images/GalleryPhoto10.jpg';
import GalleryVideo1 from '../assets/videos/GalleryVideo1.mp4';
import GalleryVideo2 from '../assets/videos/GalleryVideo2.mp4';
import GalleryVideo4 from '../assets/videos/GalleryVideo4.mp4';
import GalleryVideo5 from '../assets/videos/GalleryVideo5.mp4';
import GalleryVideo6 from '../assets/videos/GalleryVideo6.mp4';

const Gallery = () => {
  const photos = [
    GalleryPhoto1, GalleryPhoto2, GalleryPhoto3, GalleryPhoto4,
    GalleryPhoto5, GalleryPhoto6, GalleryPhoto7, GalleryPhoto8,
    GalleryPhoto9, GalleryPhoto10
  ];

  const videos = [
    GalleryVideo1, GalleryVideo2, GalleryVideo4, GalleryVideo5, GalleryVideo6
  ];

  return (
    <div className="page-container">
      <Header />
      <div className="page-header">
        <h1 className="page-title">Media <span className="highlight">Gallery</span></h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '10px' }}>
          Capturing our best moments.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h2 className="section-title" style={{ textAlign: 'left', borderBottom: '1px solid var(--color-surface)', paddingBottom: '10px', marginBottom: '30px' }}>
          Photos
        </h2>
        <div className="grid-container" style={{ padding: 0 }}>
          {photos.map((photo, index) => (
            <div className="card" key={`photo-${index}`} style={{ padding: '0', overflow: 'hidden' }}>
              <img src={photo} alt={`Gallery item ${index + 1}`} className="card-image" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ textAlign: 'left', borderBottom: '1px solid var(--color-surface)', paddingBottom: '10px', marginBottom: '30px', marginTop: '60px' }}>
          Videos
        </h2>
        <div className="grid-container" style={{ padding: 0 }}>
          {videos.map((video, index) => (
            <div className="card" key={`video-${index}`} style={{ padding: '0', overflow: 'hidden', background: '#000' }}>
              <video controls style={{ width: '100%', height: '100%' }}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
