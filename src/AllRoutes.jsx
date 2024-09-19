import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Blog from "./screens/Blog";
import Footer from "./components/Footer/Footer";
import BlogDetailPage from "./components/BlogDetails/BlogDetailPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/regestration" element={<RegistrationForm />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog_details" element={<BlogDetailPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default AllRoutes;
