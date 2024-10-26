// src/pages/HostelDetail.js
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import Swal
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaWifi,
  FaTv,
  FaUtensils,
  FaBed,
  FaShower,
  FaDumbbell,
  FaCoffee,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import "../styles/HostelDetail.css";

function HostelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    try {
      const hostels = JSON.parse(localStorage.getItem("hostels")) || [];
      const selectedHostel = hostels.find((item) => item.id === parseInt(id));

      if (selectedHostel) {
        setHostel(selectedHostel);
        setLoading(false);
      } else {
        setError("Hostel not found.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching hostel:", error);
      setError("Failed to load hostel details. Please try again later.");
      setLoading(false);
    }

    // Check if user is logged in (example check using localStorage)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Sets to true if user exists in localStorage
  }, [id]);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Please login first",
        text: "You need to log in to book this hostel.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Booking Successful",
      text: "You will receive a call from the hostel representative for further enquiries.",
    });

    setBooking({
      name: "",
      email: "",
      startDate: "",
      endDate: "",
    });
  };

  const renderAmenities = (amenity) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <FaWifi title="WiFi" />;
      case "tv":
        return <FaTv title="TV" />;
      case "kitchen":
        return <FaUtensils title="Kitchen" />;
      case "bed":
        return <FaBed title="Bed" />;
      case "shower":
        return <FaShower title="Shower" />;
      case "gym":
        return <FaDumbbell title="Gym" />;
      case "cafeteria":
        return <FaCoffee title="Cafeteria" />;
      case "24/7 security":
        return <MdSecurity title="24/7 Security" />;
      default:
        return <span>{amenity}</span>;
    }
  };

  if (loading) {
    return (
      <Container className="hostel-detail-container text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="hostel-detail-container">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="hostel-detail-container mt-4">
      <Button
        variant="secondary"
        onClick={() => navigate("/")}
        className="mb-4"
      >
        &larr; Back to Home
      </Button>

      <Row>
        <Col md={8} className="hostel-info">
          <h2 className="hostel-title">{hostel.name}</h2>
          <p>
            <strong>Location:</strong> {hostel.location}
          </p>
          <p>
            <strong>Price:</strong> ₹{hostel.price}/month
          </p>
          <p>
            <strong>Amenities:</strong>{" "}
            {hostel.amenities.map((amenity, index) => (
              <span key={index} className="amenity-icon">
                {renderAmenities(amenity)}
              </span>
            ))}
          </p>
          <p>
            <strong>Description:</strong> {hostel.description}
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h3>Book Now</h3>
          <Form onSubmit={handleBooking} className="booking-form">
            <Form.Group className="mb-3" controlId="bookingName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={booking.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bookingEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={booking.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bookingStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={booking.startDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bookingEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={booking.endDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Book Now
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Reviews</h3>
          {hostel.reviews && hostel.reviews.length > 0 ? (
            hostel.reviews.map((review) => (
              <div key={review.id} className="review-item">
                <strong>{review.user}</strong>
                <p>{review.comment}</p>
                <p>Rating: {review.rating}/5</p>
              </div>
            ))
          ) : (
            <p className="no-reviews">No reviews yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HostelDetail;
