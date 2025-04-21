// // import React from 'react';
// // import './Subscription.scss';

// // const plans = [
// //   {
// //     name: 'Romantic Pass',
// //     price: '$4.99/month',
// //     features: [
// //       'Unlimited romantic anime',
// //       'Soft pastel UI',
// //       'Ad-free streaming',
// //       'HD Quality',
// //       'Early access to new love stories',
// //     ],
// //     type: 'romantic',
// //   },
// //   {
// //     name: 'Thriller Pass',
// //     price: '$5.99/month',
// //     features: [
// //       'Dark thrillers & mysteries',
// //       'Noir-style interface',
// //       'No ads',
// //       'Full HD + subtitles',
// //       'Mood-based warning control',
// //     ],
// //     type: 'thriller',
// //   },
// //   {
// //     name: 'All Access',
// //     price: '$9.99/month',
// //     features: [
// //       'Romantic + Thriller Content',
// //       'Dual-Theme toggle',
// //       'Offline Downloads',
// //       'Ultra HD (4K)',
// //       'Alternate Endings Preview',
// //       'Character Dynamics Access',
// //     ],
// //     type: 'full-access',
// //   },
// // ];

// // const Subscription = () => {
// //   return (
// //     <div className="subscription-container">
// //       <h1 className="subscription-title">Choose Your Anime Journey</h1>
// //       <div className="plans">
// //         {plans.map((plan, idx) => (
// //           <div key={idx} className={`plan ${plan.type}`}>
// //             <h2>{plan.name}</h2>
// //             <p className="price">{plan.price}</p>
// //             <ul>
// //               {plan.features.map((feature, index) => (
// //                 <li key={index}>✨ {feature}</li>
// //               ))}
// //             </ul>
// //             <button>Subscribe Now</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Subscription;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Subscription.scss';

// const plans = [
//   {
//     name: 'Romantic Pass',
//     price: '$4.99/month',
//     features: [
//       'Unlimited romantic anime',
//       'Soft pastel UI',
//       'Ad-free streaming',
//       'HD Quality',
//       'Early access to new love stories',
//     ],
//     type: 'romantic',
//   },
//   {
//     name: 'Thriller Pass',
//     price: '$5.99/month',
//     features: [
//       'Dark thrillers & mysteries',
//       'Noir-style interface',
//       'No ads',
//       'Full HD + subtitles',
//       'Mood-based warning control',
//     ],
//     type: 'thriller',
//   },
//   {
//     name: 'All Access',
//     price: '$9.99/month',
//     features: [
//       'Romantic + Thriller Content',
//       'Dual-Theme toggle',
//       'Offline Downloads',
//       'Ultra HD (4K)',
//       'Alternate Endings Preview',
//       'Character Dynamics Access',
//     ],
//     type: 'full-access',
//   },
// ];

// const Subscription = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="subscription-container">
//       <h1 className="subscription-title">Choose Your Anime Journey</h1>
//       <div className="plans">
//         {plans.map((plan, idx) => (
//           <div key={idx} className={`plan ${plan.type}`}>
//             <h2>{plan.name}</h2>
//             <p>{plan.price}</p>
//             <ul>
//               {plan.features.map((feature, index) => (
//                 <li key={index}>🔸 {feature}</li>
//               ))}
//             </ul>
//             <button onClick={() => navigate('/Payment')}>Subscribe Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Subscription;

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
//     alert(`Signup successful for ${formData.email}`);
//   };

//   return (
//     <div className="signup-body">
//       <button className="signup-toggle" onClick={() => window.location.href = '/login'}>
//         Login
//       </button>

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

//         <button onClick={handleSignup}>Sign Up</button>

//         <div className="social-icons">
//           <span className="google">
//             <FaGoogle />
//           </span>
//           <span className="facebook">
//             <FaFacebookF />
//           </span>
//           <span className="twitter">
//             <FaTwitter />
//           </span>
//           <span className="instagram">
//             <FaInstagram />
//           </span>
//         </div>
//       </div>

//       {/* Decorative Bottom Images */}
//       <div className="decorative-images">
//         <img src="/assets\Categories\thriller1.jpeg" alt="Love Cloud" className="cloud" />
//         <img src="/assets/balloon-couple.png" alt="Balloon Couple" className="balloon" />
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import './Signup.scss';
import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Signup successful for ${formData.email}`);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <div className="branding">
          <img src="/assets/romantic-logo.png" alt="Logo" />
          <h1>GigglePlay</h1>
          <p>Romantic & Thriller Anime Hub</p>
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-container">
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />

          <button onClick={handleSignup}>Sign Up</button>

          <div className="social-icons">
            <span><FaGoogle /></span>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
          </div>

          <p className="toggle-login">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
