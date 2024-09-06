import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import MobileApp from "../screens/MobileApp";
import App_store from "../screens/App_store";
import RealEstate_and_property from "../screens/RealEstate_and_property";
import WebApplication from "../screens/webApplication";
import Ecommerse from "../screens/ecommerse";
import EcommerseDevelopment from "../screens/ecommerseDevelopment";

import DigitalMarketing from "../screens/digitalMarketing";
import Devops from "../screens/Devops";
import OutSourcing from "../screens/OutSource";
import Finance from "../screens/finance";
import WebDevelopment from "../screens/webDevelopment";
import Automotive from "../screens/automotive";
import Media from "../screens/media";
import Businessdevlopment from "../screens/businessdevlopment";
import Education_hr from "../screens/education-hr";
import Health_care from "../screens/health-care";
import Sports from "../screens/sports";
import Travel from "../screens/travel";
import About_us from "../screens/About_us";
import Contact from "../screens/contact";
import Case_study from "../screens/case_study";
import Privacy_Policy from "../screens/Privacy_Policy";
import Terms_condition from "../screens/Terms_condition";
import ScrollTop from "../Components/Scrolltop/ScrollTop";
import Branding from "../screens/branding";
import BookPublication from "../screens/book-publication";
const Router = () => {
  return (
    <BrowserRouter basename="/">
      <ScrollTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study" element={<Case_study />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/terms-conditions" element={<Terms_condition />} />
        {/* Services Pages */}
        <Route path="/app-store" element={<App_store />}></Route>
        <Route path="/branding" element={<Branding />}></Route>
        <Route path="/book-publication" element={<BookPublication />}></Route>
        <Route
          path="/business-devlopment"
          element={<Businessdevlopment />}
        ></Route>
        <Route path="/Devops" element={<Devops />}></Route>
        <Route path="/digital-marketing" element={<DigitalMarketing />}></Route>
        <Route
          path="/ecommerse-development"
          element={<EcommerseDevelopment />}
        ></Route>
        <Route path="/mobile-app" element={<MobileApp />}>
          {" "}
        </Route>
        <Route path="/MobileApp" element={<MobileApp />}>
          {" "}
        </Route>
        <Route path="/out-sourcing" element={<OutSourcing />}></Route>
        <Route path="/web-application" element={<WebApplication />}></Route>
        <Route path="/web-Development" element={<WebDevelopment />}></Route>
        {/* Industries Pages */}
        <Route path="/automotive" element={<Automotive />}></Route>
        <Route path="/ecommerse" element={<Ecommerse />}></Route>
        <Route path="/education-hr" element={<Education_hr />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/health-care" element={<Health_care />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route
          path="/realEstate-and-property"
          element={<RealEstate_and_property />}
        ></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
        {/* <Route path="/Blogs" "Blogs"} /> */}
        Blogs
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
