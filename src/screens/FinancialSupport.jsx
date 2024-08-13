import React from "react";
import Img1 from "../assets/Images/Img1.jpeg";
import { BorderTop } from "@mui/icons-material";

function FinancialSupport() {
  return (
    <>
      <div style={MainDiv}>
        <h1 style={Heading}>Unmatched financial support</h1>
        <img src={Img1} style={Images} />
      </div>
    </>
  );
}

export default FinancialSupport;
const Images = {
  width: "50%",
  height: "65vh",
  marginRight: "10px",
};
const MainDiv = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const Heading = {
  width: "50%",
  fontSize: "98px",
};
