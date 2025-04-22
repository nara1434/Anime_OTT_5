import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  // State to store the user's profile data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to handle validation error messages
  const [errors, setErrors] = useState({});

  // Window size state to dynamically change styles
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle form submission to save profile
  const handleSave = (e) => {
    e.preventDefault(); // Prevent form submission

    // Reset errors
    setErrors({});

    // Validate form fields
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    // If there are validation errors, set them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, proceed with saving
    // alert('Profile Saved!');
    navigate('/ProfilePage');
  };

  // Update windowWidth when the window size changes
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamically apply styles based on window width (media query effect)
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
      fontSize: windowWidth <= 768 ? '14px' : '16px', // Responsive font size
    },
    heading: {
      color: 'white',
      marginBottom: '20px',
      
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontSize: '26px',
    },
    input: {
      width: windowWidth <= 768 ? '250px' : '300px', // Responsive input width
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
      width:'320px',
      padding:'10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: windowWidth <= 768 ? '20px' : '22px', // Responsive button font size
    },
    error: {
      color: 'red',
      fontSize: '12px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Edit Profile</h1>

      {/* Name */}
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Name</label>
        <input
          type="text"
          id="name"
          value={name} // Controlled input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={styles.input}
        />
        {errors.name && <div style={styles.error}>{errors.name}</div>}
      </div>

      {/* Email */}
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}
      </div>

      {/* Password */}
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={styles.input}
        />
        {errors.password && <div style={styles.error}>{errors.password}</div>}
      </div>

      {/* Save Button */}
      <button onClick={handleSave} style={styles.button}>Save Profile</button>
    </div>
  );
};

export default EditProfile;
