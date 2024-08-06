import React, { useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";

import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Process from "../../Components/Process";

import webimg01 from "../../asserts/images/web-img-01.webp";

import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import webdevelopmenthero from "../../asserts/images/web-development-hero.webp";
import TrustedPartners from "../../Components/TrustedPartners";
import Helmet from '../../Components/Helmet';
gsap.registerPlugin(MotionPathPlugin);

const WebDevelopment = () => {
  Aos.init();

  return (
    <UserLayout>






      <Helmet
        title="  Build First Impression with Techverse LLC Web Development"
        description="  Web development is a necessity in today’s digital age to perform better among competitors. We build the perfect website for solid business. "
      />
      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Building Websites That Reflect Your Vision"}
        subtitle={"  And "}
        title2={"Goals"}
        tagline={
          "We specialize in creating websites that mirror your unique vision and propel your business goals forward. Our expert team of developers understands that your website is more than just an online presence—it's a reflection of your brand's identity and aspirations. Discover the power of personalized web development with Techverse LLC, where your vision comes to life in every pixel"
        }
        className={"web-development_hero_img"}
        heroimage={webdevelopmenthero}
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
      />
      {/* <!-- Trusted Partners --> */}
      <TrustedPartners />

      {/* <!-- About Sec --> */}

      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title="Innovative Web Solutions"
        subtitle="   For  "
        title2="Your Digital Success"
        para="At Techverse LLC, we specialize in crafting web solutions that propel your business forward. Our expert team of developers blends creativity with practical ability to deliver websites that not only impress but also drive results. Whether you need a smooth company site, an engaging e-commerce platform, or a robust web application, we tailor our web development services to meet your unique goals. Partner with us to leverage cutting-edge technology and strategic insights that enhance your online presence and accelerate your business growth."
        //  CtnbuttonComponent={Ctnbutton}
        //  ctnButtonProps={{
        //    phoneicon: phoneIcon,
        //    calltext: "Call Us",
        //    chaticon: chatIcon,
        //    chatenow: "Chat Now"
        //  }}
        image={webimg01}
        // WordPress="10+ Years of Experience"
        // PHP="Team of 50+ Digital Marketing Experts"
        // Shopify="2k+ Satisfied Clients"
        // Joomla="150+ Ongoing Projects"
        // Magneto="Up to 43% Increase in ROI"

        bulletListItems={["WordPress", "PHP", "Shopify", "Joomla", "Magneto  "]}
      />

      {/* MOBILE APP */}

      <Elevateyourbusiness />

      {/* process we use */}
      <Process para="At Techverse LLC, we believe in making dynamic and effective web solutions tailored to meet your unique business needs. Our web development process integrates cutting-edge technology with creative design, ensuring your digital presence stands out in the competitive landscape." />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default WebDevelopment;
