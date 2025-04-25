// src/components/MovieCard.jsx
import React from 'react';

const Movie = ({ movie, onRemove, onWatchNow }) => {
  return (
    <div style={{ border: '1px solid #aaa', padding: '10px', margin: '10px', borderRadius: '10px' }}>
      <img src={movie.image} alt={movie.title} style={{ width: '150px', borderRadius: '8px' }} />
      <h3>{movie.title}</h3>
      {onRemove && <button onClick={onRemove}>Remove</button>}
      <button onClick={onWatchNow}>Watch Now</button>
    </div>
  );
};

export default Movie;
