import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import Aboutsection from '../../Components/aboutsection';

import Aos from "aos";

import Ctnbutton from '../../Components/ctnbutton/index'
import HeroSection from '../../Components/herosection';
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
import TechnologiesUse from '../../Components/technologiesuse';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Process from '../../Components/Process';
import TrustedPartners from '../../Components/TrustedPartners'
import serviceherobg from '../../asserts/images/service-hero-bg.png'
import tpblue from "../../asserts/images/t-p-blue.png";
import Portfolio from '../../Components/Portfolio'
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
import chaticonblue from '../../asserts/images/chat-icon-blue.png'
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
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import required modules
// import { Pagination,  Autoplay } from 'swiper/modules';
gsap.registerPlugin(MotionPathPlugin);

const MobileApp = () => {


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
        innerbgclass={"inner-bgColor"}
        title={"Top Mobile App"}
        subtitle={"Development"}
        title2={"Services for Online Businesses"}
        tagline={"Improve your brand awareness and maximize ROI through a responsive mobile application"}
        className={"mobileApp_hero_img"}
        heroimage={Mobileapphero}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Us",
          secondaryButtonClass: "btn_with_icon btn_secondary  "

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
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Us",
          secondaryButtonClass: "btn_with_icon btn_secondary  "

          // playstore: playstore,
          // appstore: appstore
        }}
        title="RAPID APPLICATION DEVELOPMENT USING" subtitle="  CUTTING-EDGE" title2="TECHNOLOGIES  "
        para="Techverse offers top-notch mobile app solutions that improve the performance of businesses by increasing revenues 
                                and amplifying the online presence of the brand. We create applications for businesses of all sizes and provide them with an exceptional custom app
                                 design experience that builds for them a loyal customer base and has a competitive advantage.

                We help businesses delight their users with impressive native iOS/Android, Cross-Platform, and web application development, leveraging our extensive expertise in working with major app technologies."



        image={rapidappimg}

      />






      <Portfolio pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}

        title="HIGH-END MOBILE APP SOLUTIONS FOR" subtitle="  BUSINESSES"
        para=" For startups to enterprise-level businesses, we offer a full cycle of app development, design, integration, and management services. From ideation to the delivery of the final application to the ongoing support, our company leads the whole process.

We help businesses delight their users with impressive native iOS/Android, Cross-Platform, and web application development, leveraging our extensive expertise in working with major app technologies."

        image={highendimg}
        chaticon={chaticon}
        phoneicon={phoneicon}

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


























      {/* new Portfolio swipper section */}




















      {/* process we use */}
      <Process />


      {/* <!-- Technologies --> */}
      <TechnologiesUse />


      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* FAQ section */}

      <Frequentlyaskquestion />

























    </UserLayout>
  )
}

export default MobileApp
