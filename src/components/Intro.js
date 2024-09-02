import React, { useEffect } from "react";
import SectionGap from "./SectionGap";
import Img1 from "../assets/Images/Img1.jpeg";
import Img2 from "../assets/Images/Img2.webp";
import Img3 from "../assets/Images/Img3.jpg";
import Img4 from "../assets/Images/Img4.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function Intro() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Easing option
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <SectionGap />
      <div style={introContainer}>
        <div style={contentContainer} data-aos="fade-right">
          <h1 style={titleStyle}>Who We Are</h1>
          <p style={paragraphStyle}>
            At FinXec, we are dedicated to helping you achieve your financial
            dreams by providing expert wealth management services both online
            and offline. Utilizing cutting-edge AI and machine learning
            technologies, we offer precise analysis and interpretation of your
            financial plans. Trust us to guide you in securing your financial
            future with expertise and innovation.
          </p>
        </div>
        <div style={imageContainer} data-aos="fade-left">
          <img src={Img1} alt="Image 1" style={imageStyle} />
          <img src={Img2} alt="Image 2" style={imageStyle} />
          <img src={Img3} alt="Image 3" style={imageStyle} />
          <img src={Img4} alt="Image 4" style={imageStyle} />
        </div>
      </div>
    </>
  );
}

const introContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  flexWrap: "wrap",
  height: "600px",
};

const contentContainer = {
  flex: "1",
  marginRight: "20px",
  textAlign: "left",
};

const titleStyle = {
  fontSize: "3.5rem",
  marginBottom: "10px",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.6",
  marginTop: "20px",
  letterSpacing: "1px",
};

const imageContainer = {
  flex: "1",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
};

const imageStyle = {
  width: "calc(50% - 10px)", // Ensures two images per row with a small gap
  height: "auto",
  borderRadius: "10px",
};

export default Intro;
