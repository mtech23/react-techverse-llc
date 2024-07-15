import React, { useEffect, useRef } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import Portfolios from "../../Components/portfolios";
import phoneicon from "../../asserts/images/phone-icon.png";
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import bluecubelarge from "../../asserts/images/blue-cube-large.png";
import Particles from "react-particles";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Parallax,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import Portfolio from "../../Components/Portfolio";
import { gsap } from "gsap";

import pinkcapsol from "../../asserts/images/pink-capsol.png";
import herowebmockupgroup22 from "../../asserts/images/hero-web-mockup-group22.png";

import { loadSlim } from "tsparticles-slim";
import peramidleftangle from "../../asserts/images/peramid-left-angles.png";
import clutch from "../../asserts/images/clutch.png";
import tpblue from "../../asserts/images/t-p-blue.png";
import tpblack from "../../asserts/images/t-p-black.png";
import truspilot from "../../asserts/images/trus-pilot.png";
import laptopFrame from "../../asserts/images/laptop-Frame.png";
// import laptop from "../../asserts/images/laptop.png";
import laptop from "../../asserts/images/laptop.png";
import donatorange from "../../asserts/images/donat-orange.png";
import greencube from "../../asserts/images/green-cube.png";
// import pinkcapsol from "../../asserts/images/pink-capsol.png";
import Pill from "../../asserts/images/Pill.png";
import bbb from "../../asserts/images/bbb.png";
import { useCallback } from "react";
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
import website1 from "../../asserts/images/website-1.png";
import website2 from "../../asserts/images/website-2.png";
import website3 from "../../asserts/images/website-3.png";
import website4 from "../../asserts/images/website-4.png";
import heroslidermockupimg3 from "../../asserts/images/hero-slider-mockup-img-3.png";
import Macbook from "../../asserts/images/Macbook.png";
// import peramidleftangles from "../../asserts/images/peramid-left-angles.png";
import peramidangled from "../../asserts/images/peramid-angled.png";
import p2 from "../../asserts/images/p2.png";
import p1 from "../../asserts/images/p1.png";
import p3 from "../../asserts/images/p3.png";
import p4 from "../../asserts/images/p4.png";
import p5 from "../../asserts/images/p5.png";
import p6 from "../../asserts/images/p6.png";
import cms1 from "../../asserts/images/Cms-1.png";
import cms2 from "../../asserts/images/CMS-2.png";
import cms3 from "../../asserts/images/CMS-3.png";
import cms4 from "../../asserts/images/CMS-4.png";
import irvingsegalbg from "../../asserts/images/irving-segal-bg.png";
import irvingsegalimg from "../../asserts/images/irving-segal-img-1.png";
import braincarlislebg from "../../asserts/images/brain-carlisle-bg.png";
import braincarlisleimg from "../../asserts/images/brain-carlisle-img-1.png";
import anglebodybg from "../../asserts/images/angle-body-bg.png";
import anglebodyimg from "../../asserts/images/angle-body-img.png";
import Aos from "aos";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import Process from "../../Components/Process";
import Testimonials from "../../Components/Tetimonials";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
gsap.registerPlugin(MotionPathPlugin);
const videos = [
  {
    id: 1,
    thumbnail: "path/to/thumbnail1.jpg",
    videoSrc: "path/to/video1.mp4"
  },
  {
    id: 2,
    thumbnail: "path/to/thumbnail2.jpg",
    videoSrc: "path/to/video2.mp4"
  },


];

