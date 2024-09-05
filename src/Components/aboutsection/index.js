import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Aboutsection = (props) => {
  const { CtnbuttonComponent, ctnButtonProps } = props;

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
        className={`techVerse_about techVerse_aboutServices1 ${props?.classSpace}`}
        id="particles-js1"
      >
        <div className=" inner_images">
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
        <div className="techVerse_aboutContent techVerse_aboutContentServices1 width-1600">
          <div className=" ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="techVerse_about_content services-abbout1">
                    <div className="sec_title">
                      <h2
                        className="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {props?.title}
                        <span className="color-lightBlue2">
                          {" "}
                          {props?.subtitle}
                        </span>{" "}
                        {props?.title2}
                      </h2>
                      {/* <p
                                            data-aos="fade-up"
                                            data-aos-offset="0"
                                            data-aos-duration="2000"
                                        >
                                            {props?.para}
                                        </p> */}
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.para}
                      </p>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.para2}
                      </p>

                      <ul
                        className="body-unorder-list"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.listItems?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                      <ul
                        className="body-bullet-list"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        {props?.bulletListItems?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                      {CtnbuttonComponent && (
                        <CtnbuttonComponent {...ctnButtonProps} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="techVerse_about_img">
                    <div className="techVerse_about_laptop_img">
                      <img
                        src={props?.image}
                        // className="about-laptopImg business-devlopmentImg"
                        className={`about-laptopImg business-devlopmentImg ${props?.abtImgClass}`}
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      />
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

export default Aboutsection;
