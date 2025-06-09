// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="page-content" style={{ textAlign: 'center', padding: '50px' }}>
      <div className="info-card">
        <h2>404 - Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <p>It might have been moved or deleted.</p>
        <Link to="/" className="college-button" style={{ marginTop: '30px' }}>Go to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;