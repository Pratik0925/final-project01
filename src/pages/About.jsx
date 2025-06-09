// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="page-content">
      <div className="info-card">
        <h2>About Us</h2>
        <p>Welcome to Vivekanand College, a leading institution dedicated to fostering academic excellence and holistic development. Since our inception in [Year of Establishment], we have been committed to providing a nurturing environment where students can thrive intellectually, personally, and professionally.</p>
        <p>Our mission is to empower students with knowledge, critical thinking skills, and a strong sense of social responsibility. We aim to produce graduates who are not only successful in their careers but also contributing members of society.</p>
      </div>

      <div className="info-card">
        <h3>Our Vision</h3>
        <p>To be a beacon of learning, inspiring future generations to achieve their full potential and contribute positively to a dynamic global society.</p>
      </div>

      <div className="info-card">
        <h3>Our Mission</h3>
        <p>To provide high-quality education, foster research and innovation, promote ethical values, and encourage community engagement, thereby nurturing well-rounded individuals ready for global challenges.</p>
      </div>

      <div className="info-card">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Excellence:</strong> Striving for the highest standards in education and research.</li>
          <li><strong>Integrity:</strong> Upholding honesty and ethical conduct in all endeavors.</li>
          <li><strong>Innovation:</strong> Embracing new ideas and creative approaches to learning.</li>
          <li><strong>Inclusivity:</strong> Creating a diverse and welcoming environment for all.</li>
          <li><strong>Community:</strong> Fostering a sense of belonging and social responsibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;