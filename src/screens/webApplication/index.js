import React from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";

import Aboutsection from "../../Components/aboutsection";

import Portfolio from "../../Components/Portfolio";
import webaboutimg1es from "../../asserts/images/web-about-imges.webp";

import TrustedPartners from "../../Components/TrustedPartners";

import donatorange from "../../asserts/images/donat-orange.webp";
import greencube from "../../asserts/images/green-cube.webp";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";

import HeroSection from "../../Components/herosection/index";

import Ctnbutton from "../../Components/ctnbutton";
import webaboutimg11 from "../../asserts/images/web-about-img11.webp";
import webapplicationhero1 from "../../asserts/images/web-application-hero_1.webp";

import Aos from "aos";
import "swiper/css";
import TechnologiesUse from "../../Components/technologiesuse";
import Process from "../../Components/Process";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import Testimonials from "../../Components/Testimonials";
import Helmet from "../../Components/Helmet";
const WebApplication = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Expert Custom Web App Development Services | Techverse LLC"
        description="Trust Techverse LLC for all your custom web app development needs. Our experts will provide tailored solutions to help your business succeed online."
        keywords="Custom Web App Development"
      />
      {/* <!-- Inner Hero --> */}

      <HeroSection
        innerbgclass={"inner-bgColor"}
        title={"Future-Proof Your Business "}
        subtitle={"With "}
        title2={"Cutting-Edge Web Apps"}
        tagline={
          "Whether you're looking to streamline operations, enhance customer engagement, or drive efficiency, our web applications are designed to empower your business for the future. From intuitive user interfaces to robust backend systems, we ensure your application not only meets but exceeds expectations."
        }
        // className={"inner_hero"}
        className={"webApp_hero_img"}
        heroimage={webapplicationhero1}
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
      {/* TrustedPartners */}
      <TrustedPartners />
      {/* ecommerce section */}
      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title2="Bespoke Web Solutions
"
        title="Scaling Success"
        subtitle="  With "
        para=" At Techverse LLC, we specialize in crafting cutting-edge web applications that propel your business forward. Our bespoke web solutions are tailored to meet your unique needs, whether you're aiming to streamline operations, enhance user engagement, or scale your digital presence. With our expertise in agile development and meticulous attention to detail, we ensure your web application not only meets but exceeds your expectations. Trust Techverse LLC to transform your ideas into impactful digital realities and accelerate your business growth with innovative web solutions.

"
        WordPress="WordPress"
        PHP="PHP"
        Shopify="Shopify"
        Joomla="Joomla"
        Magneto="Magneto"
        image={webaboutimg11}
        webclassName={"web-app-img11"}
        bulletListItems={["WordPress", "PHP", "Shopify", "Joomla", "Magneto"]}
      />

      <Portfolio
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        classtitle="color-darkBlue"
        title="Empower Your Enterprise "
        subtitle="With"
        title2="Techverse LLC's Scalable Web Development."
        para="Discover limitless possibilities with Techverse LLC's Web Application Development services. Our team of seasoned developers and designers harness cutting-edge technologies to craft robust, scalable web applications that cater precisely to your needs. Whether you're launching a startup or scaling an enterprise, our commitment to innovative design and seamless functionality ensures your web application not only meets but exceeds expectations. Modify your online presence with Techverse LLC and get on a journey toward digital transformation today."
        image={webaboutimg1es}
        chaticon={chaticon}
        phoneicon={phoneicon}
        webaboutimg1={webaboutimg1es}
      />
      <Elevateyourbusiness />
      <Process para="Our web application development process is tailored to deliver exceptional results. We start by carefully understanding your business goals and technical requirements and shaping a detailed plan. Our design phase focuses on creating intuitive interfaces and prototypes that align with your brand." />
      <TechnologiesUse />

      <Testimonials />
      {/* <Development_Process /> */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default WebApplication;
