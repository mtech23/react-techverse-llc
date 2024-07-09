import React, { useEffect, } from 'react';

import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import { loadFull } from 'tsparticles';
import { gsap } from "gsap";
import pinkcapsol from '../../asserts/images/pink-capsol.png';
 
import donatblue from "../../asserts/images/donat-blue.png";
import donatorange from "../../asserts/images/donat-orange.png";
import greencube from "../../asserts/images/green-cube.png";
import Aos from "aos";
import 'swiper/css/pagination';
import 'swiper/css';
import Process from '../../Components/Process';

import aboutimg1 from '../../asserts/images/about-img1.png'
import aboutimg2 from '../../asserts/images/about-img2.png'
import Testimonials from '../../Components/Tetimonials';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Website from '../../Components/Website';
import Aboutsection from '../../Components/aboutsection';
import TrustedPartners from '../../Components/TrustedPartners';
gsap.registerPlugin(MotionPathPlugin);

const About_us = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

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


      <section class="inner_hero aboutUS_hero hoverEffectSec">
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
                    Tech Solutions
                    <span class="color-lightBlue1">For</span> A Connected World
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    At Techverse LLC, we are committed to empowering businesses and individuals with cutting-edge tech solutions that bridge the gap between innovation and everyday life. Our mission is to provide robust, scalable, and future-proof solutions that cater to our clients' diverse needs.
                  </p>
                  <div class="icon-container-hover">
                    <img class="center_donatOrange animation11" src={donatorange} alt=""/>
                      <img class="center_donatBlue animation11" src={donatblue} alt=""/>
                      </div>
                  </div>
                </div>
 
              </div>
            </div>
          </div>
      </section>
      <TrustedPartners />
      <Aboutsection
        title="What Sets Us"
        subtitle="Apart?"
        para="At Techverse LLC, we pride ourselves on our ability to transform businesses through meticulously crafted digital solutions. What truly distinguishes us is our holistic approach to web design and development. We begin each project with a deep dive into understanding your business objectives, target audience, and market dynamics. This foundational knowledge allows us to create bespoke websites that not only look stunning but also function seamlessly across all devices. Our team of seasoned designers and developers brings years of industry experience, ensuring that every aspect of your website—from user interface design to backend functionality—is optimized for performance and user experience."
        para2="We believe in continuous collaboration, keeping you involved at every stage of the process to ensure our solutions align perfectly with your vision. Moreover, our commitment doesn't end at launch. We provide comprehensive support and maintenance services to ensure your website remains secure, up-to-date, and responsive to evolving industry trends. Whether you're looking to establish a robust online presence, drive conversions, or enhance customer engagement, Techverse LLC is your trusted partner for achieving digital success."
        image={aboutimg1}
      />

      <Website />

      <section class="techVerse_about techVerse_aboutServices2 hoverEffectSec column-reverse-991">
        <div class="icon-container-hover">
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
                    >Customer
                      <span class="color-lightBlue2">Gratification</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, customer gratification is at the heart of everything we do. We believe in not just meeting but exceeding our client's expectations. From concept to execution, we prioritize clear communication, reliability, and a customer-centric approach that builds long-lasting partnerships.
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <span class="color-lightBlue2">Innovation</span> & Creativity
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      Innovation and creativity drive the core of Techverse LLC. We thrive on pushing boundaries, exploring new ideas, and transforming visions into reality. Our team of experts is constantly innovating, leveraging the latest skills and creative plans to deliver cutting-edge solutions tailored to your unique requirements. Whether it's developing groundbreaking apps, designing captivating websites, or implementing customized software solutions, we infuse innovation and creativity into every project we undertake.
                    </p>
                    <h2
                      class="sec_title_head color-darkBlue"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >Mission &
                      <span class="color-lightBlue2">Vision</span>
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, our mission is to revolutionize businesses through technology solutions that empower growth and efficiency. We envision a future where innovation meets practicality, where every company can harness the power of technology to achieve its full potential. With a focus on integrity, collaboration, and excellence, we strive to be the preferred partner for businesses seeking transformative digital solutions. Our mission and vision guide us in delivering exceptional value and sustainable success for our clients worldwide.
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


      <Process />

      <Testimonials />


      <Frequentlyaskquestion />





    </UserLayout>
  )
}
export default About_us
