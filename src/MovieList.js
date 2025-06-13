// src/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }} key={movie.id || movie.title + index}>
            <MovieCard movie={movie} />
          </Link>
        ))
      ) : (
        <p>No movies found matching your criteria.</p>
      )}
    </div>
  );
};

export default MovieList;