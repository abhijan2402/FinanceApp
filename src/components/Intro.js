import React from 'react'
import SectionGap from './SectionGap'
import Img1 from '../assets/Images/Img1.jpeg'
import Img2 from '../assets/Images/Img2.webp'
import Img3 from '../assets/Images/Img3.jpg'
import Img4 from '../assets/Images/Img4.webp'

function Intro() {
    return (
        <>
            <SectionGap />
            <h1>
                Who We Are
            </h1>
            <div style={MainDiv}>
                <img src={Img1} style={Images} />
                <img src={Img2} style={Images} />
                <img src={Img3} style={Images} />
                <img src={Img4} style={Images} />
            </div>
        </>
    )
}

const Images = {
    width: "35%",
    height: "40vh",
    marginRight: "10px"
}
const MainDiv = {
    width: "70%",
    margin: "auto",
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap"

}
export default Intro