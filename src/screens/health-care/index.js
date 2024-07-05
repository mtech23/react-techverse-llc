import React, { useEffect } from 'react';
import './style.css'
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import TrustPartners from '../../Components/TrustedPartners'
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import clutch from "../../asserts/images/clutch.png";
import ecommersdoubleScreens from '../../asserts/images/ecommers-doubleScreens.png'
import TrustedPartners from '../../Components/TrustedPartners'
import ecommersedesktopimg from '../../asserts/images/ecommerse-desktop-img.png'
import eduhrimg1 from '../../asserts/images/edu-hr-img-1.png'
import truspilot from "../../asserts/images/trus-pilot.png";
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
import ecommerce from '../../asserts/images/ecommerse-gif.gif'
import androidiconw from "../../asserts/images/android-icon-w.png";
import angularicon from "../../asserts/images/angular-icon.png";
import appleicon from "../../asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";
import HeroSection from '../../Components/herosection/index'
import fluttericon from "../../asserts/images/flutter-icon.png";
import tpblue from "../../asserts/images/t-p-blue.png";
import tpblack from "../../asserts/images/t-p-black.png";
import ecommerceabout1 from "../../asserts/images/ecommerce-about-1.png";
import reacticon from "../../../src/asserts/images/react-icon.png";
import donateWhite from "../../asserts/images/donate-white.png";
import peramidicon from "../../asserts/images/peramid-icon.png";

import peramidleftangles from '../../asserts/images/peramid-left-angles.png';
import orangehalfcircle from "../../asserts/images/orange-half-circle.png";
import processicon1 from '../../asserts/images/process-icon-1.png'
import arrowicon from '../../asserts/images/arrow-icon.png'
import processicon2 from '../../asserts/images/process-icon-2.png'
import processicon3 from '../../asserts/images/process-icon-3.png'
import processicon4 from '../../asserts/images/process-icon-4.png'
import processicon5 from '../../asserts/images/process-icon-5.png'
import processicon6 from '../../asserts/images/process-icon-6.png'
import Ctnbutton from '../../Components/ctnbutton'
import Aboutsection from '../../Components/aboutsection';
import Aos from "aos";
import 'swiper/css';
import Website from '../../Components/Website';
import TechnologiesUse from '../../Components/technologiesuse';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
import Portfolio from '../../Components/Portfolio';
import { playstore } from '../../asserts/images';
import appstore from '../../asserts/images/app-store.png';
import healthcareimg1 from '../../asserts/images/health-care-img1.png';
import healthcareimg2 from '../../asserts/images/health-care-img2.png';
import healthcareimg3 from '../../asserts/images/health-care-img3.png';
 
import App_store from '../App_store';
import App_development_solutions from '../../Components/App_development_solutions';
import Development_Process from '../../Components/Development_Process';
import Portfolios from '../../Components/portfolios';
import Driving_Exprience from '../../Components/Driving_experience';
import Testimonials from '../../Components/Tetimonials';
gsap.registerPlugin(MotionPathPlugin);
const Health_care = () => {


  Aos.init();


  useEffect(() => {
    gsap.set(".road", { opacity: 1 });
    const circles = gsap.utils.toArray(".ani_cnt .icc");
    const tl2 = gsap.timeline({ repeat: 20 });

    circles.forEach((circle, i) => {
      let start = i / circles.length; // secret sauce for circles
      tl2.to(
        circle,
        {
          motionPath: {
            path: ".mypath",
            align: ".mypath",
            alignOrigin: [0.5, 0.4],
            start: start,
            end: start + 1,
          },
          ease: "none",
          duration: 40,
        },
        0
      );
    });
  }, []);

  return (
    <UserLayout>




      <HeroSection
        classheroimage={"inner-health-bgColor"}
        title={"Premium "}
        subtitle={"Mobile App "}
        title2={"Development Solutions For Healthcare Agencies"}
        tagline={"Enhance patient care and optimize operations with our state-of-the-art healthcare mobile apps."}
        className={"ecommerceDev_hero_img"}


        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          playstore: playstore,
          appstore: appstore
        }}



      // secondaryButtonClass="btn_with_icon btn_secondary"
      />



      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />


      <Portfolio title="Perfectly Curated Mobile Applications For The  "

// title2=" Entertainment Industry"
        subtitle="Entertainment Industry "
        para="We specialize in digital marketing for the Education and HR sectors, leveraging our deep industry expertise to deliver tailored strategies that address the unique challenges and opportunities of these fields. Our team stays ahead of trends and regulations to ensure compliance and effectiveness, creating customized campaigns that resonate with your target audience.

"


        image={healthcareimg1}

        playstore={playstore}
        appstore={appstore}
      />
      <App_development_solutions />

      <Development_Process title="App Development For The " subtitle="  Entertainment Industry"  
        para="We follow a streamlined approach to ensure customer satisfaction by delivering customized real estate mobile app development solutions.

"
        image={healthcareimg2} />

      <Portfolios
        title="HEALTH & LIFE SCIENCE "
        subtitle="PORTFOLIO"
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:

"

        Mobile_Apps="Mobile Apps"
        Websites="Websites"
        classmobileapp="nav-link"
        classwebsite="nav-link"
      />



      <Driving_Exprience titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title="Why Choose Our  "
        subtitle="    Media & Entertainment "
        title2="    App Development Service"
        image={healthcareimg3} />





      <TechnologiesUse />
      <Testimonials />






      <Frequentlyaskquestion />
    </UserLayout>
  )
}
export default Health_care