import React from "react";
import NavBar from "./NavBar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const slidesData = [
  {
    id: 1,
    video: "action1.mp4",
    title: "Mysterious Encounter",
    description:
      "A shadowy ninja leaps between rooftops under the moonlight!  ⚔️✨",
  },
  {
    id: 2,
    video: "action2.mp4",
    title: "The Chase Begins",
    description:
      "Blades clash as mysterious warriors duel in the rain! ⚔️ 💥 🩸",
  },
  {
    id: 3,
    video: "anime3.mp4",
    title: "Secrets Revealed",
    description: "Neon-lit chase through the megacity slums!  🔫🤖 ",
  },
];
const crimeThrillers = [
  {
    id: 1,
    title: "Romantic River",
    poster: "/assets/images/thriller1.png",
  },
  {
    id: 2,
    title: "Forest Romance",
    poster: "/assets/images/thriller2.png",
  },
  {
    id: 3,
    title: "Rain Love",
    poster: "/assets/images/thriller3.png",
  },
  {
    id: 4,
    title: "Romantic River",
    poster: "/assets/images/thriller4.png",
  },
  {
    id: 5,
    title: "Romantic River",
    poster: "/assets/images/thriller5.png",
  },
];
const psychologicalThriller = [
  {
    id: 1,
    title: "Neon Genesis Evangelion",
    poster: "/assets/images/psycology1.png",
  },
  {
    id: 2,
    title: "Human Lost",
    poster: "/assets/images/psycology2.png",
  },
  {
    id: 3,
    title: "Genocidal Organ",
    poster: "/assets/images/psycology3.png",
  },
  {
    id: 4,
    title: "King of Thorn",
    poster: "/assets/images/psycology4.png",
  },
  {
    id: 5,
    title: "Paprika",
    poster: "/assets/images/psycology5.png",
  },
];
const mysteryMovies = [
  {
    id: 1,
    title: "Detective Conan",
    poster: "/assets/images/mystry1.png",
  },
  {
    id: 2,
    title: "Ghost Shell",
    poster: "/assets/images/mystry2.png",
  },
  {
    id: 3,
    title: "Summer Time Rendering",
    poster: "/assets/images/mystry3.png",
  },
  {
    id: 4,
    title: "Garden of Sinners",
    poster: "/assets/images/mystry4.png",
  },
  {
    id: 5,
    title: "Children Who Chase Lost Voices",
    poster: "/assets/images/mystry5.png",
  },
];
const actionThrillers = [
  {
    id: 1,
    title: "Akira",
    poster: "/assets/images/action1.png",
  },
  {
    id: 2,
    title: "Sword of the Strange",
    poster: "/assets/images/action2.png",
  },
  {
    id: 3,
    title: "Redliner",
    poster: "/assets/images/action3.png",
  },
  {
    id: 4,
    title: "Bayonetta",
    poster: "/assets/images/action4.png",
  },
  {
    id: 5,
    title: "Ninja Scroll",
    poster: "/assets/images/action5.png",
  },
];
const ThrillerThemeHome = () => {
  let nav = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row" style={{ marginTop: "67px" }}>
          <div className="col-12">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                {slidesData.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === activeIndex ? "active" : ""}
                    aria-current={index === activeIndex ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {slidesData.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <video
                      className="d-block w-100"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ height: "450px", objectFit: "cover" }}
                    >
                      <source
                        src={`/assets/videos/${slide.video}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="text-white">{slide.title}</h5>
                      <p className="text-white">{slide.description}</p>
                      <div className="d-flex gap-3 justify-content-center text-center mt-3">
                        <button
                          className="btn btn-danger px-4 py-2"
                          onClick={() => nav("/player")}
                        >
                          Watch Now <FaPlay className="ms-1" />
                        </button>
                        <button
                          className="btn btn-danger px-4 py-2"
                          onClick={() => nav("/wishlistpage")}
                        >
                          WishList <FaHeart className="ms-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + slidesData.length) % slidesData.length
                  )
                }
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % slidesData.length)
                }
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h3
              className="mb-0"
              style={{
                fontWeight: "bold",
                color: "#ff69b4",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                letterSpacing: "1px",
              }}
            >
              CrimeThrillers
            </h3>
          </div>
          <div
            className="hide-scrollbar-lovestories"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              paddingBottom: "8px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Box
              component="ul"
              sx={{
                display: "inline-flex",
                gap: 2,
                p: 0,
                m: 0,
                listStyle: "none",
              }}
            >
              {crimeThrillers.map((video) => (
                <Card
                  key={video.id}
                  component="li"
                  className="card-hover-effect"
                  sx={{
                    minWidth: 280,
                    height: 300,
                    flexGrow: 1,
                  }}
                >
                  <CardCover>
                    <img
                      src={video.poster}
                      alt={video.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CardCover>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        pb: 1,
                      }}
                    >
                      <h5
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {video.title}
                      </h5>
                      <Button
                        variant="solid"
                        color="primary"
                        size="sm"
                        onClick={() => nav("/framepage")}
                      >
                        Play Now <FaPlay className="ms-2 text-danger" />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        </div>
        <div className="row mt-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h3
              className="mb-0"
              style={{
                fontWeight: "bold",
                color: "#ff6347",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                letterSpacing: "1px",
              }}
            >
              Psychological Thriller Movies
            </h3>
          </div>
          <div
            className="hide-scrollbar-heartfeltmovies"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              paddingBottom: "8px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Box
              component="ul"
              sx={{
                display: "inline-flex",
                gap: 2,
                p: 0,
                m: 0,
                listStyle: "none",
              }}
            >
              {psychologicalThriller.map((movie) => (
                <Card
                  key={movie.id}
                  component="li"
                  className="card-hover-effect"
                  sx={{
                    minWidth: 280,
                    height: 300,
                    flexGrow: 1,
                    position: "relative",
                  }}
                >
                  <CardCover>
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CardCover>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        pb: 1,
                      }}
                    >
                      <h5
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {movie.title}
                      </h5>
                      <Button
                        variant="solid"
                        color="primary"
                        size="sm"
                        onClick={() => nav("/framepage")}
                      >
                        Play Now <FaPlay className="ms-2 text-danger" />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        </div>
        <div className="row mt-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h3
              className="mb-0"
              style={{
                fontWeight: "bold",
                color: "#ff6347",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                letterSpacing: "1px",
              }}
            >
              Mystery Movies
            </h3>
          </div>
          <div
            className="hide-scrollbar-romanticmovies"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              paddingBottom: "8px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Box
              component="ul"
              sx={{
                display: "inline-flex",
                gap: 2,
                p: 0,
                m: 0,
                listStyle: "none",
              }}
            >
              {mysteryMovies.map((movie) => (
                <Card
                  key={movie.id}
                  component="li"
                  className="card-hover-effect"
                  sx={{
                    minWidth: 280,
                    height: 300,
                    flexGrow: 1,
                    position: "relative",
                  }}
                >
                  <CardCover>
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CardCover>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        pb: 1,
                      }}
                    >
                      <h5
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {movie.title}
                      </h5>
                      <Button
                        variant="solid"
                        color="primary"
                        size="sm"
                        onClick={() => nav("/framepage")}
                      >
                        Play Now <FaPlay className="ms-2 text-danger" />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        </div>
        <div className="row mt-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h3
              className="mb-0"
              style={{
                fontWeight: "bold",
                color: "#ff6347",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                letterSpacing: "1px",
              }}
            >
              Action Thriller's
            </h3>
          </div>
          <div
            className="hide-scrollbar-romanticdramas"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              paddingBottom: "8px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Box
              component="ul"
              sx={{
                display: "inline-flex",
                gap: 2,
                p: 0,
                m: 0,
                listStyle: "none",
              }}
            >
              {actionThrillers.map((drama) => (
                <Card
                  key={drama.id}
                  component="li"
                  className="card-hover-effect"
                  sx={{
                    minWidth: 280,
                    height: 300,
                    flexGrow: 1,
                    position: "relative",
                  }}
                >
                  <CardCover>
                    <img
                      src={drama.poster}
                      alt={drama.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CardCover>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        pb: 1,
                      }}
                    >
                      <h5
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {drama.title}
                      </h5>
                      <Button
                        variant="solid"
                        color="primary"
                        size="sm"
                        onClick={() => nav("/framepage")}
                      >
                        Play Now <FaPlay className="ms-2 text-danger" />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ThrillerThemeHome;
