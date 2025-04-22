// src/components/AnimeCard.jsx
import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import NavBar from '../components/NavBar';

const AnimeCard = ({ anime }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.find((item) => item.id === anime.id);

  return (
    <div className="anime-card">
      <h4>{anime.title}</h4>
      <img src={anime.image} alt={anime.title} />
      <button onClick={() => 
        isInWishlist ? removeFromWishlist(anime.id) : addToWishlist(anime)
      }>
        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default AnimeCard;
