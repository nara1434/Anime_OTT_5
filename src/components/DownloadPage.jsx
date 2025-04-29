import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DownloadPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [videoUrl] = useState(
    "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
  );
  const navigate = useNavigate();

  const handleDownload = () => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      alert("Download Complete!");
    }, 3000);
  };

  const styles = {
    container: {
      backgroundColor: "#ffeef2",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px",
      height: "100vh",
      boxSizing: "border-box",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "-20px",
      color: "#d87093",
    },

    // downloadButton: {
    //   backgroundColor: '#d87093',
    //   color: 'white',
    //   border: 'none',
    //   padding: '15px 30px',
    //   borderRadius: '5px',
    //   cursor: 'pointer',
    //   fontSize: '16px',
    //   marginBottom: '20px',
    //   width: '200px',
    // },
    backButton: {
      background: "linear-gradient(45deg, #FFB6C1 30%, #000000 90%)",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "0px",
      fontSize: "16px",
      fontWeight: "bold",
      width: "200px",
    },
    downloadText: {
      fontSize: "18px",
      marginTop: "20px",
      color: "black",
    },
    videoContainer: {
      marginTop: "20px",
      textAlign: "center",
    },
    video: {
      width: "100%",
      maxWidth: "600px",
      borderRadius: "5px",
      marginBottom: "20px",
    },
    downloadLink: {
      color: "#4CAF50",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Download OTT Content</h1>
      <br></br>

      <div style={styles.videoContainer}>
        <video controls style={styles.video}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <br></br>
      <p style={styles.downloadText}></p>
      <button
        onClick={() => navigate("/ProfilePage")}
        style={styles.backButton}
      >
        Back to Profile Page
      </button>
    </div>
  );
};
export default DownloadPage;