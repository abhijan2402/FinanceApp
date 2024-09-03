import React from "react";
import OurWork from "../components/OurWork/OurWork";
import Services from "../components/OurServices/Services";
import MainScreen from "../components/MainScreen.jsx/MainScreen";
import Testimonials from "../components/Testimonials/Testimonials";
import FinancialOverview from "../components/FinancialOverview/FinancialOverview";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Footer from "../components/Footer/Footer";

const Landing = () => {
  return (
    <div>
      <MainScreen />
      <WhoWeAre/>
      <Services />
      <FinancialOverview/>
      <OurWork />
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Landing;
