import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DownloadPage = () => {
  const [isDownloading, setIsDownloading] = useState(false); 
  const [videoUrl] = useState('https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'); 
  const navigate = useNavigate(); 

  // Simulating the download action
  const handleDownload = () => {
    setIsDownloading(true); 

    // Simulate downloading process with a setTimeout (This is just for demo)
    setTimeout(() => {
      setIsDownloading(false); // Reset after "download"
      alert('Download Complete!'); // Show a message after the download finishes
    }, 3000); // Simulate a download taking 3 seconds
  };

  // Inline Styles for responsive design and button alignment
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      height: '100vh',
      boxSizing: 'border-box',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '-20px',
    },
    downloadButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '20px',
      width: '200px',
    },
    backButton: {
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
      fontSize: '16px',
      width: '200px',
    },
    downloadText: {
      fontSize: '18px',
      marginTop: '20px',
      color: 'white',
    },
    videoContainer: {
      marginTop: '20px',
      textAlign: 'center',
    },
    video: {
      width: '100%',
      maxWidth: '600px',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    downloadLink: {
      color: '#4CAF50',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Download OTT Content</h1>

      {/* Video Section */}
      <div style={styles.videoContainer}>
        <video controls style={styles.video}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          You can download the video from the link below.
        </p>
        <a href={videoUrl} download style={styles.downloadLink}>
          Click here to download the video
        </a>
      </div>

      {/* Download Button */}
      <button onClick={handleDownload} style={styles.downloadButton} disabled={isDownloading}>
        {isDownloading ? 'Downloading...' : 'Download Now'}
      </button>

      {/* If download is complete */}
      <p style={styles.downloadText}>
        {isDownloading ? 'Please wait, your download is in progress...' : 'Click to download the latest content.'}
      </p>

      {/* Back Button to navigate to the User Page */}
      <button onClick={() => navigate('/ProfilePage')} style={styles.backButton}>
        Back to User Page
      </button>
    </div>
  );
};

export default DownloadPage;
