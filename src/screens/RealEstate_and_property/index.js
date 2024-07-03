import React from 'react';
import './style.css'
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";

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
const RealEstate_and_property = () => {


  Aos.init();




  return (
    <UserLayout>


      {/* <!-- Inner Hero --> */}

      <HeroSection
        classheroimage={"inner-realEstate-bgColor"}
        title={"Full-Fledged"}
        subtitle={"App Store  "}

        title2={"Optimization Services"}
        tagline={"Take the charge and unleash your business's true potential with powerful mobile app & web application development solutions."}
      // heroimage={webapplicationhero}

      />
      {/* TrustedPartners */}
      <TrustedPartners />
      {/* ecommerce section */}
      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title2="Business"
        title="Enhance The Operational Efficiency Of Your" subtitle=" Real Estate  "
        para=" We are a leading real estate mobile app development service provider. Our team of skilled professionals is dedicated to helping real estate businesses scale and achieve their goals by leveraging the latest technologies and industry best practices."
        image={realestateimg1}
        chaticon={chaticon}
        phoneicon={phoneicon}
        calltext={"Call Now"}
        chatenow={"Chat Now"}
      />




      {/* <!-- App Development Sec --> */}
      <App_development_solutions />

      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        image={realestateimg2}
        title="Our "
        subtitle="Real Estate"
        para="The most commonly used eCommerce platform is ideal for businesses of all sizes.

"
        title2="   Mobile App Development Process" />








      <Portfolios
        title="REAL ESTATE "
        subtitle="Portfolio   "
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"
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
        classmobileapp="nav-link"
        classwebsite="nav-link"
        classcms="nav-link"
        CMS="CMS"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />





      <Portfolio pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}

        title="  A Web Application Development Portfolio" subtitle="without bounds."

        para="We have perfected the art of creating custom-made web applications that meet the specific needs of our clients. Whether it's a simple content management system or a complex e-commerce platform, Techverse has the skills and experience to get the job done right."

        image={digitalmarketing01}
        chaticon={chaticon}
        phoneicon={phoneicon}
        webaboutimg1={webaboutimg1} />
      <Elevateyourbusiness />
      <Testimonials />

      <Website />


      <Testimonials />


      <Frequentlyaskquestion />



    </UserLayout>
  )
}
export default RealEstate_and_property
