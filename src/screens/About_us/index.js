import React, { useEffect, useRef } from "react";

import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { gsap } from "gsap";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import Ctnbutton from "../../Components/ctnbutton/index";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import donatblue from "../../asserts/images/donat-blue.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import Aos from "aos";
import "swiper/css/pagination";
import "swiper/css";
import Process from "../../Components/Process";

import aboutimg1 from "../../asserts/images/about-img1.webp";
import aboutimg2 from "../../asserts/images/about-img2.webp";
import Testimonials from "../../Components/Testimonials";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Website from "../../Components/Website";
import Aboutsection from "../../Components/aboutsection";
import TrustedPartners from "../../Components/TrustedPartners";
import Helmet from "../../Components/Helmet";

gsap.registerPlugin(MotionPathPlugin);

const About_us = () => {
  Aos.init();
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll(".aboutUS_hero");

    sections.forEach((section) => {
      const container = section.querySelector(".centerTitleIcon");

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

  const sectionRef1 = useRef(null);

  useEffect(() => {
    const sections1 = sectionRef1?.current.querySelectorAll(
      ".customer_gratificationSec"
    );

    sections1.forEach((section) => {
      const container = section.querySelector(".cgsIconContainer");

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
    <UserLayout>
      <Helmet
        title="About Us | Techverse LLC | Web & App Development Company"
        description="Learn all about Techverse LLC, a top leading web and mobile app development company in USA. Explore our exceptional offerings and talented team."
        keywords="About"
      />

      <div ref={sectionRef}>
        <section className="inner_hero aboutUS_hero hoverEffectSec">
          <div className="inner-bgColor"></div>
          <div className="width-1600">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="inner_hero_content centered-text">
                    <h1
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Tech Solutions
                      <span className="color-lightBlue1"> For</span> A Connected
                      World
                    </h1>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      At Techverse LLC, we are committed to empowering
                      businesses and individuals with cutting-edge tech
                      solutions that bridge the gap between innovation and
                      everyday life. Our mission is to provide robust, scalable,
                      and future-proof solutions that cater to our clients'
                      diverse needs.
                    </p>
                    <div className="icon-container-hover centerTitleIcon">
                      <img
                        className="center_donatOrange animation11"
                        src={donatorange}
                        alt=""
                      />
                      <img
                        className="center_donatBlue animation11"
                        src={donatblue}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <TrustedPartners />
      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title="What Sets Us"
        subtitle="Apart?"
        para="At Techverse LLC, we pride ourselves on our ability to transform businesses through meticulously crafted digital solutions. What truly distinguishes us is our holistic approach to web design and development. We begin each project with a deep dive into understanding your business objectives, target audience, and market dynamics. This foundational knowledge allows us to create bespoke websites that not only look stunning but also function seamlessly across all devices. Our team of seasoned designers and developers brings years of industry experience, ensuring that every aspect of your website—from user interface design to backend functionality—is optimized for performance and user experience."
        para2="We believe in continuous collaboration, keeping you involved at every stage of the process to ensure our solutions align perfectly with your vision. Moreover, our commitment doesn't end at launch. We provide comprehensive support and maintenance services to ensure your website remains secure, up-to-date, and responsive to evolving industry trends. Whether you're looking to establish a robust online presence, drive conversions, or enhance customer engagement, Techverse LLC is your trusted partner for achieving digital success."
        image={aboutimg1}
        abtImgclassName={"about-page-img1"}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary ",

          // playstore: playstore,
          // appstore: appstore
        }}
      />

      <Website />

      <div ref={sectionRef1}>
        <section className="techVerse_about techVerse_aboutServices2 customer_gratificationSec hoverEffectSec column-reverse-991">
          <div className="icon-container-hover cgsIconContainer">
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
                        <span className="color-lightBlue2">
                          {" "}
                          Gratification{" "}
                        </span>
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        At Techverse LLC, customer gratification is at the heart
                        of everything we do. We believe in not just meeting but
                        exceeding our client's expectations. From concept to
                        execution, we prioritize clear communication,
                        reliability, and a customer-centric approach that builds
                        long-lasting partnerships.
                      </p>
                      <h2
                        className="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <span className="color-lightBlue2"> Innovation </span> &
                        Creativity
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        Innovation and creativity drive the core of Techverse
                        LLC. We thrive on pushing boundaries, exploring new
                        ideas, and transforming visions into reality. Our team
                        of experts is constantly innovating, leveraging the
                        latest skills and creative plans to deliver cutting-edge
                        solutions tailored to your unique requirements. Whether
                        it's developing groundbreaking apps, designing
                        captivating websites, or implementing customized
                        software solutions, we infuse innovation and creativity
                        into every project we undertake.
                      </p>
                      <h2
                        className="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Mission &{" "}
                        <span className="color-lightBlue2"> Vision </span>
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

      <Process para="We proceed to meticulous planning, where we outline the app's features, user interface design, and functionality. Our expert team of developers then takes over, using cutting-edge technologies to build a robust and scalable application tailored to your specifications." />

      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default About_us;
