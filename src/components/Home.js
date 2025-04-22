// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Anime OTT</h1>
      <Link to="/video">
        <button>Watch Video</button>
      </Link>
    </div>
  );
};

export default Home;
