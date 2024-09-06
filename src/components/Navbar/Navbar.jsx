import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="navigation">
        <div className="logo">
          <h1>
            Fin<span style={{ color: "red" }}>X</span>ec
          </h1>
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
