import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import orangehalfcircle from "../../../src/asserts/images/orange-half-circle.webp";
import processicon1 from "../../../src/asserts/images/process-icon-1.webp";
import processicon2 from "../../../src/asserts/images/process-icon-2.webp";
import processicon3 from "../../../src/asserts/images/process-icon-3.webp";
import processicon4 from "../../../src/asserts/images/process-icon-4.webp";
import processicon5 from "../../../src/asserts/images/process-icon-5.webp";
import processicon6 from "../../../src/asserts/images/process-icon-6.webp";

import peramidleftangles from "../../../src/asserts/images/peramid-left-angles.webp";
import pinkcapsol from "../../../src/asserts/images/pink-capsol.webp";

const Process = (props) => {
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
    const sections = sectionRef?.current.querySelectorAll(".techVerse_process");

    sections.forEach((section) => {
      const container = section.querySelector(".inneri_images");

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
      <section className="techVerse_process">
        <div className="inneri_images">
          <img
            className="techVerse_process_icon1 animation22"
            src={peramidleftangles}
            alt=""
          />
          <img
            className="techVerse_process_icon2 animation11"
            src={pinkcapsol}
            alt=""
          />
          <img
            className="techVerse_process_icon3 animation33"
            src={orangehalfcircle}
            alt=""
          />
          <img
            className="techVerse_process_icon4 animation22"
            src={peramidleftangles}
            alt=""
          />
        </div>
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
                  Process
                  <span className="color-darkBlue"> We Use </span>
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
            <div className="col-md-12 px-0">
              <div className="ani_cnt">
                <div className="sixicon icc">
                  <img src={processicon6} alt="Innovative-approach" />
                  <p>Deployment</p>
                </div>
                <div className="fiveicon icc">
                  <img
                    src={processicon5}
                    alt="Continuous-Digital-Improvement"
                  />
                  <p>Testing & QA</p>
                </div>
                <div className="fouricon icc">
                  <img src={processicon4} alt="Award-Agency" />
                  <p>Development</p>
                </div>
                <div className="threeicon icc">
                  <img src={processicon3} alt="Time-Bound-Professionals" />
                  <p>Wireframing and Prototyping</p>
                </div>
                <div className="twoicon icc">
                  <img src={processicon2} alt="Agile-Methodology" />
                  <p>Strategic Planning and Feature</p>
                </div>
                <div className="oneicon icc">
                  <img src={processicon1} alt="Bespoke-Designs" />
                  <p>Idea Conceptualization and Research</p>
                </div>

                <svg
                  viewBox="0 0 1916 479"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="mypath"
                    d="M0 1H1400C1453.42 1 1496.73 44.3047 1496.73 97.7238V97.7238V97.7238C1496.73 146.55 1457.15 186.132 1408.32 186.132H408.437C354.985 186.132 311.653 229.464 311.653 282.916V282.916C311.653 336.368 354.985 379.7 408.437 379.7H1915.13"
                    stroke="url(#paint0_linear_2_2097)"
                    stroke-dasharray="18 18"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_2097"
                      x1="0.839028"
                      y1="190.525"
                      x2="1914.91"
                      y2="190.525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#02a9f7"></stop>
                      <stop offset="1" stopColor="#02a9f7"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
