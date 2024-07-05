import React, { useEffect, } from 'react';

import { UserLayout } from "../../Components/Layout/UserLayout";
import Portfolios from "../../Components/portfolios"
import phoneicon from "../../asserts/images/phone-icon.png";
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import bluecubelarge from '../../asserts/images/blue-cube-large.png'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { gsap } from "gsap";
// peramidLeftAngles
// path_to_peramidleftangles
// import mobileAppImg from '../assets/images/mobileAppimg.png';

import goodfirms from '../../asserts/images/good-firms.png';
import partnersbbb from '../../asserts/images/partners-bbb.png';
import partnerstruspilot from '../../asserts/images/partners-trus-pilot.png';
import partnersclutch from '../../asserts/images/partners-clutch.png';
import peramidleftangles from '../../asserts/images/peramid-left-angles.png';
import pinkcapsol from '../../asserts/images/pink-capsol.png';
import chaticonblues from '../../asserts/images/chat-icon-blue.png'
 
import mobileAppimg from '../../asserts/images/mobileAppimg.png'
// import 'path_to_your_css_file.css';
import processicon1 from '../../asserts/images/process-icon-1.png'
import arrowicon from '../../asserts/images/arrow-icon.png'
import processicon2 from '../../asserts/images/process-icon-2.png'
import processicon3 from '../../asserts/images/process-icon-3.png'
import processicon4 from '../../asserts/images/process-icon-4.png'
import processicon5 from '../../asserts/images/process-icon-5.png'
import processicon6 from '../../asserts/images/process-icon-6.png'
 
import peramidleftangle from "../../asserts/images/peramid-left-angles.png"
import clutch from "../../asserts/images/clutch.png";
import truspilot from "../../asserts/images/trus-pilot.png";
import laptopFrame from "../../asserts/images/laptop-Frame.png";
import laptop from "../../asserts/images/laptop.png";
import donatorange from "../../asserts/images/donat-orange.png";
import greencube from "../../asserts/images/green-cube.png";
// import pinkcapsol from "../../asserts/images/pink-capsol.png";
import Pill from "../../asserts/images/Pill.png";
import bbb from "../../asserts/images/bbb.png";

import donatblue from "../../asserts/images/donat-blue.png";
import chaticon from "../../asserts/images/chat-icon.png";
import chat_icon from "../../asserts/images/chat-icon.png";
import phone_icon from "../../asserts/images/phone-icon.png";
import ConeBlueGlossy from "../../asserts/images/Cone-Blue-Glossy.png";
import PillBlueGlossy from "../../asserts/images/Pill-Blue-Glossy.png";
import donateWhite from "../../asserts/images/donate-white.png";
import peramidicon from "../../asserts/images/peramid-icon.png";
import phoneicongreen from "../../asserts/images/phone-icon-green.png";
import chaticonblue from "../../asserts/images/phone-icon-green.png";
import orangecircle from "../../asserts/images/orange-circle.png";
import donatewhitesmall from "../../asserts/images/donate-white-small.png";
import orangehalfcircle from "../../asserts/images/orange-half-circle.png";
import bluecube from "../../asserts/images/blue-cube.png";
import iosicon from "../../asserts/images/ios-icon.png";
import smartcontracticon from "../../asserts/images/smart-contract-icon.png";
import andriodicon from "../../asserts/images/andriod-icon.png";
import customappicon from "../../asserts/images/custom-app-icon.png";
import enterprizeicon from "../../asserts/images/enter-prize-icon.png";
import crossplatform from "../../asserts/images/cross-platform.png";
import portfoliomockup1 from "../../asserts/images/portfolio-mockup-1.png";

