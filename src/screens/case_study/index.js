import React, { useEffect } from "react";

import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { gsap } from "gsap";
import pinkcapsol from "../../asserts/images/pink-capsol.png";

import donatblue from "../../asserts/images/donat-blue.png";
import donatorange from "../../asserts/images/donat-orange.png";
import greencube from "../../asserts/images/green-cube.png";
import Aos from "aos";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";
import Process from "../../Components/Process";

import aboutimg1 from "../../asserts/images/about-img1.png";
import aboutimg2 from "../../asserts/images/about-img2.png";
import playstore from "../../asserts/images/playstore.png";
import appStore from "../../asserts/images/app-store.png";
import phoneiconblue from "../../asserts/images/phone-icon-blue.png";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import Testimonials from "../../Components/Tetimonials";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Website from "../../Components/Website";
import Aboutsection from "../../Components/aboutsection";
import TrustedPartners from "../../Components/TrustedPartners";
import { Header } from "../../Components/Layout/Header";
import Contact_Footer from "../../Components/contact_Footer";
gsap.registerPlugin(MotionPathPlugin);

const Case_study = () => {
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
    <>
      <Header />

      <section class="inner_hero case-study-hero hoverEffectSec">
        <div class="inner-bgColor"></div>
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="inner_hero_content centered-text">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <span class="color-lightBlue1">Case Studies</span>
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                  <div
                    class="techVerse_hero_btns justify-content-center"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="btn_with_icon">
                      <img class="btn_with_icon_img" src={phoneicon} alt="" />
                      <span class="btn_with_icon_text">Call Now</span>
                    </a>
                    <a href="#" class="btn_with_icon btn_secondary">
                      <img class="btn_with_icon_img" src={chaticon} alt="" />
                      <span class="btn_with_icon_text">Chat Now</span>
                    </a>
                  </div>
                  <div class="icon-container-hover">
                    <img
                      class="center_donatOrange animation11"
                      src="images/donat-orange.png"
                      alt=""
                    />
                    <img
                      class="center_donatBlue animation11"
                      src="images/donat-blue.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* <!--<div class="col-md-6 inner-hero_rightCol">-->
                  <!--  <div class="inner_hero_img">-->
                    <!--    <img-->
                      <!--        src="images/Ecommerce-development-hero.png"-->
                      <!--        data-aos="fade-left"-->
                      <!--        data-aos-offset="0"-->
                      <!--        data-aos-duration="3000"-->
                      <!--        class="ecommerceDev_hero_img"-->
                      <!--        alt=""-->
                      <!--      />-->
                      <!--  </div>-->
                  <!--</div>--> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 1 --> */}
      <section class="sec1 case-study-sec case-study-sec1">
        {/* <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      ANGEL BODY - ECOMMERCE APP
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--<div class="col-md-6">-->
                <!--    <div class="casestudy-img">-->
                  <!--        <img src="images/case-study-img111.png" class="case-study-img1" />-->
                  <!--    </div>-->
                <!--</div>--> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 2 --> */}
      {/* style="background-image: url(images/case-study-sec222-bg.png);" */}
      <section class="sec2 case-study-sec case-study-sec2">
        {/*     <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Brian Carlisle - Book Author App
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--<div class="col-md-6">-->
                <!--    <div class="casestudy-img">-->
                  <!--        <img src="images/case-study-img222.png" class="case-study-img2" />-->
                  <!--    </div>-->
                <!--</div>--> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 3 --> */}

      {/*  style="background-image: url(images/case-study-sec3-bg.png);" */}
      <section class="sec3 case-study-sec case-study-sec3">
        {/*     <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Brian Carlisle - Book Author App
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 4 --> */}
      {/* style="background-image: url(images/case-study-sec4-bg.png);" */}
      <section class="sec4 case-study-sec case-study-sec4">
        {/* <!--<div class="case-study-bg-img">--> */}
        {/* <!--    <img src="images/case-study-sec1-bg.png" alt=""/>--> */}
        {/* <!--</div>-->  */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Brian Carlisle - Book Author App
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 5 --> */}
      {/* style={"background-image: url(images/case-study-sec5-bg.png);"} */}
      <section class="sec5 case-study-sec case-study-sec5">
        {/* <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      ANGEL BODY - ECOMMERCE APP
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Case Study Sec 6 --> */}
      <section class="sec5 case-study-sec case-study-sec6">
        {/* <!--<div class="case-study-bg-img">-->
          <!--    <img src="images/case-study-sec1-bg.png" alt=""/>-->
            <!--</div>--> */}
        <div class="width-1600">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="casestudy-content">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      ANGEL BODY - ECOMMERCE APP
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Creating a seamless and personalized experience for
                      travelers with our innovative travel mobile app solutions.
                    </p>
                    <div
                      class="techVerse_hero_btns "
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      <a href="#" class="btn_with_icon btn_secondary">
                        <img
                          class="btn_with_icon_img"
                          src={phoneiconblue}
                          alt=""
                        />
                        <span class="btn_with_icon_text">Call Now</span>
                      </a>
                      <div class="techVerse_store_links">
                        <a href="#" class="techVerse_store_link">
                          <img src={playstore} alt="" />
                        </a>
                        <a href="#" class="techVerse_store_link">
                          <img src={appStore} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact_Footer />
    </>
  );
};
export default Case_study;
