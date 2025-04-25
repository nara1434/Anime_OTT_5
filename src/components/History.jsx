import React from 'react';
import { useNavigate } from 'react-router-dom';

const HistoryPage = () => {
  const navigate = useNavigate();

  const userHistory = [
    { id: 1, title: "Romantic River", date: "24 Apr", image: "/assets/images/thriller1.png" },
    { id: 2, title: "Forest Romance", date: "24 Apr", image: "/assets/images/thriller4.png" },
    { id: 3, title: "Rain Love", date: "24 Apr", image: "/assets/images/thriller3.png" },
    { id: 4, title: "King of Thorn", date: "24 Apr", image: "/assets/images/thriller5.png" },
  ];

  const handleBackButtonClick = () => {
    navigate('/ProfilePage');  
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffeef2' }}>

      <button 
        onClick={handleBackButtonClick}
        style={{
          background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight:'bold',
          transition: 'background-color 0.3s ease',
        }}
      >
        &larr; Back
      </button>
      
      <h1 style={{ textAlign: 'center', fontSize: '2rem', color: ' #d87093', marginBottom: '30px',fontWeight: 'bold' }}>
        Your Viewing History
      </h1>

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
              gap: '15px',  
            }}
          >
            
            <img 
              src={show.image} 
              alt={show.title} 
              style={{
                width: '100px',      
                height: 'auto',      
                borderRadius: '5px', 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
              }} 
            />

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
