import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [newName, setnewName] = useState('');
  const [email, setEmail] = useState('');

  
  const handleSave = () => {
    const count = parseInt(localStorage.getItem('profileCount'), 10) || 0;
    const next = count + 1;
    localStorage.setItem('profileCount', next.toString());
    localStorage.setItem(`profile_${next}`, JSON.stringify({ newName, email }));
    navigate('/profilepage');
  };

    const handleBackButtonClick = () => {
      navigate('/ProfilePage'); 
    };

  return (
    <>
      <button 
        onClick={handleBackButtonClick}
        style={{
          background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '35px',
          marginLeft: '12px',
          width: '100px',
          fontSize: '16px',
          fontWeight:'bold',
          transition: 'background-color 0.3s ease',
        }}
      >
        &larr; Back
      </button>

      <style>
        {`
        
        body{
          background-color: #ffeef2;
        }

          .container {
            max-width: 400px;
            margin: 80px auto;
            padding: 2rem;
            background-color: #ffeef2;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            font-family: 'Segoe UI', sans-serif;
            text-align: center;
          }

          h1{
          color:#d87093;
          }

          .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
          }

          .form-group input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.2s ease;
          }

          .form-group input:focus {
            outline: none;
            border-color: #4a90e2;
            background-color: #fff5f7;
          }

          button {
            width: 70%;
            padding: 0.8rem;
            font-size: 1rem;
            color: white;
            background-color: #d87093;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            fontweight:bold;
            transition: background-color 0.25s ease;
          }

          button:hover {
            background-color: #d87093;
          }
        `}
      </style>

      <div className="container">
        <h1>Create Profile</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="newName"
            value={newName} 
            onChange={e => setnewName(e.target.value)}
            placeholder="Enter your name"
          />
   
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button onClick={handleSave}>Save Profile</button>
      </div>
    </>
  );
};

export default Profile;