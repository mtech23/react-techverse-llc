import React from "react";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";

import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import aboutimg2 from "../../asserts/images/about-img2.webp";
const Custom_website = () => {
  return (
    <div>
      <section class="techVerse_about techVerse_aboutServices2 hoverEffectSec column-reverse-991">
        <div class="icon-container-hover">
          <img
            class="techVerse_about_icon1 animation11"
            src={pinkcapsol}
            alt=""
          />
          {/* <!-- <img
            class="techVerse_about_icon2 animation33"
            src="images/Pill.webp"
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
        </div>
        <div class="techVerse_aboutContent techVerse_aboutContentServices2 customer_gratification width-1600">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="techVerse_about_content services-abbout2">
                  <div class="sec_title">
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Customer
                      <span class="color-lightBlue2">Gratification</span>
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
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">Innovation</span> &
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
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Mission &<span class="color-lightBlue2">Vision</span>
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
              <div class="col-lg-6">
                <div class="techVerse_about_img">
                  <div class="techVerse_about_laptop_img">
                    <img
                      src={aboutimg2}
                      class="about-laptopImg about-page-img2"
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
