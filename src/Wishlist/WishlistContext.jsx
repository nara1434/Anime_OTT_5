import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addToWishlist = (movie) => {
    if (!wishlist.find((item) => item.id === movie.id)) {
      setWishlist([...wishlist, movie]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, selectedMovie, setSelectedMovie }}>
      {children}
    </WishlistContext.Provider>
  );
};
