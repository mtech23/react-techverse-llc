import React, { useEffect } from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Aos from "aos";
import 'swiper/css';
import HeroSection from '../../Components/herosection';
import serviceherobg from '../../asserts/images/service-hero-bg.png'
import tpblue from "../../asserts/images/t-p-blue.png";
import tpblack from "../../asserts/images/t-p-black.png";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import rapidappimg from "../../asserts/images/rapidapp-img.png";
import highendimg from "../../asserts/images/high-end-img.png";

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
    title={"Top Mobile App"}
    subtitle={"Development"}
    title2={"Services for Online Businesses"}
    tagline={"Improve your brand awareness and maximize ROI through a responsive mobile application"}
    className={"service-hero-bg"}
    heroimage={serviceherobg}
   
   />
{/* <!-- Trusted Partners --> */}
    <section class="techVerse_trustedPartners techVerse_trustedPartnersServices">
        <div class="container-fluid">
          <div class="row">
            
            <div class="col-md-12">
              <div
                class="row flex-nowrap gap-4 custom_trusted_partners_seprator"
                
              >
                <marquee>
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
                  </div>
                </marquee>
              </div>

            </div>
          </div>
        </div>
    </section>


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
                  Rapid Application Development Using
                    <span class="color-lightBlue2">Cutting-Edge</span> Technologies
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                  Techverse offers top-notch mobile app solutions that improve the performance of businesses by increasing revenues and amplifying the online presence of the brand. We create applications for businesses of all sizes and provide them with an exceptional custom app design experience that builds for them a loyal customer base and has a competitive advantage.
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                  We help businesses delight their users with impressive native iOS/Android, Cross-Platform, and web application development, leveraging our extensive expertise in working with major app technologies.
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
                      src={rapidappimg}
                      class="about-laptopImg"
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

    {/* second about section */}

    <section class="techVerse_about techVerse_aboutServices2">
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
      <div class="techVerse_aboutContent techVerse_aboutContentServices2">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img">
                    <img
                      src={highendimg}
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
                  High-End Mobile App Solutions For
                    <span class="color-lightBlue2">Businesses</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                  For startups to enterprise-level businesses, we offer a full cycle of app development, design, integration, and management services. From ideation to the delivery of the final application to the ongoing support, our company leads the whole process.
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="2000"
                  >
                  We help businesses delight their users with impressive native iOS/Android, Cross-Platform, and web application development, leveraging our extensive expertise in working with major app technologies.
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
            
          </div>
        </div>
      </div>
    </section>



    









  














    </UserLayout>
  )
}

export default MobileApp
