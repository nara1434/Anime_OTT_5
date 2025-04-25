import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join('').length !== 4) {
      setError('Please enter all 4 digits');
      setSuccess('');
    } else {
      setSuccess('OTP Verified!');
      setError('');
      toast.success('🎉 OTP has been verified!', {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate('/reset-password', { state: { email } });
      }, 1000);
    }
  };

  const handleChangeEmail = () => {
    navigate('/forgotpassword');
  };

  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    fontFamily: "'Poppins', sans-serif",
    background: "#f9f9f9",
    flexDirection: "row",
    overflow: "hidden",
  };

  const leftStyle = {
    flex: 1,
    backgroundImage: window.innerWidth > 768 
      ? `linear-gradient(to right, rgba(255, 192, 203, 0.4), rgba(0, 0, 0, 0.6)), url('/assets/Categories/img7.jpg')`
      : 'none',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    display: window.innerWidth <= 768 ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const brandingTextStyle = {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    padding: "20px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 0,
  };

  const rightStyle = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const boxStyle = {
    width: "100%",
    maxWidth: "400px",
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    textAlign: "center",
  };

  const headingStyle = {
    marginBottom: "5px",
    color: "#f06292",
    fontSize: "24px",
  };

  const otpBox = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    margin: "10px 0",
  };

  const otpInput = {
    width: "50px",
    height: "50px",
    fontSize: "22px",
    textAlign: "center",
    border: "2px solid #ffb6c1",
    borderRadius: "10px",
  };

  const buttonStyle = {
    padding: "12px",
    background: "#f06292",
    border: "none",
    color: "white",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "13px",
    marginTop: "8px"
  };

  const successStyle = {
    color: "green",
    fontSize: "13px",
    marginTop: "8px"
  };

  const changeEmailTextStyle = {
    color: "#f06292",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "15px",
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={overlayStyle}></div>
        <div className="branding" style={brandingTextStyle}>
          <h1>💕 Welcome to LoveThrill</h1>
          <p>Feel the romance. Embrace the thrill.</p>
        </div>
      </div>

      <div style={rightStyle}>
        <form onSubmit={handleSubmit} style={boxStyle}>
          <h2 style={headingStyle}>Enter OTP</h2>
          <p style={{ fontSize: "14px", color: "#555" }}>
            We’ve sent a 4-digit OTP to your email: <strong>{email}</strong>
          </p>
          <div style={otpBox}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                style={otpInput}
              />
            ))}
          </div>
          <button type="submit" style={buttonStyle}>Verify OTP</button>
          {error && <div style={errorStyle}>{error}</div>}
          {success && <div style={successStyle}>{success}</div>}
          <span 
            style={changeEmailTextStyle} 
            onClick={handleChangeEmail}>
             Change Email
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OtpPage;
