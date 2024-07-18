import React, { useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import Aboutsection from "../../Components/aboutsection";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import Elevateyourbusiness from "../../Components/elevateyourbusiness";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Process from "../../Components/Process";
import TrustedPartners from "../../Components/TrustedPartners";
import serviceherobg from "../../asserts/images/service-hero-bg.png";
import tpblue from "../../asserts/images/t-p-blue.png";
import Portfolio from "../../Components/Portfolio";
import tpblack from "../../asserts/images/t-p-black.png";
import pinkcapsol from "../../asserts/images/pink-capsol.png";
import greencube from "../../asserts/images/green-cube.png";
import donatorange from "../../asserts/images/donat-orange.png";
import phoneicon from "../../asserts/images/phone-icon.png";
import chaticon from "../../asserts/images/chat-icon.png";
import rapidappimg from "../../asserts/images/rapidapp-img.png";
import highendimg from "../../asserts/images/high-end-img.png";
import Mobileapphero from "../../asserts/images/Mobile-app-hero.png";
import donateWhite from "../../asserts/images/donate-white.png";
import peramidicon from "../../asserts/images/peramid-icon.png";
import phoneicongreen from "../../asserts/images/phone-icon-green.png";
import chaticonblue from "../../asserts/images/chat-icon-blue.png";
import automotiveabt2screens from "../../asserts/images/automotive-abt-2screens.png";
import playstore from "../../asserts/images/play-store.png";
import appstore from "../../asserts/images/app-store.png";
import analysisresporticon from "../../asserts/images/analysis-resport-icon.png";
import uiixicon from "../../asserts/images/ui-ix-icon.png";
import appdevicon from "../../asserts/images/app-dev-icon.png";
import testingandqaicon from "../../asserts/images/testing-and-qa-icon.png";
import businessanalysisicon from "../../asserts/images/business-analysis-icon.png";
import designanddevicon from "../../asserts/images/design-and-dev-icon.png";
import qualityicon from "../../asserts/images/quality-icon.png";
import devandmaintenenceicon from "../../asserts/images/dev-and-maintenence-icon.png";
import automotivedesktop from "../../asserts/images/automotive-desktop.png";
import drivingsecsecreen from "../../asserts/images/driving-sec-secreen.png";
import Driving_Exprience from "../../Components/Driving_experience";
import Portfolios from "../../Components/portfolios";
import reicon1 from "../../asserts/images/re-icon1.png";
import reicon2 from "../../asserts/images/re-icon2.png";
import reicon3 from "../../asserts/images/re-icon3.png";
import reicon4 from "../../asserts/images/re-icon4.png";
import reicon5 from "../../asserts/images/re-icon5.png";
import reicon6 from "../../asserts/images/re-icon6.png";
import reicon7 from "../../asserts/images/re-icon7.png";
import reicon8 from "../../asserts/images/re-icon8.png";
import automotivescreen1 from "../../asserts/images/automotive-screen1.png";
import automotivescreen2 from "../../asserts/images/automotive-screen2.png";
import automotivescreen3 from "../../asserts/images/automotive-screen3.png";
import automotivescreen4 from "../../asserts/images/automotive-screen4.png";
import automotivescreen5 from "../../asserts/images/automotive-screen5.png";
import mobileframe from "../../asserts/images/mobile-frame.webp";
import carbuying from "../../asserts/images/car-buying.png";
import jeffwilson from "../../asserts/images/jeff-wilson.png";
import lllreptile from "../../asserts/images/lll-reptile.png";
import privateastrology from "../../asserts/images/private-astrology.png";

import website1 from "../../asserts/images/website-1.png";
import website2 from "../../asserts/images/website-2.png";
import website3 from "../../asserts/images/website-3.png";
import website4 from "../../asserts/images/website-4.png";

import Macbook from "../../asserts/images/Macbook.png";
import mediaimg1 from "../../asserts/images/media-img-1.gif";
import mediaimg2 from "../../asserts/images/media-img-2.png";
import mediaportfolio1 from "../../asserts/images/media-portfolio-1.png";
import mediaportfolio2 from "../../asserts/images/media-portfolio-2.png";
import mediaportfolio3 from "../../asserts/images/media-portfolio-3.png";
import mediaportfolio4 from "../../asserts/images/media-portfolio-4.png";
import mediaportfolio5 from "../../asserts/images/media-portfolio-5.png";
import Testimonials from "../../Components/Testimonials";
import { Helmet } from "react-helmet";
import mediaimg3 from "../../asserts/images/media-img-3.png";
gsap.registerPlugin(MotionPathPlugin);

const Media = () => {
  <Helmet>
    <meta charSet="utf-8" />
    <title>The Media & Entertainment Application Development Services </title>
    <meta name="Techverse LLC provides a perfect graphical environment and user-friendly Media & Entertainment application development services. Learn" />
  </Helmet>;

  Aos.init();

  // useEffect(() => {
  //     gsap.set(".road", { opacity: 1 });
  //     const circles = gsap.utils.toArray(".ani_cnt .icc");
  //     const tl2 = gsap.timeline({ repeat: 20 });

  //     circles.forEach((circle, i) => {
  //         let start = i / circles.length; // secret sauce for circles
  //         tl2.to(
  //             circle,
  //             {
  //                 motionPath: {
  //                     path: ".mypath",
  //                     align: ".mypath",
  //                     alignOrigin: [0.5, 0.4],
  //                     start: start,
  //                     end: start + 1,
  //                 },
  //                 ease: "none",
  //                 duration: 40,
  //             },
  //             0
  //         );
  //     });
  // }, []);

  return (
    <UserLayout>
      <HeroSection
        classheroimage={"media_bg_custom"}
        title={"Techverse Redefines"}
        subtitle={"Media & Entertainment"}
        title2={"With Innovative Apps"}
        tagline={
          "Techverse LLC offers premier mobile app development solutions for media and entertainment agencies aimed at boosting audience engagement and streamlining operations. Our state-of-the-art apps boost user interaction, improve workflows, and ensure compliance with industry regulations. With customized solutions featuring intuitive interfaces and robust security measures, we improve user experiences and optimize media delivery."
        }
        className={"ecommerceDev_hero_img"}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          playstore: playstore,
          appstore: appstore,
        }}

        // secondaryButtonClass="btn_with_icon btn_secondary"
      />
      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      {/* <!-- About Sec --> */}

      <Portfolio
        pinkcapsol={pinkcapsol}
        classtitle={" color-white  "}
        newClass={"media-abt1"}
        greencube={greencube}
        donatorange={donatorange}
        classpara="color-white"
        title="Enhancing"
        subtitle="  Content And Audience Interaction  "
        title2="With Techverse Solutions"
        para="Techverse LLC specializes in creating mobile applications designed for the media and entertainment sector. Our advanced app development services boost audience engagement, streamline content management, and support efficient media operations. We focus on delivering apps that prioritize efficiency and adhere to industry standards, providing user-friendly interfaces and secure data management."
        image={mediaimg1}
        chaticon={chaticon}
        phoneicon={phoneicon}
        playstore={playstore}
        appstore={appstore}
      />

      {/* <!-- App Development Sec --> */}
      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Secure And Efficient"
        subtitle="Media "
        title2="Apps By Techverse"
        para="At Techverse LLC, we are experts in developing innovative applications that boost workflows, improve user experiences, and ensure regulatory compliance in the media industry. 
      Collaborate with us to create advanced mobile apps customized for your specific needs."
        para1="Gain valuable insights into media metrics and audience behavior to make informed decisions and boost operational efficiency."
        para2="Design user-friendly interfaces that boost the user experience, making navigation easy and engaging for media professionals and audiences."
        para3="From initial concept to deployment, we create robust and secure media applications that streamline workflows and boost content delivery.
      "
        para4="Conduct rigorous testing to ensure reliability, security, and compliance with industry standards, guaranteeing smooth functionality across platforms."
      />

      {/* <!-- Real Estate App Dev --> */}
      <Development_Process
        sportsclass={"media-img-2"}
        image={mediaimg2}
        title="Techverse Paves The Way For The Future Of"
        subtitle="Entertainment"
        para="Techverse LLC's app development for the media and entertainment sector focuses on creating scalable, secure applications designed to meet the needs of audiences and media professionals. We integrate cutting-edge technology into our solutions to boost operational efficiency and service delivery.

"
        para1="We perform detailed analyses to align media app development with organizational goals and audience needs, ensuring effective solutions from start to finish."
        para2="Our team designs intuitive interfaces and develops robust media solutions, leveraging advanced technologies to boost audience engagement and operational efficiency."
        para3="We implement thorough testing to ensure our media apps meet high standards for security, performance, and regulatory compliance, providing reliable and safe user experiences."
        para4="We manage seamless deployment and provide ongoing maintenance to ensure media apps remain secure, efficient, and adaptable to changing demands."
        //   title2="   Mobile App Development Process"
        quality="Quality Assurance"
      />

      <Portfolios
        title=" Media & Entertainment "
        subtitle=" Portfolio"
        para="Our Media & Entertainment portfolio showcases innovative mobile apps and responsive websites that boost media delivery, audience engagement, and operational efficiency worldwide.

"
        image1={mediaportfolio1}
        image2={mediaportfolio2}
        image3={mediaportfolio3}
        image4={mediaportfolio4}
        image5={mediaportfolio5}
        image6={mobileframe}
        image7={website1}
        image8={website2}
        image9={website3}
        image10={website4}
        image11={Macbook}
        classmobileapp="nav-link"
        classwebsite="nav-link"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
      />

      {/* <!-- Mobile App Dev --> */}

      <Driving_Exprience
        titleclass2="color-darkBlue"
        titleclass="color-darkBlue"
        title="Why Choose Our  "
        subtitle="    Media & Entertainment  "
        title2=" App Development Service  "
        para="When you choose Blitz Mobile Apps for your media and entertainment mobile app development needs, you can expect:"
        image={mediaimg3}
        h1="Immersive user experiences"
        h2="Enhanced content distribution"
        h3="Real-time audience engagement"
        h4="Scalable streaming solutions"
        h5="Personalized content recommendations"
        h6="Secure digital rights management"
        h7="Monetization opportunities"
        h8="Integration with social media platforms"
      />

      {/* <!-- Technologies --> */}
      <TechnologiesUse />
      <Testimonials />

      {/* FAQ section */}

      <Frequentlyaskquestion />
    </UserLayout>
  );
};

export default Media;
