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
import healthcareportfolio1 from '../../asserts/images/health-care-portfolio1.png';
import healthcareportfolio2 from '../../asserts/images/health-care-portfolio2.png';
import healthcareportfolio3 from '../../asserts/images/health-care-portfolio3.png';
import healthcareportfolio4 from '../../asserts/images/health-care-portfolio4.png';
import healthcareportfolio5 from '../../asserts/images/health-care-portfolio5.png';
import mobileframe from "../../asserts/images/mobile-frame.webp";
import jeffwilson from "../../asserts/images/jeff-wilson.png";
import carbuying from "../../asserts/images/car-buying.png";
import lllreptile from "../../asserts/images/lll-reptile.png";
import privateastrology from "../../asserts/images/private-astrology.png";
import Macbook from "../../asserts/images/Macbook.png";
import eduhrportfolio1 from "../../asserts/images/edu-hr-portfolio-1.png";
import App_store from '../App_store';
import App_development_solutions from '../../Components/App_development_solutions';
import Development_Process from '../../Components/Development_Process';
import Portfolios from '../../Components/portfolios';
import Driving_Exprience from '../../Components/Driving_experience';
import Testimonials from '../../Components/Tetimonials';
import { Helmet } from 'react-helmet';
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

      <Helmet>
        <meta charSet="utf-8" />
        <title>Techverse LLC Health and Life Sciences Software Solutions  </title>
        <meta name="Seamless healthcare Apps that can support medical centers & pharmacies. Techverse LLC offers health and life sciences software applications. " />
      </Helmet>


      <HeroSection
        classheroimage={"inner-health-bgColor"}
        title={"Techverse Optimizes"}
        subtitle={"Healthcare"}
        title2={"Delivery For Patients & Professionals."}
        tagline={"Techverse empowers both patients and healthcare professionals through innovative mobile applications. Our secure and user-friendly apps streamline workflows, improve patient interaction, and guarantee adherence to healthcare regulations. We craft specialized solutions that boost patient outcomes and optimize healthcare delivery, all while prioritizing strong data security measures. Partner with Techverse to revolutionize the way healthcare is delivered."}
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


      <Portfolio title="From Patient Engagement To Research, Techverse Develops"
        classtitle="color-darkBlue"
        newClass="health-care-abt1"
        // title2=" Entertainment Industry"
        subtitle="Healthcare Solutions"
        para="Techverse is an expert in creating all-inclusive medical solutions. Our customized apps improve patient care, speed up procedures, and guarantee that industry norms are followed. By emphasizing efficiency and creativity, we enable healthcare providers to provide better services and increase patient outcomes.

"


        image={healthcareimg1}

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
      title="Techverse Offer Secure And Effective"
      subtitle="Healthcare Apps"
      // title2="That Exceed Expectations "
      para="At Techverse LLC, we're experts at developing innovative healthcare applications that improve workflows, improve patient outcomes, and guarantee regulatory compliance in that sector.
       Join forces with us to create cutting-edge mobile apps."
      para1="Utilize advanced analytics to interpret healthcare data, enabling informed decision-making and strategic planning for healthcare providers and administrators."
      para2="Craft user-centric interfaces that optimize usability and accessibility, enhancing engagement and satisfaction among healthcare professionals and patients."
      para3="Create scalable and innovative healthcare applications designed to improve patient care delivery, operational efficiency, and healthcare service management.
      "
      para4="Implement comprehensive testing strategies to validate the functionality, security, and regulatory compliance of healthcare apps, ensuring reliability and user safety."
      
      
      />

      <Development_Process title2=" On The Move Techverse Apps Empower Professional Patients " subtitle= "Healthcare "  
        para="Techverse apps empower healthcare professionals and patients with innovative solutions. From increased patient care to streamlined operations, our apps ensure mobility and efficiency in delivering healthcare services.

"
        image={healthcareimg2} 
        sportsclass={"health-care-img-2"}
        para1="Conduct in-depth evaluations to align healthcare app development with organizational strategies and user requirements, ensuring solutions that effectively address industry challenges and boost operational workflows."
        para2="Leveraging the latest technological advancements, create innovative interfaces and robust healthcare solutions designed to optimize patient interaction and streamline administrative processes."
        para3="Implement stringent testing protocols to validate the functionality, security, and regulatory compliance of healthcare apps, ensuring seamless performance and user satisfaction."
        para4="Facilitate smooth app deployment and provide ongoing maintenance and updates to ensure optimal performance, security, and scalability, effectively meeting evolving healthcare needs."
 quality="Quality Assurance"




        />

      <Portfolios
        title=" HEALTH & LIFE SCIENCE "
        subtitle="PORTFOLIO"
        para="Our Health & Life Science portfolio showcases innovative mobile apps and responsive websites that improve healthcare delivery, patient engagement, and operational efficiency worldwide.

"

        Mobile_Apps="Mobile Apps"
        Websites="Websites"
        classmobileapp="nav-link"
        classwebsite="nav-link"
        
        image1={healthcareportfolio1}
        image2={healthcareportfolio2}
        image3={healthcareportfolio3}
        image4={healthcareportfolio4}
        image5={healthcareportfolio5}
        image6={mobileframe}
        image7={carbuying}
        image8={lllreptile}
        image9={jeffwilson}
        image10={privateastrology}
        image11={Macbook}

      />



      <Driving_Exprience titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title="Why Choose Our  "
        subtitle="    Media & Entertainment "
        title2="    App Development Service"
        image={healthcareimg3}


        h1="Advanced Research Capabilities"
        h2="Streamlined Clinical Workflows"
        h3="Interoperability Solutions"
        h4="Telehealth Integration"
        h5="Compliance with Emerging Technologies"
        h6="Personalized Medicine Initiatives"
        h7="Continuous Support and Maintenance"
        h8="Data Privacy Assurance"


      />





      <TechnologiesUse />
      <Testimonials />






      <Frequentlyaskquestion />
    </UserLayout>
  )
}
export default Health_care