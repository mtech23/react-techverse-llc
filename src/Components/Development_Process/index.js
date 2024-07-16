import React, { useEffect, useRef } from "react";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import { gsap } from "gsap";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import devandmaintenenceicon from "../../asserts/images/dev-and-maintenence-icon.png";
import qualityicon from "../../asserts/images/quality-icon.png";
import designanddevicon from "../../asserts/images/design-and-dev-icon.png";
import businessanalysisicon from "../../asserts/images/business-analysis-icon.png";
import realestateimg2 from "../../asserts/images/real-estate-img2.gif";

import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";



const Development_Process = (props) => {


  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll('.techVerse_about');

    sections.forEach((section) => {
      const container = section.querySelector('.inner_images');

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


  return (

    <div ref={sectionRef}>
      <section
        class={`techVerse_about techVerse_aboutServices2 ${props?.travelbgclass} `}
      >
        <div className="inner_images">
          <img
            class="techVerse_about_icon1 animation11"
            src={pinkcapsol}
            alt=""
          />

          <img class="techVerse_about_icon3 animation11" src={greencube} alt="" />
          <img
            class="techVerse_about_icon4 animation11"
            src={donatorange}
            alt=""
          />
        </div>

        <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img realEstate-gif">
                    <img
                      src={props?.image}
                      class={`about-laptopImg ${props.sportsclass}`}
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    />
                  </div>
                  <div
                    class="techVerse_hero_btns re_appDev_btns"
                    data-aos="fade-up"
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
                </div>
              </div>
              <div class="col-lg-6">
                <div class="techVerse_about_content services-abbout2">
                  <div class="sec_title realEstate-appSec_title">
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      {props?.title}
                      <span class="color-lightBlue2">
                        {" "}
                        {props?.subtitle}
                      </span>{" "}
                      {props?.title2}
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      {props?.para}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="reApp_box"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <div class="reApp_box_icon">
                        <img src={businessanalysisicon} alt="" />
                      </div>
                      <h4>Business Analysis</h4>
                      <p>
                      {props?.para1}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="reApp_box"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <div class="reApp_box_icon">
                        <img src={designanddevicon} alt="" />
                      </div>
                      <h4>Design & Development</h4>
                      <p>
                      {props?.para2}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="reApp_box"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      <div class="reApp_box_icon">
                        <img src={qualityicon} alt="" />
                      </div>
                      <h4>  {props?.quality} </h4>
                      <p>
                      {props?.para3}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="reApp_box"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      <div class="reApp_box_icon">
                        <img src={devandmaintenenceicon} alt="" />
                      </div>
                      <h4>Deployment and Maintenance</h4>
                      <p>
                      {props?.para4}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development_Process;
