import React, { useEffect } from 'react';
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
import TrustedPartners from '../../Components/TrustedPartners'
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
 

import Aos from "aos";
import 'swiper/css';
import Website from '../../Components/Website';
import TechnologiesUse from '../../Components/technologiesuse';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
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


    
     
      <HeroSection
        title={"Custom Ecommerce Website"}
        subtitle={"Development"}
        title2={"Company"}
        tagline={"Top - notch eCommerce web solutions that grow retail businesses and amplify sales."}
        heroimage={ecommersedevhero}

      /> 



{/* <!-- Trusted Partners --> */}
     
<TrustedPartners/>

      {/* <!-- About Sec --> */}
    <section class="techVerse_about techVerse_aboutServices1" id="particles-js1">
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
      <div class="techVerse_aboutContent techVerse_aboutContentServices1">
        <div class="container">
          <div class="row">
            
            <div class="col-md-6">
              <div class="techVerse_about_content services-abbout1">
                <div class="sec_title">
                  <h2
                    class="sec_title_head color-darkBlue"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  >
                  MAXIMIZE REVENUES WITH OUR
                    <span class="color-lightBlue2">ECOMMERCE-WEBSITE</span> DEVELOPMENT SERVICES
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                  Techverse is a leading web development company known for providing top-of-the-line eCommerce web solutions to brands. We help businesses maximize their profits by developing highly responsive and engaging eCommerce stores that provide customers with an excellent online shopping experience.
                  </p>
                  
                  <div
                    class="techVerse_hero_btns"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="btn_with_icon">
                      <img
                        class="btn_with_icon_img"
                        src={phoneicon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Call Now</span>
                    </a>
                    <a href="#" class="btn_with_icon btn_secondary">
                      <img
                        class="btn_with_icon_img"
                        src={chaticon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Chat Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img">
                    <img
                    src={ecommerceabout1}
                      class="about-laptopImg business-devlopmentImg"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    

          {/* <!-- Website --> */}
        <Website/>
    
   



      {/* ecommerce section */}

      <section class="techVerse_about techVerse_aboutServices2">
        <img
          class="techVerse_about_icon1 animation11"
          src={pinkCapsol}
          alt=""
        />
        {/* <!-- <img
          class="techVerse_about_icon2 animation33"
          src="images/Pill.png"
          alt=""
        /> --> */}
        <img
          class="techVerse_about_icon3 animation11"
          src={greenCube}
          alt=""
        />
        <img
          class="techVerse_about_icon4 animation11"
          src={donatorange}
          alt=""
        />
        <div class="techVerse_aboutContent techVerse_aboutContentServices2">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="sec_title buildStore_sec_title">
                  <h2
                    class="sec_title_head color-lightBlue2"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  >
                    Build Your e-Store with Us and Skyrocket the
                    <span class="color-darkBlue">Success!</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    Do you want to improve the sales of your business by promoting it digitally? If yes, then Techverse has got you covered. We are a leading eCommerce store development agency, and we offer a comprehensive range of e-store solutions that help businesses grow online and reach out to prospects. We create e-commerce website stores for our clients using the following platforms:
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img">
                    <img
                      src={ecommerceimg01}
                      class="about-laptopImg"
                      data-aos="fade-right"
                      data-aos-offset="300"
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
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">Shopify</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      The most commonly used eCommerce platform is ideal for businesses of all sizes.
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">WooCommerce</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      An easy-to-use and management WordPress eCommerce plugin that allows e-store creation.
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">Magento</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      For enterprises, we create large-scale responsive and functional website stores using Magento.
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>










         {/* process we use */}
         <section className="techVerse_process">
        <img
          className="techVerse_process_icon1 animation22"
          src={peramidleftangles}
          alt=""
        />
        <img
          className="techVerse_process_icon2 animation11"
          src={pinkcapsol}
          alt=""
        />
        <img
          className="techVerse_process_icon3 animation33"
          src={orangehalfcircle}
          alt=""
        />
        <img
          className="techVerse_process_icon4 animation22"
          src={peramidleftangles}
          alt=""
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_title">
                <h2
                  className="sec_title_head color-lightBlue2"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                >
                  Process
                  <span className="color-darkBlue">We Use</span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="2000"
                >
                  We nurture creativity in our skilled teams by harnessing fresh
                  ideas, perspectives, techniques and tapping into new sources of
                  inspiration. We are on a mission to design and build products
                  that are fit-for-purpose, fulfil their objectives, and that
                  deliver value to their users. Whether it’s Mobile App
                  Development, game development, UI/UX design, or anything else,
                  we deliver – keeping in mind your budget, timeline, and unique
                  needs!
                </p>
              </div>
            </div>
            <div className="col-md-12 px-0">
              <div className="ani_cnt">
                <div className="oneicon icc">
                  <img src={processicon1} alt="Bespoke-Designs" />
                  <p>Idea Conceptualization and Research</p>
                </div>
                <div className="twoicon icc">
                  <img src={processicon2} alt="Agile-Methodology" />
                  <p>Strategic Planning and Feature</p>
                </div>
                <div className="threeicon icc">
                  <img
                    src={processicon3}
                    alt="Time-Bound-Professionals"
                  />
                  <p>Wireframing and Prototyping</p>
                </div>
                <div className="fouricon icc">
                  <img src={processicon4} alt="Award-Agency" />
                  <p>Development</p>
                </div>
                <div className="fiveicon icc">
                  <img
                    src={processicon5}
                    alt="Continuous-Digital-Improvement"
                  />
                  <p>Testing & QA</p>
                </div>
                <div className="sixicon icc">
                  <img
                    src={processicon6}
                    alt="Innovative-approach"
                  />
                  <p>Deployment</p>
                </div>
                <svg
                  viewBox="0 0 1916 479"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="mypath"
                    d="M0 1H1400C1453.42 1 1496.73 44.3047 1496.73 97.7238V97.7238V97.7238C1496.73 146.55 1457.15 186.132 1408.32 186.132H408.437C354.985 186.132 311.653 229.464 311.653 282.916V282.916C311.653 336.368 354.985 379.7 408.437 379.7H1915.13"
                    stroke="url(#paint0_linear_2_2097)"
                    stroke-dasharray="18 18"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_2097"
                      x1="0.839028"
                      y1="190.525"
                      x2="1914.91"
                      y2="190.525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#02a9f7"></stop>
                      <stop offset="1" stopColor="#02a9f7"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <!-- Technologies --> */}
      <TechnologiesUse/>
 


   {/* MOBILE APP */}

 <Elevateyourbusiness/>

<Frequentlyaskquestion/>
    </UserLayout>
  )
}
export default EcommerseDevelopment
