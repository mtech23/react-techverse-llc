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
import {Helmet} from 'react-helmet'
const RealEstate_and_property = () => {


  Aos.init();




  return (
    <UserLayout>

      <Helmet>
        <meta charSet="utf-8" />
        <title> Software Solutions Development for Real Estate & Property  </title>
        <meta name="Real Estate & Property services obligatory expert software to perform actions efficiently. Techverse LLC custom-built Real Estate Solutions. " />
      </Helmet>
      {/* <!-- Inner Hero --> */}

      <HeroSection
        classheroimage={"inner-realEstate-bgColor"}
        title={"Revolutionize Your Real Estate Strategy"}
        subtitle={"With"}

        title2={"  Cutting-Edge Tech "}
        tagline={" Use Techverse LLC's advanced digital technologies to transform your real estate strategy. We revolutionize client connections and operational efficiency with our user-friendly property management applications and captivating virtual tours. Our cutting-edge solutions increase client engagement, streamline transactions, and improve listing exposure. Whether you work as a property manager, developer, or realtor, you can rely on us to improve your online visibility and spur business in the cutthroat real estate sector. Join together with Techverse LLC to get revolutionary solutions customized to your sector's requirements. "}
        // heroimage={webapplicationhero}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Us",
          secondaryButtonClass: "btn_with_icon btn_secondary  "

          // playstore: playstore,
          // appstore: appstore
        }}
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
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Us",
          secondaryButtonClass: "btn_with_icon btn_secondary  "

          // playstore: playstore,
          // appstore: appstore
        }}
        // title2="Client Engagement "
        title="Techverse Powers Your Operations & " subtitle="  Client Engagement "
        para="Together with us, create an innovative route to real estate success. Techverse LLC provides cutting-edge digital solutions designed specifically for real estate agents. With state-of-the-art technology and knowledge, we enable you to maximize operations, improve client engagement, and accomplish your business objectives—from efficient property administration to exciting virtual tours. "
        image={realestateimg1}

      />




      {/* <!-- App Development Sec --> */}
      <App_development_solutions />

      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        image={realestateimg2}
        title="Quality From Start To Finish Techverse Builds Reliable"
        subtitle="Custom Mobile Apps."
        // title2="Custom Mobile Apps."
        para="From conception to implementation, we follow a thorough approach that includes careful planning, creative design, agile development, stringent testing, and smooth implementation. Delivering reliable, user-focused mobile solutions that go above and beyond for clients is our mission. "
      />




      <Portfolios
        title="REAL ESTATE "
        subtitle="Portfolio   "
        para="Explore our diverse portfolio, which showcases innovative digital solutions for real estate, including property management apps, virtual tours, and client engagement tools. This demonstrates our expertise in transforming the real estate industry."
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


        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />


      <Driving_Exprience

        titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title=" What Makes Our "
        subtitle=" Real Estate "
        title2=" Mobile App Development Stand Out? "
        image={realestateimg}
        hrimg="mobile-app-22"

      />


      <TechnologiesUse />

      <Testimonials />







      <Frequentlyaskquestion />



    </UserLayout>
  )
}
export default RealEstate_and_property
