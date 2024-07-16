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
import App_store from '../App_store';
import App_development_solutions from '../../Components/App_development_solutions';
import Development_Process from '../../Components/Development_Process';
import Portfolios from '../../Components/portfolios';
import Driving_Exprience from '../../Components/Driving_experience';
import Testimonials from '../../Components/Tetimonials';
import { Helmet } from 'react-helmet'
gsap.registerPlugin(MotionPathPlugin);
const Ecommerse = () => {


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
        <title> E-Commerce & Retails Record Control System at Techverse LLC  </title>
        <meta name="Our skilled team revolutionized Apps for retail like never before, Techverse LLC for E-Commerce & Retails application software development. " />
      </Helmet>

      <HeroSection
        classheroimage={"inner-ecommerce-bgColor"}
        title={"Techverse"}
        subtitle={"E-Commerce"}
        title2={"Apps Reimagine Customer Journeys, Reignite Sales"}
        tagline={"Our method of developing apps redefines customer interaction and operational effectiveness in the competitive world of e-commerce. Modern features are included for secure transactions, smooth browsing, and customized shopping experiences. Our robust systems guarantee scalability and use cutting-edge analytics to improve user retention and target marketing. We customize every program to achieve your company objectives, from solid backend solutions to appealing UI/UX design."}
        className={"ecommerceDev_hero_img"}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          playstore: playstore,
          appstore: appstore
        }}


      />



      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      {/* <!-- About Sec --> */}


      {/* <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}


        title="  Drive Profitability
" subtitle="With" title2="Our Seamless E-Commerce Solutions.
  "
        para="Our expert team customizes every aspect of your website, from intuitive user interfaces to robust backend systems, ensuring seamless functionality and enhanced customer experiences. Whether you're launching a new venture or upgrading an existing platform, trust Techverse LLC to deliver scalable, secure, and visually stunning E-Commerce websites that maximize conversions and propel your business forward in the digital age."

        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          chaticon: chaticon,
          chatenow: "Chat Now"
        }}

        image={ecommerceabout1}
      />
 */}

      <Portfolio title="Techverse Revolutionizes"

        classtitle="color-darkBlue"
        subtitle="Industries"
        title2="Through Digital Power"
        para="Techverse provides top-notch e-commerce mobile app development services for clients worldwide. We help your organization scale better, increase cash flow and retain customers."


        image={ecommerce}
        phoneicon={phoneicon}
        chaticon={chaticon}
        playstore={playstore}
        appstore={appstore}

      />





      <App_development_solutions />


      <Development_Process title="Our " subtitle="Real Estate" title2="Mobile App Development Process"
        para="We follow a streamlined approach to ensure customer satisfaction by delivering customized real estate mobile app development solutions."
        image={ecommersedesktopimg} />

      <Portfolios
        title="ECOMMERCE "
        subtitle="Portfolio"
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"

        Mobile_Apps="Mobile Apps"
        Websites="Websites"
        classmobileapp="nav-link"
        classwebsite="nav-link"
        image1={ecomemrsescreen1}
        image2={ecomemrsescreen2}
        image3={ecomemrsescreen3}
        image4={ecomemrsescreen4}
        image5={ecomemrsescreen5}
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
        subtitle="    Ecommerce App "
        title2="         Development Service
"
        image={ecommersdoubleScreens}


        h1="Expertise in UX/UI
"
        h2="Robust Security Measures
"
        h3="Scalable Solutions"
        h4="Increase Customer Engagement
"
        h5="Customized Features"
        h6="Seamless Integration "
h7="Proven Track Record
" h8="Ongoing Support
"



      />





      <TechnologiesUse />
      <Testimonials />






      <Frequentlyaskquestion />
    </UserLayout>
  )
}
export default Ecommerse