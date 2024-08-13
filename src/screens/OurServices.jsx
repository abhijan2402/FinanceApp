import React from "react";
import ServiceCard from "../components/ServiceCard";

function OurServices() {
  return (
    <div style={{ marginBottom: "2%" }}>
      <h1>Our Services</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ServiceCard
          title={"Wealth Management"}
          description={
            "Expert wealth management services to help you grow and protect your assets."
          }
        />
        <ServiceCard
          title={"Financial Planning"}
          description={
            "Comprehensive financial planning support to align your investments with your vision and goals"
          }
        />
        <ServiceCard
          title={"Investment Advisory"}
          description={
            "Professional investment advisory services to help you make informed and strategic investment decisions."
          }
        />
      </div>
    </div>
  );
}

export default OurServices;
