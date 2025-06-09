// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// You'll need to install react-icons if you don't have it: npm install react-icons
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* College Name on the Left */}
      <Link to="/" className="college-name">
        Vivekanand College
      </Link>

      {/* Hamburger menu for mobile (hidden on desktop) */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links and Apply Now Button on the Right */}
      {/* The 'open' class will be added/removed based on mobile menu state */}
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
        <NavLink to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</NavLink>
        <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
        {/* The 'Apply Now!' button is also part of the right-aligned group */}
        <Link to="/admissions" className="apply-now-btn" onClick={() => setIsMobileMenuOpen(false)}>Apply Now!</Link>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="close-btn" onClick={toggleMobileMenu} />
            <nav className="nav-links-mobile">
              <Link to="/" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/about" onClick={toggleMobileMenu}>About</Link>
              <Link to="/courses" onClick={toggleMobileMenu}>Courses</Link>
              <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
              <Link to="/admissions" className="apply-now-btn" onClick={toggleMobileMenu}>Apply Now!</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;