// src/AddMovie.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddMovie = ({ show, handleClose, handleAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!title || !posterURL || rating < 0 || rating > 5) {
      alert("Please fill in title, poster URL, and a valid rating (0-5).");
      return;
    }
    const newMovie = {
      // id: Date.now(), // Simple way to generate a unique ID for this example
      title,
      description: description || "No description provided.", // Default description
      posterURL,
      rating: Number(rating),
    };
    handleAddMovie(newMovie);
    // Reset form and close modal
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formMovieTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMovieDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter movie description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMoviePosterURL">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter poster image URL"
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMovieRating">
            <Form.Label>Rating (0-5)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="5"
              step="0.1" // Allow decimal ratings
              placeholder="Enter rating"
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMovie;