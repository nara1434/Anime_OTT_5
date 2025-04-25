import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const validateEmail = (value) => {
    const regex = /^[a-z0-9._%+-]+@gmail\.com$/;
    return regex.test(value);
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!validateEmail(email)) {
      setError(
        "Only lowercase Gmail addresses like example@gmail.com are allowed"
      );
      return;
    }
    setError("");
    setMessage(
      "If this email is registered, a password reset link has been sent."
    );
    navigate("/otppage", { state: { email } });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase()); 
    setError("");
    setMessage("");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    fontFamily: "'Poppins', sans-serif",
  };
  const leftStyle = {
    flex: 1,
    backgroundImage: `linear-gradient(to right, rgba(255, 240, 246, 0.5), rgba(255, 240, 246, 0.85)), url('/assets/Categories/img7.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
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
    padding: isMobile ? "20px" : "0",
  };
  const boxStyle = {
    width: "90%",
    maxWidth: "400px",
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };
  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#f06292",
  };
  const inputStyle = {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
    width: "100%",
  };
  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  };
  const successStyle = {
    color: "green",
    fontSize: "12px",
    marginTop: "5px",
  };
  const buttonStyle = {
    padding: isMobile ? "8px" : "12px",
    background: "#f06292",
    border: "none",
    color: "white",
    fontSize: isMobile ? "14px" : "16px",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "30px",
    width: "100%",
  };
  const backStyle = {
    marginTop: "15px",
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
  };
  const linkStyle = {
    color: "#f06292",
    cursor: "pointer",
    textDecoration: "underline",
    marginLeft: "5px",
  };
  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={overlayStyle}></div>
        {!isMobile && (
          <div className="branding">
            <h1>💕 Welcome to LoveThrill</h1>
            <p>Feel the romance. Embrace the thrill.</p>
          </div>
        )}
      </div>
      <div style={rightStyle}>
        <div style={boxStyle}>
          <h2 style={headingStyle}>Forgot Password</h2>
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              placeholder="Enter your Gmail"
              value={email}
              onChange={handleEmailChange}
              style={inputStyle}
            />
            {error && <div style={errorStyle}>{error}</div>}
            {message && <div style={successStyle}>{message}</div>}
            <button type="submit" style={buttonStyle}>
              Reset Password
            </button>
          </form>
          <div style={backStyle}>
            Remembered your password?
            <span onClick={() => navigate("/login")} style={linkStyle}>
              Back to Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;