import React, { useEffect, useRef } from "react";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";

import drivingsecsecreen from "../../asserts/images/driving-sec-secreen.webp";
import reicon1 from "../../asserts/images/re-icon1.webp";
import reicon2 from "../../asserts/images/re-icon2.webp";
import reicon3 from "../../asserts/images/re-icon3.webp";
import reicon4 from "../../asserts/images/re-icon4.webp";
import reicon5 from "../../asserts/images/re-icon5.webp";
import reicon6 from "../../asserts/images/re-icon6.webp";
import reicon7 from "../../asserts/images/re-icon7.webp";
import reicon8 from "../../asserts/images/re-icon8.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import { gsap } from "gsap";

const Driving_Exprience = (props) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll(".techVerse_about");

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

  return (
    <div ref={sectionRef}>
      <section
        className={`techVerse_about techVerse_aboutServices2 ${props?.classheroimage}`}
      >
        <div className={props?.class_innerBG}></div>
        <div className="inner_images">
          <img
            className="techVerse_about_icon1 animation11"
            src={pinkcapsol}
            alt=""
          />

          <img
            className="techVerse_about_icon3 animation11"
            src={greencube}
            alt=""
          />
          <img
            className="techVerse_about_icon4 animation11"
            src={donatorange}
            alt=""
          />
        </div>
        <div className="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="sec_title buildStore_sec_title">
                  <h2
                    className={`sec_title_head color-lightBlue2 ${props?.title_text_class}`}
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <span className={props?.titleclass}>{props?.title}</span>{" "}
                    {props?.subtitle}{" "}
                    <span className={props?.titleclass2}>
                      {" "}
                      {props?.title2}{" "}
                    </span>
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
              <div className="col-lg-5">
                <div className="techVerse_about_img">
                  <div className="techVerse_about_laptop_img driving-2screen">
                    <img
                      src={props?.image}
                      className={`about-laptopImg mobileApp_devSec_img 4 ${props?.hrimg}`}
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="techVerse_about_content services-abbout2">
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon1} alt="" />
                        </div>
                        <h4>{props?.h1}</h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon2} alt="" />
                        </div>
                        <h4>{props?.h2}</h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon3} alt="" />
                        </div>
                        <h4> {props?.h3}</h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon4} alt="" />
                        </div>
                        <h4> {props?.h4}</h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon5} alt="" />
                        </div>
                        <h4> {props?.h5}</h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon6} alt="" />
                        </div>
                        <h4>{props?.h6} </h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon7} alt="" />
                        </div>
                        <h4>{props?.h7} </h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="icon_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="box_icon">
                          <img src={reicon8} alt="" />
                        </div>
                        <h4>{props?.h8} </h4>
                      </div>
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

export default Driving_Exprience;
