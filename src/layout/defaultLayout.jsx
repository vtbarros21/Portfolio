import Header from "../components/header";
import Footer from "../components/footer"
import { Outlet } from "react-router-dom";

import React from "react";

const defaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default defaultLayout;
