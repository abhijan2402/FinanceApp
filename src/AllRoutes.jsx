import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Blog from "./screens/Blog";
import Footer from "./components/Footer/Footer";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/regestration" element={<RegistrationForm />} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default AllRoutes;
