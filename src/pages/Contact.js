// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: `Thank you, ${formData.name}!`,
      text: 'Your message has been received.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="mt-4 contact-section">
      <Row className="" style={{display:"contents"}}>
        {/* Left Column - Image */}
        <Col md={6}>
          <div className="contact-image"></div>
        </Col>
        
        {/* Right Column - Form */}
        <Col md={6}>
          <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>

              <Button type="submit" className="gradient-button">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
