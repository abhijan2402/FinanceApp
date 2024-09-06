import React, { useState } from "react";
import MainScreen from "../components/MainScreen.jsx/MainScreen";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Services from "../components/OurServices/Services";
import FinancialOverview from "../components/FinancialOverview/FinancialOverview";
import Testimonials from "../components/Testimonials/Testimonials";
import OurWork from "../components/OurWork/OurWork";
import Footer from "../components/Footer/Footer";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid">
      <MainScreen openModal={openModal} />
      <WhoWeAre />
      <Services openModal={openModal} />
      <FinancialOverview />
      <OurWork />
      <Testimonials />
      <Footer />

      {showModal && <RegistrationForm closeModal={closeModal} />}
    </div>
  );
};

export default Layout;
