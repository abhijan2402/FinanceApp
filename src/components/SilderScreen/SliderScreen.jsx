import React, { useState, useEffect } from "react";
import Img1 from "../../assets/Images/Img1.jpeg";
import Img2 from "../../assets/Images/Img2.webp";
import Img3 from "../../assets/Images/Img4.webp";
import "../MainScreen.jsx/MainScreen.css";

const images = [Img2, Img1, Img3];

const MainScreen = ({ openModal, blogdesc }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="landing-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="content">
        <h1>
          Empowering Your Financial Journey with Fin
          <span style={{ color: "red" }}>X</span>ec
        </h1>
        <p>
          Where the latest trends meet timeless wisdom—explore our blogs to gain
          insights, expand your horizons, and fuel your passion.
        </p>
        <button className="landing_btn" onClick={openModal}>
          Explor More
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
