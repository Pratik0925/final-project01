// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [animatingImageId, setAnimatingImageId] = useState(null);

  const handleImageClick = (imageId) => {
    setAnimatingImageId(imageId);
    setTimeout(() => {
      setAnimatingImageId(null);
    }, 300);
  };

  return (
    <div className="page-content">
      {/* --- START OF HERO SECTION --- */}
      <div className="hero-section">
        <div className="hero-content">
          {/* Top Hindi Text - (Uncomment and add content if needed) */}
          {/* <p className="hero-text-top-hindi">कुछ हिंदी टेक्स्ट यहाँ</p> */}
          <div className="college-main-title">
            {/* Uncomment and add your logo images if available */}
            {/* <img src="/images/emblem1.png" alt="Emblem 1" className="hero-logo" /> */}
            <h1>Welcome to Vivekanand College, Kolhapur!</h1>
            {/* <img src="/images/emlem2.png" alt="Emblem 2" className="hero-logo" /> */}
          </div>
          <p className="hero-text-tagline">Your journey to excellence starts here.</p>
          <Link to="/admissions" className="college-button hero-button">Apply Now!</Link>
          {/* Accreditation Details - (Uncomment and add content if needed) */}
          {/* <div className="hero-accreditation-details">
            <p>NAAC Accredited 'A++' Grade</p>
            <p>UGC Autonomous College</p>
          </div> */}
        </div>
      </div>
      {/* --- END OF HERO SECTION --- */}

      <div className="info-card">
        <h2>About Vivekanand College</h2>
        <p>Vivekanand College is a premier educational institution committed to academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], our college has consistently served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
      </div>

      <div className="info-card">
        <h2>Why Choose Vivekanand College?</h2>
        <ul>
          <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
          <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
          <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
          <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
          <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
        </ul>
      </div>

      <div className="info-card">
        <h2>Campus Life & Facilities</h2>
        <div className="campus-images-container">
          <img 
            src="/images/hero-background.jpeg" 
            alt="Vivekanand College Campus View 1" 
            className={`campus-feature-image ${animatingImageId === 'image1' ? 'is-animating' : ''}`}
            onClick={() => handleImageClick('image1')}
          />
          <img 
            src="/images/background.jpeg" 
            alt="Vivekanand College Campus View 2" 
            className={`campus-feature-image ${animatingImageId === 'image2' ? 'is-animating' : ''}`}
            onClick={() => handleImageClick('image2')}
          />
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        
        {/* Changed to use a class for better styling control and centering */}
        <div className="explore-courses-section">
          <p className="explore-courses-text">Ready to explore our courses?</p>
          <Link to="/courses" className="college-button">Explore Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;