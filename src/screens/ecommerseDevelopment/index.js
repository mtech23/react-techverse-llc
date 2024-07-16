import React, { useEffect } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import { Helmet } from 'react-helmet'
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import TrustPartners from "../../Components/TrustedPartners";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import clutch from "../../asserts/images/clutch.png";
import ecommersdoubleScreens from "../../asserts/images/ecommers-doubleScreens.png";
import TrustedPartners from "../../Components/TrustedPartners";
import Process from "../../Components/Process";
import ecommersedesktopimg from "../../asserts/images/ecommerse-desktop-img.png";
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
import ecommerce from "../../asserts/images/ecommerse-gif.gif";
import androidiconw from "../../asserts/images/android-icon-w.png";
import angularicon from "../../asserts/images/angular-icon.png";
import appleicon from "../../asserts/images/apple-icon.png";
import ecommersedevhero from "../../../src/asserts/images/ecommersedevhero.png";
import HeroSection from "../../Components/herosection/index";
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
import peramidleftangles from "../../asserts/images/peramid-left-angles.png";
import orangehalfcircle from "../../asserts/images/orange-half-circle.png";
import processicon1 from "../../asserts/images/process-icon-1.png";
import arrowicon from "../../asserts/images/arrow-icon.png";
import processicon2 from "../../asserts/images/process-icon-2.png";
import processicon3 from "../../asserts/images/process-icon-3.png";
import processicon4 from "../../asserts/images/process-icon-4.png";
import processicon5 from "../../asserts/images/process-icon-5.png";
import processicon6 from "../../asserts/images/process-icon-6.png";
import Ctnbutton from "../../Components/ctnbutton";
import Aboutsection from "../../Components/aboutsection";
import Aos from "aos";
import "swiper/css";
import Website from "../../Components/Website";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import Portfolio from "../../Components/Portfolio";
import { playstore } from "../../asserts/images";
import appstore from "../../asserts/images/app-store.png";
import Ecommercedevelopmenthero from "../../asserts/images/Ecommerce-development-hero.png";

import App_store from "../App_store";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import Portfolios from "../../Components/portfolios";
import Driving_Exprience from "../../Components/Driving_experience";
import Testimonials from "../../Components/Testimonials";
gsap.registerPlugin(MotionPathPlugin);
const EcommerseDevelopment = () => {
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
        <title>eCommerce Development with Remarkable ROI at Techverse LLC   </title>
        <meta name=": Techverse LLC brings excellent eCommerce development services at a very affordable rate. A great option for startups with low-cost budgets.  " />
      </Helmet>
      <HeroSection
        innerbgclass={"inner-bgColor"}
        // classheroimage={"inner-ecommerce-bgColor"}
        title={"    Your Gateway"}
        subtitle={"To "}
        title2={"Powerful Online Retail Solutions"}
        tagline={
          "At Techverse LLC, we specialize in creating tailored E-Commerce Development solutions that empower businesses to thrive in the digital marketplace. Whether you're starting a new online store or aiming to enhance an existing platform, our squad of skilled developers and designers is devoted to delivering scalable, secure, and feature-rich solutions perfectly suited to your business."
        }
        className={"ecommerceDev_hero_img"}
        heroimage={Ecommercedevelopmenthero}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",
        }}
        classheroimage={Ecommercedevelopmenthero}
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

      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",

          // playstore: playstore,
          // appstore: appstore
        }}
        title="Drive Profitability"
        subtitle=" With "
        title2="Our Seamless E-Commerce Solutions.  "
        para="Our expert team customizes every aspect of your website, from intuitive user interfaces to robust backend systems, ensuring seamless functionality and enhanced customer experiences. Whether you're launching a new venture or upgrading an existing platform, trust Techverse LLC to deliver scalable, secure, and visually stunning E-Commerce websites that maximize conversions and propel your business forward in the digital age."
        image={ecommerceabout1}
        abtImgClass="ecom-dev-img-1"
      />

      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* <Development_Process title="Our " subtitle="Real Estate" title2="Mobile App Development Process"
        para="We follow a streamlined approach to ensure customer satisfaction by delivering customized real estate mobile app development solutions."
        image={ecommersedesktopimg}


      /> */}

      {/* <Portfolios
        title="ECOMMERCE "
        subtitle="Portfolio"
        para="Our Company has worked with thousands of businesses all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"
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
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
        classmobileapp="nav-link"
        classwebsite="nav-link"

      /> */}

      {/* Revamp Your Online Presence Section*/}
      <section class="techVerse_about techVerse_aboutServices2 hoverEffectSec">
        <div class="icon-container-hover">
        <img
          class="techVerse_about_icon1 animation11"
          src={pinkcapsol}
          alt=""
        />
        {/* <!-- <img
          class="techVerse_about_icon2 animation33"
          src="images/Pill.png"
          alt=""
        /> --> */}
        <img
          class="techVerse_about_icon3 animation11"
          src={greencube}
          alt=""
        />
        <img
          class="techVerse_about_icon4 animation11"
          src={donatorange}
          alt=""
        />
        </div>
        <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
          <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="sec_title buildStore_sec_title">
                      <h2
                        class="sec_title_head color-lightBlue2"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                      Revamp Your Online Presence  
                        <span class="color-darkBlue" > With </span> Creative E-Commerce Solutions
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                      we specialize in crafting dynamic e-commerce solutions tailored to increase your business. Whether you're starting from scratch or seeking to revamp your online presence, our expert team is here to build, optimize, and launch your e-store with precision and creativity. From seamless user experience design to robust backend development, trust us to transform your vision into a thriving online business. Hold the future of digital commerce with Techverse LLC – where innovation meets e-commerce excellence.
                      </p>
                    </div>
                  </div>
              <div class="col-md-6">
                  <div class="techVerse_about_img">
                    <div class="techVerse_about_laptop_img">
                      <img
                        src={ecommerceimg01}
                        class="build-store-img"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
              <div class="col-md-6">
                <div class="techVerse_about_content services-abbout2">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                    <span class="color-lightBlue2"> Shopify </span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                    Empower your online business with our Shopify E-Commerce Development services at Techverse LLC. We specialize in crafting tailored Shopify solutions that lift your digital storefront. From seamless integration of custom themes and apps to optimizing user experience and payment gateways, we make sure your Shopify store sets apart in the competitive e-commerce landscape. 
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                    <span class="color-lightBlue2"> WooCommerce </span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                    At Techverse LLC, we specialize in WooCommerce E-Commerce Development, providing you with a powerful platform tailored to your business needs. Our team excels in building scalable and customizable WooCommerce stores that maximize your online presence. From implementing responsive design and intuitive navigation to integrating essential plugins and ensuring secure payment gateways, we ensure your WooCommerce store is optimized for success. 
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                    <span class="color-lightBlue2"> Magento </span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                    Transform your online business with Techverse LLC's Magento E-Commerce Development services. As Magento specialists, we offer comprehensive solutions to create high-performing e-commerce stores that drive growth and profitability. Our expertise spans from custom Magento theme development and extension integration to optimizing performance and enhancing user experience. 
                    </p>
                    
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </section>





      {/* process we use */}

      <Process 
      para="We specialize in transforming your business vision into a robust online presence through our streamlined E-Commerce Development process. We make creativity, technical expertise, and strategic insights to provide personalized services according to your unique business needs and goals."
      
      
      
      />

      <Driving_Exprience
        titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title="Why Choose Our  "
        subtitle="Ecommerce App "
        title2="Development Service
"
        image={ecommersdoubleScreens}
      />

      <TechnologiesUse />
      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default EcommerseDevelopment;
