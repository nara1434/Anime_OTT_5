import React, { useState } from "react";
import { FaHeart, FaSkullCrossbones, FaTheaterMasks } from "react-icons/fa";

const relationshipsData = {
  Akira: [
    { to: "Mira", type: "love", icon: <FaHeart style={{ color: "#ec4899" }} /> },
    { to: "Kai", type: "betrayal", icon: <FaSkullCrossbones style={{ color: "#dc2626" }} /> },
    { to: "Mira", type: "secret", icon: <FaTheaterMasks style={{ color: "#a855f7" }} /> },
  ],
  Mira: [
    { to: "Akira", type: "love", icon: <FaHeart style={{ color: "#ec4899" }} /> },
    { to: "Kai", type: "secret", icon: <FaTheaterMasks style={{ color: "#a855f7" }} /> },
  ],
  Kai: [
    { to: "Akira", type: "betrayal", icon: <FaSkullCrossbones style={{ color: "#dc2626" }} /> },
    { to: "Mira", type: "love", icon: <FaHeart style={{ color: "#ec4899" }} /> },
  ],
};
const PageNotFound = () => {
  const [selectedPOV, setSelectedPOV] = useState("Akira");
  const povs = Object.keys(relationshipsData);
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #fce7f3, #dbeafe)",
    padding: "24px",
  };
  const cardStyle = {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "24px",
  };
  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };
  const povButtonsStyle = {
    display: "flex",
    gap: "12px",
    marginBottom: "16px",
  };
  const buttonStyle = (active) => ({
    padding: "8px 16px",
    borderRadius: "9999px",
    fontWeight: "500",
    border: active ? "none" : "1px solid #ccc",
    backgroundColor: active ? "#2563eb" : "#fff",
    color: active ? "#fff" : "#1f2937",
    cursor: "pointer",
    transition: "all 0.3s ease",
  });
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };
  const tdStyle = {
    padding: "12px 8px",
    borderBottom: "1px solid #e5e7eb",
  };
  const nameStyle = {
    color: "#2563eb",
    fontWeight: "500",
  };
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>
          <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>🔄</span>
          Interactive Character Dynamics
        </h2>
        <div style={povButtonsStyle}>
          {povs.map((pov) => (
            <button
              key={pov}
              onClick={() => setSelectedPOV(pov)}
              style={buttonStyle(selectedPOV === pov)}
            >
              {pov}’s POV
            </button>
          ))}
        </div>

        <div style={{ ...cardStyle, padding: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>
            {selectedPOV}’s Relationship View
          </h3>
          <table style={tableStyle}>
            <tbody>
              {relationshipsData[selectedPOV].map((rel, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{selectedPOV}</td>
                  <td style={tdStyle}>→</td>
                  <td style={{ ...tdStyle, ...nameStyle }}>{rel.to}</td>
                  <td style={{ ...tdStyle, textAlign: "right" }}>{rel.icon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
