import React from 'react';
import { useNavigate } from 'react-router-dom';

const HistoryPage = () => {
  const navigate = useNavigate();

  // Example user history data (You can replace this with real data from your backend)
  const userHistory = [
    { id: 1, title: "Bhagya Lakshmi", date: "8 Mar", image: "/assets/TVShows/TVSh1.jpg" },
    { id: 2, title: "Kumkum Bhagya", date: "7 Mar", image: "/assets/TVShows/TVSh2.webp" },
    { id: 3, title: "Vasudha", date: "6 Mar", image: "/assets/TVShows/TVSh3.jpg" },
    { id: 4, title: "Jaane Anjaane Hum Mile", date: "5 Mar", image: "/assets/TVShows/TVSh4.webp" },
  ];

  // Navigate back to the user page
  const handleBackButtonClick = () => {
    navigate('/ProfilePage');  // This route should lead to your Profile page
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Back Button */}
      <button 
        onClick={handleBackButtonClick}
        style={{
          backgroundColor: '#008cba',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '16px',
          transition: 'background-color 0.3s ease',
        }}
      >
        &larr; Back
      </button>
      
      {/* History Title */}
      <h1 style={{ textAlign: 'center', fontSize: '2rem', color: ' #d87093', marginBottom: '30px' }}>
        Your Viewing History
      </h1>

      {/* History List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
        {userHistory.map((show) => (
          <div 
            key={show.id} 
            style={{
              backgroundColor: '#f4f4f4',
              padding: '15px',
              width: '100%',
              maxWidth: '600px',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',  // Space between image and text
            }}
          >
            {/* Image for each show */}
            <img 
              src={show.image} 
              alt={show.title} 
              style={{
                width: '100px',      // Fixed width for the image
                height: 'auto',      // Maintain aspect ratio
                borderRadius: '5px', // Optional: round corners of the image
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: add shadow to image
              }} 
            />

            {/* Show title and date */}
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#555' }}>{show.title}</p>
              <span style={{ fontSize: '0.9rem', color: '#777' }}>{show.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
