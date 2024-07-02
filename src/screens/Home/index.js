import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import bluecubelarge from '../../asserts/images/blue-cube-large.png'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Swiper, SwiperSlide } from 'swiper/react';
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
// import orangehalfcircle from 'path_to_orangehalfcircle';
import mobileAppimg from '../../asserts/images/mobileAppimg.png'
// import 'path_to_your_css_file.css';
import processicon1 from '../../asserts/images/process-icon-1.png'

import arrowicon from '../../asserts/images/arrow-icon.png'
import processicon2 from '../../asserts/images/process-icon-2.png'
import processicon3 from '../../asserts/images/process-icon-3.png'
import processicon4 from '../../asserts/images/process-icon-4.png'
import processicon5 from '../../asserts/images/process-icon-5.png'
import processicon6 from '../../asserts/images/process-icon-6.png'
import { Parallax, Pagination, Navigation } from 'swiper/modules';
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

import Aos from "aos";
import 'swiper/css';
gsap.registerPlugin(MotionPathPlugin);

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };


  Aos.init();
  // useEffect(() => {
  //   gsap.set(".road", { opacity: 1 });
  //   const circles = gsap.utils.toArray(".ani_cnt .icc");
  //   const tl2 = gsap.timeline({ repeat: 20 });

  //   circles.forEach((circle, i) => {
  //     let start = i / circles.length; // secret sauce for circles
  //     tl2.to(
  //       circle,
  //       {
  //         motionPath: {
  //           path: ".mypath",
  //           align: ".mypath",
  //           alignOrigin: [0.5, 0.4],
  //           start: start,
  //           end: start + 1,
  //         },
  //         ease: "none",
  //         duration: 40,
  //       },
  //       0
  //     );
  //   });
  // }, []);


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
        data-swiper-parallax="-23%"
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

          <section class="techVerse_hero">
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
                        Award-Winning Mobile App
                        <span class="color-lightBlue1">Development</span>
                        Company In USA
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type
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


          {/* <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div> */}





        </SwiperSlide>




        <SwiperSlide>
          <section class="techVerse_hero">
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
                        Award-Winning Mobile App
                        <span class="color-lightBlue1">Development</span>
                        Company In USA
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type
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
          {/* <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div> */}





        </SwiperSlide>

      </Swiper>

      {/* 'backgroundImage: url(../../asserts/images/hero-bg.png);' */}


      {/* <div class="swiper-pagination hero_pagination"></div> */}


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
                      <span class="color-lightBlue2">top rated</span> design
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
                    <span class="color-lightBlue2">Website Solution</span>
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


      {/* <!--   Process --> */}
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






























































    </UserLayout>
  )
}
export default Home
