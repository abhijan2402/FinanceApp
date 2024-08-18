import React from "react";

function Footer() {
  return (
    <div style={heading}>
      {/* <div style={FooterHead}>
        Explore our diverse portfolio of successful wealth management and
        financial planning projects. See how we have helped others achieve their
        financial dreams and secure their future.
      </div> */}
      <div>
        <div style={CommunicationPart}>Contact us at +9717033809 </div>
        <div style={CommunicationPart}>
          Email us at contactfinxec@gmail.com{" "}
        </div>
      </div>
      <div style={FooterHead}>
        Registered Address: 3013, C Block, Greenfield Colony, Faridabad. Office
        Address: Unit 101, Pyramid Square, Sector 67a, Gurgaon
      </div>
    </div>
  );
}

export default Footer;
const heading = {
  //   width: "100%",
  backgroundColor: "#171717",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "3%",
};
const FooterHead = {
  fontSize: "18px",
  fontWeight: "500",
  width: "auto",
  //   width: "50%",
  alignSelf: "center",
  margin: "10px 0px",
  margin: "auto",
};
// footerAddress = {
//   fontSize: "16px",
// };
const CommunicationPart = {
  fontSize: "20px",
  margin: "10px 0px",
};
