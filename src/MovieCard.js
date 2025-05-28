// src/MovieCard.js
import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  // Simple star rating display
  const renderStars = (rate) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < rate ? '★' : '☆';
    }
    return stars;
  };

  return (
    <Card style={{ width: '18rem', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Card.Img
        variant="top"
        src={posterURL}
        alt={title}
        style={{ height: '250px', objectFit: 'cover' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/300x250.png?text=Image+Not+Found" }} // Fallback image
      />
      <Card.Body>
        <Card.Title style={{ minHeight: '3em' }}>{title}</Card.Title>
        <Card.Text style={{ fontSize: '0.9em', minHeight: '5em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {description.substring(0, 100)}{description.length > 100 ? '...' : ''}
        </Card.Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#f5c518', fontSize: '1.2em' }}>{renderStars(rating)}</span>
          <Badge bg="primary" pill>
            {rating}/5
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

MovieCard.defaultProps = {
  movie: {
    title: "Unknown Title",
    description: "No description available.",
    posterURL: "https://via.placeholder.com/300x250.png?text=No+Image",
    rating: 0
  }
}

export default MovieCard;