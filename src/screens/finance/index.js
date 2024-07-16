import React from 'react';
import './style.css'
import drivingsecsecreen from '../../asserts/images/driving-sec-secreen.png'
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import financeimg1 from '../../asserts/images/finance-img1.gif'
import financeimg3 from '../../asserts/images/finance-img3.png'
import realEstateportfolioimg1 from '../../asserts/images/realEstate-portfolio-img1.png'
import realEstateportfolioimg2 from '../../asserts/images/realEstate-portfolio-img2.png'
import realEstateportfolioimg3 from '../../asserts/images/realEstate-portfolio-img3.png'
import realEstateportfolioimg4 from '../../asserts/images/realEstate-portfolio-img4.png'
import realEstateportfolioimg5 from '../../asserts/images/realEstate-portfolio-img5.png'
import mobileframe from '../../asserts/images/mobile-frame.webp'
import carbuying from '../../asserts/images/car-buying.png'
import jeffwilson from '../../asserts/images/jeff-wilson.png'
import lllreptile from '../../asserts/images/lll-reptile.png'
import privateastrology from '../../asserts/images/private-astrology.png'
import Macbook from '../../asserts/images/Macbook.png'
import financeimg2 from '../../asserts/images/finance-img2.png'

import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import devandmaintenenceicon from '../../asserts/images/dev-and-maintenence-icon.png'
import qualityicon from '../../asserts/images/quality-icon.png'
import designanddevicon from '../../asserts/images/design-and-dev-icon.png'
import businessanalysisicon from '../../asserts/images/business-analysis-icon.png'
import realestateimg2 from '../../asserts/images/real-estate-img2.gif'
import Website from '../../Components/Website';
import Aboutsection from '../../Components/aboutsection';
import webapplicationhero from '../../asserts/images/web-application-hero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import realestateimg1 from '../../asserts/images/real-estate-img1.png'
import pinkcapsolgtom from '../../asserts/images/pink-capsol.png'

import Portfolio from '../../Components/Portfolio'
import webaboutimg1 from "../../asserts/images/web-about-img1.png";
import clutch from "../../asserts/images/clutch.png";
import TrustedPartners from '../../Components/TrustedPartners'
import truspilot from "../../asserts/images/trus-pilot.png";
import digitalmarketing01 from '../../asserts/images/digital-marketing-01.png'

import donatorange from "../../asserts/images/donat-orange.png";
import greencube from "../../asserts/images/green-cube.png";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import Pill from "../../asserts/images/Pill.png";
import bbb from "../../asserts/images/bbb.png";
import donatblue from "../../asserts/images/donat-blue.png";

import ConeBlueGlossy from "../../asserts/images/Cone-Blue-Glossy.png";
import PillBlueGlossy from "../../asserts/images/Pill-Blue-Glossy.png";
import greenCube from "../../asserts/images/green-cube.png";
import pinkCapsol from "../../asserts/images/pink-capsol.png";
// import donatorange from "../../asserts/images/donat-orange.png";
import ecommerceimg01 from "../../asserts/images/ecommerce-img-01.png";
import androidiconw from "../../asserts/images/android-icon-w.png";
import angularicon from "../../asserts/images/angular-icon.png";
import appleicon from "../../asserts/images/apple-icon.png";
import ecommersedevhero from "../../asserts/images/ecommersedevhero.png";
import HeroSection from '../../Components/herosection/index'
import fluttericon from "../../asserts/images/flutter-icon.png";
import reacticon from "../../asserts/images/react-icon.png";
import financeportfolio1 from "../../asserts/images/finance-portfolio-1.png";
import financeportfolio2 from "../../asserts/images/finance-portfolio-2.png";
import financeportfolio3 from "../../asserts/images/finance-portfolio-3.png";
import financeportfolio4 from "../../asserts/images/finance-portfolio-4.png";
import financeportfolio5 from "../../asserts/images/finance-portfolio-5.png";


