// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import user icon from react-icons

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login state whenever Header loads or local storage updates
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const navbarStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px 0',
  };

  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '30px',
    background: 'linear-gradient(90deg, #007bff, #6f42c1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const linkStyle = {
    color: '#007bff',
    fontWeight: "600",
    textDecoration: 'none',
    margin: '0 15px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    setIsLoggedIn(false); // Update the login state
    navigate('/'); // Redirect to home or login page
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={brandStyle}>
          Bachelor’s HIVE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={linkStyle}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={linkStyle}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={linkStyle}>Contact</Nav.Link>

            {isLoggedIn ? (
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" style={{ textDecoration: 'none', color: '#007bff' }}>
                  <FaUserCircle size={26} /> {/* Profile icon */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" style={linkStyle}>Login</Nav.Link>
                <Nav.Link as={Link} to="/signup" style={linkStyle}>Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
