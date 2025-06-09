// src/pages/Contact.jsx
import React from 'react'; // No need for useState as map is not toggled on page

const Contact = () => {
  return (
    <div className="page-content">
      <div className="info-card">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
      </div>

      <div className="info-card contact-info">
        <h3>General Enquiries</h3>
        <h4>Vivekanand College Main Campus</h4>
        {/* Address as seen in your screenshots */}
        <p>Tarabai Park, Kolhapur, Maharashtra 416003, India</p>
        {/* Phone number and email are now plain text, no highlighting/linking */}
        <p>Phone: +91 12345 67890</p>
        <p>Email: info@vivekanandcollege.edu</p>
        <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
      </div>

      <div className="info-card contact-info">
        <h3>Admissions Office</h3>
        <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
        {/* Phone number and email are now plain text, no highlighting/linking */}
        <p>Phone: +91 98765 43210</p>
        <p>Email: admissions@vivekanandcollege.edu</p>
      </div>

      <div className="info-card contact-info">
        <h3>Student Support Services</h3>
        <p>For current student support, academic advising, or general assistance:</p>
        {/* Phone number and email are now plain text, no highlighting/linking */}
        <p>Phone: +91 87654 32109</p>
        <p>Email: studentsupport@vivekanandcollege.edu</p>
      </div>

      <div className="info-card">
        <h2>Find Us on the Map</h2>
        
        {/* This paragraph displays the literal placeholder text as seen in your screenshots */}
        <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
        
        {/* This link will open Google Maps for Vivekanand College Kolhapur in a new tab. */}
        {/* It directly matches the behavior shown in Screenshot 2025-06-07 094016.jpg. */}
        <p style={{marginBottom: '0'}}> 
            <a 
              href="https://www.google.com/maps/search/Vivekanand+College+Kolhapur/@16.7028594,74.2257256,17z/data=!3m1!4b1?entry=ttu" 
              target="_blank" // Opens in a new tab/window
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="nav-link-text" // Standard link style (blue, underlined)
            >
                View on Google Maps
            </a>
        </p>
        {/* The iframe map is now completely removed from this page. */}
      </div>

      <div className="info-card">
        <h2>Send Us a Message</h2>
        {/* This section now contains ONLY the specified placeholder text, no actual form fields */}
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
      </div>
    </div>
  );
};

export default Contact;