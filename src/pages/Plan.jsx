import React from "react";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();
  const styles = {
    container: {
      backgroundColor: "#fff0f5",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
    },
    card: {
      backgroundColor: "#ffffff",
      border: "2px solid #d87093",
      borderRadius: "20px",
      padding: "40px 30px",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#d87093",
      marginBottom: "20px",
    },
    price: {
      fontSize: "22px",
      color: "#333",
      marginBottom: "16px",
      fontWeight: "bold",
    },
    features: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 30px",
      color: "#555",
      fontSize: "16px",
      lineHeight: "2",
      width: "100%",
      textAlign: "left",
      marginLeft: "50px",
    },
    button: {
      backgroundColor: "#d87093",
      color: "white",
      padding: "12px 20px",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      width: "100%",
      marginBottom: "15px",
    },
    cancel: {
      backgroundColor: "#aaa",
      color: "white",
      padding: "12px 20px",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      width: "100%",
    },
    "@media (maxWidth: 480px)": {
      card: {
        padding: "30px 20px",
      },
      title: {
        fontSize: "24px",
      },
      features: {
        fontSize: "14px",
      },
      button: {
        fontSize: "14px",
      },
      cancel: {
        fontSize: "14px",
      },
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>My Subscription</h2>
        <p style={styles.price}>$4.99/month</p>
        <ul style={styles.features}>
          <li>🔸 480p Streaming</li>
          <li>🔸 Single Device Access</li>
          <li>🔸 Unlimited romantic anime</li>
          <li>🔸 Soft pastel UI</li>
        </ul>
        <button style={styles.button} onClick={() => navigate("/Subscription")}>
          Upgrade Now
        </button>
        <button style={styles.cancel} onClick={() => navigate("/ProfilePage")}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Plan;