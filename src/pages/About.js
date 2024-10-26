// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  return (
    <Container className="about-container">
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Bachelor’s Hive</strong>! We strive to simplify the process of finding reliable and affordable hostel accommodations for students across India. Our platform connects students directly with private hostel owners, cutting out intermediaries to provide cost-effective and convenient housing solutions.
        </p>
      </section>
      
      <section className="about-section">
        <h3>Our Story</h3>
        <p>
          Bachelor’s Hive was founded with a single vision: to bridge the gap between students and high-quality, affordable housing.
        </p>
      </section>
      
      <section className="about-section">
        <h3>Our Mission</h3>
        <p>
          We aim to be the trusted partner for students across India in their housing journey, empowering them with tools and resources to find a place they can call home.
        </p>
      </section>

      <section className="about-section">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Transparency:</strong> Clear, upfront information on pricing, amenities, and reviews.</li>
          <li><strong>Affordability:</strong> Cost-effective solutions by directly connecting students with hostel owners.</li>
          <li><strong>Accessibility:</strong> A smooth and user-friendly search and booking process.</li>
          <li><strong>Quality:</strong> Verified listings to ensure comfort and reliability.</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Why Choose Us?</h3>
        <Row>
          <Col md={6}>
            <p><strong>Verified Listings:</strong> Strict verification for quality and safety.</p>
            <p><strong>User Reviews:</strong> Honest feedback from previous occupants.</p>
          </Col>
          <Col md={6}>
            <p><strong>Direct Communication:</strong> Connect with hostel owners directly.</p>
            <p><strong>24/7 Support:</strong> Our team is here to help.</p>
          </Col>
        </Row>
      </section>
      
      <section className="about-section">
        <h3>Contact Us</h3>
        <p>If you have questions or need assistance, please reach out!</p>
        <p><strong>Email:</strong> support@bachelorhive.com</p>
        <p><strong>Phone:</strong> +91 12345 67890</p>
      </section>
    </Container>
  );
}

export default About;
