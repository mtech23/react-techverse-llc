import React, { useEffect, useRef } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import Helmet from "../../Components/Helmet";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import TrustedPartners from "../../Components/TrustedPartners";
import Process from "../../Components/Process";
import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import ecommerceimg01 from "../../asserts/images/ecommerce-img-01.webp";
import HeroSection from "../../Components/herosection/index";
import ecommerceabout1 from "../../asserts/images/ecommerce-about-1.webp";
import Ctnbutton from "../../Components/ctnbutton";
import Aboutsection from "../../Components/aboutsection";
import Aos from "aos";
import "swiper/css";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import Ecommercedevelopmenthero from "../../asserts/images/Ecommerce-development-hero.webp";
import Testimonials from "../../Components/Testimonials";
import Packages from "../../Components/Packages";

gsap.registerPlugin(MotionPathPlugin);
const EcommerseDevelopment = () => {
  Aos.init();

  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef?.current.querySelectorAll(".revEcomDevHover");

    sections.forEach((section) => {
      const container = section.querySelector(".revEcomDevIconContainer");

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
        title="Best eCommerce Development Services in USA | Techverse LLC"
        description="Looking for the best eCommerce development services in USA? Techverse LLC offers expert solutions for your online business needs. Visit our website now!"
        keywords="eCommerce Development Services"
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        // classheroimage={"inner-ecommerce-bgColor"}
        title={"    Innovative   "}
        subtitle={"Ecommerce Solutions "}
        title2={"For The Modern Entrepreneur"}
        tagline={
          "Increase your business with Techverse LLC’s eCommerce website development. Our innovative solutions deliver sleek, customizable platforms that empower modern entrepreneurs to excel and grow in the digital marketplace."
        }
        className={"ecommerceDev_hero_img"}
        heroimage={Ecommercedevelopmenthero}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",
        }}
        classheroimage={Ecommercedevelopmenthero}
      />

      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Now",
          primaryButtonClass: "btn_with_icon",
          chaticon: chaticon,
          chatenow: "Chat Now",
          secondaryButtonClass: "btn_with_icon btn_secondary  ",

          // playstore: playstore,
          // appstore: appstore
        }}
        title="Next-Level  "
        subtitle=" Ecommerce "
        title2="Websites Designed For Maximum Impact"
        para="We specialize in creating next-level eCommerce websites designed to deliver maximum impact. Our approach combines cutting-edge technology with user-centric design to create online stores that not only captivate visitors but also drive conversions. By integrating seamless navigation, mobile responsiveness, and optimized checkout processes, we ensure that your eCommerce platform stands out in a crowded marketplace.  "
        image={ecommerceabout1}
        abtImgclassName="ecom-dev-img-1"
      />

      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* Revamp Your Online Presence Section*/}
      <div ref={sectionRef}>
        <section className="techVerse_about techVerse_aboutServices2 revEcomDevHover hoverEffectSec">
          <div className="icon-container-hover revEcomDevIconContainer">
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
          <div className="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="sec_title buildStore_sec_title">
                    <h2
                      className="sec_title_head color-lightBlue2"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Build Your
                      <span className="color-darkBlue"> e-Store </span> With Us
                      And Skyrocket The Success
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      In today’s digital age, a well-designed e-store is crucial
                      for success in the competitive online marketplace. At
                      Techverse LLC, we specialize in creating customized
                      ecommerce solutions tailored to your business needs. Our
                      expert team leverages cutting-edge technologies and
                      innovative design principles to build powerful online
                      stores that attract customers and drive sales.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="techVerse_about_img">
                    <div className="techVerse_about_laptop_img">
                      <img
                        src={ecommerceimg01}
                        className="build-store-img"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="techVerse_about_content services-abbout2">
                    <div className="sec_title">
                      <h2
                        className="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <span className="color-lightBlue2"> Shopify </span>
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        Shopify is renowned for its user-friendly interface and
                        extensive customization options, making it an ideal
                        choice for businesses of all sizes. At Techverse LLC, we
                        excel in Shopify development, crafting bespoke online
                        stores that are both visually stunning and functionally
                        robust.
                      </p>
                      <h2
                        className="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <span className="color-lightBlue2"> WooCommerce </span>
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        WooCommerce provides a seamless way to integrate
                        ecommerce capabilities with your WordPress site,
                        offering a flexible and cost-effective solution for
                        online selling. At Techverse LLC, we specialize in
                        WooCommerce development, crafting tailored online stores
                        that align with your brand’s identity and business
                        objectives.
                      </p>
                      <h2
                        className="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <span className="color-lightBlue2"> Magento </span>
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        Magento is a powerful and flexible ecommerce platform
                        known for its scalability and extensive feature set.
                        Techverse LLC offers top-tier Magento development
                        services, designed to meet the demands of large-scale
                        businesses and complex ecommerce operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Packages />
      {/* process we use */}

      <Process para="We specialize in transforming your business vision into a robust online presence through our streamlined E-Commerce Development process. We make creativity, technical expertise, and strategic insights to provide personalized services according to your unique business needs and goals." />

      <TechnologiesUse />
      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default EcommerseDevelopment;
