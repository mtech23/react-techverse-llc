import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import MobileApp from '../screens/MobileApp';

// import EcommerseDevelopment from '../screens/EcommerseDevelopment';
import EcommerseDevelopment from "../screens/ecommerseDevelopment";
const Router = () => {
  return (
    <BrowserRouter basename="project-name">
      <Routes>
        <Route path="/" element={<Home/>} />
  

        <Route path="/EcommerseDevelopment" element={<EcommerseDevelopment/>}></Route>
      <Route path="/MobileApp" element={< MobileApp/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
