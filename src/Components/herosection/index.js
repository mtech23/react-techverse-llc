import React from "react";

import androidiconw from "../../../src/asserts/images/android-icon-w.webp";
import angularicon from "../../../src/asserts/images/angular-icon.webp";
import appleicon from "../../../src/asserts/images/apple-icon.webp";

import fluttericon from "../../../src/asserts/images/flutter-icon.webp";
import reacticon from "../../../src/asserts/images/react-icon.webp";

const HeroSection = (props) => {
  const { CtnbuttonComponent, ctnButtonProps } = props;
  return (
    <div>
      <section className="inner_hero">
        <div className={props?.classheroimage}></div>
        {/* <div className=' '> */}
        {/* width-1600 */}
        <div className={props.innerbgclass}></div>
        <div className="width-1600 ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="inner_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    {props?.title}
                    <span className="color-lightBlue1">
                      {" "}
                      {props?.subtitle}
                    </span>{" "}
                    {props?.title2}
                    <span className="color-lightBlue1">
                      {props?.subtitle2}
                    </span>{" "}
                    {props?.title3}
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    // data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    {props?.tagline}{" "}
                  </p>
                  <div className="hero_social-icons">
                    <a href="#" className="hero_social-icon">
                      <img src={androidiconw} alt="" />
                    </a>
                    <a href="#" className="hero_social-icon">
                      <img src={angularicon} alt="" />
                    </a>
                    <a href="#" className="hero_social-icon">
                      <img src={appleicon} alt="" />
                    </a>
                    <a href="#" className="hero_social-icon">
                      <img src={fluttericon} alt="" />
                    </a>
                    <a href="#" className="hero_social-icon">
                      <img src={reacticon} alt="" />
                    </a>
                  </div>

                  {CtnbuttonComponent && (
                    <CtnbuttonComponent {...ctnButtonProps} />
                  )}
                </div>
              </div>
              <div className="col-md-6 inner-hero_rightCol">
                <div className="inner_hero_img">
                  <img
                    className={props?.className}
                    src={props?.heroimage}
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
