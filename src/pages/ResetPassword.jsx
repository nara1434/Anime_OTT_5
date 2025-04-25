import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);
  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword || !email) {
      toast.error("Please fill all fields."); 
      return;
    }
    if (!validatePassword(newPassword)) {
      toast.error(
        "Password must include uppercase, lowercase, symbol & 8+ chars."
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", newPassword);
    toast.success("Password reset successful!");
    navigate("/login");
  };
  const styles = {
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      background: "linear-gradient(to right, #e6f7ff)",
      fontFamily: "'Poppins', sans-serif",
    },
    leftStyle: {
      flex: 1,
      backgroundImage:
        "linear-gradient(to right, rgba(255, 240, 246, 0.5), rgba(255, 240, 246, 0.85)), url('/assets/Categories/img7.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      position: "relative",
      display: window.innerWidth <= 768 ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    overlayStyle: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: 0,
    },
    right: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    formBox: {
      width: "100%",
      maxWidth: "400px",
      background: "#fff",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "16px",
      width: "100%",
    },
    label: {
      fontWeight: 500,
    },
    passwordWrap: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      position: "absolute",
      right: "10px",
      cursor: "pointer",
      color: "#999",
    },
    button: {
      marginTop: "15px",
      background: "#f06292",
      color: "#fff",
      border: "none",
      padding: "12px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      width: "auto",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    emailText: {
      fontWeight: "bold",
      fontSize: "16px",
      color: "#333",
      padding: "10px 12px",
      borderRadius: "10px",
      width: "100%",
      textAlign: "center",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.leftStyle}>
        <div style={styles.overlayStyle}></div>
        <div className="branding">
          <h1>💕 Welcome to LoveThrill</h1>
          <p>Feel the romance. Embrace the thrill.</p>
        </div>
      </div>
      <div style={styles.right}>
        <div style={styles.formBox}>
          <h2 style={{ textAlign: "center", color: "#f06292" }}>
            Reset Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.emailText}>{email}</div>
            <label style={styles.label}>New Password</label>
            <div style={styles.passwordWrap}>
              <input
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={styles.input}
              />
              {showNew ? (
                <FaEyeSlash
                  onClick={() => setShowNew(false)}
                  style={styles.icon}
                />
              ) : (
                <FaEye onClick={() => setShowNew(true)} style={styles.icon} />
              )}
            </div>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.passwordWrap}>
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={styles.input}
              />
              {showConfirm ? (
                <FaEyeSlash
                  onClick={() => setShowConfirm(false)}
                  style={styles.icon}
                />
              ) : (
                <FaEye
                  onClick={() => setShowConfirm(true)}
                  style={styles.icon}
                />
              )}
            </div>
            <button type="submit" style={styles.button}>
              Reset Password
            </button>
          </form>
        </div>
      </div>
      <ToastContainer /> 
    </div>
  );
};
export default ResetPassword;
