import React, { useEffect, useRef } from "react";
import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          eCommerce Development with Remarkable ROI at Techverse LLC{" "}
        </title>
        <meta name=": Techverse LLC brings excellent eCommerce development services at a very affordable rate. A great option for startups with low-cost budgets.  " />
      </Helmet>
      <HeroSection
        innerbgclass={"inner-bgColor"}
        // classheroimage={"inner-ecommerce-bgColor"}
        title={"    Your Gateway"}
        subtitle={"To "}
        title2={"Powerful Online Retail Solutions"}
        tagline={
          "At Techverse LLC, we specialize in creating tailored E-Commerce Development solutions that empower businesses to thrive in the digital marketplace. Whether you're starting a new online store or aiming to enhance an existing platform, our squad of skilled developers and designers is devoted to delivering scalable, secure, and feature-rich solutions perfectly suited to your business."
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
        title="Drive Profitability"
        subtitle=" With "
        title2="Our Seamless E-Commerce Solutions.  "
        para="Our expert team customizes every aspect of your website, from intuitive user interfaces to robust backend systems, ensuring seamless functionality and enhanced customer experiences. Whether you're launching a new venture or upgrading an existing platform, trust Techverse LLC to deliver scalable, secure, and visually stunning E-Commerce websites that maximize conversions and propel your business forward in the digital age."
        image={ecommerceabout1}
        abtImgClass="ecom-dev-img-1"
      />

      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* Revamp Your Online Presence Section*/}
      <div ref={sectionRef}>
        <section class="techVerse_about techVerse_aboutServices2 revEcomDevHover hoverEffectSec">
          <div class="icon-container-hover revEcomDevIconContainer">
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
          <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="sec_title buildStore_sec_title">
                    <h2
                      class="sec_title_head color-lightBlue2"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Revamp Your Online Presence
                      <span class="color-darkBlue"> With </span> Creative
                      E-Commerce Solutions
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="2000"
                    >
                      we specialize in crafting dynamic e-commerce solutions
                      tailored to increase your business. Whether you're
                      starting from scratch or seeking to revamp your online
                      presence, our expert team is here to build, optimize, and
                      launch your e-store with precision and creativity. From
                      seamless user experience design to robust backend
                      development, trust us to transform your vision into a
                      thriving online business. Hold the future of digital
                      commerce with Techverse LLC – where innovation meets
                      e-commerce excellence.
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="techVerse_about_img">
                    <div class="techVerse_about_laptop_img">
                      <img
                        src={ecommerceimg01}
                        class="build-store-img"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="techVerse_about_content services-abbout2">
                    <div class="sec_title">
                      <h2
                        class="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <span class="color-lightBlue2"> Shopify </span>
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        Empower your online business with our Shopify E-Commerce
                        Development services at Techverse LLC. We specialize in
                        crafting tailored Shopify solutions that lift your
                        digital storefront. From seamless integration of custom
                        themes and apps to optimizing user experience and
                        payment gateways, we make sure your Shopify store sets
                        apart in the competitive e-commerce landscape.
                      </p>
                      <h2
                        class="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <span class="color-lightBlue2"> WooCommerce </span>
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        At Techverse LLC, we specialize in WooCommerce
                        E-Commerce Development, providing you with a powerful
                        platform tailored to your business needs. Our team
                        excels in building scalable and customizable WooCommerce
                        stores that maximize your online presence. From
                        implementing responsive design and intuitive navigation
                        to integrating essential plugins and ensuring secure
                        payment gateways, we ensure your WooCommerce store is
                        optimized for success.
                      </p>
                      <h2
                        class="sec_title_head color-darkBlue"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <span class="color-lightBlue2"> Magento </span>
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        Transform your online business with Techverse LLC's
                        Magento E-Commerce Development services. As Magento
                        specialists, we offer comprehensive solutions to create
                        high-performing e-commerce stores that drive growth and
                        profitability. Our expertise spans from custom Magento
                        theme development and extension integration to
                        optimizing performance and enhancing user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* process we use */}

      <Process para="We specialize in transforming your business vision into a robust online presence through our streamlined E-Commerce Development process. We make creativity, technical expertise, and strategic insights to provide personalized services according to your unique business needs and goals." />

      <TechnologiesUse />
      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default EcommerseDevelopment;
