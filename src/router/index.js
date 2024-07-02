import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';

import WebApplication from "../screens/webApplication";
// import EcommerseDevelopment from '../screens/EcommerseDevelopment';
import EcommerseDevelopment from "../screens/ecommerseDevelopment";
const Router = () => {
  return (
    <BrowserRouter basename="project-name">
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/ecommerse-development" element={<EcommerseDevelopment />}></Route>
        <Route path="/web-application" element={<WebApplication />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
