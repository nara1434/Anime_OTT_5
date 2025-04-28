import React, { useState } from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const genres = [
  {
    id: 1,
    name: "Romantic",
    description: "Fall in love with heartwarming stories and touching moments.",
    filters: ["Slow Burn", "Love Triangle", "Enemies to Lovers"],
    anime: [
      {
        title: "Your Name",
        image: "/assets/Categories/img1.jpg",
        tags: ["Slow Burn"],
      },
      {
        title: "Toradora",
        image: "/assets/Categories/img2.webp",
        tags: ["Enemies to Lovers"],
      },
      {
        title: "Kimi ni Todoke",
        image: "/assets/Categories/img3.webp",
        tags: ["Slow Burn"],
      },
      {
        title: "Clannad",
        image: "/assets/Categories/img4.jpg",
        tags: ["Love Triangle"],
      },
      {
        title: "Fruits Basket",
        image: "/assets/Categories/img5.jpg",
        tags: ["Slow Burn"],
      },
      {
        title: "Lovely★Complex",
        image: "/assets/Categories/img6.jpg",
        tags: ["Enemies to Lovers"],
      },
      {
        title: "Horimiya",
        image: "/assets/Categories/img7.jpg",
        tags: ["Slow Burn"],
      },
      {
        title: "Nana",
        image: "/assets/Categories/img8.webp",
        tags: ["Love Triangle"],
      },
      {
        title: "Your Name",
        image: "/assets/Categories/img1.jpg",
        tags: ["Slow Burn"],
      },
      {
        title: "Toradora",
        image: "/assets/Categories/img2.webp",
        tags: ["Enemies to Lovers"],
      },
      {
        title: "Your Name",
        image: "/assets/Categories/img1.jpg",
        tags: ["Slow Burn"],
      },
      {
        title: "Toradora",
        image: "/assets/Categories/img2.webp",
        tags: ["Enemies to Lovers"],
      },
      {
        title: "Nana",
        image: "/assets/Categories/img8.webp",
        tags: ["Love Triangle"],
      },
      {
        title: "Your Name",
        image: "/assets/Categories/img1.jpg",
        tags: ["Slow Burn"],
      },
      {
        title: "Kimi ni Todoke",
        image: "/assets/Categories/img3.webp",
        tags: ["Slow Burn"],
      },
    ],
    backgroundColor: "#FFE4E1",
    textColor: "#FF4F58",
  },
  {
    id: 2,
    name: "Thriller",
    description: "Get ready for suspense, mystery, and mind games.",
    filters: ["Psychological", "Stalker", "Plot Twist Heavy"],
    anime: [
      {
        title: "Death Note",
        image: "/assets/Categories/thriller1.jpeg",
        tags: ["Psychological"],
      },
      {
        title: "Steins;Gate",
        image: "/assets/Categories/thriller2.jpg",
        tags: ["Plot Twist Heavy"],
      },
      {
        title: "Erased",
        image: "/assets/Categories/thriller3.jpg",
        tags: ["Psychological"],
      },
      {
        title: "Monster",
        image: "/assets/Categories/thriller4.jpg",
        tags: ["Plot Twist Heavy"],
      },
      {
        title: "Paranoia Agent",
        image: "/assets/Categories/thriller5.jpg",
        tags: ["Stalker"],
      },
      {
        title: "Future Diary",
        image: "/assets/Categories/thriller6.jpg",
        tags: ["Stalker"],
      },
      {
        title: "Another",
        image: "/assets/Categories/thriller7.jpg",
        tags: ["Psychological"],
      },
      {
        title: "Tokyo Ghoul",
        image: "/assets/Categories/thriller8.jpg",
        tags: ["Plot Twist Heavy"],
      },
      {
        title: "Erased",
        image: "/assets/Categories/thriller3.jpg",
        tags: ["Psychological"],
      },
      {
        title: "Monster",
        image: "/assets/Categories/thriller4.jpg",
        tags: ["Plot Twist Heavy"],
      },
      {
        title: "Death Note",
        image: "/assets/Categories/thriller1.jpeg",
        tags: ["Psychological"],
      },
      {
        title: "Steins;Gate",
        image: "/assets/Categories/thriller2.jpg",
        tags: ["Plot Twist Heavy"],
      },
      {
        title: "Erased",
        image: "/assets/Categories/thriller3.jpg",
        tags: ["Psychological"],
      },
      {
        title: "Paranoia Agent",
        image: "/assets/Categories/thriller5.jpg",
        tags: ["Stalker"],
      },
      {
        title: "Future Diary",
        image: "/assets/Categories/thriller6.jpg",
        tags: ["Stalker"],
      },
    ],
    backgroundColor: "#222",
    textColor: "#FF4F58",
  },
  {
    id: 3,
    name: "Action",
    description: "High energy battles and thrilling fight scenes await.",
    filters: ["Martial Arts", "Superpowers", "Battle Royale"],
    anime: [
      {
        title: "Attack on Titan",
        image: "/assets/Categories/action1.jpeg",
        tags: ["Battle Royale"],
      },
      {
        title: "Fullmetal Alchemist",
        image: "/assets/Categories/action2.avif",
        tags: ["Superpowers"],
      },
      {
        title: "Jujutsu Kaisen",
        image: "/assets/Categories/action3.jpg",
        tags: ["Martial Arts"],
      },
      {
        title: "Bleach",
        image: "/assets/Categories/action4.avif",
        tags: ["Superpowers"],
      },
      {
        title: "Demon Slayer",
        image: "/assets/Categories/action5.avif",
        tags: ["Martial Arts"],
      },
      {
        title: "My Hero Academia",
        image: "/assets/Categories/action6.jpg",
        tags: ["Superpowers"],
      },
      {
        title: "One Punch Man",
        image: "/assets/Categories/action7.jpg",
        tags: ["Battle Royale"],
      },
      {
        title: "Black Clover",
        image: "/assets/Categories/action8.jpg",
        tags: ["Martial Arts"],
      },
      {
        title: "Jujutsu Kaisen",
        image: "/assets/Categories/action3.jpg",
        tags: ["Martial Arts"],
      },
      {
        title: "Bleach",
        image: "/assets/Categories/action4.avif",
        tags: ["Superpowers"],
      },
      {
        title: "Attack on Titan",
        image: "/assets/Categories/action1.jpeg",
        tags: ["Battle Royale"],
      },
      {
        title: "Fullmetal Alchemist",
        image: "/assets/Categories/action2.avif",
        tags: ["Superpowers"],
      },
      {
        title: "Jujutsu Kaisen",
        image: "/assets/Categories/action3.jpg",
        tags: ["Martial Arts"],
      },
      {
        title: "My Hero Academia",
        image: "/assets/Categories/action6.jpg",
        tags: ["Superpowers"],
      },
      {
        title: "One Punch Man",
        image: "/assets/Categories/action7.jpg",
        tags: ["Battle Royale"],
      },
    ],
    backgroundColor: "#87CEEB",
    textColor: "#FF4F58",
  },
];
const GenresPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredAnime = selectedFilter
    ? selectedGenre.anime.filter((anime) => anime.tags.includes(selectedFilter))
    : selectedGenre.anime;

  return (
    <div>
      <NavBar />
      <div
        className="genres-page"
        style={{
          backgroundColor: selectedGenre.backgroundColor,
          marginTop: "67px",
        }}
      >
        <h1 className="page-title" style={{ color: selectedGenre.textColor }}>
          Explore Anime Genres
        </h1>

        <div className="genres-tabs">
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`genre-tab ${
                selectedGenre.id === genre.id ? "active" : ""
              }`}
              onClick={() => {
                setSelectedGenre(genre);
                setSelectedFilter("");
              }}
              style={{
                backgroundColor:
                  selectedGenre.id === genre.id
                    ? selectedGenre.textColor
                    : "#fff",
                color: selectedGenre.id === genre.id ? "#fff" : "#000",
              }}
            >
              {genre.name}
            </button>
          ))}
        </div>

        <div
          className="genre-description"
          style={{ color: selectedGenre.textColor }}
        >
          <h2>{selectedGenre.name}</h2>
          <p>{selectedGenre.description}</p>
          <div className="genre-filters">
            {selectedGenre.filters.map((filter, idx) => (
              <span
                key={idx}
                className={`filter-pill ${
                  selectedFilter === filter ? "selected" : ""
                }`}
                onClick={() =>
                  setSelectedFilter((prev) => (prev === filter ? "" : filter))
                }
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
        <div className="anime-grid">
          <h3 style={{ color: "#FF4F58" }}>
            Featured Anime in {selectedGenre.name}
          </h3>
          <div className="grid-container">
            {filteredAnime.map((anime, index) => (
              <div key={index} className="anime-card">
                <Link to={`/framepage/${anime.title}`} className="anime-link">
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="anime-image"
                  />
                  <p>{anime.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default GenresPage;