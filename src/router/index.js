import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import MobileApp from '../screens/MobileApp';
import App_store from '../screens/App_store';
import RealEstate_and_property from '../screens/RealEstate_and_property';
 
 


import WebApplication from "../screens/webApplication";
// import EcommerseDevelopment from '../screens/EcommerseDevelopment';
import EcommerseDevelopment from "../screens/ecommerseDevelopment";
import DigitalMarketing from "../screens/digitalMarketing";
import WebDevelopment from "../screens/webDevelopment";
import Automotive from "../screens/automotive";


const Router = () => {
  return (
    <BrowserRouter basename="project-name">
      <Routes>
        <Route path="/" element={<Home />} />
         
        <Route path="/app-store" element={<App_store/>}></Route>
        {/* <Route path="/EcommerseDevelopment" element={<EcommerseDevelopment/>}></Route> */}
      <Route path="/MobileApp" element={< MobileApp/>}> </Route>


        <Route path="/EcommerseDevelopment" element={<EcommerseDevelopment/>}></Route>
        <Route path="/MobileApp" element={< MobileApp/>}> </Route>
        <Route path="/ecommerse-development" element={<EcommerseDevelopment />}></Route>
      
        <Route path="/web-application" element={<WebApplication />}></Route>
        <Route path="/realEstate-and-property" element={<RealEstate_and_property />}></Route>
        <Route path="/digitalMarketing" element={<DigitalMarketing />}></Route>
        <Route path="/webDevelopment" element={<WebDevelopment />}></Route>
        <Route path="/automotive" element={<Automotive />}></Route>
      

   
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