import mobileframe from "../../asserts/images/mobile-frame.webp";
import portfoliomockup5 from "../../asserts/images/portfolio-mockup-5.png";
import portfoliomockup2 from "../../asserts/images/portfolio-mockup-2.png";
import portfoliomockup3 from "../../asserts/images/portfolio-mockup-3.png";
import portfoliomockup4 from "../../asserts/images/portfolio-mockup-4.png";
import jeffwilson from "../../asserts/images/jeff-wilson.png";
import carbuying from "../../asserts/images/car-buying.png";
import lllreptile from "../../asserts/images/lll-reptile.png";
import privateastrology from "../../asserts/images/private-astrology.png";
import Macbook from "../../asserts/images/Macbook.png";
// import peramidleftangles from "../../asserts/images/peramid-left-angles.png";


import peramidangled from "../../asserts/images/peramid-angled.png";
import p2 from "../../asserts/images/p2.png";
import p1 from "../../asserts/images/p1.png";
import p3 from "../../asserts/images/p3.png";
import p4 from "../../asserts/images/p4.png";
import p5 from "../../asserts/images/p5.png";
import p6 from "../../asserts/images/p6.png";

import Aos from "aos";
import 'swiper/css/pagination';
import 'swiper/css';
import Process from '../../Components/Process';
import Testimonials from '../../Components/Tetimonials';
gsap.registerPlugin(MotionPathPlugin);

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

 
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

     <div  className="relative" >
     <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg pagination_custom"
          // style={{
          //   'background-image':
          //     'url(./asserts/images/hero-bg.png)',
          // }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          
       


        <section class="techVerse_hero hoverEffectSec">
            <div class="techVerse_heroContent">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <div class="techVerse_hero_content">
                      <h1
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                      >
                       TECHVERSE LLC Pioneering 
                        <span class="color-lightBlue1"> The </span>
                        Future Of Mobile Development Company In USA
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
                        At Techverse LLC, we are at the forefront of mobile app development, shaping the future with innovation and cutting-edge technology. Our team of expert developers,
                        designers, and organizers work tirelessly to transform visionary ideas into dynamic mobile solutions that meet the needs of an ever-evolving digital landscape.
                      </p>
                      <div
                        class="techVerse_hero_btns"
                        data-aos="fade-right"
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
                      <div
                        class="hero_brands"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="3000"
                      >
                        <a href="#" class="hero_brands_img"
                        ><img src={clutch} alt=""
                          /></a>
                        <a href="#" class="hero_brands_img"
                        ><img src={truspilot} alt=""
                          /></a>
                        <a href="#" class="hero_brands_img"
                        ><img src={bbb} alt=""
                          /></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="techVerse_hero_img">
                      <img
                        src={donatblue}
                        class="techVerse_hero_icon1 animation11"
                        alt=""
                      />
                      <img
                        src={PillBlueGlossy}
                        class="techVerse_hero_icon2 animation22"
                        alt=""
                      />
                      <img
                        src={ConeBlueGlossy}
                        class="techVerse_hero_icon3 animation22"
                        alt=""
                      />
                      <img
                        src={herophonemockupgroup}
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="3000"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          </SwiperSlide>




        <SwiperSlide>
         



        <section class="techVerse_hero hoverEffectSec">
            <div class="techVerse_heroContent">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <div class="techVerse_hero_content">
                      <h1
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                      >
                       TECHVERSE LLC Pioneering 
                        <span class="color-lightBlue1"> The </span>
                        Future Of Mobile Development Company In USA
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
                        At Techverse LLC, we are at the forefront of mobile app development, shaping the future with innovation and cutting-edge technology. Our team of expert developers,
                        designers, and organizers work tirelessly to transform visionary ideas into dynamic mobile solutions that meet the needs of an ever-evolving digital landscape.
                      </p>
                      <div
                        class="techVerse_hero_btns"
                        data-aos="fade-right"
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
                      <div
                        class="hero_brands"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="3000"
                      >
                        <a href="#" class="hero_brands_img"
                        ><img src={clutch} alt=""
                          /></a>
                        <a href="#" class="hero_brands_img"
                        ><img src={truspilot} alt=""
                          /></a>
                        <a href="#" class="hero_brands_img"
                        ><img src={bbb} alt=""
                          /></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="techVerse_hero_img">
                      <img
                        src={donatblue}
                        class="techVerse_hero_icon1 animation11"
                        alt=""
                      />
                      <img
                        src={PillBlueGlossy}
                        class="techVerse_hero_icon2 animation22"
                        alt=""
                      />
                      <img
                        src={ConeBlueGlossy}
                        class="techVerse_hero_icon3 animation22"
                        alt=""
                      />
                      <img
                        src={herophonemockupgroup}
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="3000"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>





        </SwiperSlide>
       
      </Swiper>
      
     </div>













      {/* 'backgroundImage: url(../../asserts/images/hero-bg.png);' */}


    


      {/* <!-- About Sec --> */}
      <section class="techVerse_about" id="particles-js1">
        <img
          class="techVerse_about_icon1 animation11"
          src={pinkcapsol}
          alt=""
        />
        <img
          class="techVerse_about_icon2 animation33"
          src={Pill}
          alt=""
        />
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
        <div class="techVerse_aboutContent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img">
                    <img
                      src={laptop}
                      class="about-laptopImg"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    />
                    <img
                      src={laptopFrame}
                      class="laptop-Frame"
                      data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="techVerse_about_content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      Ignite your online presence with the
                      <span class="color-lightBlue2"> top rated </span> design
                      agency
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      We boast a team of dynamic and seasoned web developers
                      committed to delivering top-notch quality. Our core focus is
                      on providing exceptional services, and we take pride in
                      catering to the needs of our discerning clientele. While
                      many promise excellence, we believe in truly serving our
                      customers. Our dedication lies in crafting remarkable web
                      designs that not only establish a distinctive brand identity
                      but also ensure a prominent presence in the market. Equipped
                      with the latest tools and innovative techniques, our
                      professionals are poised to enhance your brand's visual
                      appeal. We are dedicated to elevating your communication
                      with potential clients, ensuring you always stand out in the
                      market.
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
                          src={phone_icon}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={chat_icon}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Chat Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Website --> */}
      <section class="techVerse_webSolution">
        <img
          class="techVerse_webSolution_icon1 animation11"
          src={donateWhite}
          alt=""
        />
        <img
          class="techVerse_webSolution_icon2 animation22"
          src={peramidicon}
          alt=""
        />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="techVerse_webSolution_content">
                <div class="sec_title">
                  <h2
                    class="sec_title_head color-lightBlue1"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  >
                    Elevate your business presence with a customized
                    <span class="color-lightBlue2"> Website Solution </span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div
                    class="techVerse_hero_btns"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="3000"
                  >
                    <a href="tel:+(1) 23456-7890" class="btn_with_icon">
                      <img
                        class="btn_with_icon_img"
                        src={phoneicongreen}
                        alt=""
                      />
                      <span class="btn_with_icon_text">+(1) 23456-7890</span>
                    </a>
                    <a href="#" class="btn_with_icon btn_secondary">
                      <img
                        class="btn_with_icon_img"
                        src={chaticonblue}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Start A Live Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Services --> */}
      <section class="techVerse_services" id="particles-js2">
        <img
          class="techVerse_services_icon1 animation11"
          src={pinkcapsol}
          alt=""
        />
        <img
          class="techVerse_services_icon2 animation11"
          src={greencube}
          alt=""
        />
        <img
          class="techVerse_services_icon3 animation33"
          src={orangecircle}
          alt=""
        />
        <img
          class="techVerse_services_icon4 animation22"
          src={donatewhitesmall}
          alt=""
        />
        <img
          class="techVerse_services_icon5 animation33"
          src={orangehalfcircle}
          alt=""
        />
        <div class="container services_offerContainer">
          <div class="row">
            <div class="sec_title">
              <h2
                class="sec_title_head color-lightBlue2"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="1000"
              >
                Services
                <span class="color-darkBlue"> We Offer</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="2000"
              >
                Techverse does not provide services only; we become a partner with
                our clients to scale up their businesses with our wide range of
                digital marketing services. We have helped hundreds of large
                enterprises in the US to get new wings to fly higher on the
                digital landscapes globally. Get a unique digital marketing
                experience with the amalgamation of our proven strategies,
                professional team, and the use of modern technology.
              </p>
            </div>
            <div class="techVerse_services_content">
              <img src={bluecube} class="blue-cube1 animation11" alt="" />
              <img src={bluecube} class="blue-cube2 animation11" alt="" />
              <div class="service_box_1"></div>
              <div class="service_box_2"></div>
              <div class="service_box_3"></div>
              <div class="service_box">
                <div class="service_box_before">
                  <div class="service_box_icon">
                    <img src={iosicon} alt="" />
                  </div>
                  <h3 class="service_box_title">IOS Development</h3>
                </div>
                <div class="service_box_after">
                  <h3 class="service_box_title">Cross-Platform Development</h3>
                  <p class="service_box_p">
                    Elevate your mobile apps by overlaying virtual elements onto
                    the real world, enhancing user interaction, entertainment, and
                    practical experiences to instill a UX unlike any other.
                  </p>
                </div>
              </div>
              <div class="service_box">
                <div class="service_box_before">
                  <div class="service_box_icon">
                    <img src={smartcontracticon} alt="" />
                  </div>
                  <h3 class="service_box_title">Smart Contract Development</h3>
                </div>
                <div class="service_box_after">
                  <h3 class="service_box_title">Cross-Platform Development</h3>
                  <p class="service_box_p">
                    Elevate your mobile apps by overlaying virtual elements onto
                    the real world, enhancing user interaction, entertainment, and
                    practical experiences to instill a UX unlike any other.
                  </p>
                </div>
              </div>
              <div class="service_box">
                <div class="service_box_before">
                  <div class="service_box_icon">
                    <img src={andriodicon} alt="" />
                  </div>
                  <h3 class="service_box_title">Android Development</h3>
                </div>
                <div class="service_box_after">
                  <h3 class="service_box_title">Cross-Platform Development</h3>
                  <p class="service_box_p">
                    Elevate your mobile apps by overlaying virtual elements onto
                    the real world, enhancing user interaction, entertainment, and
                    practical experiences to instill a UX unlike any other.
                  </p>
                </div>
              </div>
              <div class="service_box">
                <div class="service_box_before">
                  <div class="service_box_icon">
                    <img src={customappicon} alt="" />
                  </div>
                  <h3 class="service_box_title">Custom App Development</h3>
                </div>
                <div class="service_box_after">
                  <h3 class="service_box_title">Cross-Platform Development</h3>
                  <p class="service_box_p">
                    Elevate your mobile apps by overlaying virtual elements onto
                    the real world, enhancing user interaction, entertainment, and
                    practical experiences to instill a UX unlike any other.
                  </p>
                </div>
              </div>
              <div class="service_box">
                <div class="service_box_before">
                  <div class="service_box_icon">
                    <img src={enterprizeicon} alt="" />
                  </div>
                  <h3 class="service_box_title">Enterprise App Development</h3>
                </div>
                <div class="service_box_after">
                  <h3 class="service_box_title">Cross-Platform Development</h3>
                  <p class="service_box_p">
                    Elevate your mobile apps by overlaying virtual elements onto
                    the real world, enhancing user interaction, entertainment, and
                    practical experiences to instill a UX unlike any other.
                  </p>
                </div>
              </div>
              <div class="service_box">
                <div class="service_box_before">
                  <div class="service_box_icon">
                    <img src={crossplatform} alt="" />
                  </div>
                  <h3 class="service_box_title">Cross-Platform Development</h3>
                </div>
                <div class="service_box_after">
                  <h3 class="service_box_title">Cross-Platform Development</h3>
                  <p class="service_box_p">
                    Elevate your mobile apps by overlaying virtual elements onto
                    the real world, enhancing user interaction, entertainment, and
                    practical experiences to instill a UX unlike any other.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-12 text-center mt-5">
              <a
                href="#"
                class="btn_with_icon"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="2000"
              >
                <span class="btn_with_icon_text">START YOUR PROJECT NOW!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Portfolio --> */}
     <Portfolios

     title="Our"
     subtitle="Portfolio"
     para="Our Company has worked with thousands of businesses 
     all across the world and has developed highly functional, responsive, and feature-rich applications. Check out some of our best works:"
     image1={portfoliomockup1}
     image2={portfoliomockup2}
     image3={portfoliomockup3}
     image4={portfoliomockup4}
     image5={portfoliomockup5}
     image6={mobileframe}
     image7={carbuying}
     image8={lllreptile}
     image9={jeffwilson}
     image10={privateastrology}
     image11={Macbook}
     
     />



