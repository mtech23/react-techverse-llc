import React, { useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import "./style.css";

import Aos from "aos";
import "swiper/css";
import Ctnbutton from "../../Components/ctnbutton/index";
import HeroSection from "../../Components/herosection";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import TrustedPartners from "../../Components/TrustedPartners";
import Portfolio from "../../Components/Portfolio";
import pinkcapsol from "../../asserts/images/pink-capsol.webp";
import greencube from "../../asserts/images/green-cube.webp";
import donatorange from "../../asserts/images/donat-orange.webp";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import playstore from "../../asserts/images/play-store.webp";
import appstore from "../../asserts/images/app-store.webp";
import Driving_Exprience from "../../Components/Driving_experience";
import Portfolios from "../../Components/portfolios";

import mobileframe from "../../asserts/images/mobile-frame.webp";

import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";

import Macbook from "../../asserts/images/Macbook.webp";
import mediaimg1 from "../../asserts/images/media-img-1.gif";
import mediaimg2 from "../../asserts/images/media-img-2.webp";
import mediaportfolio1 from "../../asserts/images/media-portfolio-1.webp";
import mediaportfolio2 from "../../asserts/images/media-portfolio-2.webp";
import mediaportfolio3 from "../../asserts/images/media-portfolio-3.webp";
import mediaportfolio4 from "../../asserts/images/media-portfolio-4.webp";
import mediaportfolio5 from "../../asserts/images/media-portfolio-5.webp";
import Testimonials from "../../Components/Testimonials";
import Helmet from "../../Components/Helmet";
import mediaimg3 from "../../asserts/images/media-img-3.webp";
gsap.registerPlugin(MotionPathPlugin);

const Media = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Serving Top IT Services For Media Industry | Techverse LLC"
        description="At Techverse LLC, we specialize in IT services for the media industry. Trust us to deliver cutting-edge technology solutions that drive your success."
        keywords="Media"
      />
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

        // secondaryButtonclassName="btn_with_icon btn_secondary"
      />
      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      {/* <!-- About Sec --> */}

      <Portfolio
        pinkcapsol={pinkcapsol}
        classtitle={" color-white  "}
        newclassName={"media-abt1"}
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
        sportsclassName={"media-img-2"}
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
        titleclassName="color-darkBlue"
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
