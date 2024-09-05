import React, { useEffect, useRef } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import Portfolios from "../../Components/portfolios";
import phoneicon from "../../asserts/images/phone-icon.webp";
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.webp";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import bluecubelarge from "../../asserts/images/blue-cube-large.webp";
import Particles from "react-particles";
import ServiceParticle from "../../Components/ServiceParticle/ServiceParticle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import Portfolio from "../../Components/Portfolio";
import { gsap } from "gsap";

import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import herowebmockupgroup22 from "../../asserts/images/hero-web-mockup-group22.webp";
import elevengb from "../../asserts/images/1-eleven-gb.webp";
import framewithphotobg from "../../asserts/images/frame-with-photo-bg.webp";
import ryderzvanbg from "../../asserts/images/ryderz-van-bg.webp";
import elevenimg from "../../asserts/images/1-eleven-img.webp";
import framewithphotoimg from "../../asserts/images/frame-with-photo-img.webp";
import ryderzvanimg from "../../asserts/images/ryderz-van-img.webp";
import { loadSlim } from "tsparticles-slim";
import clutch from "../../asserts/images/clutch.webp";
import truspilot from "../../asserts/images/trus-pilot.webp";
import laptopFrame from "../../asserts/images/laptop-Frame.webp";
import laptop from "../../asserts/images/laptop.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import bbb from "../../asserts/images/bbb.webp";
import { useCallback } from "react";
import donatblue from "../../asserts/images/donat-blue.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import ConeBlueGlossy from "../../asserts/images/Cone-Blue-Glossy.webp";
import PillBlueGlossy from "../../asserts/images/Pill-Blue-Glossy.webp";
import donateWhite from "../../asserts/images/donate-white.webp";
import peramidicon from "../../asserts/images/peramid-icon.webp";
import phoneicongreen from "../../asserts/images/phone-icon-green.webp";
import chaticonblue from "../../asserts/images/phone-icon-green.webp";
import orangecircle from "../../asserts/images/orange-circle.webp";
import donatewhitesmall from "../../asserts/images/donate-white-small.webp";
import orangehalfcircle from "../../asserts/images/orange-half-circle.webp";
import bluecube from "../../asserts/images/blue-cube.webp";
import iosicon from "../../asserts/images/ios-icon.webp";
import smartcontracticon from "../../asserts/images/smart-contract-icon.webp";
import andriodicon from "../../asserts/images/andriod-icon.webp";
import customappicon from "../../asserts/images/custom-app-icon.webp";
import enterprizeicon from "../../asserts/images/enter-prize-icon.webp";
import crossplatform from "../../asserts/images/cross-platform.webp";
import portfoliomockup1 from "../../asserts/images/portfolio-mockup-1.webp";
import mobileframe from "../../asserts/images/mobile-frame.webp";
import portfoliomockup5 from "../../asserts/images/portfolio-mockup-5.webp";
import portfoliomockup2 from "../../asserts/images/portfolio-mockup-2.webp";
import portfoliomockup3 from "../../asserts/images/portfolio-mockup-3.webp";
import portfoliomockup4 from "../../asserts/images/portfolio-mockup-4.webp";
import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";
import heroslidermockupimg3 from "../../asserts/images/hero-slider-mockup-img-3.webp";
import Macbook from "../../asserts/images/Macbook.webp";
import peramidangled from "../../asserts/images/peramid-angled.webp";
import cms1 from "../../asserts/images/Cms-1.webp";
import cms2 from "../../asserts/images/CMS-2.webp";
import cms3 from "../../asserts/images/CMS-3.webp";
import cms4 from "../../asserts/images/CMS-4.webp";
import irvingsegalbg from "../../asserts/images/irving-segal-bg.webp";
import irvingsegalimg from "../../asserts/images/irving-segal-img.webp";
import braincarlislebg from "../../asserts/images/brain-carlisle-bg.webp";
import braincarlisleimg from "../../asserts/images/brain-carlisle-img.webp";
import anglebodybg from "../../asserts/images/angle-body-bg.webp";
import anglebodyimg from "../../asserts/images/angle-body-img.webp";

