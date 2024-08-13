import React from 'react'
import LandignImage from '../assets/Images/LandingImage.jpg'
function Landing() {
    return (
        <div style={{
            backgroundImage: `url(${LandignImage})`,
            height: "90vh",
            opacity: 0.8,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
        }}>
            <h1 style={heading}>Empower Your Wealth with FinXec
            </h1>
            <h6 style={heading_six}>Experience the future of financial planning with access to a wide range of investment products tailored to your goals and aspirations. It’s time to take control of your financial future!</h6>
        </div>
    )
}

export default Landing
const heading = {
    color: "black",
    fontSize: "4em",
    fontFamily: "Arial",
};
const heading_six = {
    fontSize: "1rem",
    width: "70%",
    textAlign: "center",
    margin: "auto"

}