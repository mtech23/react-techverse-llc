import React from "react";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";

import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import aboutimg2 from "../../asserts/images/about-img2.webp";
const Custom_website = () => {
  return (
    <div>
      <section className="techVerse_about techVerse_aboutServices2 hoverEffectSec column-reverse-991">
        <div className="icon-container-hover">
          <img
            className="techVerse_about_icon1 animation11"
            src={pinkcapsol}
            alt=""
          />
          {/* <!-- <img
            className="techVerse_about_icon2 animation33"
            src="images/Pill.webp"
            alt=""
          /> --> */}
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
        <div className="techVerse_aboutContent techVerse_aboutContentServices2 customer_gratification width-1600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="techVerse_about_content services-abbout2">
                  <div className="sec_title">
                    <h2
                      className="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Customer
                      <span className="color-lightBlue2">Gratification</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, customer gratification is at the heart
                      of everything we do. We believe in not just meeting but
                      exceeding our client's expectations. From concept to
                      execution, we prioritize clear communication, reliability,
                      and a customer-centric approach that builds long-lasting
                      partnerships.
                    </p>
                    <h2
                      className="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <span className="color-lightBlue2">Innovation</span> &
                      Creativity
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Innovation and creativity drive the core of Techverse LLC.
                      We thrive on pushing boundaries, exploring new ideas, and
                      transforming visions into reality. Our team of experts is
                      constantly innovating, leveraging the latest skills and
                      creative plans to deliver cutting-edge solutions tailored
                      to your unique requirements. Whether it's developing
                      groundbreaking apps, designing captivating websites, or
                      implementing customized software solutions, we infuse
                      innovation and creativity into every project we undertake.
                    </p>
                    <h2
                      className="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Mission &<span className="color-lightBlue2">Vision</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, our mission is to revolutionize
                      businesses through technology solutions that empower
                      growth and efficiency. We envision a future where
                      innovation meets practicality, where every company can
                      harness the power of technology to achieve its full
                      potential. With a focus on integrity, collaboration, and
                      excellence, we strive to be the preferred partner for
                      businesses seeking transformative digital solutions. Our
                      mission and vision guide us in delivering exceptional
                      value and sustainable success for our clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="techVerse_about_img">
                  <div className="techVerse_about_laptop_img">
                    <img
                      src={aboutimg2}
                      className="about-laptopImg about-page-img2"
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
      </section>
    </div>
  );
};

export default Custom_website;