import partnerImg1 from "../../asserts/images/partner-img-1.svg";
import partnerImg2 from "../../asserts/images/partner-img-2.svg";
import partnerImg3 from "../../asserts/images/partner-img-3.svg";
import partnerImg4 from "../../asserts/images/partner-img-4.svg";
import partnerImg5 from "../../asserts/images/partner-img-5.svg";
import partnerImg6 from "../../asserts/images/partner-img-6.svg";
import partnerImg7 from "../../asserts/images/partner-img-7.svg";
import partnerImg8 from "../../asserts/images/partner-img-8.svg";
import partnerImg9 from "../../asserts/images/partner-img-9.svg";
import partnerImg10 from "../../asserts/images/partner-img-10.svg";
import partnerImg11 from "../../asserts/images/partner-img-11.svg";
import partnerImg12 from "../../asserts/images/partner-img-12.svg";
import partnerImg13 from "../../asserts/images/partner-img-13.svg";
import partnerImg14 from "../../asserts/images/partner-img-14.svg";
import partnerImg15 from "../../asserts/images/partner-img-15.svg";
import Helmet from "../../Components/Helmet";
import partnerImg16 from "../../asserts/images/partner-img-16.svg";

import Aos from "aos";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import Process from "../../Components/Process";
import Testimonials from "../../Components/Testimonials";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";

