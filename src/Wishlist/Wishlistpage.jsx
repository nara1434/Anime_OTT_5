import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WishlistPage.scss'; // 👈 Import CSS

const WishlistPage = () => {
  const navigate = useNavigate();

  const [wishlistItems] = useState([
    { id: 1, imageUrl: '/assets/Categories/action3.jpg', title: 'Anime Frame 1' },
    { id: 2, imageUrl: '/assets/Categories/action5.avif', title: 'Anime Frame 2' },
    { id: 3, imageUrl: '/assets/Categories/img6.jpg', title: 'Anime Frame 3' },
    { id: 4, imageUrl: '/assets/Categories/thriller3.jpg', title: 'Anime Frame 4' },
    { id: 5, imageUrl: '/assets/Categories/img5.jpg', title: 'Anime Frame 5' },
    { id: 6, imageUrl: '/assets/Categories/action8.jpg', title: 'Anime Frame 6' },
    { id: 7, imageUrl: '/assets/Categories/thriller4.jpg', title: 'Anime Frame 7' },
    { id: 8, imageUrl: '/assets/Categories/action7.jpg', title: 'Anime Frame 8' },
  ]);

  const handleBackToFrame = () => {
    navigate('/');
  };

  const handleImageClick = () => {
    navigate('/framepage');
  };

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist ❤️</h1>
      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item" onClick={handleImageClick}>
            <img src={item.imageUrl} alt={item.title} className="wishlist-image" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button onClick={handleBackToFrame} className="back-button">
        Go Back to Frame
      </button>
    </div>
  );
};

export default WishlistPage;
