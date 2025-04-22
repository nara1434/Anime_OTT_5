import React from 'react';
import { useNavigate } from 'react-router-dom';

const FramePage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleWishlist = () => {
    alert('Added to Wishlist ❤️'); // Show an alert when adding to wishlist
    navigate('/wishlistpage'); // Navigate to the Wishlist page
  };

  const handleWatchNow = () => {
    alert('Navigating to Player 🎬');
  };

  return (
    <div style={styles.container}>
      <img
        src="/assets/Categories/img1.jpg" // Replace with your image
        alt="Anime Frame"
        style={styles.image}
      />
      <div style={styles.buttonGroup}>
        <button onClick={handleWishlist} style={{ ...styles.button, backgroundColor: '#ff4d6d' }}>
          ❤️ Wishlist
        </button>
        <button onClick={handleWatchNow} style={{ ...styles.button, backgroundColor: '#4d96ff' }}>
          ▶️ Watch Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#FFE4E1',
    color: '#fff',
    minHeight: '100vh',
  },
  image: {
    width: '90%',
    maxWidth: '700px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
  },
  buttonGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '10px 30px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
};

export default FramePage;
