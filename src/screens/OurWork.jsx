import React from "react";

function OurWork() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Our Work</h1>
      <div style={WorkContent}>
        <div style={Content}>
          Explore our diverse portfolio of successful wealth management and
          financial planning projects. See how we have helped others achieve
          their financial dreams and secure their future.
        </div>
        <div style={Content}>
          Explore our diverse portfolio of successful wealth management and
          financial planning projects. See how we have helped others achieve
          their financial dreams and secure their future.
        </div>
        <div style={Content}>
          Explore our diverse portfolio of successful wealth management and
          financial planning projects. See how we have helped others achieve
          their financial dreams and secure their future.
        </div>
      </div>
    </div>
  );
}

export default OurWork;
const WorkContent = {
  //   backgroundColor: "black",
  color: "black",
  fontSize: "16px",
  fontWeight: "500",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};
const Content = {
  backgroundColor: "#171717",
  color: "white",
  borderRadius: "100%",
  width: "25%",
  padding: "100px 50px",
};
