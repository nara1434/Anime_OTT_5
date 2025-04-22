import React, { useState } from 'react';
import './Login.scss';
import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      alert(`Welcome back!`);
      window.location.href = '/home'; // Redirect after login
    }
  };

  return (
    <div className="login-body">
      <div className="login-left">
        <div className="branding">
          <h1>💕 Welcome to LoveThrill</h1>
          <p>Feel the romance. Embrace the thrill.</p>
        </div>
      </div>

      <div className="login-right">
        <button className="login-toggle" onClick={() => window.location.href = '/signup'}>Signup</button>
        <div className="login-container">
          <h2>Login to Your Account</h2>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button onClick={handleLogin}>Login</button>

          <div className="social-icons">
            <span className="google" onClick={() => window.open('https://accounts.google.com/signin', '_blank')}>
              <FaGoogle />
            </span>
            <span className="facebook" onClick={() => window.open('https://www.facebook.com/login', '_blank')}>
              <FaFacebookF />
            </span>
            <span className="twitter" onClick={() => window.open('https://twitter.com/i/flow/login', '_blank')}>
              <FaTwitter />
            </span>
            <span className="instagram" onClick={() => window.open('https://www.instagram.com/accounts/login/', '_blank')}>
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
