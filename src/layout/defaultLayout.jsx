import Header from "../components/header";
import { Outlet } from "react-router-dom";

import React from "react";

const defaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default defaultLayout;
