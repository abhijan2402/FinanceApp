import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/FinanceApp/" element={<Layout />} />
        <Route path="/FinanceApp/regestration" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
