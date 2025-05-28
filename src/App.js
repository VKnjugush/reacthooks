// src/App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Navbar, Button } from 'react-bootstrap';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css'; // You can add custom styles here

// Initial movie data (can be moved to a separate file)
const initialMoviesData = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals information by entering people\'s dreams...',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc...',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space...',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship...',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZTUtZTI4YOTY4NTU5MTBiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Spirited Away',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits...',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    rating: 4.7,
  }
];


function App() {
  const [movies, setMovies] = useState(initialMoviesData);
  const [filteredMovies, setFilteredMovies] = useState(initialMoviesData);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchRating, setSearchRating] = useState(0); // 0 means no rating filter

  const [showAddModal, setShowAddModal] = useState(false);

  // Effect for filtering movies whenever movies, searchTerm, or searchRating changes
  useEffect(() => {
    let currentMovies = [...movies]; // Work with a copy of the original movies

    if (searchTerm) {
      currentMovies = currentMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (searchRating > 0) {
      currentMovies = currentMovies.filter(movie =>
        movie.rating >= searchRating
      );
    }
    setFilteredMovies(currentMovies);
  }, [movies, searchTerm, searchRating]);


  const handleTitleChange = (title) => {
    setSearchTerm(title);
  };

  const handleRateChange = (rate) => {
    setSearchRating(rate);
  };

  const handleAddMovie = (newMovie) => {
    // Add an ID to the new movie if it doesn't have one
    const movieWithId = { ...newMovie, id: Date.now() };
    setMovies(prevMovies => [...prevMovies, movieWithId]);
    // No need to directly call setFilteredMovies here, useEffect will handle it
  };

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">My Movie App</Navbar.Brand>
          <Button variant="outline-light" onClick={handleShowAddModal}>
            Add New Movie
          </Button>
        </Container>
      </Navbar>

      <Container>
        <Filter
          onTitleChange={handleTitleChange}
          onRateChange={handleRateChange}
          currentTitle={searchTerm}
          currentRate={searchRating}
        />
        <MovieList movies={filteredMovies} />
      </Container>

      <AddMovie
        show={showAddModal}
        handleClose={handleCloseAddModal}
        handleAddMovie={handleAddMovie}
      />

      <footer style={{ textAlign: 'center', marginTop: '30px', padding: '15px', color: '#666', borderTop: '1px solid #eee' }}>
        <p>© 2024 Movie App Checkpoint</p>
      </footer>
    </div>
  );
}

export default App;