{/* process we use */}
<Process/>
     

        {/* MOBILE APP */}

      <section class="techVerse_mobileApp">
        <div class="techVerse_mobileAppContent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-6">
                <div class="techVerse_mobileApp_content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head color-lightBlue1"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="1000"
                    >
                      Elevate your business presence with a customized
                      <span class="color-lightBlue2">Mobile Application</span>
                    </h2>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="2000"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <div
                      class="techVerse_hero_btns"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" class="btn_with_icon">
                        <img
                          class="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span class="btn_with_icon_text">+(1) 23456-7890</span>
                      </a>
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={chaticonblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Start A Live Chat</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 px-0">
                <div class="techVerse_mobileApp_img">
                  <img
                    src={mobileAppimg}
                    alt=""
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


















      {/* <!-- Case Studies --> */}
      <section class="techVerse_caseStudies">
        <img
          class="techVerse_caseStudies_icon1 animation22"
          src={peramidangled}
          alt=""
        />
        <img
          class="techVerse_caseStudies_icon2 animation11"
          src={greencube}
          alt=""
        />
        <img
          class="techVerse_caseStudies_icon3 animation22"
          src={donatewhitesmall}
          alt=""
        />
        <img
          class="techVerse_caseStudies_icon4 animation33"
          src={orangecircle}
          alt=""
        />
        <div class="techVerse_caseStudies-Content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="sec_title">
                  <h2
                    class="sec_title_head color-lightBlue2"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                  >
                    Our
                    <span class="color-darkBlue">CASE STUDIES</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                    Our Company has worked with thousands of businesses all across
                    the world and has developed highly functional, responsive, and
                    feature-rich applications. Check out some of our best works:
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                >
                  <img src={p1} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange" style={{ backgroundImage: "url(https://custom.mystagingserver.site/techversellc/images/p2-bg.png)" }}
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="2000"
                >
                  <img src={p2} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange" style={{ backgroundImage: "url(https://custom.mystagingserver.site/techversellc/images/p3-bg.png)" }}
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-duration="3000"
                >
                  <img src={p3} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange" style={{ backgroundImage: "url(https://custom.mystagingserver.site/techversellc/images/p4-bg.png)" }}
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                >
                  <img src={p4} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange " style={{ backgroundImage: "url(https://custom.mystagingserver.site/techversellc/images/p5-bg.png)" }}
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="2000"
                >
                  <img src={p5} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange " style={{ backgroundImage: "url(https://custom.mystagingserver.site/techversellc/images/p6-bg.png)" }}
                  // class="techVerse_caseStudy_img bgOrange caseStudy_img_bg_one"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-duration="3000"
                >
                  <img src={p6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
<Testimonials/>
      </section>




    </UserLayout>
  )
}
export default Home
