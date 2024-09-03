import React from "react";
import MainScreen from "../components/MainScreen.jsx/MainScreen";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Services from "../components/OurServices/Services";
import FinancialOverview from "../components/FinancialOverview/FinancialOverview";
import Testimonials from "../components/Testimonials/Testimonials";
import OurWork from "../components/OurWork/OurWork";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <MainScreen />
      <WhoWeAre />
      <Services />
      <FinancialOverview />
      <OurWork />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Layout;
