import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="navigation">
        <div className="logo">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="nav_items_list">
          <ul>
            <li
              className={activeItem === "Home" ? "active" : ""}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </li>
            <li
              className={activeItem === "About" ? "active" : ""}
              onClick={() => handleItemClick("About")}
            >
              About
            </li>
            <li
              className={activeItem === "Blog" ? "active" : ""}
              onClick={() => handleItemClick("Blog")}
            >
              Blog
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
