// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f8f9fa', // Light background color
    textAlign: 'center',         // Center text
    marginTop: '20px',          // Top margin
    padding: '10px 0',          // Vertical padding
    color: '#555',               // Text color
  };

  const textStyle = {
    margin: 0,                  // Remove default margin
    fontSize: '14px',           // Font size
  };

  const linkStyle = {
    color: '#007bff',           // Link color
    textDecoration: 'none',      // No underline
  };

  const linkHoverStyle = {
    textDecoration: 'underline',  // Underline on hover
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <p style={textStyle}>
          &copy; 2024 Bachelor’s Hive. All rights reserved. | 
          Contact us: 
          <a 
            href="mailto:info@bachelorshive.com" 
            style={linkStyle} 
            onMouseOver={e => e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration}
            onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
          >
            info@bachelorshive.com
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
