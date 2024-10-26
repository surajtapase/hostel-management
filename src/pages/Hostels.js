// src/pages/Hostels.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import HostelCard from '../components/HostelCard';
import axios from 'axios';

function Hostels() {
  const [hostels, setHostels] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Fetch hostels data from API
    axios.get('http://localhost:5000/hostels') // Ensure JSON Server is running on port 5000
      .then(response => setHostels(response.data))
      .catch(error => console.error('Error fetching hostels:', error));
  }, []);

  // Filter hostels based on search criteria
  const filteredHostels = hostels.filter(hostel => 
    hostel.name.toLowerCase().includes(search.toLowerCase()) &&
    hostel.location.toLowerCase().includes(location.toLowerCase()) &&
    (price === '' || hostel.price <= parseInt(price))
  );

  return (
    <Container className="mt-4">
      <h1>Available Hostels</h1>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Control 
              type="text" 
              placeholder="Search by name" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Control 
              type="text" 
              placeholder="Search by location" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Control 
              type="number" 
              placeholder="Max Price (₹)" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
        </Row>
      </Form>
      
      <Row>
        {filteredHostels.map(hostel => (
          <Col md={4} key={hostel.id}>
            <HostelCard hostel={hostel} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hostels;
