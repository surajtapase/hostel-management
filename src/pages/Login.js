// src/pages/Login.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/Signup.css';
import signup from '../Images/sign-up.avif';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === credentials.email && user.password === credentials.password);

    if (user) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Welcome back, ${user.name}!`,
      });
      // Save the logged-in user to localStorage under 'user'
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/'); // Redirect to the homepage or any other route
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid credentials!',
      });
    }
  };
  
  return (
    <Container className="auth-container mt-5">
      <Row>
        <Col md={6} className="d-none d-md-block">
          <img src={signup} alt="Login Background" className="auth-image" />
        </Col>
        <Col md={6}>
          <h2 className="auth-title">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={credentials.email} 
                onChange={handleChange} 
                required 
                className="auth-input" 
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={credentials.password} 
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
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
