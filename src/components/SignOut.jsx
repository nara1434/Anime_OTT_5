import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutPage = () => {
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Function to handle sign out
  const handleSignOut = () => {
    // Clear session storage or local storage, or perform any other sign-out logic if required
    localStorage.removeItem('authToken'); // Example: Remove auth token from localStorage
    
    // Redirect to the login page after sign out
    navigate('/login');
  };

  // Inline CSS for styling
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    signOutButton: {
      backgroundColor: '#FF4C4C',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '20px',
      width: '200px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Are you sure you want to sign out?</h1>

      {/* Sign Out Button */}
      <button onClick={handleSignOut} style={styles.signOutButton}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOutPage;
