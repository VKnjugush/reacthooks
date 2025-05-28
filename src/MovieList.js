// src/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          // Assuming title is unique enough for a key in this example.
          // For a real app, use a unique ID.
          <MovieCard key={movie.id || movie.title + index} movie={movie} />
        ))
      ) : (
        <p>No movies found matching your criteria.</p>
      )}
    </div>
  );
};

export default MovieList;