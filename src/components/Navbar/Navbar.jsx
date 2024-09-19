import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({navcolor}) => {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === "Home") {
      navigate("/");
    } else {
      navigate(`/${item}`);
    }
  };

  return (
    <>
      <div className="navigation" style={{color:navcolor}}>
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
              className={activeItem === "Blog" ? "active" : ""}
              onClick={() => handleItemClick("Blog")}
            >
              Blog
            </li>
            <li
              className={activeItem === "About" ? "active" : ""}
              onClick={() => handleItemClick("About")}
            >
              About
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
