import React from 'react';
import './style.css'
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import realestateimg from '../../asserts/images/realEstate-img-3.png'
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
import Ctnbutton from '../../Components/ctnbutton'
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
import cms1 from "../../asserts/images/Cms-1.png";
import cms2 from "../../asserts/images/CMS-2.png";
import cms3 from "../../asserts/images/CMS-3.png";


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
const RealEstate_and_property = () => {


  Aos.init();




  return (
    <UserLayout>


      {/* <!-- Inner Hero --> */}

      <HeroSection
        classheroimage={"inner-realEstate-bgColor"}
        title={"Revolutionary Digital Solutions"}
        subtitle={"For"}

        title2={"  Modern Real Estate"}
        tagline={"In today's dynamic real estate landscape, staying ahead requires more than traditional methods. At Techverse LLC, we redefine the digital frontier with innovative solutions tailored to the modern real estate industry. Our comprehensive digital marketing strategies empower real estate professionals to enhance visibility, attract qualified leads, and drive conversions effectively."}
      // heroimage={webapplicationhero}

      />
      {/* TrustedPartners */}
      <TrustedPartners />
      {/* ecommerce section */}
      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          chaticon: chaticon,
          chatenow: "Chat Now"
        }}
        title2="Real Estate Success With Us"
        title="Innovate Your Way" subtitle="   To  "
        para="At Techverse LLC, we understand the pivotal role technology plays in optimizing real estate operations. With our tailored digital marketing solutions, we empower your business to streamline processes, maximize productivity, and achieve unparalleled growth in the competitive real estate market."
        image={realestateimg1}

      />




      {/* <!-- App Development Sec --> */}
      <App_development_solutions />

      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        image={realestateimg2}
        title="Our Mobile App Development Process At "
        subtitle="Techverse LLC"
        para="At Techverse LLC, we follow a meticulous mobile app development process designed to deliver exceptional results tailored to your business needs. Our approach encompasses the following key stages:"
      />




      <Portfolios
        title="REAL ESTATE "
        subtitle="Portfolio   "
        para="We take pride in our diverse and dynamic Real Estate Portfolio, tailored to meet the needs of modern property investors and developers:"
        image1={realEstateportfolioimg1}
        image2={realEstateportfolioimg2}
        image3={realEstateportfolioimg3}
        image4={realEstateportfolioimg4}
        image5={realEstateportfolioimg5}
        image6={mobileframe}
        image7={carbuying}
        image8={jeffwilson}
        image9={lllreptile}
        image10={privateastrology}
        image11={Macbook}
        image12={cms1}
        image13={cms2}
        image14={cms3}
        classmobileapp="nav-link"
        classwebsite="nav-link"
        classcms="nav-link"
        CMS="CMS"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />


      <Driving_Exprience
 
        titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title="Why Choose Our  "
        subtitle="  Real Estate"
        title2="     Mobile App Development"
        image={realestateimg}

      />


      <TechnologiesUse />

      <Testimonials />







      <Frequentlyaskquestion />



    </UserLayout>
  )
}
export default RealEstate_and_property
