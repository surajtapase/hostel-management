// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaTh, FaList } from "react-icons/fa";
import HostelCard from "../components/HostelCard";
import "../styles/Home.css";

function Home() {
  const [featuredHostels, setFeaturedHostels] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    fetch("/hostel.json")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedHostels(data);
        localStorage.setItem('hostels', JSON.stringify(data)); // Store data for HostelDetail
      })
      .catch((error) => console.error("Error fetching hostel data:", error));
  }, []);
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredHostels = featuredHostels.filter((hostel) => 
    hostel.location.toLowerCase().includes(searchQuery) ||
    hostel.price.toString().includes(searchQuery) ||
    hostel.amenities.some((amenity) => amenity.toLowerCase().includes(searchQuery))
  );

  return (
    <Container className="container">
      <div className="jumbotron">
        <h1 className="heading">Welcome to Bachelor’s Hive</h1>
        <p className="subheading">
          Your one-stop platform for finding the best student hostels across
          India.
        </p>
      </div>

      <div className="featured-hostels-header">
        <h2 className="section-title">Featured Hostels</h2>

        {/* Search Input */}
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />

        <div className="view-toggle">
          <Button
            style={{
              background: isGridView
                ? "linear-gradient(90deg, #007bff, #6f42c1)"
                : "#f8f9fa",
              color: isGridView ? "#fff" : "#000",
              border: "none",
              paddingBottom: "8px",
            }}
            onClick={() => setIsGridView(true)}
          >
            <FaTh />
          </Button>

          <Button
            style={{
              background: !isGridView
                ? "linear-gradient(90deg, #007bff, #6f42c1)"
                : "#f8f9fa",
              color: !isGridView ? "#fff" : "#000",
              border: "none",
              paddingBottom: "8px",
            }}
            onClick={() => setIsGridView(false)}
          >
            <FaList />
          </Button>
        </div>
      </div>

      <Row>
        {filteredHostels.map((hostel) => (
          <Col md={isGridView ? 4 : 12} key={hostel.id} className="mb-4">
            <HostelCard hostel={hostel} isListView={!isGridView} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
