// src/components/HostelCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWifi, FaShieldAlt, FaDumbbell, FaUtensils, FaBuilding } from 'react-icons/fa';
import '../styles/HostelCard.css';

function HostelCard({ hostel, isListView }) {
  return (
    <Card className={`mb-4 hostel-card ${isListView ? 'list-view' : 'grid-view'}`}>
      {/* List View: Image on the left */}
      <div className={isListView ? "list-view-content" : "grid-view-content"}>
        {isListView && (
          <div className="image-placeholder">
            <Card.Img
              variant="top"
              src={hostel.image}
              alt={hostel.name}
              style={{ height: '200px', width: '200px', objectFit: 'cover' }} 
            />
          </div>
        )}
        <Card.Body>
          {!isListView && (
            <div className="">
              <Card.Img
                variant="top"
                src={hostel.image}
                alt={hostel.name}
                style={{ height: '200px', objectFit: 'cover' }} 
              />
            </div>
          )}
          <Card.Title className="card-title">{hostel.name}</Card.Title>
          <Card.Text>
            <strong>Location:</strong> {hostel.location} <br />
            <strong>Price:</strong> ₹{hostel.price}/month <br />
            <strong>Amenities:</strong>
            <div className="amenities">
              {hostel.amenities.map((amenity, index) => (
                <span key={index} title={amenity}>
                  {getIcon(amenity)}
                </span>
              ))}
            </div>
            <strong>Description:</strong> {hostel.description}
          </Card.Text>
          <Button as={Link} to={`/hostels/${hostel.id}`} className="button">
            View Details
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}

const getIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'wifi':
      return <FaWifi style={{ color: '#3498db', marginRight: '5px' }} />;
    case 'laundry':
      return <FaBuilding style={{ color: '#3498db', marginRight: '5px' }} />;
    case '24/7 security':
      return <FaShieldAlt style={{ color: '#3498db', marginRight: '5px' }} />;
    case 'gym':
      return <FaDumbbell style={{ color: '#3498db', marginRight: '5px' }} />;
    case 'cafeteria':
      return <FaUtensils style={{ color: '#3498db', marginRight: '5px' }} />;
    default:
      return <FaBuilding style={{ color: '#3498db', marginRight: '5px' }} />;
  }
};

export default HostelCard;
