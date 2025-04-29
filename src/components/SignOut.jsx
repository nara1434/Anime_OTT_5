import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutPage = () => {
  const navigate = useNavigate(); 

  const handleSignOut = () => {
    localStorage.removeItem('authToken'); 
    
    navigate('/login');
  };

  const styles = {
    container: {
      backgroundColor: '#ffeef2',
      color: '#d87093',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
    },
    heading: {
      fontSize: '29px',
      marginBottom: '40px',
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
      width: '150px',
      fontWeight: 'bold',
    },
  };

  const handleBackButtonClick = () => {
    navigate('/ProfilePage');  
  };

  return (
    <div style={styles.container}>

       <button 
        onClick={handleBackButtonClick}
        style={{
          background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '-355px',
          marginLeft: '-1050px',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
      >
        &larr; Back
      </button>

      <h1 style={styles.heading}>Are you sure you want to sign out?</h1>

      <button onClick={handleSignOut} style={styles.signOutButton}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOutPage;