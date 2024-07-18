import React, { useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import { Helmet } from 'react-helmet'
import Aboutsection from "../../Components/aboutsection";

import Aos from "aos";

import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Process from "../../Components/Process";
import TrustedPartners from "../../Components/TrustedPartners";
import serviceherobg from "../../asserts/images/service-hero-bg.png";
import tpblue from "../../asserts/images/t-p-blue.png";
import Portfolio from "../../Components/Portfolio";
import tpblack from "../../asserts/images/t-p-black.png";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import rapidappimg from "../../asserts/images/rapidapp-img.png";
import highendimg from "../../asserts/images/high-end-img.png";
import Mobileapphero from "../../asserts/images/Mobile-app-hero.png";
import donateWhite from "../../asserts/images/donate-white.png";
import peramidicon from "../../asserts/images/peramid-icon.png";
import phoneicongreen from "../../asserts/images/phone-icon-green.png";
import chaticonblue from "../../asserts/images/chat-icon-blue.png";
import portfoliomockup1 from "../../asserts/images/portfolio-mockup-1.png";
import portfoliomockup5 from "../../asserts/images/portfolio-mockup-5.png";
import portfoliomockup2 from "../../asserts/images/portfolio-mockup-2.png";
import portfoliomockup3 from "../../asserts/images/portfolio-mockup-3.png";
import portfoliomockup4 from "../../asserts/images/portfolio-mockup-4.png";
import mobileframe from "../../asserts/images/mobile-frame.webp";
import Macbook from "../../asserts/images/Macbook.png";
import carbuying from "../../asserts/images/car-buying.png";
import lllreptile from "../../asserts/images/lll-reptile.png";
import jeffwilson from "../../asserts/images/jeff-wilson.png";
import privateastrology from "../../asserts/images/private-astrology.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import required modules
// import { Pagination,  Autoplay } from 'swiper/modules';
gsap.registerPlugin(MotionPathPlugin);

const MobileApp = () => {
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

  return (
    <UserLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Special Variety of Mobile Application Development Available  </title>
        <meta name="Providing the services of mobile application development at Techverse LLC. We craft the solutions for all the software you are looking for  " />
      </Helmet>
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Innovate. Develop. Dominate With"}
        subtitle={"Techverse Apps!"}
        // title2={"Services for Online Businesses"}
        tagline={
          "Our Mobile Application Development service is tailored to propel your business forward in the digital landscape. Our expert team crafts bespoke mobile solutions that resonate with your audience and drive results."
        }
        className={"mobileApp_hero_img"}
        heroimage={Mobileapphero}
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
      />
      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      {/* <!-- About Sec --> */}

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
          secondaryButtonClass: "btn_with_icon btn_secondary ",

          // playstore: playstore,
          // appstore: appstore
        }}
        title="Leading"
        subtitle="The"
        title2="Charge In Rapid Mobile App Innovation "
        para="Experience the forefront of mobile application development with Techverse LLC, where we excel in rapid application deployment driven by cutting-edge technologies. Our approach blends agile methodologies with the latest advancements in AI, IoT, and blockchain, ensuring that your app not only meets but exceeds industry standards. Whether you require a robust iOS solution, an adaptable Android platform, or a versatile cross-platform app, our seasoned developers are adept at crafting bespoke applications that resonate with your target audience. From initial ideation and meticulous prototyping to seamless deployment and ongoing support, we prioritize collaboration and innovation to deliver solutions that propel your business forward. Trust Techverse LLC to transform your vision into a dynamic and scalable mobile application that stands out in today's competitive digital landscape."
        image={rapidappimg}
        abtImgClass="mobile-img-1"
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle={"color-darkBlue"}
        title="Scalable Mobile Solutions "
        title2="Every Business Need. "
        subtitle=" For "
        para=" At Techverse LLC, we specialize in crafting high-end mobile app solutions tailored to raise businesses across diverse industries. Our Mobile Application Development service is meticulously designed to transform your ideas into intuitive, scalable, and robust mobile applications that resonate with your target audience. Whether you're aiming to streamline internal processes, enhance customer engagement, or launch a cutting-edge product, our expert team of developers, designers, and strategists is dedicated to delivering excellence. From initial concept and UI/UX design to seamless integration and ongoing support, we prioritize innovation and functionality every step of the way. Partner with Techverse LLC and get the potential in today's digital landscape."
        image={highendimg}
        chaticon={chaticon}
        phoneicon={phoneicon}
      />
      {/* <!-- Website --> */}
      {/* <section class="techVerse_webSolution">
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
                    Elevate your business presence with a customized
                    <span class="color-lightBlue2">Website Solution</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
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
      </section> */}
      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* new Portfolio swipper section */}

      {/* process we use */}
      <Process
      para="We proceed to meticulous planning, where we outline the app's features, user interface design, and functionality. Our expert team of developers then takes over, using cutting-edge technologies to build a robust and scalable application tailored to your specifications."
      
      />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default MobileApp;
