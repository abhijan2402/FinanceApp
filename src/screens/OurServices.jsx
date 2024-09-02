import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { MonetizationOn, AccountBalance, TrendingUp } from "@mui/icons-material";
import Img4 from "../assets/Images/Img4.webp";

function ServiceCard({ title, description, Icon }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        textAlign: "center",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
        backgroundColor: "rgba(255, 255, 255, 0.9)", // slight transparency for background
      }}
    >
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Icon sx={{ fontSize: 50, color: "#000" }} />
        </Box>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function OurServices() {
  return (
    <div
      style={{
        marginBottom: "2%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px 20px",
        backgroundImage: `url(${Img4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height:"600px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // darker overlay to improve text readability
          zIndex: 1,
        }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 4, color: "white", position: "relative", zIndex: 2,  fontSize: 40, fontWeight: "bold" }}
      >
        Our Services
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <ServiceCard
          title={"Wealth Management"}
          description={
            "Expert wealth management services to help you grow and protect your assets."
          }
          Icon={MonetizationOn}
        />
        <ServiceCard
          title={"Financial Planning"}
          description={
            "Comprehensive financial planning support to align your investments with your vision and goals."
          }
          Icon={AccountBalance}
        />
        <ServiceCard
          title={"Investment Advisory"}
          description={
            "Professional investment advisory services to help you make informed and strategic investment decisions."
          }
          Icon={TrendingUp}
        />
      </div>
    </div>
  );
}

export default OurServices;
