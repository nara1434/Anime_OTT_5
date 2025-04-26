import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WishlistPage.scss"; 
import NavBar from "../components/NavBar";

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlistItems] = useState([
    {
      id: 1,
      imageUrl: "/assets/Categories/action3.jpg",
      title: "Eternal Nightfall",
    },
    {
      id: 2,
      imageUrl: "/assets/Categories/action5.avif",
      title: "Fading Heartbeat",
    },
    { id: 3, imageUrl: "/assets/Categories/img6.jpg", title: "Starlit Lies" },
    {
      id: 4,
      imageUrl: "/assets/Categories/thriller3.jpg",
      title: "Haunting Love",
    },
    {
      id: 5,
      imageUrl: "/assets/Categories/img5.jpg",
      title: "The Forgotten Kiss",
    },
    {
      id: 6,
      imageUrl: "/assets/Categories/action8.jpg",
      title: "Beneath the Midnight Sky",
    },
    {
      id: 7,
      imageUrl: "/assets/Categories/thriller4.jpg",
      title: "Burning Heart",
    },
    {
      id: 8,
      imageUrl: "/assets/Categories/action7.jpg",
      title: "Veil of Secrets",
    },
  ]);
  const handleImageClick = () => {
    navigate("/framepage");
  };
  return (
    <div>
      <NavBar />
      <div className="wishlist-container" style={{ marginTop: "67px" }}>
        <h1>Your Wishlist ❤️</h1>
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="wishlist-item"
              onClick={handleImageClick}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="wishlist-image"
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WishlistPage;