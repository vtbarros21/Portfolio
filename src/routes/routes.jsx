import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects"
import DefaultLayout from "../layout/defaultLayout";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
