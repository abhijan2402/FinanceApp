import React, { useState, useEffect } from "react";
import Img1 from "../../assets/Images/Img1.jpeg";
import Img2 from "../../assets/Images/Img2.webp";
import Img3 from "../../assets/Images/Img4.webp";
import "./MainScreen.css"; // Import the CSS file for styling

const images = [Img1, Img2, Img3];

const MainScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="landing-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="content">
        <h1>Empower Your Wealth with Fin<span style={{color:"red"}}>X</span>ec</h1>
        <p>
          Experience the future of financial planning with access to a wide range
          of investment products tailored to your <span style={{color:"red"}}>goals</span> and <span style={{color:"red"}}>aspirations</span>. It’s
          time to take control of your financial future!
        </p>
      </div>
    </div>
  );
};

export default MainScreen;
