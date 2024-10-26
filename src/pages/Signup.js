// src/pages/Signup.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert
import '../styles/Signup.css'; // Import custom CSS
import signup from '../Images/sign-up.avif'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(user => user.email === formData.email);

    if (userExists) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'User already exists!',
      });
    } else {
      existingUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Signup successful! Welcome, ${formData.name}!`,
      });

      navigate('/login');
    }
  };

  return (
    <Container className="auth-container mt-5">
      <Row>
        <Col md={6} className="d-none d-md-block">
          <img src={signup} alt="Signup Background" className="auth-image" />
        </Col>
        <Col md={6}>
          <h2 className="auth-title">Sign Up</h2>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="signupName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="auth-input" 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupMobile">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control 
                type="tel" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                required 
                className="auth-input" 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="auth-input" 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                className="auth-input" 
              />
            </Form.Group>

            <Button 
              style={{
                background: "linear-gradient(90deg, #007bff, #6f42c1)",
                border: "none",
              }} 
              type="submit"
              className="auth-button"
            >
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