const Home = () => {


  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

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


  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll('.hoverEffectSec');

    sections.forEach((section) => {
      const container = section.querySelector('.techVerse_hero_img');

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = (mouseX - centerX) * 0.1;
        const distY = (mouseY - centerY) * 0.1; // Adjust multiplier for desired effect

        gsap.to(container, {
          x: distX,
          y: distY,
          ease: 'power1.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          x: 0,
          y: 0,
          ease: 'power1.out',
        });
      };

      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);




  //   const sec2 = useRef(null);

  // useEffect(() => {
  //   const sections = sec2?.current.querySelectorAll('.sec2');

  //   sections.forEach((section) => {
  //     const container = section.querySelector('.sec2_icons');

  //     const handleMouseMove = (event) => {
  //       const rect = section.getBoundingClientRect();
  //       const mouseX = event.clientX - rect.left;
  //       const mouseY = event.clientY - rect.top;
  //       const centerX = rect.width / 2;
  //       const centerY = rect.height / 2;
  //       const distX = (mouseX - centerX) * 0.1; // Adjust multiplier for desired effect
  //       const distY = (mouseY - centerY) * 0.1; // Adjust multiplier for desired effect

  //       gsap.to(container, {
  //         x: distX,
  //         y: distY,
  //         zIndex: 10, // Bring to front
  //         ease: 'power1.out',
  //       });
  //     };

  //     const handleMouseLeave = () => {
  //       gsap.to(container, {
  //         x: 0,
  //         y: 0,
  //         zIndex: 1, // Reset to default
  //         ease: 'power1.out',
  //         clearProps: 'all'
  //       });
  //     };

  //     section.addEventListener('mousemove', handleMouseMove);
  //     section.addEventListener('mouseleave', handleMouseLeave);

  //     return () => {
  //       section.removeEventListener('mousemove', handleMouseMove);
  //       section.removeEventListener('mouseleave', handleMouseLeave);
  //     };
  //   });
  // }, []);
  return (
    <UserLayout>
      <div className="relative" ref={sectionRef}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          // parallax={true}
          loop={"true"}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, EffectFade, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg pagination_custom"
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <section class="techVerse_hero hoverEffectSec ">
              <div class="techVerse_heroContent">
                <div class="container-fluid">
                  <div class="row">
                    <div class="innersec col-md-6">
                      <div class="techVerse_hero_content">
                        <h1
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          TECHVERSE LLC Pioneering
                          <span class="color-lightBlue1"> The Future </span>
                          Of Mobile Development Company In USA
                        </h1>
                        <p
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          At Techverse LLC, we are at the forefront of mobile
                          app development, shaping the future with innovation
                          and cutting-edge technology. Our team of expert
                          developers, designers, and organizers work tirelessly
                          to transform visionary ideas into dynamic mobile
                          solutions that meet the needs of an ever-evolving
                          digital landscape.
                        </p>
                        <div
                          class="techVerse_hero_btns"
                          data-aos="fade-right"
                          data-aos-offset="0"
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
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" class="hero_brands_img">
                            <img src={clutch} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={truspilot} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={bbb} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="techVerse_hero_img">
                        <div className="inner_images ">
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
                        </div>
                        <img
                          src={herophonemockupgroup}
                          data-aos="fade-left"
                          data-aos-offset="0"
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
            <section class="techVerse_hero techVerse_hero_two hoverEffectSec">
              <div class="techVerse_heroContent">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="techVerse_hero_content">
                        <h1
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          Creating
                          <span class="color-lightBlue1"> Custom Solutions </span>
                          For A Digital Age With Techverse LLC
                        </h1>
                        <p
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          In the rapidly evolving digital landscape, staying ahead requires innovative and personalized solutions that cater to unique business needs.
                          At Techverse LLC, we specialize in creating custom digital solutions designed to transform and raise your business presence.
                        </p>
                        <div
                          class="techVerse_hero_btns"
                          data-aos="fade-right"
                          data-aos-offset="0"
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
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" class="hero_brands_img">
                            <img src={clutch} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={truspilot} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={bbb} alt="" />
                          </a>
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
                          src={herowebmockupgroup22}
                          data-aos="fade-left"
                          data-aos-offset="0"
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
            <section class="techVerse_hero techVerse_hero_three hoverEffectSec">
              <div class="techVerse_heroContent">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="techVerse_hero_content">
                        <h1
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          Experience
                          <span class="color-lightBlue1"> The Future </span>
                          Of Digital Innovation With Us
                        </h1>
                        <p
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          We are dedicated to revolutionizing your digital presence through bespoke website designs, intuitive mobile apps, and robust software solutions personalized to your
                          unique business needs. Our team of passionate innovators harnesses the latest technology trends to propel your brand forward in the digital landscape.
                        </p>
                        <div
                          class="techVerse_hero_btns"
                          data-aos="fade-right"
                          data-aos-offset="0"
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
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" class="hero_brands_img">
                            <img src={clutch} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={truspilot} alt="" />
                          </a>
                          <a href="#" class="hero_brands_img">
                            <img src={bbb} alt="" />
                          </a>
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
                          src={heroslidermockupimg3}
                          data-aos="fade-left"
                          data-aos-offset="0"
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

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title="  Boost Your Brand's Visibility"
        subtitle="  With"
        title2="Techverse LLC's Expert Team Agency"
        para="Upgrade your online presence with Techverse LLC, the top-rated design agency dedicated to transforming your vision into a dynamic digital reality. Our expert team combines innovative design, cutting-edge technology, and user-centered strategies to create stunning, functional mobile applications that captivate and engage users. At Techverse LLC, we prioritize your unique needs, delivering tailor-made solutions that boost your brand's visibility and get success in the competitive digital environment. Trust us to ignite your online presence and turn your ideas into an interactive, impactful experience."
        laptopFrame={"laptop-Frame"}
        classtitle="color-darkBlue"
        image={laptop}
        chaticon={chaticon}
        phoneicon={phoneicon}
        travelimg={laptopFrame}
      />

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
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Revolutionize Your Business Presence
                    <span class="color-lightBlue2"> With </span>A Custom Website
                    Design
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Our expert team combines cutting-edge technology with
                    creative finesse to craft custom websites that not only
                    enhance user experience but also drive tangible results.
                  </p>
                  <div
                    class="techVerse_hero_btns"
                    data-aos="fade-up"
                    data-aos-offset="0"
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
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Services
                <span class="color-darkBlue"> We Offer </span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="2000"
              >
                At Techverse LLC, we pride ourselves on delivering cutting-edge solutions tailored to meet your digital needs.
                Discover our range of solutions designed to raise your business:
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
                    Harness the power of Apple's ecosystem with our iOS development services.
                    Whether you're introducing a new app or improving an existing one, our team ensures seamless integration and intuitive user experiences.
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
                  <h3 class="service_box_title">Smart Contract Development</h3>
                  <p class="service_box_p">
                    Get the potential of blockchain technology with our brilliant contract development expertise.
                    From initial concept to deployment, we specialize in creating secure and efficient intelligent contracts tailored to your specific requirements.
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
                  <h3 class="service_box_title">Android Development</h3>
                  <p class="service_box_p">
                    Reach the vast Android user base with our Android development services.
                    We craft scalable and engaging applications that leverage the latest features of the Android platform, ensuring optimal performance across devices.
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
                  <h3 class="service_box_title">Custom App Development</h3>
                  <p class="service_box_p">
                    Tailor-made solutions for unique business challenges.
                    Our service is designed to align perfectly with your strategic objectives, delivering functionality and innovation that set you apart in the digital landscape.
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
                  <h3 class="service_box_title">Enterprise App Development</h3>
                  <p class="service_box_p">
                    Empower your enterprise with robust, scalable applications.
                    Our enterprise app development team combines industry best practices with deep technical expertise to deliver solutions that streamline operations and drive growth.
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
                    Maximize your reach with cross-platform development solutions.
                    We utilize leading frameworks to build apps that operate seamlessly across multiple platforms, minimizing development time and maximizing user engagement.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-12 text-center mt-5">
              <a
                href="#"
                class="btn_with_icon"
                data-aos="fade-right"
                data-aos-offset="0"
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
        image7={website1}
        image8={website2}
        image9={website3}
        image10={website4}
        image11={Macbook}
        image12={cms1}
        image13={cms2}
        image14={cms3}
        image15={cms4}
        classmobileapp="nav-link"
        classwebsite="nav-link"
        classcms="nav-link"
        CMS="CMS"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />

      {/* process we use */}
      <Process />

      {/* MOBILE APP */}
      <Elevateyourbusiness />

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
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Our
                    <span class="color-darkBlue"> CASE STUDIES </span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Techverse LLC has collaborated with numerous businesses worldwide, delivering advanced, responsive, and feature-rich applications.
                    Explore some of our standout projects:
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  style={{
                    backgroundImage: `url(${irvingsegalbg})`,
                  }}
                >
                  <img src={irvingsegalimg} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange"
                  style={{
                    backgroundImage: `url(${braincarlislebg})`,
                  }}
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img src={braincarlisleimg} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange"
                  style={{
                    backgroundImage: `url(${anglebodybg})`,
                  }}
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <img src={anglebodyimg} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange"
                  style={{
                    backgroundImage:
                      "url(https://techversellc.com/images/p2-bg.png)",
                  }}
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img src={p4} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange "
                  style={{
                    backgroundImage:
                      "url(https://techversellc.com/images/p3-bg.png)",
                  }}
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img src={p5} alt="" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div
                  class="techVerse_caseStudy_img bgOrange "
                  style={{
                    backgroundImage:
                      "url(https://techversellc.com/images/p4-bg.png)",
                  }}
                  // class="techVerse_caseStudy_img bgOrange caseStudy_img_bg_one"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <img src={p6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Trusted Partners --> */}
      <section class="techVerse_trustedPartners">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="sec_title">
                <h2 class="sec_title_head color-lightBlue2" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
                  Our
                  <span class="color-darkBlue"> TRUSTED PARTNERS</span>
                </h2>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row flex-nowrap gap-4 mb-3 additional_classes" >
                {/* <div class="row flex-nowrap gap-4 mb-3 additional_classes" style={{overflow-x: 'auto' , gap: '15px'}} > */}
                <div class="marquee-container trusted-partnerContainer">
                  <div class="marquee">
                    <div class="trustedPartners">
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div class="row flex-nowrap gap-4 mb-3 additional_classes" >
                <div class="marquee-container trusted-partnerContainer">
                  <div class="marquee1">
                    <div class="trustedPartners">
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img ssrc={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblue} alt="" />
                      </div>
                      <div class="trustedPartner col">
                        <img src={tpblack} alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <Testimonials />
    </UserLayout>
  );
};
export default Home;
