import React from "react";
import Logo from "../assets/Images/Logo.png";

function Navbar() {
  return (
    <div style={navbar}>
      <div style={logoContainer}>
        <img src={Logo} alt="Home Page" style={logoStyle} />
      </div>
      <div style={navbarItems}>
        <ul style={navbarList}>
          <li style={navbarItem}>Home</li>
          <li style={navbarItem}>About</li>
          <li style={navbarItem}>Blogs</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

const navbar = {
  position: "sticky",
  top: 0,
  width: "100%",
  backgroundColor: "none", // Transparent background
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  zIndex: 1000, // Ensure it stays on top
};

const logoContainer = {
  flexGrow: 1,
};

const logoStyle = {
  width: "45px",
  height: "45px",
};

const navbarItems = {
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 2,
};

const navbarList = {
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const navbarItem = {
  margin: "0 15px",
  color: "white", // White text to stand out on transparent background
  cursor: "pointer",
  fontSize: "18px",
  fontFamily: "Arial, sans-serif",
  transition: "color 0.3s ease",
};

navbarItem["&:hover"] = {
  color: "#ccc", // Lighter color on hover
};
