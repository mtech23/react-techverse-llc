import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import Aboutsection from '../../Components/aboutsection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Aos from "aos";
import 'swiper/css';
import Ctnbutton from '../../Components/ctnbutton/index'
import HeroSection from '../../Components/herosection';
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
import TechnologiesUse from '../../Components/technologiesuse';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Process from '../../Components/Process';
import TrustedPartners from '../../Components/TrustedPartners'
import tpblue from "../../asserts/images/t-p-blue.png";
import Portfolio from '../../Components/Portfolio'
import tpblack from "../../asserts/images/t-p-black.png";

import donateWhite from "../../asserts/images/donate-white.png";
import peramidicon from "../../asserts/images/peramid-icon.png";
import phoneicongreen from "../../asserts/images/phone-icon-green.png";
import chaticonblue from '../../asserts/images/chat-icon-blue.png'
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import rapidappimg from "../../asserts/images/rapidapp-img.png";
import highendimg from "../../asserts/images/high-end-img.png";
import digitalmarketinghero from "../../asserts/images/digital-marketing-hero.png";
import digitalmarketing01 from "../../asserts/images/digital-marketing-01.png";
import digitalmarketing02 from "../../asserts/images/digital-marketing-02.png";








gsap.registerPlugin(MotionPathPlugin);

const DigitalMarketing = () => {


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
        title={"Best Digital Marketing Agency For"}
        subtitle={"Online Growth"}
        // title2={"Services for Online Businesses"}
        tagline={"Grow your business’s online presence and witness an increase in conversions with Techverse."}
        className={"digital-marketing-hero"}
        heroimage={digitalmarketinghero}
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
        title2={"Visibility With Our Dynamic Digital Solutions!"}
        title="Drive Growth" subtitle="  And  "
        para="Discover top-tier digital marketing solutions tailored to raise your brand's online presence with Techverse LLC. Our expert team crafts comprehensive strategies encompassing SEO optimization, targeted PPC campaigns, engaging social media management, and compelling content marketing. Whether you're aiming to boost conversions, enhance brand visibility, or drive traffic, our innovative approach ensures measurable results. Trust Techverse LLC to navigate the digital landscape and push your business to sustained growth and success.

"   CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          chaticon: chaticon,
          chatenow: "Chat Now"
        }}

        image={digitalmarketing01}

        bulletListItems={[
          "10+ Years of Experience",
          "Team of 50+ Digital Marketing Experts",
          "2k+ Satisfied Clients",
          "150+ Ongoing Projects",
          "Up to 43% Increase in ROI  "
        ]}

      />






      <Portfolio pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}

        title="We Build" subtitle=" Brands "
        para="Great brands start with consumer demands and marketplace gaps, not corporate strengths, which may seem paradoxical. That's why we start our brand development process by going deep
                 – really deep – into research to find ways to make your brand genuine to who you are, different in the market, and memorable."

        image={digitalmarketing02}
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
      </section> */}



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

export default DigitalMarketing

