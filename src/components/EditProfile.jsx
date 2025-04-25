import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors]     = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const styles = {
    container: {
      backgroundColor: '#ffeef2',
      color: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
    },
    formBox: {
      width: isMobile ? '90%' : '400px',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      color: '#d87093',
      marginBottom: '25px',
      fontSize: '28px',
    },
    formGroup: {
      marginBottom: '20px',
      position: 'relative',
    },
    label: {
      display: 'block',
      fontSize: '16px',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      outline: 'none',
      boxSizing: 'border-box',
    },
    eyeIcon: {
      position: 'absolute',
      right: '12px',
      top: '40px',
      cursor: 'pointer',
      fontSize: '18px',
    },
    error: {
      color: 'red',
      fontSize: '13px',
      marginTop: '5px',
    },
    button: {
      backgroundColor: '#d87093',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '12px',
      fontSize: '18px',
      width: '100%',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: '0.3s ease',
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    backBtn: {
      alignSelf: 'flex-start',
      marginBottom: '20px',
      background: 'linear-gradient(45deg, #FFB6C1 30%, #000 90%)',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '-80px',
    },
  };

  const validateName = (value) => /^[A-Za-z\s]+$/.test(value);
  const validateEmail = (value) =>
    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/.test(value) && !/[A-Z]/.test(value);
  const validatePassword = (value) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);

  const handleSave = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name || !validateName(name)) newErrors.name = 'Only letters allowed';
    if (!email || !validateEmail(email)) newErrors.email = 'Valid lowercase .com email required';
    if (!password || !validatePassword(password)) {
      newErrors.password =
        'Password must be 8+ chars with 1 uppercase, 1 number, 1 special char';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/ProfilePage');
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/ProfilePage')} style={styles.backBtn}>
        &larr; Back
      </button>

      <div style={styles.formBox}>
        <h1 style={styles.heading}>Edit Profile</h1>

        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
          />
          {errors.name && <div style={styles.error}>{errors.name}</div>}
        </div>

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
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
          />
          {password && (
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
              role="button"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          )}
          {errors.password && <div style={styles.error}>{errors.password}</div>}
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          style={{
            ...styles.button,
            ...(name && email && password ? {} : styles.buttonDisabled),
          }}
          disabled={!name || !email || !password}
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
