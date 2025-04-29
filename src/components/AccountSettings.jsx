// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const AccountSettings = () => {
//   const [email, setEmail] = useState('prathyushar689@gmail.com');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();
//   const isMobile = windowWidth <= 768;

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const validateEmail = (email) => {
//     const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
//     return regex.test(email) && email === email.toLowerCase();
//   };

//   const validatePassword = (password) => {
//     const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     return regex.test(password);
//   };

//   const validateForm = () => {
//     let valid = true;
//     setEmailError('');
//     setPasswordError('');
//     setConfirmPasswordError('');

//     if (!validateEmail(email)) {
//       setEmailError('Enter a valid lowercase email ending in .com with no characters after .com');
//       valid = false;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError('Password must be atleast 8 characters with 1 capital letter, 1 number, and 1 special character');
//       valid = false;
//     }

//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       valid = false;
//     }

//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       navigate('/ProfilePage');
//     }
//   };

//   const styles = {
//     container: {
//       backgroundColor: '#ffeef2',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       boxSizing: 'border-box',
//     },
//     formBox: {
//       width: isMobile ? '90%' : '400px',
//       backgroundColor: '#fff',
//       padding: '30px',
//       borderRadius: '12px',
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     title: {
//       fontSize: isMobile ? '24px' : '28px',
//       marginBottom: '25px',
//       color: '#d87093',
//       textAlign: 'center',
//     },
//     formGroup: {
//       width: '100%',
//       marginBottom: '18px',
//       position: 'relative',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '6px',
//       fontWeight: 'bold',
//       fontSize: '16px',
//     },
//     input: {
//       width: '100%',
//       padding: '10px 40px 10px 10px',
//       fontSize: '16px',
//       borderRadius: '8px',
//       border: '1px solid #ccc',
//       backgroundColor: '#fff',
//       color: 'black',
//       outline: 'none',
//     },
//     error: {
//       color: 'red',
//       fontSize: '13px',
//       marginTop: '5px',
//     },
//     eyeIcon: {
//       position: 'absolute',
//       right: '22px',
//       top: '40px',
//       cursor: 'pointer',
//       fontSize: '18px',
//     },
//     buttonGroup: {
//       display: 'flex',
//       gap: '10px',
//       marginTop: '20px',
//       width: '200px',
//       marginLeft: '-10px',
//     },
//     button: {
//       flex: 1,
//       padding: '10px',
//       borderRadius: '8px',
//       border: 'none',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       cursor: 'pointer',
//       color: '#fff',
//       width: '90px',
//     },

//     saveButton: {
//       backgroundColor: '#d87093',
//     },
//     cancelButton: {
//       backgroundColor: '#6b7280',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.formBox}>
//         <h2 style={styles.title}>Account Settings</h2>

//         <div style={styles.formGroup}>
//           <label htmlFor="email" style={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             readOnly
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//           />
//           {emailError && <div style={styles.error}>{emailError}</div>}
//         </div>
//    <div style={styles.formGroup}>
//   <label htmlFor="password" style={styles.label}>Password</label>
//   <input
//     type={showPassword ? 'text' : 'password'}
//     id="password"
//     placeholder="Enter your password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     style={styles.input}
//   />
//   <span
//     onClick={() => setShowPassword(!showPassword)}
//     style={styles.eyeIcon}
//     role="button"
//     aria-label="Toggle Password Visibility"
//   >
//     {showPassword ? '🙈' : '👁️'}
//   </span>
//   {passwordError && <div style={styles.error}>{passwordError}</div>}
// </div>

// <div style={styles.formGroup}>
//   <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
//   <input
//     type={showConfirmPassword ? 'text' : 'password'}
//     id="confirmPassword"
//     placeholder="Confirm your password"
//     value={confirmPassword}
//     onChange={(e) => setConfirmPassword(e.target.value)}
//     style={styles.input}
//   />
//   <span
//     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//     style={styles.eyeIcon}
//     role="button"
//     aria-label="Toggle Confirm Password Visibility"
//   >
//     {showConfirmPassword ? '🙈' : '👁️'}
//   </span>
//   {confirmPasswordError && <div style={styles.error}>{confirmPasswordError}</div>}
// </div>
//         <div style={styles.buttonGroup}>
//           <button type="submit" style={{ ...styles.button, ...styles.saveButton }}>Save</button>
//           <Link to="/ProfilePage" style={{ flex: 1 }}>
//             <button type="button" style={{ ...styles.button, ...styles.cancelButton }}>Cancel</button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AccountSettings;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Load email from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const validateEmail = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
    return regex.test(email) && email === email.toLowerCase();
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!validateEmail(email)) {
      setEmailError(
        "Enter a valid lowercase email ending in .com with no characters after .com"
      );
      valid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters with 1 capital letter, 1 number, and 1 special character"
      );
      valid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("userPassword", password); // ✅ Save the new password
      navigate("/ProfilePage");
    }
  };

  const styles = {
    container: {
      backgroundColor: "#ffeef2",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      boxSizing: "border-box",
    },
    formBox: {
      width: isMobile ? "90%" : "400px",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: isMobile ? "24px" : "28px",
      marginBottom: "25px",
      color: "#d87093",
      textAlign: "center",
    },
    formGroup: {
      width: "100%",
      marginBottom: "18px",
      position: "relative",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      padding: "10px 40px 10px 10px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      color: "black",
      outline: "none",
    },
    error: {
      color: "red",
      fontSize: "13px",
      marginTop: "5px",
    },
    eyeIcon: {
      position: "absolute",
      right: "22px",
      top: "40px",
      cursor: "pointer",
      fontSize: "18px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      width: "200px",
      marginLeft: "-10px",
    },
    button: {
      flex: 1,
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      fontWeight: "bold",
      fontSize: "16px",
      cursor: "pointer",
      color: "#fff",
      width: "90px",
    },
    saveButton: {
      backgroundColor: "#d87093",
    },
    cancelButton: {
      backgroundColor: "#6b7280",
    },
  };
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.formBox}>
        <h2 style={styles.title}>Account Settings</h2>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            readOnly
            style={styles.input}
          />
          {emailError && <div style={styles.error}>{emailError}</div>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
            role="button"
            aria-label="Toggle Password Visibility"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
          {passwordError && <div style={styles.error}>{passwordError}</div>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
            role="button"
            aria-label="Toggle Confirm Password Visibility"
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </span>
          {confirmPasswordError && (
            <div style={styles.error}>{confirmPasswordError}</div>
          )}
        </div>

        <div style={styles.buttonGroup}>
          <button
            type="submit"
            style={{ ...styles.button, ...styles.saveButton }}
          >
            Save
          </button>
          <button
            type="button"
            style={{ ...styles.button, ...styles.cancelButton }}
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AccountSettings;
