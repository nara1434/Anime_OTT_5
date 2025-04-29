import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Signup.scss';
import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'email' ? value.toLowerCase() : value;
    setFormData(prev => ({ ...prev, [name]: updatedValue }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };
  const validateEmail = (email) => {
    if (/^[0-9]+@gmail\.com$/.test(email)) {
      return false; 
    }
    return /^[a-z0-9._%+-]+@gmail\.com$/.test(email);
  };
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateForm = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (!validateName(formData.name.trim())) {
      newErrors.name = 'Name should only contain letters and spaces';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid Gmail address (cannot be only numbers before @gmail.com)';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8+ chars with 1 capital, 1 number, and 1 special char';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };
  const handleSignup = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPassword', formData.password);
    toast.success('Account created successfully', {
      position: "top-center",
      autoClose: 2000, 
    });
    setTimeout(() => {
      navigate('/login');
    }, 2000); 
  };
  return (
    <div className="signup-body">
      <ToastContainer />

      <div className="signup-left">
        <div className="branding">
          <h1>💕 Welcome to LoveThrill</h1>
          <p>Feel the romance. Embrace the thrill.</p>
        </div>
      </div>
      <div className="signup-right">
        <button className="signup-toggle" onClick={() => navigate('/login')}>Login</button>
        <div className="signup-container">
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <div className="error">{errors.password}</div>}
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          <button onClick={handleSignup}>Sign Up</button>

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
export default Signup;