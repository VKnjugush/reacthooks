// src/Filter.js
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ onTitleChange, onRateChange, currentTitle, currentRate }) => {
  return (
    <div style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <Row className="g-2">
        <Col md>
          <Form.Group controlId="filterTitle">
            <Form.Label>Filter by Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie title"
              value={currentTitle}
              onChange={(e) => onTitleChange(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group controlId="filterRating">
            <Form.Label>Filter by Minimum Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter minimum rating (0-5)"
              value={currentRate === 0 ? '' : currentRate} // Show placeholder if 0
              onChange={(e) => onRateChange(Number(e.target.value))}
              min="0"
              max="5"
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;