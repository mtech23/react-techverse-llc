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
import website1 from "../../asserts/images/website-1.png";
import website2 from "../../asserts/images/website-2.png";
import website3 from "../../asserts/images/website-3.png";
import website4 from "../../asserts/images/website-4.png";
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
import Testimonials from '../../Components/Testimonials';
import Portfolios from '../../Components/portfolios';
import App_development_solutions from '../../Components/App_development_solutions';
import Development_Process from '../../Components/Development_Process';
import Driving_Exprience from '../../Components/Driving_experience';
import Ctnbutton from '../../Components/ctnbutton'
import { playstore } from '../../asserts/images';
import appstore from '../../asserts/images/app-store.png';
import { Helmet } from 'react-helmet'
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
        title={"From Budgets To Boost Business Techverse Apps Power Up"}
        subtitle={"Financial    "}
        title2="Services"
        tagline={"From optimizing budgets to catalyzing business growth, Techverse apps empower financial services with cutting-edge solutions. Our applications improve efficiency, ensure compliance, and improve customer experiences. We integrate advanced analytics, secure transactions, and scalable architectures to meet the dynamic needs of modern finance. Trust Techverse for innovative fintech solutions that drive profitability and operational excellence."}
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
        subtitle="  Financial"

        title="Increasing Client Engagement And"
        title2="Management With Techverse Solutions"
        para="Techverse products improve customer satisfaction and simplify financial management procedures. Our revolutionary options enhance client interactions and use cutting-edge analytics for well-informed decision-making. We guarantee data integrity and regulatory compliance via scalable systems and robust security mechanisms. Put your trust in Techverse to develop the financial services industry sustainably, increase customer satisfaction, and streamline financial operations."

        image={financeimg1}
        chaticon={chaticon}
        phoneicon={phoneicon}
        playstore={playstore}
        appstore={appstore}

      />

















      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Secure And Efficient"
        subtitle="Financial"
        title2="Apps By Techverse"
        para="At Techverse LLC, we excel in creating innovative applications that improve workflows, boost client outcomes, and ensure regulatory compliance within the financial industry. 
      Partner with us to develop advanced mobile apps designed to your needs."
        para1="Utilize advanced data analytics to provide actionable insights, enhancing financial decision-making processes."
        para2="Create user-centric interfaces that optimize usability and engagement, improving the overall experience for financial professionals and clients."
        para3="Build customized finance applications that streamline operations and boost service delivery efficiency.
      "
        para4="Conduct comprehensive quality assurance processes to ensure robustness, security, and compliance with financial regulations, guaranteeing seamless performance across platforms."


      />




      {/* <!-- App Development Sec --> */}


      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        image={financeimg2}
        sportsclass={"finance-img2 "}
        title="Techverse Paves The Way For A Connected"
        subtitle=" Financial Future "
        para="Techverse LLC's app development for the financial sector focuses on creating scalable, secure applications designed for the unique needs of clients and financial professionals. We integrate cutting-edge technology into our solutions to boost operational efficiency and service delivery."
        para1="We conduct comprehensive analyses to align financial app development with organizational goals and client needs, ensuring effective solutions from start to finish."
        para2="Our team designs intuitive interfaces and develops robust financial solutions, leveraging advanced technologies to boost client services and operational efficiency."
        para3="We implement thorough testing to ensure our financial apps meet the highest standards for security, performance, and regulatory compliance and provide reliable and safe user experiences.

"
        para4="We manage seamless deployment and offer ongoing maintenance to ensure financial apps remain secure, efficient, and adaptable to changing demands."
        quality="Quality Assurance"
      />





      <Portfolios
        title="FINANCE APP DEVELOPMENT"
        subtitle="PORTFOLIO   "
        para="Our Finance App Development portfolio showcases innovative mobile apps and responsive websites that improve financial service delivery, client engagement, and operational efficiency worldwide.

"
        image1={financeportfolio1}
        image2={financeportfolio2}
        image3={financeportfolio3}
        image4={financeportfolio4}
        image5={financeportfolio5}
        image6={mobileframe}
        image7={website1}
        image8={website2}
        image9={website3}
        image10={website4}
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
