import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function MovieDescription({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <Container>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Button variant="secondary" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Container>
  );
}

export default MovieDescription;