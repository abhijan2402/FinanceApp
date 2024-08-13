import React from "react";

function ServiceCard({ title, description }) {
  return (
    <div
      style={{
        width: "30%",
        boxShadow: "3px 1px 20px 1px grey",
        marginBottom: "10px",
        margin: "10px 10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "black",
          color: "white",
          borderRadius: "0px 0px 30px 30px",
          padding: "10px 0px ",
          fontSize: "25px",
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: "15px", margin: "20px 0px" }}>{description}</div>
    </div>
  );
}

export default ServiceCard;
