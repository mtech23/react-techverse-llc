import React from 'react';
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.png";
import Website from '../../Components/Website';
import Aboutsection from '../../Components/aboutsection';
import webapplicationhero from '../../asserts/images/web-application-hero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import pinkcapsolgtom from '../../asserts/images/pink-capsol.png'
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Portfolio from '../../Components/Portfolio'
import webaboutimg1es from "../../asserts/images/web-about-imges.png";
import clutch from "../../asserts/images/clutch.png";
import TrustedPartners from '../../Components/TrustedPartners'
import truspilot from "../../asserts/images/trus-pilot.png";
import digitalmarketing01 from '../../asserts/images/digital-marketing-01.png'

import donatorange from "../../asserts/images/donat-orange.png";
import greencube from "../../asserts/images/green-cube.png";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import Pill from "../../asserts/images/Pill.png";
import bbb from "../../asserts/images/bbb.png";
import donatblue from "../../asserts/images/donat-blue.png";

import ConeBlueGlossy from "../../asserts/images/Cone-Blue-Glossy.png";
import PillBlueGlossy from "../../asserts/images/Pill-Blue-Glossy.png";
import greenCube from "../../asserts/images/green-cube.png";
import pinkCapsol from "../../asserts/images/pink-capsol.png";
// import donatorange from "../../asserts/images/donat-orange.png";
import ecommerceimg01 from "../../asserts/images/ecommerce-img-01.png";
import androidiconw from "../../asserts/images/android-icon-w.png";
import angularicon from "../../asserts/images/angular-icon.png";
import appleicon from "../../asserts/images/apple-icon.png";
import ecommersedevhero from "../../asserts/images/ecommersedevhero.png";
import HeroSection from '../../Components/herosection/index'
import fluttericon from "../../asserts/images/flutter-icon.png";
import reacticon from "../../asserts/images/react-icon.png";


import Aos from "aos";
import 'swiper/css';
import TechnologiesUse from '../../Components/technologiesuse';
import Process from '../../Components/Process';
import Frequentlyaskquestion from '../../Components/frequentlyaskquestion';
import Elevateyourbusiness from '../../Components/elevateyourbusiness';
import Testimonials from '../../Components/Tetimonials';
import Development_Process from '../../Components/Development_Process';
const WebApplication = () => {


  Aos.init();




  return (
    <UserLayout>


      {/* <!-- Inner Hero --> */}

      <HeroSection
        title={"   Future-Proof Your Business "}
        subtitle={"With "}

        title2={"Cutting-Edge Web Apps"}
        tagline={"Whether you're looking to streamline operations, enhance customer engagement, or drive efficiency, our web applications are designed to empower your business for the future. From intuitive user interfaces to robust backend systems, we ensure your application not only meets but exceeds expectations."}
        className={"inner_hero"}
        heroimage={webapplicationhero}

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
        title="Scaling Success" subtitle="  With "
        para=" At Techverse LLC, we specialize in crafting cutting-edge web applications that propel your business forward. Our bespoke web solutions are tailored to meet your unique needs, whether you're aiming to streamline operations, enhance user engagement, or scale your digital presence. With our expertise in agile development and meticulous attention to detail, we ensure your web application not only meets but exceeds your expectations. Trust Techverse LLC to transform your ideas into impactful digital realities and accelerate your business growth with innovative web solutions.

"
        WordPress="WordPress"

        PHP="PHP"
        Shopify="Shopify"
        Joomla="Joomla"
        Magneto="Magneto"
        image={digitalmarketing01}


        bulletListItems={[
          "WordPress",
          "PHP",
          "Shopify",
          "Joomla",

          "Magneto"
        ]}

      />

      <Portfolio pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}

        title=" Empower Your Enterprise" subtitle="With   ."
        title2="Techverse LLC's Scalable Web Development."
        para="Discover limitless possibilities with Techverse LLC's Web Application Development services. Our team of seasoned developers and designers harness cutting-edge technologies to craft robust, scalable web applications that cater precisely to your needs. Whether you're launching a startup or scaling an enterprise, our commitment to innovative design and seamless functionality ensures your web application not only meets but exceeds expectations. Modify your online presence with Techverse LLC and get on a journey toward digital transformation today."
        image={webaboutimg1es}
        chaticon={chaticon}
        phoneicon={phoneicon}
        webaboutimg1={webaboutimg1es}
      />
      <Elevateyourbusiness />
      <Process />
      <TechnologiesUse />

      <Testimonials />
      {/* <Development_Process /> */}






      <Frequentlyaskquestion />



    </UserLayout>
  )
}
export default WebApplication
