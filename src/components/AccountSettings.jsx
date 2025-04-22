import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AccountSettings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const windowWidth = window.innerWidth;

  // Inline styles
  const styles = {
    container: {
      backgroundColor: 'black',
      height:'100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      fontSize: windowWidth <= 768 ? '14px' : '16px',
    },
    title: {
      fontSize: windowWidth <= 768 ? '24px' : '32px',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
    },
    input: {
      width: windowWidth <= 768 ? '250px' : '300px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: '#333',
      color: 'white',
      marginBottom: '10px',
      outline: 'none',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: windowWidth <= 768 ? '14px' : '16px',
    },
    error: {
      color: 'red',
      fontSize: '12px',
    },
    cancelButton: {
      backgroundColor: 'gray',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: windowWidth <= 768 ? '14px' : '16px',
      marginLeft: '10px',
    },
    backButton: {
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: windowWidth <= 768 ? '14px' : '16px',
      marginTop: '20px',
    },
  };

  const validateForm = () => {
    let isValid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (password && password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    // Validate confirm password
    if (password && confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (validateForm()) {
      // Show the confirmation alert after form validation
      const isConfirmed = window.confirm('Your account settings have been saved successfully. Click OK to go back to the User page.');

      if (isConfirmed) {
        // Navigate to the User page after clicking OK
        navigate('/ProfilePage');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Account Settings</h1>

      {/* Email */}
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />
        {emailError && <div style={styles.error}>{emailError}</div>}
      </div>

      {/* Password */}
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={styles.input}
        />
        {passwordError && <div style={styles.error}>{passwordError}</div>}
      </div>

      {/* Confirm Password */}
      <div style={styles.formGroup}>
        <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          style={styles.input}
        />
        {confirmPasswordError && <div style={styles.error}>{confirmPasswordError}</div>}
      </div>

      {/* Buttons */}
      <div>
        <button onClick={handleSave} style={styles.button}>Save</button>
        <Link to="/ProfilePage">
          <button style={styles.cancelButton}>Cancel</button>
        </Link>
      </div>

      {/* Back to User Page Button */}
      
    </div>
  );
};

export default AccountSettings;
