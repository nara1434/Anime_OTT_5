// import React, { useState } from 'react';
// import './Signup.scss';
// import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Signup = () => {
//   const [showOtp, setShowOtp] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     otp: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSignup = () => {
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     setShowOtp(true);
//     alert(`OTP has been sent to ${formData.email}`); // Simulating sending OTP
//   };

//   const confirmOtp = () => {
//     if (formData.otp === '12345') {
//       alert('OTP Verified! Signup Successful.');
//       // Redirect or proceed with real signup logic
//     } else {
//       alert('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-body">
//       <button className="signup-toggle" onClick={() => window.location.href = '/login'}>Login</button>

//       <div className="signup-container">
//         <h2>Create Account</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleInputChange}
//         />

//         {showOtp && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               name="otp"
//               value={formData.otp}
//               onChange={handleInputChange}
//             />
//             <button onClick={confirmOtp}>Verify OTP</button>
//           </>
//         )}

//         {!showOtp && <button onClick={handleSignup}>Sign Up</button>}

//         <div className="social-icons">
//           <span className="google" onClick={() => window.open('https://accounts.google.com', '_blank')}>
//             <FaGoogle />
//           </span>
//           <span className="facebook" onClick={() => window.open('https://facebook.com', '_blank')}>
//             <FaFacebook />
//           </span>
//           <span className="twitter" onClick={() => window.open('https://twitter.com', '_blank')}>
//             <FaTwitter />
//           </span>
//           <span className="instagram" onClick={() => window.open('https://instagram.com', '_blank')}>
//             <FaInstagram />
//           </span>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from 'react';
// import './Signup.scss';
// import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Signup = () => {
//   const [showOtp, setShowOtp] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     otp: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.name) formErrors.name = "Name is required!";
//     if (!formData.email) formErrors.email = "Email is required!";
//     if (!formData.password) formErrors.password = "Password is required!";
//     if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = "Passwords do not match!";
//     if (!formData.confirmPassword) formErrors.confirmPassword = "Please confirm your password!";
    
//     return formErrors;
//   };

//   const handleSignup = () => {
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     setShowOtp(true);
//     alert(`OTP has been sent to ${formData.email}`); // Simulating sending OTP
//   };

//   const confirmOtp = () => {
//     if (formData.otp === '12345') {
//       alert('OTP Verified! Signup Successful.');
//       // Redirect or proceed with real signup logic
//     } else {
//       alert('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-body">
//       <button className="signup-toggle" onClick={() => window.location.href = '/login'}>Login</button>

//       <div className="signup-container">
//         <h2>Create Account</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//         {errors.name && <p className="error-message">{errors.name}</p>}
        
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         {errors.email && <p className="error-message">{errors.email}</p>}
        
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//         {errors.password && <p className="error-message">{errors.password}</p>}
        
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleInputChange}
//         />
//         {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

//         {showOtp && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               name="otp"
//               value={formData.otp}
//               onChange={handleInputChange}
//             />
//             <button onClick={confirmOtp}>Verify OTP</button>
//           </>
//         )}

//         {!showOtp && <button onClick={handleSignup}>Sign Up</button>}

//         <div className="social-icons">
//           <span className="google" onClick={() => window.open('https://accounts.google.com', '_blank')}>
//             <FaGoogle />
//           </span>
//           <span className="facebook" onClick={() => window.open('https://facebook.com', '_blank')}>
//             <FaFacebook />
//           </span>
//           <span className="twitter" onClick={() => window.open('https://twitter.com', '_blank')}>
//             <FaTwitter />
//           </span>
//           <span className="instagram" onClick={() => window.open('https://instagram.com', '_blank')}>
//             <FaInstagram />
//           </span>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import './Signup.scss';
// import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSignup = () => {
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     alert(`Welcome, ${formData.name}! Signup successful.`);
//   };

//   return (
//     <div className="signup-body">
//       <div className="signup-left">
//         <div className="branding">
//           <h1>💕 Welcome to LoveThrill</h1>
//           <p>Feel the romance. Embrace the thrill.</p>
//         </div>
//       </div>

//       <div className="signup-right">
//         <button className="signup-toggle" onClick={() => window.location.href = '/login'}>Login</button>
//         <div className="signup-container">
//           <h2>Create Account</h2>

//           <input
//             type="text"
//             placeholder="Full Name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//           />

//           <button onClick={handleSignup}>Sign Up</button>

//           <div className="social-icons">
//             <span className="google"><FaGoogle /></span>
//             <span className="facebook"><FaFacebookF /></span>
//             <span className="twitter"><FaTwitter /></span>
//             <span className="instagram"><FaInstagram /></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';
import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
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
    alert(`Welcome, ${formData.name}! Signup successful.`);
    navigate('/login');
  };

  return (
    <div className="signup-body">
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

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
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