import Aos from "aos";
import 'swiper/css';
import TechnologiesUse from '../../Components/technologiesuse';
import Process from '../../Components/Process';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
import Testimonials from '../../Components/Tetimonials';
import Portfolios from '../../Components/portfolios';
import App_development_solutions from '../../Components/App_development_solutions';
import Development_Process from '../../Components/Development_Process';
import Driving_Exprience from '../../Components/Driving_experience';
import Ctnbutton from '../../Components/ctnbutton'
import { playstore } from '../../asserts/images';
import appstore from '../../asserts/images/app-store.png';
import {Helmet} from 'react-helmet'
const Finance = () => {
  Aos.init();
  return (
    <UserLayout>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Financial Details Easy to Record with Our Finance Software  </title>
        <meta name="Finance software solutions with appropriate records beyond bookkeeping. The Fintech Software Developers at Techverse LLC are Professionals.  " />
      </Helmet>


      {/* <!-- Inner Hero --> */}

      <HeroSection


        CtnbuttonComponent={Ctnbutton}

        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          playstore: playstore,
          appstore: appstore
        }}


        classheroimage="finance-hero"
        title={" Transform Your Financial Future With Techverse LLC"}
        // subtitle={"App Store  "}

        tagline={"Discover the power of high-end technology with Techverse customized finance app solutions designed to transform the way you do business."}
      // heroimage={webapplicationhero}

      />
      {/* TrustedPartners */}
      <TrustedPartners />
      {/* ecommerce section */}


      {/* 
      <Portfolio pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}

        subtitle="Finance"
        title2="App Development Services"
        para="Techverse is a leading finance app development company based in the US, focused on providing cutting-edge mobile app development solutions to clients in the banking and financial industry. Our team is committed to delivering high-quality services tailored to our clients' needs.

"

        image={financeimg1}
        chaticon={chaticon}
        phoneicon={phoneicon}
        webaboutimg1={webaboutimg1} /> */}
      <Portfolio pinkcapsol={pinkcapsol}

        // classtitle={" color-white  "}

        newClass={"finance-abt1"}
        greencube={greencube}
        donatorange={donatorange}
        // classpara="color-white"
        classtitle={"financesubtitle"}
        subtitle="  Finance"
        title2="App Development Services"
        para="At Techverse LLC, we understand the unique dynamics and fast-paced nature of the media and entertainment industry. Our services of this niche, ensuring your brand stands out in a crowded market. Here's why Techverse LLC should be your go-to partner:"

        image={financeimg1}
        chaticon={chaticon}
        phoneicon={phoneicon}
        playstore={playstore}
        appstore={appstore}

      />

















      <App_development_solutions />




      {/* <!-- App Development Sec --> */}


      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        image={financeimg2}
        sportsclass={"finance-img2 "}
        title="App Development Process At"
        subtitle="TECHVERSE LLC  "
        para="We follow a streamlined approach to ensure customer satisfaction by delivering customized real estate mobile app development solutions."

      />





      <Portfolios
        title="EDUCATION   "
        subtitle="PORTFOLIO   "
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:

"
        image1={financeportfolio1}
        image2={financeportfolio2}
        image3={financeportfolio3}
        image4={financeportfolio4}
        image5={financeportfolio5}
        image6={mobileframe}
        image7={carbuying}
        image8={jeffwilson}
        image9={lllreptile}
        image10={privateastrology}
        image11={Macbook}
        classmobileapp="nav-link"
        classwebsite="nav-link"

        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />




      <Driving_Exprience
        titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title="    Feel The Power Of Innovative  "
        subtitle="    Finance Apps   "
        title2="    With Techverse LLC"
        image={financeimg3}
        hrimg={"finance-img3"}
      
      
      
      
      
      
      h1="Fast financial transactions."
      h2="Risk management"
      h3="Seamless system integration"
      h4="Personalized user interfaces"
      h5="Advanced security measures"
      h6="Regulatory compliance ensured"
      h7="Mobile accessibility is guaranteed"
      h8="Automated task efficiency"
      
      
      
      />



      <TechnologiesUse />

      <Testimonials />





      <Frequentlyaskquestion />



    </UserLayout>
  )
}
export default Finance
