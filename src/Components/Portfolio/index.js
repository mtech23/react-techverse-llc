import React, { useRef, useEffect } from "react";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ParticlesBackground from "../../Components/ParticleBg/ParticlesBackground";
import { gsap } from "gsap";
gsap.registerPlugin(MotionPathPlugin);
const Portfolio = (props) => {
  const sec2 = useRef(null);

  useEffect(() => {
    const sections = sec2?.current.querySelectorAll(".inner_hover");

    sections.forEach((section) => {
      const container = section.querySelector(".inner_images");

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
    <div>
      <ParticlesBackground />
      <section
        ref={sec2}
        className={`techVerse_about techVerse_aboutServices2 ${props?.newClass}`}
      >
        <div className="inner_hover">
          <div className="inner_images">
            <img
              className="techVerse_about_icon1 animation11"
              src={props?.pinkcapsol}
              alt=""
            />

            <img
              className="techVerse_about_icon3 animation11"
              src={props?.greencube}
              alt=""
            />
            <img
              className="techVerse_about_icon4 animation11"
              src={props?.donatorange}
              alt=""
            />
          </div>
          <div className="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="techVerse_about_img">
                    <div
                      className={`techVerse_about_laptop_img ${props?.portfolioimg}`}
                    >
                      <img
                        src={props?.image}
                        // className="about-laptopImg"
                        className={`about-laptopImg ${props?.eduHR}`}
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      />
                      <img
                        src={props?.travelimg}
                        className={props?.laptopFrame}
                        data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      />
                      {props?.imgAfter && <img src={props?.imgAfter} className={props?.imgAfterClass} alt="" />}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="techVerse_about_content services-abbout2">
                    <div className="sec_title">
                      <h2
                        className={` sec_title_head ${props?.classtitle} aos-init aos-animate`}
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {props?.title}
                        <span className="color-lightBlue2">
                          {" "}
                          {props?.subtitle}{" "}
                        </span>
                        {props?.title2}
                      </h2>
                      <p
                        className={`${props?.classpara} aos-init aos-animate`}
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.para}
                      </p>
                      {props?.para1 && (
                        <p
                          className={`${props?.classpara1} aos-init aos-animate`}
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          {props?.para1}
                        </p>
                      )}
                      {props?.para2 && (
                        <p
                          className={`${props?.classpara2} aos-init aos-animate`}
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="2000"
                        >
                          {props?.para2}
                        </p>
                      )}

                      <div
                        className="techVerse_hero_btns"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="3000"
                      >
                        <a href="#" className="btn_with_icon">
                          <img
                            className="btn_with_icon_img"
                            src={props?.phoneicon}
                            alt=""
                          />
                          <span className="btn_with_icon_text">Call Now</span>
                        </a>
                        <a href="#" className="btn_with_icon btn_secondary">
                          <img
                            className="btn_with_icon_img"
                            src={props?.chaticon}
                            alt=""
                          />
                          <span className="btn_with_icon_text">Chat Now</span>
                        </a>
                      </div>
                      <div>
                        <div
                          className="techVerse_store_links aos-init aos-animate"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="3000"
                        >
                          <a href="#" className="techVerse_store_link">
                            <img src={props?.playstore} alt="" />
                          </a>
                          <a href="#" className="techVerse_store_link">
                            <img src={props?.appstore} alt="" />
                          </a>
                        </div>
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

export default Portfolio;
