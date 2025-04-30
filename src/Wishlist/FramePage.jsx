import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

  const FramePage = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [episodes] = useState([
    {
      id: 1,
      title: "Episode 1: Love Begins",
      thumbnail: "/assets/images/action1.png",
    },
    {
      id: 2,
      title: "Episode 2: Shadows of the Past",
      thumbnail: "/assets/Categories/action7.jpg",
    },
    {
      id: 3,
      title: "Episode 3: Silent Whispers",
      thumbnail: "/assets/Categories/img3.webp",
    },
  ]);
  const handleWishlist = () => navigate("/wishlistpage");
  const handleWatchNow = () => navigate("/player");
  const handleEpisodeClick = (id) => navigate(`/player?episode=${id}`);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const goHome = () => navigate("/home");
  const isLight = theme === "light";
  return (
    <div
      style={{
        ...styles.container,
        background: isLight ? "#fff0f5" : "#1a1a1a",
        color: isLight ? "#000" : "#fff",
      }}
    >
      <img
        src="/assets/Categories/img1.jpg"
        alt="Anime Frame"
        style={styles.image}
      />
      <div style={styles.buttonGroup}>
        <button
          onClick={handleWishlist}
          style={{ ...styles.button, backgroundColor: "#ff4d6d" }}
          onMouseLeave={(e) => (e.target.innerText = "❤️ Wishlist")}
        >
          ❤️ Wishlist
        </button>
        <button
          onClick={handleWatchNow}
          style={{ ...styles.button, backgroundColor: "#4d96ff" }}
        >
          ▶️ Watch Now
        </button>
      </div>
      <h2 style={styles.episodesTitle}>🎬 Episodes</h2>
      <div style={styles.episodeGrid}>
        {episodes.map((ep, idx) => (
          <div
            key={ep.id}
            style={{
              ...styles.episodeCard,
              animation: `fadeIn 0.6s ease ${idx * 0.2}s both`,
            }}
            onClick={() => handleEpisodeClick(ep.id)}
          >
            <div
              className="episode-image-container"
              style={styles.episodeImageContainer}
            >
              <img
                src={ep.thumbnail}
                alt={ep.title}
                style={styles.episodeImage}
              />
            </div>
            <p style={styles.episodeTitle}>{ep.title}</p>
          </div>
        ))}
      </div>
      <button
        onClick={goHome}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 16px",
          background: "linear-gradient(45deg, #FFB6C1 30%, #000 90%)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Back
      </button>
      <div style={styles.footerTagline}>
        ❤️ Immerse in love, 💔 feel the thrill, 💫 explore the untold stories.
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
.episode-image-container:hover img {
            transform: scale(1.1);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    transition: "background 0.4s, color 0.4s",
  },
  themeToggle: {
    background: "#ccc",
    border: "none",
    borderRadius: "20px",
    padding: "8px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  image: {
    width: "90%",
    maxWidth: "700px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 28px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  episodesTitle: {
    fontSize: "28px",
    color: "#ff4d6d",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  episodeGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  episodeCard: {
    width: "200px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  episodeImageContainer: {
    position: "relative",
    overflow: "hidden",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  episodeImage: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  episodeTitle: {
    padding: "12px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#333",
  },
  footerTagline: {
    marginTop: "50px",
    fontSize: "18px",
    fontStyle: "italic",
    color: "#9e3f6d",
    background: "#ffe6f0",
    padding: "15px",
    borderRadius: "12px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 0 10px rgba(255, 77, 109, 0.1)",
  },
  socialShare: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#555",
  },
  shareIcon: {
    margin: "0 10px",
    fontSize: "24px",
    textDecoration: "none",
    transition: "transform 0.2s",
  },
};
export default FramePage;