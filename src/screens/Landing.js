import React, { useEffect, useState } from "react";
import LandignImage1 from "../assets/Images/Img1.jpeg";
import LandignImage2 from "../assets/Images/Img2.webp";
import LandignImage3 from "../assets/Images/Img4.webp";

function Landing() {
  const images = [LandignImage1, LandignImage2, LandignImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={container}>
      <div
        style={{ ...overlay, backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <div style={textContainer}>
        <h1 style={heading}>
          Empower Your Wealth with Fin<span style={X}>X</span>ec
        </h1>
        <h6 style={heading_six}>
          Experience the future of financial planning with access to a wide
          range of investment products tailored to your goals and aspirations.
          It’s time to take control of your financial future!
        </h6>
      </div>
    </div>
  );
}

export default Landing;

const container = {
  position: "relative",
  height: "100vh",
  overflow: "hidden",
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 2s ease-in-out",
  transform: "scale(1.1)",
  animation: "scaleEffect 5s infinite",
  filter: "blur(6px)",
  backgroundColor: "rgba(0, 0, 0, 1)",
};

const textContainer = {
  position: "relative",
  zIndex: 2,
  color: "white",
  textAlign: "center",
  top: "50%",
  transform: "translateY(-50%)",
};

const X = {
  color: "red",
};

const heading = {
  fontSize: "5em",
  fontFamily: "Arial",
  marginBottom: "0.5em",
};

const heading_six = {
  fontSize: "1.8rem",
  width: "70%",
  margin: "auto",
};

// Add keyframes for the scaling effect
const keyframes = `
  @keyframes scaleEffect {
    0% { transform: scale(1.1); }
    50% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }
`;

// Inject keyframes into the document head
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
