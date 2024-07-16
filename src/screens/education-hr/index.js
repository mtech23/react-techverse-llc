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
import eduhrimg2 from '../../asserts/images/edu-hr-img-2.png'
import eduhrimg2gif from '../../asserts/images/edu-hr-img-2.gif'
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
import ecomemrsescreen1 from "../../asserts/images/ecomemrse-screen1.png";
import ecomemrsescreen2 from "../../asserts/images/ecomemrse-screen2.png";
import ecomemrsescreen3 from "../../asserts/images/ecomemrse-screen3.png";
import ecomemrsescreen4 from "../../asserts/images/ecomemrse-screen4.png";
import ecomemrsescreen5 from "../../asserts/images/ecomemrse-screen5.png";
import mobileframe from "../../asserts/images/mobile-frame.webp";
import jeffwilson from "../../asserts/images/jeff-wilson.png";
import carbuying from "../../asserts/images/car-buying.png";
import lllreptile from "../../asserts/images/lll-reptile.png";
import privateastrology from "../../asserts/images/private-astrology.png";
import Macbook from "../../asserts/images/Macbook.png";
import eduhrportfolio1 from "../../asserts/images/edu-hr-portfolio-1.png";
import eduhrportfolio2 from "../../asserts/images/edu-hr-portfolio-2.png";
import eduhrportfolio3 from "../../asserts/images/edu-hr-portfolio-3.png";
import eduhrportfolio4 from "../../asserts/images/edu-hr-portfolio-4.png";
import eduhrportfolio5 from "../../asserts/images/edu-hr-portfolio-5.png";
import neweduhrimg1 from "../../asserts/images/new-edu-hr-img-1.png";
import eduhrimg3 from "../../asserts/images/edu-hr-img-3.png";


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
import App_store from '../App_store';
import App_development_solutions from '../../Components/App_development_solutions';
import Development_Process from '../../Components/Development_Process';
import Portfolios from '../../Components/portfolios';
import Driving_Exprience from '../../Components/Driving_experience';
import Testimonials from '../../Components/Tetimonials';
import { Helmet } from 'react-helmet';
gsap.registerPlugin(MotionPathPlugin);
const Education_hr = () => {


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

      <Helmet>
        <meta charSet="utf-8" />
        <title>Records Become More Accurate with Our Education & HR Apps  </title>
        <meta name="echverse LLC brings data accuracy for every academic record with education & HR educational app development. Contact us today for details!  " />
      </Helmet>



      <HeroSection
        classheroimage={"inner-educationHR-bgColor"}
        title={"Transforming"}
        subtitle={"HR And Education"}
        title2={"Systems With Techverse"}
        tagline={"In today's digital era, Techverse LLC specializes in transforming education and HR sectors through cutting-edge technology. We improve operational efficiency, engagement, and effectiveness to help you lead in your industry."}
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


      <Portfolio title="
What Sets Us"

// title2=" Us?"
        subtitle="Apart?"
         classtitle="color-darkBlue"
        para="We excel in digital solutions designed for the Education and HR sectors, leveraging deep industry expertise to deliver strategies that meet unique challenges and goals. Stay compliant and effective with our targeted campaigns, ensuring your organization stays ahead.

"


    
        // image={eduhrimg1}
        eduHR={"new_edu_HR_img"}
        image={neweduhrimg1}
        playstore={playstore}
        appstore={appstore}
        phoneicon={phoneicon}
        chaticon={chaticon}
        pinkcapsol={pinkCapsol}
        greencube={greenCube}
        donatorange={donatorange}
      />
        {/* <!-- App Development Sec --> */}
        <App_development_solutions 
      title="Techverse Builds Apps To Fit Your"
      subtitle="Business Needs. "
      // title2="That Exceed Expectations "
      para="Use Techverse LLC's extensive app development services to grow your company. With our customized solutions, you may improve engagement, streamline operations, and enter new markets."
      para1="Gain actionable insights into performance and user behavior with advanced analytics and reporting tools. Drive informed decisions, optimize strategies, and achieve growth and efficiency in your operations."
      para2="We create intuitive interfaces that enhance user experience and drive engagement. 
      Our designs blend aesthetics with functionality, ensuring seamless navigation and boosting user satisfaction across educational and HR platforms."
      para3=" From initial concept to deployment, our developers craft scalable and secure apps designed to meet the unique demands of the education and HR sectors. Harness the latest technologies to achieve your organizational goals effectively and efficiently."
      
      para4="Ensure reliability and security through rigorous testing across platforms. Our QA processes guarantee flawless performance, maintaining high standards of functionality and user satisfaction in educational and HR app deployments."
      
      
      />

      <Development_Process title=" App Development Process At " subtitle="TECHVERSE LLC" 
      // title2="Mobile App Development Process"
        para="Follow our streamlined approach to ensure customer satisfaction with customized real estate mobile app development solutions:"
        image={eduhrimg2gif}
        para1="Conduct comprehensive analysis to understand project objectives, target audience, and market trends for effective planning and strategy alignment."
        para2="Expertly craft intuitive UI/UX interfaces and develop robust solutions that meet industry standards and exceed user expectations."
        para3="Implement rigorous testing protocols to ensure app stability, security, and adherence to quality standards, guaranteeing a seamless user experience."
        para4="Facilitate smooth app rollout across multiple platforms and provide ongoing support to optimize performance and meet evolving user needs."
         quality="Quality Assurance"
        
        
        />

      <Portfolios
        title="EDUCATION & HR"
        subtitle="Portfolio"
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"


        image1={eduhrportfolio1}
        image2={eduhrportfolio2}
        image3={ecomemrsescreen3}
        image4={ecomemrsescreen4}
        image5={ecomemrsescreen5}
        image6={mobileframe}
        image7={carbuying}
        image8={lllreptile}
        image9={jeffwilson}
        image10={privateastrology}
        image11={Macbook}
        classmobileapp="nav-link"
        classwebsite="nav-link"
    
       
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
   
   
      />



      <Driving_Exprience titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title="Why Choose Our  "
        subtitle="  Ecommerce App "
        title2=" Development Service"
        image={eduhrimg3}
        hrimg={"eduHR-img3"}
        h1="Industry Expertise"
        h2="  Customized Solutions"
        h3="User-Centric Design"
        h4="Scalable Architecture
" h5="Compliance Assurance
"
h6="Robust Security
"
h7="Ongoing Support
"
h8="Innovative Technologies
"
      />





      <TechnologiesUse />
      <Testimonials />






      <Frequentlyaskquestion />
    </UserLayout>
  )
}
export default Education_hr