gsap.registerPlugin(MotionPathPlugin);
const videos = [
  {
    id: 1,
    thumbnail: "path/to/thumbnail1.jpg",
    videoSrc: "path/to/video1.mp4",
  },
  {
    id: 2,
    thumbnail: "path/to/thumbnail2.jpg",
    videoSrc: "path/to/video2.mp4",
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

  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll(".hoverEffectSec");

    sections.forEach((section) => {
      const container = section.querySelector(".inner_images");

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = (mouseX - centerX) * 0.1;
        const distY = (mouseY - centerY) * 0.1;

        gsap.to(container, {
          x: distX,
          y: distY,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          x: 0,
          y: 0,
          ease: "power1.out",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const sec2 = useRef(null);

  useEffect(() => {
    const sections = sec2?.current.querySelectorAll(".sevices_hover");

    sections.forEach((section) => {
      const container = section.querySelector(".services_inner_images");

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = (mouseX - centerX) * 0.1;
        const distY = (mouseY - centerY) * 0.1;

        gsap.to(container, {
          x: distX,
          y: distY,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          x: 0,
          y: 0,
          ease: "power1.out",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const caseStudies = useRef(null);

  useEffect(() => {
    const sections =
      caseStudies?.current.querySelectorAll(".caseStudies_hover");

    sections.forEach((section) => {
      const container = section.querySelector(".caseStudies_inner_images");

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = (mouseX - centerX) * 0.1;
        const distY = (mouseY - centerY) * 0.1;

        gsap.to(container, {
          x: distX,
          y: distY,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          x: 0,
          y: 0,
          ease: "power1.out",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const website = useRef(null);

  useEffect(() => {
    const sections = website?.current.querySelectorAll(
      ".techVerse_webSolution"
    );

    sections.forEach((section) => {
      const container = section.querySelector(".techVerse_webSolution_hover");

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = (mouseX - centerX) * 0.1; // Adjust multiplier for desired effect
        const distY = (mouseY - centerY) * 0.1; // Adjust multiplier for desired effect

        gsap.to(container, {
          x: distX,
          y: distY,
          zIndex: 10, // Bring to front
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          x: 0,
          y: 0,
          zIndex: 1, // Reset to default
          ease: "power1.out",
          clearProps: "all",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);
  return (
    <UserLayout>
      <Helmet
        title="Techverse LLC | #1 Mobile App Development Company in USA"
        description="Techverse LLC is the #1 Mobile App Development Company in USA, offering innovative web and reliable app development services for businesses of all sizes."
        keywords="Techverse"
      />

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
            <section className="techVerse_hero hoverEffectSec ">
              <div className="techVerse_heroContent">
                <div className="container-fluid">
                  <div className="row">
                    <div className="innersec col-md-6">
                      <div className="techVerse_hero_content">
                        <h1
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          TECHVERSE LLC Pioneering
                          <span className="color-lightBlue1"> The Future </span>
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
                          className="techVerse_hero_btns"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" className="btn_with_icon">
                            <img
                              className="btn_with_icon_img"
                              src={phoneicon}
                              alt=""
                            />
                            <span className="btn_with_icon_text">Call Now</span>
                          </a>
                          <a href="#" className="btn_with_icon btn_secondary">
                            <img
                              className="btn_with_icon_img"
                              src={chaticon}
                              alt=""
                            />
                            <span className="btn_with_icon_text">Chat Now</span>
                          </a>
                        </div>
                        <div
                          className="hero_brands"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" className="hero_brands_img">
                            <img src={clutch} alt="" />
                          </a>
                          <a href="#" className="hero_brands_img">
                            <img src={truspilot} alt="" />
                          </a>
                          <a href="#" className="hero_brands_img">
                            <img src={bbb} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="techVerse_hero_img image_hover">
                        <div className="inner_images  ">
                          <img
                            src={donatblue}
                            className="techVerse_hero_icon1 animation11"
                            alt=""
                          />
                          <img
                            src={PillBlueGlossy}
                            className="techVerse_hero_icon2 animation22"
                            alt=""
                          />
                          <img
                            src={ConeBlueGlossy}
                            className="techVerse_hero_icon3 animation22"
                            alt=""
                          />
                        </div>
                        <img
                          src={herophonemockupgroup}
                          width="100%"
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
            <section className="techVerse_hero techVerse_hero_two hoverEffectSec">
              <div className="techVerse_heroContent">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="techVerse_hero_content">
                        <h1
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          Creating
                          <span className="color-lightBlue1">
                            {" "}
                            Custom Solutions{" "}
                          </span>
                          For A Digital Age With Techverse LLC
                        </h1>
                        <p
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          In the rapidly evolving digital landscape, staying
                          ahead requires innovative and personalized solutions
                          that cater to unique business needs. At Techverse LLC,
                          we specialize in creating custom digital solutions
                          designed to transform and raise your business
                          presence.
                        </p>
                        <div
                          className="techVerse_hero_btns"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" className="btn_with_icon">
                            <img
                              className="btn_with_icon_img"
                              src={phoneicon}
                              alt=""
                            />
                            <span className="btn_with_icon_text">Call Now</span>
                          </a>
                          <a href="#" className="btn_with_icon btn_secondary">
                            <img
                              className="btn_with_icon_img"
                              src={chaticon}
                              alt=""
                            />
                            <span className="btn_with_icon_text">Chat Now</span>
                          </a>
                        </div>
                        <div
                          className="hero_brands"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" className="hero_brands_img">
                            <img src={clutch} alt="" />
                          </a>
                          <a href="#" className="hero_brands_img">
                            <img src={truspilot} alt="" />
                          </a>
                          <a href="#" className="hero_brands_img">
                            <img src={bbb} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="techVerse_hero_img">
                        <div className="inner_images">
                          <img
                            src={donatblue}
                            className="techVerse_hero_icon1 animation11"
                            alt=""
                          />
                          <img
                            src={PillBlueGlossy}
                            className="techVerse_hero_icon2 animation22"
                            alt=""
                          />
                          <img
                            src={ConeBlueGlossy}
                            className="techVerse_hero_icon3 animation22"
                            alt=""
                          />
                        </div>
                        <img
                          src={herowebmockupgroup22}
                          width="100%"
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
            <section className="techVerse_hero techVerse_hero_three hoverEffectSec">
              <div className="techVerse_heroContent">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="techVerse_hero_content">
                        <h1
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          Experience
                          <span className="color-lightBlue1"> The Future </span>
                          Of Digital Innovation With Us
                        </h1>
                        <p
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          We are dedicated to revolutionizing your digital
                          presence through bespoke website designs, intuitive
                          mobile apps, and robust software solutions
                          personalized to your unique business needs. Our team
                          of passionate innovators harnesses the latest
                          technology trends to propel your brand forward in the
                          digital landscape.
                        </p>
                        <div
                          className="techVerse_hero_btns"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" className="btn_with_icon">
                            <img
                              className="btn_with_icon_img"
                              src={phoneicon}
                              alt=""
                            />
                            <span className="btn_with_icon_text">Call Now</span>
                          </a>
                          <a href="#" className="btn_with_icon btn_secondary">
                            <img
                              className="btn_with_icon_img"
                              src={chaticon}
                              alt=""
                            />
                            <span className="btn_with_icon_text">Chat Now</span>
                          </a>
                        </div>
                        <div
                          className="hero_brands"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" className="hero_brands_img">
                            <img src={clutch} alt="" />
                          </a>
                          <a href="#" className="hero_brands_img">
                            <img src={truspilot} alt="" />
                          </a>
                          <a href="#" className="hero_brands_img">
                            <img src={bbb} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="techVerse_hero_img">
                        <div className="inner_images">
                          <img
                            src={donatblue}
                            className="techVerse_hero_icon1 animation11"
                            alt=""
                          />
                          <img
                            src={PillBlueGlossy}
                            className="techVerse_hero_icon2 animation22"
                            alt=""
                          />
                          <img
                            src={ConeBlueGlossy}
                            className="techVerse_hero_icon3 animation22"
                            alt=""
                          />
                        </div>
                        <img
                          src={heroslidermockupimg3}
                          width="100%"
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

      {/* 'backgroundImage: url(../../asserts/images/hero-bg.webp);' */}

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
      <div ref={website}>
        <section className="techVerse_webSolution ">
          <div className="techVerse_webSolution_hover">
            <img
              className="techVerse_webSolution_icon1 animation11"
              src={donateWhite}
              alt=""
            />
            <img
              className="techVerse_webSolution_icon2 animation22"
              src={peramidicon}
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="techVerse_webSolution_content">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue1"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Revolutionize Your Business Presence
                      <span className="color-lightBlue2"> With </span>A Custom
                      Website Design
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
                      className="techVerse_hero_btns"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="tel:+(1) 23456-7890" className="btn_with_icon">
                        <img
                          className="btn_with_icon_img"
                          src={phoneicongreen}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          +(1) 23456-7890
                        </span>
                      </a>
                      <a href="#" className="btn_with_icon btn_secondary">
                        <img
                          className="btn_with_icon_img"
                          src={chaticonblue}
                          alt=""
                        />
                        <span className="btn_with_icon_text">
                          Start A Live Chat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Services --> */}
      <section ref={sec2} className="techVerse_services" id="particles-js2">
        <ServiceParticle />
        <div className="sevices_hover">
          <div className="services_inner_images">
            <img
              className="techVerse_services_icon1 animation11"
              src={pinkcapsol}
              alt=""
            />
            <img
              className="techVerse_services_icon2 animation11"
              src={greencube}
              alt=""
            />
            <img
              className="techVerse_services_icon3 animation33"
              src={orangecircle}
              alt=""
            />
            <img
              className="techVerse_services_icon4 animation22"
              src={donatewhitesmall}
              alt=""
            />
            <img
              className="techVerse_services_icon5 animation33"
              src={orangehalfcircle}
              alt=""
            />
          </div>
          <div className="container services_offerContainer">
            <div className="row">
              <div className="sec_title">
                <h2
                  className="sec_title_head color-lightBlue2"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Services
                  <span className="color-darkBlue"> We Offer </span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  At Techverse LLC, we pride ourselves on delivering
                  cutting-edge solutions tailored to meet your digital needs.
                  Discover our range of solutions designed to raise your
                  business:
                </p>
              </div>
              <div className="techVerse_services_content">
                <img src={bluecube} className="blue-cube1 animation11" alt="" />
                <img src={bluecube} className="blue-cube2 animation11" alt="" />
                <div className="service_box_1"></div>
                <div className="service_box_2"></div>
                <div className="service_box_3"></div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={iosicon} alt="" />
                    </div>
                    <h3 className="service_box_title">IOS Development</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Cross-Platform Development
                    </h3>
                    <p className="service_box_p">
                      Harness the power of Apple's ecosystem with our iOS
                      development services. Whether you're introducing a new app
                      or improving an existing one, our team ensures seamless
                      integration and intuitive user experiences.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={smartcontracticon} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Smart Contract Development
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Smart Contract Development
                    </h3>
                    <p className="service_box_p">
                      Get the potential of blockchain technology with our
                      brilliant contract development expertise. From initial
                      concept to deployment, we specialize in creating secure
                      and efficient intelligent contracts tailored to your
                      specific requirements.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={andriodicon} alt="" />
                    </div>
                    <h3 className="service_box_title">Android Development</h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">Android Development</h3>
                    <p className="service_box_p">
                      Reach the vast Android user base with our Android
                      development services. We craft scalable and engaging
                      applications that leverage the latest features of the
                      Android platform, ensuring optimal performance across
                      devices.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={customappicon} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Custom App Development
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Custom App Development
                    </h3>
                    <p className="service_box_p">
                      Tailor-made solutions for unique business challenges. Our
                      service is designed to align perfectly with your strategic
                      objectives, delivering functionality and innovation that
                      set you apart in the digital landscape.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={enterprizeicon} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Enterprise App Development
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Enterprise App Development
                    </h3>
                    <p className="service_box_p">
                      Empower your enterprise with robust, scalable
                      applications. Our enterprise app development team combines
                      industry best practices with deep technical expertise to
                      deliver solutions that streamline operations and drive
                      growth.
                    </p>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_box_before">
                    <div className="service_box_icon">
                      <img src={crossplatform} alt="" />
                    </div>
                    <h3 className="service_box_title">
                      Cross-Platform Development
                    </h3>
                  </div>
                  <div className="service_box_after">
                    <h3 className="service_box_title">
                      Cross-Platform Development
                    </h3>
                    <p className="service_box_p">
                      Maximize your reach with cross-platform development
                      solutions. We utilize leading frameworks to build apps
                      that operate seamlessly across multiple platforms,
                      minimizing development time and maximizing user
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center mt-5">
                <a
                  href="#"
                  className="btn_with_icon"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <span className="btn_with_icon_text">
                    START YOUR PROJECT NOW!
                  </span>
                </a>
              </div>
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
      <Process para="We proceed to meticulous planning, where we outline the app's features, user interface design, and functionality. Our expert team of developers then takes over, using cutting-edge technologies to build a robust and scalable application tailored to your specifications." />

      {/* MOBILE APP */}
      <Elevateyourbusiness />

      {/* <!-- Case Studies --> */}
      <section className="techVerse_caseStudies" ref={caseStudies}>
        <div className="caseStudies_hover">
          <div className="caseStudies_inner_images">
            <img
              className="techVerse_caseStudies_icon1 animation22"
              src={peramidangled}
              alt=""
            />
            <img
              className="techVerse_caseStudies_icon2 animation11"
              src={greencube}
              alt=""
            />
            <img
              className="techVerse_caseStudies_icon3 animation22"
              src={donatewhitesmall}
              alt=""
            />
            <img
              className="techVerse_caseStudies_icon4 animation33"
              src={orangecircle}
              alt=""
            />
          </div>
          <div className="techVerse_caseStudies-Content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-lightBlue2"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Our
                      <span className="color-darkBlue"> CASE STUDIES </span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Techverse LLC has collaborated with numerous businesses
                      worldwide, delivering advanced, responsive, and
                      feature-rich applications. Explore some of our standout
                      projects:
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="techVerse_caseStudy_img bgOrange"
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
                <div className="col-lg-4 col-md-6">
                  <div
                    className="techVerse_caseStudy_img bgOrange"
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
                <div className="col-lg-4 col-md-6">
                  <div
                    className="techVerse_caseStudy_img bgOrange"
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
                <div className="col-lg-4 col-md-6">
                  <div
                    className="techVerse_caseStudy_img bgOrange"
                    style={{
                      backgroundImage: `url(${elevengb})`,
                    }}
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <img src={elevenimg} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="techVerse_caseStudy_img bgOrange "
                    style={{
                      backgroundImage: `url(${framewithphotobg})`,
                    }}
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    <img src={framewithphotoimg} alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="techVerse_caseStudy_img bgOrange "
                    style={{
                      backgroundImage: `url(${ryderzvanbg})`,
                    }}
                    // className="techVerse_caseStudy_img bgOrange caseStudy_img_bg_one"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <img src={ryderzvanimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Trusted Partners --> */}
      <section className="techVerse_trustedPartners">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_title">
                <h2
                  className="sec_title_head color-lightBlue2"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Our
                  <span className="color-darkBlue"> TRUSTED PARTNERS</span>
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row flex-nowrap gap-4 mb-3 additional_classes">
                {/* <div className="row flex-nowrap gap-4 mb-3 additional_classes" style={{overflow-x: 'auto' , gap: '15px'}} > */}
                <div className="marquee-container trusted-partnerContainer">
                  <div className="marquee">
                    <div className="trustedPartners">
                      <div className="trustedPartner col">
                        <img src={partnerImg1} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg2} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg3} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg4} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg5} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg6} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg7} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg8} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg1} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg2} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg3} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg4} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg5} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg6} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg7} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg8} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row flex-nowrap gap-4 mb-3 additional_classes">
                <div className="marquee-container trusted-partnerContainer">
                  <div className="marquee1">
                    <div className="trustedPartners">
                      <div className="trustedPartner col">
                        <img src={partnerImg9} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg10} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg11} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg12} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg13} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg14} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg15} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg16} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg9} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg10} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg11} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg12} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg13} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg14} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg15} alt="" />
                      </div>
                      <div className="trustedPartner col">
                        <img src={partnerImg16} alt="" />
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
