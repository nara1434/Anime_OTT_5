import React, { useState, useEffect } from "react";
import { FaHeart, FaSkullCrossbones, FaTheaterMasks } from "react-icons/fa";

const relationshipsData = {
  Justin: [
    { to: "Nash", type: "love", icon: <FaHeart style={{ color: "#ec4899" }} /> },
    { to: "Christina", type: "betrayal", icon: <FaSkullCrossbones style={{ color: "#dc2626" }} /> },
    { to: "Nash", type: "secret", icon: <FaTheaterMasks style={{ color: "#a855f7" }} /> },
  ],
  Nash: [
    { to: "Justin", type: "love", icon: <FaHeart style={{ color: "#ec4899" }} /> },
    { to: "Nash", type: "secret", icon: <FaTheaterMasks style={{ color: "#a855f7" }} /> },
  ],
  Christina: [
    { to: "Justin", type: "betrayal", icon: <FaSkullCrossbones style={{ color: "#dc2626" }} /> },
    { to: "Christina", type: "love", icon: <FaHeart style={{ color: "#ec4899" }} /> },
  ],
};

const Relationship = () => {
  const [selectedPOV, setSelectedPOV] = useState("Justin");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const povs = Object.keys(relationshipsData);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "12px" : "24px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: isMobile ? "95%" : "600px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: isMobile ? "16px" : "24px",
    marginTop: "130px",
  };

  const headingStyle = {
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  };

  const povButtonsStyle = {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
    flexWrap: "wrap",
  };

  const buttonStyle = (active) => ({
    padding: isMobile ? "6px 12px" : "8px 16px",
    borderRadius: "9999px",
    fontWeight: "500",
    border: active ? "none" : "1px solid #ccc",
    background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
    color: active ? "#fff" : "#1f2937",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: isMobile ? "14px" : "16px",
  });

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: isMobile ? "14px" : "16px",
  };

  const tdStyle = {
    padding: isMobile ? "8px 6px" : "12px 8px",
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
          Relationship Mapping
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

        <div
          style={{
            ...cardStyle,
            padding: isMobile ? "12px" : "16px",
            marginTop: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
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

export default Relationship;
