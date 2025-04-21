// src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#000", height: "100vh" }}>
      <h1>🎥 Welcome to Romantic–Thriller Anime World!</h1>
      <button onClick={logout} style={{ marginTop: "20px" }}>Logout</button>
    </div>
  );
};

export default Dashboard;
