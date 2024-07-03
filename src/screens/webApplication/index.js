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
import webaboutimg1 from "../../asserts/images/web-about-img1.png";
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
const WebApplication = () => {


  Aos.init();




  return (
    <UserLayout>


      {/* <!-- Inner Hero --> */}

      <HeroSection
        title={"Seamless Web Application Development"}
        subtitle={"Solutions"}

        // title2={"Company"}
        tagline={"We help our clients to increase their visibility on all app stores resulting in more downloads and more conversions."}
        heroimage={webapplicationhero}

      />
      {/* TrustedPartners */}
      <TrustedPartners />
      {/* ecommerce section */}
      <Aboutsection
        pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}
        title2="that Accelerate Your Business Growth"
        title="POWERFUL" subtitle="Web Solutions"
        para=" A good website design has the power to bring organic traffic to your business site. At Techverse, we have a team of experienced web developers who work diligently to strengthen businesses by creating top-notch websites for their brands. Our developers have extensive knowledge and expertise in developing websites using all the latest platforms such as:"
        WordPress="WordPress"

        PHP="PHP"
        Shopify="Shopify"
        Joomla="Joomla"
        Magneto="Magneto"
        digitalmarketing01={digitalmarketing01}
      />

      <Portfolio pinkcapsol={pinkcapsol}
        greencube={greencube}
        donatorange={donatorange}

        title="  A Web Application Development Portfolio" subtitle="without bounds."

        para="We have perfected the art of creating custom-made web applications that meet the specific needs of our clients. Whether it's a simple content management system or a complex e-commerce platform, Techverse has the skills and experience to get the job done right."

        digitalmarketing01={digitalmarketing01}
        chaticon={chaticon}
        phoneicon={phoneicon}
        webaboutimg1={webaboutimg1} />

      <Process />
      <Website />


      <TechnologiesUse />
<Elevateyourbusiness/>

<Frequentlyaskquestion/>



    </UserLayout>
  )
}
export default WebApplication
